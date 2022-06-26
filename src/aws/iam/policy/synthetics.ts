/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchsynthetics.html
 */
export enum SyntheticsAction {

  /**
   * Write - Grants permission to create a canary
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateCanary.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCanary = "synthetics:CreateCanary",

  /**
   * Write - Grants permission to delete a canary. Amazon Synthetics deletes all the resources except for the Lambda function and the CloudWatch Alarms if you created one
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SyntheticsResource.canary `SyntheticsResource.canary`} 
   */
  DeleteCanary = "synthetics:DeleteCanary",

  /**
   * Read - Grants permission to list information of all canaries
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `synthetics:Names`: Filters access based on the name of the canary ({@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DescribeCanaries = "synthetics:DescribeCanaries",

  /**
   * Read - Grants permission to list information about the last test run associated with all canaries
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanariesLastRun.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `synthetics:Names`: Filters access based on the name of the canary ({@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DescribeCanariesLastRun = "synthetics:DescribeCanariesLastRun",

  /**
   * Read - Grants permission to list information about Synthetics canary runtime versions
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeRuntimeVersions.html
   */
  DescribeRuntimeVersions = "synthetics:DescribeRuntimeVersions",

  /**
   * Read - Grants permission to get a canary details
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SyntheticsResource.canary `SyntheticsResource.canary`} 
   */
  GetCanary = "synthetics:GetCanary",

  /**
   * Read - Grants permission to list information about all the test runs associated with a canary
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SyntheticsResource.canary `SyntheticsResource.canary`} 
   */
  GetCanaryRuns = "synthetics:GetCanaryRuns",

  /**
   * Read - Grants permission to list all tags and values associated with a canary
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SyntheticsResource.canary `SyntheticsResource.canary`} 
   */
  ListTagsForResource = "synthetics:ListTagsForResource",

  /**
   * Write - Grants permission to start a canary, so that Amazon CloudWatch Synthetics starts monitoring a website
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StartCanary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SyntheticsResource.canary `SyntheticsResource.canary`} 
   */
  StartCanary = "synthetics:StartCanary",

  /**
   * Write - Grants permission to stop a canary
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_StopCanary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SyntheticsResource.canary `SyntheticsResource.canary`} 
   */
  StopCanary = "synthetics:StopCanary",

  /**
   * Tagging - Grants permission to add one or more tags to a canary
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SyntheticsResource.canary `SyntheticsResource.canary`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "synthetics:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from a canary
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SyntheticsResource.canary `SyntheticsResource.canary`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "synthetics:UntagResource",

  /**
   * Write - Grants permission to update a canary
   * @see https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SyntheticsResource.canary `SyntheticsResource.canary`} 
   */
  UpdateCanary = "synthetics:UpdateCanary",

  /**
   * * - Grant all synthetics permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchsynthetics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SyntheticsResource.canary `SyntheticsResource.canary`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `synthetics:Names`: Filters access based on the name of the canary ({@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "synthetics:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchsynthetics.html
 */
export const SyntheticsResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  canary: (options: Partial<{partition: string, region: string, account: string, canaryName: string}> = {}) => `arn:${options.partition || '*'}:synthetics:${options.region || '*'}:${options.account || '*'}:canary:${options.canaryName || '*'}`,
}

