/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudwatchrum.html
 */
export enum RumAction {

  /**
   * Write - Grants permission to create appMonitor metadata
   * @see https://docs.aws.amazon.com/rum/latest/APIReference/API_CreateAppMonitor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RumResource.appMonitorResource `RumResource.appMonitorResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAppMonitor = "rum:CreateAppMonitor",

  /**
   * Write - Grants permission to delete appMonitor metadata
   * @see https://docs.aws.amazon.com/rum/latest/APIReference/API_DeleteAppMonitor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RumResource.appMonitorResource `RumResource.appMonitorResource`} 
   */
  DeleteAppMonitor = "rum:DeleteAppMonitor",

  /**
   * Read - Grants permission to get appMonitor metadata
   * @see https://docs.aws.amazon.com/rum/latest/APIReference/API_GetAppMonitor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RumResource.appMonitorResource `RumResource.appMonitorResource`} 
   */
  GetAppMonitor = "rum:GetAppMonitor",

  /**
   * Read - Grants permission to get appMonitor data
   * @see https://docs.aws.amazon.com/rum/latest/APIReference/API_GetAppMonitorData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RumResource.appMonitorResource `RumResource.appMonitorResource`} 
   */
  GetAppMonitorData = "rum:GetAppMonitorData",

  /**
   * List - Grants permission to list appMonitors metadata
   * @see https://docs.aws.amazon.com/rum/latest/APIReference/API_ListAppMonitors.html
   */
  ListAppMonitors = "rum:ListAppMonitors",

  /**
   * Read - Grants permission to list tags for resources
   * @see https://docs.aws.amazon.com/rum/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "rum:ListTagsForResource",

  /**
   * Write - Grants permission to put RUM events for appmonitor
   * @see https://docs.aws.amazon.com/rum/latest/APIReference/API_PutRumEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RumResource.appMonitorResource `RumResource.appMonitorResource`} 
   */
  PutRumEvents = "rum:PutRumEvents",

  /**
   * Tagging - Grants permission to tag resources
   * @see https://docs.aws.amazon.com/rum/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "rum:TagResource",

  /**
   * Tagging - Grants permission to untag resources
   * @see https://docs.aws.amazon.com/rum/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "rum:UntagResource",

  /**
   * Write - Grants permission to update appmonitor metadata
   * @see https://docs.aws.amazon.com/rum/latest/APIReference/API_UpdateAppMonitor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RumResource.appMonitorResource `RumResource.appMonitorResource`} 
   */
  UpdateAppMonitor = "rum:UpdateAppMonitor",

  /**
   * * - Grant all rum permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudwatchrum.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RumResource.appMonitorResource `RumResource.appMonitorResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "rum:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudwatchrum.html
 */
export const RumResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_AppMonitor.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource that make the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  appMonitorResource: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:rum:${options.region || '*'}:${options.account || '*'}:appmonitor/${options.name || '*'}`,
}

