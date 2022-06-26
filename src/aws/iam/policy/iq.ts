/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiq.html
 */
export enum IqAction {

  /**
   * Write - Grants permission to submit new project requests
   * @see https://aws.amazon.com/iq/
   */
  CreateProject = "iq:CreateProject",

  /**
   * * - Grant all iq permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiq.html
   */
  All = "iq:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiq.html
 */
export const IqResource = {
}

