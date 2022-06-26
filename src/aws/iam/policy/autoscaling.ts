/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html
 */
export enum AutoscalingAction {

  /**
   * Write - Grants permission to attach one or more EC2 instances to the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AttachInstances = "autoscaling:AttachInstances",

  /**
   * Write - Grants permission to attach one or more target groups to the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancerTargetGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:TargetGroupARNs`: Filters access based on the ARN of a target group ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  AttachLoadBalancerTargetGroups = "autoscaling:AttachLoadBalancerTargetGroups",

  /**
   * Write - Grants permission to attach one or more load balancers to the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_AttachLoadBalancers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:LoadBalancerNames`: Filters access based on the name of the load balancer ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AttachLoadBalancers = "autoscaling:AttachLoadBalancers",

  /**
   * Write - Grants permission to delete the specified scheduled actions
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchDeleteScheduledAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchDeleteScheduledAction = "autoscaling:BatchDeleteScheduledAction",

  /**
   * Write - Grants permission to create or update multiple scheduled scaling actions for an Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_BatchPutScheduledUpdateGroupAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchPutScheduledUpdateGroupAction = "autoscaling:BatchPutScheduledUpdateGroupAction",

  /**
   * Write - Grants permission to cancel an instance refresh operation in progress
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CancelInstanceRefresh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CancelInstanceRefresh = "autoscaling:CancelInstanceRefresh",

  /**
   * Write - Grants permission to complete the lifecycle action for the specified token or instance with the specified result
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CompleteLifecycleAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CompleteLifecycleAction = "autoscaling:CompleteLifecycleAction",

  /**
   * Write - Grants permission to create an Auto Scaling group with the specified name and attributes
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateAutoScalingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:InstanceTypes`: Filters access based on the types of instances, in terms of the hardware resources available ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:LaunchConfigurationName`: Filters access based on the name of a launch configuration ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:LaunchTemplateVersionSpecified`: Filters access based on whether users can specify any version of a launch template or only the Latest or Default version ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `autoscaling:LoadBalancerNames`: Filters access based on the name of the load balancer ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:MaxSize`: Filters access based on the maximum scaling size ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `autoscaling:MinSize`: Filters access based on the minimum scaling size ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `autoscaling:TargetGroupARNs`: Filters access based on the ARN of a target group ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `autoscaling:VPCZoneIdentifiers`: Filters access based on the identifier of a VPC zone ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the value of a tag associated with the request ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAutoScalingGroup = "autoscaling:CreateAutoScalingGroup",

  /**
   * Write - Grants permission to create a launch configuration
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.launchConfiguration `AutoscalingResource.launchConfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ImageId`: Filters access based on the AMI used to create the instance ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:InstanceType`: Filters access based on the type of instance, in terms of the hardware resources available ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:SpotPrice`: Filters access based on the spot price associated with an instance ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `autoscaling:MetadataHttpTokens`: Filters access based on whether tokens are required when calling the instance metadata service (optional or required) ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:MetadataHttpPutResponseHopLimit`: Filters access based on the allowed number of hops when calling the instance metadata service ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `autoscaling:MetadataHttpEndpoint`: Filters access based on whether the HTTP endpoint is enabled for the instance metadata service ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateLaunchConfiguration = "autoscaling:CreateLaunchConfiguration",

  /**
   * Tagging - Grants permission to create or update tags for the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateOrUpdateTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the value of a tag associated with the request ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateOrUpdateTags = "autoscaling:CreateOrUpdateTags",

  /**
   * Write - Grants permission to delete the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteAutoScalingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAutoScalingGroup = "autoscaling:DeleteAutoScalingGroup",

  /**
   * Write - Grants permission to delete the specified launch configuration
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLaunchConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.launchConfiguration `AutoscalingResource.launchConfiguration`} 
   */
  DeleteLaunchConfiguration = "autoscaling:DeleteLaunchConfiguration",

  /**
   * Write - Grants permission to deletes the specified lifecycle hook
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteLifecycleHook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteLifecycleHook = "autoscaling:DeleteLifecycleHook",

  /**
   * Write - Grants permission to delete the specified notification
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteNotificationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteNotificationConfiguration = "autoscaling:DeleteNotificationConfiguration",

  /**
   * Write - Grants permission to delete the specified Auto Scaling policy
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeletePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeletePolicy = "autoscaling:DeletePolicy",

  /**
   * Write - Grants permission to delete the specified scheduled action
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteScheduledAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteScheduledAction = "autoscaling:DeleteScheduledAction",

  /**
   * Tagging - Grants permission to delete the specified tags
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the value of a tag associated with the request ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteTags = "autoscaling:DeleteTags",

  /**
   * Write - Grants permission to delete the warm pool associated with the Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DeleteWarmPool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteWarmPool = "autoscaling:DeleteWarmPool",

  /**
   * List - Grants permission to describe the current Auto Scaling resource limits for your AWS account
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAccountLimits.html
   */
  DescribeAccountLimits = "autoscaling:DescribeAccountLimits",

  /**
   * List - Grants permission to describe the policy adjustment types for use with PutScalingPolicy
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAdjustmentTypes.html
   */
  DescribeAdjustmentTypes = "autoscaling:DescribeAdjustmentTypes",

  /**
   * List - Grants permission to describe one or more Auto Scaling groups. If a list of names is not provided, the call describes all Auto Scaling groups
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingGroups.html
   */
  DescribeAutoScalingGroups = "autoscaling:DescribeAutoScalingGroups",

  /**
   * List - Grants permission to describe one or more Auto Scaling instances. If a list is not provided, the call describes all instances
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingInstances.html
   */
  DescribeAutoScalingInstances = "autoscaling:DescribeAutoScalingInstances",

  /**
   * List - Grants permission to describe the notification types that are supported by Auto Scaling
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeAutoScalingNotificationTypes.html
   */
  DescribeAutoScalingNotificationTypes = "autoscaling:DescribeAutoScalingNotificationTypes",

  /**
   * List - Grants permission to describe one or more instance refreshes for an Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeInstanceRefreshes.html
   */
  DescribeInstanceRefreshes = "autoscaling:DescribeInstanceRefreshes",

  /**
   * List - Grants permission to describe one or more launch configurations. If you omit the list of names, then the call describes all launch configurations
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLaunchConfigurations.html
   */
  DescribeLaunchConfigurations = "autoscaling:DescribeLaunchConfigurations",

  /**
   * List - Grants permission to describe the available types of lifecycle hooks
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHookTypes.html
   */
  DescribeLifecycleHookTypes = "autoscaling:DescribeLifecycleHookTypes",

  /**
   * List - Grants permission to describe the lifecycle hooks for the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLifecycleHooks.html
   */
  DescribeLifecycleHooks = "autoscaling:DescribeLifecycleHooks",

  /**
   * List - Grants permission to describe the target groups for the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancerTargetGroups.html
   */
  DescribeLoadBalancerTargetGroups = "autoscaling:DescribeLoadBalancerTargetGroups",

  /**
   * List - Grants permission to describe the load balancers for the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeLoadBalancers.html
   */
  DescribeLoadBalancers = "autoscaling:DescribeLoadBalancers",

  /**
   * List - Grants permission to describe the available CloudWatch metrics for Auto Scaling
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeMetricCollectionTypes.html
   */
  DescribeMetricCollectionTypes = "autoscaling:DescribeMetricCollectionTypes",

  /**
   * List - Grants permission to describe the notification actions associated with the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeNotificationConfigurations.html
   */
  DescribeNotificationConfigurations = "autoscaling:DescribeNotificationConfigurations",

  /**
   * List - Grants permission to describe the policies for the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribePolicies.html
   */
  DescribePolicies = "autoscaling:DescribePolicies",

  /**
   * List - Grants permission to describe one or more scaling activities for the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingActivities.html
   */
  DescribeScalingActivities = "autoscaling:DescribeScalingActivities",

  /**
   * List - Grants permission to describe the scaling process types for use with ResumeProcesses and SuspendProcesses
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScalingProcessTypes.html
   */
  DescribeScalingProcessTypes = "autoscaling:DescribeScalingProcessTypes",

  /**
   * List - Grants permission to describe the actions scheduled for your Auto Scaling group that haven't run
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeScheduledActions.html
   */
  DescribeScheduledActions = "autoscaling:DescribeScheduledActions",

  /**
   * Read - Grants permission to describe the specified tags
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTags.html
   */
  DescribeTags = "autoscaling:DescribeTags",

  /**
   * List - Grants permission to describe the termination policies supported by Auto Scaling
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeTerminationPolicyTypes.html
   */
  DescribeTerminationPolicyTypes = "autoscaling:DescribeTerminationPolicyTypes",

  /**
   * List - Grants permission to describe the warm pool associated with the Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DescribeWarmPool.html
   */
  DescribeWarmPool = "autoscaling:DescribeWarmPool",

  /**
   * Write - Grants permission to remove one or more instances from the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DetachInstances = "autoscaling:DetachInstances",

  /**
   * Write - Grants permission to detach one or more target groups from the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancerTargetGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:TargetGroupARNs`: Filters access based on the ARN of a target group ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DetachLoadBalancerTargetGroups = "autoscaling:DetachLoadBalancerTargetGroups",

  /**
   * Write - Grants permission to remove one or more load balancers from the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DetachLoadBalancers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:LoadBalancerNames`: Filters access based on the name of the load balancer ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DetachLoadBalancers = "autoscaling:DetachLoadBalancers",

  /**
   * Write - Grants permission to disable monitoring of the specified metrics for the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_DisableMetricsCollection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisableMetricsCollection = "autoscaling:DisableMetricsCollection",

  /**
   * Write - Grants permission to enable monitoring of the specified metrics for the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnableMetricsCollection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  EnableMetricsCollection = "autoscaling:EnableMetricsCollection",

  /**
   * Write - Grants permission to move the specified instances into Standby mode
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_EnterStandby.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  EnterStandby = "autoscaling:EnterStandby",

  /**
   * Write - Grants permission to execute the specified policy
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExecutePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ExecutePolicy = "autoscaling:ExecutePolicy",

  /**
   * Write - Grants permission to move the specified instances out of Standby mode
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ExitStandby.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ExitStandby = "autoscaling:ExitStandby",

  /**
   * List - Grants permission to retrieve the forecast data for a predictive scaling policy
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_GetPredictiveScalingForecast.html
   */
  GetPredictiveScalingForecast = "autoscaling:GetPredictiveScalingForecast",

  /**
   * Write - Grants permission to create or update a lifecycle hook for the specified Auto Scaling Group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutLifecycleHook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutLifecycleHook = "autoscaling:PutLifecycleHook",

  /**
   * Write - Grants permission to configure an Auto Scaling group to send notifications when specified events take place
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutNotificationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutNotificationConfiguration = "autoscaling:PutNotificationConfiguration",

  /**
   * Write - Grants permission to create or update a policy for an Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScalingPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutScalingPolicy = "autoscaling:PutScalingPolicy",

  /**
   * Write - Grants permission to create or update a scheduled scaling action for an Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutScheduledUpdateGroupAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:MaxSize`: Filters access based on the maximum scaling size ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `autoscaling:MinSize`: Filters access based on the minimum scaling size ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  PutScheduledUpdateGroupAction = "autoscaling:PutScheduledUpdateGroupAction",

  /**
   * Write - Grants permission to create or update the warm pool associated with the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_PutWarmPool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutWarmPool = "autoscaling:PutWarmPool",

  /**
   * Write - Grants permission to record a heartbeat for the lifecycle action associated with the specified token or instance
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_RecordLifecycleActionHeartbeat.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RecordLifecycleActionHeartbeat = "autoscaling:RecordLifecycleActionHeartbeat",

  /**
   * Write - Grants permission to resume the specified suspended Auto Scaling processes, or all suspended process, for the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_ResumeProcesses.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ResumeProcesses = "autoscaling:ResumeProcesses",

  /**
   * Write - Grants permission to set the size of the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetDesiredCapacity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SetDesiredCapacity = "autoscaling:SetDesiredCapacity",

  /**
   * Write - Grants permission to set the health status of the specified instance
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceHealth.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SetInstanceHealth = "autoscaling:SetInstanceHealth",

  /**
   * Write - Grants permission to update the instance protection settings of the specified instances
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SetInstanceProtection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SetInstanceProtection = "autoscaling:SetInstanceProtection",

  /**
   * Write - Grants permission to start a new instance refresh operation
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_StartInstanceRefresh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartInstanceRefresh = "autoscaling:StartInstanceRefresh",

  /**
   * Write - Grants permission to suspend the specified Auto Scaling processes, or all processes, for the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_SuspendProcesses.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SuspendProcesses = "autoscaling:SuspendProcesses",

  /**
   * Write - Grants permission to terminate the specified instance and optionally adjust the desired group size
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_TerminateInstanceInAutoScalingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TerminateInstanceInAutoScalingGroup = "autoscaling:TerminateInstanceInAutoScalingGroup",

  /**
   * Write - Grants permission to update the configuration for the specified Auto Scaling group
   * @see https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_UpdateAutoScalingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:InstanceTypes`: Filters access based on the types of instances, in terms of the hardware resources available ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:LaunchConfigurationName`: Filters access based on the name of a launch configuration ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:LaunchTemplateVersionSpecified`: Filters access based on whether users can specify any version of a launch template or only the Latest or Default version ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `autoscaling:MaxSize`: Filters access based on the maximum scaling size ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `autoscaling:MinSize`: Filters access based on the minimum scaling size ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `autoscaling:VPCZoneIdentifiers`: Filters access based on the identifier of a VPC zone ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateAutoScalingGroup = "autoscaling:UpdateAutoScalingGroup",

  /**
   * * - Grant all autoscaling permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AutoscalingResource.autoScalingGroup `AutoscalingResource.autoScalingGroup`} 
   * - {@link AutoscalingResource.launchConfiguration `AutoscalingResource.launchConfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:TargetGroupARNs`: Filters access based on the ARN of a target group ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `autoscaling:LoadBalancerNames`: Filters access based on the name of the load balancer ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:InstanceTypes`: Filters access based on the types of instances, in terms of the hardware resources available ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:LaunchConfigurationName`: Filters access based on the name of a launch configuration ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:LaunchTemplateVersionSpecified`: Filters access based on whether users can specify any version of a launch template or only the Latest or Default version ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `autoscaling:MaxSize`: Filters access based on the maximum scaling size ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `autoscaling:MinSize`: Filters access based on the minimum scaling size ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `autoscaling:VPCZoneIdentifiers`: Filters access based on the identifier of a VPC zone ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the value of a tag associated with the request ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:ImageId`: Filters access based on the AMI used to create the instance ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:InstanceType`: Filters access based on the type of instance, in terms of the hardware resources available ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:SpotPrice`: Filters access based on the spot price associated with an instance ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `autoscaling:MetadataHttpTokens`: Filters access based on whether tokens are required when calling the instance metadata service (optional or required) ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `autoscaling:MetadataHttpPutResponseHopLimit`: Filters access based on the allowed number of hops when calling the instance metadata service ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `autoscaling:MetadataHttpEndpoint`: Filters access based on whether the HTTP endpoint is enabled for the instance metadata service ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "autoscaling:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html
 */
export const AutoscalingResource = {

  /**
   * @see https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `autoscaling:ResourceTag/${TagKey}`: Filters access based on the value of a tag attached to a resource ({@link https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tag-value associated with the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2autoscaling.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  autoScalingGroup: (options: Partial<{partition: string, region: string, account: string, groupId: string, groupFriendlyName: string}> = {}) => `arn:${options.partition || '*'}:autoscaling:${options.region || '*'}:${options.account || '*'}:autoScalingGroup:${options.groupId || '*'}:autoScalingGroupName/${options.groupFriendlyName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html#policy-auto-scaling-resources
   */
  launchConfiguration: (options: Partial<{partition: string, region: string, account: string, id: string, launchConfigurationName: string}> = {}) => `arn:${options.partition || '*'}:autoscaling:${options.region || '*'}:${options.account || '*'}:launchConfiguration:${options.id || '*'}:launchConfigurationName/${options.launchConfigurationName || '*'}`,
}

