/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationautoscaling.html
 */
export enum ApplicationAutoscalingAction {

  /**
   * Write - Grants permission to delete a scaling policy
   * @see https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScalingPolicy.html
   */
  DeleteScalingPolicy = "application-autoscaling:DeleteScalingPolicy",

  /**
   * Write - Grants permission to delete a scheduled action
   * @see https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeleteScheduledAction.html
   */
  DeleteScheduledAction = "application-autoscaling:DeleteScheduledAction",

  /**
   * Write - Grants permission to deregister a scalable target
   * @see https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html
   */
  DeregisterScalableTarget = "application-autoscaling:DeregisterScalableTarget",

  /**
   * Read - Grants permission to describe one or more scalable targets in the specified namespace
   * @see https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html
   */
  DescribeScalableTargets = "application-autoscaling:DescribeScalableTargets",

  /**
   * Read - Grants permission to describe a set of scaling activities or all scaling activities in the specified namespace
   * @see https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingActivities.html
   */
  DescribeScalingActivities = "application-autoscaling:DescribeScalingActivities",

  /**
   * Read - Grants permission to describe a set of scaling policies or all scaling policies in the specified namespace
   * @see https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalingPolicies.html
   */
  DescribeScalingPolicies = "application-autoscaling:DescribeScalingPolicies",

  /**
   * Read - Grants permission to describe a set of scheduled actions or all scheduled actions in the specified namespace
   * @see https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScheduledActions.html
   */
  DescribeScheduledActions = "application-autoscaling:DescribeScheduledActions",

  /**
   * Write - Grants permission to create and update a scaling policy for a scalable target
   * @see https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScalingPolicy.html
   */
  PutScalingPolicy = "application-autoscaling:PutScalingPolicy",

  /**
   * Write - Grants permission to create and update a scheduled action for a scalable target
   * @see https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScheduledAction.html
   */
  PutScheduledAction = "application-autoscaling:PutScheduledAction",

  /**
   * Write - Grants permission to register AWS or custom resources as scalable targets with Application Auto Scaling and to update configuration parameters used to manage a scalable target
   * @see https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html
   */
  RegisterScalableTarget = "application-autoscaling:RegisterScalableTarget",

  /**
   * * - Grant all application-autoscaling permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationautoscaling.html
   */
  All = "application-autoscaling:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationautoscaling.html
 */
export const ApplicationAutoscalingResource = {
}

