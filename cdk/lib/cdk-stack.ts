import cdk = require('@aws-cdk/core');
import route53 = require('@aws-cdk/aws-route53');
import { SPADeploy } from 'cdk-spa-deploy';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const CUSTOM_DOMAIN_NAME: string = 'alvynle.me';

    // Create HostedZone with custom domain name
    const customHostedZone: route53.HostedZone = new route53.HostedZone(this, 'PersonalWebsiteHostedZone', {
      zoneName: CUSTOM_DOMAIN_NAME,
      comment: 'Change records on Namecheap if this HostedZone is replaced/deleted/.'
    });

    // Create deploy construct
    new SPADeploy(this, 'PersonalWebsiteDeploy', {
       encryptBucket: true 
      })
    .createSiteFromHostedZone({
      zoneName: customHostedZone.zoneName,
      indexDoc: 'index.html',
      websiteFolder: '../website/build'
    });
  }
}
