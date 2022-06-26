/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsautoscaling.html
 */
export enum AutoscalingPlansAction {

  /**
   * Write - Creates a scaling plan.
   * @see https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_CreateScalingPlan.html
   */
  CreateScalingPlan = "autoscaling-plans:CreateScalingPlan",

  /**
   * Write - Deletes the specified scaling plan.
   * @see https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DeleteScalingPlan.html
   */
  DeleteScalingPlan = "autoscaling-plans:DeleteScalingPlan",

  /**
   * Read - Describes the scalable resources in the specified scaling plan.
   * @see https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DescribeScalingPlanResources.html
   */
  DescribeScalingPlanResources = "autoscaling-plans:DescribeScalingPlanResources",

  /**
   * Read - Describes the specified scaling plans or all of your scaling plans.
   * @see https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_DescribeScalingPlans.html
   */
  DescribeScalingPlans = "autoscaling-plans:DescribeScalingPlans",

  /**
   * Read - Retrieves the forecast data for a scalable resource.
   * @see https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_GetScalingPlanResourceForecastData.html
   */
  GetScalingPlanResourceForecastData = "autoscaling-plans:GetScalingPlanResourceForecastData",

  /**
   * Write - Updates a scaling plan.
   * @see https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_UpdateScalingPlan.html
   */
  UpdateScalingPlan = "autoscaling-plans:UpdateScalingPlan",

  /**
   * * - Grant all autoscaling-plans permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsautoscaling.html
   */
  All = "autoscaling-plans:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsautoscaling.html
 */
export const AutoscalingPlansResource = {
}

