# S3 React Typescript CDK Application

This project uses CDK to set up AWS infrastructure programatically.

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

**You must first deploy the CloudFormation stacks (scaffold and website in that order) once with an admin AWS user**. 
I use environment variables and AWS profiles for credentials resolution.

The CDK application will generate an [IAM User with least-privileged access](#design-of-least-privileged-user) to the necessary AWS deployment resources.


1. You can generate access/private key pair for this user on AWS console
2. Add these as `secrets` in the GitHub repo settings under

        `AWS_ACCESS_KEY_ID`
        `AWS_SECRET_ACCESS_KEY`

## Design of least privileged user

The `GitHubActionsDeployer` IAM user should have all the necessary permissions to deploy the application from scratch (and update it).

After an initial deploy with an admin account, AWS CloudTrail was used to retrieve all the actions necessary during `cdk deploy`. There is almost a one-to-one mapping between resource actions and the events recorded on CloudTrail.

If ever an access is denied, just add the missing permission to the `GitHubActionsDeployer`'s policy statement in `lib/personal-website-stack.ts`.


## AWS Billing Alarm

The Scaffold stack exposes an API to enable billing alarms. You will be emailed when your estimated charges exceed a certain amount.

### Pre-reqs

Follow pre-req instructions at [aws-cdk-billing-alarm](https://github.com/alvyn279/aws-cdk-billing-alarm)

### Creating billing alarm

You can implement the `billing` attribute of `ScaffoldStackProps` to create this alarm.


## Useful commands

 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
