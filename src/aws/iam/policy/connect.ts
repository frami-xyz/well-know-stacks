/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html
 */
export enum ConnectAction {

  /**
   * Write - Grants permission to associate approved origin for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateApprovedOrigin = "connect:AssociateApprovedOrigin",

  /**
   * Write - Grants permission to associate a Lex bot for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateBot = "connect:AssociateBot",

  /**
   * Write - Grants permission to associate a Customer Profiles domain for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   */
  AssociateCustomerProfilesDomain = "connect:AssociateCustomerProfilesDomain",

  /**
   * Write - Grants permission to default vocabulary for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/API_AssociateDefaultVocabulary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateDefaultVocabulary = "connect:AssociateDefaultVocabulary",

  /**
   * Write - Grants permission to associate instance storage for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:StorageResourceType`: Filters access by restricting the storage resource type of the Amazon Connect instance storage configuration ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateInstanceStorageConfig = "connect:AssociateInstanceStorageConfig",

  /**
   * Write - Grants permission to associate a Lambda function for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateLambdaFunction = "connect:AssociateLambdaFunction",

  /**
   * Write - Grants permission to associate a Lex bot for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateLexBot = "connect:AssociateLexBot",

  /**
   * Write - Grants permission to associate contact flow resources to phone number resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociatePhoneNumberContactFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * - {@link ConnectResource.phoneNumber `ConnectResource.phoneNumber`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociatePhoneNumberContactFlow = "connect:AssociatePhoneNumberContactFlow",

  /**
   * Write - Grants permission to associate quick connects with a queue in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateQueueQuickConnects.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateQueueQuickConnects = "connect:AssociateQueueQuickConnects",

  /**
   * Write - Grants permission to associate queues with a routing profile in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateRoutingProfileQueues.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateRoutingProfileQueues = "connect:AssociateRoutingProfileQueues",

  /**
   * Write - Grants permission to associate a security key for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateSecurityKey = "connect:AssociateSecurityKey",

  /**
   * Write - Grants permission to grant access and to associate the datasets with the specified AWS account
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/optimization-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchAssociateAnalyticsDataSet = "connect:BatchAssociateAnalyticsDataSet",

  /**
   * Write - Grants permission to revoke access and to disassociate the datasets with the specified AWS account
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/optimization-apis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchDisassociateAnalyticsDataSet = "connect:BatchDisassociateAnalyticsDataSet",

  /**
   * Write - Grants permission to claim phone number resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * - {@link ConnectResource.wildcardPhoneNumber `ConnectResource.wildcardPhoneNumber`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ClaimPhoneNumber = "connect:ClaimPhoneNumber",

  /**
   * Write - Grants permission to create agent status in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateAgentStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.agentStatus `ConnectResource.agentStatus`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAgentStatus = "connect:CreateAgentStatus",

  /**
   * Write - Grants permission to create a contact flow in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateContactFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateContactFlow = "connect:CreateContactFlow",

  /**
   * Write - Grants permission to create a contact flow module in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateContactFlowModule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlowModule `ConnectResource.contactFlowModule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateContactFlowModule = "connect:CreateContactFlowModule",

  /**
   * Write - Grants permission to create hours of operation in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateHoursOfOperation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.hoursOfOperation `ConnectResource.hoursOfOperation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateHoursOfOperation = "connect:CreateHoursOfOperation",

  /**
   * Write - Grants permission to create a new Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateInstance = "connect:CreateInstance",

  /**
   * Write - Grants permission to create an integration association with an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * - {@link ConnectResource.integrationAssociation `ConnectResource.integrationAssociation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateIntegrationAssociation = "connect:CreateIntegrationAssociation",

  /**
   * Write - Grants permission to create a queue in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.hoursOfOperation `ConnectResource.hoursOfOperation`} 
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * - {@link ConnectResource.phoneNumber `ConnectResource.phoneNumber`} 
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateQueue = "connect:CreateQueue",

  /**
   * Write - Grants permission to create a quick connect in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateQuickConnect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateQuickConnect = "connect:CreateQuickConnect",

  /**
   * Write - Grants permission to create a routing profile in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateRoutingProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateRoutingProfile = "connect:CreateRoutingProfile",

  /**
   * Write - Grants permission to create a security profile for the specified Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateSecurityProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.securityProfile `ConnectResource.securityProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSecurityProfile = "connect:CreateSecurityProfile",

  /**
   * Write - Grants permission to create a task template in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTaskTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.taskTemplate `ConnectResource.taskTemplate`} 
   */
  CreateTaskTemplate = "connect:CreateTaskTemplate",

  /**
   * Write - Grants permission to create a use case for an integration association
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUseCase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * - {@link ConnectResource.integrationAssociation `ConnectResource.integrationAssociation`} 
   * - {@link ConnectResource.useCase `ConnectResource.useCase`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateUseCase = "connect:CreateUseCase",

  /**
   * Write - Grants permission to create a user for the specified Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * - {@link ConnectResource.securityProfile `ConnectResource.securityProfile`} 
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * - {@link ConnectResource.hierarchyGroup `ConnectResource.hierarchyGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateUser = "connect:CreateUser",

  /**
   * Write - Grants permission to create a user hierarchy group in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUserHierarchyGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.hierarchyGroup `ConnectResource.hierarchyGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateUserHierarchyGroup = "connect:CreateUserHierarchyGroup",

  /**
   * Write - Grants permission to create a vocabulary in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateVocabulary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.vocabulary `ConnectResource.vocabulary`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateVocabulary = "connect:CreateVocabulary",

  /**
   * Write - Grants permission to delete a contact flow in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteContactFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteContactFlow = "connect:DeleteContactFlow",

  /**
   * Write - Grants permission to delete a contact flow module in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteContactFlowModule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlowModule `ConnectResource.contactFlowModule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteContactFlowModule = "connect:DeleteContactFlowModule",

  /**
   * Write - Grants permission to delete hours of operation in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteHoursOfOperation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.hoursOfOperation `ConnectResource.hoursOfOperation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteHoursOfOperation = "connect:DeleteHoursOfOperation",

  /**
   * Write - Grants permission to delete an Amazon Connect instance. When you remove an instance, the link to an existing AWS directory is also removed
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteInstance = "connect:DeleteInstance",

  /**
   * Write - Grants permission to delete an integration association from an Amazon Connect instance. The association must not have any use cases associated with it
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteIntegrationAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * - {@link ConnectResource.integrationAssociation `ConnectResource.integrationAssociation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteIntegrationAssociation = "connect:DeleteIntegrationAssociation",

  /**
   * Write - Grants permission to delete a quick connect in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteQuickConnect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteQuickConnect = "connect:DeleteQuickConnect",

  /**
   * Write - Grants permission to delete a security profile in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteSecurityProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.securityProfile `ConnectResource.securityProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteSecurityProfile = "connect:DeleteSecurityProfile",

  /**
   * Write - Grants permission to delete a task template in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTaskTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.taskTemplate `ConnectResource.taskTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteTaskTemplate = "connect:DeleteTaskTemplate",

  /**
   * Write - Grants permission to delete a use case from an integration association
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUseCase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * - {@link ConnectResource.useCase `ConnectResource.useCase`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteUseCase = "connect:DeleteUseCase",

  /**
   * Write - Grants permission to delete a user in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteUser = "connect:DeleteUser",

  /**
   * Write - Grants permission to delete a user hierarchy group in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUserHierarchyGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.hierarchyGroup `ConnectResource.hierarchyGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteUserHierarchyGroup = "connect:DeleteUserHierarchyGroup",

  /**
   * Write - Grants permission to delete a vocabulary in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteVocabulary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.vocabulary `ConnectResource.vocabulary`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteVocabulary = "connect:DeleteVocabulary",

  /**
   * Read - Grants permission to describe agent status in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeAgentStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.agentStatus `ConnectResource.agentStatus`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeAgentStatus = "connect:DescribeAgentStatus",

  /**
   * Read - Grants permission to describe a contact in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeContact = "connect:DescribeContact",

  /**
   * Read - Grants permission to describe a contact flow in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContactFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeContactFlow = "connect:DescribeContactFlow",

  /**
   * Read - Grants permission to describe a contact flow module in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContactFlowModule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlowModule `ConnectResource.contactFlowModule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeContactFlowModule = "connect:DescribeContactFlowModule",

  /**
   * Read - Grants permission to describe hours of operation in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeHoursOfOperation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.hoursOfOperation `ConnectResource.hoursOfOperation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeHoursOfOperation = "connect:DescribeHoursOfOperation",

  /**
   * Read - Grants permission to view details of an Amazon Connect instance and is also required to create an instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeInstance = "connect:DescribeInstance",

  /**
   * Read - Grants permission to view the attribute details of an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:AttributeType`: Filters access by the attribute type of the Amazon Connect instance ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeInstanceAttribute = "connect:DescribeInstanceAttribute",

  /**
   * Read - Grants permission to view the instance storage configuration for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:StorageResourceType`: Filters access by restricting the storage resource type of the Amazon Connect instance storage configuration ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeInstanceStorageConfig = "connect:DescribeInstanceStorageConfig",

  /**
   * List - Grants permission to describe phone number resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.phoneNumber `ConnectResource.phoneNumber`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribePhoneNumber = "connect:DescribePhoneNumber",

  /**
   * Read - Grants permission to describe a queue in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeQueue = "connect:DescribeQueue",

  /**
   * Read - Grants permission to describe a quick connect in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeQuickConnect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeQuickConnect = "connect:DescribeQuickConnect",

  /**
   * Read - Grants permission to describe a routing profile in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeRoutingProfile = "connect:DescribeRoutingProfile",

  /**
   * Read - Grants permission to describe a security profile in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeSecurityProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.securityProfile `ConnectResource.securityProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeSecurityProfile = "connect:DescribeSecurityProfile",

  /**
   * Read - Grants permission to describe a user in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeUser = "connect:DescribeUser",

  /**
   * Read - Grants permission to describe a hierarchy group for an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.hierarchyGroup `ConnectResource.hierarchyGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeUserHierarchyGroup = "connect:DescribeUserHierarchyGroup",

  /**
   * Read - Grants permission to describe the hierarchy structure for an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyStructure.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeUserHierarchyStructure = "connect:DescribeUserHierarchyStructure",

  /**
   * Read - Grants permission to describe a vocabulary in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeVocabulary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.vocabulary `ConnectResource.vocabulary`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeVocabulary = "connect:DescribeVocabulary",

  /**
   * Write - Grants permission to disassociate approved origin for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateApprovedOrigin = "connect:DisassociateApprovedOrigin",

  /**
   * Write - Grants permission to disassociate a Lex bot for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateBot = "connect:DisassociateBot",

  /**
   * Write - Grants permission to disassociate a Customer Profiles domain for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   */
  DisassociateCustomerProfilesDomain = "connect:DisassociateCustomerProfilesDomain",

  /**
   * Write - Grants permission to disassociate instance storage for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:StorageResourceType`: Filters access by restricting the storage resource type of the Amazon Connect instance storage configuration ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateInstanceStorageConfig = "connect:DisassociateInstanceStorageConfig",

  /**
   * Write - Grants permission to disassociate a Lambda function for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateLambdaFunction = "connect:DisassociateLambdaFunction",

  /**
   * Write - Grants permission to disassociate a Lex bot for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateLexBot = "connect:DisassociateLexBot",

  /**
   * Write - Grants permission to disassociate contact flow resources from phone number resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociatePhoneNumberContactFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.phoneNumber `ConnectResource.phoneNumber`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociatePhoneNumberContactFlow = "connect:DisassociatePhoneNumberContactFlow",

  /**
   * Write - Grants permission to disassociate quick connects from a queue in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateQueueQuickConnects.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateQueueQuickConnects = "connect:DisassociateQueueQuickConnects",

  /**
   * Write - Grants permission to disassociate queues from a routing profile in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateRoutingProfileQueues.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateRoutingProfileQueues = "connect:DisassociateRoutingProfileQueues",

  /**
   * Write - Grants permission to disassociate the security key for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateSecurityKey = "connect:DisassociateSecurityKey",

  /**
   * Read - Grants permission to retrieve the contact attributes for the specified contact
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_GetContactAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetContactAttributes = "connect:GetContactAttributes",

  /**
   * Read - Grants permission to retrieve current metric data for the queues in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_GetCurrentMetricData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetCurrentMetricData = "connect:GetCurrentMetricData",

  /**
   * Read - Grants permission to retrieve current user data in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_GetCurrentUserData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetCurrentUserData = "connect:GetCurrentUserData",

  /**
   * Read - Grants permission to federate into an Amazon Connect instance when using SAML-based authentication for identity management
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_GetFederationToken.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetFederationToken = "connect:GetFederationToken",

  /**
   * Write - Grants permission to federate into an Amazon Connect instance (Log in for emergency access functionality in the Amazon Connect console)
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/emergency-admin-login.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   */
  GetFederationTokens = "connect:GetFederationTokens",

  /**
   * Read - Grants permission to retrieve historical metric data for queues in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetMetricData = "connect:GetMetricData",

  /**
   * Read - Grants permission to get details about specified task template in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_GetTaskTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.taskTemplate `ConnectResource.taskTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetTaskTemplate = "connect:GetTaskTemplate",

  /**
   * List - Grants permission to list agent statuses in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListAgentStatuses.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.wildcardAgentStatus `ConnectResource.wildcardAgentStatus`} 
   */
  ListAgentStatuses = "connect:ListAgentStatuses",

  /**
   * List - Grants permission to view approved origins of an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListApprovedOrigins = "connect:ListApprovedOrigins",

  /**
   * List - Grants permission to view the Lex bots of an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListBots = "connect:ListBots",

  /**
   * List - Grants permission to list contact flow module resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactFlowModules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   */
  ListContactFlowModules = "connect:ListContactFlowModules",

  /**
   * List - Grants permission to list contact flow resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactFlows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.wildcardContactFlow `ConnectResource.wildcardContactFlow`} 
   */
  ListContactFlows = "connect:ListContactFlows",

  /**
   * List - Grants permission to list references associated with a contact in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactReferences.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListContactReferences = "connect:ListContactReferences",

  /**
   * List - Grants permission to list default vocabularies associated with a Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListDefaultVocabularies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListDefaultVocabularies = "connect:ListDefaultVocabularies",

  /**
   * List - Grants permission to list hours of operation resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListHoursOfOperations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListHoursOfOperations = "connect:ListHoursOfOperations",

  /**
   * List - Grants permission to view the attributes of an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListInstanceAttributes = "connect:ListInstanceAttributes",

  /**
   * List - Grants permission to view storage configurations of an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListInstanceStorageConfigs = "connect:ListInstanceStorageConfigs",

  /**
   * List - Grants permission to view the Amazon Connect instances associated with an AWS account
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  ListInstances = "connect:ListInstances",

  /**
   * List - Grants permission to list summary information about the integration associations for the specified Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListIntegrationAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListIntegrationAssociations = "connect:ListIntegrationAssociations",

  /**
   * List - Grants permission to view the Lambda functions of an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListLambdaFunctions = "connect:ListLambdaFunctions",

  /**
   * List - Grants permission to view the Lex bots of an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListLexBots = "connect:ListLexBots",

  /**
   * List - Grants permission to list phone number resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.wildcardLegacyPhoneNumber `ConnectResource.wildcardLegacyPhoneNumber`} 
   */
  ListPhoneNumbers = "connect:ListPhoneNumbers",

  /**
   * List - Grants permission to list phone number resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.wildcardPhoneNumber `ConnectResource.wildcardPhoneNumber`} 
   */
  ListPhoneNumbersV2 = "connect:ListPhoneNumbersV2",

  /**
   * List - Grants permission to list prompt resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPrompts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListPrompts = "connect:ListPrompts",

  /**
   * List - Grants permission to list quick connect resources in a queue in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQueueQuickConnects.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListQueueQuickConnects = "connect:ListQueueQuickConnects",

  /**
   * List - Grants permission to list queue resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQueues.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.wildcardQueue `ConnectResource.wildcardQueue`} 
   */
  ListQueues = "connect:ListQueues",

  /**
   * List - Grants permission to list quick connect resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQuickConnects.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.wildcardQuickConnect `ConnectResource.wildcardQuickConnect`} 
   */
  ListQuickConnects = "connect:ListQuickConnects",

  /**
   * Read - Grants permission to list the analysis segments for a real-time analysis session
   * @see https://docs.aws.amazon.com/contact-lens/latest/APIReference/API_ListRealtimeContactAnalysisSegments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   */
  ListRealtimeContactAnalysisSegments = "connect:ListRealtimeContactAnalysisSegments",

  /**
   * List - Grants permission to list queue resources in a routing profile in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRoutingProfileQueues.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListRoutingProfileQueues = "connect:ListRoutingProfileQueues",

  /**
   * List - Grants permission to list routing profile resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRoutingProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListRoutingProfiles = "connect:ListRoutingProfiles",

  /**
   * List - Grants permission to view the security keys of an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListSecurityKeys = "connect:ListSecurityKeys",

  /**
   * List - Grants permission to list permissions associated with security profile in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListSecurityProfilePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.securityProfile `ConnectResource.securityProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListSecurityProfilePermissions = "connect:ListSecurityProfilePermissions",

  /**
   * List - Grants permission to list security profile resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListSecurityProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListSecurityProfiles = "connect:ListSecurityProfiles",

  /**
   * Read - Grants permission to list tags for an Amazon Connect resource
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.agentStatus `ConnectResource.agentStatus`} 
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * - {@link ConnectResource.contactFlowModule `ConnectResource.contactFlowModule`} 
   * - {@link ConnectResource.hierarchyGroup `ConnectResource.hierarchyGroup`} 
   * - {@link ConnectResource.hoursOfOperation `ConnectResource.hoursOfOperation`} 
   * - {@link ConnectResource.integrationAssociation `ConnectResource.integrationAssociation`} 
   * - {@link ConnectResource.phoneNumber `ConnectResource.phoneNumber`} 
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * - {@link ConnectResource.securityProfile `ConnectResource.securityProfile`} 
   * - {@link ConnectResource.useCase `ConnectResource.useCase`} 
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * - {@link ConnectResource.wildcardPhoneNumber `ConnectResource.wildcardPhoneNumber`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "connect:ListTagsForResource",

  /**
   * List - Grants permission to list task template resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListTaskTemplates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   */
  ListTaskTemplates = "connect:ListTaskTemplates",

  /**
   * List - Grants permission to list the use cases of an integration association
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUseCases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListUseCases = "connect:ListUseCases",

  /**
   * List - Grants permission to list the hierarchy group resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUserHierarchyGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListUserHierarchyGroups = "connect:ListUserHierarchyGroups",

  /**
   * List - Grants permission to list user resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUsers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListUsers = "connect:ListUsers",

  /**
   * Write - Grants permission to switch User Status in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_PutUserStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.agentStatus `ConnectResource.agentStatus`} 
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutUserStatus = "connect:PutUserStatus",

  /**
   * Write - Grants permission to release phone number resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ReleasePhoneNumber.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.phoneNumber `ConnectResource.phoneNumber`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ReleasePhoneNumber = "connect:ReleasePhoneNumber",

  /**
   * Write - Grants permission to resume recording for the specified contact
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_ResumeContactRecording.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   */
  ResumeContactRecording = "connect:ResumeContactRecording",

  /**
   * List - Grants permission to search phone number resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAvailablePhoneNumbers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.wildcardPhoneNumber `ConnectResource.wildcardPhoneNumber`} 
   */
  SearchAvailablePhoneNumbers = "connect:SearchAvailablePhoneNumbers",

  /**
   * Read - Grants permission to search user resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchUsers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:SearchTag/${TagKey}`: Filters access by TagFilter condition passed in the search request ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SearchUsers = "connect:SearchUsers",

  /**
   * List - Grants permission to search vocabularies in a Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchVocabularies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.vocabulary `ConnectResource.vocabulary`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SearchVocabularies = "connect:SearchVocabularies",

  /**
   * Write - Grants permission to initiate a chat using the Amazon Connect API
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   */
  StartChatContact = "connect:StartChatContact",

  /**
   * Write - Grants permission to start recording for the specified contact
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactRecording.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   */
  StartContactRecording = "connect:StartContactRecording",

  /**
   * Write - Grants permission to start chat streaming using the Amazon Connect API
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   */
  StartContactStreaming = "connect:StartContactStreaming",

  /**
   * Write - Grants permission to initiate outbound calls using the Amazon Connect API
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundVoiceContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   */
  StartOutboundVoiceContact = "connect:StartOutboundVoiceContact",

  /**
   * Write - Grants permission to initiate a task using the Amazon Connect API
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_StartTaskContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartTaskContact = "connect:StartTaskContact",

  /**
   * Write - Grants permission to stop contacts that were initiated using the Amazon Connect API. If you use this operation on an active contact the contact ends, even if the agent is active on a call with a customer
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StopContact = "connect:StopContact",

  /**
   * Write - Grants permission to stop recording for the specified contact
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContactRecording.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   */
  StopContactRecording = "connect:StopContactRecording",

  /**
   * Write - Grants permission to stop chat streaming using the Amazon Connect API
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContactStreaming.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   */
  StopContactStreaming = "connect:StopContactStreaming",

  /**
   * Write - Grants permission to suspend recording for the specified contact
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_SuspendContactRecording.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   */
  SuspendContactRecording = "connect:SuspendContactRecording",

  /**
   * Tagging - Grants permission to tag an Amazon Connect resource
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.agentStatus `ConnectResource.agentStatus`} 
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * - {@link ConnectResource.contactFlowModule `ConnectResource.contactFlowModule`} 
   * - {@link ConnectResource.hierarchyGroup `ConnectResource.hierarchyGroup`} 
   * - {@link ConnectResource.hoursOfOperation `ConnectResource.hoursOfOperation`} 
   * - {@link ConnectResource.integrationAssociation `ConnectResource.integrationAssociation`} 
   * - {@link ConnectResource.phoneNumber `ConnectResource.phoneNumber`} 
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * - {@link ConnectResource.securityProfile `ConnectResource.securityProfile`} 
   * - {@link ConnectResource.useCase `ConnectResource.useCase`} 
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * - {@link ConnectResource.wildcardPhoneNumber `ConnectResource.wildcardPhoneNumber`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "connect:TagResource",

  /**
   * Write - Grants permission to transfer the contact to another queue or agent
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_TransferContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TransferContact = "connect:TransferContact",

  /**
   * Tagging - Grants permission to untag an Amazon Connect resource
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.agentStatus `ConnectResource.agentStatus`} 
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * - {@link ConnectResource.contactFlowModule `ConnectResource.contactFlowModule`} 
   * - {@link ConnectResource.hierarchyGroup `ConnectResource.hierarchyGroup`} 
   * - {@link ConnectResource.hoursOfOperation `ConnectResource.hoursOfOperation`} 
   * - {@link ConnectResource.integrationAssociation `ConnectResource.integrationAssociation`} 
   * - {@link ConnectResource.phoneNumber `ConnectResource.phoneNumber`} 
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * - {@link ConnectResource.securityProfile `ConnectResource.securityProfile`} 
   * - {@link ConnectResource.useCase `ConnectResource.useCase`} 
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * - {@link ConnectResource.wildcardPhoneNumber `ConnectResource.wildcardPhoneNumber`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "connect:UntagResource",

  /**
   * Write - Grants permission to update agent status in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateAgentStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.agentStatus `ConnectResource.agentStatus`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateAgentStatus = "connect:UpdateAgentStatus",

  /**
   * Write - Grants permission to update a contact in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateContact = "connect:UpdateContact",

  /**
   * Write - Grants permission to create or update the contact attributes associated with the specified contact
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateContactAttributes = "connect:UpdateContactAttributes",

  /**
   * Write - Grants permission to update contact flow content in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateContactFlowContent = "connect:UpdateContactFlowContent",

  /**
   * Write - Grants permission to update the metadata of a contact flow in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateContactFlowMetadata = "connect:UpdateContactFlowMetadata",

  /**
   * Write - Grants permission to update contact flow module content in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowModuleContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlowModule `ConnectResource.contactFlowModule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateContactFlowModuleContent = "connect:UpdateContactFlowModuleContent",

  /**
   * Write - Grants permission to update the metadata of a contact flow module in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowModuleMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlowModule `ConnectResource.contactFlowModule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateContactFlowModuleMetadata = "connect:UpdateContactFlowModuleMetadata",

  /**
   * Write - Grants permission to update the name and description of a contact flow in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowName.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateContactFlowName = "connect:UpdateContactFlowName",

  /**
   * Write - Grants permission to update the schedule of a contact that is already scheduled in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateContactSchedule = "connect:UpdateContactSchedule",

  /**
   * Write - Grants permission to update hours of operation in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateHoursOfOperation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.hoursOfOperation `ConnectResource.hoursOfOperation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateHoursOfOperation = "connect:UpdateHoursOfOperation",

  /**
   * Write - Grants permission to update the attribute for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:AttributeType`: Filters access by the attribute type of the Amazon Connect instance ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateInstanceAttribute = "connect:UpdateInstanceAttribute",

  /**
   * Write - Grants permission to update the storage configuration for an existing Amazon Connect instance
   * @see https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:StorageResourceType`: Filters access by restricting the storage resource type of the Amazon Connect instance storage configuration ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateInstanceStorageConfig = "connect:UpdateInstanceStorageConfig",

  /**
   * Write - Grants permission to update phone number resources in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * - {@link ConnectResource.phoneNumber `ConnectResource.phoneNumber`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdatePhoneNumber = "connect:UpdatePhoneNumber",

  /**
   * Write - Grants permission to update queue hours of operation in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQueueHoursOfOperation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.hoursOfOperation `ConnectResource.hoursOfOperation`} 
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateQueueHoursOfOperation = "connect:UpdateQueueHoursOfOperation",

  /**
   * Write - Grants permission to update queue capacity in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQueueMaxContacts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateQueueMaxContacts = "connect:UpdateQueueMaxContacts",

  /**
   * Write - Grants permission to update a queue name and description in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQueueName.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateQueueName = "connect:UpdateQueueName",

  /**
   * Write - Grants permission to update queue outbound caller config in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQueueOutboundCallerConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * - {@link ConnectResource.phoneNumber `ConnectResource.phoneNumber`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateQueueOutboundCallerConfig = "connect:UpdateQueueOutboundCallerConfig",

  /**
   * Write - Grants permission to update queue status in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQueueStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateQueueStatus = "connect:UpdateQueueStatus",

  /**
   * Write - Grants permission to update the configuration of a quick connect in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQuickConnectConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateQuickConnectConfig = "connect:UpdateQuickConnectConfig",

  /**
   * Write - Grants permission to update a quick connect name and description in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQuickConnectName.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateQuickConnectName = "connect:UpdateQuickConnectName",

  /**
   * Write - Grants permission to update the concurrency in a routing profile in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileConcurrency.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateRoutingProfileConcurrency = "connect:UpdateRoutingProfileConcurrency",

  /**
   * Write - Grants permission to update the outbound queue in a routing profile in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileDefaultOutboundQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateRoutingProfileDefaultOutboundQueue = "connect:UpdateRoutingProfileDefaultOutboundQueue",

  /**
   * Write - Grants permission to update a routing profile name and description in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileName.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateRoutingProfileName = "connect:UpdateRoutingProfileName",

  /**
   * Write - Grants permission to update the queues in routing profile in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileQueues.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateRoutingProfileQueues = "connect:UpdateRoutingProfileQueues",

  /**
   * Write - Grants permission to update a security profile group for a user in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateSecurityProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.securityProfile `ConnectResource.securityProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateSecurityProfile = "connect:UpdateSecurityProfile",

  /**
   * Write - Grants permission to update task template belonging to a Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTaskTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.taskTemplate `ConnectResource.taskTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateTaskTemplate = "connect:UpdateTaskTemplate",

  /**
   * Write - Grants permission to update a hierarchy group for a user in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * - {@link ConnectResource.hierarchyGroup `ConnectResource.hierarchyGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateUserHierarchy = "connect:UpdateUserHierarchy",

  /**
   * Write - Grants permission to update a user hierarchy group name in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchyGroupName.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.hierarchyGroup `ConnectResource.hierarchyGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateUserHierarchyGroupName = "connect:UpdateUserHierarchyGroupName",

  /**
   * Write - Grants permission to update user hierarchy structure in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchyStructure.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateUserHierarchyStructure = "connect:UpdateUserHierarchyStructure",

  /**
   * Write - Grants permission to update identity information for a user in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserIdentityInfo.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateUserIdentityInfo = "connect:UpdateUserIdentityInfo",

  /**
   * Write - Grants permission to update phone configuration settings for a user in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserPhoneConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateUserPhoneConfig = "connect:UpdateUserPhoneConfig",

  /**
   * Write - Grants permission to update a routing profile for a user in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserRoutingProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateUserRoutingProfile = "connect:UpdateUserRoutingProfile",

  /**
   * Write - Grants permission to update security profiles for a user in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserSecurityProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.securityProfile `ConnectResource.securityProfile`} 
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateUserSecurityProfiles = "connect:UpdateUserSecurityProfiles",

  /**
   * Write - Grants permission to update contact flow module content in an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatedescribeContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.contactFlowModule `ConnectResource.contactFlowModule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdatedescribeContent = "connect:UpdatedescribeContent",

  /**
   * * - Grant all connect permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectResource.instance `ConnectResource.instance`} 
   * - {@link ConnectResource.contactFlow `ConnectResource.contactFlow`} 
   * - {@link ConnectResource.phoneNumber `ConnectResource.phoneNumber`} 
   * - {@link ConnectResource.queue `ConnectResource.queue`} 
   * - {@link ConnectResource.quickConnect `ConnectResource.quickConnect`} 
   * - {@link ConnectResource.routingProfile `ConnectResource.routingProfile`} 
   * - {@link ConnectResource.wildcardPhoneNumber `ConnectResource.wildcardPhoneNumber`} 
   * - {@link ConnectResource.agentStatus `ConnectResource.agentStatus`} 
   * - {@link ConnectResource.contactFlowModule `ConnectResource.contactFlowModule`} 
   * - {@link ConnectResource.hoursOfOperation `ConnectResource.hoursOfOperation`} 
   * - {@link ConnectResource.integrationAssociation `ConnectResource.integrationAssociation`} 
   * - {@link ConnectResource.user `ConnectResource.user`} 
   * - {@link ConnectResource.securityProfile `ConnectResource.securityProfile`} 
   * - {@link ConnectResource.taskTemplate `ConnectResource.taskTemplate`} 
   * - {@link ConnectResource.useCase `ConnectResource.useCase`} 
   * - {@link ConnectResource.hierarchyGroup `ConnectResource.hierarchyGroup`} 
   * - {@link ConnectResource.vocabulary `ConnectResource.vocabulary`} 
   * - {@link ConnectResource.contact `ConnectResource.contact`} 
   * - {@link ConnectResource.wildcardAgentStatus `ConnectResource.wildcardAgentStatus`} 
   * - {@link ConnectResource.wildcardContactFlow `ConnectResource.wildcardContactFlow`} 
   * - {@link ConnectResource.wildcardLegacyPhoneNumber `ConnectResource.wildcardLegacyPhoneNumber`} 
   * - {@link ConnectResource.wildcardQueue `ConnectResource.wildcardQueue`} 
   * - {@link ConnectResource.wildcardQuickConnect `ConnectResource.wildcardQuickConnect`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `connect:InstanceId`: Filters access by restricting federation into specified Amazon Connect instances ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:StorageResourceType`: Filters access by restricting the storage resource type of the Amazon Connect instance storage configuration ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by using tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by using tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `connect:AttributeType`: Filters access by the attribute type of the Amazon Connect instance ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `connect:SearchTag/${TagKey}`: Filters access by TagFilter condition passed in the search request ({@link https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "connect:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html
 */
export const ConnectResource = {

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  instance: (options: Partial<{partition: string, region: string, account: string, instanceId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-attributes.html
   */
  contact: (options: Partial<{partition: string, region: string, account: string, instanceId: string, contactId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/contact/${options.contactId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/connect-agents.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  user: (options: Partial<{partition: string, region: string, account: string, instanceId: string, userId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/agent/${options.userId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  routingProfile: (options: Partial<{partition: string, region: string, account: string, instanceId: string, routingProfileId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/routing-profile/${options.routingProfileId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  securityProfile: (options: Partial<{partition: string, region: string, account: string, instanceId: string, securityProfileId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/security-profile/${options.securityProfileId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  hierarchyGroup: (options: Partial<{partition: string, region: string, account: string, instanceId: string, hierarchyGroupId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/agent-group/${options.hierarchyGroupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/API_Queue.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  queue: (options: Partial<{partition: string, region: string, account: string, instanceId: string, queueId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/queue/${options.queueId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/API_Queue.html
   */
  wildcardQueue: (options: Partial<{partition: string, region: string, account: string, instanceId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/queue/*`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/quick-connects.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  quickConnect: (options: Partial<{partition: string, region: string, account: string, instanceId: string, quickConnectId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/transfer-destination/${options.quickConnectId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/quick-connects.html
   */
  wildcardQuickConnect: (options: Partial<{partition: string, region: string, account: string, instanceId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/transfer-destination/*`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-flows.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  contactFlow: (options: Partial<{partition: string, region: string, account: string, instanceId: string, contactFlowId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/contact-flow/${options.contactFlowId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/task-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  taskTemplate: (options: Partial<{partition: string, region: string, account: string, instanceId: string, taskTemplateId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/task-template/${options.taskTemplateId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/contact-flow-modules.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  contactFlowModule: (options: Partial<{partition: string, region: string, account: string, instanceId: string, contactFlowModuleId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/flow-module/${options.contactFlowModuleId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-flows.html
   */
  wildcardContactFlow: (options: Partial<{partition: string, region: string, account: string, instanceId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/contact-flow/*`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/API_HoursOfOperation.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  hoursOfOperation: (options: Partial<{partition: string, region: string, account: string, instanceId: string, hoursOfOperationId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/operating-hours/${options.hoursOfOperationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/agent-status.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  agentStatus: (options: Partial<{partition: string, region: string, account: string, instanceId: string, agentStatusId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/agent-state/${options.agentStatusId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/agent-status.html
   */
  wildcardAgentStatus: (options: Partial<{partition: string, region: string, account: string, instanceId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/agent-state/*`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html
   */
  legacyPhoneNumber: (options: Partial<{partition: string, region: string, account: string, instanceId: string, phoneNumberId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/phone-number/${options.phoneNumberId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html
   */
  wildcardLegacyPhoneNumber: (options: Partial<{partition: string, region: string, account: string, instanceId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/phone-number/*`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  phoneNumber: (options: Partial<{partition: string, region: string, account: string, phoneNumberId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:phone-number/${options.phoneNumberId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  wildcardPhoneNumber: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:phone-number/*`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/API_IntegrationAssociationSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  integrationAssociation: (options: Partial<{partition: string, region: string, account: string, instanceId: string, integrationAssociationId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/integration-association/${options.integrationAssociationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/API_UseCase.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  useCase: (options: Partial<{partition: string, region: string, account: string, instanceId: string, useCaseId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/use-case/${options.useCaseId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/API_Vocabulary.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by using tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  vocabulary: (options: Partial<{partition: string, region: string, account: string, instanceId: string, vocabularyId: string}> = {}) => `arn:${options.partition || '*'}:connect:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}/vocabulary/${options.vocabularyId || '*'}`,
}

