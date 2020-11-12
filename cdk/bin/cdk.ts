#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { PersonalWebsiteStack } from '../lib/personal-website-stack';
import { AWS_ACCOUNT } from '../constants';
import { ScaffoldStack } from '../lib/scaffold-stack';

const app = new cdk.App();

const env: cdk.Environment = {
  account: AWS_ACCOUNT,
  region: 'us-east-1',
};

new PersonalWebsiteStack(app, 'S3ReactPersonalWebsite', { env });

new ScaffoldStack(app, 'ScaffoldStack', { env });
