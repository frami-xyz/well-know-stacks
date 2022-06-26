/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html
 */
export enum IotfleethubAction {

  /**
   * Write - Grants permission to create an application
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApplication = "iotfleethub:CreateApplication",

  /**
   * Write - Grants permission to delete an application
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_DeleteApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleethubResource.application `IotfleethubResource.application`} 
   */
  DeleteApplication = "iotfleethub:DeleteApplication",

  /**
   * Read - Grants permission to describe an application
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_DescribeApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleethubResource.application `IotfleethubResource.application`} 
   */
  DescribeApplication = "iotfleethub:DescribeApplication",

  /**
   * List - Grants permission to list all applications
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_ListApplications.html
   */
  ListApplications = "iotfleethub:ListApplications",

  /**
   * Read - Grants permission to list all tags for a resource
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleethubResource.application `IotfleethubResource.application`} 
   */
  ListTagsForResource = "iotfleethub:ListTagsForResource",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleethubResource.application `IotfleethubResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "iotfleethub:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleethubResource.application `IotfleethubResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "iotfleethub:UntagResource",

  /**
   * Write - Grants permission to update an application
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_UpdateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleethubResource.application `IotfleethubResource.application`} 
   */
  UpdateApplication = "iotfleethub:UpdateApplication",

  /**
   * * - Grant all iotfleethub permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleethubResource.application `IotfleethubResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "iotfleethub:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html
 */
export const IotfleethubResource = {

  /**
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_ApplicationSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  application: (options: Partial<{partition: string, region: string, account: string, applicationId: string}> = {}) => `arn:${options.partition || '*'}:iotfleethub:${options.region || '*'}:${options.account || '*'}:application/${options.applicationId || '*'}`,
}

