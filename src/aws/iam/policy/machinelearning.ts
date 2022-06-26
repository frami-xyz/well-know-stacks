/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmachinelearning.html
 */
export enum MachinelearningAction {

  /**
   * Tagging - Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_AddTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.batchprediction `MachinelearningResource.batchprediction`} 
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   * - {@link MachinelearningResource.evaluation `MachinelearningResource.evaluation`} 
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  AddTags = "machinelearning:AddTags",

  /**
   * Write - Generates predictions for a group of observations
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateBatchPrediction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.batchprediction `MachinelearningResource.batchprediction`} 
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  CreateBatchPrediction = "machinelearning:CreateBatchPrediction",

  /**
   * Write - Creates a DataSource object from an Amazon RDS
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromRDS.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   */
  CreateDataSourceFromRDS = "machinelearning:CreateDataSourceFromRDS",

  /**
   * Write - Creates a DataSource from a database hosted on an Amazon Redshift cluster
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromRedshift.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   */
  CreateDataSourceFromRedshift = "machinelearning:CreateDataSourceFromRedshift",

  /**
   * Write - Creates a DataSource object from S3
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromS3.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   */
  CreateDataSourceFromS3 = "machinelearning:CreateDataSourceFromS3",

  /**
   * Write - Creates a new Evaluation of an MLModel
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateEvaluation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   * - {@link MachinelearningResource.evaluation `MachinelearningResource.evaluation`} 
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  CreateEvaluation = "machinelearning:CreateEvaluation",

  /**
   * Write - Creates a new MLModel
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateMLModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  CreateMLModel = "machinelearning:CreateMLModel",

  /**
   * Write - Creates a real-time endpoint for the MLModel
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateRealtimeEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  CreateRealtimeEndpoint = "machinelearning:CreateRealtimeEndpoint",

  /**
   * Write - Assigns the DELETED status to a BatchPrediction, rendering it unusable
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteBatchPrediction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.batchprediction `MachinelearningResource.batchprediction`} 
   */
  DeleteBatchPrediction = "machinelearning:DeleteBatchPrediction",

  /**
   * Write - Assigns the DELETED status to a DataSource, rendering it unusable
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   */
  DeleteDataSource = "machinelearning:DeleteDataSource",

  /**
   * Write - Assigns the DELETED status to an Evaluation, rendering it unusable
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteEvaluation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.evaluation `MachinelearningResource.evaluation`} 
   */
  DeleteEvaluation = "machinelearning:DeleteEvaluation",

  /**
   * Write - Assigns the DELETED status to an MLModel, rendering it unusable
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteMLModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  DeleteMLModel = "machinelearning:DeleteMLModel",

  /**
   * Write - Deletes a real time endpoint of an MLModel
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteRealtimeEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  DeleteRealtimeEndpoint = "machinelearning:DeleteRealtimeEndpoint",

  /**
   * Tagging - Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.batchprediction `MachinelearningResource.batchprediction`} 
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   * - {@link MachinelearningResource.evaluation `MachinelearningResource.evaluation`} 
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  DeleteTags = "machinelearning:DeleteTags",

  /**
   * List - Returns a list of BatchPrediction operations that match the search criteria in the request
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeBatchPredictions.html
   */
  DescribeBatchPredictions = "machinelearning:DescribeBatchPredictions",

  /**
   * List - Returns a list of DataSource that match the search criteria in the request
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeDataSources.html
   */
  DescribeDataSources = "machinelearning:DescribeDataSources",

  /**
   * List - Returns a list of DescribeEvaluations that match the search criteria in the request
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeEvaluations.html
   */
  DescribeEvaluations = "machinelearning:DescribeEvaluations",

  /**
   * List - Returns a list of MLModel that match the search criteria in the request
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeMLModels.html
   */
  DescribeMLModels = "machinelearning:DescribeMLModels",

  /**
   * List - Describes one or more of the tags for your Amazon ML object
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.batchprediction `MachinelearningResource.batchprediction`} 
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   * - {@link MachinelearningResource.evaluation `MachinelearningResource.evaluation`} 
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  DescribeTags = "machinelearning:DescribeTags",

  /**
   * Read - Returns a BatchPrediction that includes detailed metadata, status, and data file information
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetBatchPrediction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.batchprediction `MachinelearningResource.batchprediction`} 
   */
  GetBatchPrediction = "machinelearning:GetBatchPrediction",

  /**
   * Read - Returns a DataSource that includes metadata and data file information, as well as the current status of the DataSource
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   */
  GetDataSource = "machinelearning:GetDataSource",

  /**
   * Read - Returns an Evaluation that includes metadata as well as the current status of the Evaluation
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetEvaluation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   */
  GetEvaluation = "machinelearning:GetEvaluation",

  /**
   * Read - Returns an MLModel that includes detailed metadata, and data source information as well as the current status of the MLModel
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetMLModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  GetMLModel = "machinelearning:GetMLModel",

  /**
   * Write - Generates a prediction for the observation using the specified ML Model
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_Predict.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  Predict = "machinelearning:Predict",

  /**
   * Write - Updates the BatchPredictionName of a BatchPrediction
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateBatchPrediction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.batchprediction `MachinelearningResource.batchprediction`} 
   */
  UpdateBatchPrediction = "machinelearning:UpdateBatchPrediction",

  /**
   * Write - Updates the DataSourceName of a DataSource
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   */
  UpdateDataSource = "machinelearning:UpdateDataSource",

  /**
   * Write - Updates the EvaluationName of an Evaluation
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateEvaluation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.evaluation `MachinelearningResource.evaluation`} 
   */
  UpdateEvaluation = "machinelearning:UpdateEvaluation",

  /**
   * Write - Updates the MLModelName and the ScoreThreshold of an MLModel
   * @see https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateMLModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  UpdateMLModel = "machinelearning:UpdateMLModel",

  /**
   * * - Grant all machinelearning permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmachinelearning.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MachinelearningResource.batchprediction `MachinelearningResource.batchprediction`} 
   * - {@link MachinelearningResource.datasource `MachinelearningResource.datasource`} 
   * - {@link MachinelearningResource.evaluation `MachinelearningResource.evaluation`} 
   * - {@link MachinelearningResource.mlmodel `MachinelearningResource.mlmodel`} 
   */
  All = "machinelearning:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmachinelearning.html
 */
export const MachinelearningResource = {

  /**
   * @see https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#batch-predictions
   */
  batchprediction: (options: Partial<{partition: string, region: string, account: string, batchPredictionId: string}> = {}) => `arn:${options.partition || '*'}:machinelearning:${options.region || '*'}:${options.account || '*'}:batchprediction/${options.batchPredictionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#datasources
   */
  datasource: (options: Partial<{partition: string, region: string, account: string, datasourceId: string}> = {}) => `arn:${options.partition || '*'}:machinelearning:${options.region || '*'}:${options.account || '*'}:datasource/${options.datasourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#evaluations
   */
  evaluation: (options: Partial<{partition: string, region: string, account: string, evaluationId: string}> = {}) => `arn:${options.partition || '*'}:machinelearning:${options.region || '*'}:${options.account || '*'}:evaluation/${options.evaluationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#ml-models
   */
  mlmodel: (options: Partial<{partition: string, region: string, account: string, mlModelId: string}> = {}) => `arn:${options.partition || '*'}:machinelearning:${options.region || '*'}:${options.account || '*'}:mlmodel/${options.mlModelId || '*'}`,
}

