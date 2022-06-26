/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationdiscoveryservice.html
 */
export enum DiscoveryAction {

  /**
   * Write - Grants permission to AssociateConfigurationItemsToApplication API. AssociateConfigurationItemsToApplication associates one or more configuration items with an application
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_AssociateConfigurationItemsToApplication.html
   */
  AssociateConfigurationItemsToApplication = "discovery:AssociateConfigurationItemsToApplication",

  /**
   * Write - Grants permission to BatchDeleteImportData API. BatchDeleteImportData deletes one or more Migration Hub import tasks, each identified by their import ID. Each import task has a number of records, which can identify servers or applications
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_BatchDeleteImportData.html
   */
  BatchDeleteImportData = "discovery:BatchDeleteImportData",

  /**
   * Write - Grants permission to CreateApplication API. CreateApplication creates an application with the given name and description
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_CreateApplication.html
   */
  CreateApplication = "discovery:CreateApplication",

  /**
   * Tagging - Grants permission to CreateTags API. CreateTags creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_CreateTags.html
   */
  CreateTags = "discovery:CreateTags",

  /**
   * Write - Grants permission to DeleteApplications API. DeleteApplications deletes a list of applications and their associations with configuration items
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DeleteApplications.html
   */
  DeleteApplications = "discovery:DeleteApplications",

  /**
   * Tagging - Grants permission to DeleteTags API. DeleteTags deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DeleteTags.html
   */
  DeleteTags = "discovery:DeleteTags",

  /**
   * Read - Grants permission to DescribeAgents API. DescribeAgents lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an ID
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeAgents.html
   */
  DescribeAgents = "discovery:DescribeAgents",

  /**
   * Read - Grants permission to DescribeConfigurations API. DescribeConfigurations retrieves attributes for a list of configuration item IDs. All of the supplied IDs must be for the same asset type (server, application, process, or connection). Output fields are specific to the asset type selected. For example, the output for a server configuration item includes a list of attributes about the server, such as host name, operating system, and number of network cards
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeConfigurations.html
   */
  DescribeConfigurations = "discovery:DescribeConfigurations",

  /**
   * Read - Grants permission to DescribeContinuousExports API. DescribeContinuousExports lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call DescribeContinuousExports as is without passing any parameters
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeContinuousExports.html
   */
  DescribeContinuousExports = "discovery:DescribeContinuousExports",

  /**
   * Read - Grants permission to DescribeExportConfigurations API. DescribeExportConfigurations retrieves the status of a given export process. You can retrieve status from a maximum of 100 processes
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportConfigurations.html
   */
  DescribeExportConfigurations = "discovery:DescribeExportConfigurations",

  /**
   * Read - Grants permission to DescribeExportTasks API. DescribeExportTasks retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html
   */
  DescribeExportTasks = "discovery:DescribeExportTasks",

  /**
   * List - Grants permission to DescribeImportTasks API. DescribeImportTasks returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeImportTasks.html
   */
  DescribeImportTasks = "discovery:DescribeImportTasks",

  /**
   * Read - Grants permission to DescribeTags API. DescribeTags retrieves a list of configuration items that are tagged with a specific tag. Or retrieves a list of all tags assigned to a specific configuration item
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeTags.html
   */
  DescribeTags = "discovery:DescribeTags",

  /**
   * Write - Grants permission to DisassociateConfigurationItemsFromApplication API. DisassociateConfigurationItemsFromApplication disassociates one or more configuration items from an application
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DisassociateConfigurationItemsFromApplication.html
   */
  DisassociateConfigurationItemsFromApplication = "discovery:DisassociateConfigurationItemsFromApplication",

  /**
   * Write - Grants permission to ExportConfigurations API. ExportConfigurations exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ExportConfigurations.html
   */
  ExportConfigurations = "discovery:ExportConfigurations",

  /**
   * Read - Grants permission to GetDiscoverySummary API. GetDiscoverySummary retrieves a short summary of discovered assets
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_GetDiscoverySummary.html
   */
  GetDiscoverySummary = "discovery:GetDiscoverySummary",

  /**
   * Read - Grants permission to GetNetworkConnectionGraph API. GetNetworkConnectionGraph accepts input list of one of - Ip Addresses, server ids or node ids. Returns a list of nodes and edges which help customer visualize network connection graph. This API is used for visualize network graph functionality in MigrationHub console
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_GetNetworkConnectionGraph.html
   */
  GetNetworkConnectionGraph = "discovery:GetNetworkConnectionGraph",

  /**
   * List - Grants permission to ListConfigurations API. ListConfigurations retrieves a list of configuration items according to criteria you specify in a filter. The filter criteria identify relationship requirements
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ListConfigurations.html
   */
  ListConfigurations = "discovery:ListConfigurations",

  /**
   * List - Grants permission to ListServerNeighbors API. ListServerNeighbors retrieves a list of servers which are one network hop away from a specified server
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_ListServerNeighbors.html
   */
  ListServerNeighbors = "discovery:ListServerNeighbors",

  /**
   * Write - Grants permission to StartContinuousExport API. StartContinuousExport start the continuous flow of agent's discovered data into Amazon Athena
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartContinuousExport.html
   */
  StartContinuousExport = "discovery:StartContinuousExport",

  /**
   * Write - Grants permission to StartDataCollectionByAgentIds API. StartDataCollectionByAgentIds instructs the specified agents or Connectors to start collecting data
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartDataCollectionByAgentIds.html
   */
  StartDataCollectionByAgentIds = "discovery:StartDataCollectionByAgentIds",

  /**
   * Write - Grants permission to StartExportTask API. StartExportTask export the configuration data about discovered configuration items and relationships to an S3 bucket in a specified format
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html
   */
  StartExportTask = "discovery:StartExportTask",

  /**
   * Write - Grants permission to StartImportTask API. StartImportTask starts an import task. The Migration Hub import feature allows you to import details of your on-premises environment directly into AWS without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data including the ability to group your devices as applications and track their migration status
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartImportTask.html
   */
  StartImportTask = "discovery:StartImportTask",

  /**
   * Write - Grants permission to StopContinuousExport API. StopContinuousExport stops the continuous flow of agent's discovered data into Amazon Athena
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StopContinuousExport.html
   */
  StopContinuousExport = "discovery:StopContinuousExport",

  /**
   * Write - Grants permission to StopDataCollectionByAgentIds API. StopDataCollectionByAgentIds instructs the specified agents or Connectors to stop collecting data
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StopDataCollectionByAgentIds.html
   */
  StopDataCollectionByAgentIds = "discovery:StopDataCollectionByAgentIds",

  /**
   * Write - Grants permission to UpdateApplication API. UpdateApplication updates metadata about an application
   * @see https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_UpdateApplication.html
   */
  UpdateApplication = "discovery:UpdateApplication",

  /**
   * * - Grant all discovery permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationdiscoveryservice.html
   */
  All = "discovery:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationdiscoveryservice.html
 */
export const DiscoveryResource = {
}

