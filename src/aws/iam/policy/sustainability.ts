/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssustainability.html
 */
export enum SustainabilityAction {

  /**
   * Read - Grants permission to view the carbon footprint tool
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  GetCarbonFootprintSummary = "sustainability:GetCarbonFootprintSummary",

  /**
   * * - Grant all sustainability permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssustainability.html
   */
  All = "sustainability:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssustainability.html
 */
export const SustainabilityResource = {
}

