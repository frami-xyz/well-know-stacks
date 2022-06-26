/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_alexaforbusiness.html
 */
export enum A4bAction {

  /**
   * Write - Grants permission to associate a skill with the organization under the customer's AWS account
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ApproveSkill.html
   */
  ApproveSkill = "a4b:ApproveSkill",

  /**
   * Write - Grants permission to associate a contact with a given address book
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateContactWithAddressBook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.addressbook `A4bResource.addressbook`} 
   * - {@link A4bResource.contact `A4bResource.contact`} 
   */
  AssociateContactWithAddressBook = "a4b:AssociateContactWithAddressBook",

  /**
   * Write - Grants permission to associate a device with the specified network profile
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateDeviceWithNetworkProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.device `A4bResource.device`} 
   * - {@link A4bResource.networkprofile `A4bResource.networkprofile`} 
   */
  AssociateDeviceWithNetworkProfile = "a4b:AssociateDeviceWithNetworkProfile",

  /**
   * Write - Grants permission to associate device with given room
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateDeviceWithRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.device `A4bResource.device`} 
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  AssociateDeviceWithRoom = "a4b:AssociateDeviceWithRoom",

  /**
   * Write - Grants permission to associate the skill group with given room
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillGroupWithRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   * - {@link A4bResource.skillgroup `A4bResource.skillgroup`} 
   */
  AssociateSkillGroupWithRoom = "a4b:AssociateSkillGroupWithRoom",

  /**
   * Write - Grants permission to associate a skill with a skill group
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillWithSkillGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.skillgroup `A4bResource.skillgroup`} 
   */
  AssociateSkillWithSkillGroup = "a4b:AssociateSkillWithSkillGroup",

  /**
   * Write - Grants permission to make a private skill available for enrolled users to enable on their devices
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillWithUsers.html
   */
  AssociateSkillWithUsers = "a4b:AssociateSkillWithUsers",

  /**
   * Write - Grants permission to complete the operation of registering an Alexa device
   * @see https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  CompleteRegistration = "a4b:CompleteRegistration",

  /**
   * Write - Grants permission to create an address book with the specified details
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateAddressBook.html
   */
  CreateAddressBook = "a4b:CreateAddressBook",

  /**
   * Write - Grants permission to create a recurring schedule for usage reports to deliver to the specified S3 location with a specified daily or weekly interval
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateBusinessReportSchedule.html
   */
  CreateBusinessReportSchedule = "a4b:CreateBusinessReportSchedule",

  /**
   * Write - Grants permission to add a new conference provider under the user's AWS account
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateConferenceProvider.html
   */
  CreateConferenceProvider = "a4b:CreateConferenceProvider",

  /**
   * Write - Grants permission to create a contact with the specified details
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateContact.html
   */
  CreateContact = "a4b:CreateContact",

  /**
   * Write - Grants permission to create a gateway group with the specified details
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateGatewayGroup.html
   */
  CreateGatewayGroup = "a4b:CreateGatewayGroup",

  /**
   * Write - Grants permission to create a network profile with the specified details
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateNetworkProfile.html
   */
  CreateNetworkProfile = "a4b:CreateNetworkProfile",

  /**
   * Write - Grants permission to create a new profile
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateProfile.html
   */
  CreateProfile = "a4b:CreateProfile",

  /**
   * Write - Grants permission to create room with the specified details
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.profile `A4bResource.profile`} 
   */
  CreateRoom = "a4b:CreateRoom",

  /**
   * Write - Grants permission to create a skill group with given name and description
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateSkillGroup.html
   */
  CreateSkillGroup = "a4b:CreateSkillGroup",

  /**
   * Write - Grants permission to create a user
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.user `A4bResource.user`} 
   */
  CreateUser = "a4b:CreateUser",

  /**
   * Write - Grants permission to delete an address book by the address book ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteAddressBook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.addressbook `A4bResource.addressbook`} 
   */
  DeleteAddressBook = "a4b:DeleteAddressBook",

  /**
   * Write - Grants permission to delete the recurring report delivery schedule with the specified schedule ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteBusinessReportSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.schedule `A4bResource.schedule`} 
   */
  DeleteBusinessReportSchedule = "a4b:DeleteBusinessReportSchedule",

  /**
   * Write - Grants permission to delete a conference provider
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteConferenceProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.conferenceprovider `A4bResource.conferenceprovider`} 
   */
  DeleteConferenceProvider = "a4b:DeleteConferenceProvider",

  /**
   * Write - Grants permission to delete a contact by the contact ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.contact `A4bResource.contact`} 
   */
  DeleteContact = "a4b:DeleteContact",

  /**
   * Write - Grants permission to remove a device from Alexa For Business
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.device `A4bResource.device`} 
   */
  DeleteDevice = "a4b:DeleteDevice",

  /**
   * Write - Grants permission to delete the device's entire previous history of voice input data and associated response data
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteDeviceUsageData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.device `A4bResource.device`} 
   */
  DeleteDeviceUsageData = "a4b:DeleteDeviceUsageData",

  /**
   * Write - Grants permission to delete a gateway group
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteGatewayGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.gatewaygroup `A4bResource.gatewaygroup`} 
   */
  DeleteGatewayGroup = "a4b:DeleteGatewayGroup",

  /**
   * Write - Grants permission to delete a network profile by the network profile ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteNetworkProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.networkprofile `A4bResource.networkprofile`} 
   */
  DeleteNetworkProfile = "a4b:DeleteNetworkProfile",

  /**
   * Write - Grants permission to delete profile by profile ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.profile `A4bResource.profile`} 
   */
  DeleteProfile = "a4b:DeleteProfile",

  /**
   * Write - Grants permission to delete room
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  DeleteRoom = "a4b:DeleteRoom",

  /**
   * Write - Grants permission to delete a parameter from a skill and room
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteRoomSkillParameter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  DeleteRoomSkillParameter = "a4b:DeleteRoomSkillParameter",

  /**
   * Write - Grants permission to unlink a third-party account from a skill
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteSkillAuthorization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  DeleteSkillAuthorization = "a4b:DeleteSkillAuthorization",

  /**
   * Write - Grants permission to delete skill group with skill group ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteSkillGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.skillgroup `A4bResource.skillgroup`} 
   */
  DeleteSkillGroup = "a4b:DeleteSkillGroup",

  /**
   * Write - Grants permission to delete a user
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.user `A4bResource.user`} 
   */
  DeleteUser = "a4b:DeleteUser",

  /**
   * Write - Grants permission to disassociate a contact from a given address book
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateContactFromAddressBook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.addressbook `A4bResource.addressbook`} 
   * - {@link A4bResource.contact `A4bResource.contact`} 
   */
  DisassociateContactFromAddressBook = "a4b:DisassociateContactFromAddressBook",

  /**
   * Write - Grants permission to disassociate device from its current room
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateDeviceFromRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.device `A4bResource.device`} 
   */
  DisassociateDeviceFromRoom = "a4b:DisassociateDeviceFromRoom",

  /**
   * Write - Grants permission to disassociate a skill from a skill group
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillFromSkillGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.skillgroup `A4bResource.skillgroup`} 
   */
  DisassociateSkillFromSkillGroup = "a4b:DisassociateSkillFromSkillGroup",

  /**
   * Write - Grants permission to make a private skill unavailable for enrolled users and prevent them from enabling it on their devices
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillFromUsers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.user `A4bResource.user`} 
   */
  DisassociateSkillFromUsers = "a4b:DisassociateSkillFromUsers",

  /**
   * Write - Grants permission to disassociate the skill group from given room
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillGroupFromRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   * - {@link A4bResource.skillgroup `A4bResource.skillgroup`} 
   */
  DisassociateSkillGroupFromRoom = "a4b:DisassociateSkillGroupFromRoom",

  /**
   * Write - Grants permission to forget smart home appliances associated to a room
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ForgetSmartHomeAppliances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  ForgetSmartHomeAppliances = "a4b:ForgetSmartHomeAppliances",

  /**
   * Read - Grants permission to get the address book details by the address book ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetAddressBook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.addressbook `A4bResource.addressbook`} 
   */
  GetAddressBook = "a4b:GetAddressBook",

  /**
   * Read - Grants permission to retrieve the existing conference preferences
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetConferencePreference.html
   */
  GetConferencePreference = "a4b:GetConferencePreference",

  /**
   * Read - Grants permission to get details about a specific conference provider
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetConferenceProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.conferenceprovider `A4bResource.conferenceprovider`} 
   */
  GetConferenceProvider = "a4b:GetConferenceProvider",

  /**
   * Read - Grants permission to get the contact details by the contact ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.contact `A4bResource.contact`} 
   */
  GetContact = "a4b:GetContact",

  /**
   * Read - Grants permission to get device details
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.device `A4bResource.device`} 
   */
  GetDevice = "a4b:GetDevice",

  /**
   * Read - Grants permission to retrieve the details of a gateway
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.gateway `A4bResource.gateway`} 
   */
  GetGateway = "a4b:GetGateway",

  /**
   * Read - Grants permission to retrieve the details of a gateway group
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetGatewayGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.gatewaygroup `A4bResource.gatewaygroup`} 
   */
  GetGatewayGroup = "a4b:GetGatewayGroup",

  /**
   * Read - Grants permission to retrieve the configured values for the user enrollment invitation email template
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetInvitationConfiguration.html
   */
  GetInvitationConfiguration = "a4b:GetInvitationConfiguration",

  /**
   * Read - Grants permission to get the network profile details by the network profile ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetNetworkProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.networkprofile `A4bResource.networkprofile`} 
   */
  GetNetworkProfile = "a4b:GetNetworkProfile",

  /**
   * Read - Grants permission to get profile when provided with Profile ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.profile `A4bResource.profile`} 
   */
  GetProfile = "a4b:GetProfile",

  /**
   * Read - Grants permission to get room details
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  GetRoom = "a4b:GetRoom",

  /**
   * Read - Grants permission to get an existing parameter that has been set for a skill and room
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetRoomSkillParameter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  GetRoomSkillParameter = "a4b:GetRoomSkillParameter",

  /**
   * Read - Grants permission to get skill group details with skill group ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetSkillGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.skillgroup `A4bResource.skillgroup`} 
   */
  GetSkillGroup = "a4b:GetSkillGroup",

  /**
   * List - Grants permission to list the details of the schedules that a user configured
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListBusinessReportSchedules.html
   */
  ListBusinessReportSchedules = "a4b:ListBusinessReportSchedules",

  /**
   * List - Grants permission to list conference providers under a specific AWS account
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListConferenceProviders.html
   */
  ListConferenceProviders = "a4b:ListConferenceProviders",

  /**
   * List - Grants permission to list the device event history, including device connection status, for up to 30 days
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListDeviceEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.device `A4bResource.device`} 
   */
  ListDeviceEvents = "a4b:ListDeviceEvents",

  /**
   * List - Grants permission to list gateway group summaries
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListGatewayGroups.html
   */
  ListGatewayGroups = "a4b:ListGatewayGroups",

  /**
   * List - Grants permission to list gateway summaries
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListGateways.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.gatewaygroup `A4bResource.gatewaygroup`} 
   */
  ListGateways = "a4b:ListGateways",

  /**
   * List - Grants permission to list skills
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkills.html
   */
  ListSkills = "a4b:ListSkills",

  /**
   * List - Grants permission to list all categories in the Alexa skill store
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkillsStoreCategories.html
   */
  ListSkillsStoreCategories = "a4b:ListSkillsStoreCategories",

  /**
   * List - Grants permission to list all skills in the Alexa skill store by category
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkillsStoreSkillsByCategory.html
   */
  ListSkillsStoreSkillsByCategory = "a4b:ListSkillsStoreSkillsByCategory",

  /**
   * List - Grants permission to list all of the smart home appliances associated with a room
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSmartHomeAppliances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  ListSmartHomeAppliances = "a4b:ListSmartHomeAppliances",

  /**
   * Read - Grants permission to list all tags on a resource
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.device `A4bResource.device`} 
   * - {@link A4bResource.room `A4bResource.room`} 
   * - {@link A4bResource.user `A4bResource.user`} 
   */
  ListTags = "a4b:ListTags",

  /**
   * Write - Grants permission to set the conference preferences on a specific conference provider at the account level
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutConferencePreference.html
   */
  PutConferencePreference = "a4b:PutConferencePreference",

  /**
   * Write - Grants permission to publish Alexa device setup events
   * @see https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  PutDeviceSetupEvents = "a4b:PutDeviceSetupEvents",

  /**
   * Write - Grants permission to configure the email template for the user enrollment invitation with the specified attributes
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutInvitationConfiguration.html
   */
  PutInvitationConfiguration = "a4b:PutInvitationConfiguration",

  /**
   * Write - Grants permission to put a room specific parameter for a skill
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutRoomSkillParameter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  PutRoomSkillParameter = "a4b:PutRoomSkillParameter",

  /**
   * Write - Grants permission to link a user's account to a third-party skill provider
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutSkillAuthorization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  PutSkillAuthorization = "a4b:PutSkillAuthorization",

  /**
   * Write - Grants permission to register an Alexa-enabled device built by an Original Equipment Manufacturer (OEM) using Alexa Voice Service (AVS)
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_RegisterAVSDevice.html
   */
  RegisterAVSDevice = "a4b:RegisterAVSDevice",

  /**
   * Write - Grants permission to register an Alexa device
   * @see https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  RegisterDevice = "a4b:RegisterDevice",

  /**
   * Write - Grants permission to disassociate a skill from the organization under a user's AWS account
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_RejectSkill.html
   */
  RejectSkill = "a4b:RejectSkill",

  /**
   * Read - Grants permission to resolve room information
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ResolveRoom.html
   */
  ResolveRoom = "a4b:ResolveRoom",

  /**
   * Write - Grants permission to revoke an invitation
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_RevokeInvitation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.user `A4bResource.user`} 
   */
  RevokeInvitation = "a4b:RevokeInvitation",

  /**
   * List - Grants permission to search address books and list the ones that meet a set of filter and sort criteria
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchAddressBooks.html
   */
  SearchAddressBooks = "a4b:SearchAddressBooks",

  /**
   * List - Grants permission to search contacts and list the ones that meet a set of filter and sort criteria
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchContacts.html
   */
  SearchContacts = "a4b:SearchContacts",

  /**
   * List - Grants permission to search for devices
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchDevices.html
   */
  SearchDevices = "a4b:SearchDevices",

  /**
   * List - Grants permission to search network profiles and list the ones that meet a set of filter and sort criteria
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchNetworkProfiles.html
   */
  SearchNetworkProfiles = "a4b:SearchNetworkProfiles",

  /**
   * List - Grants permission to search for profiles
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchProfiles.html
   */
  SearchProfiles = "a4b:SearchProfiles",

  /**
   * List - Grants permission to search for rooms
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchRooms.html
   */
  SearchRooms = "a4b:SearchRooms",

  /**
   * List - Grants permission to search for skill groups
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchSkillGroups.html
   */
  SearchSkillGroups = "a4b:SearchSkillGroups",

  /**
   * List - Grants permission to search for users
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchUsers.html
   */
  SearchUsers = "a4b:SearchUsers",

  /**
   * Write - Grants permission to trigger an asynchronous flow to send text, SSML, or audio announcements to rooms that are identified by a search or filter
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_SendAnnouncement.html
   */
  SendAnnouncement = "a4b:SendAnnouncement",

  /**
   * Write - Grants permission to send an invitation to a user
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_SendInvitation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.user `A4bResource.user`} 
   */
  SendInvitation = "a4b:SendInvitation",

  /**
   * Write - Grants permission to restore the device and its account to its known, default settings by clearing all information and settings set by its previous users
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_StartDeviceSync.html
   */
  StartDeviceSync = "a4b:StartDeviceSync",

  /**
   * Read - Grants permission to initiate the discovery of any smart home appliances associated with the room
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_StartSmartHomeApplianceDiscovery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  StartSmartHomeApplianceDiscovery = "a4b:StartSmartHomeApplianceDiscovery",

  /**
   * Tagging - Grants permission to add metadata tags to a resource
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.device `A4bResource.device`} 
   * - {@link A4bResource.room `A4bResource.room`} 
   * - {@link A4bResource.user `A4bResource.user`} 
   */
  TagResource = "a4b:TagResource",

  /**
   * Tagging - Grants permission to remove metadata tags from a resource
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.device `A4bResource.device`} 
   * - {@link A4bResource.room `A4bResource.room`} 
   * - {@link A4bResource.user `A4bResource.user`} 
   */
  UntagResource = "a4b:UntagResource",

  /**
   * Write - Grants permission to update address book details by the address book ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateAddressBook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.addressbook `A4bResource.addressbook`} 
   */
  UpdateAddressBook = "a4b:UpdateAddressBook",

  /**
   * Write - Grants permission to update the configuration of the report delivery schedule with the specified schedule ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateBusinessReportSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.schedule `A4bResource.schedule`} 
   */
  UpdateBusinessReportSchedule = "a4b:UpdateBusinessReportSchedule",

  /**
   * Write - Grants permission to update an existing conference provider's settings
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateConferenceProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.conferenceprovider `A4bResource.conferenceprovider`} 
   */
  UpdateConferenceProvider = "a4b:UpdateConferenceProvider",

  /**
   * Write - Grants permission to update the contact details by the contact ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.contact `A4bResource.contact`} 
   */
  UpdateContact = "a4b:UpdateContact",

  /**
   * Write - Grants permission to update device name
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.device `A4bResource.device`} 
   */
  UpdateDevice = "a4b:UpdateDevice",

  /**
   * Write - Grants permission to update the details of a gateway
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.gateway `A4bResource.gateway`} 
   */
  UpdateGateway = "a4b:UpdateGateway",

  /**
   * Write - Grants permission to update the details of a gateway group
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateGatewayGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.gatewaygroup `A4bResource.gatewaygroup`} 
   */
  UpdateGatewayGroup = "a4b:UpdateGatewayGroup",

  /**
   * Write - Grants permission to update a network profile by the network profile ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateNetworkProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.networkprofile `A4bResource.networkprofile`} 
   */
  UpdateNetworkProfile = "a4b:UpdateNetworkProfile",

  /**
   * Write - Grants permission to update an existing profile
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.profile `A4bResource.profile`} 
   */
  UpdateProfile = "a4b:UpdateProfile",

  /**
   * Write - Grants permission to update room details
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.room `A4bResource.room`} 
   */
  UpdateRoom = "a4b:UpdateRoom",

  /**
   * Write - Grants permission to update skill group details with skill group ARN
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateSkillGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.skillgroup `A4bResource.skillgroup`} 
   */
  UpdateSkillGroup = "a4b:UpdateSkillGroup",

  /**
   * * - Grant all a4b permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_alexaforbusiness.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link A4bResource.addressbook `A4bResource.addressbook`} 
   * - {@link A4bResource.contact `A4bResource.contact`} 
   * - {@link A4bResource.device `A4bResource.device`} 
   * - {@link A4bResource.networkprofile `A4bResource.networkprofile`} 
   * - {@link A4bResource.room `A4bResource.room`} 
   * - {@link A4bResource.skillgroup `A4bResource.skillgroup`} 
   * - {@link A4bResource.profile `A4bResource.profile`} 
   * - {@link A4bResource.user `A4bResource.user`} 
   * - {@link A4bResource.schedule `A4bResource.schedule`} 
   * - {@link A4bResource.conferenceprovider `A4bResource.conferenceprovider`} 
   * - {@link A4bResource.gatewaygroup `A4bResource.gatewaygroup`} 
   * - {@link A4bResource.gateway `A4bResource.gateway`} 
   */
  All = "a4b:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_alexaforbusiness.html
 */
export const A4bResource = {

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_Profile.html
   */
  profile: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:profile/${options.resource_id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_Room.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  room: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:room/${options.resource_id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_Device.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  device: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:device/${options.resource_id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_SkillGroup.html
   */
  skillgroup: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:skill-group/${options.resource_id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_UserData.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  user: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:user/${options.resource_id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_AddressBook.html
   */
  addressbook: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:address-book/${options.resource_id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_ConferenceProvider.html
   */
  conferenceprovider: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:conference-provider/${options.resource_id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_Contact.html
   */
  contact: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:contact/${options.resource_id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_BusinessReportSchedule.html
   */
  schedule: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:schedule/${options.resource_id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_NetworkProfile.html
   */
  networkprofile: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:network-profile/${options.resource_id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_Gateway.html
   */
  gateway: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:gateway/${options.resource_id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/a4b/latest/APIReference/API_GatewayGroup.html
   */
  gatewaygroup: (options: Partial<{partition: string, region: string, account: string, resource_id: string}> = {}) => `arn:${options.partition || '*'}:a4b:${options.region || '*'}:${options.account || '*'}:gateway-group/${options.resource_id || '*'}`,
}

