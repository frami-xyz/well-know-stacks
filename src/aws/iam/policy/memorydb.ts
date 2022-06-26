/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmemorydb.html
 */
export enum MemorydbAction {

  /**
   * Write - Grants permissions to apply service updates
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_BatchUpdateCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.cluster `MemorydbResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchUpdateCluster = "memorydb:BatchUpdateCluster",

  /**
   * Write - Grants permissions to make a copy of an existing snapshot
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CopySnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.snapshot `MemorydbResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CopySnapshot = "memorydb:CopySnapshot",

  /**
   * Write - Grants permissions to create a new access control list
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.user `MemorydbResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAcl = "memorydb:CreateAcl",

  /**
   * Write - Grants permissions to create a cluster
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.acl `MemorydbResource.acl`} 
   * - {@link MemorydbResource.parametergroup `MemorydbResource.parametergroup`} 
   * - {@link MemorydbResource.subnetgroup `MemorydbResource.subnetgroup`} 
   * - {@link MemorydbResource.snapshot `MemorydbResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCluster = "memorydb:CreateCluster",

  /**
   * Write - Grants permissions to create a new parameter group
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateParameterGroup = "memorydb:CreateParameterGroup",

  /**
   * Write - Grants permissions to create a backup of a cluster at the current point in time
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.cluster `MemorydbResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSnapshot = "memorydb:CreateSnapshot",

  /**
   * Write - Grants permissions to create a new subnet group
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSubnetGroup = "memorydb:CreateSubnetGroup",

  /**
   * Write - Grants permissions to create a new user
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_CreateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateUser = "memorydb:CreateUser",

  /**
   * Write - Grants permissions to delete an access control list
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.acl `MemorydbResource.acl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAcl = "memorydb:DeleteAcl",

  /**
   * Write - Grants permissions to delete a previously provisioned cluster
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.cluster `MemorydbResource.cluster`} 
   * - {@link MemorydbResource.snapshot `MemorydbResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteCluster = "memorydb:DeleteCluster",

  /**
   * Write - Grants permissions to delete a parameter group
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.parametergroup `MemorydbResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteParameterGroup = "memorydb:DeleteParameterGroup",

  /**
   * Write - Grants permissions to delete a snapshot
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.snapshot `MemorydbResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteSnapshot = "memorydb:DeleteSnapshot",

  /**
   * Write - Grants permissions to delete a subnet group
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.subnetgroup `MemorydbResource.subnetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteSubnetGroup = "memorydb:DeleteSubnetGroup",

  /**
   * Write - Grants permissions to delete a user
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DeleteUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.user `MemorydbResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteUser = "memorydb:DeleteUser",

  /**
   * Read - Grants permissions to retrieve information about access control lists
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeAcls.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.acl `MemorydbResource.acl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeAcls = "memorydb:DescribeAcls",

  /**
   * Read - Grants permissions to retrieve information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster identifier is supplied
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeClusters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.cluster `MemorydbResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeClusters = "memorydb:DescribeClusters",

  /**
   * Read - Grants permissions to list of the available engines and their versions
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeEngineVersions.html
   */
  DescribeEngineVersions = "memorydb:DescribeEngineVersions",

  /**
   * Read - Grants permissions to retrieve events related to clusters, subnet groups, and parameter groups
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeEvents.html
   */
  DescribeEvents = "memorydb:DescribeEvents",

  /**
   * Read - Grants permissions to retrieve information about parameter groups
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeParameterGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.parametergroup `MemorydbResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeParameterGroups = "memorydb:DescribeParameterGroups",

  /**
   * Read - Grants permissions to retrieve a detailed parameter list for a particular parameter group
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.parametergroup `MemorydbResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeParameters = "memorydb:DescribeParameters",

  /**
   * Read - Grants permissions to retrieve details of the service updates
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeServiceUpdates.html
   */
  DescribeServiceUpdates = "memorydb:DescribeServiceUpdates",

  /**
   * Read - Grants permissions to retrieve information about cluster snapshots
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeSnapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.snapshot `MemorydbResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeSnapshots = "memorydb:DescribeSnapshots",

  /**
   * Read - Grants permissions to retrieve a list of subnet group
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeSubnetGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.subnetgroup `MemorydbResource.subnetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeSubnetGroups = "memorydb:DescribeSubnetGroups",

  /**
   * Read - Grants permissions to retrieve information about users
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_DescribeUsers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.user `MemorydbResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeUsers = "memorydb:DescribeUsers",

  /**
   * Write - Grants permissions to test automatic failover on a specified shard in a cluster
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_FailoverShard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.cluster `MemorydbResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  FailoverShard = "memorydb:FailoverShard",

  /**
   * Read - Grants permissions to list available node type updates
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_ListAllowedNodeTypeUpdates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.cluster `MemorydbResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListAllowedNodeTypeUpdates = "memorydb:ListAllowedNodeTypeUpdates",

  /**
   * Read - Grants permissions to list cost allocation tags
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_ListTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.acl `MemorydbResource.acl`} 
   * - {@link MemorydbResource.cluster `MemorydbResource.cluster`} 
   * - {@link MemorydbResource.parametergroup `MemorydbResource.parametergroup`} 
   * - {@link MemorydbResource.snapshot `MemorydbResource.snapshot`} 
   * - {@link MemorydbResource.subnetgroup `MemorydbResource.subnetgroup`} 
   * - {@link MemorydbResource.user `MemorydbResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTags = "memorydb:ListTags",

  /**
   * Write - Grants permissions to modify the parameters of a parameter group to the engine or system default value
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_ResetParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.parametergroup `MemorydbResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ResetParameterGroup = "memorydb:ResetParameterGroup",

  /**
   * Tagging - Grants permissions to add up to 10 cost allocation tags to the named resource
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.acl `MemorydbResource.acl`} 
   * - {@link MemorydbResource.cluster `MemorydbResource.cluster`} 
   * - {@link MemorydbResource.parametergroup `MemorydbResource.parametergroup`} 
   * - {@link MemorydbResource.snapshot `MemorydbResource.snapshot`} 
   * - {@link MemorydbResource.subnetgroup `MemorydbResource.subnetgroup`} 
   * - {@link MemorydbResource.user `MemorydbResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "memorydb:TagResource",

  /**
   * Tagging - Grants permissions to remove the tags identified by the TagKeys list from a resource
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.acl `MemorydbResource.acl`} 
   * - {@link MemorydbResource.cluster `MemorydbResource.cluster`} 
   * - {@link MemorydbResource.parametergroup `MemorydbResource.parametergroup`} 
   * - {@link MemorydbResource.snapshot `MemorydbResource.snapshot`} 
   * - {@link MemorydbResource.subnetgroup `MemorydbResource.subnetgroup`} 
   * - {@link MemorydbResource.user `MemorydbResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "memorydb:UntagResource",

  /**
   * Write - Grants permissions to update an access control list
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.acl `MemorydbResource.acl`} 
   * - {@link MemorydbResource.user `MemorydbResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateAcl = "memorydb:UpdateAcl",

  /**
   * Write - Grants permissions to update the settings for a cluster
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.cluster `MemorydbResource.cluster`} 
   * - {@link MemorydbResource.acl `MemorydbResource.acl`} 
   * - {@link MemorydbResource.parametergroup `MemorydbResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateCluster = "memorydb:UpdateCluster",

  /**
   * Write - Grants permissions to update parameters in a parameter group
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.parametergroup `MemorydbResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateParameterGroup = "memorydb:UpdateParameterGroup",

  /**
   * Write - Grants permissions to update a subnet group
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.subnetgroup `MemorydbResource.subnetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateSubnetGroup = "memorydb:UpdateSubnetGroup",

  /**
   * Write - Grants permissions to update a user
   * @see https://docs.aws.amazon.com/memorydb/latest/APIReference/API_UpdateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.user `MemorydbResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateUser = "memorydb:UpdateUser",

  /**
   * * - Grant all memorydb permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmemorydb.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MemorydbResource.cluster `MemorydbResource.cluster`} 
   * - {@link MemorydbResource.snapshot `MemorydbResource.snapshot`} 
   * - {@link MemorydbResource.user `MemorydbResource.user`} 
   * - {@link MemorydbResource.acl `MemorydbResource.acl`} 
   * - {@link MemorydbResource.parametergroup `MemorydbResource.parametergroup`} 
   * - {@link MemorydbResource.subnetgroup `MemorydbResource.subnetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "memorydb:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmemorydb.html
 */
export const MemorydbResource = {

  /**
   * @see https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  parametergroup: (options: Partial<{partition: string, region: string, account: string, parameterGroupName: string}> = {}) => `arn:${options.partition || '*'}:memorydb:${options.region || '*'}:${options.account || '*'}:parametergroup/${options.parameterGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  subnetgroup: (options: Partial<{partition: string, region: string, account: string, subnetGroupName: string}> = {}) => `arn:${options.partition || '*'}:memorydb:${options.region || '*'}:${options.account || '*'}:subnetgroup/${options.subnetGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cluster: (options: Partial<{partition: string, region: string, account: string, clusterName: string}> = {}) => `arn:${options.partition || '*'}:memorydb:${options.region || '*'}:${options.account || '*'}:cluster/${options.clusterName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  snapshot: (options: Partial<{partition: string, region: string, account: string, snapshotName: string}> = {}) => `arn:${options.partition || '*'}:memorydb:${options.region || '*'}:${options.account || '*'}:snapshot/${options.snapshotName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  user: (options: Partial<{partition: string, region: string, account: string, userName: string}> = {}) => `arn:${options.partition || '*'}:memorydb:${options.region || '*'}:${options.account || '*'}:user/${options.userName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/memorydb/latest/devguide/WhatIs.Components.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  acl: (options: Partial<{partition: string, region: string, account: string, aclName: string}> = {}) => `arn:${options.partition || '*'}:memorydb:${options.region || '*'}:${options.account || '*'}:acl/${options.aclName || '*'}`,
}

