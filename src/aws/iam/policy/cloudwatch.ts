/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatch.html
 */
export enum CloudwatchAction {

  /**
   * Write - Grants permission to delete a collection of alarms
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAlarms.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   */
  DeleteAlarms = "cloudwatch:DeleteAlarms",

  /**
   * Write - Grants permission to delete the specified anomaly detection model from your account
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAnomalyDetector.html
   */
  DeleteAnomalyDetector = "cloudwatch:DeleteAnomalyDetector",

  /**
   * Write - Grants permission to delete all CloudWatch dashboards that you specify
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteDashboards.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.dashboard `CloudwatchResource.dashboard`} 
   */
  DeleteDashboards = "cloudwatch:DeleteDashboards",

  /**
   * Write - Grants permission to delete a collection of insight rules
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteInsightRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.insightRule `CloudwatchResource.insightRule`} 
   */
  DeleteInsightRules = "cloudwatch:DeleteInsightRules",

  /**
   * Write - Grants permission to delete the CloudWatch metric stream that you specify
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteMetricStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.metricStream `CloudwatchResource.metricStream`} 
   */
  DeleteMetricStream = "cloudwatch:DeleteMetricStream",

  /**
   * Read - Grants permission to retrieve the history for the specified alarm
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   */
  DescribeAlarmHistory = "cloudwatch:DescribeAlarmHistory",

  /**
   * Read - Grants permission to describe all alarms, currently owned by the user's account
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   */
  DescribeAlarms = "cloudwatch:DescribeAlarms",

  /**
   * Read - Grants permission to describe all alarms configured on the specified metric, currently owned by the user's account
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmsForMetric.html
   */
  DescribeAlarmsForMetric = "cloudwatch:DescribeAlarmsForMetric",

  /**
   * Read - Grants permission to list the anomaly detection models that you have created in your account
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAnomalyDetectors.html
   */
  DescribeAnomalyDetectors = "cloudwatch:DescribeAnomalyDetectors",

  /**
   * Read - Grants permission to describe all insight rules, currently owned by the user's account
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html
   */
  DescribeInsightRules = "cloudwatch:DescribeInsightRules",

  /**
   * Write - Grants permission to disable actions for a collection of alarms
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableAlarmActions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   */
  DisableAlarmActions = "cloudwatch:DisableAlarmActions",

  /**
   * Write - Grants permission to disable a collection of insight rules
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableInsightRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.insightRule `CloudwatchResource.insightRule`} 
   */
  DisableInsightRules = "cloudwatch:DisableInsightRules",

  /**
   * Write - Grants permission to enable actions for a collection of alarms
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableAlarmActions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   */
  EnableAlarmActions = "cloudwatch:EnableAlarmActions",

  /**
   * Write - Grants permission to enable a collection of insight rules
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableInsightRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.insightRule `CloudwatchResource.insightRule`} 
   */
  EnableInsightRules = "cloudwatch:EnableInsightRules",

  /**
   * Read - Grants permission to display the details of the CloudWatch dashboard you specify
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetDashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.dashboard `CloudwatchResource.dashboard`} 
   */
  GetDashboard = "cloudwatch:GetDashboard",

  /**
   * Read - Grants permission to return the top-N report of unique contributors over a time range for a given insight rule
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.insightRule `CloudwatchResource.insightRule`} 
   */
  GetInsightRuleReport = "cloudwatch:GetInsightRuleReport",

  /**
   * Read - Grants permission to retrieve batch amounts of CloudWatch metric data and perform metric math on retrieved data
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html
   */
  GetMetricData = "cloudwatch:GetMetricData",

  /**
   * Read - Grants permission to retrieve statistics for the specified metric
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html
   */
  GetMetricStatistics = "cloudwatch:GetMetricStatistics",

  /**
   * Read - Grants permission to return the details of a CloudWatch metric stream
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.metricStream `CloudwatchResource.metricStream`} 
   */
  GetMetricStream = "cloudwatch:GetMetricStream",

  /**
   * Read - Grants permission to retrieve snapshots of metric widgets
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricWidgetImage.html
   */
  GetMetricWidgetImage = "cloudwatch:GetMetricWidgetImage",

  /**
   * List - Grants permission to return a list of all CloudWatch dashboards in your account
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListDashboards.html
   */
  ListDashboards = "cloudwatch:ListDashboards",

  /**
   * List - Grants permission to return a list of all CloudWatch metric streams in your account
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetricStreams.html
   */
  ListMetricStreams = "cloudwatch:ListMetricStreams",

  /**
   * List - Grants permission to retrieve a list of valid metrics stored for the AWS account owner
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html
   */
  ListMetrics = "cloudwatch:ListMetrics",

  /**
   * List - Grants permission to list tags for an Amazon CloudWatch resource
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   * - {@link CloudwatchResource.insightRule `CloudwatchResource.insightRule`} 
   * 
   * It requires the following actions:
   * - alarm*
   * - insight-rule*
   */
  ListTagsForResource = "cloudwatch:ListTagsForResource",

  /**
   * Write - Grants permission to create or update an anomaly detection model for a CloudWatch metric
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutAnomalyDetector.html
   */
  PutAnomalyDetector = "cloudwatch:PutAnomalyDetector",

  /**
   * Write - Grants permission to create or update a composite alarm
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutCompositeAlarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `cloudwatch:AlarmActions`: Filters actions based on defined alarm actions ({@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-alarm-actions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutCompositeAlarm = "cloudwatch:PutCompositeAlarm",

  /**
   * Write - Grants permission to create a CloudWatch dashboard, or update an existing dashboard if it already exists
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutDashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.dashboard `CloudwatchResource.dashboard`} 
   */
  PutDashboard = "cloudwatch:PutDashboard",

  /**
   * Write - Grants permission to create a new insight rule or replace an existing insight rule
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutInsightRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.insightRule `CloudwatchResource.insightRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `cloudwatch:requestInsightRuleLogGroups`: Filters actions based on the Log Groups specified in an Insight Rule ({@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-contributor.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutInsightRule = "cloudwatch:PutInsightRule",

  /**
   * Write - Grants permission to create or update an alarm and associates it with the specified Amazon CloudWatch metric
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `cloudwatch:AlarmActions`: Filters actions based on defined alarm actions ({@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-alarm-actions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutMetricAlarm = "cloudwatch:PutMetricAlarm",

  /**
   * Write - Grants permission to publish metric data points to Amazon CloudWatch
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudwatch:namespace`: Filters actions based on the presence of optional namespace values ({@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-namespace.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutMetricData = "cloudwatch:PutMetricData",

  /**
   * Write - Grants permission to create a CloudWatch metric stream, or update an existing metric stream if it already exists
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.metricStream `CloudwatchResource.metricStream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutMetricStream = "cloudwatch:PutMetricStream",

  /**
   * Write - Grants permission to temporarily set the state of an alarm for testing purposes
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_SetAlarmState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   */
  SetAlarmState = "cloudwatch:SetAlarmState",

  /**
   * Write - Grants permission to start all CloudWatch metric streams that you specify
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_StartMetricStreams.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.metricStream `CloudwatchResource.metricStream`} 
   */
  StartMetricStreams = "cloudwatch:StartMetricStreams",

  /**
   * Write - Grants permission to stop all CloudWatch metric streams that you specify
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_StopMetricStreams.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.metricStream `CloudwatchResource.metricStream`} 
   */
  StopMetricStreams = "cloudwatch:StopMetricStreams",

  /**
   * Tagging - Grants permission to add tags to an Amazon CloudWatch resource
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   * - {@link CloudwatchResource.insightRule `CloudwatchResource.insightRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * 
   * It requires the following actions:
   * - alarm*
   * - insight-rule*
   */
  TagResource = "cloudwatch:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from an Amazon CloudWatch resource
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   * - {@link CloudwatchResource.insightRule `CloudwatchResource.insightRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * 
   * It requires the following actions:
   * - alarm*
   * - insight-rule*
   */
  UntagResource = "cloudwatch:UntagResource",

  /**
   * * - Grant all cloudwatch permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudwatchResource.alarm `CloudwatchResource.alarm`} 
   * - {@link CloudwatchResource.dashboard `CloudwatchResource.dashboard`} 
   * - {@link CloudwatchResource.insightRule `CloudwatchResource.insightRule`} 
   * - {@link CloudwatchResource.metricStream `CloudwatchResource.metricStream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `cloudwatch:AlarmActions`: Filters actions based on defined alarm actions ({@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-alarm-actions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `cloudwatch:requestInsightRuleLogGroups`: Filters actions based on the Log Groups specified in an Insight Rule ({@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-contributor.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `cloudwatch:namespace`: Filters actions based on the presence of optional namespace values ({@link https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-namespace.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "cloudwatch:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatch.html
 */
export const CloudwatchResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  alarm: (options: Partial<{partition: string, region: string, account: string, alarmName: string}> = {}) => `arn:${options.partition || '*'}:cloudwatch:${options.region || '*'}:${options.account || '*'}:alarm:${options.alarmName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   */
  dashboard: (options: Partial<{partition: string, account: string, dashboardName: string}> = {}) => `arn:${options.partition || '*'}:cloudwatch::${options.account || '*'}:dashboard/${options.dashboardName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  insightRule: (options: Partial<{partition: string, region: string, account: string, insightRuleName: string}> = {}) => `arn:${options.partition || '*'}:cloudwatch:${options.region || '*'}:${options.account || '*'}:insight-rule/${options.insightRuleName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  metricStream: (options: Partial<{partition: string, region: string, account: string, metricStreamName: string}> = {}) => `arn:${options.partition || '*'}:cloudwatch:${options.region || '*'}:${options.account || '*'}:metric-stream/${options.metricStreamName || '*'}`,
}

