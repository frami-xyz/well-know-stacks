/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhub.html
 */
export enum MghAction {

  /**
   * Write - Associate a given AWS artifact to a MigrationTask
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateCreatedArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.migrationTask `MghResource.migrationTask`} 
   */
  AssociateCreatedArtifact = "mgh:AssociateCreatedArtifact",

  /**
   * Write - Associate a given ADS resource to a MigrationTask
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateDiscoveredResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.migrationTask `MghResource.migrationTask`} 
   */
  AssociateDiscoveredResource = "mgh:AssociateDiscoveredResource",

  /**
   * Write - Create a Migration Hub Home Region Control
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateHomeRegionControl.html
   */
  CreateHomeRegionControl = "mgh:CreateHomeRegionControl",

  /**
   * Write - Create a ProgressUpdateStream
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateProgressUpdateStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.progressUpdateStream `MghResource.progressUpdateStream`} 
   */
  CreateProgressUpdateStream = "mgh:CreateProgressUpdateStream",

  /**
   * Write - Delete a ProgressUpdateStream
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteProgressUpdateStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.progressUpdateStream `MghResource.progressUpdateStream`} 
   */
  DeleteProgressUpdateStream = "mgh:DeleteProgressUpdateStream",

  /**
   * Read - Get an Application Discovery Service Application's state
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeApplicationState.html
   */
  DescribeApplicationState = "mgh:DescribeApplicationState",

  /**
   * List - List Home Region Controls
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeHomeRegionControls.html
   */
  DescribeHomeRegionControls = "mgh:DescribeHomeRegionControls",

  /**
   * Read - Describe a MigrationTask
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeMigrationTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.migrationTask `MghResource.migrationTask`} 
   */
  DescribeMigrationTask = "mgh:DescribeMigrationTask",

  /**
   * Write - Disassociate a given AWS artifact from a MigrationTask
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateCreatedArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.migrationTask `MghResource.migrationTask`} 
   */
  DisassociateCreatedArtifact = "mgh:DisassociateCreatedArtifact",

  /**
   * Write - Disassociate a given ADS resource from a MigrationTask
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateDiscoveredResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.migrationTask `MghResource.migrationTask`} 
   */
  DisassociateDiscoveredResource = "mgh:DisassociateDiscoveredResource",

  /**
   * Read - Get the Migration Hub Home Region
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_GetHomeRegion.html
   */
  GetHomeRegion = "mgh:GetHomeRegion",

  /**
   * Write - Import a MigrationTask
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_ImportMigrationTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.migrationTask `MghResource.migrationTask`} 
   */
  ImportMigrationTask = "mgh:ImportMigrationTask",

  /**
   * List - List Application statuses
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListApplicationStates.html
   */
  ListApplicationStates = "mgh:ListApplicationStates",

  /**
   * List - List associated created artifacts for a MigrationTask
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListCreatedArtifacts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.migrationTask `MghResource.migrationTask`} 
   */
  ListCreatedArtifacts = "mgh:ListCreatedArtifacts",

  /**
   * List - List associated ADS resources from MigrationTask
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListDiscoveredResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.migrationTask `MghResource.migrationTask`} 
   */
  ListDiscoveredResources = "mgh:ListDiscoveredResources",

  /**
   * List - List MigrationTasks
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListMigrationTasks.html
   */
  ListMigrationTasks = "mgh:ListMigrationTasks",

  /**
   * List - List ProgressUpdateStreams
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListProgressUpdateStreams.html
   */
  ListProgressUpdateStreams = "mgh:ListProgressUpdateStreams",

  /**
   * Write - Update an Application Discovery Service Application's state
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyApplicationState.html
   */
  NotifyApplicationState = "mgh:NotifyApplicationState",

  /**
   * Write - Notify latest MigrationTask state
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyMigrationTaskState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.migrationTask `MghResource.migrationTask`} 
   */
  NotifyMigrationTaskState = "mgh:NotifyMigrationTaskState",

  /**
   * Write - Put ResourceAttributes
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.migrationTask `MghResource.migrationTask`} 
   */
  PutResourceAttributes = "mgh:PutResourceAttributes",

  /**
   * * - Grant all mgh permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhub.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MghResource.migrationTask `MghResource.migrationTask`} 
   * - {@link MghResource.progressUpdateStream `MghResource.progressUpdateStream`} 
   */
  All = "mgh:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhub.html
 */
export const MghResource = {

  /**
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_ProgressUpdateStreamSummary.html
   */
  progressUpdateStream: (options: Partial<{partition: string, region: string, account: string, stream: string}> = {}) => `arn:${options.partition || '*'}:mgh:${options.region || '*'}:${options.account || '*'}:progressUpdateStream/${options.stream || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/migrationhub/latest/ug/API_MigrationTask.html
   */
  migrationTask: (options: Partial<{partition: string, region: string, account: string, stream: string, task: string}> = {}) => `arn:${options.partition || '*'}:mgh:${options.region || '*'}:${options.account || '*'}:progressUpdateStream/${options.stream || '*'}/migrationTask/${options.task || '*'}`,
}

