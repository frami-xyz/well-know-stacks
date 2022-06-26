/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancingv2.html
 */
export enum ElasticloadbalancingAction {

  /**
   * Tagging - Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_AddTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   * - {@link ElasticloadbalancingResource.listenerRuleApp `ElasticloadbalancingResource.listenerRuleApp`} 
   * - {@link ElasticloadbalancingResource.listenerRuleNet `ElasticloadbalancingResource.listenerRuleNet`} 
   * - {@link ElasticloadbalancingResource.listenerApp `ElasticloadbalancingResource.listenerApp`} 
   * - {@link ElasticloadbalancingResource.listenerNet `ElasticloadbalancingResource.listenerNet`} 
   * - {@link ElasticloadbalancingResource.loadbalancerApp `ElasticloadbalancingResource.loadbalancerApp`} 
   * - {@link ElasticloadbalancingResource.loadbalancerNet `ElasticloadbalancingResource.loadbalancerNet`} 
   * - {@link ElasticloadbalancingResource.targetgroup `ElasticloadbalancingResource.targetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: A key that is present in the request the user makes to the ELB service ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: The list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AddTags = "elasticloadbalancing:AddTags",

  /**
   * Write - Associates one or more security groups with your load balancer in a virtual private cloud (VPC)
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ApplySecurityGroupsToLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  ApplySecurityGroupsToLoadBalancer = "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",

  /**
   * Write - Adds one or more subnets to the set of configured subnets for the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_AttachLoadBalancerToSubnets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  AttachLoadBalancerToSubnets = "elasticloadbalancing:AttachLoadBalancerToSubnets",

  /**
   * Write - Specifies the health check settings to use when evaluating the health state of your back-end instances
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ConfigureHealthCheck.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  ConfigureHealthCheck = "elasticloadbalancing:ConfigureHealthCheck",

  /**
   * Write - Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateAppCookieStickinessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  CreateAppCookieStickinessPolicy = "elasticloadbalancing:CreateAppCookieStickinessPolicy",

  /**
   * Write - Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLBCookieStickinessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  CreateLBCookieStickinessPolicy = "elasticloadbalancing:CreateLBCookieStickinessPolicy",

  /**
   * Write - Creates a load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   * - {@link ElasticloadbalancingResource.loadbalancerApp `ElasticloadbalancingResource.loadbalancerApp`} 
   * - {@link ElasticloadbalancingResource.loadbalancerNet `ElasticloadbalancingResource.loadbalancerNet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: A key that is present in the request the user makes to the ELB service ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: The list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateLoadBalancer = "elasticloadbalancing:CreateLoadBalancer",

  /**
   * Write - Creates one or more listeners for the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancerListeners.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  CreateLoadBalancerListeners = "elasticloadbalancing:CreateLoadBalancerListeners",

  /**
   * Write - Creates a policy with the specified attributes for the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancerPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  CreateLoadBalancerPolicy = "elasticloadbalancing:CreateLoadBalancerPolicy",

  /**
   * Write - Deletes the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   * - {@link ElasticloadbalancingResource.loadbalancerApp `ElasticloadbalancingResource.loadbalancerApp`} 
   * - {@link ElasticloadbalancingResource.loadbalancerNet `ElasticloadbalancingResource.loadbalancerNet`} 
   */
  DeleteLoadBalancer = "elasticloadbalancing:DeleteLoadBalancer",

  /**
   * Write - Deletes the specified listeners from the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancerListeners.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  DeleteLoadBalancerListeners = "elasticloadbalancing:DeleteLoadBalancerListeners",

  /**
   * Write - Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeleteLoadBalancerPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  DeleteLoadBalancerPolicy = "elasticloadbalancing:DeleteLoadBalancerPolicy",

  /**
   * Write - Deregisters the specified instances from the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DeregisterInstancesFromLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  DeregisterInstancesFromLoadBalancer = "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",

  /**
   * Read - Describes the state of the specified instances with respect to the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeInstanceHealth.html
   */
  DescribeInstanceHealth = "elasticloadbalancing:DescribeInstanceHealth",

  /**
   * Read - Describes the attributes for the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerAttributes.html
   */
  DescribeLoadBalancerAttributes = "elasticloadbalancing:DescribeLoadBalancerAttributes",

  /**
   * Read - Describes the specified policies
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerPolicies.html
   */
  DescribeLoadBalancerPolicies = "elasticloadbalancing:DescribeLoadBalancerPolicies",

  /**
   * Read - Describes the specified load balancer policy types
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancerPolicyTypes.html
   */
  DescribeLoadBalancerPolicyTypes = "elasticloadbalancing:DescribeLoadBalancerPolicyTypes",

  /**
   * List - Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html
   */
  DescribeLoadBalancers = "elasticloadbalancing:DescribeLoadBalancers",

  /**
   * Read - Describes the tags associated with the specified load balancers
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   * - {@link ElasticloadbalancingResource.listenerRuleApp `ElasticloadbalancingResource.listenerRuleApp`} 
   * - {@link ElasticloadbalancingResource.listenerRuleNet `ElasticloadbalancingResource.listenerRuleNet`} 
   * - {@link ElasticloadbalancingResource.listenerApp `ElasticloadbalancingResource.listenerApp`} 
   * - {@link ElasticloadbalancingResource.listenerNet `ElasticloadbalancingResource.listenerNet`} 
   * - {@link ElasticloadbalancingResource.loadbalancerApp `ElasticloadbalancingResource.loadbalancerApp`} 
   * - {@link ElasticloadbalancingResource.loadbalancerNet `ElasticloadbalancingResource.loadbalancerNet`} 
   * - {@link ElasticloadbalancingResource.targetgroup `ElasticloadbalancingResource.targetgroup`} 
   */
  DescribeTags = "elasticloadbalancing:DescribeTags",

  /**
   * Write - Removes the specified subnets from the set of configured subnets for the load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DetachLoadBalancerFromSubnets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  DetachLoadBalancerFromSubnets = "elasticloadbalancing:DetachLoadBalancerFromSubnets",

  /**
   * Write - Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DisableAvailabilityZonesForLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  DisableAvailabilityZonesForLoadBalancer = "elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer",

  /**
   * Write - Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_EnableAvailabilityZonesForLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  EnableAvailabilityZonesForLoadBalancer = "elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer",

  /**
   * Write - Modifies the attributes of the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ModifyLoadBalancerAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   * - {@link ElasticloadbalancingResource.loadbalancerApp `ElasticloadbalancingResource.loadbalancerApp`} 
   * - {@link ElasticloadbalancingResource.loadbalancerNet `ElasticloadbalancingResource.loadbalancerNet`} 
   */
  ModifyLoadBalancerAttributes = "elasticloadbalancing:ModifyLoadBalancerAttributes",

  /**
   * Write - Adds the specified instances to the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_RegisterInstancesWithLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  RegisterInstancesWithLoadBalancer = "elasticloadbalancing:RegisterInstancesWithLoadBalancer",

  /**
   * Tagging - Removes one or more tags from the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_RemoveTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   * - {@link ElasticloadbalancingResource.listenerRuleApp `ElasticloadbalancingResource.listenerRuleApp`} 
   * - {@link ElasticloadbalancingResource.listenerRuleNet `ElasticloadbalancingResource.listenerRuleNet`} 
   * - {@link ElasticloadbalancingResource.listenerApp `ElasticloadbalancingResource.listenerApp`} 
   * - {@link ElasticloadbalancingResource.listenerNet `ElasticloadbalancingResource.listenerNet`} 
   * - {@link ElasticloadbalancingResource.loadbalancerApp `ElasticloadbalancingResource.loadbalancerApp`} 
   * - {@link ElasticloadbalancingResource.loadbalancerNet `ElasticloadbalancingResource.loadbalancerNet`} 
   * - {@link ElasticloadbalancingResource.targetgroup `ElasticloadbalancingResource.targetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: A key that is present in the request the user makes to the ELB service ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: The list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RemoveTags = "elasticloadbalancing:RemoveTags",

  /**
   * Write - Sets the certificate that terminates the specified listener's SSL connections
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerListenerSSLCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  SetLoadBalancerListenerSSLCertificate = "elasticloadbalancing:SetLoadBalancerListenerSSLCertificate",

  /**
   * Write - Replaces the set of policies associated with the specified port on which the back-end server is listening with a new set of policies
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerPoliciesForBackendServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  SetLoadBalancerPoliciesForBackendServer = "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer",

  /**
   * Write - Replaces the current set of policies for the specified load balancer port with the specified set of policies
   * @see https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_SetLoadBalancerPoliciesOfListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   */
  SetLoadBalancerPoliciesOfListener = "elasticloadbalancing:SetLoadBalancerPoliciesOfListener",

  /**
   * Write - Adds the specified certificates to the specified secure listener
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_AddListenerCertificates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.listenerApp `ElasticloadbalancingResource.listenerApp`} 
   * - {@link ElasticloadbalancingResource.listenerNet `ElasticloadbalancingResource.listenerNet`} 
   */
  AddListenerCertificates = "elasticloadbalancing:AddListenerCertificates",

  /**
   * Write - Creates a listener for the specified Application Load Balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancerApp `ElasticloadbalancingResource.loadbalancerApp`} 
   * - {@link ElasticloadbalancingResource.loadbalancerNet `ElasticloadbalancingResource.loadbalancerNet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: A key that is present in the request the user makes to the ELB service ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: The list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateListener = "elasticloadbalancing:CreateListener",

  /**
   * Write - Creates a rule for the specified listener
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.listenerApp `ElasticloadbalancingResource.listenerApp`} 
   * - {@link ElasticloadbalancingResource.listenerNet `ElasticloadbalancingResource.listenerNet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: A key that is present in the request the user makes to the ELB service ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: The list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateRule = "elasticloadbalancing:CreateRule",

  /**
   * Write - Creates a target group
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.targetgroup `ElasticloadbalancingResource.targetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: A key that is present in the request the user makes to the ELB service ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: The list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateTargetGroup = "elasticloadbalancing:CreateTargetGroup",

  /**
   * Write - Deletes the specified listener
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.listenerApp `ElasticloadbalancingResource.listenerApp`} 
   * - {@link ElasticloadbalancingResource.listenerNet `ElasticloadbalancingResource.listenerNet`} 
   */
  DeleteListener = "elasticloadbalancing:DeleteListener",

  /**
   * Write - Deletes the specified rule
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.listenerRuleApp `ElasticloadbalancingResource.listenerRuleApp`} 
   * - {@link ElasticloadbalancingResource.listenerRuleNet `ElasticloadbalancingResource.listenerRuleNet`} 
   */
  DeleteRule = "elasticloadbalancing:DeleteRule",

  /**
   * Write - Deletes the specified target group
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeleteTargetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.targetgroup `ElasticloadbalancingResource.targetgroup`} 
   */
  DeleteTargetGroup = "elasticloadbalancing:DeleteTargetGroup",

  /**
   * Write - Deregisters the specified targets from the specified target group
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DeregisterTargets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.targetgroup `ElasticloadbalancingResource.targetgroup`} 
   */
  DeregisterTargets = "elasticloadbalancing:DeregisterTargets",

  /**
   * Read - Describes the Elastic Load Balancing resource limits for the AWS account
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeAccountLimits.html
   */
  DescribeAccountLimits = "elasticloadbalancing:DescribeAccountLimits",

  /**
   * Read - Describes the certificates for the specified secure listener
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListenerCertificates.html
   */
  DescribeListenerCertificates = "elasticloadbalancing:DescribeListenerCertificates",

  /**
   * Read - Describes the specified listeners or the listeners for the specified Application Load Balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeListeners.html
   */
  DescribeListeners = "elasticloadbalancing:DescribeListeners",

  /**
   * Read - Describes the specified rules or the rules for the specified listener
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeRules.html
   */
  DescribeRules = "elasticloadbalancing:DescribeRules",

  /**
   * Read - Describes the specified policies or all policies used for SSL negotiation
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeSSLPolicies.html
   */
  DescribeSSLPolicies = "elasticloadbalancing:DescribeSSLPolicies",

  /**
   * Read - Describes the attributes for the specified target group
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroupAttributes.html
   */
  DescribeTargetGroupAttributes = "elasticloadbalancing:DescribeTargetGroupAttributes",

  /**
   * Read - Describes the specified target groups or all of your target groups
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html
   */
  DescribeTargetGroups = "elasticloadbalancing:DescribeTargetGroups",

  /**
   * Read - Describes the health of the specified targets or all of your targets
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetHealth.html
   */
  DescribeTargetHealth = "elasticloadbalancing:DescribeTargetHealth",

  /**
   * Write - Modifies the specified properties of the specified listener
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.listenerApp `ElasticloadbalancingResource.listenerApp`} 
   * - {@link ElasticloadbalancingResource.listenerNet `ElasticloadbalancingResource.listenerNet`} 
   */
  ModifyListener = "elasticloadbalancing:ModifyListener",

  /**
   * Write - Modifies the specified rule
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.listenerRuleApp `ElasticloadbalancingResource.listenerRuleApp`} 
   * - {@link ElasticloadbalancingResource.listenerRuleNet `ElasticloadbalancingResource.listenerRuleNet`} 
   */
  ModifyRule = "elasticloadbalancing:ModifyRule",

  /**
   * Write - Modifies the health checks used when evaluating the health state of the targets in the specified target group
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.targetgroup `ElasticloadbalancingResource.targetgroup`} 
   */
  ModifyTargetGroup = "elasticloadbalancing:ModifyTargetGroup",

  /**
   * Write - Modifies the specified attributes of the specified target group
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_ModifyTargetGroupAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.targetgroup `ElasticloadbalancingResource.targetgroup`} 
   */
  ModifyTargetGroupAttributes = "elasticloadbalancing:ModifyTargetGroupAttributes",

  /**
   * Write - Registers the specified targets with the specified target group
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RegisterTargets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.targetgroup `ElasticloadbalancingResource.targetgroup`} 
   */
  RegisterTargets = "elasticloadbalancing:RegisterTargets",

  /**
   * Write - Removes the specified certificates of the specified secure listener
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_RemoveListenerCertificates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.listenerApp `ElasticloadbalancingResource.listenerApp`} 
   * - {@link ElasticloadbalancingResource.listenerNet `ElasticloadbalancingResource.listenerNet`} 
   */
  RemoveListenerCertificates = "elasticloadbalancing:RemoveListenerCertificates",

  /**
   * Write - Not found
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetIpAddressType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancerApp `ElasticloadbalancingResource.loadbalancerApp`} 
   * - {@link ElasticloadbalancingResource.loadbalancerNet `ElasticloadbalancingResource.loadbalancerNet`} 
   */
  SetIpAddressType = "elasticloadbalancing:SetIpAddressType",

  /**
   * Write - Sets the priorities of the specified rules
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetRulePriorities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.listenerRuleApp `ElasticloadbalancingResource.listenerRuleApp`} 
   * - {@link ElasticloadbalancingResource.listenerRuleNet `ElasticloadbalancingResource.listenerRuleNet`} 
   */
  SetRulePriorities = "elasticloadbalancing:SetRulePriorities",

  /**
   * Write - Associates the specified security groups with the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSecurityGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancerApp `ElasticloadbalancingResource.loadbalancerApp`} 
   * - {@link ElasticloadbalancingResource.loadbalancerNet `ElasticloadbalancingResource.loadbalancerNet`} 
   */
  SetSecurityGroups = "elasticloadbalancing:SetSecurityGroups",

  /**
   * Write - Enables the Availability Zone for the specified subnets for the specified load balancer
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_SetSubnets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancerApp `ElasticloadbalancingResource.loadbalancerApp`} 
   * - {@link ElasticloadbalancingResource.loadbalancerNet `ElasticloadbalancingResource.loadbalancerNet`} 
   */
  SetSubnets = "elasticloadbalancing:SetSubnets",

  /**
   * Write - Gives WebAcl permission to WAF
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancingv2.html
   */
  SetWebAcl = "elasticloadbalancing:SetWebAcl",

  /**
   * * - Grant all elasticloadbalancing permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticloadbalancingResource.loadbalancer `ElasticloadbalancingResource.loadbalancer`} 
   * - {@link ElasticloadbalancingResource.listenerRuleApp `ElasticloadbalancingResource.listenerRuleApp`} 
   * - {@link ElasticloadbalancingResource.listenerRuleNet `ElasticloadbalancingResource.listenerRuleNet`} 
   * - {@link ElasticloadbalancingResource.listenerApp `ElasticloadbalancingResource.listenerApp`} 
   * - {@link ElasticloadbalancingResource.listenerNet `ElasticloadbalancingResource.listenerNet`} 
   * - {@link ElasticloadbalancingResource.loadbalancerApp `ElasticloadbalancingResource.loadbalancerApp`} 
   * - {@link ElasticloadbalancingResource.loadbalancerNet `ElasticloadbalancingResource.loadbalancerNet`} 
   * - {@link ElasticloadbalancingResource.targetgroup `ElasticloadbalancingResource.targetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: A key that is present in the request the user makes to the ELB service ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: The list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "elasticloadbalancing:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancingv2.html
 */
export const ElasticloadbalancingResource = {

  /**
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Global tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticloadbalancing:ResourceTag/${TagKey}`: A tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  loadbalancer: (options: Partial<{partition: string, region: string, account: string, loadBalancerName: string}> = {}) => `arn:${options.partition || '*'}:elasticloadbalancing:${options.region || '*'}:${options.account || '*'}:loadbalancer/${options.loadBalancerName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Global tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticloadbalancing:ResourceTag/${TagKey}`: A tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  listenerApp: (options: Partial<{partition: string, region: string, account: string, loadBalancerName: string, loadBalancerId: string, listenerId: string}> = {}) => `arn:${options.partition || '*'}:elasticloadbalancing:${options.region || '*'}:${options.account || '*'}:listener/app/${options.loadBalancerName || '*'}/${options.loadBalancerId || '*'}/${options.listenerId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-update-rules.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Global tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticloadbalancing:ResourceTag/${TagKey}`: A tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  listenerRuleApp: (options: Partial<{partition: string, region: string, account: string, loadBalancerName: string, loadBalancerId: string, listenerId: string, listenerRuleId: string}> = {}) => `arn:${options.partition || '*'}:elasticloadbalancing:${options.region || '*'}:${options.account || '*'}:listener-rule/app/${options.loadBalancerName || '*'}/${options.loadBalancerId || '*'}/${options.listenerId || '*'}/${options.listenerRuleId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Global tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticloadbalancing:ResourceTag/${TagKey}`: A tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  listenerNet: (options: Partial<{partition: string, region: string, account: string, loadBalancerName: string, loadBalancerId: string, listenerId: string}> = {}) => `arn:${options.partition || '*'}:elasticloadbalancing:${options.region || '*'}:${options.account || '*'}:listener/net/${options.loadBalancerName || '*'}/${options.loadBalancerId || '*'}/${options.listenerId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-update-rules.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Global tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticloadbalancing:ResourceTag/${TagKey}`: A tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  listenerRuleNet: (options: Partial<{partition: string, region: string, account: string, loadBalancerName: string, loadBalancerId: string, listenerId: string, listenerRuleId: string}> = {}) => `arn:${options.partition || '*'}:elasticloadbalancing:${options.region || '*'}:${options.account || '*'}:listener-rule/net/${options.loadBalancerName || '*'}/${options.loadBalancerId || '*'}/${options.listenerId || '*'}/${options.listenerRuleId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html#application-load-balancer-overview
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Global tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticloadbalancing:ResourceTag/${TagKey}`: A tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  loadbalancerApp: (options: Partial<{partition: string, region: string, account: string, loadBalancerName: string, loadBalancerId: string}> = {}) => `arn:${options.partition || '*'}:elasticloadbalancing:${options.region || '*'}:${options.account || '*'}:loadbalancer/app/${options.loadBalancerName || '*'}/${options.loadBalancerId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html#network-load-balancer-overview
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Global tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticloadbalancing:ResourceTag/${TagKey}`: A tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  loadbalancerNet: (options: Partial<{partition: string, region: string, account: string, loadBalancerName: string, loadBalancerId: string}> = {}) => `arn:${options.partition || '*'}:elasticloadbalancing:${options.region || '*'}:${options.account || '*'}:loadbalancer/net/${options.loadBalancerName || '*'}/${options.loadBalancerId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Global tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticloadbalancing:ResourceTag/${TagKey}`: A tag key and value pair ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_elasticloadbalancing.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  targetgroup: (options: Partial<{partition: string, region: string, account: string, targetGroupName: string, targetGroupId: string}> = {}) => `arn:${options.partition || '*'}:elasticloadbalancing:${options.region || '*'}:${options.account || '*'}:targetgroup/${options.targetGroupName || '*'}/${options.targetGroupId || '*'}`,
}

