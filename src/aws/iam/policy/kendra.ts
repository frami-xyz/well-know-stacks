/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkendra.html
 */
export enum KendraAction {

  /**
   * Write - Grants permission to put principal mapping in index
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.experience `KendraResource.experience`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  AssociateEntitiesToExperience = "kendra:AssociateEntitiesToExperience",

  /**
   * Write - Defines the specific permissions of users or groups in your AWS SSO identity source with access to your Amazon Kendra experience
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_AssociatePersonasToEntities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.experience `KendraResource.experience`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  AssociatePersonasToEntities = "kendra:AssociatePersonasToEntities",

  /**
   * Write - Grants permission to batch delete document
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  BatchDeleteDocument = "kendra:BatchDeleteDocument",

  /**
   * Read - Grants permission to do batch get document status
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_BatchGetDocumentStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  BatchGetDocumentStatus = "kendra:BatchGetDocumentStatus",

  /**
   * Write - Grants permission to batch put document
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  BatchPutDocument = "kendra:BatchPutDocument",

  /**
   * Write - Grants permission to clear out the suggestions for a given index, generated so far
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ClearQuerySuggestions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  ClearQuerySuggestions = "kendra:ClearQuerySuggestions",

  /**
   * Write - Grants permission to create a data source
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_CreateDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataSource = "kendra:CreateDataSource",

  /**
   * Write - Creates an Amazon Kendra experience such as a search application
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_CreateExperience.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  CreateExperience = "kendra:CreateExperience",

  /**
   * Write - Grants permission to create an Faq
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_CreateFaq.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFaq = "kendra:CreateFaq",

  /**
   * Write - Grants permission to create an Index
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_CreateIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateIndex = "kendra:CreateIndex",

  /**
   * Write - Grants permission to create a QuerySuggestions BlockList
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_CreateQuerySuggestionsBlockList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateQuerySuggestionsBlockList = "kendra:CreateQuerySuggestionsBlockList",

  /**
   * Write - Grants permission to create a Thesaurus
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_CreateThesaurus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateThesaurus = "kendra:CreateThesaurus",

  /**
   * Write - Grants permission to delete a data source
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  DeleteDataSource = "kendra:DeleteDataSource",

  /**
   * Write - Deletes your Amazon Kendra experience such as a search application
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteExperience.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.experience `KendraResource.experience`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  DeleteExperience = "kendra:DeleteExperience",

  /**
   * Write - Grants permission to delete an Faq
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFaq.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.faq `KendraResource.faq`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  DeleteFaq = "kendra:DeleteFaq",

  /**
   * Write - Grants permission to delete an Index
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  DeleteIndex = "kendra:DeleteIndex",

  /**
   * Write - Grants permission to delete principal mapping from index
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DeletePrincipalMapping.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   */
  DeletePrincipalMapping = "kendra:DeletePrincipalMapping",

  /**
   * Write - Grants permission to delete a QuerySuggestions BlockList
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteQuerySuggestionsBlockList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.querySuggestionsBlockList `KendraResource.querySuggestionsBlockList`} 
   */
  DeleteQuerySuggestionsBlockList = "kendra:DeleteQuerySuggestionsBlockList",

  /**
   * Write - Grants permission to delete a Thesaurus
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteThesaurus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.thesaurus `KendraResource.thesaurus`} 
   */
  DeleteThesaurus = "kendra:DeleteThesaurus",

  /**
   * Read - Grants permission to describe a data source
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  DescribeDataSource = "kendra:DescribeDataSource",

  /**
   * Read - Gets information about your Amazon Kendra experience such as a search application
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeExperience.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.experience `KendraResource.experience`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  DescribeExperience = "kendra:DescribeExperience",

  /**
   * Read - Grants permission to describe an Faq
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeFaq.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.faq `KendraResource.faq`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  DescribeFaq = "kendra:DescribeFaq",

  /**
   * Read - Grants permission to describe an Index
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  DescribeIndex = "kendra:DescribeIndex",

  /**
   * Read - Grants permission to describe principal mapping from index
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DescribePrincipalMapping.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   */
  DescribePrincipalMapping = "kendra:DescribePrincipalMapping",

  /**
   * Read - Grants permission to describe a QuerySuggestions BlockList
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeQuerySuggestionsBlockList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.querySuggestionsBlockList `KendraResource.querySuggestionsBlockList`} 
   */
  DescribeQuerySuggestionsBlockList = "kendra:DescribeQuerySuggestionsBlockList",

  /**
   * Read - Grants permission to describe the query suggestions configuration for an index
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeQuerySuggestionsConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  DescribeQuerySuggestionsConfig = "kendra:DescribeQuerySuggestionsConfig",

  /**
   * Read - Grants permission to describe a Thesaurus
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeThesaurus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.thesaurus `KendraResource.thesaurus`} 
   */
  DescribeThesaurus = "kendra:DescribeThesaurus",

  /**
   * Write - Prevents users or groups in your AWS SSO identity source from accessing your Amazon Kendra experience
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DisassociateEntitiesFromExperience.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.experience `KendraResource.experience`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  DisassociateEntitiesFromExperience = "kendra:DisassociateEntitiesFromExperience",

  /**
   * Write - Removes the specific permissions of users or groups in your AWS SSO identity source with access to your Amazon Kendra experience
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_DisassociatePersonasFromEntities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.experience `KendraResource.experience`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  DisassociatePersonasFromEntities = "kendra:DisassociatePersonasFromEntities",

  /**
   * Read - Grants permission to get suggestions for a query prefix
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_GetQuerySuggestions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  GetQuerySuggestions = "kendra:GetQuerySuggestions",

  /**
   * Read - Retrieves search metrics data
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_GetSnapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  GetSnapshots = "kendra:GetSnapshots",

  /**
   * List - Grants permission to get Data Source sync job history
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSourceSyncJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  ListDataSourceSyncJobs = "kendra:ListDataSourceSyncJobs",

  /**
   * List - Grants permission to list the data sources
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  ListDataSources = "kendra:ListDataSources",

  /**
   * List - Lists specific permissions of users and groups with access to your Amazon Kendra experience
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ListEntityPersonas.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.experience `KendraResource.experience`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  ListEntityPersonas = "kendra:ListEntityPersonas",

  /**
   * List - Lists users or groups in your AWS SSO identity source that are granted access to your Amazon Kendra experience
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ListExperienceEntities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.experience `KendraResource.experience`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  ListExperienceEntities = "kendra:ListExperienceEntities",

  /**
   * List - Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ListExperiences.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  ListExperiences = "kendra:ListExperiences",

  /**
   * List - Grants permission to list the Faqs
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ListFaqs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  ListFaqs = "kendra:ListFaqs",

  /**
   * List - Grants permission to list groups that are older than an ordering id
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ListGroupsOlderThanOrderingId.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   */
  ListGroupsOlderThanOrderingId = "kendra:ListGroupsOlderThanOrderingId",

  /**
   * List - Grants permission to list the indexes
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ListIndices.html
   */
  ListIndices = "kendra:ListIndices",

  /**
   * List - Grants permission to list the QuerySuggestions BlockLists
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ListQuerySuggestionsBlockLists.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  ListQuerySuggestionsBlockLists = "kendra:ListQuerySuggestionsBlockLists",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   * - {@link KendraResource.faq `KendraResource.faq`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.querySuggestionsBlockList `KendraResource.querySuggestionsBlockList`} 
   * - {@link KendraResource.thesaurus `KendraResource.thesaurus`} 
   */
  ListTagsForResource = "kendra:ListTagsForResource",

  /**
   * List - Grants permission to list the Thesauri
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_ListThesauri.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  ListThesauri = "kendra:ListThesauri",

  /**
   * Write - Grants permission to put principal mapping in index
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_PutPrincipalMapping.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   */
  PutPrincipalMapping = "kendra:PutPrincipalMapping",

  /**
   * Read - Grants permission to query documents and faqs
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  Query = "kendra:Query",

  /**
   * Write - Grants permission to start Data Source sync job
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_StartDataSourceSyncJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  StartDataSourceSyncJob = "kendra:StartDataSourceSyncJob",

  /**
   * Write - Grants permission to stop Data Source sync job
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_StopDataSourceSyncJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  StopDataSourceSyncJob = "kendra:StopDataSourceSyncJob",

  /**
   * Write - Grants permission to send feedback about a query results
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_SubmitFeedback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  SubmitFeedback = "kendra:SubmitFeedback",

  /**
   * Tagging - Grants permission to tag a resource with given key value pairs
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   * - {@link KendraResource.faq `KendraResource.faq`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.querySuggestionsBlockList `KendraResource.querySuggestionsBlockList`} 
   * - {@link KendraResource.thesaurus `KendraResource.thesaurus`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "kendra:TagResource",

  /**
   * Tagging - Grants permission to remove the tag with the given key from a resource
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   * - {@link KendraResource.faq `KendraResource.faq`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.querySuggestionsBlockList `KendraResource.querySuggestionsBlockList`} 
   * - {@link KendraResource.thesaurus `KendraResource.thesaurus`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "kendra:UntagResource",

  /**
   * Write - Grants permission to update a data source
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  UpdateDataSource = "kendra:UpdateDataSource",

  /**
   * Write - Updates your Amazon Kendra experience such as a search application
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateExperience.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  UpdateExperience = "kendra:UpdateExperience",

  /**
   * Write - Grants permission to update an Index
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  UpdateIndex = "kendra:UpdateIndex",

  /**
   * Write - Grants permission to update a QuerySuggestions BlockList
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsBlockList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.querySuggestionsBlockList `KendraResource.querySuggestionsBlockList`} 
   */
  UpdateQuerySuggestionsBlockList = "kendra:UpdateQuerySuggestionsBlockList",

  /**
   * Write - Grants permission to update the query suggestions configuration for an index
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateQuerySuggestionsConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   */
  UpdateQuerySuggestionsConfig = "kendra:UpdateQuerySuggestionsConfig",

  /**
   * Write - Grants permission to update a thesaurus
   * @see https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateThesaurus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.thesaurus `KendraResource.thesaurus`} 
   */
  UpdateThesaurus = "kendra:UpdateThesaurus",

  /**
   * * - Grant all kendra permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkendra.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KendraResource.experience `KendraResource.experience`} 
   * - {@link KendraResource.index `KendraResource.index`} 
   * - {@link KendraResource.dataSource `KendraResource.dataSource`} 
   * - {@link KendraResource.faq `KendraResource.faq`} 
   * - {@link KendraResource.querySuggestionsBlockList `KendraResource.querySuggestionsBlockList`} 
   * - {@link KendraResource.thesaurus `KendraResource.thesaurus`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "kendra:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkendra.html
 */
export const KendraResource = {

  /**
   * @see https://docs.aws.amazon.com/kendra/latest/dg/index.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  index: (options: Partial<{partition: string, region: string, account: string, indexId: string}> = {}) => `arn:${options.partition || '*'}:kendra:${options.region || '*'}:${options.account || '*'}:index/${options.indexId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/kendra/latest/dg/data-source.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataSource: (options: Partial<{partition: string, region: string, account: string, indexId: string, dataSourceId: string}> = {}) => `arn:${options.partition || '*'}:kendra:${options.region || '*'}:${options.account || '*'}:index/${options.indexId || '*'}/data-source/${options.dataSourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/kendra/latest/dg/faq.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  faq: (options: Partial<{partition: string, region: string, account: string, indexId: string, faqId: string}> = {}) => `arn:${options.partition || '*'}:kendra:${options.region || '*'}:${options.account || '*'}:index/${options.indexId || '*'}/faq/${options.faqId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html
   */
  experience: (options: Partial<{partition: string, region: string, account: string, indexId: string, experienceId: string}> = {}) => `arn:${options.partition || '*'}:kendra:${options.region || '*'}:${options.account || '*'}:index/${options.indexId || '*'}/experience/${options.experienceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/kendra/latest/dg/thesaurus.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  thesaurus: (options: Partial<{partition: string, region: string, account: string, indexId: string, thesaurusId: string}> = {}) => `arn:${options.partition || '*'}:kendra:${options.region || '*'}:${options.account || '*'}:index/${options.indexId || '*'}/thesaurus/${options.thesaurusId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/kendra/latest/dg/query-suggestions-block-list.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  querySuggestionsBlockList: (options: Partial<{partition: string, region: string, account: string, indexId: string, querySuggestionsBlockListId: string}> = {}) => `arn:${options.partition || '*'}:kendra:${options.region || '*'}:${options.account || '*'}:index/${options.indexId || '*'}/query-suggestions-block-list/${options.querySuggestionsBlockListId || '*'}`,
}

