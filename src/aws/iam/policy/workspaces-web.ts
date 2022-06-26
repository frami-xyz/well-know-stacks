/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesweb.html
 */
export enum WorkspacesWebAction {

  /**
   * Write - Grants permission to associate browser settings to web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_AssociateBrowserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.browserSettings `WorkspacesWebResource.browserSettings`} 
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   */
  AssociateBrowserSettings = "workspaces-web:AssociateBrowserSettings",

  /**
   * Write - Grants permission to associate network settings to web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_AssociateNetworkSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.networkSettings `WorkspacesWebResource.networkSettings`} 
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   */
  AssociateNetworkSettings = "workspaces-web:AssociateNetworkSettings",

  /**
   * Write - Grants permission to associate trust stores with web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_AssociateTrustStore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   * - {@link WorkspacesWebResource.trustStore `WorkspacesWebResource.trustStore`} 
   */
  AssociateTrustStore = "workspaces-web:AssociateTrustStore",

  /**
   * Write - Grants permission to associate user settings with web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_AssociateUserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   * - {@link WorkspacesWebResource.userSettings `WorkspacesWebResource.userSettings`} 
   */
  AssociateUserSettings = "workspaces-web:AssociateUserSettings",

  /**
   * Write - Grants permission to create browser settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateBrowserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateBrowserSettings = "workspaces-web:CreateBrowserSettings",

  /**
   * Write - Grants permission to create identity providers
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateIdentityProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   */
  CreateIdentityProvider = "workspaces-web:CreateIdentityProvider",

  /**
   * Write - Grants permission to create network settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateNetworkSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateNetworkSettings = "workspaces-web:CreateNetworkSettings",

  /**
   * Write - Grants permission to create web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreatePortal.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreatePortal = "workspaces-web:CreatePortal",

  /**
   * Write - Grants permission to create trust stores
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateTrustStore.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateTrustStore = "workspaces-web:CreateTrustStore",

  /**
   * Write - Grants permission to create user settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateUserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateUserSettings = "workspaces-web:CreateUserSettings",

  /**
   * Write - Grants permission to delete browser settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteBrowserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.browserSettings `WorkspacesWebResource.browserSettings`} 
   */
  DeleteBrowserSettings = "workspaces-web:DeleteBrowserSettings",

  /**
   * Write - Grants permission to delete identity providers
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteIdentityProvider.html
   */
  DeleteIdentityProvider = "workspaces-web:DeleteIdentityProvider",

  /**
   * Write - Grants permission to delete network settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteNetworkSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.networkSettings `WorkspacesWebResource.networkSettings`} 
   */
  DeleteNetworkSettings = "workspaces-web:DeleteNetworkSettings",

  /**
   * Write - Grants permission to delete web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeletePortal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   */
  DeletePortal = "workspaces-web:DeletePortal",

  /**
   * Write - Grants permission to delete trust stores
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteTrustStore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.trustStore `WorkspacesWebResource.trustStore`} 
   */
  DeleteTrustStore = "workspaces-web:DeleteTrustStore",

  /**
   * Write - Grants permission to delete user settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DeleteUserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.userSettings `WorkspacesWebResource.userSettings`} 
   */
  DeleteUserSettings = "workspaces-web:DeleteUserSettings",

  /**
   * Write - Grants permission to disassociate browser settings from web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DisassociateBrowserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   */
  DisassociateBrowserSettings = "workspaces-web:DisassociateBrowserSettings",

  /**
   * Write - Grants permission to disassociate network settings from web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DisassociateNetworkSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   */
  DisassociateNetworkSettings = "workspaces-web:DisassociateNetworkSettings",

  /**
   * Write - Grants permission to disassociate trust stores from web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DisassociateTrustStore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   */
  DisassociateTrustStore = "workspaces-web:DisassociateTrustStore",

  /**
   * Write - Grants permission to disassociate user settings from web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_DisassociateUserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   */
  DisassociateUserSettings = "workspaces-web:DisassociateUserSettings",

  /**
   * Read - Grants permission to get details on browser settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetBrowserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.browserSettings `WorkspacesWebResource.browserSettings`} 
   */
  GetBrowserSettings = "workspaces-web:GetBrowserSettings",

  /**
   * Read - Grants permission to get details on identity providers
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetIdentityProvider.html
   */
  GetIdentityProvider = "workspaces-web:GetIdentityProvider",

  /**
   * Read - Grants permission to get details on network settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetNetworkSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.networkSettings `WorkspacesWebResource.networkSettings`} 
   */
  GetNetworkSettings = "workspaces-web:GetNetworkSettings",

  /**
   * Read - Grants permission to get details on web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetPortal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   */
  GetPortal = "workspaces-web:GetPortal",

  /**
   * Read - Grants permission to get service provider metadata information for web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetPortalServiceProviderMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   */
  GetPortalServiceProviderMetadata = "workspaces-web:GetPortalServiceProviderMetadata",

  /**
   * Read - Grants permission to get details on trust stores
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetTrustStore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.trustStore `WorkspacesWebResource.trustStore`} 
   */
  GetTrustStore = "workspaces-web:GetTrustStore",

  /**
   * Read - Grants permission to get certificates from trust stores
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetTrustStoreCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.trustStore `WorkspacesWebResource.trustStore`} 
   */
  GetTrustStoreCertificate = "workspaces-web:GetTrustStoreCertificate",

  /**
   * Read - Grants permission to get details on user settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_GetUserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.userSettings `WorkspacesWebResource.userSettings`} 
   */
  GetUserSettings = "workspaces-web:GetUserSettings",

  /**
   * Read - Grants permission to list browser settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListBrowserSettings.html
   */
  ListBrowserSettings = "workspaces-web:ListBrowserSettings",

  /**
   * Read - Grants permission to list identity providers
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListIdentityProviders.html
   */
  ListIdentityProviders = "workspaces-web:ListIdentityProviders",

  /**
   * Read - Grants permission to list network settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListNetworkSettings.html
   */
  ListNetworkSettings = "workspaces-web:ListNetworkSettings",

  /**
   * Read - Grants permission to list web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListPortals.html
   */
  ListPortals = "workspaces-web:ListPortals",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "workspaces-web:ListTagsForResource",

  /**
   * Read - Grants permission to list certificates in a trust store
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListTrustStoreCertificates.html
   */
  ListTrustStoreCertificates = "workspaces-web:ListTrustStoreCertificates",

  /**
   * Read - Grants permission to list trust stores
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListTrustStores.html
   */
  ListTrustStores = "workspaces-web:ListTrustStores",

  /**
   * Read - Grants permission to list user settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_ListUserSettings.html
   */
  ListUserSettings = "workspaces-web:ListUserSettings",

  /**
   * Tagging - Grants permission to add one or more tags to a resource
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "workspaces-web:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from a resource
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "workspaces-web:UntagResource",

  /**
   * Write - Grants permission to update browser settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateBrowserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.browserSettings `WorkspacesWebResource.browserSettings`} 
   */
  UpdateBrowserSettings = "workspaces-web:UpdateBrowserSettings",

  /**
   * Write - Grants permission to update identity provider
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateIdentityProvider.html
   */
  UpdateIdentityProvider = "workspaces-web:UpdateIdentityProvider",

  /**
   * Write - Grants permission to update network settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateNetworkSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.networkSettings `WorkspacesWebResource.networkSettings`} 
   */
  UpdateNetworkSettings = "workspaces-web:UpdateNetworkSettings",

  /**
   * Write - Grants permission to update web portals
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdatePortal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   */
  UpdatePortal = "workspaces-web:UpdatePortal",

  /**
   * Write - Grants permission to update trust stores
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateTrustStore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.trustStore `WorkspacesWebResource.trustStore`} 
   */
  UpdateTrustStore = "workspaces-web:UpdateTrustStore",

  /**
   * Write - Grants permission to update user settings
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_UpdateUserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.userSettings `WorkspacesWebResource.userSettings`} 
   */
  UpdateUserSettings = "workspaces-web:UpdateUserSettings",

  /**
   * * - Grant all workspaces-web permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesweb.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesWebResource.browserSettings `WorkspacesWebResource.browserSettings`} 
   * - {@link WorkspacesWebResource.portal `WorkspacesWebResource.portal`} 
   * - {@link WorkspacesWebResource.networkSettings `WorkspacesWebResource.networkSettings`} 
   * - {@link WorkspacesWebResource.trustStore `WorkspacesWebResource.trustStore`} 
   * - {@link WorkspacesWebResource.userSettings `WorkspacesWebResource.userSettings`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "workspaces-web:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesweb.html
 */
export const WorkspacesWebResource = {

  /**
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateBrowserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  browserSettings: (options: Partial<{partition: string, region: string, account: string, browserSettingsId: string}> = {}) => `arn:${options.partition || '*'}:workspaces-web:${options.region || '*'}:${options.account || '*'}:browserSettings/${options.browserSettingsId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateNetworkSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  networkSettings: (options: Partial<{partition: string, region: string, account: string, networkSettingsId: string}> = {}) => `arn:${options.partition || '*'}:workspaces-web:${options.region || '*'}:${options.account || '*'}:networkSettings/${options.networkSettingsId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreatePortal.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  portal: (options: Partial<{partition: string, region: string, account: string, portalId: string}> = {}) => `arn:${options.partition || '*'}:workspaces-web:${options.region || '*'}:${options.account || '*'}:portal/${options.portalId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateTrustStore.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  trustStore: (options: Partial<{partition: string, region: string, account: string, trustStoreId: string}> = {}) => `arn:${options.partition || '*'}:workspaces-web:${options.region || '*'}:${options.account || '*'}:trustStore/${options.trustStoreId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/workspaces-web/latest/APIReference/API_CreateUserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  userSettings: (options: Partial<{partition: string, region: string, account: string, userSettingsId: string}> = {}) => `arn:${options.partition || '*'}:workspaces-web:${options.region || '*'}:${options.account || '*'}:userSettings/${options.userSettingsId || '*'}`,
}

