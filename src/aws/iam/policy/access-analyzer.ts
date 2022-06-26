/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamaccessanalyzer.html
 */
export enum AccessAnalyzerAction {

  /**
   * Write - Grants permission to apply an archive rule
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ApplyArchiveRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  ApplyArchiveRule = "access-analyzer:ApplyArchiveRule",

  /**
   * Write - Grants permission to cancel a policy generation
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CancelPolicyGeneration.html
   */
  CancelPolicyGeneration = "access-analyzer:CancelPolicyGeneration",

  /**
   * Write - Grants permission to create an access preview for the specified analyzer
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAccessPreview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  CreateAccessPreview = "access-analyzer:CreateAccessPreview",

  /**
   * Write - Grants permission to create an analyzer
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAnalyzer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAnalyzer = "access-analyzer:CreateAnalyzer",

  /**
   * Write - Grants permission to create an archive rule for the specified analyzer
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateArchiveRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.archiveRule `AccessAnalyzerResource.archiveRule`} 
   */
  CreateArchiveRule = "access-analyzer:CreateArchiveRule",

  /**
   * Write - Grants permission to delete the specified analyzer
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteAnalyzer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  DeleteAnalyzer = "access-analyzer:DeleteAnalyzer",

  /**
   * Write - Grants permission to delete archive rules for the specified analyzer
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteArchiveRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.archiveRule `AccessAnalyzerResource.archiveRule`} 
   */
  DeleteArchiveRule = "access-analyzer:DeleteArchiveRule",

  /**
   * Read - Grants permission to retrieve information about an access preview
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAccessPreview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  GetAccessPreview = "access-analyzer:GetAccessPreview",

  /**
   * Read - Grants permission to retrieve information about an analyzed resource
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzedResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  GetAnalyzedResource = "access-analyzer:GetAnalyzedResource",

  /**
   * Read - Grants permission to retrieve information about analyzers
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  GetAnalyzer = "access-analyzer:GetAnalyzer",

  /**
   * Read - Grants permission to retrieve information about archive rules for the specified analyzer
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetArchiveRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.archiveRule `AccessAnalyzerResource.archiveRule`} 
   */
  GetArchiveRule = "access-analyzer:GetArchiveRule",

  /**
   * Read - Grants permission to retrieve findings
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetFinding.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  GetFinding = "access-analyzer:GetFinding",

  /**
   * Read - Grants permission to retrieve a policy that was generated using StartPolicyGeneration
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetGeneratedPolicy.html
   */
  GetGeneratedPolicy = "access-analyzer:GetGeneratedPolicy",

  /**
   * Read - Grants permission to retrieve a list of findings from an access preview
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAccessPreviewFindings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  ListAccessPreviewFindings = "access-analyzer:ListAccessPreviewFindings",

  /**
   * List - Grants permission to retrieve a list of access previews
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAccessPreviews.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  ListAccessPreviews = "access-analyzer:ListAccessPreviews",

  /**
   * Read - Grants permission to retrieve a list of resources that have been analyzed
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzedResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  ListAnalyzedResources = "access-analyzer:ListAnalyzedResources",

  /**
   * List - Grants permission to retrieves a list of analyzers
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzers.html
   */
  ListAnalyzers = "access-analyzer:ListAnalyzers",

  /**
   * List - Grants permission to retrieve a list of archive rules from an analyzer
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListArchiveRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  ListArchiveRules = "access-analyzer:ListArchiveRules",

  /**
   * Read - Grants permission to retrieve a list of findings from an analyzer
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListFindings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  ListFindings = "access-analyzer:ListFindings",

  /**
   * Read - Grants permission to list all the recently started policy generations
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListPolicyGenerations.html
   */
  ListPolicyGenerations = "access-analyzer:ListPolicyGenerations",

  /**
   * Read - Grants permission to retrieve a list of tags applied to a resource
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  ListTagsForResource = "access-analyzer:ListTagsForResource",

  /**
   * Write - Grants permission to start a policy generation
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartPolicyGeneration.html
   */
  StartPolicyGeneration = "access-analyzer:StartPolicyGeneration",

  /**
   * Write - Grants permission to start a scan of the policies applied to a resource
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartResourceScan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  StartResourceScan = "access-analyzer:StartResourceScan",

  /**
   * Tagging - Grants permission to add a tag to a resource
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "access-analyzer:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from a resource
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "access-analyzer:UntagResource",

  /**
   * Write - Grants permission to modify an archive rule
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateArchiveRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.archiveRule `AccessAnalyzerResource.archiveRule`} 
   */
  UpdateArchiveRule = "access-analyzer:UpdateArchiveRule",

  /**
   * Write - Grants permission to modify findings
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateFindings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   */
  UpdateFindings = "access-analyzer:UpdateFindings",

  /**
   * Read - Grants permission to validate a policy
   * @see https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ValidatePolicy.html
   */
  ValidatePolicy = "access-analyzer:ValidatePolicy",

  /**
   * * - Grant all access-analyzer permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamaccessanalyzer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AccessAnalyzerResource.analyzer `AccessAnalyzerResource.analyzer`} 
   * - {@link AccessAnalyzerResource.archiveRule `AccessAnalyzerResource.archiveRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "access-analyzer:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamaccessanalyzer.html
 */
export const AccessAnalyzerResource = {

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  analyzer: (options: Partial<{partition: string, region: string, account: string, analyzerName: string}> = {}) => `arn:${options.partition || '*'}:access-analyzer:${options.region || '*'}:${options.account || '*'}:analyzer/${options.analyzerName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources
   */
  archiveRule: (options: Partial<{partition: string, region: string, account: string, analyzerName: string, ruleName: string}> = {}) => `arn:${options.partition || '*'}:access-analyzer:${options.region || '*'}:${options.account || '*'}:analyzer/${options.analyzerName || '*'}/archive-rule/${options.ruleName || '*'}`,
}

