/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodepipeline.html
 */
export enum CodepipelineAction {

  /**
   * Write - Grants permission to view information about a specified job and whether that job has been received by the job worker
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeJob.html
   */
  AcknowledgeJob = "codepipeline:AcknowledgeJob",

  /**
   * Write - Grants permission to confirm that a job worker has received the specified job (partner actions only)
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_AcknowledgeThirdPartyJob.html
   */
  AcknowledgeThirdPartyJob = "codepipeline:AcknowledgeThirdPartyJob",

  /**
   * Write - Grants permission to create a custom action that you can use in the pipelines associated with your AWS account
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreateCustomActionType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.actiontype `CodepipelineResource.actiontype`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCustomActionType = "codepipeline:CreateCustomActionType",

  /**
   * Write - Grants permission to create a uniquely named pipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_CreatePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePipeline = "codepipeline:CreatePipeline",

  /**
   * Write - Grants permission to delete a custom action
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteCustomActionType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.actiontype `CodepipelineResource.actiontype`} 
   */
  DeleteCustomActionType = "codepipeline:DeleteCustomActionType",

  /**
   * Write - Grants permission to delete a specified pipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeletePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   */
  DeletePipeline = "codepipeline:DeletePipeline",

  /**
   * Write - Grants permission to delete a specified webhook
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeleteWebhook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.webhook `CodepipelineResource.webhook`} 
   */
  DeleteWebhook = "codepipeline:DeleteWebhook",

  /**
   * Write - Grants permission to remove the registration of a webhook with the third party specified in its configuration
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DeregisterWebhookWithThirdParty.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.webhook `CodepipelineResource.webhook`} 
   */
  DeregisterWebhookWithThirdParty = "codepipeline:DeregisterWebhookWithThirdParty",

  /**
   * Write - Grants permission to prevent revisions from transitioning to the next stage in a pipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_DisableStageTransition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.stage `CodepipelineResource.stage`} 
   */
  DisableStageTransition = "codepipeline:DisableStageTransition",

  /**
   * Write - Grants permission to allow revisions to transition to the next stage in a pipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_EnableStageTransition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.stage `CodepipelineResource.stage`} 
   */
  EnableStageTransition = "codepipeline:EnableStageTransition",

  /**
   * Read - Grants permission to view information about an action type
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetActionType.html
   */
  GetActionType = "codepipeline:GetActionType",

  /**
   * Read - Grants permission to view information about a job (custom actions only)
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetJobDetails.html
   */
  GetJobDetails = "codepipeline:GetJobDetails",

  /**
   * Read - Grants permission to retrieve information about a pipeline structure
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   */
  GetPipeline = "codepipeline:GetPipeline",

  /**
   * Read - Grants permission to view information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   */
  GetPipelineExecution = "codepipeline:GetPipelineExecution",

  /**
   * Read - Grants permission to view information about the current state of the stages and actions of a pipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetPipelineState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   */
  GetPipelineState = "codepipeline:GetPipelineState",

  /**
   * Read - Grants permission to view the details of a job for a third-party action (partner actions only)
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_GetThirdPartyJobDetails.html
   */
  GetThirdPartyJobDetails = "codepipeline:GetThirdPartyJobDetails",

  /**
   * Read - Grants permission to list the action executions that have occurred in a pipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   */
  ListActionExecutions = "codepipeline:ListActionExecutions",

  /**
   * Read - Grants permission to list a summary of all the action types available for pipelines in your account
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListActionTypes.html
   */
  ListActionTypes = "codepipeline:ListActionTypes",

  /**
   * List - Grants permission to list a summary of the most recent executions for a pipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelineExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   */
  ListPipelineExecutions = "codepipeline:ListPipelineExecutions",

  /**
   * List - Grants permission to list a summary of all the pipelines associated with your AWS account
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListPipelines.html
   */
  ListPipelines = "codepipeline:ListPipelines",

  /**
   * Read - Grants permission to list tags for a CodePipeline resource
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.actiontype `CodepipelineResource.actiontype`} 
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   * - {@link CodepipelineResource.webhook `CodepipelineResource.webhook`} 
   */
  ListTagsForResource = "codepipeline:ListTagsForResource",

  /**
   * List - Grants permission to list all of the webhooks associated with your AWS account
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_ListWebhooks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.webhook `CodepipelineResource.webhook`} 
   */
  ListWebhooks = "codepipeline:ListWebhooks",

  /**
   * Write - Grants permission to view information about any jobs for CodePipeline to act on
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.actiontype `CodepipelineResource.actiontype`} 
   */
  PollForJobs = "codepipeline:PollForJobs",

  /**
   * Write - Grants permission to determine whether there are any third-party jobs for a job worker to act on (partner actions only)
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PollForThirdPartyJobs.html
   */
  PollForThirdPartyJobs = "codepipeline:PollForThirdPartyJobs",

  /**
   * Write - Grants permission to edit actions in a pipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutActionRevision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.action `CodepipelineResource.action`} 
   */
  PutActionRevision = "codepipeline:PutActionRevision",

  /**
   * Write - Grants permission to provide a response (Approved or Rejected) to a manual approval request in CodePipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutApprovalResult.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.action `CodepipelineResource.action`} 
   */
  PutApprovalResult = "codepipeline:PutApprovalResult",

  /**
   * Write - Grants permission to represent the failure of a job as returned to the pipeline by a job worker (custom actions only)
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobFailureResult.html
   */
  PutJobFailureResult = "codepipeline:PutJobFailureResult",

  /**
   * Write - Grants permission to represent the success of a job as returned to the pipeline by a job worker (custom actions only)
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutJobSuccessResult.html
   */
  PutJobSuccessResult = "codepipeline:PutJobSuccessResult",

  /**
   * Write - Grants permission to represent the failure of a third-party job as returned to the pipeline by a job worker (partner actions only)
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobFailureResult.html
   */
  PutThirdPartyJobFailureResult = "codepipeline:PutThirdPartyJobFailureResult",

  /**
   * Write - Grants permission to represent the success of a third-party job as returned to the pipeline by a job worker (partner actions only)
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutThirdPartyJobSuccessResult.html
   */
  PutThirdPartyJobSuccessResult = "codepipeline:PutThirdPartyJobSuccessResult",

  /**
   * Write - Grants permission to create or update a webhook
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PutWebhook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   * - {@link CodepipelineResource.webhook `CodepipelineResource.webhook`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutWebhook = "codepipeline:PutWebhook",

  /**
   * Write - Grants permission to register a webhook with the third party specified in its configuration
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RegisterWebhookWithThirdParty.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.webhook `CodepipelineResource.webhook`} 
   */
  RegisterWebhookWithThirdParty = "codepipeline:RegisterWebhookWithThirdParty",

  /**
   * Write - Grants permission to resume the pipeline execution by retrying the last failed actions in a stage
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_RetryStageExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.stage `CodepipelineResource.stage`} 
   */
  RetryStageExecution = "codepipeline:RetryStageExecution",

  /**
   * Write - Grants permission to run the most recent revision through the pipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StartPipelineExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   */
  StartPipelineExecution = "codepipeline:StartPipelineExecution",

  /**
   * Write - Grants permission to stop an in-progress pipeline execution
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_StopPipelineExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   */
  StopPipelineExecution = "codepipeline:StopPipelineExecution",

  /**
   * Tagging - Grants permission to tag a CodePipeline resource
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.actiontype `CodepipelineResource.actiontype`} 
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   * - {@link CodepipelineResource.webhook `CodepipelineResource.webhook`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "codepipeline:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from a CodePipeline resource
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.actiontype `CodepipelineResource.actiontype`} 
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   * - {@link CodepipelineResource.webhook `CodepipelineResource.webhook`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "codepipeline:UntagResource",

  /**
   * Write - Grants permission to update an action type
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UpdateActionType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.actiontype `CodepipelineResource.actiontype`} 
   */
  UpdateActionType = "codepipeline:UpdateActionType",

  /**
   * Write - Grants permission to update a pipeline with changes to the structure of the pipeline
   * @see https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_UpdatePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   */
  UpdatePipeline = "codepipeline:UpdatePipeline",

  /**
   * * - Grant all codepipeline permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodepipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodepipelineResource.actiontype `CodepipelineResource.actiontype`} 
   * - {@link CodepipelineResource.pipeline `CodepipelineResource.pipeline`} 
   * - {@link CodepipelineResource.webhook `CodepipelineResource.webhook`} 
   * - {@link CodepipelineResource.stage `CodepipelineResource.stage`} 
   * - {@link CodepipelineResource.action `CodepipelineResource.action`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "codepipeline:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodepipeline.html
 */
export const CodepipelineResource = {

  /**
   * @see https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  action: (options: Partial<{partition: string, region: string, account: string, pipelineName: string, stageName: string, actionName: string}> = {}) => `arn:${options.partition || '*'}:codepipeline:${options.region || '*'}:${options.account || '*'}:${options.pipelineName || '*'}/${options.stageName || '*'}/${options.actionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  actiontype: (options: Partial<{partition: string, region: string, account: string, owner: string, category: string, provider: string, version: string}> = {}) => `arn:${options.partition || '*'}:codepipeline:${options.region || '*'}:${options.account || '*'}:actiontype:${options.owner || '*'}/${options.category || '*'}/${options.provider || '*'}/${options.version || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  pipeline: (options: Partial<{partition: string, region: string, account: string, pipelineName: string}> = {}) => `arn:${options.partition || '*'}:codepipeline:${options.region || '*'}:${options.account || '*'}:${options.pipelineName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  stage: (options: Partial<{partition: string, region: string, account: string, pipelineName: string, stageName: string}> = {}) => `arn:${options.partition || '*'}:codepipeline:${options.region || '*'}:${options.account || '*'}:${options.pipelineName || '*'}/${options.stageName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codepipeline/latest/userguide/iam-access-control-identity-based.html#ACP_ARN_Format
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  webhook: (options: Partial<{partition: string, region: string, account: string, webhookName: string}> = {}) => `arn:${options.partition || '*'}:codepipeline:${options.region || '*'}:${options.account || '*'}:webhook:${options.webhookName || '*'}`,
}

