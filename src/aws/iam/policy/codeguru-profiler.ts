/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodeguruprofiler.html
 */
export enum CodeguruProfilerAction {

  /**
   * Write - Grants permission to add up to 2 topic ARNs of existing AWS SNS topics to publish notifications
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AddNotificationChannels.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  AddNotificationChannels = "codeguru-profiler:AddNotificationChannels",

  /**
   * List - Grants permission to get the frame metric data for a Profiling Group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_BatchGetFrameMetricData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  BatchGetFrameMetricData = "codeguru-profiler:BatchGetFrameMetricData",

  /**
   * Write - Grants permission for an agent to register with the orchestration service and retrieve profiling configuration information
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  ConfigureAgent = "codeguru-profiler:ConfigureAgent",

  /**
   * Write - Grants permission to create a profiling group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_CreateProfilingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateProfilingGroup = "codeguru-profiler:CreateProfilingGroup",

  /**
   * Write - Grants permission to delete a profiling group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DeleteProfilingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  DeleteProfilingGroup = "codeguru-profiler:DeleteProfilingGroup",

  /**
   * Read - Grants permission to describe a profiling group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DescribeProfilingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  DescribeProfilingGroup = "codeguru-profiler:DescribeProfilingGroup",

  /**
   * Read - Grants permission to get a summary of recent recommendations for each profiling group in the account
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetFindingsReportAccountSummary.html
   */
  GetFindingsReportAccountSummary = "codeguru-profiler:GetFindingsReportAccountSummary",

  /**
   * Read - Grants permission to get the notification configuration
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetNotificationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  GetNotificationConfiguration = "codeguru-profiler:GetNotificationConfiguration",

  /**
   * Read - Grants permission to get the resource policy associated with the specified Profiling Group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  GetPolicy = "codeguru-profiler:GetPolicy",

  /**
   * Read - Grants permission to get aggregated profiles for a specific profiling group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  GetProfile = "codeguru-profiler:GetProfile",

  /**
   * Read - Grants permission to get recommendations
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetRecommendations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  GetRecommendations = "codeguru-profiler:GetRecommendations",

  /**
   * List - Grants permission to list the available recommendations reports for a specific profiling group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListFindingsReports.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  ListFindingsReports = "codeguru-profiler:ListFindingsReports",

  /**
   * List - Grants permission to list the start times of the available aggregated profiles for a specific profiling group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  ListProfileTimes = "codeguru-profiler:ListProfileTimes",

  /**
   * List - Grants permission to list profiling groups in the account
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfilingGroups.html
   */
  ListProfilingGroups = "codeguru-profiler:ListProfilingGroups",

  /**
   * List - Grants permission to list tags for a Profiling Group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  ListTagsForResource = "codeguru-profiler:ListTagsForResource",

  /**
   * Write - Grants permission to submit a profile collected by an agent belonging to a specific profiling group for aggregation
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  PostAgentProfile = "codeguru-profiler:PostAgentProfile",

  /**
   * PermissionsManagement - Grants permission to update the list of principals allowed for an action group in the resource policy associated with the specified Profiling Group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PutPermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  PutPermission = "codeguru-profiler:PutPermission",

  /**
   * Write - Grants permission to delete an already configured SNStopic arn from the notification configuration
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemoveNotificationChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  RemoveNotificationChannel = "codeguru-profiler:RemoveNotificationChannel",

  /**
   * PermissionsManagement - Grants permission to remove the permission of specified Action Group from the resource policy associated with the specified Profiling Group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemovePermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  RemovePermission = "codeguru-profiler:RemovePermission",

  /**
   * Write - Grants permission to submit user feedback for useful or non useful anomaly
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_SubmitFeedback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  SubmitFeedback = "codeguru-profiler:SubmitFeedback",

  /**
   * Tagging - Grants permission to add or overwrite tags to a Profiling Group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "codeguru-profiler:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a Profiling Group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "codeguru-profiler:UntagResource",

  /**
   * Write - Grants permission to update a specific profiling group
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UpdateProfilingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   */
  UpdateProfilingGroup = "codeguru-profiler:UpdateProfilingGroup",

  /**
   * * - Grant all codeguru-profiler permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodeguruprofiler.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruProfilerResource.profilingGroup `CodeguruProfilerResource.profilingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "codeguru-profiler:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodeguruprofiler.html
 */
export const CodeguruProfilerResource = {

  /**
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-ug/working-with-profiling-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  profilingGroup: (options: Partial<{partition: string, region: string, account: string, profilingGroupName: string}> = {}) => `arn:${options.partition || '*'}:codeguru-profiler:${options.region || '*'}:${options.account || '*'}:profilingGroup/${options.profilingGroupName || '*'}`,
}

