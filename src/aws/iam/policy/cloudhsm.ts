/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudhsm.html
 */
export enum CloudhsmAction {

  /**
   * Tagging - Adds or overwrites one or more tags for the specified AWS CloudHSM resource
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_AddTagsToResource.html
   */
  AddTagsToResource = "cloudhsm:AddTagsToResource",

  /**
   * Write - Creates a copy of a backup in the specified region
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CopyBackupToRegion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.backup `CloudhsmResource.backup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CopyBackupToRegion = "cloudhsm:CopyBackupToRegion",

  /**
   * Write - Creates a new AWS CloudHSM cluster
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.backup `CloudhsmResource.backup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCluster = "cloudhsm:CreateCluster",

  /**
   * Write - Creates a high-availability partition group
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateHapg.html
   */
  CreateHapg = "cloudhsm:CreateHapg",

  /**
   * Write - Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.cluster `CloudhsmResource.cluster`} 
   */
  CreateHsm = "cloudhsm:CreateHsm",

  /**
   * Write - Creates an HSM client
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateLunaClient.html
   */
  CreateLunaClient = "cloudhsm:CreateLunaClient",

  /**
   * Write - Deletes the specified CloudHSM backup
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.backup `CloudhsmResource.backup`} 
   */
  DeleteBackup = "cloudhsm:DeleteBackup",

  /**
   * Write - Deletes the specified AWS CloudHSM cluster
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.cluster `CloudhsmResource.cluster`} 
   */
  DeleteCluster = "cloudhsm:DeleteCluster",

  /**
   * Write - Deletes a high-availability partition group
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteHapg.html
   */
  DeleteHapg = "cloudhsm:DeleteHapg",

  /**
   * Write - Deletes the specified HSM
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteHsm.html
   */
  DeleteHsm = "cloudhsm:DeleteHsm",

  /**
   * Write - Deletes a client
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteLunaClient.html
   */
  DeleteLunaClient = "cloudhsm:DeleteLunaClient",

  /**
   * Read - Gets information about backups of AWS CloudHSM clusters
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeBackups.html
   */
  DescribeBackups = "cloudhsm:DescribeBackups",

  /**
   * Read - Gets information about AWS CloudHSM clusters
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html
   */
  DescribeClusters = "cloudhsm:DescribeClusters",

  /**
   * Read - Retrieves information about a high-availability partition group
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHapg.html
   */
  DescribeHapg = "cloudhsm:DescribeHapg",

  /**
   * Read - Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHsm.html
   */
  DescribeHsm = "cloudhsm:DescribeHsm",

  /**
   * Read - Retrieves information about an HSM client
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeLunaClient.html
   */
  DescribeLunaClient = "cloudhsm:DescribeLunaClient",

  /**
   * Read - Gets the configuration files necessary to connect to all high availability partition groups the client is associated with
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_GetConfig.html
   */
  GetConfig = "cloudhsm:GetConfig",

  /**
   * Write - Claims an AWS CloudHSM cluster
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_InitializeCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.cluster `CloudhsmResource.cluster`} 
   */
  InitializeCluster = "cloudhsm:InitializeCluster",

  /**
   * List - Lists the Availability Zones that have available AWS CloudHSM capacity
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListAvailableZones.html
   */
  ListAvailableZones = "cloudhsm:ListAvailableZones",

  /**
   * List - Lists the high-availability partition groups for the account
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHapgs.html
   */
  ListHapgs = "cloudhsm:ListHapgs",

  /**
   * List - Retrieves the identifiers of all of the HSMs provisioned for the current customer
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHsms.html
   */
  ListHsms = "cloudhsm:ListHsms",

  /**
   * List - Lists all of the clients
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListLunaClients.html
   */
  ListLunaClients = "cloudhsm:ListLunaClients",

  /**
   * Read - Gets a list of tags for the specified AWS CloudHSM cluster
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ListTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.backup `CloudhsmResource.backup`} 
   * - {@link CloudhsmResource.cluster `CloudhsmResource.cluster`} 
   */
  ListTags = "cloudhsm:ListTags",

  /**
   * Read - Returns a list of all tags for the specified AWS CloudHSM resource
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "cloudhsm:ListTagsForResource",

  /**
   * Write - Modifies attributes for AWS CloudHSM backup
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ModifyBackupAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.backup `CloudhsmResource.backup`} 
   */
  ModifyBackupAttributes = "cloudhsm:ModifyBackupAttributes",

  /**
   * Write - Modifies AWS CloudHSM cluster.
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ModifyCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.cluster `CloudhsmResource.cluster`} 
   */
  ModifyCluster = "cloudhsm:ModifyCluster",

  /**
   * Write - Modifies an existing high-availability partition group
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHapg.html
   */
  ModifyHapg = "cloudhsm:ModifyHapg",

  /**
   * Write - Modifies an HSM
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHsm.html
   */
  ModifyHsm = "cloudhsm:ModifyHsm",

  /**
   * Write - Modifies the certificate used by the client
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyLunaClient.html
   */
  ModifyLunaClient = "cloudhsm:ModifyLunaClient",

  /**
   * Tagging - Removes one or more tags from the specified AWS CloudHSM resource
   * @see https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_RemoveTagsFromResource.html
   */
  RemoveTagsFromResource = "cloudhsm:RemoveTagsFromResource",

  /**
   * Write - Restores the specified CloudHSM backup
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_RestoreBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.backup `CloudhsmResource.backup`} 
   */
  RestoreBackup = "cloudhsm:RestoreBackup",

  /**
   * Tagging - Adds or overwrites one or more tags for the specified AWS CloudHSM cluster
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.backup `CloudhsmResource.backup`} 
   * - {@link CloudhsmResource.cluster `CloudhsmResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "cloudhsm:TagResource",

  /**
   * Tagging - Removes the specified tag or tags from the specified AWS CloudHSM cluster
   * @see https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.backup `CloudhsmResource.backup`} 
   * - {@link CloudhsmResource.cluster `CloudhsmResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "cloudhsm:UntagResource",

  /**
   * * - Grant all cloudhsm permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudhsm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudhsmResource.backup `CloudhsmResource.backup`} 
   * - {@link CloudhsmResource.cluster `CloudhsmResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "cloudhsm:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudhsm.html
 */
export const CloudhsmResource = {

  /**
   * @see https://docs.aws.amazon.com/cloudhsm/latest/userguide/backups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  backup: (options: Partial<{partition: string, region: string, account: string, cloudHsmBackupInstanceName: string}> = {}) => `arn:${options.partition || '*'}:cloudhsm:${options.region || '*'}:${options.account || '*'}:backup/${options.cloudHsmBackupInstanceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cluster: (options: Partial<{partition: string, region: string, account: string, cloudHsmClusterInstanceName: string}> = {}) => `arn:${options.partition || '*'}:cloudhsm:${options.region || '*'}:${options.account || '*'}:cluster/${options.cloudHsmClusterInstanceName || '*'}`,
}

