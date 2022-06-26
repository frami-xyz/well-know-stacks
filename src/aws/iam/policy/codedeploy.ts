/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploy.html
 */
export enum CodedeployAction {

  /**
   * Tagging - Grants permission to add tags to one or more on-premises instances
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_AddTagsToOnPremisesInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.instance `CodedeployResource.instance`} 
   */
  AddTagsToOnPremisesInstances = "codedeploy:AddTagsToOnPremisesInstances",

  /**
   * Read - Grants permission to get information about one or more application revisions
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplicationRevisions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   */
  BatchGetApplicationRevisions = "codedeploy:BatchGetApplicationRevisions",

  /**
   * Read - Grants permission to get information about multiple applications associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   */
  BatchGetApplications = "codedeploy:BatchGetApplications",

  /**
   * Read - Grants permission to get information about one or more deployment groups
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  BatchGetDeploymentGroups = "codedeploy:BatchGetDeploymentGroups",

  /**
   * Read - Grants permission to get information about one or more instance that are part of a deployment group
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  BatchGetDeploymentInstances = "codedeploy:BatchGetDeploymentInstances",

  /**
   * Read - Grants permission to return an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated BatchGetDeploymentInstances. The maximum number of targets that can be returned is 25
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentTargets.html
   */
  BatchGetDeploymentTargets = "codedeploy:BatchGetDeploymentTargets",

  /**
   * Read - Grants permission to get information about multiple deployments associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeployments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  BatchGetDeployments = "codedeploy:BatchGetDeployments",

  /**
   * Read - Grants permission to get information about one or more on-premises instances
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetOnPremisesInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.instance `CodedeployResource.instance`} 
   */
  BatchGetOnPremisesInstances = "codedeploy:BatchGetOnPremisesInstances",

  /**
   * Write - Grants permission to start the process of rerouting traffic from instances in the original environment to instances in thereplacement environment without waiting for a specified wait time to elapse
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ContinueDeployment.html
   */
  ContinueDeployment = "codedeploy:ContinueDeployment",

  /**
   * Write - Grants permission to create an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApplication = "codedeploy:CreateApplication",

  /**
   * Write - Grants permission to create CloudFormation deployment to cooperate ochestration for a CloudFormation stack update
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploy.html
   */
  CreateCloudFormationDeployment = "codedeploy:CreateCloudFormationDeployment",

  /**
   * Write - Grants permission to create a deployment for an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  CreateDeployment = "codedeploy:CreateDeployment",

  /**
   * Write - Grants permission to create a custom deployment configuration associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentconfig `CodedeployResource.deploymentconfig`} 
   */
  CreateDeploymentConfig = "codedeploy:CreateDeploymentConfig",

  /**
   * Write - Grants permission to create a deployment group for an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDeploymentGroup = "codedeploy:CreateDeploymentGroup",

  /**
   * Write - Grants permission to delete an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   */
  DeleteApplication = "codedeploy:DeleteApplication",

  /**
   * Write - Grants permission to delete a custom deployment configuration associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentconfig `CodedeployResource.deploymentconfig`} 
   */
  DeleteDeploymentConfig = "codedeploy:DeleteDeploymentConfig",

  /**
   * Write - Grants permission to delete a deployment group for an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  DeleteDeploymentGroup = "codedeploy:DeleteDeploymentGroup",

  /**
   * Write - Grants permission to delete a GitHub account connection
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteGitHubAccountToken.html
   */
  DeleteGitHubAccountToken = "codedeploy:DeleteGitHubAccountToken",

  /**
   * Write - Grants permission to delete resources associated with the given external Id
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteResourcesByExternalId.html
   */
  DeleteResourcesByExternalId = "codedeploy:DeleteResourcesByExternalId",

  /**
   * Write - Grants permission to deregister an on-premises instance
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeregisterOnPremisesInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.instance `CodedeployResource.instance`} 
   */
  DeregisterOnPremisesInstance = "codedeploy:DeregisterOnPremisesInstance",

  /**
   * List - Grants permission to get information about a single application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   */
  GetApplication = "codedeploy:GetApplication",

  /**
   * List - Grants permission to get information about a single application revision for an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplicationRevision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   */
  GetApplicationRevision = "codedeploy:GetApplicationRevision",

  /**
   * List - Grants permission to get information about a single deployment to a deployment group for an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  GetDeployment = "codedeploy:GetDeployment",

  /**
   * List - Grants permission to get information about a single deployment configuration associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentconfig `CodedeployResource.deploymentconfig`} 
   */
  GetDeploymentConfig = "codedeploy:GetDeploymentConfig",

  /**
   * List - Grants permission to get information about a single deployment group for an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  GetDeploymentGroup = "codedeploy:GetDeploymentGroup",

  /**
   * List - Grants permission to get information about a single instance in a deployment associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  GetDeploymentInstance = "codedeploy:GetDeploymentInstance",

  /**
   * Read - Grants permission to return information about a deployment target
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentTarget.html
   */
  GetDeploymentTarget = "codedeploy:GetDeploymentTarget",

  /**
   * List - Grants permission to get information about a single on-premises instance
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetOnPremisesInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.instance `CodedeployResource.instance`} 
   */
  GetOnPremisesInstance = "codedeploy:GetOnPremisesInstance",

  /**
   * List - Grants permission to get information about all application revisions for an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplicationRevisions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   */
  ListApplicationRevisions = "codedeploy:ListApplicationRevisions",

  /**
   * List - Grants permission to get information about all applications associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplications.html
   */
  ListApplications = "codedeploy:ListApplications",

  /**
   * List - Grants permission to get information about all deployment configurations associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentConfigs.html
   */
  ListDeploymentConfigs = "codedeploy:ListDeploymentConfigs",

  /**
   * List - Grants permission to get information about all deployment groups for an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   */
  ListDeploymentGroups = "codedeploy:ListDeploymentGroups",

  /**
   * List - Grants permission to get information about all instances in a deployment associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  ListDeploymentInstances = "codedeploy:ListDeploymentInstances",

  /**
   * List - Grants permission to return an array of target IDs that are associated a deployment
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentTargets.html
   */
  ListDeploymentTargets = "codedeploy:ListDeploymentTargets",

  /**
   * List - Grants permission to get information about all deployments to a deployment group associated with the IAM user, or to get all deployments associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeployments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  ListDeployments = "codedeploy:ListDeployments",

  /**
   * List - Grants permission to list the names of stored connections to GitHub accounts
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListGitHubAccountTokenNames.html
   */
  ListGitHubAccountTokenNames = "codedeploy:ListGitHubAccountTokenNames",

  /**
   * List - Grants permission to get a list of one or more on-premises instance names
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListOnPremisesInstances.html
   */
  ListOnPremisesInstances = "codedeploy:ListOnPremisesInstances",

  /**
   * List - Grants permission to return a list of tags for the resource identified by a specified ARN. Tags are used to organize and categorize your CodeDeploy resources
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  ListTagsForResource = "codedeploy:ListTagsForResource",

  /**
   * Write - Grants permission to notify a lifecycle event hook execution status for associated deployment with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_PutLifecycleEventHookExecutionStatus.html
   */
  PutLifecycleEventHookExecutionStatus = "codedeploy:PutLifecycleEventHookExecutionStatus",

  /**
   * Write - Grants permission to register information about an application revision for an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterApplicationRevision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   */
  RegisterApplicationRevision = "codedeploy:RegisterApplicationRevision",

  /**
   * Write - Grants permission to register an on-premises instance
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterOnPremisesInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.instance `CodedeployResource.instance`} 
   */
  RegisterOnPremisesInstance = "codedeploy:RegisterOnPremisesInstance",

  /**
   * Tagging - Grants permission to remove tags from one or more on-premises instances
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RemoveTagsFromOnPremisesInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.instance `CodedeployResource.instance`} 
   */
  RemoveTagsFromOnPremisesInstances = "codedeploy:RemoveTagsFromOnPremisesInstances",

  /**
   * Write - Grants permission to override any specified wait time and starts terminating instances immediately after the traffic routing is complete. This action applies to blue-green deployments only
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_SkipWaitTimeForInstanceTermination.html
   */
  SkipWaitTimeForInstanceTermination = "codedeploy:SkipWaitTimeForInstanceTermination",

  /**
   * Write - Grants permission to stop a deployment
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_StopDeployment.html
   */
  StopDeployment = "codedeploy:StopDeployment",

  /**
   * Tagging - Grants permission to associate the list of tags in the input Tags parameter with the resource identified by the ResourceArn input parameter
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "codedeploy:TagResource",

  /**
   * Tagging - Grants permission to disassociate a resource from a list of tags. The resource is identified by the ResourceArn input parameter. The tags are identfied by the list of keys in the TagKeys input parameter
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "codedeploy:UntagResource",

  /**
   * Write - Grants permission to update an application
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   */
  UpdateApplication = "codedeploy:UpdateApplication",

  /**
   * Write - Grants permission to change information about a single deployment group for an application associated with the IAM user
   * @see https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateDeploymentGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   */
  UpdateDeploymentGroup = "codedeploy:UpdateDeploymentGroup",

  /**
   * * - Grant all codedeploy permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodedeployResource.instance `CodedeployResource.instance`} 
   * - {@link CodedeployResource.application `CodedeployResource.application`} 
   * - {@link CodedeployResource.deploymentgroup `CodedeployResource.deploymentgroup`} 
   * - {@link CodedeployResource.deploymentconfig `CodedeployResource.deploymentconfig`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "codedeploy:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploy.html
 */
export const CodedeployResource = {

  /**
   * @see https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   */
  application: (options: Partial<{partition: string, region: string, account: string, applicationName: string}> = {}) => `arn:${options.partition || '*'}:codedeploy:${options.region || '*'}:${options.account || '*'}:application:${options.applicationName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   */
  deploymentconfig: (options: Partial<{partition: string, region: string, account: string, deploymentConfigurationName: string}> = {}) => `arn:${options.partition || '*'}:codedeploy:${options.region || '*'}:${options.account || '*'}:deploymentconfig:${options.deploymentConfigurationName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   */
  deploymentgroup: (options: Partial<{partition: string, region: string, account: string, applicationName: string, deploymentGroupName: string}> = {}) => `arn:${options.partition || '*'}:codedeploy:${options.region || '*'}:${options.account || '*'}:deploymentgroup:${options.applicationName || '*'}/${options.deploymentGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   */
  instance: (options: Partial<{partition: string, region: string, account: string, instanceName: string}> = {}) => `arn:${options.partition || '*'}:codedeploy:${options.region || '*'}:${options.account || '*'}:instance:${options.instanceName || '*'}`,
}

