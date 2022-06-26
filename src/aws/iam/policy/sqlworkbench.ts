/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssqlworkbench.html
 */
export enum SqlworkbenchAction {

  /**
   * Write - Grants permission to associate connection to a chart
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.chart `SqlworkbenchResource.chart`} 
   * - {@link SqlworkbenchResource.connection `SqlworkbenchResource.connection`} 
   */
  AssociateConnectionWithChart = "sqlworkbench:AssociateConnectionWithChart",

  /**
   * Write - Grants permission to associate connection to a tab
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.connection `SqlworkbenchResource.connection`} 
   */
  AssociateConnectionWithTab = "sqlworkbench:AssociateConnectionWithTab",

  /**
   * Write - Grants permission to associate query to a tab
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.query `SqlworkbenchResource.query`} 
   */
  AssociateQueryWithTab = "sqlworkbench:AssociateQueryWithTab",

  /**
   * Write - Grants permission to delete folders on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  BatchDeleteFolder = "sqlworkbench:BatchDeleteFolder",

  /**
   * Write - Grants permission to create SQLWorkbench account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  CreateAccount = "sqlworkbench:CreateAccount",

  /**
   * Write - Grants permission to create new saved chart on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.chart `SqlworkbenchResource.chart`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateChart = "sqlworkbench:CreateChart",

  /**
   * Write - Grants permission to create a new connection on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.connection `SqlworkbenchResource.connection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateConnection = "sqlworkbench:CreateConnection",

  /**
   * Write - Grants permission to create folder on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  CreateFolder = "sqlworkbench:CreateFolder",

  /**
   * Write - Grants permission to create a new saved query on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.query `SqlworkbenchResource.query`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSavedQuery = "sqlworkbench:CreateSavedQuery",

  /**
   * Write - Grants permission to remove charts on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.chart `SqlworkbenchResource.chart`} 
   */
  DeleteChart = "sqlworkbench:DeleteChart",

  /**
   * Write - Grants permission to remove connections on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.connection `SqlworkbenchResource.connection`} 
   */
  DeleteConnection = "sqlworkbench:DeleteConnection",

  /**
   * Write - Grants permission to remove saved queries on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.query `SqlworkbenchResource.query`} 
   */
  DeleteSavedQuery = "sqlworkbench:DeleteSavedQuery",

  /**
   * Write - Grants permission to remove a tab on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  DeleteTab = "sqlworkbench:DeleteTab",

  /**
   * Write - Grants permission to execute a query in your redshift cluster
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.connection `SqlworkbenchResource.connection`} 
   */
  DriverExecute = "sqlworkbench:DriverExecute",

  /**
   * Write - Grants permission to generate a new session on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  GenerateSession = "sqlworkbench:GenerateSession",

  /**
   * Read - Grants permission to get account info
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  GetAccountInfo = "sqlworkbench:GetAccountInfo",

  /**
   * Read - Grants permission to get account settings
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  GetAccountSettings = "sqlworkbench:GetAccountSettings",

  /**
   * Read - Grants permission to get charts on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.chart `SqlworkbenchResource.chart`} 
   */
  GetChart = "sqlworkbench:GetChart",

  /**
   * Read - Grants permission to get connections on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.connection `SqlworkbenchResource.connection`} 
   */
  GetConnection = "sqlworkbench:GetConnection",

  /**
   * Read - Grants permission to get saved query on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.query `SqlworkbenchResource.query`} 
   */
  GetSavedQuery = "sqlworkbench:GetSavedQuery",

  /**
   * Read - Grants permission to get user info
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  GetUserInfo = "sqlworkbench:GetUserInfo",

  /**
   * Read - Grants permission to get workspace settings on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  GetUserWorkspaceSettings = "sqlworkbench:GetUserWorkspaceSettings",

  /**
   * List - Grants permission to list the connections on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ListConnections = "sqlworkbench:ListConnections",

  /**
   * List - Grants permission to list databases of your redshift cluster
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ListDatabases = "sqlworkbench:ListDatabases",

  /**
   * List - Grants permission to list files and folders
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ListFiles = "sqlworkbench:ListFiles",

  /**
   * List - Grants permission to list redshift clusters on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ListRedshiftClusters = "sqlworkbench:ListRedshiftClusters",

  /**
   * Read - Grants permission to list sample databases
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ListSampleDatabases = "sqlworkbench:ListSampleDatabases",

  /**
   * List - Grants permission to list versions of saved query on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.query `SqlworkbenchResource.query`} 
   */
  ListSavedQueryVersions = "sqlworkbench:ListSavedQueryVersions",

  /**
   * List - Grants permission to list tabs on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ListTabs = "sqlworkbench:ListTabs",

  /**
   * Read - Grants permission to list tagged resources
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ListTaggedResources = "sqlworkbench:ListTaggedResources",

  /**
   * Read - Grants permission to list the tags of an sqlworkbench resource
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.chart `SqlworkbenchResource.chart`} 
   * - {@link SqlworkbenchResource.connection `SqlworkbenchResource.connection`} 
   * - {@link SqlworkbenchResource.query `SqlworkbenchResource.query`} 
   */
  ListTagsForResource = "sqlworkbench:ListTagsForResource",

  /**
   * Write - Grants permission to create or update a tab on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  PutTab = "sqlworkbench:PutTab",

  /**
   * Write - Grants permission to update workspace settings on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  PutUserWorkspaceSettings = "sqlworkbench:PutUserWorkspaceSettings",

  /**
   * Tagging - Grants permission to tag an sqlworkbench resource
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.chart `SqlworkbenchResource.chart`} 
   * - {@link SqlworkbenchResource.connection `SqlworkbenchResource.connection`} 
   * - {@link SqlworkbenchResource.query `SqlworkbenchResource.query`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "sqlworkbench:TagResource",

  /**
   * Tagging - Grants permission to untag an sqlworkbench resource
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.chart `SqlworkbenchResource.chart`} 
   * - {@link SqlworkbenchResource.connection `SqlworkbenchResource.connection`} 
   * - {@link SqlworkbenchResource.query `SqlworkbenchResource.query`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "sqlworkbench:UntagResource",

  /**
   * Write - Grants permission to update account-wide export settings
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  UpdateAccountExportSettings = "sqlworkbench:UpdateAccountExportSettings",

  /**
   * Write - Grants permission to update general account-wide settings
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  UpdateAccountGeneralSettings = "sqlworkbench:UpdateAccountGeneralSettings",

  /**
   * Write - Grants permission to update a chart on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.chart `SqlworkbenchResource.chart`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateChart = "sqlworkbench:UpdateChart",

  /**
   * Write - Grants permission to update a connection on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.connection `SqlworkbenchResource.connection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateConnection = "sqlworkbench:UpdateConnection",

  /**
   * Write - Grants permission to move files on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.chart `SqlworkbenchResource.chart`} 
   * - {@link SqlworkbenchResource.query `SqlworkbenchResource.query`} 
   */
  UpdateFileFolder = "sqlworkbench:UpdateFileFolder",

  /**
   * Write - Grants permission to update a folder's name and details on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  UpdateFolder = "sqlworkbench:UpdateFolder",

  /**
   * Write - Grants permission to update a saved query on your account
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.query `SqlworkbenchResource.query`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateSavedQuery = "sqlworkbench:UpdateSavedQuery",

  /**
   * * - Grant all sqlworkbench permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssqlworkbench.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqlworkbenchResource.chart `SqlworkbenchResource.chart`} 
   * - {@link SqlworkbenchResource.connection `SqlworkbenchResource.connection`} 
   * - {@link SqlworkbenchResource.query `SqlworkbenchResource.query`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "sqlworkbench:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssqlworkbench.html
 */
export const SqlworkbenchResource = {

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags that are associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  connection: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:sqlworkbench:${options.region || '*'}:${options.account || '*'}:connection/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags that are associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  query: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:sqlworkbench:${options.region || '*'}:${options.account || '*'}:query/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags that are associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  chart: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:sqlworkbench:${options.region || '*'}:${options.account || '*'}:chart/${options.resourceId || '*'}`,
}

