/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationmigrationservice.html
 */
export enum MgnAction {

  /**
   * Write - Grants permission to create volume snapshot group
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  BatchCreateVolumeSnapshotGroupForMgn = "mgn:BatchCreateVolumeSnapshotGroupForMgn",

  /**
   * Write - Grants permission to batch delete snapshot request
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  BatchDeleteSnapshotRequestForMgn = "mgn:BatchDeleteSnapshotRequestForMgn",

  /**
   * Write - Grants permission to change source server life cycle state
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_ChangeServerLifeCycleState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  ChangeServerLifeCycleState = "mgn:ChangeServerLifeCycleState",

  /**
   * Write - Grants permission to create launch configuration template
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateLaunchConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLaunchConfigurationTemplate = "mgn:CreateLaunchConfigurationTemplate",

  /**
   * Write - Grants permission to create replication configuration template
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_CreateReplicationConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateReplicationConfigurationTemplate = "mgn:CreateReplicationConfigurationTemplate",

  /**
   * Write - Grants permission to create vcenter client
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateVcenterClientForMgn = "mgn:CreateVcenterClientForMgn",

  /**
   * Write - Grants permission to delete job
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.jobResource `MgnResource.jobResource`} 
   */
  DeleteJob = "mgn:DeleteJob",

  /**
   * Write - Grants permission to delete launch configuration template
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteLaunchConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.launchConfigurationTemplateResource `MgnResource.launchConfigurationTemplateResource`} 
   */
  DeleteLaunchConfigurationTemplate = "mgn:DeleteLaunchConfigurationTemplate",

  /**
   * Write - Grants permission to delete replication configuration template
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteReplicationConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.replicationConfigurationTemplateResource `MgnResource.replicationConfigurationTemplateResource`} 
   */
  DeleteReplicationConfigurationTemplate = "mgn:DeleteReplicationConfigurationTemplate",

  /**
   * Write - Grants permission to delete source server
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteSourceServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  DeleteSourceServer = "mgn:DeleteSourceServer",

  /**
   * Write - Grants permission to delete vcenter client
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DeleteVcenterClient.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.vcenterClientResource `MgnResource.vcenterClientResource`} 
   */
  DeleteVcenterClient = "mgn:DeleteVcenterClient",

  /**
   * Read - Grants permission to describe job log items
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeJobLogItems.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.jobResource `MgnResource.jobResource`} 
   */
  DescribeJobLogItems = "mgn:DescribeJobLogItems",

  /**
   * List - Grants permission to describe jobs
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeJobs.html
   */
  DescribeJobs = "mgn:DescribeJobs",

  /**
   * List - Grants permission to describe launch configuration template
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeLaunchConfigurationTemplates.html
   */
  DescribeLaunchConfigurationTemplates = "mgn:DescribeLaunchConfigurationTemplates",

  /**
   * List - Grants permission to describe replication configuration template
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeReplicationConfigurationTemplates.html
   */
  DescribeReplicationConfigurationTemplates = "mgn:DescribeReplicationConfigurationTemplates",

  /**
   * Read - Grants permission to describe replication server associations
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  DescribeReplicationServerAssociationsForMgn = "mgn:DescribeReplicationServerAssociationsForMgn",

  /**
   * Read - Grants permission to describe snapshots requests
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  DescribeSnapshotRequestsForMgn = "mgn:DescribeSnapshotRequestsForMgn",

  /**
   * List - Grants permission to describe source servers
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeSourceServers.html
   */
  DescribeSourceServers = "mgn:DescribeSourceServers",

  /**
   * List - Grants permission to describe vcenter clients
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DescribeVcenterClients.html
   */
  DescribeVcenterClients = "mgn:DescribeVcenterClients",

  /**
   * Write - Grants permission to disconnect source server from service
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_DisconnectFromService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  DisconnectFromService = "mgn:DisconnectFromService",

  /**
   * Write - Grants permission to finalize cutover
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_FinalizeCutover.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  FinalizeCutover = "mgn:FinalizeCutover",

  /**
   * Read - Grants permission to get agent command
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  GetAgentCommandForMgn = "mgn:GetAgentCommandForMgn",

  /**
   * Read - Grants permission to get agent confirmed resume info
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  GetAgentConfirmedResumeInfoForMgn = "mgn:GetAgentConfirmedResumeInfoForMgn",

  /**
   * Read - Grants permission to get agent installation assets
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  GetAgentInstallationAssetsForMgn = "mgn:GetAgentInstallationAssetsForMgn",

  /**
   * Read - Grants permission to get agent replication info
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  GetAgentReplicationInfoForMgn = "mgn:GetAgentReplicationInfoForMgn",

  /**
   * Read - Grants permission to get agent runtime configuration
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  GetAgentRuntimeConfigurationForMgn = "mgn:GetAgentRuntimeConfigurationForMgn",

  /**
   * Read - Grants permission to get agent snapshots credits
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  GetAgentSnapshotCreditsForMgn = "mgn:GetAgentSnapshotCreditsForMgn",

  /**
   * Read - Grants permission to get channel commands
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  GetChannelCommandsForMgn = "mgn:GetChannelCommandsForMgn",

  /**
   * Read - Grants permission to get launch configuration
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_GetLaunchConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  GetLaunchConfiguration = "mgn:GetLaunchConfiguration",

  /**
   * Read - Grants permission to get replication configuration
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_GetReplicationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  GetReplicationConfiguration = "mgn:GetReplicationConfiguration",

  /**
   * Read - Grants permission to get vcenter client commands
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.vcenterClientResource `MgnResource.vcenterClientResource`} 
   */
  GetVcenterClientCommandsForMgn = "mgn:GetVcenterClientCommandsForMgn",

  /**
   * Write - Grants permission to initialize service
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_InitializeService.html
   */
  InitializeService = "mgn:InitializeService",

  /**
   * Write - Grants permission to issue a client certificate
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  IssueClientCertificateForMgn = "mgn:IssueClientCertificateForMgn",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "mgn:ListTagsForResource",

  /**
   * Write - Grants permission to mark source server as archived
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_MarkAsArchived.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  MarkAsArchived = "mgn:MarkAsArchived",

  /**
   * Write - Grants permission to notify agent authentication
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  NotifyAgentAuthenticationForMgn = "mgn:NotifyAgentAuthenticationForMgn",

  /**
   * Write - Grants permission to notify agent is connected
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  NotifyAgentConnectedForMgn = "mgn:NotifyAgentConnectedForMgn",

  /**
   * Write - Grants permission to notify agent is disconnected
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  NotifyAgentDisconnectedForMgn = "mgn:NotifyAgentDisconnectedForMgn",

  /**
   * Write - Grants permission to notify agent replication progress
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  NotifyAgentReplicationProgressForMgn = "mgn:NotifyAgentReplicationProgressForMgn",

  /**
   * Write - Grants permission to notify vcenter client started
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.vcenterClientResource `MgnResource.vcenterClientResource`} 
   */
  NotifyVcenterClientStartedForMgn = "mgn:NotifyVcenterClientStartedForMgn",

  /**
   * Write - Grants permission to register agent
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RegisterAgentForMgn = "mgn:RegisterAgentForMgn",

  /**
   * Write - Grants permission to retry replication
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_RetryDataReplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  RetryDataReplication = "mgn:RetryDataReplication",

  /**
   * Write - Grants permission to send agent logs
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  SendAgentLogsForMgn = "mgn:SendAgentLogsForMgn",

  /**
   * Write - Grants permission to send agent metrics
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  SendAgentMetricsForMgn = "mgn:SendAgentMetricsForMgn",

  /**
   * Write - Grants permission to send channel command result
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  SendChannelCommandResultForMgn = "mgn:SendChannelCommandResultForMgn",

  /**
   * Write - Grants permission to send client logs
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  SendClientLogsForMgn = "mgn:SendClientLogsForMgn",

  /**
   * Write - Grants permission to send client metrics
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  SendClientMetricsForMgn = "mgn:SendClientMetricsForMgn",

  /**
   * Write - Grants permission to send vcenter client command result
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.vcenterClientResource `MgnResource.vcenterClientResource`} 
   */
  SendVcenterClientCommandResultForMgn = "mgn:SendVcenterClientCommandResultForMgn",

  /**
   * Write - Grants permission to send vcenter client logs
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.vcenterClientResource `MgnResource.vcenterClientResource`} 
   */
  SendVcenterClientLogsForMgn = "mgn:SendVcenterClientLogsForMgn",

  /**
   * Write - Grants permission to send vcenter client metrics
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.vcenterClientResource `MgnResource.vcenterClientResource`} 
   */
  SendVcenterClientMetricsForMgn = "mgn:SendVcenterClientMetricsForMgn",

  /**
   * Write - Grants permission to start cutover
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartCutover.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartCutover = "mgn:StartCutover",

  /**
   * Write - Grants permission to start replication
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartReplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  StartReplication = "mgn:StartReplication",

  /**
   * Write - Grants permission to start test
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_StartTest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartTest = "mgn:StartTest",

  /**
   * Tagging - Grants permission to assign a resource tag
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.jobResource `MgnResource.jobResource`} 
   * - {@link MgnResource.launchConfigurationTemplateResource `MgnResource.launchConfigurationTemplateResource`} 
   * - {@link MgnResource.replicationConfigurationTemplateResource `MgnResource.replicationConfigurationTemplateResource`} 
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   * - {@link MgnResource.vcenterClientResource `MgnResource.vcenterClientResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `mgn:CreateAction`: Filters access by the name of a resource-creating API action ({@link https://docs.aws.amazon.com/mgn/latest/ug/supported-iam-actions-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "mgn:TagResource",

  /**
   * Write - Grants permission to terminate target instances
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_TerminateTargetInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TerminateTargetInstances = "mgn:TerminateTargetInstances",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.jobResource `MgnResource.jobResource`} 
   * - {@link MgnResource.launchConfigurationTemplateResource `MgnResource.launchConfigurationTemplateResource`} 
   * - {@link MgnResource.replicationConfigurationTemplateResource `MgnResource.replicationConfigurationTemplateResource`} 
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   * - {@link MgnResource.vcenterClientResource `MgnResource.vcenterClientResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "mgn:UntagResource",

  /**
   * Write - Grants permission to update agent backlog
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  UpdateAgentBacklogForMgn = "mgn:UpdateAgentBacklogForMgn",

  /**
   * Write - Grants permission to update agent conversion info
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  UpdateAgentConversionInfoForMgn = "mgn:UpdateAgentConversionInfoForMgn",

  /**
   * Write - Grants permission to update agent replication info
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  UpdateAgentReplicationInfoForMgn = "mgn:UpdateAgentReplicationInfoForMgn",

  /**
   * Write - Grants permission to update agent replication process state
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  UpdateAgentReplicationProcessStateForMgn = "mgn:UpdateAgentReplicationProcessStateForMgn",

  /**
   * Write - Grants permission to update agent source properties
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  UpdateAgentSourcePropertiesForMgn = "mgn:UpdateAgentSourcePropertiesForMgn",

  /**
   * Write - Grants permission to update launch configuration
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateLaunchConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  UpdateLaunchConfiguration = "mgn:UpdateLaunchConfiguration",

  /**
   * Write - Grants permission to update launch configuration
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateLaunchConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.launchConfigurationTemplateResource `MgnResource.launchConfigurationTemplateResource`} 
   */
  UpdateLaunchConfigurationTemplate = "mgn:UpdateLaunchConfigurationTemplate",

  /**
   * Write - Grants permission to update replication configuration
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateReplicationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  UpdateReplicationConfiguration = "mgn:UpdateReplicationConfiguration",

  /**
   * Write - Grants permission to update replication configuration template
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateReplicationConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.replicationConfigurationTemplateResource `MgnResource.replicationConfigurationTemplateResource`} 
   */
  UpdateReplicationConfigurationTemplate = "mgn:UpdateReplicationConfigurationTemplate",

  /**
   * Write - Grants permission to update source server replication type
   * @see https://docs.aws.amazon.com/mgn/latest/APIReference/API_UpdateSourceServerReplicationType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   */
  UpdateSourceServerReplicationType = "mgn:UpdateSourceServerReplicationType",

  /**
   * Read - Grants permission to verify client role
   * @see https://docs.aws.amazon.com/mgn/latest/ug/mgn-apis.html
   */
  VerifyClientRoleForMgn = "mgn:VerifyClientRoleForMgn",

  /**
   * * - Grant all mgn permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationmigrationservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MgnResource.sourceServerResource `MgnResource.sourceServerResource`} 
   * - {@link MgnResource.jobResource `MgnResource.jobResource`} 
   * - {@link MgnResource.launchConfigurationTemplateResource `MgnResource.launchConfigurationTemplateResource`} 
   * - {@link MgnResource.replicationConfigurationTemplateResource `MgnResource.replicationConfigurationTemplateResource`} 
   * - {@link MgnResource.vcenterClientResource `MgnResource.vcenterClientResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `mgn:CreateAction`: Filters access by the name of a resource-creating API action ({@link https://docs.aws.amazon.com/mgn/latest/ug/supported-iam-actions-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "mgn:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationmigrationservice.html
 */
export const MgnResource = {

  /**
   * @see https://docs.aws.amazon.com/mgn/latest/ug/launching-target-servers.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  jobResource: (options: Partial<{partition: string, region: string, account: string, jobID: string}> = {}) => `arn:${options.partition || '*'}:mgn:${options.region || '*'}:${options.account || '*'}:job/${options.jobID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mgn/latest/ug/replication-settings-template.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  replicationConfigurationTemplateResource: (options: Partial<{partition: string, region: string, account: string, replicationConfigurationTemplateID: string}> = {}) => `arn:${options.partition || '*'}:mgn:${options.region || '*'}:${options.account || '*'}:replication-configuration-template/${options.replicationConfigurationTemplateID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mgn/latest/ug/post-launch-settings.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  launchConfigurationTemplateResource: (options: Partial<{partition: string, region: string, account: string, launchConfigurationTemplateID: string}> = {}) => `arn:${options.partition || '*'}:mgn:${options.region || '*'}:${options.account || '*'}:launch-configuration-template/${options.launchConfigurationTemplateID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mgn/latest/ug/vcenter-client.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  vcenterClientResource: (options: Partial<{partition: string, region: string, account: string, vcenterClientID: string}> = {}) => `arn:${options.partition || '*'}:mgn:${options.region || '*'}:${options.account || '*'}:vcenter-client/${options.vcenterClientID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mgn/latest/ug/source-servers.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  sourceServerResource: (options: Partial<{partition: string, region: string, account: string, sourceServerID: string}> = {}) => `arn:${options.partition || '*'}:mgn:${options.region || '*'}:${options.account || '*'}:source-server/${options.sourceServerID || '*'}`,
}

