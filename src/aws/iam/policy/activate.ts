/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsactivate.html
 */
export enum ActivateAction {

  /**
   * Write - Grants permission to submit an Activate application form
   * @see https://docs.aws.amazon.com/
   */
  CreateForm = "activate:CreateForm",

  /**
   * Read - Grants permission to get the AWS account contact information
   * @see https://docs.aws.amazon.com/
   */
  GetAccountContact = "activate:GetAccountContact",

  /**
   * Read - Grants permission to get Activate tech posts and offer information
   * @see https://docs.aws.amazon.com/
   */
  GetContentInfo = "activate:GetContentInfo",

  /**
   * Read - Grants permission to get the AWS cost information
   * @see https://docs.aws.amazon.com/
   */
  GetCosts = "activate:GetCosts",

  /**
   * Read - Grants permission to get the AWS credit information
   * @see https://docs.aws.amazon.com/
   */
  GetCredits = "activate:GetCredits",

  /**
   * Read - Grants permission to get the Activate member information
   * @see https://docs.aws.amazon.com/
   */
  GetMemberInfo = "activate:GetMemberInfo",

  /**
   * Read - Grants permission to get an Activate program
   * @see https://docs.aws.amazon.com/
   */
  GetProgram = "activate:GetProgram",

  /**
   * Write - Grants permission to create or update the Activate member information
   * @see https://docs.aws.amazon.com/
   */
  PutMemberInfo = "activate:PutMemberInfo",

  /**
   * * - Grant all activate permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsactivate.html
   */
  All = "activate:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsactivate.html
 */
export const ActivateResource = {
}

