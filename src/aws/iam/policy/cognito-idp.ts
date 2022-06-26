/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitouserpools.html
 */
export enum CognitoIdpAction {

  /**
   * Write - Adds additional user attributes to the user pool schema
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AddCustomAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AddCustomAttributes = "cognito-idp:AddCustomAttributes",

  /**
   * Write - Adds the specified user to the specified group
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminAddUserToGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminAddUserToGroup = "cognito-idp:AdminAddUserToGroup",

  /**
   * Write - Confirms user registration as an admin without using a confirmation code. Works on any user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminConfirmSignUp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminConfirmSignUp = "cognito-idp:AdminConfirmSignUp",

  /**
   * Write - Creates a new user in the specified user pool and sends a welcome message via email or phone (SMS)
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminCreateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminCreateUser = "cognito-idp:AdminCreateUser",

  /**
   * Write - Deletes a user as an administrator. Works on any user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminDeleteUser = "cognito-idp:AdminDeleteUser",

  /**
   * Write - Deletes the user attributes in a user pool as an administrator. Works on any user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDeleteUserAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminDeleteUserAttributes = "cognito-idp:AdminDeleteUserAttributes",

  /**
   * Write - Disables the user from signing in with the specified external (SAML or social) identity provider
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableProviderForUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminDisableProviderForUser = "cognito-idp:AdminDisableProviderForUser",

  /**
   * Write - Disables the specified user as an administrator. Works on any user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminDisableUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminDisableUser = "cognito-idp:AdminDisableUser",

  /**
   * Write - Enables the specified user as an administrator. Works on any user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminEnableUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminEnableUser = "cognito-idp:AdminEnableUser",

  /**
   * Write - Forgets the device, as an administrator
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminForgetDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminForgetDevice = "cognito-idp:AdminForgetDevice",

  /**
   * Read - Gets the device, as an administrator
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminGetDevice = "cognito-idp:AdminGetDevice",

  /**
   * Read - Gets the specified user by user name in a user pool as an administrator. Works on any user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminGetUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminGetUser = "cognito-idp:AdminGetUser",

  /**
   * Write - Authenticates a user in a user pool as an administrator. Works on any user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminInitiateAuth = "cognito-idp:AdminInitiateAuth",

  /**
   * Write - Links an existing user account in a user pool (DestinationUser) to an identity from an external identity provider (SourceUser) based on a specified attribute name and value from the external identity provider
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminLinkProviderForUser = "cognito-idp:AdminLinkProviderForUser",

  /**
   * List - Lists devices, as an administrator
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListDevices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminListDevices = "cognito-idp:AdminListDevices",

  /**
   * List - Lists the groups that the user belongs to
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListGroupsForUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminListGroupsForUser = "cognito-idp:AdminListGroupsForUser",

  /**
   * Read - Lists the authentication events for the user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminListUserAuthEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminListUserAuthEvents = "cognito-idp:AdminListUserAuthEvents",

  /**
   * Write - Removes the specified user from the specified group
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRemoveUserFromGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminRemoveUserFromGroup = "cognito-idp:AdminRemoveUserFromGroup",

  /**
   * Write - Resets the specified user's password in a user pool as an administrator. Works on any user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminResetUserPassword.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminResetUserPassword = "cognito-idp:AdminResetUserPassword",

  /**
   * Write - Responds to an authentication challenge, as an administrator
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRespondToAuthChallenge.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminRespondToAuthChallenge = "cognito-idp:AdminRespondToAuthChallenge",

  /**
   * Write - Sets MFA preference for the user in the userpool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserMFAPreference.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminSetUserMFAPreference = "cognito-idp:AdminSetUserMFAPreference",

  /**
   * Write - Sets the specified user's password in a user pool as an administrator. Works on any user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserPassword.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminSetUserPassword = "cognito-idp:AdminSetUserPassword",

  /**
   * Write - Sets all the user settings for a specified user name. Works on any user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminSetUserSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminSetUserSettings = "cognito-idp:AdminSetUserSettings",

  /**
   * Write - Updates the feedback for the user authentication event
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateAuthEventFeedback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminUpdateAuthEventFeedback = "cognito-idp:AdminUpdateAuthEventFeedback",

  /**
   * Write - Updates the device status as an administrator
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateDeviceStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminUpdateDeviceStatus = "cognito-idp:AdminUpdateDeviceStatus",

  /**
   * Write - Updates the specified user's attributes, including developer attributes, as an administrator
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminUpdateUserAttributes = "cognito-idp:AdminUpdateUserAttributes",

  /**
   * Write - Signs out users from all devices, as an administrator
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUserGlobalSignOut.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  AdminUserGlobalSignOut = "cognito-idp:AdminUserGlobalSignOut",

  /**
   * Write - Returns a unique generated shared secret key code for the user account
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AssociateSoftwareToken.html
   */
  AssociateSoftwareToken = "cognito-idp:AssociateSoftwareToken",

  /**
   * Write - Changes the password for a specified user in a user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ChangePassword.html
   */
  ChangePassword = "cognito-idp:ChangePassword",

  /**
   * Write - Confirms tracking of the device. This API call is the call that begins device tracking
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html
   */
  ConfirmDevice = "cognito-idp:ConfirmDevice",

  /**
   * Write - Allows a user to enter a confirmation code to reset a forgotten password
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html
   */
  ConfirmForgotPassword = "cognito-idp:ConfirmForgotPassword",

  /**
   * Write - Confirms registration of a user and handles the existing alias from a previous user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html
   */
  ConfirmSignUp = "cognito-idp:ConfirmSignUp",

  /**
   * Write - Creates a new group in the specified user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  CreateGroup = "cognito-idp:CreateGroup",

  /**
   * Write - Creates an identity provider for a user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  CreateIdentityProvider = "cognito-idp:CreateIdentityProvider",

  /**
   * Write - Creates a new OAuth2.0 resource server and defines custom scopes in it
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateResourceServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  CreateResourceServer = "cognito-idp:CreateResourceServer",

  /**
   * Write - Creates the user import job
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  CreateUserImportJob = "cognito-idp:CreateUserImportJob",

  /**
   * Write - Creates a new Amazon Cognito user pool and sets the password policy for the pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPool.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateUserPool = "cognito-idp:CreateUserPool",

  /**
   * Write - Creates the user pool client
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolClient.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  CreateUserPoolClient = "cognito-idp:CreateUserPoolClient",

  /**
   * Write - Creates a new domain for a user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  CreateUserPoolDomain = "cognito-idp:CreateUserPoolDomain",

  /**
   * Write - Deletes a group. Currently only groups with no members can be deleted
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DeleteGroup = "cognito-idp:DeleteGroup",

  /**
   * Write - Deletes an identity provider for a user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteIdentityProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DeleteIdentityProvider = "cognito-idp:DeleteIdentityProvider",

  /**
   * Write - Deletes a resource server
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteResourceServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DeleteResourceServer = "cognito-idp:DeleteResourceServer",

  /**
   * Write - Allows a user to delete one's self
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUser.html
   */
  DeleteUser = "cognito-idp:DeleteUser",

  /**
   * Write - Deletes the attributes for a user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserAttributes.html
   */
  DeleteUserAttributes = "cognito-idp:DeleteUserAttributes",

  /**
   * Write - Deletes the specified Amazon Cognito user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DeleteUserPool = "cognito-idp:DeleteUserPool",

  /**
   * Write - Allows the developer to delete the user pool client
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolClient.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DeleteUserPoolClient = "cognito-idp:DeleteUserPoolClient",

  /**
   * Write - Deletes a domain for a user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DeleteUserPoolDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DeleteUserPoolDomain = "cognito-idp:DeleteUserPoolDomain",

  /**
   * Read - Gets information about a specific identity provider
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeIdentityProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DescribeIdentityProvider = "cognito-idp:DescribeIdentityProvider",

  /**
   * Read - Describes a resource server
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeResourceServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DescribeResourceServer = "cognito-idp:DescribeResourceServer",

  /**
   * Read - Describes the risk configuration setting for the userpool / userpool client
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeRiskConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DescribeRiskConfiguration = "cognito-idp:DescribeRiskConfiguration",

  /**
   * Read - Describes the user import job
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DescribeUserImportJob = "cognito-idp:DescribeUserImportJob",

  /**
   * Read - Returns the configuration information and metadata of the specified user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DescribeUserPool = "cognito-idp:DescribeUserPool",

  /**
   * Read - Client method for returning the configuration information and metadata of the specified user pool client
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolClient.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  DescribeUserPoolClient = "cognito-idp:DescribeUserPoolClient",

  /**
   * Read - Gets information about a domain
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPoolDomain.html
   */
  DescribeUserPoolDomain = "cognito-idp:DescribeUserPoolDomain",

  /**
   * Write - Forgets the specified device
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgetDevice.html
   */
  ForgetDevice = "cognito-idp:ForgetDevice",

  /**
   * Write - Calling this API causes a message to be sent to the end user with a confirmation code that is required to change the user's password
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html
   */
  ForgotPassword = "cognito-idp:ForgotPassword",

  /**
   * Read - Gets the header information for the .csv file to be used as input for the user import job
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetCSVHeader.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  GetCSVHeader = "cognito-idp:GetCSVHeader",

  /**
   * Read - Gets the device
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetDevice.html
   */
  GetDevice = "cognito-idp:GetDevice",

  /**
   * Read - Gets a group
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  GetGroup = "cognito-idp:GetGroup",

  /**
   * Read - Gets the specified identity provider
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetIdentityProviderByIdentifier.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  GetIdentityProviderByIdentifier = "cognito-idp:GetIdentityProviderByIdentifier",

  /**
   * Read - Returns the signing certificate
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetSigningCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  GetSigningCertificate = "cognito-idp:GetSigningCertificate",

  /**
   * Read - Gets the UI Customization information for a particular app client's app UI, if there is something set
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUICustomization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  GetUICustomization = "cognito-idp:GetUICustomization",

  /**
   * Read - Gets the user attributes and metadata for a user
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUser.html
   */
  GetUser = "cognito-idp:GetUser",

  /**
   * Read - Gets the user attribute verification code for the specified attribute name
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserAttributeVerificationCode.html
   */
  GetUserAttributeVerificationCode = "cognito-idp:GetUserAttributeVerificationCode",

  /**
   * Read - Gets the MFA configuration for the userpool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUserPoolMfaConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  GetUserPoolMfaConfig = "cognito-idp:GetUserPoolMfaConfig",

  /**
   * Write - Signs out users from all devices
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GlobalSignOut.html
   */
  GlobalSignOut = "cognito-idp:GlobalSignOut",

  /**
   * Write - Initiates the authentication flow
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html
   */
  InitiateAuth = "cognito-idp:InitiateAuth",

  /**
   * List - Lists the devices
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListDevices.html
   */
  ListDevices = "cognito-idp:ListDevices",

  /**
   * List - Lists the groups associated with a user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  ListGroups = "cognito-idp:ListGroups",

  /**
   * List - Lists information about all identity providers for a user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListIdentityProviders.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  ListIdentityProviders = "cognito-idp:ListIdentityProviders",

  /**
   * List - Lists the resource servers for a user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListResourceServers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  ListResourceServers = "cognito-idp:ListResourceServers",

  /**
   * List - Lists the tags that are assigned to an Amazon Cognito user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  ListTagsForResource = "cognito-idp:ListTagsForResource",

  /**
   * List - Lists the user import jobs
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserImportJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  ListUserImportJobs = "cognito-idp:ListUserImportJobs",

  /**
   * List - Lists the clients that have been created for the specified user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPoolClients.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  ListUserPoolClients = "cognito-idp:ListUserPoolClients",

  /**
   * List - Lists the user pools associated with an AWS account
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUserPools.html
   */
  ListUserPools = "cognito-idp:ListUserPools",

  /**
   * List - Lists the users in the Amazon Cognito user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  ListUsers = "cognito-idp:ListUsers",

  /**
   * List - Lists the users in the specified group
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ListUsersInGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  ListUsersInGroup = "cognito-idp:ListUsersInGroup",

  /**
   * Write - Resends the confirmation (for confirmation of registration) to a specific user in the user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ResendConfirmationCode.html
   */
  ResendConfirmationCode = "cognito-idp:ResendConfirmationCode",

  /**
   * Write - Responds to the authentication challenge
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html
   */
  RespondToAuthChallenge = "cognito-idp:RespondToAuthChallenge",

  /**
   * Write - Revokes all of the access tokens generated by the specified refresh token
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html
   */
  RevokeToken = "cognito-idp:RevokeToken",

  /**
   * Write - sets the risk configuration setting for the userpool / userpool client
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetRiskConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  SetRiskConfiguration = "cognito-idp:SetRiskConfiguration",

  /**
   * Write - Sets the UI customization information for a user pool's built-in app UI
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUICustomization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  SetUICustomization = "cognito-idp:SetUICustomization",

  /**
   * Write - Sets MFA preference for the user in the userpool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserMFAPreference.html
   */
  SetUserMFAPreference = "cognito-idp:SetUserMFAPreference",

  /**
   * Write - Sets the MFA configuration for the userpool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  SetUserPoolMfaConfig = "cognito-idp:SetUserPoolMfaConfig",

  /**
   * Write - Sets the user settings like multi-factor authentication (MFA)
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserSettings.html
   */
  SetUserSettings = "cognito-idp:SetUserSettings",

  /**
   * Write - Registers the user in the specified user pool and creates a user name, password, and user attributes
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html
   */
  SignUp = "cognito-idp:SignUp",

  /**
   * Write - Starts the user import
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StartUserImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  StartUserImportJob = "cognito-idp:StartUserImportJob",

  /**
   * Write - Stops the user import job
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_StopUserImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  StopUserImportJob = "cognito-idp:StopUserImportJob",

  /**
   * Tagging - Assigns a set of tags to an Amazon Cognito user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "cognito-idp:TagResource",

  /**
   * Tagging - Removes the specified tags from an Amazon Cognito user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "cognito-idp:UntagResource",

  /**
   * Write - Updates the feedback for the user authentication event
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateAuthEventFeedback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  UpdateAuthEventFeedback = "cognito-idp:UpdateAuthEventFeedback",

  /**
   * Write - Updates the device status
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html
   */
  UpdateDeviceStatus = "cognito-idp:UpdateDeviceStatus",

  /**
   * Write - Updates the specified group with the specified attributes
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  UpdateGroup = "cognito-idp:UpdateGroup",

  /**
   * Write - Updates identity provider information for a user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateIdentityProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  UpdateIdentityProvider = "cognito-idp:UpdateIdentityProvider",

  /**
   * Write - Updates the name and scopes of resource server
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateResourceServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  UpdateResourceServer = "cognito-idp:UpdateResourceServer",

  /**
   * Write - Allows a user to update a specific attribute (one at a time)
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html
   */
  UpdateUserAttributes = "cognito-idp:UpdateUserAttributes",

  /**
   * Write - Updates the specified user pool with the specified attributes
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateUserPool = "cognito-idp:UpdateUserPool",

  /**
   * Write - Allows the developer to update the specified user pool client and password policy
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolClient.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  UpdateUserPoolClient = "cognito-idp:UpdateUserPoolClient",

  /**
   * Write - Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user pool
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   */
  UpdateUserPoolDomain = "cognito-idp:UpdateUserPoolDomain",

  /**
   * Write - Registers a user's entered TOTP code and mark the user's software token MFA status as verified if successful
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html
   */
  VerifySoftwareToken = "cognito-idp:VerifySoftwareToken",

  /**
   * Write - Verifies a user attribute using a one time verification code
   * @see https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html
   */
  VerifyUserAttribute = "cognito-idp:VerifyUserAttribute",

  /**
   * * - Grant all cognito-idp permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitouserpools.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoIdpResource.userpool `CognitoIdpResource.userpool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "cognito-idp:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitouserpools.html
 */
export const CognitoIdpResource = {

  /**
   * @see https://docs.aws.amazon.com/cognito/latest/developerguide/resource-permissions.html#amazon-cognito-amazon-resource-names
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  userpool: (options: Partial<{partition: string, region: string, account: string, userPoolId: string}> = {}) => `arn:${options.partition || '*'}:cognito-idp:${options.region || '*'}:${options.account || '*'}:userpool/${options.userPoolId || '*'}`,
}

