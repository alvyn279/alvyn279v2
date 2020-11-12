#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import route53 = require('@aws-cdk/aws-route53');
import { PersonalWebsiteStack } from './personal-website-stack'; // eslint-disable-line no-unused-vars
import { CUSTOM_DOMAIN_NAME } from '../constants';

/**
 * Stack defining the scaffolding of AWS resources to be deployed
 * before deploying the {@link PersonalWebsiteStack}.
 */
export class ScaffoldStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create HostedZone with custom domain name
    new route53.HostedZone(this, 'PersonalWebsiteHostedZone', {
      zoneName: CUSTOM_DOMAIN_NAME,
      comment: 'Change nameservers on Namecheap if this HostedZone is replaced/deleted.',
    });
  }
}
