/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstageditor.html
 */
export enum ResourceExplorerAction {

  /**
   * List - Grants permission to retrieve the resource types currently supported by Tag Editor
   * @see https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-prereqs.html#rg-permissions-te
   */
  ListResourceTypes = "resource-explorer:ListResourceTypes",

  /**
   * List - Grants permission to retrieve the identifiers of the resources in the AWS account
   * @see https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-prereqs.html#rg-permissions-te
   */
  ListResources = "resource-explorer:ListResources",

  /**
   * Read - Grants permission to retrieve the tags attached to the specified resource identifiers
   * @see https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-prereqs.html#rg-permissions-te
   */
  ListTags = "resource-explorer:ListTags",

  /**
   * * - Grant all resource-explorer permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstageditor.html
   */
  All = "resource-explorer:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstageditor.html
 */
export const ResourceExplorerResource = {
}

