/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrhelknowledgebaseportal.html
 */
export enum RhelkbAction {

  /**
   * Read - Grants permission to access the Red Hat Knowledgebase portal
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rhel.html
   */
  GetRhelURL = "rhelkb:GetRhelURL",

  /**
   * * - Grant all rhelkb permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrhelknowledgebaseportal.html
   */
  All = "rhelkb:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrhelknowledgebaseportal.html
 */
export const RhelkbResource = {
}

