/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchlogs.html
 */
export enum LogsAction {

  /**
   * Write - Grants permissions to associate the specified AWS Key Management Service (AWS KMS) customer master key (CMK) with the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_AssociateKmsKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  AssociateKmsKey = "logs:AssociateKmsKey",

  /**
   * Write - Grants permissions to cancel an export task if it is in PENDING or RUNNING state
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html
   */
  CancelExportTask = "logs:CancelExportTask",

  /**
   * Write - Grants permissions to create an ExportTask which allows you to efficiently export data from a Log Group to your Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateExportTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  CreateExportTask = "logs:CreateExportTask",

  /**
   * Write - Grants permissions to create the log delivery
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  CreateLogDelivery = "logs:CreateLogDelivery",

  /**
   * Write - Grants permissions to create a new log group with the specified name
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  CreateLogGroup = "logs:CreateLogGroup",

  /**
   * Write - Grants permissions to create a new log stream with the specified name
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateLogStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  CreateLogStream = "logs:CreateLogStream",

  /**
   * Write - Grants permissions to delete the destination with the specified name
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteDestination.html
   */
  DeleteDestination = "logs:DeleteDestination",

  /**
   * Write - Grants permissions to delete the log delivery information for specified log delivery
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  DeleteLogDelivery = "logs:DeleteLogDelivery",

  /**
   * Write - Grants permissions to delete the log group with the specified name
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  DeleteLogGroup = "logs:DeleteLogGroup",

  /**
   * Write - Grants permissions to delete a log stream
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteLogStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logStream `LogsResource.logStream`} 
   */
  DeleteLogStream = "logs:DeleteLogStream",

  /**
   * Write - Grants permissions to delete a metric filter associated with the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteMetricFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  DeleteMetricFilter = "logs:DeleteMetricFilter",

  /**
   * Write - Grants permissions to delete a saved CloudWatch Logs Insights query definition
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteQueryDefinition.html
   */
  DeleteQueryDefinition = "logs:DeleteQueryDefinition",

  /**
   * PermissionsManagement - Grants permissions to delete a resource policy from this account
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteResourcePolicy.html
   */
  DeleteResourcePolicy = "logs:DeleteResourcePolicy",

  /**
   * Write - Grants permissions to delete the retention policy of the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  DeleteRetentionPolicy = "logs:DeleteRetentionPolicy",

  /**
   * Write - Grants permissions to delete a subscription filter associated with the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteSubscriptionFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  DeleteSubscriptionFilter = "logs:DeleteSubscriptionFilter",

  /**
   * List - Grants permissions to return all the destinations that are associated with the AWS account making the request
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDestinations.html
   */
  DescribeDestinations = "logs:DescribeDestinations",

  /**
   * List - Grants permissions to return all the export tasks that are associated with the AWS account making the request
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html
   */
  DescribeExportTasks = "logs:DescribeExportTasks",

  /**
   * List - Grants permissions to return all the log groups that are associated with the AWS account making the request
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  DescribeLogGroups = "logs:DescribeLogGroups",

  /**
   * List - Grants permissions to return all the log streams that are associated with the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogStreams.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  DescribeLogStreams = "logs:DescribeLogStreams",

  /**
   * List - Grants permissions to return all the metrics filters associated with the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeMetricFilters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  DescribeMetricFilters = "logs:DescribeMetricFilters",

  /**
   * List - Grants permissions to return a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueries.html
   */
  DescribeQueries = "logs:DescribeQueries",

  /**
   * List - Grants permissions to return a paginated list of your saved CloudWatch Logs Insights query definitions
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeQueryDefinitions.html
   */
  DescribeQueryDefinitions = "logs:DescribeQueryDefinitions",

  /**
   * List - Grants permissions to return all the resource policies in this account
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeResourcePolicies.html
   */
  DescribeResourcePolicies = "logs:DescribeResourcePolicies",

  /**
   * List - Grants permissions to return all the subscription filters associated with the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeSubscriptionFilters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  DescribeSubscriptionFilters = "logs:DescribeSubscriptionFilters",

  /**
   * Write - Grants permissions to disassociate the associated AWS Key Management Service (AWS KMS) customer master key (CMK) from the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DisassociateKmsKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  DisassociateKmsKey = "logs:DisassociateKmsKey",

  /**
   * Read - Grants permissions to retrieve log events, optionally filtered by a filter pattern from the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  FilterLogEvents = "logs:FilterLogEvents",

  /**
   * Read - Grants permissions to get the log delivery information for specified log delivery
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  GetLogDelivery = "logs:GetLogDelivery",

  /**
   * Read - Grants permissions to retrieve log events from the specified log stream
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logStream `LogsResource.logStream`} 
   */
  GetLogEvents = "logs:GetLogEvents",

  /**
   * Read - Grants permissions to return a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogGroupFields.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  GetLogGroupFields = "logs:GetLogGroupFields",

  /**
   * Read - Grants permissions to retrieve all the fields and values of a single log event
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html
   */
  GetLogRecord = "logs:GetLogRecord",

  /**
   * Read - Grants permissions to return the results from the specified query
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html
   */
  GetQueryResults = "logs:GetQueryResults",

  /**
   * List - Grants permissions to list all the log deliveries for specified account and/or log source
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  ListLogDeliveries = "logs:ListLogDeliveries",

  /**
   * List - Grants permissions to list the tags for the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  ListTagsLogGroup = "logs:ListTagsLogGroup",

  /**
   * Write - Grants permissions to create or update a Destination
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html
   */
  PutDestination = "logs:PutDestination",

  /**
   * Write - Grants permissions to create or update an access policy associated with an existing Destination
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html
   */
  PutDestinationPolicy = "logs:PutDestinationPolicy",

  /**
   * Write - Grants permissions to upload a batch of log events to the specified log stream
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logStream `LogsResource.logStream`} 
   */
  PutLogEvents = "logs:PutLogEvents",

  /**
   * Write - Grants permissions to create or update a metric filter and associates it with the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutMetricFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  PutMetricFilter = "logs:PutMetricFilter",

  /**
   * Write - Grants permissions to create or update a query definition
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutQueryDefinition.html
   */
  PutQueryDefinition = "logs:PutQueryDefinition",

  /**
   * PermissionsManagement - Grants permissions to create or update a resource policy allowing other AWS services to put log events to this account
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutResourcePolicy.html
   */
  PutResourcePolicy = "logs:PutResourcePolicy",

  /**
   * Write - Grants permissions to set the retention of the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  PutRetentionPolicy = "logs:PutRetentionPolicy",

  /**
   * Write - Grants permissions to create or update a subscription filter and associates it with the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   * - {@link LogsResource.destination `LogsResource.destination`} 
   */
  PutSubscriptionFilter = "logs:PutSubscriptionFilter",

  /**
   * Read - Grants permissions to schedules a query of a log group using CloudWatch Logs Insights
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  StartQuery = "logs:StartQuery",

  /**
   * Read - Grants permissions to stop a CloudWatch Logs Insights query that is in progress
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StopQuery.html
   */
  StopQuery = "logs:StopQuery",

  /**
   * Tagging - Grants permissions to add or update the specified tags for the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  TagLogGroup = "logs:TagLogGroup",

  /**
   * Read - Grants permissions to test the filter pattern of a metric filter against a sample of log event messages
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TestMetricFilter.html
   */
  TestMetricFilter = "logs:TestMetricFilter",

  /**
   * Tagging - Grants permissions to remove the specified tags from the specified log group
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   */
  UntagLogGroup = "logs:UntagLogGroup",

  /**
   * Write - Grants permissions to update the log delivery information for specified log delivery
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html
   */
  UpdateLogDelivery = "logs:UpdateLogDelivery",

  /**
   * * - Grant all logs permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchlogs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LogsResource.logGroup `LogsResource.logGroup`} 
   * - {@link LogsResource.logStream `LogsResource.logStream`} 
   * - {@link LogsResource.destination `LogsResource.destination`} 
   */
  All = "logs:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchlogs.html
 */
export const LogsResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_LogGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  logGroup: (options: Partial<{partition: string, region: string, account: string, logGroupName: string}> = {}) => `arn:${options.partition || '*'}:logs:${options.region || '*'}:${options.account || '*'}:log-group:${options.logGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_LogStream.html
   */
  logStream: (options: Partial<{partition: string, region: string, account: string, logGroupName: string, logStreamName: string}> = {}) => `arn:${options.partition || '*'}:logs:${options.region || '*'}:${options.account || '*'}:log-group:${options.logGroupName || '*'}:log-stream:${options.logStreamName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_Destination.html
   */
  destination: (options: Partial<{partition: string, region: string, account: string, destinationName: string}> = {}) => `arn:${options.partition || '*'}:logs:${options.region || '*'}:${options.account || '*'}:destination:${options.destinationName || '*'}`,
}

