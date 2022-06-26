/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondevopsguru.html
 */
export enum DevopsGuruAction {

  /**
   * Write - Grants permission to add a notification channel to DevOps Guru
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_AddNotificationChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevopsGuruResource.topic `DevopsGuruResource.topic`} 
   */
  AddNotificationChannel = "devops-guru:AddNotificationChannel",

  /**
   * Write - Grants permission to delete specified insight in your account
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DeleteInsight.html
   */
  DeleteInsight = "devops-guru:DeleteInsight",

  /**
   * Read - Grants permission to view the health of operations in your AWS account
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAccountHealth.html
   */
  DescribeAccountHealth = "devops-guru:DescribeAccountHealth",

  /**
   * Read - Grants permission to view the health of operations within a time range in your AWS account
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAccountOverview.html
   */
  DescribeAccountOverview = "devops-guru:DescribeAccountOverview",

  /**
   * Read - Grants permission to list the details of a specified anomaly
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAnomaly.html
   */
  DescribeAnomaly = "devops-guru:DescribeAnomaly",

  /**
   * Read - Grants permission to retrieve details about event sources for DevOps Guru
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeEventSourcesConfig.html
   */
  DescribeEventSourcesConfig = "devops-guru:DescribeEventSourcesConfig",

  /**
   * Read - Grants permission to view the feedback details of a specified insight
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeFeedback.html
   */
  DescribeFeedback = "devops-guru:DescribeFeedback",

  /**
   * Read - Grants permission to list the details of a specified insight
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeInsight.html
   */
  DescribeInsight = "devops-guru:DescribeInsight",

  /**
   * Read - Grants permission to view the health of operations in your organization
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeOrganizationAccountHealth.html
   */
  DescribeOrganizationHealth = "devops-guru:DescribeOrganizationHealth",

  /**
   * Read - Grants permission to view the health of operations within a time range in your organization
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeOrganizationOverview.html
   */
  DescribeOrganizationOverview = "devops-guru:DescribeOrganizationOverview",

  /**
   * Read - Grants permission to view the health of operations for each AWS CloudFormation stack or AWS Services or accounts specified in DevOps Guru in your organization
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeOrganizationResourceCollectionHealth.html
   */
  DescribeOrganizationResourceCollectionHealth = "devops-guru:DescribeOrganizationResourceCollectionHealth",

  /**
   * Read - Grants permission to view the health of operations for each AWS CloudFormation stack specified in DevOps Guru
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeResourceCollectionHealth.html
   */
  DescribeResourceCollectionHealth = "devops-guru:DescribeResourceCollectionHealth",

  /**
   * Read - Grants permission to view the integration status of services that can be integrated with DevOps Guru
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeServiceIntegration.html
   */
  DescribeServiceIntegration = "devops-guru:DescribeServiceIntegration",

  /**
   * Read - Grants permission to list service resource cost estimates
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_GetCostEstimation.html
   */
  GetCostEstimation = "devops-guru:GetCostEstimation",

  /**
   * Read - Grants permission to list AWS CloudFormation stacks that DevOps Guru is configured to use
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_GetResourceCollection.html
   */
  GetResourceCollection = "devops-guru:GetResourceCollection",

  /**
   * List - Grants permission to list anomalies of a given insight in your account
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListAnomaliesForInsight.html
   */
  ListAnomaliesForInsight = "devops-guru:ListAnomaliesForInsight",

  /**
   * List - Grants permission to list resource events that are evaluated by DevOps Guru
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListEvents.html
   */
  ListEvents = "devops-guru:ListEvents",

  /**
   * List - Grants permission to list insights in your account
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListInsights.html
   */
  ListInsights = "devops-guru:ListInsights",

  /**
   * List - Grants permission to list notification channels configured for DevOps Guru in your account
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListNotificationChannels.html
   */
  ListNotificationChannels = "devops-guru:ListNotificationChannels",

  /**
   * List - Grants permission to list insights in your organization
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListOrganizationInsights.html
   */
  ListOrganizationInsights = "devops-guru:ListOrganizationInsights",

  /**
   * List - Grants permission to list a specified insight's recommendations
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListRecommendations.html
   */
  ListRecommendations = "devops-guru:ListRecommendations",

  /**
   * Write - Grants permission to submit a feedback to DevOps Guru
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PutFeedback.html
   */
  PutFeedback = "devops-guru:PutFeedback",

  /**
   * Write - Grants permission to remove a notification channel from DevOps Guru
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_RemoveNotificationChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevopsGuruResource.topic `DevopsGuruResource.topic`} 
   */
  RemoveNotificationChannel = "devops-guru:RemoveNotificationChannel",

  /**
   * List - Grants permission to search insights in your account
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_SearchInsights.html
   */
  SearchInsights = "devops-guru:SearchInsights",

  /**
   * List - Grants permission to search insights in your organization
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_SearchOrganizationInsights.html
   */
  SearchOrganizationInsights = "devops-guru:SearchOrganizationInsights",

  /**
   * Read - Grants permission to start the creation of an estimate of the monthly cost
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_StartCostEstimation.html
   */
  StartCostEstimation = "devops-guru:StartCostEstimation",

  /**
   * Write - Grants permission to update an event source for DevOps Guru
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateEventSourcesConfig.html
   */
  UpdateEventSourcesConfig = "devops-guru:UpdateEventSourcesConfig",

  /**
   * Write - Grants permission to update the list of AWS CloudFormation stacks that are used to specify which AWS resources in your account are analyzed by DevOps Guru
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateResourceCollection.html
   */
  UpdateResourceCollection = "devops-guru:UpdateResourceCollection",

  /**
   * Write - Grants permission to enable or disable a service that integrates with DevOps Guru
   * @see https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateServiceIntegration.html
   */
  UpdateServiceIntegration = "devops-guru:UpdateServiceIntegration",

  /**
   * * - Grant all devops-guru permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondevopsguru.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevopsGuruResource.topic `DevopsGuruResource.topic`} 
   */
  All = "devops-guru:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondevopsguru.html
 */
export const DevopsGuruResource = {

  /**
   * @see https://docs.aws.amazon.com/devops-guru/latest/userguide/CreateTopic.html
   */
  topic: (options: Partial<{partition: string, region: string, account: string, topicName: string}> = {}) => `arn:${options.partition || '*'}:sns:${options.region || '*'}:${options.account || '*'}:${options.topicName || '*'}`,
}

