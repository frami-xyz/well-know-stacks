/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappintegrations.html
 */
export enum AppIntegrationsAction {

  /**
   * Write - Grants permission to create a new DataIntegration
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.dataIntegration `AppIntegrationsResource.dataIntegration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataIntegration = "app-integrations:CreateDataIntegration",

  /**
   * Write - Grants permission to create a DataIntegrationAssociation
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegrationAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.dataIntegration `AppIntegrationsResource.dataIntegration`} 
   */
  CreateDataIntegrationAssociation = "app-integrations:CreateDataIntegrationAssociation",

  /**
   * Write - Grants permission to create a new EventIntegration
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateEventIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.eventIntegration `AppIntegrationsResource.eventIntegration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEventIntegration = "app-integrations:CreateEventIntegration",

  /**
   * Write - Grants permission to create an EventIntegrationAssociation
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateEventIntegrationAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.eventIntegration `AppIntegrationsResource.eventIntegration`} 
   */
  CreateEventIntegrationAssociation = "app-integrations:CreateEventIntegrationAssociation",

  /**
   * Write - Grants permission to delete a DataIntegration
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.dataIntegration `AppIntegrationsResource.dataIntegration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteDataIntegration = "app-integrations:DeleteDataIntegration",

  /**
   * Write - Grants permission to delete a DataIntegrationAssociation
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegrationAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.dataIntegrationAssociation `AppIntegrationsResource.dataIntegrationAssociation`} 
   */
  DeleteDataIntegrationAssociation = "app-integrations:DeleteDataIntegrationAssociation",

  /**
   * Write - Grants permission to delete an EventIntegration
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteEventIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.eventIntegration `AppIntegrationsResource.eventIntegration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteEventIntegration = "app-integrations:DeleteEventIntegration",

  /**
   * Write - Grants permission to delete an EventIntegrationAssociation
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteEventIntegrationAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.eventIntegrationAssociation `AppIntegrationsResource.eventIntegrationAssociation`} 
   */
  DeleteEventIntegrationAssociation = "app-integrations:DeleteEventIntegrationAssociation",

  /**
   * Read - Grants permission to view details about DataIntegrations
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_GetDataIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.dataIntegration `AppIntegrationsResource.dataIntegration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetDataIntegration = "app-integrations:GetDataIntegration",

  /**
   * Read - Grants permission to view details about EventIntegrations
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_GetEventIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.eventIntegration `AppIntegrationsResource.eventIntegration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetEventIntegration = "app-integrations:GetEventIntegration",

  /**
   * List - Grants permission to list DataIntegrationAssociations
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListDataIntegrationAssociations
   */
  ListDataIntegrationAssociations = "app-integrations:ListDataIntegrationAssociations",

  /**
   * List - Grants permission to list DataIntegrations
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListDataIntegrations.html
   */
  ListDataIntegrations = "app-integrations:ListDataIntegrations",

  /**
   * Read - Grants permission to list EventIntegrationAssociations
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListEventIntegrationAssociations
   */
  ListEventIntegrationAssociations = "app-integrations:ListEventIntegrationAssociations",

  /**
   * List - Grants permission to list EventIntegrations
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListEventIntegrations.html
   */
  ListEventIntegrations = "app-integrations:ListEventIntegrations",

  /**
   * Read - Grants permission to lists tag for an Amazon AppIntegration resource
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.dataIntegration `AppIntegrationsResource.dataIntegration`} 
   * - {@link AppIntegrationsResource.dataIntegrationAssociation `AppIntegrationsResource.dataIntegrationAssociation`} 
   * - {@link AppIntegrationsResource.eventIntegration `AppIntegrationsResource.eventIntegration`} 
   * - {@link AppIntegrationsResource.eventIntegrationAssociation `AppIntegrationsResource.eventIntegrationAssociation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "app-integrations:ListTagsForResource",

  /**
   * Tagging - Grants permission to tag an Amazon AppIntegration resource
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.dataIntegration `AppIntegrationsResource.dataIntegration`} 
   * - {@link AppIntegrationsResource.dataIntegrationAssociation `AppIntegrationsResource.dataIntegrationAssociation`} 
   * - {@link AppIntegrationsResource.eventIntegration `AppIntegrationsResource.eventIntegration`} 
   * - {@link AppIntegrationsResource.eventIntegrationAssociation `AppIntegrationsResource.eventIntegrationAssociation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "app-integrations:TagResource",

  /**
   * Tagging - Grants permission to untag an Amazon AppIntegration resource
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.dataIntegration `AppIntegrationsResource.dataIntegration`} 
   * - {@link AppIntegrationsResource.dataIntegrationAssociation `AppIntegrationsResource.dataIntegrationAssociation`} 
   * - {@link AppIntegrationsResource.eventIntegration `AppIntegrationsResource.eventIntegration`} 
   * - {@link AppIntegrationsResource.eventIntegrationAssociation `AppIntegrationsResource.eventIntegrationAssociation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "app-integrations:UntagResource",

  /**
   * Write - Grants permission to modify a DataIntegration
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_UpdateDataIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.dataIntegration `AppIntegrationsResource.dataIntegration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateDataIntegration = "app-integrations:UpdateDataIntegration",

  /**
   * Write - Grants permission to modify an EventIntegration
   * @see https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_UpdateEventIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.eventIntegration `AppIntegrationsResource.eventIntegration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateEventIntegration = "app-integrations:UpdateEventIntegration",

  /**
   * * - Grant all app-integrations permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappintegrations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppIntegrationsResource.dataIntegration `AppIntegrationsResource.dataIntegration`} 
   * - {@link AppIntegrationsResource.eventIntegration `AppIntegrationsResource.eventIntegration`} 
   * - {@link AppIntegrationsResource.dataIntegrationAssociation `AppIntegrationsResource.dataIntegrationAssociation`} 
   * - {@link AppIntegrationsResource.eventIntegrationAssociation `AppIntegrationsResource.eventIntegrationAssociation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "app-integrations:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappintegrations.html
 */
export const AppIntegrationsResource = {

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/API_EventIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  eventIntegration: (options: Partial<{partition: string, region: string, account: string, eventIntegrationName: string}> = {}) => `arn:${options.partition || '*'}:app-integrations:${options.region || '*'}:${options.account || '*'}:event-integration/${options.eventIntegrationName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/API_EventIntegrationAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  eventIntegrationAssociation: (options: Partial<{partition: string, region: string, account: string, eventIntegrationName: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:app-integrations:${options.region || '*'}:${options.account || '*'}:event-integration-association/${options.eventIntegrationName || '*'}/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/API_DataIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataIntegration: (options: Partial<{partition: string, region: string, account: string, dataIntegrationId: string}> = {}) => `arn:${options.partition || '*'}:app-integrations:${options.region || '*'}:${options.account || '*'}:data-integration/${options.dataIntegrationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/API_DataIntegrationAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataIntegrationAssociation: (options: Partial<{partition: string, region: string, account: string, dataIntegrationId: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:app-integrations:${options.region || '*'}:${options.account || '*'}:data-integration-association/${options.dataIntegrationId || '*'}/${options.resourceId || '*'}`,
}

