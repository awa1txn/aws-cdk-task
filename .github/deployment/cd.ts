import * as cdk from '@aws-cdk/core';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecs_patterns from '@aws-cdk/aws-ecs-patterns';
import * as ec2 from '@aws-cdk/aws-ec2';

export class MyCdkAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a VPC
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: 2 // Default is all AZs in the region
    });

    // Create an ECS cluster
    const cluster = new ecs.Cluster(this, 'MyCluster', { vpc });

    // Create a Fargate service and task definition with Docker image from Docker Hub
    const fargateService = new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'MyFargateService', {
      cluster,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('node:16'), // Use your Node.js Docker image
        containerPort: 8080, // The port your app listens on
      },
    });

    // Output the URL of the load balancer
    new cdk.CfnOutput(this, 'LoadBalancerURL', {
      value: fargateService.loadBalancer.loadBalancerDnsName,
    });
  }
}
