/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappconfig.html
 */
export enum AppconfigAction {

  /**
   * Write - Grants permission to create an application
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for a specified tag ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApplication = "appconfig:CreateApplication",

  /**
   * Write - Grants permission to create a configuration profile
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateConfigurationProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for a specified tag ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConfigurationProfile = "appconfig:CreateConfigurationProfile",

  /**
   * Write - Grants permission to create a deployment strategy
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateDeploymentStrategy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.deploymentstrategy `AppconfigResource.deploymentstrategy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for a specified tag ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDeploymentStrategy = "appconfig:CreateDeploymentStrategy",

  /**
   * Write - Grants permission to create an environment
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for a specified tag ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEnvironment = "appconfig:CreateEnvironment",

  /**
   * Write - Grants permission to create a hosted configuration version
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_CreateHostedConfigurationVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * - {@link AppconfigResource.hostedconfigurationversion `AppconfigResource.hostedconfigurationversion`} 
   */
  CreateHostedConfigurationVersion = "appconfig:CreateHostedConfigurationVersion",

  /**
   * Write - Grants permission to delete an application
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   */
  DeleteApplication = "appconfig:DeleteApplication",

  /**
   * Write - Grants permission to delete a configuration profile
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteConfigurationProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   */
  DeleteConfigurationProfile = "appconfig:DeleteConfigurationProfile",

  /**
   * Write - Grants permission to delete a deployment strategy
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteDeploymentStrategy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.deploymentstrategy `AppconfigResource.deploymentstrategy`} 
   */
  DeleteDeploymentStrategy = "appconfig:DeleteDeploymentStrategy",

  /**
   * Write - Grants permission to delete an environment
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   */
  DeleteEnvironment = "appconfig:DeleteEnvironment",

  /**
   * Write - Grants permission to delete a hosted configuration version
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_DeleteHostedConfigurationVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * - {@link AppconfigResource.hostedconfigurationversion `AppconfigResource.hostedconfigurationversion`} 
   */
  DeleteHostedConfigurationVersion = "appconfig:DeleteHostedConfigurationVersion",

  /**
   * Read - Grants permission to view details about an application
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetApplication = "appconfig:GetApplication",

  /**
   * Read - Grants permission to view details about a configuration
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetConfiguration = "appconfig:GetConfiguration",

  /**
   * Read - Grants permission to view details about a configuration profile
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfigurationProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetConfigurationProfile = "appconfig:GetConfigurationProfile",

  /**
   * Read - Grants permission to view details about a deployment
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.deployment `AppconfigResource.deployment`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetDeployment = "appconfig:GetDeployment",

  /**
   * Read - Grants permission to view details about a deployment strategy
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetDeploymentStrategy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.deploymentstrategy `AppconfigResource.deploymentstrategy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetDeploymentStrategy = "appconfig:GetDeploymentStrategy",

  /**
   * Read - Grants permission to view details about an environment
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetEnvironment = "appconfig:GetEnvironment",

  /**
   * Read - Grants permission to view details about a hosted configuration version
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetHostedConfigurationVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * - {@link AppconfigResource.hostedconfigurationversion `AppconfigResource.hostedconfigurationversion`} 
   */
  GetHostedConfigurationVersion = "appconfig:GetHostedConfigurationVersion",

  /**
   * Read - Grants permission to retrieve a deployed configuration
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.configuration `AppconfigResource.configuration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetLatestConfiguration = "appconfig:GetLatestConfiguration",

  /**
   * List - Grants permission to list the applications in your account
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListApplications.html
   */
  ListApplications = "appconfig:ListApplications",

  /**
   * List - Grants permission to list the configuration profiles for an application
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListConfigurationProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   */
  ListConfigurationProfiles = "appconfig:ListConfigurationProfiles",

  /**
   * List - Grants permission to list the deployment strategies for your account
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeploymentStrategies.html
   */
  ListDeploymentStrategies = "appconfig:ListDeploymentStrategies",

  /**
   * List - Grants permission to list the deployments for an environment
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListDeployments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   */
  ListDeployments = "appconfig:ListDeployments",

  /**
   * List - Grants permission to list the environments for an application
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListEnvironments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   */
  ListEnvironments = "appconfig:ListEnvironments",

  /**
   * List - Grants permission to list the hosted configuration versions for a configuration profile
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListHostedConfigurationVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   */
  ListHostedConfigurationVersions = "appconfig:ListHostedConfigurationVersions",

  /**
   * Read - Grants permission to view a list of resource tags for a specified resource
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * - {@link AppconfigResource.deployment `AppconfigResource.deployment`} 
   * - {@link AppconfigResource.deploymentstrategy `AppconfigResource.deploymentstrategy`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "appconfig:ListTagsForResource",

  /**
   * Write - Grants permission to start a configuration session
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.configuration `AppconfigResource.configuration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartConfigurationSession = "appconfig:StartConfigurationSession",

  /**
   * Write - Grants permission to initiate a deployment
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StartDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * - {@link AppconfigResource.deployment `AppconfigResource.deployment`} 
   * - {@link AppconfigResource.deploymentstrategy `AppconfigResource.deploymentstrategy`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for a specified tag ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartDeployment = "appconfig:StartDeployment",

  /**
   * Write - Grants permission to stop a deployment
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_StopDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.deployment `AppconfigResource.deployment`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   */
  StopDeployment = "appconfig:StopDeployment",

  /**
   * Tagging - Grants permission to tag an appconfig resource
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * - {@link AppconfigResource.deployment `AppconfigResource.deployment`} 
   * - {@link AppconfigResource.deploymentstrategy `AppconfigResource.deploymentstrategy`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for a specified tag ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "appconfig:TagResource",

  /**
   * Tagging - Grants permission to untag an appconfig resource
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * - {@link AppconfigResource.deployment `AppconfigResource.deployment`} 
   * - {@link AppconfigResource.deploymentstrategy `AppconfigResource.deploymentstrategy`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "appconfig:UntagResource",

  /**
   * Write - Grants permission to modify an application
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateApplication = "appconfig:UpdateApplication",

  /**
   * Write - Grants permission to modify a configuration profile
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateConfigurationProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateConfigurationProfile = "appconfig:UpdateConfigurationProfile",

  /**
   * Write - Grants permission to modify a deployment strategy
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateDeploymentStrategy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.deploymentstrategy `AppconfigResource.deploymentstrategy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateDeploymentStrategy = "appconfig:UpdateDeploymentStrategy",

  /**
   * Write - Grants permission to modify an environment
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_UpdateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateEnvironment = "appconfig:UpdateEnvironment",

  /**
   * Write - Grants permission to validate a configuration
   * @see https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_ValidateConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   */
  ValidateConfiguration = "appconfig:ValidateConfiguration",

  /**
   * * - Grant all appconfig permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappconfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppconfigResource.application `AppconfigResource.application`} 
   * - {@link AppconfigResource.configurationprofile `AppconfigResource.configurationprofile`} 
   * - {@link AppconfigResource.deploymentstrategy `AppconfigResource.deploymentstrategy`} 
   * - {@link AppconfigResource.environment `AppconfigResource.environment`} 
   * - {@link AppconfigResource.hostedconfigurationversion `AppconfigResource.hostedconfigurationversion`} 
   * - {@link AppconfigResource.deployment `AppconfigResource.deployment`} 
   * - {@link AppconfigResource.configuration `AppconfigResource.configuration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for a specified tag ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "appconfig:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappconfig.html
 */
export const AppconfigResource = {

  /**
   * @see https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-application.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  application: (options: Partial<{partition: string, region: string, account: string, applicationId: string}> = {}) => `arn:${options.partition || '*'}:appconfig:${options.region || '*'}:${options.account || '*'}:application/${options.applicationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-environment.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  environment: (options: Partial<{partition: string, region: string, account: string, applicationId: string, environmentId: string}> = {}) => `arn:${options.partition || '*'}:appconfig:${options.region || '*'}:${options.account || '*'}:application/${options.applicationId || '*'}/environment/${options.environmentId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-and-profile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  configurationprofile: (options: Partial<{partition: string, region: string, account: string, applicationId: string, configurationProfileId: string}> = {}) => `arn:${options.partition || '*'}:appconfig:${options.region || '*'}:${options.account || '*'}:application/${options.applicationId || '*'}/configurationprofile/${options.configurationProfileId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-deployment-strategy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deploymentstrategy: (options: Partial<{partition: string, region: string, account: string, deploymentStrategyId: string}> = {}) => `arn:${options.partition || '*'}:appconfig:${options.region || '*'}:${options.account || '*'}:deploymentstrategy/${options.deploymentStrategyId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-deploying.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deployment: (options: Partial<{partition: string, region: string, account: string, applicationId: string, environmentId: string, deploymentNumber: string}> = {}) => `arn:${options.partition || '*'}:appconfig:${options.region || '*'}:${options.account || '*'}:application/${options.applicationId || '*'}/environment/${options.environmentId || '*'}/deployment/${options.deploymentNumber || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-and-profile.html
   */
  hostedconfigurationversion: (options: Partial<{partition: string, region: string, account: string, applicationId: string, configurationProfileId: string, versionNumber: string}> = {}) => `arn:${options.partition || '*'}:appconfig:${options.region || '*'}:${options.account || '*'}:application/${options.applicationId || '*'}/configurationprofile/${options.configurationProfileId || '*'}/hostedconfigurationversion/${options.versionNumber || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  configuration: (options: Partial<{partition: string, region: string, account: string, applicationId: string, environmentId: string, configurationProfileId: string}> = {}) => `arn:${options.partition || '*'}:appconfig:${options.region || '*'}:${options.account || '*'}:application/${options.applicationId || '*'}/environment/${options.environmentId || '*'}/configuration/${options.configurationProfileId || '*'}`,
}

