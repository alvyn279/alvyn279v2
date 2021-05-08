import * as cdk from '@aws-cdk/core';
import {
  ADMIN_EMAIL,
  AWS_ACCOUNT,
  AWS_BILLING_MONTHLY_ALARM_THRESHOLD,
  CUSTOM_DOMAIN_NAME,
  HAS_DEVELOPMENT_ENV,
} from '../constants';
import { PersonalWebsiteStack } from '../lib/personal-website-stack';
import { ScaffoldStack } from '../lib/scaffold-stack';

const app = new cdk.App();

const env: cdk.Environment = {
  account: AWS_ACCOUNT,
  region: 'us-east-1',
};

// Sets up hosted zone and alarm
new ScaffoldStack(app, 'ScaffoldStack', {
  env,
  domainName: CUSTOM_DOMAIN_NAME,
  billing: {
    adminEmail: ADMIN_EMAIL,
    monthlyThreshold: AWS_BILLING_MONTHLY_ALARM_THRESHOLD,
  },
});

new PersonalWebsiteStack(app, 'S3ReactPersonalWebsite', {
  env,
  domainName: CUSTOM_DOMAIN_NAME,
});

if (HAS_DEVELOPMENT_ENV) {
  new PersonalWebsiteStack(app, 'S3ReactPersonalWebsiteDev', {
    env,
    domainName: CUSTOM_DOMAIN_NAME,
    subdomain: 'dev',
  });
}

app.synth();
