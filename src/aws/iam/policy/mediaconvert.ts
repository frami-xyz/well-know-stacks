/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconvert.html
 */
export enum MediaconvertAction {

  /**
   * Write - Grants permission to associate an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates.html
   */
  AssociateCertificate = "mediaconvert:AssociateCertificate",

  /**
   * Write - Grants permission to cancel an AWS Elemental MediaConvert job that is waiting in queue
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.job `MediaconvertResource.job`} 
   */
  CancelJob = "mediaconvert:CancelJob",

  /**
   * Write - Grants permission to create and submit an AWS Elemental MediaConvert job
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.jobTemplate `MediaconvertResource.jobTemplate`} 
   * - {@link MediaconvertResource.preset `MediaconvertResource.preset`} 
   * - {@link MediaconvertResource.queue `MediaconvertResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateJob = "mediaconvert:CreateJob",

  /**
   * Write - Grants permission to create an AWS Elemental MediaConvert custom job template
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.preset `MediaconvertResource.preset`} 
   * - {@link MediaconvertResource.queue `MediaconvertResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateJobTemplate = "mediaconvert:CreateJobTemplate",

  /**
   * Write - Grants permission to create an AWS Elemental MediaConvert custom output preset
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePreset = "mediaconvert:CreatePreset",

  /**
   * Write - Grants permission to create an AWS Elemental MediaConvert job queue
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateQueue = "mediaconvert:CreateQueue",

  /**
   * Write - Grants permission to delete an AWS Elemental MediaConvert custom job template
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.jobTemplate `MediaconvertResource.jobTemplate`} 
   */
  DeleteJobTemplate = "mediaconvert:DeleteJobTemplate",

  /**
   * Write - Grants permission to delete an AWS Elemental MediaConvert policy
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/policy.html
   */
  DeletePolicy = "mediaconvert:DeletePolicy",

  /**
   * Write - Grants permission to delete an AWS Elemental MediaConvert custom output preset
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.preset `MediaconvertResource.preset`} 
   */
  DeletePreset = "mediaconvert:DeletePreset",

  /**
   * Write - Grants permission to delete an AWS Elemental MediaConvert job queue
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.queue `MediaconvertResource.queue`} 
   */
  DeleteQueue = "mediaconvert:DeleteQueue",

  /**
   * List - Grants permission to subscribe to the AWS Elemental MediaConvert service, by sending a request for an account-specific endpoint. All transcoding requests must be sent to the endpoint that the service returns
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/endpoints.html
   */
  DescribeEndpoints = "mediaconvert:DescribeEndpoints",

  /**
   * Write - Grants permission to remove an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates-arn.html
   */
  DisassociateCertificate = "mediaconvert:DisassociateCertificate",

  /**
   * Read - Grants permission to get an AWS Elemental MediaConvert job
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.job `MediaconvertResource.job`} 
   */
  GetJob = "mediaconvert:GetJob",

  /**
   * Read - Grants permission to get an AWS Elemental MediaConvert job template
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.jobTemplate `MediaconvertResource.jobTemplate`} 
   */
  GetJobTemplate = "mediaconvert:GetJobTemplate",

  /**
   * Read - Grants permission to get an AWS Elemental MediaConvert policy
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/policy.html
   */
  GetPolicy = "mediaconvert:GetPolicy",

  /**
   * Read - Grants permission to get an AWS Elemental MediaConvert output preset
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.preset `MediaconvertResource.preset`} 
   */
  GetPreset = "mediaconvert:GetPreset",

  /**
   * Read - Grants permission to get an AWS Elemental MediaConvert job queue
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.queue `MediaconvertResource.queue`} 
   */
  GetQueue = "mediaconvert:GetQueue",

  /**
   * List - Grants permission to list AWS Elemental MediaConvert job templates
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates.html
   */
  ListJobTemplates = "mediaconvert:ListJobTemplates",

  /**
   * List - Grants permission to list AWS Elemental MediaConvert jobs
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.queue `MediaconvertResource.queue`} 
   */
  ListJobs = "mediaconvert:ListJobs",

  /**
   * List - Grants permission to list AWS Elemental MediaConvert output presets
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   */
  ListPresets = "mediaconvert:ListPresets",

  /**
   * List - Grants permission to list AWS Elemental MediaConvert job queues
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   */
  ListQueues = "mediaconvert:ListQueues",

  /**
   * Read - Grants permission to retrieve the tags for a MediaConvert queue, preset, or job template
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.jobTemplate `MediaconvertResource.jobTemplate`} 
   * - {@link MediaconvertResource.preset `MediaconvertResource.preset`} 
   * - {@link MediaconvertResource.queue `MediaconvertResource.queue`} 
   */
  ListTagsForResource = "mediaconvert:ListTagsForResource",

  /**
   * Write - Grants permission to put an AWS Elemental MediaConvert policy
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/policy.html
   */
  PutPolicy = "mediaconvert:PutPolicy",

  /**
   * Tagging - Grants permission to add tags to a MediaConvert queue, preset, or job template
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.jobTemplate `MediaconvertResource.jobTemplate`} 
   * - {@link MediaconvertResource.preset `MediaconvertResource.preset`} 
   * - {@link MediaconvertResource.queue `MediaconvertResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "mediaconvert:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a MediaConvert queue, preset, or job template
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.jobTemplate `MediaconvertResource.jobTemplate`} 
   * - {@link MediaconvertResource.preset `MediaconvertResource.preset`} 
   * - {@link MediaconvertResource.queue `MediaconvertResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "mediaconvert:UntagResource",

  /**
   * Write - Grants permission to update an AWS Elemental MediaConvert custom job template
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.jobTemplate `MediaconvertResource.jobTemplate`} 
   * - {@link MediaconvertResource.preset `MediaconvertResource.preset`} 
   * - {@link MediaconvertResource.queue `MediaconvertResource.queue`} 
   */
  UpdateJobTemplate = "mediaconvert:UpdateJobTemplate",

  /**
   * Write - Grants permission to update an AWS Elemental MediaConvert custom output preset
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.preset `MediaconvertResource.preset`} 
   */
  UpdatePreset = "mediaconvert:UpdatePreset",

  /**
   * Write - Grants permission to update an AWS Elemental MediaConvert job queue
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.queue `MediaconvertResource.queue`} 
   */
  UpdateQueue = "mediaconvert:UpdateQueue",

  /**
   * * - Grant all mediaconvert permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconvert.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediaconvertResource.job `MediaconvertResource.job`} 
   * - {@link MediaconvertResource.jobTemplate `MediaconvertResource.jobTemplate`} 
   * - {@link MediaconvertResource.preset `MediaconvertResource.preset`} 
   * - {@link MediaconvertResource.queue `MediaconvertResource.queue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "mediaconvert:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconvert.html
 */
export const MediaconvertResource = {

  /**
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  job: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:mediaconvert:${options.region || '*'}:${options.account || '*'}:jobs/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  queue: (options: Partial<{partition: string, region: string, account: string, queueName: string}> = {}) => `arn:${options.partition || '*'}:mediaconvert:${options.region || '*'}:${options.account || '*'}:queues/${options.queueName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  preset: (options: Partial<{partition: string, region: string, account: string, presetName: string}> = {}) => `arn:${options.partition || '*'}:mediaconvert:${options.region || '*'}:${options.account || '*'}:presets/${options.presetName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  jobTemplate: (options: Partial<{partition: string, region: string, account: string, jobTemplateName: string}> = {}) => `arn:${options.partition || '*'}:mediaconvert:${options.region || '*'}:${options.account || '*'}:jobTemplates/${options.jobTemplateName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates.html
   */
  certificateAssociation: (options: Partial<{partition: string, region: string, account: string, certificateArn: string}> = {}) => `arn:${options.partition || '*'}:mediaconvert:${options.region || '*'}:${options.account || '*'}:certificates/${options.certificateArn || '*'}`,
}

