/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepracer.html
 */
export enum DeepracerAction {

  /**
   * Write - Grants permission to add access for a private leaderboard
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  AddLeaderboardAccessPermission = "deepracer:AddLeaderboardAccessPermission",

  /**
   * Read - Grants permission to get current admin multiuser configuration for this account
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-set-account-config.html
   */
  AdminGetAccountConfig = "deepracer:AdminGetAccountConfig",

  /**
   * Read - Grants permission to list all deepracer users with their associated resources created under this account
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-list-associated-resources.html
   */
  AdminListAssociatedResources = "deepracer:AdminListAssociatedResources",

  /**
   * Read - Grants permission to list user data for all users associated with this account
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-list-associated-users.html
   */
  AdminListAssociatedUsers = "deepracer:AdminListAssociatedUsers",

  /**
   * Write - Grants permission to manage a user associated with this account
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-manage-user.html
   */
  AdminManageUser = "deepracer:AdminManageUser",

  /**
   * Write - Grants permission to set configuration options for this account
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-set-account-config.html
   */
  AdminSetAccountConfig = "deepracer:AdminSetAccountConfig",

  /**
   * Write - Grants permission to clone an existing DeepRacer model
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-clone-trained-model
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * - {@link DeepracerResource.track `DeepracerResource.track`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  CloneReinforcementLearningModel = "deepracer:CloneReinforcementLearningModel",

  /**
   * Write - Grants permission to create a DeepRacer car in your garage
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  CreateCar = "deepracer:CreateCar",

  /**
   * Write - Grants permission to create a leaderboard
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-create-community-race.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  CreateLeaderboard = "deepracer:CreateLeaderboard",

  /**
   * Write - Grants permission to create an access token for a private leaderboard
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  CreateLeaderboardAccessToken = "deepracer:CreateLeaderboardAccessToken",

  /**
   * Write - Grants permission to submit a DeepRacer model to be evaluated for leaderboards
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  CreateLeaderboardSubmission = "deepracer:CreateLeaderboardSubmission",

  /**
   * Write - Grants permission to create ra einforcement learning model for DeepRacer
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.track `DeepracerResource.track`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  CreateReinforcementLearningModel = "deepracer:CreateReinforcementLearningModel",

  /**
   * Write - Grants permission to delete a leaderboard
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  DeleteLeaderboard = "deepracer:DeleteLeaderboard",

  /**
   * Write - Grants permission to delete a DeepRacer model
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  DeleteModel = "deepracer:DeleteModel",

  /**
   * Write - Grants permission to edit a leaderboard
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  EditLeaderboard = "deepracer:EditLeaderboard",

  /**
   * Read - Grants permission to get current multiuser configuration for this account
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-set-account-config.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetAccountConfig = "deepracer:GetAccountConfig",

  /**
   * Read - Grants permission to retrieve the user's alias for submitting a DeepRacer model to leaderboards
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetAlias = "deepracer:GetAlias",

  /**
   * Read - Grants permission to download artifacts for an existing DeepRacer model
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetAssetUrl = "deepracer:GetAssetUrl",

  /**
   * Read - Grants permission to retrieve a specific DeepRacer car from your garage
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.car `DeepracerResource.car`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetCar = "deepracer:GetCar",

  /**
   * Read - Grants permission to view all the DeepRacer cars in your garage
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetCars = "deepracer:GetCars",

  /**
   * Read - Grants permission to retrieve information about an existing DeepRacer model's evaluation jobs
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.evaluation_job `DeepracerResource.evaluation_job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetEvaluation = "deepracer:GetEvaluation",

  /**
   * Read - Grants permission to retrieve information about how the latest submitted DeepRacer model for a user performed on a leaderboard
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetLatestUserSubmission = "deepracer:GetLatestUserSubmission",

  /**
   * Read - Grants permission to retrieve information about leaderboards
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetLeaderboard = "deepracer:GetLeaderboard",

  /**
   * Read - Grants permission to retrieve information about an existing DeepRacer model
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetModel = "deepracer:GetModel",

  /**
   * Read - Grants permission to retrieve information about private leaderboards
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetPrivateLeaderboard = "deepracer:GetPrivateLeaderboard",

  /**
   * Read - Grants permission to retrieve information about the performance of a user's DeepRacer model that got placed on a leaderboard
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetRankedUserSubmission = "deepracer:GetRankedUserSubmission",

  /**
   * Read - Grants permission to retrieve information about DeepRacer tracks
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.track `DeepracerResource.track`} 
   */
  GetTrack = "deepracer:GetTrack",

  /**
   * Read - Grants permission to retrieve information about an existing DeepRacer model's training job
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.training_job `DeepracerResource.training_job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  GetTrainingJob = "deepracer:GetTrainingJob",

  /**
   * Write - Grants permission to import a reinforcement learning model for DeepRacer
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-troubleshooting-service-migration-errors.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ImportModel = "deepracer:ImportModel",

  /**
   * Read - Grants permission to list a DeepRacer model's evaluation jobs
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ListEvaluations = "deepracer:ListEvaluations",

  /**
   * Read - Grants permission to list all the DeepRacer model submissions of a user on a leaderboard
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ListLeaderboardSubmissions = "deepracer:ListLeaderboardSubmissions",

  /**
   * Read - Grants permission to list all the available leaderboards
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ListLeaderboards = "deepracer:ListLeaderboards",

  /**
   * Read - Grants permission to list all existing DeepRacer models
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ListModels = "deepracer:ListModels",

  /**
   * Read - Grants permission to retrieve participant information about private leaderboards
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ListPrivateLeaderboardParticipants = "deepracer:ListPrivateLeaderboardParticipants",

  /**
   * Read - Grants permission to list all the available private leaderboards
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ListPrivateLeaderboards = "deepracer:ListPrivateLeaderboards",

  /**
   * Read - Grants permission to list all the subscribed private leaderboards
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ListSubscribedPrivateLeaderboards = "deepracer:ListSubscribedPrivateLeaderboards",

  /**
   * Read - Grants permission to lists tag for a resource
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-tagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.car `DeepracerResource.car`} 
   * - {@link DeepracerResource.evaluation_job `DeepracerResource.evaluation_job`} 
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * - {@link DeepracerResource.leaderboard_evaluation_job `DeepracerResource.leaderboard_evaluation_job`} 
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * - {@link DeepracerResource.training_job `DeepracerResource.training_job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ListTagsForResource = "deepracer:ListTagsForResource",

  /**
   * Read - Grants permission to list all DeepRacer tracks
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   */
  ListTracks = "deepracer:ListTracks",

  /**
   * Read - Grants permission to list a DeepRacer model's training jobs
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ListTrainingJobs = "deepracer:ListTrainingJobs",

  /**
   * Write - Grants permission to migrate previous reinforcement learning models for DeepRacer
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-troubleshooting-service-migration-errors.html
   */
  MigrateModels = "deepracer:MigrateModels",

  /**
   * Write - Grants permission to performs the leaderboard operation mentioned in the operation attribute
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-perform-leaderboard-operation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  PerformLeaderboardOperation = "deepracer:PerformLeaderboardOperation",

  /**
   * Write - Grants permission to remove access for a private leaderboard
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  RemoveLeaderboardAccessPermission = "deepracer:RemoveLeaderboardAccessPermission",

  /**
   * Write - Grants permission to set the user's alias for submitting a DeepRacer model to leaderboards
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  SetAlias = "deepracer:SetAlias",

  /**
   * Write - Grants permission to evaluate a DeepRacer model in a simulated environment
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * - {@link DeepracerResource.track `DeepracerResource.track`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  StartEvaluation = "deepracer:StartEvaluation",

  /**
   * Write - Grants permission to stop DeepRacer model evaluations
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.evaluation_job `DeepracerResource.evaluation_job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  StopEvaluation = "deepracer:StopEvaluation",

  /**
   * Write - Grants permission to stop training a DeepRacer model
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  StopTrainingReinforcementLearningModel = "deepracer:StopTrainingReinforcementLearningModel",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-tagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.car `DeepracerResource.car`} 
   * - {@link DeepracerResource.evaluation_job `DeepracerResource.evaluation_job`} 
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * - {@link DeepracerResource.leaderboard_evaluation_job `DeepracerResource.leaderboard_evaluation_job`} 
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * - {@link DeepracerResource.training_job `DeepracerResource.training_job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  TagResource = "deepracer:TagResource",

  /**
   * Write - Grants permission to test reward functions for correctness
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-train-models-define-reward-function
   */
  TestRewardFunction = "deepracer:TestRewardFunction",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-tagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.car `DeepracerResource.car`} 
   * - {@link DeepracerResource.evaluation_job `DeepracerResource.evaluation_job`} 
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * - {@link DeepracerResource.leaderboard_evaluation_job `DeepracerResource.leaderboard_evaluation_job`} 
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * - {@link DeepracerResource.training_job `DeepracerResource.training_job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  UntagResource = "deepracer:UntagResource",

  /**
   * Write - Grants permission to update a DeepRacer car in your garage
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.car `DeepracerResource.car`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  UpdateCar = "deepracer:UpdateCar",

  /**
   * * - Grant all deepracer permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepracer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepracerResource.leaderboard `DeepracerResource.leaderboard`} 
   * - {@link DeepracerResource.reinforcement_learning_model `DeepracerResource.reinforcement_learning_model`} 
   * - {@link DeepracerResource.track `DeepracerResource.track`} 
   * - {@link DeepracerResource.car `DeepracerResource.car`} 
   * - {@link DeepracerResource.evaluation_job `DeepracerResource.evaluation_job`} 
   * - {@link DeepracerResource.training_job `DeepracerResource.training_job`} 
   * - {@link DeepracerResource.leaderboard_evaluation_job `DeepracerResource.leaderboard_evaluation_job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `deepracer:UserToken`: Filters access by user token in the request ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `deepracer:MultiUser`: Filters access by multiuser flag ({@link https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "deepracer:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepracer.html
 */
export const DeepracerResource = {

  /**
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  car: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:deepracer:${options.region || '*'}:${options.account || '*'}:car/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  evaluation_job: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:deepracer:${options.region || '*'}:${options.account || '*'}: evaluation_job/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  leaderboard: (options: Partial<{partition: string, region: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:deepracer:${options.region || '*'}::leaderboard/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  leaderboard_evaluation_job: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:deepracer:${options.region || '*'}:${options.account || '*'}:leaderboard_evaluation_job/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  reinforcement_learning_model: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:deepracer:${options.region || '*'}:${options.account || '*'}:model/reinforcement_learning/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   */
  track: (options: Partial<{partition: string, region: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:deepracer:${options.region || '*'}::track/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  training_job: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:deepracer:${options.region || '*'}:${options.account || '*'}:training_job/${options.resourceId || '*'}`,
}

