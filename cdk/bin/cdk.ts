#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkStack } from '../lib/cdk-stack';

const AWS_ACCOUNT = '459641237997';

const app = new cdk.App();

new CdkStack(app, 'S3ReactPersonalWebsite', { 
    env: { 
      account: AWS_ACCOUNT, 
      region: 'us-east-1',
  }
});
