/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitysynchronizationservice.html
 */
export enum IdentitySyncAction {

  /**
   * Write - Grants permission to create a sync filter on the sync profile
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   */
  CreateSyncFilter = "identity-sync:CreateSyncFilter",

  /**
   * Write - Grants permission to create a sync profile for the source
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  CreateSyncProfile = "identity-sync:CreateSyncProfile",

  /**
   * Write - Grants permission to create a sync target for the source
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   */
  CreateSyncTarget = "identity-sync:CreateSyncTarget",

  /**
   * Write - Grants permission to delete a sync filter on the sync profile
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   */
  DeleteSyncFilter = "identity-sync:DeleteSyncFilter",

  /**
   * Write - Grants permission to delete a sync profile on the source
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   */
  DeleteSyncProfile = "identity-sync:DeleteSyncProfile",

  /**
   * Write - Grants permission to delete a sync target on the source
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   * - {@link IdentitySyncResource.syncTargetResource `IdentitySyncResource.syncTargetResource`} 
   */
  DeleteSyncTarget = "identity-sync:DeleteSyncTarget",

  /**
   * Read - Grants permission to retrieve a sync profile using sync profile name
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   */
  GetSyncProfile = "identity-sync:GetSyncProfile",

  /**
   * Read - Grants permission to retrieve a sync target on the sync profile
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   * - {@link IdentitySyncResource.syncTargetResource `IdentitySyncResource.syncTargetResource`} 
   */
  GetSyncTarget = "identity-sync:GetSyncTarget",

  /**
   * List - Grants permission to list the sync filters on the sync profile
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   */
  ListSyncFilters = "identity-sync:ListSyncFilters",

  /**
   * Write - Grants permission to start a synchronization process or to restart a synchronization that was previously stopped
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   */
  StartSync = "identity-sync:StartSync",

  /**
   * Write - Grants permission to stop any planned synchronizations in the synchronization schedule from starting
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   */
  StopSync = "identity-sync:StopSync",

  /**
   * Write - Grants permission to update a sync target on the sync profile
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   * - {@link IdentitySyncResource.syncTargetResource `IdentitySyncResource.syncTargetResource`} 
   */
  UpdateSyncTarget = "identity-sync:UpdateSyncTarget",

  /**
   * * - Grant all identity-sync permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitysynchronizationservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IdentitySyncResource.syncProfileResource `IdentitySyncResource.syncProfileResource`} 
   * - {@link IdentitySyncResource.syncTargetResource `IdentitySyncResource.syncTargetResource`} 
   */
  All = "identity-sync:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitysynchronizationservice.html
 */
export const IdentitySyncResource = {

  /**
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  syncProfileResource: (options: Partial<{partition: string, region: string, account: string, syncProfileName: string}> = {}) => `^arn:${options.partition || '*'}:identity-sync:${options.region || '*'}:${options.account || '*'}:profile/${options.syncProfileName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  syncTargetResource: (options: Partial<{partition: string, region: string, account: string, syncProfileName: string, syncTargetName: string}> = {}) => `^arn:${options.partition || '*'}:identity-sync:${options.region || '*'}:${options.account || '*'}:target/${options.syncProfileName || '*'}/${options.syncTargetName || '*'}`,
}

