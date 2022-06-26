/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworks.html
 */
export enum OpsworksAction {

  /**
   * Write - Grants permission to assign a registered instance to a layer
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  AssignInstance = "opsworks:AssignInstance",

  /**
   * Write - Grants permission to assign one of the stack's registered Amazon EBS volumes to a specified instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssignVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  AssignVolume = "opsworks:AssignVolume",

  /**
   * Write - Grants permission to associate one of the stack's registered Elastic IP addresses with a specified instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AssociateElasticIp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  AssociateElasticIp = "opsworks:AssociateElasticIp",

  /**
   * Write - Grants permission to attach an Elastic Load Balancing load balancer to a specified layer
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_AttachElasticLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  AttachElasticLoadBalancer = "opsworks:AttachElasticLoadBalancer",

  /**
   * Write - Grants permission to create a clone of a specified stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CloneStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  CloneStack = "opsworks:CloneStack",

  /**
   * Write - Grants permission to create an app for a specified stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  CreateApp = "opsworks:CreateApp",

  /**
   * Write - Grants permission to run deployment or stack commands
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  CreateDeployment = "opsworks:CreateDeployment",

  /**
   * Write - Grants permission to create an instance in a specified stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  CreateInstance = "opsworks:CreateInstance",

  /**
   * Write - Grants permission to create a layer
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateLayer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  CreateLayer = "opsworks:CreateLayer",

  /**
   * Write - Grants permission to create a new stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateStack.html
   */
  CreateStack = "opsworks:CreateStack",

  /**
   * Write - Grants permission to create a new user profile
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_CreateUserProfile.html
   */
  CreateUserProfile = "opsworks:CreateUserProfile",

  /**
   * Write - Grants permission to delete a specified app
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DeleteApp = "opsworks:DeleteApp",

  /**
   * Write - Grants permission to delete a specified instance, which terminates the associated Amazon EC2 instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DeleteInstance = "opsworks:DeleteInstance",

  /**
   * Write - Grants permission to delete a specified layer
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteLayer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DeleteLayer = "opsworks:DeleteLayer",

  /**
   * Write - Grants permission to delete a specified stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DeleteStack = "opsworks:DeleteStack",

  /**
   * Write - Grants permission to delete a user profile
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeleteUserProfile.html
   */
  DeleteUserProfile = "opsworks:DeleteUserProfile",

  /**
   * Write - Grants permission to delete a user profile
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterEcsCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DeregisterEcsCluster = "opsworks:DeregisterEcsCluster",

  /**
   * Write - Grants permission to deregister a specified Elastic IP address
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterElasticIp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DeregisterElasticIp = "opsworks:DeregisterElasticIp",

  /**
   * Write - Grants permission to deregister a registered Amazon EC2 or on-premises instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DeregisterInstance = "opsworks:DeregisterInstance",

  /**
   * Write - Grants permission to deregister an Amazon RDS instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterRdsDbInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DeregisterRdsDbInstance = "opsworks:DeregisterRdsDbInstance",

  /**
   * Write - Grants permission to deregister an Amazon EBS volume
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DeregisterVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DeregisterVolume = "opsworks:DeregisterVolume",

  /**
   * List - Grants permission to describe the available AWS OpsWorks agent versions
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeAgentVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeAgentVersions = "opsworks:DescribeAgentVersions",

  /**
   * List - Grants permission to request a description of a specified set of apps
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeApps.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeApps = "opsworks:DescribeApps",

  /**
   * List - Grants permission to describe the results of specified commands
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeCommands.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeCommands = "opsworks:DescribeCommands",

  /**
   * List - Grants permission to request a description of a specified set of deployments
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeDeployments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeDeployments = "opsworks:DescribeDeployments",

  /**
   * List - Grants permission to describe Amazon ECS clusters that are registered with a stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeEcsClusters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeEcsClusters = "opsworks:DescribeEcsClusters",

  /**
   * List - Grants permission to describe Elastic IP addresses
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticIps.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeElasticIps = "opsworks:DescribeElasticIps",

  /**
   * List - Grants permission to describe a stack's Elastic Load Balancing instances
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeElasticLoadBalancers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeElasticLoadBalancers = "opsworks:DescribeElasticLoadBalancers",

  /**
   * List - Grants permission to request a description of a set of instances
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeInstances = "opsworks:DescribeInstances",

  /**
   * List - Grants permission to request a description of one or more layers in a specified stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLayers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeLayers = "opsworks:DescribeLayers",

  /**
   * List - Grants permission to describe load-based auto scaling configurations for specified layers
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeLoadBasedAutoScaling.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeLoadBasedAutoScaling = "opsworks:DescribeLoadBasedAutoScaling",

  /**
   * List - Grants permission to describe a user's SSH information
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeMyUserProfile.html
   */
  DescribeMyUserProfile = "opsworks:DescribeMyUserProfile",

  /**
   * List - Grants permission to describe the operating systems that are supported by AWS OpsWorks Stacks
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeOperatingSystems.html
   */
  DescribeOperatingSystems = "opsworks:DescribeOperatingSystems",

  /**
   * List - Grants permission to describe the permissions for a specified stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribePermissions = "opsworks:DescribePermissions",

  /**
   * List - Grants permission to describe an instance's RAID arrays
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRaidArrays.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeRaidArrays = "opsworks:DescribeRaidArrays",

  /**
   * List - Grants permission to describe Amazon RDS instances
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeRdsDbInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeRdsDbInstances = "opsworks:DescribeRdsDbInstances",

  /**
   * List - Grants permission to describe AWS OpsWorks service errors
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeServiceErrors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeServiceErrors = "opsworks:DescribeServiceErrors",

  /**
   * List - Grants permission to request a description of a stack's provisioning parameters
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackProvisioningParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeStackProvisioningParameters = "opsworks:DescribeStackProvisioningParameters",

  /**
   * List - Grants permission to describe the number of layers and apps in a specified stack, and the number of instances in each state, such as running_setup or online
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStackSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeStackSummary = "opsworks:DescribeStackSummary",

  /**
   * List - Grants permission to request a description of one or more stacks
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeStacks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeStacks = "opsworks:DescribeStacks",

  /**
   * List - Grants permission to describe time-based auto scaling configurations for specified instances
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeTimeBasedAutoScaling.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeTimeBasedAutoScaling = "opsworks:DescribeTimeBasedAutoScaling",

  /**
   * List - Grants permission to describe specified users
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeUserProfiles.html
   */
  DescribeUserProfiles = "opsworks:DescribeUserProfiles",

  /**
   * List - Grants permission to describe an instance's Amazon EBS volumes
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DescribeVolumes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DescribeVolumes = "opsworks:DescribeVolumes",

  /**
   * Write - Grants permission to detache a specified Elastic Load Balancing instance from its layer
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DetachElasticLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DetachElasticLoadBalancer = "opsworks:DetachElasticLoadBalancer",

  /**
   * Write - Grants permission to disassociate an Elastic IP address from its instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_DisassociateElasticIp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  DisassociateElasticIp = "opsworks:DisassociateElasticIp",

  /**
   * Read - Grants permission to get a generated host name for the specified layer, based on the current host name theme
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_GetHostnameSuggestion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  GetHostnameSuggestion = "opsworks:GetHostnameSuggestion",

  /**
   * Write - Grants permission to grant RDP access to a Windows instance for a specified time period
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  GrantAccess = "opsworks:GrantAccess",

  /**
   * List - Grants permission to return a list of tags that are applied to the specified stack or layer
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_ListTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  ListTags = "opsworks:ListTags",

  /**
   * Write - Grants permission to reboot a specified instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RebootInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  RebootInstance = "opsworks:RebootInstance",

  /**
   * Write - Grants permission to register a specified Amazon ECS cluster with a stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterEcsCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  RegisterEcsCluster = "opsworks:RegisterEcsCluster",

  /**
   * Write - Grants permission to register an Elastic IP address with a specified stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterElasticIp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  RegisterElasticIp = "opsworks:RegisterElasticIp",

  /**
   * Write - Grants permission to register instances with a specified stack that were created outside of AWS OpsWorks
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  RegisterInstance = "opsworks:RegisterInstance",

  /**
   * Write - Grants permission to register an Amazon RDS instance with a stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterRdsDbInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  RegisterRdsDbInstance = "opsworks:RegisterRdsDbInstance",

  /**
   * Write - Grants permission to register an Amazon EBS volume with a specified stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  RegisterVolume = "opsworks:RegisterVolume",

  /**
   * Write - Grants permission to specify the load-based auto scaling configuration for a specified layer
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetLoadBasedAutoScaling.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  SetLoadBasedAutoScaling = "opsworks:SetLoadBasedAutoScaling",

  /**
   * PermissionsManagement - Grants permission to specify a user's permissions
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetPermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  SetPermission = "opsworks:SetPermission",

  /**
   * Write - Grants permission to specify the time-based auto scaling configuration for a specified instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_SetTimeBasedAutoScaling.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  SetTimeBasedAutoScaling = "opsworks:SetTimeBasedAutoScaling",

  /**
   * Write - Grants permission to start a specified instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  StartInstance = "opsworks:StartInstance",

  /**
   * Write - Grants permission to start a stack's instances
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StartStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  StartStack = "opsworks:StartStack",

  /**
   * Write - Grants permission to stop a specified instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  StopInstance = "opsworks:StopInstance",

  /**
   * Write - Grants permission to stop a specified stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_StopStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  StopStack = "opsworks:StopStack",

  /**
   * Tagging - Grants permission to apply tags to a specified stack or layer
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  TagResource = "opsworks:TagResource",

  /**
   * Write - Grants permission to unassign a registered instance from all of it's layers
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  UnassignInstance = "opsworks:UnassignInstance",

  /**
   * Write - Grants permission to unassign an assigned Amazon EBS volume
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UnassignVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  UnassignVolume = "opsworks:UnassignVolume",

  /**
   * Tagging - Grants permission to remove tags from a specified stack or layer
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  UntagResource = "opsworks:UntagResource",

  /**
   * Write - Grants permission to update a specified app
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  UpdateApp = "opsworks:UpdateApp",

  /**
   * Write - Grants permission to update a registered Elastic IP address's name
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateElasticIp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  UpdateElasticIp = "opsworks:UpdateElasticIp",

  /**
   * Write - Grants permission to update a specified instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  UpdateInstance = "opsworks:UpdateInstance",

  /**
   * Write - Grants permission to update a specified layer
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateLayer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  UpdateLayer = "opsworks:UpdateLayer",

  /**
   * Write - Grants permission to update a user's SSH public key
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateMyUserProfile.html
   */
  UpdateMyUserProfile = "opsworks:UpdateMyUserProfile",

  /**
   * Write - Grants permission to update an Amazon RDS instance
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateRdsDbInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  UpdateRdsDbInstance = "opsworks:UpdateRdsDbInstance",

  /**
   * Write - Grants permission to update a specified stack
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  UpdateStack = "opsworks:UpdateStack",

  /**
   * PermissionsManagement - Grants permission to update a specified user profile
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateUserProfile.html
   */
  UpdateUserProfile = "opsworks:UpdateUserProfile",

  /**
   * Write - Grants permission to update an Amazon EBS volume's name or mount point
   * @see https://docs.aws.amazon.com/opsworks/latest/APIReference/API_UpdateVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  UpdateVolume = "opsworks:UpdateVolume",

  /**
   * * - Grant all opsworks permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OpsworksResource.stack `OpsworksResource.stack`} 
   */
  All = "opsworks:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsopsworks.html
 */
export const OpsworksResource = {

  /**
   * @see https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks.html
   */
  stack: (options: Partial<{partition: string, region: string, account: string, stackId: string}> = {}) => `arn:${options.partition || '*'}:opsworks:${options.region || '*'}:${options.account || '*'}:stack/${options.stackId || '*'}/`,
}

