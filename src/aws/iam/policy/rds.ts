/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrds.html
 */
export enum RdsAction {

  /**
   * Write - Grants permission to associate an Identity and Access Management (IAM) role from an Aurora DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  AddRoleToDBCluster = "rds:AddRoleToDBCluster",

  /**
   * Write - Grants permission to associate an AWS Identity and Access Management (IAM) role with a DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddRoleToDBInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  AddRoleToDBInstance = "rds:AddRoleToDBInstance",

  /**
   * Write - Grants permission to add a source identifier to an existing RDS event notification subscription
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddSourceIdentifierToSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.es `RdsResource.es`} 
   */
  AddSourceIdentifierToSubscription = "rds:AddSourceIdentifierToSubscription",

  /**
   * Tagging - Grants permission to add metadata tags to an Amazon RDS resource
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AddTagsToResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cev `RdsResource.cev`} 
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.clusterEndpoint `RdsResource.clusterEndpoint`} 
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.es `RdsResource.es`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.pg `RdsResource.pg`} 
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   * - {@link RdsResource.proxyEndpoint `RdsResource.proxyEndpoint`} 
   * - {@link RdsResource.ri `RdsResource.ri`} 
   * - {@link RdsResource.secgrp `RdsResource.secgrp`} 
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * - {@link RdsResource.targetGroup `RdsResource.targetGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AddTagsToResource = "rds:AddTagsToResource",

  /**
   * Write - Grants permission to apply a pending maintenance action to a resource
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ApplyPendingMaintenanceAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  ApplyPendingMaintenanceAction = "rds:ApplyPendingMaintenanceAction",

  /**
   * Permissions management - Grants permission to enable ingress to a DBSecurityGroup using one of two forms of authorization
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AuthorizeDBSecurityGroupIngress.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.secgrp `RdsResource.secgrp`} 
   */
  AuthorizeDBSecurityGroupIngress = "rds:AuthorizeDBSecurityGroupIngress",

  /**
   * Write - Grants permission to backtrack a DB cluster to a specific time, without creating a new DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_BacktrackDBCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  BacktrackDBCluster = "rds:BacktrackDBCluster",

  /**
   * Write - Grants permission to cancel an export task in progress
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CancelExportTask.html
   */
  CancelExportTask = "rds:CancelExportTask",

  /**
   * Write - Grants permission to copy the specified DB cluster parameter group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CopyDBClusterParameterGroup = "rds:CopyDBClusterParameterGroup",

  /**
   * Write - Grants permission to create a snapshot of a DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBClusterSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CopyDBClusterSnapshot = "rds:CopyDBClusterSnapshot",

  /**
   * Write - Grants permission to copy the specified DB parameter group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.pg `RdsResource.pg`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CopyDBParameterGroup = "rds:CopyDBParameterGroup",

  /**
   * Write - Grants permission to copy the specified DB snapshot
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyDBSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CopyDBSnapshot = "rds:CopyDBSnapshot",

  /**
   * Write - Grants permission to copy the specified option group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CopyOptionGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.og `RdsResource.og`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CopyOptionGroup = "rds:CopyOptionGroup",

  /**
   * Write - Grants permission to create a custom engine version
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateCustomDBEngineVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cev `RdsResource.cev`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCustomDBEngineVersion = "rds:CreateCustomDBEngineVersion",

  /**
   * Write - Grants permission to create a new Amazon Aurora DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.globalCluster `RdsResource.globalCluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:DatabaseEngine`: Filters access by the database engine. For possible values refer to the engine parameter in CreateDBInstance API ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:DatabaseName`: Filters access by the user-defined name of the database on the DB instance ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:StorageEncrypted`: Filters access by the value that specifies whether the DB instance storage should be encrypted. To enforce storage encryption, specify true ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `rds:DatabaseClass`: Filters access by the type of DB instance class ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:StorageSize`: Filters access by the storage volume size (in GB) ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `rds:Piops`: Filters access by the value that contains the number of Provisioned IOPS (PIOPS) that the instance supports. To indicate a DB instance that does not have PIOPS enabled, specify 0 ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  CreateDBCluster = "rds:CreateDBCluster",

  /**
   * Write - Grants permission to create a new custom endpoint and associates it with an Amazon Aurora DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.clusterEndpoint `RdsResource.clusterEndpoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `rds:EndpointType`: Filters access by the type of the endpoint. One of: READER, WRITER, CUSTOM ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDBClusterEndpoint = "rds:CreateDBClusterEndpoint",

  /**
   * Write - Grants permission to create a new DB cluster parameter group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDBClusterParameterGroup = "rds:CreateDBClusterParameterGroup",

  /**
   * Write - Grants permission to create a snapshot of a DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBClusterSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDBClusterSnapshot = "rds:CreateDBClusterSnapshot",

  /**
   * Write - Grants permission to create a new DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.pg `RdsResource.pg`} 
   * - {@link RdsResource.secgrp `RdsResource.secgrp`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `rds:BackupTarget`: Filters access by the type of backup target. One of: REGION, OUTPOSTS ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDBInstance = "rds:CreateDBInstance",

  /**
   * Write - Grants permission to create a DB instance that acts as a Read Replica of a source DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstanceReadReplica.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDBInstanceReadReplica = "rds:CreateDBInstanceReadReplica",

  /**
   * Write - Grants permission to create a new DB parameter group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.pg `RdsResource.pg`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDBParameterGroup = "rds:CreateDBParameterGroup",

  /**
   * Write - Grants permission to create a database proxy
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBProxy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDBProxy = "rds:CreateDBProxy",

  /**
   * Write - Grants permission to create a database proxy endpoint
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBProxyEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   * - {@link RdsResource.proxyEndpoint `RdsResource.proxyEndpoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDBProxyEndpoint = "rds:CreateDBProxyEndpoint",

  /**
   * Write - Grants permission to create a new DB security group. DB security groups control access to a DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSecurityGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.secgrp `RdsResource.secgrp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDBSecurityGroup = "rds:CreateDBSecurityGroup",

  /**
   * Write - Grants permission to create a DBSnapshot
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `rds:BackupTarget`: Filters access by the type of backup target. One of: REGION, OUTPOSTS ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDBSnapshot = "rds:CreateDBSnapshot",

  /**
   * Write - Grants permission to create a new DB subnet group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDBSubnetGroup = "rds:CreateDBSubnetGroup",

  /**
   * Write - Grants permission to create an RDS event notification subscription
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateEventSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.es `RdsResource.es`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEventSubscription = "rds:CreateEventSubscription",

  /**
   * Write - Grants permission to create an Aurora global database spread across multiple regions
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateGlobalCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.globalCluster `RdsResource.globalCluster`} 
   */
  CreateGlobalCluster = "rds:CreateGlobalCluster",

  /**
   * Write - Grants permission to create a new option group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateOptionGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.og `RdsResource.og`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateOptionGroup = "rds:CreateOptionGroup",

  /**
   * Write - Grants permission to access a resource in the remote Region when executing cross-Region operations, such as cross-Region snapshot copy or cross-Region read replica creation
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions
   */
  CrossRegionCommunication = "rds:CrossRegionCommunication",

  /**
   * Write - Grants permission to delete an existing custom engine version
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteCustomDBEngineVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cev `RdsResource.cev`} 
   */
  DeleteCustomDBEngineVersion = "rds:DeleteCustomDBEngineVersion",

  /**
   * Write - Grants permission to delete a previously provisioned DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   */
  DeleteDBCluster = "rds:DeleteDBCluster",

  /**
   * Write - Grants permission to delete a custom endpoint and removes it from an Amazon Aurora DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterEndpoint `RdsResource.clusterEndpoint`} 
   */
  DeleteDBClusterEndpoint = "rds:DeleteDBClusterEndpoint",

  /**
   * Write - Grants permission to delete a specified DB cluster parameter group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   */
  DeleteDBClusterParameterGroup = "rds:DeleteDBClusterParameterGroup",

  /**
   * Write - Grants permission to delete a DB cluster snapshot
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBClusterSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   */
  DeleteDBClusterSnapshot = "rds:DeleteDBClusterSnapshot",

  /**
   * Write - Grants permission to delete a previously provisioned DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  DeleteDBInstance = "rds:DeleteDBInstance",

  /**
   * Write - Grants permission to deletes automated backups based on the source instance's DbiResourceId value or the restorable instance's resource ID
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBInstanceAutomatedBackup.html
   */
  DeleteDBInstanceAutomatedBackup = "rds:DeleteDBInstanceAutomatedBackup",

  /**
   * Write - Grants permission to delete a specified DBParameterGroup
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.pg `RdsResource.pg`} 
   */
  DeleteDBParameterGroup = "rds:DeleteDBParameterGroup",

  /**
   * Write - Grants permission to delete a database proxy
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBProxy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   */
  DeleteDBProxy = "rds:DeleteDBProxy",

  /**
   * Write - Grants permission to delete a database proxy endpoint
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBProxyEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.proxyEndpoint `RdsResource.proxyEndpoint`} 
   */
  DeleteDBProxyEndpoint = "rds:DeleteDBProxyEndpoint",

  /**
   * Write - Grants permission to delete a DB security group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSecurityGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.secgrp `RdsResource.secgrp`} 
   */
  DeleteDBSecurityGroup = "rds:DeleteDBSecurityGroup",

  /**
   * Write - Grants permission to delete a DBSnapshot
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   */
  DeleteDBSnapshot = "rds:DeleteDBSnapshot",

  /**
   * Write - Grants permission to delete a DB subnet group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteDBSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   */
  DeleteDBSubnetGroup = "rds:DeleteDBSubnetGroup",

  /**
   * Write - Grants permission to delete an RDS event notification subscription
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteEventSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.es `RdsResource.es`} 
   */
  DeleteEventSubscription = "rds:DeleteEventSubscription",

  /**
   * Write - Grants permission to delete a global database cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteGlobalCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.globalCluster `RdsResource.globalCluster`} 
   */
  DeleteGlobalCluster = "rds:DeleteGlobalCluster",

  /**
   * Write - Grants permission to delete an existing option group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeleteOptionGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.og `RdsResource.og`} 
   */
  DeleteOptionGroup = "rds:DeleteOptionGroup",

  /**
   * Write - Grants permission to remove targets from a database proxy target group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DeregisterDBProxyTargets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   * - {@link RdsResource.targetGroup `RdsResource.targetGroup`} 
   */
  DeregisterDBProxyTargets = "rds:DeregisterDBProxyTargets",

  /**
   * List - Grants permission to list all of the attributes for a customer account
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeAccountAttributes.html
   */
  DescribeAccountAttributes = "rds:DescribeAccountAttributes",

  /**
   * List - Grants permission to list the set of CA certificates provided by Amazon RDS for this AWS account
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeCertificates.html
   */
  DescribeCertificates = "rds:DescribeCertificates",

  /**
   * List - Grants permission to return information about backtracks for a DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterBacktracks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  DescribeDBClusterBacktracks = "rds:DescribeDBClusterBacktracks",

  /**
   * List - Grants permission to return information about endpoints for an Amazon Aurora DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterEndpoints.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterEndpoint `RdsResource.clusterEndpoint`} 
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  DescribeDBClusterEndpoints = "rds:DescribeDBClusterEndpoints",

  /**
   * List - Grants permission to return a list of DBClusterParameterGroup descriptions
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameterGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   */
  DescribeDBClusterParameterGroups = "rds:DescribeDBClusterParameterGroups",

  /**
   * List - Grants permission to return the detailed parameter list for a particular DB cluster parameter group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   */
  DescribeDBClusterParameters = "rds:DescribeDBClusterParameters",

  /**
   * List - Grants permission to return a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshotAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   */
  DescribeDBClusterSnapshotAttributes = "rds:DescribeDBClusterSnapshotAttributes",

  /**
   * List - Grants permission to return information about DB cluster snapshots
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusterSnapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   */
  DescribeDBClusterSnapshots = "rds:DescribeDBClusterSnapshots",

  /**
   * List - Grants permission to return information about provisioned Aurora DB clusters
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBClusters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  DescribeDBClusters = "rds:DescribeDBClusters",

  /**
   * List - Grants permission to return a list of the available DB engines
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBEngineVersions.html
   */
  DescribeDBEngineVersions = "rds:DescribeDBEngineVersions",

  /**
   * List - Grants permission to return a list of automated backups for both current and deleted instances
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstanceAutomatedBackups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  DescribeDBInstanceAutomatedBackups = "rds:DescribeDBInstanceAutomatedBackups",

  /**
   * List - Grants permission to return information about provisioned RDS instances
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  DescribeDBInstances = "rds:DescribeDBInstances",

  /**
   * List - Grants permission to return a list of DB log files for the DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBLogFiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  DescribeDBLogFiles = "rds:DescribeDBLogFiles",

  /**
   * List - Grants permission to return a list of DBParameterGroup descriptions
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameterGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.pg `RdsResource.pg`} 
   */
  DescribeDBParameterGroups = "rds:DescribeDBParameterGroups",

  /**
   * List - Grants permission to return the detailed parameter list for a particular DB parameter group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.pg `RdsResource.pg`} 
   */
  DescribeDBParameters = "rds:DescribeDBParameters",

  /**
   * List - Grants permission to view proxies
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   */
  DescribeDBProxies = "rds:DescribeDBProxies",

  /**
   * List - Grants permission to view proxy endpoints
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyEndpoints.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   * - {@link RdsResource.proxyEndpoint `RdsResource.proxyEndpoint`} 
   */
  DescribeDBProxyEndpoints = "rds:DescribeDBProxyEndpoints",

  /**
   * List - Grants permission to view database proxy target group details
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargetGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   */
  DescribeDBProxyTargetGroups = "rds:DescribeDBProxyTargetGroups",

  /**
   * List - Grants permission to view database proxy target details
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBProxyTargets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   * - {@link RdsResource.targetGroup `RdsResource.targetGroup`} 
   */
  DescribeDBProxyTargets = "rds:DescribeDBProxyTargets",

  /**
   * List - Grants permission to return a list of DBSecurityGroup descriptions
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSecurityGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.secgrp `RdsResource.secgrp`} 
   */
  DescribeDBSecurityGroups = "rds:DescribeDBSecurityGroups",

  /**
   * List - Grants permission to return a list of DB snapshot attribute names and values for a manual DB snapshot
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshotAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   */
  DescribeDBSnapshotAttributes = "rds:DescribeDBSnapshotAttributes",

  /**
   * List - Grants permission to return information about DB snapshots
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSnapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  DescribeDBSnapshots = "rds:DescribeDBSnapshots",

  /**
   * List - Grants permission to return a list of DBSubnetGroup descriptions
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeDBSubnetGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   */
  DescribeDBSubnetGroups = "rds:DescribeDBSubnetGroups",

  /**
   * List - Grants permission to return the default engine and system parameter information for the cluster database engine
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultClusterParameters.html
   */
  DescribeEngineDefaultClusterParameters = "rds:DescribeEngineDefaultClusterParameters",

  /**
   * List - Grants permission to return the default engine and system parameter information for the specified database engine
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEngineDefaultParameters.html
   */
  DescribeEngineDefaultParameters = "rds:DescribeEngineDefaultParameters",

  /**
   * List - Grants permission to display a list of categories for all event source types, or, if specified, for a specified source type
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventCategories.html
   */
  DescribeEventCategories = "rds:DescribeEventCategories",

  /**
   * List - Grants permission to list all the subscription descriptions for a customer account
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEventSubscriptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.es `RdsResource.es`} 
   */
  DescribeEventSubscriptions = "rds:DescribeEventSubscriptions",

  /**
   * List - Grants permission to return events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeEvents.html
   */
  DescribeEvents = "rds:DescribeEvents",

  /**
   * List - Grants permission to return information about the export tasks
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeExportTasks.html
   */
  DescribeExportTasks = "rds:DescribeExportTasks",

  /**
   * List - Grants permission to return information about Aurora global database clusters
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeGlobalClusters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.globalCluster `RdsResource.globalCluster`} 
   */
  DescribeGlobalClusters = "rds:DescribeGlobalClusters",

  /**
   * List - Grants permission to describe all available options
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroupOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.og `RdsResource.og`} 
   */
  DescribeOptionGroupOptions = "rds:DescribeOptionGroupOptions",

  /**
   * List - Grants permission to describe the available option groups
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOptionGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.og `RdsResource.og`} 
   */
  DescribeOptionGroups = "rds:DescribeOptionGroups",

  /**
   * List - Grants permission to return a list of orderable DB instance options for the specified engine
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeOrderableDBInstanceOptions.html
   */
  DescribeOrderableDBInstanceOptions = "rds:DescribeOrderableDBInstanceOptions",

  /**
   * List - Grants permission to return a list of resources (for example, DB instances) that have at least one pending maintenance action
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribePendingMaintenanceActions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  DescribePendingMaintenanceActions = "rds:DescribePendingMaintenanceActions",

  /**
   * Read - Grants permission to return information about recommendation groups
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Recommendations.html
   */
  DescribeRecommendationGroups = "rds:DescribeRecommendationGroups",

  /**
   * Read - Grants permission to return information about recommendations
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Recommendations.html
   */
  DescribeRecommendations = "rds:DescribeRecommendations",

  /**
   * List - Grants permission to return information about reserved DB instances for this account, or about a specified reserved DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.ri `RdsResource.ri`} 
   */
  DescribeReservedDBInstances = "rds:DescribeReservedDBInstances",

  /**
   * List - Grants permission to list available reserved DB instance offerings
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeReservedDBInstancesOfferings.html
   */
  DescribeReservedDBInstancesOfferings = "rds:DescribeReservedDBInstancesOfferings",

  /**
   * List - Grants permission to return a list of the source AWS Regions where the current AWS Region can create a Read Replica or copy a DB snapshot from
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeSourceRegions.html
   */
  DescribeSourceRegions = "rds:DescribeSourceRegions",

  /**
   * List - Grants permission to list available modifications you can make to your DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DescribeValidDBInstanceModifications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  DescribeValidDBInstanceModifications = "rds:DescribeValidDBInstanceModifications",

  /**
   * Read - Grants permission to download specified log file
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  DownloadCompleteDBLogFile = "rds:DownloadCompleteDBLogFile",

  /**
   * Read - Grants permission to download all or a portion of the specified log file, up to 1 MB in size
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DownloadDBLogFilePortion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  DownloadDBLogFilePortion = "rds:DownloadDBLogFilePortion",

  /**
   * Write - Grants permission to force a failover for a DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_FailoverDBCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  FailoverDBCluster = "rds:FailoverDBCluster",

  /**
   * Write - Grants permission to failover a global cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_FailoverGlobalCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.globalCluster `RdsResource.globalCluster`} 
   */
  FailoverGlobalCluster = "rds:FailoverGlobalCluster",

  /**
   * Read - Grants permission to list all tags on an Amazon RDS resource
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cev `RdsResource.cev`} 
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.clusterEndpoint `RdsResource.clusterEndpoint`} 
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.es `RdsResource.es`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.pg `RdsResource.pg`} 
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   * - {@link RdsResource.proxyEndpoint `RdsResource.proxyEndpoint`} 
   * - {@link RdsResource.ri `RdsResource.ri`} 
   * - {@link RdsResource.secgrp `RdsResource.secgrp`} 
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * - {@link RdsResource.targetGroup `RdsResource.targetGroup`} 
   */
  ListTagsForResource = "rds:ListTagsForResource",

  /**
   * Write - Grants permission to modify the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificate for Amazon RDS for new DB instances
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyCertificates.html
   */
  ModifyCertificates = "rds:ModifyCertificates",

  /**
   * Write - Grants permission to modify current cluster capacity for an Amazon Aurora Severless DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyCurrentDBClusterCapacity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  ModifyCurrentDBClusterCapacity = "rds:ModifyCurrentDBClusterCapacity",

  /**
   * Write - Grants permission to modify an existing custom engine version
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyCustomDBEngineVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cev `RdsResource.cev`} 
   */
  ModifyCustomDBEngineVersion = "rds:ModifyCustomDBEngineVersion",

  /**
   * Write - Grants permission to modify a setting for an Amazon Aurora DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `rds:DatabaseClass`: Filters access by the type of DB instance class ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:StorageSize`: Filters access by the storage volume size (in GB) ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `rds:Piops`: Filters access by the value that contains the number of Provisioned IOPS (PIOPS) that the instance supports. To indicate a DB instance that does not have PIOPS enabled, specify 0 ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  ModifyDBCluster = "rds:ModifyDBCluster",

  /**
   * Write - Grants permission to modify the properties of an endpoint in an Amazon Aurora DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterEndpoint `RdsResource.clusterEndpoint`} 
   */
  ModifyDBClusterEndpoint = "rds:ModifyDBClusterEndpoint",

  /**
   * Write - Grants permission to modify the parameters of a DB cluster parameter group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   */
  ModifyDBClusterParameterGroup = "rds:ModifyDBClusterParameterGroup",

  /**
   * Write - Grants permission to add an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   */
  ModifyDBClusterSnapshotAttribute = "rds:ModifyDBClusterSnapshotAttribute",

  /**
   * Write - Grants permission to modify settings for a DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.pg `RdsResource.pg`} 
   * - {@link RdsResource.secgrp `RdsResource.secgrp`} 
   */
  ModifyDBInstance = "rds:ModifyDBInstance",

  /**
   * Write - Grants permission to modify the parameters of a DB parameter group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.pg `RdsResource.pg`} 
   */
  ModifyDBParameterGroup = "rds:ModifyDBParameterGroup",

  /**
   * Write - Grants permission to modify database proxy
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   */
  ModifyDBProxy = "rds:ModifyDBProxy",

  /**
   * Write - Grants permission to modify database proxy endpoint
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxyEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.proxyEndpoint `RdsResource.proxyEndpoint`} 
   */
  ModifyDBProxyEndpoint = "rds:ModifyDBProxyEndpoint",

  /**
   * Write - Grants permission to modify target group for a database proxy
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBProxyTargetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.targetGroup `RdsResource.targetGroup`} 
   */
  ModifyDBProxyTargetGroup = "rds:ModifyDBProxyTargetGroup",

  /**
   * Write - Grants permission to update a manual DB snapshot, which can be encrypted or not encrypted, with a new engine version
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   */
  ModifyDBSnapshot = "rds:ModifyDBSnapshot",

  /**
   * Write - Grants permission to add an attribute and values to, or removes an attribute and values from, a manual DB snapshot
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSnapshotAttribute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   */
  ModifyDBSnapshotAttribute = "rds:ModifyDBSnapshotAttribute",

  /**
   * Write - Grants permission to modify an existing DB subnet group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   */
  ModifyDBSubnetGroup = "rds:ModifyDBSubnetGroup",

  /**
   * Write - Grants permission to modify an existing RDS event notification subscription
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyEventSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.es `RdsResource.es`} 
   */
  ModifyEventSubscription = "rds:ModifyEventSubscription",

  /**
   * Write - Grants permission to modify a setting for an Amazon Aurora global cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyGlobalCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.globalCluster `RdsResource.globalCluster`} 
   */
  ModifyGlobalCluster = "rds:ModifyGlobalCluster",

  /**
   * Write - Grants permission to modify an existing option group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyOptionGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.og `RdsResource.og`} 
   */
  ModifyOptionGroup = "rds:ModifyOptionGroup",

  /**
   * Write - Grants permission to modify recommendation
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Recommendations.html
   */
  ModifyRecommendation = "rds:ModifyRecommendation",

  /**
   * Write - Grants permission to promote a Read Replica DB instance to a standalone DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplica.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  PromoteReadReplica = "rds:PromoteReadReplica",

  /**
   * Write - Grants permission to promote a Read Replica DB cluster to a standalone DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PromoteReadReplicaDBCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  PromoteReadReplicaDBCluster = "rds:PromoteReadReplicaDBCluster",

  /**
   * Write - Grants permission to purchase a reserved DB instance offering
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_PurchaseReservedDBInstancesOffering.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.ri `RdsResource.ri`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PurchaseReservedDBInstancesOffering = "rds:PurchaseReservedDBInstancesOffering",

  /**
   * Write - Grants permission to reboot a previously provisioned DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RebootDBCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  RebootDBCluster = "rds:RebootDBCluster",

  /**
   * Write - Grants permission to restart the database engine service
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RebootDBInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  RebootDBInstance = "rds:RebootDBInstance",

  /**
   * Write - Grants permission to add targets to a database proxy target group
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RegisterDBProxyTargets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.targetGroup `RdsResource.targetGroup`} 
   */
  RegisterDBProxyTargets = "rds:RegisterDBProxyTargets",

  /**
   * Write - Grants permission to detach an Aurora secondary cluster from an Aurora global database cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveFromGlobalCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.globalCluster `RdsResource.globalCluster`} 
   */
  RemoveFromGlobalCluster = "rds:RemoveFromGlobalCluster",

  /**
   * Write - Grants permission to disassociate an AWS Identity and Access Management (IAM) role from an Amazon Aurora DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  RemoveRoleFromDBCluster = "rds:RemoveRoleFromDBCluster",

  /**
   * Write - Grants permission to disassociate an AWS Identity and Access Management (IAM) role from a DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveRoleFromDBInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  RemoveRoleFromDBInstance = "rds:RemoveRoleFromDBInstance",

  /**
   * Write - Grants permission to remove a source identifier from an existing RDS event notification subscription
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveSourceIdentifierFromSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.es `RdsResource.es`} 
   */
  RemoveSourceIdentifierFromSubscription = "rds:RemoveSourceIdentifierFromSubscription",

  /**
   * Tagging - Grants permission to remove metadata tags from an Amazon RDS resource
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RemoveTagsFromResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cev `RdsResource.cev`} 
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.clusterEndpoint `RdsResource.clusterEndpoint`} 
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.es `RdsResource.es`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.pg `RdsResource.pg`} 
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   * - {@link RdsResource.proxyEndpoint `RdsResource.proxyEndpoint`} 
   * - {@link RdsResource.ri `RdsResource.ri`} 
   * - {@link RdsResource.secgrp `RdsResource.secgrp`} 
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * - {@link RdsResource.targetGroup `RdsResource.targetGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RemoveTagsFromResource = "rds:RemoveTagsFromResource",

  /**
   * Write - Grants permission to modify the parameters of a DB cluster parameter group to the default value
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBClusterParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   */
  ResetDBClusterParameterGroup = "rds:ResetDBClusterParameterGroup",

  /**
   * Write - Grants permission to modify the parameters of a DB parameter group to the engine/system default value
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ResetDBParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.pg `RdsResource.pg`} 
   */
  ResetDBParameterGroup = "rds:ResetDBParameterGroup",

  /**
   * Write - Grants permission to create an Amazon Aurora DB cluster from data stored in an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterFromS3.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:DatabaseEngine`: Filters access by the database engine. For possible values refer to the engine parameter in CreateDBInstance API ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:DatabaseName`: Filters access by the user-defined name of the database on the DB instance ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:StorageEncrypted`: Filters access by the value that specifies whether the DB instance storage should be encrypted. To enforce storage encryption, specify true ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  RestoreDBClusterFromS3 = "rds:RestoreDBClusterFromS3",

  /**
   * Write - Grants permission to create a new DB cluster from a DB cluster snapshot
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterFromSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:DatabaseClass`: Filters access by the type of DB instance class ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:StorageSize`: Filters access by the storage volume size (in GB) ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `rds:Piops`: Filters access by the value that contains the number of Provisioned IOPS (PIOPS) that the instance supports. To indicate a DB instance that does not have PIOPS enabled, specify 0 ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  RestoreDBClusterFromSnapshot = "rds:RestoreDBClusterFromSnapshot",

  /**
   * Write - Grants permission to restore a DB cluster to an arbitrary point in time
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterToPointInTime.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:DatabaseClass`: Filters access by the type of DB instance class ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:StorageSize`: Filters access by the storage volume size (in GB) ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `rds:Piops`: Filters access by the value that contains the number of Provisioned IOPS (PIOPS) that the instance supports. To indicate a DB instance that does not have PIOPS enabled, specify 0 ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  RestoreDBClusterToPointInTime = "rds:RestoreDBClusterToPointInTime",

  /**
   * Write - Grants permission to create a new DB instance from a DB snapshot
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.pg `RdsResource.pg`} 
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `rds:BackupTarget`: Filters access by the type of backup target. One of: REGION, OUTPOSTS ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RestoreDBInstanceFromDBSnapshot = "rds:RestoreDBInstanceFromDBSnapshot",

  /**
   * Write - Grants permission to create a new DB instance from an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromS3.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.pg `RdsResource.pg`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RestoreDBInstanceFromS3 = "rds:RestoreDBInstanceFromS3",

  /**
   * Write - Grants permission to restore a DB instance to an arbitrary point in time
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceToPointInTime.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.pg `RdsResource.pg`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `rds:BackupTarget`: Filters access by the type of backup target. One of: REGION, OUTPOSTS ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RestoreDBInstanceToPointInTime = "rds:RestoreDBInstanceToPointInTime",

  /**
   * Write - Grants permission to revoke ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC Security Groups
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RevokeDBSecurityGroupIngress.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.secgrp `RdsResource.secgrp`} 
   */
  RevokeDBSecurityGroupIngress = "rds:RevokeDBSecurityGroupIngress",

  /**
   * Write - Grants permission to start Activity Stream
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartActivityStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  StartActivityStream = "rds:StartActivityStream",

  /**
   * Write - Grants permission to start the DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  StartDBCluster = "rds:StartDBCluster",

  /**
   * Write - Grants permission to start the DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  StartDBInstance = "rds:StartDBInstance",

  /**
   * Write - Grants permission to start replication of automated backups to a different AWS Region
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartDBInstanceAutomatedBackupsReplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  StartDBInstanceAutomatedBackupsReplication = "rds:StartDBInstanceAutomatedBackupsReplication",

  /**
   * Write - Grants permission to start a new Export task for a DB snapshot
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartExportTask.html
   */
  StartExportTask = "rds:StartExportTask",

  /**
   * Write - Grants permission to stop Activity Stream
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopActivityStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  StopActivityStream = "rds:StopActivityStream",

  /**
   * Write - Grants permission to stop the DB cluster
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   */
  StopDBCluster = "rds:StopDBCluster",

  /**
   * Write - Grants permission to stop the DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  StopDBInstance = "rds:StopDBInstance",

  /**
   * Write - Grants permission to stop automated backup replication for a DB instance
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StopDBInstanceAutomatedBackupsReplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.db `RdsResource.db`} 
   */
  StopDBInstanceAutomatedBackupsReplication = "rds:StopDBInstanceAutomatedBackupsReplication",

  /**
   * * - Grant all rds permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrds.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RdsResource.cluster `RdsResource.cluster`} 
   * - {@link RdsResource.db `RdsResource.db`} 
   * - {@link RdsResource.es `RdsResource.es`} 
   * - {@link RdsResource.cev `RdsResource.cev`} 
   * - {@link RdsResource.clusterEndpoint `RdsResource.clusterEndpoint`} 
   * - {@link RdsResource.clusterPg `RdsResource.clusterPg`} 
   * - {@link RdsResource.clusterSnapshot `RdsResource.clusterSnapshot`} 
   * - {@link RdsResource.og `RdsResource.og`} 
   * - {@link RdsResource.pg `RdsResource.pg`} 
   * - {@link RdsResource.proxy `RdsResource.proxy`} 
   * - {@link RdsResource.proxyEndpoint `RdsResource.proxyEndpoint`} 
   * - {@link RdsResource.ri `RdsResource.ri`} 
   * - {@link RdsResource.secgrp `RdsResource.secgrp`} 
   * - {@link RdsResource.snapshot `RdsResource.snapshot`} 
   * - {@link RdsResource.subgrp `RdsResource.subgrp`} 
   * - {@link RdsResource.targetGroup `RdsResource.targetGroup`} 
   * - {@link RdsResource.globalCluster `RdsResource.globalCluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the set of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rds:req-tag/${TagKey}`: Filters access by the set of tag keys and values that can be used to tag a resource ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:DatabaseEngine`: Filters access by the database engine. For possible values refer to the engine parameter in CreateDBInstance API ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:DatabaseName`: Filters access by the user-defined name of the database on the DB instance ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:StorageEncrypted`: Filters access by the value that specifies whether the DB instance storage should be encrypted. To enforce storage encryption, specify true ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `rds:DatabaseClass`: Filters access by the type of DB instance class ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:StorageSize`: Filters access by the storage volume size (in GB) ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `rds:Piops`: Filters access by the value that contains the number of Provisioned IOPS (PIOPS) that the instance supports. To indicate a DB instance that does not have PIOPS enabled, specify 0 ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `rds:EndpointType`: Filters access by the type of the endpoint. One of: READER, WRITER, CUSTOM ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:BackupTarget`: Filters access by the type of backup target. One of: REGION, OUTPOSTS ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "rds:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrds.html
 */
export const RdsResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Managing.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:cluster-tag/${TagKey}`: Filters access by the tag attached to a DB cluster ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cluster: (options: Partial<{partition: string, region: string, account: string, dbClusterInstanceName: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:cluster:${options.dbClusterInstanceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Overview.Endpoints.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  clusterEndpoint: (options: Partial<{partition: string, region: string, account: string, dbClusterEndpoint: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:cluster-endpoint:${options.dbClusterEndpoint || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:cluster-pg-tag/${TagKey}`: Filters access by the tag attached to a DB cluster parameter group ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  clusterPg: (options: Partial<{partition: string, region: string, account: string, clusterParameterGroupName: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:cluster-pg:${options.clusterParameterGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:cluster-snapshot-tag/${TagKey}`: Filters access by the tag attached to a DB cluster snapshot ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  clusterSnapshot: (options: Partial<{partition: string, region: string, account: string, clusterSnapshotName: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:cluster-snapshot:${options.clusterSnapshotName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:DatabaseClass`: Filters access by the type of DB instance class ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:DatabaseEngine`: Filters access by the database engine. For possible values refer to the engine parameter in CreateDBInstance API ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:DatabaseName`: Filters access by the user-defined name of the database on the DB instance ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:MultiAz`: Filters access by the value that specifies whether the DB instance runs in multiple Availability Zones. To indicate that the DB instance is using Multi-AZ, specify true ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `rds:Piops`: Filters access by the value that contains the number of Provisioned IOPS (PIOPS) that the instance supports. To indicate a DB instance that does not have PIOPS enabled, specify 0 ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `rds:StorageEncrypted`: Filters access by the value that specifies whether the DB instance storage should be encrypted. To enforce storage encryption, specify true ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `rds:StorageSize`: Filters access by the storage volume size (in GB) ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `rds:Vpc`: Filters access by the value that specifies whether the DB instance runs in an Amazon Virtual Private Cloud (Amazon VPC). To indicate that the DB instance runs in an Amazon VPC, specify true ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `rds:db-tag/${TagKey}`: Filters access by the tag attached to a DB instance ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  db: (options: Partial<{partition: string, region: string, account: string, dbInstanceName: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:db:${options.dbInstanceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:es-tag/${TagKey}`: Filters access by the tag attached to an event subscription ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  es: (options: Partial<{partition: string, region: string, account: string, subscriptionName: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:es:${options.subscriptionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.Aurora.GlobalDB.html
   */
  globalCluster: (options: Partial<{partition: string, account: string, globalCluster: string}> = {}) => `arn:${options.partition || '*'}:rds::${options.account || '*'}:global-cluster:${options.globalCluster || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithOptionGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:og-tag/${TagKey}`: Filters access by the tag attached to a DB option group ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  og: (options: Partial<{partition: string, region: string, account: string, optionGroupName: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:og:${options.optionGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:pg-tag/${TagKey}`: Filters access by the tag attached to a DB parameter group ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  pg: (options: Partial<{partition: string, region: string, account: string, parameterGroupName: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:pg:${options.parameterGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  proxy: (options: Partial<{partition: string, region: string, account: string, dbProxyId: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:db-proxy:${options.dbProxyId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  proxyEndpoint: (options: Partial<{partition: string, region: string, account: string, dbProxyEndpointId: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:db-proxy-endpoint:${options.dbProxyEndpointId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithReservedDBInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:ri-tag/${TagKey}`: Filters access by the tag attached to a reserved DB instance ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ri: (options: Partial<{partition: string, region: string, account: string, reservedDbInstanceName: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:ri:${options.reservedDbInstanceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithSecurityGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:secgrp-tag/${TagKey}`: Filters access by the tag attached to a DB security group ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  secgrp: (options: Partial<{partition: string, region: string, account: string, securityGroupName: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:secgrp:${options.securityGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:snapshot-tag/${TagKey}`: Filters access by the tag attached to a DB snapshot ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  snapshot: (options: Partial<{partition: string, region: string, account: string, snapshotName: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:snapshot:${options.snapshotName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Scenarios.html#USER_VPC.Scenario1
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rds:subgrp-tag/${TagKey}`: Filters access by the tag attached to a DB subnet group ({@link https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/security_iam_service-with-iam.html#UsingWithRDS.IAM.Conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  subgrp: (options: Partial<{partition: string, region: string, account: string, subnetGroupName: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:subgrp:${options.subnetGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html
   */
  target: (options: Partial<{partition: string, region: string, account: string, targetId: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:target:${options.targetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBProxy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  targetGroup: (options: Partial<{partition: string, region: string, account: string, targetGroupId: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:target-group:${options.targetGroupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the set of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cev: (options: Partial<{partition: string, region: string, account: string, engine: string, engineVersion: string, customDbEngineVersionId: string}> = {}) => `arn:${options.partition || '*'}:rds:${options.region || '*'}:${options.account || '*'}:cev:${options.engine || '*'}/${options.engineVersion || '*'}/${options.customDbEngineVersionId || '*'}`,
}

