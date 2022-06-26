/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotroborunner.html
 */
export enum IotroborunnerAction {

  /**
   * Write - Grants permission to create an action
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateAction.html
   */
  CreateAction = "iotroborunner:CreateAction",

  /**
   * Write - Grants permission to create an action template
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateActionTemplate.html
   */
  CreateActionTemplate = "iotroborunner:CreateActionTemplate",

  /**
   * Write - Grants permission to create an action template dependency
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateActionTemplateDependency.html
   */
  CreateActionTemplateDependency = "iotroborunner:CreateActionTemplateDependency",

  /**
   * Write - Grants permission to create an activity
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateActivity.html
   */
  CreateActivity = "iotroborunner:CreateActivity",

  /**
   * Write - Grants permission to create an activity dependency
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateActivityDependency.html
   */
  CreateActivityDependency = "iotroborunner:CreateActivityDependency",

  /**
   * Write - Grants permission to create a destination
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateDestination.html
   */
  CreateDestination = "iotroborunner:CreateDestination",

  /**
   * Write - Grants permission to create a destination relationship
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateDestinationRelationship.html
   */
  CreateDestinationRelationship = "iotroborunner:CreateDestinationRelationship",

  /**
   * Write - Grants permission to create a site
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateSite.html
   */
  CreateSite = "iotroborunner:CreateSite",

  /**
   * Write - Grants permission to create a task
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateTask.html
   */
  CreateTask = "iotroborunner:CreateTask",

  /**
   * Write - Grants permission to create a task dependency
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateTaskDependency.html
   */
  CreateTaskDependency = "iotroborunner:CreateTaskDependency",

  /**
   * Write - Grants permission to create a worker
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateWorker.html
   */
  CreateWorker = "iotroborunner:CreateWorker",

  /**
   * Write - Grants permission to create a worker fleet
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_CreateWorkerFleet.html
   */
  CreateWorkerFleet = "iotroborunner:CreateWorkerFleet",

  /**
   * Write - Grants permission to delete an action
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.actionResource `IotroborunnerResource.actionResource`} 
   */
  DeleteAction = "iotroborunner:DeleteAction",

  /**
   * Write - Grants permission to delete an action template
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteActionTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.actionTemplateResource `IotroborunnerResource.actionTemplateResource`} 
   */
  DeleteActionTemplate = "iotroborunner:DeleteActionTemplate",

  /**
   * Write - Grants permission to delete an action template dependency
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteActionTemplateDependency.html
   */
  DeleteActionTemplateDependency = "iotroborunner:DeleteActionTemplateDependency",

  /**
   * Write - Grants permission to delete an activity
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteActivity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.activityResource `IotroborunnerResource.activityResource`} 
   */
  DeleteActivity = "iotroborunner:DeleteActivity",

  /**
   * Write - Grants permission to delete an activity dependency
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteActivityDependency.html
   */
  DeleteActivityDependency = "iotroborunner:DeleteActivityDependency",

  /**
   * Write - Grants permission to delete a destination
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.destinationResource `IotroborunnerResource.destinationResource`} 
   */
  DeleteDestination = "iotroborunner:DeleteDestination",

  /**
   * Write - Grants permission to delete a destination relationship
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteDestinationRelationship.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.destinationRelationshipResource `IotroborunnerResource.destinationRelationshipResource`} 
   */
  DeleteDestinationRelationship = "iotroborunner:DeleteDestinationRelationship",

  /**
   * Write - Grants permission to delete a site
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteSite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.siteResource `IotroborunnerResource.siteResource`} 
   */
  DeleteSite = "iotroborunner:DeleteSite",

  /**
   * Write - Grants permission to delete a task
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.taskResource `IotroborunnerResource.taskResource`} 
   */
  DeleteTask = "iotroborunner:DeleteTask",

  /**
   * Write - Grants permission to delete a task dependency
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteTaskDependency.html
   */
  DeleteTaskDependency = "iotroborunner:DeleteTaskDependency",

  /**
   * Write - Grants permission to delete a worker
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteWorker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.workerResource `IotroborunnerResource.workerResource`} 
   */
  DeleteWorker = "iotroborunner:DeleteWorker",

  /**
   * Write - Grants permission to delete a worker fleet
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_DeleteWorkerFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.workerFleetResource `IotroborunnerResource.workerFleetResource`} 
   */
  DeleteWorkerFleet = "iotroborunner:DeleteWorkerFleet",

  /**
   * Read - Grants permission to get an action
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_GetAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.actionResource `IotroborunnerResource.actionResource`} 
   */
  GetAction = "iotroborunner:GetAction",

  /**
   * Read - Grants permission to get an action template
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_GetActionTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.actionTemplateResource `IotroborunnerResource.actionTemplateResource`} 
   */
  GetActionTemplate = "iotroborunner:GetActionTemplate",

  /**
   * Read - Grants permission to get an activity
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_GetActivity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.activityResource `IotroborunnerResource.activityResource`} 
   */
  GetActivity = "iotroborunner:GetActivity",

  /**
   * Read - Grants permission to get a destination
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_GetDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.destinationResource `IotroborunnerResource.destinationResource`} 
   */
  GetDestination = "iotroborunner:GetDestination",

  /**
   * Read - Grants permission to get a destination relationship
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_GetDestinationRelationship.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.destinationRelationshipResource `IotroborunnerResource.destinationRelationshipResource`} 
   */
  GetDestinationRelationship = "iotroborunner:GetDestinationRelationship",

  /**
   * Read - Grants permission to get a site
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_GetSite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.siteResource `IotroborunnerResource.siteResource`} 
   */
  GetSite = "iotroborunner:GetSite",

  /**
   * Read - Grants permission to get a task
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_GetTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.taskResource `IotroborunnerResource.taskResource`} 
   */
  GetTask = "iotroborunner:GetTask",

  /**
   * Read - Grants permission to get a worker
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_GetWorker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.workerResource `IotroborunnerResource.workerResource`} 
   */
  GetWorker = "iotroborunner:GetWorker",

  /**
   * Read - Grants permission to get a worker fleet
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_GetWorkerFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.workerFleetResource `IotroborunnerResource.workerFleetResource`} 
   */
  GetWorkerFleet = "iotroborunner:GetWorkerFleet",

  /**
   * Read - Grants permission to list action templates
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_ListActionTemplates.html
   */
  ListActionTemplates = "iotroborunner:ListActionTemplates",

  /**
   * Read - Grants permission to list actions
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_ListActions.html
   */
  ListActions = "iotroborunner:ListActions",

  /**
   * Read - Grants permission to list activities
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_ListActivities.html
   */
  ListActivities = "iotroborunner:ListActivities",

  /**
   * Read - Grants permission to list destination relationships
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_ListDestinationRelationships.html
   */
  ListDestinationRelationships = "iotroborunner:ListDestinationRelationships",

  /**
   * Read - Grants permission to list destinations
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_ListDestinations.html
   */
  ListDestinations = "iotroborunner:ListDestinations",

  /**
   * Read - Grants permission to list sites
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_ListSites.html
   */
  ListSites = "iotroborunner:ListSites",

  /**
   * Read - Grants permission to list tasks
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_ListTasks.html
   */
  ListTasks = "iotroborunner:ListTasks",

  /**
   * Read - Grants permission to list worker fleets
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_ListWorkerFleets.html
   */
  ListWorkerFleets = "iotroborunner:ListWorkerFleets",

  /**
   * Read - Grants permission to list workers
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_ListWorkers.html
   */
  ListWorkers = "iotroborunner:ListWorkers",

  /**
   * Write - Grants permission to update an action's state
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_UpdateActionState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.actionResource `IotroborunnerResource.actionResource`} 
   */
  UpdateActionState = "iotroborunner:UpdateActionState",

  /**
   * Write - Grants permission to update an activity
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_UpdateActivity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.activityResource `IotroborunnerResource.activityResource`} 
   */
  UpdateActivity = "iotroborunner:UpdateActivity",

  /**
   * Write - Grants permission to update a destination
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_UpdateDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.destinationResource `IotroborunnerResource.destinationResource`} 
   */
  UpdateDestination = "iotroborunner:UpdateDestination",

  /**
   * Write - Grants permission to update a site
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_UpdateSite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.siteResource `IotroborunnerResource.siteResource`} 
   */
  UpdateSite = "iotroborunner:UpdateSite",

  /**
   * Write - Grants permission to update a task
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_UpdateTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.taskResource `IotroborunnerResource.taskResource`} 
   */
  UpdateTask = "iotroborunner:UpdateTask",

  /**
   * Write - Grants permission to update a worker
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_UpdateWorker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.workerResource `IotroborunnerResource.workerResource`} 
   */
  UpdateWorker = "iotroborunner:UpdateWorker",

  /**
   * Write - Grants permission to update a worker fleet
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/API_UpdateWorkerFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.workerFleetResource `IotroborunnerResource.workerFleetResource`} 
   */
  UpdateWorkerFleet = "iotroborunner:UpdateWorkerFleet",

  /**
   * * - Grant all iotroborunner permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotroborunner.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotroborunnerResource.actionResource `IotroborunnerResource.actionResource`} 
   * - {@link IotroborunnerResource.actionTemplateResource `IotroborunnerResource.actionTemplateResource`} 
   * - {@link IotroborunnerResource.activityResource `IotroborunnerResource.activityResource`} 
   * - {@link IotroborunnerResource.destinationResource `IotroborunnerResource.destinationResource`} 
   * - {@link IotroborunnerResource.destinationRelationshipResource `IotroborunnerResource.destinationRelationshipResource`} 
   * - {@link IotroborunnerResource.siteResource `IotroborunnerResource.siteResource`} 
   * - {@link IotroborunnerResource.taskResource `IotroborunnerResource.taskResource`} 
   * - {@link IotroborunnerResource.workerResource `IotroborunnerResource.workerResource`} 
   * - {@link IotroborunnerResource.workerFleetResource `IotroborunnerResource.workerFleetResource`} 
   */
  All = "iotroborunner:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotroborunner.html
 */
export const IotroborunnerResource = {

  /**
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotroborunner:ActionResourceId`: Filters access by the action's identifier ({@link https://docs.aws.amazon.com/iotroborunner/latest/dev/#Action documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  actionResource: (options: Partial<{partition: string, region: string, account: string, actionId: string}> = {}) => `arn:${options.partition || '*'}:iotroborunner:${options.region || '*'}:${options.account || '*'}:action/${options.actionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotroborunner:ActionTemplateResourceId`: Filters access by the action template's identifier ({@link https://docs.aws.amazon.com/iotroborunner/latest/dev/#ActionTemplate documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  actionTemplateResource: (options: Partial<{partition: string, region: string, account: string, actionTemplateId: string}> = {}) => `arn:${options.partition || '*'}:iotroborunner:${options.region || '*'}:${options.account || '*'}:action-template/${options.actionTemplateId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotroborunner:ActivityResourceId`: Filters access by the activity's identifier ({@link https://docs.aws.amazon.com/iotroborunner/latest/dev/#Activity documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  activityResource: (options: Partial<{partition: string, region: string, account: string, activityId: string}> = {}) => `arn:${options.partition || '*'}:iotroborunner:${options.region || '*'}:${options.account || '*'}:activity/${options.activityId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotroborunner:DestinationRelationshipResourceId`: Filters access by the destination relationship's identifier ({@link https://docs.aws.amazon.com/iotroborunner/latest/dev/#DestinationRelationship documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  destinationRelationshipResource: (options: Partial<{partition: string, region: string, account: string, destinationRelationshipId: string}> = {}) => `arn:${options.partition || '*'}:iotroborunner:${options.region || '*'}:${options.account || '*'}:destination-relationship/${options.destinationRelationshipId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotroborunner:DestinationResourceId`: Filters access by the destination's identifier ({@link https://docs.aws.amazon.com/iotroborunner/latest/dev/#Destination documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  destinationResource: (options: Partial<{partition: string, region: string, account: string, destinationId: string}> = {}) => `arn:${options.partition || '*'}:iotroborunner:${options.region || '*'}:${options.account || '*'}:destination/${options.destinationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotroborunner:SiteResourceId`: Filters access by the site's identifier ({@link https://docs.aws.amazon.com/iotroborunner/latest/dev/#Site documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  siteResource: (options: Partial<{partition: string, region: string, account: string, siteId: string}> = {}) => `arn:${options.partition || '*'}:iotroborunner:${options.region || '*'}:${options.account || '*'}:site/${options.siteId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotroborunner:TaggingResourceTagKey`: Filters access by the metadata tag name ({@link https://docs.aws.amazon.com/iotroborunner/latest/dev/#Tagging documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  taggingResource: (options: Partial<{partition: string, region: string, account: string, tagKey: string}> = {}) => `arn:${options.partition || '*'}:iotroborunner:${options.region || '*'}:${options.account || '*'}:tag/${options.tagKey || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotroborunner:TaskResourceId`: Filters access by the task's identifer ({@link https://docs.aws.amazon.com/iotroborunner/latest/dev/#Task documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  taskResource: (options: Partial<{partition: string, region: string, account: string, taskId: string}> = {}) => `arn:${options.partition || '*'}:iotroborunner:${options.region || '*'}:${options.account || '*'}:task/${options.taskId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotroborunner:WorkerFleetResourceId`: Filters access by the worker fleet's identifier ({@link https://docs.aws.amazon.com/iotroborunner/latest/dev/#WorkerFleet documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workerFleetResource: (options: Partial<{partition: string, region: string, account: string, workerFleetId: string}> = {}) => `arn:${options.partition || '*'}:iotroborunner:${options.region || '*'}:${options.account || '*'}:worker-fleet/${options.workerFleetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iotroborunner/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotroborunner:WorkerResourceId`: Filters access by the workers identifier ({@link https://docs.aws.amazon.com/iotroborunner/latest/dev/#Worker documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workerResource: (options: Partial<{partition: string, region: string, account: string, workerId: string}> = {}) => `arn:${options.partition || '*'}:iotroborunner:${options.region || '*'}:${options.account || '*'}:worker/${options.workerId || '*'}`,
}

