/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutforvision.html
 */
export enum LookoutvisionAction {

  /**
   * Write - Grants permission to create a dataset manifest
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateDataset.html
   */
  CreateDataset = "lookoutvision:CreateDataset",

  /**
   * Write - Grants permission to create a new anomaly detection model
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.model `LookoutvisionResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateModel = "lookoutvision:CreateModel",

  /**
   * Write - Grants permission to create a new project
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_CreateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.project `LookoutvisionResource.project`} 
   */
  CreateProject = "lookoutvision:CreateProject",

  /**
   * Write - Grants permission to delete a dataset
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteDataset.html
   */
  DeleteDataset = "lookoutvision:DeleteDataset",

  /**
   * Write - Grants permission to delete a model and all associated assets
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.model `LookoutvisionResource.model`} 
   */
  DeleteModel = "lookoutvision:DeleteModel",

  /**
   * Write - Grants permission to permanently remove a project
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DeleteProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.project `LookoutvisionResource.project`} 
   */
  DeleteProject = "lookoutvision:DeleteProject",

  /**
   * Read - Grants permission to show detailed information about dataset manifest
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeDataset.html
   */
  DescribeDataset = "lookoutvision:DescribeDataset",

  /**
   * Read - Grants permission to show detailed information about a model
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.model `LookoutvisionResource.model`} 
   */
  DescribeModel = "lookoutvision:DescribeModel",

  /**
   * Read - Grants permission to show detailed information about a model packaging job
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeModelPackagingJob.html
   */
  DescribeModelPackagingJob = "lookoutvision:DescribeModelPackagingJob",

  /**
   * Read - Grants permission to show detailed information about a project
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DescribeProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.project `LookoutvisionResource.project`} 
   */
  DescribeProject = "lookoutvision:DescribeProject",

  /**
   * Read - Grants permission to provides state information about a running anomaly detection job
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html
   */
  DescribeTrialDetection = "lookoutvision:DescribeTrialDetection",

  /**
   * Write - Grants permission to invoke detection of anomalies
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_DetectAnomalies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.model `LookoutvisionResource.model`} 
   */
  DetectAnomalies = "lookoutvision:DetectAnomalies",

  /**
   * Read - Grants permission to list the contents of dataset manifest
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListDatasetEntries.html
   */
  ListDatasetEntries = "lookoutvision:ListDatasetEntries",

  /**
   * List - Grants permission to list all model packaging jobs associated with a project
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListModelPackagingJobs.html
   */
  ListModelPackagingJobs = "lookoutvision:ListModelPackagingJobs",

  /**
   * List - Grants permission to list all models associated with a project
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListModels.html
   */
  ListModels = "lookoutvision:ListModels",

  /**
   * List - Grants permission to list all projects
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListProjects.html
   */
  ListProjects = "lookoutvision:ListProjects",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.model `LookoutvisionResource.model`} 
   */
  ListTagsForResource = "lookoutvision:ListTagsForResource",

  /**
   * List - Grants permission to list all anomaly detection jobs
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html
   */
  ListTrialDetections = "lookoutvision:ListTrialDetections",

  /**
   * Write - Grants permission to start anomaly detection model
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_StartModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.model `LookoutvisionResource.model`} 
   */
  StartModel = "lookoutvision:StartModel",

  /**
   * Write - Grants permission to start a model packaging job
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_StartModelPackagingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.model `LookoutvisionResource.model`} 
   */
  StartModelPackagingJob = "lookoutvision:StartModelPackagingJob",

  /**
   * Write - Grants permission to start bulk detection of anomalies for a set of images stored in an S3 bucket
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/trial-detection.html
   */
  StartTrialDetection = "lookoutvision:StartTrialDetection",

  /**
   * Write - Grants permission to stop anomaly detection model
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_StopModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.model `LookoutvisionResource.model`} 
   */
  StopModel = "lookoutvision:StopModel",

  /**
   * Tagging - Grants permission to tag a resource with given key value pairs
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.model `LookoutvisionResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "lookoutvision:TagResource",

  /**
   * Tagging - Grants permission to remove the tag with the given key from a resource
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.model `LookoutvisionResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "lookoutvision:UntagResource",

  /**
   * Write - Grants permission to update a training or test dataset manifest
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/APIReference/API_UpdateDatasetEntries.html
   */
  UpdateDatasetEntries = "lookoutvision:UpdateDatasetEntries",

  /**
   * * - Grant all lookoutvision permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutforvision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LookoutvisionResource.model `LookoutvisionResource.model`} 
   * - {@link LookoutvisionResource.project `LookoutvisionResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "lookoutvision:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlookoutforvision.html
 */
export const LookoutvisionResource = {

  /**
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/model-create-project.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  model: (options: Partial<{partition: string, region: string, account: string, projectName: string, modelVersion: string}> = {}) => `arn:${options.partition || '*'}:lookoutvision:${options.region || '*'}:${options.account || '*'}:model/${options.projectName || '*'}/${options.modelVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/model-create-project.html
   */
  project: (options: Partial<{partition: string, region: string, account: string, projectName: string}> = {}) => `arn:${options.partition || '*'}:lookoutvision:${options.region || '*'}:${options.account || '*'}:project/${options.projectName || '*'}`,
}

