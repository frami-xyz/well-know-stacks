/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedstreamingforkafkaconnect.html
 */
export enum KafkaconnectAction {

  /**
   * Write - Grants permission to create an MSK Connect connector
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_CreateConnector.html
   */
  CreateConnector = "kafkaconnect:CreateConnector",

  /**
   * Write - Grants permission to create an MSK Connect custom plugin
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_CreateCustomPlugin.html
   */
  CreateCustomPlugin = "kafkaconnect:CreateCustomPlugin",

  /**
   * Write - Grants permission to create an MSK Connect worker configuration
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_CreateWorkerConfiguration.html
   */
  CreateWorkerConfiguration = "kafkaconnect:CreateWorkerConfiguration",

  /**
   * Write - Grants permission to delete an MSK Connect connector
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_DeleteConnector.html
   */
  DeleteConnector = "kafkaconnect:DeleteConnector",

  /**
   * Write - Grants permission to delete an MSK Connect custom plugin
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_DeleteCustomPlugin.html
   */
  DeleteCustomPlugin = "kafkaconnect:DeleteCustomPlugin",

  /**
   * Read - Grants permission to describe an MSK Connect connector
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_DescribeConnector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaconnectResource.connector `KafkaconnectResource.connector`} 
   */
  DescribeConnector = "kafkaconnect:DescribeConnector",

  /**
   * Read - Grants permission to describe an MSK Connect custom plugin
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_DescribeCustomPlugin.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaconnectResource.customPlugin `KafkaconnectResource.customPlugin`} 
   */
  DescribeCustomPlugin = "kafkaconnect:DescribeCustomPlugin",

  /**
   * Read - Grants permission to describe an MSK Connect worker configuration
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_DescribeWorkerConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaconnectResource.workerConfiguration `KafkaconnectResource.workerConfiguration`} 
   */
  DescribeWorkerConfiguration = "kafkaconnect:DescribeWorkerConfiguration",

  /**
   * Read - Grants permission to list all MSK Connect connectors in this account
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_ListConnectors.html
   */
  ListConnectors = "kafkaconnect:ListConnectors",

  /**
   * Read - Grants permission to list all MSK Connect custom plugins in this account
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_ListCustomPlugins.html
   */
  ListCustomPlugins = "kafkaconnect:ListCustomPlugins",

  /**
   * Read - Grants permission to list all MSK Connect worker configurations in this account
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_ListWorkerConfigurations.html
   */
  ListWorkerConfigurations = "kafkaconnect:ListWorkerConfigurations",

  /**
   * Write - Grants permission to update an MSK Connect connector
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_UpdateConnector.html
   */
  UpdateConnector = "kafkaconnect:UpdateConnector",

  /**
   * * - Grant all kafkaconnect permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedstreamingforkafkaconnect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaconnectResource.connector `KafkaconnectResource.connector`} 
   * - {@link KafkaconnectResource.customPlugin `KafkaconnectResource.customPlugin`} 
   * - {@link KafkaconnectResource.workerConfiguration `KafkaconnectResource.workerConfiguration`} 
   */
  All = "kafkaconnect:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedstreamingforkafkaconnect.html
 */
export const KafkaconnectResource = {

  /**
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_ConnectorSummary.html
   */
  connector: (options: Partial<{partition: string, region: string, account: string, connectorName: string, uUID: string}> = {}) => `arn:${options.partition || '*'}:kafkaconnect:${options.region || '*'}:${options.account || '*'}:connector/${options.connectorName || '*'}/${options.uUID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_CustomPlugin.html
   */
  customPlugin: (options: Partial<{partition: string, region: string, account: string, customPluginName: string, uUID: string}> = {}) => `arn:${options.partition || '*'}:kafkaconnect:${options.region || '*'}:${options.account || '*'}:custom-plugin/${options.customPluginName || '*'}/${options.uUID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/MSKC/latest/mskc/API_WorkerConfiguration.html
   */
  workerConfiguration: (options: Partial<{partition: string, region: string, account: string, workerConfigurationName: string, uUID: string}> = {}) => `arn:${options.partition || '*'}:kafkaconnect:${options.region || '*'}:${options.account || '*'}:worker-configuration/${options.workerConfigurationName || '*'}/${options.uUID || '*'}`,
}

