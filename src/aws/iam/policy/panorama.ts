/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html
 */
export enum PanoramaAction {

  /**
   * Write - Grants permission to create an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreateApp.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateApp = "panorama:CreateApp",

  /**
   * Write - Grants permission to deploy an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreateAppDeployment.html
   */
  CreateAppDeployment = "panorama:CreateAppDeployment",

  /**
   * Write - Grants permission to create a version of an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreateAppVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.appVersion `PanoramaResource.appVersion`} 
   */
  CreateAppVersion = "panorama:CreateAppVersion",

  /**
   * Write - Grants permission to create an AWS Panorama Application Instance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreateApplicationInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateApplicationInstance = "panorama:CreateApplicationInstance",

  /**
   * Write - Grants permission to create an AWS Panorama datasource
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreateDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDataSource = "panorama:CreateDataSource",

  /**
   * Write - Grants permission to configure a deployment for an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreateDeploymentConfiguration.html
   */
  CreateDeploymentConfiguration = "panorama:CreateDeploymentConfiguration",

  /**
   * Write - Grants permission to generate a list of cameras on the same network as an AWS Panorama Appliance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreateInputList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   */
  CreateInputs = "panorama:CreateInputs",

  /**
   * Write - Grants permission to create a job for an AWS Panorama Appliance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreateJobForDevices.html
   */
  CreateJobForDevices = "panorama:CreateJobForDevices",

  /**
   * Write - Grants permission to import a machine learning model into AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreateModel.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateModel = "panorama:CreateModel",

  /**
   * Write - Grants permission to create an AWS Panorama Node
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreateNodeFromTemplateJob.html
   */
  CreateNodeFromTemplateJob = "panorama:CreateNodeFromTemplateJob",

  /**
   * Write - Grants permission to create an AWS Panorama Package
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreatePackage.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreatePackage = "panorama:CreatePackage",

  /**
   * Write - Grants permission to create an AWS Panorama Package
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreatePackageImportJob.html
   */
  CreatePackageImportJob = "panorama:CreatePackageImportJob",

  /**
   * Write - Grants permission to generate a list of streams available to an AWS Panorama Appliance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_CreateStreamsList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   */
  CreateStreams = "panorama:CreateStreams",

  /**
   * Write - Grants permission to delete an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DeleteApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.app `PanoramaResource.app`} 
   */
  DeleteApp = "panorama:DeleteApp",

  /**
   * Write - Grants permission to delete a version of an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DeleteAppVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.app `PanoramaResource.app`} 
   */
  DeleteAppVersion = "panorama:DeleteAppVersion",

  /**
   * Write - Grants permission to delete an AWS Panorama datasource
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DeleteDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.dataSource `PanoramaResource.dataSource`} 
   */
  DeleteDataSource = "panorama:DeleteDataSource",

  /**
   * Write - Grants permission to deregister an AWS Panorama Appliance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DeleteDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   */
  DeleteDevice = "panorama:DeleteDevice",

  /**
   * Write - Grants permission to delete a machine learning model from AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DeleteModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.model `PanoramaResource.model`} 
   */
  DeleteModel = "panorama:DeleteModel",

  /**
   * Write - Grants permission to delete an AWS Panorama Package
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DeletePackage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.package `PanoramaResource.package`} 
   */
  DeletePackage = "panorama:DeletePackage",

  /**
   * Write - Grants permission to deregister an AWS Panorama Package Version
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DeregisterPackageVersion.html
   */
  DeregisterPackageVersion = "panorama:DeregisterPackageVersion",

  /**
   * Read - Grants permission to view details about an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.app `PanoramaResource.app`} 
   */
  DescribeApp = "panorama:DescribeApp",

  /**
   * Read - Grants permission to view details about a deployment for an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeAppDeployment.html
   */
  DescribeAppDeployment = "panorama:DescribeAppDeployment",

  /**
   * Read - Grants permission to view details about a version of an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeAppVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.app `PanoramaResource.app`} 
   */
  DescribeAppVersion = "panorama:DescribeAppVersion",

  /**
   * Read - Grants permission to view details about an AWS Panorama Application Instance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeApplicationInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.applicationInstance `PanoramaResource.applicationInstance`} 
   */
  DescribeApplicationInstance = "panorama:DescribeApplicationInstance",

  /**
   * Read - Grants permission to view details about an AWS Panorama Application Instance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeApplicationInstanceDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.applicationInstance `PanoramaResource.applicationInstance`} 
   */
  DescribeApplicationInstanceDetails = "panorama:DescribeApplicationInstanceDetails",

  /**
   * Read - Grants permission to view details about a datasource in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.dataSource `PanoramaResource.dataSource`} 
   */
  DescribeDataSource = "panorama:DescribeDataSource",

  /**
   * Read - Grants permission to view details about an AWS Panorama Appliance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   */
  DescribeDevice = "panorama:DescribeDevice",

  /**
   * Read - Grants permission to view job details for an AWS Panorama Appliance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeDeviceJob.html
   */
  DescribeDeviceJob = "panorama:DescribeDeviceJob",

  /**
   * Read - Grants permission to view details about a machine learning model in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.model `PanoramaResource.model`} 
   */
  DescribeModel = "panorama:DescribeModel",

  /**
   * Read - Grants permission to view details about an AWS Panorama Node
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeNode.html
   */
  DescribeNode = "panorama:DescribeNode",

  /**
   * Read - Grants permission to view details about AWS Panorama Node
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeNodeFromTemplateJob.html
   */
  DescribeNodeFromTemplateJob = "panorama:DescribeNodeFromTemplateJob",

  /**
   * Read - Grants permission to view details about an AWS Panorama Package
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribePackage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.package `PanoramaResource.package`} 
   */
  DescribePackage = "panorama:DescribePackage",

  /**
   * Read - Grants permission to view details about an AWS Panorama Package
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribePackageImportJob.html
   */
  DescribePackageImportJob = "panorama:DescribePackageImportJob",

  /**
   * Read - Grants permission to view details about an AWS Panorama Package Version
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribePackageVersion.html
   */
  DescribePackageVersion = "panorama:DescribePackageVersion",

  /**
   * Read - Grants permission to view details about a software version for the AWS Panorama Appliance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_DescribeSoftware.html
   */
  DescribeSoftware = "panorama:DescribeSoftware",

  /**
   * Read - Grants permission to view details about a deployment configuration for an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_GetDeploymentConfiguration.html
   */
  GetDeploymentConfiguration = "panorama:GetDeploymentConfiguration",

  /**
   * Read - Grants permission to retrieve a list of cameras generated with CreateInputs
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_GetInputList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   */
  GetInputs = "panorama:GetInputs",

  /**
   * Read - Grants permission to retrieve a list of streams generated with CreateStreams
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_GetStreamsList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   */
  GetStreams = "panorama:GetStreams",

  /**
   * Read - Grants permission to generate a WebSocket endpoint for communication with AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_GetWebSocketURL.html
   */
  GetWebSocketURL = "panorama:GetWebSocketURL",

  /**
   * List - Grants permission to retrieve a list of deployments for an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListAppDeploymentOperations.html
   */
  ListAppDeploymentOperations = "panorama:ListAppDeploymentOperations",

  /**
   * List - Grants permission to retrieve a list of application versions in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListAppVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.app `PanoramaResource.app`} 
   */
  ListAppVersions = "panorama:ListAppVersions",

  /**
   * List - Grants permission to retrieve a list of application instance dependencies in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListApplicationInstanceDependencies.html
   */
  ListApplicationInstanceDependencies = "panorama:ListApplicationInstanceDependencies",

  /**
   * List - Grants permission to retrieve a list of node instances of application instances in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListApplicationInstanceNodeInstances.html
   */
  ListApplicationInstanceNodeInstances = "panorama:ListApplicationInstanceNodeInstances",

  /**
   * List - Grants permission to retrieve a list of application instances in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListApplicationInstances.html
   */
  ListApplicationInstances = "panorama:ListApplicationInstances",

  /**
   * List - Grants permission to retrieve a list of applications in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListApps.html
   */
  ListApps = "panorama:ListApps",

  /**
   * List - Grants permission to retrieve a list of datasources in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListDataSources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   */
  ListDataSources = "panorama:ListDataSources",

  /**
   * List - Grants permission to retrieve a list of deployment configurations in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListDeploymentConfigurations.html
   */
  ListDeploymentConfigurations = "panorama:ListDeploymentConfigurations",

  /**
   * List - Grants permission to retrieve a list of appliances in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListDevices.html
   */
  ListDevices = "panorama:ListDevices",

  /**
   * List - Grants permission to retrieve a list of jobs for an AWS Panorama Appliance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListDevicesJobs.html
   */
  ListDevicesJobs = "panorama:ListDevicesJobs",

  /**
   * List - Grants permission to retrieve a list of models in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListModels.html
   */
  ListModels = "panorama:ListModels",

  /**
   * List - Grants permission to retrieve a list of Nodes for an AWS Panorama Appliance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListNodeFromTemplateJobs.html
   */
  ListNodeFromTemplateJobs = "panorama:ListNodeFromTemplateJobs",

  /**
   * List - Grants permission to retrieve a list of nodes in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListNodes.html
   */
  ListNodes = "panorama:ListNodes",

  /**
   * List - Grants permission to retrieve a list of packages in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListPackageImportJobs.html
   */
  ListPackageImportJobs = "panorama:ListPackageImportJobs",

  /**
   * List - Grants permission to retrieve a list of packages in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListPackages.html
   */
  ListPackages = "panorama:ListPackages",

  /**
   * Read - Grants permission to retrieve a list of tags for a resource in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.app `PanoramaResource.app`} 
   * - {@link PanoramaResource.dataSource `PanoramaResource.dataSource`} 
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   * - {@link PanoramaResource.model `PanoramaResource.model`} 
   */
  ListTagsForResource = "panorama:ListTagsForResource",

  /**
   * Write - Grants permission to register an AWS Panorama Appliance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_ProvisionDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ProvisionDevice = "panorama:ProvisionDevice",

  /**
   * Write - Grants permission to register an AWS Panorama Package Version
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_RegisterPackageVersion.html
   */
  RegisterPackageVersion = "panorama:RegisterPackageVersion",

  /**
   * Write - Grants permission to remove an AWS Panorama Application Instance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_RemoveApplicationInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.applicationInstance `PanoramaResource.applicationInstance`} 
   */
  RemoveApplicationInstance = "panorama:RemoveApplicationInstance",

  /**
   * Tagging - Grants permission to add tags to a resource in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.app `PanoramaResource.app`} 
   * - {@link PanoramaResource.dataSource `PanoramaResource.dataSource`} 
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   * - {@link PanoramaResource.model `PanoramaResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "panorama:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource in AWS Panorama
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.app `PanoramaResource.app`} 
   * - {@link PanoramaResource.dataSource `PanoramaResource.dataSource`} 
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   * - {@link PanoramaResource.model `PanoramaResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "panorama:UntagResource",

  /**
   * Write - Grants permission to modify an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_UpdateApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.app `PanoramaResource.app`} 
   */
  UpdateApp = "panorama:UpdateApp",

  /**
   * Write - Grants permission to modify the version-specific configuration of an AWS Panorama application
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_UpdateAppConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.app `PanoramaResource.app`} 
   */
  UpdateAppConfiguration = "panorama:UpdateAppConfiguration",

  /**
   * Write - Grants permission to modify an AWS Panorama datasource
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_UpdateDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.dataSource `PanoramaResource.dataSource`} 
   */
  UpdateDataSource = "panorama:UpdateDataSource",

  /**
   * Write - Grants permission to modify basic settings for an AWS Panorama Appliance
   * @see https://docs.aws.amazon.com/panorama/latest/dev/API_UpdateDeviceMetadata.html
   */
  UpdateDeviceMetadata = "panorama:UpdateDeviceMetadata",

  /**
   * * - Grant all panorama permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PanoramaResource.appVersion `PanoramaResource.appVersion`} 
   * - {@link PanoramaResource.device `PanoramaResource.device`} 
   * - {@link PanoramaResource.app `PanoramaResource.app`} 
   * - {@link PanoramaResource.dataSource `PanoramaResource.dataSource`} 
   * - {@link PanoramaResource.model `PanoramaResource.model`} 
   * - {@link PanoramaResource.package `PanoramaResource.package`} 
   * - {@link PanoramaResource.applicationInstance `PanoramaResource.applicationInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "panorama:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspanorama.html
 */
export const PanoramaResource = {

  /**
   * @see https://docs.aws.amazon.com/panorama/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  device: (options: Partial<{partition: string, region: string, account: string, deviceId: string}> = {}) => `arn:${options.partition || '*'}:panorama:${options.region || '*'}:${options.account || '*'}:device/${options.deviceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/panorama/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  package: (options: Partial<{partition: string, region: string, account: string, packageId: string}> = {}) => `arn:${options.partition || '*'}:panorama:${options.region || '*'}:${options.account || '*'}:package/${options.packageId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/panorama/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  applicationInstance: (options: Partial<{partition: string, region: string, account: string, applicationInstanceId: string}> = {}) => `arn:${options.partition || '*'}:panorama:${options.region || '*'}:${options.account || '*'}:applicationInstance/${options.applicationInstanceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/panorama/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataSource: (options: Partial<{partition: string, region: string, account: string, deviceId: string, dataSourceName: string}> = {}) => `arn:${options.partition || '*'}:panorama:${options.region || '*'}:${options.account || '*'}:dataSource/${options.deviceId || '*'}/${options.dataSourceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/panorama/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  model: (options: Partial<{partition: string, region: string, account: string, modelName: string}> = {}) => `arn:${options.partition || '*'}:panorama:${options.region || '*'}:${options.account || '*'}:model/${options.modelName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/panorama/latest/dev/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  app: (options: Partial<{partition: string, region: string, account: string, appName: string}> = {}) => `arn:${options.partition || '*'}:panorama:${options.region || '*'}:${options.account || '*'}:app/${options.appName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/panorama/latest/dev/
   */
  appVersion: (options: Partial<{partition: string, region: string, account: string, appName: string, appVersion: string}> = {}) => `arn:${options.partition || '*'}:panorama:${options.region || '*'}:${options.account || '*'}:app/${options.appName || '*'}:${options.appVersion || '*'}`,
}

