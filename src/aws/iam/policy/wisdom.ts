/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectwisdom.html
 */
export enum WisdomAction {

  /**
   * Write - Grants permission to create an assistant
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAssistant.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAssistant = "wisdom:CreateAssistant",

  /**
   * Write - Grants permission to create an association between an assistant and another resource
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateAssistantAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAssistantAssociation = "wisdom:CreateAssistantAssociation",

  /**
   * Write - Grants permission to create content
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateContent = "wisdom:CreateContent",

  /**
   * Write - Grants permission to create a knowledge base
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateKnowledgeBase.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateKnowledgeBase = "wisdom:CreateKnowledgeBase",

  /**
   * Write - Grants permission to create a session
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSession = "wisdom:CreateSession",

  /**
   * Write - Grants permission to delete an assistant
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAssistant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   */
  DeleteAssistant = "wisdom:DeleteAssistant",

  /**
   * Write - Grants permission to delete an assistant association
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteAssistantAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   * - {@link WisdomResource.assistantAssociation `WisdomResource.assistantAssociation`} 
   */
  DeleteAssistantAssociation = "wisdom:DeleteAssistantAssociation",

  /**
   * Write - Grants permission to delete content
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.content `WisdomResource.content`} 
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   */
  DeleteContent = "wisdom:DeleteContent",

  /**
   * Write - Grants permission to delete a knowledge base
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   */
  DeleteKnowledgeBase = "wisdom:DeleteKnowledgeBase",

  /**
   * Read - Grants permission to retrieve information about an assistant
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetAssistant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   */
  GetAssistant = "wisdom:GetAssistant",

  /**
   * Read - Grants permission to retrieve information about an assistant association
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetAssistantAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   * - {@link WisdomResource.assistantAssociation `WisdomResource.assistantAssociation`} 
   */
  GetAssistantAssociation = "wisdom:GetAssistantAssociation",

  /**
   * Read - Grants permission to retrieve content, including a pre-signed URL to download the content
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.content `WisdomResource.content`} 
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   */
  GetContent = "wisdom:GetContent",

  /**
   * Read - Grants permission to retrieve summary information about the content
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetContentSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.content `WisdomResource.content`} 
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   */
  GetContentSummary = "wisdom:GetContentSummary",

  /**
   * Read - Grants permission to retrieve information about the knowledge base
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetKnowledgeBase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   */
  GetKnowledgeBase = "wisdom:GetKnowledgeBase",

  /**
   * Read - Grants permission to retrieve recommendations for the specified session
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   */
  GetRecommendations = "wisdom:GetRecommendations",

  /**
   * Read - Grants permission to retrieve information for a specified session
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   * - {@link WisdomResource.session `WisdomResource.session`} 
   */
  GetSession = "wisdom:GetSession",

  /**
   * List - Grants permission to list information about assistant associations
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAssistantAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   */
  ListAssistantAssociations = "wisdom:ListAssistantAssociations",

  /**
   * List - Grants permission to list information about assistants
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListAssistants.html
   */
  ListAssistants = "wisdom:ListAssistants",

  /**
   * List - Grants permission to list the content with a knowledge base
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListContents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   */
  ListContents = "wisdom:ListContents",

  /**
   * List - Grants permission to list information about knowledge bases
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListKnowledgeBases.html
   */
  ListKnowledgeBases = "wisdom:ListKnowledgeBases",

  /**
   * Read - Grants permission to list the tags for the specified resource
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "wisdom:ListTagsForResource",

  /**
   * Write - Grants permission to remove the specified recommendations from the specified assistant's queue of newly available recommendations
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   */
  NotifyRecommendationsReceived = "wisdom:NotifyRecommendationsReceived",

  /**
   * Read - Grants permission to perform a manual search against the specified assistant
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   */
  QueryAssistant = "wisdom:QueryAssistant",

  /**
   * Write - Grants permission to remove a URI template from a knowledge base
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_RemoveKnowledgeBaseTemplateUri.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   */
  RemoveKnowledgeBaseTemplateUri = "wisdom:RemoveKnowledgeBaseTemplateUri",

  /**
   * Read - Grants permission to search for content referencing a specified knowledge base. Can be used to get a specific content resource by its name
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   */
  SearchContent = "wisdom:SearchContent",

  /**
   * Read - Grants permission to search for sessions referencing a specified assistant. Can be used to et a specific session resource by its name
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchSessions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   */
  SearchSessions = "wisdom:SearchSessions",

  /**
   * Write - Grants permission to get a URL to upload content to a knowledge base
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   */
  StartContentUpload = "wisdom:StartContentUpload",

  /**
   * Tagging - Grants permission to add the specified tags to the specified resource
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "wisdom:TagResource",

  /**
   * Tagging - Grants permission to remove the specified tags from the specified resource
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "wisdom:UntagResource",

  /**
   * Write - Grants permission to update information about the content
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.content `WisdomResource.content`} 
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   */
  UpdateContent = "wisdom:UpdateContent",

  /**
   * Write - Grants permission to update the template URI of a knowledge base
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateKnowledgeBaseTemplateUri.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   */
  UpdateKnowledgeBaseTemplateUri = "wisdom:UpdateKnowledgeBaseTemplateUri",

  /**
   * * - Grant all wisdom permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectwisdom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WisdomResource.assistant `WisdomResource.assistant`} 
   * - {@link WisdomResource.knowledgeBase `WisdomResource.knowledgeBase`} 
   * - {@link WisdomResource.assistantAssociation `WisdomResource.assistantAssociation`} 
   * - {@link WisdomResource.content `WisdomResource.content`} 
   * - {@link WisdomResource.session `WisdomResource.session`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "wisdom:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectwisdom.html
 */
export const WisdomResource = {

  /**
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_AssistantData.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  assistant: (options: Partial<{partition: string, region: string, account: string, assistantId: string}> = {}) => `arn:${options.partition || '*'}:wisdom:${options.region || '*'}:${options.account || '*'}:assistant/${options.assistantId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_AssistantAssociationData.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  assistantAssociation: (options: Partial<{partition: string, region: string, account: string, assistantId: string, assistantAssociationId: string}> = {}) => `arn:${options.partition || '*'}:wisdom:${options.region || '*'}:${options.account || '*'}:association/${options.assistantId || '*'}/${options.assistantAssociationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_ContentData.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  content: (options: Partial<{partition: string, region: string, account: string, knowledgeBaseId: string, contentId: string}> = {}) => `arn:${options.partition || '*'}:wisdom:${options.region || '*'}:${options.account || '*'}:content/${options.knowledgeBaseId || '*'}/${options.contentId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_KnowledgeBaseData.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  knowledgeBase: (options: Partial<{partition: string, region: string, account: string, knowledgeBaseId: string}> = {}) => `arn:${options.partition || '*'}:wisdom:${options.region || '*'}:${options.account || '*'}:knowledge-base/${options.knowledgeBaseId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SessionData.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  session: (options: Partial<{partition: string, region: string, account: string, assistantId: string, sessionId: string}> = {}) => `arn:${options.partition || '*'}:wisdom:${options.region || '*'}:${options.account || '*'}:session/${options.assistantId || '*'}/${options.sessionId || '*'}`,
}

