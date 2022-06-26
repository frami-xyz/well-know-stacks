/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshiftdataapi.html
 */
export enum RedshiftDataAction {

  /**
   * Write - Grants permission to execute multiple queries under a single connection.
   * @see https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_BatchExecuteStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftDataResource.cluster `RedshiftDataResource.cluster`} 
   */
  BatchExecuteStatement = "redshift-data:BatchExecuteStatement",

  /**
   * Write - Grants permission to cancel a running query
   * @see https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_CancelStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `redshift-data:statement-owner-iam-userid`: Filters access by statement owner iam userid ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CancelStatement = "redshift-data:CancelStatement",

  /**
   * Read - Grants permission to retrieve detailed information about a statement execution
   * @see https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_DescribeStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `redshift-data:statement-owner-iam-userid`: Filters access by statement owner iam userid ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeStatement = "redshift-data:DescribeStatement",

  /**
   * Read - Grants permission to retrieve metadata about a particular table
   * @see https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_DescribeTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftDataResource.cluster `RedshiftDataResource.cluster`} 
   */
  DescribeTable = "redshift-data:DescribeTable",

  /**
   * Write - Grants permission to execute a query
   * @see https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ExecuteStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftDataResource.cluster `RedshiftDataResource.cluster`} 
   */
  ExecuteStatement = "redshift-data:ExecuteStatement",

  /**
   * Read - Grants permission to fetch the result of a query
   * @see https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_GetStatementResult.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `redshift-data:statement-owner-iam-userid`: Filters access by statement owner iam userid ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetStatementResult = "redshift-data:GetStatementResult",

  /**
   * Read - Grants permission to list databases for a given cluster
   * @see https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListDatabases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftDataResource.cluster `RedshiftDataResource.cluster`} 
   */
  ListDatabases = "redshift-data:ListDatabases",

  /**
   * Read - Grants permission to list schemas for a given cluster
   * @see https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListSchemas.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftDataResource.cluster `RedshiftDataResource.cluster`} 
   */
  ListSchemas = "redshift-data:ListSchemas",

  /**
   * List - Grants permission to list queries for a given principal
   * @see https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListStatements.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `redshift-data:statement-owner-iam-userid`: Filters access by statement owner iam userid ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListStatements = "redshift-data:ListStatements",

  /**
   * List - Grants permission to list tables for a given cluster
   * @see https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListTables.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftDataResource.cluster `RedshiftDataResource.cluster`} 
   */
  ListTables = "redshift-data:ListTables",

  /**
   * * - Grant all redshift-data permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshiftdataapi.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftDataResource.cluster `RedshiftDataResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `redshift-data:statement-owner-iam-userid`: Filters access by statement owner iam userid ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "redshift-data:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshiftdataapi.html
 */
export const RedshiftDataResource = {

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cluster: (options: Partial<{partition: string, region: string, account: string, clusterName: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:cluster:${options.clusterName || '*'}`,
}

