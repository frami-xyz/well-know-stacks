/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_cloudwatchapplicationinsights.html
 */
export enum ApplicationinsightsAction {

  /**
   * Write - Grants permission to create an application from a resource group
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_CreateApplication.html
   */
  CreateApplication = "applicationinsights:CreateApplication",

  /**
   * Write - Grants permission to create a component from a group of resources
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_CreateComponent.html
   */
  CreateComponent = "applicationinsights:CreateComponent",

  /**
   * Write - Grants permission to create log a pattern
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_CreateLogPattern.html
   */
  CreateLogPattern = "applicationinsights:CreateLogPattern",

  /**
   * Write - Grants permission to delete an application
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteApplication.html
   */
  DeleteApplication = "applicationinsights:DeleteApplication",

  /**
   * Write - Grants permission to delete a component
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteComponent.html
   */
  DeleteComponent = "applicationinsights:DeleteComponent",

  /**
   * Write - Grants permission to delete a log pattern
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteLogPattern.html
   */
  DeleteLogPattern = "applicationinsights:DeleteLogPattern",

  /**
   * Read - Grants permission to describe an application
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeApplication.html
   */
  DescribeApplication = "applicationinsights:DescribeApplication",

  /**
   * Read - Grants permission to describe a component
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponent.html
   */
  DescribeComponent = "applicationinsights:DescribeComponent",

  /**
   * Read - Grants permission to describe a component's configuration
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponentConfiguration.html
   */
  DescribeComponentConfiguration = "applicationinsights:DescribeComponentConfiguration",

  /**
   * Read - Grants permission to describe the recommended application component configuration
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponentConfigurationRecommendation.html
   */
  DescribeComponentConfigurationRecommendation = "applicationinsights:DescribeComponentConfigurationRecommendation",

  /**
   * Read - Grants permission to describe a log pattern
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeLogPattern.html
   */
  DescribeLogPattern = "applicationinsights:DescribeLogPattern",

  /**
   * Read - Grants permission to describe an observation
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeObservation.html
   */
  DescribeObservation = "applicationinsights:DescribeObservation",

  /**
   * Read - Grants permission to describe a problem
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeProblem.html
   */
  DescribeProblem = "applicationinsights:DescribeProblem",

  /**
   * Read - Grants permission to describe the observation in a problem
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeProblemObservations.html
   */
  DescribeProblemObservations = "applicationinsights:DescribeProblemObservations",

  /**
   * List - Grants permission to list all applications
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListApplications.html
   */
  ListApplications = "applicationinsights:ListApplications",

  /**
   * List - Grants permission to list an application's components
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListComponents.html
   */
  ListComponents = "applicationinsights:ListComponents",

  /**
   * List - Grants permission to list configuration history
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListConfigurationHistory.html
   */
  ListConfigurationHistory = "applicationinsights:ListConfigurationHistory",

  /**
   * List - Grants permission to list log pattern sets for an application
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListLogPatternSets.html
   */
  ListLogPatternSets = "applicationinsights:ListLogPatternSets",

  /**
   * List - Grants permission to list log patterns
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListLogPatterns.html
   */
  ListLogPatterns = "applicationinsights:ListLogPatterns",

  /**
   * List - Grants permission to list the problems in an application
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListProblems.html
   */
  ListProblems = "applicationinsights:ListProblems",

  /**
   * Read - Grants permission to list tags for the resource
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "applicationinsights:ListTagsForResource",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_TagResource.html
   */
  TagResource = "applicationinsights:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UntagResource.html
   */
  UntagResource = "applicationinsights:UntagResource",

  /**
   * Write - Grants permission to update an application
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateApplication.html
   */
  UpdateApplication = "applicationinsights:UpdateApplication",

  /**
   * Write - Grants permission to update a component
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateComponent.html
   */
  UpdateComponent = "applicationinsights:UpdateComponent",

  /**
   * Write - Grants permission to update a component's configuration
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateComponentConfiguration.html
   */
  UpdateComponentConfiguration = "applicationinsights:UpdateComponentConfiguration",

  /**
   * Write - Grants permission to update a log pattern
   * @see https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateLogPattern.html
   */
  UpdateLogPattern = "applicationinsights:UpdateLogPattern",

  /**
   * * - Grant all applicationinsights permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_cloudwatchapplicationinsights.html
   */
  All = "applicationinsights:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_cloudwatchapplicationinsights.html
 */
export const ApplicationinsightsResource = {
}

