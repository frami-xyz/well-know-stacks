/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistrypublic.html
 */
export enum EcrPublicAction {

  /**
   * Read - Grants permission to check the availability of multiple image layers in a specified registry and repository
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_BatchCheckLayerAvailability.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  BatchCheckLayerAvailability = "ecr-public:BatchCheckLayerAvailability",

  /**
   * Write - Grants permission to delete a list of specified images within a specified repository
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_BatchDeleteImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  BatchDeleteImage = "ecr-public:BatchDeleteImage",

  /**
   * Write - Grants permission to inform Amazon ECR that the image layer upload for a specified registry, repository name, and upload ID, has completed
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_CompleteLayerUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  CompleteLayerUpload = "ecr-public:CompleteLayerUpload",

  /**
   * Write - Grants permission to create an image repository
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_CreateRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters create requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRepository = "ecr-public:CreateRepository",

  /**
   * Write - Grants permission to delete an existing image repository
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DeleteRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  DeleteRepository = "ecr-public:DeleteRepository",

  /**
   * Write - Grants permission to delete the repository policy from a specified repository
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DeleteRepositoryPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  DeleteRepositoryPolicy = "ecr-public:DeleteRepositoryPolicy",

  /**
   * List - Grants permission to describe all the image tags for a given repository
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeImageTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  DescribeImageTags = "ecr-public:DescribeImageTags",

  /**
   * Read - Grants permission to get metadata about the images in a repository, including image size, image tags, and creation date
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeImages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  DescribeImages = "ecr-public:DescribeImages",

  /**
   * List - Grants permission to retrieve the catalog data associated with a registry
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeRegistries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.registry `EcrPublicResource.registry`} 
   */
  DescribeRegistries = "ecr-public:DescribeRegistries",

  /**
   * List - Grants permission to describe image repositories in a registry
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeRepositories.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  DescribeRepositories = "ecr-public:DescribeRepositories",

  /**
   * Read - Grants permission to retrieve a token that is valid for a specified registry for 12 hours
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetAuthorizationToken.html
   */
  GetAuthorizationToken = "ecr-public:GetAuthorizationToken",

  /**
   * Read - Grants permission to retrieve the catalog data associated with a registry
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRegistryCatalogData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.registry `EcrPublicResource.registry`} 
   */
  GetRegistryCatalogData = "ecr-public:GetRegistryCatalogData",

  /**
   * Read - Grants permission to retrieve the catalog data associated with a repository
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRepositoryCatalogData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  GetRepositoryCatalogData = "ecr-public:GetRepositoryCatalogData",

  /**
   * Read - Grants permission to retrieve the repository policy for a specified repository
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRepositoryPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  GetRepositoryPolicy = "ecr-public:GetRepositoryPolicy",

  /**
   * Write - Grants permission to notify Amazon ECR that you intend to upload an image layer
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_InitiateLayerUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  InitiateLayerUpload = "ecr-public:InitiateLayerUpload",

  /**
   * Read - Grants permission to list the tags for an Amazon ECR resource
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  ListTagsForResource = "ecr-public:ListTagsForResource",

  /**
   * Write - Grants permission to create or update the image manifest associated with an image
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  PutImage = "ecr-public:PutImage",

  /**
   * Write - Grants permission to create and update the catalog data associated with a registry
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutRegistryCatalogData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.registry `EcrPublicResource.registry`} 
   */
  PutRegistryCatalogData = "ecr-public:PutRegistryCatalogData",

  /**
   * Write - Grants permission to update the catalog data associated with a repository
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutRepositoryCatalogData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  PutRepositoryCatalogData = "ecr-public:PutRepositoryCatalogData",

  /**
   * PermissionsManagement - Grants permission to apply a repository policy on a specified repository to control access permissions
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_SetRepositoryPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  SetRepositoryPolicy = "ecr-public:SetRepositoryPolicy",

  /**
   * Tagging - Grants permission to tag an Amazon ECR resource
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters create requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "ecr-public:TagResource",

  /**
   * Tagging - Grants permission to untag an Amazon ECR resource
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters create requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "ecr-public:UntagResource",

  /**
   * Write - Grants permission to upload an image layer part to Amazon ECR Public
   * @see https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_UploadLayerPart.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   */
  UploadLayerPart = "ecr-public:UploadLayerPart",

  /**
   * * - Grant all ecr-public permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistrypublic.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcrPublicResource.repository `EcrPublicResource.repository`} 
   * - {@link EcrPublicResource.registry `EcrPublicResource.registry`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters create requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "ecr-public:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistrypublic.html
 */
export const EcrPublicResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonECR/latest/userguide/iam-policy-structure.html#ECR-Public_ARN_Format
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecr-public:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/AmazonECR/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  repository: (options: Partial<{partition: string, account: string, repositoryName: string}> = {}) => `arn:${options.partition || '*'}:ecr-public::${options.account || '*'}:repository/${options.repositoryName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonECR/latest/userguide/iam-policy-structure.html#ECR-Public_ARN_Format
   */
  registry: (options: Partial<{partition: string, account: string, registryId: string}> = {}) => `arn:${options.partition || '*'}:ecr-public::${options.account || '*'}:registry/${options.registryId || '*'}`,
}

