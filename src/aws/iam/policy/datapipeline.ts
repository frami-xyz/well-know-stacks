/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatapipeline.html
 */
export enum DatapipelineAction {

  /**
   * Write - Grants permission to validate the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ActivatePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:workerGroup`: Filters access by the name of a worker group for which a Task Runner retrieves work ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-workergroup documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ActivatePipeline = "datapipeline:ActivatePipeline",

  /**
   * Tagging - Grants permission to add or modify tags for the specified pipeline
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_AddTags.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  AddTags = "datapipeline:AddTags",

  /**
   * Write - Grants permission to create a new, empty pipeline
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_CreatePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePipeline = "datapipeline:CreatePipeline",

  /**
   * Write - Grants permission to Deactivate the specified running pipeline
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DeactivatePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:workerGroup`: Filters access by the name of a worker group for which a Task Runner retrieves work ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-workergroup documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeactivatePipeline = "datapipeline:DeactivatePipeline",

  /**
   * Write - Grants permission to delete a pipeline, its pipeline definition, and its run history
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DeletePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeletePipeline = "datapipeline:DeletePipeline",

  /**
   * Read - Grants permission to get the object definitions for a set of objects associated with the pipeline
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DescribeObjects.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DescribeObjects = "datapipeline:DescribeObjects",

  /**
   * List - Grants permission to retrieves metadata about one or more pipelines
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_DescribePipelines.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DescribePipelines = "datapipeline:DescribePipelines",

  /**
   * Read - Grants permission to task runners to call EvaluateExpression, to evaluate a string in the context of the specified object
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_EvaluateExpression.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  EvaluateExpression = "datapipeline:EvaluateExpression",

  /**
   * List - Grants permission to call GetAccountLimits
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetAccountLimits.html
   */
  GetAccountLimits = "datapipeline:GetAccountLimits",

  /**
   * Read - Grants permission to gets the definition of the specified pipeline
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetPipelineDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:workerGroup`: Filters access by the name of a worker group for which a Task Runner retrieves work ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-workergroup documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  GetPipelineDefinition = "datapipeline:GetPipelineDefinition",

  /**
   * List - Grants permission to list the pipeline identifiers for all active pipelines that you have permission to access
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ListPipelines.html
   */
  ListPipelines = "datapipeline:ListPipelines",

  /**
   * Write - Grants permission to task runners to call PollForTask, to receive a task to perform from AWS Data Pipeline
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PollForTask.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:workerGroup`: Filters access by the name of a worker group for which a Task Runner retrieves work ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-workergroup documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PollForTask = "datapipeline:PollForTask",

  /**
   * Write - Grants permission to call PutAccountLimits
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutAccountLimits.html
   */
  PutAccountLimits = "datapipeline:PutAccountLimits",

  /**
   * Write - Grants permission to add tasks, schedules, and preconditions to the specified pipeline
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutPipelineDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:workerGroup`: Filters access by the name of a worker group for which a Task Runner retrieves work ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-workergroup documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutPipelineDefinition = "datapipeline:PutPipelineDefinition",

  /**
   * Read - Grants permission to query the specified pipeline for the names of objects that match the specified set of conditions
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_QueryObjects.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  QueryObjects = "datapipeline:QueryObjects",

  /**
   * Tagging - Grants permission to remove existing tags from the specified pipeline
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_RemoveTags.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RemoveTags = "datapipeline:RemoveTags",

  /**
   * Write - Grants permission to task runners to call ReportTaskProgress, when they are assigned a task to acknowledge that it has the task
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskProgress.html
   */
  ReportTaskProgress = "datapipeline:ReportTaskProgress",

  /**
   * Write - Grants permission to task runners to call ReportTaskRunnerHeartbeat every 15 minutes to indicate that they are operational
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ReportTaskRunnerHeartbeat.html
   */
  ReportTaskRunnerHeartbeat = "datapipeline:ReportTaskRunnerHeartbeat",

  /**
   * Write - Grants permission to requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_SetStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  SetStatus = "datapipeline:SetStatus",

  /**
   * Write - Grants permission to task runners to call SetTaskStatus to notify AWS Data Pipeline that a task is completed and provide information about the final status
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_SetTaskStatus.html
   */
  SetTaskStatus = "datapipeline:SetTaskStatus",

  /**
   * Read - Grants permission to validate the specified pipeline definition to ensure that it is well formed and can be run without error
   * @see https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_ValidatePipelineDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:workerGroup`: Filters access by the name of a worker group for which a Task Runner retrieves work ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-workergroup documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ValidatePipelineDefinition = "datapipeline:ValidatePipelineDefinition",

  /**
   * * - Grant all datapipeline permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatapipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `datapipeline:PipelineCreator`: Filters access by the IAM user that created the pipeline ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-example-tag-policies.html#ex3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:Tag`: Filters access by customer-specified key/value pair that can be attached to a resource ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `datapipeline:workerGroup`: Filters access by the name of a worker group for which a Task Runner retrieves work ({@link https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-resourcebased-access.html#dp-control-access-workergroup documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "datapipeline:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatapipeline.html
 */
export const DatapipelineResource = {
}

