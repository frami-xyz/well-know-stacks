/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitoidentity.html
 */
export enum CognitoIdentityAction {

  /**
   * Write - Grants permission to create a new identity pool
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_CreateIdentityPool.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateIdentityPool = "cognito-identity:CreateIdentityPool",

  /**
   * Write - Grants permission to delete identities from an identity pool. You can specify a list of 1-60 identities that you want to delete
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentities.html
   */
  DeleteIdentities = "cognito-identity:DeleteIdentities",

  /**
   * Write - Grants permission to delete a user pool. Once a pool is deleted, users will not be able to authenticate with the pool
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentityPool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   */
  DeleteIdentityPool = "cognito-identity:DeleteIdentityPool",

  /**
   * Read - Grants permission to return metadata related to the given identity, including when the identity was created and any associated linked logins
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentity.html
   */
  DescribeIdentity = "cognito-identity:DescribeIdentity",

  /**
   * Read - Grants permission to get details about a particular identity pool, including the pool name, ID description, creation date, and current number of users
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentityPool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   */
  DescribeIdentityPool = "cognito-identity:DescribeIdentityPool",

  /**
   * Read - Grants permission to return credentials for the provided identity ID
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html
   */
  GetCredentialsForIdentity = "cognito-identity:GetCredentialsForIdentity",

  /**
   * Write - Grants permission to generate (or retrieve) a Cognito ID. Supplying multiple logins will create an implicit linked account
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetId.html
   */
  GetId = "cognito-identity:GetId",

  /**
   * Read - Grants permission to get the roles for an identity pool
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityPoolRoles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   */
  GetIdentityPoolRoles = "cognito-identity:GetIdentityPoolRoles",

  /**
   * Read - Grants permission to get an OpenID token, using a known Cognito ID
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdToken.html
   */
  GetOpenIdToken = "cognito-identity:GetOpenIdToken",

  /**
   * Read - Grants permission to register (or retrieve) a Cognito IdentityId and an OpenID Connect token for a user authenticated by your backend authentication process
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdTokenForDeveloperIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   */
  GetOpenIdTokenForDeveloperIdentity = "cognito-identity:GetOpenIdTokenForDeveloperIdentity",

  /**
   * Read - Grants permission to get the principal tags for an identity pool and provider
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetPrincipalTagAttributeMap.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   */
  GetPrincipalTagAttributeMap = "cognito-identity:GetPrincipalTagAttributeMap",

  /**
   * List - Grants permission to list the identities in an identity pool
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   */
  ListIdentities = "cognito-identity:ListIdentities",

  /**
   * List - Grants permission to list all of the Cognito identity pools registered for your account
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentityPools.html
   */
  ListIdentityPools = "cognito-identity:ListIdentityPools",

  /**
   * Read - Grants permission to list the tags that are assigned to an Amazon Cognito identity pool
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   */
  ListTagsForResource = "cognito-identity:ListTagsForResource",

  /**
   * Read - Grants permission to retrieve the IdentityId associated with a DeveloperUserIdentifier or the list of DeveloperUserIdentifiers associated with an IdentityId for an existing identity
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_LookupDeveloperIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   */
  LookupDeveloperIdentity = "cognito-identity:LookupDeveloperIdentity",

  /**
   * Write - Grants permission to merge two users having different IdentityIds, existing in the same identity pool, and identified by the same developer provider
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_MergeDeveloperIdentities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   */
  MergeDeveloperIdentities = "cognito-identity:MergeDeveloperIdentities",

  /**
   * Write - Grants permission to set the roles for an identity pool. These roles are used when making calls to GetCredentialsForIdentity action
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_SetIdentityPoolRoles.html
   */
  SetIdentityPoolRoles = "cognito-identity:SetIdentityPoolRoles",

  /**
   * Write - Grants permission to set the principal tags for an identity pool and provider. These tags are used when making calls to GetOpenIdToken action
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_SetPrincipalTagAttributeMap.html
   */
  SetPrincipalTagAttributeMap = "cognito-identity:SetPrincipalTagAttributeMap",

  /**
   * Tagging - Grants permission to assign a set of tags to an Amazon Cognito identity pool
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "cognito-identity:TagResource",

  /**
   * Write - Grants permission to unlink a DeveloperUserIdentifier from an existing identity
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkDeveloperIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   */
  UnlinkDeveloperIdentity = "cognito-identity:UnlinkDeveloperIdentity",

  /**
   * Write - Grants permission to unlink a federated identity from an existing account
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkIdentity.html
   */
  UnlinkIdentity = "cognito-identity:UnlinkIdentity",

  /**
   * Tagging - Grants permission to remove the specified tags from an Amazon Cognito identity pool
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "cognito-identity:UntagResource",

  /**
   * Write - Grants permission to update an identity pool
   * @see https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UpdateIdentityPool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   */
  UpdateIdentityPool = "cognito-identity:UpdateIdentityPool",

  /**
   * * - Grant all cognito-identity permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitoidentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdentityResource.identitypool `CognitoIdentityResource.identitypool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "cognito-identity:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitoidentity.html
 */
export const CognitoIdentityResource = {

  /**
   * @see https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  identitypool: (options: Partial<{partition: string, region: string, account: string, identityPoolId: string}> = {}) => `arn:${options.partition || '*'}:cognito-identity:${options.region || '*'}:${options.account || '*'}:identitypool/${options.identityPoolId || '*'}`,
}

