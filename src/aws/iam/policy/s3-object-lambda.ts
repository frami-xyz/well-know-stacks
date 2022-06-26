/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3objectlambda.html
 */
export enum S3ObjectLambdaAction {

  /**
   * Write - Grants permission to abort a multipart upload
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  AbortMultipartUpload = "s3-object-lambda:AbortMultipartUpload",

  /**
   * Write - Grants permission to remove the null version of an object and insert a delete marker, which becomes the current version of the object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  DeleteObject = "s3-object-lambda:DeleteObject",

  /**
   * Tagging - Grants permission to use the tagging subresource to remove the entire tag set from the specified object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  DeleteObjectTagging = "s3-object-lambda:DeleteObjectTagging",

  /**
   * Write - Grants permission to remove a specific version of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html/#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteObjectVersion = "s3-object-lambda:DeleteObjectVersion",

  /**
   * Tagging - Grants permission to remove the entire tag set for a specific version of the object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html/#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteObjectVersionTagging = "s3-object-lambda:DeleteObjectVersionTagging",

  /**
   * Read - Grants permission to retrieve objects from Amazon S3
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  GetObject = "s3-object-lambda:GetObject",

  /**
   * Read - Grants permission to return the access control list (ACL) of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  GetObjectAcl = "s3-object-lambda:GetObjectAcl",

  /**
   * Read - Grants permission to get an object's current Legal Hold status
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  GetObjectLegalHold = "s3-object-lambda:GetObjectLegalHold",

  /**
   * Read - Grants permission to retrieve the retention settings for an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  GetObjectRetention = "s3-object-lambda:GetObjectRetention",

  /**
   * Read - Grants permission to return the tag set of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  GetObjectTagging = "s3-object-lambda:GetObjectTagging",

  /**
   * Read - Grants permission to retrieve a specific version of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html/#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectVersion = "s3-object-lambda:GetObjectVersion",

  /**
   * Read - Grants permission to return the access control list (ACL) of a specific object version
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html/#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectVersionAcl = "s3-object-lambda:GetObjectVersionAcl",

  /**
   * Read - Grants permission to return the tag set for a specific version of the object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html/#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectVersionTagging = "s3-object-lambda:GetObjectVersionTagging",

  /**
   * List - Grants permission to list some or all of the objects in an Amazon S3 bucket (up to 1000)
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  ListBucket = "s3-object-lambda:ListBucket",

  /**
   * List - Grants permission to list in-progress multipart uploads
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  ListBucketMultipartUploads = "s3-object-lambda:ListBucketMultipartUploads",

  /**
   * List - Grants permission to list metadata about all the versions of objects in an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  ListBucketVersions = "s3-object-lambda:ListBucketVersions",

  /**
   * List - Grants permission to list the parts that have been uploaded for a specific multipart upload
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  ListMultipartUploadParts = "s3-object-lambda:ListMultipartUploadParts",

  /**
   * Write - Grants permission to add an object to a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  PutObject = "s3-object-lambda:PutObject",

  /**
   * PermissionsManagement - Grants permission to set the access control list (ACL) permissions for new or existing objects in an S3 bucket.
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  PutObjectAcl = "s3-object-lambda:PutObjectAcl",

  /**
   * Write - Grants permission to apply a Legal Hold configuration to the specified object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  PutObjectLegalHold = "s3-object-lambda:PutObjectLegalHold",

  /**
   * Write - Grants permission to place an Object Retention configuration on an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  PutObjectRetention = "s3-object-lambda:PutObjectRetention",

  /**
   * Tagging - Grants permission to set the supplied tag-set to an object that already exists in a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  PutObjectTagging = "s3-object-lambda:PutObjectTagging",

  /**
   * PermissionsManagement - Grants permission to use the acl subresource to set the access control list (ACL) permissions for an object that already exists in a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html/#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutObjectVersionAcl = "s3-object-lambda:PutObjectVersionAcl",

  /**
   * Tagging - Grants permission to set the supplied tag-set for a specific version of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html/#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutObjectVersionTagging = "s3-object-lambda:PutObjectVersionTagging",

  /**
   * Write - Grants permission to restore an archived copy of an object back into Amazon S3
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  RestoreObject = "s3-object-lambda:RestoreObject",

  /**
   * Write - Grants permission to provide data for GetObject requests send to S3 Object Lambda
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_WriteGetObjectResponse.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  WriteGetObjectResponse = "s3-object-lambda:WriteGetObjectResponse",

  /**
   * * - Grant all s3-object-lambda permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3objectlambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3ObjectLambdaResource.objectlambdaaccesspoint `S3ObjectLambdaResource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-object-lambda:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-object-lambda:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-object-lambda:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html/#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "s3-object-lambda:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3objectlambda.html
 */
export const S3ObjectLambdaResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/transforming-objects.html
   */
  objectlambdaaccesspoint: (options: Partial<{partition: string, region: string, account: string, accessPointName: string}> = {}) => `arn:${options.partition || '*'}:s3-object-lambda:${options.region || '*'}:${options.account || '*'}:accesspoint/${options.accessPointName || '*'}`,
}

