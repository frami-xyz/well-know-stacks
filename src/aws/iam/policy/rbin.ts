/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrecyclebin.html
 */
export enum RbinAction {

  /**
   * Write - Grants permission to create a Recycle Bin retention rule
   * @see https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_CreateRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RbinResource.rule `RbinResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rbin:Request/ResourceType`: Filters access by the resource type in a request ({@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-perms.html#rbin-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateRule = "rbin:CreateRule",

  /**
   * Write - Grants permission to delete a Recycle Bin retention rule
   * @see https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_DeleteRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RbinResource.rule `RbinResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rbin:Attribute/ResourceType`: Filters access by the resource type of the existing rule ({@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-perms.html#rbin-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteRule = "rbin:DeleteRule",

  /**
   * Read - Grants permission to get detailed information about a Recycle Bin retention rule
   * @see https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_GetRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RbinResource.rule `RbinResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rbin:Attribute/ResourceType`: Filters access by the resource type of the existing rule ({@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-perms.html#rbin-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetRule = "rbin:GetRule",

  /**
   * Read - Grants permission to list the Recycle Bin retention rules in the Region
   * @see https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_ListRules.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `rbin:Request/ResourceType`: Filters access by the resource type in a request ({@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-perms.html#rbin-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListRules = "rbin:ListRules",

  /**
   * Read - Grants permission to list the tags associated with a resource
   * @see https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RbinResource.rule `RbinResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rbin:Attribute/ResourceType`: Filters access by the resource type of the existing rule ({@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-perms.html#rbin-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "rbin:ListTagsForResource",

  /**
   * Tagging - Grants permission to add or update tags of a resource
   * @see https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RbinResource.rule `RbinResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rbin:Attribute/ResourceType`: Filters access by the resource type of the existing rule ({@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-perms.html#rbin-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "rbin:TagResource",

  /**
   * Tagging - Grants permission to remove tags associated with a resource
   * @see https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RbinResource.rule `RbinResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rbin:Attribute/ResourceType`: Filters access by the resource type of the existing rule ({@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-perms.html#rbin-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "rbin:UntagResource",

  /**
   * Write - Grants permission to update an existing Recycle Bin retention rule
   * @see https://docs.aws.amazon.com/recyclebin/latest/APIReference/API_UpdateRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RbinResource.rule `RbinResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rbin:Attribute/ResourceType`: Filters access by the resource type of the existing rule ({@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-perms.html#rbin-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateRule = "rbin:UpdateRule",

  /**
   * * - Grant all rbin permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrecyclebin.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RbinResource.rule `RbinResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `rbin:Request/ResourceType`: Filters access by the resource type in a request ({@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-perms.html#rbin-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `rbin:Attribute/ResourceType`: Filters access by the resource type of the existing rule ({@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-perms.html#rbin-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "rbin:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrecyclebin.html
 */
export const RbinResource = {

  /**
   * @see https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-recycle-bin.html#recycle-bin-concepts
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  rule: (options: Partial<{partition: string, region: string, account: string, resourceName: string}> = {}) => `arn:${options.partition || '*'}:rbin:${options.region || '*'}:${options.account || '*'}:rule/${options.resourceName || '*'}`,
}

