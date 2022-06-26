/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsnetworkfirewall.html
 */
export enum NetworkFirewallAction {

  /**
   * Write - Grants permission to create an association between a firewall policy and a firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_AssociateFirewallPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   */
  AssociateFirewallPolicy = "network-firewall:AssociateFirewallPolicy",

  /**
   * Write - Grants permission to associate VPC subnets to a firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_AssociateSubnets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   */
  AssociateSubnets = "network-firewall:AssociateSubnets",

  /**
   * Write - Grants permission to create an AWS Network Firewall firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_CreateFirewall.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFirewall = "network-firewall:CreateFirewall",

  /**
   * Write - Grants permission to create an AWS Network Firewall firewall policy
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_CreateFirewallPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFirewallPolicy = "network-firewall:CreateFirewallPolicy",

  /**
   * Write - Grants permission to create an AWS Network Firewall rule group
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_CreateRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRuleGroup = "network-firewall:CreateRuleGroup",

  /**
   * Write - Grants permission to delete a firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteFirewall.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   */
  DeleteFirewall = "network-firewall:DeleteFirewall",

  /**
   * Write - Grants permission to delete a firewall policy
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteFirewallPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   */
  DeleteFirewallPolicy = "network-firewall:DeleteFirewallPolicy",

  /**
   * Write - Grants permission to delete a resource policy for a firewall policy or rule group
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   */
  DeleteResourcePolicy = "network-firewall:DeleteResourcePolicy",

  /**
   * Write - Grants permission to delete a rule group
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   */
  DeleteRuleGroup = "network-firewall:DeleteRuleGroup",

  /**
   * Read - Grants permission to retrieve the data objects that define a firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeFirewall.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   */
  DescribeFirewall = "network-firewall:DescribeFirewall",

  /**
   * Read - Grants permission to retrieve the data objects that define a firewall policy
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeFirewallPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   */
  DescribeFirewallPolicy = "network-firewall:DescribeFirewallPolicy",

  /**
   * Read - Grants permission to describe the logging configuration of a firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeLoggingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   */
  DescribeLoggingConfiguration = "network-firewall:DescribeLoggingConfiguration",

  /**
   * Read - Grants permission to describe a resource policy for a firewall policy or rule group
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   */
  DescribeResourcePolicy = "network-firewall:DescribeResourcePolicy",

  /**
   * Read - Grants permission to retrieve the data objects that define a rule group
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   */
  DescribeRuleGroup = "network-firewall:DescribeRuleGroup",

  /**
   * Read - Grants permission to retrieve the high-level information about a rule group
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroupMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   */
  DescribeRuleGroupMetadata = "network-firewall:DescribeRuleGroupMetadata",

  /**
   * Write - Grants permission to disassociate VPC subnets from a firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DisassociateSubnets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   */
  DisassociateSubnets = "network-firewall:DisassociateSubnets",

  /**
   * List - Grants permission to retrieve the metadata for firewall policies
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListFirewallPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   */
  ListFirewallPolicies = "network-firewall:ListFirewallPolicies",

  /**
   * List - Grants permission to retrieve the metadata for firewalls
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListFirewalls.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   */
  ListFirewalls = "network-firewall:ListFirewalls",

  /**
   * List - Grants permission to retrieve the metadata for rule groups
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListRuleGroups.html
   */
  ListRuleGroups = "network-firewall:ListRuleGroups",

  /**
   * List - Grants permission to retrieve the tags for a resource
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   */
  ListTagsForResource = "network-firewall:ListTagsForResource",

  /**
   * Write - Grants permission to put a resource policy for a firewall policy or rule group
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_PutResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   */
  PutResourcePolicy = "network-firewall:PutResourcePolicy",

  /**
   * Tagging - Grants permission to attach tags to a resource
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "network-firewall:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "network-firewall:UntagResource",

  /**
   * Write - Grants permission to add or remove delete protection for a firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallDeleteProtection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   */
  UpdateFirewallDeleteProtection = "network-firewall:UpdateFirewallDeleteProtection",

  /**
   * Write - Grants permission to modify the description for a firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallDescription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   */
  UpdateFirewallDescription = "network-firewall:UpdateFirewallDescription",

  /**
   * Write - Grants permission to modify a firewall policy
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   */
  UpdateFirewallPolicy = "network-firewall:UpdateFirewallPolicy",

  /**
   * Write - Grants permission to add or remove firewall policy change protection for a firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallPolicyChangeProtection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   */
  UpdateFirewallPolicyChangeProtection = "network-firewall:UpdateFirewallPolicyChangeProtection",

  /**
   * Write - Grants permission to modify the logging configuration of a firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateLoggingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   */
  UpdateLoggingConfiguration = "network-firewall:UpdateLoggingConfiguration",

  /**
   * Write - Grants permission to modify a rule group
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   */
  UpdateRuleGroup = "network-firewall:UpdateRuleGroup",

  /**
   * Write - Grants permission to add or remove subnet change protection for a firewall
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateSubnetChangeProtection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   */
  UpdateSubnetChangeProtection = "network-firewall:UpdateSubnetChangeProtection",

  /**
   * * - Grant all network-firewall permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsnetworkfirewall.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkFirewallResource.firewall `NetworkFirewallResource.firewall`} 
   * - {@link NetworkFirewallResource.firewallPolicy `NetworkFirewallResource.firewallPolicy`} 
   * - {@link NetworkFirewallResource.statefulRuleGroup `NetworkFirewallResource.statefulRuleGroup`} 
   * - {@link NetworkFirewallResource.statelessRuleGroup `NetworkFirewallResource.statelessRuleGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "network-firewall:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsnetworkfirewall.html
 */
export const NetworkFirewallResource = {

  /**
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_Firewall.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  firewall: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:network-firewall:${options.region || '*'}:${options.account || '*'}:firewall/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_FirewallPolicyResponse.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  firewallPolicy: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:network-firewall:${options.region || '*'}:${options.account || '*'}:firewall-policy/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_RuleGroupResponse.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  statefulRuleGroup: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:network-firewall:${options.region || '*'}:${options.account || '*'}:stateful-rulegroup/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_RuleGroupResponse.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  statelessRuleGroup: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:network-firewall:${options.region || '*'}:${options.account || '*'}:stateless-rulegroup/${options.name || '*'}`,
}

