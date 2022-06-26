/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudfront.html
 */
export enum CloudfrontAction {

  /**
   * Write - Grants permission to associate an alias to a CloudFront distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_AssociateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   */
  AssociateAlias = "cloudfront:AssociateAlias",

  /**
   * Write - Grants permission to add a new cache policy to CloudFront
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCachePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.cachePolicy `CloudfrontResource.cachePolicy`} 
   */
  CreateCachePolicy = "cloudfront:CreateCachePolicy",

  /**
   * Write - Grants permission to create a new CloudFront origin access identity
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateCloudFrontOriginAccessIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.originAccessIdentity `CloudfrontResource.originAccessIdentity`} 
   */
  CreateCloudFrontOriginAccessIdentity = "cloudfront:CreateCloudFrontOriginAccessIdentity",

  /**
   * Write - Grants permission to create a new web distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   */
  CreateDistribution = "cloudfront:CreateDistribution",

  /**
   * Write - Grants permission to create a new field-level encryption configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.fieldLevelEncryption `CloudfrontResource.fieldLevelEncryption`} 
   */
  CreateFieldLevelEncryptionConfig = "cloudfront:CreateFieldLevelEncryptionConfig",

  /**
   * Write - Grants permission to create a field-level encryption profile
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFieldLevelEncryptionProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.fieldLevelEncryptionProfile `CloudfrontResource.fieldLevelEncryptionProfile`} 
   */
  CreateFieldLevelEncryptionProfile = "cloudfront:CreateFieldLevelEncryptionProfile",

  /**
   * Write - Grants permission to create a CloudFront function
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateFunction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.function `CloudfrontResource.function`} 
   */
  CreateFunction = "cloudfront:CreateFunction",

  /**
   * Write - Grants permission to create a new invalidation batch request
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateInvalidation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   */
  CreateInvalidation = "cloudfront:CreateInvalidation",

  /**
   * Write - Grants permission to add a new key group to CloudFront
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateKeyGroup.html
   */
  CreateKeyGroup = "cloudfront:CreateKeyGroup",

  /**
   * Write - Grants permission to enable additional CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateMonitoringSubscription.html
   */
  CreateMonitoringSubscription = "cloudfront:CreateMonitoringSubscription",

  /**
   * Write - Grants permission to add a new origin request policy to CloudFront
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateOriginRequestPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.originRequestPolicy `CloudfrontResource.originRequestPolicy`} 
   */
  CreateOriginRequestPolicy = "cloudfront:CreateOriginRequestPolicy",

  /**
   * Write - Grants permission to add a new public key to CloudFront
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreatePublicKey.html
   */
  CreatePublicKey = "cloudfront:CreatePublicKey",

  /**
   * Write - Grants permission to create a real-time log configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateRealtimeLogConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.realtimeLogConfig `CloudfrontResource.realtimeLogConfig`} 
   */
  CreateRealtimeLogConfig = "cloudfront:CreateRealtimeLogConfig",

  /**
   * Write - Grants permission to add a new response headers policy to CloudFront
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateResponseHeadersPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.responseHeadersPolicy `CloudfrontResource.responseHeadersPolicy`} 
   */
  CreateResponseHeadersPolicy = "cloudfront:CreateResponseHeadersPolicy",

  /**
   * Write - Grants permission to create a new RTMP distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.streamingDistribution `CloudfrontResource.streamingDistribution`} 
   */
  CreateStreamingDistribution = "cloudfront:CreateStreamingDistribution",

  /**
   * Write - Grants permission to create a new RTMP distribution with tags
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateStreamingDistributionWithTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.streamingDistribution `CloudfrontResource.streamingDistribution`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateStreamingDistributionWithTags = "cloudfront:CreateStreamingDistributionWithTags",

  /**
   * Write - Grants permission to delete a cache policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCachePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.cachePolicy `CloudfrontResource.cachePolicy`} 
   */
  DeleteCachePolicy = "cloudfront:DeleteCachePolicy",

  /**
   * Write - Grants permission to delete a CloudFront origin access identity
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteCloudFrontOriginAccessIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.originAccessIdentity `CloudfrontResource.originAccessIdentity`} 
   */
  DeleteCloudFrontOriginAccessIdentity = "cloudfront:DeleteCloudFrontOriginAccessIdentity",

  /**
   * Write - Grants permission to delete a web distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   */
  DeleteDistribution = "cloudfront:DeleteDistribution",

  /**
   * Write - Grants permission to delete a field-level encryption configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.fieldLevelEncryption `CloudfrontResource.fieldLevelEncryption`} 
   */
  DeleteFieldLevelEncryptionConfig = "cloudfront:DeleteFieldLevelEncryptionConfig",

  /**
   * Write - Grants permission to delete a field-level encryption profile
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFieldLevelEncryptionProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.fieldLevelEncryptionProfile `CloudfrontResource.fieldLevelEncryptionProfile`} 
   */
  DeleteFieldLevelEncryptionProfile = "cloudfront:DeleteFieldLevelEncryptionProfile",

  /**
   * Write - Grants permission to delete a CloudFront function
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteFunction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.function `CloudfrontResource.function`} 
   */
  DeleteFunction = "cloudfront:DeleteFunction",

  /**
   * Write - Grants permission to delete a key group
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteKeyGroup.html
   */
  DeleteKeyGroup = "cloudfront:DeleteKeyGroup",

  /**
   * Write - Grants permission to disable additional CloudWatch metrics for the specified CloudFront distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteMonitoringSubscription.html
   */
  DeleteMonitoringSubscription = "cloudfront:DeleteMonitoringSubscription",

  /**
   * Write - Grants permission to delete an origin request policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteOriginRequestPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.originRequestPolicy `CloudfrontResource.originRequestPolicy`} 
   */
  DeleteOriginRequestPolicy = "cloudfront:DeleteOriginRequestPolicy",

  /**
   * Write - Grants permission to delete a public key from CloudFront
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeletePublicKey.html
   */
  DeletePublicKey = "cloudfront:DeletePublicKey",

  /**
   * Write - Grants permission to delete a real-time log configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteRealtimeLogConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.realtimeLogConfig `CloudfrontResource.realtimeLogConfig`} 
   */
  DeleteRealtimeLogConfig = "cloudfront:DeleteRealtimeLogConfig",

  /**
   * Write - Grants permission to delete a response headers policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteResponseHeadersPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.responseHeadersPolicy `CloudfrontResource.responseHeadersPolicy`} 
   */
  DeleteResponseHeadersPolicy = "cloudfront:DeleteResponseHeadersPolicy",

  /**
   * Write - Grants permission to delete an RTMP distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteStreamingDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.streamingDistribution `CloudfrontResource.streamingDistribution`} 
   */
  DeleteStreamingDistribution = "cloudfront:DeleteStreamingDistribution",

  /**
   * Read - Grants permission to get a CloudFront function summary
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DescribeFunction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.function `CloudfrontResource.function`} 
   */
  DescribeFunction = "cloudfront:DescribeFunction",

  /**
   * Read - Grants permission to get the cache policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.cachePolicy `CloudfrontResource.cachePolicy`} 
   */
  GetCachePolicy = "cloudfront:GetCachePolicy",

  /**
   * Read - Grants permission to get the cache policy configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCachePolicyConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.cachePolicy `CloudfrontResource.cachePolicy`} 
   */
  GetCachePolicyConfig = "cloudfront:GetCachePolicyConfig",

  /**
   * Read - Grants permission to get the information about a CloudFront origin access identity
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.originAccessIdentity `CloudfrontResource.originAccessIdentity`} 
   */
  GetCloudFrontOriginAccessIdentity = "cloudfront:GetCloudFrontOriginAccessIdentity",

  /**
   * Read - Grants permission to get the configuration information about a Cloudfront origin access identity
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetCloudFrontOriginAccessIdentityConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.originAccessIdentity `CloudfrontResource.originAccessIdentity`} 
   */
  GetCloudFrontOriginAccessIdentityConfig = "cloudfront:GetCloudFrontOriginAccessIdentityConfig",

  /**
   * Read - Grants permission to get the information about a web distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   */
  GetDistribution = "cloudfront:GetDistribution",

  /**
   * Read - Grants permission to get the configuration information about a distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   */
  GetDistributionConfig = "cloudfront:GetDistributionConfig",

  /**
   * Read - Grants permission to get the field-level encryption configuration information
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryption.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.fieldLevelEncryption `CloudfrontResource.fieldLevelEncryption`} 
   */
  GetFieldLevelEncryption = "cloudfront:GetFieldLevelEncryption",

  /**
   * Read - Grants permission to get the field-level encryption configuration information
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.fieldLevelEncryption `CloudfrontResource.fieldLevelEncryption`} 
   */
  GetFieldLevelEncryptionConfig = "cloudfront:GetFieldLevelEncryptionConfig",

  /**
   * Read - Grants permission to get the field-level encryption configuration information
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.fieldLevelEncryptionProfile `CloudfrontResource.fieldLevelEncryptionProfile`} 
   */
  GetFieldLevelEncryptionProfile = "cloudfront:GetFieldLevelEncryptionProfile",

  /**
   * Read - Grants permission to get the field-level encryption profile configuration information
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFieldLevelEncryptionProfileConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.fieldLevelEncryptionProfile `CloudfrontResource.fieldLevelEncryptionProfile`} 
   */
  GetFieldLevelEncryptionProfileConfig = "cloudfront:GetFieldLevelEncryptionProfileConfig",

  /**
   * Read - Grants permission to get a CloudFront function's code
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetFunction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.function `CloudfrontResource.function`} 
   */
  GetFunction = "cloudfront:GetFunction",

  /**
   * Read - Grants permission to get the information about an invalidation
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetInvalidation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   */
  GetInvalidation = "cloudfront:GetInvalidation",

  /**
   * Read - Grants permission to get a key group
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroup.html
   */
  GetKeyGroup = "cloudfront:GetKeyGroup",

  /**
   * Read - Grants permission to get a key group configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetKeyGroupConfig.html
   */
  GetKeyGroupConfig = "cloudfront:GetKeyGroupConfig",

  /**
   * Read - Grants permission to get information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetMonitoringSubscription.html
   */
  GetMonitoringSubscription = "cloudfront:GetMonitoringSubscription",

  /**
   * Read - Grants permission to get the origin request policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.originRequestPolicy `CloudfrontResource.originRequestPolicy`} 
   */
  GetOriginRequestPolicy = "cloudfront:GetOriginRequestPolicy",

  /**
   * Read - Grants permission to get the origin request policy configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetOriginRequestPolicyConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.originRequestPolicy `CloudfrontResource.originRequestPolicy`} 
   */
  GetOriginRequestPolicyConfig = "cloudfront:GetOriginRequestPolicyConfig",

  /**
   * Read - Grants permission to get the public key information
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKey.html
   */
  GetPublicKey = "cloudfront:GetPublicKey",

  /**
   * Read - Grants permission to get the public key configuration information
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetPublicKeyConfig.html
   */
  GetPublicKeyConfig = "cloudfront:GetPublicKeyConfig",

  /**
   * Read - Grants permission to get a real-time log configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetRealtimeLogConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.realtimeLogConfig `CloudfrontResource.realtimeLogConfig`} 
   */
  GetRealtimeLogConfig = "cloudfront:GetRealtimeLogConfig",

  /**
   * Read - Grants permission to get the response headers policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.responseHeadersPolicy `CloudfrontResource.responseHeadersPolicy`} 
   */
  GetResponseHeadersPolicy = "cloudfront:GetResponseHeadersPolicy",

  /**
   * Read - Grants permission to get the response headers policy configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetResponseHeadersPolicyConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.responseHeadersPolicy `CloudfrontResource.responseHeadersPolicy`} 
   */
  GetResponseHeadersPolicyConfig = "cloudfront:GetResponseHeadersPolicyConfig",

  /**
   * Read - Grants permission to get the information about an RTMP distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.streamingDistribution `CloudfrontResource.streamingDistribution`} 
   */
  GetStreamingDistribution = "cloudfront:GetStreamingDistribution",

  /**
   * Read - Grants permission to get the configuration information about a streaming distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetStreamingDistributionConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.streamingDistribution `CloudfrontResource.streamingDistribution`} 
   */
  GetStreamingDistributionConfig = "cloudfront:GetStreamingDistributionConfig",

  /**
   * List - Grants permission to list all cache policies that have been created in CloudFront for this account
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCachePolicies.html
   */
  ListCachePolicies = "cloudfront:ListCachePolicies",

  /**
   * List - Grants permission to list your CloudFront origin access identities
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListCloudFrontOriginAccessIdentities.html
   */
  ListCloudFrontOriginAccessIdentities = "cloudfront:ListCloudFrontOriginAccessIdentities",

  /**
   * List - Grants permission to list all aliases that conflict with the given alias in CloudFront
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListConflictingAliases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   */
  ListConflictingAliases = "cloudfront:ListConflictingAliases",

  /**
   * List - Grants permission to list the distributions associated with your AWS account
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributions.html
   */
  ListDistributions = "cloudfront:ListDistributions",

  /**
   * List - Grants permission to list distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByCachePolicyId.html
   */
  ListDistributionsByCachePolicyId = "cloudfront:ListDistributionsByCachePolicyId",

  /**
   * List - Grants permission to list distribution IDs for distributions that have a cache behavior that's associated with the specified key group
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByKeyGroup.html
   */
  ListDistributionsByKeyGroup = "cloudfront:ListDistributionsByKeyGroup",

  /**
   * List - Grants permission to list the distributions associated a Lambda function
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByLambdaFunction.html
   */
  ListDistributionsByLambdaFunction = "cloudfront:ListDistributionsByLambdaFunction",

  /**
   * List - Grants permission to list distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByOriginRequestPolicyId.html
   */
  ListDistributionsByOriginRequestPolicyId = "cloudfront:ListDistributionsByOriginRequestPolicyId",

  /**
   * List - Grants permission to get a list of distributions that have a cache behavior that’s associated with the specified real-time log configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByRealtimeLogConfig.html
   */
  ListDistributionsByRealtimeLogConfig = "cloudfront:ListDistributionsByRealtimeLogConfig",

  /**
   * List - Grants permission to list distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByResponseHeadersPolicyId.html
   */
  ListDistributionsByResponseHeadersPolicyId = "cloudfront:ListDistributionsByResponseHeadersPolicyId",

  /**
   * List - Grants permission to list the distributions associated with your AWS account with given AWS WAF web ACL
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html
   */
  ListDistributionsByWebACLId = "cloudfront:ListDistributionsByWebACLId",

  /**
   * List - Grants permission to list all field-level encryption configurations that have been created in CloudFront for this account
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionConfigs.html
   */
  ListFieldLevelEncryptionConfigs = "cloudfront:ListFieldLevelEncryptionConfigs",

  /**
   * List - Grants permission to list all field-level encryption profiles that have been created in CloudFront for this account
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFieldLevelEncryptionProfiles.html
   */
  ListFieldLevelEncryptionProfiles = "cloudfront:ListFieldLevelEncryptionProfiles",

  /**
   * List - Grants permission to get a list of CloudFront functions
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListFunctions.html
   */
  ListFunctions = "cloudfront:ListFunctions",

  /**
   * List - Grants permission to list your invalidation batches
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListInvalidations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   */
  ListInvalidations = "cloudfront:ListInvalidations",

  /**
   * List - Grants permission to list all key groups that have been created in CloudFront for this account
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListKeyGroups.html
   */
  ListKeyGroups = "cloudfront:ListKeyGroups",

  /**
   * List - Grants permission to list all origin request policies that have been created in CloudFront for this account
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListOriginRequestPolicies.html
   */
  ListOriginRequestPolicies = "cloudfront:ListOriginRequestPolicies",

  /**
   * List - Grants permission to list all public keys that have been added to CloudFront for this account
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListPublicKeys.html
   */
  ListPublicKeys = "cloudfront:ListPublicKeys",

  /**
   * List - Grants permission to get a list of real-time log configurations
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListRealtimeLogConfigs.html
   */
  ListRealtimeLogConfigs = "cloudfront:ListRealtimeLogConfigs",

  /**
   * List - Grants permission to list all response headers policies that have been created in CloudFront for this account
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListResponseHeadersPolicies.html
   */
  ListResponseHeadersPolicies = "cloudfront:ListResponseHeadersPolicies",

  /**
   * List - Grants permission to list your RTMP distributions
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListStreamingDistributions.html
   */
  ListStreamingDistributions = "cloudfront:ListStreamingDistributions",

  /**
   * Read - Grants permission to list tags for a CloudFront resource
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   * - {@link CloudfrontResource.streamingDistribution `CloudfrontResource.streamingDistribution`} 
   */
  ListTagsForResource = "cloudfront:ListTagsForResource",

  /**
   * Write - Grants permission to publish a CloudFront function
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_PublishFunction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.function `CloudfrontResource.function`} 
   */
  PublishFunction = "cloudfront:PublishFunction",

  /**
   * Tagging - Grants permission to add tags to a CloudFront resource
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   * - {@link CloudfrontResource.streamingDistribution `CloudfrontResource.streamingDistribution`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "cloudfront:TagResource",

  /**
   * Write - Grants permission to test a CloudFront function
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_TestFunction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.function `CloudfrontResource.function`} 
   */
  TestFunction = "cloudfront:TestFunction",

  /**
   * Tagging - Grants permission to remove tags from a CloudFront resource
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   * - {@link CloudfrontResource.streamingDistribution `CloudfrontResource.streamingDistribution`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "cloudfront:UntagResource",

  /**
   * Write - Grants permission to update a cache policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCachePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.cachePolicy `CloudfrontResource.cachePolicy`} 
   */
  UpdateCachePolicy = "cloudfront:UpdateCachePolicy",

  /**
   * Write - Grants permission to set the configuration for a CloudFront origin access identity
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateCloudFrontOriginAccessIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.originAccessIdentity `CloudfrontResource.originAccessIdentity`} 
   */
  UpdateCloudFrontOriginAccessIdentity = "cloudfront:UpdateCloudFrontOriginAccessIdentity",

  /**
   * Write - Grants permission to update the configuration for a web distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   */
  UpdateDistribution = "cloudfront:UpdateDistribution",

  /**
   * Write - Grants permission to update a field-level encryption configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.fieldLevelEncryption `CloudfrontResource.fieldLevelEncryption`} 
   */
  UpdateFieldLevelEncryptionConfig = "cloudfront:UpdateFieldLevelEncryptionConfig",

  /**
   * Write - Grants permission to update a field-level encryption profile
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFieldLevelEncryptionProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.fieldLevelEncryptionProfile `CloudfrontResource.fieldLevelEncryptionProfile`} 
   */
  UpdateFieldLevelEncryptionProfile = "cloudfront:UpdateFieldLevelEncryptionProfile",

  /**
   * Write - Grants permission to update a CloudFront function
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateFunction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.function `CloudfrontResource.function`} 
   */
  UpdateFunction = "cloudfront:UpdateFunction",

  /**
   * Write - Grants permission to update a key group
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateKeyGroup.html
   */
  UpdateKeyGroup = "cloudfront:UpdateKeyGroup",

  /**
   * Write - Grants permission to update an origin request policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateOriginRequestPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.originRequestPolicy `CloudfrontResource.originRequestPolicy`} 
   */
  UpdateOriginRequestPolicy = "cloudfront:UpdateOriginRequestPolicy",

  /**
   * Write - Grants permission to update public key information
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdatePublicKey.html
   */
  UpdatePublicKey = "cloudfront:UpdatePublicKey",

  /**
   * Write - Grants permission to update a real-time log configuration
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateRealtimeLogConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.realtimeLogConfig `CloudfrontResource.realtimeLogConfig`} 
   */
  UpdateRealtimeLogConfig = "cloudfront:UpdateRealtimeLogConfig",

  /**
   * Write - Grants permission to update a response headers policy
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateResponseHeadersPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.responseHeadersPolicy `CloudfrontResource.responseHeadersPolicy`} 
   */
  UpdateResponseHeadersPolicy = "cloudfront:UpdateResponseHeadersPolicy",

  /**
   * Write - Grants permission to update the configuration for an RTMP distribution
   * @see https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateStreamingDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.streamingDistribution `CloudfrontResource.streamingDistribution`} 
   */
  UpdateStreamingDistribution = "cloudfront:UpdateStreamingDistribution",

  /**
   * * - Grant all cloudfront permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudfront.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudfrontResource.distribution `CloudfrontResource.distribution`} 
   * - {@link CloudfrontResource.cachePolicy `CloudfrontResource.cachePolicy`} 
   * - {@link CloudfrontResource.originAccessIdentity `CloudfrontResource.originAccessIdentity`} 
   * - {@link CloudfrontResource.fieldLevelEncryption `CloudfrontResource.fieldLevelEncryption`} 
   * - {@link CloudfrontResource.fieldLevelEncryptionProfile `CloudfrontResource.fieldLevelEncryptionProfile`} 
   * - {@link CloudfrontResource.function `CloudfrontResource.function`} 
   * - {@link CloudfrontResource.originRequestPolicy `CloudfrontResource.originRequestPolicy`} 
   * - {@link CloudfrontResource.realtimeLogConfig `CloudfrontResource.realtimeLogConfig`} 
   * - {@link CloudfrontResource.responseHeadersPolicy `CloudfrontResource.responseHeadersPolicy`} 
   * - {@link CloudfrontResource.streamingDistribution `CloudfrontResource.streamingDistribution`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "cloudfront:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudfront.html
 */
export const CloudfrontResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  distribution: (options: Partial<{partition: string, account: string, distributionId: string}> = {}) => `arn:${options.partition || '*'}:cloudfront::${options.account || '*'}:distribution/${options.distributionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  streamingDistribution: (options: Partial<{partition: string, account: string, distributionId: string}> = {}) => `arn:${options.partition || '*'}:cloudfront::${options.account || '*'}:streaming-distribution/${options.distributionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#private-content-restricting-access-to-s3-overview
   */
  originAccessIdentity: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:cloudfront::${options.account || '*'}:origin-access-identity/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html
   */
  fieldLevelEncryption: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:cloudfront::${options.account || '*'}:field-level-encryption/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html
   */
  fieldLevelEncryptionProfile: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:cloudfront::${options.account || '*'}:field-level-encryption-profile/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html
   */
  cachePolicy: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:cloudfront::${options.account || '*'}:cache-policy/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html
   */
  originRequestPolicy: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:cloudfront::${options.account || '*'}:origin-request-policy/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html
   */
  realtimeLogConfig: (options: Partial<{partition: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:cloudfront::${options.account || '*'}:realtime-log-config/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html
   */
  function: (options: Partial<{partition: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:cloudfront::${options.account || '*'}:function/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html
   */
  responseHeadersPolicy: (options: Partial<{partition: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:cloudfront::${options.account || '*'}:response-headers-policy/${options.id || '*'}`,
}

