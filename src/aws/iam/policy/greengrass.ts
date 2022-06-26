/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrass.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrassv2.html
 */
export enum GreengrassAction {

  /**
   * Write - Grants permission to associate a role with a group. The role's permissions must allow Greengrass core Lambda functions and connectors to perform actions in other AWS services
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/associateroletogroup-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  AssociateRoleToGroup = "greengrass:AssociateRoleToGroup",

  /**
   * Permissions management - Grants permission to associate a role with your account. AWS IoT Greengrass uses this role to access your Lambda functions and AWS IoT resources
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/associateserviceroletoaccount-put.html
   */
  AssociateServiceRoleToAccount = "greengrass:AssociateServiceRoleToAccount",

  /**
   * Write - Grants permission to create  a connector definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createconnectordefinition-post.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateConnectorDefinition = "greengrass:CreateConnectorDefinition",

  /**
   * Write - Grants permission to create a version of an existing connector definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createconnectordefinitionversion-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.connectorDefinition `GreengrassResource.connectorDefinition`} 
   */
  CreateConnectorDefinitionVersion = "greengrass:CreateConnectorDefinitionVersion",

  /**
   * Write - Grants permission to create a core definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createcoredefinition-post.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCoreDefinition = "greengrass:CreateCoreDefinition",

  /**
   * Write - Grants permission to create a version of an existing core definition. Greengrass groups must each contain exactly one Greengrass core
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createcoredefinitionversion-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDefinition `GreengrassResource.coreDefinition`} 
   */
  CreateCoreDefinitionVersion = "greengrass:CreateCoreDefinitionVersion",

  /**
   * Write - Grants permission to create a deployment
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createdeployment-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  CreateDeployment = "greengrass:CreateDeployment",

  /**
   * Write - Grants permission to create a device definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createdevicedefinition-post.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDeviceDefinition = "greengrass:CreateDeviceDefinition",

  /**
   * Write - Grants permission to create a version of an existing device definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createdevicedefinitionversion-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.deviceDefinition `GreengrassResource.deviceDefinition`} 
   */
  CreateDeviceDefinitionVersion = "greengrass:CreateDeviceDefinitionVersion",

  /**
   * Write - Grants permission to create a Lambda function definition to be used in a group that contains a list of Lambda functions and their configurations
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createfunctiondefinition-post.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateFunctionDefinition = "greengrass:CreateFunctionDefinition",

  /**
   * Write - Grants permission to create a version of an existing Lambda function definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createfunctiondefinitionversion-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.functionDefinition `GreengrassResource.functionDefinition`} 
   */
  CreateFunctionDefinitionVersion = "greengrass:CreateFunctionDefinitionVersion",

  /**
   * Write - Grants permission to create a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/creategroup-post.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateGroup = "greengrass:CreateGroup",

  /**
   * Write - Grants permission to create a CA for the group, or rotate the existing CA
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/creategroupcertificateauthority-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  CreateGroupCertificateAuthority = "greengrass:CreateGroupCertificateAuthority",

  /**
   * Write - Grants permission to create a version of a group that has already been defined
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/creategroupversion-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  CreateGroupVersion = "greengrass:CreateGroupVersion",

  /**
   * Write - Grants permission to create a logger definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createloggerdefinition-post.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateLoggerDefinition = "greengrass:CreateLoggerDefinition",

  /**
   * Write - Grants permission to create a version of an existing logger definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createloggerdefinitionversion-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.loggerDefinition `GreengrassResource.loggerDefinition`} 
   */
  CreateLoggerDefinitionVersion = "greengrass:CreateLoggerDefinitionVersion",

  /**
   * Write - Grants permission to create a resource definition that contains a list of resources to be used in a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createresourcedefinition-post.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateResourceDefinition = "greengrass:CreateResourceDefinition",

  /**
   * Write - Grants permission to create a version of an existing resource definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createresourcedefinitionversion-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.resourceDefinition `GreengrassResource.resourceDefinition`} 
   */
  CreateResourceDefinitionVersion = "greengrass:CreateResourceDefinitionVersion",

  /**
   * Write - Grants permission to create an AWS IoT job that will trigger your Greengrass cores to update the software they are running
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createsoftwareupdatejob-post.html
   */
  CreateSoftwareUpdateJob = "greengrass:CreateSoftwareUpdateJob",

  /**
   * Write - Grants permission to create a subscription definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createsubscriptiondefinition-post.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSubscriptionDefinition = "greengrass:CreateSubscriptionDefinition",

  /**
   * Write - Grants permission to create a version of an existing subscription definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/createsubscriptiondefinitionversion-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.subscriptionDefinition `GreengrassResource.subscriptionDefinition`} 
   */
  CreateSubscriptionDefinitionVersion = "greengrass:CreateSubscriptionDefinitionVersion",

  /**
   * Write - Grants permission to delete a connector definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/deleteconnectordefinition-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.connectorDefinition `GreengrassResource.connectorDefinition`} 
   */
  DeleteConnectorDefinition = "greengrass:DeleteConnectorDefinition",

  /**
   * Write - Grants permission to delete a core definition. Deleting a definition that is currently in use in a deployment affects future deployments
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/deletecoredefinition-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDefinition `GreengrassResource.coreDefinition`} 
   */
  DeleteCoreDefinition = "greengrass:DeleteCoreDefinition",

  /**
   * Write - Grants permission to delete a device definition. Deleting a definition that is currently in use in a deployment affects future deployments
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/deletedevicedefinition-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.deviceDefinition `GreengrassResource.deviceDefinition`} 
   */
  DeleteDeviceDefinition = "greengrass:DeleteDeviceDefinition",

  /**
   * Write - Grants permission to delete a Lambda function definition. Deleting a definition that is currently in use in a deployment affects future deployments
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/deletefunctiondefinition-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.functionDefinition `GreengrassResource.functionDefinition`} 
   */
  DeleteFunctionDefinition = "greengrass:DeleteFunctionDefinition",

  /**
   * Write - Grants permission to delete a group that is not currently in use in a deployment
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/deletegroup-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  DeleteGroup = "greengrass:DeleteGroup",

  /**
   * Write - Grants permission to delete a logger definition. Deleting a definition that is currently in use in a deployment affects future deployments
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/deleteloggerdefinition-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.loggerDefinition `GreengrassResource.loggerDefinition`} 
   */
  DeleteLoggerDefinition = "greengrass:DeleteLoggerDefinition",

  /**
   * Write - Grants permission to delete a resource definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/deleteresourcedefinition-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.resourceDefinition `GreengrassResource.resourceDefinition`} 
   */
  DeleteResourceDefinition = "greengrass:DeleteResourceDefinition",

  /**
   * Write - Grants permission to delete a subscription definition. Deleting a definition that is currently in use in a deployment affects future deployments
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/deletesubscriptiondefinition-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.subscriptionDefinition `GreengrassResource.subscriptionDefinition`} 
   */
  DeleteSubscriptionDefinition = "greengrass:DeleteSubscriptionDefinition",

  /**
   * Write - Grants permission to disassociate the role from a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/disassociaterolefromgroup-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  DisassociateRoleFromGroup = "greengrass:DisassociateRoleFromGroup",

  /**
   * Write - Grants permission to disassociate the service role from an account. Without a service role, deployments will not work
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/disassociateservicerolefromaccount-delete.html
   */
  DisassociateServiceRoleFromAccount = "greengrass:DisassociateServiceRoleFromAccount",

  /**
   * Read - Grants permission to retrieve information required to connect to a Greengrass core
   * @see https://docs.aws.amazon.com/greengrass/latest/developerguide/gg-discover-api.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.thing `GreengrassResource.thing`} 
   */
  Discover = "greengrass:Discover",

  /**
   * Read - Grants permission to retrieve the role associated with a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getassociatedrole-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  GetAssociatedRole = "greengrass:GetAssociatedRole",

  /**
   * Read - Grants permission to return the status of a bulk deployment
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getbulkdeploymentstatus-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.bulkDeployment `GreengrassResource.bulkDeployment`} 
   */
  GetBulkDeploymentStatus = "greengrass:GetBulkDeploymentStatus",

  /**
   * Read - Grants permission to retrieve the connectivity information for a core
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectivityinfo-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.connectivityInfo `GreengrassResource.connectivityInfo`} 
   */
  GetConnectivityInfo = "greengrass:GetConnectivityInfo",

  /**
   * Read - Grants permission to retrieve information about a connector definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectordefinition-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.connectorDefinition `GreengrassResource.connectorDefinition`} 
   */
  GetConnectorDefinition = "greengrass:GetConnectorDefinition",

  /**
   * Read - Grants permission to retrieve information about a connector definition version
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectordefinitionversion-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.connectorDefinition `GreengrassResource.connectorDefinition`} 
   * - {@link GreengrassResource.connectorDefinitionVersion `GreengrassResource.connectorDefinitionVersion`} 
   */
  GetConnectorDefinitionVersion = "greengrass:GetConnectorDefinitionVersion",

  /**
   * Read - Grants permission to retrieve information about a core definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getcoredefinition-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDefinition `GreengrassResource.coreDefinition`} 
   */
  GetCoreDefinition = "greengrass:GetCoreDefinition",

  /**
   * Read - Grants permission to retrieve information about a core definition version
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getcoredefinitionversion-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDefinition `GreengrassResource.coreDefinition`} 
   * - {@link GreengrassResource.coreDefinitionVersion `GreengrassResource.coreDefinitionVersion`} 
   */
  GetCoreDefinitionVersion = "greengrass:GetCoreDefinitionVersion",

  /**
   * Read - Grants permission to return the status of a deployment
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getdeploymentstatus-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.deployment `GreengrassResource.deployment`} 
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  GetDeploymentStatus = "greengrass:GetDeploymentStatus",

  /**
   * Read - Grants permission to retrieve information about a device definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getdevicedefinition-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.deviceDefinition `GreengrassResource.deviceDefinition`} 
   */
  GetDeviceDefinition = "greengrass:GetDeviceDefinition",

  /**
   * Read - Grants permission to retrieve information about a device definition version
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getdevicedefinitionversion-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.deviceDefinition `GreengrassResource.deviceDefinition`} 
   * - {@link GreengrassResource.deviceDefinitionVersion `GreengrassResource.deviceDefinitionVersion`} 
   */
  GetDeviceDefinitionVersion = "greengrass:GetDeviceDefinitionVersion",

  /**
   * Read - Grants permission to retrieve information about a Lambda function definition, such as its creation time and latest version
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getfunctiondefinition-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.functionDefinition `GreengrassResource.functionDefinition`} 
   */
  GetFunctionDefinition = "greengrass:GetFunctionDefinition",

  /**
   * Read - Grants permission to retrieve information about a Lambda function definition version, such as which Lambda functions are included in the version and their configurations
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getfunctiondefinitionversion-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.functionDefinition `GreengrassResource.functionDefinition`} 
   * - {@link GreengrassResource.functionDefinitionVersion `GreengrassResource.functionDefinitionVersion`} 
   */
  GetFunctionDefinitionVersion = "greengrass:GetFunctionDefinitionVersion",

  /**
   * Read - Grants permission to retrieve information about a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getgroup-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  GetGroup = "greengrass:GetGroup",

  /**
   * Read - Grants permission to return the public key of the CA associated with a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupcertificateauthority-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.certificateAuthority `GreengrassResource.certificateAuthority`} 
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  GetGroupCertificateAuthority = "greengrass:GetGroupCertificateAuthority",

  /**
   * Read - Grants permission to retrieve the current configuration for the CA used by a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupcertificateconfiguration-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  GetGroupCertificateConfiguration = "greengrass:GetGroupCertificateConfiguration",

  /**
   * Read - Grants permission to retrieve information about a group version
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupversion-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   * - {@link GreengrassResource.groupVersion `GreengrassResource.groupVersion`} 
   */
  GetGroupVersion = "greengrass:GetGroupVersion",

  /**
   * Read - Grants permission to retrieve information about a logger definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getloggerdefinition-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.loggerDefinition `GreengrassResource.loggerDefinition`} 
   */
  GetLoggerDefinition = "greengrass:GetLoggerDefinition",

  /**
   * Read - Grants permission to retrieve information about a logger definition version
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getloggerdefinitionversion-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.loggerDefinition `GreengrassResource.loggerDefinition`} 
   * - {@link GreengrassResource.loggerDefinitionVersion `GreengrassResource.loggerDefinitionVersion`} 
   */
  GetLoggerDefinitionVersion = "greengrass:GetLoggerDefinitionVersion",

  /**
   * Read - Grants permission to retrieve information about a resource definition, such as its creation time and latest version
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getresourcedefinition-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.resourceDefinition `GreengrassResource.resourceDefinition`} 
   */
  GetResourceDefinition = "greengrass:GetResourceDefinition",

  /**
   * Read - Grants permission to retrieve information about a resource definition version, such as which resources are included in the version
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getresourcedefinitionversion-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.resourceDefinition `GreengrassResource.resourceDefinition`} 
   * - {@link GreengrassResource.resourceDefinitionVersion `GreengrassResource.resourceDefinitionVersion`} 
   */
  GetResourceDefinitionVersion = "greengrass:GetResourceDefinitionVersion",

  /**
   * Read - Grants permission to retrieve the service role that is attached to an account
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getserviceroleforaccount-get.html
   */
  GetServiceRoleForAccount = "greengrass:GetServiceRoleForAccount",

  /**
   * Read - Grants permission to retrieve information about a subscription definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getsubscriptiondefinition-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.subscriptionDefinition `GreengrassResource.subscriptionDefinition`} 
   */
  GetSubscriptionDefinition = "greengrass:GetSubscriptionDefinition",

  /**
   * Read - Grants permission to retrieve information about a subscription definition version
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getsubscriptiondefinitionversion-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.subscriptionDefinition `GreengrassResource.subscriptionDefinition`} 
   * - {@link GreengrassResource.subscriptionDefinitionVersion `GreengrassResource.subscriptionDefinitionVersion`} 
   */
  GetSubscriptionDefinitionVersion = "greengrass:GetSubscriptionDefinitionVersion",

  /**
   * Read - Grants permission to retrieve runtime configuration of a thing
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/getthingruntimeconfiguration-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.thingRuntimeConfig `GreengrassResource.thingRuntimeConfig`} 
   */
  GetThingRuntimeConfiguration = "greengrass:GetThingRuntimeConfiguration",

  /**
   * Read - Grants permission to retrieve a paginated list of the deployments that have been started in a bulk deployment operation and their current deployment status
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listbulkdeploymentdetailedreports-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.bulkDeployment `GreengrassResource.bulkDeployment`} 
   */
  ListBulkDeploymentDetailedReports = "greengrass:ListBulkDeploymentDetailedReports",

  /**
   * List - Grants permission to retrieve a list of bulk deployments
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listbulkdeployments-get.html
   */
  ListBulkDeployments = "greengrass:ListBulkDeployments",

  /**
   * List - Grants permission to list the versions of a connector definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listconnectordefinitionversions-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.connectorDefinition `GreengrassResource.connectorDefinition`} 
   */
  ListConnectorDefinitionVersions = "greengrass:ListConnectorDefinitionVersions",

  /**
   * List - Grants permission to retrieve a list of connector definitions
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listconnectordefinitions-get.html
   */
  ListConnectorDefinitions = "greengrass:ListConnectorDefinitions",

  /**
   * List - Grants permission to list the versions of a core definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listcoredefinitionversions-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDefinition `GreengrassResource.coreDefinition`} 
   */
  ListCoreDefinitionVersions = "greengrass:ListCoreDefinitionVersions",

  /**
   * List - Grants permission to retrieve a list of core definitions
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listcoredefinitions-get.html
   */
  ListCoreDefinitions = "greengrass:ListCoreDefinitions",

  /**
   * List - Grants permission to retrieve a list of all deployments for a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listdeployments-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  ListDeployments = "greengrass:ListDeployments",

  /**
   * List - Grants permission to list the versions of a device definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listdevicedefinitionversions-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.deviceDefinition `GreengrassResource.deviceDefinition`} 
   */
  ListDeviceDefinitionVersions = "greengrass:ListDeviceDefinitionVersions",

  /**
   * List - Grants permission to retrieve a list of device definitions
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listdevicedefinitions-get.html
   */
  ListDeviceDefinitions = "greengrass:ListDeviceDefinitions",

  /**
   * List - Grants permission to list the versions of a Lambda function definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listfunctiondefinitionversions-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.functionDefinition `GreengrassResource.functionDefinition`} 
   */
  ListFunctionDefinitionVersions = "greengrass:ListFunctionDefinitionVersions",

  /**
   * List - Grants permission to retrieve a list of Lambda function definitions
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listfunctiondefinitions-get.html
   */
  ListFunctionDefinitions = "greengrass:ListFunctionDefinitions",

  /**
   * List - Grants permission to retrieve a list of current CAs for a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listgroupcertificateauthorities-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  ListGroupCertificateAuthorities = "greengrass:ListGroupCertificateAuthorities",

  /**
   * List - Grants permission to list the versions of a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listgroupversions-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  ListGroupVersions = "greengrass:ListGroupVersions",

  /**
   * List - Grants permission to retrieve a list of groups
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listgroups-get.html
   */
  ListGroups = "greengrass:ListGroups",

  /**
   * List - Grants permission to list the versions of a logger definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listloggerdefinitionversions-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.loggerDefinition `GreengrassResource.loggerDefinition`} 
   */
  ListLoggerDefinitionVersions = "greengrass:ListLoggerDefinitionVersions",

  /**
   * List - Grants permission to retrieve a list of logger definitions
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listloggerdefinitions-get.html
   */
  ListLoggerDefinitions = "greengrass:ListLoggerDefinitions",

  /**
   * List - Grants permission to list the versions of a resource definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listresourcedefinitionversions-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.resourceDefinition `GreengrassResource.resourceDefinition`} 
   */
  ListResourceDefinitionVersions = "greengrass:ListResourceDefinitionVersions",

  /**
   * List - Grants permission to retrieve a list of resource definitions
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listresourcedefinitions-get.html
   */
  ListResourceDefinitions = "greengrass:ListResourceDefinitions",

  /**
   * List - Grants permission to list the versions of a subscription definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listsubscriptiondefinitionversions-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.subscriptionDefinition `GreengrassResource.subscriptionDefinition`} 
   */
  ListSubscriptionDefinitionVersions = "greengrass:ListSubscriptionDefinitionVersions",

  /**
   * List - Grants permission to retrieve a list of subscription definitions
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listsubscriptiondefinitions-get.html
   */
  ListSubscriptionDefinitions = "greengrass:ListSubscriptionDefinitions",

  /**
   * Read - Grants permission to list the tags for a resource
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/listtagsforresource-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.bulkDeployment `GreengrassResource.bulkDeployment`} 
   * - {@link GreengrassResource.connectorDefinition `GreengrassResource.connectorDefinition`} 
   * - {@link GreengrassResource.coreDefinition `GreengrassResource.coreDefinition`} 
   * - {@link GreengrassResource.deviceDefinition `GreengrassResource.deviceDefinition`} 
   * - {@link GreengrassResource.functionDefinition `GreengrassResource.functionDefinition`} 
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   * - {@link GreengrassResource.loggerDefinition `GreengrassResource.loggerDefinition`} 
   * - {@link GreengrassResource.resourceDefinition `GreengrassResource.resourceDefinition`} 
   * - {@link GreengrassResource.subscriptionDefinition `GreengrassResource.subscriptionDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "greengrass:ListTagsForResource",

  /**
   * Write - Grants permission to reset a group's deployments
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/resetdeployments-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  ResetDeployments = "greengrass:ResetDeployments",

  /**
   * Write - Grants permission to deploy multiple groups in one operation
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/startbulkdeployment-post.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartBulkDeployment = "greengrass:StartBulkDeployment",

  /**
   * Write - Grants permission to stop the execution of a bulk deployment
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/stopbulkdeployment-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.bulkDeployment `GreengrassResource.bulkDeployment`} 
   */
  StopBulkDeployment = "greengrass:StopBulkDeployment",

  /**
   * Tagging - Grants permission to add tags to a resource
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/tagresource-post.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.bulkDeployment `GreengrassResource.bulkDeployment`} 
   * - {@link GreengrassResource.connectorDefinition `GreengrassResource.connectorDefinition`} 
   * - {@link GreengrassResource.coreDefinition `GreengrassResource.coreDefinition`} 
   * - {@link GreengrassResource.deviceDefinition `GreengrassResource.deviceDefinition`} 
   * - {@link GreengrassResource.functionDefinition `GreengrassResource.functionDefinition`} 
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   * - {@link GreengrassResource.loggerDefinition `GreengrassResource.loggerDefinition`} 
   * - {@link GreengrassResource.resourceDefinition `GreengrassResource.resourceDefinition`} 
   * - {@link GreengrassResource.subscriptionDefinition `GreengrassResource.subscriptionDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "greengrass:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/untagresource-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.bulkDeployment `GreengrassResource.bulkDeployment`} 
   * - {@link GreengrassResource.connectorDefinition `GreengrassResource.connectorDefinition`} 
   * - {@link GreengrassResource.coreDefinition `GreengrassResource.coreDefinition`} 
   * - {@link GreengrassResource.deviceDefinition `GreengrassResource.deviceDefinition`} 
   * - {@link GreengrassResource.functionDefinition `GreengrassResource.functionDefinition`} 
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   * - {@link GreengrassResource.loggerDefinition `GreengrassResource.loggerDefinition`} 
   * - {@link GreengrassResource.resourceDefinition `GreengrassResource.resourceDefinition`} 
   * - {@link GreengrassResource.subscriptionDefinition `GreengrassResource.subscriptionDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "greengrass:UntagResource",

  /**
   * Write - Grants permission to update the connectivity information for a Greengrass core. Any devices that belong to the group that has this core will receive this information in order to find the location of the core and connect to it
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/updateconnectivityinfo-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.connectivityInfo `GreengrassResource.connectivityInfo`} 
   */
  UpdateConnectivityInfo = "greengrass:UpdateConnectivityInfo",

  /**
   * Write - Grants permission to update a connector definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/updateconnectordefinition-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.connectorDefinition `GreengrassResource.connectorDefinition`} 
   */
  UpdateConnectorDefinition = "greengrass:UpdateConnectorDefinition",

  /**
   * Write - Grants permission to update a core definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/updatecoredefinition-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDefinition `GreengrassResource.coreDefinition`} 
   */
  UpdateCoreDefinition = "greengrass:UpdateCoreDefinition",

  /**
   * Write - Grants permission to update a device definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/updatedevicedefinition-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.deviceDefinition `GreengrassResource.deviceDefinition`} 
   */
  UpdateDeviceDefinition = "greengrass:UpdateDeviceDefinition",

  /**
   * Write - Grants permission to update a Lambda function definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/updatefunctiondefinition-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.functionDefinition `GreengrassResource.functionDefinition`} 
   */
  UpdateFunctionDefinition = "greengrass:UpdateFunctionDefinition",

  /**
   * Write - Grants permission to update a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/updategroup-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  UpdateGroup = "greengrass:UpdateGroup",

  /**
   * Write - Grants permission to update the certificate expiry time for a group
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/updategroupcertificateconfiguration-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   */
  UpdateGroupCertificateConfiguration = "greengrass:UpdateGroupCertificateConfiguration",

  /**
   * Write - Grants permission to update a logger definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/updateloggerdefinition-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.loggerDefinition `GreengrassResource.loggerDefinition`} 
   */
  UpdateLoggerDefinition = "greengrass:UpdateLoggerDefinition",

  /**
   * Write - Grants permission to update a resource definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/updateresourcedefinition-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.resourceDefinition `GreengrassResource.resourceDefinition`} 
   */
  UpdateResourceDefinition = "greengrass:UpdateResourceDefinition",

  /**
   * Write - Grants permission to update a subscription definition
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/updatesubscriptiondefinition-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.subscriptionDefinition `GreengrassResource.subscriptionDefinition`} 
   */
  UpdateSubscriptionDefinition = "greengrass:UpdateSubscriptionDefinition",

  /**
   * Write - Grants permission to update runtime configuration of a thing
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/updatethingruntimeconfiguration-put.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.thingRuntimeConfig `GreengrassResource.thingRuntimeConfig`} 
   */
  UpdateThingRuntimeConfiguration = "greengrass:UpdateThingRuntimeConfiguration",

  /**
   * Permissions management - Grants permission to associate a role with your account. AWS IoT Greengrass uses this role to access your Lambda functions and AWS IoT resources
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_AssociateServiceRoleToAccount.html
   */
  AssociateServiceRoleToAccount = "greengrass:AssociateServiceRoleToAccount",

  /**
   * Write - Grants permission to associate a list of client devices with a core device
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDevice `GreengrassResource.coreDevice`} 
   */
  BatchAssociateClientDeviceWithCoreDevice = "greengrass:BatchAssociateClientDeviceWithCoreDevice",

  /**
   * Write - Grants permission to disassociate a list of client devices from a core device
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchDisassociateClientDeviceFromCoreDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDevice `GreengrassResource.coreDevice`} 
   */
  BatchDisassociateClientDeviceFromCoreDevice = "greengrass:BatchDisassociateClientDeviceFromCoreDevice",

  /**
   * Write - Grants permission to cancel a deployment
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CancelDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.deployment `GreengrassResource.deployment`} 
   */
  CancelDeployment = "greengrass:CancelDeployment",

  /**
   * Write - Grants permission to create a component
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateComponentVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.component `GreengrassResource.component`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateComponentVersion = "greengrass:CreateComponentVersion",

  /**
   * Write - Grants permission to create a deployment
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CreateDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDeployment = "greengrass:CreateDeployment",

  /**
   * Write - Grants permission to delete a component
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DeleteComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.componentVersion `GreengrassResource.componentVersion`} 
   */
  DeleteComponent = "greengrass:DeleteComponent",

  /**
   * Write - Grants permission to delete a AWS IoT Greengrass core device, which is an AWS IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the AWS IoT thing
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DeleteCoreDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDevice `GreengrassResource.coreDevice`} 
   */
  DeleteCoreDevice = "greengrass:DeleteCoreDevice",

  /**
   * Read - Grants permission to retrieve metadata for a version of a component
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DescribeComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.componentVersion `GreengrassResource.componentVersion`} 
   */
  DescribeComponent = "greengrass:DescribeComponent",

  /**
   * Write - Grants permission to disassociate the service role from an account. Without a service role, deployments will not work
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_DisassociateServiceRoleFromAccount.html
   */
  DisassociateServiceRoleFromAccount = "greengrass:DisassociateServiceRoleFromAccount",

  /**
   * Read - Grants permission to get the recipe for a version of a component
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.componentVersion `GreengrassResource.componentVersion`} 
   */
  GetComponent = "greengrass:GetComponent",

  /**
   * Read - Grants permission to get the pre-signed URL to download a public component artifact
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetComponentVersionArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.componentVersion `GreengrassResource.componentVersion`} 
   */
  GetComponentVersionArtifact = "greengrass:GetComponentVersionArtifact",

  /**
   * Read - Grants permission to retrieve the connectivity information for a Greengrass core device
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetConnectivityInfo.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.connectivityInfo `GreengrassResource.connectivityInfo`} 
   */
  GetConnectivityInfo = "greengrass:GetConnectivityInfo",

  /**
   * Read - Grants permission to retrieves metadata for a AWS IoT Greengrass core device
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetCoreDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDevice `GreengrassResource.coreDevice`} 
   */
  GetCoreDevice = "greengrass:GetCoreDevice",

  /**
   * Read - Grants permission to get a deployment
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.deployment `GreengrassResource.deployment`} 
   */
  GetDeployment = "greengrass:GetDeployment",

  /**
   * Read - Grants permission to retrieve the service role that is attached to an account
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_GetServiceRoleForAccount.html
   */
  GetServiceRoleForAccount = "greengrass:GetServiceRoleForAccount",

  /**
   * List - Grants permission to retrieve a paginated list of client devices associated to a AWS IoT Greengrass core device
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListClientDevicesAssociatedWithCoreDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDevice `GreengrassResource.coreDevice`} 
   */
  ListClientDevicesAssociatedWithCoreDevice = "greengrass:ListClientDevicesAssociatedWithCoreDevice",

  /**
   * List - Grants permission to retrieve a paginated list of all versions for a component
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListComponentVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.component `GreengrassResource.component`} 
   */
  ListComponentVersions = "greengrass:ListComponentVersions",

  /**
   * List - Grants permission to retrieve a paginated list of component summaries
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListComponents.html
   */
  ListComponents = "greengrass:ListComponents",

  /**
   * List - Grants permission to retrieve a paginated list of AWS IoT Greengrass core devices
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListCoreDevices.html
   */
  ListCoreDevices = "greengrass:ListCoreDevices",

  /**
   * List - Grants permission to retrieves a paginated list of deployments
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListDeployments.html
   */
  ListDeployments = "greengrass:ListDeployments",

  /**
   * List - Grants permission to retrieves a paginated list of deployment jobs that AWS IoT Greengrass sends to AWS IoT Greengrass core devices
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListEffectiveDeployments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDevice `GreengrassResource.coreDevice`} 
   */
  ListEffectiveDeployments = "greengrass:ListEffectiveDeployments",

  /**
   * List - Grants permission to retrieve a paginated list of the components that a AWS IoT Greengrass core device runs
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListInstalledComponents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.coreDevice `GreengrassResource.coreDevice`} 
   */
  ListInstalledComponents = "greengrass:ListInstalledComponents",

  /**
   * Read - Grants permission to list the tags for a resource
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.component `GreengrassResource.component`} 
   * - {@link GreengrassResource.componentVersion `GreengrassResource.componentVersion`} 
   * - {@link GreengrassResource.coreDevice `GreengrassResource.coreDevice`} 
   * - {@link GreengrassResource.deployment `GreengrassResource.deployment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "greengrass:ListTagsForResource",

  /**
   * List - Grants permission to list components that meet the component, version, and platform requirements of a deployment
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ResolveComponentCandidates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.componentVersion `GreengrassResource.componentVersion`} 
   */
  ResolveComponentCandidates = "greengrass:ResolveComponentCandidates",

  /**
   * Tagging - Grants permission to add tags to a resource
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.component `GreengrassResource.component`} 
   * - {@link GreengrassResource.componentVersion `GreengrassResource.componentVersion`} 
   * - {@link GreengrassResource.coreDevice `GreengrassResource.coreDevice`} 
   * - {@link GreengrassResource.deployment `GreengrassResource.deployment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "greengrass:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.component `GreengrassResource.component`} 
   * - {@link GreengrassResource.componentVersion `GreengrassResource.componentVersion`} 
   * - {@link GreengrassResource.coreDevice `GreengrassResource.coreDevice`} 
   * - {@link GreengrassResource.deployment `GreengrassResource.deployment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "greengrass:UntagResource",

  /**
   * Write - Grants permission to update the connectivity information for a Greengrass core. Any devices that belong to the group that has this core will receive this information in order to find the location of the core and connect to it
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_UpdateConnectivityInfo.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.connectivityInfo `GreengrassResource.connectivityInfo`} 
   */
  UpdateConnectivityInfo = "greengrass:UpdateConnectivityInfo",

  /**
   * * - Grant all greengrass permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrass.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GreengrassResource.group `GreengrassResource.group`} 
   * - {@link GreengrassResource.connectorDefinition `GreengrassResource.connectorDefinition`} 
   * - {@link GreengrassResource.coreDefinition `GreengrassResource.coreDefinition`} 
   * - {@link GreengrassResource.deviceDefinition `GreengrassResource.deviceDefinition`} 
   * - {@link GreengrassResource.functionDefinition `GreengrassResource.functionDefinition`} 
   * - {@link GreengrassResource.loggerDefinition `GreengrassResource.loggerDefinition`} 
   * - {@link GreengrassResource.resourceDefinition `GreengrassResource.resourceDefinition`} 
   * - {@link GreengrassResource.subscriptionDefinition `GreengrassResource.subscriptionDefinition`} 
   * - {@link GreengrassResource.thing `GreengrassResource.thing`} 
   * - {@link GreengrassResource.bulkDeployment `GreengrassResource.bulkDeployment`} 
   * - {@link GreengrassResource.connectivityInfo `GreengrassResource.connectivityInfo`} 
   * - {@link GreengrassResource.connectorDefinitionVersion `GreengrassResource.connectorDefinitionVersion`} 
   * - {@link GreengrassResource.coreDefinitionVersion `GreengrassResource.coreDefinitionVersion`} 
   * - {@link GreengrassResource.deployment `GreengrassResource.deployment`} 
   * - {@link GreengrassResource.deviceDefinitionVersion `GreengrassResource.deviceDefinitionVersion`} 
   * - {@link GreengrassResource.functionDefinitionVersion `GreengrassResource.functionDefinitionVersion`} 
   * - {@link GreengrassResource.certificateAuthority `GreengrassResource.certificateAuthority`} 
   * - {@link GreengrassResource.groupVersion `GreengrassResource.groupVersion`} 
   * - {@link GreengrassResource.loggerDefinitionVersion `GreengrassResource.loggerDefinitionVersion`} 
   * - {@link GreengrassResource.resourceDefinitionVersion `GreengrassResource.resourceDefinitionVersion`} 
   * - {@link GreengrassResource.subscriptionDefinitionVersion `GreengrassResource.subscriptionDefinitionVersion`} 
   * - {@link GreengrassResource.thingRuntimeConfig `GreengrassResource.thingRuntimeConfig`} 
   * - {@link GreengrassResource.coreDevice `GreengrassResource.coreDevice`} 
   * - {@link GreengrassResource.component `GreengrassResource.component`} 
   * - {@link GreengrassResource.componentVersion `GreengrassResource.componentVersion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the mandatory tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "greengrass:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrass.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrassv2.html
 */
export const GreengrassResource = {

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connectivityinfo.html
   */
  connectivityInfo: (options: Partial<{partition: string, region: string, account: string, thingName: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/things/${options.thingName || '*'}/connectivityInfo`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/developerguide/gg-sec.html
   */
  certificateAuthority: (options: Partial<{partition: string, region: string, account: string, groupId: string, certificateAuthorityId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/groups/${options.groupId || '*'}/certificateauthorities/${options.certificateAuthorityId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-createdeploymentrequest.html
   */
  deployment: (options: Partial<{partition: string, region: string, account: string, groupId: string, deploymentId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/groups/${options.groupId || '*'}/deployments/${options.deploymentId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/developerguide/bulk-deploy-cli.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  bulkDeployment: (options: Partial<{partition: string, region: string, account: string, bulkDeploymentId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/bulk/deployments/${options.bulkDeploymentId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-groupinformation.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  group: (options: Partial<{partition: string, region: string, account: string, groupId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/groups/${options.groupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-groupversion.html
   */
  groupVersion: (options: Partial<{partition: string, region: string, account: string, groupId: string, versionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/groups/${options.groupId || '*'}/versions/${options.versionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-core.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  coreDefinition: (options: Partial<{partition: string, region: string, account: string, coreDefinitionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/cores/${options.coreDefinitionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-coredefinitionversion.html
   */
  coreDefinitionVersion: (options: Partial<{partition: string, region: string, account: string, coreDefinitionId: string, versionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/cores/${options.coreDefinitionId || '*'}/versions/${options.versionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-device.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deviceDefinition: (options: Partial<{partition: string, region: string, account: string, deviceDefinitionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/devices/${options.deviceDefinitionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-devicedefinitionversion.html
   */
  deviceDefinitionVersion: (options: Partial<{partition: string, region: string, account: string, deviceDefinitionId: string, versionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/devices/${options.deviceDefinitionId || '*'}/versions/${options.versionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-function.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  functionDefinition: (options: Partial<{partition: string, region: string, account: string, functionDefinitionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/functions/${options.functionDefinitionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-functiondefinitionversion.html
   */
  functionDefinitionVersion: (options: Partial<{partition: string, region: string, account: string, functionDefinitionId: string, versionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/functions/${options.functionDefinitionId || '*'}/versions/${options.versionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-subscription.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  subscriptionDefinition: (options: Partial<{partition: string, region: string, account: string, subscriptionDefinitionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/subscriptions/${options.subscriptionDefinitionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-subscriptiondefinitionversion.html
   */
  subscriptionDefinitionVersion: (options: Partial<{partition: string, region: string, account: string, subscriptionDefinitionId: string, versionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/subscriptions/${options.subscriptionDefinitionId || '*'}/versions/${options.versionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-logger.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  loggerDefinition: (options: Partial<{partition: string, region: string, account: string, loggerDefinitionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/loggers/${options.loggerDefinitionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-loggerdefinitionversion.html
   */
  loggerDefinitionVersion: (options: Partial<{partition: string, region: string, account: string, loggerDefinitionId: string, versionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/loggers/${options.loggerDefinitionId || '*'}/versions/${options.versionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-resource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  resourceDefinition: (options: Partial<{partition: string, region: string, account: string, resourceDefinitionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/resources/${options.resourceDefinitionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-resourcedefinitionversion.html
   */
  resourceDefinitionVersion: (options: Partial<{partition: string, region: string, account: string, resourceDefinitionId: string, versionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/resources/${options.resourceDefinitionId || '*'}/versions/${options.versionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connector.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  connectorDefinition: (options: Partial<{partition: string, region: string, account: string, connectorDefinitionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/connectors/${options.connectorDefinitionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connectordefinitionversion.html
   */
  connectorDefinitionVersion: (options: Partial<{partition: string, region: string, account: string, connectorDefinitionId: string, versionId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/definition/connectors/${options.connectorDefinitionId || '*'}/versions/${options.versionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   */
  thing: (options: Partial<{partition: string, region: string, account: string, thingName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:thing/${options.thingName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   */
  thingRuntimeConfig: (options: Partial<{partition: string, region: string, account: string, thingName: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/things/${options.thingName || '*'}/runtimeconfig`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_ConnectivityInfo.html
   */
  connectivityInfo: (options: Partial<{partition: string, region: string, account: string, thingName: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:/greengrass/things/${options.thingName || '*'}/connectivityInfo`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_Component.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  component: (options: Partial<{partition: string, region: string, account: string, componentName: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:components:${options.componentName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_Component.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  componentVersion: (options: Partial<{partition: string, region: string, account: string, componentName: string, componentVersion: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:components:${options.componentName || '*'}:versions:${options.componentVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_CoreDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  coreDevice: (options: Partial<{partition: string, region: string, account: string, coreDeviceThingName: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:coreDevices:${options.coreDeviceThingName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/greengrass/v2/APIReference/API_Deployment.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deployment: (options: Partial<{partition: string, region: string, account: string, deploymentId: string}> = {}) => `arn:${options.partition || '*'}:greengrass:${options.region || '*'}:${options.account || '*'}:deployments:${options.deploymentId || '*'}`,
}

