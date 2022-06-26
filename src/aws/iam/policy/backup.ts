/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackup.html
 */
export enum BackupAction {

  /**
   * Write - Grants permission to copy from a backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `backup:CopyTargets`: Filters access by the ARN of an backup vault ({@link https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfARN `ArrayOfARN`})
   * - `backup:CopyTargetOrgPaths`: Filters access by the organization unit ({@link https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CopyFromBackupVault = "backup:CopyFromBackupVault",

  /**
   * Write - Grants permission to copy into a backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CopyIntoBackupVault = "backup:CopyIntoBackupVault",

  /**
   * Write - Grants permission to create a new backup plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateBackupPlan = "backup:CreateBackupPlan",

  /**
   * Write - Grants permission to create a new resource assignment in a backup plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupSelection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   */
  CreateBackupSelection = "backup:CreateBackupSelection",

  /**
   * Write - Grants permission to create a new backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateBackupVault = "backup:CreateBackupVault",

  /**
   * Write - Grants permission to create a new framework
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateFramework.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.framework `BackupResource.framework`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFramework = "backup:CreateFramework",

  /**
   * Write - Grants permission to create a new report plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateReportPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.reportPlan `BackupResource.reportPlan`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `backup:FrameworkArns`: Filters access by the Framework ARNs ({@link https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfARN `ArrayOfARN`})
   */
  CreateReportPlan = "backup:CreateReportPlan",

  /**
   * Write - Grants permission to delete a backup plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   */
  DeleteBackupPlan = "backup:DeleteBackupPlan",

  /**
   * Write - Grants permission to delete a resource assignment from a backup plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupSelection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   */
  DeleteBackupSelection = "backup:DeleteBackupSelection",

  /**
   * Write - Grants permission to delete a backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVault.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   */
  DeleteBackupVault = "backup:DeleteBackupVault",

  /**
   * Permissions management - Grants permission to delete backup vault access policy
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultAccessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   */
  DeleteBackupVaultAccessPolicy = "backup:DeleteBackupVaultAccessPolicy",

  /**
   * Write - Grants permission to remove the lock configuration from a backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultLockConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   */
  DeleteBackupVaultLockConfiguration = "backup:DeleteBackupVaultLockConfiguration",

  /**
   * Write - Grants permission to remove the notifications from a backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteBackupVaultNotifications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   */
  DeleteBackupVaultNotifications = "backup:DeleteBackupVaultNotifications",

  /**
   * Write - Grants permission to delete a framework
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteFramework.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.framework `BackupResource.framework`} 
   */
  DeleteFramework = "backup:DeleteFramework",

  /**
   * Write - Grants permission to delete a recovery point from a backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteRecoveryPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.recoveryPoint `BackupResource.recoveryPoint`} 
   */
  DeleteRecoveryPoint = "backup:DeleteRecoveryPoint",

  /**
   * Write - Grants permission to delete a report plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DeleteReportPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.reportPlan `BackupResource.reportPlan`} 
   */
  DeleteReportPlan = "backup:DeleteReportPlan",

  /**
   * Read - Grants permission to describe a backup job
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupJob.html
   */
  DescribeBackupJob = "backup:DescribeBackupJob",

  /**
   * Read - Grants permission to describe a new backup vault with the specified name
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeBackupVault.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   */
  DescribeBackupVault = "backup:DescribeBackupVault",

  /**
   * Read - Grants permission to describe a copy job
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeCopyJob.html
   */
  DescribeCopyJob = "backup:DescribeCopyJob",

  /**
   * Read - Grants permission to describe a framework with the specified name
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeFramework.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.framework `BackupResource.framework`} 
   */
  DescribeFramework = "backup:DescribeFramework",

  /**
   * Read - Grants permission to describe global settings
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeGlobalSettings.html
   */
  DescribeGlobalSettings = "backup:DescribeGlobalSettings",

  /**
   * Read - Grants permission to describe a protected resource
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeProtectedResource.html
   */
  DescribeProtectedResource = "backup:DescribeProtectedResource",

  /**
   * Read - Grants permission to describe a recovery point
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRecoveryPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.recoveryPoint `BackupResource.recoveryPoint`} 
   */
  DescribeRecoveryPoint = "backup:DescribeRecoveryPoint",

  /**
   * Read - Grants permission to describe region settings
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRegionSettings.html
   */
  DescribeRegionSettings = "backup:DescribeRegionSettings",

  /**
   * Read - Grants permission to describe a report job
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeReportJob.html
   */
  DescribeReportJob = "backup:DescribeReportJob",

  /**
   * Read - Grants permission to describe a report plan with the specified name
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeReportPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.reportPlan `BackupResource.reportPlan`} 
   */
  DescribeReportPlan = "backup:DescribeReportPlan",

  /**
   * Read - Grants permission to describe a restore job
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DescribeRestoreJob.html
   */
  DescribeRestoreJob = "backup:DescribeRestoreJob",

  /**
   * Write - Grants permission to disassociate a recovery point from a backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_DisassociateRecoveryPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.recoveryPoint `BackupResource.recoveryPoint`} 
   */
  DisassociateRecoveryPoint = "backup:DisassociateRecoveryPoint",

  /**
   * Read - Grants permission to export a backup plan as a JSON
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ExportBackupPlanTemplate.html
   */
  ExportBackupPlanTemplate = "backup:ExportBackupPlanTemplate",

  /**
   * Read - Grants permission to get a backup plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   */
  GetBackupPlan = "backup:GetBackupPlan",

  /**
   * Read - Grants permission to transform a JSON to a backup plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromJSON.html
   */
  GetBackupPlanFromJSON = "backup:GetBackupPlanFromJSON",

  /**
   * Read - Grants permission to transform a template to a backup plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupPlanFromTemplate.html
   */
  GetBackupPlanFromTemplate = "backup:GetBackupPlanFromTemplate",

  /**
   * Read - Grants permission to get a backup plan resource assignment
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupSelection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   */
  GetBackupSelection = "backup:GetBackupSelection",

  /**
   * Read - Grants permission to get backup vault access policy
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultAccessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   */
  GetBackupVaultAccessPolicy = "backup:GetBackupVaultAccessPolicy",

  /**
   * Read - Grants permission to get backup vault notifications
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetBackupVaultNotifications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   */
  GetBackupVaultNotifications = "backup:GetBackupVaultNotifications",

  /**
   * Read - Grants permission to get recovery point restore metadata
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetRecoveryPointRestoreMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.recoveryPoint `BackupResource.recoveryPoint`} 
   */
  GetRecoveryPointRestoreMetadata = "backup:GetRecoveryPointRestoreMetadata",

  /**
   * Read - Grants permission to get supported resource types
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_GetSupportedResourceTypes.html
   */
  GetSupportedResourceTypes = "backup:GetSupportedResourceTypes",

  /**
   * List - Grants permission to list backup jobs
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupJobs.html
   */
  ListBackupJobs = "backup:ListBackupJobs",

  /**
   * List - Grants permission to list backup plan templates provided by AWS Backup
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanTemplates.html
   */
  ListBackupPlanTemplates = "backup:ListBackupPlanTemplates",

  /**
   * List - Grants permission to list backup plan versions
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlanVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   */
  ListBackupPlanVersions = "backup:ListBackupPlanVersions",

  /**
   * List - Grants permission to list backup plans
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupPlans.html
   */
  ListBackupPlans = "backup:ListBackupPlans",

  /**
   * List - Grants permission to list resource assignments for a specific backup plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupSelections.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   */
  ListBackupSelections = "backup:ListBackupSelections",

  /**
   * List - Grants permission to list backup vaults
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListBackupVaults.html
   */
  ListBackupVaults = "backup:ListBackupVaults",

  /**
   * List - Grants permission to list copy jobs
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListCopyJobs.html
   */
  ListCopyJobs = "backup:ListCopyJobs",

  /**
   * List - Grants permission to list frameworks
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListFrameworks.html
   */
  ListFrameworks = "backup:ListFrameworks",

  /**
   * List - Grants permission to list protected resources by AWS Backup
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListProtectedResources.html
   */
  ListProtectedResources = "backup:ListProtectedResources",

  /**
   * List - Grants permission to list recovery points inside a backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByBackupVault.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   */
  ListRecoveryPointsByBackupVault = "backup:ListRecoveryPointsByBackupVault",

  /**
   * List - Grants permission to list recovery points for a resource
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRecoveryPointsByResource.html
   */
  ListRecoveryPointsByResource = "backup:ListRecoveryPointsByResource",

  /**
   * List - Grants permission to list report jobs
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListReportJobs.html
   */
  ListReportJobs = "backup:ListReportJobs",

  /**
   * List - Grants permission to list report plans
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListReportPlans.html
   */
  ListReportPlans = "backup:ListReportPlans",

  /**
   * List - Grants permission to lists restore jobs
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListRestoreJobs.html
   */
  ListRestoreJobs = "backup:ListRestoreJobs",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ListTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   * - {@link BackupResource.framework `BackupResource.framework`} 
   * - {@link BackupResource.recoveryPoint `BackupResource.recoveryPoint`} 
   * - {@link BackupResource.reportPlan `BackupResource.reportPlan`} 
   */
  ListTags = "backup:ListTags",

  /**
   * Permissions management - Grants permission to add an access policy to the backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultAccessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   */
  PutBackupVaultAccessPolicy = "backup:PutBackupVaultAccessPolicy",

  /**
   * Write - Grants permission to add a lock configuration to the backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultLockConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   */
  PutBackupVaultLockConfiguration = "backup:PutBackupVaultLockConfiguration",

  /**
   * Write - Grants permission to add an SNS topic to the backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultNotifications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   */
  PutBackupVaultNotifications = "backup:PutBackupVaultNotifications",

  /**
   * Write - Grants permission to start a new backup job
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartBackupJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartBackupJob = "backup:StartBackupJob",

  /**
   * Write - Grants permission to copy a backup from a source backup vault to a destination backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartCopyJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.recoveryPoint `BackupResource.recoveryPoint`} 
   */
  StartCopyJob = "backup:StartCopyJob",

  /**
   * Write - Grants permission to start a new report job
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartReportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.reportPlan `BackupResource.reportPlan`} 
   */
  StartReportJob = "backup:StartReportJob",

  /**
   * Write - Grants permission to start a new restore job
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartRestoreJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.recoveryPoint `BackupResource.recoveryPoint`} 
   */
  StartRestoreJob = "backup:StartRestoreJob",

  /**
   * Write - Grants permission to stop a backup job
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StopBackupJob.html
   */
  StopBackupJob = "backup:StopBackupJob",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   * - {@link BackupResource.framework `BackupResource.framework`} 
   * - {@link BackupResource.recoveryPoint `BackupResource.recoveryPoint`} 
   * - {@link BackupResource.reportPlan `BackupResource.reportPlan`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "backup:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   * - {@link BackupResource.framework `BackupResource.framework`} 
   * - {@link BackupResource.recoveryPoint `BackupResource.recoveryPoint`} 
   * - {@link BackupResource.reportPlan `BackupResource.reportPlan`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "backup:UntagResource",

  /**
   * Write - Grants permission to update a backup plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateBackupPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateBackupPlan = "backup:UpdateBackupPlan",

  /**
   * Write - Grants permission to update a framework
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateFramework.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.framework `BackupResource.framework`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateFramework = "backup:UpdateFramework",

  /**
   * Write - Grants permission to update the current global settings for the AWS Account
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateGlobalSettings.html
   */
  UpdateGlobalSettings = "backup:UpdateGlobalSettings",

  /**
   * Write - Grants permission to update the lifecycle of the recovery point
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRecoveryPointLifecycle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.recoveryPoint `BackupResource.recoveryPoint`} 
   */
  UpdateRecoveryPointLifecycle = "backup:UpdateRecoveryPointLifecycle",

  /**
   * Write - Grants permission to update the current service opt-in settings for the Region
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateRegionSettings.html
   */
  UpdateRegionSettings = "backup:UpdateRegionSettings",

  /**
   * Write - Grants permission to update a report plan
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_UpdateReportPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.reportPlan `BackupResource.reportPlan`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `backup:FrameworkArns`: Filters access by the Framework ARNs ({@link https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfARN `ArrayOfARN`})
   */
  UpdateReportPlan = "backup:UpdateReportPlan",

  /**
   * * - Grant all backup permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupResource.backupPlan `BackupResource.backupPlan`} 
   * - {@link BackupResource.backupVault `BackupResource.backupVault`} 
   * - {@link BackupResource.framework `BackupResource.framework`} 
   * - {@link BackupResource.reportPlan `BackupResource.reportPlan`} 
   * - {@link BackupResource.recoveryPoint `BackupResource.recoveryPoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `backup:CopyTargets`: Filters access by the ARN of an backup vault ({@link https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfARN `ArrayOfARN`})
   * - `backup:CopyTargetOrgPaths`: Filters access by the organization unit ({@link https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `backup:FrameworkArns`: Filters access by the Framework ARNs ({@link https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#amazon-backup-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfARN `ArrayOfARN`})
   */
  All = "backup:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackup.html
 */
export const BackupResource = {

  /**
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  backupVault: (options: Partial<{partition: string, region: string, account: string, backupVaultName: string}> = {}) => `arn:${options.partition || '*'}:backup:${options.region || '*'}:${options.account || '*'}:backup-vault:${options.backupVaultName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/about-backup-plans.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  backupPlan: (options: Partial<{partition: string, region: string, account: string, backupPlanId: string}> = {}) => `arn:${options.partition || '*'}:backup:${options.region || '*'}:${options.account || '*'}:backup-plan:${options.backupPlanId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/recovery-points.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  recoveryPoint: (options: Partial<{partition: string, vendor: string, region: string, resourceType: string, recoveryPointId: string}> = {}) => `arn:${options.partition || '*'}:${options.vendor || '*'}:${options.region || '*'}:*:${options.resourceType || '*'}:${options.recoveryPointId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/frameworks.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  framework: (options: Partial<{partition: string, region: string, account: string, frameworkName: string, frameworkId: string}> = {}) => `arn:${options.partition || '*'}:backup:${options.region || '*'}:${options.account || '*'}:framework:${options.frameworkName || '*'}-${options.frameworkId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/report-plans.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  reportPlan: (options: Partial<{partition: string, region: string, account: string, reportPlanName: string, reportPlanId: string}> = {}) => `arn:${options.partition || '*'}:backup:${options.region || '*'}:${options.account || '*'}:report-plan:${options.reportPlanName || '*'}-${options.reportPlanId || '*'}`,
}

