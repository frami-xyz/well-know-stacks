/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutforequipment.html
 */
export enum LookoutequipmentAction {

  /**
   * Write - Grants permission to create a dataset
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_CreateDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.dataset `LookoutequipmentResource.dataset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataset = "lookoutequipment:CreateDataset",

  /**
   * Write - Grants permission to create an inference scheduler for a trained model
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_CreateInferenceScheduler.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.inferenceScheduler `LookoutequipmentResource.inferenceScheduler`} 
   * - {@link LookoutequipmentResource.model `LookoutequipmentResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateInferenceScheduler = "lookoutequipment:CreateInferenceScheduler",

  /**
   * Write - Grants permission to create a model that is trained on a dataset
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_CreateModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.dataset `LookoutequipmentResource.dataset`} 
   * - {@link LookoutequipmentResource.model `LookoutequipmentResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateModel = "lookoutequipment:CreateModel",

  /**
   * Write - Grants permission to delete a dataset
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DeleteDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.dataset `LookoutequipmentResource.dataset`} 
   */
  DeleteDataset = "lookoutequipment:DeleteDataset",

  /**
   * Write - Grants permission to delete an inference scheduler
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DeleteInferenceScheduler.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.inferenceScheduler `LookoutequipmentResource.inferenceScheduler`} 
   */
  DeleteInferenceScheduler = "lookoutequipment:DeleteInferenceScheduler",

  /**
   * Write - Grants permission to delete a model
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DeleteModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.model `LookoutequipmentResource.model`} 
   */
  DeleteModel = "lookoutequipment:DeleteModel",

  /**
   * Read - Grants permission to describe a data ingestion job
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeDataIngestionJob
   */
  DescribeDataIngestionJob = "lookoutequipment:DescribeDataIngestionJob",

  /**
   * Read - Grants permission to describe a dataset
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.dataset `LookoutequipmentResource.dataset`} 
   */
  DescribeDataset = "lookoutequipment:DescribeDataset",

  /**
   * Read - Grants permission to describe an inference scheduler
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeInferenceScheduler.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.inferenceScheduler `LookoutequipmentResource.inferenceScheduler`} 
   */
  DescribeInferenceScheduler = "lookoutequipment:DescribeInferenceScheduler",

  /**
   * Read - Grants permission to describe a model
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_DescribeModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.model `LookoutequipmentResource.model`} 
   */
  DescribeModel = "lookoutequipment:DescribeModel",

  /**
   * List - Grants permission to list the data ingestion jobs in your account or for a particular dataset
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListDataIngestionJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.dataset `LookoutequipmentResource.dataset`} 
   */
  ListDataIngestionJobs = "lookoutequipment:ListDataIngestionJobs",

  /**
   * List - Grants permission to list the datasets in your account
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListDatasets.html
   */
  ListDatasets = "lookoutequipment:ListDatasets",

  /**
   * Read - Grants permission to list the inference executions for an inference scheduler
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListInferenceExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.inferenceScheduler `LookoutequipmentResource.inferenceScheduler`} 
   */
  ListInferenceExecutions = "lookoutequipment:ListInferenceExecutions",

  /**
   * List - Grants permission to list the inference schedulers in your account
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListInferenceSchedulers.html
   */
  ListInferenceSchedulers = "lookoutequipment:ListInferenceSchedulers",

  /**
   * List - Grants permission to list the models in your account
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListModels.html
   */
  ListModels = "lookoutequipment:ListModels",

  /**
   * List - Grants permission to list the sensor statistics for a particular dataset or an ingestion job
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListSensorStatistics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.dataset `LookoutequipmentResource.dataset`} 
   */
  ListSensorStatistics = "lookoutequipment:ListSensorStatistics",

  /**
   * Read - Grants permission to list the tags for a resource
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.dataset `LookoutequipmentResource.dataset`} 
   * - {@link LookoutequipmentResource.inferenceScheduler `LookoutequipmentResource.inferenceScheduler`} 
   * - {@link LookoutequipmentResource.model `LookoutequipmentResource.model`} 
   */
  ListTagsForResource = "lookoutequipment:ListTagsForResource",

  /**
   * Write - Grants permission to start a data ingestion job for a dataset
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_StartDataIngestionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.dataset `LookoutequipmentResource.dataset`} 
   */
  StartDataIngestionJob = "lookoutequipment:StartDataIngestionJob",

  /**
   * Write - Grants permission to start an inference scheduler
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_StartInferenceScheduler.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.inferenceScheduler `LookoutequipmentResource.inferenceScheduler`} 
   */
  StartInferenceScheduler = "lookoutequipment:StartInferenceScheduler",

  /**
   * Write - Grants permission to stop an inference scheduler
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_StopInferenceScheduler.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.inferenceScheduler `LookoutequipmentResource.inferenceScheduler`} 
   */
  StopInferenceScheduler = "lookoutequipment:StopInferenceScheduler",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.dataset `LookoutequipmentResource.dataset`} 
   * - {@link LookoutequipmentResource.inferenceScheduler `LookoutequipmentResource.inferenceScheduler`} 
   * - {@link LookoutequipmentResource.model `LookoutequipmentResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "lookoutequipment:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.dataset `LookoutequipmentResource.dataset`} 
   * - {@link LookoutequipmentResource.inferenceScheduler `LookoutequipmentResource.inferenceScheduler`} 
   * - {@link LookoutequipmentResource.model `LookoutequipmentResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "lookoutequipment:UntagResource",

  /**
   * Write - Grants permission to update an inference scheduler
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/API_UpdateInferenceScheduler.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.inferenceScheduler `LookoutequipmentResource.inferenceScheduler`} 
   */
  UpdateInferenceScheduler = "lookoutequipment:UpdateInferenceScheduler",

  /**
   * * - Grant all lookoutequipment permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutforequipment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutequipmentResource.dataset `LookoutequipmentResource.dataset`} 
   * - {@link LookoutequipmentResource.inferenceScheduler `LookoutequipmentResource.inferenceScheduler`} 
   * - {@link LookoutequipmentResource.model `LookoutequipmentResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "lookoutequipment:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutforequipment.html
 */
export const LookoutequipmentResource = {

  /**
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/dataset.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataset: (options: Partial<{partition: string, region: string, accountId: string, datasetName: string, datasetId: string}> = {}) => `arn:${options.partition || '*'}:lookoutequipment:${options.region || '*'}:${options.accountId || '*'}:dataset/${options.datasetName || '*'}/${options.datasetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/model.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  model: (options: Partial<{partition: string, region: string, account: string, modelName: string, modelId: string}> = {}) => `arn:${options.partition || '*'}:lookoutequipment:${options.region || '*'}:${options.account || '*'}:model/${options.modelName || '*'}/${options.modelId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/inference-scheduler.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  inferenceScheduler: (options: Partial<{partition: string, region: string, account: string, inferenceSchedulerName: string, inferenceSchedulerId: string}> = {}) => `arn:${options.partition || '*'}:lookoutequipment:${options.region || '*'}:${options.account || '*'}:inference-scheduler/${options.inferenceSchedulerName || '*'}/${options.inferenceSchedulerId || '*'}`,
}

