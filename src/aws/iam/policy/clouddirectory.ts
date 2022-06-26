/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonclouddirectory.html
 */
export enum ClouddirectoryAction {

  /**
   * Write - Grants permission to add a new Facet to an object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AddFacetToObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  AddFacetToObject = "clouddirectory:AddFacetToObject",

  /**
   * Write - Grants permission to copy input published schema into Directory with same name and version as that of published schema
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ApplySchema.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  ApplySchema = "clouddirectory:ApplySchema",

  /**
   * Write - Grants permission to attach an existing object to another existing object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  AttachObject = "clouddirectory:AttachObject",

  /**
   * Write - Grants permission to attach a policy object to any other object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  AttachPolicy = "clouddirectory:AttachPolicy",

  /**
   * Write - Grants permission to attach the specified object to the specified index
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachToIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  AttachToIndex = "clouddirectory:AttachToIndex",

  /**
   * Write - Grants permission to attach a typed link b/w a source & target object reference
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_AttachTypedLink.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  AttachTypedLink = "clouddirectory:AttachTypedLink",

  /**
   * Read - Grants permission to perform all the read operations in a batch. Each individual operation inside BatchRead needs to be granted permissions explicitly
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchRead.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  BatchRead = "clouddirectory:BatchRead",

  /**
   * Write - Grants permission to perform all the write operations in a batch. Each individual operation inside BatchWrite needs to be granted permissions explicitly
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_BatchWrite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  BatchWrite = "clouddirectory:BatchWrite",

  /**
   * Write - Grants permission to create a Directory by copying the published schema into the directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  CreateDirectory = "clouddirectory:CreateDirectory",

  /**
   * Write - Grants permission to create a new Facet in a schema
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateFacet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   */
  CreateFacet = "clouddirectory:CreateFacet",

  /**
   * Write - Grants permission to create an index object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  CreateIndex = "clouddirectory:CreateIndex",

  /**
   * Write - Grants permission to create an object in a Directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  CreateObject = "clouddirectory:CreateObject",

  /**
   * Write - Grants permission to create a new schema in a development state
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateSchema.html
   */
  CreateSchema = "clouddirectory:CreateSchema",

  /**
   * Write - Grants permission to create a new Typed Link facet in a schema
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_CreateTypedLinkFacet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   */
  CreateTypedLinkFacet = "clouddirectory:CreateTypedLinkFacet",

  /**
   * Write - Grants permission to delete a directory. Only disabled directories can be deleted
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  DeleteDirectory = "clouddirectory:DeleteDirectory",

  /**
   * Write - Grants permission to delete a given Facet. All attributes and Rules associated with the facet will be deleted
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteFacet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   */
  DeleteFacet = "clouddirectory:DeleteFacet",

  /**
   * Write - Grants permission to delete an object and its associated attributes
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  DeleteObject = "clouddirectory:DeleteObject",

  /**
   * Write - Grants permission to delete a given schema
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteSchema.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  DeleteSchema = "clouddirectory:DeleteSchema",

  /**
   * Write - Grants permission to delete a given TypedLink Facet. All attributes and Rules associated with the facet will be deleted
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DeleteTypedLinkFacet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   */
  DeleteTypedLinkFacet = "clouddirectory:DeleteTypedLinkFacet",

  /**
   * Write - Grants permission to detach the specified object from the specified index
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachFromIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  DetachFromIndex = "clouddirectory:DetachFromIndex",

  /**
   * Write - Grants permission to detach a given object from the parent object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  DetachObject = "clouddirectory:DetachObject",

  /**
   * Write - Grants permission to detach a policy from an object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  DetachPolicy = "clouddirectory:DetachPolicy",

  /**
   * Write - Grants permission to detach a given typed link b/w given source and target object reference
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DetachTypedLink.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  DetachTypedLink = "clouddirectory:DetachTypedLink",

  /**
   * Write - Grants permission to disable the specified directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_DisableDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  DisableDirectory = "clouddirectory:DisableDirectory",

  /**
   * Write - Grants permission to enable the specified directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_EnableDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  EnableDirectory = "clouddirectory:EnableDirectory",

  /**
   * Read - Grants permission to return current applied schema version ARN, including the minor version in use
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetAppliedSchemaVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   */
  GetAppliedSchemaVersion = "clouddirectory:GetAppliedSchemaVersion",

  /**
   * Read - Grants permission to retrieve metadata about a directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetDirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  GetDirectory = "clouddirectory:GetDirectory",

  /**
   * Read - Grants permission to get details of the Facet, such as Facet Name, Attributes, Rules, or ObjectType
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetFacet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  GetFacet = "clouddirectory:GetFacet",

  /**
   * Read - Grants permission to retrieve attributes that are associated with a typed link
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetLinkAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  GetLinkAttributes = "clouddirectory:GetLinkAttributes",

  /**
   * Read - Grants permission to retrieve attributes within a facet that are associated with an object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  GetObjectAttributes = "clouddirectory:GetObjectAttributes",

  /**
   * Read - Grants permission to retrieve metadata about an object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetObjectInformation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  GetObjectInformation = "clouddirectory:GetObjectInformation",

  /**
   * Read - Grants permission to retrieve a JSON representation of the schema
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetSchemaAsJson.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  GetSchemaAsJson = "clouddirectory:GetSchemaAsJson",

  /**
   * Read - Grants permission to return identity attributes order information associated with a given typed link facet
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_GetTypedLinkFacetInformation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  GetTypedLinkFacetInformation = "clouddirectory:GetTypedLinkFacetInformation",

  /**
   * List - Grants permission to list schemas applied to a directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAppliedSchemaArns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListAppliedSchemaArns = "clouddirectory:ListAppliedSchemaArns",

  /**
   * Read - Grants permission to list indices attached to an object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListAttachedIndices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListAttachedIndices = "clouddirectory:ListAttachedIndices",

  /**
   * List - Grants permission to retrieve the ARNs of schemas in the development state
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDevelopmentSchemaArns.html
   */
  ListDevelopmentSchemaArns = "clouddirectory:ListDevelopmentSchemaArns",

  /**
   * List - Grants permission to list directories created within an account
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListDirectories.html
   */
  ListDirectories = "clouddirectory:ListDirectories",

  /**
   * Read - Grants permission to retrieve attributes attached to the facet
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  ListFacetAttributes = "clouddirectory:ListFacetAttributes",

  /**
   * Read - Grants permission to retrieve the names of facets that exist in a schema
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListFacetNames.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  ListFacetNames = "clouddirectory:ListFacetNames",

  /**
   * Read - Grants permission to return a paginated list of all incoming TypedLinks for a given object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIncomingTypedLinks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListIncomingTypedLinks = "clouddirectory:ListIncomingTypedLinks",

  /**
   * Read - Grants permission to list objects attached to the specified index
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListIndex = "clouddirectory:ListIndex",

  /**
   * List - Grants permission to list the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListManagedSchemaArns.html
   */
  ListManagedSchemaArns = "clouddirectory:ListManagedSchemaArns",

  /**
   * Read - Grants permission to list all attributes associated with an object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListObjectAttributes = "clouddirectory:ListObjectAttributes",

  /**
   * Read - Grants permission to return a paginated list of child objects associated with a given object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectChildren.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListObjectChildren = "clouddirectory:ListObjectChildren",

  /**
   * Read - Grants permission to retrieve all available parent paths for any object type such as node, leaf node, policy node, and index node objects
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParentPaths.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListObjectParentPaths = "clouddirectory:ListObjectParentPaths",

  /**
   * Read - Grants permission to list parent objects associated with a given object in pagination fashion
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectParents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListObjectParents = "clouddirectory:ListObjectParents",

  /**
   * Read - Grants permission to return policies attached to an object in pagination fashion
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListObjectPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListObjectPolicies = "clouddirectory:ListObjectPolicies",

  /**
   * Read - Grants permission to return a paginated list of all outgoing TypedLinks for a given object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListOutgoingTypedLinks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListOutgoingTypedLinks = "clouddirectory:ListOutgoingTypedLinks",

  /**
   * Read - Grants permission to return all of the ObjectIdentifiers to which a given policy is attached
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPolicyAttachments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListPolicyAttachments = "clouddirectory:ListPolicyAttachments",

  /**
   * List - Grants permission to retrieve published schema ARNs
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListPublishedSchemaArns.html
   */
  ListPublishedSchemaArns = "clouddirectory:ListPublishedSchemaArns",

  /**
   * Read - Grants permission to return tags for a resource
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  ListTagsForResource = "clouddirectory:ListTagsForResource",

  /**
   * Read - Grants permission to return a paginated list of attributes associated with typed link facet
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  ListTypedLinkFacetAttributes = "clouddirectory:ListTypedLinkFacetAttributes",

  /**
   * Read - Grants permission to return a paginated list of typed link facet names that exist in a schema
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_ListTypedLinkFacetNames.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  ListTypedLinkFacetNames = "clouddirectory:ListTypedLinkFacetNames",

  /**
   * Read - Grants permission to list all policies from the root of the Directory to the object specified
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_LookupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  LookupPolicy = "clouddirectory:LookupPolicy",

  /**
   * Write - Grants permission to publish a development schema with a version
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PublishSchema.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   */
  PublishSchema = "clouddirectory:PublishSchema",

  /**
   * Write - Grants permission to update a schema using JSON upload. Only available for development schemas
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_PutSchemaFromJson.html
   */
  PutSchemaFromJson = "clouddirectory:PutSchemaFromJson",

  /**
   * Write - Grants permission to remove the specified facet from the specified object
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_RemoveFacetFromObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  RemoveFacetFromObject = "clouddirectory:RemoveFacetFromObject",

  /**
   * Tagging - Grants permission to add tags to a resource
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  TagResource = "clouddirectory:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  UntagResource = "clouddirectory:UntagResource",

  /**
   * Write - Grants permission to add/update/delete existing Attributes, Rules, or ObjectType of a Facet
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateFacet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   */
  UpdateFacet = "clouddirectory:UpdateFacet",

  /**
   * Write - Grants permission to update a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its IdentityAttributeOrder
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateLinkAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  UpdateLinkAttributes = "clouddirectory:UpdateLinkAttributes",

  /**
   * Write - Grants permission to update a given object's attributes
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateObjectAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   */
  UpdateObjectAttributes = "clouddirectory:UpdateObjectAttributes",

  /**
   * Write - Grants permission to update the schema name with a new name
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateSchema.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   */
  UpdateSchema = "clouddirectory:UpdateSchema",

  /**
   * Write - Grants permission to add/update/delete existing Attributes, Rules, identity attribute order of a TypedLink Facet
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpdateTypedLinkFacet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   */
  UpdateTypedLinkFacet = "clouddirectory:UpdateTypedLinkFacet",

  /**
   * Write - Grants permission to upgrade a single directory in-place using the PublishedSchemaArn with schema updates found in MinorVersion. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpgradeAppliedSchema.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  UpgradeAppliedSchema = "clouddirectory:UpgradeAppliedSchema",

  /**
   * Write - Grants permission to upgrade a published schema under a new minor version revision using the current contents of DevelopmentSchemaArn
   * @see https://docs.aws.amazon.com/directoryservice/latest/APIReference/API_UpgradePublishedSchema.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   */
  UpgradePublishedSchema = "clouddirectory:UpgradePublishedSchema",

  /**
   * * - Grant all clouddirectory permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonclouddirectory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ClouddirectoryResource.directory `ClouddirectoryResource.directory`} 
   * - {@link ClouddirectoryResource.publishedSchema `ClouddirectoryResource.publishedSchema`} 
   * - {@link ClouddirectoryResource.appliedSchema `ClouddirectoryResource.appliedSchema`} 
   * - {@link ClouddirectoryResource.developmentSchema `ClouddirectoryResource.developmentSchema`} 
   */
  All = "clouddirectory:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonclouddirectory.html
 */
export const ClouddirectoryResource = {

  /**
   * @see https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory
   */
  appliedSchema: (options: Partial<{partition: string, region: string, account: string, directoryId: string, schemaName: string, version: string}> = {}) => `arn:${options.partition || '*'}:clouddirectory:${options.region || '*'}:${options.account || '*'}:directory/${options.directoryId || '*'}/schema/${options.schemaName || '*'}/${options.version || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory
   */
  developmentSchema: (options: Partial<{partition: string, region: string, account: string, schemaName: string}> = {}) => `arn:${options.partition || '*'}:clouddirectory:${options.region || '*'}:${options.account || '*'}:schema/development/${options.schemaName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory
   */
  directory: (options: Partial<{partition: string, region: string, account: string, directoryId: string}> = {}) => `arn:${options.partition || '*'}:clouddirectory:${options.region || '*'}:${options.account || '*'}:directory/${options.directoryId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#whatisdirectory
   */
  publishedSchema: (options: Partial<{partition: string, region: string, account: string, schemaName: string, version: string}> = {}) => `arn:${options.partition || '*'}:clouddirectory:${options.region || '*'}:${options.account || '*'}:schema/published/${options.schemaName || '*'}/${options.version || '*'}`,
}

