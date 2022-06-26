/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsaccountmanagement.html
 */
export enum AccountAction {

  /**
   * Write - Grants permission to delete the alternate contacts for an account
   * @see https://docs.aws.amazon.com/accounts/latest/reference/API_DeleteAlternateContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccountResource.account `AccountResource.account`} 
   * - {@link AccountResource.accountInOrganization `AccountResource.accountInOrganization`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `account:AlternateContactTypes`: Filters access by alternate contact types ({@link https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteAlternateContact = "account:DeleteAlternateContact",

  /**
   * Write - Grants permission to disable use of a Region
   * @see https://docs.aws.amazon.com/general/latest/gr/rande-manage.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `account:TargetRegion`: Filters access by a list of Regions. Enables or disables all the Regions specified here ({@link https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisableRegion = "account:DisableRegion",

  /**
   * Write - Grants permission to enable use of a Region
   * @see https://docs.aws.amazon.com/general/latest/gr/rande-manage.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `account:TargetRegion`: Filters access by a list of Regions. Enables or disables all the Regions specified here ({@link https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  EnableRegion = "account:EnableRegion",

  /**
   * Read - Grants permission to retrieve the alternate contacts for an account
   * @see https://docs.aws.amazon.com/accounts/latest/reference/API_GetAlternateContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccountResource.account `AccountResource.account`} 
   * - {@link AccountResource.accountInOrganization `AccountResource.accountInOrganization`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `account:AlternateContactTypes`: Filters access by alternate contact types ({@link https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  GetAlternateContact = "account:GetAlternateContact",

  /**
   * List - Grants permission to list the available Regions
   * @see https://docs.aws.amazon.com/general/latest/gr/rande-manage.html
   */
  ListRegions = "account:ListRegions",

  /**
   * Write - Grants permission to modify the alternate contacts for an account
   * @see https://docs.aws.amazon.com/accounts/latest/reference/API_PutAlternateContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccountResource.account `AccountResource.account`} 
   * - {@link AccountResource.accountInOrganization `AccountResource.accountInOrganization`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `account:AlternateContactTypes`: Filters access by alternate contact types ({@link https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutAlternateContact = "account:PutAlternateContact",

  /**
   * * - Grant all account permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsaccountmanagement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccountResource.account `AccountResource.account`} 
   * - {@link AccountResource.accountInOrganization `AccountResource.accountInOrganization`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `account:AlternateContactTypes`: Filters access by alternate contact types ({@link https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `account:TargetRegion`: Filters access by a list of Regions. Enables or disables all the Regions specified here ({@link https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "account:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsaccountmanagement.html
 */
export const AccountResource = {

  /**
   * @see https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   */
  account: (options: Partial<{partition: string, account: string}> = {}) => `arn:${options.partition || '*'}:account::${options.account || '*'}:account`,

  /**
   * @see https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   */
  accountInOrganization: (options: Partial<{partition: string, managementAccountId: string, organizationId: string, memberAccountId: string}> = {}) => `arn:${options.partition || '*'}:account::${options.managementAccountId || '*'}:account/o-${options.organizationId || '*'}/${options.memberAccountId || '*'}`,
}

