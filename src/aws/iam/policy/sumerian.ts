/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsumerian.html
 */
export enum SumerianAction {

  /**
   * Write - Grants permission to log into the Sumerian console
   * @see https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html
   */
  Login = "sumerian:Login",

  /**
   * Read - Grants permission to view a project release
   * @see https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SumerianResource.project `SumerianResource.project`} 
   */
  ViewRelease = "sumerian:ViewRelease",

  /**
   * * - Grant all sumerian permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsumerian.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SumerianResource.project `SumerianResource.project`} 
   */
  All = "sumerian:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsumerian.html
 */
export const SumerianResource = {

  /**
   * @see https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-concepts.html
   */
  project: (options: Partial<{partition: string, region: string, account: string, projectName: string}> = {}) => `arn:${options.partition || '*'}:sumerian:${options.region || '*'}:${options.account || '*'}:project:${options.projectName || '*'}`,
}

