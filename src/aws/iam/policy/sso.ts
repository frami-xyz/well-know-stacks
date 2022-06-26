/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssso.html
 */
export enum SsoAction {

  /**
   * Write - Grants permission to connect a directory to be used by AWS Single Sign-On
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  AssociateDirectory = "sso:AssociateDirectory",

  /**
   * Write - Grants permission to create an association between a directory user or group and a profile
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  AssociateProfile = "sso:AssociateProfile",

  /**
   * PermissionsManagement - Grants permission to attach an AWS managed policy to a permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_AttachManagedPolicyToPermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  AttachManagedPolicyToPermissionSet = "sso:AttachManagedPolicyToPermissionSet",

  /**
   * Write - Grants permission to assign access to a Principal for a specified AWS account using a specified permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateAccountAssignment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.account `SsoResource.account`} 
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  CreateAccountAssignment = "sso:CreateAccountAssignment",

  /**
   * Write - Grants permission to add an application instance to AWS Single Sign-On
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateApplicationInstance = "sso:CreateApplicationInstance",

  /**
   * Write - Grants permission to add a new certificate for an application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateApplicationInstanceCertificate = "sso:CreateApplicationInstanceCertificate",

  /**
   * Write - Grants permission to enable the instance for ABAC and specify the attributes
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreateInstanceAccessControlAttributeConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  CreateInstanceAccessControlAttributeConfiguration = "sso:CreateInstanceAccessControlAttributeConfiguration",

  /**
   * Write - Grants permission to add a managed application instance to AWS Single Sign-On
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateManagedApplicationInstance = "sso:CreateManagedApplicationInstance",

  /**
   * Write - Grants permission to create a permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_CreatePermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePermissionSet = "sso:CreatePermissionSet",

  /**
   * Write - Grants permission to create a profile for an application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateProfile = "sso:CreateProfile",

  /**
   * Write - Grants permission to create a federation trust in a target account
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  CreateTrust = "sso:CreateTrust",

  /**
   * Write - Grants permission to delete a Principal's access from a specified AWS account using a specified permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteAccountAssignment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.account `SsoResource.account`} 
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  DeleteAccountAssignment = "sso:DeleteAccountAssignment",

  /**
   * Write - Grants permission to delete the application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteApplicationInstance = "sso:DeleteApplicationInstance",

  /**
   * Write - Grants permission to delete an inactive or expired certificate from the application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteApplicationInstanceCertificate = "sso:DeleteApplicationInstanceCertificate",

  /**
   * Write - Grants permission to delete the inline policy from a specified permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteInlinePolicyFromPermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  DeleteInlinePolicyFromPermissionSet = "sso:DeleteInlinePolicyFromPermissionSet",

  /**
   * Write - Grants permission to disable ABAC and remove the attributes list for the instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DeleteInstanceAccessControlAttributeConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  DeleteInstanceAccessControlAttributeConfiguration = "sso:DeleteInstanceAccessControlAttributeConfiguration",

  /**
   * Write - Grants permission to delete the managed application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteManagedApplicationInstance = "sso:DeleteManagedApplicationInstance",

  /**
   * Write - Grants permission to delete a permission set
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/%7BDocHomeURL%7Dsinglesignon/latest/APIReference/API_DeletePermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  DeletePermissionSet = "sso:DeletePermissionSet",

  /**
   * PermissionsManagement - Grants permission to delete the permission policy associated with a permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeletePermissionsPolicy = "sso:DeletePermissionsPolicy",

  /**
   * Write - Grants permission to delete the profile for an application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DeleteProfile = "sso:DeleteProfile",

  /**
   * Read - Grants permission to describe the status of the assignment creation request
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeAccountAssignmentCreationStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  DescribeAccountAssignmentCreationStatus = "sso:DescribeAccountAssignmentCreationStatus",

  /**
   * Read - Grants permission to describe the status of an assignment deletion request
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeAccountAssignmentDeletionStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  DescribeAccountAssignmentDeletionStatus = "sso:DescribeAccountAssignmentDeletionStatus",

  /**
   * Read - Grants permission to get the list of attributes used by the instance for ABAC
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeInstanceAccessControlAttributeConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  DescribeInstanceAccessControlAttributeConfiguration = "sso:DescribeInstanceAccessControlAttributeConfiguration",

  /**
   * Read - Grants permission to describe a permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribePermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  DescribePermissionSet = "sso:DescribePermissionSet",

  /**
   * Read - Grants permission to describe the status for the given Permission Set Provisioning request
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribePermissionSetProvisioningStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  DescribePermissionSetProvisioningStatus = "sso:DescribePermissionSetProvisioningStatus",

  /**
   * Read - Grants permission to retrieve all the permissions policies associated with a permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribePermissionsPolicies = "sso:DescribePermissionsPolicies",

  /**
   * Read - Grants permission to obtain the regions where your organization has enabled AWS Single Sign-on
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DescribeRegisteredRegions = "sso:DescribeRegisteredRegions",

  /**
   * PermissionsManagement - Grants permission to detach the attached AWS managed policy from the specified permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DetachManagedPolicyFromPermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  DetachManagedPolicyFromPermissionSet = "sso:DetachManagedPolicyFromPermissionSet",

  /**
   * Write - Grants permission to disassociate a directory to be used by AWS Single Sign-On
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DisassociateDirectory = "sso:DisassociateDirectory",

  /**
   * Write - Grants permission to disassociate a directory user or group from a profile
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  DisassociateProfile = "sso:DisassociateProfile",

  /**
   * Read - Grants permission to retrieve details for an application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetApplicationInstance = "sso:GetApplicationInstance",

  /**
   * Read - Grants permission to retrieve application template details
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetApplicationTemplate = "sso:GetApplicationTemplate",

  /**
   * Read - Grants permission to obtain the inline policy assigned to the permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_GetInlinePolicyForPermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  GetInlinePolicyForPermissionSet = "sso:GetInlinePolicyForPermissionSet",

  /**
   * Read - Grants permission to retrieve details for an application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetManagedApplicationInstance = "sso:GetManagedApplicationInstance",

  /**
   * Read - Grants permission to retrieve Mfa Device Management settings for the directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetMfaDeviceManagementForDirectory = "sso:GetMfaDeviceManagementForDirectory",

  /**
   * Read - Grants permission to retrieve details of a permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetPermissionSet = "sso:GetPermissionSet",

  /**
   * Read - Grants permission to retrieve all permission policies associated with a permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetPermissionsPolicy = "sso:GetPermissionsPolicy",

  /**
   * Read - Grants permission to retrieve a profile for an application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetProfile = "sso:GetProfile",

  /**
   * Read - Grants permission to check if AWS Single Sign-On is enabled
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetSSOStatus = "sso:GetSSOStatus",

  /**
   * Read - Grants permission to retrieve shared configuration for the current SSO instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetSharedSsoConfiguration = "sso:GetSharedSsoConfiguration",

  /**
   * Read - Grants permission to retrieve configuration for the current SSO instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetSsoConfiguration = "sso:GetSsoConfiguration",

  /**
   * Read - Grants permission to retrieve the federation trust in a target account
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  GetTrust = "sso:GetTrust",

  /**
   * Write - Grants permission to update the application instance by uploading an application SAML metadata file provided by the service provider
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ImportApplicationInstanceServiceProviderMetadata = "sso:ImportApplicationInstanceServiceProviderMetadata",

  /**
   * List - Grants permission to list the status of the AWS account assignment creation requests for a specified SSO instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignmentCreationStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  ListAccountAssignmentCreationStatus = "sso:ListAccountAssignmentCreationStatus",

  /**
   * List - Grants permission to list the status of the AWS account assignment deletion requests for a specified SSO instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignmentDeletionStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  ListAccountAssignmentDeletionStatus = "sso:ListAccountAssignmentDeletionStatus",

  /**
   * List - Grants permission to list the assignee of the specified AWS account with the specified permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountAssignments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.account `SsoResource.account`} 
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  ListAccountAssignments = "sso:ListAccountAssignments",

  /**
   * List - Grants permission to list all the AWS accounts where the specified permission set is provisioned
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListAccountsForProvisionedPermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  ListAccountsForProvisionedPermissionSet = "sso:ListAccountsForProvisionedPermissionSet",

  /**
   * Read - Grants permission to retrieve all of the certificates for a given application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListApplicationInstanceCertificates = "sso:ListApplicationInstanceCertificates",

  /**
   * List - Grants permission to retrieve all application instances
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListApplicationInstances = "sso:ListApplicationInstances",

  /**
   * List - Grants permission to retrieve all supported application templates
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListApplicationTemplates = "sso:ListApplicationTemplates",

  /**
   * List - Grants permission to retrieve all supported applications
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListApplications = "sso:ListApplications",

  /**
   * Read - Grants permission to retrieve details about the directory connected to AWS Single Sign-On
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListDirectoryAssociations = "sso:ListDirectoryAssociations",

  /**
   * List - Grants permission to list the SSO Instances that the caller has access to
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListInstances.html
   */
  ListInstances = "sso:ListInstances",

  /**
   * List - Grants permission to list the AWS managed policies that are attached to a specified permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListManagedPoliciesInPermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  ListManagedPoliciesInPermissionSet = "sso:ListManagedPoliciesInPermissionSet",

  /**
   * List - Grants permission to list the status of the Permission Set Provisioning requests for a specified SSO instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListPermissionSetProvisioningStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  ListPermissionSetProvisioningStatus = "sso:ListPermissionSetProvisioningStatus",

  /**
   * List - Grants permission to retrieve all permission sets
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/%7BDocHomeURL%7Dsinglesignon/latest/APIReference/API_ListPermissionSets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  ListPermissionSets = "sso:ListPermissionSets",

  /**
   * List - Grants permission to list all the permission sets that are provisioned to a specified AWS account
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListPermissionSetsProvisionedToAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.account `SsoResource.account`} 
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  ListPermissionSetsProvisionedToAccount = "sso:ListPermissionSetsProvisionedToAccount",

  /**
   * Read - Grants permission to retrieve the directory user or group associated with the profile
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListProfileAssociations = "sso:ListProfileAssociations",

  /**
   * List - Grants permission to retrieve all profiles for an application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  ListProfiles = "sso:ListProfiles",

  /**
   * Read - Grants permission to list the tags that are attached to a specified resource
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  ListTagsForResource = "sso:ListTagsForResource",

  /**
   * Write - Grants permission to provision a specified permission set to the specified target
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ProvisionPermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.account `SsoResource.account`} 
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  ProvisionPermissionSet = "sso:ProvisionPermissionSet",

  /**
   * Write - Grants permission to attach an IAM inline policy to a permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_PutInlinePolicyToPermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  PutInlinePolicyToPermissionSet = "sso:PutInlinePolicyToPermissionSet",

  /**
   * Write - Grants permission to put Mfa Device Management settings for the directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  PutMfaDeviceManagementForDirectory = "sso:PutMfaDeviceManagementForDirectory",

  /**
   * PermissionsManagement - Grants permission to add a policy to a permission set
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  PutPermissionsPolicy = "sso:PutPermissionsPolicy",

  /**
   * Read - Grants permission to search for groups within the associated directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  SearchGroups = "sso:SearchGroups",

  /**
   * Read - Grants permission to search for users within the associated directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  SearchUsers = "sso:SearchUsers",

  /**
   * Write - Grants permission to initialize AWS Single Sign-On
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  StartSSO = "sso:StartSSO",

  /**
   * Tagging - Grants permission to associate a set of tags with a specified resource
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "sso:TagResource",

  /**
   * Tagging - Grants permission to disassociate a set of tags from a specified resource
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "sso:UntagResource",

  /**
   * Write - Grants permission to set a certificate as the active one for this application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateApplicationInstanceActiveCertificate = "sso:UpdateApplicationInstanceActiveCertificate",

  /**
   * Write - Grants permission to update display data of an application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateApplicationInstanceDisplayData = "sso:UpdateApplicationInstanceDisplayData",

  /**
   * Write - Grants permission to update federation response configuration for the application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateApplicationInstanceResponseConfiguration = "sso:UpdateApplicationInstanceResponseConfiguration",

  /**
   * Write - Grants permission to update federation response schema configuration for the application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateApplicationInstanceResponseSchemaConfiguration = "sso:UpdateApplicationInstanceResponseSchemaConfiguration",

  /**
   * Write - Grants permission to update security details for the application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateApplicationInstanceSecurityConfiguration = "sso:UpdateApplicationInstanceSecurityConfiguration",

  /**
   * Write - Grants permission to update service provider related configuration for the application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateApplicationInstanceServiceProviderConfiguration = "sso:UpdateApplicationInstanceServiceProviderConfiguration",

  /**
   * Write - Grants permission to update the status of an application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateApplicationInstanceStatus = "sso:UpdateApplicationInstanceStatus",

  /**
   * Write - Grants permission to update the user attribute mappings for your connected directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateDirectoryAssociation = "sso:UpdateDirectoryAssociation",

  /**
   * Write - Grants permission to update the attributes to use with the instance for ABAC
   * @see https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_UpdateInstanceAccessControlAttributeConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   */
  UpdateInstanceAccessControlAttributeConfiguration = "sso:UpdateInstanceAccessControlAttributeConfiguration",

  /**
   * Write - Grants permission to update the status of a managed application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateManagedApplicationInstanceStatus = "sso:UpdateManagedApplicationInstanceStatus",

  /**
   * PermissionsManagement - Grants permission to update the permission set
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/%7BDocHomeURL%7Dsinglesignon/latest/APIReference/API_UpdatePermissionSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   */
  UpdatePermissionSet = "sso:UpdatePermissionSet",

  /**
   * Write - Grants permission to update the profile for an application instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateProfile = "sso:UpdateProfile",

  /**
   * Write - Grants permission to update the configuration for the current SSO instance
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateSSOConfiguration = "sso:UpdateSSOConfiguration",

  /**
   * Write - Grants permission to update the federation trust in a target account
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/iam-auth-access-using-id-policies.html#policyexample
   */
  UpdateTrust = "sso:UpdateTrust",

  /**
   * * - Grant all sso permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssso.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsoResource.instance `SsoResource.instance`} 
   * - {@link SsoResource.permissionSet `SsoResource.permissionSet`} 
   * - {@link SsoResource.account `SsoResource.account`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "sso:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssso.html
 */
export const SsoResource = {

  /**
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetsconcept.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/singlesignon/latest/userguide/tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  permissionSet: (options: Partial<{partition: string, instanceId: string, permissionSetId: string}> = {}) => `arn:${options.partition || '*'}:sso:::permissionSet/${options.instanceId || '*'}/${options.permissionSetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-accounts.html
   */
  account: (options: Partial<{partition: string, accountId: string}> = {}) => `arn:${options.partition || '*'}:sso:::account/${options.accountId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/singlesignon/latest/userguide/step1.html
   */
  instance: (options: Partial<{partition: string, instanceId: string}> = {}) => `arn:${options.partition || '*'}:sso:::instance/${options.instanceId || '*'}`,
}

