/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkeyspacesforapachecassandra.html
 */
export enum CassandraAction {

  /**
   * Write - Grants permission to alter a keyspace or table
   * @see https://docs.aws.amazon.com/keyspaces/latest/devguide/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CassandraResource.keyspace `CassandraResource.keyspace`} 
   * - {@link CassandraResource.table `CassandraResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  Alter = "cassandra:Alter",

  /**
   * Write - Grants permission to create a keyspace or table
   * @see https://docs.aws.amazon.com/keyspaces/latest/devguide/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CassandraResource.keyspace `CassandraResource.keyspace`} 
   * - {@link CassandraResource.table `CassandraResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  Create = "cassandra:Create",

  /**
   * Write - Grants permission to drop a keyspace or table
   * @see https://docs.aws.amazon.com/keyspaces/latest/devguide/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CassandraResource.keyspace `CassandraResource.keyspace`} 
   * - {@link CassandraResource.table `CassandraResource.table`} 
   */
  Drop = "cassandra:Drop",

  /**
   * Write - Grants permission to INSERT, UPDATE or DELETE data in a table
   * @see https://docs.aws.amazon.com/keyspaces/latest/devguide/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CassandraResource.table `CassandraResource.table`} 
   */
  Modify = "cassandra:Modify",

  /**
   * Write - Grants permission to restore table from a backup
   * @see https://docs.aws.amazon.com/keyspaces/latest/devguide/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CassandraResource.table `CassandraResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  Restore = "cassandra:Restore",

  /**
   * Read - Grants permission to SELECT data from a table
   * @see https://docs.aws.amazon.com/keyspaces/latest/devguide/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CassandraResource.table `CassandraResource.table`} 
   */
  Select = "cassandra:Select",

  /**
   * Tagging - Grants permission to tag a keyspace or table
   * @see https://docs.aws.amazon.com/keyspaces/latest/devguide/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CassandraResource.keyspace `CassandraResource.keyspace`} 
   * - {@link CassandraResource.table `CassandraResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "cassandra:TagResource",

  /**
   * Tagging - Grants permission to untag a keyspace or table
   * @see https://docs.aws.amazon.com/keyspaces/latest/devguide/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CassandraResource.keyspace `CassandraResource.keyspace`} 
   * - {@link CassandraResource.table `CassandraResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "cassandra:UntagResource",

  /**
   * Write - Grants permission to UPDATE the partitioner in a system table
   * @see https://docs.aws.amazon.com/keyspaces/latest/devguide/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CassandraResource.table `CassandraResource.table`} 
   */
  UpdatePartitioner = "cassandra:UpdatePartitioner",

  /**
   * * - Grant all cassandra permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkeyspacesforapachecassandra.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CassandraResource.keyspace `CassandraResource.keyspace`} 
   * - {@link CassandraResource.table `CassandraResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "cassandra:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkeyspacesforapachecassandra.html
 */
export const CassandraResource = {

  /**
   * @see https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  keyspace: (options: Partial<{partition: string, region: string, account: string, keyspaceName: string}> = {}) => `arn:${options.partition || '*'}:cassandra:${options.region || '*'}:${options.account || '*'}:/keyspace/${options.keyspaceName || '*'}/`,

  /**
   * @see https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/keyspaces/latest/devguide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  table: (options: Partial<{partition: string, region: string, account: string, keyspaceName: string, tableName: string}> = {}) => `arn:${options.partition || '*'}:cassandra:${options.region || '*'}:${options.account || '*'}:/keyspace/${options.keyspaceName || '*'}/table/${options.tableName || '*'}`,
}

