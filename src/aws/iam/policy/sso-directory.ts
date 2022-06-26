/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsssodirectory.html
 */
export enum SsoDirectoryAction {

  /**
   * Write - Grants permission to add a member to a group in the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  AddMemberToGroup = "sso-directory:AddMemberToGroup",

  /**
   * Write - Grants permission to complete the creation process of a virtual MFA device
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CompleteVirtualMfaDeviceRegistration = "sso-directory:CompleteVirtualMfaDeviceRegistration",

  /**
   * Write - Grants permission to complete the registration process of a WebAuthn device
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CompleteWebAuthnDeviceRegistration = "sso-directory:CompleteWebAuthnDeviceRegistration",

  /**
   * Write - Grants permission to create an alias for the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateAlias = "sso-directory:CreateAlias",

  /**
   * Write - Grants permission to create a bearer token for a given provisioning tenant
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateBearerToken = "sso-directory:CreateBearerToken",

  /**
   * Write - Grants permission to create an External Identity Provider configuration for the directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateExternalIdPConfigurationForDirectory = "sso-directory:CreateExternalIdPConfigurationForDirectory",

  /**
   * Write - Grants permission to create a group in the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateGroup = "sso-directory:CreateGroup",

  /**
   * Write - Grants permission to create a provisioning tenant for a given directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateProvisioningTenant = "sso-directory:CreateProvisioningTenant",

  /**
   * Write - Grants permission to create a user in the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateUser = "sso-directory:CreateUser",

  /**
   * Write - Grants permission to delete a bearer token
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteBearerToken = "sso-directory:DeleteBearerToken",

  /**
   * Write - Grants permission to delete the given external IdP certificate
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteExternalIdPCertificate = "sso-directory:DeleteExternalIdPCertificate",

  /**
   * Write - Grants permission to delete an External Identity Provider configuration associated with the directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteExternalIdPConfigurationForDirectory = "sso-directory:DeleteExternalIdPConfigurationForDirectory",

  /**
   * Write - Grants permission to delete a group from the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteGroup = "sso-directory:DeleteGroup",

  /**
   * Write - Grants permission to delete a MFA device by device name for a given user
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteMfaDeviceForUser = "sso-directory:DeleteMfaDeviceForUser",

  /**
   * Write - Grants permission to delete the provisioning tenant
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteProvisioningTenant = "sso-directory:DeleteProvisioningTenant",

  /**
   * Write - Grants permission to delete a user from the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteUser = "sso-directory:DeleteUser",

  /**
   * Read - Grants permission to retrieve information about the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribeDirectory = "sso-directory:DescribeDirectory",

  /**
   * Read - Grants permission to query the group data, not including user and group members
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribeGroup = "sso-directory:DescribeGroup",

  /**
   * Read - Grants permission to retrieve information about groups from the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribeGroups = "sso-directory:DescribeGroups",

  /**
   * Read - Grants permission to describes the provisioning tenant
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribeProvisioningTenant = "sso-directory:DescribeProvisioningTenant",

  /**
   * Read - Grants permission to retrieve information about a user from the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribeUser = "sso-directory:DescribeUser",

  /**
   * Read - Grants permission to describe user with a valid unique attribute represented for the user
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribeUserByUniqueAttribute = "sso-directory:DescribeUserByUniqueAttribute",

  /**
   * Read - Grants permission to retrieve information about user from the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribeUsers = "sso-directory:DescribeUsers",

  /**
   * Write - Grants permission to disable authentication of end users with an External Identity Provider
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DisableExternalIdPConfigurationForDirectory = "sso-directory:DisableExternalIdPConfigurationForDirectory",

  /**
   * Write - Grants permission to deactivate a user in the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DisableUser = "sso-directory:DisableUser",

  /**
   * Write - Grants permission to enable authentication of end users with an External Identity Provider
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  EnableExternalIdPConfigurationForDirectory = "sso-directory:EnableExternalIdPConfigurationForDirectory",

  /**
   * Write - Grants permission to activate user in the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  EnableUser = "sso-directory:EnableUser",

  /**
   * Read - Grants permission to retrieve the AWS SSO Service Provider configurations for the directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetAWSSPConfigurationForDirectory = "sso-directory:GetAWSSPConfigurationForDirectory",

  /**
   * Read - (Deprecated) Grants permission to get UserPool Info
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetUserPoolInfo = "sso-directory:GetUserPoolInfo",

  /**
   * Write - Grants permission to import the IdP certificate used for verifying external IdP responses
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ImportExternalIdPCertificate = "sso-directory:ImportExternalIdPCertificate",

  /**
   * Read - Grants permission to check if a member is a part of the group in the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  IsMemberInGroup = "sso-directory:IsMemberInGroup",

  /**
   * Read - Grants permission to list bearer tokens for a given provisioning tenant
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListBearerTokens = "sso-directory:ListBearerTokens",

  /**
   * Read - Grants permission to list the external IdP certificates of a given directory and IdP
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListExternalIdPCertificates = "sso-directory:ListExternalIdPCertificates",

  /**
   * Read - Grants permission to list all the External Identity Provider configurations created for the directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListExternalIdPConfigurationsForDirectory = "sso-directory:ListExternalIdPConfigurationsForDirectory",

  /**
   * Read - Grants permission to list groups of the target member
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListGroupsForMember = "sso-directory:ListGroupsForMember",

  /**
   * Read - Grants permission to list groups for a user from the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListGroupsForUser = "sso-directory:ListGroupsForUser",

  /**
   * Read - Grants permission to retrieve all members that are part of a group in the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListMembersInGroup = "sso-directory:ListMembersInGroup",

  /**
   * Read - Grants permission to list all active MFA devices and their MFA device metadata for a user
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListMfaDevicesForUser = "sso-directory:ListMfaDevicesForUser",

  /**
   * Read - Grants permission to list provisioning tenants for a given directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListProvisioningTenants = "sso-directory:ListProvisioningTenants",

  /**
   * Write - Grants permission to remove a member that is part of a group in the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  RemoveMemberFromGroup = "sso-directory:RemoveMemberFromGroup",

  /**
   * Read - Grants permission to search for groups within the associated directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  SearchGroups = "sso-directory:SearchGroups",

  /**
   * Read - Grants permission to search for users within the associated directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  SearchUsers = "sso-directory:SearchUsers",

  /**
   * Write - Grants permission to begin the creation process of virtual mfa device
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  StartVirtualMfaDeviceRegistration = "sso-directory:StartVirtualMfaDeviceRegistration",

  /**
   * Write - Grants permission to begin the registration process of a WebAuthn device
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  StartWebAuthnDeviceRegistration = "sso-directory:StartWebAuthnDeviceRegistration",

  /**
   * Write - Grants permission to update an External Identity Provider configuration associated with the directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateExternalIdPConfigurationForDirectory = "sso-directory:UpdateExternalIdPConfigurationForDirectory",

  /**
   * Write - Grants permission to update information about a group in the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateGroup = "sso-directory:UpdateGroup",

  /**
   * Write - Grants permission to update group display name update group display name response
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateGroupDisplayName = "sso-directory:UpdateGroupDisplayName",

  /**
   * Write - Grants permission to update MFA device information
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateMfaDeviceForUser = "sso-directory:UpdateMfaDeviceForUser",

  /**
   * Write - Grants permission to update a password by sending password reset link via email or generating one time password for a user in the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdatePassword = "sso-directory:UpdatePassword",

  /**
   * Write - Grants permission to update user information in the directory that AWS SSO provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateUser = "sso-directory:UpdateUser",

  /**
   * Write - Grants permission to update user name update user name response
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateUserName = "sso-directory:UpdateUserName",

  /**
   * Write - Grants permission to verify an email address of an User
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  VerifyEmail = "sso-directory:VerifyEmail",

  /**
   * * - Grant all sso-directory permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsssodirectory.html
   */
  All = "sso-directory:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsssodirectory.html
 */
export const SsoDirectoryResource = {
}

