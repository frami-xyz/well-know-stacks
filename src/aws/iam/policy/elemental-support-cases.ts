/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalsupportcases.html
 */
export enum ElementalSupportCasesAction {

  /**
   * Write - Verify whether the caller has the permissions to perform support case operations
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   */
  CheckCasePermission = "elemental-support-cases:CheckCasePermission",

  /**
   * Write - Grant the permission to create a support case
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   */
  CreateCase = "elemental-support-cases:CreateCase",

  /**
   * Read - Grant the permission to describe a support case in your account
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   */
  GetCase = "elemental-support-cases:GetCase",

  /**
   * Read - Grant the permission to list the support cases in your account
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   */
  GetCases = "elemental-support-cases:GetCases",

  /**
   * Write - Grant the permission to update a support case
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   */
  UpdateCase = "elemental-support-cases:UpdateCase",

  /**
   * * - Grant all elemental-support-cases permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalsupportcases.html
   */
  All = "elemental-support-cases:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalsupportcases.html
 */
export const ElementalSupportCasesResource = {
}

