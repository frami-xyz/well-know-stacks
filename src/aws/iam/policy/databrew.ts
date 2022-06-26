/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsgluedatabrew.html
 */
export enum DatabrewAction {

  /**
   * Write - Grants permission to delete one or more recipe versions
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_BatchDeleteRecipeVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.recipe `DatabrewResource.recipe`} 
   */
  BatchDeleteRecipeVersion = "databrew:BatchDeleteRecipeVersion",

  /**
   * Write - Grants permission to create a dataset
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_CreateDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataset = "databrew:CreateDataset",

  /**
   * Write - Grants permission to create a profile job
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_CreateProfileJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProfileJob = "databrew:CreateProfileJob",

  /**
   * Write - Grants permission to create a project
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_CreateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProject = "databrew:CreateProject",

  /**
   * Write - Grants permission to create a recipe
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_CreateRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRecipe = "databrew:CreateRecipe",

  /**
   * Write - Grants permission to create a recipe job
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_CreateRecipeJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRecipeJob = "databrew:CreateRecipeJob",

  /**
   * Write - Grants permission to create a ruleset
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_CreateRuleset.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRuleset = "databrew:CreateRuleset",

  /**
   * Write - Grants permission to create a schedule
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_CreateSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSchedule = "databrew:CreateSchedule",

  /**
   * Write - Grants permission to delete a dataset
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.dataset `DatabrewResource.dataset`} 
   */
  DeleteDataset = "databrew:DeleteDataset",

  /**
   * Write - Grants permission to delete a job
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   */
  DeleteJob = "databrew:DeleteJob",

  /**
   * Write - Grants permission to delete a project
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.project `DatabrewResource.project`} 
   */
  DeleteProject = "databrew:DeleteProject",

  /**
   * Write - Grants permission to delete a recipe version
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteRecipeVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.recipe `DatabrewResource.recipe`} 
   */
  DeleteRecipeVersion = "databrew:DeleteRecipeVersion",

  /**
   * Write - Grants permission to delete a ruleset
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteRuleset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.ruleset `DatabrewResource.ruleset`} 
   */
  DeleteRuleset = "databrew:DeleteRuleset",

  /**
   * Write - Grants permission to delete a schedule
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DeleteSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.schedule `DatabrewResource.schedule`} 
   */
  DeleteSchedule = "databrew:DeleteSchedule",

  /**
   * Read - Grants permission to view details about a dataset
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.dataset `DatabrewResource.dataset`} 
   */
  DescribeDataset = "databrew:DescribeDataset",

  /**
   * Read - Grants permission to view details about a job
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   */
  DescribeJob = "databrew:DescribeJob",

  /**
   * Read - Grants permission to view details about job run for a given job
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeJobRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   */
  DescribeJobRun = "databrew:DescribeJobRun",

  /**
   * Read - Grants permission to view details about a project
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.project `DatabrewResource.project`} 
   */
  DescribeProject = "databrew:DescribeProject",

  /**
   * Read - Grants permission to view details about a recipe
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.recipe `DatabrewResource.recipe`} 
   */
  DescribeRecipe = "databrew:DescribeRecipe",

  /**
   * Read - Grants permission to view details about a ruleset
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeRuleset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.ruleset `DatabrewResource.ruleset`} 
   */
  DescribeRuleset = "databrew:DescribeRuleset",

  /**
   * Read - Grants permission to view details about a schedule
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_DescribeSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.schedule `DatabrewResource.schedule`} 
   */
  DescribeSchedule = "databrew:DescribeSchedule",

  /**
   * Read - Grants permission to list datasets in your account
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_ListDatasets.html
   */
  ListDatasets = "databrew:ListDatasets",

  /**
   * Read - Grants permission to list job runs for a given job
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_ListJobRuns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   */
  ListJobRuns = "databrew:ListJobRuns",

  /**
   * Read - Grants permission to list jobs in your account
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_ListJobs.html
   */
  ListJobs = "databrew:ListJobs",

  /**
   * Read - Grants permission to list projects in your account
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_ListProjects.html
   */
  ListProjects = "databrew:ListProjects",

  /**
   * Read - Grants permission to list versions in your recipe
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_ListRecipeVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.recipe `DatabrewResource.recipe`} 
   */
  ListRecipeVersions = "databrew:ListRecipeVersions",

  /**
   * Read - Grants permission to list recipes in your account
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_ListRecipes.html
   */
  ListRecipes = "databrew:ListRecipes",

  /**
   * Read - Grants permission to list rulesets in your account
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_ListRulesets.html
   */
  ListRulesets = "databrew:ListRulesets",

  /**
   * Read - Grants permission to list schedules in your account
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_ListSchedules.html
   */
  ListSchedules = "databrew:ListSchedules",

  /**
   * Read - Grants permission to retrieve tags associated with a resource
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.dataset `DatabrewResource.dataset`} 
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   * - {@link DatabrewResource.project `DatabrewResource.project`} 
   * - {@link DatabrewResource.recipe `DatabrewResource.recipe`} 
   * - {@link DatabrewResource.ruleset `DatabrewResource.ruleset`} 
   * - {@link DatabrewResource.schedule `DatabrewResource.schedule`} 
   */
  ListTagsForResource = "databrew:ListTagsForResource",

  /**
   * Write - Grants permission to publish a major verison of a recipe
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_PublishRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.recipe `DatabrewResource.recipe`} 
   */
  PublishRecipe = "databrew:PublishRecipe",

  /**
   * Write - Grants permission to submit an action to the interactive session for a project
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_SendProjectSessionAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.project `DatabrewResource.project`} 
   */
  SendProjectSessionAction = "databrew:SendProjectSessionAction",

  /**
   * Write - Grants permission to start running a job
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_StartJobRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   */
  StartJobRun = "databrew:StartJobRun",

  /**
   * Write - Grants permission to start an interactive session for a project
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_StartProjectSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.project `DatabrewResource.project`} 
   */
  StartProjectSession = "databrew:StartProjectSession",

  /**
   * Write - Grants permission to stop a job run for a job
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_StopJobRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   */
  StopJobRun = "databrew:StopJobRun",

  /**
   * Tagging - Grants permission to add tags to a resource
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.dataset `DatabrewResource.dataset`} 
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   * - {@link DatabrewResource.project `DatabrewResource.project`} 
   * - {@link DatabrewResource.recipe `DatabrewResource.recipe`} 
   * - {@link DatabrewResource.ruleset `DatabrewResource.ruleset`} 
   * - {@link DatabrewResource.schedule `DatabrewResource.schedule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "databrew:TagResource",

  /**
   * Tagging - Grants permission to remove tags associated with a resource
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.dataset `DatabrewResource.dataset`} 
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   * - {@link DatabrewResource.project `DatabrewResource.project`} 
   * - {@link DatabrewResource.recipe `DatabrewResource.recipe`} 
   * - {@link DatabrewResource.ruleset `DatabrewResource.ruleset`} 
   * - {@link DatabrewResource.schedule `DatabrewResource.schedule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "databrew:UntagResource",

  /**
   * Write - Grants permission to modify a dataset
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.dataset `DatabrewResource.dataset`} 
   */
  UpdateDataset = "databrew:UpdateDataset",

  /**
   * Write - Grants permission to modify a profile job
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateProfileJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   */
  UpdateProfileJob = "databrew:UpdateProfileJob",

  /**
   * Write - Grants permission to modify a project
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.project `DatabrewResource.project`} 
   */
  UpdateProject = "databrew:UpdateProject",

  /**
   * Write - Grants permission to modify a recipe
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.recipe `DatabrewResource.recipe`} 
   */
  UpdateRecipe = "databrew:UpdateRecipe",

  /**
   * Write - Grants permission to modify a recipe job
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateRecipeJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   */
  UpdateRecipeJob = "databrew:UpdateRecipeJob",

  /**
   * Write - Grants permission to modify a ruleset
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateRuleset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.ruleset `DatabrewResource.ruleset`} 
   */
  UpdateRuleset = "databrew:UpdateRuleset",

  /**
   * Write - Grants permission to modify a schedule
   * @see https://docs.aws.amazon.com/databrew/latest/dg/API_UpdateSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.schedule `DatabrewResource.schedule`} 
   */
  UpdateSchedule = "databrew:UpdateSchedule",

  /**
   * * - Grant all databrew permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsgluedatabrew.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatabrewResource.recipe `DatabrewResource.recipe`} 
   * - {@link DatabrewResource.dataset `DatabrewResource.dataset`} 
   * - {@link DatabrewResource.job `DatabrewResource.job`} 
   * - {@link DatabrewResource.project `DatabrewResource.project`} 
   * - {@link DatabrewResource.ruleset `DatabrewResource.ruleset`} 
   * - {@link DatabrewResource.schedule `DatabrewResource.schedule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "databrew:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsgluedatabrew.html
 */
export const DatabrewResource = {

  /**
   * @see https://docs.aws.amazon.com/databrew/latest/dg/projects.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  project: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:databrew:${options.region || '*'}:${options.account || '*'}:project/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/databrew/latest/dg/datasets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataset: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:databrew:${options.region || '*'}:${options.account || '*'}:dataset/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/databrew/latest/dg/rulesets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ruleset: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:databrew:${options.region || '*'}:${options.account || '*'}:ruleset/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/databrew/latest/dg/recipes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  recipe: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:databrew:${options.region || '*'}:${options.account || '*'}:recipe/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/databrew/latest/dg/jobs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  job: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:databrew:${options.region || '*'}:${options.account || '*'}:job/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/databrew/latest/dg/jobs.html#jobs.scheduling
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  schedule: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:databrew:${options.region || '*'}:${options.account || '*'}:schedule/${options.resourceId || '*'}`,
}

