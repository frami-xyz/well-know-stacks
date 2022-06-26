/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html
 */
export enum S3Action {

  /**
   * Write - Grants permission to abort a multipart upload
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AbortMultipartUpload = "s3:AbortMultipartUpload",

  /**
   * PermissionsManagement - Grants permission to allow circumvention of governance-mode object retention settings
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-managing-bypass
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestObjectTag/<key>`: Filters access by the tag keys and values to be added to objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestObjectTagKeys`: Filters access by the tag keys to be added to objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-acl`: Filters access by canned ACL in the request's x-amz-acl header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-copy-source`: Filters access by copy source bucket, prefix, or object in the copy object requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#putobject-limit-copy-source-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-full-control`: Filters access by x-amz-grant-full-control (full control) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read`: Filters access by x-amz-grant-read (read access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read-acp`: Filters access by the x-amz-grant-read-acp (read permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write`: Filters access by the x-amz-grant-write (write access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write-acp`: Filters access by the x-amz-grant-write-acp (write permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-metadata-directive`: Filters access by object metadata behavior (COPY or REPLACE) when objects are copied ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-server-side-encryption`: Filters access by server-side encryption ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-server-side-encryption-aws-kms-key-id`: Filters access by AWS KMS customer managed CMK for server-side encryption ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html#require-sse-kms documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-storage-class`: Filters access by storage class ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-howtoset documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-website-redirect-location`: Filters access by a specific website redirect location for buckets that are configured as static websites ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-page-redirect.html#page-redirect-using-rest-api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:object-lock-mode`: Filters access by object retention mode (COMPLIANCE or GOVERNANCE) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-retention-modes documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:object-lock-retain-until-date`: Filters access by object retain-until date ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-retention-periods documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date `Date`})
   * - `s3:object-lock-remaining-retention-days`: Filters access by remaining object retention days ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-managing-retention-limits documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:object-lock-legal-hold`: Filters access by object legal hold status ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-legal-holds documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BypassGovernanceRetention = "s3:BypassGovernanceRetention",

  /**
   * Write - Grants permission to create a new access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.accesspoint `S3Resource.accesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:locationconstraint`: Filters access by a specific Region ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#condition-key-bucket-ops-1 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-acl`: Filters access by canned ACL in the request's x-amz-acl header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAccessPoint = "s3:CreateAccessPoint",

  /**
   * Write - Grants permission to create an object lambda enabled accesspoint
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.objectlambdaaccesspoint `S3Resource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAccessPointForObjectLambda = "s3:CreateAccessPointForObjectLambda",

  /**
   * Write - Grants permission to create a new bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:locationconstraint`: Filters access by a specific Region ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#condition-key-bucket-ops-1 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-acl`: Filters access by canned ACL in the request's x-amz-acl header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-full-control`: Filters access by x-amz-grant-full-control (full control) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read`: Filters access by x-amz-grant-read (read access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read-acp`: Filters access by the x-amz-grant-read-acp (read permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write`: Filters access by the x-amz-grant-write (write access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write-acp`: Filters access by the x-amz-grant-write-acp (write permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-object-ownership`: Filters access by Object Ownership ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/ensure-object-ownership.html#object-ownership-requiring-bucket-owner-enforced documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateBucket = "s3:CreateBucket",

  /**
   * Write - Grants permission to create a new Amazon S3 Batch Operations job
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestJobPriority`: Filters access by priority range to creating new jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:RequestJobOperation`: Filters access by operation to creating jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateJob = "s3:CreateJob",

  /**
   * Write - Grants permission to create a new multi region access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.multiregionaccesspoint `S3Resource.multiregionaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  CreateMultiRegionAccessPoint = "s3:CreateMultiRegionAccessPoint",

  /**
   * Write - Grants permission to delete the access point named in the URI
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.accesspoint `S3Resource.accesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAccessPoint = "s3:DeleteAccessPoint",

  /**
   * Write - Grants permission to delete the object lambda enabled access point named in the URI
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.objectlambdaaccesspoint `S3Resource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAccessPointForObjectLambda = "s3:DeleteAccessPointForObjectLambda",

  /**
   * PermissionsManagement - Grants permission to delete the policy on a specified access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.accesspoint `S3Resource.accesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAccessPointPolicy = "s3:DeleteAccessPointPolicy",

  /**
   * PermissionsManagement - Grants permission to delete the policy on a specified object lambda enabled access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicyForObjectLambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.objectlambdaaccesspoint `S3Resource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAccessPointPolicyForObjectLambda = "s3:DeleteAccessPointPolicyForObjectLambda",

  /**
   * Write - Grants permission to delete the bucket named in the URI
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteBucket = "s3:DeleteBucket",

  /**
   * PermissionsManagement - Grants permission to delete the policy on a specified bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteBucketPolicy = "s3:DeleteBucketPolicy",

  /**
   * Write - Grants permission to remove the website configuration for a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteBucketWebsite = "s3:DeleteBucketWebsite",

  /**
   * Tagging - Grants permission to remove tags from an existing Amazon S3 Batch Operations job
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.job `S3Resource.job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingJobPriority`: Filters access by priority range to cancelling existing jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:ExistingJobOperation`: Filters access by operation to updating the job priority ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteJobTagging = "s3:DeleteJobTagging",

  /**
   * Write - Grants permission to delete the multi region access point named in the URI
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.multiregionaccesspoint `S3Resource.multiregionaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  DeleteMultiRegionAccessPoint = "s3:DeleteMultiRegionAccessPoint",

  /**
   * Write - Grants permission to remove the null version of an object and insert a delete marker, which becomes the current version of the object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteObject = "s3:DeleteObject",

  /**
   * Tagging - Grants permission to use the tagging subresource to remove the entire tag set from the specified object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteObjectTagging = "s3:DeleteObjectTagging",

  /**
   * Write - Grants permission to remove a specific version of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteObjectVersion = "s3:DeleteObjectVersion",

  /**
   * Tagging - Grants permission to remove the entire tag set for a specific version of the object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteObjectVersionTagging = "s3:DeleteObjectVersionTagging",

  /**
   * Write - Grants permission to delete an existing Amazon S3 Storage Lens configuration
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteStorageLensConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.storagelensconfiguration `S3Resource.storagelensconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteStorageLensConfiguration = "s3:DeleteStorageLensConfiguration",

  /**
   * Tagging - Grants permission to remove tags from an existing Amazon S3 Storage Lens configuration
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteStorageLensConfigurationTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.storagelensconfiguration `S3Resource.storagelensconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteStorageLensConfigurationTagging = "s3:DeleteStorageLensConfigurationTagging",

  /**
   * Read - Grants permission to retrieve the configuration parameters and status for a batch operations job
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.job `S3Resource.job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeJob = "s3:DescribeJob",

  /**
   * Read - Grants permission to retrieve the configurations for a multi region access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.multiregionaccesspointrequestarn `S3Resource.multiregionaccesspointrequestarn`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  DescribeMultiRegionAccessPointOperation = "s3:DescribeMultiRegionAccessPointOperation",

  /**
   * Read - Grants permission to uses the accelerate subresource to return the Transfer Acceleration state of a bucket, which is either Enabled or Suspended
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccelerateConfiguration = "s3:GetAccelerateConfiguration",

  /**
   * Read - Grants permission to return configuration information about the specified access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccessPoint = "s3:GetAccessPoint",

  /**
   * Read - Grants permission to retrieve the configuration of the object lambda enabled access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointConfigurationForObjectLambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.objectlambdaaccesspoint `S3Resource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccessPointConfigurationForObjectLambda = "s3:GetAccessPointConfigurationForObjectLambda",

  /**
   * Read - Grants permission to create an object lambda enabled accesspoint
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.objectlambdaaccesspoint `S3Resource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccessPointForObjectLambda = "s3:GetAccessPointForObjectLambda",

  /**
   * Read - Grants permission to returns the access point policy associated with the specified access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.accesspoint `S3Resource.accesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccessPointPolicy = "s3:GetAccessPointPolicy",

  /**
   * Read - Grants permission to returns the access point policy associated with the specified object lambda enabled access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.objectlambdaaccesspoint `S3Resource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccessPointPolicyForObjectLambda = "s3:GetAccessPointPolicyForObjectLambda",

  /**
   * Read - Grants permission to return the policy status for a specific access point policy
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.accesspoint `S3Resource.accesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccessPointPolicyStatus = "s3:GetAccessPointPolicyStatus",

  /**
   * Read - Grants permission to return the policy status for a specific object lambda access point policy
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyStatusForObjectLambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.objectlambdaaccesspoint `S3Resource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccessPointPolicyStatusForObjectLambda = "s3:GetAccessPointPolicyStatusForObjectLambda",

  /**
   * Read - Grants permission to retrieve the PublicAccessBlock configuration for an AWS account
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccountPublicAccessBlock = "s3:GetAccountPublicAccessBlock",

  /**
   * Read - Grants permission to get an analytics configuration from an Amazon S3 bucket, identified by the analytics configuration ID
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAnalyticsConfiguration = "s3:GetAnalyticsConfiguration",

  /**
   * Read - Grants permission to use the acl subresource to return the access control list (ACL) of an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketAcl = "s3:GetBucketAcl",

  /**
   * Read - Grants permission to return the CORS configuration information set for an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketCORS = "s3:GetBucketCORS",

  /**
   * Read - Grants permission to return the Region that an Amazon S3 bucket resides in
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketLocation = "s3:GetBucketLocation",

  /**
   * Read - Grants permission to return the logging status of an Amazon S3 bucket and the permissions users have to view or modify that status
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLogging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketLogging = "s3:GetBucketLogging",

  /**
   * Read - Grants permission to get the notification configuration of an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketNotification.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketNotification = "s3:GetBucketNotification",

  /**
   * Read - Grants permission to get the Object Lock configuration of an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  GetBucketObjectLockConfiguration = "s3:GetBucketObjectLockConfiguration",

  /**
   * Read - Grants permission to retrieve ownership controls on a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketOwnershipControls.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketOwnershipControls = "s3:GetBucketOwnershipControls",

  /**
   * Read - Grants permission to return the policy of the specified bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketPolicy = "s3:GetBucketPolicy",

  /**
   * Read - Grants permission to retrieve the policy status for a specific Amazon S3 bucket, which indicates whether the bucket is public
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketPolicyStatus = "s3:GetBucketPolicyStatus",

  /**
   * Read - Grants permission to retrieve the PublicAccessBlock configuration for an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketPublicAccessBlock = "s3:GetBucketPublicAccessBlock",

  /**
   * Read - Grants permission to return the request payment configuration for an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketRequestPayment = "s3:GetBucketRequestPayment",

  /**
   * Read - Grants permission to return the tag set associated with an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketTagging = "s3:GetBucketTagging",

  /**
   * Read - Grants permission to return the versioning state of an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketVersioning = "s3:GetBucketVersioning",

  /**
   * Read - Grants permission to return the website configuration for an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketWebsite = "s3:GetBucketWebsite",

  /**
   * Read - Grants permission to return the default encryption configuration an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetEncryptionConfiguration = "s3:GetEncryptionConfiguration",

  /**
   * Read - Grants permission to get an or list all Amazon S3 Intelligent Tiering configuration in a S3 Bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetIntelligentTieringConfiguration = "s3:GetIntelligentTieringConfiguration",

  /**
   * Read - Grants permission to return an inventory configuration from an Amazon S3 bucket, identified by the inventory configuration ID
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetInventoryConfiguration = "s3:GetInventoryConfiguration",

  /**
   * Read - Grants permission to return the tag set of an existing Amazon S3 Batch Operations job
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.job `S3Resource.job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetJobTagging = "s3:GetJobTagging",

  /**
   * Read - Grants permission to return the lifecycle configuration information set on an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLifecycleConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetLifecycleConfiguration = "s3:GetLifecycleConfiguration",

  /**
   * Read - Grants permission to get a metrics configuration from an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetricsConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetMetricsConfiguration = "s3:GetMetricsConfiguration",

  /**
   * Read - Grants permission to return configuration information about the specified multi region access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.multiregionaccesspoint `S3Resource.multiregionaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  GetMultiRegionAccessPoint = "s3:GetMultiRegionAccessPoint",

  /**
   * Read - Grants permission to returns the access point policy associated with the specified multi region access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.multiregionaccesspoint `S3Resource.multiregionaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  GetMultiRegionAccessPointPolicy = "s3:GetMultiRegionAccessPointPolicy",

  /**
   * Read - Grants permission to return the policy status for a specific multi region access point policy
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicyStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.multiregionaccesspoint `S3Resource.multiregionaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  GetMultiRegionAccessPointPolicyStatus = "s3:GetMultiRegionAccessPointPolicyStatus",

  /**
   * Read - Grants permission to retrieve objects from Amazon S3
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObject = "s3:GetObject",

  /**
   * Read - Grants permission to return the access control list (ACL) of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectAcl = "s3:GetObjectAcl",

  /**
   * Read - Grants permission to retrieve attributes related to a specific object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectAttributes = "s3:GetObjectAttributes",

  /**
   * Read - Grants permission to get an object's current Legal Hold status
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectLegalHold = "s3:GetObjectLegalHold",

  /**
   * Read - Grants permission to retrieve the retention settings for an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectRetention = "s3:GetObjectRetention",

  /**
   * Read - Grants permission to return the tag set of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectTagging = "s3:GetObjectTagging",

  /**
   * Read - Grants permission to return torrent files from an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectTorrent = "s3:GetObjectTorrent",

  /**
   * Read - Grants permission to retrieve a specific version of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectVersion = "s3:GetObjectVersion",

  /**
   * Read - Grants permission to return the access control list (ACL) of a specific object version
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectVersionAcl = "s3:GetObjectVersionAcl",

  /**
   * Read - Grants permission to retrieve attributes related to a specific version of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectVersionAttributes = "s3:GetObjectVersionAttributes",

  /**
   * Read - Grants permission to replicate both unencrypted objects and objects encrypted with SSE-S3 or SSE-KMS
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-config-for-kms-objects.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectVersionForReplication = "s3:GetObjectVersionForReplication",

  /**
   * Read - Grants permission to return the tag set for a specific version of the object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-repl-config-perm-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectVersionTagging = "s3:GetObjectVersionTagging",

  /**
   * Read - Grants permission to get Torrent files about a different version using the versionId subresource
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectVersionTorrent = "s3:GetObjectVersionTorrent",

  /**
   * Read - Grants permission to get the replication configuration information set on an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketReplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetReplicationConfiguration = "s3:GetReplicationConfiguration",

  /**
   * Read - Grants permission to get an Amazon S3 Storage Lens configuration
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetStorageLensConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.storagelensconfiguration `S3Resource.storagelensconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetStorageLensConfiguration = "s3:GetStorageLensConfiguration",

  /**
   * Read - Grants permission to get the tag set of an existing Amazon S3 Storage Lens configuration
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetStorageLensConfigurationTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.storagelensconfiguration `S3Resource.storagelensconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetStorageLensConfigurationTagging = "s3:GetStorageLensConfigurationTagging",

  /**
   * Read - Grants permission to get an Amazon S3 Storage Lens dashboard
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_dashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.storagelensconfiguration `S3Resource.storagelensconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetStorageLensDashboard = "s3:GetStorageLensDashboard",

  /**
   * Write - Grants permission to initiate the replication process by setting replication status of an object to pending
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-repl-config-perm-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  InitiateReplication = "s3:InitiateReplication",

  /**
   * List - Grants permission to list access points
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListAccessPoints = "s3:ListAccessPoints",

  /**
   * List - Grants permission to list object lambda enabled accesspoints
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListAccessPointsForObjectLambda = "s3:ListAccessPointsForObjectLambda",

  /**
   * List - Grants permission to list all buckets owned by the authenticated sender of the request
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListAllMyBuckets = "s3:ListAllMyBuckets",

  /**
   * List - Grants permission to list some or all of the objects in an Amazon S3 bucket (up to 1000)
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:delimiter`: Filters access by delimiter parameter ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/walkthrough1.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:max-keys`: Filters access by maximum number of keys returned in a ListBucket request ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-numeric-condition-operators documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:prefix`: Filters access by key name prefix ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#condition-key-bucket-ops-2 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListBucket = "s3:ListBucket",

  /**
   * List - Grants permission to list in-progress multipart uploads
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListBucketMultipartUploads = "s3:ListBucketMultipartUploads",

  /**
   * List - Grants permission to list metadata about all the versions of objects in an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:delimiter`: Filters access by delimiter parameter ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/walkthrough1.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:max-keys`: Filters access by maximum number of keys returned in a ListBucket request ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-numeric-condition-operators documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:prefix`: Filters access by key name prefix ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#condition-key-bucket-ops-2 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListBucketVersions = "s3:ListBucketVersions",

  /**
   * List - Grants permission to list current jobs and jobs that have ended recently
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListJobs = "s3:ListJobs",

  /**
   * List - Grants permission to list multi region access points
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListMultiRegionAccessPoints.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  ListMultiRegionAccessPoints = "s3:ListMultiRegionAccessPoints",

  /**
   * List - Grants permission to list the parts that have been uploaded for a specific multipart upload
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListMultipartUploadParts = "s3:ListMultipartUploadParts",

  /**
   * List - Grants permission to list Amazon S3 Storage Lens configurations
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListStorageLensConfigurations.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListStorageLensConfigurations = "s3:ListStorageLensConfigurations",

  /**
   * PermissionsManagement - Grants permission to change replica ownership
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-change-owner.html#repl-ownership-add-role-permission
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ObjectOwnerOverrideToBucketOwner = "s3:ObjectOwnerOverrideToBucketOwner",

  /**
   * Write - Grants permission to use the accelerate subresource to set the Transfer Acceleration state of an existing S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAccelerateConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutAccelerateConfiguration = "s3:PutAccelerateConfiguration",

  /**
   * Write - Grants permission to set the configuration of the object lambda enabled access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointConfigurationForObjectLambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.objectlambdaaccesspoint `S3Resource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutAccessPointConfigurationForObjectLambda = "s3:PutAccessPointConfigurationForObjectLambda",

  /**
   * PermissionsManagement - Grants permission to associate an access policy with a specified access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.accesspoint `S3Resource.accesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutAccessPointPolicy = "s3:PutAccessPointPolicy",

  /**
   * PermissionsManagement - Grants permission to associate an access policy with a specified object lambda enabled access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.objectlambdaaccesspoint `S3Resource.objectlambdaaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutAccessPointPolicyForObjectLambda = "s3:PutAccessPointPolicyForObjectLambda",

  /**
   * PermissionsManagement - Grants permission to associate public access block configurations with a specified access point, while creating a access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html#access-control-block-public-access-examples-access-point
   */
  PutAccessPointPublicAccessBlock = "s3:PutAccessPointPublicAccessBlock",

  /**
   * PermissionsManagement - Grants permission to create or modify the PublicAccessBlock configuration for an AWS account
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutPublicAccessBlock.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutAccountPublicAccessBlock = "s3:PutAccountPublicAccessBlock",

  /**
   * Write - Grants permission to set an analytics configuration for the bucket, specified by the analytics configuration ID
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutAnalyticsConfiguration = "s3:PutAnalyticsConfiguration",

  /**
   * PermissionsManagement - Grants permission to set the permissions on an existing bucket using access control lists (ACLs)
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-acl`: Filters access by canned ACL in the request's x-amz-acl header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-full-control`: Filters access by x-amz-grant-full-control (full control) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read`: Filters access by x-amz-grant-read (read access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read-acp`: Filters access by the x-amz-grant-read-acp (read permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write`: Filters access by the x-amz-grant-write (write access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write-acp`: Filters access by the x-amz-grant-write-acp (write permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketAcl = "s3:PutBucketAcl",

  /**
   * Write - Grants permission to set the CORS configuration for an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketCORS = "s3:PutBucketCORS",

  /**
   * Write - Grants permission to set the logging parameters for an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLogging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketLogging = "s3:PutBucketLogging",

  /**
   * Write - Grants permission to receive notifications when certain events happen in an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketNotification.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketNotification = "s3:PutBucketNotification",

  /**
   * Write - Grants permission to put Object Lock configuration on a specific bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLockConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketObjectLockConfiguration = "s3:PutBucketObjectLockConfiguration",

  /**
   * Write - Grants permission to add, replace or delete ownership controls on a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketOwnershipControls.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketOwnershipControls = "s3:PutBucketOwnershipControls",

  /**
   * PermissionsManagement - Grants permission to add or replace a bucket policy on a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketPolicy = "s3:PutBucketPolicy",

  /**
   * PermissionsManagement - Grants permission to create or modify the PublicAccessBlock configuration for a specific Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketPublicAccessBlock = "s3:PutBucketPublicAccessBlock",

  /**
   * Write - Grants permission to set the request payment configuration of a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketRequestPayment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketRequestPayment = "s3:PutBucketRequestPayment",

  /**
   * Tagging - Grants permission to add a set of tags to an existing Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketTagging = "s3:PutBucketTagging",

  /**
   * Write - Grants permission to set the versioning state of an existing Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketVersioning = "s3:PutBucketVersioning",

  /**
   * Write - Grants permission to set the configuration of the website that is specified in the website subresource
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketWebsite = "s3:PutBucketWebsite",

  /**
   * Write - Grants permission to set the encryption configuration for an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutEncryptionConfiguration = "s3:PutEncryptionConfiguration",

  /**
   * Write - Grants permission to create new or update or delete an existing Amazon S3 Intelligent Tiering configuration
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutIntelligentTieringConfiguration = "s3:PutIntelligentTieringConfiguration",

  /**
   * Write - Grants permission to add an inventory configuration to the bucket, identified by the inventory ID
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutInventoryConfiguration = "s3:PutInventoryConfiguration",

  /**
   * Tagging - Grants permission to replace tags on an existing Amazon S3 Batch Operations job
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.job `S3Resource.job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingJobPriority`: Filters access by priority range to cancelling existing jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:ExistingJobOperation`: Filters access by operation to updating the job priority ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutJobTagging = "s3:PutJobTagging",

  /**
   * Write - Grants permission to create a new lifecycle configuration for the bucket or replace an existing lifecycle configuration
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutLifecycleConfiguration = "s3:PutLifecycleConfiguration",

  /**
   * Write - Grants permission to set or update a metrics configuration for the CloudWatch request metrics from an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketMetricsConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutMetricsConfiguration = "s3:PutMetricsConfiguration",

  /**
   * PermissionsManagement - Grants permission to associate an access policy with a specified multi region access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPointPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.multiregionaccesspoint `S3Resource.multiregionaccesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  PutMultiRegionAccessPointPolicy = "s3:PutMultiRegionAccessPointPolicy",

  /**
   * Write - Grants permission to add an object to a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestObjectTag/<key>`: Filters access by the tag keys and values to be added to objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestObjectTagKeys`: Filters access by the tag keys to be added to objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-acl`: Filters access by canned ACL in the request's x-amz-acl header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-copy-source`: Filters access by copy source bucket, prefix, or object in the copy object requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#putobject-limit-copy-source-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-full-control`: Filters access by x-amz-grant-full-control (full control) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read`: Filters access by x-amz-grant-read (read access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read-acp`: Filters access by the x-amz-grant-read-acp (read permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write`: Filters access by the x-amz-grant-write (write access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write-acp`: Filters access by the x-amz-grant-write-acp (write permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-metadata-directive`: Filters access by object metadata behavior (COPY or REPLACE) when objects are copied ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-server-side-encryption`: Filters access by server-side encryption ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-server-side-encryption-aws-kms-key-id`: Filters access by AWS KMS customer managed CMK for server-side encryption ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html#require-sse-kms documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-storage-class`: Filters access by storage class ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-howtoset documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-website-redirect-location`: Filters access by a specific website redirect location for buckets that are configured as static websites ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-page-redirect.html#page-redirect-using-rest-api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:object-lock-mode`: Filters access by object retention mode (COMPLIANCE or GOVERNANCE) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-retention-modes documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:object-lock-retain-until-date`: Filters access by object retain-until date ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-retention-periods documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date `Date`})
   * - `s3:object-lock-remaining-retention-days`: Filters access by remaining object retention days ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-managing-retention-limits documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:object-lock-legal-hold`: Filters access by object legal hold status ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-legal-holds documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutObject = "s3:PutObject",

  /**
   * PermissionsManagement - Grants permission to set the access control list (ACL) permissions for new or existing objects in an S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-acl`: Filters access by canned ACL in the request's x-amz-acl header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-full-control`: Filters access by x-amz-grant-full-control (full control) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read`: Filters access by x-amz-grant-read (read access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read-acp`: Filters access by the x-amz-grant-read-acp (read permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write`: Filters access by the x-amz-grant-write (write access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write-acp`: Filters access by the x-amz-grant-write-acp (write permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-storage-class`: Filters access by storage class ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-howtoset documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutObjectAcl = "s3:PutObjectAcl",

  /**
   * Write - Grants permission to apply a Legal Hold configuration to the specified object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectLegalHold.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:object-lock-legal-hold`: Filters access by object legal hold status ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-legal-holds documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutObjectLegalHold = "s3:PutObjectLegalHold",

  /**
   * Write - Grants permission to place an Object Retention configuration on an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectRetention.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:object-lock-mode`: Filters access by object retention mode (COMPLIANCE or GOVERNANCE) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-retention-modes documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:object-lock-retain-until-date`: Filters access by object retain-until date ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-retention-periods documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date `Date`})
   * - `s3:object-lock-remaining-retention-days`: Filters access by remaining object retention days ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-managing-retention-limits documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  PutObjectRetention = "s3:PutObjectRetention",

  /**
   * Tagging - Grants permission to set the supplied tag-set to an object that already exists in a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestObjectTag/<key>`: Filters access by the tag keys and values to be added to objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestObjectTagKeys`: Filters access by the tag keys to be added to objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutObjectTagging = "s3:PutObjectTagging",

  /**
   * PermissionsManagement - Grants permission to use the acl subresource to set the access control list (ACL) permissions for an object that already exists in a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-acl`: Filters access by canned ACL in the request's x-amz-acl header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-full-control`: Filters access by x-amz-grant-full-control (full control) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read`: Filters access by x-amz-grant-read (read access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read-acp`: Filters access by the x-amz-grant-read-acp (read permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write`: Filters access by the x-amz-grant-write (write access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write-acp`: Filters access by the x-amz-grant-write-acp (write permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-storage-class`: Filters access by storage class ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-howtoset documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutObjectVersionAcl = "s3:PutObjectVersionAcl",

  /**
   * Tagging - Grants permission to set the supplied tag-set for a specific version of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestObjectTag/<key>`: Filters access by the tag keys and values to be added to objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestObjectTagKeys`: Filters access by the tag keys to be added to objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutObjectVersionTagging = "s3:PutObjectVersionTagging",

  /**
   * Write - Grants permission to create a new replication configuration or replace an existing one
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutReplicationConfiguration = "s3:PutReplicationConfiguration",

  /**
   * Write - Grants permission to create or update an Amazon S3 Storage Lens configuration
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutStorageLensConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutStorageLensConfiguration = "s3:PutStorageLensConfiguration",

  /**
   * Tagging - Grants permission to put or replace tags on an existing Amazon S3 Storage Lens configuration
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutStorageLensConfigurationTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.storagelensconfiguration `S3Resource.storagelensconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutStorageLensConfigurationTagging = "s3:PutStorageLensConfigurationTagging",

  /**
   * Write - Grants permission to replicate delete markers to the destination bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-repl-config-perm-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ReplicateDelete = "s3:ReplicateDelete",

  /**
   * Write - Grants permission to replicate objects and object tags to the destination bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-repl-config-perm-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-server-side-encryption`: Filters access by server-side encryption ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-server-side-encryption-aws-kms-key-id`: Filters access by AWS KMS customer managed CMK for server-side encryption ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html#require-sse-kms documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ReplicateObject = "s3:ReplicateObject",

  /**
   * Tagging - Grants permission to replicate object tags to the destination bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-repl-config-perm-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ReplicateTags = "s3:ReplicateTags",

  /**
   * Write - Grants permission to restore an archived copy of an object back into Amazon S3
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RestoreObject = "s3:RestoreObject",

  /**
   * Write - Grants permission to update the priority of an existing job
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobPriority.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.job `S3Resource.job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestJobPriority`: Filters access by priority range to creating new jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:ExistingJobPriority`: Filters access by priority range to cancelling existing jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:ExistingJobOperation`: Filters access by operation to updating the job priority ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateJobPriority = "s3:UpdateJobPriority",

  /**
   * Write - Grants permission to update the status for the specified job
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UpdateJobStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.job `S3Resource.job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingJobPriority`: Filters access by priority range to cancelling existing jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:ExistingJobOperation`: Filters access by operation to updating the job priority ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:JobSuspendedCause`: Filters access by a specific job suspended cause (for example, AWAITING_CONFIRMATION) to cancelling suspended jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateJobStatus = "s3:UpdateJobStatus",

  /**
   * * - Grant all s3 permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3Resource.object `S3Resource.object`} 
   * - {@link S3Resource.accesspoint `S3Resource.accesspoint`} 
   * - {@link S3Resource.objectlambdaaccesspoint `S3Resource.objectlambdaaccesspoint`} 
   * - {@link S3Resource.bucket `S3Resource.bucket`} 
   * - {@link S3Resource.multiregionaccesspoint `S3Resource.multiregionaccesspoint`} 
   * - {@link S3Resource.job `S3Resource.job`} 
   * - {@link S3Resource.storagelensconfiguration `S3Resource.storagelensconfiguration`} 
   * - {@link S3Resource.multiregionaccesspointrequestarn `S3Resource.multiregionaccesspointrequestarn`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:authType`: Filters access by authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ResourceAccount`: Filters access by the resource owner AWS account ID ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-object-resource-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:signatureAge`: Filters access by the age in milliseconds of the request signature ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:signatureversion`: Filters access by the version of AWS Signature used on the request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:TlsVersion`: Filters access by the TLS version used by the client ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html#example-object-tls-version documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:x-amz-content-sha256`: Filters access by unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestObjectTag/<key>`: Filters access by the tag keys and values to be added to objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestObjectTagKeys`: Filters access by the tag keys to be added to objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `s3:x-amz-acl`: Filters access by canned ACL in the request's x-amz-acl header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-copy-source`: Filters access by copy source bucket, prefix, or object in the copy object requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#putobject-limit-copy-source-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-full-control`: Filters access by x-amz-grant-full-control (full control) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read`: Filters access by x-amz-grant-read (read access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-read-acp`: Filters access by the x-amz-grant-read-acp (read permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write`: Filters access by the x-amz-grant-write (write access) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-grant-write-acp`: Filters access by the x-amz-grant-write-acp (write permissions for the ACL) header ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-metadata-directive`: Filters access by object metadata behavior (COPY or REPLACE) when objects are copied ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-server-side-encryption`: Filters access by server-side encryption ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-server-side-encryption-aws-kms-key-id`: Filters access by AWS KMS customer managed CMK for server-side encryption ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html#require-sse-kms documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-storage-class`: Filters access by storage class ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-howtoset documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-website-redirect-location`: Filters access by a specific website redirect location for buckets that are configured as static websites ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-page-redirect.html#page-redirect-using-rest-api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:object-lock-mode`: Filters access by object retention mode (COMPLIANCE or GOVERNANCE) ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-retention-modes documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:object-lock-retain-until-date`: Filters access by object retain-until date ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-retention-periods documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date `Date`})
   * - `s3:object-lock-remaining-retention-days`: Filters access by remaining object retention days ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-managing.html#object-lock-managing-retention-limits documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:object-lock-legal-hold`: Filters access by object legal hold status ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-legal-holds documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:locationconstraint`: Filters access by a specific Region ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#condition-key-bucket-ops-1 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:x-amz-object-ownership`: Filters access by Object Ownership ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/ensure-object-ownership.html#object-ownership-requiring-bucket-owner-enforced documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:RequestJobPriority`: Filters access by priority range to creating new jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:RequestJobOperation`: Filters access by operation to creating jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingJobPriority`: Filters access by priority range to cancelling existing jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:ExistingJobOperation`: Filters access by operation to updating the job priority ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:ExistingObjectTag/<key>`: Filters access by existing object tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:versionid`: Filters access by a specific object version ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#getobjectversion-limit-access-to-specific-version-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:delimiter`: Filters access by delimiter parameter ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/walkthrough1.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:max-keys`: Filters access by maximum number of keys returned in a ListBucket request ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#example-numeric-condition-operators documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3:prefix`: Filters access by key name prefix ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-keys.html#condition-key-bucket-ops-2 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3:JobSuspendedCause`: Filters access by a specific job suspended cause (for example, AWAITING_CONFIRMATION) to cancelling suspended jobs ({@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-job-tags-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "s3:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html
 */
export const S3Resource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html
   */
  accesspoint: (options: Partial<{partition: string, region: string, account: string, accessPointName: string}> = {}) => `arn:${options.partition || '*'}:s3:${options.region || '*'}:${options.account || '*'}:accesspoint/${options.accessPointName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingBucket.html
   */
  bucket: (options: Partial<{partition: string, bucketName: string}> = {}) => `arn:${options.partition || '*'}:s3:::${options.bucketName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingObjects.html
   */
  object: (options: Partial<{partition: string, bucketName: string, objectName: string}> = {}) => `arn:${options.partition || '*'}:s3:::${options.bucketName || '*'}/${options.objectName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-managing-jobs.html
   */
  job: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:s3:${options.region || '*'}:${options.account || '*'}:job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  storagelensconfiguration: (options: Partial<{partition: string, region: string, account: string, configId: string}> = {}) => `arn:${options.partition || '*'}:s3:${options.region || '*'}:${options.account || '*'}:storage-lens/${options.configId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html
   */
  objectlambdaaccesspoint: (options: Partial<{partition: string, region: string, account: string, accessPointName: string}> = {}) => `arn:${options.partition || '*'}:s3-object-lambda:${options.region || '*'}:${options.account || '*'}:accesspoint/${options.accessPointName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRequests.html
   */
  multiregionaccesspoint: (options: Partial<{partition: string, account: string, accessPointAlias: string}> = {}) => `arn:${options.partition || '*'}:s3::${options.account || '*'}:accesspoint/${options.accessPointAlias || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRequests.html
   */
  multiregionaccesspointrequestarn: (options: Partial<{partition: string, account: string, operation: string, token: string}> = {}) => `arn:${options.partition || '*'}:s3:us-west-2:${options.account || '*'}:async-request/mrap/${options.operation || '*'}/${options.token || '*'}`,
}

