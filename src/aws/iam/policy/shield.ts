/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsshield.html
 */
export enum ShieldAction {

  /**
   * Write - Grants permission to authorize the DDoS Response team to access the specified Amazon S3 bucket containing your flow logs
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTLogBucket.html
   */
  AssociateDRTLogBucket = "shield:AssociateDRTLogBucket",

  /**
   * Write - Grants permission to authorize the DDoS Response team using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTRole.html
   */
  AssociateDRTRole = "shield:AssociateDRTRole",

  /**
   * Write - Grants permission to add health-based detection to the Shield Advanced protection for a resource
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateHealthCheck.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protection `ShieldResource.protection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateHealthCheck = "shield:AssociateHealthCheck",

  /**
   * Write - Grants permission to initialize proactive engagement and set the list of contacts for the DDoS Response Team (DRT) to use
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateProactiveEngagementDetails.html
   */
  AssociateProactiveEngagementDetails = "shield:AssociateProactiveEngagementDetails",

  /**
   * Write - Grants permission to activate DDoS protection service for a given resource ARN
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtection.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProtection = "shield:CreateProtection",

  /**
   * Write - Grants permission to create a grouping of protected resources so they can be handled as a collective
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtectionGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProtectionGroup = "shield:CreateProtectionGroup",

  /**
   * Write - Grants permission to activate subscription
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html
   */
  CreateSubscription = "shield:CreateSubscription",

  /**
   * Write - Grants permission to delete an existing protection
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protection `ShieldResource.protection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteProtection = "shield:DeleteProtection",

  /**
   * Write - Grants permission to remove the specified protection group
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtectionGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protectionGroup `ShieldResource.protectionGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteProtectionGroup = "shield:DeleteProtectionGroup",

  /**
   * Write - Grants permission to deactivate subscription
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteSubscription.html
   */
  DeleteSubscription = "shield:DeleteSubscription",

  /**
   * Read - Grants permission to get attack details
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.attack `ShieldResource.attack`} 
   */
  DescribeAttack = "shield:DescribeAttack",

  /**
   * Read - Grants permission to describe information about the number and type of attacks AWS Shield has detected in the last year
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttackStatistics.html
   */
  DescribeAttackStatistics = "shield:DescribeAttackStatistics",

  /**
   * Read - Grants permission to describe the current role and list of Amazon S3 log buckets used by the DDoS Response team to access your AWS account while assisting with attack mitigation
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeDRTAccess.html
   */
  DescribeDRTAccess = "shield:DescribeDRTAccess",

  /**
   * Read - Grants permission to list the email addresses that the DRT can use to contact you during a suspected attack
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeEmergencyContactSettings.html
   */
  DescribeEmergencyContactSettings = "shield:DescribeEmergencyContactSettings",

  /**
   * Read - Grants permission to get protection details
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protection `ShieldResource.protection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeProtection = "shield:DescribeProtection",

  /**
   * Read - Grants permission to describe the specification for the specified protection group
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtectionGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protectionGroup `ShieldResource.protectionGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeProtectionGroup = "shield:DescribeProtectionGroup",

  /**
   * Read - Grants permission to get subscription details, such as start time
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeSubscription.html
   */
  DescribeSubscription = "shield:DescribeSubscription",

  /**
   * Write - Grants permission to disable application layer automatic response for Shield Advanced protection for a resource
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisableApplicationLayerAutomaticResponse.html
   */
  DisableApplicationLayerAutomaticResponse = "shield:DisableApplicationLayerAutomaticResponse",

  /**
   * Write - Grants permission to remove authorization from the DDoS Response Team (DRT) to notify contacts about escalations
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisableProactiveEngagement.html
   */
  DisableProactiveEngagement = "shield:DisableProactiveEngagement",

  /**
   * Write - Grants permission to remove the DDoS Response team's access to the specified Amazon S3 bucket containing your flow logs
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTLogBucket.html
   */
  DisassociateDRTLogBucket = "shield:DisassociateDRTLogBucket",

  /**
   * Write - Grants permission to remove the DDoS Response team's access to your AWS account
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTRole.html
   */
  DisassociateDRTRole = "shield:DisassociateDRTRole",

  /**
   * Write - Grants permission to remove health-based detection from the Shield Advanced protection for a resource
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateHealthCheck.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protection `ShieldResource.protection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateHealthCheck = "shield:DisassociateHealthCheck",

  /**
   * Write - Grants permission to enable application layer automatic response for Shield Advanced protection for a resource
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_EnableApplicationLayerAutomaticResponse.html
   */
  EnableApplicationLayerAutomaticResponse = "shield:EnableApplicationLayerAutomaticResponse",

  /**
   * Write - Grants permission to authorize the DDoS Response Team (DRT) to use email and phone to notify contacts about escalations
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_EnableProactiveEngagement.html
   */
  EnableProactiveEngagement = "shield:EnableProactiveEngagement",

  /**
   * Read - Grants permission to get subscription state
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_GetSubscriptionState.html
   */
  GetSubscriptionState = "shield:GetSubscriptionState",

  /**
   * List - Grants permission to list all existing attacks
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListAttacks.html
   */
  ListAttacks = "shield:ListAttacks",

  /**
   * List - Grants permission to retrieve the protection groups for the account
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtectionGroups.html
   */
  ListProtectionGroups = "shield:ListProtectionGroups",

  /**
   * List - Grants permission to list all existing protections
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtections.html
   */
  ListProtections = "shield:ListProtections",

  /**
   * List - Grants permission to retrieve the resources that are included in the protection group
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListResourcesInProtectionGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protectionGroup `ShieldResource.protectionGroup`} 
   */
  ListResourcesInProtectionGroup = "shield:ListResourcesInProtectionGroup",

  /**
   * Read - Grants permission to get information about AWS tags for a specified Amazon Resource Name (ARN) in AWS Shield
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protection `ShieldResource.protection`} 
   * - {@link ShieldResource.protectionGroup `ShieldResource.protectionGroup`} 
   */
  ListTagsForResource = "shield:ListTagsForResource",

  /**
   * Tagging - Grants permission to add or updates tags for a resource in AWS Shield
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protection `ShieldResource.protection`} 
   * - {@link ShieldResource.protectionGroup `ShieldResource.protectionGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "shield:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource in AWS Shield
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protection `ShieldResource.protection`} 
   * - {@link ShieldResource.protectionGroup `ShieldResource.protectionGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "shield:UntagResource",

  /**
   * Write - Grants permission to update application layer automatic response for Shield Advanced protection for a resource
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateApplicationLayerAutomaticResponse.html
   */
  UpdateApplicationLayerAutomaticResponse = "shield:UpdateApplicationLayerAutomaticResponse",

  /**
   * Write - Grants permission to update the details of the list of email addresses that the DRT can use to contact you during a suspected attack
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateEmergencyContactSettings.html
   */
  UpdateEmergencyContactSettings = "shield:UpdateEmergencyContactSettings",

  /**
   * Write - Grants permission to update an existing protection group
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateProtectionGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protectionGroup `ShieldResource.protectionGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateProtectionGroup = "shield:UpdateProtectionGroup",

  /**
   * Write - Grants permission to update the details of an existing subscription
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateSubscription.html
   */
  UpdateSubscription = "shield:UpdateSubscription",

  /**
   * * - Grant all shield permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsshield.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ShieldResource.protection `ShieldResource.protection`} 
   * - {@link ShieldResource.protectionGroup `ShieldResource.protectionGroup`} 
   * - {@link ShieldResource.attack `ShieldResource.attack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "shield:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsshield.html
 */
export const ShieldResource = {

  /**
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AttackDetail.html
   */
  attack: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:shield::${options.account || '*'}:attack/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_Protection.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  protection: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:shield::${options.account || '*'}:protection/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ProtectionGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  protectionGroup: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:shield::${options.account || '*'}:protection-group/${options.id || '*'}`,
}

