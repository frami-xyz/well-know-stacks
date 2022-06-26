/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudsearch.html
 */
export enum CloudsearchAction {

  /**
   * Tagging - Attaches resource tags to an Amazon CloudSearch domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_AddTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  AddTags = "cloudsearch:AddTags",

  /**
   * Write - Indexes the search suggestions.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_BuildSuggesters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  BuildSuggesters = "cloudsearch:BuildSuggesters",

  /**
   * Write - Creates a new search domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_CreateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  CreateDomain = "cloudsearch:CreateDomain",

  /**
   * Write - Configures an analysis scheme that can be applied to a text or text-array field to define language-specific text processing options.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineAnalysisScheme.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DefineAnalysisScheme = "cloudsearch:DefineAnalysisScheme",

  /**
   * Write - Configures an Expression for the search domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineExpression.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DefineExpression = "cloudsearch:DefineExpression",

  /**
   * Write - Configures an IndexField for the search domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineIndexField.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DefineIndexField = "cloudsearch:DefineIndexField",

  /**
   * Write - Configures a suggester for a domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineSuggester.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DefineSuggester = "cloudsearch:DefineSuggester",

  /**
   * Write - Deletes an analysis scheme.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteAnalysisScheme.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DeleteAnalysisScheme = "cloudsearch:DeleteAnalysisScheme",

  /**
   * Write - Permanently deletes a search domain and all of its data.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DeleteDomain = "cloudsearch:DeleteDomain",

  /**
   * Write - Removes an Expression from the search domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteExpression.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DeleteExpression = "cloudsearch:DeleteExpression",

  /**
   * Write - Removes an IndexField from the search domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteIndexField.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DeleteIndexField = "cloudsearch:DeleteIndexField",

  /**
   * Write - Deletes a suggester.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteSuggester.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DeleteSuggester = "cloudsearch:DeleteSuggester",

  /**
   * Read - Gets the analysis schemes configured for a domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAnalysisSchemes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DescribeAnalysisSchemes = "cloudsearch:DescribeAnalysisSchemes",

  /**
   * Read - Gets the availability options configured for a domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAvailabilityOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DescribeAvailabilityOptions = "cloudsearch:DescribeAvailabilityOptions",

  /**
   * Read - Gets the domain endpoint options configured for a domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomainEndpointOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DescribeDomainEndpointOptions = "cloudsearch:DescribeDomainEndpointOptions",

  /**
   * List - Gets information about the search domains owned by this account.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomains.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DescribeDomains = "cloudsearch:DescribeDomains",

  /**
   * Read - Gets the expressions configured for the search domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeExpressions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DescribeExpressions = "cloudsearch:DescribeExpressions",

  /**
   * Read - Gets information about the index fields configured for the search domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeIndexFields.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DescribeIndexFields = "cloudsearch:DescribeIndexFields",

  /**
   * Read - Gets the scaling parameters configured for a domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeScalingParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DescribeScalingParameters = "cloudsearch:DescribeScalingParameters",

  /**
   * Read - Gets information about the access policies that control access to the domain's document and search endpoints.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeServiceAccessPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DescribeServiceAccessPolicies = "cloudsearch:DescribeServiceAccessPolicies",

  /**
   * Read - Gets the suggesters configured for a domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeSuggesters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  DescribeSuggesters = "cloudsearch:DescribeSuggesters",

  /**
   * Write - Tells the search domain to start indexing its documents using the latest indexing options.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_IndexDocuments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  IndexDocuments = "cloudsearch:IndexDocuments",

  /**
   * List - Lists all search domains owned by an account.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListDomainNames.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  ListDomainNames = "cloudsearch:ListDomainNames",

  /**
   * Read - Displays all of the resource tags for an Amazon CloudSearch domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  ListTags = "cloudsearch:ListTags",

  /**
   * Tagging - Removes the specified resource tags from an Amazon ES domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_RemoveTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  RemoveTags = "cloudsearch:RemoveTags",

  /**
   * Write - Configures the availability options for a domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateAvailabilityOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  UpdateAvailabilityOptions = "cloudsearch:UpdateAvailabilityOptions",

  /**
   * Write - Configures the domain endpoint options for a domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateDomainEndpointOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  UpdateDomainEndpointOptions = "cloudsearch:UpdateDomainEndpointOptions",

  /**
   * Write - Configures scaling parameters for a domain.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateScalingParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  UpdateScalingParameters = "cloudsearch:UpdateScalingParameters",

  /**
   * Permissions management - Configures the access rules that control access to the domain's document and search endpoints.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateServiceAccessPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  UpdateServiceAccessPolicies = "cloudsearch:UpdateServiceAccessPolicies",

  /**
   * Write - Allows access to the document service operations.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  document = "cloudsearch:document",

  /**
   * Read - Allows access to the search operations.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  search = "cloudsearch:search",

  /**
   * Read - Allows access to the suggest operations.
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  suggest = "cloudsearch:suggest",

  /**
   * * - Grant all cloudsearch permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudsearch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudsearchResource.domain `CloudsearchResource.domain`} 
   */
  All = "cloudsearch:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudsearch.html
 */
export const CloudsearchResource = {

  /**
   * @see https://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html
   */
  domain: (options: Partial<{partition: string, region: string, account: string, domainName: string}> = {}) => `arn:${options.partition || '*'}:cloudsearch:${options.region || '*'}:${options.account || '*'}:domain/${options.domainName || '*'}`,
}

