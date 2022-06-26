/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_databasequerymetadataservice.html
 */
export enum DbqmsAction {

  /**
   * Write - Grants permission to create a new favorite query
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#CreateFavoriteQuery
   */
  CreateFavoriteQuery = "dbqms:CreateFavoriteQuery",

  /**
   * Write - Grants permission to add a query to the history
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_databasequerymetadataservice.html
   */
  CreateQueryHistory = "dbqms:CreateQueryHistory",

  /**
   * Write - Grants permission to create a new query tab
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#CreateTab
   */
  CreateTab = "dbqms:CreateTab",

  /**
   * Write - Grants permission to delete saved queries
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteFavoriteQueries
   */
  DeleteFavoriteQueries = "dbqms:DeleteFavoriteQueries",

  /**
   * Write - Grants permission to delete a historical query
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteQueryHistory
   */
  DeleteQueryHistory = "dbqms:DeleteQueryHistory",

  /**
   * Write - Grants permission to delete query tab
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DeleteTab
   */
  DeleteTab = "dbqms:DeleteTab",

  /**
   * List - Grants permission to list saved queries and associated metadata
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeFavoriteQueries
   */
  DescribeFavoriteQueries = "dbqms:DescribeFavoriteQueries",

  /**
   * List - Grants permission to list history of queries that were run
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeQueryHistory
   */
  DescribeQueryHistory = "dbqms:DescribeQueryHistory",

  /**
   * List - Grants permission to list query tabs and associated metadata
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#DescribeTabs
   */
  DescribeTabs = "dbqms:DescribeTabs",

  /**
   * Read - Grants permission to retrieve favorite or history query string by id
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#GetQueryString
   */
  GetQueryString = "dbqms:GetQueryString",

  /**
   * Write - Grants permission to update saved query and description
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateFavoriteQuery
   */
  UpdateFavoriteQuery = "dbqms:UpdateFavoriteQuery",

  /**
   * Write - Grants permission to update the query history
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateQueryHistory
   */
  UpdateQueryHistory = "dbqms:UpdateQueryHistory",

  /**
   * Write - Grants permission to update query tab
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/dbqms-api.html#UpdateTab
   */
  UpdateTab = "dbqms:UpdateTab",

  /**
   * * - Grant all dbqms permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_databasequerymetadataservice.html
   */
  All = "dbqms:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_databasequerymetadataservice.html
 */
export const DbqmsResource = {
}

