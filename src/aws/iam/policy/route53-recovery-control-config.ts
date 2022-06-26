/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoverycontrols.html
 */
export enum Route53RecoveryControlConfigAction {

  /**
   * Write - Grants permission to create a cluster
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.cluster `Route53RecoveryControlConfigResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCluster = "route53-recovery-control-config:CreateCluster",

  /**
   * Write - Grants permission to create a control panel
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.controlpanel `Route53RecoveryControlConfigResource.controlpanel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateControlPanel = "route53-recovery-control-config:CreateControlPanel",

  /**
   * Write - Grants permission to create a routing control
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.routingcontrol `Route53RecoveryControlConfigResource.routingcontrol`} 
   */
  CreateRoutingControl = "route53-recovery-control-config:CreateRoutingControl",

  /**
   * Write - Grants permission to create a safety rule
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.safetyrule `Route53RecoveryControlConfigResource.safetyrule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSafetyRule = "route53-recovery-control-config:CreateSafetyRule",

  /**
   * Write - Grants permission to delete a cluster
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster-clusterarn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.cluster `Route53RecoveryControlConfigResource.cluster`} 
   */
  DeleteCluster = "route53-recovery-control-config:DeleteCluster",

  /**
   * Write - Grants permission to delete a control panel
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.controlpanel `Route53RecoveryControlConfigResource.controlpanel`} 
   */
  DeleteControlPanel = "route53-recovery-control-config:DeleteControlPanel",

  /**
   * Write - Grants permission to delete a routing control
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.routingcontrol `Route53RecoveryControlConfigResource.routingcontrol`} 
   */
  DeleteRoutingControl = "route53-recovery-control-config:DeleteRoutingControl",

  /**
   * Write - Grants permission to delete a safety rule
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule-safetyrulearn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.safetyrule `Route53RecoveryControlConfigResource.safetyrule`} 
   */
  DeleteSafetyRule = "route53-recovery-control-config:DeleteSafetyRule",

  /**
   * Read - Grants permission to describe a cluster
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster-clusterarn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.cluster `Route53RecoveryControlConfigResource.cluster`} 
   */
  DescribeCluster = "route53-recovery-control-config:DescribeCluster",

  /**
   * Read - Grants permission to describe a control panel
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.controlpanel `Route53RecoveryControlConfigResource.controlpanel`} 
   */
  DescribeControlPanel = "route53-recovery-control-config:DescribeControlPanel",

  /**
   * Read - Grants permission to describe a routing control
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.routingcontrol `Route53RecoveryControlConfigResource.routingcontrol`} 
   */
  DescribeRoutingControl = "route53-recovery-control-config:DescribeRoutingControl",

  /**
   * Read - Grants permission to describe a routing control
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.routingcontrol `Route53RecoveryControlConfigResource.routingcontrol`} 
   */
  DescribeRoutingControlByName = "route53-recovery-control-config:DescribeRoutingControlByName",

  /**
   * Read - Grants permission to describe a safety rule
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule-safetyrulearn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.safetyrule `Route53RecoveryControlConfigResource.safetyrule`} 
   */
  DescribeSafetyRule = "route53-recovery-control-config:DescribeSafetyRule",

  /**
   * List - Grants permission to list associated Route 53 health checks
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol-routingcontrolarn-associatedroute53healthchecks.html
   */
  ListAssociatedRoute53HealthChecks = "route53-recovery-control-config:ListAssociatedRoute53HealthChecks",

  /**
   * Read - Grants permission to list clusters
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster.html
   */
  ListClusters = "route53-recovery-control-config:ListClusters",

  /**
   * Read - Grants permission to list control panels
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanels.html
   */
  ListControlPanels = "route53-recovery-control-config:ListControlPanels",

  /**
   * Read - Grants permission to list routing controls
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn-routingcontrols.html
   */
  ListRoutingControls = "route53-recovery-control-config:ListRoutingControls",

  /**
   * Read - Grants permission to list safety rules
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn-safetyrules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.controlpanel `Route53RecoveryControlConfigResource.controlpanel`} 
   */
  ListSafetyRules = "route53-recovery-control-config:ListSafetyRules",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/tags-resource-arn.html
   */
  ListTagsForResource = "route53-recovery-control-config:ListTagsForResource",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/tags-resource-arn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.cluster `Route53RecoveryControlConfigResource.cluster`} 
   * - {@link Route53RecoveryControlConfigResource.controlpanel `Route53RecoveryControlConfigResource.controlpanel`} 
   * - {@link Route53RecoveryControlConfigResource.safetyrule `Route53RecoveryControlConfigResource.safetyrule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "route53-recovery-control-config:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/tags-resource-arn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.cluster `Route53RecoveryControlConfigResource.cluster`} 
   * - {@link Route53RecoveryControlConfigResource.controlpanel `Route53RecoveryControlConfigResource.controlpanel`} 
   * - {@link Route53RecoveryControlConfigResource.safetyrule `Route53RecoveryControlConfigResource.safetyrule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "route53-recovery-control-config:UntagResource",

  /**
   * Write - Grants permission to update a cluster
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.controlpanel `Route53RecoveryControlConfigResource.controlpanel`} 
   */
  UpdateControlPanel = "route53-recovery-control-config:UpdateControlPanel",

  /**
   * Write - Grants permission to update a routing control
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel-controlpanelarn-routingcontrols.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.routingcontrol `Route53RecoveryControlConfigResource.routingcontrol`} 
   */
  UpdateRoutingControl = "route53-recovery-control-config:UpdateRoutingControl",

  /**
   * Write - Grants permission to update a safety rule
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.safetyrule `Route53RecoveryControlConfigResource.safetyrule`} 
   */
  UpdateSafetyRule = "route53-recovery-control-config:UpdateSafetyRule",

  /**
   * * - Grant all route53-recovery-control-config permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoverycontrols.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryControlConfigResource.cluster `Route53RecoveryControlConfigResource.cluster`} 
   * - {@link Route53RecoveryControlConfigResource.controlpanel `Route53RecoveryControlConfigResource.controlpanel`} 
   * - {@link Route53RecoveryControlConfigResource.routingcontrol `Route53RecoveryControlConfigResource.routingcontrol`} 
   * - {@link Route53RecoveryControlConfigResource.safetyrule `Route53RecoveryControlConfigResource.safetyrule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "route53-recovery-control-config:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoverycontrols.html
 */
export const Route53RecoveryControlConfigResource = {

  /**
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cluster: (options: Partial<{partition: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53-recovery-control::${options.account || '*'}:cluster/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/controlpanel.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  controlpanel: (options: Partial<{partition: string, account: string, controlPanelId: string}> = {}) => `arn:${options.partition || '*'}:route53-recovery-control::${options.account || '*'}:controlpanel/${options.controlPanelId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol.html
   */
  routingcontrol: (options: Partial<{partition: string, account: string, controlPanelId: string, routingControlId: string}> = {}) => `arn:${options.partition || '*'}:route53-recovery-control::${options.account || '*'}:controlpanel/${options.controlPanelId || '*'}/routingcontrol/${options.routingControlId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/safetyrule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  safetyrule: (options: Partial<{partition: string, account: string, controlPanelId: string, safetyRuleId: string}> = {}) => `arn:${options.partition || '*'}:route53-recovery-control::${options.account || '*'}:controlpanel/${options.controlPanelId || '*'}/safetyrule/${options.safetyRuleId || '*'}`,
}

