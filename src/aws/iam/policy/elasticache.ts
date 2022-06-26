/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticache.html
 */
export enum ElasticacheAction {

  /**
   * Tagging - Grants permission to add tags to an ElastiCache resource
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AddTagsToResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * - {@link ElasticacheResource.reservedInstance `ElasticacheResource.reservedInstance`} 
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * - {@link ElasticacheResource.subnetgroup `ElasticacheResource.subnetgroup`} 
   * - {@link ElasticacheResource.user `ElasticacheResource.user`} 
   * - {@link ElasticacheResource.usergroup `ElasticacheResource.usergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AddTagsToResource = "elasticache:AddTagsToResource",

  /**
   * Write - Grants permission to authorize an EC2 security group on a ElastiCache security group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AuthorizeCacheSecurityGroupIngress.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AuthorizeCacheSecurityGroupIngress = "elasticache:AuthorizeCacheSecurityGroupIngress",

  /**
   * Write - Grants permission to apply ElastiCache service updates to sets of clusters and replication groups
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_BatchApplyUpdateAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchApplyUpdateAction = "elasticache:BatchApplyUpdateAction",

  /**
   * Write - Grants permission to stop ElastiCache service updates from being executed on a set of clusters
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_BatchStopUpdateAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchStopUpdateAction = "elasticache:BatchStopUpdateAction",

  /**
   * Write - Grants permission to complete an online migration of data from hosted Redis on Amazon EC2 to ElastiCache
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CompleteMigration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CompleteMigration = "elasticache:CompleteMigration",

  /**
   * Write - Grants permission to make a copy of an existing snapshot
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CopySnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticache:KmsKeyId`: Filters access by the KmsKeyId parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CopySnapshot = "elasticache:CopySnapshot",

  /**
   * Write - Grants permission to create a cache cluster
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * - {@link ElasticacheResource.subnetgroup `ElasticacheResource.subnetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticache:CacheNodeType`: Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineVersion`: Filters access by the engineVersion parameter present in creation or cluster modification requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineType`: Filters access by the engine type present in creation requests. For replication group creations, default engine ‘redis’ is used as key if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:MultiAZEnabled`: Filters access by the AZMode parameter, MultiAZEnabled parameter or the number of availability zones that the cluster or replication group can be placed in ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AuthTokenEnabled`: Filters access by the presence of non empty AuthToken parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:SnapshotRetentionLimit`: Filters access by the SnapshotRetentionLimit parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:CacheNodeType`: Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineVersion`: Filters access by the engineVersion parameter present in creation or cluster modification requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineType`: Filters access by the engine type present in creation requests. For replication group creations, default engine ‘redis’ is used as key if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:MultiAZEnabled`: Filters access by the AZMode parameter, MultiAZEnabled parameter or the number of availability zones that the cluster or replication group can be placed in ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AuthTokenEnabled`: Filters access by the presence of non empty AuthToken parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:SnapshotRetentionLimit`: Filters access by the SnapshotRetentionLimit parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCacheCluster = "elasticache:CreateCacheCluster",

  /**
   * Write - Grants permission to create a parameter group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCacheParameterGroup = "elasticache:CreateCacheParameterGroup",

  /**
   * Write - Grants permission to create a cache security group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSecurityGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCacheSecurityGroup = "elasticache:CreateCacheSecurityGroup",

  /**
   * Write - Grants permission to create a cache subnet group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.subnetgroup `ElasticacheResource.subnetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCacheSubnetGroup = "elasticache:CreateCacheSubnetGroup",

  /**
   * Write - Grants permission to create a global replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateGlobalReplicationGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.globalreplicationgroup `ElasticacheResource.globalreplicationgroup`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateGlobalReplicationGroup = "elasticache:CreateGlobalReplicationGroup",

  /**
   * Write - Grants permission to create a replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateReplicationGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.globalreplicationgroup `ElasticacheResource.globalreplicationgroup`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * - {@link ElasticacheResource.subnetgroup `ElasticacheResource.subnetgroup`} 
   * - {@link ElasticacheResource.usergroup `ElasticacheResource.usergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticache:NumNodeGroups`: Filters access by the NumNodeGroups or NodeGroupCount parameter specified in the request. This key can be used to restrict the number of node groups (shards) clusters can have after creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:CacheNodeType`: Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:ReplicasPerNodeGroup`: Filters access by the number of replicas per node group (shards) specified in creations or scaling requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:EngineVersion`: Filters access by the engineVersion parameter present in creation or cluster modification requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineType`: Filters access by the engine type present in creation requests. For replication group creations, default engine ‘redis’ is used as key if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:AtRestEncryptionEnabled`: Filters access by the AtRestEncryptionEnabled parameter present in the request or default false value if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:TransitEncryptionEnabled`: Filters access by the TransitEncryptionEnabled parameter present in the request or default false value if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AutomaticFailoverEnabled`: Filters access by the AutomaticFailoverEnabled parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:MultiAZEnabled`: Filters access by the AZMode parameter, MultiAZEnabled parameter or the number of availability zones that the cluster or replication group can be placed in ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:ClusterModeEnabled`: Filters access by the cluster mode parameter present in the request. Default value for single node group (shard) creations is false ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AuthTokenEnabled`: Filters access by the presence of non empty AuthToken parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:SnapshotRetentionLimit`: Filters access by the SnapshotRetentionLimit parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:KmsKeyId`: Filters access by the KmsKeyId parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticache:NumNodeGroups`: Filters access by the NumNodeGroups or NodeGroupCount parameter specified in the request. This key can be used to restrict the number of node groups (shards) clusters can have after creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:CacheNodeType`: Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:ReplicasPerNodeGroup`: Filters access by the number of replicas per node group (shards) specified in creations or scaling requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:EngineVersion`: Filters access by the engineVersion parameter present in creation or cluster modification requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineType`: Filters access by the engine type present in creation requests. For replication group creations, default engine ‘redis’ is used as key if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:AtRestEncryptionEnabled`: Filters access by the AtRestEncryptionEnabled parameter present in the request or default false value if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:TransitEncryptionEnabled`: Filters access by the TransitEncryptionEnabled parameter present in the request or default false value if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AutomaticFailoverEnabled`: Filters access by the AutomaticFailoverEnabled parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:MultiAZEnabled`: Filters access by the AZMode parameter, MultiAZEnabled parameter or the number of availability zones that the cluster or replication group can be placed in ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:ClusterModeEnabled`: Filters access by the cluster mode parameter present in the request. Default value for single node group (shard) creations is false ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AuthTokenEnabled`: Filters access by the presence of non empty AuthToken parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:SnapshotRetentionLimit`: Filters access by the SnapshotRetentionLimit parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:KmsKeyId`: Filters access by the KmsKeyId parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateReplicationGroup = "elasticache:CreateReplicationGroup",

  /**
   * Write - Grants permission to create a copy of an entire Redis cluster at a specific moment in time
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticache:KmsKeyId`: Filters access by the KmsKeyId parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSnapshot = "elasticache:CreateSnapshot",

  /**
   * Write - Grants permission to create a Redis user for Redis engine version 6.x and onwards
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.user `ElasticacheResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateUser = "elasticache:CreateUser",

  /**
   * Write - Grants permission to create a Redis user group for Redis engine version 6.x and onwards
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateUserGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.user `ElasticacheResource.user`} 
   * - {@link ElasticacheResource.usergroup `ElasticacheResource.usergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateUserGroup = "elasticache:CreateUserGroup",

  /**
   * Write - Grants permission to decrease the number of node groups in global replication groups
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseNodeGroupsInGlobalReplicationGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.globalreplicationgroup `ElasticacheResource.globalreplicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticache:NumNodeGroups`: Filters access by the NumNodeGroups or NodeGroupCount parameter specified in the request. This key can be used to restrict the number of node groups (shards) clusters can have after creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  DecreaseNodeGroupsInGlobalReplicationGroup = "elasticache:DecreaseNodeGroupsInGlobalReplicationGroup",

  /**
   * Write - Grants permission to decrease the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DecreaseReplicaCount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:ReplicasPerNodeGroup`: Filters access by the number of replicas per node group (shards) specified in creations or scaling requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  DecreaseReplicaCount = "elasticache:DecreaseReplicaCount",

  /**
   * Write - Grants permission to delete a previously provisioned cluster
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteCacheCluster = "elasticache:DeleteCacheCluster",

  /**
   * Write - Grants permission to delete the specified cache parameter group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteCacheParameterGroup = "elasticache:DeleteCacheParameterGroup",

  /**
   * Write - Grants permission to delete a cache security group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSecurityGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteCacheSecurityGroup = "elasticache:DeleteCacheSecurityGroup",

  /**
   * Write - Grants permission to delete a cache subnet group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteCacheSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.subnetgroup `ElasticacheResource.subnetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteCacheSubnetGroup = "elasticache:DeleteCacheSubnetGroup",

  /**
   * Write - Grants permission to delete an existing global replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteGlobalReplicationGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.globalreplicationgroup `ElasticacheResource.globalreplicationgroup`} 
   */
  DeleteGlobalReplicationGroup = "elasticache:DeleteGlobalReplicationGroup",

  /**
   * Write - Grants permission to delete an existing replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteReplicationGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteReplicationGroup = "elasticache:DeleteReplicationGroup",

  /**
   * Write - Grants permission to delete an existing snapshot
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteSnapshot = "elasticache:DeleteSnapshot",

  /**
   * Write - Grants permission to delete an existing user and thus remove it from all user groups and replication groups where it was assigned
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.user `ElasticacheResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteUser = "elasticache:DeleteUser",

  /**
   * Write - Grants permission to delete an existing user group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DeleteUserGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.usergroup `ElasticacheResource.usergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteUserGroup = "elasticache:DeleteUserGroup",

  /**
   * List - Grants permission to list information about provisioned cache clusters
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheClusters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeCacheClusters = "elasticache:DescribeCacheClusters",

  /**
   * List - Grants permission to list available cache engines and their versions
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheEngineVersions.html
   */
  DescribeCacheEngineVersions = "elasticache:DescribeCacheEngineVersions",

  /**
   * List - Grants permission to list cache parameter group descriptions
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameterGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeCacheParameterGroups = "elasticache:DescribeCacheParameterGroups",

  /**
   * List - Grants permission to retrieve the detailed parameter list for a particular cache parameter group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeCacheParameters = "elasticache:DescribeCacheParameters",

  /**
   * List - Grants permission to list cache security group descriptions
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSecurityGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeCacheSecurityGroups = "elasticache:DescribeCacheSecurityGroups",

  /**
   * List - Grants permission to list cache subnet group descriptions
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeCacheSubnetGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.subnetgroup `ElasticacheResource.subnetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeCacheSubnetGroups = "elasticache:DescribeCacheSubnetGroups",

  /**
   * List - Grants permission to retrieve the default engine and system parameter information for the specified cache engine
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEngineDefaultParameters.html
   */
  DescribeEngineDefaultParameters = "elasticache:DescribeEngineDefaultParameters",

  /**
   * List - Grants permission to list events related to clusters, cache security groups, and cache parameter groups
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html
   */
  DescribeEvents = "elasticache:DescribeEvents",

  /**
   * List - Grants permission to list information about global replication groups
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeGlobalReplicationGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.globalreplicationgroup `ElasticacheResource.globalreplicationgroup`} 
   */
  DescribeGlobalReplicationGroups = "elasticache:DescribeGlobalReplicationGroups",

  /**
   * List - Grants permission to list information about provisioned replication groups
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReplicationGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeReplicationGroups = "elasticache:DescribeReplicationGroups",

  /**
   * List - Grants permission to list information about purchased reserved cache nodes
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.reservedInstance `ElasticacheResource.reservedInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeReservedCacheNodes = "elasticache:DescribeReservedCacheNodes",

  /**
   * List - Grants permission to list available reserved cache node offerings
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeReservedCacheNodesOfferings.html
   */
  DescribeReservedCacheNodesOfferings = "elasticache:DescribeReservedCacheNodesOfferings",

  /**
   * List - Grants permission to list details of the service updates
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeServiceUpdates.html
   */
  DescribeServiceUpdates = "elasticache:DescribeServiceUpdates",

  /**
   * List - Grants permission to list information about cluster or replication group snapshots
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeSnapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeSnapshots = "elasticache:DescribeSnapshots",

  /**
   * List - Grants permission to list details of the update actions for a set of clusters or replication groups
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUpdateActions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeUpdateActions = "elasticache:DescribeUpdateActions",

  /**
   * List - Grants permission to list information about Redis user groups
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUserGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.usergroup `ElasticacheResource.usergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeUserGroups = "elasticache:DescribeUserGroups",

  /**
   * List - Grants permission to list information about Redis users
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeUsers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.user `ElasticacheResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeUsers = "elasticache:DescribeUsers",

  /**
   * Write - Grants permission to remove a secondary replication group from the global replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DisassociateGlobalReplicationGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.globalreplicationgroup `ElasticacheResource.globalreplicationgroup`} 
   */
  DisassociateGlobalReplicationGroup = "elasticache:DisassociateGlobalReplicationGroup",

  /**
   * Write - Grants permission to failover the primary region to a selected secondary region of a global replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_FailoverGlobalReplicationGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.globalreplicationgroup `ElasticacheResource.globalreplicationgroup`} 
   */
  FailoverGlobalReplicationGroup = "elasticache:FailoverGlobalReplicationGroup",

  /**
   * Write - Grants permission to increase the number of node groups in a global replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseNodeGroupsInGlobalReplicationGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.globalreplicationgroup `ElasticacheResource.globalreplicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticache:NumNodeGroups`: Filters access by the NumNodeGroups or NodeGroupCount parameter specified in the request. This key can be used to restrict the number of node groups (shards) clusters can have after creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  IncreaseNodeGroupsInGlobalReplicationGroup = "elasticache:IncreaseNodeGroupsInGlobalReplicationGroup",

  /**
   * Write - Grants permission to increase the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_IncreaseReplicaCount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:ReplicasPerNodeGroup`: Filters access by the number of replicas per node group (shards) specified in creations or scaling requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  IncreaseReplicaCount = "elasticache:IncreaseReplicaCount",

  /**
   * List - Grants permission to list available node type that can be used to scale a particular Redis cluster or replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListAllowedNodeTypeModifications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListAllowedNodeTypeModifications = "elasticache:ListAllowedNodeTypeModifications",

  /**
   * Read - Grants permission to list tags for an ElastiCache resource
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * - {@link ElasticacheResource.reservedInstance `ElasticacheResource.reservedInstance`} 
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * - {@link ElasticacheResource.subnetgroup `ElasticacheResource.subnetgroup`} 
   * - {@link ElasticacheResource.user `ElasticacheResource.user`} 
   * - {@link ElasticacheResource.usergroup `ElasticacheResource.usergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "elasticache:ListTagsForResource",

  /**
   * Write - Grants permission to modify settings for a cluster
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticache:CacheNodeType`: Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineVersion`: Filters access by the engineVersion parameter present in creation or cluster modification requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:MultiAZEnabled`: Filters access by the AZMode parameter, MultiAZEnabled parameter or the number of availability zones that the cluster or replication group can be placed in ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AuthTokenEnabled`: Filters access by the presence of non empty AuthToken parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:SnapshotRetentionLimit`: Filters access by the SnapshotRetentionLimit parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ModifyCacheCluster = "elasticache:ModifyCacheCluster",

  /**
   * Write - Grants permission to modify parameters of a cache parameter group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ModifyCacheParameterGroup = "elasticache:ModifyCacheParameterGroup",

  /**
   * Write - Grants permission to modify an existing cache subnet group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.subnetgroup `ElasticacheResource.subnetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ModifyCacheSubnetGroup = "elasticache:ModifyCacheSubnetGroup",

  /**
   * Write - Grants permission to modify settings for a global replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyGlobalReplicationGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.globalreplicationgroup `ElasticacheResource.globalreplicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticache:CacheNodeType`: Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineVersion`: Filters access by the engineVersion parameter present in creation or cluster modification requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:AutomaticFailoverEnabled`: Filters access by the AutomaticFailoverEnabled parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ModifyGlobalReplicationGroup = "elasticache:ModifyGlobalReplicationGroup",

  /**
   * Write - Grants permission to modify the settings for a replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * - {@link ElasticacheResource.usergroup `ElasticacheResource.usergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticache:CacheNodeType`: Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineVersion`: Filters access by the engineVersion parameter present in creation or cluster modification requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:AutomaticFailoverEnabled`: Filters access by the AutomaticFailoverEnabled parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:MultiAZEnabled`: Filters access by the AZMode parameter, MultiAZEnabled parameter or the number of availability zones that the cluster or replication group can be placed in ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AuthTokenEnabled`: Filters access by the presence of non empty AuthToken parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:SnapshotRetentionLimit`: Filters access by the SnapshotRetentionLimit parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ModifyReplicationGroup = "elasticache:ModifyReplicationGroup",

  /**
   * Write - Grants permission to add shards, remove shards, or rebalance the keyspaces among existing shards of a replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:NumNodeGroups`: Filters access by the NumNodeGroups or NodeGroupCount parameter specified in the request. This key can be used to restrict the number of node groups (shards) clusters can have after creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  ModifyReplicationGroupShardConfiguration = "elasticache:ModifyReplicationGroupShardConfiguration",

  /**
   * Write - Grants permission to change Redis user password(s) and/or access string
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.user `ElasticacheResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ModifyUser = "elasticache:ModifyUser",

  /**
   * Write - Grants permission to change list of users that belong to the user group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyUserGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.user `ElasticacheResource.user`} 
   * - {@link ElasticacheResource.usergroup `ElasticacheResource.usergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ModifyUserGroup = "elasticache:ModifyUserGroup",

  /**
   * Write - Grants permission to purchase a reserved cache node offering
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_PurchaseReservedCacheNodesOffering.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.reservedInstance `ElasticacheResource.reservedInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PurchaseReservedCacheNodesOffering = "elasticache:PurchaseReservedCacheNodesOffering",

  /**
   * Write - Grants permission to perform a key space rebalance operation to redistribute slots and ensure uniform key distribution across existing shards in a global replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebalanceSlotsInGlobalReplicationGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.globalreplicationgroup `ElasticacheResource.globalreplicationgroup`} 
   */
  RebalanceSlotsInGlobalReplicationGroup = "elasticache:RebalanceSlotsInGlobalReplicationGroup",

  /**
   * Write - Grants permission to reboot some, or all, of the cache nodes within a provisioned cache cluster or replication group (cluster mode disabled)
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RebootCacheCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RebootCacheCluster = "elasticache:RebootCacheCluster",

  /**
   * Tagging - Grants permission to remove tags from a ElastiCache resource
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RemoveTagsFromResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * - {@link ElasticacheResource.reservedInstance `ElasticacheResource.reservedInstance`} 
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * - {@link ElasticacheResource.subnetgroup `ElasticacheResource.subnetgroup`} 
   * - {@link ElasticacheResource.user `ElasticacheResource.user`} 
   * - {@link ElasticacheResource.usergroup `ElasticacheResource.usergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RemoveTagsFromResource = "elasticache:RemoveTagsFromResource",

  /**
   * Write - Grants permission to modify parameters of a cache parameter group back to their default values
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ResetCacheParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ResetCacheParameterGroup = "elasticache:ResetCacheParameterGroup",

  /**
   * Write - Grants permission to remove an EC2 security group ingress from a ElastiCache security group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_RevokeCacheSecurityGroupIngress.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RevokeCacheSecurityGroupIngress = "elasticache:RevokeCacheSecurityGroupIngress",

  /**
   * Write - Grants permission to start a migration of data from hosted Redis on Amazon EC2 to ElastiCache for Redis
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_StartMigration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartMigration = "elasticache:StartMigration",

  /**
   * Write - Grants permission to test automatic failover on a specified node group in a replication group
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_TestFailover.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TestFailover = "elasticache:TestFailover",

  /**
   * * - Grant all elasticache permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticache.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticacheResource.cluster `ElasticacheResource.cluster`} 
   * - {@link ElasticacheResource.parametergroup `ElasticacheResource.parametergroup`} 
   * - {@link ElasticacheResource.replicationgroup `ElasticacheResource.replicationgroup`} 
   * - {@link ElasticacheResource.reservedInstance `ElasticacheResource.reservedInstance`} 
   * - {@link ElasticacheResource.securitygroup `ElasticacheResource.securitygroup`} 
   * - {@link ElasticacheResource.snapshot `ElasticacheResource.snapshot`} 
   * - {@link ElasticacheResource.subnetgroup `ElasticacheResource.subnetgroup`} 
   * - {@link ElasticacheResource.user `ElasticacheResource.user`} 
   * - {@link ElasticacheResource.usergroup `ElasticacheResource.usergroup`} 
   * - {@link ElasticacheResource.globalreplicationgroup `ElasticacheResource.globalreplicationgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:KmsKeyId`: Filters access by the KmsKeyId parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:CacheNodeType`: Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineVersion`: Filters access by the engineVersion parameter present in creation or cluster modification requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineType`: Filters access by the engine type present in creation requests. For replication group creations, default engine ‘redis’ is used as key if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:MultiAZEnabled`: Filters access by the AZMode parameter, MultiAZEnabled parameter or the number of availability zones that the cluster or replication group can be placed in ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AuthTokenEnabled`: Filters access by the presence of non empty AuthToken parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:SnapshotRetentionLimit`: Filters access by the SnapshotRetentionLimit parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:NumNodeGroups`: Filters access by the NumNodeGroups or NodeGroupCount parameter specified in the request. This key can be used to restrict the number of node groups (shards) clusters can have after creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:ReplicasPerNodeGroup`: Filters access by the number of replicas per node group (shards) specified in creations or scaling requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:AtRestEncryptionEnabled`: Filters access by the AtRestEncryptionEnabled parameter present in the request or default false value if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:TransitEncryptionEnabled`: Filters access by the TransitEncryptionEnabled parameter present in the request or default false value if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AutomaticFailoverEnabled`: Filters access by the AutomaticFailoverEnabled parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:ClusterModeEnabled`: Filters access by the cluster mode parameter present in the request. Default value for single node group (shard) creations is false ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  All = "elasticache:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticache.html
 */
export const ElasticacheResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.ParameterGroups
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  parametergroup: (options: Partial<{partition: string, region: string, account: string, cacheParameterGroupName: string}> = {}) => `arn:${options.partition || '*'}:elasticache:${options.region || '*'}:${options.account || '*'}:parametergroup:${options.cacheParameterGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.SecurityGroups
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  securitygroup: (options: Partial<{partition: string, region: string, account: string, cacheSecurityGroupName: string}> = {}) => `arn:${options.partition || '*'}:elasticache:${options.region || '*'}:${options.account || '*'}:securitygroup:${options.cacheSecurityGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.SubnetGroups
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  subnetgroup: (options: Partial<{partition: string, region: string, account: string, cacheSubnetGroupName: string}> = {}) => `arn:${options.partition || '*'}:elasticache:${options.region || '*'}:${options.account || '*'}:subnetgroup:${options.cacheSubnetGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.ReplicationGroups
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticache:AtRestEncryptionEnabled`: Filters access by the AtRestEncryptionEnabled parameter present in the request or default false value if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AuthTokenEnabled`: Filters access by the presence of non empty AuthToken parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AutomaticFailoverEnabled`: Filters access by the AutomaticFailoverEnabled parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:CacheNodeType`: Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:ClusterModeEnabled`: Filters access by the cluster mode parameter present in the request. Default value for single node group (shard) creations is false ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:EngineType`: Filters access by the engine type present in creation requests. For replication group creations, default engine ‘redis’ is used as key if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineVersion`: Filters access by the engineVersion parameter present in creation or cluster modification requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:KmsKeyId`: Filters access by the KmsKeyId parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:MultiAZEnabled`: Filters access by the AZMode parameter, MultiAZEnabled parameter or the number of availability zones that the cluster or replication group can be placed in ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:NumNodeGroups`: Filters access by the NumNodeGroups or NodeGroupCount parameter specified in the request. This key can be used to restrict the number of node groups (shards) clusters can have after creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:ReplicasPerNodeGroup`: Filters access by the number of replicas per node group (shards) specified in creations or scaling requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:SnapshotRetentionLimit`: Filters access by the SnapshotRetentionLimit parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:TransitEncryptionEnabled`: Filters access by the TransitEncryptionEnabled parameter present in the request or default false value if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  replicationgroup: (options: Partial<{partition: string, region: string, account: string, replicationGroupId: string}> = {}) => `arn:${options.partition || '*'}:elasticache:${options.region || '*'}:${options.account || '*'}:replicationgroup:${options.replicationGroupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.Clusters
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticache:AuthTokenEnabled`: Filters access by the presence of non empty AuthToken parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:CacheNodeType`: Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineType`: Filters access by the engine type present in creation requests. For replication group creations, default engine ‘redis’ is used as key if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineVersion`: Filters access by the engineVersion parameter present in creation or cluster modification requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:MultiAZEnabled`: Filters access by the AZMode parameter, MultiAZEnabled parameter or the number of availability zones that the cluster or replication group can be placed in ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:SnapshotRetentionLimit`: Filters access by the SnapshotRetentionLimit parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  cluster: (options: Partial<{partition: string, region: string, account: string, cacheClusterId: string}> = {}) => `arn:${options.partition || '*'}:elasticache:${options.region || '*'}:${options.account || '*'}:cluster:${options.cacheClusterId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  reservedInstance: (options: Partial<{partition: string, region: string, account: string, reservedCacheNodeId: string}> = {}) => `arn:${options.partition || '*'}:elasticache:${options.region || '*'}:${options.account || '*'}:reserved-instance:${options.reservedCacheNodeId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.Components.html#WhatIs.Components.Snapshots
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticache:KmsKeyId`: Filters access by the KmsKeyId parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  snapshot: (options: Partial<{partition: string, region: string, account: string, snapshotName: string}> = {}) => `arn:${options.partition || '*'}:elasticache:${options.region || '*'}:${options.account || '*'}:snapshot:${options.snapshotName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticache:AtRestEncryptionEnabled`: Filters access by the AtRestEncryptionEnabled parameter present in the request or default false value if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AuthTokenEnabled`: Filters access by the presence of non empty AuthToken parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:AutomaticFailoverEnabled`: Filters access by the AutomaticFailoverEnabled parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:CacheNodeType`: Filters access by the cacheNodeType parameter present in the request. This key can be used to restrict which cache node types can be used on cluster creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:CacheParameterGroupName`: Filters access by the the CacheParameterGroupName parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:ClusterModeEnabled`: Filters access by the cluster mode parameter present in the request. Default value for single node group (shard) creations is false ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:EngineType`: Filters access by the engine type present in creation requests. For replication group creations, default engine ‘redis’ is used as key if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:EngineVersion`: Filters access by the engineVersion parameter present in creation or cluster modification requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:KmsKeyId`: Filters access by the KmsKeyId parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticache:MultiAZEnabled`: Filters access by the AZMode parameter, MultiAZEnabled parameter or the number of availability zones that the cluster or replication group can be placed in ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `elasticache:NumNodeGroups`: Filters access by the NumNodeGroups or NodeGroupCount parameter specified in the request. This key can be used to restrict the number of node groups (shards) clusters can have after creation or scaling operations ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:ReplicasPerNodeGroup`: Filters access by the number of replicas per node group (shards) specified in creations or scaling requests ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:SnapshotRetentionLimit`: Filters access by the SnapshotRetentionLimit parameter in the request ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `elasticache:TransitEncryptionEnabled`: Filters access by the TransitEncryptionEnabled parameter present in the request or default false value if parameter is not present ({@link https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ConditionKeys.html#IAM.SpecifyingConditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  globalreplicationgroup: (options: Partial<{partition: string, account: string, globalReplicationGroupId: string}> = {}) => `arn:${options.partition || '*'}:elasticache::${options.account || '*'}:globalreplicationgroup:${options.globalReplicationGroupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  user: (options: Partial<{partition: string, region: string, account: string, userId: string}> = {}) => `arn:${options.partition || '*'}:elasticache:${options.region || '*'}:${options.account || '*'}:user:${options.userId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  usergroup: (options: Partial<{partition: string, region: string, account: string, userGroupId: string}> = {}) => `arn:${options.partition || '*'}:elasticache:${options.region || '*'}:${options.account || '*'}:usergroup:${options.userGroupId || '*'}`,
}

