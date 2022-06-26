/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonguardduty.html
 */
export enum GuarddutyAction {

  /**
   * Write - Grants permission to accept invitations to become a GuardDuty member account
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_AcceptInvitation.html
   */
  AcceptInvitation = "guardduty:AcceptInvitation",

  /**
   * Write - Grants permission to archive GuardDuty findings
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ArchiveFindings.html
   */
  ArchiveFindings = "guardduty:ArchiveFindings",

  /**
   * Write - Grants permission to create a detector
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDetector = "guardduty:CreateDetector",

  /**
   * Write - Grants permission to create GuardDuty filters. A filters defines finding attributes and conditions used to filter findings
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.filter `GuarddutyResource.filter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFilter = "guardduty:CreateFilter",

  /**
   * Write - Grants permission to create an IPSet
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateIPSet = "guardduty:CreateIPSet",

  /**
   * Write - Grants permission to create GuardDuty member accounts, where the account used to create a member becomes the GuardDuty administrator account
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html
   */
  CreateMembers = "guardduty:CreateMembers",

  /**
   * Write - Grants permission to create a publishing destination
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreatePublishingDestination.html
   */
  CreatePublishingDestination = "guardduty:CreatePublishingDestination",

  /**
   * Write - Grants permission to create sample findings
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateSampleFindings.html
   */
  CreateSampleFindings = "guardduty:CreateSampleFindings",

  /**
   * Write - Grants permission to create GuardDuty ThreatIntelSets, where a ThreatIntelSet consists of known malicious IP addresses used by GuardDuty to generate findings
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateThreatIntelSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateThreatIntelSet = "guardduty:CreateThreatIntelSet",

  /**
   * Write - Grants permission to decline invitations to become a GuardDuty member account
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeclineInvitations.html
   */
  DeclineInvitations = "guardduty:DeclineInvitations",

  /**
   * Write - Grants permission to delete GuardDuty detectors
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.detector `GuarddutyResource.detector`} 
   */
  DeleteDetector = "guardduty:DeleteDetector",

  /**
   * Write - Grants permission to delete GuardDuty filters
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.filter `GuarddutyResource.filter`} 
   */
  DeleteFilter = "guardduty:DeleteFilter",

  /**
   * Write - Grants permission to delete GuardDuty IPSets
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.ipset `GuarddutyResource.ipset`} 
   */
  DeleteIPSet = "guardduty:DeleteIPSet",

  /**
   * Write - Grants permission to delete invitations to become a GuardDuty member account
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteInvitations.html
   */
  DeleteInvitations = "guardduty:DeleteInvitations",

  /**
   * Write - Grants permission to delete GuardDuty member accounts
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html
   */
  DeleteMembers = "guardduty:DeleteMembers",

  /**
   * Write - Grants permission to delete a publishing destination
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeletePublishingDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.publishingDestination `GuarddutyResource.publishingDestination`} 
   */
  DeletePublishingDestination = "guardduty:DeletePublishingDestination",

  /**
   * Write - Grants permission to delete GuardDuty ThreatIntelSets
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteThreatIntelSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.threatintelset `GuarddutyResource.threatintelset`} 
   */
  DeleteThreatIntelSet = "guardduty:DeleteThreatIntelSet",

  /**
   * Read - Grants permission to retrieve details about the delegated administrator associated with a GuardDuty detector
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribeOrganizationConfiguration.html
   */
  DescribeOrganizationConfiguration = "guardduty:DescribeOrganizationConfiguration",

  /**
   * Read - Grants permission to retrieve details about a publishing destination
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribePublishingDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.publishingDestination `GuarddutyResource.publishingDestination`} 
   */
  DescribePublishingDestination = "guardduty:DescribePublishingDestination",

  /**
   * Write - Grants permission to disable the organization delegated administrator for GuardDuty
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisableOrganizationAdminAccount.html
   */
  DisableOrganizationAdminAccount = "guardduty:DisableOrganizationAdminAccount",

  /**
   * Write - Grants permission to disassociate a GuardDuty member account from its GuardDuty administrator account
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateFromMasterAccount.html
   */
  DisassociateFromMasterAccount = "guardduty:DisassociateFromMasterAccount",

  /**
   * Write - Grants permission to disassociate GuardDuty member accounts from their administrator GuardDuty account
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateMembers.html
   */
  DisassociateMembers = "guardduty:DisassociateMembers",

  /**
   * Write - Grants permission to enable an organization delegated administrator for GuardDuty
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_EnableOrganizationAdminAccount.html
   */
  EnableOrganizationAdminAccount = "guardduty:EnableOrganizationAdminAccount",

  /**
   * Read - Grants permission to retrieve GuardDuty detectors
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.detector `GuarddutyResource.detector`} 
   */
  GetDetector = "guardduty:GetDetector",

  /**
   * Read - Grants permission to retrieve GuardDuty filters
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.filter `GuarddutyResource.filter`} 
   */
  GetFilter = "guardduty:GetFilter",

  /**
   * Read - Grants permission to retrieve GuardDuty findings
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindings.html
   */
  GetFindings = "guardduty:GetFindings",

  /**
   * Read - Grants permission to retrieve a list of GuardDuty finding statistics
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindingsStatistics.html
   */
  GetFindingsStatistics = "guardduty:GetFindingsStatistics",

  /**
   * Read - Grants permission to retrieve GuardDuty IPSets
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.ipset `GuarddutyResource.ipset`} 
   */
  GetIPSet = "guardduty:GetIPSet",

  /**
   * Read - Grants permission to retrieve the count of all GuardDuty invitations sent to a specified account, which does not include the accepted invitation
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetInvitationsCount.html
   */
  GetInvitationsCount = "guardduty:GetInvitationsCount",

  /**
   * Read - Grants permission to retrieve details of the GuardDuty administrator account associated with a member account
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMasterAccount.html
   */
  GetMasterAccount = "guardduty:GetMasterAccount",

  /**
   * Read - Grants permission to describe which data sources are enabled for member accounts detectors
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMemberDetectors.html
   */
  GetMemberDetectors = "guardduty:GetMemberDetectors",

  /**
   * Read - Grants permission to retrieve the member accounts associated with an administrator account
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMembers.html
   */
  GetMembers = "guardduty:GetMembers",

  /**
   * Read - Grants permission to retrieve GuardDuty ThreatIntelSets
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetThreatIntelSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.threatintelset `GuarddutyResource.threatintelset`} 
   */
  GetThreatIntelSet = "guardduty:GetThreatIntelSet",

  /**
   * Read - Grants permission to list Amazon GuardDuty usage statistics over the last 30 days for the specified detector ID
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetUsageStatistics.html
   */
  GetUsageStatistics = "guardduty:GetUsageStatistics",

  /**
   * Write - Grants permission to invite other AWS accounts to enable GuardDuty and become GuardDuty member accounts
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html
   */
  InviteMembers = "guardduty:InviteMembers",

  /**
   * List - Grants permission to retrieve a list of GuardDuty detectors
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html
   */
  ListDetectors = "guardduty:ListDetectors",

  /**
   * List - Grants permission to retrieve a list of GuardDuty filters
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFilters.html
   */
  ListFilters = "guardduty:ListFilters",

  /**
   * List - Grants permission to retrieve a list of GuardDuty findings
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFindings.html
   */
  ListFindings = "guardduty:ListFindings",

  /**
   * List - Grants permission to retrieve a list of GuardDuty IPSets
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListIPSets.html
   */
  ListIPSets = "guardduty:ListIPSets",

  /**
   * List - Grants permission to retrieve a list of all of the GuardDuty membership invitations that were sent to an AWS account
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListInvitations.html
   */
  ListInvitations = "guardduty:ListInvitations",

  /**
   * List - Grants permission to retrieve a list of GuardDuty member accounts associated with an administrator account
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListMembers.html
   */
  ListMembers = "guardduty:ListMembers",

  /**
   * List - Grants permission to list details about the organization delegated administrator for GuardDuty
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListOrganizationAdminAccounts.html
   */
  ListOrganizationAdminAccounts = "guardduty:ListOrganizationAdminAccounts",

  /**
   * List - Grants permission to retrieve a list of publishing destinations
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListPublishingDestinations.html
   */
  ListPublishingDestinations = "guardduty:ListPublishingDestinations",

  /**
   * Read - Grants permission to retrieve a list of tags associated with a GuardDuty resource
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.detector `GuarddutyResource.detector`} 
   * - {@link GuarddutyResource.filter `GuarddutyResource.filter`} 
   * - {@link GuarddutyResource.ipset `GuarddutyResource.ipset`} 
   * - {@link GuarddutyResource.threatintelset `GuarddutyResource.threatintelset`} 
   */
  ListTagsForResource = "guardduty:ListTagsForResource",

  /**
   * List - Grants permission to retrieve a list of GuardDuty ThreatIntelSets
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListThreatIntelSets.html
   */
  ListThreatIntelSets = "guardduty:ListThreatIntelSets",

  /**
   * Write - Grants permission to a GuardDuty administrator account to monitor findings from GuardDuty member accounts
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StartMonitoringMembers.html
   */
  StartMonitoringMembers = "guardduty:StartMonitoringMembers",

  /**
   * Write - Grants permission to disable monitoring findings from member accounts
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StopMonitoringMembers.html
   */
  StopMonitoringMembers = "guardduty:StopMonitoringMembers",

  /**
   * Tagging - Grants permission to add tags to a GuardDuty resource
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.detector `GuarddutyResource.detector`} 
   * - {@link GuarddutyResource.filter `GuarddutyResource.filter`} 
   * - {@link GuarddutyResource.ipset `GuarddutyResource.ipset`} 
   * - {@link GuarddutyResource.threatintelset `GuarddutyResource.threatintelset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "guardduty:TagResource",

  /**
   * Write - Grants permission to unarchive GuardDuty findings
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UnarchiveFindings.html
   */
  UnarchiveFindings = "guardduty:UnarchiveFindings",

  /**
   * Tagging - Grants permission to remove tags from a GuardDuty resource
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.detector `GuarddutyResource.detector`} 
   * - {@link GuarddutyResource.filter `GuarddutyResource.filter`} 
   * - {@link GuarddutyResource.ipset `GuarddutyResource.ipset`} 
   * - {@link GuarddutyResource.threatintelset `GuarddutyResource.threatintelset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "guardduty:UntagResource",

  /**
   * Write - Grants permission to update GuardDuty detectors
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateDetector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.detector `GuarddutyResource.detector`} 
   */
  UpdateDetector = "guardduty:UpdateDetector",

  /**
   * Write - Grants permission to updates GuardDuty filters
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.filter `GuarddutyResource.filter`} 
   */
  UpdateFilter = "guardduty:UpdateFilter",

  /**
   * Write - Grants permission to update findings feedback to mark GuardDuty findings as useful or not useful
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFindingsFeedback.html
   */
  UpdateFindingsFeedback = "guardduty:UpdateFindingsFeedback",

  /**
   * Write - Grants permission to update GuardDuty IPSets
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.ipset `GuarddutyResource.ipset`} 
   */
  UpdateIPSet = "guardduty:UpdateIPSet",

  /**
   * Write - Grants permission to update which data sources are enabled for member accounts detectors
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateMemberDetectors.html
   */
  UpdateMemberDetectors = "guardduty:UpdateMemberDetectors",

  /**
   * Write - Grants permission to update the delegated administrator configuration associated with a GuardDuty detector
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateOrganizationConfiguration.html
   */
  UpdateOrganizationConfiguration = "guardduty:UpdateOrganizationConfiguration",

  /**
   * Write - Grants permission to update a publishing destination
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdatePublishingDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.publishingDestination `GuarddutyResource.publishingDestination`} 
   */
  UpdatePublishingDestination = "guardduty:UpdatePublishingDestination",

  /**
   * Write - Grants permission to updates the GuardDuty ThreatIntelSets
   * @see https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateThreatIntelSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.threatintelset `GuarddutyResource.threatintelset`} 
   */
  UpdateThreatIntelSet = "guardduty:UpdateThreatIntelSet",

  /**
   * * - Grant all guardduty permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonguardduty.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GuarddutyResource.filter `GuarddutyResource.filter`} 
   * - {@link GuarddutyResource.detector `GuarddutyResource.detector`} 
   * - {@link GuarddutyResource.ipset `GuarddutyResource.ipset`} 
   * - {@link GuarddutyResource.publishingDestination `GuarddutyResource.publishingDestination`} 
   * - {@link GuarddutyResource.threatintelset `GuarddutyResource.threatintelset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "guardduty:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonguardduty.html
 */
export const GuarddutyResource = {

  /**
   * @see https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  detector: (options: Partial<{partition: string, region: string, account: string, detectorId: string}> = {}) => `arn:${options.partition || '*'}:guardduty:${options.region || '*'}:${options.account || '*'}:detector/${options.detectorId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  filter: (options: Partial<{partition: string, region: string, account: string, detectorId: string, filterName: string}> = {}) => `arn:${options.partition || '*'}:guardduty:${options.region || '*'}:${options.account || '*'}:detector/${options.detectorId || '*'}/filter/${options.filterName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ipset: (options: Partial<{partition: string, region: string, account: string, detectorId: string, iPSetId: string}> = {}) => `arn:${options.partition || '*'}:guardduty:${options.region || '*'}:${options.account || '*'}:detector/${options.detectorId || '*'}/ipset/${options.iPSetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  threatintelset: (options: Partial<{partition: string, region: string, account: string, detectorId: string, threatIntelSetId: string}> = {}) => `arn:${options.partition || '*'}:guardduty:${options.region || '*'}:${options.account || '*'}:detector/${options.detectorId || '*'}/threatintelset/${options.threatIntelSetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources
   */
  publishingDestination: (options: Partial<{partition: string, region: string, account: string, detectorId: string, publishingDestinationId: string}> = {}) => `arn:${options.partition || '*'}:guardduty:${options.region || '*'}:${options.account || '*'}:detector/${options.detectorId || '*'}/publishingDestination/${options.publishingDestinationId || '*'}`,
}

