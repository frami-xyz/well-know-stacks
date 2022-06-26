/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgeschemas.html
 */
export enum SchemasAction {

  /**
   * Write - Grants permission to create an event schema discoverer. Once created, your events will be automatically map into corresponding schema documents
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#CreateDiscoverer
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.discoverer `SchemasResource.discoverer`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDiscoverer = "schemas:CreateDiscoverer",

  /**
   * Write - Grants permission to create a new schema registry in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#CreateRegistry
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRegistry = "schemas:CreateRegistry",

  /**
   * Write - Grants permission to create a new schema in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#CreateSchema
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSchema = "schemas:CreateSchema",

  /**
   * Write - Grants permission to delete discoverer in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DeleteDiscoverer
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.discoverer `SchemasResource.discoverer`} 
   */
  DeleteDiscoverer = "schemas:DeleteDiscoverer",

  /**
   * Write - Grants permission to delete an existing registry in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DeleteRegistry
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   */
  DeleteRegistry = "schemas:DeleteRegistry",

  /**
   * Write - Grants permission to delete the resource-based policy attached to a given registry
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#DeleteResourcePolicy
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   */
  DeleteResourcePolicy = "schemas:DeleteResourcePolicy",

  /**
   * Write - Grants permission to delete an existing schema in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DeleteSchema
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  DeleteSchema = "schemas:DeleteSchema",

  /**
   * Write - Grants permission to delete a specific version of schema in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-version-schemaversion.html#DeleteSchemaVersion
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  DeleteSchemaVersion = "schemas:DeleteSchemaVersion",

  /**
   * Read - Grants permission to retrieve metadata for generated code for specific schema in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#DescribeCodeBinding
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  DescribeCodeBinding = "schemas:DescribeCodeBinding",

  /**
   * Read - Grants permission to retrieve discoverer metadata in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#DescribeDiscoverer
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.discoverer `SchemasResource.discoverer`} 
   */
  DescribeDiscoverer = "schemas:DescribeDiscoverer",

  /**
   * Read - Grants permission to describe an existing registry metadata in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#DescribeRegistry
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   */
  DescribeRegistry = "schemas:DescribeRegistry",

  /**
   * Read - Grants permission to retrieve an existing schema in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#DescribeSchema
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  DescribeSchema = "schemas:DescribeSchema",

  /**
   * Read - Grants permission to export the AWS registry or discovered schemas in OpenAPI 3 format to JSONSchema format
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#ExportSchema
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  ExportSchema = "schemas:ExportSchema",

  /**
   * Read - Grants permission to retrieve metadata for generated code for specific schema in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language-source.html#GetCodeBindingSource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  GetCodeBindingSource = "schemas:GetCodeBindingSource",

  /**
   * Read - Grants permission to retrieve a schema for the provided list of sample events
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discover.html#GetDiscoveredSchema
   */
  GetDiscoveredSchema = "schemas:GetDiscoveredSchema",

  /**
   * Read - Grants permission to retrieve the resource-based policy attached to a given registry
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#GetResourcePolicy
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   */
  GetResourcePolicy = "schemas:GetResourcePolicy",

  /**
   * List - Grants permission to list all discoverers in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#ListDiscoverers
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.discoverer `SchemasResource.discoverer`} 
   */
  ListDiscoverers = "schemas:ListDiscoverers",

  /**
   * List - Grants permission to list all registries in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries.html#ListRegistries
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   */
  ListRegistries = "schemas:ListRegistries",

  /**
   * List - Grants permission to list all versions of a schema
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-versions.html#ListSchemaVersions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  ListSchemaVersions = "schemas:ListSchemaVersions",

  /**
   * List - Grants permission to list all schemas
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas.html#ListSchemas
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  ListSchemas = "schemas:ListSchemas",

  /**
   * Read - Grants permission to lists tags for a resource
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#ListTagsForResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.discoverer `SchemasResource.discoverer`} 
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  ListTagsForResource = "schemas:ListTagsForResource",

  /**
   * Write - Grants permission to generate code for specific schema in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname-language-language.html#PutCodeBinding
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  PutCodeBinding = "schemas:PutCodeBinding",

  /**
   * Write - Grants permission to attach a resource-based policy to a given registry
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-policy.html#PutResourcePolicy
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   */
  PutResourcePolicy = "schemas:PutResourcePolicy",

  /**
   * List - Grants permission to search schemas based on specified keywords in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-search.html#SearchSchemas
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  SearchSchemas = "schemas:SearchSchemas",

  /**
   * Write - Grants permission to start the specified discoverer. Once started the discoverer will automatically register schemas for published events to configured source in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StartDiscoverer
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.discoverer `SchemasResource.discoverer`} 
   */
  StartDiscoverer = "schemas:StartDiscoverer",

  /**
   * Write - Grants permission to stop the specified discoverer. Once stopped the discoverer will no longer register schemas for published events to configured source in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#StopDiscoverer
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.discoverer `SchemasResource.discoverer`} 
   */
  StopDiscoverer = "schemas:StopDiscoverer",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#TagResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.discoverer `SchemasResource.discoverer`} 
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "schemas:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from a resource
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/tags-resource-arn.html#UntagResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.discoverer `SchemasResource.discoverer`} 
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "schemas:UntagResource",

  /**
   * Write - Grants permission to update an existing discoverer in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers-id-discovererid.html#UpdateDiscoverer
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.discoverer `SchemasResource.discoverer`} 
   */
  UpdateDiscoverer = "schemas:UpdateDiscoverer",

  /**
   * Write - Grants permission to update an existing registry metadata in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname.html#UpdateRegistry
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   */
  UpdateRegistry = "schemas:UpdateRegistry",

  /**
   * Write - Grants permission to update an existing schema in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-registries-name-registryname-schemas-name-schemaname.html#UpdateSchema
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   */
  UpdateSchema = "schemas:UpdateSchema",

  /**
   * * - Grant all schemas permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgeschemas.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SchemasResource.discoverer `SchemasResource.discoverer`} 
   * - {@link SchemasResource.registry `SchemasResource.registry`} 
   * - {@link SchemasResource.schema `SchemasResource.schema`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "schemas:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgeschemas.html
 */
export const SchemasResource = {

  /**
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  discoverer: (options: Partial<{partition: string, region: string, account: string, discovererId: string}> = {}) => `arn:${options.partition || '*'}:schemas:${options.region || '*'}:${options.account || '*'}:discoverer/${options.discovererId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  registry: (options: Partial<{partition: string, region: string, account: string, registryName: string}> = {}) => `arn:${options.partition || '*'}:schemas:${options.region || '*'}:${options.account || '*'}:registry/${options.registryName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  schema: (options: Partial<{partition: string, region: string, account: string, registryName: string, schemaName: string}> = {}) => `arn:${options.partition || '*'}:schemas:${options.region || '*'}:${options.account || '*'}:schema/${options.registryName || '*'}/${options.schemaName || '*'}`,
}

