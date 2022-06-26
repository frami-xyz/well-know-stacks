/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalsupportcontent.html
 */
export enum ElementalSupportContentAction {

  /**
   * Read - Grant the permission to search support content
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   */
  Query = "elemental-support-content:Query",

  /**
   * * - Grant all elemental-support-content permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalsupportcontent.html
   */
  All = "elemental-support-content:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalsupportcontent.html
 */
export const ElementalSupportContentResource = {
}

