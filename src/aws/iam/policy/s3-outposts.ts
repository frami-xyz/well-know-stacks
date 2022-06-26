/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html
 */
export enum S3OutpostsAction {

  /**
   * Write - Grants permission to abort a multipart upload
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.object `S3OutpostsResource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AbortMultipartUpload = "s3-outposts:AbortMultipartUpload",

  /**
   * Write - Grants permission to create a new access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.accesspoint `S3OutpostsResource.accesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAccessPoint = "s3-outposts:CreateAccessPoint",

  /**
   * Write - Grants permission to create a new bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateBucket.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateBucket = "s3-outposts:CreateBucket",

  /**
   * Write - Grants permission to create a new endpoint
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.endpoint `S3OutpostsResource.endpoint`} 
   */
  CreateEndpoint = "s3-outposts:CreateEndpoint",

  /**
   * Write - Grants permission to delete the access point named in the URI
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.accesspoint `S3OutpostsResource.accesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAccessPoint = "s3-outposts:DeleteAccessPoint",

  /**
   * Permissions management - Grants permission to delete the policy on a specified access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.accesspoint `S3OutpostsResource.accesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAccessPointPolicy = "s3-outposts:DeleteAccessPointPolicy",

  /**
   * Write - Grants permission to delete the bucket named in the URI
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucket.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteBucket = "s3-outposts:DeleteBucket",

  /**
   * Permissions management - Grants permission to delete the policy on a specified bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteBucketPolicy = "s3-outposts:DeleteBucketPolicy",

  /**
   * Write - Grants permission to delete the endpoint named in the URI
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.endpoint `S3OutpostsResource.endpoint`} 
   */
  DeleteEndpoint = "s3-outposts:DeleteEndpoint",

  /**
   * Write - Grants permission to remove the null version of an object and insert a delete marker, which becomes the current version of the object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.object `S3OutpostsResource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteObject = "s3-outposts:DeleteObject",

  /**
   * Tagging - Grants permission to use the tagging subresource to remove the entire tag set from the specified object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.object `S3OutpostsResource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:ExistingObjectTag/<key>`: Filters access by requiring that an existing object tag has a specific tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteObjectTagging = "s3-outposts:DeleteObjectTagging",

  /**
   * Read - Grants permission to return configuration information about the specified access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccessPoint = "s3-outposts:GetAccessPoint",

  /**
   * Read - Grants permission to returns the access point policy associated with the specified access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.accesspoint `S3OutpostsResource.accesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccessPointPolicy = "s3-outposts:GetAccessPointPolicy",

  /**
   * Read - Grants permission to return the bucket configuration associated with an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucket.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucket = "s3-outposts:GetBucket",

  /**
   * Read - Grants permission to return the policy of the specified bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketPolicy = "s3-outposts:GetBucketPolicy",

  /**
   * Read - Grants permission to return the tag set associated with an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBucketTagging = "s3-outposts:GetBucketTagging",

  /**
   * Read - Grants permission to return the lifecycle configuration information set on an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetLifecycleConfiguration = "s3-outposts:GetLifecycleConfiguration",

  /**
   * Read - Grants permission to retrieve objects from Amazon S3
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.object `S3OutpostsResource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:ExistingObjectTag/<key>`: Filters access by requiring that an existing object tag has a specific tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObject = "s3-outposts:GetObject",

  /**
   * Read - Grants permission to return the tag set of an object
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.object `S3OutpostsResource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:ExistingObjectTag/<key>`: Filters access by requiring that an existing object tag has a specific tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetObjectTagging = "s3-outposts:GetObjectTagging",

  /**
   * List - Grants permission to list access points
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListAccessPoints = "s3-outposts:ListAccessPoints",

  /**
   * List - Grants permission to list some or all of the objects in an Amazon S3 bucket (up to 1000)
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.accesspoint `S3OutpostsResource.accesspoint`} 
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:delimiter`: Filters access by requiring the delimiter parameter ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:max-keys`: Filters access by limiting the maximum number of keys returned in a ListBucket request ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#example-numeric-condition-operators documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:prefix`: Filters access by key name prefix ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#condition-key-bucket-ops-2 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListBucket = "s3-outposts:ListBucket",

  /**
   * List - Grants permission to list in-progress multipart uploads
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.accesspoint `S3OutpostsResource.accesspoint`} 
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListBucketMultipartUploads = "s3-outposts:ListBucketMultipartUploads",

  /**
   * List - Grants permission to list endpoints
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html
   */
  ListEndpoints = "s3-outposts:ListEndpoints",

  /**
   * List - Grants permission to list the parts that have been uploaded for a specific multipart upload
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.object `S3OutpostsResource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListMultipartUploadParts = "s3-outposts:ListMultipartUploadParts",

  /**
   * List - Grants permission to list all buckets owned by the authenticated sender of the request
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListRegionalBuckets = "s3-outposts:ListRegionalBuckets",

  /**
   * List - Grants permission to list shared endpoints
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListSharedEndpoints.html
   */
  ListSharedEndpoints = "s3-outposts:ListSharedEndpoints",

  /**
   * Permissions management - Grants permission to associate an access policy with a specified access point
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.accesspoint `S3OutpostsResource.accesspoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutAccessPointPolicy = "s3-outposts:PutAccessPointPolicy",

  /**
   * Permissions management - Grants permission to add or replace a bucket policy on a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketPolicy = "s3-outposts:PutBucketPolicy",

  /**
   * Tagging - Grants permission to add a set of tags to an existing Amazon S3 bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBucketTagging = "s3-outposts:PutBucketTagging",

  /**
   * Write - Grants permission to create a new lifecycle configuration for the bucket or replace an existing lifecycle configuration
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutLifecycleConfiguration = "s3-outposts:PutLifecycleConfiguration",

  /**
   * Write - Grants permission to add an object to a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.object `S3OutpostsResource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:RequestObjectTag/<key>`: Filters access by restricting the tag keys and values allowed on objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:RequestObjectTagKeys`: Filters access by restricting the tag keys allowed on objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-acl`: Filters access by requiring the x-amz-acl header with a specific canned ACL in a request ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-copy-source`: Filters access by restricting the copy source to a specific bucket, prefix, or object ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#putobject-limit-copy-source-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-metadata-directive`: Filters access by enabling enforcement of object metadata behavior (COPY or REPLACE) when objects are copied ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-server-side-encryption`: Filters access by requiring server-side encryption ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-storage-class`: Filters access by storage class ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-howtoset documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutObject = "s3-outposts:PutObject",

  /**
   * Permissions management - Grants permission to set the access control list (ACL) permissions for an object that already exists in a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.object `S3OutpostsResource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:ExistingObjectTag/<key>`: Filters access by requiring that an existing object tag has a specific tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-acl`: Filters access by requiring the x-amz-acl header with a specific canned ACL in a request ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-storage-class`: Filters access by storage class ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-howtoset documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutObjectAcl = "s3-outposts:PutObjectAcl",

  /**
   * Tagging - Grants permission to set the supplied tag-set to an object that already exists in a bucket
   * @see https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.object `S3OutpostsResource.object`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:ExistingObjectTag/<key>`: Filters access by requiring that an existing object tag has a specific tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:RequestObjectTag/<key>`: Filters access by restricting the tag keys and values allowed on objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:RequestObjectTagKeys`: Filters access by restricting the tag keys allowed on objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutObjectTagging = "s3-outposts:PutObjectTagging",

  /**
   * * - Grant all s3-outposts permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link S3OutpostsResource.object `S3OutpostsResource.object`} 
   * - {@link S3OutpostsResource.accesspoint `S3OutpostsResource.accesspoint`} 
   * - {@link S3OutpostsResource.bucket `S3OutpostsResource.bucket`} 
   * - {@link S3OutpostsResource.endpoint `S3OutpostsResource.endpoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `s3-outposts:DataAccessPointArn`: Filters access by an access point Amazon Resource Name (ARN) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:DataAccessPointAccount`: Filters access by the AWS Account ID that owns the access point ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:AccessPointNetworkOrigin`: Filters access by the network origin (Internet or VPC) ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/creating-access-points.html#access-points-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:authType`: Filters access by restricting incoming requests to a specific authentication method ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:signatureAge`: Filters access by identifying the length of time, in milliseconds, that a signature is valid in an authenticated request ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:signatureversion`: Filters access by identifying the version of AWS Signature that is supported for authenticated requests ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-content-sha256`: Filters access by disallowing unsigned content in your bucket ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/bucket-policy-s3-sigv4-conditions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:ExistingObjectTag/<key>`: Filters access by requiring that an existing object tag has a specific tag key and value ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:delimiter`: Filters access by requiring the delimiter parameter ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:max-keys`: Filters access by limiting the maximum number of keys returned in a ListBucket request ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#example-numeric-condition-operators documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `s3-outposts:prefix`: Filters access by key name prefix ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#condition-key-bucket-ops-2 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:RequestObjectTag/<key>`: Filters access by restricting the tag keys and values allowed on objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:RequestObjectTagKeys`: Filters access by restricting the tag keys allowed on objects ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html#tagging-and-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-acl`: Filters access by requiring the x-amz-acl header with a specific canned ACL in a request ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-copy-source`: Filters access by restricting the copy source to a specific bucket, prefix, or object ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/amazon-s3-policy-keys.html#putobject-limit-copy-source-3 documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-metadata-directive`: Filters access by enabling enforcement of object metadata behavior (COPY or REPLACE) when objects are copied ({@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-server-side-encryption`: Filters access by requiring server-side encryption ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `s3-outposts:x-amz-storage-class`: Filters access by storage class ({@link https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-howtoset documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "s3-outposts:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3onoutposts.html
 */
export const S3OutpostsResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html
   */
  accesspoint: (options: Partial<{partition: string, region: string, account: string, outpostId: string, accessPointName: string}> = {}) => `arn:${options.partition || '*'}:s3-outposts:${options.region || '*'}:${options.account || '*'}:outpost/${options.outpostId || '*'}/accesspoint/${options.accessPointName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html
   */
  bucket: (options: Partial<{partition: string, region: string, account: string, outpostId: string, bucketName: string}> = {}) => `arn:${options.partition || '*'}:s3-outposts:${options.region || '*'}:${options.account || '*'}:outpost/${options.outpostId || '*'}/bucket/${options.bucketName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/outposts-endpoints.html
   */
  endpoint: (options: Partial<{partition: string, region: string, account: string, outpostId: string, endpointId: string}> = {}) => `arn:${options.partition || '*'}:s3-outposts:${options.region || '*'}:${options.account || '*'}:outpost/${options.outpostId || '*'}/endpoint/${options.endpointId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html
   */
  object: (options: Partial<{partition: string, region: string, account: string, outpostId: string, bucketName: string, objectName: string}> = {}) => `arn:${options.partition || '*'}:s3-outposts:${options.region || '*'}:${options.account || '*'}:outpost/${options.outpostId || '*'}/bucket/${options.bucketName || '*'}/object/${options.objectName || '*'}`,
}

