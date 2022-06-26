/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2imagebuilder.html
 */
export enum ImagebuilderAction {

  /**
   * Write - Grants permission to cancel an image creation
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CancelImageCreation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   */
  CancelImageCreation = "imagebuilder:CancelImageCreation",

  /**
   * Write - Grants permission to create a new component
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.component `ImagebuilderResource.component`} 
   * - {@link ImagebuilderResource.kmsKey `ImagebuilderResource.kmsKey`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateComponent = "imagebuilder:CreateComponent",

  /**
   * Write - Grants permission to create a new Container Recipe
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateContainerRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.containerRecipe `ImagebuilderResource.containerRecipe`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateContainerRecipe = "imagebuilder:CreateContainerRecipe",

  /**
   * Write - Grants permission to create a new distribution configuration
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateDistributionConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.distributionConfiguration `ImagebuilderResource.distributionConfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDistributionConfiguration = "imagebuilder:CreateDistributionConfiguration",

  /**
   * Write - Grants permission to create a new image
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateImage = "imagebuilder:CreateImage",

  /**
   * Write - Grants permission to create a new image pipeline
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImagePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imagePipeline `ImagebuilderResource.imagePipeline`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateImagePipeline = "imagebuilder:CreateImagePipeline",

  /**
   * Write - Grants permission to create a new Image Recipe
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImageRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imageRecipe `ImagebuilderResource.imageRecipe`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateImageRecipe = "imagebuilder:CreateImageRecipe",

  /**
   * Write - Grants permission to create a new infrastructure configuration
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateInfrastructureConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.infrastructureConfiguration `ImagebuilderResource.infrastructureConfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `imagebuilder:CreatedResourceTagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-createdresourcetagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `imagebuilder:CreatedResourceTag/<key>`: Filters access by the tag key-value pairs attached to the resource created by Image Builder ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-createdresourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `imagebuilder:Ec2MetadataHttpTokens`: Filters access by the EC2 Instance Metadata HTTP Token Requirement specified in the request ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-ec2metadatahttptokens documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `imagebuilder:StatusTopicArn`: Filters access by the SNS Topic Arn in the request to which terminal state notifications will be published ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-statustopicarn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateInfrastructureConfiguration = "imagebuilder:CreateInfrastructureConfiguration",

  /**
   * Write - Grants permission to delete a component
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.component `ImagebuilderResource.component`} 
   */
  DeleteComponent = "imagebuilder:DeleteComponent",

  /**
   * Write - Grants permission to delete a container recipe
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteContainerRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.containerRecipe `ImagebuilderResource.containerRecipe`} 
   */
  DeleteContainerRecipe = "imagebuilder:DeleteContainerRecipe",

  /**
   * Write - Grants permission to delete a distribution configuration
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteDistributionConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.distributionConfiguration `ImagebuilderResource.distributionConfiguration`} 
   */
  DeleteDistributionConfiguration = "imagebuilder:DeleteDistributionConfiguration",

  /**
   * Write - Grants permission to delete an image
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   */
  DeleteImage = "imagebuilder:DeleteImage",

  /**
   * Write - Grants permission to delete an image pipeline
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImagePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imagePipeline `ImagebuilderResource.imagePipeline`} 
   */
  DeleteImagePipeline = "imagebuilder:DeleteImagePipeline",

  /**
   * Write - Grants permission to delete an image recipe
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImageRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imageRecipe `ImagebuilderResource.imageRecipe`} 
   */
  DeleteImageRecipe = "imagebuilder:DeleteImageRecipe",

  /**
   * Write - Grants permission to delete an infrastructure configuration
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteInfrastructureConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.infrastructureConfiguration `ImagebuilderResource.infrastructureConfiguration`} 
   */
  DeleteInfrastructureConfiguration = "imagebuilder:DeleteInfrastructureConfiguration",

  /**
   * Read - Grants permission to view details about a component
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.component `ImagebuilderResource.component`} 
   */
  GetComponent = "imagebuilder:GetComponent",

  /**
   * Read - Grants permission to view the resource policy associated with a component
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponentPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.component `ImagebuilderResource.component`} 
   */
  GetComponentPolicy = "imagebuilder:GetComponentPolicy",

  /**
   * Read - Grants permission to view details about a container recipe
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetContainerRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.containerRecipe `ImagebuilderResource.containerRecipe`} 
   */
  GetContainerRecipe = "imagebuilder:GetContainerRecipe",

  /**
   * Read - Grants permission to view the resource policy associated with a container recipe
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetContainerRecipePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.containerRecipe `ImagebuilderResource.containerRecipe`} 
   */
  GetContainerRecipePolicy = "imagebuilder:GetContainerRecipePolicy",

  /**
   * Read - Grants permission to view details about a distribution configuration
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetDistributionConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.distributionConfiguration `ImagebuilderResource.distributionConfiguration`} 
   */
  GetDistributionConfiguration = "imagebuilder:GetDistributionConfiguration",

  /**
   * Read - Grants permission to view details about an image
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetImage = "imagebuilder:GetImage",

  /**
   * Read - Grants permission to view details about an image pipeline
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imagePipeline `ImagebuilderResource.imagePipeline`} 
   */
  GetImagePipeline = "imagebuilder:GetImagePipeline",

  /**
   * Read - Grants permission to view the resource policy associated with an image
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   */
  GetImagePolicy = "imagebuilder:GetImagePolicy",

  /**
   * Read - Grants permission to view details about an image recipe
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imageRecipe `ImagebuilderResource.imageRecipe`} 
   */
  GetImageRecipe = "imagebuilder:GetImageRecipe",

  /**
   * Read - Grants permission to view the resource policy associated with an image recipe
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imageRecipe `ImagebuilderResource.imageRecipe`} 
   */
  GetImageRecipePolicy = "imagebuilder:GetImageRecipePolicy",

  /**
   * Read - Grants permission to view details about an infrastructure configuration
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetInfrastructureConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.infrastructureConfiguration `ImagebuilderResource.infrastructureConfiguration`} 
   */
  GetInfrastructureConfiguration = "imagebuilder:GetInfrastructureConfiguration",

  /**
   * Write - Grants permission to import a new component
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImportComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.component `ImagebuilderResource.component`} 
   * - {@link ImagebuilderResource.kmsKey `ImagebuilderResource.kmsKey`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ImportComponent = "imagebuilder:ImportComponent",

  /**
   * Write - Grants permission to import an image
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImportVmImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ImportVmImage = "imagebuilder:ImportVmImage",

  /**
   * List - Grants permission to list the component build versions in your account
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponentBuildVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.componentVersion `ImagebuilderResource.componentVersion`} 
   */
  ListComponentBuildVersions = "imagebuilder:ListComponentBuildVersions",

  /**
   * List - Grants permission to list the component versions owned by or shared with your account
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponents.html
   */
  ListComponents = "imagebuilder:ListComponents",

  /**
   * List - Grants permission to list the container recipes owned by or shared with your account
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListContainerRecipes.html
   */
  ListContainerRecipes = "imagebuilder:ListContainerRecipes",

  /**
   * List - Grants permission to list the distribution configurations in your account
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListDistributionConfigurations.html
   */
  ListDistributionConfigurations = "imagebuilder:ListDistributionConfigurations",

  /**
   * List - Grants permission to list the image build versions in your account
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageBuildVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imageVersion `ImagebuilderResource.imageVersion`} 
   */
  ListImageBuildVersions = "imagebuilder:ListImageBuildVersions",

  /**
   * List - Grants permission to returns a list of packages installed on the specified image
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePackages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListImagePackages = "imagebuilder:ListImagePackages",

  /**
   * List - Grants permission to returns a list of images created by the specified pipeline
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelineImages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imagePipeline `ImagebuilderResource.imagePipeline`} 
   */
  ListImagePipelineImages = "imagebuilder:ListImagePipelineImages",

  /**
   * List - Grants permission to list the image pipelines in your account
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelines.html
   */
  ListImagePipelines = "imagebuilder:ListImagePipelines",

  /**
   * List - Grants permission to list the image recipes owned by or shared with your account
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageRecipes.html
   */
  ListImageRecipes = "imagebuilder:ListImageRecipes",

  /**
   * List - Grants permission to list the image versions owned by or shared with your account
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImages.html
   */
  ListImages = "imagebuilder:ListImages",

  /**
   * List - Grants permission to list the infrastructure configurations in your account
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListInfrastructureConfigurations.html
   */
  ListInfrastructureConfigurations = "imagebuilder:ListInfrastructureConfigurations",

  /**
   * Read - Grants permission to list tag for an Image Builder resource
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.component `ImagebuilderResource.component`} 
   * - {@link ImagebuilderResource.distributionConfiguration `ImagebuilderResource.distributionConfiguration`} 
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   * - {@link ImagebuilderResource.imagePipeline `ImagebuilderResource.imagePipeline`} 
   * - {@link ImagebuilderResource.imageRecipe `ImagebuilderResource.imageRecipe`} 
   * - {@link ImagebuilderResource.infrastructureConfiguration `ImagebuilderResource.infrastructureConfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "imagebuilder:ListTagsForResource",

  /**
   * PermissionsManagement - Grants permission to set the resource policy associated with a component
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutComponentPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.component `ImagebuilderResource.component`} 
   */
  PutComponentPolicy = "imagebuilder:PutComponentPolicy",

  /**
   * PermissionsManagement - Grants permission to set the resource policy associated with a container recipe
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutContainerRecipePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.containerRecipe `ImagebuilderResource.containerRecipe`} 
   */
  PutContainerRecipePolicy = "imagebuilder:PutContainerRecipePolicy",

  /**
   * PermissionsManagement - Grants permission to set the resource policy associated with an image
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImagePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   */
  PutImagePolicy = "imagebuilder:PutImagePolicy",

  /**
   * PermissionsManagement - Grants permission to set the resource policy associated with an image recipe
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImageRecipePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imageRecipe `ImagebuilderResource.imageRecipe`} 
   */
  PutImageRecipePolicy = "imagebuilder:PutImageRecipePolicy",

  /**
   * Write - Grants permission to create a new image from a pipeline
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartImagePipelineExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imagePipeline `ImagebuilderResource.imagePipeline`} 
   */
  StartImagePipelineExecution = "imagebuilder:StartImagePipelineExecution",

  /**
   * Tagging - Grants permission to tag an Image Builder resource
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.component `ImagebuilderResource.component`} 
   * - {@link ImagebuilderResource.containerRecipe `ImagebuilderResource.containerRecipe`} 
   * - {@link ImagebuilderResource.distributionConfiguration `ImagebuilderResource.distributionConfiguration`} 
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   * - {@link ImagebuilderResource.imagePipeline `ImagebuilderResource.imagePipeline`} 
   * - {@link ImagebuilderResource.imageRecipe `ImagebuilderResource.imageRecipe`} 
   * - {@link ImagebuilderResource.infrastructureConfiguration `ImagebuilderResource.infrastructureConfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "imagebuilder:TagResource",

  /**
   * Tagging - Grants permission to untag an Image Builder resource
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.component `ImagebuilderResource.component`} 
   * - {@link ImagebuilderResource.containerRecipe `ImagebuilderResource.containerRecipe`} 
   * - {@link ImagebuilderResource.distributionConfiguration `ImagebuilderResource.distributionConfiguration`} 
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   * - {@link ImagebuilderResource.imagePipeline `ImagebuilderResource.imagePipeline`} 
   * - {@link ImagebuilderResource.imageRecipe `ImagebuilderResource.imageRecipe`} 
   * - {@link ImagebuilderResource.infrastructureConfiguration `ImagebuilderResource.infrastructureConfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "imagebuilder:UntagResource",

  /**
   * Write - Grants permission to update an existing distribution configuration
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateDistributionConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.distributionConfiguration `ImagebuilderResource.distributionConfiguration`} 
   */
  UpdateDistributionConfiguration = "imagebuilder:UpdateDistributionConfiguration",

  /**
   * Write - Grants permission to update an existing image pipeline
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateImagePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.imagePipeline `ImagebuilderResource.imagePipeline`} 
   */
  UpdateImagePipeline = "imagebuilder:UpdateImagePipeline",

  /**
   * Write - Grants permission to update an existing infrastructure configuration
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateInfrastructureConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.infrastructureConfiguration `ImagebuilderResource.infrastructureConfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `imagebuilder:CreatedResourceTagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-createdresourcetagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `imagebuilder:CreatedResourceTag/<key>`: Filters access by the tag key-value pairs attached to the resource created by Image Builder ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-createdresourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `imagebuilder:Ec2MetadataHttpTokens`: Filters access by the EC2 Instance Metadata HTTP Token Requirement specified in the request ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-ec2metadatahttptokens documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `imagebuilder:StatusTopicArn`: Filters access by the SNS Topic Arn in the request to which terminal state notifications will be published ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-statustopicarn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateInfrastructureConfiguration = "imagebuilder:UpdateInfrastructureConfiguration",

  /**
   * * - Grant all imagebuilder permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2imagebuilder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ImagebuilderResource.image `ImagebuilderResource.image`} 
   * - {@link ImagebuilderResource.component `ImagebuilderResource.component`} 
   * - {@link ImagebuilderResource.kmsKey `ImagebuilderResource.kmsKey`} 
   * - {@link ImagebuilderResource.containerRecipe `ImagebuilderResource.containerRecipe`} 
   * - {@link ImagebuilderResource.distributionConfiguration `ImagebuilderResource.distributionConfiguration`} 
   * - {@link ImagebuilderResource.imagePipeline `ImagebuilderResource.imagePipeline`} 
   * - {@link ImagebuilderResource.imageRecipe `ImagebuilderResource.imageRecipe`} 
   * - {@link ImagebuilderResource.infrastructureConfiguration `ImagebuilderResource.infrastructureConfiguration`} 
   * - {@link ImagebuilderResource.componentVersion `ImagebuilderResource.componentVersion`} 
   * - {@link ImagebuilderResource.imageVersion `ImagebuilderResource.imageVersion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `imagebuilder:CreatedResourceTagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-createdresourcetagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `imagebuilder:CreatedResourceTag/<key>`: Filters access by the tag key-value pairs attached to the resource created by Image Builder ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-createdresourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `imagebuilder:Ec2MetadataHttpTokens`: Filters access by the EC2 Instance Metadata HTTP Token Requirement specified in the request ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-ec2metadatahttptokens documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `imagebuilder:StatusTopicArn`: Filters access by the SNS Topic Arn in the request to which terminal state notifications will be published ({@link https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-statustopicarn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "imagebuilder:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2imagebuilder.html
 */
export const ImagebuilderResource = {

  /**
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_Component.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  component: (options: Partial<{partition: string, region: string, account: string, componentName: string, componentVersion: string, componentBuildVersion: string}> = {}) => `arn:${options.partition || '*'}:imagebuilder:${options.region || '*'}:${options.account || '*'}:component/${options.componentName || '*'}/${options.componentVersion || '*'}/${options.componentBuildVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ComponentVersion
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  componentVersion: (options: Partial<{partition: string, region: string, account: string, componentName: string, componentVersion: string}> = {}) => `arn:${options.partition || '*'}:imagebuilder:${options.region || '*'}:${options.account || '*'}:component/${options.componentName || '*'}/${options.componentVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DistributionConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  distributionConfiguration: (options: Partial<{partition: string, region: string, account: string, distributionConfigurationName: string}> = {}) => `arn:${options.partition || '*'}:imagebuilder:${options.region || '*'}:${options.account || '*'}:distribution-configuration/${options.distributionConfigurationName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_Image.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  image: (options: Partial<{partition: string, region: string, account: string, imageName: string, imageVersion: string, imageBuildVersion: string}> = {}) => `arn:${options.partition || '*'}:imagebuilder:${options.region || '*'}:${options.account || '*'}:image/${options.imageName || '*'}/${options.imageVersion || '*'}/${options.imageBuildVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImageVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  imageVersion: (options: Partial<{partition: string, region: string, account: string, imageName: string, imageVersion: string}> = {}) => `arn:${options.partition || '*'}:imagebuilder:${options.region || '*'}:${options.account || '*'}:image/${options.imageName || '*'}/${options.imageVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImageRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  imageRecipe: (options: Partial<{partition: string, region: string, account: string, imageRecipeName: string, imageRecipeVersion: string}> = {}) => `arn:${options.partition || '*'}:imagebuilder:${options.region || '*'}:${options.account || '*'}:image-recipe/${options.imageRecipeName || '*'}/${options.imageRecipeVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ContainerRecipe.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  containerRecipe: (options: Partial<{partition: string, region: string, account: string, containerRecipeName: string, containerRecipeVersion: string}> = {}) => `arn:${options.partition || '*'}:imagebuilder:${options.region || '*'}:${options.account || '*'}:container-recipe/${options.containerRecipeName || '*'}/${options.containerRecipeVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImagePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  imagePipeline: (options: Partial<{partition: string, region: string, account: string, imagePipelineName: string}> = {}) => `arn:${options.partition || '*'}:imagebuilder:${options.region || '*'}:${options.account || '*'}:image-pipeline/${options.imagePipelineName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_InfrastructureConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  infrastructureConfiguration: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:imagebuilder:${options.region || '*'}:${options.account || '*'}:infrastructure-configuration/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys
   */
  kmsKey: (options: Partial<{partition: string, region: string, account: string, keyId: string}> = {}) => `arn:${options.partition || '*'}:kms:${options.region || '*'}:${options.account || '*'}:key/${options.keyId || '*'}`,
}

