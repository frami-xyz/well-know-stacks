/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanagercontacts.html
 */
export enum SsmContactsAction {

  /**
   * Write - Grants permission to accept a page
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_AcceptPage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.page `SsmContactsResource.page`} 
   */
  AcceptPage = "ssm-contacts:AcceptPage",

  /**
   * Write - Grants permission to activate a contact's contact channel
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ActivateContactChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contactchannel `SsmContactsResource.contactchannel`} 
   */
  ActivateContactChannel = "ssm-contacts:ActivateContactChannel",

  /**
   * Permissions management - Grants permission to use a contact in an escalation plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_AssociateContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  AssociateContact = "ssm-contacts:AssociateContact",

  /**
   * Write - Grants permission to create a contact
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_CreateContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  CreateContact = "ssm-contacts:CreateContact",

  /**
   * Write - Grants permission to create a contact channel for a contact
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_CreateContactChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  CreateContactChannel = "ssm-contacts:CreateContactChannel",

  /**
   * Write - Grants permission to deactivate a contact's contact channel
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeactivateContactChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contactchannel `SsmContactsResource.contactchannel`} 
   */
  DeactivateContactChannel = "ssm-contacts:DeactivateContactChannel",

  /**
   * Write - Grants permission to delete a contact
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeleteContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  DeleteContact = "ssm-contacts:DeleteContact",

  /**
   * Write - Grants permission to delete a contact's contact channel
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeleteContactChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contactchannel `SsmContactsResource.contactchannel`} 
   */
  DeleteContactChannel = "ssm-contacts:DeleteContactChannel",

  /**
   * Write - Grants permission to delete a contact's resource policy
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeleteContactPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  DeleteContactPolicy = "ssm-contacts:DeleteContactPolicy",

  /**
   * Read - Grants permission to describe an engagement
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DescribeEngagement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.engagement `SsmContactsResource.engagement`} 
   */
  DescribeEngagement = "ssm-contacts:DescribeEngagement",

  /**
   * Read - Grants permission to describe a page
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DescribePage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.page `SsmContactsResource.page`} 
   */
  DescribePage = "ssm-contacts:DescribePage",

  /**
   * Read - Grants permission to get a contact
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  GetContact = "ssm-contacts:GetContact",

  /**
   * Read - Grants permission to get a contact's contact channel
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetContactChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contactchannel `SsmContactsResource.contactchannel`} 
   */
  GetContactChannel = "ssm-contacts:GetContactChannel",

  /**
   * Read - Grants permission to get a contact's resource policy
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetContactPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  GetContactPolicy = "ssm-contacts:GetContactPolicy",

  /**
   * List - Grants permission to list all of a contact's contact channels
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListContactChannels.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  ListContactChannels = "ssm-contacts:ListContactChannels",

  /**
   * List - Grants permission to list all contacts
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListContacts.html
   */
  ListContacts = "ssm-contacts:ListContacts",

  /**
   * List - Grants permission to list all engagements
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListEngagements.html
   */
  ListEngagements = "ssm-contacts:ListEngagements",

  /**
   * List - Grants permission to list all receipts of a page
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPageReceipts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.page `SsmContactsResource.page`} 
   */
  ListPageReceipts = "ssm-contacts:ListPageReceipts",

  /**
   * List - Grants permission to list all pages sent to a contact
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPagesByContacts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  ListPagesByContact = "ssm-contacts:ListPagesByContact",

  /**
   * List - Grants permission to list all pages created in an engagement
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPagesByEngagement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.engagement `SsmContactsResource.engagement`} 
   */
  ListPagesByEngagement = "ssm-contacts:ListPagesByEngagement",

  /**
   * Read - Grants permission to view a list of resource tags for a specified resource
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  ListTagsForResource = "ssm-contacts:ListTagsForResource",

  /**
   * Write - Grants permission to add a resource policy to a contact
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_PutContactPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  PutContactPolicy = "ssm-contacts:PutContactPolicy",

  /**
   * Write - Grants permission to send the activation code of a contact's contact channel
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_SendActivationCode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contactchannel `SsmContactsResource.contactchannel`} 
   */
  SendActivationCode = "ssm-contacts:SendActivationCode",

  /**
   * Write - Grants permission to start an engagement
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_StartEngagement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  StartEngagement = "ssm-contacts:StartEngagement",

  /**
   * Write - Grants permission to stop an engagement
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_StopEngagement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.engagement `SsmContactsResource.engagement`} 
   */
  StopEngagement = "ssm-contacts:StopEngagement",

  /**
   * Tagging - Grants permission to add tags to a response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  TagResource = "ssm-contacts:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  UntagResource = "ssm-contacts:UntagResource",

  /**
   * Write - Grants permission to update a contact
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UpdateContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  UpdateContact = "ssm-contacts:UpdateContact",

  /**
   * Write - Grants permission to update a contact's contact channel
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UpdateContactChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contactchannel `SsmContactsResource.contactchannel`} 
   */
  UpdateContactChannel = "ssm-contacts:UpdateContactChannel",

  /**
   * Write - Grants permission to update a contact's resource policy
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UpdateContactPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   */
  UpdateContactPolicy = "ssm-contacts:UpdateContactPolicy",

  /**
   * * - Grant all ssm-contacts permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanagercontacts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmContactsResource.page `SsmContactsResource.page`} 
   * - {@link SsmContactsResource.contactchannel `SsmContactsResource.contactchannel`} 
   * - {@link SsmContactsResource.contact `SsmContactsResource.contact`} 
   * - {@link SsmContactsResource.engagement `SsmContactsResource.engagement`} 
   */
  All = "ssm-contacts:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanagercontacts.html
 */
export const SsmContactsResource = {

  /**
   * @see https://docs.aws.amazon.com/incident-manager/latest/UserGuide/contacts.html
   */
  contact: (options: Partial<{partition: string, region: string, account: string, contactAlias: string}> = {}) => `arn:${options.partition || '*'}:ssm-contacts:${options.region || '*'}:${options.account || '*'}:contact/${options.contactAlias || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/incident-manager/latest/UserGuide/contacts.html
   */
  contactchannel: (options: Partial<{partition: string, region: string, account: string, contactAlias: string, contactChannelId: string}> = {}) => `arn:${options.partition || '*'}:ssm-contacts:${options.region || '*'}:${options.account || '*'}:contactchannel/${options.contactAlias || '*'}/${options.contactChannelId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/incident-manager/latest/UserGuide/escalation.html
   */
  engagement: (options: Partial<{partition: string, region: string, account: string, contactAlias: string, engagementId: string}> = {}) => `arn:${options.partition || '*'}:ssm-contacts:${options.region || '*'}:${options.account || '*'}:engagement/${options.contactAlias || '*'}/${options.engagementId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/incident-manager/latest/UserGuide/escalation.html
   */
  page: (options: Partial<{partition: string, region: string, account: string, contactAlias: string, pageId: string}> = {}) => `arn:${options.partition || '*'}:ssm-contacts:${options.region || '*'}:${options.account || '*'}:page/${options.contactAlias || '*'}/${options.pageId || '*'}`,
}

