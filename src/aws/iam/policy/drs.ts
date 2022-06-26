/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticdisasterrecovery.html
 */
export enum DrsAction {

  /**
   * Write - Grants permission to get associate failback client to recovery instance
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  AssociateFailbackClientToRecoveryInstanceForDrs = "drs:AssociateFailbackClientToRecoveryInstanceForDrs",

  /**
   * Write - Grants permission to batch create volume snapshot group
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  BatchCreateVolumeSnapshotGroupForDrs = "drs:BatchCreateVolumeSnapshotGroupForDrs",

  /**
   * Write - Grants permission to batch delete snapshot request
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  BatchDeleteSnapshotRequestForDrs = "drs:BatchDeleteSnapshotRequestForDrs",

  /**
   * Write - Grants permission to create converted snapshot
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConvertedSnapshotForDrs = "drs:CreateConvertedSnapshotForDrs",

  /**
   * Write - Grants permission to extend a source server
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateExtendedSourceServer.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateExtendedSourceServer = "drs:CreateExtendedSourceServer",

  /**
   * Write - Grants permission to create recovery instance
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRecoveryInstanceForDrs = "drs:CreateRecoveryInstanceForDrs",

  /**
   * Write - Grants permission to create replication configuration template
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_CreateReplicationConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateReplicationConfigurationTemplate = "drs:CreateReplicationConfigurationTemplate",

  /**
   * Write - Grants permission to create a session
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  CreateSessionForDrs = "drs:CreateSessionForDrs",

  /**
   * Write - Grants permission to create a source server
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSourceServerForDrs = "drs:CreateSourceServerForDrs",

  /**
   * Write - Grants permission to delete a job
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.jobResource `DrsResource.jobResource`} 
   */
  DeleteJob = "drs:DeleteJob",

  /**
   * Write - Grants permission to delete recovery instance
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteRecoveryInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  DeleteRecoveryInstance = "drs:DeleteRecoveryInstance",

  /**
   * Write - Grants permission to delete replication configuration template
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteReplicationConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.replicationConfigurationTemplateResource `DrsResource.replicationConfigurationTemplateResource`} 
   */
  DeleteReplicationConfigurationTemplate = "drs:DeleteReplicationConfigurationTemplate",

  /**
   * Write - Grants permission to delete source server
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DeleteSourceServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  DeleteSourceServer = "drs:DeleteSourceServer",

  /**
   * Read - Grants permission to describe job log items
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeJobLogItems.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.jobResource `DrsResource.jobResource`} 
   */
  DescribeJobLogItems = "drs:DescribeJobLogItems",

  /**
   * Read - Grants permission to describe jobs
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeJobs.html
   */
  DescribeJobs = "drs:DescribeJobs",

  /**
   * Read - Grants permission to describe recovery instances
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeRecoveryInstances.html
   */
  DescribeRecoveryInstances = "drs:DescribeRecoveryInstances",

  /**
   * Read - Grants permission to describe recovery snapshots
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeRecoverySnapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  DescribeRecoverySnapshots = "drs:DescribeRecoverySnapshots",

  /**
   * Read - Grants permission to describe replication configuration template
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeReplicationConfigurationTemplates.html
   */
  DescribeReplicationConfigurationTemplates = "drs:DescribeReplicationConfigurationTemplates",

  /**
   * Read - Grants permission to describe replication server associations
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  DescribeReplicationServerAssociationsForDrs = "drs:DescribeReplicationServerAssociationsForDrs",

  /**
   * Read - Grants permission to describe snapshot requests
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  DescribeSnapshotRequestsForDrs = "drs:DescribeSnapshotRequestsForDrs",

  /**
   * Read - Grants permission to describe source servers
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DescribeSourceServers.html
   */
  DescribeSourceServers = "drs:DescribeSourceServers",

  /**
   * Write - Grants permission to disconnect recovery instance
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DisconnectRecoveryInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  DisconnectRecoveryInstance = "drs:DisconnectRecoveryInstance",

  /**
   * Write - Grants permission to disconnect source server
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_DisconnectSourceServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  DisconnectSourceServer = "drs:DisconnectSourceServer",

  /**
   * Read - Grants permission to get agent command
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  GetAgentCommandForDrs = "drs:GetAgentCommandForDrs",

  /**
   * Read - Grants permission to get agent confirmed resume info
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  GetAgentConfirmedResumeInfoForDrs = "drs:GetAgentConfirmedResumeInfoForDrs",

  /**
   * Read - Grants permission to get agent installation assets
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  GetAgentInstallationAssetsForDrs = "drs:GetAgentInstallationAssetsForDrs",

  /**
   * Read - Grants permission to get agent replication info
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  GetAgentReplicationInfoForDrs = "drs:GetAgentReplicationInfoForDrs",

  /**
   * Read - Grants permission to get agent runtime configuration
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  GetAgentRuntimeConfigurationForDrs = "drs:GetAgentRuntimeConfigurationForDrs",

  /**
   * Read - Grants permission to get agent snapshot credits
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  GetAgentSnapshotCreditsForDrs = "drs:GetAgentSnapshotCreditsForDrs",

  /**
   * Read - Grants permission to get channel commands
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  GetChannelCommandsForDrs = "drs:GetChannelCommandsForDrs",

  /**
   * Read - Grants permission to get failback command
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  GetFailbackCommandForDrs = "drs:GetFailbackCommandForDrs",

  /**
   * Read - Grants permission to get failback launch requested
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  GetFailbackLaunchRequestedForDrs = "drs:GetFailbackLaunchRequestedForDrs",

  /**
   * Read - Grants permission to get failback replication configuration
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_GetFailbackReplicationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  GetFailbackReplicationConfiguration = "drs:GetFailbackReplicationConfiguration",

  /**
   * Read - Grants permission to get launch configuration
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_GetLaunchConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  GetLaunchConfiguration = "drs:GetLaunchConfiguration",

  /**
   * Read - Grants permission to get replication configuration
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_GetReplicationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  GetReplicationConfiguration = "drs:GetReplicationConfiguration",

  /**
   * Read - Grants permission to get suggested failback client device mapping
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  GetSuggestedFailbackClientDeviceMappingForDrs = "drs:GetSuggestedFailbackClientDeviceMappingForDrs",

  /**
   * Write - Grants permission to initialize service
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_InitializeService.html
   */
  InitializeService = "drs:InitializeService",

  /**
   * Write - Grants permission to issue an agent certificate
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  IssueAgentCertificateForDrs = "drs:IssueAgentCertificateForDrs",

  /**
   * Read - Grants permission to list extensible source servers
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_ListExtensibleSourceServers.html
   */
  ListExtensibleSourceServers = "drs:ListExtensibleSourceServers",

  /**
   * Read - Grants permission to list staging accounts
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_ListStagingAccounts.html
   */
  ListStagingAccounts = "drs:ListStagingAccounts",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "drs:ListTagsForResource",

  /**
   * Write - Grants permission to notify agent authentication
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  NotifyAgentAuthenticationForDrs = "drs:NotifyAgentAuthenticationForDrs",

  /**
   * Write - Grants permission to notify agent is connected
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  NotifyAgentConnectedForDrs = "drs:NotifyAgentConnectedForDrs",

  /**
   * Write - Grants permission to notify agent is disconnected
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  NotifyAgentDisconnectedForDrs = "drs:NotifyAgentDisconnectedForDrs",

  /**
   * Write - Grants permission to notify agent replication progress
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  NotifyAgentReplicationProgressForDrs = "drs:NotifyAgentReplicationProgressForDrs",

  /**
   * Write - Grants permission to notify consistency attained
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  NotifyConsistencyAttainedForDrs = "drs:NotifyConsistencyAttainedForDrs",

  /**
   * Write - Grants permission to notify replication server authentication
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  NotifyReplicationServerAuthenticationForDrs = "drs:NotifyReplicationServerAuthenticationForDrs",

  /**
   * Write - Grants permission to retry data replication
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_RetryDataReplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  RetryDataReplication = "drs:RetryDataReplication",

  /**
   * Write - Grants permission to send agent logs
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  SendAgentLogsForDrs = "drs:SendAgentLogsForDrs",

  /**
   * Write - Grants permission to send agent metrics
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  SendAgentMetricsForDrs = "drs:SendAgentMetricsForDrs",

  /**
   * Write - Grants permission to send channel command result
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  SendChannelCommandResultForDrs = "drs:SendChannelCommandResultForDrs",

  /**
   * Write - Grants permission to send client logs
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  SendClientLogsForDrs = "drs:SendClientLogsForDrs",

  /**
   * Write - Grants permission to send client metrics
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   */
  SendClientMetricsForDrs = "drs:SendClientMetricsForDrs",

  /**
   * Write - Grants permission to start failback launch
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_StartFailbackLaunch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartFailbackLaunch = "drs:StartFailbackLaunch",

  /**
   * Write - Grants permission to start recovery
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_StartRecovery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartRecovery = "drs:StartRecovery",

  /**
   * Write - Grants permission to stop failback
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_StopFailback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  StopFailback = "drs:StopFailback",

  /**
   * Tagging - Grants permission to assign a resource tag
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `drs:CreateAction`: Filters access by the name of a resource-creating API action ({@link https://docs.aws.amazon.com/drs/latest/userguide/supported-iam-actions-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "drs:TagResource",

  /**
   * Write - Grants permission to terminate recovery instances
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_TerminateRecoveryInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TerminateRecoveryInstances = "drs:TerminateRecoveryInstances",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "drs:UntagResource",

  /**
   * Write - Grants permission to update agent backlog
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  UpdateAgentBacklogForDrs = "drs:UpdateAgentBacklogForDrs",

  /**
   * Write - Grants permission to update agent conversion info
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  UpdateAgentConversionInfoForDrs = "drs:UpdateAgentConversionInfoForDrs",

  /**
   * Write - Grants permission to update agent replication info
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  UpdateAgentReplicationInfoForDrs = "drs:UpdateAgentReplicationInfoForDrs",

  /**
   * Write - Grants permission to update agent replication process state
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  UpdateAgentReplicationProcessStateForDrs = "drs:UpdateAgentReplicationProcessStateForDrs",

  /**
   * Write - Grants permission to update agent source properties
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  UpdateAgentSourcePropertiesForDrs = "drs:UpdateAgentSourcePropertiesForDrs",

  /**
   * Write - Grants permission to update failback client device mapping
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  UpdateFailbackClientDeviceMappingForDrs = "drs:UpdateFailbackClientDeviceMappingForDrs",

  /**
   * Write - Grants permission to update failback client last seen
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  UpdateFailbackClientLastSeenForDrs = "drs:UpdateFailbackClientLastSeenForDrs",

  /**
   * Write - Grants permission to update failback replication configuration
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateFailbackReplicationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  UpdateFailbackReplicationConfiguration = "drs:UpdateFailbackReplicationConfiguration",

  /**
   * Write - Grants permission to update launch configuration
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateLaunchConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  UpdateLaunchConfiguration = "drs:UpdateLaunchConfiguration",

  /**
   * Write - Grants permission to update a replication certificate
   * @see https://docs.aws.amazon.com/drs/latest/userguide/drs-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   */
  UpdateReplicationCertificateForDrs = "drs:UpdateReplicationCertificateForDrs",

  /**
   * Write - Grants permission to update replication configuration
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateReplicationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   */
  UpdateReplicationConfiguration = "drs:UpdateReplicationConfiguration",

  /**
   * Write - Grants permission to update replication configuration template
   * @see https://docs.aws.amazon.com/drs/latest/APIReference/API_UpdateReplicationConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.replicationConfigurationTemplateResource `DrsResource.replicationConfigurationTemplateResource`} 
   */
  UpdateReplicationConfigurationTemplate = "drs:UpdateReplicationConfigurationTemplate",

  /**
   * * - Grant all drs permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticdisasterrecovery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DrsResource.recoveryInstanceResource `DrsResource.recoveryInstanceResource`} 
   * - {@link DrsResource.sourceServerResource `DrsResource.sourceServerResource`} 
   * - {@link DrsResource.jobResource `DrsResource.jobResource`} 
   * - {@link DrsResource.replicationConfigurationTemplateResource `DrsResource.replicationConfigurationTemplateResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `drs:CreateAction`: Filters access by the name of a resource-creating API action ({@link https://docs.aws.amazon.com/drs/latest/userguide/supported-iam-actions-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "drs:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticdisasterrecovery.html
 */
export const DrsResource = {

  /**
   * @see https://docs.aws.amazon.com/drs/latest/userguide/failback-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  jobResource: (options: Partial<{partition: string, region: string, account: string, jobID: string}> = {}) => `arn:${options.partition || '*'}:drs:${options.region || '*'}:${options.account || '*'}:job/${options.jobID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/drs/latest/userguide/recovery-instances.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `drs:EC2InstanceARN`: Filters access by the EC2 instance the request originated from ({@link https://docs.aws.amazon.com/drs/latest/userguide/security_iam_authentication.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  recoveryInstanceResource: (options: Partial<{partition: string, region: string, account: string, recoveryInstanceID: string}> = {}) => `arn:${options.partition || '*'}:drs:${options.region || '*'}:${options.account || '*'}:recovery-instance/${options.recoveryInstanceID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/drs/latest/userguide/replication-settings-template.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  replicationConfigurationTemplateResource: (options: Partial<{partition: string, region: string, account: string, replicationConfigurationTemplateID: string}> = {}) => `arn:${options.partition || '*'}:drs:${options.region || '*'}:${options.account || '*'}:replication-configuration-template/${options.replicationConfigurationTemplateID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/drs/latest/userguide/source-servers.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  sourceServerResource: (options: Partial<{partition: string, region: string, account: string, sourceServerID: string}> = {}) => `arn:${options.partition || '*'}:drs:${options.region || '*'}:${options.account || '*'}:source-server/${options.sourceServerID || '*'}`,
}

