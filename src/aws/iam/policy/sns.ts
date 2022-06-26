/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsns.html
 */
export enum SnsAction {

  /**
   * PermissionsManagement - Grants permission to add a statement to a topic's access control policy, granting access for the specified AWS accounts to the specified actions
   * @see https://docs.aws.amazon.com/sns/latest/api/API_AddPermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   */
  AddPermission = "sns:AddPermission",

  /**
   * Read - Grants permission to accept a phone number and indicate whether the phone holder has opted out of receiving SMS messages from your account
   * @see https://docs.aws.amazon.com/sns/latest/api/API_CheckIfPhoneNumberIsOptedOut.html
   */
  CheckIfPhoneNumberIsOptedOut = "sns:CheckIfPhoneNumberIsOptedOut",

  /**
   * Write - Grants permission to verify an endpoint owner's intent to receive messages by validating the token sent to the endpoint by an earlier Subscribe action
   * @see https://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   */
  ConfirmSubscription = "sns:ConfirmSubscription",

  /**
   * Write - Grants permission to create a platform application object for one of the supported push notification services, such as APNS and GCM, to which devices and mobile apps may register
   * @see https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html
   */
  CreatePlatformApplication = "sns:CreatePlatformApplication",

  /**
   * Write - Grants permission to create an endpoint for a device and mobile app on one of the supported push notification services, such as GCM and APNS
   * @see https://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformEndpoint.html
   */
  CreatePlatformEndpoint = "sns:CreatePlatformEndpoint",

  /**
   * Write - Grants permission to add a destination phone number and send a one-time password (OTP) to that phone number for an AWS account
   * @see https://docs.aws.amazon.com/sns/latest/api/API_CreateSMSSandboxPhoneNumber.html
   */
  CreateSMSSandboxPhoneNumber = "sns:CreateSMSSandboxPhoneNumber",

  /**
   * Write - Grants permission to create a topic to which notifications can be published
   * @see https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags from request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys from request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTopic = "sns:CreateTopic",

  /**
   * Write - Grants permission to delete the endpoint for a device and mobile app from Amazon SNS
   * @see https://docs.aws.amazon.com/sns/latest/api/API_DeleteEndpoint.html
   */
  DeleteEndpoint = "sns:DeleteEndpoint",

  /**
   * Write - Grants permission to delete a platform application object for one of the supported push notification services, such as APNS and GCM
   * @see https://docs.aws.amazon.com/sns/latest/api/API_DeletePlatformApplication.html
   */
  DeletePlatformApplication = "sns:DeletePlatformApplication",

  /**
   * Write - Grants permission to delete an AWS account's verified or pending phone number
   * @see https://docs.aws.amazon.com/sns/latest/api/API_DeleteSMSSandboxPhoneNumber.html
   */
  DeleteSMSSandboxPhoneNumber = "sns:DeleteSMSSandboxPhoneNumber",

  /**
   * Write - Grants permission to delete a topic and all its subscriptions
   * @see https://docs.aws.amazon.com/sns/latest/api/API_DeleteTopic.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   */
  DeleteTopic = "sns:DeleteTopic",

  /**
   * Read - Grants permission to retrieve the endpoint attributes for a device on one of the supported push notification services, such as GCM and APNS
   * @see https://docs.aws.amazon.com/sns/latest/api/API_GetEndpointAttributes.html
   */
  GetEndpointAttributes = "sns:GetEndpointAttributes",

  /**
   * Read - Grants permission to retrieve the attributes of the platform application object for the supported push notification services, such as APNS and GCM
   * @see https://docs.aws.amazon.com/sns/latest/api/API_GetPlatformApplicationAttributes.html
   */
  GetPlatformApplicationAttributes = "sns:GetPlatformApplicationAttributes",

  /**
   * Read - Grants permission to return the settings for sending SMS messages from your account
   * @see https://docs.aws.amazon.com/sns/latest/api/API_GetSMSAttributes.html
   */
  GetSMSAttributes = "sns:GetSMSAttributes",

  /**
   * Read - Grants permission to retrieve the sandbox status for the calling account in the target region
   * @see https://docs.aws.amazon.com/sns/latest/api/API_GetSMSSandboxAccountStatus.html
   */
  GetSMSSandboxAccountStatus = "sns:GetSMSSandboxAccountStatus",

  /**
   * Read - Grants permission to return all of the properties of a subscription
   * @see https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html
   */
  GetSubscriptionAttributes = "sns:GetSubscriptionAttributes",

  /**
   * Read - Grants permission to return all of the properties of a topic
   * @see https://docs.aws.amazon.com/sns/latest/api/API_GetTopicAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   */
  GetTopicAttributes = "sns:GetTopicAttributes",

  /**
   * List - Grants permission to list the endpoints and endpoint attributes for devices in a supported push notification service, such as GCM and APNS
   * @see https://docs.aws.amazon.com/sns/latest/api/API_ListEndpointsByPlatformApplication.html
   */
  ListEndpointsByPlatformApplication = "sns:ListEndpointsByPlatformApplication",

  /**
   * List - Grants permission to list all origination numbers, and their metadata
   * @see https://docs.aws.amazon.com/sns/latest/api/API_ListOriginationNumbers.html
   */
  ListOriginationNumbers = "sns:ListOriginationNumbers",

  /**
   * Read - Grants permission to return a list of phone numbers that are opted out, meaning you cannot send SMS messages to them
   * @see https://docs.aws.amazon.com/sns/latest/api/API_ListPhoneNumbersOptedOut.html
   */
  ListPhoneNumbersOptedOut = "sns:ListPhoneNumbersOptedOut",

  /**
   * List - Grants permission to list the platform application objects for the supported push notification services, such as APNS and GCM
   * @see https://docs.aws.amazon.com/sns/latest/api/API_ListPlatformApplications.html
   */
  ListPlatformApplications = "sns:ListPlatformApplications",

  /**
   * List - Grants permission to list the calling account's current pending and verified destination phone numbers
   * @see https://docs.aws.amazon.com/sns/latest/api/API_ListSMSSandboxPhoneNumbers.html
   */
  ListSMSSandboxPhoneNumbers = "sns:ListSMSSandboxPhoneNumbers",

  /**
   * List - Grants permission to return a list of the requester's subscriptions
   * @see https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html
   */
  ListSubscriptions = "sns:ListSubscriptions",

  /**
   * List - Grants permission to return a list of the subscriptions to a specific topic
   * @see https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptionsByTopic.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   */
  ListSubscriptionsByTopic = "sns:ListSubscriptionsByTopic",

  /**
   * Read - Grants permission to list all tags added to the specified Amazon SNS topic
   * @see https://docs.aws.amazon.com/sns/latest/api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   */
  ListTagsForResource = "sns:ListTagsForResource",

  /**
   * List - Grants permission to return a list of the requester's topics
   * @see https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html
   */
  ListTopics = "sns:ListTopics",

  /**
   * Write - Grants permission to opt in a phone number that is currently opted out, which enables you to resume sending SMS messages to the number
   * @see https://docs.aws.amazon.com/sns/latest/api/API_OptInPhoneNumber.html
   */
  OptInPhoneNumber = "sns:OptInPhoneNumber",

  /**
   * Write - Grants permission to send a message to all of a topic's subscribed endpoints
   * @see https://docs.aws.amazon.com/sns/latest/api/API_Publish.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   */
  Publish = "sns:Publish",

  /**
   * PermissionsManagement - Grants permission to remove a statement from a topic's access control policy
   * @see https://docs.aws.amazon.com/sns/latest/api/API_RemovePermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   */
  RemovePermission = "sns:RemovePermission",

  /**
   * Write - Grants permission to set the attributes for an endpoint for a device on one of the supported push notification services, such as GCM and APNS
   * @see https://docs.aws.amazon.com/sns/latest/api/API_SetEndpointAttributes.html
   */
  SetEndpointAttributes = "sns:SetEndpointAttributes",

  /**
   * Write - Grants permission to set the attributes of the platform application object for the supported push notification services, such as APNS and GCM
   * @see https://docs.aws.amazon.com/sns/latest/api/API_SetPlatformApplicationAttributes.html
   */
  SetPlatformApplicationAttributes = "sns:SetPlatformApplicationAttributes",

  /**
   * Write - Grants permission to set the default settings for sending SMS messages and receiving daily SMS usage reports
   * @see https://docs.aws.amazon.com/sns/latest/api/API_SetSMSAttributes.html
   */
  SetSMSAttributes = "sns:SetSMSAttributes",

  /**
   * Write - Grants permission to allow a subscription owner to set an attribute of the topic to a new value
   * @see https://docs.aws.amazon.com/sns/latest/api/API_SetSubscriptionAttributes.html
   */
  SetSubscriptionAttributes = "sns:SetSubscriptionAttributes",

  /**
   * Write - Grants permission to allow a topic owner to set an attribute of the topic to a new value
   * @see https://docs.aws.amazon.com/sns/latest/api/API_SetTopicAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   */
  SetTopicAttributes = "sns:SetTopicAttributes",

  /**
   * Write - Grants permission to prepare to subscribe an endpoint by sending the endpoint a confirmation message
   * @see https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `sns:Endpoint`: Filters access by the URL, email address, or ARN from a Subscribe request or a previously confirmed subscription ({@link https://docs.aws.amazon.com/sns/latest/dg/UsingIAMwithSNS.html#w2ab1c11c23c19 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sns:Protocol`: Filters access by the protocol value from a Subscribe request or a previously confirmed subscription ({@link https://docs.aws.amazon.com/sns/latest/dg/UsingIAMwithSNS.html#w2ab1c11c23c19 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  Subscribe = "sns:Subscribe",

  /**
   * Tagging - Grants permission to add tags to the specified Amazon SNS topic
   * @see https://docs.aws.amazon.com/sns/latest/api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags from request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys from request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "sns:TagResource",

  /**
   * Write - Grants permission to delete a subscription
   * @see https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html
   */
  Unsubscribe = "sns:Unsubscribe",

  /**
   * Tagging - Grants permission to remove tags from the specified Amazon SNS topic
   * @see https://docs.aws.amazon.com/sns/latest/api/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags from request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys from request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "sns:UntagResource",

  /**
   * Write - Grants permission to verify a destination phone number with a one-time password (OTP) for an AWS account
   * @see https://docs.aws.amazon.com/sns/latest/api/API_VerifySMSSandboxPhoneNumber.html
   */
  VerifySMSSandboxPhoneNumber = "sns:VerifySMSSandboxPhoneNumber",

  /**
   * * - Grant all sns permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnsResource.topic `SnsResource.topic`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags from request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys from request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sns:Endpoint`: Filters access by the URL, email address, or ARN from a Subscribe request or a previously confirmed subscription ({@link https://docs.aws.amazon.com/sns/latest/dg/UsingIAMwithSNS.html#w2ab1c11c23c19 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sns:Protocol`: Filters access by the protocol value from a Subscribe request or a previously confirmed subscription ({@link https://docs.aws.amazon.com/sns/latest/dg/UsingIAMwithSNS.html#w2ab1c11c23c19 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "sns:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsns.html
 */
export const SnsResource = {

  /**
   * @see https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the restource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  topic: (options: Partial<{partition: string, region: string, account: string, topicName: string}> = {}) => `arn:${options.partition || '*'}:sns:${options.region || '*'}:${options.account || '*'}:${options.topicName || '*'}`,
}

