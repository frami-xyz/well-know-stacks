/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstaxsettings.html
 */
export enum TaxAction {

  /**
   * Read - Grants permission to view tax exemptions data
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  GetExemptions = "tax:GetExemptions",

  /**
   * Write - Grants permission to update tax exemptions data
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  UpdateExemptions = "tax:UpdateExemptions",

  /**
   * * - Grant all tax permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstaxsettings.html
   */
  All = "tax:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstaxsettings.html
 */
export const TaxResource = {
}

