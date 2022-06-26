/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonchime.html
 */
export enum ChimeAction {

  /**
   * Write - Grants permission to accept the delegate invitation to share management of an Amazon Chime account with another AWS Account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  AcceptDelegate = "chime:AcceptDelegate",

  /**
   * Write - Grants permission to activate users in an Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  ActivateUsers = "chime:ActivateUsers",

  /**
   * Write - Grants permission to add a domain to your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  AddDomain = "chime:AddDomain",

  /**
   * Write - Grants permission to add new or update existing Active Directory or Okta user groups associated with your Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html
   */
  AddOrUpdateGroups = "chime:AddOrUpdateGroups",

  /**
   * Write - Grants permission to associate a flow with a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_AssociateChannelFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   * - {@link ChimeResource.channelFlow `ChimeResource.channelFlow`} 
   */
  AssociateChannelFlow = "chime:AssociateChannelFlow",

  /**
   * Write - Grants permission to associate a phone number with an Amazon Chime user
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumberWithUser.html
   */
  AssociatePhoneNumberWithUser = "chime:AssociatePhoneNumberWithUser",

  /**
   * Write - Grants permission to associate multiple phone numbers with an Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumbersWithVoiceConnector.html
   */
  AssociatePhoneNumbersWithVoiceConnector = "chime:AssociatePhoneNumbersWithVoiceConnector",

  /**
   * Write - Grants permission to associate multiple phone numbers with an Amazon Chime Voice Connector Group
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociatePhoneNumbersWithVoiceConnectorGroup.html
   */
  AssociatePhoneNumbersWithVoiceConnectorGroup = "chime:AssociatePhoneNumbersWithVoiceConnectorGroup",

  /**
   * Write - Grants permission to associate the specified sign-in delegate groups with the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_AssociateSigninDelegateGroupsWithAccount.html
   */
  AssociateSigninDelegateGroupsWithAccount = "chime:AssociateSigninDelegateGroupsWithAccount",

  /**
   * Write - Grants permission to authorize an Active Directory for your Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  AuthorizeDirectory = "chime:AuthorizeDirectory",

  /**
   * Write - Grants permission to create new attendees for an active Amazon Chime SDK meeting
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchCreateAttendee.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  BatchCreateAttendee = "chime:BatchCreateAttendee",

  /**
   * Write - Grants permission to add multiple users to a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_BatchCreateChannelMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  BatchCreateChannelMembership = "chime:BatchCreateChannelMembership",

  /**
   * Write - Grants permission to batch add room members
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchCreateRoomMembership.html
   */
  BatchCreateRoomMembership = "chime:BatchCreateRoomMembership",

  /**
   * Write - Grants permission to move up to 50 phone numbers to the deletion queue
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchDeletePhoneNumber.html
   */
  BatchDeletePhoneNumber = "chime:BatchDeletePhoneNumber",

  /**
   * Write - Grants permission to suspend up to 50 users from a Team or EnterpriseLWA Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchSuspendUser.html
   */
  BatchSuspendUser = "chime:BatchSuspendUser",

  /**
   * Write - Grants permission to remove the suspension from up to 50 previously suspended users for the specified Amazon Chime EnterpriseLWA account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUnsuspendUser.html
   */
  BatchUnsuspendUser = "chime:BatchUnsuspendUser",

  /**
   * Write - Grants permission to update phone number details within the UpdatePhoneNumberRequestItem object for up to 50 phone numbers
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUpdatePhoneNumber.html
   */
  BatchUpdatePhoneNumber = "chime:BatchUpdatePhoneNumber",

  /**
   * Write - Grants permission to update user details within the UpdateUserRequestItem object for up to 20 users for the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_BatchUpdateUser.html
   */
  BatchUpdateUser = "chime:BatchUpdateUser",

  /**
   * Write - Grants permission to callback for a message on a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_ChannelFlowCallback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  ChannelFlowCallback = "chime:ChannelFlowCallback",

  /**
   * Write - Grants permission to establish a web socket connection for app instance user to the messaging session endpoint
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_Connect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  Connect = "chime:Connect",

  /**
   * Write - Grants permission to connect an Active Directory to your Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/ag/active_directory.html
   */
  ConnectDirectory = "chime:ConnectDirectory",

  /**
   * Write - Grants permission to create an Amazon Chime account under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAccount.html
   */
  CreateAccount = "chime:CreateAccount",

  /**
   * Write - Grants permission to create a new SCIM access key for your Amazon Chime account and Okta configuration
   * @see https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  CreateApiKey = "chime:CreateApiKey",

  /**
   * Write - Grants permission to create an app instance under the AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_CreateAppInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAppInstance = "chime:CreateAppInstance",

  /**
   * Write - Grants permission to promote an AppInstanceUser to an AppInstanceAdmin
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_CreateAppInstanceAdmin.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  CreateAppInstanceAdmin = "chime:CreateAppInstanceAdmin",

  /**
   * Write - Grants permission to create a user under an Amazon Chime AppInstance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_CreateAppInstanceUser.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAppInstanceUser = "chime:CreateAppInstanceUser",

  /**
   * Write - Grants permission to create a new attendee for an active Amazon Chime SDK meeting
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  CreateAttendee = "chime:CreateAttendee",

  /**
   * Write - Grants permission to create a bot for an Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateBot.html
   */
  CreateBot = "chime:CreateBot",

  /**
   * Write - Grants permission to add a bot to a chat room in your Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateBotMembership.html
   */
  CreateBotMembership = "chime:CreateBotMembership",

  /**
   * Write - Grants permission to create a new Call Detail Record S3 bucket
   * @see https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  CreateCDRBucket = "chime:CreateCDRBucket",

  /**
   * Write - Grants permission to create a channel for an app instance under the AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_CreateChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateChannel = "chime:CreateChannel",

  /**
   * Write - Grants permission to ban a user from a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_CreateChannelBan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  CreateChannelBan = "chime:CreateChannelBan",

  /**
   * Write - Grants permission to create a channel flow for an app instance under the AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_CreateChannelFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateChannelFlow = "chime:CreateChannelFlow",

  /**
   * Write - Grants permission to add a user to a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_CreateChannelMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  CreateChannelMembership = "chime:CreateChannelMembership",

  /**
   * Write - Grants permission to create a channel moderator
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_CreateChannelModerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  CreateChannelModerator = "chime:CreateChannelModerator",

  /**
   * Write - Grants permission to create a media capture pipeline
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMediaCapturePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateMediaCapturePipeline = "chime:CreateMediaCapturePipeline",

  /**
   * Write - Grants permission to create a new Amazon Chime SDK meeting in the specified media Region, with no initial attendees
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeeting.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMeeting = "chime:CreateMeeting",

  /**
   * Write - Grants permission to call a phone number to join the specified Amazon Chime SDK meeting
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeetingDialOut.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  CreateMeetingDialOut = "chime:CreateMeetingDialOut",

  /**
   * Write - Grants permission to create a new Amazon Chime SDK meeting in the specified media Region, with a set of attendees
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateMeetingWithAttendees.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMeetingWithAttendees = "chime:CreateMeetingWithAttendees",

  /**
   * Write - Grants permission to create a phone number order with the Carriers
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreatePhoneNumberOrder.html
   */
  CreatePhoneNumberOrder = "chime:CreatePhoneNumberOrder",

  /**
   * Write - Grants permission to create a proxy session for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateProxySession.html
   */
  CreateProxySession = "chime:CreateProxySession",

  /**
   * Write - Grants permission to create a room
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateRoom.html
   */
  CreateRoom = "chime:CreateRoom",

  /**
   * Write - Grants permission to add a room member
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateRoomMembership.html
   */
  CreateRoomMembership = "chime:CreateRoomMembership",

  /**
   * Write - Grants permission to create an Amazon Chime SIP media application under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateSipMediaApplication.html
   */
  CreateSipMediaApplication = "chime:CreateSipMediaApplication",

  /**
   * Write - Grants permission to create outbound call for Amazon Chime SIP media application under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateSipMediaApplicationCall.html
   */
  CreateSipMediaApplicationCall = "chime:CreateSipMediaApplicationCall",

  /**
   * Write - Grants permission to create an Amazon Chime SIP rule under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateSipRule.html
   */
  CreateSipRule = "chime:CreateSipRule",

  /**
   * Write - Grants permission to create a user under the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateUser.html
   */
  CreateUser = "chime:CreateUser",

  /**
   * Write - Grants permission to create a Amazon Chime Voice Connector under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateVoiceConnector.html
   */
  CreateVoiceConnector = "chime:CreateVoiceConnector",

  /**
   * Write - Grants permission to create a Amazon Chime Voice Connector Group under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateVoiceConnectorGroup.html
   */
  CreateVoiceConnectorGroup = "chime:CreateVoiceConnectorGroup",

  /**
   * Write - Grants permission to delete the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAccount.html
   */
  DeleteAccount = "chime:DeleteAccount",

  /**
   * Write - Grants permission to delete the OpenIdConfig attributes from your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  DeleteAccountOpenIdConfig = "chime:DeleteAccountOpenIdConfig",

  /**
   * Write - Grants permission to delete the specified SCIM access key associated with your Amazon Chime account and Okta configuration
   * @see https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  DeleteApiKey = "chime:DeleteApiKey",

  /**
   * Write - Grants permission to delete an AppInstance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_DeleteAppInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   */
  DeleteAppInstance = "chime:DeleteAppInstance",

  /**
   * Write - Grants permission to demote an AppInstanceAdmin to an AppInstanceUser
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_DeleteAppInstanceAdmin.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  DeleteAppInstanceAdmin = "chime:DeleteAppInstanceAdmin",

  /**
   * Write - Grants permission to disable data streaming for the app instance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAppInstanceStreamingConfigurations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   */
  DeleteAppInstanceStreamingConfigurations = "chime:DeleteAppInstanceStreamingConfigurations",

  /**
   * Write - Grants permission to delete an AppInstanceUser
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_DeleteAppInstanceUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  DeleteAppInstanceUser = "chime:DeleteAppInstanceUser",

  /**
   * Write - Grants permission to delete the specified attendee from an Amazon Chime SDK meeting
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteAttendee.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  DeleteAttendee = "chime:DeleteAttendee",

  /**
   * Write - Grants permission to delete a Call Detail Record S3 bucket from your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  DeleteCDRBucket = "chime:DeleteCDRBucket",

  /**
   * Write - Grants permission to delete a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DeleteChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DeleteChannel = "chime:DeleteChannel",

  /**
   * Write - Grants permission to remove a user from a channel's ban list
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DeleteChannelBan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DeleteChannelBan = "chime:DeleteChannelBan",

  /**
   * Write - Grants permission to delete a channel flow
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DeleteChannelFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DeleteChannelFlow = "chime:DeleteChannelFlow",

  /**
   * Write - Grants permission to remove a member from a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DeleteChannelMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DeleteChannelMembership = "chime:DeleteChannelMembership",

  /**
   * Write - Grants permission to delete a channel message
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DeleteChannelMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DeleteChannelMessage = "chime:DeleteChannelMessage",

  /**
   * Write - Grants permission to delete a channel moderator
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DeleteChannelModerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DeleteChannelModerator = "chime:DeleteChannelModerator",

  /**
   * Write - Grants permission to delete delegated AWS account management from your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  DeleteDelegate = "chime:DeleteDelegate",

  /**
   * Write - Grants permission to delete a domain from your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  DeleteDomain = "chime:DeleteDomain",

  /**
   * Write - Grants permission to delete an events configuration for a bot to receive outgoing events
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteEventsConfiguration.html
   */
  DeleteEventsConfiguration = "chime:DeleteEventsConfiguration",

  /**
   * Write - Grants permission to delete Active Directory or Okta user groups from your Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  DeleteGroups = "chime:DeleteGroups",

  /**
   * Write - Grants permission to delete a media capture pipeline
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteMediaCapturePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.mediaPipeline `ChimeResource.mediaPipeline`} 
   */
  DeleteMediaCapturePipeline = "chime:DeleteMediaCapturePipeline",

  /**
   * Write - Grants permission to delete the specified Amazon Chime SDK meeting
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteMeeting.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  DeleteMeeting = "chime:DeleteMeeting",

  /**
   * Write - Grants permission to move a phone number to the deletion queue
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeletePhoneNumber.html
   */
  DeletePhoneNumber = "chime:DeletePhoneNumber",

  /**
   * Write - Grants permission to delete a proxy session for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteProxySession.html
   */
  DeleteProxySession = "chime:DeleteProxySession",

  /**
   * Write - Grants permission to delete a room
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteRoom.html
   */
  DeleteRoom = "chime:DeleteRoom",

  /**
   * Write - Grants permission to remove a room member
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteRoomMembership.html
   */
  DeleteRoomMembership = "chime:DeleteRoomMembership",

  /**
   * Write - Grants permission to delete Amazon Chime SIP media application under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteSipMediaApplication.html
   */
  DeleteSipMediaApplication = "chime:DeleteSipMediaApplication",

  /**
   * Write - Grants permission to delete Amazon Chime SIP rule under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteSipRule.html
   */
  DeleteSipRule = "chime:DeleteSipRule",

  /**
   * Write - Grants permission to delete the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnector.html
   */
  DeleteVoiceConnector = "chime:DeleteVoiceConnector",

  /**
   * Write - Grants permission to delete emergency calling configuration for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorEmergencyCallingConfiguration.html
   */
  DeleteVoiceConnectorEmergencyCallingConfiguration = "chime:DeleteVoiceConnectorEmergencyCallingConfiguration",

  /**
   * Write - Grants permission to delete the specified Amazon Chime Voice Connector Group
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorGroup.html
   */
  DeleteVoiceConnectorGroup = "chime:DeleteVoiceConnectorGroup",

  /**
   * Write - Grants permission to delete the origination settings for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorOrigination.html
   */
  DeleteVoiceConnectorOrigination = "chime:DeleteVoiceConnectorOrigination",

  /**
   * Write - Grants permission to delete proxy configuration for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorProxy.html
   */
  DeleteVoiceConnectorProxy = "chime:DeleteVoiceConnectorProxy",

  /**
   * Write - Grants permission to delete streaming configuration for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorStreamingConfiguration.html
   */
  DeleteVoiceConnectorStreamingConfiguration = "chime:DeleteVoiceConnectorStreamingConfiguration",

  /**
   * Write - Grants permission to delete the termination settings for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorTermination.html
   */
  DeleteVoiceConnectorTermination = "chime:DeleteVoiceConnectorTermination",

  /**
   * Write - Grants permission to delete SIP termination credentials for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DeleteVoiceConnectorTerminationCredentials.html
   */
  DeleteVoiceConnectorTerminationCredentials = "chime:DeleteVoiceConnectorTerminationCredentials",

  /**
   * Write - Grants permission to deregister an endpoint for an app instance user
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_DeregisterAppInstanceUserEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  DeregisterAppInstanceUserEndpoint = "chime:DeregisterAppInstanceUserEndpoint",

  /**
   * Read - Grants permission to get the full details of an AppInstance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_DescribeAppInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   */
  DescribeAppInstance = "chime:DescribeAppInstance",

  /**
   * Read - Grants permission to get the full details of an AppInstanceAdmin
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_DescribeAppInstanceAdmin.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  DescribeAppInstanceAdmin = "chime:DescribeAppInstanceAdmin",

  /**
   * Read - Grants permission to get the full details of an AppInstanceUser
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_DescribeAppInstanceUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  DescribeAppInstanceUser = "chime:DescribeAppInstanceUser",

  /**
   * Read - Grants permission to describe an endpoint registered for an app instance user
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_DescribeAppInstanceUserEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  DescribeAppInstanceUserEndpoint = "chime:DescribeAppInstanceUserEndpoint",

  /**
   * Read - Grants permission to get the full details of a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DescribeChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DescribeChannel = "chime:DescribeChannel",

  /**
   * Read - Grants permission to get the full details of a channel ban
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DescribeChannelBan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DescribeChannelBan = "chime:DescribeChannelBan",

  /**
   * Read - Grants permission to get the full details of a channel flow
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DescribeChannelFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.channelFlow `ChimeResource.channelFlow`} 
   */
  DescribeChannelFlow = "chime:DescribeChannelFlow",

  /**
   * Read - Grants permission to get the full details of a channel membership
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DescribeChannelMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DescribeChannelMembership = "chime:DescribeChannelMembership",

  /**
   * Read - Grants permission to get the details of a channel based on the membership of the specified AppInstanceUser
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DescribeChannelMembershipForAppInstanceUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DescribeChannelMembershipForAppInstanceUser = "chime:DescribeChannelMembershipForAppInstanceUser",

  /**
   * Read - Grants permission to get the full details of a channel moderated by the specified AppInstanceUser
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DescribeChannelModeratedByAppInstanceUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DescribeChannelModeratedByAppInstanceUser = "chime:DescribeChannelModeratedByAppInstanceUser",

  /**
   * Read - Grants permission to get the full details of a single ChannelModerator
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DescribeChannelModerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  DescribeChannelModerator = "chime:DescribeChannelModerator",

  /**
   * Write - Grants permission to disassociate a flow from a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_DisassociateChannelFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   * - {@link ChimeResource.channelFlow `ChimeResource.channelFlow`} 
   */
  DisassociateChannelFlow = "chime:DisassociateChannelFlow",

  /**
   * Write - Grants permission to disassociate the primary provisioned number from the specified Amazon Chime user
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumberFromUser.html
   */
  DisassociatePhoneNumberFromUser = "chime:DisassociatePhoneNumberFromUser",

  /**
   * Write - Grants permission to disassociate multiple phone numbers from the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumbersFromVoiceConnector.html
   */
  DisassociatePhoneNumbersFromVoiceConnector = "chime:DisassociatePhoneNumbersFromVoiceConnector",

  /**
   * Write - Grants permission to disassociate multiple phone numbers from the specified Amazon Chime Voice Connector Group
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociatePhoneNumbersFromVoiceConnectorGroup.html
   */
  DisassociatePhoneNumbersFromVoiceConnectorGroup = "chime:DisassociatePhoneNumbersFromVoiceConnectorGroup",

  /**
   * Write - Grants permission to disassociate the specified sign-in delegate groups from the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_DisassociateSigninDelegateGroupsFromAccount.html
   */
  DisassociateSigninDelegateGroupsFromAccount = "chime:DisassociateSigninDelegateGroupsFromAccount",

  /**
   * Write - Grants permission to disconnect the Active Directory from your Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  DisconnectDirectory = "chime:DisconnectDirectory",

  /**
   * Read - Grants permission to get details for the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAccount.html
   */
  GetAccount = "chime:GetAccount",

  /**
   * Read - Grants permission to get details for the account resource associated with your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  GetAccountResource = "chime:GetAccountResource",

  /**
   * Read - Grants permission to get account settings for the specified Amazon Chime account ID
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAccountSettings.html
   */
  GetAccountSettings = "chime:GetAccountSettings",

  /**
   * Read - Grants permission to get the account details and OpenIdConfig attributes for your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  GetAccountWithOpenIdConfig = "chime:GetAccountWithOpenIdConfig",

  /**
   * Read - Grants permission to get retention settings for an app instance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_GetAppInstanceRetentionSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   */
  GetAppInstanceRetentionSettings = "chime:GetAppInstanceRetentionSettings",

  /**
   * Read - Grants permission to get the streaming configurations for an app instance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAppInstanceStreamingConfigurations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   */
  GetAppInstanceStreamingConfigurations = "chime:GetAppInstanceStreamingConfigurations",

  /**
   * Read - Grants permission to get attendee details for a specified meeting ID and attendee ID
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetAttendee.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  GetAttendee = "chime:GetAttendee",

  /**
   * Read - Grants permission to retrieve details for the specified bot
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetBot.html
   */
  GetBot = "chime:GetBot",

  /**
   * Read - Grants permission to get details of a Call Detail Record S3 bucket associated with your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  GetCDRBucket = "chime:GetCDRBucket",

  /**
   * Read - Grants permission to get the preferences for a channel membership
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_GetChannelMembershipPreferences.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  GetChannelMembershipPreferences = "chime:GetChannelMembershipPreferences",

  /**
   * Read - Grants permission to get the full details of a channel message
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_GetChannelMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  GetChannelMessage = "chime:GetChannelMessage",

  /**
   * Read - Grants permission to get the status of a channel message
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_GetChannelMessageStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  GetChannelMessageStatus = "chime:GetChannelMessageStatus",

  /**
   * Read - Grants permission to get domain details for a domain associated with your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  GetDomain = "chime:GetDomain",

  /**
   * Read - Grants permission to retrieve details for an events configuration for a bot to receive outgoing events
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetEventsConfiguration.html
   */
  GetEventsConfiguration = "chime:GetEventsConfiguration",

  /**
   * Read - Grants permission to get global settings related to Amazon Chime for the AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetGlobalSettings.html
   */
  GetGlobalSettings = "chime:GetGlobalSettings",

  /**
   * Read - Grants permission to get an existing media capture pipeline
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetMediaCapturePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.mediaPipeline `ChimeResource.mediaPipeline`} 
   */
  GetMediaCapturePipeline = "chime:GetMediaCapturePipeline",

  /**
   * Read - Grants permission to get the meeting record for a specified meeting ID
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetMeeting.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  GetMeeting = "chime:GetMeeting",

  /**
   * Read - Grants permission to get attendee, connection, and other details for a meeting
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  GetMeetingDetail = "chime:GetMeetingDetail",

  /**
   * Read - Grants permission to get the endpoint for the messaging session
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_GetMessagingSessionEndpoint.html
   */
  GetMessagingSessionEndpoint = "chime:GetMessagingSessionEndpoint",

  /**
   * Read - Grants permission to get details for the specified phone number
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumber.html
   */
  GetPhoneNumber = "chime:GetPhoneNumber",

  /**
   * Read - Grants permission to get details for the specified phone number order
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumberOrder.html
   */
  GetPhoneNumberOrder = "chime:GetPhoneNumberOrder",

  /**
   * Read - Grants permission to get phone number settings related to Amazon Chime for the AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetPhoneNumberSettings.html
   */
  GetPhoneNumberSettings = "chime:GetPhoneNumberSettings",

  /**
   * Read - Grants permission to get details of the specified proxy session for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetProxySession.html
   */
  GetProxySession = "chime:GetProxySession",

  /**
   * Read - Grants permission to retrieve the retention settings for the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetRetentionSettings.html
   */
  GetRetentionSettings = "chime:GetRetentionSettings",

  /**
   * Read - Grants permission to retrieve a room
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetRoom.html
   */
  GetRoom = "chime:GetRoom",

  /**
   * Read - Grants permission to get details of Amazon Chime SIP media application under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetSipMediaApplication.html
   */
  GetSipMediaApplication = "chime:GetSipMediaApplication",

  /**
   * Read - Grants permission to get logging configuration settings for Amazon Chime SIP media application under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetSipMediaApplicationLoggingConfiguration.html
   */
  GetSipMediaApplicationLoggingConfiguration = "chime:GetSipMediaApplicationLoggingConfiguration",

  /**
   * Read - Grants permission to get details of Amazon Chime SIP rule under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetSipRule.html
   */
  GetSipRule = "chime:GetSipRule",

  /**
   * Read - Grants permission to get telephony limits for the AWS account
   * @see https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html
   */
  GetTelephonyLimits = "chime:GetTelephonyLimits",

  /**
   * Read - Grants permission to get details for the specified user ID
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetUser.html
   */
  GetUser = "chime:GetUser",

  /**
   * Read - Grants permission to get a summary of user activity on the user details page
   * @see https://docs.aws.amazon.com/chime/latest/ag/user-details.html
   */
  GetUserActivityReportData = "chime:GetUserActivityReportData",

  /**
   * Read - Grants permission to get user details for an Amazon Chime user based on the email address in an Amazon Chime Enterprise or Team account
   * @see https://docs.aws.amazon.com/chime/latest/ag/user-details.html
   */
  GetUserByEmail = "chime:GetUserByEmail",

  /**
   * Read - Grants permission to get user settings related to the specified Amazon Chime user
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetUserSettings.html
   */
  GetUserSettings = "chime:GetUserSettings",

  /**
   * Read - Grants permission to get details for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnector.html
   */
  GetVoiceConnector = "chime:GetVoiceConnector",

  /**
   * Read - Grants permission to get details of the emergency calling configuration for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorEmergencyCallingConfiguration.html
   */
  GetVoiceConnectorEmergencyCallingConfiguration = "chime:GetVoiceConnectorEmergencyCallingConfiguration",

  /**
   * Read - Grants permission to get details for the specified Amazon Chime Voice Connector Group
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorGroup.html
   */
  GetVoiceConnectorGroup = "chime:GetVoiceConnectorGroup",

  /**
   * Read - Grants permission to get details of the logging configuration for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorLoggingConfiguration.html
   */
  GetVoiceConnectorLoggingConfiguration = "chime:GetVoiceConnectorLoggingConfiguration",

  /**
   * Read - Grants permission to get details of the origination settings for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorOrigination.html
   */
  GetVoiceConnectorOrigination = "chime:GetVoiceConnectorOrigination",

  /**
   * Read - Grants permission to get details of the proxy configuration for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorProxy.html
   */
  GetVoiceConnectorProxy = "chime:GetVoiceConnectorProxy",

  /**
   * Read - Grants permission to get details of the streaming configuration for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorStreamingConfiguration.html
   */
  GetVoiceConnectorStreamingConfiguration = "chime:GetVoiceConnectorStreamingConfiguration",

  /**
   * Read - Grants permission to get details of the termination settings for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorTermination.html
   */
  GetVoiceConnectorTermination = "chime:GetVoiceConnectorTermination",

  /**
   * Read - Grants permission to get details of the termination health for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_GetVoiceConnectorTerminationHealth.html
   */
  GetVoiceConnectorTerminationHealth = "chime:GetVoiceConnectorTerminationHealth",

  /**
   * Write - Grants permission to send an invitation to accept a request for AWS account delegation for an Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  InviteDelegate = "chime:InviteDelegate",

  /**
   * Write - Grants permission to invite as many as 50 users to the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_InviteUsers.html
   */
  InviteUsers = "chime:InviteUsers",

  /**
   * Write - Grants permission to invite users from a third party provider to your Amazon Chime account
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonchime.html
   */
  InviteUsersFromProvider = "chime:InviteUsersFromProvider",

  /**
   * List - Grants permission to list Amazon Chime account usage reporting data
   * @see https://docs.aws.amazon.com/chime/latest/ag/view-reports.html
   */
  ListAccountUsageReportData = "chime:ListAccountUsageReportData",

  /**
   * List - Grants permission to list the Amazon Chime accounts under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAccounts.html
   */
  ListAccounts = "chime:ListAccounts",

  /**
   * List - Grants permission to list the SCIM access keys defined for your Amazon Chime account and Okta configuration
   * @see https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  ListApiKeys = "chime:ListApiKeys",

  /**
   * List - Grants permission to list administrators in the app instance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_ListAppInstanceAdmins.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  ListAppInstanceAdmins = "chime:ListAppInstanceAdmins",

  /**
   * List - Grants permission to list the endpoints registered for an app instance user
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_ListAppInstanceUserEndpoints.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  ListAppInstanceUserEndpoints = "chime:ListAppInstanceUserEndpoints",

  /**
   * List - Grants permission to list all AppInstanceUsers created under a single app instance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_ListAppInstanceUsers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  ListAppInstanceUsers = "chime:ListAppInstanceUsers",

  /**
   * List - Grants permission to list all Amazon Chime app instances created under a single AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_ListAppInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   */
  ListAppInstances = "chime:ListAppInstances",

  /**
   * List - Grants permission to list the tags applied to an Amazon Chime SDK attendee resource
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAttendeeTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  ListAttendeeTags = "chime:ListAttendeeTags",

  /**
   * List - Grants permission to list up to 100 attendees for a specified Amazon Chime SDK meeting
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListAttendees.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  ListAttendees = "chime:ListAttendees",

  /**
   * List - Grants permission to list the bots associated with the administrator's Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListBots.html
   */
  ListBots = "chime:ListBots",

  /**
   * List - Grants permission to list Call Detail Record S3 buckets
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  ListCDRBucket = "chime:ListCDRBucket",

  /**
   * List - Grants permission to list the calling regions available for the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/ag/phone-numbers.html
   */
  ListCallingRegions = "chime:ListCallingRegions",

  /**
   * List - Grants permission to list all the users banned from a particular channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_ListChannelBans.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  ListChannelBans = "chime:ListChannelBans",

  /**
   * List - Grants permission to list all the Channel Flows created under a single Chime AppInstance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_ListChannelFlows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.channelFlow `ChimeResource.channelFlow`} 
   */
  ListChannelFlows = "chime:ListChannelFlows",

  /**
   * List - Grants permission to list all channel memberships in a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_ListChannelMemberships.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  ListChannelMemberships = "chime:ListChannelMemberships",

  /**
   * List - Grants permission to list all channels that a particular AppInstanceUser is a part of
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_ListChannelMembershipsForAppInstanceUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  ListChannelMembershipsForAppInstanceUser = "chime:ListChannelMembershipsForAppInstanceUser",

  /**
   * Read - Grants permission to list all the messages in a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_ListChannelMessages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  ListChannelMessages = "chime:ListChannelMessages",

  /**
   * List - Grants permission to list all the moderators for a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_ListChannelModerators.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  ListChannelModerators = "chime:ListChannelModerators",

  /**
   * List - Grants permission to list all the Channels created under a single Chime AppInstance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_ListChannels.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  ListChannels = "chime:ListChannels",

  /**
   * List - Grants permission to list all the Channel Flows created under a single Chime AppInstance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_ListChannelFlows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.channelFlow `ChimeResource.channelFlow`} 
   */
  ListChannelsAssociatedWithChannelFlow = "chime:ListChannelsAssociatedWithChannelFlow",

  /**
   * List - Grants permission to list all channels moderated by an app instance user
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_ListChannelsModeratedByAppInstanceUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  ListChannelsModeratedByAppInstanceUser = "chime:ListChannelsModeratedByAppInstanceUser",

  /**
   * List - Grants permission to list account delegate information associated with your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  ListDelegates = "chime:ListDelegates",

  /**
   * List - Grants permission to list active Active Directories hosted in the Directory Service of your AWS account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  ListDirectories = "chime:ListDirectories",

  /**
   * List - Grants permission to list domains associated with your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/claim-domain.html
   */
  ListDomains = "chime:ListDomains",

  /**
   * List - Grants permission to list Active Directory or Okta user groups associated with your Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  ListGroups = "chime:ListGroups",

  /**
   * List - Grants permission to list media capture pipelines
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMediaCapturePipelines.html
   */
  ListMediaCapturePipelines = "chime:ListMediaCapturePipelines",

  /**
   * List - Grants permission to list all events that occurred for a specified meeting
   * @see https://docs.aws.amazon.com/chime/latest/ag/view-reports.html
   */
  ListMeetingEvents = "chime:ListMeetingEvents",

  /**
   * List - Grants permission to list the tags applied to an Amazon Chime SDK meeting resource
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMeetingTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  ListMeetingTags = "chime:ListMeetingTags",

  /**
   * List - Grants permission to list up to 100 active Amazon Chime SDK meetings
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListMeetings.html
   */
  ListMeetings = "chime:ListMeetings",

  /**
   * List - Grants permission to list meetings ended during the specified date range
   * @see https://docs.aws.amazon.com/chime/latest/ag/view-reports.html
   */
  ListMeetingsReportData = "chime:ListMeetingsReportData",

  /**
   * List - Grants permission to list the phone number orders under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListPhoneNumberOrders.html
   */
  ListPhoneNumberOrders = "chime:ListPhoneNumberOrders",

  /**
   * List - Grants permission to list the phone numbers under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListPhoneNumbers.html
   */
  ListPhoneNumbers = "chime:ListPhoneNumbers",

  /**
   * List - Grants permission to list proxy sessions for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListProxySessions.html
   */
  ListProxySessions = "chime:ListProxySessions",

  /**
   * List - Grants permission to list all room members
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListRoomMemberships.html
   */
  ListRoomMemberships = "chime:ListRoomMemberships",

  /**
   * List - Grants permission to list rooms
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListRooms.html
   */
  ListRooms = "chime:ListRooms",

  /**
   * List - Grants permission to list all Amazon Chime SIP media applications under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListSipMediaApplications.html
   */
  ListSipMediaApplications = "chime:ListSipMediaApplications",

  /**
   * List - Grants permission to list all Amazon Chime SIP rules under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListSipRules.html
   */
  ListSipRules = "chime:ListSipRules",

  /**
   * List - Grants permission to list the phone number countries supported by the AWS account
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/API_ListSupportedPhoneNumberCountries.html
   */
  ListSupportedPhoneNumberCountries = "chime:ListSupportedPhoneNumberCountries",

  /**
   * Read - Grants permission to list the tags applied to an Amazon Chime resource
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  ListTagsForResource = "chime:ListTagsForResource",

  /**
   * List - Grants permission to list the users that belong to the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListUsers.html
   */
  ListUsers = "chime:ListUsers",

  /**
   * List - Grants permission to list the Amazon Chime Voice Connector Groups under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectorGroups.html
   */
  ListVoiceConnectorGroups = "chime:ListVoiceConnectorGroups",

  /**
   * List - Grants permission to list the SIP termination credentials for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectorTerminationCredentials.html
   */
  ListVoiceConnectorTerminationCredentials = "chime:ListVoiceConnectorTerminationCredentials",

  /**
   * List - Grants permission to list the Amazon Chime Voice Connectors under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ListVoiceConnectors.html
   */
  ListVoiceConnectors = "chime:ListVoiceConnectors",

  /**
   * Write - Grants permission to log out the specified user from all of the devices they are currently logged into
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_LogoutUser.html
   */
  LogoutUser = "chime:LogoutUser",

  /**
   * Write - Grants permission to enable data retention for the app instance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_PutAppInstanceRetentionSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   */
  PutAppInstanceRetentionSettings = "chime:PutAppInstanceRetentionSettings",

  /**
   * Write - Grants permission to configure data streaming for the app instance
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_PutAppInstanceStreamingConfigurations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   */
  PutAppInstanceStreamingConfigurations = "chime:PutAppInstanceStreamingConfigurations",

  /**
   * Write - Grants permission to put the preferences for a channel membership
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_PutChannelMembershipPreferences.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  PutChannelMembershipPreferences = "chime:PutChannelMembershipPreferences",

  /**
   * Write - Grants permission to update details for an events configuration for a bot to receive outgoing events
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_PutEventsConfiguration.html
   */
  PutEventsConfiguration = "chime:PutEventsConfiguration",

  /**
   * Write - Grants permission to create or update retention settings for the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_PutRetentionSettings.html
   */
  PutRetentionSettings = "chime:PutRetentionSettings",

  /**
   * Write - Grants permission to update logging configuration settings for Amazon Chime SIP media application under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_PutSipMediaApplicationLoggingConfiguration.html
   */
  PutSipMediaApplicationLoggingConfiguration = "chime:PutSipMediaApplicationLoggingConfiguration",

  /**
   * Write - Grants permission to add emergency calling configuration for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorEmergencyCallingConfiguration.html
   */
  PutVoiceConnectorEmergencyCallingConfiguration = "chime:PutVoiceConnectorEmergencyCallingConfiguration",

  /**
   * Write - Grants permission to add logging configuration for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorLoggingConfiguration.html
   */
  PutVoiceConnectorLoggingConfiguration = "chime:PutVoiceConnectorLoggingConfiguration",

  /**
   * Write - Grants permission to update the origination settings for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorOrigination.html
   */
  PutVoiceConnectorOrigination = "chime:PutVoiceConnectorOrigination",

  /**
   * Write - Grants permission to add proxy configuration for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorProxy.html
   */
  PutVoiceConnectorProxy = "chime:PutVoiceConnectorProxy",

  /**
   * Write - Grants permission to add streaming configuration for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorStreamingConfiguration.html
   */
  PutVoiceConnectorStreamingConfiguration = "chime:PutVoiceConnectorStreamingConfiguration",

  /**
   * Write - Grants permission to update the termination settings for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorTermination.html
   */
  PutVoiceConnectorTermination = "chime:PutVoiceConnectorTermination",

  /**
   * Write - Grants permission to add SIP termination credentials for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_PutVoiceConnectorTerminationCredentials.html
   */
  PutVoiceConnectorTerminationCredentials = "chime:PutVoiceConnectorTerminationCredentials",

  /**
   * Write - Grants permission to redact message content
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_RedactChannelMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  RedactChannelMessage = "chime:RedactChannelMessage",

  /**
   * Write - Grants permission to redact the specified Chime conversation Message
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_RedactConversationMessage.html
   */
  RedactConversationMessage = "chime:RedactConversationMessage",

  /**
   * Write - Grants permission to redacts the specified Chime room Message
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_RedactRoomMessage.html
   */
  RedactRoomMessage = "chime:RedactRoomMessage",

  /**
   * Write - Grants permission to regenerate the security token for the specified bot
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_RegenerateSecurityToken.html
   */
  RegenerateSecurityToken = "chime:RegenerateSecurityToken",

  /**
   * Write - Grants permission to register an endpoint for an app instance user
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_RegisterAppInstanceUserEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  RegisterAppInstanceUserEndpoint = "chime:RegisterAppInstanceUserEndpoint",

  /**
   * Write - Grants permission to modify the account name for your Amazon Chime Enterprise or Team account
   * @see https://docs.aws.amazon.com/chime/latest/ag/rename-account.html
   */
  RenameAccount = "chime:RenameAccount",

  /**
   * Write - Grants permission to renew the delegation request associated with an Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  RenewDelegate = "chime:RenewDelegate",

  /**
   * Write - Grants permission to reset the account resource in your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  ResetAccountResource = "chime:ResetAccountResource",

  /**
   * Write - Grants permission to reset the personal meeting PIN for the specified user on an Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ResetPersonalPIN.html
   */
  ResetPersonalPIN = "chime:ResetPersonalPIN",

  /**
   * Write - Grants permission to restore the specified phone number from the deltion queue back to the phone number inventory
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_RestorePhoneNumber.html
   */
  RestorePhoneNumber = "chime:RestorePhoneNumber",

  /**
   * Read - Grants permission to download the file containing links to all user attachments returned as part of the "Request attachments" action
   * @see https://docs.aws.amazon.com/chime/latest/ag/request-attachments.html
   */
  RetrieveDataExports = "chime:RetrieveDataExports",

  /**
   * Read - Grants permission to search phone numbers that can be ordered from the carrier
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_SearchAvailablePhoneNumbers.html
   */
  SearchAvailablePhoneNumbers = "chime:SearchAvailablePhoneNumbers",

  /**
   * Write - Grants permission to send a message to a particular channel that the member is a part of
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_SendChannelMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  SendChannelMessage = "chime:SendChannelMessage",

  /**
   * Write - Grants permission to submit the "Request attachments" request
   * @see https://docs.aws.amazon.com/chime/latest/ag/request-attachments.html
   */
  StartDataExport = "chime:StartDataExport",

  /**
   * Write - Grants permission to start transcription for a meeting
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_StartMeetingTranscription.html
   */
  StartMeetingTranscription = "chime:StartMeetingTranscription",

  /**
   * Write - Grants permission to stop transcription for a meeting
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_StopMeetingTranscription.html
   */
  StopMeetingTranscription = "chime:StopMeetingTranscription",

  /**
   * Write - Grants permission to submit a customer service support request
   * @see https://docs.aws.amazon.com/chime/latest/ag/chime-getting-admin-support.html
   */
  SubmitSupportRequest = "chime:SubmitSupportRequest",

  /**
   * Write - Grants permission to suspend users from an Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  SuspendUsers = "chime:SuspendUsers",

  /**
   * Tagging - Grants permission to apply the specified tags to the specified Amazon Chime SDK attendee
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_TagAttendee.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  TagAttendee = "chime:TagAttendee",

  /**
   * Tagging - Grants permission to apply the specified tags to the specified Amazon Chime SDK meeting
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_TagMeeting.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagMeeting = "chime:TagMeeting",

  /**
   * Tagging - Grants permission to apply the specified tags to the specified Amazon Chime resource
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   * - {@link ChimeResource.mediaPipeline `ChimeResource.mediaPipeline`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "chime:TagResource",

  /**
   * Write - Grants permission to unauthorize an Active Directory from your Amazon Chime Enterprise account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  UnauthorizeDirectory = "chime:UnauthorizeDirectory",

  /**
   * Tagging - Grants permission to untag the specified tags from the specified Amazon Chime SDK attendee
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagAttendee.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  UntagAttendee = "chime:UntagAttendee",

  /**
   * Tagging - Grants permission to untag the specified tags from the specified Amazon Chime SDK meeting
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagMeeting.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   */
  UntagMeeting = "chime:UntagMeeting",

  /**
   * Tagging - Grants permission to untag the specified tags from the specified Amazon Chime resource
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   * - {@link ChimeResource.mediaPipeline `ChimeResource.mediaPipeline`} 
   */
  UntagResource = "chime:UntagResource",

  /**
   * Write - Grants permission to update account details for the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAccount.html
   */
  UpdateAccount = "chime:UpdateAccount",

  /**
   * Write - Grants permission to update the OpenIdConfig attributes for your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/okta_sso.html
   */
  UpdateAccountOpenIdConfig = "chime:UpdateAccountOpenIdConfig",

  /**
   * Write - Grants permission to update the account resource in your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  UpdateAccountResource = "chime:UpdateAccountResource",

  /**
   * Write - Grants permission to update the settings for the specified Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateAccountSettings.html
   */
  UpdateAccountSettings = "chime:UpdateAccountSettings",

  /**
   * Write - Grants permission to update AppInstance metadata
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_UpdateAppInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   */
  UpdateAppInstance = "chime:UpdateAppInstance",

  /**
   * Write - Grants permission to update the details for an AppInstanceUser
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_UpdateAppInstanceUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  UpdateAppInstanceUser = "chime:UpdateAppInstanceUser",

  /**
   * Write - Grants permission to update an endpoint registered for an app instance user
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_identity-chime_UpdateAppInstanceUserEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   */
  UpdateAppInstanceUserEndpoint = "chime:UpdateAppInstanceUserEndpoint",

  /**
   * Write - Grants permission to update the status of the specified bot
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateBot.html
   */
  UpdateBot = "chime:UpdateBot",

  /**
   * Write - Grants permission to update your Call Detail Record S3 bucket
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  UpdateCDRSettings = "chime:UpdateCDRSettings",

  /**
   * Write - Grants permission to update a channel's attributes
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_UpdateChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  UpdateChannel = "chime:UpdateChannel",

  /**
   * Write - Grants permission to update a channel flow
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_UpdateChannelFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.channelFlow `ChimeResource.channelFlow`} 
   */
  UpdateChannelFlow = "chime:UpdateChannelFlow",

  /**
   * Write - Grants permission to update the content of a message
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_UpdateChannelMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  UpdateChannelMessage = "chime:UpdateChannelMessage",

  /**
   * Write - Grants permission to set the timestamp to the point when a user last read messages in a channel
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_messaging-chime_UpdateChannelReadMarker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   */
  UpdateChannelReadMarker = "chime:UpdateChannelReadMarker",

  /**
   * Write - Grants permission to update the global settings related to Amazon Chime for the AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateGlobalSettings.html
   */
  UpdateGlobalSettings = "chime:UpdateGlobalSettings",

  /**
   * Write - Grants permission to update phone number details for the specified phone number
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdatePhoneNumber.html
   */
  UpdatePhoneNumber = "chime:UpdatePhoneNumber",

  /**
   * Write - Grants permission to update phone number settings related to Amazon Chime for the AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdatePhoneNumberSettings.html
   */
  UpdatePhoneNumberSettings = "chime:UpdatePhoneNumberSettings",

  /**
   * Write - Grants permission to update a proxy session for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateProxySession.html
   */
  UpdateProxySession = "chime:UpdateProxySession",

  /**
   * Write - Grants permission to update a room
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateRoom.html
   */
  UpdateRoom = "chime:UpdateRoom",

  /**
   * Write - Grants permission to update room membership role
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateRoomMembership.html
   */
  UpdateRoomMembership = "chime:UpdateRoomMembership",

  /**
   * Write - Grants permission to update properties of Amazon Chime SIP media application under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateSipMediaApplication.html
   */
  UpdateSipMediaApplication = "chime:UpdateSipMediaApplication",

  /**
   * Write - Grants permission to update an Amazon Chime SIP media application call under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateSipMediaApplicationCall.html
   */
  UpdateSipMediaApplicationCall = "chime:UpdateSipMediaApplicationCall",

  /**
   * Write - Grants permission to update properties of Amazon Chime SIP rule under the administrator's AWS account
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateSipRule.html
   */
  UpdateSipRule = "chime:UpdateSipRule",

  /**
   * Write - Grants permission to update the supported license tiers available for users in your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  UpdateSupportedLicenses = "chime:UpdateSupportedLicenses",

  /**
   * Write - Grants permission to update user details for a specified user ID
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateUser.html
   */
  UpdateUser = "chime:UpdateUser",

  /**
   * Write - Grants permission to update the licenses for your Amazon Chime users
   * @see https://docs.aws.amazon.com/chime/latest/ag/manage-access.html
   */
  UpdateUserLicenses = "chime:UpdateUserLicenses",

  /**
   * Write - Grants permission to update user settings related to the specified Amazon Chime user
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateUserSettings.html
   */
  UpdateUserSettings = "chime:UpdateUserSettings",

  /**
   * Write - Grants permission to update Amazon Chime Voice Connector details for the specified Amazon Chime Voice Connector
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateVoiceConnector.html
   */
  UpdateVoiceConnector = "chime:UpdateVoiceConnector",

  /**
   * Write - Grants permission to update Amazon Chime Voice Connector Group details for the specified Amazon Chime Voice Connector Group
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_UpdateVoiceConnectorGroup.html
   */
  UpdateVoiceConnectorGroup = "chime:UpdateVoiceConnectorGroup",

  /**
   * Read - Grants permission to validate the account resource in your Amazon Chime account
   * @see https://docs.aws.amazon.com/chime/latest/ag/control-access.html
   */
  ValidateAccountResource = "chime:ValidateAccountResource",

  /**
   * * - Grant all chime permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonchime.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChimeResource.appInstanceUser `ChimeResource.appInstanceUser`} 
   * - {@link ChimeResource.channel `ChimeResource.channel`} 
   * - {@link ChimeResource.channelFlow `ChimeResource.channelFlow`} 
   * - {@link ChimeResource.meeting `ChimeResource.meeting`} 
   * - {@link ChimeResource.appInstance `ChimeResource.appInstance`} 
   * - {@link ChimeResource.mediaPipeline `ChimeResource.mediaPipeline`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "chime:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonchime.html
 */
export const ChimeResource = {

  /**
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_Meeting.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  meeting: (options: Partial<{partition: string, accountId: string, meetingId: string}> = {}) => `arn:${options.partition || '*'}:chime::${options.accountId || '*'}:meeting/${options.meetingId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_AppInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  appInstance: (options: Partial<{partition: string, region: string, accountId: string, appInstanceId: string}> = {}) => `arn:${options.partition || '*'}:chime:${options.region || '*'}:${options.accountId || '*'}:app-instance/${options.appInstanceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_AppInstanceUser.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  appInstanceUser: (options: Partial<{partition: string, region: string, accountId: string, appInstanceId: string, appInstanceUserId: string}> = {}) => `arn:${options.partition || '*'}:chime:${options.region || '*'}:${options.accountId || '*'}:app-instance/${options.appInstanceId || '*'}/user/${options.appInstanceUserId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_Channel.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  channel: (options: Partial<{partition: string, region: string, accountId: string, appInstanceId: string, channelId: string}> = {}) => `arn:${options.partition || '*'}:chime:${options.region || '*'}:${options.accountId || '*'}:app-instance/${options.appInstanceId || '*'}/channel/${options.channelId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_ChannelFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  channelFlow: (options: Partial<{partition: string, region: string, accountId: string, appInstanceId: string, channelFlowId: string}> = {}) => `arn:${options.partition || '*'}:chime:${options.region || '*'}:${options.accountId || '*'}:app-instance/${options.appInstanceId || '*'}/channel-flow/${options.channelFlowId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/chime/latest/APIReference/API_MediaPipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  mediaPipeline: (options: Partial<{partition: string, region: string, accountId: string, mediaPipelineId: string}> = {}) => `arn:${options.partition || '*'}:chime:${options.region || '*'}:${options.accountId || '*'}:media-pipeline/${options.mediaPipelineId || '*'}`,
}

