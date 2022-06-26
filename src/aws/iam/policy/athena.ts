/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonathena.html
 */
export enum AthenaAction {

  /**
   * Read - Grants permission to get information about one or more named queries
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetNamedQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  BatchGetNamedQuery = "athena:BatchGetNamedQuery",

  /**
   * Read - Grants permission to get information about one or more query executions
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_BatchGetQueryExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  BatchGetQueryExecution = "athena:BatchGetQueryExecution",

  /**
   * Write - Grants permission to create a datacatalog
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateDataCatalog.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataCatalog = "athena:CreateDataCatalog",

  /**
   * Write - Grants permission to create a named query
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateNamedQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  CreateNamedQuery = "athena:CreateNamedQuery",

  /**
   * Write - Grants permission to create a prepared statement
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_CreatePreparedStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  CreatePreparedStatement = "athena:CreatePreparedStatement",

  /**
   * Write - Grants permission to create a workgroup
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_CreateWorkGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWorkGroup = "athena:CreateWorkGroup",

  /**
   * Write - Grants permission to delete a datacatalog
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteDataCatalog.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   */
  DeleteDataCatalog = "athena:DeleteDataCatalog",

  /**
   * Write - Grants permission to delete a named query specified
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteNamedQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  DeleteNamedQuery = "athena:DeleteNamedQuery",

  /**
   * Write - Grants permission to delete a prepared statement specified
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_DeletePreparedStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  DeletePreparedStatement = "athena:DeletePreparedStatement",

  /**
   * Write - Grants permission to delete a workgroup
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_DeleteWorkGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  DeleteWorkGroup = "athena:DeleteWorkGroup",

  /**
   * Read - Grants permission to get a datacatalog
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDataCatalog.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   */
  GetDataCatalog = "athena:GetDataCatalog",

  /**
   * Read - Grants permission to get a database for a given datacatalog
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_GetDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   */
  GetDatabase = "athena:GetDatabase",

  /**
   * Read - Grants permission to get information about the specified named query
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_GetNamedQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  GetNamedQuery = "athena:GetNamedQuery",

  /**
   * Read - Grants permission to get information about the specified prepared statement
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_GetPreparedStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  GetPreparedStatement = "athena:GetPreparedStatement",

  /**
   * Read - Grants permission to get information about the specified query execution
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  GetQueryExecution = "athena:GetQueryExecution",

  /**
   * Read - Grants permission to get the query results
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_GetQueryResults.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  GetQueryResults = "athena:GetQueryResults",

  /**
   * Read - Grants permission to get the query results stream
   * @see https://docs.aws.amazon.com/athena/latest/ug/connect-with-previous-jdbc.html#jdbc-prev-version-policies
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  GetQueryResultsStream = "athena:GetQueryResultsStream",

  /**
   * Read - Grants permission to get a metadata about a table for a given datacatalog
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_%20GetTableMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   */
  GetTableMetadata = "athena:GetTableMetadata",

  /**
   * Read - Grants permission to get a workgroup
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_GetWorkGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  GetWorkGroup = "athena:GetWorkGroup",

  /**
   * List - Grants permission to return a list of datacatalogs for the specified AWS account
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDataCatalogs.html
   */
  ListDataCatalogs = "athena:ListDataCatalogs",

  /**
   * List - Grants permission to return a list of databases for a given datacatalog
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_ListDatabases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   */
  ListDatabases = "athena:ListDatabases",

  /**
   * Read - Grants permission to return a list of athena engine versions for the specified AWS account
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_ListEngineVersions.html
   */
  ListEngineVersions = "athena:ListEngineVersions",

  /**
   * List - Grants permission to return a list of named queries in Amazon Athena for the specified AWS account
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_ListNamedQueries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  ListNamedQueries = "athena:ListNamedQueries",

  /**
   * List - Grants permission to return a list of prepared statements for the specified workgroup
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_ListPreparedStatements.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  ListPreparedStatements = "athena:ListPreparedStatements",

  /**
   * Read - Grants permission to return a list of query executions for the specified AWS account
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_ListQueryExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  ListQueryExecutions = "athena:ListQueryExecutions",

  /**
   * Read - Grants permission to return a list of table metadata in a database for a given datacatalog
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTableMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   */
  ListTableMetadata = "athena:ListTableMetadata",

  /**
   * Read - Grants permission to return a list of tags for a resource
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  ListTagsForResource = "athena:ListTagsForResource",

  /**
   * List - Grants permission to return a list of workgroups for the specified AWS account
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_ListWorkGroups.html
   */
  ListWorkGroups = "athena:ListWorkGroups",

  /**
   * Write - Grants permission to start a query execution using an SQL query provided as a string
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  StartQueryExecution = "athena:StartQueryExecution",

  /**
   * Write - Grants permission to stop the specified query execution
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_StopQueryExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  StopQueryExecution = "athena:StopQueryExecution",

  /**
   * Tagging - Grants permission to add a tag to a resource
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "athena:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from a resource
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "athena:UntagResource",

  /**
   * Write - Grants permission to update a datacatalog
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateDataCatalog.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   */
  UpdateDataCatalog = "athena:UpdateDataCatalog",

  /**
   * Write - Grants permission to update a named query specified
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateNamedQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  UpdateNamedQuery = "athena:UpdateNamedQuery",

  /**
   * Write - Grants permission to update a prepared statement
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdatePreparedStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  UpdatePreparedStatement = "athena:UpdatePreparedStatement",

  /**
   * Write - Grants permission to update a workgroup
   * @see https://docs.aws.amazon.com/athena/latest/APIReference/API_UpdateWorkGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   */
  UpdateWorkGroup = "athena:UpdateWorkGroup",

  /**
   * * - Grant all athena permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonathena.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AthenaResource.workgroup `AthenaResource.workgroup`} 
   * - {@link AthenaResource.datacatalog `AthenaResource.datacatalog`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "athena:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonathena.html
 */
export const AthenaResource = {

  /**
   * @see https://docs.aws.amazon.com/athena/latest/ug/datacatalogs-example-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  datacatalog: (options: Partial<{partition: string, region: string, account: string, dataCatalogName: string}> = {}) => `arn:${options.partition || '*'}:athena:${options.region || '*'}:${options.account || '*'}:datacatalog/${options.dataCatalogName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/athena/latest/ug/example-policies-workgroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workgroup: (options: Partial<{partition: string, region: string, account: string, workGroupName: string}> = {}) => `arn:${options.partition || '*'}:athena:${options.region || '*'}:${options.account || '*'}:workgroup/${options.workGroupName || '*'}`,
}

