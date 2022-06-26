/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrdsiamauthentication.html
 */
export enum RdsDbAction {

  /**
   * Permissions management - Allows IAM role or user to connect to RDS database
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsDbResource.dbUser `RdsDbResource.dbUser`} 
   */
  connect = "rds-db:connect",

  /**
   * * - Grant all rds-db permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrdsiamauthentication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsDbResource.dbUser `RdsDbResource.dbUser`} 
   */
  All = "rds-db:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrdsiamauthentication.html
 */
export const RdsDbResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.DBAccounts.html
   */
  dbUser: (options: Partial<{partition: string, region: string, account: string, dbiResourceId: string, dbUserName: string}> = {}) => `arn:${options.partition || '*'}:rds-db:${options.region || '*'}:${options.account || '*'}:dbuser:${options.dbiResourceId || '*'}/${options.dbUserName || '*'}`,
}

