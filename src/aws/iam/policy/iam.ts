/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_identityandaccessmanagement.html
 */
export enum IamAction {

  /**
   * Write - Grants permission to add a new client ID (audience) to the list of registered IDs for the specified IAM OpenID Connect (OIDC) provider resource
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddClientIDToOpenIDConnectProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.oidcProvider `IamResource.oidcProvider`} 
   */
  AddClientIDToOpenIDConnectProvider = "iam:AddClientIDToOpenIDConnectProvider",

  /**
   * Write - Grants permission to add an IAM role to the specified instance profile
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddRoleToInstanceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.instanceProfile `IamResource.instanceProfile`} 
   */
  AddRoleToInstanceProfile = "iam:AddRoleToInstanceProfile",

  /**
   * Write - Grants permission to add an IAM user to the specified IAM group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_AddUserToGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   */
  AddUserToGroup = "iam:AddUserToGroup",

  /**
   * Permissions management - Grants permission to attach a managed policy to the specified IAM group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachGroupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PolicyARN`: Filters access by the ARN of an IAM policy ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PolicyARN documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  AttachGroupPolicy = "iam:AttachGroupPolicy",

  /**
   * Permissions management - Grants permission to attach a managed policy to the specified IAM role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachRolePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PolicyARN`: Filters access by the ARN of an IAM policy ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PolicyARN documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AttachRolePolicy = "iam:AttachRolePolicy",

  /**
   * Permissions management - Grants permission to attach a managed policy to the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_AttachUserPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PolicyARN`: Filters access by the ARN of an IAM policy ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PolicyARN documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AttachUserPolicy = "iam:AttachUserPolicy",

  /**
   * Write - Grants permission for an IAM user to to change their own password
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ChangePassword = "iam:ChangePassword",

  /**
   * Write - Grants permission to create access key and secret access key for the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccessKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  CreateAccessKey = "iam:CreateAccessKey",

  /**
   * Write - Grants permission to create an alias for your AWS account
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateAccountAlias.html
   */
  CreateAccountAlias = "iam:CreateAccountAlias",

  /**
   * Write - Grants permission to create a new group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   */
  CreateGroup = "iam:CreateGroup",

  /**
   * Write - Grants permission to create a new instance profile
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateInstanceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.instanceProfile `IamResource.instanceProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateInstanceProfile = "iam:CreateInstanceProfile",

  /**
   * Write - Grants permission to create a password for the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateLoginProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  CreateLoginProfile = "iam:CreateLoginProfile",

  /**
   * Write - Grants permission to create an IAM resource that describes an identity provider (IdP) that supports OpenID Connect (OIDC)
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.oidcProvider `IamResource.oidcProvider`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateOpenIDConnectProvider = "iam:CreateOpenIDConnectProvider",

  /**
   * Permissions management - Grants permission to create a new managed policy
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreatePolicy = "iam:CreatePolicy",

  /**
   * Permissions management - Grants permission to create a new version of the specified managed policy
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreatePolicyVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   */
  CreatePolicyVersion = "iam:CreatePolicyVersion",

  /**
   * Write - Grants permission to create a new role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateRole = "iam:CreateRole",

  /**
   * Write - Grants permission to create an IAM resource that describes an identity provider (IdP) that supports SAML 2.0
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateSAMLProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.samlProvider `IamResource.samlProvider`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSAMLProvider = "iam:CreateSAMLProvider",

  /**
   * Write - Grants permission to create an IAM role that allows an AWS service to perform actions on your behalf
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceLinkedRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:AWSServiceName`: Filters access by the AWS service to which this role is attached ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_AWSServiceName documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateServiceLinkedRole = "iam:CreateServiceLinkedRole",

  /**
   * Write - Grants permission to create a new service-specific credential for an IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateServiceSpecificCredential.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  CreateServiceSpecificCredential = "iam:CreateServiceSpecificCredential",

  /**
   * Write - Grants permission to create a new IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateUser = "iam:CreateUser",

  /**
   * Write - Grants permission to create a new virtual MFA device
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateVirtualMFADevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.mfa `IamResource.mfa`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateVirtualMFADevice = "iam:CreateVirtualMFADevice",

  /**
   * Write - Grants permission to deactivate the specified MFA device and remove its association with the IAM user for which it was originally enabled
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeactivateMFADevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  DeactivateMFADevice = "iam:DeactivateMFADevice",

  /**
   * Write - Grants permission to delete the access key pair that is associated with the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccessKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  DeleteAccessKey = "iam:DeleteAccessKey",

  /**
   * Write - Grants permission to delete the specified AWS account alias
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountAlias.html
   */
  DeleteAccountAlias = "iam:DeleteAccountAlias",

  /**
   * Permissions management - Grants permission to delete the password policy for the AWS account
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteAccountPasswordPolicy.html
   */
  DeleteAccountPasswordPolicy = "iam:DeleteAccountPasswordPolicy",

  /**
   * Write - Grants permission to delete the specified IAM group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   */
  DeleteGroup = "iam:DeleteGroup",

  /**
   * Permissions management - Grants permission to delete the specified inline policy from its group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteGroupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   */
  DeleteGroupPolicy = "iam:DeleteGroupPolicy",

  /**
   * Write - Grants permission to delete the specified instance profile
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteInstanceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.instanceProfile `IamResource.instanceProfile`} 
   */
  DeleteInstanceProfile = "iam:DeleteInstanceProfile",

  /**
   * Write - Grants permission to delete the password for the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteLoginProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  DeleteLoginProfile = "iam:DeleteLoginProfile",

  /**
   * Write - Grants permission to delete an OpenID Connect identity provider (IdP) resource object in IAM
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteOpenIDConnectProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.oidcProvider `IamResource.oidcProvider`} 
   */
  DeleteOpenIDConnectProvider = "iam:DeleteOpenIDConnectProvider",

  /**
   * Permissions management - Grants permission to delete the specified managed policy and remove it from any IAM entities (users, groups, or roles) to which it is attached
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   */
  DeletePolicy = "iam:DeletePolicy",

  /**
   * Permissions management - Grants permission to delete a version from the specified managed policy
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeletePolicyVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   */
  DeletePolicyVersion = "iam:DeletePolicyVersion",

  /**
   * Write - Grants permission to delete the specified role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  DeleteRole = "iam:DeleteRole",

  /**
   * Permissions management - Grants permission to remove the permissions boundary from a role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePermissionsBoundary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteRolePermissionsBoundary = "iam:DeleteRolePermissionsBoundary",

  /**
   * Permissions management - Grants permission to delete the specified inline policy from the specified role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteRolePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteRolePolicy = "iam:DeleteRolePolicy",

  /**
   * Write - Grants permission to delete a SAML provider resource in IAM
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSAMLProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.samlProvider `IamResource.samlProvider`} 
   */
  DeleteSAMLProvider = "iam:DeleteSAMLProvider",

  /**
   * Write - Grants permission to delete the specified SSH public key
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSSHPublicKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  DeleteSSHPublicKey = "iam:DeleteSSHPublicKey",

  /**
   * Write - Grants permission to delete the specified server certificate
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServerCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.serverCertificate `IamResource.serverCertificate`} 
   */
  DeleteServerCertificate = "iam:DeleteServerCertificate",

  /**
   * Write - Grants permission to delete an IAM role that is linked to a specific AWS service, if the service is no longer using it
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  DeleteServiceLinkedRole = "iam:DeleteServiceLinkedRole",

  /**
   * Write - Grants permission to delete the specified service-specific credential for an IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceSpecificCredential.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  DeleteServiceSpecificCredential = "iam:DeleteServiceSpecificCredential",

  /**
   * Write - Grants permission to delete a signing certificate that is associated with the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteSigningCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  DeleteSigningCertificate = "iam:DeleteSigningCertificate",

  /**
   * Write - Grants permission to delete the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  DeleteUser = "iam:DeleteUser",

  /**
   * Permissions management - Grants permission to remove the permissions boundary from the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPermissionsBoundary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteUserPermissionsBoundary = "iam:DeleteUserPermissionsBoundary",

  /**
   * Permissions management - Grants permission to delete the specified inline policy from an IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteUserPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteUserPolicy = "iam:DeleteUserPolicy",

  /**
   * Write - Grants permission to delete a virtual MFA device
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteVirtualMFADevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.mfa `IamResource.mfa`} 
   * - {@link IamResource.smsMfa `IamResource.smsMfa`} 
   */
  DeleteVirtualMFADevice = "iam:DeleteVirtualMFADevice",

  /**
   * Permissions management - Grants permission to detach a managed policy from the specified IAM group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachGroupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PolicyARN`: Filters access by the ARN of an IAM policy ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PolicyARN documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DetachGroupPolicy = "iam:DetachGroupPolicy",

  /**
   * Permissions management - Grants permission to detach a managed policy from the specified role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachRolePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PolicyARN`: Filters access by the ARN of an IAM policy ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PolicyARN documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DetachRolePolicy = "iam:DetachRolePolicy",

  /**
   * Permissions management - Grants permission to detach a managed policy from the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_DetachUserPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PolicyARN`: Filters access by the ARN of an IAM policy ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PolicyARN documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DetachUserPolicy = "iam:DetachUserPolicy",

  /**
   * Write - Grants permission to enable an MFA device and associate it with the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_EnableMFADevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  EnableMFADevice = "iam:EnableMFADevice",

  /**
   * Read - Grants permission to generate a credential report for the AWS account
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html
   */
  GenerateCredentialReport = "iam:GenerateCredentialReport",

  /**
   * Read - Grants permission to generate an access report for an AWS Organizations entity
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateOrganizationsAccessReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.accessReport `IamResource.accessReport`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:OrganizationsPolicyId`: Filters access by the ID of an AWS Organizations policy ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_OrganizationsPolicyId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GenerateOrganizationsAccessReport = "iam:GenerateOrganizationsAccessReport",

  /**
   * Read - Grants permission to generate a service last accessed data report for an IAM resource
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateServiceLastAccessedDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   * - {@link IamResource.policy `IamResource.policy`} 
   * - {@link IamResource.role `IamResource.role`} 
   * - {@link IamResource.user `IamResource.user`} 
   */
  GenerateServiceLastAccessedDetails = "iam:GenerateServiceLastAccessedDetails",

  /**
   * Read - Grants permission to retrieve information about when the specified access key was last used
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccessKeyLastUsed.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  GetAccessKeyLastUsed = "iam:GetAccessKeyLastUsed",

  /**
   * Read - Grants permission to retrieve information about all IAM users, groups, roles, and policies in your AWS account, including their relationships to one another
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountAuthorizationDetails.html
   */
  GetAccountAuthorizationDetails = "iam:GetAccountAuthorizationDetails",

  /**
   * Read - Grants permission to retrieve the password policy for the AWS account
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountPasswordPolicy.html
   */
  GetAccountPasswordPolicy = "iam:GetAccountPasswordPolicy",

  /**
   * List - Grants permission to retrieve information about IAM entity usage and IAM quotas in the AWS account
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetAccountSummary.html
   */
  GetAccountSummary = "iam:GetAccountSummary",

  /**
   * Read - Grants permission to retrieve a list of all of the context keys that are referenced in the specified policy
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForCustomPolicy.html
   */
  GetContextKeysForCustomPolicy = "iam:GetContextKeysForCustomPolicy",

  /**
   * Read - Grants permission to retrieve a list of all context keys that are referenced in all IAM policies that are attached to the specified IAM identity (user, group, or role)
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetContextKeysForPrincipalPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   * - {@link IamResource.role `IamResource.role`} 
   * - {@link IamResource.user `IamResource.user`} 
   */
  GetContextKeysForPrincipalPolicy = "iam:GetContextKeysForPrincipalPolicy",

  /**
   * Read - Grants permission to retrieve a credential report for the AWS account
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetCredentialReport.html
   */
  GetCredentialReport = "iam:GetCredentialReport",

  /**
   * Read - Grants permission to retrieve a list of IAM users in the specified IAM group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   */
  GetGroup = "iam:GetGroup",

  /**
   * Read - Grants permission to retrieve an inline policy document that is embedded in the specified IAM group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetGroupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   */
  GetGroupPolicy = "iam:GetGroupPolicy",

  /**
   * Read - Grants permission to retrieve information about the specified instance profile, including the instance profile's path, GUID, ARN, and role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.instanceProfile `IamResource.instanceProfile`} 
   */
  GetInstanceProfile = "iam:GetInstanceProfile",

  /**
   * List - Grants permission to retrieve the user name and password creation date for the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetLoginProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  GetLoginProfile = "iam:GetLoginProfile",

  /**
   * Read - Grants permission to retrieve information about the specified OpenID Connect (OIDC) provider resource in IAM
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOpenIDConnectProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.oidcProvider `IamResource.oidcProvider`} 
   */
  GetOpenIDConnectProvider = "iam:GetOpenIDConnectProvider",

  /**
   * Read - Grants permission to retrieve an AWS Organizations access report
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetOrganizationsAccessReport.html
   */
  GetOrganizationsAccessReport = "iam:GetOrganizationsAccessReport",

  /**
   * Read - Grants permission to retrieve information about the specified managed policy, including the policy's default version and the total number of identities to which the policy is attached
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   */
  GetPolicy = "iam:GetPolicy",

  /**
   * Read - Grants permission to retrieve information about a version of the specified managed policy, including the policy document
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicyVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   */
  GetPolicyVersion = "iam:GetPolicyVersion",

  /**
   * Read - Grants permission to retrieve information about the specified role, including the role's path, GUID, ARN, and the role's trust policy
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  GetRole = "iam:GetRole",

  /**
   * Read - Grants permission to retrieve an inline policy document that is embedded with the specified IAM role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRolePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  GetRolePolicy = "iam:GetRolePolicy",

  /**
   * Read - Grants permission to retrieve the SAML provider metadocument that was uploaded when the IAM SAML provider resource was created or updated
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSAMLProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.samlProvider `IamResource.samlProvider`} 
   */
  GetSAMLProvider = "iam:GetSAMLProvider",

  /**
   * Read - Grants permission to retrieve the specified SSH public key, including metadata about the key
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetSSHPublicKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  GetSSHPublicKey = "iam:GetSSHPublicKey",

  /**
   * Read - Grants permission to retrieve information about the specified server certificate stored in IAM
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.serverCertificate `IamResource.serverCertificate`} 
   */
  GetServerCertificate = "iam:GetServerCertificate",

  /**
   * Read - Grants permission to retrieve information about the service last accessed data report
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetails.html
   */
  GetServiceLastAccessedDetails = "iam:GetServiceLastAccessedDetails",

  /**
   * Read - Grants permission to retrieve information about the entities from the service last accessed data report
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLastAccessedDetailsWithEntities.html
   */
  GetServiceLastAccessedDetailsWithEntities = "iam:GetServiceLastAccessedDetailsWithEntities",

  /**
   * Read - Grants permission to retrieve an IAM service-linked role deletion status
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  GetServiceLinkedRoleDeletionStatus = "iam:GetServiceLinkedRoleDeletionStatus",

  /**
   * Read - Grants permission to retrieve information about the specified IAM user, including the user's creation date, path, unique ID, and ARN
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  GetUser = "iam:GetUser",

  /**
   * Read - Grants permission to retrieve an inline policy document that is embedded in the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUserPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  GetUserPolicy = "iam:GetUserPolicy",

  /**
   * List - Grants permission to list information about the access key IDs that are associated with the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccessKeys.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ListAccessKeys = "iam:ListAccessKeys",

  /**
   * List - Grants permission to list the account alias that is associated with the AWS account
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAccountAliases.html
   */
  ListAccountAliases = "iam:ListAccountAliases",

  /**
   * List - Grants permission to list all managed policies that are attached to the specified IAM group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedGroupPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   */
  ListAttachedGroupPolicies = "iam:ListAttachedGroupPolicies",

  /**
   * List - Grants permission to list all managed policies that are attached to the specified IAM role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  ListAttachedRolePolicies = "iam:ListAttachedRolePolicies",

  /**
   * List - Grants permission to list all managed policies that are attached to the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ListAttachedUserPolicies = "iam:ListAttachedUserPolicies",

  /**
   * List - Grants permission to list all IAM identities to which the specified managed policy is attached
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListEntitiesForPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   */
  ListEntitiesForPolicy = "iam:ListEntitiesForPolicy",

  /**
   * List - Grants permission to list the names of the inline policies that are embedded in the specified IAM group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   */
  ListGroupPolicies = "iam:ListGroupPolicies",

  /**
   * List - Grants permission to list the IAM groups that have the specified path prefix
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroups.html
   */
  ListGroups = "iam:ListGroups",

  /**
   * List - Grants permission to list the IAM groups that the specified IAM user belongs to
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupsForUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ListGroupsForUser = "iam:ListGroupsForUser",

  /**
   * List - Grants permission to list the tags that are attached to the specified instance profile
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfileTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.instanceProfile `IamResource.instanceProfile`} 
   */
  ListInstanceProfileTags = "iam:ListInstanceProfileTags",

  /**
   * List - Grants permission to list the instance profiles that have the specified path prefix
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.instanceProfile `IamResource.instanceProfile`} 
   */
  ListInstanceProfiles = "iam:ListInstanceProfiles",

  /**
   * List - Grants permission to list the instance profiles that have the specified associated IAM role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListInstanceProfilesForRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  ListInstanceProfilesForRole = "iam:ListInstanceProfilesForRole",

  /**
   * List - Grants permission to list the tags that are attached to the specified virtual mfa device
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADeviceTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.mfa `IamResource.mfa`} 
   */
  ListMFADeviceTags = "iam:ListMFADeviceTags",

  /**
   * List - Grants permission to list the MFA devices for an IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListMFADevices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ListMFADevices = "iam:ListMFADevices",

  /**
   * List - Grants permission to list the tags that are attached to the specified OpenID Connect provider
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviderTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.oidcProvider `IamResource.oidcProvider`} 
   */
  ListOpenIDConnectProviderTags = "iam:ListOpenIDConnectProviderTags",

  /**
   * List - Grants permission to list information about the IAM OpenID Connect (OIDC) provider resource objects that are defined in the AWS account
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListOpenIDConnectProviders.html
   */
  ListOpenIDConnectProviders = "iam:ListOpenIDConnectProviders",

  /**
   * List - Grants permission to list all managed policies
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicies.html
   */
  ListPolicies = "iam:ListPolicies",

  /**
   * List - Grants permission to list information about the policies that grant an entity access to a specific service
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPoliciesGrantingServiceAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   * - {@link IamResource.role `IamResource.role`} 
   * - {@link IamResource.user `IamResource.user`} 
   */
  ListPoliciesGrantingServiceAccess = "iam:ListPoliciesGrantingServiceAccess",

  /**
   * List - Grants permission to list the tags that are attached to the specified managed policy
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   */
  ListPolicyTags = "iam:ListPolicyTags",

  /**
   * List - Grants permission to list information about the versions of the specified managed policy, including the version that is currently set as the policy's default version
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListPolicyVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   */
  ListPolicyVersions = "iam:ListPolicyVersions",

  /**
   * List - Grants permission to list the names of the inline policies that are embedded in the specified IAM role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  ListRolePolicies = "iam:ListRolePolicies",

  /**
   * List - Grants permission to list the tags that are attached to the specified IAM role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoleTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  ListRoleTags = "iam:ListRoleTags",

  /**
   * List - Grants permission to list the IAM roles that have the specified path prefix
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRoles.html
   */
  ListRoles = "iam:ListRoles",

  /**
   * List - Grants permission to list the tags that are attached to the specified SAML provider
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviderTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.samlProvider `IamResource.samlProvider`} 
   */
  ListSAMLProviderTags = "iam:ListSAMLProviderTags",

  /**
   * List - Grants permission to list the SAML provider resources in IAM
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSAMLProviders.html
   */
  ListSAMLProviders = "iam:ListSAMLProviders",

  /**
   * List - Grants permission to list information about the SSH public keys that are associated with the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSSHPublicKeys.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ListSSHPublicKeys = "iam:ListSSHPublicKeys",

  /**
   * List - Grants permission to list the tags that are attached to the specified server certificate
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificateTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.serverCertificate `IamResource.serverCertificate`} 
   */
  ListServerCertificateTags = "iam:ListServerCertificateTags",

  /**
   * List - Grants permission to list the server certificates that have the specified path prefix
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServerCertificates.html
   */
  ListServerCertificates = "iam:ListServerCertificates",

  /**
   * List - Grants permission to list the service-specific credentials that are associated with the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListServiceSpecificCredentials.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ListServiceSpecificCredentials = "iam:ListServiceSpecificCredentials",

  /**
   * List - Grants permission to list information about the signing certificates that are associated with the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListSigningCertificates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ListSigningCertificates = "iam:ListSigningCertificates",

  /**
   * List - Grants permission to list the names of the inline policies that are embedded in the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ListUserPolicies = "iam:ListUserPolicies",

  /**
   * List - Grants permission to list the tags that are attached to the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUserTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ListUserTags = "iam:ListUserTags",

  /**
   * List - Grants permission to list the IAM users that have the specified path prefix
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListUsers.html
   */
  ListUsers = "iam:ListUsers",

  /**
   * List - Grants permission to list virtual MFA devices by assignment status
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListVirtualMFADevices.html
   */
  ListVirtualMFADevices = "iam:ListVirtualMFADevices",

  /**
   * Write - Grants permission to pass a role to a service
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:AssociatedResourceArn`: Filters by the resource that the role will be used on behalf of ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_AssociatedResourceArn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `iam:PassedToService`: Filters access by the AWS service to which this role is passed ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PassedToService documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PassRole = "iam:PassRole",

  /**
   * Permissions management - Grants permission to create or update an inline policy document that is embedded in the specified IAM group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutGroupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   */
  PutGroupPolicy = "iam:PutGroupPolicy",

  /**
   * Permissions management - Grants permission to set a managed policy as a permissions boundary for a role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePermissionsBoundary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutRolePermissionsBoundary = "iam:PutRolePermissionsBoundary",

  /**
   * Permissions management - Grants permission to create or update an inline policy document that is embedded in the specified IAM role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutRolePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutRolePolicy = "iam:PutRolePolicy",

  /**
   * Permissions management - Grants permission to set a managed policy as a permissions boundary for an IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPermissionsBoundary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutUserPermissionsBoundary = "iam:PutUserPermissionsBoundary",

  /**
   * Permissions management - Grants permission to create or update an inline policy document that is embedded in the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_PutUserPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutUserPolicy = "iam:PutUserPolicy",

  /**
   * Write - Grants permission to remove the client ID (audience) from the list of client IDs in the specified IAM OpenID Connect (OIDC) provider resource
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveClientIDFromOpenIDConnectProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.oidcProvider `IamResource.oidcProvider`} 
   */
  RemoveClientIDFromOpenIDConnectProvider = "iam:RemoveClientIDFromOpenIDConnectProvider",

  /**
   * Write - Grants permission to remove an IAM role from the specified EC2 instance profile
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveRoleFromInstanceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.instanceProfile `IamResource.instanceProfile`} 
   */
  RemoveRoleFromInstanceProfile = "iam:RemoveRoleFromInstanceProfile",

  /**
   * Write - Grants permission to remove an IAM user from the specified group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_RemoveUserFromGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   */
  RemoveUserFromGroup = "iam:RemoveUserFromGroup",

  /**
   * Write - Grants permission to reset the password for an existing service-specific credential for an IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResetServiceSpecificCredential.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ResetServiceSpecificCredential = "iam:ResetServiceSpecificCredential",

  /**
   * Write - Grants permission to synchronize the specified MFA device with its IAM entity (user or role)
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_ResyncMFADevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  ResyncMFADevice = "iam:ResyncMFADevice",

  /**
   * Permissions management - Grants permission to set the version of the specified policy as the policy's default version
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetDefaultPolicyVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   */
  SetDefaultPolicyVersion = "iam:SetDefaultPolicyVersion",

  /**
   * Write - Grants permission to set the STS global endpoint token version
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_SetSecurityTokenServicePreferences.html
   */
  SetSecurityTokenServicePreferences = "iam:SetSecurityTokenServicePreferences",

  /**
   * Read - Grants permission to simulate whether an identity-based policy or resource-based policy provides permissions for specific API operations and resources
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulateCustomPolicy.html
   */
  SimulateCustomPolicy = "iam:SimulateCustomPolicy",

  /**
   * Read - Grants permission to simulate whether an identity-based policy that is attached to a specified IAM entity (user or role) provides permissions for specific API operations and resources
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_SimulatePrincipalPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   * - {@link IamResource.role `IamResource.role`} 
   * - {@link IamResource.user `IamResource.user`} 
   */
  SimulatePrincipalPolicy = "iam:SimulatePrincipalPolicy",

  /**
   * Tagging - Grants permission to add tags to an instance profile
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagInstanceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.instanceProfile `IamResource.instanceProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagInstanceProfile = "iam:TagInstanceProfile",

  /**
   * Tagging - Grants permission to add tags to a virtual mfa device
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagMFADevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.mfa `IamResource.mfa`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagMFADevice = "iam:TagMFADevice",

  /**
   * Tagging - Grants permission to add tags to an OpenID Connect provider
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagOpenIDConnectProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.oidcProvider `IamResource.oidcProvider`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagOpenIDConnectProvider = "iam:TagOpenIDConnectProvider",

  /**
   * Tagging - Grants permission to add tags to a managed policy
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagPolicy = "iam:TagPolicy",

  /**
   * Tagging - Grants permission to add tags to an IAM role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagRole = "iam:TagRole",

  /**
   * Tagging - Grants permission to add tags to a SAML Provider
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagSAMLProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.samlProvider `IamResource.samlProvider`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagSAMLProvider = "iam:TagSAMLProvider",

  /**
   * Tagging - Grants permission to add tags to a server certificate
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagServerCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.serverCertificate `IamResource.serverCertificate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagServerCertificate = "iam:TagServerCertificate",

  /**
   * Tagging - Grants permission to add tags to an IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_TagUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagUser = "iam:TagUser",

  /**
   * Tagging - Grants permission to remove the specified tags from the instance profile
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagInstanceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.instanceProfile `IamResource.instanceProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagInstanceProfile = "iam:UntagInstanceProfile",

  /**
   * Tagging - Grants permission to remove the specified tags from the virtual mfa device
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagMFADevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.mfa `IamResource.mfa`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagMFADevice = "iam:UntagMFADevice",

  /**
   * Tagging - Grants permission to remove the specified tags from the OpenID Connect provider
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagOpenIDConnectProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.oidcProvider `IamResource.oidcProvider`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagOpenIDConnectProvider = "iam:UntagOpenIDConnectProvider",

  /**
   * Tagging - Grants permission to remove the specified tags from the managed policy
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.policy `IamResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagPolicy = "iam:UntagPolicy",

  /**
   * Tagging - Grants permission to remove the specified tags from the role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagRole = "iam:UntagRole",

  /**
   * Tagging - Grants permission to remove the specified tags from the SAML Provider
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagSAMLProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.samlProvider `IamResource.samlProvider`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagSAMLProvider = "iam:UntagSAMLProvider",

  /**
   * Tagging - Grants permission to remove the specified tags from the server certificate
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagServerCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.serverCertificate `IamResource.serverCertificate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagServerCertificate = "iam:UntagServerCertificate",

  /**
   * Tagging - Grants permission to remove the specified tags from the user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UntagUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagUser = "iam:UntagUser",

  /**
   * Write - Grants permission to update the status of the specified access key as Active or Inactive
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccessKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  UpdateAccessKey = "iam:UpdateAccessKey",

  /**
   * Write - Grants permission to update the password policy settings for the AWS account
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAccountPasswordPolicy.html
   */
  UpdateAccountPasswordPolicy = "iam:UpdateAccountPasswordPolicy",

  /**
   * Permissions management - Grants permission to update the policy that grants an IAM entity permission to assume a role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  UpdateAssumeRolePolicy = "iam:UpdateAssumeRolePolicy",

  /**
   * Write - Grants permission to update the name or path of the specified IAM group
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.group `IamResource.group`} 
   */
  UpdateGroup = "iam:UpdateGroup",

  /**
   * Write - Grants permission to change the password for the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateLoginProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  UpdateLoginProfile = "iam:UpdateLoginProfile",

  /**
   * Write - Grants permission to update the entire list of server certificate thumbprints that are associated with an OpenID Connect (OIDC) provider resource
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateOpenIDConnectProviderThumbprint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.oidcProvider `IamResource.oidcProvider`} 
   */
  UpdateOpenIDConnectProviderThumbprint = "iam:UpdateOpenIDConnectProviderThumbprint",

  /**
   * Write - Grants permission to update the description or maximum session duration setting of a role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  UpdateRole = "iam:UpdateRole",

  /**
   * Write - Grants permission to update only the description of a role
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateRoleDescription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.role `IamResource.role`} 
   */
  UpdateRoleDescription = "iam:UpdateRoleDescription",

  /**
   * Write - Grants permission to update the metadata document for an existing SAML provider resource
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSAMLProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.samlProvider `IamResource.samlProvider`} 
   */
  UpdateSAMLProvider = "iam:UpdateSAMLProvider",

  /**
   * Write - Grants permission to update the status of an IAM user's SSH public key to active or inactive
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSSHPublicKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  UpdateSSHPublicKey = "iam:UpdateSSHPublicKey",

  /**
   * Write - Grants permission to update the name or the path of the specified server certificate stored in IAM
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServerCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.serverCertificate `IamResource.serverCertificate`} 
   */
  UpdateServerCertificate = "iam:UpdateServerCertificate",

  /**
   * Write - Grants permission to update the status of a service-specific credential to active or inactive for an IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateServiceSpecificCredential.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  UpdateServiceSpecificCredential = "iam:UpdateServiceSpecificCredential",

  /**
   * Write - Grants permission to update the status of the specified user signing certificate to active or disabled
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateSigningCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  UpdateSigningCertificate = "iam:UpdateSigningCertificate",

  /**
   * Write - Grants permission to update the name or the path of the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  UpdateUser = "iam:UpdateUser",

  /**
   * Write - Grants permission to upload an SSH public key and associate it with the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSSHPublicKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  UploadSSHPublicKey = "iam:UploadSSHPublicKey",

  /**
   * Write - Grants permission to upload a server certificate entity for the AWS account
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.serverCertificate `IamResource.serverCertificate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UploadServerCertificate = "iam:UploadServerCertificate",

  /**
   * Write - Grants permission to upload an X.509 signing certificate and associate it with the specified IAM user
   * @see https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadSigningCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.user `IamResource.user`} 
   */
  UploadSigningCertificate = "iam:UploadSigningCertificate",

  /**
   * * - Grant all iam permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_identityandaccessmanagement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IamResource.oidcProvider `IamResource.oidcProvider`} 
   * - {@link IamResource.instanceProfile `IamResource.instanceProfile`} 
   * - {@link IamResource.group `IamResource.group`} 
   * - {@link IamResource.role `IamResource.role`} 
   * - {@link IamResource.user `IamResource.user`} 
   * - {@link IamResource.policy `IamResource.policy`} 
   * - {@link IamResource.samlProvider `IamResource.samlProvider`} 
   * - {@link IamResource.mfa `IamResource.mfa`} 
   * - {@link IamResource.serverCertificate `IamResource.serverCertificate`} 
   * - {@link IamResource.smsMfa `IamResource.smsMfa`} 
   * - {@link IamResource.accessReport `IamResource.accessReport`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iam:PolicyARN`: Filters access by the ARN of an IAM policy ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PolicyARN documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `iam:PermissionsBoundary`: Filters access if the specified policy is set as the permissions boundary on the IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PermissionsBoundary documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iam:AWSServiceName`: Filters access by the AWS service to which this role is attached ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_AWSServiceName documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iam:OrganizationsPolicyId`: Filters access by the ID of an AWS Organizations policy ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_OrganizationsPolicyId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iam:AssociatedResourceArn`: Filters by the resource that the role will be used on behalf of ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_AssociatedResourceArn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `iam:PassedToService`: Filters access by the AWS service to which this role is passed ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_PassedToService documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "iam:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_identityandaccessmanagement.html
 */
export const IamResource = {

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html
   */
  accessReport: (options: Partial<{partition: string, account: string, entityPath: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:access-report/${options.entityPath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html
   */
  assumedRole: (options: Partial<{partition: string, account: string, roleName: string, roleSessionName: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:assumed-role/${options.roleName || '*'}/${options.roleSessionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html
   */
  federatedUser: (options: Partial<{partition: string, account: string, userName: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:federated-user/${options.userName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html
   */
  group: (options: Partial<{partition: string, account: string, groupNameWithPath: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:group/${options.groupNameWithPath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  instanceProfile: (options: Partial<{partition: string, account: string, instanceProfileNameWithPath: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:instance-profile/${options.instanceProfileNameWithPath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  mfa: (options: Partial<{partition: string, account: string, mfaTokenIdWithPath: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:mfa/${options.mfaTokenIdWithPath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  oidcProvider: (options: Partial<{partition: string, account: string, oidcProviderName: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:oidc-provider/${options.oidcProviderName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  policy: (options: Partial<{partition: string, account: string, policyNameWithPath: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:policy/${options.policyNameWithPath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iam:ResourceTag/${TagKey}`: Filters access by the tags attached to an IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceTag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  role: (options: Partial<{partition: string, account: string, roleNameWithPath: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:role/${options.roleNameWithPath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  samlProvider: (options: Partial<{partition: string, account: string, samlProviderName: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:saml-provider/${options.samlProviderName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  serverCertificate: (options: Partial<{partition: string, account: string, certificateNameWithPath: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:server-certificate/${options.certificateNameWithPath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_sms.html
   */
  smsMfa: (options: Partial<{partition: string, account: string, mfaTokenIdWithPath: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:sms-mfa/${options.mfaTokenIdWithPath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iam:ResourceTag/${TagKey}`: Filters access by the tags attached to an IAM entity (user or role) ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceTag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  user: (options: Partial<{partition: string, account: string, userNameWithPath: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:user/${options.userNameWithPath || '*'}`,
}

