import cdk = require('@aws-cdk/core');
import iam = require('@aws-cdk/aws-iam');
import { SPADeploy } from 'cdk-spa-deploy';

import { CUSTOM_DOMAIN_NAME } from '../constants';

/**
 * CloudFormation stack of AWS resources that will distribute the
 * React/S3 website.
 */
export class PersonalWebsiteStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create deploy construct
    new SPADeploy(this, 'PersonalWebsiteDeploy', {
      encryptBucket: true,
    })
      .createSiteFromHostedZone({
        zoneName: CUSTOM_DOMAIN_NAME,
        indexDoc: 'index.html',
        websiteFolder: '../website/build',
      });

    const githubActionsDeployer: iam.IUser = new iam.User(this, 'GitHubActionsDeployer', {
      userName: 'GitHubActionsDeployer',
    });

    const deployPolicyStatement: iam.PolicyStatement = new iam.PolicyStatement({
      actions: [
        's3:GetObject*',
        's3:GetBucket*',
        's3:List*',
        's3:DeleteObject*',
        's3:PutObject*',
        's3:Abort*',
        'cloudfront:GetInvalidation',
        'cloudfront:CreateInvalidation',
        'acm:RequestCertificate',
        'acm:DescribeCertificate',
        'acm:DeleteCertificate',
        'route53:GetChange',
        'route53:changeResourceRecordSets',
        'sts:AssumeRole',
        'cloudformation:*',
      ],
      effect: iam.Effect.ALLOW,
      resources: ['*'],
    });

    // Allow GitHub Actions to deploy website to bucket
    githubActionsDeployer.addToPrincipalPolicy(deployPolicyStatement);
  }
}
