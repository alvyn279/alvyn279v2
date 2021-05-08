import * as cdk from '@aws-cdk/core';
import { SPADeploy } from 'cdk-spa-deploy';

export interface PersonalWebsiteStackProps extends cdk.StackProps {
  domainName: string,
  subdomain?: string
}

/**
 * CloudFormation stack of AWS resources that will distribute the
 * React/S3 website.
 */
export class PersonalWebsiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: PersonalWebsiteStackProps) {
    super(scope, id, props);

    // Create sinlge page app construct
    new SPADeploy(this, 'PersonalWebsiteDeploy', {
      encryptBucket: true,
    })
      .createSiteFromHostedZone({
        zoneName: props.domainName,
        indexDoc: 'index.html',
        websiteFolder: '../website/build',
        subdomain: props.subdomain,
      });
  }
}
