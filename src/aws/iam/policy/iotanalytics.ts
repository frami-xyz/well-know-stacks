/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotanalytics.html
 */
export enum IotanalyticsAction {

  /**
   * Write - Puts a batch of messages into the specified channel
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_BatchPutMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.channel `IotanalyticsResource.channel`} 
   */
  BatchPutMessage = "iotanalytics:BatchPutMessage",

  /**
   * Write - Cancels reprocessing for the specified pipeline
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CancelPipelineReprocessing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.pipeline `IotanalyticsResource.pipeline`} 
   */
  CancelPipelineReprocessing = "iotanalytics:CancelPipelineReprocessing",

  /**
   * Write - Creates a channel
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.channel `IotanalyticsResource.channel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateChannel = "iotanalytics:CreateChannel",

  /**
   * Write - Creates a dataset
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataset = "iotanalytics:CreateDataset",

  /**
   * Write - Generates content from the specified dataset (by executing the dataset actions)
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDatasetContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   */
  CreateDatasetContent = "iotanalytics:CreateDatasetContent",

  /**
   * Write - Creates a datastore
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDatastore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.datastore `IotanalyticsResource.datastore`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDatastore = "iotanalytics:CreateDatastore",

  /**
   * Write - Creates a pipeline
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreatePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.pipeline `IotanalyticsResource.pipeline`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePipeline = "iotanalytics:CreatePipeline",

  /**
   * Write - Deletes the specified channel
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.channel `IotanalyticsResource.channel`} 
   */
  DeleteChannel = "iotanalytics:DeleteChannel",

  /**
   * Write - Deletes the specified dataset
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   */
  DeleteDataset = "iotanalytics:DeleteDataset",

  /**
   * Write - Deletes the content of the specified dataset
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatasetContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   */
  DeleteDatasetContent = "iotanalytics:DeleteDatasetContent",

  /**
   * Write - Deletes the specified datastore
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatastore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.datastore `IotanalyticsResource.datastore`} 
   */
  DeleteDatastore = "iotanalytics:DeleteDatastore",

  /**
   * Write - Deletes the specified pipeline
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeletePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.pipeline `IotanalyticsResource.pipeline`} 
   */
  DeletePipeline = "iotanalytics:DeletePipeline",

  /**
   * Read - Describes the specified channel
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.channel `IotanalyticsResource.channel`} 
   */
  DescribeChannel = "iotanalytics:DescribeChannel",

  /**
   * Read - Describes the specified dataset
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   */
  DescribeDataset = "iotanalytics:DescribeDataset",

  /**
   * Read - Describes the specified datastore
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDatastore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.datastore `IotanalyticsResource.datastore`} 
   */
  DescribeDatastore = "iotanalytics:DescribeDatastore",

  /**
   * Read - Describes logging options for the the account
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeLoggingOptions.html
   */
  DescribeLoggingOptions = "iotanalytics:DescribeLoggingOptions",

  /**
   * Read - Describes the specified pipeline
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.pipeline `IotanalyticsResource.pipeline`} 
   */
  DescribePipeline = "iotanalytics:DescribePipeline",

  /**
   * Read - Gets the content of the specified dataset
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_GetDatasetContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   */
  GetDatasetContent = "iotanalytics:GetDatasetContent",

  /**
   * List - Lists the channels for the account
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListChannels.html
   */
  ListChannels = "iotanalytics:ListChannels",

  /**
   * List - Lists information about dataset contents that have been created
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatasetContents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   */
  ListDatasetContents = "iotanalytics:ListDatasetContents",

  /**
   * List - Lists the datasets for the account
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatasets.html
   */
  ListDatasets = "iotanalytics:ListDatasets",

  /**
   * List - Lists the datastores for the account
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatastores.html
   */
  ListDatastores = "iotanalytics:ListDatastores",

  /**
   * List - Lists the pipelines for the account
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListPipelines.html
   */
  ListPipelines = "iotanalytics:ListPipelines",

  /**
   * Read - Lists the tags (metadata) which you have assigned to the resource
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.channel `IotanalyticsResource.channel`} 
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   * - {@link IotanalyticsResource.datastore `IotanalyticsResource.datastore`} 
   * - {@link IotanalyticsResource.pipeline `IotanalyticsResource.pipeline`} 
   */
  ListTagsForResource = "iotanalytics:ListTagsForResource",

  /**
   * Write - Puts logging options for the the account
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_PutLoggingOptions.html
   */
  PutLoggingOptions = "iotanalytics:PutLoggingOptions",

  /**
   * Read - Runs the specified pipeline activity
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_RunPipelineActivity.html
   */
  RunPipelineActivity = "iotanalytics:RunPipelineActivity",

  /**
   * Read - Samples the specified channel's data
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_SampleChannelData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.channel `IotanalyticsResource.channel`} 
   */
  SampleChannelData = "iotanalytics:SampleChannelData",

  /**
   * Write - Starts reprocessing for the specified pipeline
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_StartPipelineReprocessing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.pipeline `IotanalyticsResource.pipeline`} 
   */
  StartPipelineReprocessing = "iotanalytics:StartPipelineReprocessing",

  /**
   * Tagging - Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.channel `IotanalyticsResource.channel`} 
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   * - {@link IotanalyticsResource.datastore `IotanalyticsResource.datastore`} 
   * - {@link IotanalyticsResource.pipeline `IotanalyticsResource.pipeline`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "iotanalytics:TagResource",

  /**
   * Tagging - Removes the given tags (metadata) from the resource
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.channel `IotanalyticsResource.channel`} 
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   * - {@link IotanalyticsResource.datastore `IotanalyticsResource.datastore`} 
   * - {@link IotanalyticsResource.pipeline `IotanalyticsResource.pipeline`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "iotanalytics:UntagResource",

  /**
   * Write - Updates the specified channel
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.channel `IotanalyticsResource.channel`} 
   */
  UpdateChannel = "iotanalytics:UpdateChannel",

  /**
   * Write - Updates the specified dataset
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   */
  UpdateDataset = "iotanalytics:UpdateDataset",

  /**
   * Write - Updates the specified datastore
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDatastore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.datastore `IotanalyticsResource.datastore`} 
   */
  UpdateDatastore = "iotanalytics:UpdateDatastore",

  /**
   * Write - Updates the specified pipeline
   * @see https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdatePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.pipeline `IotanalyticsResource.pipeline`} 
   */
  UpdatePipeline = "iotanalytics:UpdatePipeline",

  /**
   * * - Grant all iotanalytics permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotanalytics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotanalyticsResource.channel `IotanalyticsResource.channel`} 
   * - {@link IotanalyticsResource.pipeline `IotanalyticsResource.pipeline`} 
   * - {@link IotanalyticsResource.dataset `IotanalyticsResource.dataset`} 
   * - {@link IotanalyticsResource.datastore `IotanalyticsResource.datastore`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "iotanalytics:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotanalytics.html
 */
export const IotanalyticsResource = {

  /**
   * @see https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `iotanalytics:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/iotanalytics/latest/userguide/tagging.html#tagging-iam documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  channel: (options: Partial<{partition: string, region: string, account: string, channelName: string}> = {}) => `arn:${options.partition || '*'}:iotanalytics:${options.region || '*'}:${options.account || '*'}:channel/${options.channelName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `iotanalytics:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/iotanalytics/latest/userguide/tagging.html#tagging-iam documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataset: (options: Partial<{partition: string, region: string, account: string, datasetName: string}> = {}) => `arn:${options.partition || '*'}:iotanalytics:${options.region || '*'}:${options.account || '*'}:dataset/${options.datasetName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `iotanalytics:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/iotanalytics/latest/userguide/tagging.html#tagging-iam documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  datastore: (options: Partial<{partition: string, region: string, account: string, datastoreName: string}> = {}) => `arn:${options.partition || '*'}:iotanalytics:${options.region || '*'}:${options.account || '*'}:datastore/${options.datastoreName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `iotanalytics:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/iotanalytics/latest/userguide/tagging.html#tagging-iam documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  pipeline: (options: Partial<{partition: string, region: string, account: string, pipelineName: string}> = {}) => `arn:${options.partition || '*'}:iotanalytics:${options.region || '*'}:${options.account || '*'}:pipeline/${options.pipelineName || '*'}`,
}

