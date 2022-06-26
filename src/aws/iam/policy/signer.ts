/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssigner.html
 */
export enum SignerAction {

  /**
   * PermissionsManagement - Grants permission to add cross-account permissions to a Signing Profile
   * @see https://docs.aws.amazon.com/signer/latest/api/API_AddProfilePermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingProfile `SignerResource.signingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `signer:ProfileVersion`: Filters access by version of the Signing Profile ({@link https://docs.aws.amazon.com/signer/latest/developerguide/authen-apipermissions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AddProfilePermission = "signer:AddProfilePermission",

  /**
   * Write - Grants permission to change the state of a Signing Profile to CANCELED
   * @see https://docs.aws.amazon.com/signer/latest/api/API_CancelSigningProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingProfile `SignerResource.signingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `signer:ProfileVersion`: Filters access by version of the Signing Profile ({@link https://docs.aws.amazon.com/signer/latest/developerguide/authen-apipermissions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CancelSigningProfile = "signer:CancelSigningProfile",

  /**
   * Read - Grants permission to return information about a specific Signing Job
   * @see https://docs.aws.amazon.com/signer/latest/api/API_DescribeSigningJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingJob `SignerResource.signingJob`} 
   */
  DescribeSigningJob = "signer:DescribeSigningJob",

  /**
   * Read - Grants permission to return information about a specific Signing Platform
   * @see https://docs.aws.amazon.com/signer/latest/api/API_GetSigningPlatform.html
   */
  GetSigningPlatform = "signer:GetSigningPlatform",

  /**
   * Read - Grants permission to return information about a specific Signing Profile
   * @see https://docs.aws.amazon.com/signer/latest/api/API_GetSigningProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingProfile `SignerResource.signingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `signer:ProfileVersion`: Filters access by version of the Signing Profile ({@link https://docs.aws.amazon.com/signer/latest/developerguide/authen-apipermissions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetSigningProfile = "signer:GetSigningProfile",

  /**
   * Read - Grants permission to list the cross-account permissions associated with a Signing Profile
   * @see https://docs.aws.amazon.com/signer/latest/api/API_ListProfilePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingProfile `SignerResource.signingProfile`} 
   */
  ListProfilePermissions = "signer:ListProfilePermissions",

  /**
   * List - Grants permission to list all Signing Jobs in your account
   * @see https://docs.aws.amazon.com/signer/latest/api/API_ListSigningJobs.html
   */
  ListSigningJobs = "signer:ListSigningJobs",

  /**
   * List - Grants permission to list all available Signing Platforms
   * @see https://docs.aws.amazon.com/signer/latest/api/API_ListSigningPlatforms.html
   */
  ListSigningPlatforms = "signer:ListSigningPlatforms",

  /**
   * List - Grants permission to list all Signing Profiles in your account
   * @see https://docs.aws.amazon.com/signer/latest/api/API_ListSigningProfiles.html
   */
  ListSigningProfiles = "signer:ListSigningProfiles",

  /**
   * Read - Grants permission to list the tags associated with a Signing Profile
   * @see https://docs.aws.amazon.com/signer/latest/api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingProfile `SignerResource.signingProfile`} 
   */
  ListTagsForResource = "signer:ListTagsForResource",

  /**
   * Write - Grants permission to create a new Signing Profile
   * @see https://docs.aws.amazon.com/signer/latest/api/API_PutSigningProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutSigningProfile = "signer:PutSigningProfile",

  /**
   * PermissionsManagement - Grants permission to remove cross-account permissions from a Signing Profile
   * @see https://docs.aws.amazon.com/signer/latest/api/API_RemoveProfilePermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingProfile `SignerResource.signingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `signer:ProfileVersion`: Filters access by version of the Signing Profile ({@link https://docs.aws.amazon.com/signer/latest/developerguide/authen-apipermissions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RemoveProfilePermission = "signer:RemoveProfilePermission",

  /**
   * Write - Grants permission to change the state of a Signing Job to REVOKED
   * @see https://docs.aws.amazon.com/signer/latest/api/API_RevokeSignature.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingJob `SignerResource.signingJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `signer:ProfileVersion`: Filters access by version of the Signing Profile ({@link https://docs.aws.amazon.com/signer/latest/developerguide/authen-apipermissions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RevokeSignature = "signer:RevokeSignature",

  /**
   * Write - Grants permission to change the state of a Signing Profile to REVOKED
   * @see https://docs.aws.amazon.com/signer/latest/api/API_RevokeSigningProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingProfile `SignerResource.signingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `signer:ProfileVersion`: Filters access by version of the Signing Profile ({@link https://docs.aws.amazon.com/signer/latest/developerguide/authen-apipermissions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RevokeSigningProfile = "signer:RevokeSigningProfile",

  /**
   * Write - Grants permission to initiate a Signing Job on the provided code
   * @see https://docs.aws.amazon.com/signer/latest/api/API_StartSigningJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingProfile `SignerResource.signingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `signer:ProfileVersion`: Filters access by version of the Signing Profile ({@link https://docs.aws.amazon.com/signer/latest/developerguide/authen-apipermissions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartSigningJob = "signer:StartSigningJob",

  /**
   * Tagging - Grants permission to add one or more tags to a Signing Profile
   * @see https://docs.aws.amazon.com/signer/latest/api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingProfile `SignerResource.signingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "signer:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from a Signing Profile
   * @see https://docs.aws.amazon.com/signer/latest/api/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingProfile `SignerResource.signingProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "signer:UntagResource",

  /**
   * * - Grant all signer permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssigner.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SignerResource.signingProfile `SignerResource.signingProfile`} 
   * - {@link SignerResource.signingJob `SignerResource.signingJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `signer:ProfileVersion`: Filters access by version of the Signing Profile ({@link https://docs.aws.amazon.com/signer/latest/developerguide/authen-apipermissions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "signer:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssigner.html
 */
export const SignerResource = {

  /**
   * @see https://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  signingProfile: (options: Partial<{partition: string, region: string, account: string, profileName: string}> = {}) => `arn:${options.partition || '*'}:signer:${options.region || '*'}:${options.account || '*'}:/signing-profiles/${options.profileName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/signer/latest/developerguide/gs-job.html
   */
  signingJob: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:signer:${options.region || '*'}:${options.account || '*'}:/signing-jobs/${options.jobId || '*'}`,
}

