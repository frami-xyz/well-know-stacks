/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotevents.html
 */
export enum IoteventsAction {

  /**
   * Write - Grants permission to send one or more acknowledge action requests to AWS IoT Events
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchAcknowledgeAlarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   */
  BatchAcknowledgeAlarm = "iotevents:BatchAcknowledgeAlarm",

  /**
   * Write - Grants permission to delete a detector instance within the AWS IoT Events system
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDeleteDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   */
  BatchDeleteDetector = "iotevents:BatchDeleteDetector",

  /**
   * Write - Grants permission to disable one or more alarm instances
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchDisableAlarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   */
  BatchDisableAlarm = "iotevents:BatchDisableAlarm",

  /**
   * Write - Grants permission to enable one or more alarm instances
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchEnableAlarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   */
  BatchEnableAlarm = "iotevents:BatchEnableAlarm",

  /**
   * Write - Grants permission to send a set of messages to the AWS IoT Events system
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.input `IoteventsResource.input`} 
   */
  BatchPutMessage = "iotevents:BatchPutMessage",

  /**
   * Write - Grants permission to reset one or more alarm instances
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchResetAlarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   */
  BatchResetAlarm = "iotevents:BatchResetAlarm",

  /**
   * Write - Grants permission to change one or more alarm instances to the snooze mode
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchSnoozeAlarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   */
  BatchSnoozeAlarm = "iotevents:BatchSnoozeAlarm",

  /**
   * Write - Grants permission to update a detector instance within the AWS IoT Events system
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchUpdateDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   */
  BatchUpdateDetector = "iotevents:BatchUpdateDetector",

  /**
   * Write - Grants permission to create an alarm model to monitor an AWS IoT Events input attribute or an AWS IoT SiteWise asset property
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateAlarmModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAlarmModel = "iotevents:CreateAlarmModel",

  /**
   * Write - Grants permission to create a detector model to monitor an AWS IoT Events input attribute
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateDetectorModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDetectorModel = "iotevents:CreateDetectorModel",

  /**
   * Write - Grants permission to create an Input in IotEvents
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateInput.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.input `IoteventsResource.input`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateInput = "iotevents:CreateInput",

  /**
   * Write - Grants permission to delete an alarm model
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteAlarmModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   */
  DeleteAlarmModel = "iotevents:DeleteAlarmModel",

  /**
   * Write - Grants permission to delete a detector model
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteDetectorModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   */
  DeleteDetectorModel = "iotevents:DeleteDetectorModel",

  /**
   * Write - Grants permission to delete an input
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteInput.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.input `IoteventsResource.input`} 
   */
  DeleteInput = "iotevents:DeleteInput",

  /**
   * Read - Grants permission to retrieve information about an alarm instance
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_DescribeAlarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   */
  DescribeAlarm = "iotevents:DescribeAlarm",

  /**
   * Read - Grants permission to retrieve information about an alarm model
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeAlarmModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   */
  DescribeAlarmModel = "iotevents:DescribeAlarmModel",

  /**
   * Read - Grants permission to retriev information about a detector instance
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_DescribeDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   */
  DescribeDetector = "iotevents:DescribeDetector",

  /**
   * Read - Grants permission to retrieve information about a detector model
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeDetectorModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   */
  DescribeDetectorModel = "iotevents:DescribeDetectorModel",

  /**
   * Read - Grants permission to retrieve the detector model analysis information
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeDetectorModelAnalysis.html
   */
  DescribeDetectorModelAnalysis = "iotevents:DescribeDetectorModelAnalysis",

  /**
   * Read - Grants permission to retrieve an information about Input
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeInput.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.input `IoteventsResource.input`} 
   */
  DescribeInput = "iotevents:DescribeInput",

  /**
   * Read - Grants permission to retrieve the current settings of the AWS IoT Events logging options
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeLoggingOptions.html
   */
  DescribeLoggingOptions = "iotevents:DescribeLoggingOptions",

  /**
   * Read - Grants permission to retrieve the detector model analysis results
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_GetDetectorModelAnalysisResults.html
   */
  GetDetectorModelAnalysisResults = "iotevents:GetDetectorModelAnalysisResults",

  /**
   * List - Grants permission to list all the versions of an alarm model
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListAlarmModelVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   */
  ListAlarmModelVersions = "iotevents:ListAlarmModelVersions",

  /**
   * List - Grants permission to list the alarm models that you created
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListAlarmModels.html
   */
  ListAlarmModels = "iotevents:ListAlarmModels",

  /**
   * List - Grants permission to retrieve information about all alarm instances per alarmModel
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListAlarms.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   */
  ListAlarms = "iotevents:ListAlarms",

  /**
   * List - Grants permission to list all the versions of a detector model
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModelVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   */
  ListDetectorModelVersions = "iotevents:ListDetectorModelVersions",

  /**
   * List - Grants permission to list the detector models that you created
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModels.html
   */
  ListDetectorModels = "iotevents:ListDetectorModels",

  /**
   * List - Grants permission to retrieve information about all detector instances per detectormodel
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   */
  ListDetectors = "iotevents:ListDetectors",

  /**
   * List - Grants permission to list one or more input routings
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListInputRoutings.html
   */
  ListInputRoutings = "iotevents:ListInputRoutings",

  /**
   * List - Grants permission to lists the inputs you have created
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListInputs.html
   */
  ListInputs = "iotevents:ListInputs",

  /**
   * Read - Grants permission to list the tags (metadata) which you have assigned to the resource
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   * - {@link IoteventsResource.input `IoteventsResource.input`} 
   */
  ListTagsForResource = "iotevents:ListTagsForResource",

  /**
   * Write - Grants permission to set or update the AWS IoT Events logging options
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_PutLoggingOptions.html
   */
  PutLoggingOptions = "iotevents:PutLoggingOptions",

  /**
   * Write - Grants permission to start the detector model analysis
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_StartDetectorModelAnalysis.html
   */
  StartDetectorModelAnalysis = "iotevents:StartDetectorModelAnalysis",

  /**
   * Tagging - Grants permission to adds to or modifies the tags of the given resource.Tags are metadata which can be used to manage a resource
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   * - {@link IoteventsResource.input `IoteventsResource.input`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "iotevents:TagResource",

  /**
   * Tagging - Grants permission to remove the given tags (metadata) from the resource
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   * - {@link IoteventsResource.input `IoteventsResource.input`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "iotevents:UntagResource",

  /**
   * Write - Grants permission to update an alarm model
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateAlarmModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   */
  UpdateAlarmModel = "iotevents:UpdateAlarmModel",

  /**
   * Write - Grants permission to update a detector model
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateDetectorModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   */
  UpdateDetectorModel = "iotevents:UpdateDetectorModel",

  /**
   * Write - Grants permission to update an input
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInput.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.input `IoteventsResource.input`} 
   */
  UpdateInput = "iotevents:UpdateInput",

  /**
   * Write - Grants permission to update input routing
   * @see https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInputRouting.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.input `IoteventsResource.input`} 
   */
  UpdateInputRouting = "iotevents:UpdateInputRouting",

  /**
   * * - Grant all iotevents permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotevents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IoteventsResource.alarmModel `IoteventsResource.alarmModel`} 
   * - {@link IoteventsResource.detectorModel `IoteventsResource.detectorModel`} 
   * - {@link IoteventsResource.input `IoteventsResource.input`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "iotevents:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotevents.html
 */
export const IoteventsResource = {

  /**
   * @see https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  detectorModel: (options: Partial<{partition: string, region: string, account: string, detectorModelName: string}> = {}) => `arn:${options.partition || '*'}:iotevents:${options.region || '*'}:${options.account || '*'}:detectorModel/${options.detectorModelName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  alarmModel: (options: Partial<{partition: string, region: string, account: string, alarmModelName: string}> = {}) => `arn:${options.partition || '*'}:iotevents:${options.region || '*'}:${options.account || '*'}:alarmModel/${options.alarmModelName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  input: (options: Partial<{partition: string, region: string, account: string, inputName: string}> = {}) => `arn:${options.partition || '*'}:iotevents:${options.region || '*'}:${options.account || '*'}:input/${options.inputName || '*'}`,
}

