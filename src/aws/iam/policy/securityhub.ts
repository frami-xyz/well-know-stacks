/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecurityhub.html
 */
export enum SecurityhubAction {

  /**
   * Write - Grants permission to accept Security Hub invitations to become a member account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AcceptAdministratorInvitation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  AcceptAdministratorInvitation = "securityhub:AcceptAdministratorInvitation",

  /**
   * Write - Grants permission to accept Security Hub invitations to become a member account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AcceptInvitation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  AcceptInvitation = "securityhub:AcceptInvitation",

  /**
   * Write - Grants permission to disable standards in Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchDisableStandards.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  BatchDisableStandards = "securityhub:BatchDisableStandards",

  /**
   * Write - Grants permission to enable standards in Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchEnableStandards.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  BatchEnableStandards = "securityhub:BatchEnableStandards",

  /**
   * Read - Grants permission to get the association between a list of security controls and standards in batches
   * @see https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html
   */
  BatchGetStandardsControlAssociations = "securityhub:BatchGetStandardsControlAssociations",

  /**
   * Write - Grants permission to import findings into Security Hub from an integrated product
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.product `SecurityhubResource.product`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `securityhub:TargetAccount`: Filters access by the AwsAccountId field that is specified in the request ({@link https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-access.html#conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchImportFindings = "securityhub:BatchImportFindings",

  /**
   * Write - Grants permission to update customer-controlled fields for a selected set of Security Hub findings
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `securityhub:ASFFSyntaxPath/${ASFFSyntaxPath}`: Filters access by the specified fields and values in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-asffsyntaxpath documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchUpdateFindings = "securityhub:BatchUpdateFindings",

  /**
   * Write - Grants permission to update the association between a list of security controls and standards in batches
   * @see https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html
   */
  BatchUpdateStandardsControlAssociations = "securityhub:BatchUpdateStandardsControlAssociations",

  /**
   * Write - Grants permission to create custom actions in Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateActionTarget.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  CreateActionTarget = "securityhub:CreateActionTarget",

  /**
   * Write - Grants permission to create a finding aggregator, which contains the cross-Region finding aggregation configuration
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindingAggregator.html
   */
  CreateFindingAggregator = "securityhub:CreateFindingAggregator",

  /**
   * Write - Grants permission to create insights in Security Hub. Insights are collections of related findings
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateInsight.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  CreateInsight = "securityhub:CreateInsight",

  /**
   * Write - Grants permission to create member accounts in Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  CreateMembers = "securityhub:CreateMembers",

  /**
   * Write - Grants permission to decline Security Hub invitations to become a member account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeclineInvitations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DeclineInvitations = "securityhub:DeclineInvitations",

  /**
   * Write - Grants permission to delete custom actions in Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteActionTarget.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DeleteActionTarget = "securityhub:DeleteActionTarget",

  /**
   * Write - Grants permission to delete a finding aggregator, which disables finding aggregation across Regions
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteFindingAggregator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.findingAggregator `SecurityhubResource.findingAggregator`} 
   */
  DeleteFindingAggregator = "securityhub:DeleteFindingAggregator",

  /**
   * Write - Grants permission to delete insights from Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInsight.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DeleteInsight = "securityhub:DeleteInsight",

  /**
   * Write - Grants permission to delete Security Hub invitations to become a member account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInvitations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DeleteInvitations = "securityhub:DeleteInvitations",

  /**
   * Write - Grants permission to delete Security Hub member accounts
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DeleteMembers = "securityhub:DeleteMembers",

  /**
   * Read - Grants permission to retrieve a list of custom actions using the API
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeActionTargets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DescribeActionTargets = "securityhub:DescribeActionTargets",

  /**
   * Read - Grants permission to retrieve information about the hub resource in your account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeHub.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DescribeHub = "securityhub:DescribeHub",

  /**
   * Read - Grants permission to describe the organization configuration for Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeOrganizationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DescribeOrganizationConfiguration = "securityhub:DescribeOrganizationConfiguration",

  /**
   * Read - Grants permission to retrieve information about the available Security Hub product integrations
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeProducts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DescribeProducts = "securityhub:DescribeProducts",

  /**
   * Read - Grants permission to retrieve information about Security Hub standards
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DescribeStandards = "securityhub:DescribeStandards",

  /**
   * Read - Grants permission to retrieve information about Security Hub standards controls
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandardsControls.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DescribeStandardsControls = "securityhub:DescribeStandardsControls",

  /**
   * Write - Grants permission to disable the findings importing for a Security Hub integrated product
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableImportFindingsForProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DisableImportFindingsForProduct = "securityhub:DisableImportFindingsForProduct",

  /**
   * Write - Grants permission to remove the Security Hub administrator account for your organization
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableOrganizationAdminAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DisableOrganizationAdminAccount = "securityhub:DisableOrganizationAdminAccount",

  /**
   * Write - Grants permission to disable Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableSecurityHub.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DisableSecurityHub = "securityhub:DisableSecurityHub",

  /**
   * Write - Grants permission to a Security Hub member account to disassociate from the associated administrator account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateFromAdministratorAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DisassociateFromAdministratorAccount = "securityhub:DisassociateFromAdministratorAccount",

  /**
   * Write - Grants permission to a Security Hub member account to disassociate from the associated master account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateFromMasterAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DisassociateFromMasterAccount = "securityhub:DisassociateFromMasterAccount",

  /**
   * Write - Grants permission to disassociate Security Hub member accounts from the associated administrator account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  DisassociateMembers = "securityhub:DisassociateMembers",

  /**
   * Write - Grants permission to enable the findings importing for a Security Hub integrated product
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableImportFindingsForProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  EnableImportFindingsForProduct = "securityhub:EnableImportFindingsForProduct",

  /**
   * Write - Grants permission to designate a Security Hub administrator account for your organization
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableOrganizationAdminAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  EnableOrganizationAdminAccount = "securityhub:EnableOrganizationAdminAccount",

  /**
   * Write - Grants permission to enable Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableSecurityHub.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  EnableSecurityHub = "securityhub:EnableSecurityHub",

  /**
   * Read - Grants permission to retrieve insight results by providing a set of filters instead of an insight ARN
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetAdhocInsightResults.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetAdhocInsightResults = "securityhub:GetAdhocInsightResults",

  /**
   * Read - Grants permission to retrieve details about the Security Hub administrator account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetAdministratorAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetAdministratorAccount = "securityhub:GetAdministratorAccount",

  /**
   * Read - Grants permission to retrieve a security score and counts of finding and control statuses for a security standard
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetControlFindingSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetControlFindingSummary = "securityhub:GetControlFindingSummary",

  /**
   * List - Grants permission to retrieve a list of the standards that are enabled in Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetEnabledStandards.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetEnabledStandards = "securityhub:GetEnabledStandards",

  /**
   * Read - Grants permission to retrieve details for a finding aggregator, which configures finding aggregation across Regions
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindingAggregator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.findingAggregator `SecurityhubResource.findingAggregator`} 
   */
  GetFindingAggregator = "securityhub:GetFindingAggregator",

  /**
   * Read - Grants permission to retrieve a list of findings from Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetFindings = "securityhub:GetFindings",

  /**
   * Read - Grants permission to retrieve the end date for an account's free trial of Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFreeTrialEndDate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetFreeTrialEndDate = "securityhub:GetFreeTrialEndDate",

  /**
   * Read - Grants permission to retrieve information about Security Hub usage during the free trial period
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFreeTrialUsage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetFreeTrialUsage = "securityhub:GetFreeTrialUsage",

  /**
   * Read - Grants permission to retrieve an insight finding trend from Security Hub in order to generate a graph
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsightFindingTrend.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetInsightFindingTrend = "securityhub:GetInsightFindingTrend",

  /**
   * Read - Grants permission to retrieve insight results from Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsightResults.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetInsightResults = "securityhub:GetInsightResults",

  /**
   * List - Grants permission to retrieve Security Hub insights
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsights.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetInsights = "securityhub:GetInsights",

  /**
   * Read - Grants permission to retrieve the count of Security Hub membership invitations sent to the account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInvitationsCount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetInvitationsCount = "securityhub:GetInvitationsCount",

  /**
   * Read - Grants permission to retrieve details about the Security Hub master account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMasterAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetMasterAccount = "securityhub:GetMasterAccount",

  /**
   * Read - Grants permission to retrieve the details of Security Hub member accounts
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetMembers = "securityhub:GetMembers",

  /**
   * Read - Grants permission to retrieve information about Security Hub usage by accounts
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetUsage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  GetUsage = "securityhub:GetUsage",

  /**
   * Write - Grants permission to invite other AWS accounts to become Security Hub member accounts
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_InviteMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  InviteMembers = "securityhub:InviteMembers",

  /**
   * Read - Grants permission to retrieve a list of controls for a standard, including the control IDs, statuses and finding counts
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListControlEvaluationSummaries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  ListControlEvaluationSummaries = "securityhub:ListControlEvaluationSummaries",

  /**
   * List - Grants permission to retrieve the Security Hub integrated products that are currently enabled
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListEnabledProductsForImport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  ListEnabledProductsForImport = "securityhub:ListEnabledProductsForImport",

  /**
   * List - Grants permission to retrieve a list of finding aggregators, which contain the cross-Region finding aggregation configuration
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindingAggregator.html
   */
  ListFindingAggregators = "securityhub:ListFindingAggregators",

  /**
   * List - Grants permission to retrieve the Security Hub invitations sent to the account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListInvitations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  ListInvitations = "securityhub:ListInvitations",

  /**
   * List - Grants permission to retrieve details about Security Hub member accounts associated with the administrator account
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  ListMembers = "securityhub:ListMembers",

  /**
   * List - Grants permission to list the Security Hub administrator accounts for your organization
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListOrganizationAdminAccounts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  ListOrganizationAdminAccounts = "securityhub:ListOrganizationAdminAccounts",

  /**
   * List - Grants permission to retrieve a list of security control definitions, which contain cross-Region control details for security controls
   * @see https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html
   */
  ListSecurityControlDefinitions = "securityhub:ListSecurityControlDefinitions",

  /**
   * Read - Grants permission to list of tags associated with a resource
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  ListTagsForResource = "securityhub:ListTagsForResource",

  /**
   * Read - Grants permission to use a custom action to send Security Hub findings to Amazon EventBridge
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_SendFindingEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  SendFindingEvents = "securityhub:SendFindingEvents",

  /**
   * Read - Grants permission to use a custom action to send Security Hub insights to Amazon EventBridge
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_SendInsightEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  SendInsightEvents = "securityhub:SendInsightEvents",

  /**
   * Tagging - Grants permission to add tags to a Security Hub resource
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  TagResource = "securityhub:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a Security Hub resource
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  UntagResource = "securityhub:UntagResource",

  /**
   * Write - Grants permission to update custom actions in Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateActionTarget.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  UpdateActionTarget = "securityhub:UpdateActionTarget",

  /**
   * Write - Grants permission to update a finding aggregator, which contains the cross-Region finding aggregation configuration
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindingAggregator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.findingAggregator `SecurityhubResource.findingAggregator`} 
   */
  UpdateFindingAggregator = "securityhub:UpdateFindingAggregator",

  /**
   * Write - Grants permission to update Security Hub findings
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  UpdateFindings = "securityhub:UpdateFindings",

  /**
   * Write - Grants permission to update insights in Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateInsight.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  UpdateInsight = "securityhub:UpdateInsight",

  /**
   * Write - Grants permission to update the organization configuration for Security Hub
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateOrganizationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  UpdateOrganizationConfiguration = "securityhub:UpdateOrganizationConfiguration",

  /**
   * Write - Grants permission to update Security Hub configuration
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateSecurityHubConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  UpdateSecurityHubConfiguration = "securityhub:UpdateSecurityHubConfiguration",

  /**
   * Write - Grants permission to update Security Hub standards controls
   * @see https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateStandardsControl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   */
  UpdateStandardsControl = "securityhub:UpdateStandardsControl",

  /**
   * * - Grant all securityhub permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecurityhub.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecurityhubResource.hub `SecurityhubResource.hub`} 
   * - {@link SecurityhubResource.product `SecurityhubResource.product`} 
   * - {@link SecurityhubResource.findingAggregator `SecurityhubResource.findingAggregator`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `securityhub:TargetAccount`: Filters access by the AwsAccountId field that is specified in the request ({@link https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-access.html#conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `securityhub:ASFFSyntaxPath/${ASFFSyntaxPath}`: Filters access by the specified fields and values in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-asffsyntaxpath documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "securityhub:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecurityhub.html
 */
export const SecurityhubResource = {

  /**
   * @see https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-access.html#resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  hub: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:securityhub:${options.region || '*'}:${options.account || '*'}:hub/default`,

  /**
   * @see https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-access.html#resources
   */
  product: (options: Partial<{partition: string, region: string, account: string, company: string, productId: string}> = {}) => `arn:${options.partition || '*'}:securityhub:${options.region || '*'}:${options.account || '*'}:product/${options.company || '*'}/${options.productId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-access.html#resources
   */
  findingAggregator: (options: Partial<{partition: string, region: string, account: string, findingAggregatorId: string}> = {}) => `arn:${options.partition || '*'}:securityhub:${options.region || '*'}:${options.account || '*'}:finding-aggregator/${options.findingAggregatorId || '*'}`,
}

