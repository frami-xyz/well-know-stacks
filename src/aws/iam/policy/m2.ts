/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmainframemodernizationservice.html
 */
export enum M2Action {

  /**
   * Write - Grants permission to cancel the execution of a batch job
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_CancelBatchJobExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  CancelBatchJobExecution = "m2:CancelBatchJobExecution",

  /**
   * Write - Grants permission to create an application
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApplication = "m2:CreateApplication",

  /**
   * Write - Grants permission to create a data set import task
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  CreateDataSetImportTask = "m2:CreateDataSetImportTask",

  /**
   * Write - Grants permission to create a deployment
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   * - {@link M2Resource.environment `M2Resource.environment`} 
   */
  CreateDeployment = "m2:CreateDeployment",

  /**
   * Write - Grants permission to Create an environment
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEnvironment = "m2:CreateEnvironment",

  /**
   * Write - Grants permission to delete an application
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_DeleteApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  DeleteApplication = "m2:DeleteApplication",

  /**
   * Write - Grants permission to delete an application from a runtime environment
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_DeleteApplicationFromEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  DeleteApplicationFromEnvironment = "m2:DeleteApplicationFromEnvironment",

  /**
   * Write - Grants permission to delete a runtime environment
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_DeleteEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.environment `M2Resource.environment`} 
   */
  DeleteEnvironment = "m2:DeleteEnvironment",

  /**
   * Read - Grants permission to retrieve an application
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_GetApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  GetApplication = "m2:GetApplication",

  /**
   * Read - Grants permission to retrieve an application version
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_GetApplicationVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  GetApplicationVersion = "m2:GetApplicationVersion",

  /**
   * Read - Grants permission to retrieve a batch job execution
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_GetBatchJobExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  GetBatchJobExecution = "m2:GetBatchJobExecution",

  /**
   * Read - Grants permission to retrieve data set details
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_GetDataSetDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  GetDataSetDetails = "m2:GetDataSetDetails",

  /**
   * Read - Grants permission to retrieve a data set import task
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_GetDataSetImportTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  GetDataSetImportTask = "m2:GetDataSetImportTask",

  /**
   * Read - Grants permission to retrieve a deployment
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_GetDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  GetDeployment = "m2:GetDeployment",

  /**
   * Read - Grants permission to retrieve a runtime environment
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_GetEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.environment `M2Resource.environment`} 
   */
  GetEnvironment = "m2:GetEnvironment",

  /**
   * Read - Grants permission to list the versions of an application
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_ListApplicationVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  ListApplicationVersions = "m2:ListApplicationVersions",

  /**
   * List - Grants permission to list applications
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_ListApplications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.environment `M2Resource.environment`} 
   */
  ListApplications = "m2:ListApplications",

  /**
   * Read - Grants permission to list batch job definitions
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_ListBatchJobDefinitions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  ListBatchJobDefinitions = "m2:ListBatchJobDefinitions",

  /**
   * Read - Grants permission to list executions for a batch job
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_ListBatchJobExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  ListBatchJobExecutions = "m2:ListBatchJobExecutions",

  /**
   * Read - Grants permission to list data set import history
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_ListDataSetImportHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  ListDataSetImportHistory = "m2:ListDataSetImportHistory",

  /**
   * Read - Grants permission to list data sets
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_ListDataSets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  ListDataSets = "m2:ListDataSets",

  /**
   * Read - Grants permission to list deployments
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_ListDeployments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  ListDeployments = "m2:ListDeployments",

  /**
   * Read - Grants permission to list engine versions
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_ListEngineVersions.html
   */
  ListEngineVersions = "m2:ListEngineVersions",

  /**
   * List - Grants permission to list runtime environments
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_ListEnvironments.html
   */
  ListEnvironments = "m2:ListEnvironments",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "m2:ListTagsForResource",

  /**
   * Write - Grants permission to start an application
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_StartApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  StartApplication = "m2:StartApplication",

  /**
   * Write - Grants permission to start a batch job
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_StartBatchJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  StartBatchJob = "m2:StartBatchJob",

  /**
   * Write - Grants permission to stop an application
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_StopApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  StopApplication = "m2:StopApplication",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   * - {@link M2Resource.environment `M2Resource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "m2:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   * - {@link M2Resource.environment `M2Resource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "m2:UntagResource",

  /**
   * Write - Grants permission to update an application
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_UpdateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   */
  UpdateApplication = "m2:UpdateApplication",

  /**
   * Write - Grants permission to update a runtime environment
   * @see https://docs.aws.amazon.com/m2/latest/APIReference/API_UpdateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.environment `M2Resource.environment`} 
   */
  UpdateEnvironment = "m2:UpdateEnvironment",

  /**
   * * - Grant all m2 permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmainframemodernizationservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link M2Resource.application `M2Resource.application`} 
   * - {@link M2Resource.environment `M2Resource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "m2:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmainframemodernizationservice.html
 */
export const M2Resource = {

  /**
   * @see https://docs.aws.amazon.com/m2/latest/userguide/concept-m2.html#application-concept
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  application: (options: Partial<{partition: string, region: string, account: string, applicationId: string}> = {}) => `arn:${options.partition || '*'}:m2:${options.region || '*'}:${options.account || '*'}:app/${options.applicationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/m2/latest/userguide/concept-m2.html#environment-concept
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  environment: (options: Partial<{partition: string, region: string, account: string, environmentId: string}> = {}) => `arn:${options.partition || '*'}:m2:${options.region || '*'}:${options.account || '*'}:env/${options.environmentId || '*'}`,
}

