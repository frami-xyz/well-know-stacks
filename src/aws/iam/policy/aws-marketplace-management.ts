/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacemanagementportal.html
 */
export enum AwsMarketplaceManagementAction {

  /**
   * Write - Allows access to the File Upload page inside the AWS Marketplace Management Portal.
   * @see https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  uploadFiles = "aws-marketplace-management:uploadFiles",

  /**
   * List - Allows access to the Marketing page inside the AWS Marketplace Management Portal.
   * @see https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  viewMarketing = "aws-marketplace-management:viewMarketing",

  /**
   * List - Allows access to the Reports page inside the AWS Marketplace Management Portal.
   * @see https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  viewReports = "aws-marketplace-management:viewReports",

  /**
   * List - Allows access to the Settings page inside the AWS Marketplace Management Portal.
   * @see https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  viewSettings = "aws-marketplace-management:viewSettings",

  /**
   * List - Allows access to the Customer Support Eligibility page inside the AWS Marketplace Management Portal.
   * @see https://docs.aws.amazon.com/marketplace/latest/userguide/detailed-management-portal-permissions.html#seller-ammp-permissions
   */
  viewSupport = "aws-marketplace-management:viewSupport",

  /**
   * * - Grant all aws-marketplace-management permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacemanagementportal.html
   */
  All = "aws-marketplace-management:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacemanagementportal.html
 */
export const AwsMarketplaceManagementResource = {
}

