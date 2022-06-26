/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html
 */
export enum SupportAction {

  /**
   * Write - Adds one or more attachments to an AWS Support case.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddAttachmentsToSet.html
   */
  AddAttachmentsToSet = "support:AddAttachmentsToSet",

  /**
   * Write - Adds a customer communication to an AWS Support case.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddCommunicationToCase.html
   */
  AddCommunicationToCase = "support:AddCommunicationToCase",

  /**
   * Write - Creates a new AWS Support case.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CreateCase.html
   */
  CreateCase = "support:CreateCase",

  /**
   * Read - Returns the description for an attachment.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeAttachment.html
   */
  DescribeAttachment = "support:DescribeAttachment",

  /**
   * Read - This is an internally managed function which allows secondary services to read AWS Support case attributes.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html
   */
  DescribeCaseAttributes = "support:DescribeCaseAttributes",

  /**
   * Read - Returns a list of AWS Support cases that matches the given inputs.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCases.html
   */
  DescribeCases = "support:DescribeCases",

  /**
   * Read - Returns the communications and attachments for one or more AWS Support cases.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCommunications.html
   */
  DescribeCommunications = "support:DescribeCommunications",

  /**
   * Read - Returns issue types for AWS Support cases.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html
   */
  DescribeIssueTypes = "support:DescribeIssueTypes",

  /**
   * Read - Returns the current list of AWS services and categories that applies to each service.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeServices.html
   */
  DescribeServices = "support:DescribeServices",

  /**
   * Read - Returns the list of severity levels that can be assigned to an AWS Support case.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeSeverityLevels.html
   */
  DescribeSeverityLevels = "support:DescribeSeverityLevels",

  /**
   * Read - Returns the support level for an AWS Account identifier.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html
   */
  DescribeSupportLevel = "support:DescribeSupportLevel",

  /**
   * Read - Returns the status of a Trusted Advisor refresh check based on a list of check identifiers.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckRefreshStatuses.html
   */
  DescribeTrustedAdvisorCheckRefreshStatuses = "support:DescribeTrustedAdvisorCheckRefreshStatuses",

  /**
   * Read - Returns the results of the Trusted Advisor check that has the specified check identifier.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckResult.html
   */
  DescribeTrustedAdvisorCheckResult = "support:DescribeTrustedAdvisorCheckResult",

  /**
   * Read - Returns the summaries of the results of the Trusted Advisor checks that have the specified check identifiers.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckSummaries.html
   */
  DescribeTrustedAdvisorCheckSummaries = "support:DescribeTrustedAdvisorCheckSummaries",

  /**
   * Read - Returns a list of all available Trusted Advisor checks, including name, identifier, category and description.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorChecks.html
   */
  DescribeTrustedAdvisorChecks = "support:DescribeTrustedAdvisorChecks",

  /**
   * Write - This is an internally managed function to initiate a call on AWS Support Center.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html
   */
  InitiateCallForCase = "support:InitiateCallForCase",

  /**
   * Write - This is an internally managed function to initiate a chat on AWS Support Center.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html
   */
  InitiateChatForCase = "support:InitiateChatForCase",

  /**
   * Write - This is an internally managed function which allows secondary services to attach attributes to AWS Support cases.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html
   */
  PutCaseAttributes = "support:PutCaseAttributes",

  /**
   * Write - Rate an AWS Support case communication.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html
   */
  RateCaseCommunication = "support:RateCaseCommunication",

  /**
   * Write - Requests a refresh of the Trusted Advisor check that has the specified check identifier.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_RefreshTrustedAdvisorCheck.html
   */
  RefreshTrustedAdvisorCheck = "support:RefreshTrustedAdvisorCheck",

  /**
   * Write - Resolves an AWS Support case.
   * @see https://docs.aws.amazon.com/awssupport/latest/APIReference/API_ResolveCase.html
   */
  ResolveCase = "support:ResolveCase",

  /**
   * Read - Returns a list of AWS Support cases that matches the given inputs.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html
   */
  SearchForCases = "support:SearchForCases",

  /**
   * * - Grant all support permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html
   */
  All = "support:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html
 */
export const SupportResource = {
}

