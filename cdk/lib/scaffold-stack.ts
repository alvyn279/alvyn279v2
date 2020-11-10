#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import route53 = require('@aws-cdk/aws-route53');
import { CUSTOM_DOMAIN_NAME } from '../constants';

export class ScaffoldStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      // Create HostedZone with custom domain name
    new route53.HostedZone(this, 'PersonalWebsiteHostedZone', {
        zoneName: CUSTOM_DOMAIN_NAME,
        comment: 'Change nameservers on Namecheap if this HostedZone is replaced/deleted.'
      });
    }
  }

