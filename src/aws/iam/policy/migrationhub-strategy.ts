/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhubstrategyrecommendations.html
 */
export enum MigrationhubStrategyAction {

  /**
   * Read - Grants permission to get details of each anti pattern that collector should look at in a customer's environment
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetAntiPattern.html
   */
  GetAntiPattern = "migrationhub-strategy:GetAntiPattern",

  /**
   * Read - Grants permission to get details of an application
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetApplicationComponentDetails.html
   */
  GetApplicationComponentDetails = "migrationhub-strategy:GetApplicationComponentDetails",

  /**
   * Read - Grants permission to get a list of all recommended strategies and tools for an application running in a server
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetApplicationComponentStrategies.html
   */
  GetApplicationComponentStrategies = "migrationhub-strategy:GetApplicationComponentStrategies",

  /**
   * Read - Grants permission to retrieve status of an on-going assessment
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetAssessment.html
   */
  GetAssessment = "migrationhub-strategy:GetAssessment",

  /**
   * Read - Grants permission to get details of a specific import task
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetImportFileTask.html
   */
  GetImportFileTask = "migrationhub-strategy:GetImportFileTask",

  /**
   * Read - Grants permission to the collector to receive information from the service
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetMessage.html
   */
  GetMessage = "migrationhub-strategy:GetMessage",

  /**
   * Read - Grants permission to retrieve customer migration/Modernization preferences
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetPortfolioPreferences.html
   */
  GetPortfolioPreferences = "migrationhub-strategy:GetPortfolioPreferences",

  /**
   * Read - Grants permission to retrieve overall summary (number-of servers to rehost etc as well as overall number of anti patterns)
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetPortfolioSummary.html
   */
  GetPortfolioSummary = "migrationhub-strategy:GetPortfolioSummary",

  /**
   * Read - Grants permission to retrieve detailed information about a recommendation report
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetRecommendationReportDetails.html
   */
  GetRecommendationReportDetails = "migrationhub-strategy:GetRecommendationReportDetails",

  /**
   * Read - Grants permission to get info about a specific server
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetServerDetails.html
   */
  GetServerDetails = "migrationhub-strategy:GetServerDetails",

  /**
   * Read - Grants permission to get recommended strategies and tools for a specific server
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetServerStrategies.html
   */
  GetServerStrategies = "migrationhub-strategy:GetServerStrategies",

  /**
   * List - Grants permission to get a list of all anti patterns that collector should look for in a customer's environment
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListAntiPatterns.html
   */
  ListAntiPatterns = "migrationhub-strategy:ListAntiPatterns",

  /**
   * List - Grants permission to get a list of all applications running on servers on customer's servers
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListApplicationComponents.html
   */
  ListApplicationComponents = "migrationhub-strategy:ListApplicationComponents",

  /**
   * List - Grants permission to get a list of all collectors installed by the customer
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListCollectors.html
   */
  ListCollectors = "migrationhub-strategy:ListCollectors",

  /**
   * List - Grants permission to get list of all imports performed by the customer
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListImportFileTask.html
   */
  ListImportFileTask = "migrationhub-strategy:ListImportFileTask",

  /**
   * List - Grants permission to get a list of binaries that collector should assess
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListJarArtifacts.html
   */
  ListJarArtifacts = "migrationhub-strategy:ListJarArtifacts",

  /**
   * List - Grants permission to get a list of all servers in a customer's environment
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListServers.html
   */
  ListServers = "migrationhub-strategy:ListServers",

  /**
   * Write - Grants permission to save customer's Migration/Modernization preferences
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_PutPortfolioPreferences.html
   */
  PutPortfolioPreferences = "migrationhub-strategy:PutPortfolioPreferences",

  /**
   * Write - Grants permission to register the collector to receive an ID and to start receiving messages from the service
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_RegisterCollector.html
   */
  RegisterCollector = "migrationhub-strategy:RegisterCollector",

  /**
   * Write - Grants permission to the collector to send information to the service
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_SendMessage.html
   */
  SendMessage = "migrationhub-strategy:SendMessage",

  /**
   * Write - Grants permission to start assessment in a customer's environment (collect data from all servers and provide recommendations)
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StartAssessment.html
   */
  StartAssessment = "migrationhub-strategy:StartAssessment",

  /**
   * Write - Grants permission to start importing data from a file provided by customer
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StartImportFileTask.html
   */
  StartImportFileTask = "migrationhub-strategy:StartImportFileTask",

  /**
   * Write - Grants permission to start generating a recommendation report
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StartRecommendationReportGeneration.html
   */
  StartRecommendationReportGeneration = "migrationhub-strategy:StartRecommendationReportGeneration",

  /**
   * Write - Grants permission to stop an on-going assessment
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StopAssessment.html
   */
  StopAssessment = "migrationhub-strategy:StopAssessment",

  /**
   * Write - Grants permission to update details for an application
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_UpdateApplicationComponentConfig.html
   */
  UpdateApplicationComponentConfig = "migrationhub-strategy:UpdateApplicationComponentConfig",

  /**
   * Write - Grants permission to update info on a server along with the recommended strategy
   * @see https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_UpdateServerConfig.html
   */
  UpdateServerConfig = "migrationhub-strategy:UpdateServerConfig",

  /**
   * * - Grant all migrationhub-strategy permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhubstrategyrecommendations.html
   */
  All = "migrationhub-strategy:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhubstrategyrecommendations.html
 */
export const MigrationhubStrategyResource = {
}

