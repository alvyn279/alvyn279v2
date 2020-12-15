import { expect as expectCDK, haveResource, haveResourceLike } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { PersonalWebsiteStack } from '../lib/personal-website-stack';
import { AWS_ACCOUNT } from '../constants';

test('Personal Website Stack setup', () => {
  // GIVEN
  const app = new cdk.App();

  // WHEN
  const stack = new PersonalWebsiteStack(app, 'CdkArticleStack', {
    env: {
      account: AWS_ACCOUNT,
      region: 'us-east-1',
    },
    domainName: 'test.com',
  });

  // THEN
  expectCDK(stack).to(haveResource('AWS::S3::Bucket', {
    WebsiteConfiguration: {
      IndexDocument: 'index.html',
    },
  }));

  expectCDK(stack).to(haveResource('Custom::CDKBucketDeployment'));

  expectCDK(stack).to(haveResourceLike('AWS::S3::BucketPolicy', {
    PolicyDocument: {
      Statement: [
        {
          Action: [
            's3:GetObject*',
            's3:GetBucket*',
            's3:List*',
          ],
          Effect: 'Allow',
        }],
    },
  }));
});
