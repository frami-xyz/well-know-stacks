/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html
 */
export enum FrauddetectorAction {

  /**
   * Write - Grants permission to create a batch of variables
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchCreateVariable.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  BatchCreateVariable = "frauddetector:BatchCreateVariable",

  /**
   * List - Grants permission to get a batch of variables
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_BatchGetVariable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.variable `FrauddetectorResource.variable`} 
   */
  BatchGetVariable = "frauddetector:BatchGetVariable",

  /**
   * Write - Grants permission to cancel the specified batch import job
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_CancelBatchImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.batchImport `FrauddetectorResource.batchImport`} 
   */
  CancelBatchImportJob = "frauddetector:CancelBatchImportJob",

  /**
   * Write - Grants permission to cancel the specified batch prediction job
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_CancelBatchPredictionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.batchPrediction `FrauddetectorResource.batchPrediction`} 
   */
  CancelBatchPredictionJob = "frauddetector:CancelBatchPredictionJob",

  /**
   * Write - Grants permission to create a batch import job
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateBatchImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.batchImport `FrauddetectorResource.batchImport`} 
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateBatchImportJob = "frauddetector:CreateBatchImportJob",

  /**
   * Write - Grants permission to create a batch prediction job
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateBatchPredictionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.batchPrediction `FrauddetectorResource.batchPrediction`} 
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateBatchPredictionJob = "frauddetector:CreateBatchPredictionJob",

  /**
   * Write - Grants permission to create a detector version. The detector version starts in a DRAFT status
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateDetectorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * - {@link FrauddetectorResource.externalModel `FrauddetectorResource.externalModel`} 
   * - {@link FrauddetectorResource.modelVersion `FrauddetectorResource.modelVersion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDetectorVersion = "frauddetector:CreateDetectorVersion",

  /**
   * Write - Grants permission to create a model using the specified model type
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * - {@link FrauddetectorResource.model `FrauddetectorResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateModel = "frauddetector:CreateModel",

  /**
   * Write - Grants permission to create a version of the model using the specified model type and model id
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateModelVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.model `FrauddetectorResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateModelVersion = "frauddetector:CreateModelVersion",

  /**
   * Write - Grants permission to create a rule for use with the specified detector
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRule = "frauddetector:CreateRule",

  /**
   * Write - Grants permission to create a variable
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_CreateVariable.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateVariable = "frauddetector:CreateVariable",

  /**
   * Write - Grants permission to delete a batch import job
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteBatchImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.batchImport `FrauddetectorResource.batchImport`} 
   */
  DeleteBatchImportJob = "frauddetector:DeleteBatchImportJob",

  /**
   * Write - Grants permission to delete a batch prediction job
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteBatchPredictionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.batchPrediction `FrauddetectorResource.batchPrediction`} 
   */
  DeleteBatchPredictionJob = "frauddetector:DeleteBatchPredictionJob",

  /**
   * Write - Grants permission to delete the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   */
  DeleteDetector = "frauddetector:DeleteDetector",

  /**
   * Write - Grants permission to delete the detector version. You cannot delete detector versions that are in ACTIVE status
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteDetectorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   */
  DeleteDetectorVersion = "frauddetector:DeleteDetectorVersion",

  /**
   * Write - Grants permission to delete an entity type. You cannot delete an entity type that is included in an event type
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEntityType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.entityType `FrauddetectorResource.entityType`} 
   */
  DeleteEntityType = "frauddetector:DeleteEntityType",

  /**
   * Write - Grants permission to deletes the specified event
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEvent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   */
  DeleteEvent = "frauddetector:DeleteEvent",

  /**
   * Write - Grants permission to delete an event type. You cannot delete an event type that is used in a detector or a model
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEventType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   */
  DeleteEventType = "frauddetector:DeleteEventType",

  /**
   * Write - Grants permission to delete events for the specified event type
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteEventsByEventType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   */
  DeleteEventsByEventType = "frauddetector:DeleteEventsByEventType",

  /**
   * Write - Grants permission to remove a SageMaker model from Amazon Fraud Detector. You can remove an Amazon SageMaker model if it is not associated with a detector version
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteExternalModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.externalModel `FrauddetectorResource.externalModel`} 
   */
  DeleteExternalModel = "frauddetector:DeleteExternalModel",

  /**
   * Write - Grants permission to delete a label. You cannot delete labels that are included in an event type in Amazon Fraud Detector. You cannot delete a label assigned to an event ID. You must first delete the relevant event ID
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteLabel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.label `FrauddetectorResource.label`} 
   */
  DeleteLabel = "frauddetector:DeleteLabel",

  /**
   * Write - Grants permission to delete a model. You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.model `FrauddetectorResource.model`} 
   */
  DeleteModel = "frauddetector:DeleteModel",

  /**
   * Write - Grants permission to delete a model version. You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteModelVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.modelVersion `FrauddetectorResource.modelVersion`} 
   */
  DeleteModelVersion = "frauddetector:DeleteModelVersion",

  /**
   * Write - Grants permission to delete an outcome. You cannot delete an outcome that is used in a rule version
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteOutcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.outcome `FrauddetectorResource.outcome`} 
   */
  DeleteOutcome = "frauddetector:DeleteOutcome",

  /**
   * Write - Grants permission to delete the rule. You cannot delete a rule if it is used by an ACTIVE or INACTIVE detector version
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.rule `FrauddetectorResource.rule`} 
   */
  DeleteRule = "frauddetector:DeleteRule",

  /**
   * Write - Grants permission to delete a variable. You cannot delete variables that are included in an event type in Amazon Fraud Detector
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DeleteVariable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.variable `FrauddetectorResource.variable`} 
   */
  DeleteVariable = "frauddetector:DeleteVariable",

  /**
   * Read - Grants permission to get all versions for a specified detector
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   */
  DescribeDetector = "frauddetector:DescribeDetector",

  /**
   * Read - Grants permission to get all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_DescribeModelVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.modelVersion `FrauddetectorResource.modelVersion`} 
   */
  DescribeModelVersions = "frauddetector:DescribeModelVersions",

  /**
   * List - Grants permission to get all batch import jobs or a specific job if you specify a job ID
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetBatchImportJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.batchImport `FrauddetectorResource.batchImport`} 
   */
  GetBatchImportJobs = "frauddetector:GetBatchImportJobs",

  /**
   * List - Grants permission to get all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetBatchPredictionJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.batchPrediction `FrauddetectorResource.batchPrediction`} 
   */
  GetBatchPredictionJobs = "frauddetector:GetBatchPredictionJobs",

  /**
   * Read - Grants permission to get a specific event type DeleteEventsByEventType API execution status
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDeleteEventsByEventTypeStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   */
  GetDeleteEventsByEventTypeStatus = "frauddetector:GetDeleteEventsByEventTypeStatus",

  /**
   * Read - Grants permission to get a particular detector version
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   */
  GetDetectorVersion = "frauddetector:GetDetectorVersion",

  /**
   * List - Grants permission to get all detectors or a single detector if a detectorId is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetDetectorsResponse as part of your request. A null pagination token fetches the records from the beginning
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetDetectors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   */
  GetDetectors = "frauddetector:GetDetectors",

  /**
   * List - Grants permission to get all entity types or a specific entity type if a name is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEntityTypesResponse as part of your request. A null pagination token fetches the records from the beginning
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEntityTypes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.entityType `FrauddetectorResource.entityType`} 
   */
  GetEntityTypes = "frauddetector:GetEntityTypes",

  /**
   * Read - Grants permission to get the details of the specified event
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEvent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   */
  GetEvent = "frauddetector:GetEvent",

  /**
   * Read - Grants permission to evaluate an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventPrediction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   */
  GetEventPrediction = "frauddetector:GetEventPrediction",

  /**
   * Read - Grants permission to get more details of a particular prediction
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventPredictionMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   */
  GetEventPredictionMetadata = "frauddetector:GetEventPredictionMetadata",

  /**
   * List - Grants permission to get all event types or a specific event type if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEventTypesResponse as part of your request. A null pagination token fetches the records from the beginning
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetEventTypes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   */
  GetEventTypes = "frauddetector:GetEventTypes",

  /**
   * List - Grants permission to get the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetExternalModelsResult as part of your request. A null pagination token fetches the records from the beginning
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetExternalModels.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.externalModel `FrauddetectorResource.externalModel`} 
   */
  GetExternalModels = "frauddetector:GetExternalModels",

  /**
   * Read - Grants permission to get the encryption key if a Key Management Service (KMS) customer master key (CMK) has been specified to be used to encrypt content in Amazon Fraud Detector
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetKMSEncryptionKey.html
   */
  GetKMSEncryptionKey = "frauddetector:GetKMSEncryptionKey",

  /**
   * List - Grants permission to get all labels or a specific label if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 10 and 50. To get the next page results, provide the pagination token from the GetGetLabelsResponse as part of your request. A null pagination token fetches the records from the beginning
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetLabels.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.label `FrauddetectorResource.label`} 
   */
  GetLabels = "frauddetector:GetLabels",

  /**
   * Read - Grants permission to get the details of the specified model version
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModelVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.modelVersion `FrauddetectorResource.modelVersion`} 
   */
  GetModelVersion = "frauddetector:GetModelVersion",

  /**
   * List - Grants permission to get one or more models. Gets all models for the AWS account if no model type and no model id provided. Gets all models for the AWS account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetModels.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.model `FrauddetectorResource.model`} 
   */
  GetModels = "frauddetector:GetModels",

  /**
   * List - Grants permission to get one or more outcomes. This is a paginated API. If you provide a null maxResults, this actions retrieves a maximum of 100 records per page. If you provide a maxResults, the value must be between 50 and 100. To get the next page results, provide the pagination token from the GetOutcomesResult as part of your request. A null pagination token fetches the records from the beginning
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetOutcomes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.outcome `FrauddetectorResource.outcome`} 
   */
  GetOutcomes = "frauddetector:GetOutcomes",

  /**
   * List - Grants permission to get all rules for a detector (paginated) if ruleId and ruleVersion are not specified. Gets all rules for the detector and the ruleId if present (paginated). Gets a specific rule if both the ruleId and the ruleVersion are specified
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.rule `FrauddetectorResource.rule`} 
   */
  GetRules = "frauddetector:GetRules",

  /**
   * List - Grants permission to get all of the variables or the specific variable. This is a paginated API. Providing null maxSizePerPage results in retrieving maximum of 100 records per page. If you provide maxSizePerPage the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetVariablesResult as part of your request. Null pagination token fetches the records from the beginning
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_GetVariables.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.variable `FrauddetectorResource.variable`} 
   */
  GetVariables = "frauddetector:GetVariables",

  /**
   * List - Grants permission to get a list of past predictions
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_ListEventPredictions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   */
  ListEventPredictions = "frauddetector:ListEventPredictions",

  /**
   * Read - Grants permission to list all tags associated with the resource. This is a paginated API. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.batchImport `FrauddetectorResource.batchImport`} 
   * - {@link FrauddetectorResource.batchPrediction `FrauddetectorResource.batchPrediction`} 
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   * - {@link FrauddetectorResource.entityType `FrauddetectorResource.entityType`} 
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * - {@link FrauddetectorResource.externalModel `FrauddetectorResource.externalModel`} 
   * - {@link FrauddetectorResource.label `FrauddetectorResource.label`} 
   * - {@link FrauddetectorResource.model `FrauddetectorResource.model`} 
   * - {@link FrauddetectorResource.modelVersion `FrauddetectorResource.modelVersion`} 
   * - {@link FrauddetectorResource.outcome `FrauddetectorResource.outcome`} 
   * - {@link FrauddetectorResource.rule `FrauddetectorResource.rule`} 
   * - {@link FrauddetectorResource.variable `FrauddetectorResource.variable`} 
   */
  ListTagsForResource = "frauddetector:ListTagsForResource",

  /**
   * Write - Grants permission to create or update a detector
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_PutDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutDetector = "frauddetector:PutDetector",

  /**
   * Write - Grants permission to create or update an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_PutEntityType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.entityType `FrauddetectorResource.entityType`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutEntityType = "frauddetector:PutEntityType",

  /**
   * Write - Grants permission to create or update an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_PutEventType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutEventType = "frauddetector:PutEventType",

  /**
   * Write - Grants permission to create or update an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_PutExternalModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * - {@link FrauddetectorResource.externalModel `FrauddetectorResource.externalModel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutExternalModel = "frauddetector:PutExternalModel",

  /**
   * Write - Grants permission to specify the Key Management Service (KMS) customer master key (CMK) to be used to encrypt content in Amazon Fraud Detector
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_PutKMSEncryptionKey.html
   */
  PutKMSEncryptionKey = "frauddetector:PutKMSEncryptionKey",

  /**
   * Write - Grants permission to create or update label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_PutLabel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.label `FrauddetectorResource.label`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutLabel = "frauddetector:PutLabel",

  /**
   * Write - Grants permission to create or update an outcome
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_PutOutcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.outcome `FrauddetectorResource.outcome`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutOutcome = "frauddetector:PutOutcome",

  /**
   * Write - Grants permission to send event
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_SendEvent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  SendEvent = "frauddetector:SendEvent",

  /**
   * Tagging - Grants permission to assign tags to a resource
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.batchImport `FrauddetectorResource.batchImport`} 
   * - {@link FrauddetectorResource.batchPrediction `FrauddetectorResource.batchPrediction`} 
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   * - {@link FrauddetectorResource.entityType `FrauddetectorResource.entityType`} 
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * - {@link FrauddetectorResource.externalModel `FrauddetectorResource.externalModel`} 
   * - {@link FrauddetectorResource.label `FrauddetectorResource.label`} 
   * - {@link FrauddetectorResource.model `FrauddetectorResource.model`} 
   * - {@link FrauddetectorResource.modelVersion `FrauddetectorResource.modelVersion`} 
   * - {@link FrauddetectorResource.outcome `FrauddetectorResource.outcome`} 
   * - {@link FrauddetectorResource.rule `FrauddetectorResource.rule`} 
   * - {@link FrauddetectorResource.variable `FrauddetectorResource.variable`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "frauddetector:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.batchImport `FrauddetectorResource.batchImport`} 
   * - {@link FrauddetectorResource.batchPrediction `FrauddetectorResource.batchPrediction`} 
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   * - {@link FrauddetectorResource.entityType `FrauddetectorResource.entityType`} 
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * - {@link FrauddetectorResource.externalModel `FrauddetectorResource.externalModel`} 
   * - {@link FrauddetectorResource.label `FrauddetectorResource.label`} 
   * - {@link FrauddetectorResource.model `FrauddetectorResource.model`} 
   * - {@link FrauddetectorResource.modelVersion `FrauddetectorResource.modelVersion`} 
   * - {@link FrauddetectorResource.outcome `FrauddetectorResource.outcome`} 
   * - {@link FrauddetectorResource.rule `FrauddetectorResource.rule`} 
   * - {@link FrauddetectorResource.variable `FrauddetectorResource.variable`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "frauddetector:UntagResource",

  /**
   * Write - Grants permission to update a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a DRAFT detector version
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * - {@link FrauddetectorResource.externalModel `FrauddetectorResource.externalModel`} 
   * - {@link FrauddetectorResource.modelVersion `FrauddetectorResource.modelVersion`} 
   */
  UpdateDetectorVersion = "frauddetector:UpdateDetectorVersion",

  /**
   * Write - Grants permission to update the detector version's description. You can update the metadata for any detector version (DRAFT, ACTIVE, or INACTIVE)
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   */
  UpdateDetectorVersionMetadata = "frauddetector:UpdateDetectorVersionMetadata",

  /**
   * Write - Grants permission to update the detector version’s status. You can perform the following promotions or demotions using UpdateDetectorVersionStatus: DRAFT to ACTIVE, ACTIVE to INACTIVE, and INACTIVE to ACTIVE
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateDetectorVersionStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   */
  UpdateDetectorVersionStatus = "frauddetector:UpdateDetectorVersionStatus",

  /**
   * Write - Grants permission to update an existing event record's label value
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateEventLabel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateEventLabel = "frauddetector:UpdateEventLabel",

  /**
   * Write - Grants permission to update a model. You can update the description attribute using this action
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.model `FrauddetectorResource.model`} 
   */
  UpdateModel = "frauddetector:UpdateModel",

  /**
   * Write - Grants permission to update a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.model `FrauddetectorResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateModelVersion = "frauddetector:UpdateModelVersion",

  /**
   * Write - Grants permission to update the status of a model version
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateModelVersionStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.modelVersion `FrauddetectorResource.modelVersion`} 
   */
  UpdateModelVersionStatus = "frauddetector:UpdateModelVersionStatus",

  /**
   * Write - Grants permission to update a rule's metadata. The description attribute can be updated
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.rule `FrauddetectorResource.rule`} 
   */
  UpdateRuleMetadata = "frauddetector:UpdateRuleMetadata",

  /**
   * Write - Grants permission to update a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...)
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateRuleVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.rule `FrauddetectorResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateRuleVersion = "frauddetector:UpdateRuleVersion",

  /**
   * Write - Grants permission to update a variable
   * @see https://docs.aws.amazon.com/frauddetector/latest/api/API_UpdateVariable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.variable `FrauddetectorResource.variable`} 
   */
  UpdateVariable = "frauddetector:UpdateVariable",

  /**
   * * - Grant all frauddetector permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FrauddetectorResource.variable `FrauddetectorResource.variable`} 
   * - {@link FrauddetectorResource.batchImport `FrauddetectorResource.batchImport`} 
   * - {@link FrauddetectorResource.batchPrediction `FrauddetectorResource.batchPrediction`} 
   * - {@link FrauddetectorResource.eventType `FrauddetectorResource.eventType`} 
   * - {@link FrauddetectorResource.detector `FrauddetectorResource.detector`} 
   * - {@link FrauddetectorResource.detectorVersion `FrauddetectorResource.detectorVersion`} 
   * - {@link FrauddetectorResource.externalModel `FrauddetectorResource.externalModel`} 
   * - {@link FrauddetectorResource.modelVersion `FrauddetectorResource.modelVersion`} 
   * - {@link FrauddetectorResource.model `FrauddetectorResource.model`} 
   * - {@link FrauddetectorResource.entityType `FrauddetectorResource.entityType`} 
   * - {@link FrauddetectorResource.label `FrauddetectorResource.label`} 
   * - {@link FrauddetectorResource.outcome `FrauddetectorResource.outcome`} 
   * - {@link FrauddetectorResource.rule `FrauddetectorResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "frauddetector:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html
 */
export const FrauddetectorResource = {

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  batchPrediction: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:batch-prediction/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  detector: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:detector/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  detectorVersion: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:detector-version/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  entityType: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:entity-type/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  externalModel: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:external-model/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  eventType: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:event-type/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  label: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:label/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  model: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:model/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  modelVersion: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:model-version/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  outcome: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:outcome/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  rule: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:rule/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  variable: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:variable/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfrauddetector.html#amazonfrauddetector-resources-for-iam-policies
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  batchImport: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:frauddetector:${options.region || '*'}:${options.account || '*'}:batch-import/${options.resourcePath || '*'}`,
}

