/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworklink.html
 */
export enum WorklinkAction {

  /**
   * Write - Grants permission to associate a domain with an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_AssociateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  AssociateDomain = "worklink:AssociateDomain",

  /**
   * Write - Grants permission to associate a website authorization provider with an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_AssociateWebsiteAuthorizationProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  AssociateWebsiteAuthorizationProvider = "worklink:AssociateWebsiteAuthorizationProvider",

  /**
   * Write - Grants permission to associate a website certificate authority with an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_AssociateWebsiteCertificateAuthority.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  AssociateWebsiteCertificateAuthority = "worklink:AssociateWebsiteCertificateAuthority",

  /**
   * Write - Grants permission to create an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_CreateFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFleet = "worklink:CreateFleet",

  /**
   * Write - Grants permission to delete an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DeleteFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteFleet = "worklink:DeleteFleet",

  /**
   * Read - Grants permission to describe the audit stream configuration for an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DescribeAuditStreamConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  DescribeAuditStreamConfiguration = "worklink:DescribeAuditStreamConfiguration",

  /**
   * Read - Grants permission to describe the company network configuration for an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DescribeCompanyNetworkConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  DescribeCompanyNetworkConfiguration = "worklink:DescribeCompanyNetworkConfiguration",

  /**
   * Read - Grants permission to describe details of a device associated with an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  DescribeDevice = "worklink:DescribeDevice",

  /**
   * Read - Grants permission to describe the device policy configuration for an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDevicePolicyConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  DescribeDevicePolicyConfiguration = "worklink:DescribeDevicePolicyConfiguration",

  /**
   * Read - Grants permission to describe details about a domain associated with an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  DescribeDomain = "worklink:DescribeDomain",

  /**
   * Read - Grants permission to describe metadata of an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DescribeFleetMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DescribeFleetMetadata = "worklink:DescribeFleetMetadata",

  /**
   * Read - Grants permission to describe the identity provider configuration for an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DescribeIdentityProviderConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  DescribeIdentityProviderConfiguration = "worklink:DescribeIdentityProviderConfiguration",

  /**
   * Read - Grants permission to describe a website certificate authority associated with an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DescribeWebsiteCertificateAuthority.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  DescribeWebsiteCertificateAuthority = "worklink:DescribeWebsiteCertificateAuthority",

  /**
   * Write - Grants permission to disassociate a domain from an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  DisassociateDomain = "worklink:DisassociateDomain",

  /**
   * Write - Grants permission to disassociate a website authorization provider from an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateWebsiteAuthorizationProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  DisassociateWebsiteAuthorizationProvider = "worklink:DisassociateWebsiteAuthorizationProvider",

  /**
   * Write - Grants permission to disassociate a website certificate authority from an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateWebsiteCertificateAuthority.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  DisassociateWebsiteCertificateAuthority = "worklink:DisassociateWebsiteCertificateAuthority",

  /**
   * List - Grants permission to list the devices associated with an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_ListDevices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  ListDevices = "worklink:ListDevices",

  /**
   * List - Grants permission to list the associated domains for an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_ListDomains.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  ListDomains = "worklink:ListDomains",

  /**
   * List - Grants permission to list the Amazon WorkLink fleets associated with the account
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_ListFleets.html
   */
  ListFleets = "worklink:ListFleets",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  ListTagsForResource = "worklink:ListTagsForResource",

  /**
   * List - Grants permission to list the website authorization providers for an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_ListWebsiteAuthorizationProviders.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  ListWebsiteAuthorizationProviders = "worklink:ListWebsiteAuthorizationProviders",

  /**
   * List - Grants permission to list the website certificate authorities associated with an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_ListWebsiteCertificateAuthorities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  ListWebsiteCertificateAuthorities = "worklink:ListWebsiteCertificateAuthorities",

  /**
   * Write - Grants permission to restore access to a domain associated with an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_RestoreDomainAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  RestoreDomainAccess = "worklink:RestoreDomainAccess",

  /**
   * Write - Grants permission to revoke access to a domain associated with an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_RevokeDomainAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  RevokeDomainAccess = "worklink:RevokeDomainAccess",

  /**
   * List - Grants permission to list devices for an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/ag/manage-devices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  SearchEntity = "worklink:SearchEntity",

  /**
   * Write - Grants permission to sign out a user from an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_SignOutUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  SignOutUser = "worklink:SignOutUser",

  /**
   * Tagging - Grants permission to add one or more tags to a resource
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "worklink:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from a resource
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "worklink:UntagResource",

  /**
   * Write - Grants permission to update the audit stream configuration for an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_UpdateAuditStreamConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  UpdateAuditStreamConfiguration = "worklink:UpdateAuditStreamConfiguration",

  /**
   * Write - Grants permission to update the company network configuration for an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_UpdateCompanyNetworkConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  UpdateCompanyNetworkConfiguration = "worklink:UpdateCompanyNetworkConfiguration",

  /**
   * Write - Grants permission to update the device policy configuration for an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_UpdateDevicePolicyConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  UpdateDevicePolicyConfiguration = "worklink:UpdateDevicePolicyConfiguration",

  /**
   * Write - Grants permission to update the metadata for a domain associated with an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_UpdateDomainMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  UpdateDomainMetadata = "worklink:UpdateDomainMetadata",

  /**
   * Write - Grants permission to update the metadata of an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_UpdateFleetMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  UpdateFleetMetadata = "worklink:UpdateFleetMetadata",

  /**
   * Write - Grants permission to update the identity provider configuration for an Amazon WorkLink fleet
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_UpdateIdentityProviderConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   */
  UpdateIdentityProviderConfiguration = "worklink:UpdateIdentityProviderConfiguration",

  /**
   * * - Grant all worklink permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworklink.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorklinkResource.fleet `WorklinkResource.fleet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "worklink:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworklink.html
 */
export const WorklinkResource = {

  /**
   * @see https://docs.aws.amazon.com/worklink/latest/api/API_CreateFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  fleet: (options: Partial<{partition: string, account: string, fleetName: string}> = {}) => `arn:${options.partition || '*'}:worklink::${options.account || '*'}:fleet/${options.fleetName || '*'}`,
}

