/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchevidently.html
 */
export enum EvidentlyAction {

  /**
   * Write - Grants permission to send a batched evaluate feature request
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_BatchEvaluateFeature.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.feature `EvidentlyResource.feature`} 
   */
  BatchEvaluateFeature = "evidently:BatchEvaluateFeature",

  /**
   * Write - Grants permission to create an experiment
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateExperiment = "evidently:CreateExperiment",

  /**
   * Write - Grants permission to create a feature
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateFeature.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFeature = "evidently:CreateFeature",

  /**
   * Write - Grants permission to create a launch
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLaunch = "evidently:CreateLaunch",

  /**
   * Write - Grants permission to create a project
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProject = "evidently:CreateProject",

  /**
   * Write - Grants permission to delete an experiment
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.experiment `EvidentlyResource.experiment`} 
   */
  DeleteExperiment = "evidently:DeleteExperiment",

  /**
   * Write - Grants permission to delete a feature
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteFeature.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.feature `EvidentlyResource.feature`} 
   */
  DeleteFeature = "evidently:DeleteFeature",

  /**
   * Write - Grants permission to delete a launch
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteLaunch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.launch `EvidentlyResource.launch`} 
   */
  DeleteLaunch = "evidently:DeleteLaunch",

  /**
   * Write - Grants permission to delete a project
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.project `EvidentlyResource.project`} 
   */
  DeleteProject = "evidently:DeleteProject",

  /**
   * Write - Grants permission to send an evaluate feature request
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.feature `EvidentlyResource.feature`} 
   */
  EvaluateFeature = "evidently:EvaluateFeature",

  /**
   * Read - Grants permission to get experiment details
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.experiment `EvidentlyResource.experiment`} 
   */
  GetExperiment = "evidently:GetExperiment",

  /**
   * Read - Grants permission to get experiment result
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetExperimentResults.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.experiment `EvidentlyResource.experiment`} 
   */
  GetExperimentResults = "evidently:GetExperimentResults",

  /**
   * Read - Grants permission to get feature details
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetFeature.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.feature `EvidentlyResource.feature`} 
   */
  GetFeature = "evidently:GetFeature",

  /**
   * Read - Grants permission to get launch details
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetLaunch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.launch `EvidentlyResource.launch`} 
   */
  GetLaunch = "evidently:GetLaunch",

  /**
   * Read - Grants permission to get project details
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_GetProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.project `EvidentlyResource.project`} 
   */
  GetProject = "evidently:GetProject",

  /**
   * Read - Grants permission to list experiments
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html
   */
  ListExperiments = "evidently:ListExperiments",

  /**
   * Read - Grants permission to list features
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html
   */
  ListFeatures = "evidently:ListFeatures",

  /**
   * Read - Grants permission to list launches
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html
   */
  ListLaunches = "evidently:ListLaunches",

  /**
   * Read - Grants permission to list projects
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListProjects.html
   */
  ListProjects = "evidently:ListProjects",

  /**
   * Read - Grants permission to list tags for resources
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "evidently:ListTagsForResource",

  /**
   * Write - Grants permission to send performance events
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_PutProjectEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.project `EvidentlyResource.project`} 
   */
  PutProjectEvents = "evidently:PutProjectEvents",

  /**
   * Write - Grants permission to start an experiment
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StartExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.experiment `EvidentlyResource.experiment`} 
   */
  StartExperiment = "evidently:StartExperiment",

  /**
   * Write - Grants permission to start a launch
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StartLaunch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.launch `EvidentlyResource.launch`} 
   */
  StartLaunch = "evidently:StartLaunch",

  /**
   * Write - Grants permission to stop an experiment
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.experiment `EvidentlyResource.experiment`} 
   */
  StopExperiment = "evidently:StopExperiment",

  /**
   * Write - Grants permission to stop a launch
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.launch `EvidentlyResource.launch`} 
   */
  StopLaunch = "evidently:StopLaunch",

  /**
   * Tagging - Grants permission to tag resources
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "evidently:TagResource",

  /**
   * Tagging - Grants permission to untag resources
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "evidently:UntagResource",

  /**
   * Write - Grants permission to update experiment
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.experiment `EvidentlyResource.experiment`} 
   */
  UpdateExperiment = "evidently:UpdateExperiment",

  /**
   * Write - Grants permission to update feature
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.feature `EvidentlyResource.feature`} 
   */
  UpdateFeature = "evidently:UpdateFeature",

  /**
   * Write - Grants permission to update a launch
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.launch `EvidentlyResource.launch`} 
   */
  UpdateLaunch = "evidently:UpdateLaunch",

  /**
   * Write - Grants permission to update project
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.project `EvidentlyResource.project`} 
   */
  UpdateProject = "evidently:UpdateProject",

  /**
   * Write - Grants permission to update project data delivery
   * @see https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProjectDataDelivery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.project `EvidentlyResource.project`} 
   */
  UpdateProjectDataDelivery = "evidently:UpdateProjectDataDelivery",

  /**
   * * - Grant all evidently permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchevidently.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EvidentlyResource.feature `EvidentlyResource.feature`} 
   * - {@link EvidentlyResource.experiment `EvidentlyResource.experiment`} 
   * - {@link EvidentlyResource.launch `EvidentlyResource.launch`} 
   * - {@link EvidentlyResource.project `EvidentlyResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "evidently:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchevidently.html
 */
export const EvidentlyResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/projects.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource that make the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  project: (options: Partial<{partition: string, region: string, ownerAccountId: string, projectName: string}> = {}) => `arn:${options.partition || '*'}:evidently:${options.region || '*'}:${options.ownerAccountId || '*'}:project/${options.projectName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/features.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource that make the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  feature: (options: Partial<{partition: string, region: string, ownerAccountId: string, projectName: string, featureName: string}> = {}) => `arn:${options.partition || '*'}:evidently:${options.region || '*'}:${options.ownerAccountId || '*'}:project/${options.projectName || '*'}/feature/${options.featureName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/experiments.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource that make the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  experiment: (options: Partial<{partition: string, region: string, ownerAccountId: string, projectName: string, experimentName: string}> = {}) => `arn:${options.partition || '*'}:evidently:${options.region || '*'}:${options.ownerAccountId || '*'}:project/${options.projectName || '*'}/experiment/${options.experimentName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/launches.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource that make the request on behalf of the IAM principal ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  launch: (options: Partial<{partition: string, region: string, ownerAccountId: string, projectName: string, launchName: string}> = {}) => `arn:${options.partition || '*'}:evidently:${options.region || '*'}:${options.ownerAccountId || '*'}:project/${options.projectName || '*'}/launch/${options.launchName || '*'}`,
}

