/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworksconfigurationmanagement.html
 */
export enum OpsworksCmAction {

  /**
   * Write - Grants permission to associate a node to a configuration management server
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_AssociateNode.html
   */
  AssociateNode = "opsworks-cm:AssociateNode",

  /**
   * Write - Grants permission to create a backup for the specified server
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateBackup.html
   */
  CreateBackup = "opsworks-cm:CreateBackup",

  /**
   * Write - Grants permission to create a new server
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_CreateServer.html
   */
  CreateServer = "opsworks-cm:CreateServer",

  /**
   * Write - Grants permission to delete the specified backup and possibly its S3 bucket
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteBackup.html
   */
  DeleteBackup = "opsworks-cm:DeleteBackup",

  /**
   * Write - Grants permission to delete the specified server with its corresponding CloudFormation stack and possibly the S3 bucket
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DeleteServer.html
   */
  DeleteServer = "opsworks-cm:DeleteServer",

  /**
   * List - Grants permission to describe the service limits for the user's account
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeAccountAttributes.html
   */
  DescribeAccountAttributes = "opsworks-cm:DescribeAccountAttributes",

  /**
   * List - Grants permission to describe a single backup, all backups of a specified server or all backups of the user's account
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeBackups.html
   */
  DescribeBackups = "opsworks-cm:DescribeBackups",

  /**
   * List - Grants permission to describe all events of the specified server
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeEvents.html
   */
  DescribeEvents = "opsworks-cm:DescribeEvents",

  /**
   * List - Grants permission to describe the association status for the specified node token and the specified server
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeNodeAssociationStatus.html
   */
  DescribeNodeAssociationStatus = "opsworks-cm:DescribeNodeAssociationStatus",

  /**
   * List - Grants permission to describe the specified server or all servers of the user's account
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DescribeServers.html
   */
  DescribeServers = "opsworks-cm:DescribeServers",

  /**
   * Write - Grants permission to disassociate a specified node from a server
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_DisassociateNode.html
   */
  DisassociateNode = "opsworks-cm:DisassociateNode",

  /**
   * Read - Grants permission to export an engine attribute from a server
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_ExportServerEngineAttribute.html
   */
  ExportServerEngineAttribute = "opsworks-cm:ExportServerEngineAttribute",

  /**
   * Read - Grants permission to list the tags that are applied to the specified server or backup
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "opsworks-cm:ListTagsForResource",

  /**
   * Write - Grants permission to apply a backup to specified server. Possibly swaps out the ec2-instance if specified
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_RestoreServer.html
   */
  RestoreServer = "opsworks-cm:RestoreServer",

  /**
   * Write - Grants permission to start the server maintenance immediately
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_StartMaintenance.html
   */
  StartMaintenance = "opsworks-cm:StartMaintenance",

  /**
   * Tagging - Grants permission to apply tags to the specified server or backup
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_TagResource.html
   */
  TagResource = "opsworks-cm:TagResource",

  /**
   * Tagging - Grants permission to remove tags from the specified server or backup
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UntagResource.html
   */
  UntagResource = "opsworks-cm:UntagResource",

  /**
   * Write - Grants permission to update general server settings
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServer.html
   */
  UpdateServer = "opsworks-cm:UpdateServer",

  /**
   * Write - Grants permission to update server settings specific to the configuration management type
   * @see https://docs.aws.amazon.com/opsworks-cm/latest/APIReference/API_UpdateServerEngineAttributes.html
   */
  UpdateServerEngineAttributes = "opsworks-cm:UpdateServerEngineAttributes",

  /**
   * * - Grant all opsworks-cm permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworksconfigurationmanagement.html
   */
  All = "opsworks-cm:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworksconfigurationmanagement.html
 */
export const OpsworksCmResource = {

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworksconfigurationmanagement.html
   */
  server: (options: Partial<{partition: string, account: string, serverName: string, uniqueId: string}> = {}) => `arn:${options.partition || '*'}:opsworks-cm::${options.account || '*'}:server/${options.serverName || '*'}/${options.uniqueId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworksconfigurationmanagement.html
   */
  backup: (options: Partial<{partition: string, account: string, serverName: string}> = {}) => `arn:${options.partition || '*'}:opsworks-cm::${options.account || '*'}:backup/${options.serverName || '*'}-{Date-and-Time-Stamp-of-Backup}`,
}

