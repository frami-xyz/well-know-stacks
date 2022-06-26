/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointsmsandvoiceservice.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointsmsvoicev2.html
 */
export enum SmsVoiceAction {

  /**
   * Write - Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
   * @see https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets.html
   */
  CreateConfigurationSet = "sms-voice:CreateConfigurationSet",

  /**
   * Write - Create a new event destination in a configuration set.
   * @see https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations.html
   */
  CreateConfigurationSetEventDestination = "sms-voice:CreateConfigurationSetEventDestination",

  /**
   * Write - Deletes an existing configuration set.
   * @see https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets-configurationsetname.html
   */
  DeleteConfigurationSet = "sms-voice:DeleteConfigurationSet",

  /**
   * Write - Deletes an event destination in a configuration set.
   * @see https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations-eventdestinationname.html
   */
  DeleteConfigurationSetEventDestination = "sms-voice:DeleteConfigurationSetEventDestination",

  /**
   * Read - Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
   * @see https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations.html
   */
  GetConfigurationSetEventDestinations = "sms-voice:GetConfigurationSetEventDestinations",

  /**
   * Read - Return a list of configuration sets. This operation only returns the configuration sets that are associated with your account in the current AWS Region.
   * @see https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets.html
   */
  ListConfigurationSets = "sms-voice:ListConfigurationSets",

  /**
   * Write - Create a new voice message and send it to a recipient's phone number.
   * @see https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-voice-message.html
   */
  SendVoiceMessage = "sms-voice:SendVoiceMessage",

  /**
   * Write - Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
   * @see https://docs.aws.amazon.com/pinpoint-sms-voice/latest/APIReference/v1-sms-voice-configuration-sets-configurationsetname-event-destinations-eventdestinationname.html
   */
  UpdateConfigurationSetEventDestination = "sms-voice:UpdateConfigurationSetEventDestination",

  /**
   * Write - Grants permission to associate an origination phone number or sender ID to a pool
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_AssociateOriginationIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.senderId `SmsVoiceResource.senderId`} 
   */
  AssociateOriginationIdentity = "sms-voice:AssociateOriginationIdentity",

  /**
   * Write - Grants permission to create a configuration set
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateConfigurationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConfigurationSet = "sms-voice:CreateConfigurationSet",

  /**
   * Write - Grants permission to create an event destination within a configuration set
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateEventDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   */
  CreateEventDestination = "sms-voice:CreateEventDestination",

  /**
   * Write - Grants permission to create an opt-out list
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateOptOutList.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateOptOutList = "sms-voice:CreateOptOutList",

  /**
   * Write - Grants permission to create a pool
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreatePool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.senderId `SmsVoiceResource.senderId`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePool = "sms-voice:CreatePool",

  /**
   * Write - Grants permission to delete a configuration set
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteConfigurationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   */
  DeleteConfigurationSet = "sms-voice:DeleteConfigurationSet",

  /**
   * Write - Grants permission to delete the default message type for a configuration set
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteDefaultMessageType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   */
  DeleteDefaultMessageType = "sms-voice:DeleteDefaultMessageType",

  /**
   * Write - Grants permission to delete the default sender ID for a configuration set
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteDefaultSenderId.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   */
  DeleteDefaultSenderId = "sms-voice:DeleteDefaultSenderId",

  /**
   * Write - Grants permission to delete an event destination within a configuration set
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteEventDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   */
  DeleteEventDestination = "sms-voice:DeleteEventDestination",

  /**
   * Write - Grants permission to delete a keyword for a pool or origination phone number
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteKeyword.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   */
  DeleteKeyword = "sms-voice:DeleteKeyword",

  /**
   * Write - Grants permission to delete an opt-out list
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteOptOutList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.optOutList `SmsVoiceResource.optOutList`} 
   */
  DeleteOptOutList = "sms-voice:DeleteOptOutList",

  /**
   * Write - Grants permission to delete a destination phone number from an opt-out list
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteOptedOutNumber.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.optOutList `SmsVoiceResource.optOutList`} 
   */
  DeleteOptedOutNumber = "sms-voice:DeleteOptedOutNumber",

  /**
   * Write - Grants permission to delete a pool
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeletePool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   */
  DeletePool = "sms-voice:DeletePool",

  /**
   * Write - Grants permission to delete an override for your account's text messaging monthly spend limit
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteTextMessageSpendLimitOverride.html
   */
  DeleteTextMessageSpendLimitOverride = "sms-voice:DeleteTextMessageSpendLimitOverride",

  /**
   * Write - Grants permission to delete an override for your account's voice messaging monthly spend limit
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DeleteVoiceMessageSpendLimitOverride.html
   */
  DeleteVoiceMessageSpendLimitOverride = "sms-voice:DeleteVoiceMessageSpendLimitOverride",

  /**
   * Read - Grants permission to describe the attributes of your account
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeAccountAttributes.html
   */
  DescribeAccountAttributes = "sms-voice:DescribeAccountAttributes",

  /**
   * Read - Grants permission to describe the service quotas for your account
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeAccountLimits.html
   */
  DescribeAccountLimits = "sms-voice:DescribeAccountLimits",

  /**
   * Read - Grants permission to describe the configuration sets in your account
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeConfigurationSets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   */
  DescribeConfigurationSets = "sms-voice:DescribeConfigurationSets",

  /**
   * Read - Grants permission to describe the keywords for a pool or origination phone number
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeKeywords.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   */
  DescribeKeywords = "sms-voice:DescribeKeywords",

  /**
   * Read - Grants permission to describe the opt-out lists in your account
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeOptOutLists.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.optOutList `SmsVoiceResource.optOutList`} 
   */
  DescribeOptOutLists = "sms-voice:DescribeOptOutLists",

  /**
   * Read - Grants permission to describe the destination phone numbers in an opt-out list
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeOptedOutNumbers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.optOutList `SmsVoiceResource.optOutList`} 
   */
  DescribeOptedOutNumbers = "sms-voice:DescribeOptedOutNumbers",

  /**
   * Read - Grants permission to describe the origination phone numbers in your account
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePhoneNumbers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   */
  DescribePhoneNumbers = "sms-voice:DescribePhoneNumbers",

  /**
   * Read - Grants permission to describe the pools in your account
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribePools.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   */
  DescribePools = "sms-voice:DescribePools",

  /**
   * Read - Grants permission to describe the sender IDs in your account
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeSenderIds.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.senderId `SmsVoiceResource.senderId`} 
   */
  DescribeSenderIds = "sms-voice:DescribeSenderIds",

  /**
   * Read - Grants permission to describe the monthly spend limits for your account
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeSpendLimits.html
   */
  DescribeSpendLimits = "sms-voice:DescribeSpendLimits",

  /**
   * Write - Grants permission to disassociate an origination phone number or sender ID from a pool
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DisassociateOriginationIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.senderId `SmsVoiceResource.senderId`} 
   */
  DisassociateOriginationIdentity = "sms-voice:DisassociateOriginationIdentity",

  /**
   * Read - Grants permission to list all origination phone numbers and sender IDs associated to a pool
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ListPoolOriginationIdentities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   */
  ListPoolOriginationIdentities = "sms-voice:ListPoolOriginationIdentities",

  /**
   * Read - Grants permission to list the tags for a resource
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   * - {@link SmsVoiceResource.optOutList `SmsVoiceResource.optOutList`} 
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   * - {@link SmsVoiceResource.senderId `SmsVoiceResource.senderId`} 
   */
  ListTagsForResource = "sms-voice:ListTagsForResource",

  /**
   * Write - Grants permission to create or update a keyword for a pool or origination phone number
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_PutKeyword.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   */
  PutKeyword = "sms-voice:PutKeyword",

  /**
   * Write - Grants permission to put a destination phone number into an opt-out list
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_PutOptedOutNumber.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.optOutList `SmsVoiceResource.optOutList`} 
   */
  PutOptedOutNumber = "sms-voice:PutOptedOutNumber",

  /**
   * Write - Grants permission to release an origination phone number
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_ReleasePhoneNumber.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   */
  ReleasePhoneNumber = "sms-voice:ReleasePhoneNumber",

  /**
   * Write - Grants permission to request an origination phone number
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_RequestPhoneNumber.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RequestPhoneNumber = "sms-voice:RequestPhoneNumber",

  /**
   * Write - Grants permission to send a text message to a destination phone number
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SendTextMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   * - {@link SmsVoiceResource.senderId `SmsVoiceResource.senderId`} 
   */
  SendTextMessage = "sms-voice:SendTextMessage",

  /**
   * Write - Grants permission to send a voice message to a destination phone number
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SendVoiceMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   */
  SendVoiceMessage = "sms-voice:SendVoiceMessage",

  /**
   * Write - Grants permission to set the default message type for a configuration set
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetDefaultMessageType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   */
  SetDefaultMessageType = "sms-voice:SetDefaultMessageType",

  /**
   * Write - Grants permission to set the default sender ID for a configuration set
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetDefaultSenderId.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   */
  SetDefaultSenderId = "sms-voice:SetDefaultSenderId",

  /**
   * Write - Grants permission to set an override for your account's text messaging monthly spend limit
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetTextMessageSpendLimitOverride.html
   */
  SetTextMessageSpendLimitOverride = "sms-voice:SetTextMessageSpendLimitOverride",

  /**
   * Write - Grants permission to set an override for your account's voice messaging monthly spend limit
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_SetVoiceMessageSpendLimitOverride.html
   */
  SetVoiceMessageSpendLimitOverride = "sms-voice:SetVoiceMessageSpendLimitOverride",

  /**
   * Tagging - Grants permission to add tags to a resource
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   * - {@link SmsVoiceResource.optOutList `SmsVoiceResource.optOutList`} 
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   * - {@link SmsVoiceResource.senderId `SmsVoiceResource.senderId`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "sms-voice:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   * - {@link SmsVoiceResource.optOutList `SmsVoiceResource.optOutList`} 
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   * - {@link SmsVoiceResource.senderId `SmsVoiceResource.senderId`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "sms-voice:UntagResource",

  /**
   * Write - Grants permission to update an event destination within a configuration set
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdateEventDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   */
  UpdateEventDestination = "sms-voice:UpdateEventDestination",

  /**
   * Write - Grants permission to update an origination phone number's configuration
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdatePhoneNumber.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   */
  UpdatePhoneNumber = "sms-voice:UpdatePhoneNumber",

  /**
   * Write - Grants permission to update a pool's configuration
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_UpdatePool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   */
  UpdatePool = "sms-voice:UpdatePool",

  /**
   * * - Grant all sms-voice permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointsmsandvoiceservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SmsVoiceResource.pool `SmsVoiceResource.pool`} 
   * - {@link SmsVoiceResource.phoneNumber `SmsVoiceResource.phoneNumber`} 
   * - {@link SmsVoiceResource.senderId `SmsVoiceResource.senderId`} 
   * - {@link SmsVoiceResource.configurationSet `SmsVoiceResource.configurationSet`} 
   * - {@link SmsVoiceResource.optOutList `SmsVoiceResource.optOutList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "sms-voice:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointsmsandvoiceservice.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointsmsvoicev2.html
 */
export const SmsVoiceResource = {

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateConfigurationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  configurationSet: (options: Partial<{partition: string, region: string, account: string, configurationSetName: string}> = {}) => `arn:${options.partition || '*'}:sms-voice:${options.region || '*'}:${options.account || '*'}:configuration-set/${options.configurationSetName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreateOptOutList.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  optOutList: (options: Partial<{partition: string, region: string, account: string, optOutListName: string}> = {}) => `arn:${options.partition || '*'}:sms-voice:${options.region || '*'}:${options.account || '*'}:opt-out-list/${options.optOutListName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_RequestPhoneNumber.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  phoneNumber: (options: Partial<{partition: string, region: string, account: string, phoneNumberId: string}> = {}) => `arn:${options.partition || '*'}:sms-voice:${options.region || '*'}:${options.account || '*'}:phone-number/${options.phoneNumberId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_CreatePool.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  pool: (options: Partial<{partition: string, region: string, account: string, poolId: string}> = {}) => `arn:${options.partition || '*'}:sms-voice:${options.region || '*'}:${options.account || '*'}:pool/${options.poolId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference_smsvoicev2/API_DescribeSenderIds.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  senderId: (options: Partial<{partition: string, region: string, account: string, senderId: string, isoCountryCode: string}> = {}) => `arn:${options.partition || '*'}:sms-voice:${options.region || '*'}:${options.account || '*'}:sender-id/${options.senderId || '*'}/${options.isoCountryCode || '*'}`,
}

