/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowball.html
 */
export enum SnowballAction {

  /**
   * Write - Cancels a cluster job.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_CancelCluster.html
   */
  CancelCluster = "snowball:CancelCluster",

  /**
   * Write - Cancels the specified job.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_CancelJob.html
   */
  CancelJob = "snowball:CancelJob",

  /**
   * Write - Creates an address for a Snowball to be shipped to.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateAddress.html
   */
  CreateAddress = "snowball:CreateAddress",

  /**
   * Write - Creates an empty cluster.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateCluster.html
   */
  CreateCluster = "snowball:CreateCluster",

  /**
   * Write - Creates a job to import or export data between Amazon S3 and your on-premises data center.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateJob.html
   */
  CreateJob = "snowball:CreateJob",

  /**
   * Write - Grants permission to creates a LongTermPricingListEntry for allowing customers to add an upfront billing contract for a job
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateLongTermPricing.html
   */
  CreateLongTermPricing = "snowball:CreateLongTermPricing",

  /**
   * Write - Creates a shipping label that will be used to return the Snow device to AWS.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateReturnShippingLabel.html
   */
  CreateReturnShippingLabel = "snowball:CreateReturnShippingLabel",

  /**
   * Read - Takes an AddressId and returns specific details about that address in the form of an Address object.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddress.html
   */
  DescribeAddress = "snowball:DescribeAddress",

  /**
   * List - Returns a specified number of ADDRESS objects.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddresses.html
   */
  DescribeAddresses = "snowball:DescribeAddresses",

  /**
   * Read - Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeCluster.html
   */
  DescribeCluster = "snowball:DescribeCluster",

  /**
   * Read - Returns information about a specific job including shipping information, job status, and other important metadata.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeJob.html
   */
  DescribeJob = "snowball:DescribeJob",

  /**
   * Read - Information on the shipping label of a Snow device that is being returned to AWS.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeReturnShippingLabel.html
   */
  DescribeReturnShippingLabel = "snowball:DescribeReturnShippingLabel",

  /**
   * Read - Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified JobId value.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobManifest.html
   */
  GetJobManifest = "snowball:GetJobManifest",

  /**
   * Read - Returns the UnlockCode code value for the specified job.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobUnlockCode.html
   */
  GetJobUnlockCode = "snowball:GetJobUnlockCode",

  /**
   * Read - Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetSnowballUsage.html
   */
  GetSnowballUsage = "snowball:GetSnowballUsage",

  /**
   * Read - Returns an Amazon S3 presigned URL for an update file associated with a specified JobId.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetSoftwareUpdates.html
   */
  GetSoftwareUpdates = "snowball:GetSoftwareUpdates",

  /**
   * List - Returns an array of JobListEntry objects of the specified length.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusterJobs.html
   */
  ListClusterJobs = "snowball:ListClusterJobs",

  /**
   * List - Returns an array of ClusterListEntry objects of the specified length.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusters.html
   */
  ListClusters = "snowball:ListClusters",

  /**
   * List - This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your AWS account that would be supported for use on a Snow device.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListCompatibleImages.html
   */
  ListCompatibleImages = "snowball:ListCompatibleImages",

  /**
   * List - Returns an array of JobListEntry objects of the specified length.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListJobs.html
   */
  ListJobs = "snowball:ListJobs",

  /**
   * Read - Grants permission to list LongTermPricingListEntry objects for the account making the request
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListLongTermPricing.html
   */
  ListLongTermPricing = "snowball:ListLongTermPricing",

  /**
   * Write - While a cluster's ClusterState value is in the AwaitingQuorum state, you can update some of the information associated with a cluster.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateCluster.html
   */
  UpdateCluster = "snowball:UpdateCluster",

  /**
   * Write - While a job's JobState value is New, you can update some of the information associated with a job.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateJob.html
   */
  UpdateJob = "snowball:UpdateJob",

  /**
   * Write - Updates the state when a the shipment states changes to a different state.
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateJobShipmentState.html
   */
  UpdateJobShipmentState = "snowball:UpdateJobShipmentState",

  /**
   * Write - Grants permission to update a specific upfront billing contract for a job
   * @see https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateLongTermPricing.html
   */
  UpdateLongTermPricing = "snowball:UpdateLongTermPricing",

  /**
   * * - Grant all snowball permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowball.html
   */
  All = "snowball:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowball.html
 */
export const SnowballResource = {
}

