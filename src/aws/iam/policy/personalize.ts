/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpersonalize.html
 */
export enum PersonalizeAction {

  /**
   * Write - Grants permission to create a batch inference job
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateBatchInferenceJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.batchInferenceJob `PersonalizeResource.batchInferenceJob`} 
   */
  CreateBatchInferenceJob = "personalize:CreateBatchInferenceJob",

  /**
   * Write - Grants permission to create a batch segment job
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateBatchSegmentJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.batchSegmentJob `PersonalizeResource.batchSegmentJob`} 
   */
  CreateBatchSegmentJob = "personalize:CreateBatchSegmentJob",

  /**
   * Write - Grants permission to create a campaign
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateCampaign.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.campaign `PersonalizeResource.campaign`} 
   */
  CreateCampaign = "personalize:CreateCampaign",

  /**
   * Write - Grants permission to create a dataset
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.dataset `PersonalizeResource.dataset`} 
   */
  CreateDataset = "personalize:CreateDataset",

  /**
   * Write - Grants permission to create a dataset export job
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.datasetExportJob `PersonalizeResource.datasetExportJob`} 
   */
  CreateDatasetExportJob = "personalize:CreateDatasetExportJob",

  /**
   * Write - Grants permission to create a dataset group
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.datasetGroup `PersonalizeResource.datasetGroup`} 
   */
  CreateDatasetGroup = "personalize:CreateDatasetGroup",

  /**
   * Write - Grants permission to create a dataset import job
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.datasetImportJob `PersonalizeResource.datasetImportJob`} 
   */
  CreateDatasetImportJob = "personalize:CreateDatasetImportJob",

  /**
   * Write - Grants permission to create an event tracker
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.eventTracker `PersonalizeResource.eventTracker`} 
   */
  CreateEventTracker = "personalize:CreateEventTracker",

  /**
   * Write - Grants permission to create a filter
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.filter `PersonalizeResource.filter`} 
   */
  CreateFilter = "personalize:CreateFilter",

  /**
   * Write - Grants permission to create a recommender
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateRecommender.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.recommender `PersonalizeResource.recommender`} 
   */
  CreateRecommender = "personalize:CreateRecommender",

  /**
   * Write - Grants permission to create a schema
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSchema.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.schema `PersonalizeResource.schema`} 
   */
  CreateSchema = "personalize:CreateSchema",

  /**
   * Write - Grants permission to create a solution
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.solution `PersonalizeResource.solution`} 
   */
  CreateSolution = "personalize:CreateSolution",

  /**
   * Write - Grants permission to create a solution version
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolutionVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.solution `PersonalizeResource.solution`} 
   */
  CreateSolutionVersion = "personalize:CreateSolutionVersion",

  /**
   * Write - Grants permission to delete a campaign
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteCampaign.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.campaign `PersonalizeResource.campaign`} 
   */
  DeleteCampaign = "personalize:DeleteCampaign",

  /**
   * Write - Grants permission to delete a dataset
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.dataset `PersonalizeResource.dataset`} 
   */
  DeleteDataset = "personalize:DeleteDataset",

  /**
   * Write - Grants permission to delete a dataset group
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.datasetGroup `PersonalizeResource.datasetGroup`} 
   */
  DeleteDatasetGroup = "personalize:DeleteDatasetGroup",

  /**
   * Write - Grants permission to delete an event tracker
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.eventTracker `PersonalizeResource.eventTracker`} 
   */
  DeleteEventTracker = "personalize:DeleteEventTracker",

  /**
   * Write - Grants permission to delete a filter
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.filter `PersonalizeResource.filter`} 
   */
  DeleteFilter = "personalize:DeleteFilter",

  /**
   * Write - Grants permission to delete a recommender
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.recommender `PersonalizeResource.recommender`} 
   */
  DeleteRecommender = "personalize:DeleteRecommender",

  /**
   * Write - Grants permission to delete a schema
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.schema `PersonalizeResource.schema`} 
   */
  DeleteSchema = "personalize:DeleteSchema",

  /**
   * Write - Grants permission to delete a solution including all versions of the solution
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.solution `PersonalizeResource.solution`} 
   */
  DeleteSolution = "personalize:DeleteSolution",

  /**
   * Read - Grants permission to describe an algorithm
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeAlgorithm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.algorithm `PersonalizeResource.algorithm`} 
   */
  DescribeAlgorithm = "personalize:DescribeAlgorithm",

  /**
   * Read - Grants permission to describe a batch inference job
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeBatchInferenceJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.batchInferenceJob `PersonalizeResource.batchInferenceJob`} 
   */
  DescribeBatchInferenceJob = "personalize:DescribeBatchInferenceJob",

  /**
   * Read - Grants permission to describe a batch segment job
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeBatchSegmentJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.batchSegmentJob `PersonalizeResource.batchSegmentJob`} 
   */
  DescribeBatchSegmentJob = "personalize:DescribeBatchSegmentJob",

  /**
   * Read - Grants permission to describe a campaign
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeCampaign.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.campaign `PersonalizeResource.campaign`} 
   */
  DescribeCampaign = "personalize:DescribeCampaign",

  /**
   * Read - Grants permission to describe a dataset
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.dataset `PersonalizeResource.dataset`} 
   */
  DescribeDataset = "personalize:DescribeDataset",

  /**
   * Read - Grants permission to describe a dataset export job
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.datasetExportJob `PersonalizeResource.datasetExportJob`} 
   */
  DescribeDatasetExportJob = "personalize:DescribeDatasetExportJob",

  /**
   * Read - Grants permission to describe a dataset group
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.datasetGroup `PersonalizeResource.datasetGroup`} 
   */
  DescribeDatasetGroup = "personalize:DescribeDatasetGroup",

  /**
   * Read - Grants permission to describe a dataset import job
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.datasetImportJob `PersonalizeResource.datasetImportJob`} 
   */
  DescribeDatasetImportJob = "personalize:DescribeDatasetImportJob",

  /**
   * Read - Grants permission to describe an event tracker
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.eventTracker `PersonalizeResource.eventTracker`} 
   */
  DescribeEventTracker = "personalize:DescribeEventTracker",

  /**
   * Read - Grants permission to describe a feature transformation
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeFeatureTransformation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.featureTransformation `PersonalizeResource.featureTransformation`} 
   */
  DescribeFeatureTransformation = "personalize:DescribeFeatureTransformation",

  /**
   * Read - Grants permission to describe a filter
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.filter `PersonalizeResource.filter`} 
   */
  DescribeFilter = "personalize:DescribeFilter",

  /**
   * Read - Grants permission to describe a recipe
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.recipe `PersonalizeResource.recipe`} 
   */
  DescribeRecipe = "personalize:DescribeRecipe",

  /**
   * Read - Grants permission to describe a recommender
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.recommender `PersonalizeResource.recommender`} 
   */
  DescribeRecommender = "personalize:DescribeRecommender",

  /**
   * Read - Grants permission to describe a schema
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.schema `PersonalizeResource.schema`} 
   */
  DescribeSchema = "personalize:DescribeSchema",

  /**
   * Read - Grants permission to describe a solution
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.solution `PersonalizeResource.solution`} 
   */
  DescribeSolution = "personalize:DescribeSolution",

  /**
   * Read - Grants permission to describe a version of a solution
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.solution `PersonalizeResource.solution`} 
   */
  DescribeSolutionVersion = "personalize:DescribeSolutionVersion",

  /**
   * Read - Grants permission to get a re-ranked list of recommendations
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.campaign `PersonalizeResource.campaign`} 
   */
  GetPersonalizedRanking = "personalize:GetPersonalizedRanking",

  /**
   * Read - Grants permission to get a list of recommendations from a campaign
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.campaign `PersonalizeResource.campaign`} 
   */
  GetRecommendations = "personalize:GetRecommendations",

  /**
   * Read - Grants permission to get metrics for a solution version
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_GetSolutionMetrics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.solution `PersonalizeResource.solution`} 
   */
  GetSolutionMetrics = "personalize:GetSolutionMetrics",

  /**
   * List - Grants permission to list batch inference jobs
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchInferenceJobs.html
   */
  ListBatchInferenceJobs = "personalize:ListBatchInferenceJobs",

  /**
   * List - Grants permission to list batch segment jobs
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListBatchSegmentJobs.html
   */
  ListBatchSegmentJobs = "personalize:ListBatchSegmentJobs",

  /**
   * List - Grants permission to list campaigns
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListCampaigns.html
   */
  ListCampaigns = "personalize:ListCampaigns",

  /**
   * List - Grants permission to list dataset export jobs
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetExportJobs.html
   */
  ListDatasetExportJobs = "personalize:ListDatasetExportJobs",

  /**
   * List - Grants permission to list dataset groups
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html
   */
  ListDatasetGroups = "personalize:ListDatasetGroups",

  /**
   * List - Grants permission to list dataset import jobs
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetImportJobs.html
   */
  ListDatasetImportJobs = "personalize:ListDatasetImportJobs",

  /**
   * List - Grants permission to list datasets
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html
   */
  ListDatasets = "personalize:ListDatasets",

  /**
   * List - Grants permission to list event trackers
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html
   */
  ListEventTrackers = "personalize:ListEventTrackers",

  /**
   * List - Grants permission to list filters
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListFilters.html
   */
  ListFilters = "personalize:ListFilters",

  /**
   * List - Grants permission to list recipes
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecipes.html
   */
  ListRecipes = "personalize:ListRecipes",

  /**
   * List - Grants permission to list recommenders
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html
   */
  ListRecommenders = "personalize:ListRecommenders",

  /**
   * List - Grants permission to list schemas
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html
   */
  ListSchemas = "personalize:ListSchemas",

  /**
   * List - Grants permission to list versions of a solution
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html
   */
  ListSolutionVersions = "personalize:ListSolutionVersions",

  /**
   * List - Grants permission to list solutions
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html
   */
  ListSolutions = "personalize:ListSolutions",

  /**
   * Write - Grants permission to put real time event data
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.eventTracker `PersonalizeResource.eventTracker`} 
   */
  PutEvents = "personalize:PutEvents",

  /**
   * Write - Grants permission to ingest Items data
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutItems.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.dataset `PersonalizeResource.dataset`} 
   */
  PutItems = "personalize:PutItems",

  /**
   * Write - Grants permission to ingest Users data
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutUsers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.dataset `PersonalizeResource.dataset`} 
   */
  PutUsers = "personalize:PutUsers",

  /**
   * Write - Grants permission to start a recommender
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_StartRecommender.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.recommender `PersonalizeResource.recommender`} 
   */
  StartRecommender = "personalize:StartRecommender",

  /**
   * Write - Grants permission to stop a recommender
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_StopRecommender.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.recommender `PersonalizeResource.recommender`} 
   */
  StopRecommender = "personalize:StopRecommender",

  /**
   * Write - Grants permission to stop a solution version creation
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_StopSolutionVersionCreation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.solution `PersonalizeResource.solution`} 
   */
  StopSolutionVersionCreation = "personalize:StopSolutionVersionCreation",

  /**
   * Write - Grants permission to update a campaign
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateCampaign.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.campaign `PersonalizeResource.campaign`} 
   */
  UpdateCampaign = "personalize:UpdateCampaign",

  /**
   * Write - Grants permission to update a recommender
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.recommender `PersonalizeResource.recommender`} 
   */
  UpdateRecommender = "personalize:UpdateRecommender",

  /**
   * * - Grant all personalize permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpersonalize.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PersonalizeResource.batchInferenceJob `PersonalizeResource.batchInferenceJob`} 
   * - {@link PersonalizeResource.batchSegmentJob `PersonalizeResource.batchSegmentJob`} 
   * - {@link PersonalizeResource.campaign `PersonalizeResource.campaign`} 
   * - {@link PersonalizeResource.dataset `PersonalizeResource.dataset`} 
   * - {@link PersonalizeResource.datasetExportJob `PersonalizeResource.datasetExportJob`} 
   * - {@link PersonalizeResource.datasetGroup `PersonalizeResource.datasetGroup`} 
   * - {@link PersonalizeResource.datasetImportJob `PersonalizeResource.datasetImportJob`} 
   * - {@link PersonalizeResource.eventTracker `PersonalizeResource.eventTracker`} 
   * - {@link PersonalizeResource.filter `PersonalizeResource.filter`} 
   * - {@link PersonalizeResource.recommender `PersonalizeResource.recommender`} 
   * - {@link PersonalizeResource.schema `PersonalizeResource.schema`} 
   * - {@link PersonalizeResource.solution `PersonalizeResource.solution`} 
   * - {@link PersonalizeResource.algorithm `PersonalizeResource.algorithm`} 
   * - {@link PersonalizeResource.featureTransformation `PersonalizeResource.featureTransformation`} 
   * - {@link PersonalizeResource.recipe `PersonalizeResource.recipe`} 
   */
  All = "personalize:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpersonalize.html
 */
export const PersonalizeResource = {

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/how-it-works-dataset-schema.html#schema-examples
   */
  schema: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:schema/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_FeatureTransformation.html
   */
  featureTransformation: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:feature-transformation/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_Dataset.html
   */
  dataset: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:dataset/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DatasetGroup.html
   */
  datasetGroup: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:dataset-group/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DatasetImportJob.html
   */
  datasetImportJob: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:dataset-import-job/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_DatasetExportJob.html
   */
  datasetExportJob: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:dataset-export-job/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_Solution.html
   */
  solution: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:solution/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_Campaign.html
   */
  campaign: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:campaign/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_EventTracker.html
   */
  eventTracker: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:event-tracker/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_Recipe.html
   */
  recipe: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:recipe/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_Algorithm.html
   */
  algorithm: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:algorithm/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_BatchInferenceJob.html
   */
  batchInferenceJob: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:batch-inference-job/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_Filter.html
   */
  filter: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:filter/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_Recommender.html
   */
  recommender: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:recommender/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/personalize/latest/dg/API_BatchSegmentJob.html
   */
  batchSegmentJob: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:personalize:${options.region || '*'}:${options.account || '*'}:batch-segment-job/${options.resourceId || '*'}`,
}

