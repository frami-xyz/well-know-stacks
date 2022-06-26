/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html
 */
export enum DsAction {

  /**
   * Write - Grants permission to accept a directory sharing request that was sent from the directory owner account
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AcceptSharedDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  AcceptSharedDirectory = "ds:AcceptSharedDirectory",

  /**
   * Write - Grants permission to add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddIpRoutes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  AddIpRoutes = "ds:AddIpRoutes",

  /**
   * Write - Grants permission to add two domain controllers in the specified Region for the specified directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddRegion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  AddRegion = "ds:AddRegion",

  /**
   * Tagging - Grants permission to add or overwrite one or more tags for the specified Amazon Directory Services directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddTagsToResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the value of the request to AWS DS ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  AddTagsToResource = "ds:AddTagsToResource",

  /**
   * Write - Grants permission to authorize an application for your AWS Directory
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  AuthorizeApplication = "ds:AuthorizeApplication",

  /**
   * Write - Grants permission to cancel an in-progress schema extension to a Microsoft AD directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CancelSchemaExtension.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  CancelSchemaExtension = "ds:CancelSchemaExtension",

  /**
   * Read - Grants permission to verify that the alias is available for use
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html
   */
  CheckAlias = "ds:CheckAlias",

  /**
   * Write - Grants permission to create an AD Connector to connect to an on-premises directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ConnectDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the value of the request to AWS DS ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ConnectDirectory = "ds:ConnectDirectory",

  /**
   * Write - Grants permission to create an alias for a directory and assigns the alias to the directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  CreateAlias = "ds:CreateAlias",

  /**
   * Write - Grants permission to create a computer account in the specified directory, and joins the computer to the directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateComputer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  CreateComputer = "ds:CreateComputer",

  /**
   * Write - Grants permission to create a conditional forwarder associated with your AWS directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateConditionalForwarder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  CreateConditionalForwarder = "ds:CreateConditionalForwarder",

  /**
   * Write - Grants permission to create a Simple AD directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the value of the request to AWS DS ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDirectory = "ds:CreateDirectory",

  /**
   * Write - Grants permission to create an IdentityPool Directory in the AWS cloud
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the value of the request to AWS DS ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateIdentityPoolDirectory = "ds:CreateIdentityPoolDirectory",

  /**
   * Write - Grants permission to create a subscription to forward real time Directory Service domain controller security logs to the specified CloudWatch log group in your AWS account
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateLogSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  CreateLogSubscription = "ds:CreateLogSubscription",

  /**
   * Write - Grants permission to create a Microsoft AD in the AWS cloud
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the value of the request to AWS DS ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMicrosoftAD = "ds:CreateMicrosoftAD",

  /**
   * Write - Grants permission to create a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  CreateSnapshot = "ds:CreateSnapshot",

  /**
   * Write - Grants permission to initiate the creation of the AWS side of a trust relationship between a Microsoft AD in the AWS cloud and an external domain
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateTrust.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  CreateTrust = "ds:CreateTrust",

  /**
   * Write - Grants permission to delete a conditional forwarder that has been set up for your AWS directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteConditionalForwarder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DeleteConditionalForwarder = "ds:DeleteConditionalForwarder",

  /**
   * Write - Grants permission to delete an AWS Directory Service directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DeleteDirectory = "ds:DeleteDirectory",

  /**
   * Write - Grants permission to delete the specified log subscription
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteLogSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DeleteLogSubscription = "ds:DeleteLogSubscription",

  /**
   * Write - Grants permission to delete a directory snapshot
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DeleteSnapshot = "ds:DeleteSnapshot",

  /**
   * Write - Grants permission to delete an existing trust relationship between your Microsoft AD in the AWS cloud and an external domain
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/DeleteTrust.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DeleteTrust = "ds:DeleteTrust",

  /**
   * Write - Grants permission to delete from the system the certificate that was registered for a secured LDAP connection
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DeregisterCertificate = "ds:DeregisterCertificate",

  /**
   * Write - Grants permission to remove the specified directory as a publisher to the specified SNS topic
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterEventTopic.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DeregisterEventTopic = "ds:DeregisterEventTopic",

  /**
   * Read - Grants permission to display information about the certificate registered for a secured LDAP connection
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DescribeCertificate = "ds:DescribeCertificate",

  /**
   * Read - Grants permission to retrieve information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only SmartCard is supported
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeClientAuthenticationSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DescribeClientAuthenticationSettings = "ds:DescribeClientAuthenticationSettings",

  /**
   * Read - Grants permission to obtain information about the conditional forwarders for this account
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeConditionalForwarders.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DescribeConditionalForwarders = "ds:DescribeConditionalForwarders",

  /**
   * List - Grants permission to obtain information about the directories that belong to this account
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDirectories.html
   */
  DescribeDirectories = "ds:DescribeDirectories",

  /**
   * Read - Grants permission to provide information about any domain controllers in your directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDomainControllers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DescribeDomainControllers = "ds:DescribeDomainControllers",

  /**
   * Read - Grants permission to obtain information about which SNS topics receive status messages from the specified directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeEventTopics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DescribeEventTopics = "ds:DescribeEventTopics",

  /**
   * Read - Grants permission to describe the status of LDAP security for the specified directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeLDAPSSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DescribeLDAPSSettings = "ds:DescribeLDAPSSettings",

  /**
   * Read - Grants permission to provide information about the Regions that are configured for multi-Region replication
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeRegions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DescribeRegions = "ds:DescribeRegions",

  /**
   * Read - Grants permission to return the shared directories in your account
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSharedDirectories.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DescribeSharedDirectories = "ds:DescribeSharedDirectories",

  /**
   * Read - Grants permission to obtain information about the directory snapshots that belong to this account
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSnapshots.html
   */
  DescribeSnapshots = "ds:DescribeSnapshots",

  /**
   * Read - Grants permission to obtain information about the trust relationships for this account
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeTrusts.html
   */
  DescribeTrusts = "ds:DescribeTrusts",

  /**
   * Write - Grants permission to disable alternative client authentication methods for the specified directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableClientAuthentication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DisableClientAuthentication = "ds:DisableClientAuthentication",

  /**
   * Write - Grants permission to deactivate LDAP secure calls for the specified directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableLDAPS.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DisableLDAPS = "ds:DisableLDAPS",

  /**
   * Write - Grants permission to disable multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableRadius.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DisableRadius = "ds:DisableRadius",

  /**
   * Write - Grants permission to disable single-sign on for a directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableSso.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  DisableSso = "ds:DisableSso",

  /**
   * Write - Grants permission to enable alternative client authentication methods for the specified directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableClientAuthentication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  EnableClientAuthentication = "ds:EnableClientAuthentication",

  /**
   * Write - Grants permission to activate the switch for the specific directory to always use LDAP secure calls
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableLDAPS.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  EnableLDAPS = "ds:EnableLDAPS",

  /**
   * Write - Grants permission to enable multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableRadius.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  EnableRadius = "ds:EnableRadius",

  /**
   * Write - Grants permission to enable single-sign on for a directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableSso.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  EnableSso = "ds:EnableSso",

  /**
   * Read - Grants permission to retrieve the details of the authorized applications on a directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetAuthorizedApplicationDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  GetAuthorizedApplicationDetails = "ds:GetAuthorizedApplicationDetails",

  /**
   * Read - Grants permission to obtain directory limit information for the current region
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetDirectoryLimits.html
   */
  GetDirectoryLimits = "ds:GetDirectoryLimits",

  /**
   * Read - Grants permission to obtain the manual snapshot limits for a directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetSnapshotLimits.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  GetSnapshotLimits = "ds:GetSnapshotLimits",

  /**
   * Read - Grants permission to obtain the AWS applications authorized for a directory
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  ListAuthorizedApplications = "ds:ListAuthorizedApplications",

  /**
   * List - Grants permission to list all the certificates registered for a secured LDAP connection, for the specified directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListCertificates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  ListCertificates = "ds:ListCertificates",

  /**
   * Read - Grants permission to list the address blocks that you have added to a directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListIpRoutes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  ListIpRoutes = "ds:ListIpRoutes",

  /**
   * Read - Grants permission to list the active log subscriptions for the AWS account
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListLogSubscriptions.html
   */
  ListLogSubscriptions = "ds:ListLogSubscriptions",

  /**
   * List - Grants permission to list all schema extensions applied to a Microsoft AD Directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListSchemaExtensions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  ListSchemaExtensions = "ds:ListSchemaExtensions",

  /**
   * Read - Grants permission to list all tags on an Amazon Directory Services directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  ListTagsForResource = "ds:ListTagsForResource",

  /**
   * Write - Grants permission to register a certificate for secured LDAP connection
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  RegisterCertificate = "ds:RegisterCertificate",

  /**
   * Write - Grants permission to associate a directory with an SNS topic
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterEventTopic.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  RegisterEventTopic = "ds:RegisterEventTopic",

  /**
   * Write - Grants permission to reject a directory sharing request that was sent from the directory owner account
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RejectSharedDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  RejectSharedDirectory = "ds:RejectSharedDirectory",

  /**
   * Write - Grants permission to remove IP address blocks from a directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveIpRoutes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  RemoveIpRoutes = "ds:RemoveIpRoutes",

  /**
   * Write - Grants permission to stop all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveRegion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  RemoveRegion = "ds:RemoveRegion",

  /**
   * Tagging - Grants permission to remove tags from an Amazon Directory Services directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveTagsFromResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the value of the request to AWS DS ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RemoveTagsFromResource = "ds:RemoveTagsFromResource",

  /**
   * Write - Grants permission to reset the password for any user in your AWS Managed Microsoft AD or Simple AD directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ResetUserPassword.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  ResetUserPassword = "ds:ResetUserPassword",

  /**
   * Write - Grants permission to restore a directory using an existing directory snapshot
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RestoreFromSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  RestoreFromSnapshot = "ds:RestoreFromSnapshot",

  /**
   * Write - Grants permission to share a specified directory in your AWS account (directory owner) with another AWS account (directory consumer). With this operation you can use your directory from any AWS account and from any Amazon VPC within an AWS Region
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ShareDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  ShareDirectory = "ds:ShareDirectory",

  /**
   * Write - Grants permission to apply a schema extension to a Microsoft AD directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_StartSchemaExtension.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  StartSchemaExtension = "ds:StartSchemaExtension",

  /**
   * Write - Grants permission to unauthorize an application from your AWS Directory
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  UnauthorizeApplication = "ds:UnauthorizeApplication",

  /**
   * Write - Grants permission to stop the directory sharing between the directory owner and consumer accounts
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UnshareDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  UnshareDirectory = "ds:UnshareDirectory",

  /**
   * Write - Grants permission to update a conditional forwarder that has been set up for your AWS directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateConditionalForwarder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  UpdateConditionalForwarder = "ds:UpdateConditionalForwarder",

  /**
   * Write - Grants permission to add or remove domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateNumberOfDomainControllers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  UpdateNumberOfDomainControllers = "ds:UpdateNumberOfDomainControllers",

  /**
   * Write - Grants permission to update the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateRadius.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  UpdateRadius = "ds:UpdateRadius",

  /**
   * Write - Grants permission to update the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateTrust.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  UpdateTrust = "ds:UpdateTrust",

  /**
   * Read - Grants permission to verify a trust relationship between your Microsoft AD in the AWS cloud and an external domain
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/API_VerifyTrust.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   */
  VerifyTrust = "ds:VerifyTrust",

  /**
   * * - Grant all ds permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DsResource.directory `DsResource.directory`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the value of the request to AWS DS ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "ds:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html
 */
export const DsResource = {

  /**
   * @see https://docs.aws.amazon.com/directoryservice/latest/devguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the AWS DS Resource being acted upon ({@link https://docs.aws.amazon.com/directoryservice/latest/devguide/API_Tag.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  directory: (options: Partial<{partition: string, region: string, account: string, directoryId: string}> = {}) => `arn:${options.partition || '*'}:ds:${options.region || '*'}:${options.account || '*'}:directory/${options.directoryId || '*'}`,
}

