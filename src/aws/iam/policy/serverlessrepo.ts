/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
 */
export enum ServerlessrepoAction {

  /**
   * Write - Creates an application, optionally including an AWS SAM file to create the first application version in the same call.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   */
  CreateApplication = "serverlessrepo:CreateApplication",

  /**
   * Write - Creates an application version.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   */
  CreateApplicationVersion = "serverlessrepo:CreateApplicationVersion",

  /**
   * Write - Creates an AWS CloudFormation ChangeSet for the given application.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `serverlessrepo:applicationType`: Application type ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCloudFormationChangeSet = "serverlessrepo:CreateCloudFormationChangeSet",

  /**
   * Write - Creates an AWS CloudFormation template
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `serverlessrepo:applicationType`: Application type ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCloudFormationTemplate = "serverlessrepo:CreateCloudFormationTemplate",

  /**
   * Write - Deletes the specified application
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   */
  DeleteApplication = "serverlessrepo:DeleteApplication",

  /**
   * Read - Gets the specified application.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `serverlessrepo:applicationType`: Application type ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetApplication = "serverlessrepo:GetApplication",

  /**
   * Read - Gets the policy for the specified application.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   */
  GetApplicationPolicy = "serverlessrepo:GetApplicationPolicy",

  /**
   * Read - Gets the specified AWS CloudFormation template
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   */
  GetCloudFormationTemplate = "serverlessrepo:GetCloudFormationTemplate",

  /**
   * List - Retrieves the list of applications nested in the containing application
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `serverlessrepo:applicationType`: Application type ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListApplicationDependencies = "serverlessrepo:ListApplicationDependencies",

  /**
   * List - Lists versions for the specified application owned by the requester.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `serverlessrepo:applicationType`: Application type ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListApplicationVersions = "serverlessrepo:ListApplicationVersions",

  /**
   * List - Lists applications owned by the requester.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   */
  ListApplications = "serverlessrepo:ListApplications",

  /**
   * Write - Puts the policy for the specified application.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   */
  PutApplicationPolicy = "serverlessrepo:PutApplicationPolicy",

  /**
   * Read - Gets all applications authorized for this user
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `serverlessrepo:applicationType`: Application type ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SearchApplications = "serverlessrepo:SearchApplications",

  /**
   * Write - Unshares the specified application
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   */
  UnshareApplication = "serverlessrepo:UnshareApplication",

  /**
   * Write - Updates meta-data of the application
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   */
  UpdateApplication = "serverlessrepo:UpdateApplication",

  /**
   * * - Grant all serverlessrepo permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServerlessrepoResource.applications `ServerlessrepoResource.applications`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `serverlessrepo:applicationType`: Application type ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "serverlessrepo:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
 */
export const ServerlessrepoResource = {

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html
   */
  applications: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:serverlessrepo:${options.region || '*'}:${options.account || '*'}:applications/${options.resourceId || '*'}`,
}

