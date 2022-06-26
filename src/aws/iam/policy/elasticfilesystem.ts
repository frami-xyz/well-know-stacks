/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticfilesystem.html
 */
export enum ElasticfilesystemAction {

  /**
   * Write - Grants permission to start a backup job for an existing file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  Backup = "elasticfilesystem:Backup",

  /**
   * Read - Grants permission to allow an NFS client read-access to a file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticfilesystem:AccessPointArn`: Filters access by the ARN of the access point used to mount the file system ({@link https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticfilesystem:AccessedViaMountTarget`: Filters access by whether the file system is accessed via mount targets ({@link https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ClientMount = "elasticfilesystem:ClientMount",

  /**
   * Write - Grants permission to allow an NFS client root-access to a file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticfilesystem:AccessPointArn`: Filters access by the ARN of the access point used to mount the file system ({@link https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticfilesystem:AccessedViaMountTarget`: Filters access by whether the file system is accessed via mount targets ({@link https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ClientRootAccess = "elasticfilesystem:ClientRootAccess",

  /**
   * Write - Grants permission to allow an NFS client write-access to a file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/efs-client-authorization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticfilesystem:AccessPointArn`: Filters access by the ARN of the access point used to mount the file system ({@link https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticfilesystem:AccessedViaMountTarget`: Filters access by whether the file system is accessed via mount targets ({@link https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ClientWrite = "elasticfilesystem:ClientWrite",

  /**
   * Write - Grants permission to create an access point for the specified file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_CreateAccessPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAccessPoint = "elasticfilesystem:CreateAccessPoint",

  /**
   * Write - Grants permission to create a new, empty file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_CreateFileSystem.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticfilesystem:Encrypted`: Filters access by whether users can create only encrypted or unencrypted file systems ({@link https://docs.aws.amazon.com/efs/latest/ug/encryption.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  CreateFileSystem = "elasticfilesystem:CreateFileSystem",

  /**
   * Write - Grants permission to create a mount target for a file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_CreateMountTarget.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  CreateMountTarget = "elasticfilesystem:CreateMountTarget",

  /**
   * Write - Grants permission to create a new replication configuration
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_CreateReplicationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  CreateReplicationConfiguration = "elasticfilesystem:CreateReplicationConfiguration",

  /**
   * Tagging - Grants permission to create or overwrite tags associated with a file system; deprecated, see TagResource
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_CreateTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTags = "elasticfilesystem:CreateTags",

  /**
   * Write - Grants permission to delete the specified access point
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DeleteAccessPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.accessPoint `ElasticfilesystemResource.accessPoint`} 
   */
  DeleteAccessPoint = "elasticfilesystem:DeleteAccessPoint",

  /**
   * Write - Grants permission to delete a file system, permanently severing access to its contents
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  DeleteFileSystem = "elasticfilesystem:DeleteFileSystem",

  /**
   * Permissions management - Grants permission to delete the resource-level policy for a file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DeleteFileSystemPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  DeleteFileSystemPolicy = "elasticfilesystem:DeleteFileSystemPolicy",

  /**
   * Write - Grants permission to delete the specified mount target
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DeleteMountTarget.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  DeleteMountTarget = "elasticfilesystem:DeleteMountTarget",

  /**
   * Write - Grants permission to delete a replication configuration
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DeleteReplicationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  DeleteReplicationConfiguration = "elasticfilesystem:DeleteReplicationConfiguration",

  /**
   * Tagging - Grants permission to delete the specified tags from a file system; deprecated, see UntagResource
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DeleteTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteTags = "elasticfilesystem:DeleteTags",

  /**
   * List - Grants permission to view the descriptions of Amazon EFS access points
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DescribeAccessPoints.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.accessPoint `ElasticfilesystemResource.accessPoint`} 
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  DescribeAccessPoints = "elasticfilesystem:DescribeAccessPoints",

  /**
   * List - Grants permission to view the account preferences in effect for an account
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DescribeAccountPreferences.html
   */
  DescribeAccountPreferences = "elasticfilesystem:DescribeAccountPreferences",

  /**
   * Read - Grants permission to view the BackupPolicy object for an Amazon EFS file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DescribeBackupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  DescribeBackupPolicy = "elasticfilesystem:DescribeBackupPolicy",

  /**
   * Read - Grants permission to view the resource-level policy for an Amazon EFS file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystemPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  DescribeFileSystemPolicy = "elasticfilesystem:DescribeFileSystemPolicy",

  /**
   * List - Grants permission to view the description of an Amazon EFS file system specified by file system CreationToken or FileSystemId; or to view the description of all file systems owned by the caller's AWS account in the AWS region of the endpoint that is being called
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DescribeFileSystems.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  DescribeFileSystems = "elasticfilesystem:DescribeFileSystems",

  /**
   * Read - Grants permission to view the LifecycleConfiguration object for an Amazon EFS file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DescribeLifecycleConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  DescribeLifecycleConfiguration = "elasticfilesystem:DescribeLifecycleConfiguration",

  /**
   * Read - Grants permission to view the security groups in effect for a mount target
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargetSecurityGroups.html
   */
  DescribeMountTargetSecurityGroups = "elasticfilesystem:DescribeMountTargetSecurityGroups",

  /**
   * Read - Grants permission to view the descriptions of all mount targets, or a specific mount target, for a file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DescribeMountTargets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   * - {@link ElasticfilesystemResource.accessPoint `ElasticfilesystemResource.accessPoint`} 
   */
  DescribeMountTargets = "elasticfilesystem:DescribeMountTargets",

  /**
   * List - Grants permission to view the description of an Amazon EFS replication configuration specified by FileSystemId; or to view the description of all replication configurations owned by the caller's AWS account in the AWS region of the endpoint that is being called
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DescribeReplicationConfigurations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  DescribeReplicationConfigurations = "elasticfilesystem:DescribeReplicationConfigurations",

  /**
   * Read - Grants permission to view the tags associated with a file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_DescribeTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  DescribeTags = "elasticfilesystem:DescribeTags",

  /**
   * Read - Grants permission to view the tags associated with the specified Amazon EFS resource
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.accessPoint `ElasticfilesystemResource.accessPoint`} 
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  ListTagsForResource = "elasticfilesystem:ListTagsForResource",

  /**
   * Write - Grants permission to modify the set of security groups in effect for a mount target
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_ModifyMountTargetSecurityGroups.html
   */
  ModifyMountTargetSecurityGroups = "elasticfilesystem:ModifyMountTargetSecurityGroups",

  /**
   * Write - Grants permission to set the account preferences of an account
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_PutAccountPreferences.html
   */
  PutAccountPreferences = "elasticfilesystem:PutAccountPreferences",

  /**
   * Write - Grants permission to enable or disable automatic backups with AWS Backup by creating a new BackupPolicy object
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_PutBackupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  PutBackupPolicy = "elasticfilesystem:PutBackupPolicy",

  /**
   * Permissions management - Grants permission to apply a resource-level policy that defines the actions allowed or denied from given actors for the specified file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_PutFileSystemPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  PutFileSystemPolicy = "elasticfilesystem:PutFileSystemPolicy",

  /**
   * Write - Grants permission to enable lifecycle management by creating a new LifecycleConfiguration object
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_PutLifecycleConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  PutLifecycleConfiguration = "elasticfilesystem:PutLifecycleConfiguration",

  /**
   * Write - Grants permission to start a restore job for a backup of a file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/efs-backup-solutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  Restore = "elasticfilesystem:Restore",

  /**
   * Tagging - Grants permission to create or overwrite tags associated with the specified Amazon EFS resource
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.accessPoint `ElasticfilesystemResource.accessPoint`} 
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "elasticfilesystem:TagResource",

  /**
   * Tagging - Grants permission to delete the specified tags from an Amazon EFS resource
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.accessPoint `ElasticfilesystemResource.accessPoint`} 
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "elasticfilesystem:UntagResource",

  /**
   * Write - Grants permission to update the throughput mode or the amount of provisioned throughput of an existing file system
   * @see https://docs.aws.amazon.com/efs/latest/ug/API_UpdateFileSystem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   */
  UpdateFileSystem = "elasticfilesystem:UpdateFileSystem",

  /**
   * * - Grant all elasticfilesystem permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticfilesystem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticfilesystemResource.fileSystem `ElasticfilesystemResource.fileSystem`} 
   * - {@link ElasticfilesystemResource.accessPoint `ElasticfilesystemResource.accessPoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticfilesystem:AccessPointArn`: Filters access by the ARN of the access point used to mount the file system ({@link https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticfilesystem:AccessedViaMountTarget`: Filters access by whether the file system is accessed via mount targets ({@link https://docs.aws.amazon.com/efs/latest/ug/mounting-fs.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticfilesystem:Encrypted`: Filters access by whether users can create only encrypted or unencrypted file systems ({@link https://docs.aws.amazon.com/efs/latest/ug/encryption.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  All = "elasticfilesystem:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticfilesystem.html
 */
export const ElasticfilesystemResource = {

  /**
   * @see https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  fileSystem: (options: Partial<{partition: string, region: string, account: string, fileSystemId: string}> = {}) => `arn:${options.partition || '*'}:elasticfilesystem:${options.region || '*'}:${options.account || '*'}:file-system/${options.fileSystemId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/efs/latest/ug/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  accessPoint: (options: Partial<{partition: string, region: string, account: string, accessPointId: string}> = {}) => `arn:${options.partition || '*'}:elasticfilesystem:${options.region || '*'}:${options.account || '*'}:access-point/${options.accessPointId || '*'}`,
}

