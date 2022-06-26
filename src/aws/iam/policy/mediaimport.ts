/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmediaimport.html
 */
export enum MediaimportAction {

  /**
   * Write - Grants permission to create a database binary snapshot on the customer's aws account
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html
   */
  CreateDatabaseBinarySnapshot = "mediaimport:CreateDatabaseBinarySnapshot",

  /**
   * * - Grant all mediaimport permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmediaimport.html
   */
  All = "mediaimport:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmediaimport.html
 */
export const MediaimportResource = {
}

