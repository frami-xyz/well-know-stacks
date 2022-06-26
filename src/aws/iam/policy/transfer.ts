/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransferfamily.html
 */
export enum TransferAction {

  /**
   * Write - Grants permission to add an access associated with a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   */
  CreateAccess = "transfer:CreateAccess",

  /**
   * Write - Grants permission to create a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateServer.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateServer = "transfer:CreateServer",

  /**
   * Write - Grants permission to add a user associated with a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateUser = "transfer:CreateUser",

  /**
   * Write - Grants permission to create a workflow
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_CreateWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateWorkflow = "transfer:CreateWorkflow",

  /**
   * Write - Grants permission to delete access
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   */
  DeleteAccess = "transfer:DeleteAccess",

  /**
   * Write - Grants permission to delete a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   */
  DeleteServer = "transfer:DeleteServer",

  /**
   * Write - Grants permission to delete an SSH public key from a user
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteSshPublicKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.user `TransferResource.user`} 
   */
  DeleteSshPublicKey = "transfer:DeleteSshPublicKey",

  /**
   * Write - Grants permission to delete a user associated with a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.user `TransferResource.user`} 
   */
  DeleteUser = "transfer:DeleteUser",

  /**
   * Write - Grants permission to delete a workflow
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_DeleteWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.workflow `TransferResource.workflow`} 
   */
  DeleteWorkflow = "transfer:DeleteWorkflow",

  /**
   * Read - Grants permission to describe an access assigned to a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   */
  DescribeAccess = "transfer:DescribeAccess",

  /**
   * Read - Grants permission to describe an execution associated with a workflow
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.workflow `TransferResource.workflow`} 
   */
  DescribeExecution = "transfer:DescribeExecution",

  /**
   * Read - Grants permission to describe a security policy
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeSecurityPolicy.html
   */
  DescribeSecurityPolicy = "transfer:DescribeSecurityPolicy",

  /**
   * Read - Grants permission to describe a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   */
  DescribeServer = "transfer:DescribeServer",

  /**
   * Read - Grants permission to describe a user associated with a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.user `TransferResource.user`} 
   */
  DescribeUser = "transfer:DescribeUser",

  /**
   * Read - Grants permission to describe a workflow
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_DescribeWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.workflow `TransferResource.workflow`} 
   */
  DescribeWorkflow = "transfer:DescribeWorkflow",

  /**
   * Write - Grants permission to add an SSH public key to a user
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_ImportSshPublicKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.user `TransferResource.user`} 
   */
  ImportSshPublicKey = "transfer:ImportSshPublicKey",

  /**
   * Read - Grants permission to list accesses
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_ListAccesses.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   */
  ListAccesses = "transfer:ListAccesses",

  /**
   * Read - Grants permission to list executions associated with a workflow
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_ListExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.workflow `TransferResource.workflow`} 
   */
  ListExecutions = "transfer:ListExecutions",

  /**
   * List - Grants permission to list security policies
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_ListSecurityPolicies.html
   */
  ListSecurityPolicies = "transfer:ListSecurityPolicies",

  /**
   * List - Grants permission to list servers
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_ListServers.html
   */
  ListServers = "transfer:ListServers",

  /**
   * Read - Grants permission to list tags for a server, a user, or a workflow
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   * - {@link TransferResource.user `TransferResource.user`} 
   * - {@link TransferResource.workflow `TransferResource.workflow`} 
   */
  ListTagsForResource = "transfer:ListTagsForResource",

  /**
   * List - Grants permission to list users associated with a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_ListUsers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   */
  ListUsers = "transfer:ListUsers",

  /**
   * List - Grants permission to list workflows
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_ListWorkflows.html
   */
  ListWorkflows = "transfer:ListWorkflows",

  /**
   * Write - Grants permission to send a callback for asynchronous custom steps
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_SendWorkflowStepState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.workflow `TransferResource.workflow`} 
   */
  SendWorkflowStepState = "transfer:SendWorkflowStepState",

  /**
   * Write - Grants permission to start a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_StartServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   */
  StartServer = "transfer:StartServer",

  /**
   * Write - Grants permission to stop a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_StopServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   */
  StopServer = "transfer:StopServer",

  /**
   * Tagging - Grants permission to tag a server or a user
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   * - {@link TransferResource.user `TransferResource.user`} 
   * - {@link TransferResource.workflow `TransferResource.workflow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "transfer:TagResource",

  /**
   * Read - Grants permission to test a server's custom identity provider
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_TestIdentityProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.user `TransferResource.user`} 
   */
  TestIdentityProvider = "transfer:TestIdentityProvider",

  /**
   * Tagging - Grants permission to untag a server, a user, or a workflow
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   * - {@link TransferResource.user `TransferResource.user`} 
   * - {@link TransferResource.workflow `TransferResource.workflow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "transfer:UntagResource",

  /**
   * Write - Grants permission to update access
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateAccess.html
   */
  UpdateAccess = "transfer:UpdateAccess",

  /**
   * Write - Grants permission to update the configuration of a server
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   */
  UpdateServer = "transfer:UpdateServer",

  /**
   * Write - Grants permission to update the configuration of a user
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/API_UpdateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.user `TransferResource.user`} 
   */
  UpdateUser = "transfer:UpdateUser",

  /**
   * * - Grant all transfer permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransferfamily.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TransferResource.server `TransferResource.server`} 
   * - {@link TransferResource.user `TransferResource.user`} 
   * - {@link TransferResource.workflow `TransferResource.workflow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "transfer:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransferfamily.html
 */
export const TransferResource = {

  /**
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/create-user.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  user: (options: Partial<{partition: string, region: string, account: string, serverId: string, userName: string}> = {}) => `arn:${options.partition || '*'}:transfer:${options.region || '*'}:${options.account || '*'}:user/${options.serverId || '*'}/${options.userName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/configuring-servers.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  server: (options: Partial<{partition: string, region: string, account: string, serverId: string}> = {}) => `arn:${options.partition || '*'}:transfer:${options.region || '*'}:${options.account || '*'}:server/${options.serverId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/transfer/latest/userguide/transfer-workflows.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workflow: (options: Partial<{partition: string, region: string, account: string, workflowId: string}> = {}) => `arn:${options.partition || '*'}:transfer:${options.region || '*'}:${options.account || '*'}:workflow/${options.workflowId || '*'}`,
}

