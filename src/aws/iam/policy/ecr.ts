/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistry.html
 */
export enum EcrAction {

  /**
   * Read - Grants permission to check the availability of multiple image layers in a specified registry and repository
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchCheckLayerAvailability.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  BatchCheckLayerAvailability = "ecr:BatchCheckLayerAvailability",

  /**
   * Write - Grants permission to delete a list of specified images within a specified repository
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchDeleteImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  BatchDeleteImage = "ecr:BatchDeleteImage",

  /**
   * Read - Grants permission to get detailed information for specified images within a specified repository
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchGetImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  BatchGetImage = "ecr:BatchGetImage",

  /**
   * Read - Grants permission to retrieve repository scanning configuration for a list of repositories
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchGetRepositoryScanningConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  BatchGetRepositoryScanningConfiguration = "ecr:BatchGetRepositoryScanningConfiguration",

  /**
   * Write - Grants permission to retrieve the image from the upstream registry and import it to your private registry
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchImportUpstreamImage.html
   */
  BatchImportUpstreamImage = "ecr:BatchImportUpstreamImage",

  /**
   * Write - Grants permission to inform Amazon ECR that the image layer upload for a specified registry, repository name, and upload ID, has completed
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CompleteLayerUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  CompleteLayerUpload = "ecr:CompleteLayerUpload",

  /**
   * Write - Grants permission to create new pull-through cache rule
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CreatePullThroughCacheRule.html
   */
  CreatePullThroughCacheRule = "ecr:CreatePullThroughCacheRule",

  /**
   * Write - Grants permission to create an image repository
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CreateRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRepository = "ecr:CreateRepository",

  /**
   * Write - Grants permission to delete the specified lifecycle policy
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteLifecyclePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  DeleteLifecyclePolicy = "ecr:DeleteLifecyclePolicy",

  /**
   * Write - Grants permission to delete the pull-through cache rule
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeletePullThroughCacheRule.html
   */
  DeletePullThroughCacheRule = "ecr:DeletePullThroughCacheRule",

  /**
   * PermissionsManagement - Grants permission to delete the registry policy
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRegistryPolicy.html
   */
  DeleteRegistryPolicy = "ecr:DeleteRegistryPolicy",

  /**
   * Write - Grants permission to delete an existing image repository
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  DeleteRepository = "ecr:DeleteRepository",

  /**
   * PermissionsManagement - Grants permission to delete the repository policy from a specified repository
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepositoryPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  DeleteRepositoryPolicy = "ecr:DeleteRepositoryPolicy",

  /**
   * Read - Grants permission to retrieve replication status about an image in a registry, including failure reason if replication fails
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImageReplicationStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  DescribeImageReplicationStatus = "ecr:DescribeImageReplicationStatus",

  /**
   * Read - Grants permission to describe the image scan findings for the specified image
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImageScanFindings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  DescribeImageScanFindings = "ecr:DescribeImageScanFindings",

  /**
   * List - Grants permission to get metadata about the images in a repository, including image size, image tags, and creation date
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  DescribeImages = "ecr:DescribeImages",

  /**
   * List - Grants permission to describe the pull-through cache rules
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribePullThroughCacheRules.html
   */
  DescribePullThroughCacheRules = "ecr:DescribePullThroughCacheRules",

  /**
   * Read - Grants permission to describe the registry settings
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeRegistry.html
   */
  DescribeRegistry = "ecr:DescribeRegistry",

  /**
   * Read - Grants permission to describe image repositories in a registry
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeRepositories.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  DescribeRepositories = "ecr:DescribeRepositories",

  /**
   * Read - Grants permission to retrieve a token that is valid for a specified registry for 12 hours
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetAuthorizationToken.html
   */
  GetAuthorizationToken = "ecr:GetAuthorizationToken",

  /**
   * Read - Grants permission to retrieve the download URL corresponding to an image layer
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetDownloadUrlForLayer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  GetDownloadUrlForLayer = "ecr:GetDownloadUrlForLayer",

  /**
   * Read - Grants permission to retrieve the specified lifecycle policy
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  GetLifecyclePolicy = "ecr:GetLifecyclePolicy",

  /**
   * Read - Grants permission to retrieve the results of the specified lifecycle policy preview request
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicyPreview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  GetLifecyclePolicyPreview = "ecr:GetLifecyclePolicyPreview",

  /**
   * Read - Grants permission to retrieve the registry policy
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetRegistryPolicy.html
   */
  GetRegistryPolicy = "ecr:GetRegistryPolicy",

  /**
   * Read - Grants permission to retrieve registry scanning configuration
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetRegistryScanningConfiguration.html
   */
  GetRegistryScanningConfiguration = "ecr:GetRegistryScanningConfiguration",

  /**
   * Read - Grants permission to retrieve the repository policy for a specified repository
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetRepositoryPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  GetRepositoryPolicy = "ecr:GetRepositoryPolicy",

  /**
   * Write - Grants permission to notify Amazon ECR that you intend to upload an image layer
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_InitiateLayerUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  InitiateLayerUpload = "ecr:InitiateLayerUpload",

  /**
   * List - Grants permission to list all the image IDs for a given repository
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListImages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  ListImages = "ecr:ListImages",

  /**
   * Read - Grants permission to list the tags for an Amazon ECR resource
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListTagsForResource = "ecr:ListTagsForResource",

  /**
   * Write - Grants permission to create or update the image manifest associated with an image
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  PutImage = "ecr:PutImage",

  /**
   * Write - Grants permission to update the image scanning configuration for a repository
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageScanningConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  PutImageScanningConfiguration = "ecr:PutImageScanningConfiguration",

  /**
   * Write - Grants permission to update the image tag mutability settings for a repository
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageTagMutability.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  PutImageTagMutability = "ecr:PutImageTagMutability",

  /**
   * Write - Grants permission to create or update a lifecycle policy
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutLifecyclePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  PutLifecyclePolicy = "ecr:PutLifecyclePolicy",

  /**
   * PermissionsManagement - Grants permission to update the registry policy
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutRegistryPolicy.html
   */
  PutRegistryPolicy = "ecr:PutRegistryPolicy",

  /**
   * Write - Grants permission to update registry scanning configuration
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutRegistryScanningConfiguration.html
   */
  PutRegistryScanningConfiguration = "ecr:PutRegistryScanningConfiguration",

  /**
   * Write - Grants permission to update the replication configuration for the registry
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutReplicationConfiguration.html
   */
  PutReplicationConfiguration = "ecr:PutReplicationConfiguration",

  /**
   * Write - Grants permission to replicate images to the destination registry
   * @see https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  ReplicateImage = "ecr:ReplicateImage",

  /**
   * PermissionsManagement - Grants permission to apply a repository policy on a specified repository to control access permissions
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_SetRepositoryPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  SetRepositoryPolicy = "ecr:SetRepositoryPolicy",

  /**
   * Write - Grants permission to start an image scan
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartImageScan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  StartImageScan = "ecr:StartImageScan",

  /**
   * Write - Grants permission to start a preview of the specified lifecycle policy
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartLifecyclePolicyPreview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  StartLifecyclePolicyPreview = "ecr:StartLifecyclePolicyPreview",

  /**
   * Tagging - Grants permission to tag an Amazon ECR resource
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "ecr:TagResource",

  /**
   * Tagging - Grants permission to untag an Amazon ECR resource
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "ecr:UntagResource",

  /**
   * Write - Grants permission to upload an image layer part to Amazon ECR
   * @see https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UploadLayerPart.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   */
  UploadLayerPart = "ecr:UploadLayerPart",

  /**
   * * - Grant all ecr permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistry.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrResource.repository `EcrResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "ecr:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistry.html
 */
export const EcrResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecr:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/AmazonECR/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  repository: (options: Partial<{partition: string, region: string, account: string, repositoryName: string}> = {}) => `arn:${options.partition || '*'}:ecr:${options.region || '*'}:${options.account || '*'}:repository/${options.repositoryName || '*'}`,
}

