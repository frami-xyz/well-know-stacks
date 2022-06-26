/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html
 */
export enum SecretsmanagerAction {

  /**
   * Write - Grants permission to cancel an in-progress secret rotation
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CancelRotateSecret.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CancelRotateSecret = "secretsmanager:CancelRotateSecret",

  /**
   * Write - Grants permission to create a secret that stores encrypted data that can be queried and rotated
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:Name`: Filters access by the friendly name of the secret in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:Description`: Filters access by the description text in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:KmsKeyId`: Filters access by the ARN of the KMS key in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the Secrets Manager service ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the Secrets Manager service ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:AddReplicaRegions`: Filters access by the list of Regions in which to replicate the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `secretsmanager:ForceOverwriteReplicaSecret`: Filters access by whether to overwrite a secret with the same name in the destination Region ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  CreateSecret = "secretsmanager:CreateSecret",

  /**
   * Permissions management - Grants permission to delete the resource policy attached to a secret
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteResourcePolicy = "secretsmanager:DeleteResourcePolicy",

  /**
   * Write - Grants permission to delete a secret
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:RecoveryWindowInDays`: Filters access by the number of days that Secrets Manager waits before it can delete the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `secretsmanager:ForceDeleteWithoutRecovery`: Filters access by whether the secret is to be deleted immediately without any recovery window ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteSecret = "secretsmanager:DeleteSecret",

  /**
   * Read - Grants permission to retrieve the metadata about a secret, but not the encrypted data
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DescribeSecret.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeSecret = "secretsmanager:DescribeSecret",

  /**
   * Read - Grants permission to generate a random string for use in password creation
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetRandomPassword.html
   */
  GetRandomPassword = "secretsmanager:GetRandomPassword",

  /**
   * Read - Grants permission to get the resource policy attached to a secret
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetResourcePolicy = "secretsmanager:GetResourcePolicy",

  /**
   * Read - Grants permission to retrieve and decrypt the encrypted data
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:VersionId`: Filters access by the unique identifier of the version of the secret in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:VersionStage`: Filters access by the list of version stages in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetSecretValue = "secretsmanager:GetSecretValue",

  /**
   * Read - Grants permission to list the available versions of a secret
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ListSecretVersionIds.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListSecretVersionIds = "secretsmanager:ListSecretVersionIds",

  /**
   * List - Grants permission to list the available secrets
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ListSecrets.html
   */
  ListSecrets = "secretsmanager:ListSecrets",

  /**
   * Permissions management - Grants permission to attach a resource policy to a secret
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_PutResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:BlockPublicPolicy`: Filters access by whether the resource policy blocks broad AWS account access ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutResourcePolicy = "secretsmanager:PutResourcePolicy",

  /**
   * Write - Grants permission to create a new version of the secret with new encrypted data
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_PutSecretValue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutSecretValue = "secretsmanager:PutSecretValue",

  /**
   * Write - Grants permission to remove regions from replication
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RemoveRegionsFromReplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RemoveRegionsFromReplication = "secretsmanager:RemoveRegionsFromReplication",

  /**
   * Write - Grants permission to convert an existing secret to a multi-Region secret and begin replicating the secret to a list of new regions
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ReplicateSecretToRegions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:AddReplicaRegions`: Filters access by the list of Regions in which to replicate the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `secretsmanager:ForceOverwriteReplicaSecret`: Filters access by whether to overwrite a secret with the same name in the destination Region ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ReplicateSecretToRegions = "secretsmanager:ReplicateSecretToRegions",

  /**
   * Write - Grants permission to cancel deletion of a secret
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RestoreSecret.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RestoreSecret = "secretsmanager:RestoreSecret",

  /**
   * Write - Grants permission to start rotation of a secret
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RotateSecret.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:RotationLambdaARN`: Filters access by the ARN of the rotation Lambda function in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:ModifyRotationRules`: Filters access by whether the rotation rules of the secret are to be modified ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `secretsmanager:RotateImmediately`: Filters access by whether the secret is to be rotated immediately ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  RotateSecret = "secretsmanager:RotateSecret",

  /**
   * Write - Grants permission to remove the secret from replication and promote the secret to a regional secret in the replica Region
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_StopReplicationToReplica.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StopReplicationToReplica = "secretsmanager:StopReplicationToReplica",

  /**
   * Tagging - Grants permission to add tags to a secret
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the Secrets Manager service ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the Secrets Manager service ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "secretsmanager:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a secret
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the Secrets Manager service ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "secretsmanager:UntagResource",

  /**
   * Write - Grants permission to update a secret with new metadata or with a new version of the encrypted data
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecret.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:Description`: Filters access by the description text in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:KmsKeyId`: Filters access by the ARN of the KMS key in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateSecret = "secretsmanager:UpdateSecret",

  /**
   * Write - Grants permission to move a stage from one secret to another
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecretVersionStage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:VersionStage`: Filters access by the list of version stages in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateSecretVersionStage = "secretsmanager:UpdateSecretVersionStage",

  /**
   * Permissions management - Grants permission to validate a resource policy before attaching policy
   * @see https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ValidateResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ValidateResourcePolicy = "secretsmanager:ValidateResourcePolicy",

  /**
   * * - Grant all secretsmanager permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SecretsmanagerResource.secret `SecretsmanagerResource.secret`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `secretsmanager:SecretId`: Filters access by the SecretID value in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:SecretPrimaryRegion`: Filters access by primary region in which the secret is created ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:Name`: Filters access by the friendly name of the secret in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:Description`: Filters access by the description text in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:KmsKeyId`: Filters access by the ARN of the KMS key in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the Secrets Manager service ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the Secrets Manager service ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `secretsmanager:AddReplicaRegions`: Filters access by the list of Regions in which to replicate the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `secretsmanager:ForceOverwriteReplicaSecret`: Filters access by whether to overwrite a secret with the same name in the destination Region ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `secretsmanager:RecoveryWindowInDays`: Filters access by the number of days that Secrets Manager waits before it can delete the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `secretsmanager:ForceDeleteWithoutRecovery`: Filters access by whether the secret is to be deleted immediately without any recovery window ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `secretsmanager:VersionId`: Filters access by the unique identifier of the version of the secret in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:VersionStage`: Filters access by the list of version stages in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:BlockPublicPolicy`: Filters access by whether the resource policy blocks broad AWS account access ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `secretsmanager:RotationLambdaARN`: Filters access by the ARN of the rotation Lambda function in the request ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `secretsmanager:ModifyRotationRules`: Filters access by whether the rotation rules of the secret are to be modified ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `secretsmanager:RotateImmediately`: Filters access by whether the secret is to be rotated immediately ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  All = "secretsmanager:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html
 */
export const SecretsmanagerResource = {

  /**
   * @see https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the Secrets Manager service ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the Secrets Manager service ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `secretsmanager:ResourceTag/tag-key`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `secretsmanager:resource/AllowRotationLambdaArn`: Filters access by the ARN of the rotation Lambda function associated with the secret ({@link https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  secret: (options: Partial<{partition: string, region: string, account: string, secretId: string}> = {}) => `arn:${options.partition || '*'}:secretsmanager:${options.region || '*'}:${options.account || '*'}:secret:${options.secretId || '*'}`,
}

