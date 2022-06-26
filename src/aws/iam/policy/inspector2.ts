/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector2.html
 */
export enum Inspector2Action {

  /**
   * Write - Grants permission to associate an account with an Amazon Inspector administrator account
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_AssociateMember.html
   */
  AssociateMember = "inspector2:AssociateMember",

  /**
   * Read - Grants permission to retrieve information about Amazon Inspector accounts for an account
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetAccountStatus.html
   */
  BatchGetAccountStatus = "inspector2:BatchGetAccountStatus",

  /**
   * Read - Grants permission to retrieve free trial period eligibility about Amazon Inspector accounts for an account
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchGetFreeTrialInfo.html
   */
  BatchGetFreeTrialInfo = "inspector2:BatchGetFreeTrialInfo",

  /**
   * Write - Grants permission to cancel the generation of a findings report
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_CancelFindingsReport.html
   */
  CancelFindingsReport = "inspector2:CancelFindingsReport",

  /**
   * Write - Grants permission to create and define the settings for a findings filter
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_CreateFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Inspector2Resource.filter `Inspector2Resource.filter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFilter = "inspector2:CreateFilter",

  /**
   * Write - Grants permission to request the generation of a findings report
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_CreateFindingsReport.html
   */
  CreateFindingsReport = "inspector2:CreateFindingsReport",

  /**
   * Write - Grants permission to delete a findings filter
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_DeleteFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Inspector2Resource.filter `Inspector2Resource.filter`} 
   */
  DeleteFilter = "inspector2:DeleteFilter",

  /**
   * Read - Grants permission to retrieve information about the Amazon Inspector configuration settings for an AWS organization
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_DescribeOrganizationConfiguration.html
   */
  DescribeOrganizationConfiguration = "inspector2:DescribeOrganizationConfiguration",

  /**
   * Write - Grants permission to disable an Amazon Inspector account
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_Disable.html
   */
  Disable = "inspector2:Disable",

  /**
   * Write - Grants permission to disable an account as the delegated Amazon Inspector administrator account for an AWS organization
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_DisableDelegatedAdminAccount.html
   */
  DisableDelegatedAdminAccount = "inspector2:DisableDelegatedAdminAccount",

  /**
   * Write - Grants permission to an Amazon Inspector administrator account to disassociate from an Inspector member account
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_DisassociateMember.html
   */
  DisassociateMember = "inspector2:DisassociateMember",

  /**
   * Write - Grants permission to enable and specify the configuration settings for a new Amazon Inspector account
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_Enable.html
   */
  Enable = "inspector2:Enable",

  /**
   * Write - Grants permission to enable an account as the delegated Amazon Inspector administrator account for an AWS organization
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_EnableDelegatedAdminAccount.html
   */
  EnableDelegatedAdminAccount = "inspector2:EnableDelegatedAdminAccount",

  /**
   * Read - Grants permission to retrieve information about the Amazon Inspector administrator account for an account
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetDelegatedAdminAccount.html
   */
  GetDelegatedAdminAccount = "inspector2:GetDelegatedAdminAccount",

  /**
   * Read - Grants permission to retrieve status for a requested findings report
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetFindingsReportStatus.html
   */
  GetFindingsReportStatus = "inspector2:GetFindingsReportStatus",

  /**
   * Read - Grants permission to retrieve information about an account that's associated with an Amazon Inspector administrator account
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_GetMember.html
   */
  GetMember = "inspector2:GetMember",

  /**
   * List - Grants permission to retrieve feature configuration permissions associated with an Amazon Inspector account within an organization
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListAccountPermissions.html
   */
  ListAccountPermissions = "inspector2:ListAccountPermissions",

  /**
   * List - Grants permission to retrieve the types of statistics Amazon Inspector can generate for resources Inspector monitors
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCoverage.html
   */
  ListCoverage = "inspector2:ListCoverage",

  /**
   * List - Grants permission to retrieve statistical data and other information about the resources Amazon Inspector monitors
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListCoverageStatistics.html
   */
  ListCoverageStatistics = "inspector2:ListCoverageStatistics",

  /**
   * List - Grants permission to retrieve information about the delegated Amazon Inspector administrator account for an AWS organization
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListDelegatedAdminAccounts.html
   */
  ListDelegatedAdminAccounts = "inspector2:ListDelegatedAdminAccounts",

  /**
   * List - Grants permission to retrieve information about all findings filters
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListFilters.html
   */
  ListFilters = "inspector2:ListFilters",

  /**
   * List - Grants permission to retrieve statistical data and other information about Amazon Inspector findings
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListFindingAggregations.html
   */
  ListFindingAggregations = "inspector2:ListFindingAggregations",

  /**
   * List - Grants permission to retrieve a subset of information about one or more findings
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListFindings.html
   */
  ListFindings = "inspector2:ListFindings",

  /**
   * List - Grants permission to retrieve information about the Amazon Inspector member accounts that are associated with an Inspector administrator account
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListMembers.html
   */
  ListMembers = "inspector2:ListMembers",

  /**
   * Read - Grants permission to retrieve the tags for an Amazon Inspector resource
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "inspector2:ListTagsForResource",

  /**
   * List - Grants permission to retrieve aggregated usage data for an account
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_ListUsageTotals.html
   */
  ListUsageTotals = "inspector2:ListUsageTotals",

  /**
   * Tagging - Grants permission to add or update the tags for an Amazon Inspector resource
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "inspector2:TagResource",

  /**
   * Tagging - Grants permission to remove tags from an Amazon Inspector resource
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "inspector2:UntagResource",

  /**
   * Write - Grants permission to update the settings for a findings filter
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Inspector2Resource.filter `Inspector2Resource.filter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateFilter = "inspector2:UpdateFilter",

  /**
   * Write - Grants permission to update Amazon Inspector configuration settings for an AWS organization
   * @see https://docs.aws.amazon.com/inspector/v2/APIReference/API_UpdateOrganizationConfiguration.html
   */
  UpdateOrganizationConfiguration = "inspector2:UpdateOrganizationConfiguration",

  /**
   * * - Grant all inspector2 permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector2.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Inspector2Resource.filter `Inspector2Resource.filter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "inspector2:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector2.html
 */
export const Inspector2Resource = {

  /**
   * @see https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  filter: (options: Partial<{partition: string, region: string, account: string, ownerId: string, filterId: string}> = {}) => `arn:${options.partition || '*'}:inspector2:${options.region || '*'}:${options.account || '*'}:owner/${options.ownerId || '*'}/filter/${options.filterId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html
   */
  finding: (options: Partial<{partition: string, region: string, account: string, findingId: string}> = {}) => `arn:${options.partition || '*'}:inspector2:${options.region || '*'}:${options.account || '*'}:finding/${options.findingId || '*'}`,
}

