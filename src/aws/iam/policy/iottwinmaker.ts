/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiottwinmaker.html
 */
export enum IottwinmakerAction {

  /**
   * Write - Grants permission to set values for multiple time series properties
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_BatchPutPropertyValues.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   * - {@link IottwinmakerResource.entity `IottwinmakerResource.entity`} 
   */
  BatchPutPropertyValues = "iottwinmaker:BatchPutPropertyValues",

  /**
   * Write - Grants permission to create a componentType
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateComponentType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateComponentType = "iottwinmaker:CreateComponentType",

  /**
   * Write - Grants permission to create an entity
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateEntity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEntity = "iottwinmaker:CreateEntity",

  /**
   * Write - Grants permission to create a scene
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateScene.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateScene = "iottwinmaker:CreateScene",

  /**
   * Write - Grants permission to create a workspace
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateWorkspace.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateWorkspace = "iottwinmaker:CreateWorkspace",

  /**
   * Write - Grants permission to delete a componentType
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteComponentType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.componentType `IottwinmakerResource.componentType`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  DeleteComponentType = "iottwinmaker:DeleteComponentType",

  /**
   * Write - Grants permission to delete an entity
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteEntity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.entity `IottwinmakerResource.entity`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  DeleteEntity = "iottwinmaker:DeleteEntity",

  /**
   * Write - Grants permission to delete a scene
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteScene.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.scene `IottwinmakerResource.scene`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  DeleteScene = "iottwinmaker:DeleteScene",

  /**
   * Write - Grants permission to delete a workspace
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteWorkspace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  DeleteWorkspace = "iottwinmaker:DeleteWorkspace",

  /**
   * Read - Grants permission to get a componentType
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.componentType `IottwinmakerResource.componentType`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  GetComponentType = "iottwinmaker:GetComponentType",

  /**
   * Read - Grants permission to get an entity
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.entity `IottwinmakerResource.entity`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  GetEntity = "iottwinmaker:GetEntity",

  /**
   * Read - Grants permission to retrieve the property values
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   * - {@link IottwinmakerResource.componentType `IottwinmakerResource.componentType`} 
   * - {@link IottwinmakerResource.entity `IottwinmakerResource.entity`} 
   */
  GetPropertyValue = "iottwinmaker:GetPropertyValue",

  /**
   * Read - Grants permission to retrieve the time series value history
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValueHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   * - {@link IottwinmakerResource.componentType `IottwinmakerResource.componentType`} 
   * - {@link IottwinmakerResource.entity `IottwinmakerResource.entity`} 
   */
  GetPropertyValueHistory = "iottwinmaker:GetPropertyValueHistory",

  /**
   * Read - Grants permission to get a scene
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.scene `IottwinmakerResource.scene`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  GetScene = "iottwinmaker:GetScene",

  /**
   * Read - Grants permission to get a workspace
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  GetWorkspace = "iottwinmaker:GetWorkspace",

  /**
   * List - Grants permission to list all componentTypes in a workspace
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  ListComponentTypes = "iottwinmaker:ListComponentTypes",

  /**
   * List - Grants permission to list all entities in a workspace
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  ListEntities = "iottwinmaker:ListEntities",

  /**
   * List - Grants permission to list all scenes in a workspace
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  ListScenes = "iottwinmaker:ListScenes",

  /**
   * List - Grants permission to list all tags for a resource
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.componentType `IottwinmakerResource.componentType`} 
   * - {@link IottwinmakerResource.entity `IottwinmakerResource.entity`} 
   * - {@link IottwinmakerResource.scene `IottwinmakerResource.scene`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "iottwinmaker:ListTagsForResource",

  /**
   * List - Grants permission to list all workspaces
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html
   */
  ListWorkspaces = "iottwinmaker:ListWorkspaces",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.componentType `IottwinmakerResource.componentType`} 
   * - {@link IottwinmakerResource.entity `IottwinmakerResource.entity`} 
   * - {@link IottwinmakerResource.scene `IottwinmakerResource.scene`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "iottwinmaker:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.componentType `IottwinmakerResource.componentType`} 
   * - {@link IottwinmakerResource.entity `IottwinmakerResource.entity`} 
   * - {@link IottwinmakerResource.scene `IottwinmakerResource.scene`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "iottwinmaker:UntagResource",

  /**
   * Write - Grants permission to update a componentType
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateComponentType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.componentType `IottwinmakerResource.componentType`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  UpdateComponentType = "iottwinmaker:UpdateComponentType",

  /**
   * Write - Grants permission to update an entity
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateEntity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.entity `IottwinmakerResource.entity`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  UpdateEntity = "iottwinmaker:UpdateEntity",

  /**
   * Write - Grants permission to update a scene
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateScene.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.scene `IottwinmakerResource.scene`} 
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  UpdateScene = "iottwinmaker:UpdateScene",

  /**
   * Write - Grants permission to update a workspace
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateWorkspace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   */
  UpdateWorkspace = "iottwinmaker:UpdateWorkspace",

  /**
   * * - Grant all iottwinmaker permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiottwinmaker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IottwinmakerResource.workspace `IottwinmakerResource.workspace`} 
   * - {@link IottwinmakerResource.entity `IottwinmakerResource.entity`} 
   * - {@link IottwinmakerResource.componentType `IottwinmakerResource.componentType`} 
   * - {@link IottwinmakerResource.scene `IottwinmakerResource.scene`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "iottwinmaker:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiottwinmaker.html
 */
export const IottwinmakerResource = {

  /**
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateWorkspace.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workspace: (options: Partial<{partition: string, region: string, account: string, workspaceId: string}> = {}) => `arn:${options.partition || '*'}:iottwinmaker:${options.region || '*'}:${options.account || '*'}:workspace/${options.workspaceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateEntity.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  entity: (options: Partial<{partition: string, region: string, account: string, workspaceId: string, entityId: string}> = {}) => `arn:${options.partition || '*'}:iottwinmaker:${options.region || '*'}:${options.account || '*'}:workspace/${options.workspaceId || '*'}/entity/${options.entityId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateComponentType.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  componentType: (options: Partial<{partition: string, region: string, account: string, workspaceId: string, componentTypeId: string}> = {}) => `arn:${options.partition || '*'}:iottwinmaker:${options.region || '*'}:${options.account || '*'}:workspace/${options.workspaceId || '*'}/component-type/${options.componentTypeId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateScene.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  scene: (options: Partial<{partition: string, region: string, account: string, workspaceId: string, sceneId: string}> = {}) => `arn:${options.partition || '*'}:iottwinmaker:${options.region || '*'}:${options.account || '*'}:workspace/${options.workspaceId || '*'}/scene/${options.sceneId || '*'}`,
}

