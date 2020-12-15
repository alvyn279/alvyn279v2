#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { PersonalWebsiteStack } from '../lib/personal-website-stack';
import { ScaffoldStack } from '../lib/scaffold-stack';

import {
  ADMIN_EMAIL,
  AWS_ACCOUNT,
  AWS_BILLING_MONTHLY_ALARM_THRESHOLD,
  CUSTOM_DOMAIN_NAME,
} from '../constants';

const app = new cdk.App();

const env: cdk.Environment = {
  account: AWS_ACCOUNT,
  region: 'us-east-1',
};

new PersonalWebsiteStack(app, 'S3ReactPersonalWebsite', { env });

new ScaffoldStack(app, 'ScaffoldStack', {
  env,
  domainName: CUSTOM_DOMAIN_NAME,
  billing: {
    adminEmail: ADMIN_EMAIL,
    monthlyThreshold: AWS_BILLING_MONTHLY_ALARM_THRESHOLD,
  },
});

app.synth();
