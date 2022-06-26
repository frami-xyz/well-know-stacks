/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonforecast.html
 */
export enum ForecastAction {

  /**
   * Write - Grants permission to create an auto predictor
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateAutoPredictor.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAutoPredictor = "forecast:CreateAutoPredictor",

  /**
   * Write - Grants permission to create a dataset
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.dataset `ForecastResource.dataset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataset = "forecast:CreateDataset",

  /**
   * Write - Grants permission to create a dataset group
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.datasetGroup `ForecastResource.datasetGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDatasetGroup = "forecast:CreateDatasetGroup",

  /**
   * Write - Grants permission to create a dataset import job
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.datasetImportJob `ForecastResource.datasetImportJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDatasetImportJob = "forecast:CreateDatasetImportJob",

  /**
   * Write - Grants permission to create an explainability
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainability.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.forecast `ForecastResource.forecast`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateExplainability = "forecast:CreateExplainability",

  /**
   * Write - Grants permission to create an explainability export using an explainability resource
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainabilityExport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.explainability `ForecastResource.explainability`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateExplainabilityExport = "forecast:CreateExplainabilityExport",

  /**
   * Write - Grants permission to create a forecast
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateForecast = "forecast:CreateForecast",

  /**
   * Write - Grants permission to create a forecast export job using a forecast resource
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecastExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.forecast `ForecastResource.forecast`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateForecastExportJob = "forecast:CreateForecastExportJob",

  /**
   * Write - Grants permission to create a predictor
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.datasetGroup `ForecastResource.datasetGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePredictor = "forecast:CreatePredictor",

  /**
   * Write - Grants permission to create a predictor backtest export job using a predictor
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictorBacktestExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePredictorBacktestExportJob = "forecast:CreatePredictorBacktestExportJob",

  /**
   * Write - Grants permission to delete a dataset
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.dataset `ForecastResource.dataset`} 
   */
  DeleteDataset = "forecast:DeleteDataset",

  /**
   * Write - Grants permission to delete a dataset group
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDatasetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.datasetGroup `ForecastResource.datasetGroup`} 
   */
  DeleteDatasetGroup = "forecast:DeleteDatasetGroup",

  /**
   * Write - Grants permission to delete a dataset import job
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteDatasetImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.datasetImportJob `ForecastResource.datasetImportJob`} 
   */
  DeleteDatasetImportJob = "forecast:DeleteDatasetImportJob",

  /**
   * Write - Grants permission to delete an explainability
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteExplainability.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.explainability `ForecastResource.explainability`} 
   */
  DeleteExplainability = "forecast:DeleteExplainability",

  /**
   * Write - Grants permission to delete an explainability export
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteExplainabilityExport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.explainabilityExport `ForecastResource.explainabilityExport`} 
   */
  DeleteExplainabilityExport = "forecast:DeleteExplainabilityExport",

  /**
   * Write - Grants permission to delete a forecast
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteForecast.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.forecast `ForecastResource.forecast`} 
   */
  DeleteForecast = "forecast:DeleteForecast",

  /**
   * Write - Grants permission to delete a forecast export job
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteForecastExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.forecastExport `ForecastResource.forecastExport`} 
   */
  DeleteForecastExportJob = "forecast:DeleteForecastExportJob",

  /**
   * Write - Grants permission to delete a predictor
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DeletePredictor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   */
  DeletePredictor = "forecast:DeletePredictor",

  /**
   * Write - Grants permission to delete a predictor backtest export job
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DeletePredictorBacktestExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.predictorBacktestExportJob `ForecastResource.predictorBacktestExportJob`} 
   */
  DeletePredictorBacktestExportJob = "forecast:DeletePredictorBacktestExportJob",

  /**
   * Write - Grants permission to delete a resource and its child resources
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DeleteResourceTree.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.dataset `ForecastResource.dataset`} 
   * - {@link ForecastResource.datasetGroup `ForecastResource.datasetGroup`} 
   * - {@link ForecastResource.datasetImportJob `ForecastResource.datasetImportJob`} 
   * - {@link ForecastResource.explainability `ForecastResource.explainability`} 
   * - {@link ForecastResource.explainabilityExport `ForecastResource.explainabilityExport`} 
   * - {@link ForecastResource.forecast `ForecastResource.forecast`} 
   * - {@link ForecastResource.forecastExport `ForecastResource.forecastExport`} 
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   * - {@link ForecastResource.predictorBacktestExportJob `ForecastResource.predictorBacktestExportJob`} 
   */
  DeleteResourceTree = "forecast:DeleteResourceTree",

  /**
   * Read - Grants permission to describe an auto predictor
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeAutoPredictor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   */
  DescribeAutoPredictor = "forecast:DescribeAutoPredictor",

  /**
   * Read - Grants permission to describe a dataset
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.dataset `ForecastResource.dataset`} 
   */
  DescribeDataset = "forecast:DescribeDataset",

  /**
   * Read - Grants permission to describe a dataset group
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.datasetGroup `ForecastResource.datasetGroup`} 
   */
  DescribeDatasetGroup = "forecast:DescribeDatasetGroup",

  /**
   * Read - Grants permission to describe a dataset import job
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.datasetImportJob `ForecastResource.datasetImportJob`} 
   */
  DescribeDatasetImportJob = "forecast:DescribeDatasetImportJob",

  /**
   * Read - Grants permission to describe an explainability
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeExplainability.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.explainability `ForecastResource.explainability`} 
   */
  DescribeExplainability = "forecast:DescribeExplainability",

  /**
   * Read - Grants permission to describe an explainability export
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeExplainabilityExport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.explainabilityExport `ForecastResource.explainabilityExport`} 
   */
  DescribeExplainabilityExport = "forecast:DescribeExplainabilityExport",

  /**
   * Read - Grants permission to describe a forecast
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeForecast.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.forecast `ForecastResource.forecast`} 
   */
  DescribeForecast = "forecast:DescribeForecast",

  /**
   * Read - Grants permission to describe a forecast export job
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeForecastExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.forecastExport `ForecastResource.forecastExport`} 
   */
  DescribeForecastExportJob = "forecast:DescribeForecastExportJob",

  /**
   * Read - Grants permission to describe a predictor
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DescribePredictor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   */
  DescribePredictor = "forecast:DescribePredictor",

  /**
   * Read - Grants permission to describe a predictor backtest export job
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_DescribePredictorBacktestExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.predictorBacktestExportJob `ForecastResource.predictorBacktestExportJob`} 
   */
  DescribePredictorBacktestExportJob = "forecast:DescribePredictorBacktestExportJob",

  /**
   * Read - Grants permission to get the Accuracy Metrics for a predictor
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_GetAccuracyMetrics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   */
  GetAccuracyMetrics = "forecast:GetAccuracyMetrics",

  /**
   * Read - Grants permission to list all the dataset groups
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html
   */
  ListDatasetGroups = "forecast:ListDatasetGroups",

  /**
   * Read - Grants permission to list all the dataset import jobs
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html
   */
  ListDatasetImportJobs = "forecast:ListDatasetImportJobs",

  /**
   * Read - Grants permission to list all the datasets
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html
   */
  ListDatasets = "forecast:ListDatasets",

  /**
   * Read - Grants permission to list all the explainabilities
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_ListExplainabilities.html
   */
  ListExplainabilities = "forecast:ListExplainabilities",

  /**
   * Read - Grants permission to list all the explainability exports
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_ListExplainabilityExports.html
   */
  ListExplainabilityExports = "forecast:ListExplainabilityExports",

  /**
   * Read - Grants permission to list all the forecast export jobs
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_ListForecastExportJobs.html
   */
  ListForecastExportJobs = "forecast:ListForecastExportJobs",

  /**
   * Read - Grants permission to list all the forecasts
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_ListForecasts.html
   */
  ListForecasts = "forecast:ListForecasts",

  /**
   * Read - Grants permission to list all the predictor backtest export jobs
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_ListPredictorBacktestExportJobs.html
   */
  ListPredictorBacktestExportJobs = "forecast:ListPredictorBacktestExportJobs",

  /**
   * Read - Grants permission to list all the predictors
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_ListPredictors.html
   */
  ListPredictors = "forecast:ListPredictors",

  /**
   * Read - Grants permission to list the tags for an Amazon Forecast resource
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.dataset `ForecastResource.dataset`} 
   * - {@link ForecastResource.datasetGroup `ForecastResource.datasetGroup`} 
   * - {@link ForecastResource.datasetImportJob `ForecastResource.datasetImportJob`} 
   * - {@link ForecastResource.explainability `ForecastResource.explainability`} 
   * - {@link ForecastResource.explainabilityExport `ForecastResource.explainabilityExport`} 
   * - {@link ForecastResource.forecast `ForecastResource.forecast`} 
   * - {@link ForecastResource.forecastExport `ForecastResource.forecastExport`} 
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   * - {@link ForecastResource.predictorBacktestExportJob `ForecastResource.predictorBacktestExportJob`} 
   */
  ListTagsForResource = "forecast:ListTagsForResource",

  /**
   * Read - Grants permission to retrieve a forecast for a single item
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_forecastquery_QueryForecast.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.forecast `ForecastResource.forecast`} 
   */
  QueryForecast = "forecast:QueryForecast",

  /**
   * Write - Grants permission to stop Amazon Forecast resource jobs
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_StopResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.datasetImportJob `ForecastResource.datasetImportJob`} 
   * - {@link ForecastResource.explainability `ForecastResource.explainability`} 
   * - {@link ForecastResource.explainabilityExport `ForecastResource.explainabilityExport`} 
   * - {@link ForecastResource.forecast `ForecastResource.forecast`} 
   * - {@link ForecastResource.forecastExport `ForecastResource.forecastExport`} 
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   * - {@link ForecastResource.predictorBacktestExportJob `ForecastResource.predictorBacktestExportJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StopResource = "forecast:StopResource",

  /**
   * Tagging - Grants permission to associate the specified tags to a resource
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.dataset `ForecastResource.dataset`} 
   * - {@link ForecastResource.datasetGroup `ForecastResource.datasetGroup`} 
   * - {@link ForecastResource.datasetImportJob `ForecastResource.datasetImportJob`} 
   * - {@link ForecastResource.explainability `ForecastResource.explainability`} 
   * - {@link ForecastResource.explainabilityExport `ForecastResource.explainabilityExport`} 
   * - {@link ForecastResource.forecast `ForecastResource.forecast`} 
   * - {@link ForecastResource.forecastExport `ForecastResource.forecastExport`} 
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   * - {@link ForecastResource.predictorBacktestExportJob `ForecastResource.predictorBacktestExportJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "forecast:TagResource",

  /**
   * Tagging - Grants permission to delete the specified tags for a resource
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.dataset `ForecastResource.dataset`} 
   * - {@link ForecastResource.datasetGroup `ForecastResource.datasetGroup`} 
   * - {@link ForecastResource.datasetImportJob `ForecastResource.datasetImportJob`} 
   * - {@link ForecastResource.explainability `ForecastResource.explainability`} 
   * - {@link ForecastResource.explainabilityExport `ForecastResource.explainabilityExport`} 
   * - {@link ForecastResource.forecast `ForecastResource.forecast`} 
   * - {@link ForecastResource.forecastExport `ForecastResource.forecastExport`} 
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   * - {@link ForecastResource.predictorBacktestExportJob `ForecastResource.predictorBacktestExportJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "forecast:UntagResource",

  /**
   * Write - Grants permission to update a dataset group
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.dataset `ForecastResource.dataset`} 
   * - {@link ForecastResource.datasetGroup `ForecastResource.datasetGroup`} 
   */
  UpdateDatasetGroup = "forecast:UpdateDatasetGroup",

  /**
   * * - Grant all forecast permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonforecast.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ForecastResource.dataset `ForecastResource.dataset`} 
   * - {@link ForecastResource.datasetGroup `ForecastResource.datasetGroup`} 
   * - {@link ForecastResource.datasetImportJob `ForecastResource.datasetImportJob`} 
   * - {@link ForecastResource.forecast `ForecastResource.forecast`} 
   * - {@link ForecastResource.explainability `ForecastResource.explainability`} 
   * - {@link ForecastResource.predictor `ForecastResource.predictor`} 
   * - {@link ForecastResource.explainabilityExport `ForecastResource.explainabilityExport`} 
   * - {@link ForecastResource.forecastExport `ForecastResource.forecastExport`} 
   * - {@link ForecastResource.predictorBacktestExportJob `ForecastResource.predictorBacktestExportJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "forecast:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonforecast.html
 */
export const ForecastResource = {

  /**
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataset: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:forecast:${options.region || '*'}:${options.account || '*'}:dataset/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  datasetGroup: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:forecast:${options.region || '*'}:${options.account || '*'}:dataset-group/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  datasetImportJob: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:forecast:${options.region || '*'}:${options.account || '*'}:dataset-import-job/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-choosing-recipes.html
   */
  algorithm: (options: Partial<{partition: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:forecast:::algorithm/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictor.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  predictor: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:forecast:${options.region || '*'}:${options.account || '*'}:predictor/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreatePredictorBacktestExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  predictorBacktestExportJob: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:forecast:${options.region || '*'}:${options.account || '*'}:predictor-backtest-export-job/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  forecast: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:forecast:${options.region || '*'}:${options.account || '*'}:forecast/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecastExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  forecastExport: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:forecast:${options.region || '*'}:${options.account || '*'}:forecast-export-job/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainability.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  explainability: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:forecast:${options.region || '*'}:${options.account || '*'}:explainability/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/forecast/latest/dg/API_CreateExplainabilityExport.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  explainabilityExport: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:forecast:${options.region || '*'}:${options.account || '*'}:explainability-export/${options.resourceId || '*'}`,
}

