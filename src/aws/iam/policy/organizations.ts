/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html
 */
export enum OrganizationsAction {

  /**
   * Write - Grants permission to send a response to the originator of a handshake agreeing to the action proposed by the handshake request
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_AcceptHandshake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.handshake `OrganizationsResource.handshake`} 
   */
  AcceptHandshake = "organizations:AcceptHandshake",

  /**
   * Write - Grants permission to attach a policy to a root, an organizational unit, or an individual account
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_AttachPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.policy `OrganizationsResource.policy`} 
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AttachPolicy = "organizations:AttachPolicy",

  /**
   * Write - Grants permission to cancel a handshake
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_CancelHandshake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.handshake `OrganizationsResource.handshake`} 
   */
  CancelHandshake = "organizations:CancelHandshake",

  /**
   * Write - Grants permission to close an AWS account that is now a part of an Organizations, either created within the organization, or invited to join the organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_CloseAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   */
  CloseAccount = "organizations:CloseAccount",

  /**
   * Write - Grants permission to create an AWS account that is automatically a member of the organization with the credentials that made the request
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAccount = "organizations:CreateAccount",

  /**
   * Write - Grants permission to create an AWS GovCloud (US) account
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateGovCloudAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateGovCloudAccount = "organizations:CreateGovCloudAccount",

  /**
   * Write - Grants permission to create an organization. The account with the credentials that calls the CreateOrganization operation automatically becomes the management account of the new organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganization.html
   */
  CreateOrganization = "organizations:CreateOrganization",

  /**
   * Write - Grants permission to create an organizational unit (OU) within a root or parent OU
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganizationalUnit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateOrganizationalUnit = "organizations:CreateOrganizationalUnit",

  /**
   * Write - Grants permission to create a policy that you can attach to a root, an organizational unit (OU), or an individual AWS account
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreatePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePolicy = "organizations:CreatePolicy",

  /**
   * Write - Grants permission to decline a handshake request. This sets the handshake state to DECLINED and effectively deactivates the request
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeclineHandshake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.handshake `OrganizationsResource.handshake`} 
   */
  DeclineHandshake = "organizations:DeclineHandshake",

  /**
   * Write - Grants permission to delete the organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganization.html
   */
  DeleteOrganization = "organizations:DeleteOrganization",

  /**
   * Write - Grants permission to delete an organizational unit from a root or another OU
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganizationalUnit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   */
  DeleteOrganizationalUnit = "organizations:DeleteOrganizationalUnit",

  /**
   * Write - Grants permission to delete a policy from your organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeletePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.policy `OrganizationsResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeletePolicy = "organizations:DeletePolicy",

  /**
   * Write - Grants permission to deregister the specified member AWS account as a delegated administrator for the AWS service that is specified by ServicePrincipal
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeregisterDelegatedAdministrator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:ServicePrincipal`: Filters access by the specified service principal names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeregisterDelegatedAdministrator = "organizations:DeregisterDelegatedAdministrator",

  /**
   * Read - Grants permission to retrieve Organizations-related details about the specified account
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   */
  DescribeAccount = "organizations:DescribeAccount",

  /**
   * Read - Grants permission to retrieve the current status of an asynchronous request to create an account
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeCreateAccountStatus.html
   */
  DescribeCreateAccountStatus = "organizations:DescribeCreateAccountStatus",

  /**
   * Read - Grants permission to retrieve the effective policy for an account
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeEffectivePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeEffectivePolicy = "organizations:DescribeEffectivePolicy",

  /**
   * Read - Grants permission to retrieve details about a previously requested handshake
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeHandshake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.handshake `OrganizationsResource.handshake`} 
   */
  DescribeHandshake = "organizations:DescribeHandshake",

  /**
   * Read - Grants permission to retrieves details about the organization that the calling credentials belong to
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganization.html
   */
  DescribeOrganization = "organizations:DescribeOrganization",

  /**
   * Read - Grants permission to retrieve details about an organizational unit (OU)
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganizationalUnit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   */
  DescribeOrganizationalUnit = "organizations:DescribeOrganizationalUnit",

  /**
   * Read - Grants permission to retrieves details about a policy
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.policy `OrganizationsResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribePolicy = "organizations:DescribePolicy",

  /**
   * Write - Grants permission to detach a policy from a target root, organizational unit, or account
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DetachPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.policy `OrganizationsResource.policy`} 
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DetachPolicy = "organizations:DetachPolicy",

  /**
   * Write - Grants permission to disable integration of an AWS service (the service that is specified by ServicePrincipal) with AWS Organizations
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:ServicePrincipal`: Filters access by the specified service principal names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisableAWSServiceAccess = "organizations:DisableAWSServiceAccess",

  /**
   * Write - Grants permission to disable an organization policy type in a root
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisablePolicyType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisablePolicyType = "organizations:DisablePolicyType",

  /**
   * Write - Grants permission to enable integration of an AWS service (the service that is specified by ServicePrincipal) with AWS Organizations
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:ServicePrincipal`: Filters access by the specified service principal names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  EnableAWSServiceAccess = "organizations:EnableAWSServiceAccess",

  /**
   * Write - Grants permission to start the process to enable all features in an organization, upgrading it from supporting only Consolidated Billing features
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAllFeatures.html
   */
  EnableAllFeatures = "organizations:EnableAllFeatures",

  /**
   * Write - Grants permission to enable a policy type in a root
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnablePolicyType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  EnablePolicyType = "organizations:EnablePolicyType",

  /**
   * Write - Grants permission to send an invitation to another AWS account, asking it to join your organization as a member account
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_InviteAccountToOrganization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  InviteAccountToOrganization = "organizations:InviteAccountToOrganization",

  /**
   * Write - Grants permission to remove a member account from its parent organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_LeaveOrganization.html
   */
  LeaveOrganization = "organizations:LeaveOrganization",

  /**
   * List - Grants permission to retrieve the list of the AWS services for which you enabled integration with your organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAWSServiceAccessForOrganization.html
   */
  ListAWSServiceAccessForOrganization = "organizations:ListAWSServiceAccessForOrganization",

  /**
   * List - Grants permission to list all of the the accounts in the organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html
   */
  ListAccounts = "organizations:ListAccounts",

  /**
   * List - Grants permission to list the accounts in an organization that are contained by a root or organizational unit (OU)
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccountsForParent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   */
  ListAccountsForParent = "organizations:ListAccountsForParent",

  /**
   * List - Grants permission to list all of the OUs or accounts that are contained in a parent OU or root
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListChildren.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   */
  ListChildren = "organizations:ListChildren",

  /**
   * List - Grants permission to list the asynchronous account creation requests that are currently being tracked for the organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListCreateAccountStatus.html
   */
  ListCreateAccountStatus = "organizations:ListCreateAccountStatus",

  /**
   * List - Grants permission to list the AWS accounts that are designated as delegated administrators in this organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedAdministrators.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:ServicePrincipal`: Filters access by the specified service principal names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListDelegatedAdministrators = "organizations:ListDelegatedAdministrators",

  /**
   * List - Grants permission to list the AWS services for which the specified account is a delegated administrator in this organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedServicesForAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   */
  ListDelegatedServicesForAccount = "organizations:ListDelegatedServicesForAccount",

  /**
   * List - Grants permission to list all of the handshakes that are associated with an account
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForAccount.html
   */
  ListHandshakesForAccount = "organizations:ListHandshakesForAccount",

  /**
   * List - Grants permission to list the handshakes that are associated with the organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForOrganization.html
   */
  ListHandshakesForOrganization = "organizations:ListHandshakesForOrganization",

  /**
   * List - Grants permission to lists all of the organizational units (OUs) in a parent organizational unit or root
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListOrganizationalUnitsForParent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   */
  ListOrganizationalUnitsForParent = "organizations:ListOrganizationalUnitsForParent",

  /**
   * List - Grants permission to list the root or organizational units (OUs) that serve as the immediate parent of a child OU or account
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListParents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   */
  ListParents = "organizations:ListParents",

  /**
   * List - Grants permission to list all of the policies in an organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListPolicies = "organizations:ListPolicies",

  /**
   * List - Grants permission to list all of the policies that are directly attached to a root, organizational unit (OU), or account
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPoliciesForTarget.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListPoliciesForTarget = "organizations:ListPoliciesForTarget",

  /**
   * List - Grants permission to list all of the roots that are defined in the organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html
   */
  ListRoots = "organizations:ListRoots",

  /**
   * List - Grants permission to list all tags for the specified resource
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.policy `OrganizationsResource.policy`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   */
  ListTagsForResource = "organizations:ListTagsForResource",

  /**
   * List - Grants permission to list all the roots, OUs, and accounts to which a policy is attached
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTargetsForPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.policy `OrganizationsResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTargetsForPolicy = "organizations:ListTargetsForPolicy",

  /**
   * Write - Grants permission to move an account from its current root or OU to another parent root or OU
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_MoveAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   */
  MoveAccount = "organizations:MoveAccount",

  /**
   * Write - Grants permission to register the specified member account to administer the Organizations features of the AWS service that is specified by ServicePrincipal
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_RegisterDelegatedAdministrator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:ServicePrincipal`: Filters access by the specified service principal names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RegisterDelegatedAdministrator = "organizations:RegisterDelegatedAdministrator",

  /**
   * Write - Grants permission to removes the specified account from the organization
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_RemoveAccountFromOrganization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   */
  RemoveAccountFromOrganization = "organizations:RemoveAccountFromOrganization",

  /**
   * Tagging - Grants permission to add one or more tags to the specified resource
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.policy `OrganizationsResource.policy`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "organizations:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from the specified resource
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.policy `OrganizationsResource.policy`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "organizations:UntagResource",

  /**
   * Write - Grants permission to rename an organizational unit (OU)
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdateOrganizationalUnit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   */
  UpdateOrganizationalUnit = "organizations:UpdateOrganizationalUnit",

  /**
   * Write - Grants permission to update an existing policy with a new name, description, or content
   * @see https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdatePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.policy `OrganizationsResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdatePolicy = "organizations:UpdatePolicy",

  /**
   * * - Grant all organizations permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link OrganizationsResource.handshake `OrganizationsResource.handshake`} 
   * - {@link OrganizationsResource.policy `OrganizationsResource.policy`} 
   * - {@link OrganizationsResource.account `OrganizationsResource.account`} 
   * - {@link OrganizationsResource.organizationalunit `OrganizationsResource.organizationalunit`} 
   * - {@link OrganizationsResource.root `OrganizationsResource.root`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `organizations:PolicyType`: Filters access by the specified policy type names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `organizations:ServicePrincipal`: Filters access by the specified service principal names ({@link https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "organizations:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html
 */
export const OrganizationsResource = {

  /**
   * @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  account: (options: Partial<{partition: string, masterAccountId: string, organizationId: string, accountId: string}> = {}) => `arn:${options.partition || '*'}:organizations::${options.masterAccountId || '*'}:account/o-${options.organizationId || '*'}/${options.accountId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   */
  handshake: (options: Partial<{partition: string, masterAccountId: string, organizationId: string, handshakeType: string, handshakeId: string}> = {}) => `arn:${options.partition || '*'}:organizations::${options.masterAccountId || '*'}:handshake/o-${options.organizationId || '*'}/${options.handshakeType || '*'}/h-${options.handshakeId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   */
  organization: (options: Partial<{partition: string, masterAccountId: string, organizationId: string}> = {}) => `arn:${options.partition || '*'}:organizations::${options.masterAccountId || '*'}:organization/o-${options.organizationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  organizationalunit: (options: Partial<{partition: string, masterAccountId: string, organizationId: string, organizationalUnitId: string}> = {}) => `arn:${options.partition || '*'}:organizations::${options.masterAccountId || '*'}:ou/o-${options.organizationId || '*'}/ou-${options.organizationalUnitId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  policy: (options: Partial<{partition: string, masterAccountId: string, organizationId: string, policyType: string, policyId: string}> = {}) => `arn:${options.partition || '*'}:organizations::${options.masterAccountId || '*'}:policy/o-${options.organizationId || '*'}/${options.policyType || '*'}/p-${options.policyId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   */
  awspolicy: (options: Partial<{partition: string, policyType: string, policyId: string}> = {}) => `arn:${options.partition || '*'}:organizations::aws:policy/${options.policyType || '*'}/p-${options.policyId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  root: (options: Partial<{partition: string, masterAccountId: string, organizationId: string, rootId: string}> = {}) => `arn:${options.partition || '*'}:organizations::${options.masterAccountId || '*'}:root/o-${options.organizationId || '*'}/r-${options.rootId || '*'}`,
}

