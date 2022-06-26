/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkmail.html
 */
export enum WorkmailAction {

  /**
   * Write - Grants permission to add a list of members (users or groups) to a group
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  AddMembersToGroup = "workmail:AddMembersToGroup",

  /**
   * Write - Grants permission to add a member (user or group) to the resource's set of delegates
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateDelegateToResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  AssociateDelegateToResource = "workmail:AssociateDelegateToResource",

  /**
   * Write - Grants permission to add a member (user or group) to the group's set
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_AssociateMemberToGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  AssociateMemberToGroup = "workmail:AssociateMemberToGroup",

  /**
   * Write - Grants permission to cancel a currently running mailbox export job
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_CancelMailboxExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  CancelMailboxExportJob = "workmail:CancelMailboxExportJob",

  /**
   * Write - Grants permission to add an alias to the set of a given member (user or group) of WorkMail
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  CreateAlias = "workmail:CreateAlias",

  /**
   * Write - Grants permission to create a group that can be used in WorkMail by calling the RegisterToWorkMail operation
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  CreateGroup = "workmail:CreateGroup",

  /**
   * Write - Grants permission to create an inbound email flow rule which will apply to all email sent to an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  CreateInboundMailFlowRule = "workmail:CreateInboundMailFlowRule",

  /**
   * Write - Grants permission to create a mail domain
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  CreateMailDomain = "workmail:CreateMailDomain",

  /**
   * Write - Grants permission to create a user in the directory
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  CreateMailUser = "workmail:CreateMailUser",

  /**
   * Write - Grants permission to create a new mobile device access rule
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateMobileDeviceAccessRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  CreateMobileDeviceAccessRule = "workmail:CreateMobileDeviceAccessRule",

  /**
   * Write - Grants permission to create a new Amazon WorkMail organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateOrganization.html
   */
  CreateOrganization = "workmail:CreateOrganization",

  /**
   * Write - Grants permission to create an outbound email flow rule which will apply to all email sent from an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/create-email-rules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  CreateOutboundMailFlowRule = "workmail:CreateOutboundMailFlowRule",

  /**
   * Write - Grants permission to create a new WorkMail resource
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  CreateResource = "workmail:CreateResource",

  /**
   * Write - Grants permission to register an SMTP gateway to a WorkMail organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  CreateSmtpGateway = "workmail:CreateSmtpGateway",

  /**
   * Write - Grants permission to create a user, which can be enabled afterwards by calling the RegisterToWorkMail operation
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_CreateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  CreateUser = "workmail:CreateUser",

  /**
   * Write - Grants permission to delete an access control rule
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAccessControlRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteAccessControlRule = "workmail:DeleteAccessControlRule",

  /**
   * Write - Grants permission to remove one or more specified aliases from a set of aliases for a given user
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteAlias = "workmail:DeleteAlias",

  /**
   * Write - Grants permission to delete the email monitoring configuration for an organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteEmailMonitoringConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteEmailMonitoringConfiguration = "workmail:DeleteEmailMonitoringConfiguration",

  /**
   * Write - Grants permission to delete a group from WorkMail
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteGroup = "workmail:DeleteGroup",

  /**
   * Write - Grants permission to remove an inbound email flow rule to no longer apply to emails sent to an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteInboundMailFlowRule = "workmail:DeleteInboundMailFlowRule",

  /**
   * Write - Grants permission to remove an unused mail domain from an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/remove_domain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteMailDomain = "workmail:DeleteMailDomain",

  /**
   * Write - Grants permission to delete permissions granted to a member (user or group)
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteMailboxPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteMailboxPermissions = "workmail:DeleteMailboxPermissions",

  /**
   * Write - Grants permission to remove a mobile device from a user
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remove_mobile_device
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteMobileDevice = "workmail:DeleteMobileDevice",

  /**
   * Write - Grants permission to delete a mobile device access override
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteMobileDeviceAccessOverride.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteMobileDeviceAccessOverride = "workmail:DeleteMobileDeviceAccessOverride",

  /**
   * Write - Grants permission to delete a mobile device access rule
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteMobileDeviceAccessRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteMobileDeviceAccessRule = "workmail:DeleteMobileDeviceAccessRule",

  /**
   * Write - Grants permission to delete an Amazon WorkMail organization and all underlying AWS resources managed by Amazon WorkMail as part of the organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteOrganization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteOrganization = "workmail:DeleteOrganization",

  /**
   * Write - Grants permission to remove an outbound email flow rule so that it no longer applies to emails sent from an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/remove-email-flow-rule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteOutboundMailFlowRule = "workmail:DeleteOutboundMailFlowRule",

  /**
   * Write - Grants permission to delete the specified resource
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteResource = "workmail:DeleteResource",

  /**
   * Write - Grants permission to delete the retention policy based on the supplied organization and policy identifiers
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteRetentionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteRetentionPolicy = "workmail:DeleteRetentionPolicy",

  /**
   * Write - Grants permission to remove an SMTP gateway from an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteSmtpGateway = "workmail:DeleteSmtpGateway",

  /**
   * Write - Grants permission to delete a user from WorkMail and all subsequent systems
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeleteUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeleteUser = "workmail:DeleteUser",

  /**
   * Write - Grants permission to mark a user, group, or resource as no longer used in WorkMail
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeregisterFromWorkMail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeregisterFromWorkMail = "workmail:DeregisterFromWorkMail",

  /**
   * Write - Grants permission to deregister a mail domain from an organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DeregisterMailDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DeregisterMailDomain = "workmail:DeregisterMailDomain",

  /**
   * List - Grants permission to show a list of directories available for use in creating an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  DescribeDirectories = "workmail:DescribeDirectories",

  /**
   * Read - Grants permission to retrieve the email monitoring configuration for an organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeEmailMonitoringConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeEmailMonitoringConfiguration = "workmail:DescribeEmailMonitoringConfiguration",

  /**
   * List - Grants permission to read the details for a group
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeGroup = "workmail:DescribeGroup",

  /**
   * Read - Grants permission to read the settings in a DMARC policy for a specified organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeInboundDmarcSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeInboundDmarcSettings = "workmail:DescribeInboundDmarcSettings",

  /**
   * Read - Grants permission to read the details of an inbound mail flow rule configured for an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeInboundMailFlowRule = "workmail:DescribeInboundMailFlowRule",

  /**
   * List - Grants permission to show a list of KMS Keys available for use in creating an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html
   */
  DescribeKmsKeys = "workmail:DescribeKmsKeys",

  /**
   * List - Grants permission to show the details of all mail domains associated with the organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeMailDomains = "workmail:DescribeMailDomains",

  /**
   * List - Grants permission to show the details of all groups associated with the organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeMailGroups = "workmail:DescribeMailGroups",

  /**
   * List - Grants permission to show the details of all users associated with the organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeMailUsers = "workmail:DescribeMailUsers",

  /**
   * Read - Grants permission to retrieve details of a mailbox export job
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeMailboxExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeMailboxExportJob = "workmail:DescribeMailboxExportJob",

  /**
   * List - Grants permission to read details of an organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeOrganization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeOrganization = "workmail:DescribeOrganization",

  /**
   * List - Grants permission to show a summary of all organizations associated with the account
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html
   */
  DescribeOrganizations = "workmail:DescribeOrganizations",

  /**
   * Read - Grants permission to read the details of an outbound mail flow rule configured for an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeOutboundMailFlowRule = "workmail:DescribeOutboundMailFlowRule",

  /**
   * List - Grants permission to read the details for a resource
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeResource = "workmail:DescribeResource",

  /**
   * Read - Grants permission to read the details of an SMTP gateway registered to an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeSmtpGateway = "workmail:DescribeSmtpGateway",

  /**
   * List - Grants permission to read details for a user
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DescribeUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DescribeUser = "workmail:DescribeUser",

  /**
   * Write - Grants permission to disable a mail group when it is not being used, in order to allow it to be deleted
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/remove_group.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DisableMailGroups = "workmail:DisableMailGroups",

  /**
   * Write - Grants permission to disable a user mailbox when it is no longer being used, in order to allow it to be deleted
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/manage-mailboxes.html#delete_user_mailbox
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DisableMailUsers = "workmail:DisableMailUsers",

  /**
   * Write - Grants permission to remove a member from the resource's set of delegates
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateDelegateFromResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DisassociateDelegateFromResource = "workmail:DisassociateDelegateFromResource",

  /**
   * Write - Grants permission to remove a member from a group
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_DisassociateMemberFromGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  DisassociateMemberFromGroup = "workmail:DisassociateMemberFromGroup",

  /**
   * Write - Grants permission to enable a mail domain in the organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  EnableMailDomain = "workmail:EnableMailDomain",

  /**
   * Write - Grants permission to enable a mail group after it has been created to allow it to receive mail
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/enable_existing_group.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  EnableMailGroups = "workmail:EnableMailGroups",

  /**
   * Write - Grants permission to enable a user's mailbox after it has been created to allow it to receive mail
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#enable_existing_user
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  EnableMailUsers = "workmail:EnableMailUsers",

  /**
   * Read - Grants permission to get the effects of access control rules as they apply to a specified IPv4 address, access protocol action, or user ID
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetAccessControlEffect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetAccessControlEffect = "workmail:GetAccessControlEffect",

  /**
   * Read - Grants permission to retrieve the retention policy associated at an organizational level
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetDefaultRetentionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetDefaultRetentionPolicy = "workmail:GetDefaultRetentionPolicy",

  /**
   * Read - Grants permission to read the configured journaling and fallback email addresses for email journaling
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetJournalingRules = "workmail:GetJournalingRules",

  /**
   * Read - Grants permission to retrieve details of a given mail domain in an organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMailDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetMailDomain = "workmail:GetMailDomain",

  /**
   * Read - Grants permission to get the details of the mail domain
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/domains_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetMailDomainDetails = "workmail:GetMailDomainDetails",

  /**
   * Read - Grants permission to get the details of the mail group
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetMailGroupDetails = "workmail:GetMailGroupDetails",

  /**
   * Read - Grants permission to get the details of the user's mailbox and account
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetMailUserDetails = "workmail:GetMailUserDetails",

  /**
   * Read - Grants permission to read the details of the user's mailbox
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMailboxDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetMailboxDetails = "workmail:GetMailboxDetails",

  /**
   * Read - Grants permission to simulate the effect of the mobile device access rules for the given attributes of a sample access event
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMobileDeviceAccessEffect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetMobileDeviceAccessEffect = "workmail:GetMobileDeviceAccessEffect",

  /**
   * Read - Grants permission to retrieve a mobile device access override
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_GetMobileDeviceAccessOverride.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetMobileDeviceAccessOverride = "workmail:GetMobileDeviceAccessOverride",

  /**
   * Read - Grants permission to get the details of the mobile device
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetMobileDeviceDetails = "workmail:GetMobileDeviceDetails",

  /**
   * Read - Grants permission to get a list of the mobile devices associated with the user
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetMobileDevicesForUser = "workmail:GetMobileDevicesForUser",

  /**
   * Read - Grants permission to get the details of the mobile device policy associated with the organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  GetMobilePolicyDetails = "workmail:GetMobilePolicyDetails",

  /**
   * Read - Grants permission to list the access control rules
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAccessControlRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListAccessControlRules = "workmail:ListAccessControlRules",

  /**
   * List - Grants permission to list the aliases associated with a given entity
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListAliases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListAliases = "workmail:ListAliases",

  /**
   * List - Grants permission to read an overview of the members of a group. Users and groups can be members of a group
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroupMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListGroupMembers = "workmail:ListGroupMembers",

  /**
   * List - Grants permission to list summaries of the organization's groups
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListGroups = "workmail:ListGroups",

  /**
   * List - Grants permission to list inbound mail flow rules configured for an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListInboundMailFlowRules = "workmail:ListInboundMailFlowRules",

  /**
   * List - Grants permission to list the mail domains for a given organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMailDomains.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListMailDomains = "workmail:ListMailDomains",

  /**
   * List - Grants permission to list mailbox export jobs
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMailboxExportJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListMailboxExportJobs = "workmail:ListMailboxExportJobs",

  /**
   * List - Grants permission to list the mailbox permissions associated with a user, group, or resource mailbox
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMailboxPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListMailboxPermissions = "workmail:ListMailboxPermissions",

  /**
   * Read - Grants permission to get a list of all the members in a mail group
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListMembersInMailGroup = "workmail:ListMembersInMailGroup",

  /**
   * Read - Grants permission to list the mobile device access overrides
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMobileDeviceAccessOverrides.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListMobileDeviceAccessOverrides = "workmail:ListMobileDeviceAccessOverrides",

  /**
   * Read - Grants permission to list the mobile device access rules
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListMobileDeviceAccessRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListMobileDeviceAccessRules = "workmail:ListMobileDeviceAccessRules",

  /**
   * List - Grants permission to list the non-deleted organizations
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListOrganizations.html
   */
  ListOrganizations = "workmail:ListOrganizations",

  /**
   * List - Grants permission to list outbound mail flow rules configured for an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/email-flows.html#email-flows-rule-outbound
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListOutboundMailFlowRules = "workmail:ListOutboundMailFlowRules",

  /**
   * List - Grants permission to list the delegates associated with a resource
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResourceDelegates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListResourceDelegates = "workmail:ListResourceDelegates",

  /**
   * List - Grants permission to list the organization's resources
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListResources = "workmail:ListResources",

  /**
   * List - Grants permission to list SMTP gateways registered to the organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListSmtpGateways = "workmail:ListSmtpGateways",

  /**
   * List - Grants permission to list the tags applied to an Amazon WorkMail organization resource
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "workmail:ListTagsForResource",

  /**
   * List - Grants permission to list the organization's users
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListUsers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ListUsers = "workmail:ListUsers",

  /**
   * Write - Grants permission to add a new access control rule
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutAccessControlRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  PutAccessControlRule = "workmail:PutAccessControlRule",

  /**
   * Write - Grants permission to add or update the email monitoring configuration for an organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutEmailMonitoringConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  PutEmailMonitoringConfiguration = "workmail:PutEmailMonitoringConfiguration",

  /**
   * Write - Grants permission to enable or disable a DMARC policy for a given organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutInboundDmarcSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  PutInboundDmarcSettings = "workmail:PutInboundDmarcSettings",

  /**
   * Write - Grants permission to set permissions for a user, group, or resource, replacing any existing permissions
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutMailboxPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  PutMailboxPermissions = "workmail:PutMailboxPermissions",

  /**
   * Write - Grants permission to add or update a mobile device access override
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutMobileDeviceAccessOverride.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  PutMobileDeviceAccessOverride = "workmail:PutMobileDeviceAccessOverride",

  /**
   * Write - Grants permission to add or update the retention policy
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_PutRetentionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  PutRetentionPolicy = "workmail:PutRetentionPolicy",

  /**
   * Write - Grants permission to register a new mail domain in an organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_RegisterMailDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  RegisterMailDomain = "workmail:RegisterMailDomain",

  /**
   * Write - Grants permission to register an existing and disabled user, group, or resource for use by associating a mailbox and calendaring capabilities
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_RegisterToWorkMail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  RegisterToWorkMail = "workmail:RegisterToWorkMail",

  /**
   * Write - Grants permission to remove members from a mail group
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  RemoveMembersFromGroup = "workmail:RemoveMembersFromGroup",

  /**
   * Write - Grants permission to allow the administrator to reset the password for a user
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_ResetPassword.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ResetPassword = "workmail:ResetPassword",

  /**
   * Write - Grants permission to reset the password for a user's account
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html#reset_user_password
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  ResetUserPassword = "workmail:ResetUserPassword",

  /**
   * Read - Grants permission to perform a prefix search to find a specific user in a mail group
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/groups_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  SearchMembers = "workmail:SearchMembers",

  /**
   * Write - Grants permission to mark a user as being an administrator
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/users_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  SetAdmin = "workmail:SetAdmin",

  /**
   * Write - Grants permission to set the default mail domain for the organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  SetDefaultMailDomain = "workmail:SetDefaultMailDomain",

  /**
   * Write - Grants permission to set journaling and fallback email addresses for email journaling
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/journaling_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  SetJournalingRules = "workmail:SetJournalingRules",

  /**
   * Write - Grants permission to set the details of the mail group which has just been created
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_group.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  SetMailGroupDetails = "workmail:SetMailGroupDetails",

  /**
   * Write - Grants permission to set the details for the user account which has just been created
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/manage-users.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  SetMailUserDetails = "workmail:SetMailUserDetails",

  /**
   * Write - Grants permission to set the details of a mobile policy associated with the organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/edit_organization_mobile_policy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  SetMobilePolicyDetails = "workmail:SetMobilePolicyDetails",

  /**
   * Write - Grants permission to start a new mailbox export job
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_StartMailboxExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  StartMailboxExportJob = "workmail:StartMailboxExportJob",

  /**
   * Tagging - Grants permission to tag the specified Amazon WorkMail organization resource
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "workmail:TagResource",

  /**
   * Write - Grants permission to test what inbound rules will apply to an email with a given sender and recipient
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  TestInboundMailFlowRules = "workmail:TestInboundMailFlowRules",

  /**
   * Write - Grants permission to test what outbound rules will apply to an email with a given sender and recipient
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/test-email-flow-rule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  TestOutboundMailFlowRules = "workmail:TestOutboundMailFlowRules",

  /**
   * Tagging - Grants permission to untag the specified Amazon WorkMail organization resource
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "workmail:UntagResource",

  /**
   * Write - Grants permission to update which domain is the default domain for an organization
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateDefaultMailDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  UpdateDefaultMailDomain = "workmail:UpdateDefaultMailDomain",

  /**
   * Write - Grants permission to update the details of an inbound email flow rule which will apply to all email sent to an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  UpdateInboundMailFlowRule = "workmail:UpdateInboundMailFlowRule",

  /**
   * Write - Grants permission to update the maximum size (in MB) of the user's mailbox
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateMailboxQuota.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  UpdateMailboxQuota = "workmail:UpdateMailboxQuota",

  /**
   * Write - Grants permission to update a mobile device access rule
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateMobileDeviceAccessRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  UpdateMobileDeviceAccessRule = "workmail:UpdateMobileDeviceAccessRule",

  /**
   * Write - Grants permission to update the details of an outbound email flow rule which will apply to all email sent from an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/modify-email-flow-rule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  UpdateOutboundMailFlowRule = "workmail:UpdateOutboundMailFlowRule",

  /**
   * Write - Grants permission to update the primary email for a user, group, or resource
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdatePrimaryEmailAddress.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  UpdatePrimaryEmailAddress = "workmail:UpdatePrimaryEmailAddress",

  /**
   * Write - Grants permission to update details for the resource
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_UpdateResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  UpdateResource = "workmail:UpdateResource",

  /**
   * Write - Grants permission to update the details of an existing SMTP gateway registered to an organization
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/smtp-gateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  UpdateSmtpGateway = "workmail:UpdateSmtpGateway",

  /**
   * Write - Grants permission to remotely wipe the mobile device associated with a user's account
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/manage-devices.html#remote_wipe_device
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   */
  WipeMobileDevice = "workmail:WipeMobileDevice",

  /**
   * * - Grant all workmail permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkmail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailResource.organization `WorkmailResource.organization`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "workmail:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkmail.html
 */
export const WorkmailResource = {

  /**
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  organization: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:workmail:${options.region || '*'}:${options.account || '*'}:organization/${options.resourceId || '*'}`,
}

