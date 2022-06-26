/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonnimblestudio.html
 */
export enum NimbleAction {

  /**
   * Write - Grants permission to accept EULAs
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_AcceptEulas.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.eula `NimbleResource.eula`} 
   */
  AcceptEulas = "nimble:AcceptEulas",

  /**
   * Write - Grants permission to create a launch profile
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateLaunchProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateLaunchProfile = "nimble:CreateLaunchProfile",

  /**
   * Write - Grants permission to create a streaming image
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStreamingImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateStreamingImage = "nimble:CreateStreamingImage",

  /**
   * Write - Grants permission to create a streaming session
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStreamingSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateStreamingSession = "nimble:CreateStreamingSession",

  /**
   * Write - Grants permission to create a StreamingSessionStream
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStreamingSessionStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.streamingSession `NimbleResource.streamingSession`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `nimble:requesterPrincipalId`: Filters access by the ID of the logged in user ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateStreamingSessionStream = "nimble:CreateStreamingSessionStream",

  /**
   * Write - Grants permission to create a studio
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStudio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateStudio = "nimble:CreateStudio",

  /**
   * Write - Grants permission to create a studio component. A studio component designates a network resource to which a launch profile will provide access
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStudioComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateStudioComponent = "nimble:CreateStudioComponent",

  /**
   * Write - Grants permission to delete a launch profile
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteLaunchProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   */
  DeleteLaunchProfile = "nimble:DeleteLaunchProfile",

  /**
   * Write - Grants permission to delete a launch profile member
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteLaunchProfileMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   */
  DeleteLaunchProfileMember = "nimble:DeleteLaunchProfileMember",

  /**
   * Write - Grants permission to delete a streaming image
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStreamingImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.streamingImage `NimbleResource.streamingImage`} 
   */
  DeleteStreamingImage = "nimble:DeleteStreamingImage",

  /**
   * Write - Grants permission to delete a streaming session
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStreamingSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.streamingSession `NimbleResource.streamingSession`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `nimble:requesterPrincipalId`: Filters access by the ID of the logged in user ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteStreamingSession = "nimble:DeleteStreamingSession",

  /**
   * Write - Grants permission to delete a studio
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStudio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   */
  DeleteStudio = "nimble:DeleteStudio",

  /**
   * Write - Grants permission to delete a studio component
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStudioComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studioComponent `NimbleResource.studioComponent`} 
   */
  DeleteStudioComponent = "nimble:DeleteStudioComponent",

  /**
   * Write - Grants permission to delete a studio member
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStudioMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   */
  DeleteStudioMember = "nimble:DeleteStudioMember",

  /**
   * Read - Grants permission to get a EULA
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetEula.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.eula `NimbleResource.eula`} 
   */
  GetEula = "nimble:GetEula",

  /**
   * Read - Grants permission to allow Nimble Studio portal to show the appropriate features for this account
   * @see https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html
   */
  GetFeatureMap = "nimble:GetFeatureMap",

  /**
   * Read - Grants permission to get a launch profile
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   */
  GetLaunchProfile = "nimble:GetLaunchProfile",

  /**
   * Read - Grants permission to get a launch profile's details, which includes the summary of studio components and streaming images used by the launch profile
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfileDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   */
  GetLaunchProfileDetails = "nimble:GetLaunchProfileDetails",

  /**
   * Read - Grants permission to get a launch profile initialization. A launch profile initialization is a dereferenced version of a launch profile, including attached studio component connection information
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfileInitialization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   */
  GetLaunchProfileInitialization = "nimble:GetLaunchProfileInitialization",

  /**
   * Read - Grants permission to get a launch profile member
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfileMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   */
  GetLaunchProfileMember = "nimble:GetLaunchProfileMember",

  /**
   * Read - Grants permission to get a streaming image
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStreamingImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.streamingImage `NimbleResource.streamingImage`} 
   */
  GetStreamingImage = "nimble:GetStreamingImage",

  /**
   * Read - Grants permission to get a streaming session
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStreamingSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.streamingSession `NimbleResource.streamingSession`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `nimble:requesterPrincipalId`: Filters access by the ID of the logged in user ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetStreamingSession = "nimble:GetStreamingSession",

  /**
   * Read - Grants permission to get a streaming session stream
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStreamingSessionStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.streamingSession `NimbleResource.streamingSession`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `nimble:requesterPrincipalId`: Filters access by the ID of the logged in user ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetStreamingSessionStream = "nimble:GetStreamingSessionStream",

  /**
   * Read - Grants permission to get a studio
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStudio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   */
  GetStudio = "nimble:GetStudio",

  /**
   * Read - Grants permission to get a studio component
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStudioComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studioComponent `NimbleResource.studioComponent`} 
   */
  GetStudioComponent = "nimble:GetStudioComponent",

  /**
   * Read - Grants permission to get a studio member
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStudioMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   */
  GetStudioMember = "nimble:GetStudioMember",

  /**
   * Read - Grants permission to list EULA acceptances
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListEulaAcceptances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.eulaAcceptance `NimbleResource.eulaAcceptance`} 
   */
  ListEulaAcceptances = "nimble:ListEulaAcceptances",

  /**
   * Read - Grants permission to list EULAs
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListEulas.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.eula `NimbleResource.eula`} 
   */
  ListEulas = "nimble:ListEulas",

  /**
   * Read - Grants permission to list launch profile members
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListLaunchProfileMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   */
  ListLaunchProfileMembers = "nimble:ListLaunchProfileMembers",

  /**
   * Read - Grants permission to list launch profiles
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListLaunchProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `nimble:principalId`: Filters access by the principalId request parameter ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:requesterPrincipalId`: Filters access by the ID of the logged in user ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListLaunchProfiles = "nimble:ListLaunchProfiles",

  /**
   * Read - Grants permission to list streaming images
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStreamingImages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   */
  ListStreamingImages = "nimble:ListStreamingImages",

  /**
   * Read - Grants permission to list streaming sessions
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStreamingSessions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `nimble:createdBy`: Filters access by the createdBy request parameter or the ID of the creator of the resource ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:ownedBy`: Filters access by the ownedBy request parameter or the ID of the owner of the resource ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:requesterPrincipalId`: Filters access by the ID of the logged in user ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListStreamingSessions = "nimble:ListStreamingSessions",

  /**
   * Read - Grants permission to list studio components
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStudioComponents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   */
  ListStudioComponents = "nimble:ListStudioComponents",

  /**
   * Read - Grants permission to list studio members
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStudioMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   */
  ListStudioMembers = "nimble:ListStudioMembers",

  /**
   * Read - Grants permission to list all studios
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStudios.html
   */
  ListStudios = "nimble:ListStudios",

  /**
   * Read - Grants permission to list all tags on a Nimble Studio resource
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   * - {@link NimbleResource.streamingImage `NimbleResource.streamingImage`} 
   * - {@link NimbleResource.streamingSession `NimbleResource.streamingSession`} 
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   * - {@link NimbleResource.studioComponent `NimbleResource.studioComponent`} 
   */
  ListTagsForResource = "nimble:ListTagsForResource",

  /**
   * Write - Grants permission to add/update launch profile members
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_PutLaunchProfileMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   */
  PutLaunchProfileMembers = "nimble:PutLaunchProfileMembers",

  /**
   * Write - Grants permission to report metrics and logs for the Nimble Studio portal to monitor application health
   * @see https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   */
  PutStudioLogEvents = "nimble:PutStudioLogEvents",

  /**
   * Write - Grants permission to add/update studio members
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_PutStudioMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   */
  PutStudioMembers = "nimble:PutStudioMembers",

  /**
   * Write - Grants permission to start a streaming session
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StartStreamingSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.streamingSession `NimbleResource.streamingSession`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `nimble:requesterPrincipalId`: Filters access by the ID of the logged in user ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartStreamingSession = "nimble:StartStreamingSession",

  /**
   * Write - Grants permission to repair the studio's AWS SSO configuration
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StartStudioSSOConfigurationRepair.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   */
  StartStudioSSOConfigurationRepair = "nimble:StartStudioSSOConfigurationRepair",

  /**
   * Write - Grants permission to stop a streaming session
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StopStreamingSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.streamingSession `NimbleResource.streamingSession`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `nimble:requesterPrincipalId`: Filters access by the ID of the logged in user ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StopStreamingSession = "nimble:StopStreamingSession",

  /**
   * Tagging - Grants permission to add or overwrite one or more tags for the specified Nimble Studio resource
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   * - {@link NimbleResource.streamingImage `NimbleResource.streamingImage`} 
   * - {@link NimbleResource.streamingSession `NimbleResource.streamingSession`} 
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   * - {@link NimbleResource.studioComponent `NimbleResource.studioComponent`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "nimble:TagResource",

  /**
   * Tagging - Grants permission to disassociate one or more tags from the specified Nimble Studio resource
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   * - {@link NimbleResource.streamingImage `NimbleResource.streamingImage`} 
   * - {@link NimbleResource.streamingSession `NimbleResource.streamingSession`} 
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   * - {@link NimbleResource.studioComponent `NimbleResource.studioComponent`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "nimble:UntagResource",

  /**
   * Write - Grants permission to update a launch profile
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateLaunchProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   */
  UpdateLaunchProfile = "nimble:UpdateLaunchProfile",

  /**
   * Write - Grants permission to update a launch profile member
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateLaunchProfileMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   */
  UpdateLaunchProfileMember = "nimble:UpdateLaunchProfileMember",

  /**
   * Write - Grants permission to update a streaming image
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateStreamingImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.streamingImage `NimbleResource.streamingImage`} 
   */
  UpdateStreamingImage = "nimble:UpdateStreamingImage",

  /**
   * Write - Grants permission to update a studio
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateStudio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   */
  UpdateStudio = "nimble:UpdateStudio",

  /**
   * Write - Grants permission to update a studio component
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateStudioComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.studioComponent `NimbleResource.studioComponent`} 
   */
  UpdateStudioComponent = "nimble:UpdateStudioComponent",

  /**
   * * - Grant all nimble permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonnimblestudio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NimbleResource.eula `NimbleResource.eula`} 
   * - {@link NimbleResource.studio `NimbleResource.studio`} 
   * - {@link NimbleResource.launchProfile `NimbleResource.launchProfile`} 
   * - {@link NimbleResource.streamingSession `NimbleResource.streamingSession`} 
   * - {@link NimbleResource.streamingImage `NimbleResource.streamingImage`} 
   * - {@link NimbleResource.studioComponent `NimbleResource.studioComponent`} 
   * - {@link NimbleResource.eulaAcceptance `NimbleResource.eulaAcceptance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:requesterPrincipalId`: Filters access by the ID of the logged in user ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:principalId`: Filters access by the principalId request parameter ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:createdBy`: Filters access by the createdBy request parameter or the ID of the creator of the resource ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:ownedBy`: Filters access by the ownedBy request parameter or the ID of the owner of the resource ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "nimble:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonnimblestudio.html
 */
export const NimbleResource = {

  /**
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_Studio.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:studioId`: Filters access by a specific studio ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  studio: (options: Partial<{partition: string, region: string, account: string, studioId: string}> = {}) => `arn:${options.partition || '*'}:nimble:${options.region || '*'}:${options.account || '*'}:studio/${options.studioId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StreamingImage.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:studioId`: Filters access by a specific studio ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  streamingImage: (options: Partial<{partition: string, region: string, account: string, streamingImageId: string}> = {}) => `arn:${options.partition || '*'}:nimble:${options.region || '*'}:${options.account || '*'}:streaming-image/${options.streamingImageId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StudioComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:studioId`: Filters access by a specific studio ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  studioComponent: (options: Partial<{partition: string, region: string, account: string, studioComponentId: string}> = {}) => `arn:${options.partition || '*'}:nimble:${options.region || '*'}:${options.account || '*'}:studio-component/${options.studioComponentId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_LaunchProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:studioId`: Filters access by a specific studio ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  launchProfile: (options: Partial<{partition: string, region: string, account: string, launchProfileId: string}> = {}) => `arn:${options.partition || '*'}:nimble:${options.region || '*'}:${options.account || '*'}:launch-profile/${options.launchProfileId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StreamingSession.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:createdBy`: Filters access by the createdBy request parameter or the ID of the creator of the resource ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:ownedBy`: Filters access by the ownedBy request parameter or the ID of the owner of the resource ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  streamingSession: (options: Partial<{partition: string, region: string, account: string, streamingSessionId: string}> = {}) => `arn:${options.partition || '*'}:nimble:${options.region || '*'}:${options.account || '*'}:streaming-session/${options.streamingSessionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_Eula.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  eula: (options: Partial<{partition: string, region: string, account: string, eulaId: string}> = {}) => `arn:${options.partition || '*'}:nimble:${options.region || '*'}:${options.account || '*'}:eula/${options.eulaId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_EulaAcceptance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `nimble:studioId`: Filters access by a specific studio ({@link https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  eulaAcceptance: (options: Partial<{partition: string, region: string, account: string, eulaAcceptanceId: string}> = {}) => `arn:${options.partition || '*'}:nimble:${options.region || '*'}:${options.account || '*'}:eula-acceptance/${options.eulaAcceptanceId || '*'}`,
}

