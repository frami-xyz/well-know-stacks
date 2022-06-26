/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtrail.html
 */
export enum CloudtrailAction {

  /**
   * Tagging - Grants permission to add one or more tags to a trail, up to a limit of 10
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AddTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.eventdatastore `CloudtrailResource.eventdatastore`} 
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  AddTags = "cloudtrail:AddTags",

  /**
   * Write - Grants permission to cancel a running query
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CancelQuery.html
   */
  CancelQuery = "cloudtrail:CancelQuery",

  /**
   * Write - Grants permission to create an event data store
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateEventDataStore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.eventdatastore `CloudtrailResource.eventdatastore`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEventDataStore = "cloudtrail:CreateEventDataStore",

  /**
   * Write - Grants permission to create a trail that specifies the settings for delivery of log data to an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateTrail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  CreateTrail = "cloudtrail:CreateTrail",

  /**
   * Write - Grants permission to delete an event data store
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteEventDataStore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.eventdatastore `CloudtrailResource.eventdatastore`} 
   */
  DeleteEventDataStore = "cloudtrail:DeleteEventDataStore",

  /**
   * Write - Grants permission to delete a trail
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteTrail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  DeleteTrail = "cloudtrail:DeleteTrail",

  /**
   * Read - Grants permission to list details for the query
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeQuery.html
   */
  DescribeQuery = "cloudtrail:DescribeQuery",

  /**
   * Read - Grants permission to list settings for the trails associated with the current region for your account
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeTrails.html
   */
  DescribeTrails = "cloudtrail:DescribeTrails",

  /**
   * Read - Grants permission to list settings for the event data store
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventDataStore.html
   */
  GetEventDataStore = "cloudtrail:GetEventDataStore",

  /**
   * Read - Grants permission to list settings for event selectors configured for a trail
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventSelectors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  GetEventSelectors = "cloudtrail:GetEventSelectors",

  /**
   * Read - Grants permission to list CloudTrail Insights selectors that are configured for a trail
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetInsightSelectors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  GetInsightSelectors = "cloudtrail:GetInsightSelectors",

  /**
   * Read - Grants permission to fetch results of a complete query
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetQueryResults.html
   */
  GetQueryResults = "cloudtrail:GetQueryResults",

  /**
   * Read - Grants permission to list settings for the trail
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrail.html
   */
  GetTrail = "cloudtrail:GetTrail",

  /**
   * Read - Grants permission to retrieve a JSON-formatted list of information about the specified trail
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrailStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  GetTrailStatus = "cloudtrail:GetTrailStatus",

  /**
   * List - Grants permission to list event data stores associated with the current region for your account
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListEventDataStores.html
   */
  ListEventDataStores = "cloudtrail:ListEventDataStores",

  /**
   * Read - Grants permission to list the public keys whose private keys were used to sign trail digest files within a specified time range
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListPublicKeys.html
   */
  ListPublicKeys = "cloudtrail:ListPublicKeys",

  /**
   * List - Grants permission to list queries associated with an event data store
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListQueries.html
   */
  ListQueries = "cloudtrail:ListQueries",

  /**
   * Read - Grants permission to list the tags for trails or event data stores in the current region
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.eventdatastore `CloudtrailResource.eventdatastore`} 
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  ListTags = "cloudtrail:ListTags",

  /**
   * List - Grants permission to list trails associated with the current region for your account
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTrails.html
   */
  ListTrails = "cloudtrail:ListTrails",

  /**
   * Read - Grants permission to look up API activity events captured by CloudTrail that create, update, or delete resources in your account
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html
   */
  LookupEvents = "cloudtrail:LookupEvents",

  /**
   * Write - Grants permission to create and update event selectors for a trail
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutEventSelectors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  PutEventSelectors = "cloudtrail:PutEventSelectors",

  /**
   * Write - Grants permission to create and update CloudTrail Insights selectors for a trail
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutInsightSelectors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  PutInsightSelectors = "cloudtrail:PutInsightSelectors",

  /**
   * Tagging - Grants permission to remove tags from a trail
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RemoveTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.eventdatastore `CloudtrailResource.eventdatastore`} 
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  RemoveTags = "cloudtrail:RemoveTags",

  /**
   * Write - Grants permission to restore an event data store
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RestoreEventDataStore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.eventdatastore `CloudtrailResource.eventdatastore`} 
   */
  RestoreEventDataStore = "cloudtrail:RestoreEventDataStore",

  /**
   * Write - Grants permission to start the recording of AWS API calls and log file delivery for a trail
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartLogging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  StartLogging = "cloudtrail:StartLogging",

  /**
   * Write - Grants permission to start a new query on a specified event data store
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartQuery.html
   */
  StartQuery = "cloudtrail:StartQuery",

  /**
   * Write - Grants permission to stop the recording of AWS API calls and log file delivery for a trail
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopLogging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  StopLogging = "cloudtrail:StopLogging",

  /**
   * Write - Grants permission to update an event data store
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateEventDataStore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.eventdatastore `CloudtrailResource.eventdatastore`} 
   */
  UpdateEventDataStore = "cloudtrail:UpdateEventDataStore",

  /**
   * Write - Grants permission to update the settings that specify delivery of log files
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateTrail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   */
  UpdateTrail = "cloudtrail:UpdateTrail",

  /**
   * * - Grant all cloudtrail permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtrail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudtrailResource.eventdatastore `CloudtrailResource.eventdatastore`} 
   * - {@link CloudtrailResource.trail `CloudtrailResource.trail`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "cloudtrail:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtrail.html
 */
export const CloudtrailResource = {

  /**
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html
   */
  trail: (options: Partial<{partition: string, region: string, account: string, trailName: string}> = {}) => `arn:${options.partition || '*'}:cloudtrail:${options.region || '*'}:${options.account || '*'}:trail/${options.trailName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  eventdatastore: (options: Partial<{partition: string, region: string, account: string, eventDataStoreId: string}> = {}) => `arn:${options.partition || '*'}:cloudtrail:${options.region || '*'}:${options.account || '*'}:eventdatastore/${options.eventDataStoreId || '*'}`,
}

