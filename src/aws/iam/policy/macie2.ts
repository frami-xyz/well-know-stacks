/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmacie.html
 */
export enum Macie2Action {

  /**
   * Write - Grants permission to accept an Amazon Macie membership invitation
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/invitations-accept.html
   */
  AcceptInvitation = "macie2:AcceptInvitation",

  /**
   * Read - Grants permission to retrieve information about one or more custom data identifiers
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-get.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.customDataIdentifier `Macie2Resource.customDataIdentifier`} 
   */
  BatchGetCustomDataIdentifiers = "macie2:BatchGetCustomDataIdentifiers",

  /**
   * Write - Grants permission to create and define the settings for a sensitive data discovery job
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/jobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.classificationJob `Macie2Resource.classificationJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateClassificationJob = "macie2:CreateClassificationJob",

  /**
   * Write - Grants permission to create and define the settings for a custom data identifier
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.customDataIdentifier `Macie2Resource.customDataIdentifier`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCustomDataIdentifier = "macie2:CreateCustomDataIdentifier",

  /**
   * Write - Grants permission to create and define the settings for a findings filter
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.findingsFilter `Macie2Resource.findingsFilter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateFindingsFilter = "macie2:CreateFindingsFilter",

  /**
   * Write - Grants permission to send an Amazon Macie membership invitation
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html
   */
  CreateInvitations = "macie2:CreateInvitations",

  /**
   * Write - Grants permission to associate an account with an Amazon Macie administrator account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/members.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.member `Macie2Resource.member`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateMember = "macie2:CreateMember",

  /**
   * Write - Grants permission to create sample findings
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/findings-sample.html
   */
  CreateSampleFindings = "macie2:CreateSampleFindings",

  /**
   * Write - Grants permission to decline Amazon Macie membership invitations
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/invitations-decline.html
   */
  DeclineInvitations = "macie2:DeclineInvitations",

  /**
   * Write - Grants permission to delete a custom data identifier
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.customDataIdentifier `Macie2Resource.customDataIdentifier`} 
   */
  DeleteCustomDataIdentifier = "macie2:DeleteCustomDataIdentifier",

  /**
   * Write - Grants permission to delete a findings filter
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.findingsFilter `Macie2Resource.findingsFilter`} 
   */
  DeleteFindingsFilter = "macie2:DeleteFindingsFilter",

  /**
   * Write - Grants permission to delete Amazon Macie membership invitations
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/invitations-delete.html
   */
  DeleteInvitations = "macie2:DeleteInvitations",

  /**
   * Write - Grants permission to delete the association between an Amazon Macie administrator account and an account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.member `Macie2Resource.member`} 
   */
  DeleteMember = "macie2:DeleteMember",

  /**
   * Read - Grants permission to retrieve statistical data and other information about S3 buckets that Amazon Macie monitors and analyzes
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html
   */
  DescribeBuckets = "macie2:DescribeBuckets",

  /**
   * Read - Grants permission to retrieve information about the status and settings for a sensitive data discovery job
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/jobs-jobid.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.classificationJob `Macie2Resource.classificationJob`} 
   */
  DescribeClassificationJob = "macie2:DescribeClassificationJob",

  /**
   * Read - Grants permission to retrieve information about the Amazon Macie configuration settings for an AWS organization
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html
   */
  DescribeOrganizationConfiguration = "macie2:DescribeOrganizationConfiguration",

  /**
   * Write - Grants permission to disable an Amazon Macie account, which also deletes Macie resources for the account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  DisableMacie = "macie2:DisableMacie",

  /**
   * Write - Grants permission to disable an account as the delegated Amazon Macie administrator account for an AWS organization
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  DisableOrganizationAdminAccount = "macie2:DisableOrganizationAdminAccount",

  /**
   * Write - Grants an Amazon Macie member account with permission to disassociate from its Macie administrator account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/administrator-disassociate.html
   */
  DisassociateFromAdministratorAccount = "macie2:DisassociateFromAdministratorAccount",

  /**
   * Write - (Deprecated) Grants an Amazon Macie member account with permission to disassociate from its Macie administrator account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/master-disassociate.html
   */
  DisassociateFromMasterAccount = "macie2:DisassociateFromMasterAccount",

  /**
   * Write - Grants an Amazon Macie administrator account with permission to disassociate from a Macie member account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/members-disassociate-id.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.member `Macie2Resource.member`} 
   */
  DisassociateMember = "macie2:DisassociateMember",

  /**
   * Write - Grants permission to enable and specify the configuration settings for a new Amazon Macie account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  EnableMacie = "macie2:EnableMacie",

  /**
   * Write - Grants permission to enable an account as the delegated Amazon Macie administrator account for an AWS organization
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  EnableOrganizationAdminAccount = "macie2:EnableOrganizationAdminAccount",

  /**
   * Read - Grants permission to retrieve information about the Amazon Macie administrator account for an account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/administrator.html
   */
  GetAdministratorAccount = "macie2:GetAdministratorAccount",

  /**
   * Read - Grants permission to retrieve aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3-statistics.html
   */
  GetBucketStatistics = "macie2:GetBucketStatistics",

  /**
   * Read - Grants permission to retrieve the settings for exporting sensitive data discovery results
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html
   */
  GetClassificationExportConfiguration = "macie2:GetClassificationExportConfiguration",

  /**
   * Read - Grants permission to retrieve information about the settings for a custom data identifier
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.customDataIdentifier `Macie2Resource.customDataIdentifier`} 
   */
  GetCustomDataIdentifier = "macie2:GetCustomDataIdentifier",

  /**
   * Read - Grants permission to retrieve aggregated statistical data about findings
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/findings-statistics.html
   */
  GetFindingStatistics = "macie2:GetFindingStatistics",

  /**
   * Read - Grants permission to retrieve the details of one or more findings
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/findings-describe.html
   */
  GetFindings = "macie2:GetFindings",

  /**
   * Read - Grants permission to retrieve information about the settings for a findings filter
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.findingsFilter `Macie2Resource.findingsFilter`} 
   */
  GetFindingsFilter = "macie2:GetFindingsFilter",

  /**
   * Read - Grants permission to retrieve the configuration settings for publishing findings to AWS Security Hub
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/findings-publication-configuration.html
   */
  GetFindingsPublicationConfiguration = "macie2:GetFindingsPublicationConfiguration",

  /**
   * Read - Grants permission to retrieve the count of Amazon Macie membership invitations that were received by an account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/invitations-count.html
   */
  GetInvitationsCount = "macie2:GetInvitationsCount",

  /**
   * Read - Grants permission to retrieve information about the status and configuration settings for an Amazon Macie account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  GetMacieSession = "macie2:GetMacieSession",

  /**
   * Read - (Deprecated) Grants permission to retrieve information about the Amazon Macie administrator account for an account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/master.html
   */
  GetMasterAccount = "macie2:GetMasterAccount",

  /**
   * Read - Grants permission to retrieve information about an account that's associated with an Amazon Macie administrator account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.member `Macie2Resource.member`} 
   */
  GetMember = "macie2:GetMember",

  /**
   * Read - Grants permission to retrieve quotas and aggregated usage data for one or more accounts
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/usage-statistics.html
   */
  GetUsageStatistics = "macie2:GetUsageStatistics",

  /**
   * Read - Grants permission to retrieve aggregated usage data for an account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/usage.html
   */
  GetUsageTotals = "macie2:GetUsageTotals",

  /**
   * List - Grants permission to retrieve a subset of information about the status and settings for one or more sensitive data discovery jobs
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/jobs-list.html
   */
  ListClassificationJobs = "macie2:ListClassificationJobs",

  /**
   * List - Grants permission to retrieve information about all custom data identifiers
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-list.html
   */
  ListCustomDataIdentifiers = "macie2:ListCustomDataIdentifiers",

  /**
   * List - Grants permission to retrieve a subset of information about one or more findings
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/findings.html
   */
  ListFindings = "macie2:ListFindings",

  /**
   * List - Grants permission to retrieve information about all findings filters
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters.html
   */
  ListFindingsFilters = "macie2:ListFindingsFilters",

  /**
   * List - Grants permission to retrieve information about all the Amazon Macie membership invitations that were received by an account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html
   */
  ListInvitations = "macie2:ListInvitations",

  /**
   * List - Grants permission to retrieve information about managed data identifiers
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/managed-data-identifiers-list.html
   */
  ListManagedDataIdentifiers = "macie2:ListManagedDataIdentifiers",

  /**
   * List - Grants permission to retrieve information about the Amazon Macie member accounts that are associated with a Macie administrator account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/members.html
   */
  ListMembers = "macie2:ListMembers",

  /**
   * List - Grants permission to retrieve information about the delegated, Amazon Macie administrator account for an AWS organization
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  ListOrganizationAdminAccounts = "macie2:ListOrganizationAdminAccounts",

  /**
   * Read - Grants permission to retrieve the tags for an Amazon Macie resource
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html
   */
  ListTagsForResource = "macie2:ListTagsForResource",

  /**
   * Write - Grants permission to create or update the settings for storing sensitive data discovery results
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html
   */
  PutClassificationExportConfiguration = "macie2:PutClassificationExportConfiguration",

  /**
   * Write - Grants permission to update the configuration settings for publishing findings to AWS Security Hub
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/findings-publication-configuration.html
   */
  PutFindingsPublicationConfiguration = "macie2:PutFindingsPublicationConfiguration",

  /**
   * Read - Grants permission to retrieve statistical data and other information about AWS resources that Amazon Macie monitors and analyzes
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/datasources-search-resources.html
   */
  SearchResources = "macie2:SearchResources",

  /**
   * Tagging - Grants permission to add or update the tags for an Amazon Macie resource
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "macie2:TagResource",

  /**
   * Write - Grants permission to test a custom data identifier
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-test.html
   */
  TestCustomDataIdentifier = "macie2:TestCustomDataIdentifier",

  /**
   * Tagging - Grants permission to remove tags from an Amazon Macie resource
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "macie2:UntagResource",

  /**
   * Write - Grants permission to change the status of a sensitive data discovery job
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/jobs-jobid.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.classificationJob `Macie2Resource.classificationJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateClassificationJob = "macie2:UpdateClassificationJob",

  /**
   * Write - Grants permission to update the settings for a findings filter
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.findingsFilter `Macie2Resource.findingsFilter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateFindingsFilter = "macie2:UpdateFindingsFilter",

  /**
   * Write - Grants permission to suspend or re-enable an Amazon Macie account, or update the configuration settings for a Macie account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  UpdateMacieSession = "macie2:UpdateMacieSession",

  /**
   * Write - Grants an Amazon Macie administrator account with permission to suspend or re-enable a Macie member account
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/macie-members-id.html
   */
  UpdateMemberSession = "macie2:UpdateMemberSession",

  /**
   * Write - Grants permission to update Amazon Macie configuration settings for an AWS organization
   * @see https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html
   */
  UpdateOrganizationConfiguration = "macie2:UpdateOrganizationConfiguration",

  /**
   * * - Grant all macie2 permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmacie.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Macie2Resource.customDataIdentifier `Macie2Resource.customDataIdentifier`} 
   * - {@link Macie2Resource.classificationJob `Macie2Resource.classificationJob`} 
   * - {@link Macie2Resource.findingsFilter `Macie2Resource.findingsFilter`} 
   * - {@link Macie2Resource.member `Macie2Resource.member`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "macie2:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmacie.html
 */
export const Macie2Resource = {

  /**
   * @see https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs that are associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  classificationJob: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:macie2:${options.region || '*'}:${options.account || '*'}:classification-job/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs that are associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  customDataIdentifier: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:macie2:${options.region || '*'}:${options.account || '*'}:custom-data-identifier/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs that are associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  findingsFilter: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:macie2:${options.region || '*'}:${options.account || '*'}:findings-filter/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs that are associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  member: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:macie2:${options.region || '*'}:${options.account || '*'}:member/${options.resourceId || '*'}`,
}

