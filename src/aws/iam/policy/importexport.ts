/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsimportexportdiskservice.html
 */
export enum ImportexportAction {

  /**
   * Write - This action cancels a specified job. Only the job owner can cancel it. The action fails if the job has already started or is complete.
   * @see https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebCancelJob.html
   */
  CancelJob = "importexport:CancelJob",

  /**
   * Write - This action initiates the process of scheduling an upload or download of your data.
   * @see https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebCreateJob.html
   */
  CreateJob = "importexport:CreateJob",

  /**
   * Read - This action generates a pre-paid shipping label that you will use to ship your device to AWS for processing.
   * @see https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebGetShippingLabel.html
   */
  GetShippingLabel = "importexport:GetShippingLabel",

  /**
   * Read - This action returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job.
   * @see https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebGetStatus.html
   */
  GetStatus = "importexport:GetStatus",

  /**
   * List - This action returns the jobs associated with the requester.
   * @see https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebListJobs.html
   */
  ListJobs = "importexport:ListJobs",

  /**
   * Write - You use this action to change the parameters specified in the original manifest file by supplying a new manifest file.
   * @see https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebUpdateJob.html
   */
  UpdateJob = "importexport:UpdateJob",

  /**
   * * - Grant all importexport permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsimportexportdiskservice.html
   */
  All = "importexport:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsimportexportdiskservice.html
 */
export const ImportexportResource = {
}

