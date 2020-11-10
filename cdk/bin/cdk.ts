#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkStack } from '../lib/cdk-stack';
import { AWS_ACCOUNT } from '../constants';
import { ScaffoldStack } from '../lib/scaffold-stack';

const app = new cdk.App();

const env: cdk.Environment = { 
    account: AWS_ACCOUNT, 
    region: 'us-east-1',
}

new CdkStack(app, 'S3ReactPersonalWebsite', { env });

new ScaffoldStack(app, 'ScaffoldStack', { env });
