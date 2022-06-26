/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53domains.html
 */
export enum Route53domainsAction {

  /**
   * Write - Grants permission to accept the transfer of a domain from another AWS account to the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html
   */
  AcceptDomainTransferFromAnotherAwsAccount = "route53domains:AcceptDomainTransferFromAnotherAwsAccount",

  /**
   * Write - Grants permission to cancel the transfer of a domain from the current AWS account to another AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html
   */
  CancelDomainTransferToAnotherAwsAccount = "route53domains:CancelDomainTransferToAnotherAwsAccount",

  /**
   * Read - Grants permission to check the availability of one domain name
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CheckDomainAvailability.html
   */
  CheckDomainAvailability = "route53domains:CheckDomainAvailability",

  /**
   * Read - Grants permission to check whether a domain name can be transferred to Amazon Route 53
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CheckDomainTransferability.html
   */
  CheckDomainTransferability = "route53domains:CheckDomainTransferability",

  /**
   * Write - Grants permission to delete domains
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DeleteDomain.html
   */
  DeleteDomain = "route53domains:DeleteDomain",

  /**
   * Tagging - Grants permission to delete the specified tags for a domain
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DeleteTagsForDomain.html
   */
  DeleteTagsForDomain = "route53domains:DeleteTagsForDomain",

  /**
   * Write - Grants permission to configure Amazon Route 53 to automatically renew the specified domain before the domain registration expires
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html
   */
  DisableDomainAutoRenew = "route53domains:DisableDomainAutoRenew",

  /**
   * Write - Grants permission to remove the transfer lock on the domain (specifically the clientTransferProhibited status) to allow domain transfers
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainTransferLock.html
   */
  DisableDomainTransferLock = "route53domains:DisableDomainTransferLock",

  /**
   * Write - Grants permission to configure Amazon Route 53 to automatically renew the specified domain before the domain registration expires
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html
   */
  EnableDomainAutoRenew = "route53domains:EnableDomainAutoRenew",

  /**
   * Write - Grants permission to set the transfer lock on the domain (specifically the clientTransferProhibited status) to prevent domain transfers
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_EnableDomainTransferLock.html
   */
  EnableDomainTransferLock = "route53domains:EnableDomainTransferLock",

  /**
   * Read - Grants permission to get information about whether the registrant contact has responded for operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetContactReachabilityStatus.html
   */
  GetContactReachabilityStatus = "route53domains:GetContactReachabilityStatus",

  /**
   * Read - Grants permission to get detailed information about a domain
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainDetail.html
   */
  GetDomainDetail = "route53domains:GetDomainDetail",

  /**
   * Read - Grants permission to get a list of suggested domain names given a string, which can either be a domain name or simply a word or phrase (without spaces)
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainSuggestions.html
   */
  GetDomainSuggestions = "route53domains:GetDomainSuggestions",

  /**
   * Read - Grants permission to get the current status of an operation that is not completed
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html
   */
  GetOperationDetail = "route53domains:GetOperationDetail",

  /**
   * List - Grants permission to list all the domain names registered with Amazon Route 53 for the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListDomains.html
   */
  ListDomains = "route53domains:ListDomains",

  /**
   * List - Grants permission to list the operation IDs of operations that are not yet complete
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html
   */
  ListOperations = "route53domains:ListOperations",

  /**
   * List - Grants permission to list the prices of operations for TLDs
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListPrices.html
   */
  ListPrices = "route53domains:ListPrices",

  /**
   * Read - Grants permission to list all the tags that are associated with the specified domain
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListTagsForDomain.html
   */
  ListTagsForDomain = "route53domains:ListTagsForDomain",

  /**
   * Write - Grants permission to register domains
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RegisterDomain.html
   */
  RegisterDomain = "route53domains:RegisterDomain",

  /**
   * Write - Grants permission to reject the transfer of a domain from another AWS account to the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html
   */
  RejectDomainTransferFromAnotherAwsAccount = "route53domains:RejectDomainTransferFromAnotherAwsAccount",

  /**
   * Write - Grants permission to renew domains for the specified number of years
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RenewDomain.html
   */
  RenewDomain = "route53domains:RenewDomain",

  /**
   * Write - Grants permission to resend the confirmation email to the current email address for the registrant contact for operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendContactReachabilityEmail.html
   */
  ResendContactReachabilityEmail = "route53domains:ResendContactReachabilityEmail",

  /**
   * Write - Grants permission to get the AuthCode for the domain
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RetrieveDomainAuthCode.html
   */
  RetrieveDomainAuthCode = "route53domains:RetrieveDomainAuthCode",

  /**
   * Write - Grants permission to transfer a domain from another registrar to Amazon Route 53
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomain.html
   */
  TransferDomain = "route53domains:TransferDomain",

  /**
   * Write - Grants permission to transfer a domain from the current AWS account to another AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html
   */
  TransferDomainToAnotherAwsAccount = "route53domains:TransferDomainToAnotherAwsAccount",

  /**
   * Write - Grants permission to update the contact information for domain
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContact.html
   */
  UpdateDomainContact = "route53domains:UpdateDomainContact",

  /**
   * Write - Grants permission to update the domain contact privacy setting
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContactPrivacy.html
   */
  UpdateDomainContactPrivacy = "route53domains:UpdateDomainContactPrivacy",

  /**
   * Write - Grants permission to replace the current set of name servers for a domain with the specified set of name servers
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html
   */
  UpdateDomainNameservers = "route53domains:UpdateDomainNameservers",

  /**
   * Tagging - Grants permission to add or update tags for a specified domain
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateTagsForDomain.html
   */
  UpdateTagsForDomain = "route53domains:UpdateTagsForDomain",

  /**
   * Read - Grants permission to get all the domain-related billing records for the current AWS account for a specified period
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ViewBilling.html
   */
  ViewBilling = "route53domains:ViewBilling",

  /**
   * * - Grant all route53domains permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53domains.html
   */
  All = "route53domains:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53domains.html
 */
export const Route53domainsResource = {
}

