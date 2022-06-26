/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3glacier.html
 */
export enum GlacierAction {

  /**
   * Write - Grants permission to abort a multipart upload identified by the upload ID
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  AbortMultipartUpload = "glacier:AbortMultipartUpload",

  /**
   * Permissions management - Grants permission to abort the vault locking process if the vault lock is not in the Locked state
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AbortVaultLock.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  AbortVaultLock = "glacier:AbortVaultLock",

  /**
   * Tagging - Grants permission to add the specified tags to a vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-AddTagsToVault.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AddTagsToVault = "glacier:AddTagsToVault",

  /**
   * Write - Grants permission to complete a multipart upload process
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  CompleteMultipartUpload = "glacier:CompleteMultipartUpload",

  /**
   * Permissions management - Grants permission to complete the vault locking process
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-CompleteVaultLock.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  CompleteVaultLock = "glacier:CompleteVaultLock",

  /**
   * Write - Grants permission to create a new vault with the specified name
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  CreateVault = "glacier:CreateVault",

  /**
   * Write - Grants permission to delete an archive from a vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `glacier:ArchiveAgeInDays`: Filters access by how long an archive has been stored in the vault, in days ({@link https://docs.aws.amazon.com/amazonglacier/latest/dev/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteArchive = "glacier:DeleteArchive",

  /**
   * Write - Grants permission to delete a vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  DeleteVault = "glacier:DeleteVault",

  /**
   * Permissions management - Grants permission to delete the access policy associated with the specified vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-DeleteVaultAccessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  DeleteVaultAccessPolicy = "glacier:DeleteVaultAccessPolicy",

  /**
   * Write - Grants permission to delete the notification configuration set for a vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  DeleteVaultNotifications = "glacier:DeleteVaultNotifications",

  /**
   * Read - Grants permission to get information about a job previously initiated
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  DescribeJob = "glacier:DescribeJob",

  /**
   * Read - Grants permission to get information about a vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  DescribeVault = "glacier:DescribeVault",

  /**
   * Read - Grants permission to get the data retrieval policy
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetDataRetrievalPolicy.html
   */
  GetDataRetrievalPolicy = "glacier:GetDataRetrievalPolicy",

  /**
   * Read - Grants permission to download the output of the job specified
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  GetJobOutput = "glacier:GetJobOutput",

  /**
   * Read - Grants permission to retrieve the access-policy subresource set on the vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultAccessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  GetVaultAccessPolicy = "glacier:GetVaultAccessPolicy",

  /**
   * Read - Grants permission to retrieve attributes from the lock-policy subresource set on the specified vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-GetVaultLock.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  GetVaultLock = "glacier:GetVaultLock",

  /**
   * Read - Grants permission to retrieve the notification-configuration subresource set on the vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  GetVaultNotifications = "glacier:GetVaultNotifications",

  /**
   * Write - Grants permission to initiate a job of the specified type
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `glacier:ArchiveAgeInDays`: Filters access by how long an archive has been stored in the vault, in days ({@link https://docs.aws.amazon.com/amazonglacier/latest/dev/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  InitiateJob = "glacier:InitiateJob",

  /**
   * Write - Grants permission to initiate a multipart upload
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  InitiateMultipartUpload = "glacier:InitiateMultipartUpload",

  /**
   * Permissions management - Grants permission to initiate the vault locking process
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-InitiateVaultLock.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  InitiateVaultLock = "glacier:InitiateVaultLock",

  /**
   * List - Grants permission to list jobs for a vault that are in-progress and jobs that have recently finished
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  ListJobs = "glacier:ListJobs",

  /**
   * List - Grants permission to list in-progress multipart uploads for the specified vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  ListMultipartUploads = "glacier:ListMultipartUploads",

  /**
   * List - Grants permission to list the parts of an archive that have been uploaded in a specific multipart upload
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  ListParts = "glacier:ListParts",

  /**
   * List - Grants permission to list the provisioned capacity for the specified AWS account
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListProvisionedCapacity.html
   */
  ListProvisionedCapacity = "glacier:ListProvisionedCapacity",

  /**
   * List - Grants permission to list all the tags attached to a vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-ListTagsForVault.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  ListTagsForVault = "glacier:ListTagsForVault",

  /**
   * List - Grants permission to list all vaults
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html
   */
  ListVaults = "glacier:ListVaults",

  /**
   * Write - Grants permission to purchases a provisioned capacity unit for an AWS account
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-PurchaseProvisionedCapacity.html
   */
  PurchaseProvisionedCapacity = "glacier:PurchaseProvisionedCapacity",

  /**
   * Tagging - Grants permission to remove one or more tags from the set of tags attached to a vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-RemoveTagsFromVault.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  RemoveTagsFromVault = "glacier:RemoveTagsFromVault",

  /**
   * Permissions management - Grants permission to set and then enacts a data retrieval policy in the region specified in the PUT request
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetDataRetrievalPolicy.html
   */
  SetDataRetrievalPolicy = "glacier:SetDataRetrievalPolicy",

  /**
   * Permissions management - Grants permission to configure an access policy for a vault; will overwrite an existing policy
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  SetVaultAccessPolicy = "glacier:SetVaultAccessPolicy",

  /**
   * Write - Grants permission to configure vault notifications
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  SetVaultNotifications = "glacier:SetVaultNotifications",

  /**
   * Write - Grants permission to upload an archive to a vault
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  UploadArchive = "glacier:UploadArchive",

  /**
   * Write - Grants permission to upload a part of an archive
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   */
  UploadMultipartPart = "glacier:UploadMultipartPart",

  /**
   * * - Grant all glacier permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3glacier.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlacierResource.vault `GlacierResource.vault`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `glacier:ArchiveAgeInDays`: Filters access by how long an archive has been stored in the vault, in days ({@link https://docs.aws.amazon.com/amazonglacier/latest/dev/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "glacier:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3glacier.html
 */
export const GlacierResource = {

  /**
   * @see https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-vaults.html
   */
  vault: (options: Partial<{partition: string, region: string, account: string, vaultName: string}> = {}) => `arn:${options.partition || '*'}:glacier:${options.region || '*'}:${options.account || '*'}:vaults/${options.vaultName || '*'}`,
}

