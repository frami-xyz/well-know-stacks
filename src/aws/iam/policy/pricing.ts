/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspricelist.html
 */
export enum PricingAction {

  /**
   * Read - Grants permission to retrieve service details for all (paginated) services (if serviceCode is not set) or service detail for a particular service (if given serviceCode)
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_DescribeServices.html
   */
  DescribeServices = "pricing:DescribeServices",

  /**
   * Read - Grants permission to retrieve all (paginated) possible values for a given attribute
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html
   */
  GetAttributeValues = "pricing:GetAttributeValues",

  /**
   * Read - Grants permission to retrieve all matching products with given search criteria
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetProducts.html
   */
  GetProducts = "pricing:GetProducts",

  /**
   * * - Grant all pricing permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspricelist.html
   */
  All = "pricing:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspricelist.html
 */
export const PricingResource = {
}

