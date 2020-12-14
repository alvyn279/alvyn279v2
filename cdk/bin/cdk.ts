#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { PersonalWebsiteStack } from '../lib/personal-website-stack';
import { ScaffoldStack } from '../lib/scaffold-stack';

import { AWS_ACCOUNT } from '../constants';

const app = new cdk.App();

const env: cdk.Environment = {
  account: AWS_ACCOUNT,
  region: 'us-east-1',
};

new PersonalWebsiteStack(app, 'S3ReactPersonalWebsite', { env });

new ScaffoldStack(app, 'ScaffoldStack', { env });

app.synth();
