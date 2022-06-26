/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesapplicationmanager.html
 */
export enum WamAction {

  /**
   * Write - Allows the Amazon WAM packaging instance to access your application package catalog.
   * @see https://docs.aws.amazon.com/wam/latest/adminguide/iam.html
   */
  AuthenticatePackager = "wam:AuthenticatePackager",

  /**
   * * - Grant all wam permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesapplicationmanager.html
   */
  All = "wam:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesapplicationmanager.html
 */
export const WamResource = {
}

