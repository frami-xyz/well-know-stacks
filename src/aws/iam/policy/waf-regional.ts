/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafregional.html
 */
export enum WafRegionalAction {

  /**
   * Write - Grants permission to associate a web ACL with a resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_AssociateWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.loadbalancer/app/ `WafRegionalResource.loadbalancer/app/`} 
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   */
  AssociateWebACL = "waf-regional:AssociateWebACL",

  /**
   * Write - Grants permission to create a ByteMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateByteMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.bytematchset `WafRegionalResource.bytematchset`} 
   */
  CreateByteMatchSet = "waf-regional:CreateByteMatchSet",

  /**
   * Write - Grants permission to create a GeoMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateGeoMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.geomatchset `WafRegionalResource.geomatchset`} 
   */
  CreateGeoMatchSet = "waf-regional:CreateGeoMatchSet",

  /**
   * Write - Grants permission to create an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ipset `WafRegionalResource.ipset`} 
   */
  CreateIPSet = "waf-regional:CreateIPSet",

  /**
   * Write - Grants permission to create a RateBasedRule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRateBasedRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ratebasedrule `WafRegionalResource.ratebasedrule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRateBasedRule = "waf-regional:CreateRateBasedRule",

  /**
   * Write - Grants permission to create a RegexMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.regexmatchset `WafRegionalResource.regexmatchset`} 
   */
  CreateRegexMatchSet = "waf-regional:CreateRegexMatchSet",

  /**
   * Write - Grants permission to create a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.regexpatternset `WafRegionalResource.regexpatternset`} 
   */
  CreateRegexPatternSet = "waf-regional:CreateRegexPatternSet",

  /**
   * Write - Grants permission to create a Rule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rule `WafRegionalResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRule = "waf-regional:CreateRule",

  /**
   * Write - Grants permission to create a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rulegroup `WafRegionalResource.rulegroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRuleGroup = "waf-regional:CreateRuleGroup",

  /**
   * Write - Grants permission to create a SizeConstraintSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSizeConstraintSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.sizeconstraintset `WafRegionalResource.sizeconstraintset`} 
   */
  CreateSizeConstraintSet = "waf-regional:CreateSizeConstraintSet",

  /**
   * Write - Grants permission to create an SqlInjectionMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateSqlInjectionMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.sqlinjectionmatchset `WafRegionalResource.sqlinjectionmatchset`} 
   */
  CreateSqlInjectionMatchSet = "waf-regional:CreateSqlInjectionMatchSet",

  /**
   * Permissions management - Grants permission to create a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWebACL = "waf-regional:CreateWebACL",

  /**
   * Write - Grants permission to create a CloudFormation web ACL template in an S3 bucket for the purposes of migrating the web ACL from AWS WAF Classic to AWS WAF v2
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateWebACLMigrationStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   */
  CreateWebACLMigrationStack = "waf-regional:CreateWebACLMigrationStack",

  /**
   * Write - Grants permission to create an XssMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_CreateXssMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.xssmatchset `WafRegionalResource.xssmatchset`} 
   */
  CreateXssMatchSet = "waf-regional:CreateXssMatchSet",

  /**
   * Write - Grants permission to delete a ByteMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteByteMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.bytematchset `WafRegionalResource.bytematchset`} 
   */
  DeleteByteMatchSet = "waf-regional:DeleteByteMatchSet",

  /**
   * Write - Grants permission to delete a GeoMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteGeoMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.geomatchset `WafRegionalResource.geomatchset`} 
   */
  DeleteGeoMatchSet = "waf-regional:DeleteGeoMatchSet",

  /**
   * Write - Grants permission to delete an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ipset `WafRegionalResource.ipset`} 
   */
  DeleteIPSet = "waf-regional:DeleteIPSet",

  /**
   * Write - Grants permission to delete a LoggingConfiguration from a web ACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteLoggingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   */
  DeleteLoggingConfiguration = "waf-regional:DeleteLoggingConfiguration",

  /**
   * Permissions management - Grants permission to delete an IAM policy from a rule group
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeletePermissionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rulegroup `WafRegionalResource.rulegroup`} 
   */
  DeletePermissionPolicy = "waf-regional:DeletePermissionPolicy",

  /**
   * Write - Grants permission to delete a RateBasedRule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRateBasedRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ratebasedrule `WafRegionalResource.ratebasedrule`} 
   */
  DeleteRateBasedRule = "waf-regional:DeleteRateBasedRule",

  /**
   * Write - Grants permission to delete a RegexMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.regexmatchset `WafRegionalResource.regexmatchset`} 
   */
  DeleteRegexMatchSet = "waf-regional:DeleteRegexMatchSet",

  /**
   * Write - Grants permission to delete a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.regexpatternset `WafRegionalResource.regexpatternset`} 
   */
  DeleteRegexPatternSet = "waf-regional:DeleteRegexPatternSet",

  /**
   * Write - Grants permission to delete a Rule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rule `WafRegionalResource.rule`} 
   */
  DeleteRule = "waf-regional:DeleteRule",

  /**
   * Write - Grants permission to delete a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rulegroup `WafRegionalResource.rulegroup`} 
   */
  DeleteRuleGroup = "waf-regional:DeleteRuleGroup",

  /**
   * Write - Grants permission to delete a SizeConstraintSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSizeConstraintSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.sizeconstraintset `WafRegionalResource.sizeconstraintset`} 
   */
  DeleteSizeConstraintSet = "waf-regional:DeleteSizeConstraintSet",

  /**
   * Write - Grants permission to delete an SqlInjectionMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteSqlInjectionMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.sqlinjectionmatchset `WafRegionalResource.sqlinjectionmatchset`} 
   */
  DeleteSqlInjectionMatchSet = "waf-regional:DeleteSqlInjectionMatchSet",

  /**
   * Permissions management - Grants permission to delete a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   */
  DeleteWebACL = "waf-regional:DeleteWebACL",

  /**
   * Write - Grants permission to delete an XssMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DeleteXssMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.xssmatchset `WafRegionalResource.xssmatchset`} 
   */
  DeleteXssMatchSet = "waf-regional:DeleteXssMatchSet",

  /**
   * Write - Grants permission to delete an association between a web ACL and a resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_DisassociateWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.loadbalancer/app/ `WafRegionalResource.loadbalancer/app/`} 
   */
  DisassociateWebACL = "waf-regional:DisassociateWebACL",

  /**
   * Read - Grants permission to retrieve a ByteMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetByteMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.bytematchset `WafRegionalResource.bytematchset`} 
   */
  GetByteMatchSet = "waf-regional:GetByteMatchSet",

  /**
   * Read - Grants permission to retrieve a change token to use in create, update, and delete requests
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeToken.html
   */
  GetChangeToken = "waf-regional:GetChangeToken",

  /**
   * Read - Grants permission to retrieve the status of a change token
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetChangeTokenStatus.html
   */
  GetChangeTokenStatus = "waf-regional:GetChangeTokenStatus",

  /**
   * Read - Grants permission to retrieve a GeoMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetGeoMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.geomatchset `WafRegionalResource.geomatchset`} 
   */
  GetGeoMatchSet = "waf-regional:GetGeoMatchSet",

  /**
   * Read - Grants permission to retrieve an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ipset `WafRegionalResource.ipset`} 
   */
  GetIPSet = "waf-regional:GetIPSet",

  /**
   * Read - Grants permission to retrieve a LoggingConfiguration
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetLoggingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   */
  GetLoggingConfiguration = "waf-regional:GetLoggingConfiguration",

  /**
   * Read - Grants permission to retrieve an IAM policy attached to a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetPermissionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rulegroup `WafRegionalResource.rulegroup`} 
   */
  GetPermissionPolicy = "waf-regional:GetPermissionPolicy",

  /**
   * Read - Grants permission to retrieve a RateBasedRule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ratebasedrule `WafRegionalResource.ratebasedrule`} 
   */
  GetRateBasedRule = "waf-regional:GetRateBasedRule",

  /**
   * Read - Grants permission to retrieve the array of IP addresses that are currently being blocked by a RateBasedRule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRateBasedRuleManagedKeys.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ratebasedrule `WafRegionalResource.ratebasedrule`} 
   */
  GetRateBasedRuleManagedKeys = "waf-regional:GetRateBasedRuleManagedKeys",

  /**
   * Read - Grants permission to retrieve a RegexMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.regexmatchset `WafRegionalResource.regexmatchset`} 
   */
  GetRegexMatchSet = "waf-regional:GetRegexMatchSet",

  /**
   * Read - Grants permission to retrieve a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.regexpatternset `WafRegionalResource.regexpatternset`} 
   */
  GetRegexPatternSet = "waf-regional:GetRegexPatternSet",

  /**
   * Read - Grants permission to retrieve a Rule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rule `WafRegionalResource.rule`} 
   */
  GetRule = "waf-regional:GetRule",

  /**
   * Read - Grants permission to retrieve a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rulegroup `WafRegionalResource.rulegroup`} 
   */
  GetRuleGroup = "waf-regional:GetRuleGroup",

  /**
   * Read - Grants permission to retrieve detailed information for a sample set of web requests
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSampledRequests.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rule `WafRegionalResource.rule`} 
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   */
  GetSampledRequests = "waf-regional:GetSampledRequests",

  /**
   * Read - Grants permission to retrieve a SizeConstraintSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSizeConstraintSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.sizeconstraintset `WafRegionalResource.sizeconstraintset`} 
   */
  GetSizeConstraintSet = "waf-regional:GetSizeConstraintSet",

  /**
   * Read - Grants permission to retrieve an SqlInjectionMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetSqlInjectionMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.sqlinjectionmatchset `WafRegionalResource.sqlinjectionmatchset`} 
   */
  GetSqlInjectionMatchSet = "waf-regional:GetSqlInjectionMatchSet",

  /**
   * Read - Grants permission to retrieve a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   */
  GetWebACL = "waf-regional:GetWebACL",

  /**
   * Read - Grants permission to retrieve a WebACL that's associated with a specified resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetWebACLForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.loadbalancer/app/ `WafRegionalResource.loadbalancer/app/`} 
   */
  GetWebACLForResource = "waf-regional:GetWebACLForResource",

  /**
   * Read - Grants permission to retrieve an XssMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GetXssMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.xssmatchset `WafRegionalResource.xssmatchset`} 
   */
  GetXssMatchSet = "waf-regional:GetXssMatchSet",

  /**
   * List - Grants permission to retrieve an array of ActivatedRule objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListActivatedRulesInRuleGroup.html
   */
  ListActivatedRulesInRuleGroup = "waf-regional:ListActivatedRulesInRuleGroup",

  /**
   * List - Grants permission to retrieve an array of ByteMatchSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListByteMatchSets.html
   */
  ListByteMatchSets = "waf-regional:ListByteMatchSets",

  /**
   * List - Grants permission to retrieve an array of GeoMatchSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListGeoMatchSets.html
   */
  ListGeoMatchSets = "waf-regional:ListGeoMatchSets",

  /**
   * List - Grants permission to retrieve an array of IPSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListIPSets.html
   */
  ListIPSets = "waf-regional:ListIPSets",

  /**
   * List - Grants permission to retrieve an array of LoggingConfiguration objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListLoggingConfigurations.html
   */
  ListLoggingConfigurations = "waf-regional:ListLoggingConfigurations",

  /**
   * List - Grants permission to retrieve an array of RuleSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRateBasedRules.html
   */
  ListRateBasedRules = "waf-regional:ListRateBasedRules",

  /**
   * List - Grants permission to retrieve an array of RegexMatchSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexMatchSets.html
   */
  ListRegexMatchSets = "waf-regional:ListRegexMatchSets",

  /**
   * List - Grants permission to retrieve an array of RegexPatternSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRegexPatternSets.html
   */
  ListRegexPatternSets = "waf-regional:ListRegexPatternSets",

  /**
   * List - Grants permission to retrieve an array of resources associated with a specified WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListResourcesForWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   */
  ListResourcesForWebACL = "waf-regional:ListResourcesForWebACL",

  /**
   * List - Grants permission to retrieve an array of RuleGroup objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRuleGroups.html
   */
  ListRuleGroups = "waf-regional:ListRuleGroups",

  /**
   * List - Grants permission to retrieve an array of RuleSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListRules.html
   */
  ListRules = "waf-regional:ListRules",

  /**
   * List - Grants permission to retrieve an array of SizeConstraintSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSizeConstraintSets.html
   */
  ListSizeConstraintSets = "waf-regional:ListSizeConstraintSets",

  /**
   * List - Grants permission to retrieve an array of SqlInjectionMatchSet objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSqlInjectionMatchSets.html
   */
  ListSqlInjectionMatchSets = "waf-regional:ListSqlInjectionMatchSets",

  /**
   * List - Grants permission to retrieve an array of RuleGroup objects that you are subscribed to
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListSubscribedRuleGroups.html
   */
  ListSubscribedRuleGroups = "waf-regional:ListSubscribedRuleGroups",

  /**
   * Read - Grants permission to lists the Tags for a resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ratebasedrule `WafRegionalResource.ratebasedrule`} 
   * - {@link WafRegionalResource.rule `WafRegionalResource.rule`} 
   * - {@link WafRegionalResource.rulegroup `WafRegionalResource.rulegroup`} 
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   */
  ListTagsForResource = "waf-regional:ListTagsForResource",

  /**
   * List - Grants permission to retrieve an array of WebACLSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListWebACLs.html
   */
  ListWebACLs = "waf-regional:ListWebACLs",

  /**
   * List - Grants permission to retrieve an array of XssMatchSet objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ListXssMatchSets.html
   */
  ListXssMatchSets = "waf-regional:ListXssMatchSets",

  /**
   * Write - Grants permission to associates a LoggingConfiguration with a web ACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutLoggingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   */
  PutLoggingConfiguration = "waf-regional:PutLoggingConfiguration",

  /**
   * Permissions management - Grants permission to attach an IAM policy to a specified rule group, to support rule group sharing between accounts
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_PutPermissionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rulegroup `WafRegionalResource.rulegroup`} 
   */
  PutPermissionPolicy = "waf-regional:PutPermissionPolicy",

  /**
   * Tagging - Grants permission to add a Tag to a resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ratebasedrule `WafRegionalResource.ratebasedrule`} 
   * - {@link WafRegionalResource.rule `WafRegionalResource.rule`} 
   * - {@link WafRegionalResource.rulegroup `WafRegionalResource.rulegroup`} 
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "waf-regional:TagResource",

  /**
   * Tagging - Grants permission to remove a Tag from a resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ratebasedrule `WafRegionalResource.ratebasedrule`} 
   * - {@link WafRegionalResource.rule `WafRegionalResource.rule`} 
   * - {@link WafRegionalResource.rulegroup `WafRegionalResource.rulegroup`} 
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "waf-regional:UntagResource",

  /**
   * Write - Grants permission to insert or delete ByteMatchTuple objects in a ByteMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateByteMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.bytematchset `WafRegionalResource.bytematchset`} 
   */
  UpdateByteMatchSet = "waf-regional:UpdateByteMatchSet",

  /**
   * Write - Grants permission to insert or delete GeoMatchConstraint objects in a GeoMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateGeoMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.geomatchset `WafRegionalResource.geomatchset`} 
   */
  UpdateGeoMatchSet = "waf-regional:UpdateGeoMatchSet",

  /**
   * Write - Grants permission to insert or delete IPSetDescriptor objects in an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ipset `WafRegionalResource.ipset`} 
   */
  UpdateIPSet = "waf-regional:UpdateIPSet",

  /**
   * Write - Grants permission to insert or delete predicate objects in a rate based rule and update the RateLimit in the rule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRateBasedRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.ratebasedrule `WafRegionalResource.ratebasedrule`} 
   */
  UpdateRateBasedRule = "waf-regional:UpdateRateBasedRule",

  /**
   * Write - Grants permission to insert or delete RegexMatchTuple objects in a RegexMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.regexmatchset `WafRegionalResource.regexmatchset`} 
   */
  UpdateRegexMatchSet = "waf-regional:UpdateRegexMatchSet",

  /**
   * Write - Grants permission to insert or delete RegexPatternStrings in a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.regexpatternset `WafRegionalResource.regexpatternset`} 
   */
  UpdateRegexPatternSet = "waf-regional:UpdateRegexPatternSet",

  /**
   * Write - Grants permission to insert or delete predicate objects in a Rule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rule `WafRegionalResource.rule`} 
   */
  UpdateRule = "waf-regional:UpdateRule",

  /**
   * Write - Grants permission to insert or delete ActivatedRule objects in a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.rulegroup `WafRegionalResource.rulegroup`} 
   */
  UpdateRuleGroup = "waf-regional:UpdateRuleGroup",

  /**
   * Write - Grants permission to insert or delete SizeConstraint objects in a SizeConstraintSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSizeConstraintSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.sizeconstraintset `WafRegionalResource.sizeconstraintset`} 
   */
  UpdateSizeConstraintSet = "waf-regional:UpdateSizeConstraintSet",

  /**
   * Write - Grants permission to insert or delete SqlInjectionMatchTuple objects in an SqlInjectionMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateSqlInjectionMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.sqlinjectionmatchset `WafRegionalResource.sqlinjectionmatchset`} 
   */
  UpdateSqlInjectionMatchSet = "waf-regional:UpdateSqlInjectionMatchSet",

  /**
   * Permissions management - Grants permission to insert or delete ActivatedRule objects in a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   */
  UpdateWebACL = "waf-regional:UpdateWebACL",

  /**
   * Write - Grants permission to insert or delete XssMatchTuple objects in an XssMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_UpdateXssMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.xssmatchset `WafRegionalResource.xssmatchset`} 
   */
  UpdateXssMatchSet = "waf-regional:UpdateXssMatchSet",

  /**
   * * - Grant all waf-regional permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafregional.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafRegionalResource.loadbalancer/app/ `WafRegionalResource.loadbalancer/app/`} 
   * - {@link WafRegionalResource.webacl `WafRegionalResource.webacl`} 
   * - {@link WafRegionalResource.bytematchset `WafRegionalResource.bytematchset`} 
   * - {@link WafRegionalResource.geomatchset `WafRegionalResource.geomatchset`} 
   * - {@link WafRegionalResource.ipset `WafRegionalResource.ipset`} 
   * - {@link WafRegionalResource.ratebasedrule `WafRegionalResource.ratebasedrule`} 
   * - {@link WafRegionalResource.regexmatchset `WafRegionalResource.regexmatchset`} 
   * - {@link WafRegionalResource.regexpatternset `WafRegionalResource.regexpatternset`} 
   * - {@link WafRegionalResource.rule `WafRegionalResource.rule`} 
   * - {@link WafRegionalResource.rulegroup `WafRegionalResource.rulegroup`} 
   * - {@link WafRegionalResource.sizeconstraintset `WafRegionalResource.sizeconstraintset`} 
   * - {@link WafRegionalResource.sqlinjectionmatchset `WafRegionalResource.sqlinjectionmatchset`} 
   * - {@link WafRegionalResource.xssmatchset `WafRegionalResource.xssmatchset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "waf-regional:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswafregional.html
 */
export const WafRegionalResource = {

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_ByteMatchSet.html
   */
  bytematchset: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:bytematchset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_IPSet.html
   */
  ipset: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:ipset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_WebACL.html
   */
  loadbalancer/app/: (options: Partial<{partition: string, region: string, account: string, loadBalancerName: string, loadBalancerId: string}> = {}) => `arn:${options.partition || '*'}:elasticloadbalancing:${options.region || '*'}:${options.account || '*'}:loadbalancer/app/${options.loadBalancerName || '*'}/${options.loadBalancerId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RateBasedRule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ratebasedrule: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:ratebasedrule/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_Rule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  rule: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:rule/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_SizeConstraintSet.html
   */
  sizeconstraintset: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:sizeconstraintset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_SqlInjectionMatchSet.html
   */
  sqlinjectionmatchset: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:sqlinjectionset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_WebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  webacl: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:webacl/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_XssMatchSet.html
   */
  xssmatchset: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:xssmatchset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RegexMatchSet.html
   */
  regexmatchset: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:regexmatch/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RegexPatternSet.html
   */
  regexpatternset: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:regexpatternset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_GeoMatchSet.html
   */
  geomatchset: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:geomatchset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_wafRegional_RuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  rulegroup: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf-regional:${options.region || '*'}:${options.account || '*'}:rulegroup/${options.id || '*'}`,
}

