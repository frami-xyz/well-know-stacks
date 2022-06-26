/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticbeanstalk.html
 */
export enum ElasticbeanstalkAction {

  /**
   * Write - Grants permission to cancel in-progress environment configuration update or application version deployment
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_AbortEnvironmentUpdate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  AbortEnvironmentUpdate = "elasticbeanstalk:AbortEnvironmentUpdate",

  /**
   * Tagging - Grants permission to add tags to an Elastic Beanstalk resource and to update tag values
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   * - {@link ElasticbeanstalkResource.applicationversion `ElasticbeanstalkResource.applicationversion`} 
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * - {@link ElasticbeanstalkResource.platform `ElasticbeanstalkResource.platform`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  AddTags = "elasticbeanstalk:AddTags",

  /**
   * Write - Grants permission to apply a scheduled managed action immediately
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ApplyEnvironmentManagedAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  ApplyEnvironmentManagedAction = "elasticbeanstalk:ApplyEnvironmentManagedAction",

  /**
   * Write - Grants permission to associate an operations role with an environment
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_AssociateEnvironmentOperationsRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   */
  AssociateEnvironmentOperationsRole = "elasticbeanstalk:AssociateEnvironmentOperationsRole",

  /**
   * Read - Grants permission to check CNAME availability
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CheckDNSAvailability.html
   */
  CheckDNSAvailability = "elasticbeanstalk:CheckDNSAvailability",

  /**
   * Write - Grants permission to create or update a group of environments, each running a separate component of a single application
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ComposeEnvironments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   * - {@link ElasticbeanstalkResource.applicationversion `ElasticbeanstalkResource.applicationversion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  ComposeEnvironments = "elasticbeanstalk:ComposeEnvironments",

  /**
   * Write - Grants permission to create a new application
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApplication = "elasticbeanstalk:CreateApplication",

  /**
   * Write - Grants permission to create an application version for an application
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateApplicationVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   * - {@link ElasticbeanstalkResource.applicationversion `ElasticbeanstalkResource.applicationversion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApplicationVersion = "elasticbeanstalk:CreateApplicationVersion",

  /**
   * Write - Grants permission to create a configuration template
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromApplication`: Filters access by an application as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromApplicationVersion`: Filters access by an application version as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromConfigurationTemplate`: Filters access by a configuration template as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromEnvironment`: Filters access by an environment as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromSolutionStack`: Filters access by a solution stack as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromPlatform`: Filters access by a platform as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConfigurationTemplate = "elasticbeanstalk:CreateConfigurationTemplate",

  /**
   * Write - Grants permission to launch an environment for an application
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromApplicationVersion`: Filters access by an application version as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromConfigurationTemplate`: Filters access by a configuration template as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromSolutionStack`: Filters access by a solution stack as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromPlatform`: Filters access by a platform as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEnvironment = "elasticbeanstalk:CreateEnvironment",

  /**
   * Write - Grants permission to create a new version of a custom platform
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreatePlatformVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.platform `ElasticbeanstalkResource.platform`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePlatformVersion = "elasticbeanstalk:CreatePlatformVersion",

  /**
   * Write - Grants permission to create the Amazon S3 storage location for the account
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_CreateStorageLocation.html
   */
  CreateStorageLocation = "elasticbeanstalk:CreateStorageLocation",

  /**
   * Write - Grants permission to delete an application along with all associated versions and configurations
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   */
  DeleteApplication = "elasticbeanstalk:DeleteApplication",

  /**
   * Write - Grants permission to delete an application version from an application
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteApplicationVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.applicationversion `ElasticbeanstalkResource.applicationversion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DeleteApplicationVersion = "elasticbeanstalk:DeleteApplicationVersion",

  /**
   * Write - Grants permission to delete a configuration template
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DeleteConfigurationTemplate = "elasticbeanstalk:DeleteConfigurationTemplate",

  /**
   * Write - Grants permission to delete the draft configuration associated with the running environment
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeleteEnvironmentConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DeleteEnvironmentConfiguration = "elasticbeanstalk:DeleteEnvironmentConfiguration",

  /**
   * Write - Grants permission to delete a version of a custom platform
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DeletePlatformVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.platform `ElasticbeanstalkResource.platform`} 
   */
  DeletePlatformVersion = "elasticbeanstalk:DeletePlatformVersion",

  /**
   * Read - Grants permission to retrieve a list of account attributes, including resource quotas
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeAccountAttributes.html
   */
  DescribeAccountAttributes = "elasticbeanstalk:DescribeAccountAttributes",

  /**
   * List - Grants permission to retrieve a list of application versions stored in an AWS Elastic Beanstalk storage bucket
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeApplicationVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.applicationversion `ElasticbeanstalkResource.applicationversion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeApplicationVersions = "elasticbeanstalk:DescribeApplicationVersions",

  /**
   * List - Grants permission to retrieve the descriptions of existing applications
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeApplications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   */
  DescribeApplications = "elasticbeanstalk:DescribeApplications",

  /**
   * Read - Grants permission to retrieve descriptions of environment configuration options
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeConfigurationOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * - {@link ElasticbeanstalkResource.solutionstack `ElasticbeanstalkResource.solutionstack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeConfigurationOptions = "elasticbeanstalk:DescribeConfigurationOptions",

  /**
   * Read - Grants permission to retrieve a description of the settings for a configuration set
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeConfigurationSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeConfigurationSettings = "elasticbeanstalk:DescribeConfigurationSettings",

  /**
   * Read - Grants permission to retrieve information about the overall health of an environment
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentHealth.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   */
  DescribeEnvironmentHealth = "elasticbeanstalk:DescribeEnvironmentHealth",

  /**
   * Read - Grants permission to retrieve a list of an environment's completed and failed managed actions
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentManagedActionHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeEnvironmentManagedActionHistory = "elasticbeanstalk:DescribeEnvironmentManagedActionHistory",

  /**
   * Read - Grants permission to retrieve a list of an environment's upcoming and in-progress managed actions
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentManagedActions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeEnvironmentManagedActions = "elasticbeanstalk:DescribeEnvironmentManagedActions",

  /**
   * Read - Grants permission to retrieve a list of AWS resources for an environment
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironmentResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeEnvironmentResources = "elasticbeanstalk:DescribeEnvironmentResources",

  /**
   * List - Grants permission to retrieve descriptions for existing environments
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeEnvironments = "elasticbeanstalk:DescribeEnvironments",

  /**
   * Read - Grants permission to retrieve a list of event descriptions matching a set of criteria
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   * - {@link ElasticbeanstalkResource.applicationversion `ElasticbeanstalkResource.applicationversion`} 
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeEvents = "elasticbeanstalk:DescribeEvents",

  /**
   * Read - Grants permission to retrieve more detailed information about the health of environment instances
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeInstancesHealth.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   */
  DescribeInstancesHealth = "elasticbeanstalk:DescribeInstancesHealth",

  /**
   * Read - Grants permission to retrieve a description of a platform version
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribePlatformVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.platform `ElasticbeanstalkResource.platform`} 
   */
  DescribePlatformVersion = "elasticbeanstalk:DescribePlatformVersion",

  /**
   * Write - Grants permission to disassociate an operations role with an environment
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DisassociateEnvironmentOperationsRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   */
  DisassociateEnvironmentOperationsRole = "elasticbeanstalk:DisassociateEnvironmentOperationsRole",

  /**
   * List - Grants permission to retrieve a list of the available solution stack names
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.solutionstack `ElasticbeanstalkResource.solutionstack`} 
   */
  ListAvailableSolutionStacks = "elasticbeanstalk:ListAvailableSolutionStacks",

  /**
   * List - Grants permission to retrieve a list of the available platform branches
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListPlatformBranches.html
   */
  ListPlatformBranches = "elasticbeanstalk:ListPlatformBranches",

  /**
   * List - Grants permission to retrieve a list of the available platforms
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListPlatformVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.platform `ElasticbeanstalkResource.platform`} 
   */
  ListPlatformVersions = "elasticbeanstalk:ListPlatformVersions",

  /**
   * Read - Grants permission to retrieve a list of tags of an Elastic Beanstalk resource
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   * - {@link ElasticbeanstalkResource.applicationversion `ElasticbeanstalkResource.applicationversion`} 
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * - {@link ElasticbeanstalkResource.platform `ElasticbeanstalkResource.platform`} 
   */
  ListTagsForResource = "elasticbeanstalk:ListTagsForResource",

  /**
   * Write - Grants permission to submit instance statistics for enhanced health
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html#health-enhanced-authz
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   */
  PutInstanceStatistics = "elasticbeanstalk:PutInstanceStatistics",

  /**
   * Write - Grants permission to delete and recreate all of the AWS resources for an environment and to force a restart
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RebuildEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  RebuildEnvironment = "elasticbeanstalk:RebuildEnvironment",

  /**
   * Tagging - Grants permission to remove tags from an Elastic Beanstalk resource
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   * - {@link ElasticbeanstalkResource.applicationversion `ElasticbeanstalkResource.applicationversion`} 
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * - {@link ElasticbeanstalkResource.platform `ElasticbeanstalkResource.platform`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RemoveTags = "elasticbeanstalk:RemoveTags",

  /**
   * Read - Grants permission to initiate a request to compile information of the deployed environment
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RequestEnvironmentInfo.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  RequestEnvironmentInfo = "elasticbeanstalk:RequestEnvironmentInfo",

  /**
   * Write - Grants permission to request an environment to restart the application container server running on each Amazon EC2 instance
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RestartAppServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  RestartAppServer = "elasticbeanstalk:RestartAppServer",

  /**
   * Read - Grants permission to retrieve the compiled information from a RequestEnvironmentInfo request
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_RetrieveEnvironmentInfo.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  RetrieveEnvironmentInfo = "elasticbeanstalk:RetrieveEnvironmentInfo",

  /**
   * Write - Grants permission to swap the CNAMEs of two environments
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_SwapEnvironmentCNAMEs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromEnvironment`: Filters access by an environment as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  SwapEnvironmentCNAMEs = "elasticbeanstalk:SwapEnvironmentCNAMEs",

  /**
   * Write - Grants permission to terminate an environment
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_TerminateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  TerminateEnvironment = "elasticbeanstalk:TerminateEnvironment",

  /**
   * Write - Grants permission to update an application with specified properties
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   */
  UpdateApplication = "elasticbeanstalk:UpdateApplication",

  /**
   * Write - Grants permission to update the application version lifecycle policy associated with the application
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplicationResourceLifecycle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   */
  UpdateApplicationResourceLifecycle = "elasticbeanstalk:UpdateApplicationResourceLifecycle",

  /**
   * Write - Grants permission to update an application version with specified properties
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateApplicationVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.applicationversion `ElasticbeanstalkResource.applicationversion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  UpdateApplicationVersion = "elasticbeanstalk:UpdateApplicationVersion",

  /**
   * Write - Grants permission to update a configuration template with specified properties or configuration option values
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateConfigurationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromApplication`: Filters access by an application as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromApplicationVersion`: Filters access by an application version as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromConfigurationTemplate`: Filters access by a configuration template as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromEnvironment`: Filters access by an environment as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromSolutionStack`: Filters access by a solution stack as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromPlatform`: Filters access by a platform as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  UpdateConfigurationTemplate = "elasticbeanstalk:UpdateConfigurationTemplate",

  /**
   * Write - Grants permission to update an environment
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromApplicationVersion`: Filters access by an application version as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromConfigurationTemplate`: Filters access by a configuration template as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromSolutionStack`: Filters access by a solution stack as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromPlatform`: Filters access by a platform as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  UpdateEnvironment = "elasticbeanstalk:UpdateEnvironment",

  /**
   * Tagging - Grants permission to add tags to an Elastic Beanstalk resource, remove tags, and to update tag values
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_UpdateTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   * - {@link ElasticbeanstalkResource.applicationversion `ElasticbeanstalkResource.applicationversion`} 
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * - {@link ElasticbeanstalkResource.platform `ElasticbeanstalkResource.platform`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateTagsForResource = "elasticbeanstalk:UpdateTagsForResource",

  /**
   * Read - Grants permission to check the validity of a set of configuration settings for a configuration template or an environment
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ValidateConfigurationSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  ValidateConfigurationSettings = "elasticbeanstalk:ValidateConfigurationSettings",

  /**
   * * - Grant all elasticbeanstalk permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticbeanstalk.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticbeanstalkResource.environment `ElasticbeanstalkResource.environment`} 
   * - {@link ElasticbeanstalkResource.application `ElasticbeanstalkResource.application`} 
   * - {@link ElasticbeanstalkResource.applicationversion `ElasticbeanstalkResource.applicationversion`} 
   * - {@link ElasticbeanstalkResource.configurationtemplate `ElasticbeanstalkResource.configurationtemplate`} 
   * - {@link ElasticbeanstalkResource.platform `ElasticbeanstalkResource.platform`} 
   * - {@link ElasticbeanstalkResource.solutionstack `ElasticbeanstalkResource.solutionstack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticbeanstalk:FromApplication`: Filters access by an application as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromApplicationVersion`: Filters access by an application version as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromConfigurationTemplate`: Filters access by a configuration template as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromEnvironment`: Filters access by an environment as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromSolutionStack`: Filters access by a solution stack as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `elasticbeanstalk:FromPlatform`: Filters access by a platform as a dependency or a constraint on an input parameter ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  All = "elasticbeanstalk:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselasticbeanstalk.html
 */
export const ElasticbeanstalkResource = {

  /**
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  application: (options: Partial<{partition: string, region: string, account: string, applicationName: string}> = {}) => `arn:${options.partition || '*'}:elasticbeanstalk:${options.region || '*'}:${options.account || '*'}:application/${options.applicationName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  applicationversion: (options: Partial<{partition: string, region: string, account: string, applicationName: string, versionLabel: string}> = {}) => `arn:${options.partition || '*'}:elasticbeanstalk:${options.region || '*'}:${options.account || '*'}:applicationversion/${options.applicationName || '*'}/${options.versionLabel || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  configurationtemplate: (options: Partial<{partition: string, region: string, account: string, applicationName: string, templateName: string}> = {}) => `arn:${options.partition || '*'}:elasticbeanstalk:${options.region || '*'}:${options.account || '*'}:configurationtemplate/${options.applicationName || '*'}/${options.templateName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticbeanstalk:InApplication`: Filters access by the application that contains the resource that the action operates on ({@link https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.actions.html#AWSHowTo.iam.policies.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  environment: (options: Partial<{partition: string, region: string, account: string, applicationName: string, environmentName: string}> = {}) => `arn:${options.partition || '*'}:elasticbeanstalk:${options.region || '*'}:${options.account || '*'}:environment/${options.applicationName || '*'}/${options.environmentName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   */
  solutionstack: (options: Partial<{partition: string, region: string, solutionStackName: string}> = {}) => `arn:${options.partition || '*'}:elasticbeanstalk:${options.region || '*'}::solutionstack/${options.solutionStackName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.policies.arn.html
   */
  platform: (options: Partial<{partition: string, region: string, platformNameWithVersion: string}> = {}) => `arn:${options.partition || '*'}:elasticbeanstalk:${options.region || '*'}::platform/${options.platformNameWithVersion || '*'}`,
}

