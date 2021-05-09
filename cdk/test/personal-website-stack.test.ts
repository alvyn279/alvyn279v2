import { expect as expectCDK, haveResource, haveResourceLike } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { PersonalWebsiteStack } from '../lib/personal-website-stack';

describe('Personal website stack', () => {
  it('should generate s3 bucket', () => {
    // GIVEN
    const app = new cdk.App();

    // WHEN
    const stack = new PersonalWebsiteStack(app, 'S3WebsiteStack', {
      env: {
        account: 'random',
        region: 'us-east-1',
      },
      domainName: 'test.com',
    });

    // THEN
    expectCDK(stack).to(haveResourceLike('AWS::S3::Bucket', {
      BucketEncryption: {
        ServerSideEncryptionConfiguration: [
          {
            ServerSideEncryptionByDefault: {
              SSEAlgorithm: 'AES256',
            },
          },
        ],
      },
      WebsiteConfiguration: {
        IndexDocument: 'index.html',
      },
    }));

    expectCDK(stack).to(haveResource('Custom::CDKBucketDeployment'));
  });

  it('should add subdomain record set', () => {
    // GIVEN
    const app = new cdk.App();

    // WHEN
    const stack = new PersonalWebsiteStack(app, 'S3WebsiteStack', {
      env: {
        account: 'random',
        region: 'us-east-1',
      },
      domainName: 'test.com',
      subdomain: 'sub',
    });

    expectCDK(stack).to(haveResourceLike('AWS::Route53::RecordSet', {
      Name: 'sub.test.com.',
    }));
  });
});
