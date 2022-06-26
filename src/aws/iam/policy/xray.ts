/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsx-ray.html
 */
export enum XrayAction {

  /**
   * List - Grants permission to retrieve a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs
   * @see https://docs.aws.amazon.com/xray/latest/api/API_BatchGetTraces.html
   */
  BatchGetTraces = "xray:BatchGetTraces",

  /**
   * Write - Grants permission to create a group resource with a name and a filter expression
   * @see https://docs.aws.amazon.com/xray/latest/api/API_CreateGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link XrayResource.group `XrayResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateGroup = "xray:CreateGroup",

  /**
   * Write - Grants permission to create a rule to control sampling behavior for instrumented applications
   * @see https://docs.aws.amazon.com/xray/latest/api/API_CreateSamplingRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link XrayResource.samplingRule `XrayResource.samplingRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSamplingRule = "xray:CreateSamplingRule",

  /**
   * Write - Grants permission to delete a group resource
   * @see https://docs.aws.amazon.com/xray/latest/api/API_DeleteGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link XrayResource.group `XrayResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteGroup = "xray:DeleteGroup",

  /**
   * Write - Grants permission to delete a sampling rule
   * @see https://docs.aws.amazon.com/xray/latest/api/API_DeleteSamplingRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link XrayResource.samplingRule `XrayResource.samplingRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteSamplingRule = "xray:DeleteSamplingRule",

  /**
   * Read - Grants permission to retrieve the current encryption configuration for X-Ray data
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetEncryptionConfig.html
   */
  GetEncryptionConfig = "xray:GetEncryptionConfig",

  /**
   * Read - Grants permission to retrieve group resource details
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link XrayResource.group `XrayResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetGroup = "xray:GetGroup",

  /**
   * Read - Grants permission to retrieve all active group details
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetGroups.html
   */
  GetGroups = "xray:GetGroups",

  /**
   * Read - Grants permission to retrieve the details of a specific insight
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetInsight.html
   */
  GetInsight = "xray:GetInsight",

  /**
   * Read - Grants permission to retrieve the events of a specific insight
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetInsightEvents.html
   */
  GetInsightEvents = "xray:GetInsightEvents",

  /**
   * Read - Grants permission to retrieve the part of the service graph which is impacted for a specific insight
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetInsightImpactGraph.html
   */
  GetInsightImpactGraph = "xray:GetInsightImpactGraph",

  /**
   * Read - Grants permission to retrieve the summary of all insights for a group and time range with optional filters
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetInsightSummaries.html
   */
  GetInsightSummaries = "xray:GetInsightSummaries",

  /**
   * Read - Grants permission to retrieve all sampling rules
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html
   */
  GetSamplingRules = "xray:GetSamplingRules",

  /**
   * Read - Grants permission to retrieve information about recent sampling results for all sampling rules
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingStatisticSummaries.html
   */
  GetSamplingStatisticSummaries = "xray:GetSamplingStatisticSummaries",

  /**
   * Read - Grants permission to request a sampling quota for rules that the service is using to sample requests
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html
   */
  GetSamplingTargets = "xray:GetSamplingTargets",

  /**
   * Read - Grants permission to retrieve a document that describes services that process incoming requests, and downstream services that they call as a result
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetServiceGraph.html
   */
  GetServiceGraph = "xray:GetServiceGraph",

  /**
   * Read - Grants permission to retrieve an aggregation of service statistics defined by a specific time range bucketed into time intervals
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetTimeSeriesServiceStatistics.html
   */
  GetTimeSeriesServiceStatistics = "xray:GetTimeSeriesServiceStatistics",

  /**
   * Read - Grants permission to retrieve a service graph for one or more specific trace IDs
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetTraceGraph.html
   */
  GetTraceGraph = "xray:GetTraceGraph",

  /**
   * Read - Grants permission to retrieve IDs and metadata for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces
   * @see https://docs.aws.amazon.com/xray/latest/api/API_GetTraceSummaries.html
   */
  GetTraceSummaries = "xray:GetTraceSummaries",

  /**
   * List - Grants permission to list tags for an X-Ray resource
   * @see https://docs.aws.amazon.com/xray/latest/api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link XrayResource.group `XrayResource.group`} 
   * - {@link XrayResource.samplingRule `XrayResource.samplingRule`} 
   */
  ListTagsForResource = "xray:ListTagsForResource",

  /**
   * Permissions management - Grants permission to update the encryption configuration for X-Ray data
   * @see https://docs.aws.amazon.com/xray/latest/api/API_PutEncryptionConfig.html
   */
  PutEncryptionConfig = "xray:PutEncryptionConfig",

  /**
   * Write - Grants permission to send AWS X-Ray daemon telemetry to the service
   * @see https://docs.aws.amazon.com/xray/latest/api/API_PutTelemetryRecords.html
   */
  PutTelemetryRecords = "xray:PutTelemetryRecords",

  /**
   * Write - Grants permission to upload segment documents to AWS X-Ray. The X-Ray SDK generates segment documents and sends them to the X-Ray daemon, which uploads them in batches
   * @see https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html
   */
  PutTraceSegments = "xray:PutTraceSegments",

  /**
   * Tagging - Grants permission to add tags to an X-Ray resource
   * @see https://docs.aws.amazon.com/xray/latest/api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link XrayResource.group `XrayResource.group`} 
   * - {@link XrayResource.samplingRule `XrayResource.samplingRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "xray:TagResource",

  /**
   * Tagging - Grants permission to remove tags from an X-Ray resource
   * @see https://docs.aws.amazon.com/xray/latest/api/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link XrayResource.group `XrayResource.group`} 
   * - {@link XrayResource.samplingRule `XrayResource.samplingRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "xray:UntagResource",

  /**
   * Write - Grants permission to update a group resource
   * @see https://docs.aws.amazon.com/xray/latest/api/API_UpdateGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link XrayResource.group `XrayResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateGroup = "xray:UpdateGroup",

  /**
   * Write - Grants permission to modify a sampling rule's configuration
   * @see https://docs.aws.amazon.com/xray/latest/api/API_UpdateSamplingRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link XrayResource.samplingRule `XrayResource.samplingRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateSamplingRule = "xray:UpdateSamplingRule",

  /**
   * * - Grant all xray permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsx-ray.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link XrayResource.group `XrayResource.group`} 
   * - {@link XrayResource.samplingRule `XrayResource.samplingRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "xray:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsx-ray.html
 */
export const XrayResource = {

  /**
   * @see https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-groups
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  group: (options: Partial<{partition: string, region: string, account: string, groupName: string, id: string}> = {}) => `arn:${options.partition || '*'}:xray:${options.region || '*'}:${options.account || '*'}:group/${options.groupName || '*'}/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-sampling
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  samplingRule: (options: Partial<{partition: string, region: string, account: string, samplingRuleName: string}> = {}) => `arn:${options.partition || '*'}:xray:${options.region || '*'}:${options.account || '*'}:sampling-rule/${options.samplingRuleName || '*'}`,
}

