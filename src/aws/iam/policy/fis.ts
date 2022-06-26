/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfaultinjectionsimulator.html
 */
export enum FisAction {

  /**
   * Write - Grants permission to create an AWS FIS experiment template
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_CreateExperimentTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.action `FisResource.action`} 
   * - {@link FisResource.experimentTemplate `FisResource.experimentTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateExperimentTemplate = "fis:CreateExperimentTemplate",

  /**
   * Write - Grants permission to delete the AWS FIS experiment template
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_DeleteExperimentTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.experimentTemplate `FisResource.experimentTemplate`} 
   */
  DeleteExperimentTemplate = "fis:DeleteExperimentTemplate",

  /**
   * Read - Grants permission to retrieve an AWS FIS action
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_GetAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.action `FisResource.action`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAction = "fis:GetAction",

  /**
   * Read - Grants permission to retrieve an AWS FIS experiment
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_GetExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.experiment `FisResource.experiment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetExperiment = "fis:GetExperiment",

  /**
   * Read - Grants permission to retrieve an AWS FIS Experiment Template
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_GetExperimentTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.experimentTemplate `FisResource.experimentTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetExperimentTemplate = "fis:GetExperimentTemplate",

  /**
   * Read - Grants permission to get information about the specified resource type
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_GetTargetResourceType.html
   */
  GetTargetResourceType = "fis:GetTargetResourceType",

  /**
   * Write - Grants permission to inject an API internal error on the provided AWS service from an FIS Experiment
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/Welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.experiment `FisResource.experiment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `fis:Service`: Filters access by the AWS service that is being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `fis:Operations`: Filters access by the list of operations on the AWS service that is being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `fis:Percentage`: Filters access by the percentage of calls being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `fis:Targets`: Filters access by the list of resource ARNs being targeted by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  InjectApiInternalError = "fis:InjectApiInternalError",

  /**
   * Write - Grants permission to inject an API throttle error on the provided AWS service from an FIS Experiment
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/Welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.experiment `FisResource.experiment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `fis:Service`: Filters access by the AWS service that is being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `fis:Operations`: Filters access by the list of operations on the AWS service that is being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `fis:Percentage`: Filters access by the percentage of calls being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `fis:Targets`: Filters access by the list of resource ARNs being targeted by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  InjectApiThrottleError = "fis:InjectApiThrottleError",

  /**
   * Write - Grants permission to inject an API unavailable error on the provided AWS service from an FIS Experiment
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/Welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.experiment `FisResource.experiment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `fis:Service`: Filters access by the AWS service that is being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `fis:Operations`: Filters access by the list of operations on the AWS service that is being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `fis:Percentage`: Filters access by the percentage of calls being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `fis:Targets`: Filters access by the list of resource ARNs being targeted by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  InjectApiUnavailableError = "fis:InjectApiUnavailableError",

  /**
   * List - Grants permission to list all available AWS FIS actions
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_ListActions.html
   */
  ListActions = "fis:ListActions",

  /**
   * List - Grants permission to list all available AWS FIS experiment templates
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperimentTemplates.html
   */
  ListExperimentTemplates = "fis:ListExperimentTemplates",

  /**
   * List - Grants permission to list all available AWS FIS experiments
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperiments.html
   */
  ListExperiments = "fis:ListExperiments",

  /**
   * Read - Grants permission to list the tags for an AWS FIS resource
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.action `FisResource.action`} 
   * - {@link FisResource.experiment `FisResource.experiment`} 
   * - {@link FisResource.experimentTemplate `FisResource.experimentTemplate`} 
   */
  ListTagsForResource = "fis:ListTagsForResource",

  /**
   * List - Grants permission to list the resource types
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTargetResourceTypes.html
   */
  ListTargetResourceTypes = "fis:ListTargetResourceTypes",

  /**
   * Write - Grants permission to run an AWS FIS experiment
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_StartExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.experiment `FisResource.experiment`} 
   * - {@link FisResource.experimentTemplate `FisResource.experimentTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartExperiment = "fis:StartExperiment",

  /**
   * Write - Grants permission to stop an AWS FIS experiment
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_StopExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.experiment `FisResource.experiment`} 
   */
  StopExperiment = "fis:StopExperiment",

  /**
   * Tagging - Grants permission to tag AWS FIS resources
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.action `FisResource.action`} 
   * - {@link FisResource.experiment `FisResource.experiment`} 
   * - {@link FisResource.experimentTemplate `FisResource.experimentTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "fis:TagResource",

  /**
   * Tagging - Grants permission to untag AWS FIS resources
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.action `FisResource.action`} 
   * - {@link FisResource.experiment `FisResource.experiment`} 
   * - {@link FisResource.experimentTemplate `FisResource.experimentTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "fis:UntagResource",

  /**
   * Write - Grants permission to update the specified AWS FIS experiment template
   * @see https://docs.aws.amazon.com/fis/latest/APIReference/API_UpdateExperimentTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.experimentTemplate `FisResource.experimentTemplate`} 
   * - {@link FisResource.action `FisResource.action`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateExperimentTemplate = "fis:UpdateExperimentTemplate",

  /**
   * * - Grant all fis permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfaultinjectionsimulator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FisResource.action `FisResource.action`} 
   * - {@link FisResource.experimentTemplate `FisResource.experimentTemplate`} 
   * - {@link FisResource.experiment `FisResource.experiment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `fis:Service`: Filters access by the AWS service that is being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `fis:Operations`: Filters access by the list of operations on the AWS service that is being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `fis:Percentage`: Filters access by the percentage of calls being affected by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `fis:Targets`: Filters access by the list of resource ARNs being targeted by the AWS FIS action ({@link https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "fis:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfaultinjectionsimulator.html
 */
export const FisResource = {

  /**
   * @see https://docs.aws.amazon.com/fis/latest/userguide/actions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  action: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:fis:${options.region || '*'}:${options.account || '*'}:action/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/fis/latest/userguide/experiments.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  experiment: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:fis:${options.region || '*'}:${options.account || '*'}:experiment/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/fis/latest/userguide/working-with-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  experimentTemplate: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:fis:${options.region || '*'}:${options.account || '*'}:experiment-template/${options.id || '*'}`,
}

