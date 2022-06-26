/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswaf.html
 */
export enum WafAction {

  /**
   * Write - Grants permission to create a ByteMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateByteMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.bytematchset `WafResource.bytematchset`} 
   */
  CreateByteMatchSet = "waf:CreateByteMatchSet",

  /**
   * Write - Grants permission to create a GeoMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateGeoMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.geomatchset `WafResource.geomatchset`} 
   */
  CreateGeoMatchSet = "waf:CreateGeoMatchSet",

  /**
   * Write - Grants permission to create an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ipset `WafResource.ipset`} 
   */
  CreateIPSet = "waf:CreateIPSet",

  /**
   * Write - Grants permission to create a RateBasedRule for limiting the volume of requests from a single IP address
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRateBasedRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ratebasedrule `WafResource.ratebasedrule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRateBasedRule = "waf:CreateRateBasedRule",

  /**
   * Write - Grants permission to create a RegexMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRegexMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.regexmatchset `WafResource.regexmatchset`} 
   */
  CreateRegexMatchSet = "waf:CreateRegexMatchSet",

  /**
   * Write - Grants permission to create a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.regexpatternset `WafResource.regexpatternset`} 
   */
  CreateRegexPatternSet = "waf:CreateRegexPatternSet",

  /**
   * Write - Grants permission to create a Rule for filtering web requests
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rule `WafResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRule = "waf:CreateRule",

  /**
   * Write - Grants permission to create a RuleGroup, which is a collection of predefined rules that you can use in a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rulegroup `WafResource.rulegroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRuleGroup = "waf:CreateRuleGroup",

  /**
   * Write - Grants permission to create a SizeConstraintSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateSizeConstraintSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.sizeconstraintset `WafResource.sizeconstraintset`} 
   */
  CreateSizeConstraintSet = "waf:CreateSizeConstraintSet",

  /**
   * Write - Grants permission to create an SqlInjectionMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateSqlInjectionMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.sqlinjectionmatchset `WafResource.sqlinjectionmatchset`} 
   */
  CreateSqlInjectionMatchSet = "waf:CreateSqlInjectionMatchSet",

  /**
   * Permissions management - Grants permission to create a WebACL, which contains rules for filtering web requests
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.webacl `WafResource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWebACL = "waf:CreateWebACL",

  /**
   * Write - Grants permission to create a CloudFormation web ACL template in an S3 bucket for the purposes of migrating the web ACL from AWS WAF Classic to AWS WAF v2
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateWebACLMigrationStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.webacl `WafResource.webacl`} 
   */
  CreateWebACLMigrationStack = "waf:CreateWebACLMigrationStack",

  /**
   * Write - Grants permission to create an XssMatchSet, which you use to detect requests that contain cross-site scripting attacks
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_CreateXssMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.xssmatchset `WafResource.xssmatchset`} 
   */
  CreateXssMatchSet = "waf:CreateXssMatchSet",

  /**
   * Write - Grants permission to delete a ByteMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteByteMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.bytematchset `WafResource.bytematchset`} 
   */
  DeleteByteMatchSet = "waf:DeleteByteMatchSet",

  /**
   * Write - Grants permission to delete a GeoMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteGeoMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.geomatchset `WafResource.geomatchset`} 
   */
  DeleteGeoMatchSet = "waf:DeleteGeoMatchSet",

  /**
   * Write - Grants permission to delete an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ipset `WafResource.ipset`} 
   */
  DeleteIPSet = "waf:DeleteIPSet",

  /**
   * Write - Grants permission to delete the LoggingConfiguration from a web ACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteLoggingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.webacl `WafResource.webacl`} 
   */
  DeleteLoggingConfiguration = "waf:DeleteLoggingConfiguration",

  /**
   * Permissions management - Grants permission to delete an IAM policy from a rule group
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeletePermissionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rulegroup `WafResource.rulegroup`} 
   */
  DeletePermissionPolicy = "waf:DeletePermissionPolicy",

  /**
   * Write - Grants permission to delete a RateBasedRule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRateBasedRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ratebasedrule `WafResource.ratebasedrule`} 
   */
  DeleteRateBasedRule = "waf:DeleteRateBasedRule",

  /**
   * Write - Grants permission to delete a RegexMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRegexMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.regexmatchset `WafResource.regexmatchset`} 
   */
  DeleteRegexMatchSet = "waf:DeleteRegexMatchSet",

  /**
   * Write - Grants permission to delete a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.regexpatternset `WafResource.regexpatternset`} 
   */
  DeleteRegexPatternSet = "waf:DeleteRegexPatternSet",

  /**
   * Write - Grants permission to delete a Rule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rule `WafResource.rule`} 
   */
  DeleteRule = "waf:DeleteRule",

  /**
   * Write - Grants permission to delete a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rulegroup `WafResource.rulegroup`} 
   */
  DeleteRuleGroup = "waf:DeleteRuleGroup",

  /**
   * Write - Grants permission to delete a SizeConstraintSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteSizeConstraintSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.sizeconstraintset `WafResource.sizeconstraintset`} 
   */
  DeleteSizeConstraintSet = "waf:DeleteSizeConstraintSet",

  /**
   * Write - Grants permission to delete an SqlInjectionMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteSqlInjectionMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.sqlinjectionmatchset `WafResource.sqlinjectionmatchset`} 
   */
  DeleteSqlInjectionMatchSet = "waf:DeleteSqlInjectionMatchSet",

  /**
   * Permissions management - Grants permission to delete a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.webacl `WafResource.webacl`} 
   */
  DeleteWebACL = "waf:DeleteWebACL",

  /**
   * Write - Grants permission to delete an XssMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_DeleteXssMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.xssmatchset `WafResource.xssmatchset`} 
   */
  DeleteXssMatchSet = "waf:DeleteXssMatchSet",

  /**
   * Read - Grants permission to retrieve a ByteMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetByteMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.bytematchset `WafResource.bytematchset`} 
   */
  GetByteMatchSet = "waf:GetByteMatchSet",

  /**
   * Read - Grants permission to retrieve a change token to use in create, update, and delete requests
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetChangeToken.html
   */
  GetChangeToken = "waf:GetChangeToken",

  /**
   * Read - Grants permission to retrieve the status of a change token
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetChangeTokenStatus.html
   */
  GetChangeTokenStatus = "waf:GetChangeTokenStatus",

  /**
   * Read - Grants permission to retrieve a GeoMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetGeoMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.geomatchset `WafResource.geomatchset`} 
   */
  GetGeoMatchSet = "waf:GetGeoMatchSet",

  /**
   * Read - Grants permission to retrieve an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ipset `WafResource.ipset`} 
   */
  GetIPSet = "waf:GetIPSet",

  /**
   * Read - Grants permission to retrieve a LoggingConfiguration for a web ACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetLoggingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.webacl `WafResource.webacl`} 
   */
  GetLoggingConfiguration = "waf:GetLoggingConfiguration",

  /**
   * Read - Grants permission to retrieve an IAM policy for a rule group
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetPermissionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rulegroup `WafResource.rulegroup`} 
   */
  GetPermissionPolicy = "waf:GetPermissionPolicy",

  /**
   * Read - Grants permission to retrieve a RateBasedRule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRateBasedRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ratebasedrule `WafResource.ratebasedrule`} 
   */
  GetRateBasedRule = "waf:GetRateBasedRule",

  /**
   * Read - Grants permission to retrieve the array of IP addresses that are currently being blocked by a RateBasedRule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRateBasedRuleManagedKeys.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ratebasedrule `WafResource.ratebasedrule`} 
   */
  GetRateBasedRuleManagedKeys = "waf:GetRateBasedRuleManagedKeys",

  /**
   * Read - Grants permission to retrieve a RegexMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRegexMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.regexmatchset `WafResource.regexmatchset`} 
   */
  GetRegexMatchSet = "waf:GetRegexMatchSet",

  /**
   * Read - Grants permission to retrieve a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.regexpatternset `WafResource.regexpatternset`} 
   */
  GetRegexPatternSet = "waf:GetRegexPatternSet",

  /**
   * Read - Grants permission to retrieve a Rule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rule `WafResource.rule`} 
   */
  GetRule = "waf:GetRule",

  /**
   * Read - Grants permission to retrieve a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rulegroup `WafResource.rulegroup`} 
   */
  GetRuleGroup = "waf:GetRuleGroup",

  /**
   * Read - Grants permission to retrieve detailed information about a sample set of web requests
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSampledRequests.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rule `WafResource.rule`} 
   * - {@link WafResource.webacl `WafResource.webacl`} 
   */
  GetSampledRequests = "waf:GetSampledRequests",

  /**
   * Read - Grants permission to retrieve a SizeConstraintSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSizeConstraintSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.sizeconstraintset `WafResource.sizeconstraintset`} 
   */
  GetSizeConstraintSet = "waf:GetSizeConstraintSet",

  /**
   * Read - Grants permission to retrieve an SqlInjectionMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetSqlInjectionMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.sqlinjectionmatchset `WafResource.sqlinjectionmatchset`} 
   */
  GetSqlInjectionMatchSet = "waf:GetSqlInjectionMatchSet",

  /**
   * Read - Grants permission to retrieve a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.webacl `WafResource.webacl`} 
   */
  GetWebACL = "waf:GetWebACL",

  /**
   * Read - Grants permission to retrieve an XssMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GetXssMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.xssmatchset `WafResource.xssmatchset`} 
   */
  GetXssMatchSet = "waf:GetXssMatchSet",

  /**
   * List - Grants permission to retrieve an array of ActivatedRule objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListActivatedRulesInRuleGroup.html
   */
  ListActivatedRulesInRuleGroup = "waf:ListActivatedRulesInRuleGroup",

  /**
   * List - Grants permission to retrieve an array of ByteMatchSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListByteMatchSets.html
   */
  ListByteMatchSets = "waf:ListByteMatchSets",

  /**
   * List - Grants permission to retrieve an array of GeoMatchSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListGeoMatchSets.html
   */
  ListGeoMatchSets = "waf:ListGeoMatchSets",

  /**
   * List - Grants permission to retrieve an array of IPSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListIPSets.html
   */
  ListIPSets = "waf:ListIPSets",

  /**
   * List - Grants permission to retrieve an array of LoggingConfiguration objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListLoggingConfigurations.html
   */
  ListLoggingConfigurations = "waf:ListLoggingConfigurations",

  /**
   * List - Grants permission to retrieve an array of RuleSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRateBasedRules.html
   */
  ListRateBasedRules = "waf:ListRateBasedRules",

  /**
   * List - Grants permission to retrieve an array of RegexMatchSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRegexMatchSets.html
   */
  ListRegexMatchSets = "waf:ListRegexMatchSets",

  /**
   * List - Grants permission to retrieve an array of RegexPatternSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRegexPatternSets.html
   */
  ListRegexPatternSets = "waf:ListRegexPatternSets",

  /**
   * List - Grants permission to retrieve an array of RuleGroup objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRuleGroups.html
   */
  ListRuleGroups = "waf:ListRuleGroups",

  /**
   * List - Grants permission to retrieve an array of RuleSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListRules.html
   */
  ListRules = "waf:ListRules",

  /**
   * List - Grants permission to retrieve an array of SizeConstraintSetSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSizeConstraintSets.html
   */
  ListSizeConstraintSets = "waf:ListSizeConstraintSets",

  /**
   * List - Grants permission to retrieve an array of SqlInjectionMatchSet objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSqlInjectionMatchSets.html
   */
  ListSqlInjectionMatchSets = "waf:ListSqlInjectionMatchSets",

  /**
   * List - Grants permission to retrieve an array of RuleGroup objects that you are subscribed to
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListSubscribedRuleGroups.html
   */
  ListSubscribedRuleGroups = "waf:ListSubscribedRuleGroups",

  /**
   * Read - Grants permission to retrieve the tags for a resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ratebasedrule `WafResource.ratebasedrule`} 
   * - {@link WafResource.rule `WafResource.rule`} 
   * - {@link WafResource.rulegroup `WafResource.rulegroup`} 
   * - {@link WafResource.webacl `WafResource.webacl`} 
   */
  ListTagsForResource = "waf:ListTagsForResource",

  /**
   * List - Grants permission to retrieve an array of WebACLSummary objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListWebACLs.html
   */
  ListWebACLs = "waf:ListWebACLs",

  /**
   * List - Grants permission to retrieve an array of XssMatchSet objects
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ListXssMatchSets.html
   */
  ListXssMatchSets = "waf:ListXssMatchSets",

  /**
   * Write - Grants permission to associate a LoggingConfiguration with a specified web ACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_PutLoggingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.webacl `WafResource.webacl`} 
   */
  PutLoggingConfiguration = "waf:PutLoggingConfiguration",

  /**
   * Permissions management - Grants permission to attach an IAM policy to a rule group, to share the rule group between accounts
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_PutPermissionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rulegroup `WafResource.rulegroup`} 
   */
  PutPermissionPolicy = "waf:PutPermissionPolicy",

  /**
   * Tagging - Grants permission to add a Tag to a resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ratebasedrule `WafResource.ratebasedrule`} 
   * - {@link WafResource.rule `WafResource.rule`} 
   * - {@link WafResource.rulegroup `WafResource.rulegroup`} 
   * - {@link WafResource.webacl `WafResource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "waf:TagResource",

  /**
   * Tagging - Grants permission to remove a Tag from a resource
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ratebasedrule `WafResource.ratebasedrule`} 
   * - {@link WafResource.rule `WafResource.rule`} 
   * - {@link WafResource.rulegroup `WafResource.rulegroup`} 
   * - {@link WafResource.webacl `WafResource.webacl`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "waf:UntagResource",

  /**
   * Write - Grants permission to insert or delete ByteMatchTuple objects in a ByteMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateByteMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.bytematchset `WafResource.bytematchset`} 
   */
  UpdateByteMatchSet = "waf:UpdateByteMatchSet",

  /**
   * Write - Grants permission to insert or delete GeoMatchConstraint objects in a GeoMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateGeoMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.geomatchset `WafResource.geomatchset`} 
   */
  UpdateGeoMatchSet = "waf:UpdateGeoMatchSet",

  /**
   * Write - Grants permission to insert or delete IPSetDescriptor objects in an IPSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateIPSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ipset `WafResource.ipset`} 
   */
  UpdateIPSet = "waf:UpdateIPSet",

  /**
   * Write - Grants permission to modify a rate based rule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRateBasedRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.ratebasedrule `WafResource.ratebasedrule`} 
   */
  UpdateRateBasedRule = "waf:UpdateRateBasedRule",

  /**
   * Write - Grants permission to insert or delete RegexMatchTuple objects in a RegexMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRegexMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.regexmatchset `WafResource.regexmatchset`} 
   */
  UpdateRegexMatchSet = "waf:UpdateRegexMatchSet",

  /**
   * Write - Grants permission to insert or delete RegexPatternStrings in a RegexPatternSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRegexPatternSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.regexpatternset `WafResource.regexpatternset`} 
   */
  UpdateRegexPatternSet = "waf:UpdateRegexPatternSet",

  /**
   * Write - Grants permission to modify a Rule
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rule `WafResource.rule`} 
   */
  UpdateRule = "waf:UpdateRule",

  /**
   * Write - Grants permission to insert or delete ActivatedRule objects in a RuleGroup
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.rulegroup `WafResource.rulegroup`} 
   */
  UpdateRuleGroup = "waf:UpdateRuleGroup",

  /**
   * Write - Grants permission to insert or delete SizeConstraint objects in a SizeConstraintSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateSizeConstraintSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.sizeconstraintset `WafResource.sizeconstraintset`} 
   */
  UpdateSizeConstraintSet = "waf:UpdateSizeConstraintSet",

  /**
   * Write - Grants permission to insert or delete SqlInjectionMatchTuple objects in an SqlInjectionMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateSqlInjectionMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.sqlinjectionmatchset `WafResource.sqlinjectionmatchset`} 
   */
  UpdateSqlInjectionMatchSet = "waf:UpdateSqlInjectionMatchSet",

  /**
   * Permissions management - Grants permission to insert or delete ActivatedRule objects in a WebACL
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateWebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.webacl `WafResource.webacl`} 
   */
  UpdateWebACL = "waf:UpdateWebACL",

  /**
   * Write - Grants permission to insert or delete XssMatchTuple objects in an XssMatchSet
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_UpdateXssMatchSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.xssmatchset `WafResource.xssmatchset`} 
   */
  UpdateXssMatchSet = "waf:UpdateXssMatchSet",

  /**
   * * - Grant all waf permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswaf.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WafResource.bytematchset `WafResource.bytematchset`} 
   * - {@link WafResource.geomatchset `WafResource.geomatchset`} 
   * - {@link WafResource.ipset `WafResource.ipset`} 
   * - {@link WafResource.ratebasedrule `WafResource.ratebasedrule`} 
   * - {@link WafResource.regexmatchset `WafResource.regexmatchset`} 
   * - {@link WafResource.regexpatternset `WafResource.regexpatternset`} 
   * - {@link WafResource.rule `WafResource.rule`} 
   * - {@link WafResource.rulegroup `WafResource.rulegroup`} 
   * - {@link WafResource.sizeconstraintset `WafResource.sizeconstraintset`} 
   * - {@link WafResource.sqlinjectionmatchset `WafResource.sqlinjectionmatchset`} 
   * - {@link WafResource.webacl `WafResource.webacl`} 
   * - {@link WafResource.xssmatchset `WafResource.xssmatchset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "waf:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswaf.html
 */
export const WafResource = {

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_ByteMatchSet.html
   */
  bytematchset: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:bytematchset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_IPSet.html
   */
  ipset: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:ipset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RateBasedRule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ratebasedrule: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:ratebasedrule/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_Rule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  rule: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:rule/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_SizeConstraintSet.html
   */
  sizeconstraintset: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:sizeconstraintset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_SqlInjectionMatchSet.html
   */
  sqlinjectionmatchset: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:sqlinjectionset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_WebACL.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  webacl: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:webacl/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_XssMatchSet.html
   */
  xssmatchset: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:xssmatchset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RegexMatchSet.html
   */
  regexmatchset: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:regexmatch/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RegexPatternSet.html
   */
  regexpatternset: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:regexpatternset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_GeoMatchSet.html
   */
  geomatchset: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:geomatchset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/APIReference/API_waf_RuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  rulegroup: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:waf::${options.account || '*'}:rulegroup/${options.id || '*'}`,
}

