import cdk = require('@aws-cdk/core');
import { SPADeploy } from 'cdk-spa-deploy';
import { CUSTOM_DOMAIN_NAME } from '../constants';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create deploy construct
    new SPADeploy(this, 'PersonalWebsiteDeploy', {
       encryptBucket: true 
      })
    .createSiteFromHostedZone({
      zoneName: CUSTOM_DOMAIN_NAME,
      indexDoc: 'index.html',
      websiteFolder: '../website/build'
    });
  }
}
