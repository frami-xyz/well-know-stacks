/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecommerceanalyticsservice.html
 */
export enum MarketplacecommerceanalyticsAction {

  /**
   * Write - Request a data set to be published to your Amazon S3 bucket.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecommerceanalyticsservice.html
   */
  GenerateDataSet = "marketplacecommerceanalytics:GenerateDataSet",

  /**
   * Write - Request a support data set to be published to your Amazon S3 bucket.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecommerceanalyticsservice.html
   */
  StartSupportDataExport = "marketplacecommerceanalytics:StartSupportDataExport",

  /**
   * * - Grant all marketplacecommerceanalytics permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecommerceanalyticsservice.html
   */
  All = "marketplacecommerceanalytics:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecommerceanalyticsservice.html
 */
export const MarketplacecommerceanalyticsResource = {
}

