/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_applicationdiscoveryarsenal.html
 */
export enum ArsenalAction {

  /**
   * Write - Grants permission to register AWS provided data collectors to the Application Discovery Service
   * @see https://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html
   */
  RegisterOnPremisesAgent = "arsenal:RegisterOnPremisesAgent",

  /**
   * * - Grant all arsenal permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_applicationdiscoveryarsenal.html
   */
  All = "arsenal:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_applicationdiscoveryarsenal.html
 */
export const ArsenalResource = {
}

