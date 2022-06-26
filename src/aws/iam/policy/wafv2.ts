/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafv2.html
 */
export enum Wafv2Action {

  /**
   * Write - Grants permission to associate a WebACL with a resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_AssociateWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   * - {@link Wafv2Resource.apigateway `Wafv2Resource.apigateway`} 
   * - {@link Wafv2Resource.appsync `Wafv2Resource.appsync`} 
   * - {@link Wafv2Resource.loadbalancerApp `Wafv2Resource.loadbalancerApp`} 
   */
  AssociateWebACL = "wafv2:AssociateWebACL",

  /**
   * Read - Grants permission to calculate web ACL capacity unit (WCU) requirements for a specified scope and set of rules
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_CheckCapacity.html
   */
  CheckCapacity = "wafv2:CheckCapacity",

  /**
   * Write - Grants permission to create an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateIPSet = "wafv2:CreateIPSet",

  /**
   * Write - Grants permission to create a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRegexPatternSet = "wafv2:CreateRegexPatternSet",

  /**
   * Write - Grants permission to create a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRuleGroup = "wafv2:CreateRuleGroup",

  /**
   * Write - Grants permission to create a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   * - {@link Wafv2Resource.managedruleset `Wafv2Resource.managedruleset`} 
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWebACL = "wafv2:CreateWebACL",

  /**
   * Write - Grants permission to delete FirewallManagedRulesGroups from a WebACL if not managed by Firewall Manager anymore
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteFirewallManagerRuleGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   */
  DeleteFirewallManagerRuleGroups = "wafv2:DeleteFirewallManagerRuleGroups",

  /**
   * Write - Grants permission to delete an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   */
  DeleteIPSet = "wafv2:DeleteIPSet",

  /**
   * Write - Grants permission to delete the LoggingConfiguration from a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteLoggingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   */
  DeleteLoggingConfiguration = "wafv2:DeleteLoggingConfiguration",

  /**
   * PermissionsManagement - Grants permission to delete the PermissionPolicy on a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_DeletePermissionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   */
  DeletePermissionPolicy = "wafv2:DeletePermissionPolicy",

  /**
   * Write - Grants permission to delete a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   */
  DeleteRegexPatternSet = "wafv2:DeleteRegexPatternSet",

  /**
   * Write - Grants permission to delete a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   */
  DeleteRuleGroup = "wafv2:DeleteRuleGroup",

  /**
   * Write - Grants permission to delete a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   */
  DeleteWebACL = "wafv2:DeleteWebACL",

  /**
   * Read - Grants permission to retrieve high-level information for a managed rule group
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_DescribeManagedRuleGroup.html
   */
  DescribeManagedRuleGroup = "wafv2:DescribeManagedRuleGroup",

  /**
   * Write - Grants permission to disassociate Firewall Manager from a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_DisassociateFirewallManager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   */
  DisassociateFirewallManager = "wafv2:DisassociateFirewallManager",

  /**
   * Write - Grants permission to disassociate a WebACL from an application resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_DisassociateWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.apigateway `Wafv2Resource.apigateway`} 
   * - {@link Wafv2Resource.appsync `Wafv2Resource.appsync`} 
   * - {@link Wafv2Resource.loadbalancerApp `Wafv2Resource.loadbalancerApp`} 
   */
  DisassociateWebACL = "wafv2:DisassociateWebACL",

  /**
   * Read - Grants permission to generate a presigned download URL for the specified release of the mobile SDK
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GenerateMobileSdkReleaseUrl.html
   */
  GenerateMobileSdkReleaseUrl = "wafv2:GenerateMobileSdkReleaseUrl",

  /**
   * Read - Grants permission to retrieve details about an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GetIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetIPSet = "wafv2:GetIPSet",

  /**
   * Read - Grants permission to retrieve LoggingConfiguration for a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GetLoggingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetLoggingConfiguration = "wafv2:GetLoggingConfiguration",

  /**
   * Read - Grants permission to retrieve details about a ManagedRuleSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GetManagedRuleSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.managedruleset `Wafv2Resource.managedruleset`} 
   */
  GetManagedRuleSet = "wafv2:GetManagedRuleSet",

  /**
   * Read - Grants permission to retrieve information for the specified mobile SDK release, including release notes and tags
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GetMobileSdkRelease.html
   */
  GetMobileSdkRelease = "wafv2:GetMobileSdkRelease",

  /**
   * Read - Grants permission to retrieve a PermissionPolicy for a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GetPermissionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   */
  GetPermissionPolicy = "wafv2:GetPermissionPolicy",

  /**
   * Read - Grants permission to retrieve the keys that are currently blocked by a rate-based rule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRateBasedStatementManagedKeys.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetRateBasedStatementManagedKeys = "wafv2:GetRateBasedStatementManagedKeys",

  /**
   * Read - Grants permission to retrieve details about a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetRegexPatternSet = "wafv2:GetRegexPatternSet",

  /**
   * Read - Grants permission to retrieve details about a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetRuleGroup = "wafv2:GetRuleGroup",

  /**
   * Read - Grants permission to retrieve detailed information about a sampling of web requests
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GetSampledRequests.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   */
  GetSampledRequests = "wafv2:GetSampledRequests",

  /**
   * Read - Grants permission to retrieve details about a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetWebACL = "wafv2:GetWebACL",

  /**
   * Read - Grants permission to retrieve the WebACL that's associated with a resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACLForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.apigateway `Wafv2Resource.apigateway`} 
   * - {@link Wafv2Resource.appsync `Wafv2Resource.appsync`} 
   * - {@link Wafv2Resource.loadbalancerApp `Wafv2Resource.loadbalancerApp`} 
   */
  GetWebACLForResource = "wafv2:GetWebACLForResource",

  /**
   * List - Grants permission to retrieve an array of managed rule group versions that are available for you to use
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ListAvailableManagedRuleGroupVersions.html
   */
  ListAvailableManagedRuleGroupVersions = "wafv2:ListAvailableManagedRuleGroupVersions",

  /**
   * List - Grants permission to retrieve an array of managed rule groups that are available for you to use
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ListAvailableManagedRuleGroups.html
   */
  ListAvailableManagedRuleGroups = "wafv2:ListAvailableManagedRuleGroups",

  /**
   * List - Grants permission to retrieve an array of IPSetSummary objects for the IP sets that you manage
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ListIPSets.html
   */
  ListIPSets = "wafv2:ListIPSets",

  /**
   * List - Grants permission to retrieve an array of your LoggingConfiguration objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ListLoggingConfigurations.html
   */
  ListLoggingConfigurations = "wafv2:ListLoggingConfigurations",

  /**
   * List - Grants permission to retrieve an array of your ManagedRuleSet objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ListManagedRuleSets.html
   */
  ListManagedRuleSets = "wafv2:ListManagedRuleSets",

  /**
   * List - Grants permission to retrieve a list of the available releases for the mobile SDK and the specified device platform
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ListMobileSdkReleases.html
   */
  ListMobileSdkReleases = "wafv2:ListMobileSdkReleases",

  /**
   * List - Grants permission to retrieve an array of RegexPatternSetSummary objects for the regex pattern sets that you manage
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRegexPatternSets.html
   */
  ListRegexPatternSets = "wafv2:ListRegexPatternSets",

  /**
   * List - Grants permission to retrieve an array of the Amazon Resource Names (ARNs) for the resources that are associated with a web ACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ListResourcesForWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   */
  ListResourcesForWebACL = "wafv2:ListResourcesForWebACL",

  /**
   * List - Grants permission to retrieve an array of RuleGroupSummary objects for the rule groups that you manage
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRuleGroups.html
   */
  ListRuleGroups = "wafv2:ListRuleGroups",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "wafv2:ListTagsForResource",

  /**
   * List - Grants permission to retrieve an array of WebACLSummary objects for the web ACLs that you manage
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ListWebACLs.html
   */
  ListWebACLs = "wafv2:ListWebACLs",

  /**
   * Write - Grants permission to create FirewallManagedRulesGroups in a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_PutFirewallManagerRuleGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   */
  PutFirewallManagerRuleGroups = "wafv2:PutFirewallManagerRuleGroups",

  /**
   * Write - Grants permission to enable a LoggingConfiguration, to start logging for a web ACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_PutLoggingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   */
  PutLoggingConfiguration = "wafv2:PutLoggingConfiguration",

  /**
   * Write - Grants permission to enable create a new or update an existing version of a ManagedRuleSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_PutManagedRuleSetVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.managedruleset `Wafv2Resource.managedruleset`} 
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   */
  PutManagedRuleSetVersions = "wafv2:PutManagedRuleSetVersions",

  /**
   * PermissionsManagement - Grants permission to attach an IAM policy to a resource, used to share rule groups between accounts
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_PutPermissionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   */
  PutPermissionPolicy = "wafv2:PutPermissionPolicy",

  /**
   * Tagging - Grants permission to associate tags with a AWS resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "wafv2:TagResource",

  /**
   * Tagging - Grants permission to disassociate tags from an AWS resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "wafv2:UntagResource",

  /**
   * Write - Grants permission to update an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateIPSet = "wafv2:UpdateIPSet",

  /**
   * Write - Grants permission to update the expiry date of a version in ManagedRuleSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateManagedRuleSetVersionExpiryDate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.managedruleset `Wafv2Resource.managedruleset`} 
   */
  UpdateManagedRuleSetVersionExpiryDate = "wafv2:UpdateManagedRuleSetVersionExpiryDate",

  /**
   * Write - Grants permission to update a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateRegexPatternSet = "wafv2:UpdateRegexPatternSet",

  /**
   * Write - Grants permission to update a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateRuleGroup = "wafv2:UpdateRuleGroup",

  /**
   * Write - Grants permission to update a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   * - {@link Wafv2Resource.managedruleset `Wafv2Resource.managedruleset`} 
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateWebACL = "wafv2:UpdateWebACL",

  /**
   * * - Grant all wafv2 permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafv2.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Wafv2Resource.webacl `Wafv2Resource.webacl`} 
   * - {@link Wafv2Resource.apigateway `Wafv2Resource.apigateway`} 
   * - {@link Wafv2Resource.appsync `Wafv2Resource.appsync`} 
   * - {@link Wafv2Resource.loadbalancerApp `Wafv2Resource.loadbalancerApp`} 
   * - {@link Wafv2Resource.ipset `Wafv2Resource.ipset`} 
   * - {@link Wafv2Resource.regexpatternset `Wafv2Resource.regexpatternset`} 
   * - {@link Wafv2Resource.rulegroup `Wafv2Resource.rulegroup`} 
   * - {@link Wafv2Resource.managedruleset `Wafv2Resource.managedruleset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "wafv2:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafv2.html
 */
export const Wafv2Resource = {

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  webacl: (options: Partial<{partition: string, region: string, account: string, scope: string, name: string, id: string}> = {}) => `arn:${options.partition || '*'}:wafv2:${options.region || '*'}:${options.account || '*'}:${options.scope || '*'}/webacl/${options.name || '*'}/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_IPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ipset: (options: Partial<{partition: string, region: string, account: string, scope: string, name: string, id: string}> = {}) => `arn:${options.partition || '*'}:wafv2:${options.region || '*'}:${options.account || '*'}:${options.scope || '*'}/ipset/${options.name || '*'}/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_ManagedRuleSet.html
   */
  managedruleset: (options: Partial<{partition: string, region: string, account: string, scope: string, name: string, id: string}> = {}) => `arn:${options.partition || '*'}:wafv2:${options.region || '*'}:${options.account || '*'}:${options.scope || '*'}/managedruleset/${options.name || '*'}/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_RuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  rulegroup: (options: Partial<{partition: string, region: string, account: string, scope: string, name: string, id: string}> = {}) => `arn:${options.partition || '*'}:wafv2:${options.region || '*'}:${options.account || '*'}:${options.scope || '*'}/rulegroup/${options.name || '*'}/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_RegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  regexpatternset: (options: Partial<{partition: string, region: string, account: string, scope: string, name: string, id: string}> = {}) => `arn:${options.partition || '*'}:wafv2:${options.region || '*'}:${options.account || '*'}:${options.scope || '*'}/regexpatternset/${options.name || '*'}/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   */
  loadbalancerApp: (options: Partial<{partition: string, region: string, account: string, loadBalancerName: string, loadBalancerId: string}> = {}) => `arn:${options.partition || '*'}:elasticloadbalancing:${options.region || '*'}:${options.account || '*'}:loadbalancer/app/${options.loadBalancerName || '*'}/${options.loadBalancerId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   */
  apigateway: (options: Partial<{partition: string, region: string, apiId: string, stageName: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.apiId || '*'}/stages/${options.stageName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_WebACL.html
   */
  appsync: (options: Partial<{partition: string, region: string, account: string, graphQLAPIId: string}> = {}) => `arn:${options.partition || '*'}:appsync:${options.region || '*'}:${options.account || '*'}:apis/${options.graphQLAPIId || '*'}`,
}

