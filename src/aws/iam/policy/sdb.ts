/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpledb.html
 */
export enum SdbAction {

  /**
   * Write - Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies
   * @see https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_BatchDeleteAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SdbResource.domain `SdbResource.domain`} 
   */
  BatchDeleteAttributes = "sdb:BatchDeleteAttributes",

  /**
   * Write - With the BatchPutAttributes operation, you can perform multiple PutAttribute operations in a single call. With the BatchPutAttributes operation, you can perform multiple PutAttribute operations in a single call
   * @see https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_BatchPutAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SdbResource.domain `SdbResource.domain`} 
   */
  BatchPutAttributes = "sdb:BatchPutAttributes",

  /**
   * Write - The CreateDomain operation creates a new domain
   * @see https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_CreateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SdbResource.domain `SdbResource.domain`} 
   */
  CreateDomain = "sdb:CreateDomain",

  /**
   * Write - Deletes one or more attributes associated with the item
   * @see https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DeleteAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SdbResource.domain `SdbResource.domain`} 
   */
  DeleteAttributes = "sdb:DeleteAttributes",

  /**
   * Write - The DeleteDomain operation deletes a domain
   * @see https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DeleteDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SdbResource.domain `SdbResource.domain`} 
   */
  DeleteDomain = "sdb:DeleteDomain",

  /**
   * Read - Returns information about the domain, including when the domain was created, the number of items and attributes, and the size of attribute names and values
   * @see https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DomainMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SdbResource.domain `SdbResource.domain`} 
   */
  DomainMetadata = "sdb:DomainMetadata",

  /**
   * Read - Returns all of the attributes associated with the item
   * @see https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_GetAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SdbResource.domain `SdbResource.domain`} 
   */
  GetAttributes = "sdb:GetAttributes",

  /**
   * List - Description for ListDomains
   * @see https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_ListDomains.html
   */
  ListDomains = "sdb:ListDomains",

  /**
   * Write - The PutAttributes operation creates or replaces attributes in an item
   * @see https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_PutAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SdbResource.domain `SdbResource.domain`} 
   */
  PutAttributes = "sdb:PutAttributes",

  /**
   * Read - Description for Select
   * @see https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_Select.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SdbResource.domain `SdbResource.domain`} 
   */
  Select = "sdb:Select",

  /**
   * * - Grant all sdb permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpledb.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SdbResource.domain `SdbResource.domain`} 
   */
  All = "sdb:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpledb.html
 */
export const SdbResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/DataModel.html
   */
  domain: (options: Partial<{partition: string, region: string, account: string, domainName: string}> = {}) => `arn:${options.partition || '*'}:sdb:${options.region || '*'}:${options.account || '*'}:domain/${options.domainName || '*'}`,
}

