/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonresourcegrouptaggingapi.html
 */
export enum TagAction {

  /**
   * Read - Grants permission to describe the status of the StartReportCreation operation
   * @see https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_DescribeReportCreation.html
   */
  DescribeReportCreation = "tag:DescribeReportCreation",

  /**
   * Read - Grants permission to retrieve a summary of how many resources are noncompliant with their effective tag policies
   * @see https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetComplianceSummary.html
   */
  GetComplianceSummary = "tag:GetComplianceSummary",

  /**
   * Read - Grants permission to return tagged or previously tagged resources in the specified AWS Region for the calling account
   * @see https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html
   */
  GetResources = "tag:GetResources",

  /**
   * Read - Grants permission to returns tag keys currently in use in the specified AWS Region for the calling account
   * @see https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetTagKeys.html
   */
  GetTagKeys = "tag:GetTagKeys",

  /**
   * Read - Grants permission to return tag values for the specified key that are used in the specified AWS Region for the calling account
   * @see https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetTagValues.html
   */
  GetTagValues = "tag:GetTagValues",

  /**
   * Write - Grants permission to start generating a report listing all tagged resources in accounts across your organization, and whether each resource is compliant with the effective tag policy
   * @see https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_StartReportCreation.html
   */
  StartReportCreation = "tag:StartReportCreation",

  /**
   * Tagging - Grants permission to apply one or more tags to the specified resources
   * @see https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html
   */
  TagResources = "tag:TagResources",

  /**
   * Tagging - Grants permission to remove the specified tags from the specified resources
   * @see https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_UntagResources.html
   */
  UntagResources = "tag:UntagResources",

  /**
   * * - Grant all tag permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonresourcegrouptaggingapi.html
   */
  All = "tag:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonresourcegrouptaggingapi.html
 */
export const TagResource = {
}

