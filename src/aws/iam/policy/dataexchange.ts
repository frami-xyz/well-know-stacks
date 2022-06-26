/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdataexchange.html
 */
export enum DataexchangeAction {

  /**
   * Write - Grants permission to cancel a job
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#CancelJob
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.jobs `DataexchangeResource.jobs`} 
   */
  CancelJob = "dataexchange:CancelJob",

  /**
   * Write - Grants permission to create an asset (for example, in a Job)
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#CreateAsset
   */
  CreateAsset = "dataexchange:CreateAsset",

  /**
   * Write - Grants permission to create a data set
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets.html#CreateDataSet
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the mandatory tags in the create request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the create request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataSet = "dataexchange:CreateDataSet",

  /**
   * Write - Grants permission to create an event action
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/api-permission-ref.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.eventActions `DataexchangeResource.eventActions`} 
   */
  CreateEventAction = "dataexchange:CreateEventAction",

  /**
   * Write - Grants permission to create a job to import or export assets
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#CreateJob
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.jobs `DataexchangeResource.jobs`} 
   */
  CreateJob = "dataexchange:CreateJob",

  /**
   * Write - Grants permission to create a revision
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#CreateRevision
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the mandatory tags in the create request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the create request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRevision = "dataexchange:CreateRevision",

  /**
   * Write - Grants permission to delete an asset
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#DeleteAsset
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.assets `DataexchangeResource.assets`} 
   */
  DeleteAsset = "dataexchange:DeleteAsset",

  /**
   * Write - Grants permission to delete a data set
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#DeleteDataSet
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.dataSets `DataexchangeResource.dataSets`} 
   */
  DeleteDataSet = "dataexchange:DeleteDataSet",

  /**
   * Write - Grants permission to delete an event action
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/api-permission-ref.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.eventActions `DataexchangeResource.eventActions`} 
   */
  DeleteEventAction = "dataexchange:DeleteEventAction",

  /**
   * Write - Grants permission to delete a revision
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#DeleteRevision
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.revisions `DataexchangeResource.revisions`} 
   */
  DeleteRevision = "dataexchange:DeleteRevision",

  /**
   * Read - Grants permission to get information about an asset and to export it (for example, in a Job)
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#GetAsset
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.assets `DataexchangeResource.assets`} 
   */
  GetAsset = "dataexchange:GetAsset",

  /**
   * Read - Grants permission to get information about a data set
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#GetDataSet
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.dataSets `DataexchangeResource.dataSets`} 
   */
  GetDataSet = "dataexchange:GetDataSet",

  /**
   * Read - Grants permission to get an event action
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/api-permission-ref.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.eventActions `DataexchangeResource.eventActions`} 
   */
  GetEventAction = "dataexchange:GetEventAction",

  /**
   * Read - Grants permission to get information about a job
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#GetJob
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.jobs `DataexchangeResource.jobs`} 
   */
  GetJob = "dataexchange:GetJob",

  /**
   * Read - Grants permission to get information about a revision
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#GetRevision
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.revisions `DataexchangeResource.revisions`} 
   */
  GetRevision = "dataexchange:GetRevision",

  /**
   * Read - Grants permission to list the revisions of a data set
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#ListDataSetRevisions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.revisions `DataexchangeResource.revisions`} 
   */
  ListDataSetRevisions = "dataexchange:ListDataSetRevisions",

  /**
   * Read - Grants permission to list data sets for the account
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets.html#ListDataSets
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.dataSets `DataexchangeResource.dataSets`} 
   */
  ListDataSets = "dataexchange:ListDataSets",

  /**
   * Read - Grants permission to list event actions for the account
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/api-permission-ref.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.eventActions `DataexchangeResource.eventActions`} 
   */
  ListEventActions = "dataexchange:ListEventActions",

  /**
   * Read - Grants permission to list jobs for the account
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#ListJobs
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.jobs `DataexchangeResource.jobs`} 
   */
  ListJobs = "dataexchange:ListJobs",

  /**
   * Read - Grants permission to get list the assets of a revision
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets.html#ListRevisionAssets
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.assets `DataexchangeResource.assets`} 
   */
  ListRevisionAssets = "dataexchange:ListRevisionAssets",

  /**
   * Read - Grants permission to list the tags that you associated with the specified resource
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#ListTagsForResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.dataSets `DataexchangeResource.dataSets`} 
   * - {@link DataexchangeResource.revisions `DataexchangeResource.revisions`} 
   */
  ListTagsForResource = "dataexchange:ListTagsForResource",

  /**
   * Write - Grants permission to publish a data set
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/api-permission-ref.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.dataSets `DataexchangeResource.dataSets`} 
   */
  PublishDataSet = "dataexchange:PublishDataSet",

  /**
   * Write - Grants permission to revoke subscriber access to a revision
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#DeleteRevision
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.revisions `DataexchangeResource.revisions`} 
   */
  RevokeRevision = "dataexchange:RevokeRevision",

  /**
   * Write - Grants permission to send a request to an API asset
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/api-permission-ref.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.assets `DataexchangeResource.assets`} 
   */
  SendApiAsset = "dataexchange:SendApiAsset",

  /**
   * Write - Grants permission to start a job
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#StartJob
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.jobs `DataexchangeResource.jobs`} 
   */
  StartJob = "dataexchange:StartJob",

  /**
   * Tagging - Grants permission to add one or more tags to a specified resource
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#TagResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.dataSets `DataexchangeResource.dataSets`} 
   * - {@link DataexchangeResource.revisions `DataexchangeResource.revisions`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the mandatory tags in the create request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the create request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "dataexchange:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from a specified resource
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#UntagResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.dataSets `DataexchangeResource.dataSets`} 
   * - {@link DataexchangeResource.revisions `DataexchangeResource.revisions`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the create request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "dataexchange:UntagResource",

  /**
   * Write - Grants permission to get update information about an asset
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#UpdateAsset
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.assets `DataexchangeResource.assets`} 
   */
  UpdateAsset = "dataexchange:UpdateAsset",

  /**
   * Write - Grants permission to update information about a data set
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#UpdateDataSet
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.dataSets `DataexchangeResource.dataSets`} 
   */
  UpdateDataSet = "dataexchange:UpdateDataSet",

  /**
   * Write - Grants permission to update information for an event action
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/api-permission-ref.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.eventActions `DataexchangeResource.eventActions`} 
   */
  UpdateEventAction = "dataexchange:UpdateEventAction",

  /**
   * Write - Grants permission to update information about a revision
   * @see https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#UpdateRevision
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.revisions `DataexchangeResource.revisions`} 
   */
  UpdateRevision = "dataexchange:UpdateRevision",

  /**
   * * - Grant all dataexchange permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdataexchange.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DataexchangeResource.jobs `DataexchangeResource.jobs`} 
   * - {@link DataexchangeResource.eventActions `DataexchangeResource.eventActions`} 
   * - {@link DataexchangeResource.assets `DataexchangeResource.assets`} 
   * - {@link DataexchangeResource.dataSets `DataexchangeResource.dataSets`} 
   * - {@link DataexchangeResource.revisions `DataexchangeResource.revisions`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the mandatory tags in the create request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the create request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "dataexchange:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdataexchange.html
 */
export const DataexchangeResource = {

  /**
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dataexchange:JobType`: Filters access by the specified job type ({@link https://docs.aws.amazon.com/data-exchange/latest/userguide/access-control.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  jobs: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:dataexchange:${options.region || '*'}:${options.account || '*'}:jobs/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataSets: (options: Partial<{partition: string, region: string, account: string, dataSetId: string}> = {}) => `arn:${options.partition || '*'}:dataexchange:${options.region || '*'}:${options.account || '*'}:data-sets/${options.dataSetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html#revisions
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  revisions: (options: Partial<{partition: string, region: string, account: string, dataSetId: string, revisionId: string}> = {}) => `arn:${options.partition || '*'}:dataexchange:${options.region || '*'}:${options.account || '*'}:data-sets/${options.dataSetId || '*'}/revisions/${options.revisionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html#assets
   */
  assets: (options: Partial<{partition: string, region: string, account: string, dataSetId: string, revisionId: string, assetId: string}> = {}) => `arn:${options.partition || '*'}:dataexchange:${options.region || '*'}:${options.account || '*'}:data-sets/${options.dataSetId || '*'}/revisions/${options.revisionId || '*'}/assets/${options.assetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html
   */
  eventActions: (options: Partial<{partition: string, region: string, account: string, eventActionId: string}> = {}) => `arn:${options.partition || '*'}:dataexchange:${options.region || '*'}:${options.account || '*'}:event-actions/${options.eventActionId || '*'}`,
}

