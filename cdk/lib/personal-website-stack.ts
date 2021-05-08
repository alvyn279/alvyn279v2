import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import { SPADeploy } from 'cdk-spa-deploy';

export interface PersonalWebsiteStackProps extends cdk.StackProps {
  domainName: string,
}

/**
 * CloudFormation stack of AWS resources that will distribute the
 * React/S3 website.
 */
export class PersonalWebsiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: PersonalWebsiteStackProps) {
    super(scope, id, props);

    // Create deploy construct
    new SPADeploy(this, 'PersonalWebsiteDeploy', {
      encryptBucket: true,
    })
      .createSiteFromHostedZone({
        zoneName: props.domainName,
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
        's3:PutPublicAccessBlock',
        's3:PutBucket*',
        's3:CreateBucket',
        'cloudfront:CreateDistributionWithTags',
        'cloudfront:GetInvalidation',
        'cloudfront:CreateInvalidation',
        'acm:RequestCertificate',
        'acm:DescribeCertificate',
        'acm:DeleteCertificate',
        'route53:GetChange',
        'route53:ChangeResourceRecordSets',
        'route53:Update*',
        'sts:AssumeRole',
        'cloudformation:*',
        'lambda:*',
        'iam:AttachRolePolicy',
        'iam:CreateRole',
        'iam:GetRole',
        'iam:PutUserPolicy',
        'iam:PutRolePolicy',
        'kms:CreateGrant',
        'logs:CreateLog*',
      ],
      effect: iam.Effect.ALLOW,
      resources: ['*'],
    });

    // Allow GitHub Actions to deploy website to bucket
    githubActionsDeployer.addToPrincipalPolicy(deployPolicyStatement);
  }
}
