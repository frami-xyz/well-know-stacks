/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstiros.html
 */
export enum TirosAction {

  /**
   * Write - Grants permission to create a VPC reachability query
   * @see https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  CreateQuery = "tiros:CreateQuery",

  /**
   * Read - Grants permission to get VPC reachability query answers
   * @see https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  GetQueryAnswer = "tiros:GetQueryAnswer",

  /**
   * Read - Grants permission to get VPC reachability query explanations
   * @see https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  GetQueryExplanation = "tiros:GetQueryExplanation",

  /**
   * * - Grant all tiros permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstiros.html
   */
  All = "tiros:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstiros.html
 */
export const TirosResource = {
}

