/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmobileanalytics.html
 */
export enum MobileanalyticsAction {

  /**
   * Read - Grant access to financial metrics for an app
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmobileanalytics.html
   */
  GetFinancialReports = "mobileanalytics:GetFinancialReports",

  /**
   * Read - Grant access to standard metrics for an app
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmobileanalytics.html
   */
  GetReports = "mobileanalytics:GetReports",

  /**
   * Write - The PutEvents operation records one or more events
   * @see https://docs.aws.amazon.com/mobileanalytics/latest/ug/PutEvents.html
   */
  PutEvents = "mobileanalytics:PutEvents",

  /**
   * * - Grant all mobileanalytics permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmobileanalytics.html
   */
  All = "mobileanalytics:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmobileanalytics.html
 */
export const MobileanalyticsResource = {
}

