/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresiliencehubservice.html
 */
export enum ResiliencehubAction {

  /**
   * Write - Grants permission to add draft application version resource mappings
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_AddDraftAppVersionResourceMappings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  AddDraftAppVersionResourceMappings = "resiliencehub:AddDraftAppVersionResourceMappings",

  /**
   * Write - Grants permission to create application
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.resiliencyPolicy `ResiliencehubResource.resiliencyPolicy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApp = "resiliencehub:CreateApp",

  /**
   * Write - Grants permission to create recommendation template
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateRecommendationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRecommendationTemplate = "resiliencehub:CreateRecommendationTemplate",

  /**
   * Write - Grants permission to create resiliency policy
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateResiliencyPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateResiliencyPolicy = "resiliencehub:CreateResiliencyPolicy",

  /**
   * Write - Grants permission to batch delete application
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  DeleteApp = "resiliencehub:DeleteApp",

  /**
   * Write - Grants permission to batch delete application assessment
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteAppAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  DeleteAppAssessment = "resiliencehub:DeleteAppAssessment",

  /**
   * Write - Grants permission to batch delete recommendation template
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteRecommendationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  DeleteRecommendationTemplate = "resiliencehub:DeleteRecommendationTemplate",

  /**
   * Write - Grants permission to batch delete resiliency policy
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteResiliencyPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.resiliencyPolicy `ResiliencehubResource.resiliencyPolicy`} 
   */
  DeleteResiliencyPolicy = "resiliencehub:DeleteResiliencyPolicy",

  /**
   * Read - Grants permission to describe application
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  DescribeApp = "resiliencehub:DescribeApp",

  /**
   * Read - Grants permission to describe application assessment
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  DescribeAppAssessment = "resiliencehub:DescribeAppAssessment",

  /**
   * Read - Grants permission to describe application resolution
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersionResourcesResolutionStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  DescribeAppVersionResourcesResolutionStatus = "resiliencehub:DescribeAppVersionResourcesResolutionStatus",

  /**
   * Read - Grants permission to describe application version template
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersionTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  DescribeAppVersionTemplate = "resiliencehub:DescribeAppVersionTemplate",

  /**
   * Read - Grants permission to describe draft application version resources import status
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeDraftAppVersionResourcesImportStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  DescribeDraftAppVersionResourcesImportStatus = "resiliencehub:DescribeDraftAppVersionResourcesImportStatus",

  /**
   * Read - Grants permission to describe resiliency policy
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeResiliencyPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.resiliencyPolicy `ResiliencehubResource.resiliencyPolicy`} 
   */
  DescribeResiliencyPolicy = "resiliencehub:DescribeResiliencyPolicy",

  /**
   * Write - Grants permission to import resources to draft application version
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ImportResourcesToDraftAppVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ImportResourcesToDraftAppVersion = "resiliencehub:ImportResourcesToDraftAppVersion",

  /**
   * List - Grants permission to list alarm recommendation
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAlarmRecommendations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ListAlarmRecommendations = "resiliencehub:ListAlarmRecommendations",

  /**
   * List - Grants permission to list application assessment
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppAssessments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ListAppAssessments = "resiliencehub:ListAppAssessments",

  /**
   * List - Grants permission to list app component compliances
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppComponentCompliances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ListAppComponentCompliances = "resiliencehub:ListAppComponentCompliances",

  /**
   * List - Grants permission to list app component recommendations
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppComponentRecommendations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ListAppComponentRecommendations = "resiliencehub:ListAppComponentRecommendations",

  /**
   * List - Grants permission to application version resource mappings
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppVersionResourceMappings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ListAppVersionResourceMappings = "resiliencehub:ListAppVersionResourceMappings",

  /**
   * List - Grants permission to list application resources
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppVersionResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ListAppVersionResources = "resiliencehub:ListAppVersionResources",

  /**
   * List - Grants permission to list application version
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ListAppVersions = "resiliencehub:ListAppVersions",

  /**
   * List - Grants permission to list applications
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListApps.html
   */
  ListApps = "resiliencehub:ListApps",

  /**
   * List - Grants permission to list recommendation templates
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListRecommendationTemplates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ListRecommendationTemplates = "resiliencehub:ListRecommendationTemplates",

  /**
   * List - Grants permission to list resiliency policies
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListResiliencyPolicies.html
   */
  ListResiliencyPolicies = "resiliencehub:ListResiliencyPolicies",

  /**
   * List - Grants permission to list SOP recommendations
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListSopRecommendations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ListSopRecommendations = "resiliencehub:ListSopRecommendations",

  /**
   * List - Grants permission to list suggested resiliency policies
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListSuggestedResiliencyPolicies.html
   */
  ListSuggestedResiliencyPolicies = "resiliencehub:ListSuggestedResiliencyPolicies",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "resiliencehub:ListTagsForResource",

  /**
   * List - Grants permission to list test recommendations
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListTestRecommendations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ListTestRecommendations = "resiliencehub:ListTestRecommendations",

  /**
   * List - Grants permission to list unsupported application version resources
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListUnsupportedAppVersionResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ListUnsupportedAppVersionResources = "resiliencehub:ListUnsupportedAppVersionResources",

  /**
   * Write - Grants permission to publish application version
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_PublishAppVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  PublishAppVersion = "resiliencehub:PublishAppVersion",

  /**
   * Write - Grants permission to put draft application version template
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_PutDraftAppVersionTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  PutDraftAppVersionTemplate = "resiliencehub:PutDraftAppVersionTemplate",

  /**
   * Write - Grants permission to remove draft application version mappings
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_RemoveDraftAppVersionResourceMappings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  RemoveDraftAppVersionResourceMappings = "resiliencehub:RemoveDraftAppVersionResourceMappings",

  /**
   * Write - Grants permission to resolve application version resources
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ResolveAppVersionResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  ResolveAppVersionResources = "resiliencehub:ResolveAppVersionResources",

  /**
   * Write - Grants permission to create application assessment
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_StartAppAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartAppAssessment = "resiliencehub:StartAppAssessment",

  /**
   * Tagging - Grants permission to assign a resource tag
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.appAssessment `ResiliencehubResource.appAssessment`} 
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   * - {@link ResiliencehubResource.recommendationTemplate `ResiliencehubResource.recommendationTemplate`} 
   * - {@link ResiliencehubResource.resiliencyPolicy `ResiliencehubResource.resiliencyPolicy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "resiliencehub:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.appAssessment `ResiliencehubResource.appAssessment`} 
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   * - {@link ResiliencehubResource.recommendationTemplate `ResiliencehubResource.recommendationTemplate`} 
   * - {@link ResiliencehubResource.resiliencyPolicy `ResiliencehubResource.resiliencyPolicy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "resiliencehub:UntagResource",

  /**
   * Write - Grants permission to update application
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   */
  UpdateApp = "resiliencehub:UpdateApp",

  /**
   * Write - Grants permission to update resiliency policy
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateResiliencyPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.resiliencyPolicy `ResiliencehubResource.resiliencyPolicy`} 
   */
  UpdateResiliencyPolicy = "resiliencehub:UpdateResiliencyPolicy",

  /**
   * * - Grant all resiliencehub permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresiliencehubservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ResiliencehubResource.application `ResiliencehubResource.application`} 
   * - {@link ResiliencehubResource.resiliencyPolicy `ResiliencehubResource.resiliencyPolicy`} 
   * - {@link ResiliencehubResource.appAssessment `ResiliencehubResource.appAssessment`} 
   * - {@link ResiliencehubResource.recommendationTemplate `ResiliencehubResource.recommendationTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "resiliencehub:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresiliencehubservice.html
 */
export const ResiliencehubResource = {

  /**
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ResiliencyPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  resiliencyPolicy: (options: Partial<{partition: string, region: string, account: string, resiliencyPolicyID: string}> = {}) => `arn:${options.partition || '*'}:resiliencehub:${options.region || '*'}:${options.account || '*'}:resiliency-policy/${options.resiliencyPolicyID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_App.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  application: (options: Partial<{partition: string, region: string, account: string, appID: string}> = {}) => `arn:${options.partition || '*'}:resiliencehub:${options.region || '*'}:${options.account || '*'}:app/${options.appID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_AppAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  appAssessment: (options: Partial<{partition: string, region: string, account: string, appAssessmentID: string}> = {}) => `arn:${options.partition || '*'}:resiliencehub:${options.region || '*'}:${options.account || '*'}:app-assessment/${options.appAssessmentID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_RecommendationTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  recommendationTemplate: (options: Partial<{partition: string, region: string, account: string, recommendationTemplateID: string}> = {}) => `arn:${options.partition || '*'}:resiliencehub:${options.region || '*'}:${options.account || '*'}:recommendation-template/${options.recommendationTemplateID || '*'}`,
}

