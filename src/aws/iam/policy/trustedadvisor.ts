/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstrustedadvisor.html
 */
export enum TrustedadvisorAction {

  /**
   * Read - Grants permission to view the AWS Support plan and various AWS Trusted Advisor preferences
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeAccount = "trustedadvisor:DescribeAccount",

  /**
   * Read - Grants permission to view if the AWS account has enabled or disabled AWS Trusted Advisor
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeAccountAccess = "trustedadvisor:DescribeAccountAccess",

  /**
   * Read - Grants permission to view details for the check items
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TrustedadvisorResource.checks `TrustedadvisorResource.checks`} 
   */
  DescribeCheckItems = "trustedadvisor:DescribeCheckItems",

  /**
   * Read - Grants permission to view the refresh statuses for AWS Trusted Advisor checks
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TrustedadvisorResource.checks `TrustedadvisorResource.checks`} 
   */
  DescribeCheckRefreshStatuses = "trustedadvisor:DescribeCheckRefreshStatuses",

  /**
   * Read - Grants permission to view AWS Trusted Advisor check summaries
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TrustedadvisorResource.checks `TrustedadvisorResource.checks`} 
   */
  DescribeCheckSummaries = "trustedadvisor:DescribeCheckSummaries",

  /**
   * Read - Grants permission to view details for AWS Trusted Advisor checks
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeChecks = "trustedadvisor:DescribeChecks",

  /**
   * Read - Grants permission to view the notification preferences for the AWS account
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeNotificationPreferences = "trustedadvisor:DescribeNotificationPreferences",

  /**
   * Read - Grants permission to view if the AWS account meets the requirements to enable the organizational view feature
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeOrganization = "trustedadvisor:DescribeOrganization",

  /**
   * Read - Grants permission to view the linked AWS accounts that are in the organization
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeOrganizationAccounts = "trustedadvisor:DescribeOrganizationAccounts",

  /**
   * Read - Grants permission to view details for organizational view reports, such as the report name, runtime, date created, status, and format
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeReports = "trustedadvisor:DescribeReports",

  /**
   * Read - Grants permission to view risk details in AWS Trusted Advisor Priority
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeRisk = "trustedadvisor:DescribeRisk",

  /**
   * Read - Grants permission to view affected resources for a risk in AWS Trusted Advisor Priority
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeRiskResources = "trustedadvisor:DescribeRiskResources",

  /**
   * Read - Grants permission to view risks in AWS Trusted Advisor Priority
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeRisks = "trustedadvisor:DescribeRisks",

  /**
   * Read - Grants permission to view information about organizational view reports, such as the AWS Regions, check categories, check names, and resource statuses
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DescribeServiceMetadata = "trustedadvisor:DescribeServiceMetadata",

  /**
   * Read - Grants permission to download a file that contains details about the risk in AWS Trusted Advisor Priority
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  DownloadRisk = "trustedadvisor:DownloadRisk",

  /**
   * Write - Grants permission to exclude recommendations for AWS Trusted Advisor checks
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TrustedadvisorResource.checks `TrustedadvisorResource.checks`} 
   */
  ExcludeCheckItems = "trustedadvisor:ExcludeCheckItems",

  /**
   * Write - Grants permission to create a report for AWS Trusted Advisor checks in your organization
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  GenerateReport = "trustedadvisor:GenerateReport",

  /**
   * Write - Grants permission to include recommendations for AWS Trusted Advisor checks
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TrustedadvisorResource.checks `TrustedadvisorResource.checks`} 
   */
  IncludeCheckItems = "trustedadvisor:IncludeCheckItems",

  /**
   * Read - Grants permission to view, in the Trusted Advisor console, all of the accounts in an AWS organization that are contained by a root or organizational unit (OU)
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  ListAccountsForParent = "trustedadvisor:ListAccountsForParent",

  /**
   * Read - Grants permission to view, in the Trusted Advisor console, all of the organizational units (OUs) in a parent organizational unit or root
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  ListOrganizationalUnitsForParent = "trustedadvisor:ListOrganizationalUnitsForParent",

  /**
   * Read - Grants permission to view, in the Trusted Advisor console, all of the roots that are defined in an AWS organization
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  ListRoots = "trustedadvisor:ListRoots",

  /**
   * Write - Grants permission to refresh an AWS Trusted Advisor check
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TrustedadvisorResource.checks `TrustedadvisorResource.checks`} 
   */
  RefreshCheck = "trustedadvisor:RefreshCheck",

  /**
   * Write - Grants permission to enable or disable AWS Trusted Advisor for the account
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  SetAccountAccess = "trustedadvisor:SetAccountAccess",

  /**
   * Write - Grants permission to enable the organizational view feature for AWS Trusted Advisor
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  SetOrganizationAccess = "trustedadvisor:SetOrganizationAccess",

  /**
   * Write - Grants permission to update notification preferences for AWS Trusted Advisor
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  UpdateNotificationPreferences = "trustedadvisor:UpdateNotificationPreferences",

  /**
   * Write - Grants permission to update the risk status in AWS Trusted Advisor Priority
   * @see https://docs.aws.amazon.com/awssupport/latest/user/security-trusted-advisor.html#trusted-advisor-operations
   */
  UpdateRiskStatus = "trustedadvisor:UpdateRiskStatus",

  /**
   * * - Grant all trustedadvisor permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstrustedadvisor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link TrustedadvisorResource.checks `TrustedadvisorResource.checks`} 
   */
  All = "trustedadvisor:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstrustedadvisor.html
 */
export const TrustedadvisorResource = {

  /**
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_TrustedAdvisorCheckDescription.html
   */
  checks: (options: Partial<{partition: string, region: string, account: string, categoryCode: string, checkId: string}> = {}) => `arn:${options.partition || '*'}:trustedadvisor:${options.region || '*'}:${options.account || '*'}:checks/${options.categoryCode || '*'}/${options.checkId || '*'}`,
}

