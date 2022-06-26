/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemrserverless.html
 */
export enum EmrServerlessAction {

  /**
   * Write - Grants permission to cancel a job run
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_CancelJobRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.jobRun `EmrServerlessResource.jobRun`} 
   */
  CancelJobRun = "emr-serverless:CancelJobRun",

  /**
   * Write - Grants permission to create an Application
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApplication = "emr-serverless:CreateApplication",

  /**
   * Write - Grants permission to delete an application
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_DeleteApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.application `EmrServerlessResource.application`} 
   */
  DeleteApplication = "emr-serverless:DeleteApplication",

  /**
   * Read - Grants permission to get application
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.application `EmrServerlessResource.application`} 
   */
  GetApplication = "emr-serverless:GetApplication",

  /**
   * Read - Grants permission to get a job run
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetJobRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.jobRun `EmrServerlessResource.jobRun`} 
   */
  GetJobRun = "emr-serverless:GetJobRun",

  /**
   * List - Grants permission to list applications
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ListApplications.html
   */
  ListApplications = "emr-serverless:ListApplications",

  /**
   * List - Grants permission to list job runs associated with an application
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ListJobRuns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.application `EmrServerlessResource.application`} 
   */
  ListJobRuns = "emr-serverless:ListJobRuns",

  /**
   * Read - Grants permission to list tags for the specified resource
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.application `EmrServerlessResource.application`} 
   * - {@link EmrServerlessResource.jobRun `EmrServerlessResource.jobRun`} 
   */
  ListTagsForResource = "emr-serverless:ListTagsForResource",

  /**
   * Write - Grants permission to Start an application
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.application `EmrServerlessResource.application`} 
   */
  StartApplication = "emr-serverless:StartApplication",

  /**
   * Write - Grants permission to start a job run
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.application `EmrServerlessResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartJobRun = "emr-serverless:StartJobRun",

  /**
   * Write - Grants permission to Stop an application
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StopApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.application `EmrServerlessResource.application`} 
   */
  StopApplication = "emr-serverless:StopApplication",

  /**
   * Tagging - Grants permission to tag the specified resource
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.application `EmrServerlessResource.application`} 
   * - {@link EmrServerlessResource.jobRun `EmrServerlessResource.jobRun`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "emr-serverless:TagResource",

  /**
   * Tagging - Grants permission to untag the specified resource
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.application `EmrServerlessResource.application`} 
   * - {@link EmrServerlessResource.jobRun `EmrServerlessResource.jobRun`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "emr-serverless:UntagResource",

  /**
   * Write - Grants permission to Update an application
   * @see https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_UpdateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.application `EmrServerlessResource.application`} 
   */
  UpdateApplication = "emr-serverless:UpdateApplication",

  /**
   * * - Grant all emr-serverless permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemrserverless.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrServerlessResource.jobRun `EmrServerlessResource.jobRun`} 
   * - {@link EmrServerlessResource.application `EmrServerlessResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "emr-serverless:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemrserverless.html
 */
export const EmrServerlessResource = {

  /**
   * @see https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/emr-serverless.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  application: (options: Partial<{partition: string, region: string, account: string, applicationId: string}> = {}) => `arn:${options.partition || '*'}:emr-serverless:${options.region || '*'}:${options.account || '*'}:/applications/${options.applicationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/emr-serverless.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  jobRun: (options: Partial<{partition: string, region: string, account: string, applicationId: string, jobRunId: string}> = {}) => `arn:${options.partition || '*'}:emr-serverless:${options.region || '*'}:${options.account || '*'}:/applications/${options.applicationId || '*'}/jobruns/${options.jobRunId || '*'}`,
}

