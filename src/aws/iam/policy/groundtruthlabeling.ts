/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongroundtruthlabeling.html
 */
export enum GroundtruthlabelingAction {

  /**
   * Write - Grants permission to associate a patch file with the manifest file to update the manifest file
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  AssociatePatchToManifestJob = "groundtruthlabeling:AssociatePatchToManifestJob",

  /**
   * Read - Grants permission to get status of GroundTruthLabeling Jobs
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  DescribeConsoleJob = "groundtruthlabeling:DescribeConsoleJob",

  /**
   * Read - Grants permission to list dataset objects in a manifest file
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  ListDatasetObjects = "groundtruthlabeling:ListDatasetObjects",

  /**
   * Write - Grants permission to filter records from a manifest file using S3 select. Get sample entries based on random sampling
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-data-filtering
   */
  RunFilterOrSampleDatasetJob = "groundtruthlabeling:RunFilterOrSampleDatasetJob",

  /**
   * Write - Grants permission to list a S3 prefix and create manifest files from objects in that location
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  RunGenerateManifestByCrawlingJob = "groundtruthlabeling:RunGenerateManifestByCrawlingJob",

  /**
   * * - Grant all groundtruthlabeling permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongroundtruthlabeling.html
   */
  All = "groundtruthlabeling:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongroundtruthlabeling.html
 */
export const GroundtruthlabelingResource = {
}

