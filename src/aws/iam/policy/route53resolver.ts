/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53resolver.html
 */
export enum Route53resolverAction {

  /**
   * Write - Grants permission to associate an Amazon VPC with a specified firewall rule group
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateFirewallRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroupAssociation `Route53resolverResource.firewallRuleGroupAssociation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateFirewallRuleGroup = "route53resolver:AssociateFirewallRuleGroup",

  /**
   * Write - Grants permission to associate a specified IP address with a Resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverEndpoint `Route53resolverResource.resolverEndpoint`} 
   */
  AssociateResolverEndpointIpAddress = "route53resolver:AssociateResolverEndpointIpAddress",

  /**
   * Write - Grants permission to associate an Amazon VPC with a specified query logging configuration
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   */
  AssociateResolverQueryLogConfig = "route53resolver:AssociateResolverQueryLogConfig",

  /**
   * Write - Grants permission to associate a specified Resolver rule with a specified VPC
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   */
  AssociateResolverRule = "route53resolver:AssociateResolverRule",

  /**
   * Write - Grants permission to create a Firewall domain list
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateFirewallDomainList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallDomainList `Route53resolverResource.firewallDomainList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateFirewallDomainList = "route53resolver:CreateFirewallDomainList",

  /**
   * Write - Grants permission to create a Firewall rule within a Firewall rule group
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateFirewallRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   */
  CreateFirewallRule = "route53resolver:CreateFirewallRule",

  /**
   * Write - Grants permission to create a Firewall rule group
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateFirewallRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateFirewallRuleGroup = "route53resolver:CreateFirewallRuleGroup",

  /**
   * Write - Grants permission to create a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverEndpoint `Route53resolverResource.resolverEndpoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateResolverEndpoint = "route53resolver:CreateResolverEndpoint",

  /**
   * Write - Grants permission to create a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateResolverQueryLogConfig = "route53resolver:CreateResolverQueryLogConfig",

  /**
   * Write - Grants permission to define how to route queries originating from your VPC out of the VPC
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateResolverRule = "route53resolver:CreateResolverRule",

  /**
   * Write - Grants permission to delete a Firewall domain list
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteFirewallDomainList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallDomainList `Route53resolverResource.firewallDomainList`} 
   */
  DeleteFirewallDomainList = "route53resolver:DeleteFirewallDomainList",

  /**
   * Write - Grants permission to delete a Firewall rule within a Firewall rule group
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteFirewallRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   */
  DeleteFirewallRule = "route53resolver:DeleteFirewallRule",

  /**
   * Write - Grants permission to delete a Firewall rule group
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteFirewallRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   */
  DeleteFirewallRuleGroup = "route53resolver:DeleteFirewallRuleGroup",

  /**
   * Write - Grants permission to delete a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound endpoint
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverEndpoint `Route53resolverResource.resolverEndpoint`} 
   */
  DeleteResolverEndpoint = "route53resolver:DeleteResolverEndpoint",

  /**
   * Write - Grants permission to delete a Resolver query logging configuration
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   */
  DeleteResolverQueryLogConfig = "route53resolver:DeleteResolverQueryLogConfig",

  /**
   * Write - Grants permission to delete a Resolver rule
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   */
  DeleteResolverRule = "route53resolver:DeleteResolverRule",

  /**
   * Write - Grants permission to remove the association between a specified Firewall rule group and a specified VPC
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateFirewallRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroupAssociation `Route53resolverResource.firewallRuleGroupAssociation`} 
   */
  DisassociateFirewallRuleGroup = "route53resolver:DisassociateFirewallRuleGroup",

  /**
   * Write - Grants permission to remove a specified IP address from a Resolver endpoint. This is an IP address that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound)
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverEndpoint `Route53resolverResource.resolverEndpoint`} 
   */
  DisassociateResolverEndpointIpAddress = "route53resolver:DisassociateResolverEndpointIpAddress",

  /**
   * Write - Grants permission to remove the association between a specified Resolver query logging configuration and a specified VPC
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   */
  DisassociateResolverQueryLogConfig = "route53resolver:DisassociateResolverQueryLogConfig",

  /**
   * Write - Grants permission to remove the association between a specified Resolver rule and a specified VPC
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   */
  DisassociateResolverRule = "route53resolver:DisassociateResolverRule",

  /**
   * Read - Grants permission to get information about a specified Firewall config
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallConfig `Route53resolverResource.firewallConfig`} 
   */
  GetFirewallConfig = "route53resolver:GetFirewallConfig",

  /**
   * Read - Grants permission to get information about a specified Firewall domain list
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallDomainList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallDomainList `Route53resolverResource.firewallDomainList`} 
   */
  GetFirewallDomainList = "route53resolver:GetFirewallDomainList",

  /**
   * Read - Grants permission to get information about a specified Firewall rule group
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallRuleGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   */
  GetFirewallRuleGroup = "route53resolver:GetFirewallRuleGroup",

  /**
   * Read - Grants permission to get information about an association between a specified Firewall rule group and a VPC
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallRuleGroupAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroupAssociation `Route53resolverResource.firewallRuleGroupAssociation`} 
   */
  GetFirewallRuleGroupAssociation = "route53resolver:GetFirewallRuleGroupAssociation",

  /**
   * Read - Grants permission to get information about a specified Firewall rule group policy, which specifies the Firewall rule group operations and resources that you want to allow another AWS account to use
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallRuleGroupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   */
  GetFirewallRuleGroupPolicy = "route53resolver:GetFirewallRuleGroupPolicy",

  /**
   * Read - Grants permission to get the Resolver Config status within the specified resource
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverConfig `Route53resolverResource.resolverConfig`} 
   */
  GetResolverConfig = "route53resolver:GetResolverConfig",

  /**
   * Read - Grants permission to get the DNSSEC validation support status for DNS queries within the specified resource
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverDnssecConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverDnssecConfig `Route53resolverResource.resolverDnssecConfig`} 
   */
  GetResolverDnssecConfig = "route53resolver:GetResolverDnssecConfig",

  /**
   * Read - Grants permission to get information about a specified Resolver endpoint, such as whether it's an inbound or an outbound endpoint, and the IP addresses in your VPC that DNS queries are forwarded to on the way into or out of your VPC
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverEndpoint `Route53resolverResource.resolverEndpoint`} 
   */
  GetResolverEndpoint = "route53resolver:GetResolverEndpoint",

  /**
   * Read - Grants permission to get information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   */
  GetResolverQueryLogConfig = "route53resolver:GetResolverQueryLogConfig",

  /**
   * Read - Grants permission to get information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   */
  GetResolverQueryLogConfigAssociation = "route53resolver:GetResolverQueryLogConfigAssociation",

  /**
   * Read - Grants permission to get information about a specified Resolver query logging policy, which specifies the Resolver query logging operations and resources that you want to allow another AWS account to use
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfigPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   */
  GetResolverQueryLogConfigPolicy = "route53resolver:GetResolverQueryLogConfigPolicy",

  /**
   * Read - Grants permission to get information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the IP address that queries are forwarded to
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   */
  GetResolverRule = "route53resolver:GetResolverRule",

  /**
   * Read - Grants permission to get information about an association between a specified Resolver rule and a VPC
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRuleAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   */
  GetResolverRuleAssociation = "route53resolver:GetResolverRuleAssociation",

  /**
   * Read - Grants permission to get information about a Resolver rule policy, which specifies the Resolver operations and resources that you want to allow another AWS account to use
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRulePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   */
  GetResolverRulePolicy = "route53resolver:GetResolverRulePolicy",

  /**
   * Write - Grants permission to add, remove or replace Firewall domains in a Firewall domain list
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ImportFirewallDomains.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallDomainList `Route53resolverResource.firewallDomainList`} 
   */
  ImportFirewallDomains = "route53resolver:ImportFirewallDomains",

  /**
   * List - Grants permission to list all the Firewall config that current AWS account is able to check
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallConfigs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallConfig `Route53resolverResource.firewallConfig`} 
   */
  ListFirewallConfigs = "route53resolver:ListFirewallConfigs",

  /**
   * List - Grants permission to list all the Firewall domain list that current AWS account is able to use
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallDomainLists.html
   */
  ListFirewallDomainLists = "route53resolver:ListFirewallDomainLists",

  /**
   * List - Grants permission to list all the Firewall domain under a speicfied Firewall domain list
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallDomains.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallDomainList `Route53resolverResource.firewallDomainList`} 
   */
  ListFirewallDomains = "route53resolver:ListFirewallDomains",

  /**
   * List - Grants permission to list information about associations between Amazon VPCs and Firewall rule group
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallRuleGroupAssociations.html
   */
  ListFirewallRuleGroupAssociations = "route53resolver:ListFirewallRuleGroupAssociations",

  /**
   * List - Grants permission to list all the Firewall rule group that current AWS account is able to use
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallRuleGroups.html
   */
  ListFirewallRuleGroups = "route53resolver:ListFirewallRuleGroups",

  /**
   * List - Grants permission to list all the Firewall rule under a speicfied Firewall rule group
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   */
  ListFirewallRules = "route53resolver:ListFirewallRules",

  /**
   * List - Grants permission to list Resolver Config statuses
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverConfigs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverConfig `Route53resolverResource.resolverConfig`} 
   */
  ListResolverConfigs = "route53resolver:ListResolverConfigs",

  /**
   * List - Grants permission to list the DNSSEC validation support status for DNS queries
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverDnssecConfigs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverDnssecConfig `Route53resolverResource.resolverDnssecConfig`} 
   */
  ListResolverDnssecConfigs = "route53resolver:ListResolverDnssecConfigs",

  /**
   * List - Grants permission to list the IP addresses that DNS queries pass through on the way to your network (outbound) or your VPCs (inbound) for a specified Resolver endpoint
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpointIpAddresses.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverEndpoint `Route53resolverResource.resolverEndpoint`} 
   */
  ListResolverEndpointIpAddresses = "route53resolver:ListResolverEndpointIpAddresses",

  /**
   * List - Grants permission to list all the Resolver endpoints that were created using the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html
   */
  ListResolverEndpoints = "route53resolver:ListResolverEndpoints",

  /**
   * List - Grants permission to list information about associations between Amazon VPCs and query logging configurations
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   */
  ListResolverQueryLogConfigAssociations = "route53resolver:ListResolverQueryLogConfigAssociations",

  /**
   * List - Grants permission to list information about the specified query logging configurations, which define where you want Resolver to save DNS query logs and specify the VPCs that you want to log queries for
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   */
  ListResolverQueryLogConfigs = "route53resolver:ListResolverQueryLogConfigs",

  /**
   * List - Grants permission to list the associations that were created between Resolver rules and VPCs using the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html
   */
  ListResolverRuleAssociations = "route53resolver:ListResolverRuleAssociations",

  /**
   * List - Grants permission to list the Resolver rules that were created using the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html
   */
  ListResolverRules = "route53resolver:ListResolverRules",

  /**
   * Read - Grants permission to list the tags that you associated with the specified resource
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallDomainList `Route53resolverResource.firewallDomainList`} 
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   * - {@link Route53resolverResource.firewallRuleGroupAssociation `Route53resolverResource.firewallRuleGroupAssociation`} 
   * - {@link Route53resolverResource.resolverEndpoint `Route53resolverResource.resolverEndpoint`} 
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   */
  ListTagsForResource = "route53resolver:ListTagsForResource",

  /**
   * Permissions management - Grants permission to specify an AWS account that you want to share a Firewall rule group with, the Firewall rule group that you want to share, and the operations that you want the account to be able to perform on the configuration
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutFirewallRuleGroupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   */
  PutFirewallRuleGroupPolicy = "route53resolver:PutFirewallRuleGroupPolicy",

  /**
   * Permissions management - Grants permission to specify an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverQueryLogConfigPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   */
  PutResolverQueryLogConfigPolicy = "route53resolver:PutResolverQueryLogConfigPolicy",

  /**
   * Permissions management - Grants permission to specify an AWS account that you want to share rules with, the Resolver rules that you want to share, and the operations that you want the account to be able to perform on those rules
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_PutResolverRulePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   */
  PutResolverRulePolicy = "route53resolver:PutResolverRulePolicy",

  /**
   * Tagging - Grants permission to add one or more tags to a specified resource
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallDomainList `Route53resolverResource.firewallDomainList`} 
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   * - {@link Route53resolverResource.firewallRuleGroupAssociation `Route53resolverResource.firewallRuleGroupAssociation`} 
   * - {@link Route53resolverResource.resolverEndpoint `Route53resolverResource.resolverEndpoint`} 
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   */
  TagResource = "route53resolver:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from a specified resource
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallDomainList `Route53resolverResource.firewallDomainList`} 
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   * - {@link Route53resolverResource.firewallRuleGroupAssociation `Route53resolverResource.firewallRuleGroupAssociation`} 
   * - {@link Route53resolverResource.resolverEndpoint `Route53resolverResource.resolverEndpoint`} 
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   */
  UntagResource = "route53resolver:UntagResource",

  /**
   * Write - Grants permission to update selected settings for an Firewall config
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallConfig `Route53resolverResource.firewallConfig`} 
   */
  UpdateFirewallConfig = "route53resolver:UpdateFirewallConfig",

  /**
   * Write - Grants permission to add, remove or replace Firewall domains in a Firewall domain list
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallDomains.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallDomainList `Route53resolverResource.firewallDomainList`} 
   */
  UpdateFirewallDomains = "route53resolver:UpdateFirewallDomains",

  /**
   * Write - Grants permission to update selected settings for an Firewall rule in a Firewall rule group
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   */
  UpdateFirewallRule = "route53resolver:UpdateFirewallRule",

  /**
   * Write - Grants permission to update selected settings for an Firewall rule group association
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateFirewallRuleGroupAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroupAssociation `Route53resolverResource.firewallRuleGroupAssociation`} 
   */
  UpdateFirewallRuleGroupAssociation = "route53resolver:UpdateFirewallRuleGroupAssociation",

  /**
   * Write - Grants permission to update the Resolver Config status within the specified resource
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverConfig `Route53resolverResource.resolverConfig`} 
   */
  UpdateResolverConfig = "route53resolver:UpdateResolverConfig",

  /**
   * Write - Grants permission to update the DNSSEC validation support status for DNS queries within the specified resource
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverDnssecConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverDnssecConfig `Route53resolverResource.resolverDnssecConfig`} 
   */
  UpdateResolverDnssecConfig = "route53resolver:UpdateResolverDnssecConfig",

  /**
   * Write - Grants permission to update selected settings for an inbound or an outbound Resolver endpoint
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverEndpoint `Route53resolverResource.resolverEndpoint`} 
   */
  UpdateResolverEndpoint = "route53resolver:UpdateResolverEndpoint",

  /**
   * Write - Grants permission to update settings for a specified Resolver rule
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   */
  UpdateResolverRule = "route53resolver:UpdateResolverRule",

  /**
   * * - Grant all route53resolver permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53resolver.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53resolverResource.firewallRuleGroupAssociation `Route53resolverResource.firewallRuleGroupAssociation`} 
   * - {@link Route53resolverResource.resolverEndpoint `Route53resolverResource.resolverEndpoint`} 
   * - {@link Route53resolverResource.resolverQueryLogConfig `Route53resolverResource.resolverQueryLogConfig`} 
   * - {@link Route53resolverResource.resolverRule `Route53resolverResource.resolverRule`} 
   * - {@link Route53resolverResource.firewallDomainList `Route53resolverResource.firewallDomainList`} 
   * - {@link Route53resolverResource.firewallRuleGroup `Route53resolverResource.firewallRuleGroup`} 
   * - {@link Route53resolverResource.firewallConfig `Route53resolverResource.firewallConfig`} 
   * - {@link Route53resolverResource.resolverConfig `Route53resolverResource.resolverConfig`} 
   * - {@link Route53resolverResource.resolverDnssecConfig `Route53resolverResource.resolverDnssecConfig`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "route53resolver:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53resolver.html
 */
export const Route53resolverResource = {

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  resolverDnssecConfig: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53resolver:${options.region || '*'}:${options.account || '*'}:resolver-dnssec-config/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  resolverQueryLogConfig: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53resolver:${options.region || '*'}:${options.account || '*'}:resolver-query-log-config/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  resolverRule: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53resolver:${options.region || '*'}:${options.account || '*'}:resolver-rule/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  resolverEndpoint: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53resolver:${options.region || '*'}:${options.account || '*'}:resolver-endpoint/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  firewallRuleGroup: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53resolver:${options.region || '*'}:${options.account || '*'}:firewall-rule-group/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  firewallRuleGroupAssociation: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53resolver:${options.region || '*'}:${options.account || '*'}:firewall-rule-group-association/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  firewallDomainList: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53resolver:${options.region || '*'}:${options.account || '*'}:firewall-domain-list/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  firewallConfig: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53resolver:${options.region || '*'}:${options.account || '*'}:firewall-config/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/access-control-overview.html#access-control-resources
   */
  resolverConfig: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53resolver:${options.region || '*'}:${options.account || '*'}:resolver-config/${options.resourceId || '*'}`,
}

