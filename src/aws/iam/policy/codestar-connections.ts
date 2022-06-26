/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestarconnections.html
 */
export enum CodestarConnectionsAction {

  /**
   * Write - Grants permission to create a Connection resource
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `codestar-connections:ProviderType`: Filters access by the type of third-party provider passed in the request ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-managing documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateConnection = "codestar-connections:CreateConnection",

  /**
   * Write - Grants permission to create a host resource
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateHost.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `codestar-connections:ProviderType`: Filters access by the type of third-party provider passed in the request ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-managing documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateHost = "codestar-connections:CreateHost",

  /**
   * Write - Grants permission to delete a Connection resource
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.connection `CodestarConnectionsResource.connection`} 
   */
  DeleteConnection = "codestar-connections:DeleteConnection",

  /**
   * Write - Grants permission to delete a host resource
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteHost.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.host `CodestarConnectionsResource.host`} 
   */
  DeleteHost = "codestar-connections:DeleteHost",

  /**
   * Read - Grants permission to get details about a Connection resource
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.connection `CodestarConnectionsResource.connection`} 
   */
  GetConnection = "codestar-connections:GetConnection",

  /**
   * Read - Grants permission to get details about a host resource
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetHost.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.host `CodestarConnectionsResource.host`} 
   */
  GetHost = "codestar-connections:GetHost",

  /**
   * Read - Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codestar-connections:ProviderType`: Filters access by the type of third-party provider passed in the request ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-managing documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetIndividualAccessToken = "codestar-connections:GetIndividualAccessToken",

  /**
   * Read - Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codestar-connections:ProviderType`: Filters access by the type of third-party provider passed in the request ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-managing documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetInstallationUrl = "codestar-connections:GetInstallationUrl",

  /**
   * List - Grants permission to list Connection resources
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListConnections.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codestar-connections:ProviderTypeFilter`: Filters access by the type of third-party provider used to filter results ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-managing documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListConnections = "codestar-connections:ListConnections",

  /**
   * List - Grants permission to list host resources
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListHosts.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codestar-connections:ProviderTypeFilter`: Filters access by the type of third-party provider used to filter results ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-managing documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListHosts = "codestar-connections:ListHosts",

  /**
   * List - Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  ListInstallationTargets = "codestar-connections:ListInstallationTargets",

  /**
   * List - Gets the set of key-value pairs that are used to manage the resource
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.connection `CodestarConnectionsResource.connection`} 
   */
  ListTagsForResource = "codestar-connections:ListTagsForResource",

  /**
   * Read - Grants permission to pass a Connection resource to an AWS service that accepts a Connection ARN as input, such as codepipeline:CreatePipeline
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-passconnection
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.connection `CodestarConnectionsResource.connection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codestar-connections:PassedToService`: Filters access by the service to which the principal is allowed to pass a Connection ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-passconnection documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PassConnection = "codestar-connections:PassConnection",

  /**
   * Read - Grants permission to associate a third party server, such as a GitHub Enterprise Server instance, with a Host
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#connections-permissions-actions-host-registration
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codestar-connections:HostArn`: Filters access by the host resource associated with the connection used in the request ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-hosts documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RegisterAppCode = "codestar-connections:RegisterAppCode",

  /**
   * Read - Grants permission to associate a third party server, such as a GitHub Enterprise Server instance, with a Host
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#connections-permissions-actions-host-registration
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codestar-connections:HostArn`: Filters access by the host resource associated with the connection used in the request ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-hosts documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartAppRegistrationHandshake = "codestar-connections:StartAppRegistrationHandshake",

  /**
   * Read - Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codestar-connections:ProviderType`: Filters access by the type of third-party provider passed in the request ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-managing documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartOAuthHandshake = "codestar-connections:StartOAuthHandshake",

  /**
   * Tagging - Adds to or modifies the tags of the given resource
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.connection `CodestarConnectionsResource.connection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "codestar-connections:TagResource",

  /**
   * Tagging - Removes tags from an AWS resource
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.connection `CodestarConnectionsResource.connection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "codestar-connections:UntagResource",

  /**
   * Write - Grants permission to update a Connection resource with an installation of the CodeStar Connections App
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.connection `CodestarConnectionsResource.connection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codestar-connections:InstallationId`: Filters access by the third-party ID (such as the Bitbucket App installation ID for CodeStar Connections) that is used to update a Connection. Allows you to restrict which third-party App installations can be used to make a Connection ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateConnectionInstallation = "codestar-connections:UpdateConnectionInstallation",

  /**
   * Write - Grants permission to update a host resource
   * @see https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UpdateHost.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.host `CodestarConnectionsResource.host`} 
   */
  UpdateHost = "codestar-connections:UpdateHost",

  /**
   * Read - Grants permission to use a Connection resource to call provider actions
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.connection `CodestarConnectionsResource.connection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codestar-connections:FullRepositoryId`: Filters access by the repository that is passed in the request. Applies only to UseConnection requests for access to a specific repository ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `codestar-connections:ProviderAction`: Filters access by the provider action in a UseConnection request such as ListRepositories. See documentation for all valid values ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `codestar-connections:ProviderPermissionsRequired`: Filters access by the write permissions of a provider action in a UseConnection request. Valid types include read_only and read_write ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UseConnection = "codestar-connections:UseConnection",

  /**
   * * - Grant all codestar-connections permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestarconnections.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarConnectionsResource.connection `CodestarConnectionsResource.connection`} 
   * - {@link CodestarConnectionsResource.host `CodestarConnectionsResource.host`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `codestar-connections:ProviderType`: Filters access by the type of third-party provider passed in the request ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-managing documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `codestar-connections:ProviderTypeFilter`: Filters access by the type of third-party provider used to filter results ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-managing documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `codestar-connections:PassedToService`: Filters access by the service to which the principal is allowed to pass a Connection ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-passconnection documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `codestar-connections:HostArn`: Filters access by the host resource associated with the connection used in the request ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-hosts documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `codestar-connections:InstallationId`: Filters access by the third-party ID (such as the Bitbucket App installation ID for CodeStar Connections) that is used to update a Connection. Allows you to restrict which third-party App installations can be used to make a Connection ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `codestar-connections:FullRepositoryId`: Filters access by the repository that is passed in the request. Applies only to UseConnection requests for access to a specific repository ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `codestar-connections:ProviderAction`: Filters access by the provider action in a UseConnection request such as ListRepositories. See documentation for all valid values ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `codestar-connections:ProviderPermissionsRequired`: Filters access by the write permissions of a provider action in a UseConnection request. Valid types include read_only and read_write ({@link https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "codestar-connections:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestarconnections.html
 */
export const CodestarConnectionsResource = {

  /**
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/connections.html
   */
  connection: (options: Partial<{partition: string, region: string, account: string, connectionId: string}> = {}) => `arn:${options.partition || '*'}:codestar-connections:${options.region || '*'}:${options.account || '*'}:connection/${options.connectionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/connections-hosts.html
   */
  host: (options: Partial<{partition: string, region: string, account: string, hostId: string}> = {}) => `arn:${options.partition || '*'}:codestar-connections:${options.region || '*'}:${options.account || '*'}:host/${options.hostId || '*'}`,
}

