/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfirewallmanager.html
 */
export enum FmsAction {

  /**
   * Write - Grants permission to set the AWS Firewall Manager administrator account and enables the service in all organization accounts
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AssociateAdminAccount.html
   */
  AssociateAdminAccount = "fms:AssociateAdminAccount",

  /**
   * Write - Grants permission to set the Firewall Manager administrator as a tenant administrator of a third-party firewall service
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AssociateThirdPartyFirewall.html
   */
  AssociateThirdPartyFirewall = "fms:AssociateThirdPartyFirewall",

  /**
   * Write - Grants permission to permanently deletes an AWS Firewall Manager applications list
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteAppsList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.applicationsList `FmsResource.applicationsList`} 
   */
  DeleteAppsList = "fms:DeleteAppsList",

  /**
   * Write - Grants permission to delete an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to notify the FM administrator about major FM events and errors across the organization
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteNotificationChannel.html
   */
  DeleteNotificationChannel = "fms:DeleteNotificationChannel",

  /**
   * Write - Grants permission to permanently delete an AWS Firewall Manager policy
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.policy `FmsResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeletePolicy = "fms:DeletePolicy",

  /**
   * Write - Grants permission to permanently deletes an AWS Firewall Manager protocols list
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeleteProtocolsList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.protocolsList `FmsResource.protocolsList`} 
   */
  DeleteProtocolsList = "fms:DeleteProtocolsList",

  /**
   * Write - Grants permission to disassociate the account that has been set as the AWS Firewall Manager administrator account and and disables the service in all organization accounts
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DisassociateAdminAccount.html
   */
  DisassociateAdminAccount = "fms:DisassociateAdminAccount",

  /**
   * Write - Grants permission to disassociate a Firewall Manager administrator from a third-party firewall tenant
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DisassociateThirdPartyFirewall.html
   */
  DisassociateThirdPartyFirewall = "fms:DisassociateThirdPartyFirewall",

  /**
   * Read - Grants permission to retrieve the AWS Organizations master account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAdminAccount.html
   */
  GetAdminAccount = "fms:GetAdminAccount",

  /**
   * Read - Grants permission to return information about the specified AWS Firewall Manager applications list
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetAppsList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.applicationsList `FmsResource.applicationsList`} 
   */
  GetAppsList = "fms:GetAppsList",

  /**
   * Read - Grants permission to retrieve detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetComplianceDetail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.policy `FmsResource.policy`} 
   */
  GetComplianceDetail = "fms:GetComplianceDetail",

  /**
   * Read - Grants permission to retrieve information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetNotificationChannel.html
   */
  GetNotificationChannel = "fms:GetNotificationChannel",

  /**
   * Read - Grants permission to retrieve information about the specified AWS Firewall Manager policy
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.policy `FmsResource.policy`} 
   */
  GetPolicy = "fms:GetPolicy",

  /**
   * Read - Grants permission to retrieve policy-level attack summary information in the event of a potential DDoS attack
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetProtectionStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.policy `FmsResource.policy`} 
   */
  GetProtectionStatus = "fms:GetProtectionStatus",

  /**
   * Read - Grants permission to return information about the specified AWS Firewall Manager protocols list
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetProtocolsList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.protocolsList `FmsResource.protocolsList`} 
   */
  GetProtocolsList = "fms:GetProtocolsList",

  /**
   * Read - Grants permission to retrieve the onboarding status of a Firewall Manager administrator account to third-party firewall vendor tenant
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetThirdPartyFirewallAssociationStatus.html
   */
  GetThirdPartyFirewallAssociationStatus = "fms:GetThirdPartyFirewallAssociationStatus",

  /**
   * Read - Grants permission to retrieve violations for a resource based on the specified AWS Firewall Manager policy and AWS account
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_GetViolationDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.policy `FmsResource.policy`} 
   */
  GetViolationDetails = "fms:GetViolationDetails",

  /**
   * List - Grants permission to return an array of AppsListDataSummary objects
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListAppsLists.html
   */
  ListAppsLists = "fms:ListAppsLists",

  /**
   * List - Grants permission to retrieve an array of PolicyComplianceStatus objects in the response. Use PolicyComplianceStatus to get a summary of which member accounts are protected by the specified policy
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListComplianceStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.policy `FmsResource.policy`} 
   */
  ListComplianceStatus = "fms:ListComplianceStatus",

  /**
   * List - Grants permission to retrieve an array of member account ids if the caller is FMS admin account
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListMemberAccounts.html
   */
  ListMemberAccounts = "fms:ListMemberAccounts",

  /**
   * List - Grants permission to retrieve an array of PolicySummary objects in the response
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListPolicies.html
   */
  ListPolicies = "fms:ListPolicies",

  /**
   * List - Grants permission to return an array of ProtocolsListDataSummary objects
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListProtocolsLists.html
   */
  ListProtocolsLists = "fms:ListProtocolsLists",

  /**
   * Read - Grants permission to list Tags for a given resource
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.policy `FmsResource.policy`} 
   */
  ListTagsForResource = "fms:ListTagsForResource",

  /**
   * List - Grants permission to retrieve a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ListThirdPartyFirewallFirewallPolicies.html
   */
  ListThirdPartyFirewallFirewallPolicies = "fms:ListThirdPartyFirewallFirewallPolicies",

  /**
   * Write - Grants permission to create an AWS Firewall Manager applications list
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutAppsList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.applicationsList `FmsResource.applicationsList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutAppsList = "fms:PutAppsList",

  /**
   * Write - Grants permission to designate the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager (FM) could use to notify the FM administrator about major FM events and errors across the organization
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutNotificationChannel.html
   */
  PutNotificationChannel = "fms:PutNotificationChannel",

  /**
   * Write - Grants permission to create an AWS Firewall Manager policy
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.policy `FmsResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutPolicy = "fms:PutPolicy",

  /**
   * Write - Grants permission to creates an AWS Firewall Manager protocols list
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_PutProtocolsList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.protocolsList `FmsResource.protocolsList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutProtocolsList = "fms:PutProtocolsList",

  /**
   * Tagging - Grants permission to add a Tag to a given resource
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.policy `FmsResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "fms:TagResource",

  /**
   * Tagging - Grants permission to remove a Tag from a given resource
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.policy `FmsResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "fms:UntagResource",

  /**
   * * - Grant all fms permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfirewallmanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FmsResource.applicationsList `FmsResource.applicationsList`} 
   * - {@link FmsResource.policy `FmsResource.policy`} 
   * - {@link FmsResource.protocolsList `FmsResource.protocolsList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "fms:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfirewallmanager.html
 */
export const FmsResource = {

  /**
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  policy: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:fms:${options.region || '*'}:${options.account || '*'}:policy/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_AppsListData.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  applicationsList: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:fms:${options.region || '*'}:${options.account || '*'}:applications-list/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_ProtocolsListData.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  protocolsList: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:fms:${options.region || '*'}:${options.account || '*'}:protocols-list/${options.id || '*'}`,
}

