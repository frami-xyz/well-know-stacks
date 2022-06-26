/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdevicefarm.html
 */
export enum DevicefarmAction {

  /**
   * Write - Grants permission to create a device pool within a project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateDevicePool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   */
  CreateDevicePool = "devicefarm:CreateDevicePool",

  /**
   * Write - Grants permission to create a device instance profile
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateInstanceProfile.html
   */
  CreateInstanceProfile = "devicefarm:CreateInstanceProfile",

  /**
   * Write - Grants permission to create a network profile within a project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateNetworkProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   */
  CreateNetworkProfile = "devicefarm:CreateNetworkProfile",

  /**
   * Write - Grants permission to create a project for mobile testing
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProject = "devicefarm:CreateProject",

  /**
   * Write - Grants permission to start a remote access session to a device instance
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateRemoteAccessSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.device `DevicefarmResource.device`} 
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   * - {@link DevicefarmResource.deviceinstance `DevicefarmResource.deviceinstance`} 
   * - {@link DevicefarmResource.upload `DevicefarmResource.upload`} 
   */
  CreateRemoteAccessSession = "devicefarm:CreateRemoteAccessSession",

  /**
   * Write - Grants permission to create a project for desktop testing
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridProject.html
   */
  CreateTestGridProject = "devicefarm:CreateTestGridProject",

  /**
   * Write - Grants permission to generate a new pre-signed url used to access our test grid service
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridUrl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.testgridProject `DevicefarmResource.testgridProject`} 
   */
  CreateTestGridUrl = "devicefarm:CreateTestGridUrl",

  /**
   * Write - Grants permission to upload a new file or app within a project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   */
  CreateUpload = "devicefarm:CreateUpload",

  /**
   * Write - Grants permission to create an Amazon Virtual Private Cloud (VPC) endpoint configuration
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateVPCEConfiguration.html
   */
  CreateVPCEConfiguration = "devicefarm:CreateVPCEConfiguration",

  /**
   * Write - Grants permission to delete a user-generated device pool
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteDevicePool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.devicepool `DevicefarmResource.devicepool`} 
   */
  DeleteDevicePool = "devicefarm:DeleteDevicePool",

  /**
   * Write - Grants permission to delete a user-generated instance profile
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteInstanceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.instanceprofile `DevicefarmResource.instanceprofile`} 
   */
  DeleteInstanceProfile = "devicefarm:DeleteInstanceProfile",

  /**
   * Write - Grants permission to delete a user-generated network profile
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/DeleteNetworkProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.networkprofile `DevicefarmResource.networkprofile`} 
   */
  DeleteNetworkProfile = "devicefarm:DeleteNetworkProfile",

  /**
   * Write - Grants permission to delete a mobile testing project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   */
  DeleteProject = "devicefarm:DeleteProject",

  /**
   * Write - Grants permission to delete a completed remote access session and its results
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRemoteAccessSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.session `DevicefarmResource.session`} 
   */
  DeleteRemoteAccessSession = "devicefarm:DeleteRemoteAccessSession",

  /**
   * Write - Grants permission to delete a run
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.run `DevicefarmResource.run`} 
   */
  DeleteRun = "devicefarm:DeleteRun",

  /**
   * Write - Grants permission to delete a desktop testing project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteTestGridProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.testgridProject `DevicefarmResource.testgridProject`} 
   */
  DeleteTestGridProject = "devicefarm:DeleteTestGridProject",

  /**
   * Write - Grants permission to delete a user-uploaded file
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.upload `DevicefarmResource.upload`} 
   */
  DeleteUpload = "devicefarm:DeleteUpload",

  /**
   * Write - Grants permission to delete an Amazon Virtual Private Cloud (VPC) endpoint configuration
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteVPCEConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.vpceconfiguration `DevicefarmResource.vpceconfiguration`} 
   */
  DeleteVPCEConfiguration = "devicefarm:DeleteVPCEConfiguration",

  /**
   * Read - Grants permission to retrieve the number of unmetered iOS and/or unmetered Android devices purchased by the account
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetAccountSettings.html
   */
  GetAccountSettings = "devicefarm:GetAccountSettings",

  /**
   * Read - Grants permission to retrieve the information of a unique device type
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.device `DevicefarmResource.device`} 
   */
  GetDevice = "devicefarm:GetDevice",

  /**
   * Read - Grants permission to retireve the information of a device instance
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDeviceInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.deviceinstance `DevicefarmResource.deviceinstance`} 
   */
  GetDeviceInstance = "devicefarm:GetDeviceInstance",

  /**
   * Read - Grants permission to retireve the information of a device pool
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.devicepool `DevicefarmResource.devicepool`} 
   */
  GetDevicePool = "devicefarm:GetDevicePool",

  /**
   * Read - Grants permission to retrieve information about the compatibility of a test and/or app with a device pool
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePoolCompatibility.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.devicepool `DevicefarmResource.devicepool`} 
   * - {@link DevicefarmResource.upload `DevicefarmResource.upload`} 
   */
  GetDevicePoolCompatibility = "devicefarm:GetDevicePoolCompatibility",

  /**
   * Read - Grants permission to retireve the information of an instance profile
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetInstanceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.instanceprofile `DevicefarmResource.instanceprofile`} 
   */
  GetInstanceProfile = "devicefarm:GetInstanceProfile",

  /**
   * Read - Grants permission to retireve the information of a job
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.job `DevicefarmResource.job`} 
   */
  GetJob = "devicefarm:GetJob",

  /**
   * Read - Grants permission to retireve the information of a network profile
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetNetworkProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.networkprofile `DevicefarmResource.networkprofile`} 
   */
  GetNetworkProfile = "devicefarm:GetNetworkProfile",

  /**
   * Read - Grants permission to retrieve the current status and future status of all offerings purchased by an AWS account
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetOfferingStatus.html
   */
  GetOfferingStatus = "devicefarm:GetOfferingStatus",

  /**
   * Read - Grants permission to retrieve information about a mobile testing project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   */
  GetProject = "devicefarm:GetProject",

  /**
   * Read - Grants permission to retireve the link to a currently running remote access session
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRemoteAccessSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.session `DevicefarmResource.session`} 
   */
  GetRemoteAccessSession = "devicefarm:GetRemoteAccessSession",

  /**
   * Read - Grants permission to retireve the information of a run
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.run `DevicefarmResource.run`} 
   */
  GetRun = "devicefarm:GetRun",

  /**
   * Read - Grants permission to retireve the information of a testing suite
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetSuite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.suite `DevicefarmResource.suite`} 
   */
  GetSuite = "devicefarm:GetSuite",

  /**
   * Read - Grants permission to retireve the information of a test case
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.test `DevicefarmResource.test`} 
   */
  GetTest = "devicefarm:GetTest",

  /**
   * Read - Grants permission to retrieve information about a desktop testing project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.testgridProject `DevicefarmResource.testgridProject`} 
   */
  GetTestGridProject = "devicefarm:GetTestGridProject",

  /**
   * Read - Grants permission to retireve the information of a test grid session
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.testgridProject `DevicefarmResource.testgridProject`} 
   * - {@link DevicefarmResource.testgridSession `DevicefarmResource.testgridSession`} 
   */
  GetTestGridSession = "devicefarm:GetTestGridSession",

  /**
   * Read - Grants permission to retireve the information of an uploaded file
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.upload `DevicefarmResource.upload`} 
   */
  GetUpload = "devicefarm:GetUpload",

  /**
   * Read - Grants permission to retireve the information of an Amazon Virtual Private Cloud (VPC) endpoint configuration
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetVPCEConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.vpceconfiguration `DevicefarmResource.vpceconfiguration`} 
   */
  GetVPCEConfiguration = "devicefarm:GetVPCEConfiguration",

  /**
   * Write - Grants permission to install an application to a device in a remote access session
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_InstallToRemoteAccessSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.session `DevicefarmResource.session`} 
   * - {@link DevicefarmResource.upload `DevicefarmResource.upload`} 
   */
  InstallToRemoteAccessSession = "devicefarm:InstallToRemoteAccessSession",

  /**
   * List - Grants permission to list the artifacts in a project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListArtifacts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.job `DevicefarmResource.job`} 
   * - {@link DevicefarmResource.run `DevicefarmResource.run`} 
   * - {@link DevicefarmResource.suite `DevicefarmResource.suite`} 
   * - {@link DevicefarmResource.test `DevicefarmResource.test`} 
   */
  ListArtifacts = "devicefarm:ListArtifacts",

  /**
   * List - Grants permission to list the information of device instances
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDeviceInstances.html
   */
  ListDeviceInstances = "devicefarm:ListDeviceInstances",

  /**
   * List - Grants permission to list the information of device pools
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevicePools.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   */
  ListDevicePools = "devicefarm:ListDevicePools",

  /**
   * List - Grants permission to list the information of unique device types
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevices.html
   */
  ListDevices = "devicefarm:ListDevices",

  /**
   * List - Grants permission to list the information of device instance profiles
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListInstanceProfiles.html
   */
  ListInstanceProfiles = "devicefarm:ListInstanceProfiles",

  /**
   * List - Grants permission to list the information of jobs within a run
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.run `DevicefarmResource.run`} 
   */
  ListJobs = "devicefarm:ListJobs",

  /**
   * List - Grants permission to list the information of network profiles within a project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListNetworkProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   */
  ListNetworkProfiles = "devicefarm:ListNetworkProfiles",

  /**
   * List - Grants permission to list the offering promotions
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingPromotions.html
   */
  ListOfferingPromotions = "devicefarm:ListOfferingPromotions",

  /**
   * List - Grants permission to list all of the historical purchases, renewals, and system renewal transactions for an AWS account
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingTransactions.html
   */
  ListOfferingTransactions = "devicefarm:ListOfferingTransactions",

  /**
   * List - Grants permission to list the products or offerings that the user can manage through the API
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferings.html
   */
  ListOfferings = "devicefarm:ListOfferings",

  /**
   * List - Grants permission to list the information of mobile testing projects for an AWS account
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListProjects.html
   */
  ListProjects = "devicefarm:ListProjects",

  /**
   * List - Grants permission to list the information of currently running remote access sessions
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRemoteAccessSessions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   */
  ListRemoteAccessSessions = "devicefarm:ListRemoteAccessSessions",

  /**
   * List - Grants permission to list the information of runs within a project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRuns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   */
  ListRuns = "devicefarm:ListRuns",

  /**
   * List - Grants permission to list the information of samples within a project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSamples.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.job `DevicefarmResource.job`} 
   */
  ListSamples = "devicefarm:ListSamples",

  /**
   * List - Grants permission to list the information of testing suites within a job
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSuites.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.job `DevicefarmResource.job`} 
   */
  ListSuites = "devicefarm:ListSuites",

  /**
   * List - Grants permission to list the tags of a resource
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.device `DevicefarmResource.device`} 
   * - {@link DevicefarmResource.deviceinstance `DevicefarmResource.deviceinstance`} 
   * - {@link DevicefarmResource.devicepool `DevicefarmResource.devicepool`} 
   * - {@link DevicefarmResource.instanceprofile `DevicefarmResource.instanceprofile`} 
   * - {@link DevicefarmResource.networkprofile `DevicefarmResource.networkprofile`} 
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   * - {@link DevicefarmResource.run `DevicefarmResource.run`} 
   * - {@link DevicefarmResource.session `DevicefarmResource.session`} 
   * - {@link DevicefarmResource.testgridProject `DevicefarmResource.testgridProject`} 
   * - {@link DevicefarmResource.testgridSession `DevicefarmResource.testgridSession`} 
   * - {@link DevicefarmResource.vpceconfiguration `DevicefarmResource.vpceconfiguration`} 
   */
  ListTagsForResource = "devicefarm:ListTagsForResource",

  /**
   * List - Grants permission to list the information of desktop testing projects for an AWS account
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridProjects.html
   */
  ListTestGridProjects = "devicefarm:ListTestGridProjects",

  /**
   * List - Grants permission to list the session actions performed during a test grid session
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionActions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.testgridSession `DevicefarmResource.testgridSession`} 
   */
  ListTestGridSessionActions = "devicefarm:ListTestGridSessionActions",

  /**
   * List - Grants permission to list the artifacts generated by a test grid session
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionArtifacts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.testgridSession `DevicefarmResource.testgridSession`} 
   */
  ListTestGridSessionArtifacts = "devicefarm:ListTestGridSessionArtifacts",

  /**
   * List - Grants permission to list the sessions within a test grid project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.testgridProject `DevicefarmResource.testgridProject`} 
   */
  ListTestGridSessions = "devicefarm:ListTestGridSessions",

  /**
   * List - Grants permission to list the information of tests within a testing suite
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTests.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.suite `DevicefarmResource.suite`} 
   */
  ListTests = "devicefarm:ListTests",

  /**
   * List - Grants permission to list the information of unique problems within a run
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUniqueProblems.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.run `DevicefarmResource.run`} 
   */
  ListUniqueProblems = "devicefarm:ListUniqueProblems",

  /**
   * List - Grants permission to list the information of uploads within a project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUploads.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   */
  ListUploads = "devicefarm:ListUploads",

  /**
   * List - Grants permission to list the information of Amazon Virtual Private Cloud (VPC) endpoint configurations
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListVPCEConfigurations.html
   */
  ListVPCEConfigurations = "devicefarm:ListVPCEConfigurations",

  /**
   * Write - Grants permission to purchase offerings for an AWS account
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_PurchaseOffering.html
   */
  PurchaseOffering = "devicefarm:PurchaseOffering",

  /**
   * Write - Grants permission to set the quantity of devices to renew for an offering
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_RenewOffering.html
   */
  RenewOffering = "devicefarm:RenewOffering",

  /**
   * Write - Grants permission to schedule a run
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ScheduleRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   * - {@link DevicefarmResource.devicepool `DevicefarmResource.devicepool`} 
   * - {@link DevicefarmResource.upload `DevicefarmResource.upload`} 
   * 
   * It requires the following actions:
   * - devicepool*
   * - project*
   * - upload
   * - project*
   * - upload
   */
  ScheduleRun = "devicefarm:ScheduleRun",

  /**
   * Write - Grants permission to terminate a running job
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.job `DevicefarmResource.job`} 
   */
  StopJob = "devicefarm:StopJob",

  /**
   * Write - Grants permission to terminate a running remote access session
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRemoteAccessSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.session `DevicefarmResource.session`} 
   */
  StopRemoteAccessSession = "devicefarm:StopRemoteAccessSession",

  /**
   * Write - Grants permission to terminate a running test run
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.run `DevicefarmResource.run`} 
   */
  StopRun = "devicefarm:StopRun",

  /**
   * Tagging - Grants permission to add tags to a resource
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.device `DevicefarmResource.device`} 
   * - {@link DevicefarmResource.deviceinstance `DevicefarmResource.deviceinstance`} 
   * - {@link DevicefarmResource.devicepool `DevicefarmResource.devicepool`} 
   * - {@link DevicefarmResource.instanceprofile `DevicefarmResource.instanceprofile`} 
   * - {@link DevicefarmResource.networkprofile `DevicefarmResource.networkprofile`} 
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   * - {@link DevicefarmResource.run `DevicefarmResource.run`} 
   * - {@link DevicefarmResource.session `DevicefarmResource.session`} 
   * - {@link DevicefarmResource.testgridProject `DevicefarmResource.testgridProject`} 
   * - {@link DevicefarmResource.testgridSession `DevicefarmResource.testgridSession`} 
   * - {@link DevicefarmResource.vpceconfiguration `DevicefarmResource.vpceconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "devicefarm:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.device `DevicefarmResource.device`} 
   * - {@link DevicefarmResource.deviceinstance `DevicefarmResource.deviceinstance`} 
   * - {@link DevicefarmResource.devicepool `DevicefarmResource.devicepool`} 
   * - {@link DevicefarmResource.instanceprofile `DevicefarmResource.instanceprofile`} 
   * - {@link DevicefarmResource.networkprofile `DevicefarmResource.networkprofile`} 
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   * - {@link DevicefarmResource.run `DevicefarmResource.run`} 
   * - {@link DevicefarmResource.session `DevicefarmResource.session`} 
   * - {@link DevicefarmResource.testgridProject `DevicefarmResource.testgridProject`} 
   * - {@link DevicefarmResource.testgridSession `DevicefarmResource.testgridSession`} 
   * - {@link DevicefarmResource.vpceconfiguration `DevicefarmResource.vpceconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "devicefarm:UntagResource",

  /**
   * Write - Grants permission to modify an existing device instance
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDeviceInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.deviceinstance `DevicefarmResource.deviceinstance`} 
   * - {@link DevicefarmResource.instanceprofile `DevicefarmResource.instanceprofile`} 
   */
  UpdateDeviceInstance = "devicefarm:UpdateDeviceInstance",

  /**
   * Write - Grants permission to modify an existing device pool
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDevicePool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.devicepool `DevicefarmResource.devicepool`} 
   */
  UpdateDevicePool = "devicefarm:UpdateDevicePool",

  /**
   * Write - Grants permission to modify an existing instance profile
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateInstanceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.instanceprofile `DevicefarmResource.instanceprofile`} 
   */
  UpdateInstanceProfile = "devicefarm:UpdateInstanceProfile",

  /**
   * Write - Grants permission to modify an existing network profile
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateNetworkProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.networkprofile `DevicefarmResource.networkprofile`} 
   */
  UpdateNetworkProfile = "devicefarm:UpdateNetworkProfile",

  /**
   * Write - Grants permission to modify an existing mobile testing project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   */
  UpdateProject = "devicefarm:UpdateProject",

  /**
   * Write - Grants permission to modify an existing desktop testing project
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateTestGridProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.testgridProject `DevicefarmResource.testgridProject`} 
   */
  UpdateTestGridProject = "devicefarm:UpdateTestGridProject",

  /**
   * Write - Grants permission to modify an existing upload
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.upload `DevicefarmResource.upload`} 
   */
  UpdateUpload = "devicefarm:UpdateUpload",

  /**
   * Write - Grants permission to modify an existing Amazon Virtual Private Cloud (VPC) endpoint configuration
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateVPCEConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.vpceconfiguration `DevicefarmResource.vpceconfiguration`} 
   */
  UpdateVPCEConfiguration = "devicefarm:UpdateVPCEConfiguration",

  /**
   * * - Grant all devicefarm permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdevicefarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DevicefarmResource.project `DevicefarmResource.project`} 
   * - {@link DevicefarmResource.device `DevicefarmResource.device`} 
   * - {@link DevicefarmResource.deviceinstance `DevicefarmResource.deviceinstance`} 
   * - {@link DevicefarmResource.upload `DevicefarmResource.upload`} 
   * - {@link DevicefarmResource.testgridProject `DevicefarmResource.testgridProject`} 
   * - {@link DevicefarmResource.devicepool `DevicefarmResource.devicepool`} 
   * - {@link DevicefarmResource.instanceprofile `DevicefarmResource.instanceprofile`} 
   * - {@link DevicefarmResource.networkprofile `DevicefarmResource.networkprofile`} 
   * - {@link DevicefarmResource.session `DevicefarmResource.session`} 
   * - {@link DevicefarmResource.run `DevicefarmResource.run`} 
   * - {@link DevicefarmResource.vpceconfiguration `DevicefarmResource.vpceconfiguration`} 
   * - {@link DevicefarmResource.job `DevicefarmResource.job`} 
   * - {@link DevicefarmResource.suite `DevicefarmResource.suite`} 
   * - {@link DevicefarmResource.test `DevicefarmResource.test`} 
   * - {@link DevicefarmResource.testgridSession `DevicefarmResource.testgridSession`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "devicefarm:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdevicefarm.html
 */
export const DevicefarmResource = {

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Project.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  project: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:project:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Run.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  run: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:run:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Job.html
   */
  job: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:job:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Suite.html
   */
  suite: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:suite:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Test.html
   */
  test: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:test:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Upload.html
   */
  upload: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:upload:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Artifact.html
   */
  artifact: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:artifact:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Sample.html
   */
  sample: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:sample:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_NetworkProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  networkprofile: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:networkprofile:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeviceInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deviceinstance: (options: Partial<{partition: string, region: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}::deviceinstance:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_RemoteAccessSession.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  session: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:session:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DevicePool.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  devicepool: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:devicepool:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Device.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  device: (options: Partial<{partition: string, region: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}::device:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_InstanceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  instanceprofile: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:instanceprofile:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_VPCEConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  vpceconfiguration: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:vpceconfiguration:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TestGridProject.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  testgridProject: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:testgrid-project:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TestGridSession.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  testgridSession: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:devicefarm:${options.region || '*'}:${options.account || '*'}:testgrid-session:${options.resourceId || '*'}`,
}

