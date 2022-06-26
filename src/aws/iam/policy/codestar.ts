/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html
 */
export enum CodestarAction {

  /**
   * Permissions management - Adds a user to the team for an AWS CodeStar project.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_AssociateTeamMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  AssociateTeamMember = "codestar:AssociateTeamMember",

  /**
   * Permissions management - Creates a project with minimal structure, customer policies, and no resources.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters create requests based on the allowed set of values for each of the tags. ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request. ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateProject = "codestar:CreateProject",

  /**
   * Write - Creates a profile for a user that includes user preferences, display name, and email.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_CreateUserProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.user `CodestarResource.user`} 
   */
  CreateUserProfile = "codestar:CreateUserProfile",

  /**
   * Write - Grants access to extended delete APIs.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  DeleteExtendedAccess = "codestar:DeleteExtendedAccess",

  /**
   * Permissions management - Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  DeleteProject = "codestar:DeleteProject",

  /**
   * Write - Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_DeleteUserProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.user `CodestarResource.user`} 
   */
  DeleteUserProfile = "codestar:DeleteUserProfile",

  /**
   * Read - Describes a project and its resources.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  DescribeProject = "codestar:DescribeProject",

  /**
   * Read - Describes a user in AWS CodeStar and the user attributes across all projects.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_DescribeUserProfile.html
   */
  DescribeUserProfile = "codestar:DescribeUserProfile",

  /**
   * Permissions management - Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_DisassociateTeamMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  DisassociateTeamMember = "codestar:DisassociateTeamMember",

  /**
   * Read - Grants access to extended read APIs.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  GetExtendedAccess = "codestar:GetExtendedAccess",

  /**
   * List - Lists all projects in CodeStar associated with your AWS account.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListProjects.html
   */
  ListProjects = "codestar:ListProjects",

  /**
   * List - Lists all resources associated with a project in CodeStar.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  ListResources = "codestar:ListResources",

  /**
   * List - Lists the tags associated with a project in CodeStar.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTagsForProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  ListTagsForProject = "codestar:ListTagsForProject",

  /**
   * List - Lists all team members associated with a project.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListTeamMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  ListTeamMembers = "codestar:ListTeamMembers",

  /**
   * List - Lists user profiles in AWS CodeStar.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_ListUserProfiles.html
   */
  ListUserProfiles = "codestar:ListUserProfiles",

  /**
   * Write - Grants access to extended write APIs.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  PutExtendedAccess = "codestar:PutExtendedAccess",

  /**
   * Tagging - Adds tags to a project in CodeStar.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_TagProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters create requests based on the allowed set of values for each of the tags. ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request. ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagProject = "codestar:TagProject",

  /**
   * Tagging - Removes tags from a project in CodeStar.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_UntagProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request. ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagProject = "codestar:UntagProject",

  /**
   * Write - Updates a project in CodeStar.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  UpdateProject = "codestar:UpdateProject",

  /**
   * Permissions management - Updates team member attributes within a CodeStar project.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateTeamMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   */
  UpdateTeamMember = "codestar:UpdateTeamMember",

  /**
   * Write - Updates a profile for a user that includes user preferences, display name, and email.
   * @see https://docs.aws.amazon.com/codestar/latest/APIReference/API_UpdateUserProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.user `CodestarResource.user`} 
   */
  UpdateUserProfile = "codestar:UpdateUserProfile",

  /**
   * List - Verifies whether the AWS CodeStar service role exists in the customer's account.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html
   */
  VerifyServiceRole = "codestar:VerifyServiceRole",

  /**
   * * - Grant all codestar permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodestarResource.project `CodestarResource.project`} 
   * - {@link CodestarResource.user `CodestarResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters create requests based on the allowed set of values for each of the tags. ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request. ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "codestar:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html
 */
export const CodestarResource = {

  /**
   * @see https://docs.aws.amazon.com/codestar/latest/userguide/working-with-projects.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource. ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  project: (options: Partial<{partition: string, region: string, account: string, projectId: string}> = {}) => `arn:${options.partition || '*'}:codestar:${options.region || '*'}:${options.account || '*'}:project/${options.projectId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:ResourceTag/${TagKey}`:  ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestar.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  user: (options: Partial<{partition: string, account: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:user/${aws:username}`,
}

