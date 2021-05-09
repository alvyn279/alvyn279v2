import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import * as route53 from '@aws-cdk/aws-route53';
import { BillingAlarm } from 'aws-cdk-billing-alarm';

import { PersonalWebsiteStack } from './personal-website-stack'; // eslint-disable-line no-unused-vars

export interface BillingPreferences {
  adminEmail: string,
  monthlyThreshold: number,
}

export interface ScaffoldStackProps extends cdk.StackProps {
  domainName: string,
  billing?: BillingPreferences,
}

/**
 * Stack defining the scaffolding of AWS resources to be deployed
 * before deploying the {@link PersonalWebsiteStack}.
 */
export class ScaffoldStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: ScaffoldStackProps) {
    super(scope, id, props);

    // Create HostedZone with custom domain name
    new route53.HostedZone(this, 'PersonalWebsiteHostedZone', {
      zoneName: props.domainName,
      comment: 'Change nameservers on Namecheap if this HostedZone is replaced/deleted.',
    });

    if (props.billing) {
      // Set up billing alarm
      new BillingAlarm(this, 'AWSAccountBillingAlarm', {
        monthlyThreshold: props.billing.monthlyThreshold,
        emails: [props.billing.adminEmail],
      });
    }

    const githubActionsDeployer: iam.IUser = new iam.User(this, 'GitHubActionsDeployer', {
      userName: 'GitHubActionsDeployer',
    });

    const deployPolicyStatement: iam.PolicyStatement = new iam.PolicyStatement({
      actions: [
        's3:*Object*',
        's3:*Bucket*',
        's3:List*',
        's3:Abort*',
        's3:PutPublicAccessBlock',
        's3:PutBucket*',
        's3:*BucketPolicy',
        's3:*Bucket',
        's3:SetBucketEncryption',
        's3:*EncryptionConfiguration',
        'cloudfront:*DistributionWithTags',
        'cloudfront:*AccessIdentity',
        'cloudfront:*Invalidation',
        'cloudfront:*Distribution',
        'cloudfront:*Resource',
        'acm:*Certificate',
        'route53:*Change',
        'route53:*ResourceRecordSets',
        'route53:Update*',
        'route53:*HostedZone',
        'sts:AssumeRole',
        'cloudformation:*',
        'lambda:*',
        'iam:*RolePolicy',
        'iam:*Role',
        'iam:*UserPolicy',
        'kms:*Grant',
        'logs:*Log*',
      ],
      effect: iam.Effect.ALLOW,
      resources: ['*'],
    });

    // Allow GitHub Actions to deploy website to bucket
    githubActionsDeployer.addToPrincipalPolicy(deployPolicyStatement);
  }
}
