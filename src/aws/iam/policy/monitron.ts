/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmonitron.html
 */
export enum MonitronAction {

  /**
   * Permissions management - Grants permission to associate a user with the project as an administrator
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/user-management-chapter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MonitronResource.project `MonitronResource.project`} 
   */
  AssociateProjectAdminUser = "monitron:AssociateProjectAdminUser",

  /**
   * Write - Grants permission to create a project
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/mp-creating-project.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProject = "monitron:CreateProject",

  /**
   * Write - Grants permission to delete a project
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/mp-delete-project.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MonitronResource.project `MonitronResource.project`} 
   */
  DeleteProject = "monitron:DeleteProject",

  /**
   * Permissions management - Grants permission to disassociate an administrator from the project
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/mu-remove-project-admin.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MonitronResource.project `MonitronResource.project`} 
   */
  DisassociateProjectAdminUser = "monitron:DisassociateProjectAdminUser",

  /**
   * Read - Grants permission to get information about a project
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/mp-project-tasks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MonitronResource.project `MonitronResource.project`} 
   */
  GetProject = "monitron:GetProject",

  /**
   * Read - Grants permission to describe an administrator who is associated with the project
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/mp-project-tasks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MonitronResource.project `MonitronResource.project`} 
   */
  GetProjectAdminUser = "monitron:GetProjectAdminUser",

  /**
   * Permissions management - Grants permission to list all administrators associated with the project
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/user-management-chapter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MonitronResource.project `MonitronResource.project`} 
   */
  ListProjectAdminUsers = "monitron:ListProjectAdminUsers",

  /**
   * List - Grants permission to list all projects
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/mp-project-tasks.html
   */
  ListProjects = "monitron:ListProjects",

  /**
   * Read - Grants permission to list all tags for a resource
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/tagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MonitronResource.project `MonitronResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "monitron:ListTagsForResource",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/tagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MonitronResource.project `MonitronResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "monitron:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/tagging.html#modify-tag-1
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MonitronResource.project `MonitronResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "monitron:UntagResource",

  /**
   * Write - Grants permission to update a project
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/mp-updating-project.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MonitronResource.project `MonitronResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateProject = "monitron:UpdateProject",

  /**
   * * - Grant all monitron permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmonitron.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MonitronResource.project `MonitronResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "monitron:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmonitron.html
 */
export const MonitronResource = {

  /**
   * @see https://docs.aws.amazon.com/Monitron/latest/admin-guide/projects-chapter.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  project: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:monitron:${options.region || '*'}:${options.account || '*'}:project/${options.resourceId || '*'}`,
}

