/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamelift.html
 */
export enum GameliftAction {

  /**
   * Write - Grants permission to register player acceptance or rejection of a proposed FlexMatch match
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_AcceptMatch.html
   */
  AcceptMatch = "gamelift:AcceptMatch",

  /**
   * Write - Grants permission to locate and reserve a game server to host a new game session
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_ClaimGameServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  ClaimGameServer = "gamelift:ClaimGameServer",

  /**
   * Write - Grants permission to define a new alias for a fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAlias = "gamelift:CreateAlias",

  /**
   * Write - Grants permission to create a new game build using files stored in an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateBuild = "gamelift:CreateBuild",

  /**
   * Write - Grants permission to create a new fleet of computing resources to run your game servers
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFleet = "gamelift:CreateFleet",

  /**
   * Write - Grants permission to specify additional locations for a fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateFleetLocations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  CreateFleetLocations = "gamelift:CreateFleetLocations",

  /**
   * Write - Grants permission to create a new game server group, set up a corresponding Auto Scaling group, and launche instances to host game servers
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameServerGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateGameServerGroup = "gamelift:CreateGameServerGroup",

  /**
   * Write - Grants permission to start a new game session on a specified fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSession.html
   */
  CreateGameSession = "gamelift:CreateGameSession",

  /**
   * Write - Grants permission to set up a new queue for processing game session placement requests
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateGameSessionQueue = "gamelift:CreateGameSessionQueue",

  /**
   * Write - Grants permission to create a new FlexMatch matchmaker
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMatchmakingConfiguration = "gamelift:CreateMatchmakingConfiguration",

  /**
   * Write - Grants permission to create a new matchmaking rule set for FlexMatch
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateMatchmakingRuleSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMatchmakingRuleSet = "gamelift:CreateMatchmakingRuleSet",

  /**
   * Write - Grants permission to reserve an available game session slot for a player
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html
   */
  CreatePlayerSession = "gamelift:CreatePlayerSession",

  /**
   * Write - Grants permission to reserve available game session slots for multiple players
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html
   */
  CreatePlayerSessions = "gamelift:CreatePlayerSessions",

  /**
   * Write - Grants permission to create a new Realtime Servers script
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateScript.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateScript = "gamelift:CreateScript",

  /**
   * Write - Grants permission to allow GameLift to create or delete a peering connection between a GameLift fleet VPC and a VPC on another AWS account
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html
   */
  CreateVpcPeeringAuthorization = "gamelift:CreateVpcPeeringAuthorization",

  /**
   * Write - Grants permission to establish a peering connection between your GameLift fleet VPC and a VPC on another account
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html
   */
  CreateVpcPeeringConnection = "gamelift:CreateVpcPeeringConnection",

  /**
   * Write - Grants permission to delete an alias
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.alias `GameliftResource.alias`} 
   */
  DeleteAlias = "gamelift:DeleteAlias",

  /**
   * Write - Grants permission to delete a game build
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteBuild.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.build `GameliftResource.build`} 
   */
  DeleteBuild = "gamelift:DeleteBuild",

  /**
   * Write - Grants permission to delete an empty fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  DeleteFleet = "gamelift:DeleteFleet",

  /**
   * Write - Grants permission to delete locations for a fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteFleetLocations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  DeleteFleetLocations = "gamelift:DeleteFleetLocations",

  /**
   * Write - Grants permission to permanently delete a game server group and terminate FleetIQ activity for the corresponding Auto Scaling group
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameServerGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  DeleteGameServerGroup = "gamelift:DeleteGameServerGroup",

  /**
   * Write - Grants permission to delete an existing game session queue
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameSessionQueue `GameliftResource.gameSessionQueue`} 
   */
  DeleteGameSessionQueue = "gamelift:DeleteGameSessionQueue",

  /**
   * Write - Grants permission to delete an existing FlexMatch matchmaker
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.matchmakingConfiguration `GameliftResource.matchmakingConfiguration`} 
   */
  DeleteMatchmakingConfiguration = "gamelift:DeleteMatchmakingConfiguration",

  /**
   * Write - Grants permission to delete an existing FlexMatch matchmaking rule set
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteMatchmakingRuleSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.matchmakingRuleSet `GameliftResource.matchmakingRuleSet`} 
   */
  DeleteMatchmakingRuleSet = "gamelift:DeleteMatchmakingRuleSet",

  /**
   * Write - Grants permission to delete a set of auto-scaling rules
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScalingPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  DeleteScalingPolicy = "gamelift:DeleteScalingPolicy",

  /**
   * Write - Grants permission to delete a Realtime Servers script
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteScript.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.script `GameliftResource.script`} 
   */
  DeleteScript = "gamelift:DeleteScript",

  /**
   * Write - Grants permission to cancel a VPC peering authorization
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringAuthorization.html
   */
  DeleteVpcPeeringAuthorization = "gamelift:DeleteVpcPeeringAuthorization",

  /**
   * Write - Grants permission to remove a peering connection between VPCs
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html
   */
  DeleteVpcPeeringConnection = "gamelift:DeleteVpcPeeringConnection",

  /**
   * Write - Grants permission to remove a game server from a game server group
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterGameServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  DeregisterGameServer = "gamelift:DeregisterGameServer",

  /**
   * Read - Grants permission to retrieve properties for an alias
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.alias `GameliftResource.alias`} 
   */
  DescribeAlias = "gamelift:DescribeAlias",

  /**
   * Read - Grants permission to retrieve properties for a game build
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeBuild.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.build `GameliftResource.build`} 
   */
  DescribeBuild = "gamelift:DescribeBuild",

  /**
   * Read - Grants permission to retrieve the maximum allowed and current usage for EC2 instance types
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html
   */
  DescribeEC2InstanceLimits = "gamelift:DescribeEC2InstanceLimits",

  /**
   * Read - Grants permission to retrieve general properties, including status, for fleets
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetAttributes.html
   */
  DescribeFleetAttributes = "gamelift:DescribeFleetAttributes",

  /**
   * Read - Grants permission to retrieve the current capacity setting for fleets
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html
   */
  DescribeFleetCapacity = "gamelift:DescribeFleetCapacity",

  /**
   * Read - Grants permission to retrieve entries from a fleet's event log
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  DescribeFleetEvents = "gamelift:DescribeFleetEvents",

  /**
   * Read - Grants permission to retrieve general properties, including statuses, for a fleet's locations
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  DescribeFleetLocationAttributes = "gamelift:DescribeFleetLocationAttributes",

  /**
   * Read - Grants permission to retrieve the current capacity setting for a fleet's location
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  DescribeFleetLocationCapacity = "gamelift:DescribeFleetLocationCapacity",

  /**
   * Read - Grants permission to retrieve utilization statistics for fleet's location
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  DescribeFleetLocationUtilization = "gamelift:DescribeFleetLocationUtilization",

  /**
   * Read - Grants permission to retrieve the inbound connection permissions for a fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetPortSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  DescribeFleetPortSettings = "gamelift:DescribeFleetPortSettings",

  /**
   * Read - Grants permission to retrieve utilization statistics for fleets
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetUtilization.html
   */
  DescribeFleetUtilization = "gamelift:DescribeFleetUtilization",

  /**
   * Read - Grants permission to retrieve properties for a game server
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  DescribeGameServer = "gamelift:DescribeGameServer",

  /**
   * Read - Grants permission to retrieve properties for a game server group
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  DescribeGameServerGroup = "gamelift:DescribeGameServerGroup",

  /**
   * Read - Grants permission to retrieve the status of EC2 instances in a game server group
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameServerInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  DescribeGameServerInstances = "gamelift:DescribeGameServerInstances",

  /**
   * Read - Grants permission to retrieve properties for game sessions in a fleet, including the protection policy
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionDetails.html
   */
  DescribeGameSessionDetails = "gamelift:DescribeGameSessionDetails",

  /**
   * Read - Grants permission to retrieve details of a game session placement request
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html
   */
  DescribeGameSessionPlacement = "gamelift:DescribeGameSessionPlacement",

  /**
   * Read - Grants permission to retrieve properties for game session queues
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html
   */
  DescribeGameSessionQueues = "gamelift:DescribeGameSessionQueues",

  /**
   * Read - Grants permission to retrieve properties for game sessions in a fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html
   */
  DescribeGameSessions = "gamelift:DescribeGameSessions",

  /**
   * Read - Grants permission to retrieve information about instances in a fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  DescribeInstances = "gamelift:DescribeInstances",

  /**
   * Read - Grants permission to retrieve details of matchmaking tickets
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmaking.html
   */
  DescribeMatchmaking = "gamelift:DescribeMatchmaking",

  /**
   * Read - Grants permission to retrieve properties for FlexMatch matchmakers
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingConfigurations.html
   */
  DescribeMatchmakingConfigurations = "gamelift:DescribeMatchmakingConfigurations",

  /**
   * Read - Grants permission to retrieve properties for FlexMatch matchmaking rule sets
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeMatchmakingRuleSets.html
   */
  DescribeMatchmakingRuleSets = "gamelift:DescribeMatchmakingRuleSets",

  /**
   * Read - Grants permission to retrieve properties for player sessions in a game session
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html
   */
  DescribePlayerSessions = "gamelift:DescribePlayerSessions",

  /**
   * Read - Grants permission to retrieve the current runtime configuration for a fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeRuntimeConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  DescribeRuntimeConfiguration = "gamelift:DescribeRuntimeConfiguration",

  /**
   * Read - Grants permission to retrieve all scaling policies that are applied to a fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScalingPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  DescribeScalingPolicies = "gamelift:DescribeScalingPolicies",

  /**
   * Read - Grants permission to retrieve properties for a Realtime Servers script
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeScript.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.script `GameliftResource.script`} 
   */
  DescribeScript = "gamelift:DescribeScript",

  /**
   * Read - Grants permission to retrieve valid VPC peering authorizations
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringAuthorizations.html
   */
  DescribeVpcPeeringAuthorizations = "gamelift:DescribeVpcPeeringAuthorizations",

  /**
   * Read - Grants permission to retrieve details on active or pending VPC peering connections
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html
   */
  DescribeVpcPeeringConnections = "gamelift:DescribeVpcPeeringConnections",

  /**
   * Read - Grants permission to retrieve the location of stored logs for a game session
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html
   */
  GetGameSessionLogUrl = "gamelift:GetGameSessionLogUrl",

  /**
   * Read - Grants permission to request remote access to a specified fleet instance
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetInstanceAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  GetInstanceAccess = "gamelift:GetInstanceAccess",

  /**
   * List - Grants permission to retrieve all aliases that are defined in the current region
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListAliases.html
   */
  ListAliases = "gamelift:ListAliases",

  /**
   * List - Grants permission to retrieve all game build in the current region
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListBuilds.html
   */
  ListBuilds = "gamelift:ListBuilds",

  /**
   * List - Grants permission to retrieve a list of fleet IDs for all fleets in the current region
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListFleets.html
   */
  ListFleets = "gamelift:ListFleets",

  /**
   * List - Grants permission to retrieve all game server groups that are defined in the current region
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServerGroups.html
   */
  ListGameServerGroups = "gamelift:ListGameServerGroups",

  /**
   * List - Grants permission to retrieve all game servers that are currently running in a game server group
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListGameServers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  ListGameServers = "gamelift:ListGameServers",

  /**
   * List - Grants permission to retrieve properties for all Realtime Servers scripts in the current region
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListScripts.html
   */
  ListScripts = "gamelift:ListScripts",

  /**
   * Read - Grants permission to retrieve tags for GameLift resources
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.alias `GameliftResource.alias`} 
   * - {@link GameliftResource.build `GameliftResource.build`} 
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   * - {@link GameliftResource.gameSessionQueue `GameliftResource.gameSessionQueue`} 
   * - {@link GameliftResource.matchmakingConfiguration `GameliftResource.matchmakingConfiguration`} 
   * - {@link GameliftResource.matchmakingRuleSet `GameliftResource.matchmakingRuleSet`} 
   * - {@link GameliftResource.script `GameliftResource.script`} 
   */
  ListTagsForResource = "gamelift:ListTagsForResource",

  /**
   * Write - Grants permission to create or update a fleet auto-scaling policy
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_PutScalingPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  PutScalingPolicy = "gamelift:PutScalingPolicy",

  /**
   * Write - Grants permission to notify GameLift FleetIQ when a new game server is ready to host gameplay
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_RegisterGameServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  RegisterGameServer = "gamelift:RegisterGameServer",

  /**
   * Read - Grants permission to retrieve fresh upload credentials to use when uploading a new game build
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.build `GameliftResource.build`} 
   */
  RequestUploadCredentials = "gamelift:RequestUploadCredentials",

  /**
   * Read - Grants permission to retrieve the fleet ID associated with an alias
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResolveAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.alias `GameliftResource.alias`} 
   */
  ResolveAlias = "gamelift:ResolveAlias",

  /**
   * Write - Grants permission to reinstate suspended FleetIQ activity for a game server group
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_ResumeGameServerGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  ResumeGameServerGroup = "gamelift:ResumeGameServerGroup",

  /**
   * Read - Grants permission to retrieve game sessions that match a set of search criteria
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_SearchGameSessions.html
   */
  SearchGameSessions = "gamelift:SearchGameSessions",

  /**
   * Write - Grants permission to resume auto-scaling activity on a fleet after it was suspended with StopFleetActions()
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartFleetActions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  StartFleetActions = "gamelift:StartFleetActions",

  /**
   * Write - Grants permission to send a game session placement request to a game session queue
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameSessionQueue `GameliftResource.gameSessionQueue`} 
   */
  StartGameSessionPlacement = "gamelift:StartGameSessionPlacement",

  /**
   * Write - Grants permission to request FlexMatch matchmaking to fill available player slots in an existing game session
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchBackfill.html
   */
  StartMatchBackfill = "gamelift:StartMatchBackfill",

  /**
   * Write - Grants permission to request FlexMatch matchmaking for one or a group of players and initiate game session placement
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html
   */
  StartMatchmaking = "gamelift:StartMatchmaking",

  /**
   * Write - Grants permission to suspend auto-scaling activity on a fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  StopFleetActions = "gamelift:StopFleetActions",

  /**
   * Write - Grants permission to cancel a game session placement request that is in progress
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopGameSessionPlacement.html
   */
  StopGameSessionPlacement = "gamelift:StopGameSessionPlacement",

  /**
   * Write - Grants permission to cancel a matchmaking or match backfill request that is in progress
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopMatchmaking.html
   */
  StopMatchmaking = "gamelift:StopMatchmaking",

  /**
   * Write - Grants permission to temporarily stop FleetIQ activity for a game server group
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_SuspendGameServerGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  SuspendGameServerGroup = "gamelift:SuspendGameServerGroup",

  /**
   * Tagging - Grants permission to tag GameLift resources
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.alias `GameliftResource.alias`} 
   * - {@link GameliftResource.build `GameliftResource.build`} 
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   * - {@link GameliftResource.gameSessionQueue `GameliftResource.gameSessionQueue`} 
   * - {@link GameliftResource.matchmakingConfiguration `GameliftResource.matchmakingConfiguration`} 
   * - {@link GameliftResource.matchmakingRuleSet `GameliftResource.matchmakingRuleSet`} 
   * - {@link GameliftResource.script `GameliftResource.script`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "gamelift:TagResource",

  /**
   * Tagging - Grants permission to untag GameLift resources
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.alias `GameliftResource.alias`} 
   * - {@link GameliftResource.build `GameliftResource.build`} 
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   * - {@link GameliftResource.gameSessionQueue `GameliftResource.gameSessionQueue`} 
   * - {@link GameliftResource.matchmakingConfiguration `GameliftResource.matchmakingConfiguration`} 
   * - {@link GameliftResource.matchmakingRuleSet `GameliftResource.matchmakingRuleSet`} 
   * - {@link GameliftResource.script `GameliftResource.script`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "gamelift:UntagResource",

  /**
   * Write - Grants permission to update the properties of an existing alias
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.alias `GameliftResource.alias`} 
   */
  UpdateAlias = "gamelift:UpdateAlias",

  /**
   * Write - Grants permission to update an existing build's metadata
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateBuild.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.build `GameliftResource.build`} 
   */
  UpdateBuild = "gamelift:UpdateBuild",

  /**
   * Write - Grants permission to update the general properties of an existing fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  UpdateFleetAttributes = "gamelift:UpdateFleetAttributes",

  /**
   * Write - Grants permission to adjust a fleet's capacity settings
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  UpdateFleetCapacity = "gamelift:UpdateFleetCapacity",

  /**
   * Write - Grants permission to adjust a fleet's port settings
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetPortSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  UpdateFleetPortSettings = "gamelift:UpdateFleetPortSettings",

  /**
   * Write - Grants permission to change game server properties, health status, or utilization status
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  UpdateGameServer = "gamelift:UpdateGameServer",

  /**
   * Write - Grants permission to update properties for game server group, including allowed instance types
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameServerGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   */
  UpdateGameServerGroup = "gamelift:UpdateGameServerGroup",

  /**
   * Write - Grants permission to update the properties of an existing game session
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html
   */
  UpdateGameSession = "gamelift:UpdateGameSession",

  /**
   * Write - Grants permission to update properties of an existing game session queue
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameSessionQueue `GameliftResource.gameSessionQueue`} 
   */
  UpdateGameSessionQueue = "gamelift:UpdateGameSessionQueue",

  /**
   * Write - Grants permission to update properties of an existing FlexMatch matchmaking configuration
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateMatchmakingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.matchmakingConfiguration `GameliftResource.matchmakingConfiguration`} 
   */
  UpdateMatchmakingConfiguration = "gamelift:UpdateMatchmakingConfiguration",

  /**
   * Write - Grants permission to update how server processes are configured on instances in an existing fleet
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateRuntimeConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   */
  UpdateRuntimeConfiguration = "gamelift:UpdateRuntimeConfiguration",

  /**
   * Write - Grants permission to update the metadata and content of an existing Realtime Servers script
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateScript.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.script `GameliftResource.script`} 
   */
  UpdateScript = "gamelift:UpdateScript",

  /**
   * Read - Grants permission to validate the syntax of a FlexMatch matchmaking rule set
   * @see https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html
   */
  ValidateMatchmakingRuleSet = "gamelift:ValidateMatchmakingRuleSet",

  /**
   * * - Grant all gamelift permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamelift.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GameliftResource.gameServerGroup `GameliftResource.gameServerGroup`} 
   * - {@link GameliftResource.fleet `GameliftResource.fleet`} 
   * - {@link GameliftResource.alias `GameliftResource.alias`} 
   * - {@link GameliftResource.build `GameliftResource.build`} 
   * - {@link GameliftResource.gameSessionQueue `GameliftResource.gameSessionQueue`} 
   * - {@link GameliftResource.matchmakingConfiguration `GameliftResource.matchmakingConfiguration`} 
   * - {@link GameliftResource.matchmakingRuleSet `GameliftResource.matchmakingRuleSet`} 
   * - {@link GameliftResource.script `GameliftResource.script`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "gamelift:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamelift.html
 */
export const GameliftResource = {

  /**
   * @see https://docs.aws.amazon.com/gamelift/latest/developerguide/API_Alias.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  alias: (options: Partial<{partition: string, region: string, aliasId: string}> = {}) => `arn:${options.partition || '*'}:gamelift:${options.region || '*'}::alias/${options.aliasId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/gamelift/latest/developerguide/API_Build.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  build: (options: Partial<{partition: string, region: string, accountId: string, buildId: string}> = {}) => `arn:${options.partition || '*'}:gamelift:${options.region || '*'}:${options.accountId || '*'}:build/${options.buildId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/gamelift/latest/developerguide/API_Script.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  script: (options: Partial<{partition: string, region: string, accountId: string, scriptId: string}> = {}) => `arn:${options.partition || '*'}:gamelift:${options.region || '*'}:${options.accountId || '*'}:script/${options.scriptId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/gamelift/latest/developerguide/API_FleetAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  fleet: (options: Partial<{partition: string, region: string, account: string, fleetId: string}> = {}) => `arn:${options.partition || '*'}:gamelift:${options.region || '*'}:${options.account || '*'}:fleet/${options.fleetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/gamelift/latest/developerguide/API_GameSessionQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  gameSessionQueue: (options: Partial<{partition: string, region: string, account: string, gameSessionQueueName: string}> = {}) => `arn:${options.partition || '*'}:gamelift:${options.region || '*'}:${options.account || '*'}:gamesessionqueue/${options.gameSessionQueueName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/gamelift/latest/developerguide/API_MatchmakingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  matchmakingConfiguration: (options: Partial<{partition: string, region: string, account: string, matchmakingConfigurationName: string}> = {}) => `arn:${options.partition || '*'}:gamelift:${options.region || '*'}:${options.account || '*'}:matchmakingconfiguration/${options.matchmakingConfigurationName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/gamelift/latest/developerguide/API_MatchmakingRuleSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  matchmakingRuleSet: (options: Partial<{partition: string, region: string, account: string, matchmakingRuleSetName: string}> = {}) => `arn:${options.partition || '*'}:gamelift:${options.region || '*'}:${options.account || '*'}:matchmakingruleset/${options.matchmakingRuleSetName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/gamelift/latest/developerguide/API_GameServerGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  gameServerGroup: (options: Partial<{partition: string, region: string, account: string, gameServerGroupName: string}> = {}) => `arn:${options.partition || '*'}:gamelift:${options.region || '*'}:${options.account || '*'}:gameservergroup/${options.gameServerGroupName || '*'}`,
}

