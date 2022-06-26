/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscomputeoptimizer.html
 */
export enum ComputeOptimizerAction {

  /**
   * Write - Grants permission to delete recommendation preferences
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_DeleteRecommendationPreferences.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `compute-optimizer:ResourceType`: Filters access by the resource type ({@link https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteRecommendationPreferences = "compute-optimizer:DeleteRecommendationPreferences",

  /**
   * List - Grants permission to view the status of recommendation export jobs
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_DescribeRecommendationExportJobs.html
   */
  DescribeRecommendationExportJobs = "compute-optimizer:DescribeRecommendationExportJobs",

  /**
   * Write - Grants permission to export AutoScaling group recommendations to S3 for the provided accounts
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportAutoScalingGroupRecommendations.html
   */
  ExportAutoScalingGroupRecommendations = "compute-optimizer:ExportAutoScalingGroupRecommendations",

  /**
   * Write - Grants permission to export EBS volume recommendations to S3 for the provided accounts
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportEBSVolumeRecommendations.html
   */
  ExportEBSVolumeRecommendations = "compute-optimizer:ExportEBSVolumeRecommendations",

  /**
   * Write - Grants permission to export EC2 instance recommendations to S3 for the provided accounts
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportEC2InstanceRecommendations.html
   */
  ExportEC2InstanceRecommendations = "compute-optimizer:ExportEC2InstanceRecommendations",

  /**
   * Write - Grants permission to export Lambda function recommendations to S3 for the provided accounts
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_ExportLambdaFunctionRecommendations.html
   */
  ExportLambdaFunctionRecommendations = "compute-optimizer:ExportLambdaFunctionRecommendations",

  /**
   * List - Grants permission to get recommendations for the provided AutoScaling groups
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetAutoScalingGroupRecommendations.html
   */
  GetAutoScalingGroupRecommendations = "compute-optimizer:GetAutoScalingGroupRecommendations",

  /**
   * List - Grants permission to get recommendations for the provided EBS volumes
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEBSVolumeRecommendations.html
   */
  GetEBSVolumeRecommendations = "compute-optimizer:GetEBSVolumeRecommendations",

  /**
   * List - Grants permission to get recommendations for the provided EC2 instances
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2InstanceRecommendations.html
   */
  GetEC2InstanceRecommendations = "compute-optimizer:GetEC2InstanceRecommendations",

  /**
   * List - Grants permission to get the recommendation projected metrics of the specified instance
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEC2RecommendationProjectedMetrics.html
   */
  GetEC2RecommendationProjectedMetrics = "compute-optimizer:GetEC2RecommendationProjectedMetrics",

  /**
   * Read - Grants permission to get recommendation preferences that are in effect
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEffectiveRecommendationPreferences.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `compute-optimizer:ResourceType`: Filters access by the resource type ({@link https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetEffectiveRecommendationPreferences = "compute-optimizer:GetEffectiveRecommendationPreferences",

  /**
   * List - Grants permission to get the enrollment status for the specified account
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEnrollmentStatus.html
   */
  GetEnrollmentStatus = "compute-optimizer:GetEnrollmentStatus",

  /**
   * List - Grants permission to get the enrollment statuses for member accounts of the organization
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetEnrollmentStatusesForOrganization.html
   */
  GetEnrollmentStatusesForOrganization = "compute-optimizer:GetEnrollmentStatusesForOrganization",

  /**
   * List - Grants permission to get recommendations for the provided Lambda functions
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetLambdaFunctionRecommendations.html
   */
  GetLambdaFunctionRecommendations = "compute-optimizer:GetLambdaFunctionRecommendations",

  /**
   * Read - Grants permission to get recommendation preferences
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetRecommendationPreferences.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `compute-optimizer:ResourceType`: Filters access by the resource type ({@link https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetRecommendationPreferences = "compute-optimizer:GetRecommendationPreferences",

  /**
   * List - Grants permission to get the recommendation summaries for the specified account(s)
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_GetRecommendationSummaries.html
   */
  GetRecommendationSummaries = "compute-optimizer:GetRecommendationSummaries",

  /**
   * Write - Grants permission to put recommendation preferences
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_PutRecommendationPreferences.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `compute-optimizer:ResourceType`: Filters access by the resource type ({@link https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutRecommendationPreferences = "compute-optimizer:PutRecommendationPreferences",

  /**
   * Write - Grants permission to update the enrollment status
   * @see https://docs.aws.amazon.com/compute-optimizer/latest/APIReference/API_UpdateEnrollmentStatus.html
   */
  UpdateEnrollmentStatus = "compute-optimizer:UpdateEnrollmentStatus",

  /**
   * * - Grant all compute-optimizer permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscomputeoptimizer.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `compute-optimizer:ResourceType`: Filters access by the resource type ({@link https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "compute-optimizer:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscomputeoptimizer.html
 */
export const ComputeOptimizerResource = {
}

