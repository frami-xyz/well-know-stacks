/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontimestream.html
 */
export enum TimestreamAction {

  /**
   * Write - Grants permission to cancel queries in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_CancelQuery.html
   */
  CancelQuery = "timestream:CancelQuery",

  /**
   * Write - Grants permission to create a database in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.database `TimestreamResource.database`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDatabase = "timestream:CreateDatabase",

  /**
   * Write - Grants permission to create a scheduled query in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateScheduledQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateScheduledQuery = "timestream:CreateScheduledQuery",

  /**
   * Write - Grants permission to create a table in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_CreateTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTable = "timestream:CreateTable",

  /**
   * Write - Grants permission to delete a database in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.database `TimestreamResource.database`} 
   */
  DeleteDatabase = "timestream:DeleteDatabase",

  /**
   * Write - Grants permission to delete a scheduled query in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteScheduledQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.scheduledQuery `TimestreamResource.scheduledQuery`} 
   */
  DeleteScheduledQuery = "timestream:DeleteScheduledQuery",

  /**
   * Write - Grants permission to delete a table in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_DeleteTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   */
  DeleteTable = "timestream:DeleteTable",

  /**
   * Read - Grants permission to describe a database in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.database `TimestreamResource.database`} 
   */
  DescribeDatabase = "timestream:DescribeDatabase",

  /**
   * List - Grants permission to describe timestream endpoints
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeEndpoints.html
   */
  DescribeEndpoints = "timestream:DescribeEndpoints",

  /**
   * Read - Grants permission to describe a scheduled query in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeScheduledQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.scheduledQuery `TimestreamResource.scheduledQuery`} 
   */
  DescribeScheduledQuery = "timestream:DescribeScheduledQuery",

  /**
   * Read - Grants permission to describe a table in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_DescribeTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   */
  DescribeTable = "timestream:DescribeTable",

  /**
   * Write - Grants permission to execute a scheduled query in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_ExecuteScheduledQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.scheduledQuery `TimestreamResource.scheduledQuery`} 
   */
  ExecuteScheduledQuery = "timestream:ExecuteScheduledQuery",

  /**
   * List - Grants permission to list databases in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListDatabases.html
   */
  ListDatabases = "timestream:ListDatabases",

  /**
   * List - Grants permission to list measures of a table in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   */
  ListMeasures = "timestream:ListMeasures",

  /**
   * List - Grants permission to list scheduled queries in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListScheduledQueries.html
   */
  ListScheduledQueries = "timestream:ListScheduledQueries",

  /**
   * List - Grants permission to list tables in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListTables.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.database `TimestreamResource.database`} 
   */
  ListTables = "timestream:ListTables",

  /**
   * Read - Grants permission to list tags of a resource in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.database `TimestreamResource.database`} 
   * - {@link TimestreamResource.scheduledQuery `TimestreamResource.scheduledQuery`} 
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   */
  ListTagsForResource = "timestream:ListTagsForResource",

  /**
   * Read - Grants permission to issue prepare queries
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_PrepareQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   */
  PrepareQuery = "timestream:PrepareQuery",

  /**
   * Read - Grants permission to issue 'select from table' queries
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   */
  Select = "timestream:Select",

  /**
   * Read - Grants permission to issue 'select 1' queries
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_query_Query.html
   */
  SelectValues = "timestream:SelectValues",

  /**
   * Tagging - Grants permission to add tags to a resource
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.database `TimestreamResource.database`} 
   * - {@link TimestreamResource.scheduledQuery `TimestreamResource.scheduledQuery`} 
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "timestream:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from a resource
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.database `TimestreamResource.database`} 
   * - {@link TimestreamResource.scheduledQuery `TimestreamResource.scheduledQuery`} 
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "timestream:UntagResource",

  /**
   * Write - Grants permission to update a database in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.database `TimestreamResource.database`} 
   */
  UpdateDatabase = "timestream:UpdateDatabase",

  /**
   * Write - Grants permission to update a scheduled query in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateScheduledQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.scheduledQuery `TimestreamResource.scheduledQuery`} 
   */
  UpdateScheduledQuery = "timestream:UpdateScheduledQuery",

  /**
   * Write - Grants permission to update a table in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_UpdateTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   */
  UpdateTable = "timestream:UpdateTable",

  /**
   * Write - Grants permission to ingest data to a table in your account
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_WriteRecords.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   */
  WriteRecords = "timestream:WriteRecords",

  /**
   * * - Grant all timestream permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontimestream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TimestreamResource.database `TimestreamResource.database`} 
   * - {@link TimestreamResource.table `TimestreamResource.table`} 
   * - {@link TimestreamResource.scheduledQuery `TimestreamResource.scheduledQuery`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "timestream:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontimestream.html
 */
export const TimestreamResource = {

  /**
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_Database.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  database: (options: Partial<{partition: string, region: string, account: string, databaseName: string}> = {}) => `arn:${options.partition || '*'}:timestream:${options.region || '*'}:${options.account || '*'}:database/${options.databaseName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_Table.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  table: (options: Partial<{partition: string, region: string, account: string, databaseName: string, tableName: string}> = {}) => `arn:${options.partition || '*'}:timestream:${options.region || '*'}:${options.account || '*'}:database/${options.databaseName || '*'}/table/${options.tableName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/timestream/latest/developerguide/API_ScheduledQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/timestream/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  scheduledQuery: (options: Partial<{partition: string, region: string, account: string, scheduledQueryName: string}> = {}) => `arn:${options.partition || '*'}:timestream:${options.region || '*'}:${options.account || '*'}:scheduled-query/${options.scheduledQueryName || '*'}`,
}

