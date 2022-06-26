/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservermigrationservice.html
 */
export enum SmsAction {

  /**
   * Write - Grants permission to create an application configuration to migrate on-premise application onto AWS
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateApp.html
   */
  CreateApp = "sms:CreateApp",

  /**
   * Write - Grants permission to create a job to migrate on-premise server onto AWS
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_CreateReplicationJob.html
   */
  CreateReplicationJob = "sms:CreateReplicationJob",

  /**
   * Write - Grants permission to delete an existing application configuration
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteApp.html
   */
  DeleteApp = "sms:DeleteApp",

  /**
   * Write - Grants permission to delete launch configuration for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppLaunchConfiguration.html
   */
  DeleteAppLaunchConfiguration = "sms:DeleteAppLaunchConfiguration",

  /**
   * Write - Grants permission to delete replication configuration for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppReplicationConfiguration.html
   */
  DeleteAppReplicationConfiguration = "sms:DeleteAppReplicationConfiguration",

  /**
   * Write - Grants permission to delete validation configuration for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteAppValidationConfiguration.html
   */
  DeleteAppValidationConfiguration = "sms:DeleteAppValidationConfiguration",

  /**
   * Write - Grants permission to delete an existing job to migrate on-premise server onto AWS
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteReplicationJob.html
   */
  DeleteReplicationJob = "sms:DeleteReplicationJob",

  /**
   * Write - Grants permission to delete the complete list of on-premise servers gathered into AWS
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DeleteServerCatalog.html
   */
  DeleteServerCatalog = "sms:DeleteServerCatalog",

  /**
   * Write - Grants permission to disassociate a connector that has been associated
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_DisassociateConnector.html
   */
  DisassociateConnector = "sms:DisassociateConnector",

  /**
   * Write - Grants permission to generate a changeSet for the CloudFormation stack of an application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateChangeSet.html
   */
  GenerateChangeSet = "sms:GenerateChangeSet",

  /**
   * Write - Grants permission to generate a CloudFormation template for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GenerateTemplate.html
   */
  GenerateTemplate = "sms:GenerateTemplate",

  /**
   * Read - Grants permission to get the configuration and statuses for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetApp.html
   */
  GetApp = "sms:GetApp",

  /**
   * Read - Grants permission to get launch configuration for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppLaunchConfiguration.html
   */
  GetAppLaunchConfiguration = "sms:GetAppLaunchConfiguration",

  /**
   * Read - Grants permission to get replication configuration for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppReplicationConfiguration.html
   */
  GetAppReplicationConfiguration = "sms:GetAppReplicationConfiguration",

  /**
   * Read - Grants permission to get validation configuration for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppValidationConfiguration.html
   */
  GetAppValidationConfiguration = "sms:GetAppValidationConfiguration",

  /**
   * Read - Grants permission to get notification sent from application validation script.
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetAppValidationOutput.html
   */
  GetAppValidationOutput = "sms:GetAppValidationOutput",

  /**
   * Read - Grants permission to get all connectors that have been associated
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetConnectors.html
   */
  GetConnectors = "sms:GetConnectors",

  /**
   * Read - Grants permission to gets messages from AWS Server Migration Service to Server Migration Connector
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservermigrationservice.html
   */
  GetMessages = "sms:GetMessages",

  /**
   * Read - Grants permission to get all existing jobs to migrate on-premise servers onto AWS
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationJobs.html
   */
  GetReplicationJobs = "sms:GetReplicationJobs",

  /**
   * Read - Grants permission to get all runs for an existing job
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetReplicationRuns.html
   */
  GetReplicationRuns = "sms:GetReplicationRuns",

  /**
   * Read - Grants permission to get all servers that have been imported
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_GetServers.html
   */
  GetServers = "sms:GetServers",

  /**
   * Write - Grants permission to import application catalog from AWS Application Discovery Service
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportAppCatalog.html
   */
  ImportAppCatalog = "sms:ImportAppCatalog",

  /**
   * Write - Grants permission to gather a complete list of on-premise servers
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ImportServerCatalog.html
   */
  ImportServerCatalog = "sms:ImportServerCatalog",

  /**
   * Write - Grants permission to create and launch a CloudFormation stack for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_LaunchApp.html
   */
  LaunchApp = "sms:LaunchApp",

  /**
   * List - Grants permission to get a list of summaries for existing applications
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_ListAppss.html
   */
  ListApps = "sms:ListApps",

  /**
   * Write - Grants permission to send notification for application validation script
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_NotifyAppValidationOutput.html
   */
  NotifyAppValidationOutput = "sms:NotifyAppValidationOutput",

  /**
   * Write - Grants permission to create or update launch configuration for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppLaunchConfiguration.html
   */
  PutAppLaunchConfiguration = "sms:PutAppLaunchConfiguration",

  /**
   * Write - Grants permission to create or update replication configuration for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppReplicationConfiguration.html
   */
  PutAppReplicationConfiguration = "sms:PutAppReplicationConfiguration",

  /**
   * Write - Grants permission to put validation configuration for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_PutAppValidationConfiguration.html
   */
  PutAppValidationConfiguration = "sms:PutAppValidationConfiguration",

  /**
   * Write - Grants permission to send message from Server Migration Connector to AWS Server Migration Service
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservermigrationservice.html
   */
  SendMessage = "sms:SendMessage",

  /**
   * Write - Grants permission to create and start replication jobs for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartAppReplication.html
   */
  StartAppReplication = "sms:StartAppReplication",

  /**
   * Write - Grants permission to start a replication run for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandAppReplication.html
   */
  StartOnDemandAppReplication = "sms:StartOnDemandAppReplication",

  /**
   * Write - Grants permission to start a replication run for an existing replication job
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StartOnDemandReplicationRun.html
   */
  StartOnDemandReplicationRun = "sms:StartOnDemandReplicationRun",

  /**
   * Write - Grants permission to stop and delete replication jobs for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_StopAppReplication.html
   */
  StopAppReplication = "sms:StopAppReplication",

  /**
   * Write - Grants permission to terminate the CloudFormation stack for an existing application
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_TerminateApp.html
   */
  TerminateApp = "sms:TerminateApp",

  /**
   * Write - Grants permission to update an existing application configuration
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateApp.html
   */
  UpdateApp = "sms:UpdateApp",

  /**
   * Write - Grants permission to update an existing job to migrate on-premise server onto AWS
   * @see https://docs.aws.amazon.com/server-migration-service/latest/APIReference/API_UpdateReplicationJob.html
   */
  UpdateReplicationJob = "sms:UpdateReplicationJob",

  /**
   * * - Grant all sms permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservermigrationservice.html
   */
  All = "sms:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservermigrationservice.html
 */
export const SmsResource = {
}

