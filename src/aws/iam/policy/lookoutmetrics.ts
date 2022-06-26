/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutformetrics.html
 */
export enum LookoutmetricsAction {

  /**
   * Write - Grants permission to activate an anomaly detector
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ActivateAnomalyDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  ActivateAnomalyDetector = "lookoutmetrics:ActivateAnomalyDetector",

  /**
   * Write - Grants permission to run a backtest with an anomaly detector
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_BackTestAnomalyDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  BackTestAnomalyDetector = "lookoutmetrics:BackTestAnomalyDetector",

  /**
   * Write - Grants permission to create an alert for an anomaly detector
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_CreateAlert.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.alert `LookoutmetricsResource.alert`} 
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAlert = "lookoutmetrics:CreateAlert",

  /**
   * Write - Grants permission to create an anomaly detector
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_CreateAnomalyDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAnomalyDetector = "lookoutmetrics:CreateAnomalyDetector",

  /**
   * Write - Grants permission to create a dataset
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_CreateMetricSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   * - {@link LookoutmetricsResource.metricSet `LookoutmetricsResource.metricSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMetricSet = "lookoutmetrics:CreateMetricSet",

  /**
   * Write - Grants permission to deactivate an anomaly detector
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DeactivateAnomalyDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  DeactivateAnomalyDetector = "lookoutmetrics:DeactivateAnomalyDetector",

  /**
   * Write - Grants permission to delete an alert
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DeleteAlert.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.alert `LookoutmetricsResource.alert`} 
   */
  DeleteAlert = "lookoutmetrics:DeleteAlert",

  /**
   * Write - Grants permission to delete an anomaly detector
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DeleteAnomalyDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  DeleteAnomalyDetector = "lookoutmetrics:DeleteAnomalyDetector",

  /**
   * Read - Grants permission to get details about an alert
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeAlert.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.alert `LookoutmetricsResource.alert`} 
   */
  DescribeAlert = "lookoutmetrics:DescribeAlert",

  /**
   * Read - Grants permission to get information about an anomaly detection job
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeAnomalyDetectionExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  DescribeAnomalyDetectionExecutions = "lookoutmetrics:DescribeAnomalyDetectionExecutions",

  /**
   * Read - Grants permission to get details about an anomaly detector
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeAnomalyDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  DescribeAnomalyDetector = "lookoutmetrics:DescribeAnomalyDetector",

  /**
   * Read - Grants permission to get details about a dataset
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DescribeMetricSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.metricSet `LookoutmetricsResource.metricSet`} 
   */
  DescribeMetricSet = "lookoutmetrics:DescribeMetricSet",

  /**
   * Write - Grants permission to detect metric set config from data source
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_DetectMetricSetConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  DetectMetricSetConfig = "lookoutmetrics:DetectMetricSetConfig",

  /**
   * Read - Grants permission to get details about a group of affected metrics
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetAnomalyGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  GetAnomalyGroup = "lookoutmetrics:GetAnomalyGroup",

  /**
   * Read - Grants permission to get data quality metrics for an anomaly detector
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetDataQualityMetrics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  GetDataQualityMetrics = "lookoutmetrics:GetDataQualityMetrics",

  /**
   * Read - Grants permission to get feedback on affected metrics for an anomaly group
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetFeedback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  GetFeedback = "lookoutmetrics:GetFeedback",

  /**
   * Read - Grants permission to get a selection of sample records from an Amazon S3 datasource
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_GetSampleData.html
   */
  GetSampleData = "lookoutmetrics:GetSampleData",

  /**
   * List - Grants permission to get a list of alerts for a detector
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAlerts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  ListAlerts = "lookoutmetrics:ListAlerts",

  /**
   * List - Grants permission to get a list of anomaly detectors
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyDetectors.html
   */
  ListAnomalyDetectors = "lookoutmetrics:ListAnomalyDetectors",

  /**
   * List - Grants permission to get a list of related measures in an anomaly group
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyGroupRelatedMetrics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  ListAnomalyGroupRelatedMetrics = "lookoutmetrics:ListAnomalyGroupRelatedMetrics",

  /**
   * List - Grants permission to get a list of anomaly groups
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyGroupSummaries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  ListAnomalyGroupSummaries = "lookoutmetrics:ListAnomalyGroupSummaries",

  /**
   * List - Grants permission to get a list of affected metrics for a measure in an anomaly group
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListAnomalyGroupTimeSeries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  ListAnomalyGroupTimeSeries = "lookoutmetrics:ListAnomalyGroupTimeSeries",

  /**
   * List - Grants permission to get a list of datasets
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListMetricSets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  ListMetricSets = "lookoutmetrics:ListMetricSets",

  /**
   * Read - Grants permission to get a list of tags for a detector, dataset, or alert
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.alert `LookoutmetricsResource.alert`} 
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   * - {@link LookoutmetricsResource.metricSet `LookoutmetricsResource.metricSet`} 
   */
  ListTagsForResource = "lookoutmetrics:ListTagsForResource",

  /**
   * Write - Grants permission to add feedback for an affected metric in an anomaly group
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_PutFeedback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  PutFeedback = "lookoutmetrics:PutFeedback",

  /**
   * Tagging - Grants permission to add tags to a detector, dataset, or alert
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.alert `LookoutmetricsResource.alert`} 
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   * - {@link LookoutmetricsResource.metricSet `LookoutmetricsResource.metricSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "lookoutmetrics:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a detector, dataset, or alert
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.alert `LookoutmetricsResource.alert`} 
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   * - {@link LookoutmetricsResource.metricSet `LookoutmetricsResource.metricSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "lookoutmetrics:UntagResource",

  /**
   * Write - Grants permission to update an alert for an anomaly detector
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UpdateAlert.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.alert `LookoutmetricsResource.alert`} 
   */
  UpdateAlert = "lookoutmetrics:UpdateAlert",

  /**
   * Write - Grants permission to update an anomaly detector
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UpdateAnomalyDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   */
  UpdateAnomalyDetector = "lookoutmetrics:UpdateAnomalyDetector",

  /**
   * Write - Grants permission to update a dataset
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_UpdateMetricSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.metricSet `LookoutmetricsResource.metricSet`} 
   */
  UpdateMetricSet = "lookoutmetrics:UpdateMetricSet",

  /**
   * * - Grant all lookoutmetrics permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutformetrics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutmetricsResource.anomalyDetector `LookoutmetricsResource.anomalyDetector`} 
   * - {@link LookoutmetricsResource.alert `LookoutmetricsResource.alert`} 
   * - {@link LookoutmetricsResource.metricSet `LookoutmetricsResource.metricSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "lookoutmetrics:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutformetrics.html
 */
export const LookoutmetricsResource = {

  /**
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_AnomalyDetectorSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  anomalyDetector: (options: Partial<{partition: string, region: string, account: string, anomalyDetectorName: string}> = {}) => `arn:${options.partition || '*'}:lookoutmetrics:${options.region || '*'}:${options.account || '*'}:AnomalyDetector:${options.anomalyDetectorName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_MetricSetSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  metricSet: (options: Partial<{partition: string, region: string, account: string, anomalyDetectorName: string, metricSetName: string}> = {}) => `arn:${options.partition || '*'}:lookoutmetrics:${options.region || '*'}:${options.account || '*'}:MetricSet/${options.anomalyDetectorName || '*'}/${options.metricSetName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lookoutmetrics/latest/api/API_AlertSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  alert: (options: Partial<{partition: string, region: string, account: string, alertName: string}> = {}) => `arn:${options.partition || '*'}:lookoutmetrics:${options.region || '*'}:${options.account || '*'}:Alert:${options.alertName || '*'}`,
}

