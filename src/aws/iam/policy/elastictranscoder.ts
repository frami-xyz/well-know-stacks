/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastictranscoder.html
 */
export enum ElastictranscoderAction {

  /**
   * Write - Cancel a job that Elastic Transcoder has not begun to process
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/cancel-job.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.job `ElastictranscoderResource.job`} 
   */
  CancelJob = "elastictranscoder:CancelJob",

  /**
   * Write - Create a job.
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-job.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.pipeline `ElastictranscoderResource.pipeline`} 
   * - {@link ElastictranscoderResource.preset `ElastictranscoderResource.preset`} 
   */
  CreateJob = "elastictranscoder:CreateJob",

  /**
   * Write - Create a pipeline
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-pipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.pipeline `ElastictranscoderResource.pipeline`} 
   */
  CreatePipeline = "elastictranscoder:CreatePipeline",

  /**
   * Write - Create a preset.
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-preset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.preset `ElastictranscoderResource.preset`} 
   */
  CreatePreset = "elastictranscoder:CreatePreset",

  /**
   * Write - Delete a pipeline
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-pipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.pipeline `ElastictranscoderResource.pipeline`} 
   */
  DeletePipeline = "elastictranscoder:DeletePipeline",

  /**
   * Write - Delete a preset
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-preset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.preset `ElastictranscoderResource.preset`} 
   */
  DeletePreset = "elastictranscoder:DeletePreset",

  /**
   * List - Get a list of the jobs that you assigned to a pipeline
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-pipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.pipeline `ElastictranscoderResource.pipeline`} 
   */
  ListJobsByPipeline = "elastictranscoder:ListJobsByPipeline",

  /**
   * List - Get information about all of the jobs associated with the current AWS account that have a specified status
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-status.html
   */
  ListJobsByStatus = "elastictranscoder:ListJobsByStatus",

  /**
   * List - Get a list of the pipelines associated with the current AWS account
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-pipelines.html
   */
  ListPipelines = "elastictranscoder:ListPipelines",

  /**
   * List - Get a list of all presets associated with the current AWS account.
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-presets.html
   */
  ListPresets = "elastictranscoder:ListPresets",

  /**
   * Read - Get detailed information about a job
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-job.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.job `ElastictranscoderResource.job`} 
   */
  ReadJob = "elastictranscoder:ReadJob",

  /**
   * Read - Get detailed information about a pipeline
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-pipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.pipeline `ElastictranscoderResource.pipeline`} 
   */
  ReadPipeline = "elastictranscoder:ReadPipeline",

  /**
   * Read - Get detailed information about a preset.
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-preset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.preset `ElastictranscoderResource.preset`} 
   */
  ReadPreset = "elastictranscoder:ReadPreset",

  /**
   * Write - Test the settings for a pipeline to ensure that Elastic Transcoder can create and process jobs
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/test-pipeline-role.html
   */
  TestRole = "elastictranscoder:TestRole",

  /**
   * Write - Update settings for a pipeline
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.pipeline `ElastictranscoderResource.pipeline`} 
   */
  UpdatePipeline = "elastictranscoder:UpdatePipeline",

  /**
   * Write - Update only Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-notifications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.pipeline `ElastictranscoderResource.pipeline`} 
   */
  UpdatePipelineNotifications = "elastictranscoder:UpdatePipelineNotifications",

  /**
   * Write - Pause or reactivate a pipeline, so the pipeline stops or restarts processing jobs, update the status for the pipeline.
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-status.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.pipeline `ElastictranscoderResource.pipeline`} 
   */
  UpdatePipelineStatus = "elastictranscoder:UpdatePipelineStatus",

  /**
   * * - Grant all elastictranscoder permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastictranscoder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElastictranscoderResource.job `ElastictranscoderResource.job`} 
   * - {@link ElastictranscoderResource.pipeline `ElastictranscoderResource.pipeline`} 
   * - {@link ElastictranscoderResource.preset `ElastictranscoderResource.preset`} 
   */
  All = "elastictranscoder:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastictranscoder.html
 */
export const ElastictranscoderResource = {

  /**
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/operations-jobs.html
   */
  job: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:elastictranscoder:${options.region || '*'}:${options.account || '*'}:job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/operations-pipelines.html
   */
  pipeline: (options: Partial<{partition: string, region: string, account: string, pipelineId: string}> = {}) => `arn:${options.partition || '*'}:elastictranscoder:${options.region || '*'}:${options.account || '*'}:pipeline/${options.pipelineId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/operations-presets.html
   */
  preset: (options: Partial<{partition: string, region: string, account: string, presetId: string}> = {}) => `arn:${options.partition || '*'}:elastictranscoder:${options.region || '*'}:${options.account || '*'}:preset/${options.presetId || '*'}`,
}

