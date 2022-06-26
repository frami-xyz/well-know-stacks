/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonneptune.html
 */
export enum NeptuneDbAction {

  /**
   * Write - Connect to database
   * @see https://docs.aws.amazon.com/neptune/latest/userguide/get-started.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NeptuneDbResource.database `NeptuneDbResource.database`} 
   */
  connect = "neptune-db:connect",

  /**
   * * - Grant all neptune-db permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonneptune.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NeptuneDbResource.database `NeptuneDbResource.database`} 
   */
  All = "neptune-db:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonneptune.html
 */
export const NeptuneDbResource = {

  /**
   * @see https://docs.aws.amazon.com/neptune/latest/userguide/get-started.html
   */
  database: (options: Partial<{partition: string, region: string, account: string, relativeId: string}> = {}) => `arn:${options.partition || '*'}:neptune-db:${options.region || '*'}:${options.account || '*'}:${options.relativeId || '*'}/database`,
}

