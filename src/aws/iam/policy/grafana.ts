/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedgrafana.html
 */
export enum GrafanaAction {

  /**
   * Write - Grants permission to upgrade a workspace with a license
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  AssociateLicense = "grafana:AssociateLicense",

  /**
   * Write - Grants permission to create a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateWorkspace = "grafana:CreateWorkspace",

  /**
   * Write - Grants permission to create API keys for a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  CreateWorkspaceApiKey = "grafana:CreateWorkspaceApiKey",

  /**
   * Write - Grants permission to delete a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  DeleteWorkspace = "grafana:DeleteWorkspace",

  /**
   * Write - Grants permission to delete API keys from a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  DeleteWorkspaceApiKey = "grafana:DeleteWorkspaceApiKey",

  /**
   * Read - Grants permission to describe a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  DescribeWorkspace = "grafana:DescribeWorkspace",

  /**
   * Read - Grants permission to describe authentication providers on a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  DescribeWorkspaceAuthentication = "grafana:DescribeWorkspaceAuthentication",

  /**
   * Write - Grants permission to remove a license from a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  DisassociateLicense = "grafana:DisassociateLicense",

  /**
   * List - Grants permission to list the permissions on a wokspace
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  ListPermissions = "grafana:ListPermissions",

  /**
   * Read - Grants permission to list tags associated with a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  ListTagsForResource = "grafana:ListTagsForResource",

  /**
   * Read - Grants permission to list workspaces
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   */
  ListWorkspaces = "grafana:ListWorkspaces",

  /**
   * Tagging - Grants permission to add tags to, or update tag values of, a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "grafana:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "grafana:UntagResource",

  /**
   * Permissions management - Grants permission to modify the permissions on a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  UpdatePermissions = "grafana:UpdatePermissions",

  /**
   * Write - Grants permission to modify a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  UpdateWorkspace = "grafana:UpdateWorkspace",

  /**
   * Write - Grants permission to modify authentication providers on a workspace
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   */
  UpdateWorkspaceAuthentication = "grafana:UpdateWorkspaceAuthentication",

  /**
   * * - Grant all grafana permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedgrafana.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GrafanaResource.workspace `GrafanaResource.workspace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "grafana:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedgrafana.html
 */
export const GrafanaResource = {

  /**
   * @see https://docs.aws.amazon.com/grafana/latest/userguide/security-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/grafana/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workspace: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:grafana:${options.region || '*'}:${options.account || '*'}:/workspaces/${options.resourceId || '*'}`,
}

