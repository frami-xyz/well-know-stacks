/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappsync.html
 */
export enum AppsyncAction {

  /**
   * Write - Grants permission to attach a GraphQL API to a custom domain name in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_AssociateApi.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.domain `AppsyncResource.domain`} 
   */
  AssociateApi = "appsync:AssociateApi",

  /**
   * Write - Grants permission to create an API cache in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateApiCache.html
   */
  CreateApiCache = "appsync:CreateApiCache",

  /**
   * Write - Grants permission to create a unique key that you can distribute to clients who are executing your API
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateApiKey.html
   */
  CreateApiKey = "appsync:CreateApiKey",

  /**
   * Write - Grants permission to create a data source
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateDataSource.html
   */
  CreateDataSource = "appsync:CreateDataSource",

  /**
   * Write - Grants permission to create a custom domain name in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateDomainName.html
   */
  CreateDomainName = "appsync:CreateDomainName",

  /**
   * Write - Grants permission to create a new function
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateFunction.html
   */
  CreateFunction = "appsync:CreateFunction",

  /**
   * Write - Grants permission to create a GraphQL API, which is the top level AppSync resource
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateGraphqlApi.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateGraphqlApi = "appsync:CreateGraphqlApi",

  /**
   * Write - Grants permission to create a resolver. A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateResolver.html
   */
  CreateResolver = "appsync:CreateResolver",

  /**
   * Write - Grants permission to create a type
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateType.html
   */
  CreateType = "appsync:CreateType",

  /**
   * Write - Grants permission to delete an API cache in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteApiCache.html
   */
  DeleteApiCache = "appsync:DeleteApiCache",

  /**
   * Write - Grants permission to delete an API key
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteApiKey.html
   */
  DeleteApiKey = "appsync:DeleteApiKey",

  /**
   * Write - Grants permission to delete a data source
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteDataSource.html
   */
  DeleteDataSource = "appsync:DeleteDataSource",

  /**
   * Write - Grants permission to delete a custom domain name in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteDomainName.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.domain `AppsyncResource.domain`} 
   */
  DeleteDomainName = "appsync:DeleteDomainName",

  /**
   * Write - Grants permission to delete a function
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteFunction.html
   */
  DeleteFunction = "appsync:DeleteFunction",

  /**
   * Write - Grants permission to delete a GraphQL Api. This will also clean up every AppSync resource below that API
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteGraphqlApi.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.graphqlapi `AppsyncResource.graphqlapi`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteGraphqlApi = "appsync:DeleteGraphqlApi",

  /**
   * Write - Grants permission to delete a resolver
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteResolver.html
   */
  DeleteResolver = "appsync:DeleteResolver",

  /**
   * Write - Grants permission to delete a type
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_DeleteType.html
   */
  DeleteType = "appsync:DeleteType",

  /**
   * Write - Grants permission to dettach a GraphQL API to a custom domain name in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_DisassociateApi.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.domain `AppsyncResource.domain`} 
   */
  DisassociateApi = "appsync:DisassociateApi",

  /**
   * Write - Grants permission to flush an API cache in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_FlushApiCache.html
   */
  FlushApiCache = "appsync:FlushApiCache",

  /**
   * Read - Grants permission to read custom domain name - GraphQL API association details in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetApiAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.domain `AppsyncResource.domain`} 
   */
  GetApiAssociation = "appsync:GetApiAssociation",

  /**
   * Read - Grants permission to read information about an API cache in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetApiCache.html
   */
  GetApiCache = "appsync:GetApiCache",

  /**
   * Read - Grants permission to retrieve a data source
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetDataSource.html
   */
  GetDataSource = "appsync:GetDataSource",

  /**
   * Read - Grants permission to read information about a custom domain name in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetDomainName.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.domain `AppsyncResource.domain`} 
   */
  GetDomainName = "appsync:GetDomainName",

  /**
   * Read - Grants permission to retrieve a function
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetFunction.html
   */
  GetFunction = "appsync:GetFunction",

  /**
   * Read - Grants permission to retrieve a GraphQL API
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetGraphqlApi.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.graphqlapi `AppsyncResource.graphqlapi`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetGraphqlApi = "appsync:GetGraphqlApi",

  /**
   * Read - Grants permission to retrieve the introspection schema for a GraphQL API
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetIntrospectionSchema.html
   */
  GetIntrospectionSchema = "appsync:GetIntrospectionSchema",

  /**
   * Read - Grants permission to retrieve a resolver
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetResolver.html
   */
  GetResolver = "appsync:GetResolver",

  /**
   * Read - Grants permission to retrieve the current status of a schema creation operation
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetSchemaCreationStatus.html
   */
  GetSchemaCreationStatus = "appsync:GetSchemaCreationStatus",

  /**
   * Read - Grants permission to retrieve a type
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_GetType.html
   */
  GetType = "appsync:GetType",

  /**
   * Write - Grants permission to send a GraphQL query to a GraphQL API
   * @see https://docs.aws.amazon.com/appsync/latest/devguide/using-your-api.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.field `AppsyncResource.field`} 
   * - {@link AppsyncResource.graphqlapi `AppsyncResource.graphqlapi`} 
   */
  GraphQL = "appsync:GraphQL",

  /**
   * List - Grants permission to list the API keys for a given API
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListApiKeys.html
   */
  ListApiKeys = "appsync:ListApiKeys",

  /**
   * List - Grants permission to list the data sources for a given API
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListDataSources.html
   */
  ListDataSources = "appsync:ListDataSources",

  /**
   * List - Grants permission to enumerate custom domain names in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListDomainNames.html
   */
  ListDomainNames = "appsync:ListDomainNames",

  /**
   * List - Grants permission to list the functions for a given API
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListFunctions.html
   */
  ListFunctions = "appsync:ListFunctions",

  /**
   * List - Grants permission to list GraphQL APIs
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListGraphqlApis.html
   */
  ListGraphqlApis = "appsync:ListGraphqlApis",

  /**
   * List - Grants permission to list the resolvers for a given API and type
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListResolvers.html
   */
  ListResolvers = "appsync:ListResolvers",

  /**
   * List - Grants permission to list the resolvers that are associated with a specific function
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListResolversByFunction.html
   */
  ListResolversByFunction = "appsync:ListResolversByFunction",

  /**
   * Read - Grants permission to list the tags for a resource
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.graphqlapi `AppsyncResource.graphqlapi`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "appsync:ListTagsForResource",

  /**
   * List - Grants permission to list the types for a given API
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_ListTypes.html
   */
  ListTypes = "appsync:ListTypes",

  /**
   * Write - Grants permission to set a web ACL
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_SetWebACL.html
   */
  SetWebACL = "appsync:SetWebACL",

  /**
   * Write - Grants permission to add a new schema to your GraphQL API. This operation is asynchronous - GetSchemaCreationStatus can show when it has completed
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_StartSchemaCreation.html
   */
  StartSchemaCreation = "appsync:StartSchemaCreation",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.graphqlapi `AppsyncResource.graphqlapi`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "appsync:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.graphqlapi `AppsyncResource.graphqlapi`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "appsync:UntagResource",

  /**
   * Write - Grants permission to update an API cache in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateApiCache.html
   */
  UpdateApiCache = "appsync:UpdateApiCache",

  /**
   * Write - Grants permission to update an API key for a given API
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateApiKey.html
   */
  UpdateApiKey = "appsync:UpdateApiKey",

  /**
   * Write - Grants permission to update a data source
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateDataSource.html
   */
  UpdateDataSource = "appsync:UpdateDataSource",

  /**
   * Write - Grants permission to update a custom domain name in AppSync
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateDomainName.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.domain `AppsyncResource.domain`} 
   */
  UpdateDomainName = "appsync:UpdateDomainName",

  /**
   * Write - Grants permission to update an existing function
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateFunction.html
   */
  UpdateFunction = "appsync:UpdateFunction",

  /**
   * Write - Grants permission to update a GraphQL API
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateGraphqlApi.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.graphqlapi `AppsyncResource.graphqlapi`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateGraphqlApi = "appsync:UpdateGraphqlApi",

  /**
   * Write - Grants permission to update a resolver
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateResolver.html
   */
  UpdateResolver = "appsync:UpdateResolver",

  /**
   * Write - Grants permission to update a type
   * @see https://docs.aws.amazon.com/appsync/latest/APIReference/API_UpdateType.html
   */
  UpdateType = "appsync:UpdateType",

  /**
   * * - Grant all appsync permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappsync.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppsyncResource.domain `AppsyncResource.domain`} 
   * - {@link AppsyncResource.graphqlapi `AppsyncResource.graphqlapi`} 
   * - {@link AppsyncResource.field `AppsyncResource.field`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "appsync:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappsync.html
 */
export const AppsyncResource = {

  /**
   * @see https://docs.aws.amazon.com/appsync/latest/devguide/attaching-a-data-source.html
   */
  datasource: (options: Partial<{partition: string, region: string, account: string, graphQLAPIId: string, datasourceName: string}> = {}) => `arn:${options.partition || '*'}:appsync:${options.region || '*'}:${options.account || '*'}:apis/${options.graphQLAPIId || '*'}/datasources/${options.datasourceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appsync/latest/devguide/custom-domain-name.html
   */
  domain: (options: Partial<{partition: string, region: string, account: string, domainName: string}> = {}) => `arn:${options.partition || '*'}:appsync:${options.region || '*'}:${options.account || '*'}:domainnames/${options.domainName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appsync/latest/devguide/designing-a-graphql-api.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  graphqlapi: (options: Partial<{partition: string, region: string, account: string, graphQLAPIId: string}> = {}) => `arn:${options.partition || '*'}:appsync:${options.region || '*'}:${options.account || '*'}:apis/${options.graphQLAPIId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appsync/latest/devguide/configuring-resolvers.html
   */
  field: (options: Partial<{partition: string, region: string, account: string, graphQLAPIId: string, typeName: string, fieldName: string}> = {}) => `arn:${options.partition || '*'}:appsync:${options.region || '*'}:${options.account || '*'}:apis/${options.graphQLAPIId || '*'}/types/${options.typeName || '*'}/fields/${options.fieldName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appsync/latest/devguide/designing-your-schema.html#adding-a-root-query-type
   */
  type: (options: Partial<{partition: string, region: string, account: string, graphQLAPIId: string, typeName: string}> = {}) => `arn:${options.partition || '*'}:appsync:${options.region || '*'}:${options.account || '*'}:apis/${options.graphQLAPIId || '*'}/types/${options.typeName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appsync/latest/devguide/pipeline-resolvers.html
   */
  function: (options: Partial<{partition: string, region: string, account: string, graphQLAPIId: string, functionId: string}> = {}) => `arn:${options.partition || '*'}:appsync:${options.region || '*'}:${options.account || '*'}:apis/${options.graphQLAPIId || '*'}/functions/${options.functionId || '*'}`,
}

