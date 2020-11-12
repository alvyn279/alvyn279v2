import { SPADeploy } from 'cdk-spa-deploy';
import cdk = require('@aws-cdk/core');
import { CUSTOM_DOMAIN_NAME } from '../constants';

/**
 * CloudFormation stack of AWS resources that will distribute the
 * React/S3 website.
 */
export class PersonalWebsiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create deploy construct
    new SPADeploy(this, 'PersonalWebsiteDeploy', {
      encryptBucket: true,
    })
      .createSiteFromHostedZone({
        zoneName: CUSTOM_DOMAIN_NAME,
        indexDoc: 'index.html',
        websiteFolder: '../website/build',
      });
  }
}
