import * as cdk from '@aws-cdk/core';
import * as sns from '@aws-cdk/aws-sns';
import * as sub from '@aws-cdk/aws-sns-subscriptions';
import * as cw from '@aws-cdk/aws-cloudwatch';
import * as cwa from '@aws-cdk/aws-cloudwatch-actions';
import * as route53 from '@aws-cdk/aws-route53';

import { PersonalWebsiteStack } from './personal-website-stack'; // eslint-disable-line no-unused-vars

export interface BillingPreferences {
  adminEmail: string,
  monthlyThreshold: number,
}

export interface ScaffoldStackProps extends cdk.StackProps {
  domainName: string,
  billing?: BillingPreferences,
}

/**
 * Stack defining the scaffolding of AWS resources to be deployed
 * before deploying the {@link PersonalWebsiteStack}.
 */
export class ScaffoldStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: ScaffoldStackProps) {
    super(scope, id, props);

    // Create HostedZone with custom domain name
    new route53.HostedZone(this, 'PersonalWebsiteHostedZone', {
      zoneName: props.domainName,
      comment: 'Change nameservers on Namecheap if this HostedZone is replaced/deleted.',
    });

    if (props.billing) {
      // Set up billing alarm
      const billingAlarmTopic: sns.ITopic = new sns.Topic(this, 'WebsiteBillingAlarmNotificationTopic', {
        topicName: 'WebsiteBillingAlarmNotificationTopic',
      });

      billingAlarmTopic.addSubscription(new sub.EmailSubscription(props.billing.adminEmail));

      const billingAlarmMetric: cw.Metric = new cw.Metric({
        label: 'charges',
        metricName: 'EstimatedCharges',
        namespace: 'AWS/Billing',
      }).with({ // Evaluates the metric every [props.period] minutes
        period: cdk.Duration.minutes(20),
      });

      const billingAlarm: cw.Alarm = new cw.Alarm(this, 'WebsiteBillingAlarm', {
        alarmDescription: 'Maximal monthly billing cost alarm.',
        comparisonOperator: cw.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
        evaluationPeriods: 1,
        metric: billingAlarmMetric,
        threshold: props.billing.monthlyThreshold,
      });

      const alarmAction: cwa.SnsAction = new cwa.SnsAction(billingAlarmTopic);

      billingAlarm.addAlarmAction(alarmAction);
    }
  }
}
