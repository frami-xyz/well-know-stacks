/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslakeformation.html
 */
export enum LakeformationAction {

  /**
   * Tagging - Grants permission to attach Lake Formation tags to catalog resources
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-AddLFTagsToResource
   */
  AddLFTagsToResource = "lakeformation:AddLFTagsToResource",

  /**
   * Permissions management - Grants permission to data lake permissions to one or more principals in a batch
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-BatchGrantPermissions
   */
  BatchGrantPermissions = "lakeformation:BatchGrantPermissions",

  /**
   * Permissions management - Grants permission to revoke data lake permissions from one or more principals in a batch
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-BatchRevokePermissions
   */
  BatchRevokePermissions = "lakeformation:BatchRevokePermissions",

  /**
   * Write - Grants permission to cancel the given transaction
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-CancelTransaction
   */
  CancelTransaction = "lakeformation:CancelTransaction",

  /**
   * Write - Grants permission to commit the given transaction
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-CommitTransaction
   */
  CommitTransaction = "lakeformation:CommitTransaction",

  /**
   * Write - Grants permission to create a Lake Formation data cell filter
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-data-filter.html#aws-lake-formation-api-data-filter-CreateDataCellsFilter
   */
  CreateDataCellsFilter = "lakeformation:CreateDataCellsFilter",

  /**
   * Write - Grants permission to create a Lake Formation tag
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-CreateLFTag
   */
  CreateLFTag = "lakeformation:CreateLFTag",

  /**
   * Write - Grants permission to delete a Lake Formation data cell filter
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-data-filter.html#aws-lake-formation-api-data-filter-DeleteDataCellsFilter
   */
  DeleteDataCellsFilter = "lakeformation:DeleteDataCellsFilter",

  /**
   * Write - Grants permission to delete a Lake Formation tag
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-DeleteLFTag
   */
  DeleteLFTag = "lakeformation:DeleteLFTag",

  /**
   * Write - Grants permission to delete the specified objects if the transaction is canceled
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-DeleteObjectsOnCancel
   */
  DeleteObjectsOnCancel = "lakeformation:DeleteObjectsOnCancel",

  /**
   * Write - Grants permission to deregister a registered location
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-DeregisterResource
   */
  DeregisterResource = "lakeformation:DeregisterResource",

  /**
   * Read - Grants permission to describe a registered location
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-DescribeResource
   */
  DescribeResource = "lakeformation:DescribeResource",

  /**
   * Read - Grants permission to get status of the given transaction
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-DescribeTransaction
   */
  DescribeTransaction = "lakeformation:DescribeTransaction",

  /**
   * Write - Grants permission to extend the timeout of the given transaction
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-ExtendTransaction
   */
  ExtendTransaction = "lakeformation:ExtendTransaction",

  /**
   * Write - Grants permission to virtual data lake access
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetDataAccess
   */
  GetDataAccess = "lakeformation:GetDataAccess",

  /**
   * Read - Grants permission to retrieve data lake settings such as the list of data lake administrators and database and table default permissions
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetDataLakeSettings
   */
  GetDataLakeSettings = "lakeformation:GetDataLakeSettings",

  /**
   * Read - Grants permission to retrieve permissions attached to resources in the given path
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetEffectivePermissionsForPath
   */
  GetEffectivePermissionsForPath = "lakeformation:GetEffectivePermissionsForPath",

  /**
   * Read - Grants permission to retrieve a Lake Formation tag
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetLFTag
   */
  GetLFTag = "lakeformation:GetLFTag",

  /**
   * Read - Grants permission to retrieve the state of the given query
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetQueryState
   */
  GetQueryState = "lakeformation:GetQueryState",

  /**
   * Read - Grants permission to retrieve the statistics for the given query
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetQueryStatistics
   */
  GetQueryStatistics = "lakeformation:GetQueryStatistics",

  /**
   * Read - Grants permission to retrieve lakeformation tags on a catalog resource
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GetResourceLFTags
   */
  GetResourceLFTags = "lakeformation:GetResourceLFTags",

  /**
   * Read - Grants permission to retrieve objects from a table
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-objects.html#aws-lake-formation-api-objects-GetTableObjects
   */
  GetTableObjects = "lakeformation:GetTableObjects",

  /**
   * Read - Grants permission to retrieve the results for the given work units
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetWorkUnitResults
   */
  GetWorkUnitResults = "lakeformation:GetWorkUnitResults",

  /**
   * Read - Grants permission to retrieve the work units for the given query
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-GetWorkUnits
   */
  GetWorkUnits = "lakeformation:GetWorkUnits",

  /**
   * Permissions management - Grants permission to data lake permissions to a principal
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-GrantPermissions
   */
  GrantPermissions = "lakeformation:GrantPermissions",

  /**
   * List - Grants permission to list cell filters
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-data-filter.html#aws-lake-formation-api-data-filter-ListDataCellsFilter
   */
  ListDataCellsFilter = "lakeformation:ListDataCellsFilter",

  /**
   * Read - Grants permission to list Lake Formation tags
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-ListLFTags
   */
  ListLFTags = "lakeformation:ListLFTags",

  /**
   * List - Grants permission to list permissions filtered by principal or resource
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-ListPermissions
   */
  ListPermissions = "lakeformation:ListPermissions",

  /**
   * List - Grants permission to List registered locations
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-ListResources
   */
  ListResources = "lakeformation:ListResources",

  /**
   * List - Grants permission to list all the storage optimizers for the Governed table
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-optimizers.html#aws-lake-formation-api-optimizers-ListTableStorageOptimizers
   */
  ListTableStorageOptimizers = "lakeformation:ListTableStorageOptimizers",

  /**
   * List - Grants permission to list all transactions in the system
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-ListTransactions
   */
  ListTransactions = "lakeformation:ListTransactions",

  /**
   * Permissions management - Grants permission to overwrite data lake settings such as the list of data lake administrators and database and table default permissions
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-PutDataLakeSettings
   */
  PutDataLakeSettings = "lakeformation:PutDataLakeSettings",

  /**
   * Write - Grants permission to register a new location to be managed by Lake Formation
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-RegisterResource
   */
  RegisterResource = "lakeformation:RegisterResource",

  /**
   * Tagging - Grants permission to remove lakeformation tags from catalog resources
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-RemoveLFTagsFromResource
   */
  RemoveLFTagsFromResource = "lakeformation:RemoveLFTagsFromResource",

  /**
   * Permissions management - Grants permission to revoke data lake permissions from a principal
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-RevokePermissions
   */
  RevokePermissions = "lakeformation:RevokePermissions",

  /**
   * Read - Grants permission to list catalog databases with Lake Formation tags
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-SearchDatabasesByLFTags
   */
  SearchDatabasesByLFTags = "lakeformation:SearchDatabasesByLFTags",

  /**
   * Read - Grants permission to list catalog tables with Lake Formation tags
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-SearchTablesByLFTags
   */
  SearchTablesByLFTags = "lakeformation:SearchTablesByLFTags",

  /**
   * Write - Grants permission to initiate the planning of the given query
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-querying.html#aws-lake-formation-api-querying-StartQueryPlanning
   */
  StartQueryPlanning = "lakeformation:StartQueryPlanning",

  /**
   * Write - Grants permission to start a new transaction
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-transactions-api.html#aws-lake-formation-api-transactions-api-StartTransaction
   */
  StartTransaction = "lakeformation:StartTransaction",

  /**
   * Write - Grants permission to update a Lake Formation tag
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-UpdateLFTag
   */
  UpdateLFTag = "lakeformation:UpdateLFTag",

  /**
   * Write - Grants permission to update a registered location
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-tagging-api.html#aws-lake-formation-api-tagging-api-UpdateResource
   */
  UpdateResource = "lakeformation:UpdateResource",

  /**
   * Write - Grants permission to add or delete the specified objects to or from a table
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-objects.html#aws-lake-formation-api-objects-UpdateTableObjects
   */
  UpdateTableObjects = "lakeformation:UpdateTableObjects",

  /**
   * Write - Grants permission to update the configuration of the storage optimizer for the Governed table
   * @see https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-optimizers.html#aws-lake-formation-api-optimizers-UpdateTableStorageOptimizer
   */
  UpdateTableStorageOptimizer = "lakeformation:UpdateTableStorageOptimizer",

  /**
   * * - Grant all lakeformation permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslakeformation.html
   */
  All = "lakeformation:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslakeformation.html
 */
export const LakeformationResource = {
}

