/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurureviewer.html
 */
export enum CodeguruReviewerAction {

  /**
   * Write - Grants permission to associates a repository with Amazon CodeGuru Reviewer
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_AssociateRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * - {@link CodeguruReviewerResource.connection `CodeguruReviewerResource.connection`} 
   * - {@link CodeguruReviewerResource.repository `CodeguruReviewerResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  AssociateRepository = "codeguru-reviewer:AssociateRepository",

  /**
   * Write - Grants permission to create a code review
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCodeReview = "codeguru-reviewer:CreateCodeReview",

  /**
   * Read - Grants permission to perform webbased oauth handshake for 3rd party providers
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurureviewer.html
   */
  CreateConnectionToken = "codeguru-reviewer:CreateConnectionToken",

  /**
   * Read - Grants permission to describe a code review
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeCodeReview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeCodeReview = "codeguru-reviewer:DescribeCodeReview",

  /**
   * Read - Grants permission to describe a recommendation feedback on a code review
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRecommendationFeedback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeRecommendationFeedback = "codeguru-reviewer:DescribeRecommendationFeedback",

  /**
   * Read - Grants permission to describe a repository association
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeRepositoryAssociation = "codeguru-reviewer:DescribeRepositoryAssociation",

  /**
   * Write - Grants permission to disassociate a repository with Amazon CodeGuru Reviewer
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DisassociateRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateRepository = "codeguru-reviewer:DisassociateRepository",

  /**
   * Read - Grants permission to view pull request metrics in console
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurureviewer.html
   */
  GetMetricsData = "codeguru-reviewer:GetMetricsData",

  /**
   * List - Grants permission to list summary of code reviews
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListCodeReviews.html
   */
  ListCodeReviews = "codeguru-reviewer:ListCodeReviews",

  /**
   * List - Grants permission to list summary of recommendation feedback on a code review
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRecommendationFeedback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListRecommendationFeedback = "codeguru-reviewer:ListRecommendationFeedback",

  /**
   * List - Grants permission to list summary of recommendations on a code review
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRecommendations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListRecommendations = "codeguru-reviewer:ListRecommendations",

  /**
   * List - Grants permission to list summary of repository associations
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html
   */
  ListRepositoryAssociations = "codeguru-reviewer:ListRepositoryAssociations",

  /**
   * List - Grants permission to list the resource attached to a associated repository ARN
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "codeguru-reviewer:ListTagsForResource",

  /**
   * Read - Grants permission to list 3rd party providers repositories in console
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurureviewer.html
   */
  ListThirdPartyRepositories = "codeguru-reviewer:ListThirdPartyRepositories",

  /**
   * Write - Grants permission to put feedback for a recommendation on a code review
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_PutRecommendationFeedback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutRecommendationFeedback = "codeguru-reviewer:PutRecommendationFeedback",

  /**
   * Tagging - Grants permission to attach resource tags to an associated repository ARN
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "codeguru-reviewer:TagResource",

  /**
   * Tagging - Grants permission to disassociate resource tags from an associated repository ARN
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_UnTagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UnTagResource = "codeguru-reviewer:UnTagResource",

  /**
   * * - Grant all codeguru-reviewer permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurureviewer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeguruReviewerResource.association `CodeguruReviewerResource.association`} 
   * - {@link CodeguruReviewerResource.connection `CodeguruReviewerResource.connection`} 
   * - {@link CodeguruReviewerResource.repository `CodeguruReviewerResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "codeguru-reviewer:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurureviewer.html
 */
export const CodeguruReviewerResource = {

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurureviewer.html
   */
  association: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:codeguru-reviewer:${options.region || '*'}:${options.account || '*'}:association:${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurureviewer.html
   */
  codereview: (options: Partial<{partition: string, region: string, account: string, resourceId: string, codeReviewId: string}> = {}) => `arn:${options.partition || '*'}:codeguru-reviewer:${options.region || '*'}:${options.account || '*'}:association:${options.resourceId || '*'}:codereview:${options.codeReviewId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  repository: (options: Partial<{partition: string, region: string, account: string, repositoryName: string}> = {}) => `arn:${options.partition || '*'}:codecommit:${options.region || '*'}:${options.account || '*'}:${options.repositoryName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/dtconsole/latest/userguide/connections.html
   */
  connection: (options: Partial<{partition: string, region: string, account: string, connectionId: string}> = {}) => `arn:${options.partition || '*'}:codestar-connections:${options.region || '*'}:${options.account || '*'}:connection/${options.connectionId || '*'}`,
}

