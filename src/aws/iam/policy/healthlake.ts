/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonhealthlake.html
 */
export enum HealthlakeAction {

  /**
   * Write - Grants permission to create a datastore that can ingest and export FHIR data
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_CreateFHIRDatastore.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFHIRDatastore = "healthlake:CreateFHIRDatastore",

  /**
   * Write - Grants permission to create resource
   * @see https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  CreateResource = "healthlake:CreateResource",

  /**
   * Write - Grants permission to delete a datastore
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DeleteFHIRDatastore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  DeleteFHIRDatastore = "healthlake:DeleteFHIRDatastore",

  /**
   * Write - Grants permission to delete resource
   * @see https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  DeleteResource = "healthlake:DeleteResource",

  /**
   * Read - Grants permission to get the properties associated with the FHIR datastore, including the datastore ID, datastore ARN, datastore name, datastore status, created at, datastore type version, and datastore endpoint
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DescribeFHIRDatastore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  DescribeFHIRDatastore = "healthlake:DescribeFHIRDatastore",

  /**
   * Read - Grants permission to display the properties of a FHIR export job, including the ID, ARN, name, and the status of the datastore
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DescribeFHIRExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  DescribeFHIRExportJob = "healthlake:DescribeFHIRExportJob",

  /**
   * Read - Grants permission to display the properties of a FHIR import job, including the ID, ARN, name, and the status of the datastore
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DescribeFHIRImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  DescribeFHIRImportJob = "healthlake:DescribeFHIRImportJob",

  /**
   * Read - Grants permission to get the capabilities of a FHIR datastore
   * @see https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  GetCapabilities = "healthlake:GetCapabilities",

  /**
   * List - Grants permission to list all FHIR datastores that are in the user’s account, regardless of datastore status
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListFHIRDatastores.html
   */
  ListFHIRDatastores = "healthlake:ListFHIRDatastores",

  /**
   * List - Grants permission to get a list of export jobs for the specified datastore
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListFHIRExportJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  ListFHIRExportJobs = "healthlake:ListFHIRExportJobs",

  /**
   * List - Grants permission to get a list of import jobs for the specified datastore
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListFHIRImportJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  ListFHIRImportJobs = "healthlake:ListFHIRImportJobs",

  /**
   * Read - Grants permission to get a list of tags for the specified datastore
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  ListTagsForResource = "healthlake:ListTagsForResource",

  /**
   * Read - Grants permission to read resource
   * @see https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  ReadResource = "healthlake:ReadResource",

  /**
   * Read - Grants permission to search resources with GET method
   * @see https://docs.aws.amazon.com/healthlake/latest/devguide/search-healthlake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  SearchWithGet = "healthlake:SearchWithGet",

  /**
   * Read - Grants permission to search resources with POST method
   * @see https://docs.aws.amazon.com/healthlake/latest/devguide/search-healthlake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  SearchWithPost = "healthlake:SearchWithPost",

  /**
   * Write - Grants permission to begin a FHIR Export job
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_StartFHIRExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  StartFHIRExportJob = "healthlake:StartFHIRExportJob",

  /**
   * Write - Grants permission to begin a FHIR Import job
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_StartFHIRImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  StartFHIRImportJob = "healthlake:StartFHIRImportJob",

  /**
   * Tagging - Grants permission to add tags to a datastore
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "healthlake:TagResource",

  /**
   * Tagging - Grants permission to remove tags associated with a datastore
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "healthlake:UntagResource",

  /**
   * Write - Grants permission to update resource
   * @see https://docs.aws.amazon.com/healthlake/latest/devguide/crud-healthlake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   */
  UpdateResource = "healthlake:UpdateResource",

  /**
   * * - Grant all healthlake permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonhealthlake.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthlakeResource.datastore `HealthlakeResource.datastore`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "healthlake:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonhealthlake.html
 */
export const HealthlakeResource = {

  /**
   * @see https://docs.aws.amazon.com/healthlake/latest/APIReference/API_DatastoreProperties.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  datastore: (options: Partial<{partition: string, region: string, accountId: string, datastoreId: string}> = {}) => `arn:${options.partition || '*'}:healthlake:${options.region || '*'}:${options.accountId || '*'}:datastore/fhir/${options.datastoreId || '*'}`,
}

