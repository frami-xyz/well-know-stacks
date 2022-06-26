/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoverycluster.html
 */
export enum Route53RecoveryClusterAction {

  /**
   * Read - Grants permission to get a routing control state
   * @see https://docs.aws.amazon.com/routing-control/latest/APIReference/API_GetRoutingControlState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryClusterResource.routingcontrol `Route53RecoveryClusterResource.routingcontrol`} 
   */
  GetRoutingControlState = "route53-recovery-cluster:GetRoutingControlState",

  /**
   * Read - Grants permission to list routing controls
   * @see https://docs.aws.amazon.com/routing-control/latest/APIReference/API_ListRoutingControls.html
   */
  ListRoutingControls = "route53-recovery-cluster:ListRoutingControls",

  /**
   * Write - Grants permission to update a routing control state
   * @see https://docs.aws.amazon.com/routing-control/latest/APIReference/API_UpdateRoutingControlState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryClusterResource.routingcontrol `Route53RecoveryClusterResource.routingcontrol`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `route53-recovery-cluster:AllowSafetyRulesOverrides`: Override safety rules to allow routing control state updates ({@link https://docs.aws.amazon.com/routing-control/latest/APIReference/API_UpdateRoutingControlState.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  UpdateRoutingControlState = "route53-recovery-cluster:UpdateRoutingControlState",

  /**
   * Write - Grants permission to update a batch of routing control states
   * @see https://docs.aws.amazon.com/routing-control/latest/APIReference/API_UpdateRoutingControlStates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryClusterResource.routingcontrol `Route53RecoveryClusterResource.routingcontrol`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `route53-recovery-cluster:AllowSafetyRulesOverrides`: Override safety rules to allow routing control state updates ({@link https://docs.aws.amazon.com/routing-control/latest/APIReference/API_UpdateRoutingControlState.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  UpdateRoutingControlStates = "route53-recovery-cluster:UpdateRoutingControlStates",

  /**
   * * - Grant all route53-recovery-cluster permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoverycluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryClusterResource.routingcontrol `Route53RecoveryClusterResource.routingcontrol`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `route53-recovery-cluster:AllowSafetyRulesOverrides`: Override safety rules to allow routing control state updates ({@link https://docs.aws.amazon.com/routing-control/latest/APIReference/API_UpdateRoutingControlState.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  All = "route53-recovery-cluster:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoverycluster.html
 */
export const Route53RecoveryClusterResource = {

  /**
   * @see https://docs.aws.amazon.com/recovery-cluster/latest/api/routingcontrol.html
   */
  routingcontrol: (options: Partial<{partition: string, account: string, controlPanelId: string, routingControlId: string}> = {}) => `arn:${options.partition || '*'}:route53-recovery-control::${options.account || '*'}:controlpanel/${options.controlPanelId || '*'}/routingcontrol/${options.routingControlId || '*'}`,
}

