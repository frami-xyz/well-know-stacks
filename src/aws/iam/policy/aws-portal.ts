/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling.html
 */
export enum AwsPortalAction {

  /**
   * Write - Allow or deny IAM users permission to modify Account Settings.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  ModifyAccount = "aws-portal:ModifyAccount",

  /**
   * Write - Allow or deny IAM users permission to modify billing settings.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  ModifyBilling = "aws-portal:ModifyBilling",

  /**
   * Write - Allow or deny IAM users permission to modify payment methods.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  ModifyPaymentMethods = "aws-portal:ModifyPaymentMethods",

  /**
   * Read - Allow or deny IAM users permission to view account settings.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  ViewAccount = "aws-portal:ViewAccount",

  /**
   * Read - Allow or deny IAM users permission to view billing pages in the console.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  ViewBilling = "aws-portal:ViewBilling",

  /**
   * Read - Allow or deny IAM users permission to view payment methods.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  ViewPaymentMethods = "aws-portal:ViewPaymentMethods",

  /**
   * Read - Allow or deny IAM users permission to view AWS usage reports.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  ViewUsage = "aws-portal:ViewUsage",

  /**
   * * - Grant all aws-portal permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling.html
   */
  All = "aws-portal:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbilling.html
 */
export const AwsPortalResource = {
}

