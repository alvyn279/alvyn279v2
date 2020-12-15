# S3 React Typescript CDK Application

This is a project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Manual deployment guide

### Pre-reqs

1. Set up CDK constants by changing constants used by the CDK app (AWS account ID, domain name) in `cdk/constants.ts`.


2. Deploy Toolkit Stack for AWS account.

Example error:
```
 ❌  S3ReactPersonalWebsite failed: Error: This stack uses assets, so the toolkit stack must be deployed to the environment (Run "cdk bootstrap aws://459641237997/us-east-1")
```

3. Deploy `ScaffoldStack` to init required AWS resources with the following command:
`
npm run cdk deploy ScaffoldStack
`

### Modifying website

1. Modify React code
2. Run build from root directory for `cdk` and `website`
3. Run:
```
npm run cdk deploy S3ReactPersonalWebsite
```

## GitHub Actions Deployment

Automatic deployments to S3 bucket when a push is made to `main`.

### Pre-reqs

You must first deploy the CloudFormation stacks (scaffold and website in that order) once with an admin AWS user. 
I use environment variables and AWS profiles for credentials resolution.

The CDK application will generate an IAM User with least-privileged access to the necessary AWS deployment resources.

1. You can generate access/private key pair for that user on AWS console
2. Add these as `secrets` in the GitHub repo settings under

        `AWS_ACCESS_KEY_ID`
        `AWS_SECRET_ACCESS_KEY`

## AWS Billing Alarms

The Scaffold stack exposes an API to enable billing alarms. You will be emailed when your estimated charges exceed a certain amount.

### Pre-reqs

Enable billing alerts as [per documentation steps](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html#turning_on_billing_metrics).

### Enable billing alarms

You can implement the `billing` attribute of `ScaffoldStackProps` to create this alarm.


## Useful commands

 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
