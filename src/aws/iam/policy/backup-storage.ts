/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupstorage.html
 */
export enum BackupStorageAction {

  /**
   * Write - Associates a KMS key to a backup vault
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_CreateBackupVault.html
   */
  MountCapsule = "backup-storage:MountCapsule",

  /**
   * * - Grant all backup-storage permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupstorage.html
   */
  All = "backup-storage:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupstorage.html
 */
export const BackupStorageResource = {
}

