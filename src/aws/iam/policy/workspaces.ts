/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspaces.html
 */
export enum WorkspacesAction {

  /**
   * Write - Grants permission to associate connection aliases with directories
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateConnectionAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.connectionalias `WorkspacesResource.connectionalias`} 
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  AssociateConnectionAlias = "workspaces:AssociateConnectionAlias",

  /**
   * Write - Grants permission to associate IP access control groups with directories
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_AssociateIpGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   * - {@link WorkspacesResource.workspaceipgroup `WorkspacesResource.workspaceipgroup`} 
   */
  AssociateIpGroups = "workspaces:AssociateIpGroups",

  /**
   * Write - Grants permission to add rules to IP access control groups
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_AuthorizeIpRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceipgroup `WorkspacesResource.workspaceipgroup`} 
   */
  AuthorizeIpRules = "workspaces:AuthorizeIpRules",

  /**
   * Write - Grants permission to copy a WorkSpace image
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_CopyWorkspaceImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceimage `WorkspacesResource.workspaceimage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CopyWorkspaceImage = "workspaces:CopyWorkspaceImage",

  /**
   * Write - Grants permission to create an Amazon Connect client add-in within a directory
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_CreateConnectClientAddIn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  CreateConnectClientAddIn = "workspaces:CreateConnectClientAddIn",

  /**
   * Write - Grants permission to create connection aliases for use with cross-Region redirection
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_CreateConnectionAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConnectionAlias = "workspaces:CreateConnectionAlias",

  /**
   * Write - Grants permission to create IP access control groups
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_CreateIpGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateIpGroup = "workspaces:CreateIpGroup",

  /**
   * Tagging - Grants permission to create tags for WorkSpaces resources
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_CreateTags.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTags = "workspaces:CreateTags",

  /**
   * Write - Grants permission to create an updated WorkSpace image
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_CreateUpdatedWorkspaceImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceimage `WorkspacesResource.workspaceimage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateUpdatedWorkspaceImage = "workspaces:CreateUpdatedWorkspaceImage",

  /**
   * Write - Grants permission to create a WorkSpace bundle
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaceBundle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspacebundle `WorkspacesResource.workspacebundle`} 
   * - {@link WorkspacesResource.workspaceimage `WorkspacesResource.workspaceimage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWorkspaceBundle = "workspaces:CreateWorkspaceBundle",

  /**
   * Write - Grants permission to create one or more WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_CreateWorkspaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   * - {@link WorkspacesResource.workspacebundle `WorkspacesResource.workspacebundle`} 
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWorkspaces = "workspaces:CreateWorkspaces",

  /**
   * Write - Grants permission to delete AWS WorkSpaces Client branding data within a directory
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteClientBranding.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  DeleteClientBranding = "workspaces:DeleteClientBranding",

  /**
   * Write - Grants permission to delete an Amazon Connect client add-in that is configured within a directory
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteConnectClientAddIn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  DeleteConnectClientAddIn = "workspaces:DeleteConnectClientAddIn",

  /**
   * Write - Grants permission to delete connection aliases
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteConnectionAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.connectionalias `WorkspacesResource.connectionalias`} 
   */
  DeleteConnectionAlias = "workspaces:DeleteConnectionAlias",

  /**
   * Write - Grants permission to delete IP access control groups
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteIpGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceipgroup `WorkspacesResource.workspaceipgroup`} 
   */
  DeleteIpGroup = "workspaces:DeleteIpGroup",

  /**
   * Tagging - Grants permission to delete tags from WorkSpaces resources
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteTags.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteTags = "workspaces:DeleteTags",

  /**
   * Write - Grants permission to delete WorkSpace bundles
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceBundle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspacebundle `WorkspacesResource.workspacebundle`} 
   */
  DeleteWorkspaceBundle = "workspaces:DeleteWorkspaceBundle",

  /**
   * Write - Grants permission to delete WorkSpace images
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DeleteWorkspaceImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceimage `WorkspacesResource.workspaceimage`} 
   */
  DeleteWorkspaceImage = "workspaces:DeleteWorkspaceImage",

  /**
   * Write - Grants permission to deregister directories from use with Amazon WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DeregisterWorkspaceDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  DeregisterWorkspaceDirectory = "workspaces:DeregisterWorkspaceDirectory",

  /**
   * Read - Grants permission to retrieve the configuration of Bring Your Own License (BYOL) for WorkSpaces accounts
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccount.html
   */
  DescribeAccount = "workspaces:DescribeAccount",

  /**
   * Read - Grants permission to retrieve modifications to the configuration of Bring Your Own License (BYOL) for WorkSpaces accounts
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeAccountModifications.html
   */
  DescribeAccountModifications = "workspaces:DescribeAccountModifications",

  /**
   * Read - Grants permission to retrieve AWS WorkSpaces Client branding data within a directory
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientBranding.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  DescribeClientBranding = "workspaces:DescribeClientBranding",

  /**
   * List - Grants permission to retrieve information about WorkSpaces clients
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeClientProperties.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  DescribeClientProperties = "workspaces:DescribeClientProperties",

  /**
   * List - Grants permission to retrieve a list of Amazon Connect client add-ins that have been created
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectClientAddIns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  DescribeConnectClientAddIns = "workspaces:DescribeConnectClientAddIns",

  /**
   * Read - Grants permission to retrieve the permissions that the owners of connection aliases have granted to other AWS accounts for connection aliases
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliasPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.connectionalias `WorkspacesResource.connectionalias`} 
   */
  DescribeConnectionAliasPermissions = "workspaces:DescribeConnectionAliasPermissions",

  /**
   * Read - Grants permission to retrieve a list that describes the connection aliases used for cross-Region redirection
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html
   */
  DescribeConnectionAliases = "workspaces:DescribeConnectionAliases",

  /**
   * Read - Grants permission to retrieve information about IP access control groups
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeIpGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceipgroup `WorkspacesResource.workspaceipgroup`} 
   */
  DescribeIpGroups = "workspaces:DescribeIpGroups",

  /**
   * Read - Grants permission to describe the tags for WorkSpaces resources
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeTags.html
   */
  DescribeTags = "workspaces:DescribeTags",

  /**
   * List - Grants permission to obtain information about WorkSpace bundles
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceBundles.html
   */
  DescribeWorkspaceBundles = "workspaces:DescribeWorkspaceBundles",

  /**
   * Read - Grants permission to retrieve information about directories that are registered with WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html
   */
  DescribeWorkspaceDirectories = "workspaces:DescribeWorkspaceDirectories",

  /**
   * Read - Grants permission to retrieve information about WorkSpace image permissions
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceimage `WorkspacesResource.workspaceimage`} 
   */
  DescribeWorkspaceImagePermissions = "workspaces:DescribeWorkspaceImagePermissions",

  /**
   * List - Grants permission to retrieve information about WorkSpace images
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html
   */
  DescribeWorkspaceImages = "workspaces:DescribeWorkspaceImages",

  /**
   * List - Grants permission to retrieve information about WorkSpace snapshots
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceSnapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   */
  DescribeWorkspaceSnapshots = "workspaces:DescribeWorkspaceSnapshots",

  /**
   * List - Grants permission to obtain information about WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html
   */
  DescribeWorkspaces = "workspaces:DescribeWorkspaces",

  /**
   * Read - Grants permission to obtain the connection status of WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspacesConnectionStatus.html
   */
  DescribeWorkspacesConnectionStatus = "workspaces:DescribeWorkspacesConnectionStatus",

  /**
   * Write - Grants permission to disassociate connection aliases from directories
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateConnectionAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.connectionalias `WorkspacesResource.connectionalias`} 
   */
  DisassociateConnectionAlias = "workspaces:DisassociateConnectionAlias",

  /**
   * Write - Grants permission to disassociate IP access control groups from directories
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_DisassociateIpGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   * - {@link WorkspacesResource.workspaceipgroup `WorkspacesResource.workspaceipgroup`} 
   */
  DisassociateIpGroups = "workspaces:DisassociateIpGroups",

  /**
   * Write - Grants permission to import AWS WorkSpaces Client branding data within a directory
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_ImportClientBranding.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  ImportClientBranding = "workspaces:ImportClientBranding",

  /**
   * Write - Grants permission to import Bring Your Own License (BYOL) images into Amazon WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_ImportWorkspaceImage.html
   */
  ImportWorkspaceImage = "workspaces:ImportWorkspaceImage",

  /**
   * List - Grants permission to list the available CIDR ranges for enabling Bring Your Own License (BYOL) for WorkSpaces accounts
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_ListAvailableManagementCidrRanges.html
   */
  ListAvailableManagementCidrRanges = "workspaces:ListAvailableManagementCidrRanges",

  /**
   * Write - Grants permission to migrate WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_MigrateWorkspace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspacebundle `WorkspacesResource.workspacebundle`} 
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   */
  MigrateWorkspace = "workspaces:MigrateWorkspace",

  /**
   * Write - Grants permission to modify the configuration of Bring Your Own License (BYOL) for WorkSpaces accounts
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyAccount.html
   */
  ModifyAccount = "workspaces:ModifyAccount",

  /**
   * Write - Grants permission to modify the properties of WorkSpaces clients
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyClientProperties.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  ModifyClientProperties = "workspaces:ModifyClientProperties",

  /**
   * PermissionsManagement - Grants permission to modify the self-service WorkSpace management capabilities for your users
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_ModifySelfservicePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  ModifySelfservicePermissions = "workspaces:ModifySelfservicePermissions",

  /**
   * Write - Grants permission to specify which devices and operating systems users can use to access their WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceAccessProperties.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  ModifyWorkspaceAccessProperties = "workspaces:ModifyWorkspaceAccessProperties",

  /**
   * Write - Grants permission to modify the default properties used to create WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceCreationProperties.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  ModifyWorkspaceCreationProperties = "workspaces:ModifyWorkspaceCreationProperties",

  /**
   * Write - Grants permission to modify WorkSpace properties, including the running mode and the AutoStop period
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceProperties.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   */
  ModifyWorkspaceProperties = "workspaces:ModifyWorkspaceProperties",

  /**
   * Write - Grants permission to modify the state of WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_ModifyWorkspaceState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   */
  ModifyWorkspaceState = "workspaces:ModifyWorkspaceState",

  /**
   * Write - Grants permission to reboot WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_RebootWorkspaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   */
  RebootWorkspaces = "workspaces:RebootWorkspaces",

  /**
   * Write - Grants permission to rebuild WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_RebuildWorkspaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   */
  RebuildWorkspaces = "workspaces:RebuildWorkspaces",

  /**
   * Write - Grants permission to register directories for use with Amazon WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_RegisterWorkspaceDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RegisterWorkspaceDirectory = "workspaces:RegisterWorkspaceDirectory",

  /**
   * Write - Grants permission to restore WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_RestoreWorkspace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   */
  RestoreWorkspace = "workspaces:RestoreWorkspace",

  /**
   * Write - Grants permission to remove rules from IP access control groups
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_RevokeIpRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceipgroup `WorkspacesResource.workspaceipgroup`} 
   */
  RevokeIpRules = "workspaces:RevokeIpRules",

  /**
   * Write - Grants permission to start AutoStop WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_StartWorkspaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   */
  StartWorkspaces = "workspaces:StartWorkspaces",

  /**
   * Write - Grants permission to stop AutoStop WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_StopWorkspaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   */
  StopWorkspaces = "workspaces:StopWorkspaces",

  /**
   * Write - Grants permission to terminate WorkSpaces
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_TerminateWorkspaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   */
  TerminateWorkspaces = "workspaces:TerminateWorkspaces",

  /**
   * Write - Grants permission to update an Amazon Connect client add-in. Use this action to update the name and endpoint URL of an Amazon Connect client add-in
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateConnectClientAddIn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   */
  UpdateConnectClientAddIn = "workspaces:UpdateConnectClientAddIn",

  /**
   * PermissionsManagement - Grants permission to share or unshare connection aliases with other accounts
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateConnectionAliasPermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.connectionalias `WorkspacesResource.connectionalias`} 
   */
  UpdateConnectionAliasPermission = "workspaces:UpdateConnectionAliasPermission",

  /**
   * Write - Grants permission to replace rules for IP access control groups
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateRulesOfIpGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceipgroup `WorkspacesResource.workspaceipgroup`} 
   */
  UpdateRulesOfIpGroup = "workspaces:UpdateRulesOfIpGroup",

  /**
   * Write - Grants permission to update the WorkSpace images used in WorkSpace bundles
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateWorkspaceBundle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspacebundle `WorkspacesResource.workspacebundle`} 
   * - {@link WorkspacesResource.workspaceimage `WorkspacesResource.workspaceimage`} 
   */
  UpdateWorkspaceBundle = "workspaces:UpdateWorkspaceBundle",

  /**
   * PermissionsManagement - Grants permission to share or unshare WorkSpace images with other accounts by specifying whether other accounts have permission to copy the image
   * @see https://docs.aws.amazon.com/workspaces/latest/api/API_UpdateWorkspaceImagePermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.workspaceimage `WorkspacesResource.workspaceimage`} 
   */
  UpdateWorkspaceImagePermission = "workspaces:UpdateWorkspaceImagePermission",

  /**
   * * - Grant all workspaces permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkspacesResource.connectionalias `WorkspacesResource.connectionalias`} 
   * - {@link WorkspacesResource.directoryid `WorkspacesResource.directoryid`} 
   * - {@link WorkspacesResource.workspaceipgroup `WorkspacesResource.workspaceipgroup`} 
   * - {@link WorkspacesResource.workspaceimage `WorkspacesResource.workspaceimage`} 
   * - {@link WorkspacesResource.workspacebundle `WorkspacesResource.workspacebundle`} 
   * - {@link WorkspacesResource.workspaceid `WorkspacesResource.workspaceid`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "workspaces:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspaces.html
 */
export const WorkspacesResource = {

  /**
   * @see https://docs.aws.amazon.com/workspaces/latest/adminguide/manage-workspaces-directory.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  directoryid: (options: Partial<{partition: string, region: string, account: string, directoryId: string}> = {}) => `arn:${options.partition || '*'}:workspaces:${options.region || '*'}:${options.account || '*'}:directory/${options.directoryId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/workspaces/latest/adminguide/bundles.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workspacebundle: (options: Partial<{partition: string, region: string, account: string, bundleId: string}> = {}) => `arn:${options.partition || '*'}:workspaces:${options.region || '*'}:${options.account || '*'}:workspacebundle/${options.bundleId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/workspaces/latest/adminguide/wsp_workspace_management.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workspaceid: (options: Partial<{partition: string, region: string, account: string, workspaceId: string}> = {}) => `arn:${options.partition || '*'}:workspaces:${options.region || '*'}:${options.account || '*'}:workspace/${options.workspaceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/workspaces/latest/adminguide/bundles.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workspaceimage: (options: Partial<{partition: string, region: string, account: string, imageId: string}> = {}) => `arn:${options.partition || '*'}:workspaces:${options.region || '*'}:${options.account || '*'}:workspaceimage/${options.imageId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-ip-access-control-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workspaceipgroup: (options: Partial<{partition: string, region: string, account: string, groupId: string}> = {}) => `arn:${options.partition || '*'}:workspaces:${options.region || '*'}:${options.account || '*'}:workspaceipgroup/${options.groupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  connectionalias: (options: Partial<{partition: string, region: string, account: string, connectionAliasId: string}> = {}) => `arn:${options.partition || '*'}:workspaces:${options.region || '*'}:${options.account || '*'}:connectionalias/${options.connectionAliasId || '*'}`,
}

