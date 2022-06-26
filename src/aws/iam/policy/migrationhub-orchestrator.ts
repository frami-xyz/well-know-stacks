/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhuborchestrator.html
 */
export enum MigrationhubOrchestratorAction {

  /**
   * Write - Grants permission to create a workflow based on the selected template
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_CreateWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWorkflow = "migrationhub-orchestrator:CreateWorkflow",

  /**
   * Write - Grants permission to create a step under a workflow and a specific step group
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_CreateWorkflowStep.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  CreateWorkflowStep = "migrationhub-orchestrator:CreateWorkflowStep",

  /**
   * Write - Grants permission to to create a custom step group for a given workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_CreateWorkflowStepGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  CreateWorkflowStepGroup = "migrationhub-orchestrator:CreateWorkflowStepGroup",

  /**
   * Write - Grants permission to a workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_DeleteWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  DeleteWorkflow = "migrationhub-orchestrator:DeleteWorkflow",

  /**
   * Write - Grants permission to delete a step from a specific step group under a workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_DeleteWorkflowStep.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  DeleteWorkflowStep = "migrationhub-orchestrator:DeleteWorkflowStep",

  /**
   * Write - Grants permission to delete a step group associated with a workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_DeleteWorkflowStepGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  DeleteWorkflowStepGroup = "migrationhub-orchestrator:DeleteWorkflowStepGroup",

  /**
   * Read - Grants permission to the plugin to receive information from the service
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetMessage.html
   */
  GetMessage = "migrationhub-orchestrator:GetMessage",

  /**
   * Read - Grants permission to get retrieve metadata for a Template
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetTemplate.html
   */
  GetTemplate = "migrationhub-orchestrator:GetTemplate",

  /**
   * Read - Grants permission to retrieve details of a step associated with a template and a step group
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetTemplateStep.html
   */
  GetTemplateStep = "migrationhub-orchestrator:GetTemplateStep",

  /**
   * Read - Grants permission to retrieve metadata of a step group under a template
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetTemplateStepGroup.html
   */
  GetTemplateStepGroup = "migrationhub-orchestrator:GetTemplateStepGroup",

  /**
   * Read - Grants permission to retrieve metadata asscociated with a workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  GetWorkflow = "migrationhub-orchestrator:GetWorkflow",

  /**
   * Read - Grants permission to get details of step associated with a workflow and a step group
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetWorkflowStep.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  GetWorkflowStep = "migrationhub-orchestrator:GetWorkflowStep",

  /**
   * Read - Grants permission to get details of a step group associated with a workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_GetWorkflowStepGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  GetWorkflowStepGroup = "migrationhub-orchestrator:GetWorkflowStepGroup",

  /**
   * List - Grants permission to get a list all registered Plugins
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListPlugins.html
   */
  ListPlugins = "migrationhub-orchestrator:ListPlugins",

  /**
   * Read - Grants permission to get a list of all the tags tied to a resource
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  ListTagsForResource = "migrationhub-orchestrator:ListTagsForResource",

  /**
   * List - Grants permission to lists step groups of a template
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListTemplateStepGroups.html
   */
  ListTemplateStepGroups = "migrationhub-orchestrator:ListTemplateStepGroups",

  /**
   * List - Grants permission to get a list of steps in a step group
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListServers.html
   */
  ListTemplateSteps = "migrationhub-orchestrator:ListTemplateSteps",

  /**
   * List - Grants permission to get a list of all Templates available to customer
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListTemplates.html
   */
  ListTemplates = "migrationhub-orchestrator:ListTemplates",

  /**
   * List - Grants permission to get list of step groups associated with a workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListWorkflowStepGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  ListWorkflowStepGroups = "migrationhub-orchestrator:ListWorkflowStepGroups",

  /**
   * List - Grants permission to get a list of steps within  step group associated with a workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListAntiPatterns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  ListWorkflowSteps = "migrationhub-orchestrator:ListWorkflowSteps",

  /**
   * List - Grants permission to list all workflows
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_ListWorkflows.html
   */
  ListWorkflows = "migrationhub-orchestrator:ListWorkflows",

  /**
   * Write - Grants permission to register the plugin to receive an ID and to start receiving messages from the service
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_RegisterPlugin.html
   */
  RegisterPlugin = "migrationhub-orchestrator:RegisterPlugin",

  /**
   * Write - Grants permission to retry a failed step within a workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_RetryWorkflowStep.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  RetryWorkflowStep = "migrationhub-orchestrator:RetryWorkflowStep",

  /**
   * Write - Grants permission to the plugin to send information to the service
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_SendMessage.html
   */
  SendMessage = "migrationhub-orchestrator:SendMessage",

  /**
   * Write - Grants permission to start a workflow or resume a stopped workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_StartWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  StartWorkflow = "migrationhub-orchestrator:StartWorkflow",

  /**
   * Write - Grants permission to stop a workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_StopWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  StopWorkflow = "migrationhub-orchestrator:StopWorkflow",

  /**
   * Tagging - Grants permission to add tags to a resource
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "migrationhub-orchestrator:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "migrationhub-orchestrator:UntagResource",

  /**
   * Write - Grants permission to update the metadata associated with the workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_UpdateWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  UpdateWorkflow = "migrationhub-orchestrator:UpdateWorkflow",

  /**
   * Write - Grants permission to update metadata and status of a custom step within a workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_UpdateWorkflowStep.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  UpdateWorkflowStep = "migrationhub-orchestrator:UpdateWorkflowStep",

  /**
   * Write - Grants permission to update metadata associated with a step group in a given workflow
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/APIReference/API_UpdateWorkflowStepGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   */
  UpdateWorkflowStepGroup = "migrationhub-orchestrator:UpdateWorkflowStepGroup",

  /**
   * * - Grant all migrationhub-orchestrator permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhuborchestrator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MigrationhubOrchestratorResource.workflow `MigrationhubOrchestratorResource.workflow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "migrationhub-orchestrator:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhuborchestrator.html
 */
export const MigrationhubOrchestratorResource = {

  /**
   * @see https://docs.aws.amazon.com/migrationhub-orchestrator/latest/userguide/workflow.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workflow: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:migrationhub-orchestrator:${options.region || '*'}:${options.account || '*'}:workflow/${options.resourceId || '*'}`,
}

