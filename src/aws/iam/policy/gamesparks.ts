/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamesparks.html
 */
export enum GamesparksAction {

  /**
   * Write - Grants permission to create a game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_CreateGame.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateGame = "gamesparks:CreateGame",

  /**
   * Write - Grants permission to create a snapshot of a game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_CreateSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSnapshot = "gamesparks:CreateSnapshot",

  /**
   * Write - Grants permission to create a stage in a game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_CreateStage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateStage = "gamesparks:CreateStage",

  /**
   * Write - Grants permission to delete a game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_DeleteGame.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteGame = "gamesparks:DeleteGame",

  /**
   * Write - Grants permission to delete a stage from a game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_DeleteStage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteStage = "gamesparks:DeleteStage",

  /**
   * Write - Grants permission to disconnect a player from the game runtime
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_DisconnectPlayer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisconnectPlayer = "gamesparks:DisconnectPlayer",

  /**
   * Write - Grants permission to export a snapshot of the game configuration
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ExportSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ExportSnapshot = "gamesparks:ExportSnapshot",

  /**
   * Read - Grants permission to get details about an extension
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetExtension.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetExtension = "gamesparks:GetExtension",

  /**
   * Read - Grants permission to get details about an extension version
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetExtensionVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetExtensionVersion = "gamesparks:GetExtensionVersion",

  /**
   * Read - Grants permission to get details about a game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetGame.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetGame = "gamesparks:GetGame",

  /**
   * Read - Grants permission to get the configuration for the game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetGameConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetGameConfiguration = "gamesparks:GetGameConfiguration",

  /**
   * Read - Grants permission to get details about a job that is generating code for a snapshot
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetGeneratedCodeJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetGeneratedCodeJob = "gamesparks:GetGeneratedCodeJob",

  /**
   * Read - Grants permission to get the status of a player connection
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetPlayerConnectionStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetPlayerConnectionStatus = "gamesparks:GetPlayerConnectionStatus",

  /**
   * Read - Grants permission to get a snapshot of the game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetSnapshot = "gamesparks:GetSnapshot",

  /**
   * Read - Grants permission to gets information about a stage
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetStage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetStage = "gamesparks:GetStage",

  /**
   * Read - Grants permission to get information about a stage deployment
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_GetStageDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetStageDeployment = "gamesparks:GetStageDeployment",

  /**
   * Write - Grants permission to import a snapshot of a game configuration
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ImportGameDocument.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ImportGameConfiguration = "gamesparks:ImportGameConfiguration",

  /**
   * Write - Grants permission to invoke backend services for a specific game
   * @see https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-stage-roles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  InvokeBackend = "gamesparks:InvokeBackend",

  /**
   * List - Grants permission to list the extension versions
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListExtensionVersions.html
   */
  ListExtensionVersions = "gamesparks:ListExtensionVersions",

  /**
   * List - Grants permission to list the extensions
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListExtensions.html
   */
  ListExtensions = "gamesparks:ListExtensions",

  /**
   * List - Grants permission to list the games
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListGames.html
   */
  ListGames = "gamesparks:ListGames",

  /**
   * List - Grants permission to get a list of code generation jobs for a snapshot
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListGeneratedCodeJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListGeneratedCodeJobs = "gamesparks:ListGeneratedCodeJobs",

  /**
   * List - Grants permission to get a list of snapshot summaries for a game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListSnapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListSnapshots = "gamesparks:ListSnapshots",

  /**
   * List - Grants permission to get a list of stage deployment summaries for a game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListStageDeployments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListStageDeployments = "gamesparks:ListStageDeployments",

  /**
   * List - Grants permission to get a list of stage summaries for a game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListStages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListStages = "gamesparks:ListStages",

  /**
   * Read - Grants permission to list the tags associated with a resource
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   */
  ListTagsForResource = "gamesparks:ListTagsForResource",

  /**
   * Write - Grants permission to start an asynchronous process that generates client code for system-defined and custom messages
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_StartGeneratedCodeJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartGeneratedCodeJob = "gamesparks:StartGeneratedCodeJob",

  /**
   * Write - Grants permission to deploy a snapshot to a stage and creates a new game runtime
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_StartStageDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartStageDeployment = "gamesparks:StartStageDeployment",

  /**
   * Tagging - Grants permission to adds tags to a resource
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "gamesparks:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   */
  UntagResource = "gamesparks:UntagResource",

  /**
   * Write - Grants permission to change the metadata of a game
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_UpdateGame.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateGame = "gamesparks:UpdateGame",

  /**
   * Write - Grants permission to change the working copy of the game configuration
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_UpdateGameConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateGameConfiguration = "gamesparks:UpdateGameConfiguration",

  /**
   * Write - Grants permission to update the metadata of a snapshot
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_UpdateSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateSnapshot = "gamesparks:UpdateSnapshot",

  /**
   * Write - Grants permission to update the metadata of a stage
   * @see https://docs.aws.amazon.com/gamesparks/latest/api/svc/API_UpdateStage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateStage = "gamesparks:UpdateStage",

  /**
   * * - Grant all gamesparks permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamesparks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GamesparksResource.game `GamesparksResource.game`} 
   * - {@link GamesparksResource.stage `GamesparksResource.stage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "gamesparks:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongamesparks.html
 */
export const GamesparksResource = {

  /**
   * @see https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  game: (options: Partial<{partition: string, region: string, account: string, gameId: string}> = {}) => `arn:${options.partition || '*'}:gamesparks:${options.region || '*'}:${options.account || '*'}:game/${options.gameId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/gamesparks/latest/dg/security-iam-service.html#policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  stage: (options: Partial<{partition: string, region: string, account: string, gameId: string, stageName: string}> = {}) => `arn:${options.partition || '*'}:gamesparks:${options.region || '*'}:${options.account || '*'}:game/${options.gameId || '*'}/stage/${options.stageName || '*'}`,
}

