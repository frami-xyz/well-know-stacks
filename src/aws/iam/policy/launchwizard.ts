/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_launchwizard.html
 */
export enum LaunchwizardAction {

  /**
   * Write - Delete an application
   * @see https://docs.aws.amazon.com/launchwizard/
   */
  DeleteApp = "launchwizard:DeleteApp",

  /**
   * Read - Describe provisioning applications
   * @see https://docs.aws.amazon.com/launchwizard/
   */
  DescribeProvisionedApp = "launchwizard:DescribeProvisionedApp",

  /**
   * Read - Describe provisioning events
   * @see https://docs.aws.amazon.com/launchwizard/
   */
  DescribeProvisioningEvents = "launchwizard:DescribeProvisioningEvents",

  /**
   * Read - Get infrastructure suggestion
   * @see https://docs.aws.amazon.com/launchwizard/
   */
  GetInfrastructureSuggestion = "launchwizard:GetInfrastructureSuggestion",

  /**
   * Read - Get customer's ip address
   * @see https://docs.aws.amazon.com/launchwizard/
   */
  GetIpAddress = "launchwizard:GetIpAddress",

  /**
   * Read - Get resource cost estimate
   * @see https://docs.aws.amazon.com/launchwizard/
   */
  GetResourceCostEstimate = "launchwizard:GetResourceCostEstimate",

  /**
   * List - List provisioning applications
   * @see https://docs.aws.amazon.com/launchwizard/
   */
  ListProvisionedApps = "launchwizard:ListProvisionedApps",

  /**
   * Write - Start a provisioning
   * @see https://docs.aws.amazon.com/launchwizard/
   */
  StartProvisioning = "launchwizard:StartProvisioning",

  /**
   * * - Grant all launchwizard permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_launchwizard.html
   */
  All = "launchwizard:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_launchwizard.html
 */
export const LaunchwizardResource = {
}

