import * as cdk from '@aws-cdk/core';
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
  }
}
