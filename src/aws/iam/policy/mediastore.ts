/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediastore.html
 */
export enum MediastoreAction {

  /**
   * Write - Grants permission to create a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_CreateContainer.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateContainer = "mediastore:CreateContainer",

  /**
   * Write - Grants permission to delete a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteContainer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  DeleteContainer = "mediastore:DeleteContainer",

  /**
   * PermissionsManagement - Grants permission to delete the access policy of a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteContainerPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  DeleteContainerPolicy = "mediastore:DeleteContainerPolicy",

  /**
   * Write - Grants permission to delete the CORS policy from a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteCorsPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  DeleteCorsPolicy = "mediastore:DeleteCorsPolicy",

  /**
   * Write - Grants permission to delete the lifecycle policy from a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteLifecyclePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  DeleteLifecyclePolicy = "mediastore:DeleteLifecyclePolicy",

  /**
   * Write - Grants permission to delete the metric policy from a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteMetricPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  DeleteMetricPolicy = "mediastore:DeleteMetricPolicy",

  /**
   * Write - Grants permission to delete an object
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_DeleteObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.object `MediastoreResource.object`} 
   */
  DeleteObject = "mediastore:DeleteObject",

  /**
   * List - Grants permission to retrieve details on a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_DescribeContainer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  DescribeContainer = "mediastore:DescribeContainer",

  /**
   * List - Grants permission to retrieve metadata for an object
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_DescribeObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.object `MediastoreResource.object`} 
   */
  DescribeObject = "mediastore:DescribeObject",

  /**
   * Read - Grants permission to retrieve the access policy of a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetContainerPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  GetContainerPolicy = "mediastore:GetContainerPolicy",

  /**
   * Read - Grants permission to retrieve the CORS policy of a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetCorsPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  GetCorsPolicy = "mediastore:GetCorsPolicy",

  /**
   * Read - Grants permission to retrieve the lifecycle policy that is assigned to a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetLifecyclePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  GetLifecyclePolicy = "mediastore:GetLifecyclePolicy",

  /**
   * Read - Grants permission to retrieve the metric policy that is assigned to a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetMetricPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  GetMetricPolicy = "mediastore:GetMetricPolicy",

  /**
   * Read - Grants permission to retrieve an object
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_GetObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.object `MediastoreResource.object`} 
   */
  GetObject = "mediastore:GetObject",

  /**
   * List - Grants permission to retrieve a list of containers in the current account
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_ListContainers.html
   */
  ListContainers = "mediastore:ListContainers",

  /**
   * List - Grants permission to retrieve a list of objects and subfolders that are stored in a folder
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_ListItems.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.folder `MediastoreResource.folder`} 
   */
  ListItems = "mediastore:ListItems",

  /**
   * Read - Grants permission to list tags on a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  ListTagsForResource = "mediastore:ListTagsForResource",

  /**
   * PermissionsManagement - Grants permission to create or replace the access policy of a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutContainerPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  PutContainerPolicy = "mediastore:PutContainerPolicy",

  /**
   * Write - Grants permission to add or modify the CORS policy of a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutCorsPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  PutCorsPolicy = "mediastore:PutCorsPolicy",

  /**
   * Write - Grants permission to add or modify the lifecycle policy that is assigned to a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutLifecyclePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  PutLifecyclePolicy = "mediastore:PutLifecyclePolicy",

  /**
   * Write - Grants permission to add or modify the metric policy that is assigned to a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutMetricPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  PutMetricPolicy = "mediastore:PutMetricPolicy",

  /**
   * Write - Grants permission to upload an object
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_PutObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.object `MediastoreResource.object`} 
   */
  PutObject = "mediastore:PutObject",

  /**
   * Write - Grants permission to start access logging on a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_StartAccessLogging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  StartAccessLogging = "mediastore:StartAccessLogging",

  /**
   * Write - Grants permission to stop access logging on a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_StopAccessLogging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   */
  StopAccessLogging = "mediastore:StopAccessLogging",

  /**
   * Tagging - Grants permission to add tags to a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "mediastore:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a container
   * @see https://docs.aws.amazon.com/mediastore/latest/apireference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "mediastore:UntagResource",

  /**
   * * - Grant all mediastore permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediastore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediastoreResource.container `MediastoreResource.container`} 
   * - {@link MediastoreResource.object `MediastoreResource.object`} 
   * - {@link MediastoreResource.folder `MediastoreResource.folder`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "mediastore:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediastore.html
 */
export const MediastoreResource = {

  /**
   * @see https://docs.aws.amazon.com/mediastore/latest/ug/containers.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  container: (options: Partial<{partition: string, region: string, account: string, containerName: string}> = {}) => `arn:${options.partition || '*'}:mediastore:${options.region || '*'}:${options.account || '*'}:container/${options.containerName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediastore/latest/ug/objects.html
   */
  object: (options: Partial<{partition: string, region: string, account: string, containerName: string, objectPath: string}> = {}) => `arn:${options.partition || '*'}:mediastore:${options.region || '*'}:${options.account || '*'}:container/${options.containerName || '*'}/${options.objectPath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediastore/latest/ug/folders.html
   */
  folder: (options: Partial<{partition: string, region: string, account: string, containerName: string, folderPath: string}> = {}) => `arn:${options.partition || '*'}:mediastore:${options.region || '*'}:${options.account || '*'}:container/${options.containerName || '*'}/${options.folderPath || '*'}`,
}

