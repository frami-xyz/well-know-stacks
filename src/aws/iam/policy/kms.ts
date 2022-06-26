/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awskeymanagementservice.html
 */
export enum KmsAction {

  /**
   * Write - Controls permission to cancel the scheduled deletion of an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_CancelKeyDeletion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CancelKeyDeletion = "kms:CancelKeyDeletion",

  /**
   * Write - Controls permission to connect or reconnect a custom key store to its associated AWS CloudHSM cluster
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ConnectCustomKeyStore.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ConnectCustomKeyStore = "kms:ConnectCustomKeyStore",

  /**
   * Write - Controls permission to create an alias for an AWS KMS key. Aliases are optional friendly names that you can associate with KMS keys
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.alias `KmsResource.alias`} 
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAlias = "kms:CreateAlias",

  /**
   * Write - Controls permission to create a custom key store that is associated with an AWS CloudHSM cluster that you own and manage
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateCustomKeyStore.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCustomKeyStore = "kms:CreateCustomKeyStore",

  /**
   * PermissionsManagement - Controls permission to add a grant to an AWS KMS key. You can use grants to add permissions without changing the key policy or IAM policy
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContext:${EncryptionContextKey}`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition evaluates the key and value in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContextKeys`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition key evaluates only the key in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:GrantConstraintType`: Filters access to the CreateGrant operation based on the grant constraint in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-constraint-type documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:GranteePrincipal`: Filters access to the CreateGrant operation based on the grantee principal in the grant ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grantee-principal documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:GrantIsForAWSResource`: Filters access to the CreateGrant operation when the request comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-is-for-aws-resource documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:GrantOperations`: Filters access to the CreateGrant operation based on the operations in the grant ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-operations documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:RetiringPrincipal`: Filters access to the CreateGrant operation based on the retiring principal in the grant ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-retiring-principal documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateGrant = "kms:CreateGrant",

  /**
   * Write - Controls permission to create an AWS KMS key that can be used to protect data keys and other sensitive information
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access to the specified AWS KMS operations based on tags assigned to the AWS KMS key ({@link https://docs.aws.amazon.com/kms/latest/developerguide/tag-authorization.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access to the specified AWS KMS operations based on both the key and value of the tag in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access to the specified AWS KMS operations based on tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:BypassPolicyLockoutSafetyCheck`: Filters access to the CreateKey and PutKeyPolicy operations based on the value of the BypassPolicyLockoutSafetyCheck parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-bypass-policy-lockout-safety-check documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:KeySpec`: Filters access to an API operation based on the KeySpec property of the AWS KMS key that is created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-spec documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:KeyUsage`: Filters access to an API operation based on the KeyUsage property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-usage documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:KeyOrigin`: Filters access to an API operation based on the Origin property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-origin documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:MultiRegion`: Filters access to an API operation based on the MultiRegion property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-multi-region documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:MultiRegionKeyType`: Filters access to an API operation based on the MultiRegionKeyType property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-multi-region-key-type documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateKey = "kms:CreateKey",

  /**
   * Write - Controls permission to decrypt ciphertext that was encrypted under an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionAlgorithm`: Filters access to encryption operations based on the value of the encryption algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContext:${EncryptionContextKey}`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition evaluates the key and value in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContextKeys`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition key evaluates only the key in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:RecipientAttestation:ImageSha384`: Filters access to the Decrypt, GenerateDataKey, and GenerateRandom operations based on the image hash in the attestation document in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-recipient-attestation documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  Decrypt = "kms:Decrypt",

  /**
   * Write - Controls permission to delete an alias. Aliases are optional friendly names that you can associate with AWS KMS keys
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.alias `KmsResource.alias`} 
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAlias = "kms:DeleteAlias",

  /**
   * Write - Controls permission to delete a custom key store
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteCustomKeyStore.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteCustomKeyStore = "kms:DeleteCustomKeyStore",

  /**
   * Write - Controls permission to delete cryptographic material that you imported into an AWS KMS key. This action makes the key unusable
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteImportedKeyMaterial.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteImportedKeyMaterial = "kms:DeleteImportedKeyMaterial",

  /**
   * Read - Controls permission to view detailed information about custom key stores in the account and region
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeCustomKeyStores.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeCustomKeyStores = "kms:DescribeCustomKeyStores",

  /**
   * Read - Controls permission to view detailed information about an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeKey = "kms:DescribeKey",

  /**
   * Write - Controls permission to disable an AWS KMS key, which prevents it from being used in cryptographic operations
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisableKey = "kms:DisableKey",

  /**
   * Write - Controls permission to disable automatic rotation of a customer managed AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKeyRotation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisableKeyRotation = "kms:DisableKeyRotation",

  /**
   * Write - Controls permission to disconnect the custom key store from its associated AWS CloudHSM cluster
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_DisconnectCustomKeyStore.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisconnectCustomKeyStore = "kms:DisconnectCustomKeyStore",

  /**
   * Write - Controls permission to change the state of an AWS KMS key to enabled. This allows the KMS key to be used in cryptographic operations
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  EnableKey = "kms:EnableKey",

  /**
   * Write - Controls permission to enable automatic rotation of the cryptographic material in an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKeyRotation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  EnableKeyRotation = "kms:EnableKeyRotation",

  /**
   * Write - Controls permission to use the specified AWS KMS key to encrypt data and data keys
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionAlgorithm`: Filters access to encryption operations based on the value of the encryption algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContext:${EncryptionContextKey}`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition evaluates the key and value in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContextKeys`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition key evaluates only the key in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  Encrypt = "kms:Encrypt",

  /**
   * Write - Controls permission to use the AWS KMS key to generate data keys. You can use the data keys to encrypt data outside of AWS KMS
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionAlgorithm`: Filters access to encryption operations based on the value of the encryption algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContext:${EncryptionContextKey}`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition evaluates the key and value in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContextKeys`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition key evaluates only the key in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:RecipientAttestation:ImageSha384`: Filters access to the Decrypt, GenerateDataKey, and GenerateRandom operations based on the image hash in the attestation document in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-recipient-attestation documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GenerateDataKey = "kms:GenerateDataKey",

  /**
   * Write - Controls permission to use the AWS KMS key to generate data key pairs
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPair.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:DataKeyPairSpec`: Filters access to GenerateDataKeyPair and GenerateDataKeyPairWithoutPlaintext operations based on the value of the KeyPairSpec parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-data-key-pair-spec documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionAlgorithm`: Filters access to encryption operations based on the value of the encryption algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContext:${EncryptionContextKey}`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition evaluates the key and value in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContextKeys`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition key evaluates only the key in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GenerateDataKeyPair = "kms:GenerateDataKeyPair",

  /**
   * Write - Controls permission to use the AWS KMS key to generate data key pairs. Unlike the GenerateDataKeyPair operation, this operation returns an encrypted private key without a plaintext copy
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPairWithoutPlaintext.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:DataKeyPairSpec`: Filters access to GenerateDataKeyPair and GenerateDataKeyPairWithoutPlaintext operations based on the value of the KeyPairSpec parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-data-key-pair-spec documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionAlgorithm`: Filters access to encryption operations based on the value of the encryption algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContext:${EncryptionContextKey}`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition evaluates the key and value in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContextKeys`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition key evaluates only the key in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GenerateDataKeyPairWithoutPlaintext = "kms:GenerateDataKeyPairWithoutPlaintext",

  /**
   * Write - Controls permission to use the AWS KMS key to generate a data key. Unlike the GenerateDataKey operation, this operation returns an encrypted data key without a plaintext version of the data key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyWithoutPlaintext.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionAlgorithm`: Filters access to encryption operations based on the value of the encryption algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContext:${EncryptionContextKey}`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition evaluates the key and value in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContextKeys`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition key evaluates only the key in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GenerateDataKeyWithoutPlaintext = "kms:GenerateDataKeyWithoutPlaintext",

  /**
   * Write - Controls permission to use the AWS KMS key to generate message authentication codes
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateMac.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:MacAlgorithm`: Filters access to the GenerateMac and VerifyMac operations based on the MacAlgorithm parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-mac-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GenerateMac = "kms:GenerateMac",

  /**
   * Write - Controls permission to get a cryptographically secure random byte string from AWS KMS
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateRandom.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:RecipientAttestation:ImageSha384`: Filters access to the Decrypt, GenerateDataKey, and GenerateRandom operations based on the image hash in the attestation document in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-recipient-attestation documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GenerateRandom = "kms:GenerateRandom",

  /**
   * Read - Controls permission to view the key policy for the specified AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_GetKeyPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetKeyPolicy = "kms:GetKeyPolicy",

  /**
   * Read - Controls permission to determine whether automatic key rotation is enabled on the AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_GetKeyRotationStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetKeyRotationStatus = "kms:GetKeyRotationStatus",

  /**
   * Read - Controls permission to get data that is required to import cryptographic material into a customer managed key, including a public key and import token
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_GetParametersForImport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:WrappingAlgorithm`: Filters access to the GetParametersForImport operation based on the value of the WrappingAlgorithm parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-wrapping-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:WrappingKeySpec`: Filters access to the GetParametersForImport operation based on the value of the WrappingKeySpec parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-wrapping-key-spec documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetParametersForImport = "kms:GetParametersForImport",

  /**
   * Read - Controls permission to download the public key of an asymmetric AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetPublicKey = "kms:GetPublicKey",

  /**
   * Write - Controls permission to import cryptographic material into an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ImportKeyMaterial.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ExpirationModel`: Filters access to the ImportKeyMaterial operation based on the value of the ExpirationModel parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-expiration-model documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ValidTo`: Filters access to the ImportKeyMaterial operation based on the value of the ValidTo parameter in the request. You can use this condition key to allow users to import key material only when it expires by the specified date ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-valid-to documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date `Date`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ImportKeyMaterial = "kms:ImportKeyMaterial",

  /**
   * List - Controls permission to view the aliases that are defined in the account. Aliases are optional friendly names that you can associate with AWS KMS keys
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ListAliases.html
   */
  ListAliases = "kms:ListAliases",

  /**
   * List - Controls permission to view all grants for an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ListGrants.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:GrantIsForAWSResource`: Filters access to the CreateGrant operation when the request comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-is-for-aws-resource documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListGrants = "kms:ListGrants",

  /**
   * List - Controls permission to view the names of key policies for an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeyPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListKeyPolicies = "kms:ListKeyPolicies",

  /**
   * List - Controls permission to view the key ID and Amazon Resource Name (ARN) of all AWS KMS keys in the account
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html
   */
  ListKeys = "kms:ListKeys",

  /**
   * List - Controls permission to view all tags that are attached to an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ListResourceTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListResourceTags = "kms:ListResourceTags",

  /**
   * List - Controls permission to view grants in which the specified principal is the retiring principal. Other principals might be able to retire the grant and this principal might be able to retire other grants
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ListRetirableGrants.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   */
  ListRetirableGrants = "kms:ListRetirableGrants",

  /**
   * PermissionsManagement - Controls permission to replace the key policy for the specified AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:BypassPolicyLockoutSafetyCheck`: Filters access to the CreateKey and PutKeyPolicy operations based on the value of the BypassPolicyLockoutSafetyCheck parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-bypass-policy-lockout-safety-check documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutKeyPolicy = "kms:PutKeyPolicy",

  /**
   * Write - Controls permission to decrypt data as part of the process that decrypts and reencrypts the data within AWS KMS
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionAlgorithm`: Filters access to encryption operations based on the value of the encryption algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContext:${EncryptionContextKey}`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition evaluates the key and value in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContextKeys`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition key evaluates only the key in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:ReEncryptOnSameKey`: Filters access to the ReEncrypt operation when it uses the same AWS KMS key that was used for the Encrypt operation ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-reencrypt-on-same-key documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ReEncryptFrom = "kms:ReEncryptFrom",

  /**
   * Write - Controls permission to encrypt data as part of the process that decrypts and reencrypts the data within AWS KMS
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionAlgorithm`: Filters access to encryption operations based on the value of the encryption algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContext:${EncryptionContextKey}`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition evaluates the key and value in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContextKeys`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition key evaluates only the key in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:ReEncryptOnSameKey`: Filters access to the ReEncrypt operation when it uses the same AWS KMS key that was used for the Encrypt operation ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-reencrypt-on-same-key documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ReEncryptTo = "kms:ReEncryptTo",

  /**
   * Write - Controls permission to replicate a multi-Region primary key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ReplicateKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ReplicaRegion`: Filters access to the ReplicateKey operation based on the value of the ReplicaRegion parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-replica-region documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ReplicateKey = "kms:ReplicateKey",

  /**
   * PermissionsManagement - Controls permission to retire a grant. The RetireGrant operation is typically called by the grant user after they complete the tasks that the grant allowed them to perform
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   */
  RetireGrant = "kms:RetireGrant",

  /**
   * PermissionsManagement - Controls permission to revoke a grant, which denies permission for all operations that depend on the grant
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:GrantIsForAWSResource`: Filters access to the CreateGrant operation when the request comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-is-for-aws-resource documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RevokeGrant = "kms:RevokeGrant",

  /**
   * Write - Controls permission to schedule deletion of an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ScheduleKeyDeletion = "kms:ScheduleKeyDeletion",

  /**
   * Write - Controls permission to produce a digital signature for a message
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:MessageType`: Filters access to the Sign and Verify operations based on the value of the MessageType parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-message-type documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:SigningAlgorithm`: Filters access to the Sign and Verify operations based on the signing algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-signing-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  Sign = "kms:Sign",

  /**
   * Write - Controls access to internal APIs that synchronize multi-Region keys
   * @see https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-auth.html#multi-region-auth-slr
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   */
  SynchronizeMultiRegionKey = "kms:SynchronizeMultiRegionKey",

  /**
   * Tagging - Controls permission to create or update tags that are attached to an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access to the specified AWS KMS operations based on both the key and value of the tag in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access to the specified AWS KMS operations based on tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "kms:TagResource",

  /**
   * Tagging - Controls permission to delete tags that are attached to an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access to the specified AWS KMS operations based on tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "kms:UntagResource",

  /**
   * Write - Controls permission to associate an alias with a different AWS KMS key. An alias is an optional friendly name that you can associate with a KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.alias `KmsResource.alias`} 
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateAlias = "kms:UpdateAlias",

  /**
   * Write - Controls permission to change the properties of a custom key store
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateCustomKeyStore.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateCustomKeyStore = "kms:UpdateCustomKeyStore",

  /**
   * Write - Controls permission to delete or change the description of an AWS KMS key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateKeyDescription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateKeyDescription = "kms:UpdateKeyDescription",

  /**
   * Write - Controls permission to update the primary Region of a multi-Region primary key
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdatePrimaryRegion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:PrimaryRegion`: Filters access to the UpdatePrimaryRegion operation based on the value of the PrimaryRegion parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-primary-region documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdatePrimaryRegion = "kms:UpdatePrimaryRegion",

  /**
   * Write - Controls permission to use the specified AWS KMS key to verify digital signatures
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_Verify.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:MessageType`: Filters access to the Sign and Verify operations based on the value of the MessageType parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-message-type documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:SigningAlgorithm`: Filters access to the Sign and Verify operations based on the signing algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-signing-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  Verify = "kms:Verify",

  /**
   * Write - Controls permission to use the AWS KMS key to verify message authentication codes
   * @see https://docs.aws.amazon.com/kms/latest/APIReference/API_VerifyMac.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:MacAlgorithm`: Filters access to the GenerateMac and VerifyMac operations based on the MacAlgorithm parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-mac-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  VerifyMac = "kms:VerifyMac",

  /**
   * * - Grant all kms permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awskeymanagementservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KmsResource.key `KmsResource.key`} 
   * - {@link KmsResource.alias `KmsResource.alias`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `kms:CallerAccount`: Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ViaService`: Filters access when a request made on the principal's behalf comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContext:${EncryptionContextKey}`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition evaluates the key and value in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionContextKeys`: Filters access to a symmetric AWS KMS key based on the encryption context in a cryptographic operation. This condition key evaluates only the key in each key-value encryption context pair ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:GrantConstraintType`: Filters access to the CreateGrant operation based on the grant constraint in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-constraint-type documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:GranteePrincipal`: Filters access to the CreateGrant operation based on the grantee principal in the grant ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grantee-principal documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:GrantIsForAWSResource`: Filters access to the CreateGrant operation when the request comes from a specified AWS service ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-is-for-aws-resource documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:GrantOperations`: Filters access to the CreateGrant operation based on the operations in the grant ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-operations documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:RetiringPrincipal`: Filters access to the CreateGrant operation based on the retiring principal in the grant ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-retiring-principal documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access to the specified AWS KMS operations based on tags assigned to the AWS KMS key ({@link https://docs.aws.amazon.com/kms/latest/developerguide/tag-authorization.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access to the specified AWS KMS operations based on both the key and value of the tag in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access to the specified AWS KMS operations based on tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `kms:BypassPolicyLockoutSafetyCheck`: Filters access to the CreateKey and PutKeyPolicy operations based on the value of the BypassPolicyLockoutSafetyCheck parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-bypass-policy-lockout-safety-check documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:KeySpec`: Filters access to an API operation based on the KeySpec property of the AWS KMS key that is created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-spec documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:KeyUsage`: Filters access to an API operation based on the KeyUsage property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-usage documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:KeyOrigin`: Filters access to an API operation based on the Origin property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-origin documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:MultiRegion`: Filters access to an API operation based on the MultiRegion property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-multi-region documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:MultiRegionKeyType`: Filters access to an API operation based on the MultiRegionKeyType property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-multi-region-key-type documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:EncryptionAlgorithm`: Filters access to encryption operations based on the value of the encryption algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:RecipientAttestation:ImageSha384`: Filters access to the Decrypt, GenerateDataKey, and GenerateRandom operations based on the image hash in the attestation document in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-recipient-attestation documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:RequestAlias`: Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:DataKeyPairSpec`: Filters access to GenerateDataKeyPair and GenerateDataKeyPairWithoutPlaintext operations based on the value of the KeyPairSpec parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-data-key-pair-spec documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:MacAlgorithm`: Filters access to the GenerateMac and VerifyMac operations based on the MacAlgorithm parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-mac-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:WrappingAlgorithm`: Filters access to the GetParametersForImport operation based on the value of the WrappingAlgorithm parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-wrapping-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:WrappingKeySpec`: Filters access to the GetParametersForImport operation based on the value of the WrappingKeySpec parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-wrapping-key-spec documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ExpirationModel`: Filters access to the ImportKeyMaterial operation based on the value of the ExpirationModel parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-expiration-model documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ValidTo`: Filters access to the ImportKeyMaterial operation based on the value of the ValidTo parameter in the request. You can use this condition key to allow users to import key material only when it expires by the specified date ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-valid-to documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date `Date`})
   * - `kms:ReEncryptOnSameKey`: Filters access to the ReEncrypt operation when it uses the same AWS KMS key that was used for the Encrypt operation ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-reencrypt-on-same-key documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:ReplicaRegion`: Filters access to the ReplicateKey operation based on the value of the ReplicaRegion parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-replica-region documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:MessageType`: Filters access to the Sign and Verify operations based on the value of the MessageType parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-message-type documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:SigningAlgorithm`: Filters access to the Sign and Verify operations based on the signing algorithm in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-signing-algorithm documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:PrimaryRegion`: Filters access to the UpdatePrimaryRegion operation based on the value of the PrimaryRegion parameter in the request ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-primary-region documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "kms:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awskeymanagementservice.html
 */
export const KmsResource = {

  /**
   * @see https://docs.aws.amazon.com/kms/latest/developerguide/programming-aliases.html
   */
  alias: (options: Partial<{partition: string, region: string, account: string, alias: string}> = {}) => `arn:${options.partition || '*'}:kms:${options.region || '*'}:${options.account || '*'}:alias/${options.alias || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access to the specified AWS KMS operations based on tags assigned to the AWS KMS key ({@link https://docs.aws.amazon.com/kms/latest/developerguide/tag-authorization.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:KeyOrigin`: Filters access to an API operation based on the Origin property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-origin documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:KeySpec`: Filters access to an API operation based on the KeySpec property of the AWS KMS key that is created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-spec documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:KeyUsage`: Filters access to an API operation based on the KeyUsage property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-usage documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:MultiRegion`: Filters access to an API operation based on the MultiRegion property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-multi-region documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `kms:MultiRegionKeyType`: Filters access to an API operation based on the MultiRegionKeyType property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-multi-region-key-type documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `kms:ResourceAliases`: Filters access to specified AWS KMS operations based on aliases associated with the AWS KMS key ({@link https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-resource-aliases documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  key: (options: Partial<{partition: string, region: string, account: string, keyId: string}> = {}) => `arn:${options.partition || '*'}:kms:${options.region || '*'}:${options.account || '*'}:key/${options.keyId || '*'}`,
}

