/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfinspace.html
 */
export enum FinspaceAction {

  /**
   * Write - Grants permission to create a FinSpace environment
   * @see https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEnvironment = "finspace:CreateEnvironment",

  /**
   * Write - Grants permission to create a FinSpace user
   * @see https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   * - {@link FinspaceResource.user `FinspaceResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateUser = "finspace:CreateUser",

  /**
   * Write - Grants permission to delete a FinSpace environment
   * @see https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   */
  DeleteEnvironment = "finspace:DeleteEnvironment",

  /**
   * Read - Grants permission to describe a FinSpace environment
   * @see https://docs.aws.amazon.com/finspace/latest/management-api/API_GetEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   */
  GetEnvironment = "finspace:GetEnvironment",

  /**
   * Read - Grants permission to request status of the loading of sample data bundle
   * @see https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   */
  GetLoadSampleDataSetGroupIntoEnvironmentStatus = "finspace:GetLoadSampleDataSetGroupIntoEnvironmentStatus",

  /**
   * Read - Grants permission to describe a FinSpace user
   * @see https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   * - {@link FinspaceResource.user `FinspaceResource.user`} 
   */
  GetUser = "finspace:GetUser",

  /**
   * List - Grants permission to list FinSpace environments in the AWS account
   * @see https://docs.aws.amazon.com/finspace/latest/management-api/API_ListEnvironments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   */
  ListEnvironments = "finspace:ListEnvironments",

  /**
   * Read - Grants permission to return a list of tags for a resource
   * @see https://docs.aws.amazon.com/finspace/latest/management-api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   */
  ListTagsForResource = "finspace:ListTagsForResource",

  /**
   * List - Grants permission to list FinSpace users in an environment
   * @see https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   * - {@link FinspaceResource.user `FinspaceResource.user`} 
   */
  ListUsers = "finspace:ListUsers",

  /**
   * Write - Grants permission to load sample data bundle into your FinSpace environment
   * @see https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   */
  LoadSampleDataSetGroupIntoEnvironment = "finspace:LoadSampleDataSetGroupIntoEnvironment",

  /**
   * Write - Grants permission to reset the password for a FinSpace user
   * @see https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   * - {@link FinspaceResource.user `FinspaceResource.user`} 
   */
  ResetUserPassword = "finspace:ResetUserPassword",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/finspace/latest/management-api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   */
  TagResource = "finspace:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/finspace/latest/management-api/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   */
  UntagResource = "finspace:UntagResource",

  /**
   * Write - Grants permission to update a FinSpace environment
   * @see https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   */
  UpdateEnvironment = "finspace:UpdateEnvironment",

  /**
   * Write - Grants permission to update a FinSpace user
   * @see https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   * - {@link FinspaceResource.user `FinspaceResource.user`} 
   */
  UpdateUser = "finspace:UpdateUser",

  /**
   * * - Grant all finspace permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfinspace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FinspaceResource.environment `FinspaceResource.environment`} 
   * - {@link FinspaceResource.user `FinspaceResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "finspace:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfinspace.html
 */
export const FinspaceResource = {

  /**
   * @see https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  environment: (options: Partial<{partition: string, region: string, account: string, environmentId: string}> = {}) => `arn:${options.partition || '*'}:finspace:${options.region || '*'}:${options.account || '*'}:environment/${options.environmentId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  user: (options: Partial<{partition: string, region: string, account: string, userId: string}> = {}) => `arn:${options.partition || '*'}:finspace:${options.region || '*'}:${options.account || '*'}:user/${options.userId || '*'}`,
}

