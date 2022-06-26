/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodbacceleratordax.html
 */
export enum DaxAction {

  /**
   * Read - Grants permission to return the attributes of one or more items from one or more tables
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  BatchGetItem = "dax:BatchGetItem",

  /**
   * Write - Grants permission to put or delete multiple items in one or more tables
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  BatchWriteItem = "dax:BatchWriteItem",

  /**
   * Read - Grants permission to the ConditionCheckItem operation that checks the existence of a set of attributes for the item with the given primary key
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheckItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  ConditionCheckItem = "dax:ConditionCheckItem",

  /**
   * Write - Grants permission to create a DAX cluster
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  CreateCluster = "dax:CreateCluster",

  /**
   * Write - Grants permission to create a parameter group
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateParameterGroup.html
   */
  CreateParameterGroup = "dax:CreateParameterGroup",

  /**
   * Write - Grants permission to create a subnet group
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_CreateSubnetGroup.html
   */
  CreateSubnetGroup = "dax:CreateSubnetGroup",

  /**
   * Write - Grants permission to remove one or more nodes from a DAX cluster
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DecreaseReplicationFactor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  DecreaseReplicationFactor = "dax:DecreaseReplicationFactor",

  /**
   * Write - Grants permission to delete a previously provisioned DAX cluster
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  DeleteCluster = "dax:DeleteCluster",

  /**
   * Write - Grants permission to delete a single item in a table by primary key
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dax:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.access-control.htmlspecifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteItem = "dax:DeleteItem",

  /**
   * Write - Grants permission to delete the specified parameter group
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteParameterGroup.html
   */
  DeleteParameterGroup = "dax:DeleteParameterGroup",

  /**
   * Write - Grants permission to delete a subnet group
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DeleteSubnetGroup.html
   */
  DeleteSubnetGroup = "dax:DeleteSubnetGroup",

  /**
   * List - Grants permission to return information about all provisioned DAX clusters
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeClusters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  DescribeClusters = "dax:DescribeClusters",

  /**
   * List - Grants permission to return the default system parameter information for DAX
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeDefaultParameters.html
   */
  DescribeDefaultParameters = "dax:DescribeDefaultParameters",

  /**
   * List - Grants permission to return events related to DAX clusters and parameter groups
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeEvents.html
   */
  DescribeEvents = "dax:DescribeEvents",

  /**
   * List - Grants permission to return a list of parameter group descriptions
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameterGroups.html
   */
  DescribeParameterGroups = "dax:DescribeParameterGroups",

  /**
   * Read - Grants permission to return the detailed parameter list for a particular parameter group
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeParameters.html
   */
  DescribeParameters = "dax:DescribeParameters",

  /**
   * List - Grants permission to return a list of subnet group descriptions
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_DescribeSubnetGroups.html
   */
  DescribeSubnetGroups = "dax:DescribeSubnetGroups",

  /**
   * Read - Grants permission to the GetItem operation that returns a set of attributes for the item with the given primary key
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dax:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.access-control.htmlspecifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetItem = "dax:GetItem",

  /**
   * Write - Grants permission to add one or more nodes to a DAX cluster
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_IncreaseReplicationFactor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  IncreaseReplicationFactor = "dax:IncreaseReplicationFactor",

  /**
   * Read - Grants permission to return a list all of the tags for a DAX cluster
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_ListTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  ListTags = "dax:ListTags",

  /**
   * Write - Grants permission to create a new item, or replace an old item with a new item
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dax:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.access-control.htmlspecifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutItem = "dax:PutItem",

  /**
   * Read - Grants permission to use the primary key of a table or a secondary index to directly access items from that table or index
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  Query = "dax:Query",

  /**
   * Write - Grants permission to reboot a single node of a DAX cluster
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_RebootNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  RebootNode = "dax:RebootNode",

  /**
   * Read - Grants permission to return one or more items and item attributes by accessing every item in a table or a secondary index
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  Scan = "dax:Scan",

  /**
   * Tagging - Grants permission to associate a set of tags with a DAX resource
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  TagResource = "dax:TagResource",

  /**
   * Tagging - Grants permission to remove the association of tags from a DAX resource
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  UntagResource = "dax:UntagResource",

  /**
   * Write - Grants permission to modify the settings for a DAX cluster
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   */
  UpdateCluster = "dax:UpdateCluster",

  /**
   * Write - Grants permission to edit an existing item's attributes, or adds a new item to the table if it does not already exist
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dax:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.access-control.htmlspecifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateItem = "dax:UpdateItem",

  /**
   * Write - Grants permission to modify the parameters of a parameter group
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateParameterGroup.html
   */
  UpdateParameterGroup = "dax:UpdateParameterGroup",

  /**
   * Write - Grants permission to modify an existing subnet group
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_dax_UpdateSubnetGroup.html
   */
  UpdateSubnetGroup = "dax:UpdateSubnetGroup",

  /**
   * * - Grant all dax permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodbacceleratordax.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DaxResource.application `DaxResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dax:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.access-control.htmlspecifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "dax:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodbacceleratordax.html
 */
export const DaxResource = {

  /**
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.access-control.html
   */
  application: (options: Partial<{partition: string, region: string, account: string, clusterName: string}> = {}) => `arn:${options.partition || '*'}:dax:${options.region || '*'}:${options.account || '*'}:cache/${options.clusterName || '*'}`,
}

