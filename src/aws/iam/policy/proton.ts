/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsproton.html
 */
export enum ProtonAction {

  /**
   * Write - Grants permission to reject an environment account connection request from another environment account
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_AcceptEnvironmentAccountConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentAccountConnection `ProtonResource.environmentAccountConnection`} 
   */
  AcceptEnvironmentAccountConnection = "proton:AcceptEnvironmentAccountConnection",

  /**
   * Write - Grants permission to cancel an environment deployment
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CancelEnvironmentDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `proton:EnvironmentTemplate`: Filters actions based on specified environment template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CancelEnvironmentDeployment = "proton:CancelEnvironmentDeployment",

  /**
   * Write - Grants permission to cancel a service instance deployment
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CancelServiceInstanceDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceInstance `ProtonResource.serviceInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `proton:ServiceTemplate`: Filters actions based on specified service template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CancelServiceInstanceDeployment = "proton:CancelServiceInstanceDeployment",

  /**
   * Write - Grants permission to cancel a service pipeline deployment
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CancelServicePipelineDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.service `ProtonResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `proton:ServiceTemplate`: Filters actions based on specified service template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CancelServicePipelineDeployment = "proton:CancelServicePipelineDeployment",

  /**
   * Write - Grants permission to create an environment
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `proton:EnvironmentTemplate`: Filters actions based on specified environment template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEnvironment = "proton:CreateEnvironment",

  /**
   * Write - Grants permission to create an environment account connection
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentAccountConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEnvironmentAccountConnection = "proton:CreateEnvironmentAccountConnection",

  /**
   * Write - Grants permission to create an environment template
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEnvironmentTemplate = "proton:CreateEnvironmentTemplate",

  /**
   * Write - Grants permission to create an environment template major version.  DEPRECATED - use CreateEnvironmentTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateMajorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEnvironmentTemplateMajorVersion = "proton:CreateEnvironmentTemplateMajorVersion",

  /**
   * Write - Grants permission to create an environment template minor version.  DEPRECATED - use CreateEnvironmentTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateMinorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEnvironmentTemplateMinorVersion = "proton:CreateEnvironmentTemplateMinorVersion",

  /**
   * Write - Grants permission to create an environment template version
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEnvironmentTemplateVersion = "proton:CreateEnvironmentTemplateVersion",

  /**
   * Write - Grants permission to create a repository
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.repository `ProtonResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateRepository = "proton:CreateRepository",

  /**
   * Write - Grants permission to create a service
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.service `ProtonResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `proton:ServiceTemplate`: Filters actions based on specified service template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateService = "proton:CreateService",

  /**
   * Write - Grants permission to create a service template
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateServiceTemplate = "proton:CreateServiceTemplate",

  /**
   * Write - Grants permission to create a service template major version.  DEPRECATED - use CreateServiceTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateMajorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateServiceTemplateMajorVersion = "proton:CreateServiceTemplateMajorVersion",

  /**
   * Write - Grants permission to create a service template minor version.  DEPRECATED - use CreateServiceTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateMinorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateServiceTemplateMinorVersion = "proton:CreateServiceTemplateMinorVersion",

  /**
   * Write - Grants permission to create a service template version
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateServiceTemplateVersion = "proton:CreateServiceTemplateVersion",

  /**
   * Write - Grants permission to create a template sync config
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateTemplateSyncConfig.html
   */
  CreateTemplateSyncConfig = "proton:CreateTemplateSyncConfig",

  /**
   * Write - Grants permission to delete account roles.  DEPRECATED - use UpdateAccountSettings instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteAccountRoles.html
   */
  DeleteAccountRoles = "proton:DeleteAccountRoles",

  /**
   * Write - Grants permission to delete an environment
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `proton:EnvironmentTemplate`: Filters actions based on specified environment template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteEnvironment = "proton:DeleteEnvironment",

  /**
   * Write - Grants permission to delete an environment account connection
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentAccountConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentAccountConnection `ProtonResource.environmentAccountConnection`} 
   */
  DeleteEnvironmentAccountConnection = "proton:DeleteEnvironmentAccountConnection",

  /**
   * Write - Grants permission to delete an environment template
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  DeleteEnvironmentTemplate = "proton:DeleteEnvironmentTemplate",

  /**
   * Write - Grants permission to delete an environment template major version.  DEPRECATED - use DeleteEnvironmentTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateMajorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  DeleteEnvironmentTemplateMajorVersion = "proton:DeleteEnvironmentTemplateMajorVersion",

  /**
   * Write - Grants permission to delete an environment template minor version.  DEPRECATED - use DeleteEnvironmentTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateMinorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  DeleteEnvironmentTemplateMinorVersion = "proton:DeleteEnvironmentTemplateMinorVersion",

  /**
   * Write - Grants permission to delete an environment template version
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  DeleteEnvironmentTemplateVersion = "proton:DeleteEnvironmentTemplateVersion",

  /**
   * Write - Grants permission to delete a repository
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.repository `ProtonResource.repository`} 
   */
  DeleteRepository = "proton:DeleteRepository",

  /**
   * Write - Grants permission to delete a service
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.service `ProtonResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `proton:ServiceTemplate`: Filters actions based on specified service template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteService = "proton:DeleteService",

  /**
   * Write - Grants permission to delete a service template
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  DeleteServiceTemplate = "proton:DeleteServiceTemplate",

  /**
   * Write - Grants permission to delete a service template major version.  DEPRECATED - use DeleteServiceTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateMajorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  DeleteServiceTemplateMajorVersion = "proton:DeleteServiceTemplateMajorVersion",

  /**
   * Write - Grants permission to delete a service template minor version.  DEPRECATED - use DeleteServiceTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateMinorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  DeleteServiceTemplateMinorVersion = "proton:DeleteServiceTemplateMinorVersion",

  /**
   * Write - Grants permission to delete a service template version
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  DeleteServiceTemplateVersion = "proton:DeleteServiceTemplateVersion",

  /**
   * Write - Grants permission to delete a TemplateSyncConfig
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteTemplateSyncConfig.html
   */
  DeleteTemplateSyncConfig = "proton:DeleteTemplateSyncConfig",

  /**
   * Read - Grants permission to get account roles.  DEPRECATED - use GetAccountSettings instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetAccountRoles.html
   */
  GetAccountRoles = "proton:GetAccountRoles",

  /**
   * Read - Grants permission to describe the account settings
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetAccountSettings.html
   */
  GetAccountSettings = "proton:GetAccountSettings",

  /**
   * Read - Grants permission to describe an environment
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   */
  GetEnvironment = "proton:GetEnvironment",

  /**
   * Read - Grants permission to describe an environment account connection
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentAccountConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentAccountConnection `ProtonResource.environmentAccountConnection`} 
   */
  GetEnvironmentAccountConnection = "proton:GetEnvironmentAccountConnection",

  /**
   * Read - Grants permission to describe an environment template
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  GetEnvironmentTemplate = "proton:GetEnvironmentTemplate",

  /**
   * Read - Grants permission to get an environment template major version.  DEPRECATED - use GetEnvironmentTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateMajorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  GetEnvironmentTemplateMajorVersion = "proton:GetEnvironmentTemplateMajorVersion",

  /**
   * Read - Grants permission to get an environment template minor version.  DEPRECATED - use GetEnvironmentTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateMinorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  GetEnvironmentTemplateMinorVersion = "proton:GetEnvironmentTemplateMinorVersion",

  /**
   * Read - Grants permission to describe an environment template version
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  GetEnvironmentTemplateVersion = "proton:GetEnvironmentTemplateVersion",

  /**
   * Read - Grants permission to describe a repository
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.repository `ProtonResource.repository`} 
   */
  GetRepository = "proton:GetRepository",

  /**
   * Read - Grants permission to get the latest sync status for a repository
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetRepositorySyncStatus.html
   */
  GetRepositorySyncStatus = "proton:GetRepositorySyncStatus",

  /**
   * Read - Grants permission to describe a service
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.service `ProtonResource.service`} 
   */
  GetService = "proton:GetService",

  /**
   * Read - Grants permission to describe a service instance
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceInstance `ProtonResource.serviceInstance`} 
   */
  GetServiceInstance = "proton:GetServiceInstance",

  /**
   * Read - Grants permission to describe a service template
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  GetServiceTemplate = "proton:GetServiceTemplate",

  /**
   * Read - Grants permission to get a service template major version.  DEPRECATED - use GetServiceTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateMajorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  GetServiceTemplateMajorVersion = "proton:GetServiceTemplateMajorVersion",

  /**
   * Read - Grants permission to get a service template minor version.  DEPRECATED - use GetServiceTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateMinorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  GetServiceTemplateMinorVersion = "proton:GetServiceTemplateMinorVersion",

  /**
   * Read - Grants permission to describe a service template version
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  GetServiceTemplateVersion = "proton:GetServiceTemplateVersion",

  /**
   * Read - Grants permission to describe a TemplateSyncConfig
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetTemplateSyncConfig.html
   */
  GetTemplateSyncConfig = "proton:GetTemplateSyncConfig",

  /**
   * Read - Grants permission to describe the sync status of a template
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_GetTemplateSyncStatus.html
   */
  GetTemplateSyncStatus = "proton:GetTemplateSyncStatus",

  /**
   * List - Grants permission to list environment account connections
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentAccountConnections.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentAccountConnection `ProtonResource.environmentAccountConnection`} 
   */
  ListEnvironmentAccountConnections = "proton:ListEnvironmentAccountConnections",

  /**
   * List - Grants permission to list environment outputs
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentOutputs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   */
  ListEnvironmentOutputs = "proton:ListEnvironmentOutputs",

  /**
   * List - Grants permission to list environment provisioned resources
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentProvisionedResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   */
  ListEnvironmentProvisionedResources = "proton:ListEnvironmentProvisionedResources",

  /**
   * List - Grants permission to list environment template major versions.  DEPRECATED - use ListEnvironmentTemplateVersions instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateMajorVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  ListEnvironmentTemplateMajorVersions = "proton:ListEnvironmentTemplateMajorVersions",

  /**
   * List - Grants permission to list an environment template minor versions.  DEPRECATED - use ListEnvironmentTemplateVersions instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateMinorVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  ListEnvironmentTemplateMinorVersions = "proton:ListEnvironmentTemplateMinorVersions",

  /**
   * List - Grants permission to list environment template versions
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  ListEnvironmentTemplateVersions = "proton:ListEnvironmentTemplateVersions",

  /**
   * List - Grants permission to list environment templates
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplates.html
   */
  ListEnvironmentTemplates = "proton:ListEnvironmentTemplates",

  /**
   * List - Grants permission to list environments
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironments.html
   */
  ListEnvironments = "proton:ListEnvironments",

  /**
   * List - Grants permission to list repositories
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListRepositories.html
   */
  ListRepositories = "proton:ListRepositories",

  /**
   * List - Grants permission to list repository sync definitions
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListRepositorySyncDefinitions.html
   */
  ListRepositorySyncDefinitions = "proton:ListRepositorySyncDefinitions",

  /**
   * List - Grants permission to list service instance outputs
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceInstanceOutputs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.service `ProtonResource.service`} 
   * - {@link ProtonResource.serviceInstance `ProtonResource.serviceInstance`} 
   */
  ListServiceInstanceOutputs = "proton:ListServiceInstanceOutputs",

  /**
   * List - Grants permission to list service instance provisioned resources
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceInstanceProvisionedResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.service `ProtonResource.service`} 
   * - {@link ProtonResource.serviceInstance `ProtonResource.serviceInstance`} 
   */
  ListServiceInstanceProvisionedResources = "proton:ListServiceInstanceProvisionedResources",

  /**
   * List - Grants permission to list service instances
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceInstances.html
   */
  ListServiceInstances = "proton:ListServiceInstances",

  /**
   * List - Grants permission to list service pipeline outputs
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServicePipelineOutputs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.service `ProtonResource.service`} 
   */
  ListServicePipelineOutputs = "proton:ListServicePipelineOutputs",

  /**
   * List - Grants permission to list service pipeline provisioned resources
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServicePipelineProvisionedResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.service `ProtonResource.service`} 
   */
  ListServicePipelineProvisionedResources = "proton:ListServicePipelineProvisionedResources",

  /**
   * List - Grants permission to list service template major versions.  DEPRECATED - use ListServiceTemplateVersions instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateMajorVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  ListServiceTemplateMajorVersions = "proton:ListServiceTemplateMajorVersions",

  /**
   * List - Grants permission to list service template minor versions.  DEPRECATED - use ListServiceTemplateVersions instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateMinorVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  ListServiceTemplateMinorVersions = "proton:ListServiceTemplateMinorVersions",

  /**
   * List - Grants permission to list service template versions
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  ListServiceTemplateVersions = "proton:ListServiceTemplateVersions",

  /**
   * List - Grants permission to list service templates
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplates.html
   */
  ListServiceTemplates = "proton:ListServiceTemplates",

  /**
   * List - Grants permission to list services
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServices.html
   */
  ListServices = "proton:ListServices",

  /**
   * Read - Grants permission to list tags of a resource
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   * - {@link ProtonResource.environmentTemplateMajorVersion `ProtonResource.environmentTemplateMajorVersion`} 
   * - {@link ProtonResource.environmentTemplateMinorVersion `ProtonResource.environmentTemplateMinorVersion`} 
   * - {@link ProtonResource.environmentTemplateVersion `ProtonResource.environmentTemplateVersion`} 
   * - {@link ProtonResource.repository `ProtonResource.repository`} 
   * - {@link ProtonResource.service `ProtonResource.service`} 
   * - {@link ProtonResource.serviceInstance `ProtonResource.serviceInstance`} 
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   * - {@link ProtonResource.serviceTemplateMajorVersion `ProtonResource.serviceTemplateMajorVersion`} 
   * - {@link ProtonResource.serviceTemplateMinorVersion `ProtonResource.serviceTemplateMinorVersion`} 
   * - {@link ProtonResource.serviceTemplateVersion `ProtonResource.serviceTemplateVersion`} 
   */
  ListTagsForResource = "proton:ListTagsForResource",

  /**
   * Write - Grants permission to notify Proton of resource deployment status changes
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_NotifyResourceDeploymentStatusChange.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   * - {@link ProtonResource.serviceInstance `ProtonResource.serviceInstance`} 
   */
  NotifyResourceDeploymentStatusChange = "proton:NotifyResourceDeploymentStatusChange",

  /**
   * Write - Grants permission to reject an environment account connection request from another environment account
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_RejectEnvironmentAccountConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentAccountConnection `ProtonResource.environmentAccountConnection`} 
   */
  RejectEnvironmentAccountConnection = "proton:RejectEnvironmentAccountConnection",

  /**
   * Tagging - Grants permission to add tags to a resource
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   * - {@link ProtonResource.environmentTemplateMajorVersion `ProtonResource.environmentTemplateMajorVersion`} 
   * - {@link ProtonResource.environmentTemplateMinorVersion `ProtonResource.environmentTemplateMinorVersion`} 
   * - {@link ProtonResource.environmentTemplateVersion `ProtonResource.environmentTemplateVersion`} 
   * - {@link ProtonResource.repository `ProtonResource.repository`} 
   * - {@link ProtonResource.service `ProtonResource.service`} 
   * - {@link ProtonResource.serviceInstance `ProtonResource.serviceInstance`} 
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   * - {@link ProtonResource.serviceTemplateMajorVersion `ProtonResource.serviceTemplateMajorVersion`} 
   * - {@link ProtonResource.serviceTemplateMinorVersion `ProtonResource.serviceTemplateMinorVersion`} 
   * - {@link ProtonResource.serviceTemplateVersion `ProtonResource.serviceTemplateVersion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "proton:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   * - {@link ProtonResource.environmentTemplateMajorVersion `ProtonResource.environmentTemplateMajorVersion`} 
   * - {@link ProtonResource.environmentTemplateMinorVersion `ProtonResource.environmentTemplateMinorVersion`} 
   * - {@link ProtonResource.environmentTemplateVersion `ProtonResource.environmentTemplateVersion`} 
   * - {@link ProtonResource.repository `ProtonResource.repository`} 
   * - {@link ProtonResource.service `ProtonResource.service`} 
   * - {@link ProtonResource.serviceInstance `ProtonResource.serviceInstance`} 
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   * - {@link ProtonResource.serviceTemplateMajorVersion `ProtonResource.serviceTemplateMajorVersion`} 
   * - {@link ProtonResource.serviceTemplateMinorVersion `ProtonResource.serviceTemplateMinorVersion`} 
   * - {@link ProtonResource.serviceTemplateVersion `ProtonResource.serviceTemplateVersion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "proton:UntagResource",

  /**
   * Write - Grants permission to update account roles.  DEPRECATED - use UpdateAccountSettings instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateAccountRoles.html
   */
  UpdateAccountRoles = "proton:UpdateAccountRoles",

  /**
   * Write - Grants permission to update the account settings
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateAccountSettings.html
   */
  UpdateAccountSettings = "proton:UpdateAccountSettings",

  /**
   * Write - Grants permission to update an environment
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `proton:EnvironmentTemplate`: Filters actions based on specified environment template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateEnvironment = "proton:UpdateEnvironment",

  /**
   * Write - Grants permission to update an environment account connection
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentAccountConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentAccountConnection `ProtonResource.environmentAccountConnection`} 
   */
  UpdateEnvironmentAccountConnection = "proton:UpdateEnvironmentAccountConnection",

  /**
   * Write - Grants permission to update an environment template
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  UpdateEnvironmentTemplate = "proton:UpdateEnvironmentTemplate",

  /**
   * Write - Grants permission to update an environment template major version.  DEPRECATED - use UpdateEnvironmentTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateMajorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  UpdateEnvironmentTemplateMajorVersion = "proton:UpdateEnvironmentTemplateMajorVersion",

  /**
   * Write - Grants permission to update an environment template minor version.  DEPRECATED - use UpdateEnvironmentTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateMinorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  UpdateEnvironmentTemplateMinorVersion = "proton:UpdateEnvironmentTemplateMinorVersion",

  /**
   * Write - Grants permission to update an environment template version
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   */
  UpdateEnvironmentTemplateVersion = "proton:UpdateEnvironmentTemplateVersion",

  /**
   * Write - Grants permission to update a service
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.service `ProtonResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `proton:ServiceTemplate`: Filters actions based on specified service template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateService = "proton:UpdateService",

  /**
   * Write - Grants permission to update a service instance
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceInstance `ProtonResource.serviceInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `proton:ServiceTemplate`: Filters actions based on specified service template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateServiceInstance = "proton:UpdateServiceInstance",

  /**
   * Write - Grants permission to update a service pipeline
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServicePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.service `ProtonResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `proton:ServiceTemplate`: Filters actions based on specified service template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateServicePipeline = "proton:UpdateServicePipeline",

  /**
   * Write - Grants permission to update a service template
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  UpdateServiceTemplate = "proton:UpdateServiceTemplate",

  /**
   * Write - Grants permission to update a service template major version.  DEPRECATED - use UpdateServiceTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateMajorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  UpdateServiceTemplateMajorVersion = "proton:UpdateServiceTemplateMajorVersion",

  /**
   * Write - Grants permission to create a service template minor version.  DEPRECATED - use UpdateServiceTemplateVersion instead
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateMinorVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  UpdateServiceTemplateMinorVersion = "proton:UpdateServiceTemplateMinorVersion",

  /**
   * Write - Grants permission to update a service template version
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   */
  UpdateServiceTemplateVersion = "proton:UpdateServiceTemplateVersion",

  /**
   * Write - Grants permission to update a TemplateSyncConfig
   * @see https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateTemplateSyncConfig.html
   */
  UpdateTemplateSyncConfig = "proton:UpdateTemplateSyncConfig",

  /**
   * * - Grant all proton permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsproton.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProtonResource.environmentAccountConnection `ProtonResource.environmentAccountConnection`} 
   * - {@link ProtonResource.environment `ProtonResource.environment`} 
   * - {@link ProtonResource.serviceInstance `ProtonResource.serviceInstance`} 
   * - {@link ProtonResource.service `ProtonResource.service`} 
   * - {@link ProtonResource.environmentTemplate `ProtonResource.environmentTemplate`} 
   * - {@link ProtonResource.repository `ProtonResource.repository`} 
   * - {@link ProtonResource.serviceTemplate `ProtonResource.serviceTemplate`} 
   * - {@link ProtonResource.environmentTemplateMajorVersion `ProtonResource.environmentTemplateMajorVersion`} 
   * - {@link ProtonResource.environmentTemplateMinorVersion `ProtonResource.environmentTemplateMinorVersion`} 
   * - {@link ProtonResource.environmentTemplateVersion `ProtonResource.environmentTemplateVersion`} 
   * - {@link ProtonResource.serviceTemplateMajorVersion `ProtonResource.serviceTemplateMajorVersion`} 
   * - {@link ProtonResource.serviceTemplateMinorVersion `ProtonResource.serviceTemplateMinorVersion`} 
   * - {@link ProtonResource.serviceTemplateVersion `ProtonResource.serviceTemplateVersion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `proton:EnvironmentTemplate`: Filters actions based on specified environment template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `proton:ServiceTemplate`: Filters actions based on specified service template related to resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "proton:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsproton.html
 */
export const ProtonResource = {

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  environmentTemplate: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:environment-template/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  environmentTemplateVersion: (options: Partial<{partition: string, region: string, account: string, templateName: string, majorVersion: string, minorVersion: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:environment-template/${options.templateName || '*'}:${options.majorVersion || '*'}.${options.minorVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  environmentTemplateMajorVersion: (options: Partial<{partition: string, region: string, account: string, templateName: string, majorVersionId: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:environment-template/${options.templateName || '*'}:${options.majorVersionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  environmentTemplateMinorVersion: (options: Partial<{partition: string, region: string, account: string, templateName: string, majorVersionId: string, minorVersionId: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:environment-template/${options.templateName || '*'}:${options.majorVersionId || '*'}.${options.minorVersionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  serviceTemplate: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:service-template/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  serviceTemplateVersion: (options: Partial<{partition: string, region: string, account: string, templateName: string, majorVersion: string, minorVersion: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:service-template/${options.templateName || '*'}:${options.majorVersion || '*'}.${options.minorVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  serviceTemplateMajorVersion: (options: Partial<{partition: string, region: string, account: string, templateName: string, majorVersionId: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:service-template/${options.templateName || '*'}:${options.majorVersionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  serviceTemplateMinorVersion: (options: Partial<{partition: string, region: string, account: string, templateName: string, majorVersionId: string, minorVersionId: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:service-template/${options.templateName || '*'}:${options.majorVersionId || '*'}.${options.minorVersionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/ag-environments.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  environment: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:environment/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/ag-services.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  service: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:service/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/ag-services.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  serviceInstance: (options: Partial<{partition: string, region: string, account: string, serviceName: string, name: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:service/${options.serviceName || '*'}/service-instance/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  environmentAccountConnection: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:environment-account-connection/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/proton/latest/adminguide/ag-repositories.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  repository: (options: Partial<{partition: string, region: string, account: string, provider: string, name: string}> = {}) => `arn:${options.partition || '*'}:proton:${options.region || '*'}:${options.account || '*'}:repository/${options.provider || '*'}:${options.name || '*'}`,
}

