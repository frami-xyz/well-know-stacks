/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourcegroups.html
 */
export enum ResourceGroupsAction {

  /**
   * Write - Grants permission to create a resource group with a specified name, description, and resource query
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_CreateGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateGroup = "resource-groups:CreateGroup",

  /**
   * Write - Grants permission to delete a specified resource group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_DeleteGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  DeleteGroup = "resource-groups:DeleteGroup",

  /**
   * Read - Grants permission to get information of a specified resource group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  GetGroup = "resource-groups:GetGroup",

  /**
   * Read - Grants permission to get the service configuration associated with the specified resource group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  GetGroupConfiguration = "resource-groups:GetGroupConfiguration",

  /**
   * Read - Grants permission to get the query associated with a specified resource group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  GetGroupQuery = "resource-groups:GetGroupQuery",

  /**
   * Read - Grants permission to get the tags associated with a specified resource group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  GetTags = "resource-groups:GetTags",

  /**
   * Write - Grants permission to add the specified resources to the specified group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_GroupResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  GroupResources = "resource-groups:GroupResources",

  /**
   * List - Grants permission to list the resources that are members of a specified resource group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroupResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  ListGroupResources = "resource-groups:ListGroupResources",

  /**
   * List - Grants permission to list all resource groups in your account
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroups.html
   */
  ListGroups = "resource-groups:ListGroups",

  /**
   * Write - Grants permission to put the service configuration associated with the specified resource group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_PutGroupConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  PutGroupConfiguration = "resource-groups:PutGroupConfiguration",

  /**
   * Write - Grants permission to add a resource-based policy for the specified group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/LM_REDIRECT
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  PutGroupPolicy = "resource-groups:PutGroupPolicy",

  /**
   * List - Grants permission to search for AWS resources matching the given query
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_SearchResources.html
   */
  SearchResources = "resource-groups:SearchResources",

  /**
   * Tagging - Grants permission to tag a specified resource group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_Tag.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  Tag = "resource-groups:Tag",

  /**
   * Write - Grants permission to remove the specified resources from the specified group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_UngroupResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  UngroupResources = "resource-groups:UngroupResources",

  /**
   * Tagging - Grants permission to remove tags associated with a specified resource group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_Untag.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  Untag = "resource-groups:Untag",

  /**
   * Write - Grants permission to update a specified resource group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  UpdateGroup = "resource-groups:UpdateGroup",

  /**
   * Write - Grants permission to update the query associated with a specified resource group
   * @see https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroupQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   */
  UpdateGroupQuery = "resource-groups:UpdateGroupQuery",

  /**
   * * - Grant all resource-groups permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourcegroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResourceGroupsResource.group `ResourceGroupsResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "resource-groups:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourcegroups.html
 */
export const ResourceGroupsResource = {

  /**
   * @see https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  group: (options: Partial<{partition: string, region: string, account: string, groupName: string}> = {}) => `arn:${options.partition || '*'}:resource-groups:${options.region || '*'}:${options.account || '*'}:group/${options.groupName || '*'}`,
}

