/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotthingsgraph.html
 */
export enum IotthingsgraphAction {

  /**
   * Write - Associates a device with a concrete thing that is in the user's registry. A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_AssociateEntityToThing.html
   */
  AssociateEntityToThing = "iotthingsgraph:AssociateEntityToThing",

  /**
   * Write - Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_CreateFlowTemplate.html
   */
  CreateFlowTemplate = "iotthingsgraph:CreateFlowTemplate",

  /**
   * Write - Creates an instance of a system with specified configurations and Things
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_CreateSystemInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the thingsgraph service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the thingsgraph service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSystemInstance = "iotthingsgraph:CreateSystemInstance",

  /**
   * Write - Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_CreateSystemTemplate.html
   */
  CreateSystemTemplate = "iotthingsgraph:CreateSystemTemplate",

  /**
   * Write - Deletes a workflow. Any new system or system instance that contains this workflow will fail to update or deploy. Existing system instances that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deploying the system instance)
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_DeleteFlowTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.workflow `IotthingsgraphResource.workflow`} 
   */
  DeleteFlowTemplate = "iotthingsgraph:DeleteFlowTemplate",

  /**
   * Write - Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows in the namespace before performing this action
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_DeleteNamespace.html
   */
  DeleteNamespace = "iotthingsgraph:DeleteNamespace",

  /**
   * Write - Deletes a system instance. Only instances that have never been deployed, or that have been undeployed from the target can be deleted. Users can create a new system instance that has the same ID as a deleted system instance
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_DeleteSystemInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.systemInstance `IotthingsgraphResource.systemInstance`} 
   */
  DeleteSystemInstance = "iotthingsgraph:DeleteSystemInstance",

  /**
   * Write - Deletes a system. New system instances can't contain the system after its deletion. Existing system instances that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_DeleteSystemTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.system `IotthingsgraphResource.system`} 
   */
  DeleteSystemTemplate = "iotthingsgraph:DeleteSystemTemplate",

  /**
   * Write - Deploys the system instance to the target specified in CreateSystemInstance
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_DeploySystemInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.systemInstance `IotthingsgraphResource.systemInstance`} 
   */
  DeploySystemInstance = "iotthingsgraph:DeploySystemInstance",

  /**
   * Write - Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing system instances that use the flow will continue to run
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_DeprecateFlowTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.workflow `IotthingsgraphResource.workflow`} 
   */
  DeprecateFlowTemplate = "iotthingsgraph:DeprecateFlowTemplate",

  /**
   * Write - Deprecates the specified system
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_DeprecateSystemTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.system `IotthingsgraphResource.system`} 
   */
  DeprecateSystemTemplate = "iotthingsgraph:DeprecateSystemTemplate",

  /**
   * Read - Gets the latest version of the user's namespace and the public version that it is tracking
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_DescribeNamespace.html
   */
  DescribeNamespace = "iotthingsgraph:DescribeNamespace",

  /**
   * Write - Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_DissociateEntityFromThing.html
   */
  DissociateEntityFromThing = "iotthingsgraph:DissociateEntityFromThing",

  /**
   * Read - Gets descriptions of the specified entities. Uses the latest version of the user's namespace by default
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_GetEntities.html
   */
  GetEntities = "iotthingsgraph:GetEntities",

  /**
   * Read - Gets the latest version of the DefinitionDocument and FlowTemplateSummary for the specified workflow
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_GetFlowTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.workflow `IotthingsgraphResource.workflow`} 
   */
  GetFlowTemplate = "iotthingsgraph:GetFlowTemplate",

  /**
   * Read - Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_GetFlowTemplateRevisions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.workflow `IotthingsgraphResource.workflow`} 
   */
  GetFlowTemplateRevisions = "iotthingsgraph:GetFlowTemplateRevisions",

  /**
   * Read - Gets the status of a namespace deletion task
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_GetNamespaceDeletionStatus.html
   */
  GetNamespaceDeletionStatus = "iotthingsgraph:GetNamespaceDeletionStatus",

  /**
   * Read - Gets a system instance
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_GetSystemInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.systemInstance `IotthingsgraphResource.systemInstance`} 
   */
  GetSystemInstance = "iotthingsgraph:GetSystemInstance",

  /**
   * Read - Gets a system
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_GetSystemTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.system `IotthingsgraphResource.system`} 
   */
  GetSystemTemplate = "iotthingsgraph:GetSystemTemplate",

  /**
   * Read - Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_GetSystemTemplateRevisions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.system `IotthingsgraphResource.system`} 
   */
  GetSystemTemplateRevisions = "iotthingsgraph:GetSystemTemplateRevisions",

  /**
   * Read - Gets the status of the specified upload
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_GetUploadStatus.html
   */
  GetUploadStatus = "iotthingsgraph:GetUploadStatus",

  /**
   * List - Lists details of a single workflow execution
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_ListFlowExecutionMessages.html
   */
  ListFlowExecutionMessages = "iotthingsgraph:ListFlowExecutionMessages",

  /**
   * List - Lists all tags for a given resource
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.systemInstance `IotthingsgraphResource.systemInstance`} 
   */
  ListTagsForResource = "iotthingsgraph:ListTagsForResource",

  /**
   * Read - Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_SearchEntities.html
   */
  SearchEntities = "iotthingsgraph:SearchEntities",

  /**
   * Read - Searches for workflow executions of a system instance
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_SearchFlowExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.systemInstance `IotthingsgraphResource.systemInstance`} 
   */
  SearchFlowExecutions = "iotthingsgraph:SearchFlowExecutions",

  /**
   * Read - Searches for summary information about workflows
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_SearchFlowTemplates.html
   */
  SearchFlowTemplates = "iotthingsgraph:SearchFlowTemplates",

  /**
   * Read - Searches for system instances in the user's account
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_SearchSystemInstances.html
   */
  SearchSystemInstances = "iotthingsgraph:SearchSystemInstances",

  /**
   * Read - Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_SearchSystemTemplates.html
   */
  SearchSystemTemplates = "iotthingsgraph:SearchSystemTemplates",

  /**
   * Read - Searches for things associated with the specified entity. You can search by both device and device model
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_SearchThings.html
   */
  SearchThings = "iotthingsgraph:SearchThings",

  /**
   * Tagging - Tag a specified resource
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.systemInstance `IotthingsgraphResource.systemInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the thingsgraph service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the thingsgraph service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "iotthingsgraph:TagResource",

  /**
   * Write - Removes the system instance and associated triggers from the target
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_UndeploySystemInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.systemInstance `IotthingsgraphResource.systemInstance`} 
   */
  UndeploySystemInstance = "iotthingsgraph:UndeploySystemInstance",

  /**
   * Tagging - Untag a specified resource
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.systemInstance `IotthingsgraphResource.systemInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the thingsgraph service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "iotthingsgraph:UntagResource",

  /**
   * Write - Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. The workflow can contain only entities in the specified namespace
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_UpdateFlowTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.workflow `IotthingsgraphResource.workflow`} 
   */
  UpdateFlowTemplate = "iotthingsgraph:UpdateFlowTemplate",

  /**
   * Write - Updates the specified system. You don't need to run this action after updating a workflow. Any system instance that uses the system will see the changes in the system when it is redeployed
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_UpdateSystemTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.system `IotthingsgraphResource.system`} 
   */
  UpdateSystemTemplate = "iotthingsgraph:UpdateSystemTemplate",

  /**
   * Write - Asynchronously uploads one or more entity definitions to the user's namespace
   * @see https://docs.aws.amazon.com/thingsgraph/latest/APIReference/%7BAPIReferenceDocPage%7DAPI_UploadEntityDefinitions.html
   */
  UploadEntityDefinitions = "iotthingsgraph:UploadEntityDefinitions",

  /**
   * * - Grant all iotthingsgraph permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotthingsgraph.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotthingsgraphResource.workflow `IotthingsgraphResource.workflow`} 
   * - {@link IotthingsgraphResource.systemInstance `IotthingsgraphResource.systemInstance`} 
   * - {@link IotthingsgraphResource.system `IotthingsgraphResource.system`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the thingsgraph service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the thingsgraph service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "iotthingsgraph:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotthingsgraph.html
 */
export const IotthingsgraphResource = {

  /**
   * @see https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-models-tdm-iot-workflow.html
   */
  workflow: (options: Partial<{partition: string, region: string, account: string, namespacePath: string}> = {}) => `arn:${options.partition || '*'}:iotthingsgraph:${options.region || '*'}:${options.account || '*'}:Workflow/${options.namespacePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-models-tdm-iot-system.html
   */
  system: (options: Partial<{partition: string, region: string, account: string, namespacePath: string}> = {}) => `arn:${options.partition || '*'}:iotthingsgraph:${options.region || '*'}:${options.account || '*'}:System/${options.namespacePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-models-tdm-iot-sdc-deployconfig.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  systemInstance: (options: Partial<{partition: string, region: string, account: string, namespacePath: string}> = {}) => `arn:${options.partition || '*'}:iotthingsgraph:${options.region || '*'}:${options.account || '*'}:Deployment/${options.namespacePath || '*'}`,
}

