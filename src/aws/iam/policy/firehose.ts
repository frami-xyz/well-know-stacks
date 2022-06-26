/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisfirehose.html
 */
export enum FirehoseAction {

  /**
   * Write - Grants permission to create a delivery stream
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDeliveryStream = "firehose:CreateDeliveryStream",

  /**
   * Write - Grants permission to delete a delivery stream and its data
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_DeleteDeliveryStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   */
  DeleteDeliveryStream = "firehose:DeleteDeliveryStream",

  /**
   * Read - Grants permission to describe the specified delivery stream and gets the status
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_DescribeDeliveryStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   */
  DescribeDeliveryStream = "firehose:DescribeDeliveryStream",

  /**
   * List - Grants permission to list your delivery streams
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListDeliveryStreams.html
   */
  ListDeliveryStreams = "firehose:ListDeliveryStreams",

  /**
   * List - Grants permission to list the tags for the specified delivery stream
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_ListTagsForDeliveryStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   */
  ListTagsForDeliveryStream = "firehose:ListTagsForDeliveryStream",

  /**
   * Write - Grants permission to write a single data record into an Amazon Kinesis Firehose delivery stream
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecord.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   */
  PutRecord = "firehose:PutRecord",

  /**
   * Write - Grants permission to write multiple data records into a delivery stream in a single call, which can achieve higher throughput per producer than when writing single records
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   */
  PutRecordBatch = "firehose:PutRecordBatch",

  /**
   * Write - Grants permission to enable server-side encryption (SSE) for the delivery stream
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_StartDeliveryStreamEncryption.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   */
  StartDeliveryStreamEncryption = "firehose:StartDeliveryStreamEncryption",

  /**
   * Write - Grants permission to disable the specified destination of the specified delivery stream
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_StopDeliveryStreamEncryption.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   */
  StopDeliveryStreamEncryption = "firehose:StopDeliveryStreamEncryption",

  /**
   * Tagging - Grants permission to add or update tags for the specified delivery stream
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_TagDeliveryStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagDeliveryStream = "firehose:TagDeliveryStream",

  /**
   * Tagging - Grants permission to remove tags from the specified delivery stream
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_UntagDeliveryStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagDeliveryStream = "firehose:UntagDeliveryStream",

  /**
   * Write - Grants permission to update the specified destination of the specified delivery stream
   * @see https://docs.aws.amazon.com/firehose/latest/APIReference/API_UpdateDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   */
  UpdateDestination = "firehose:UpdateDestination",

  /**
   * * - Grant all firehose permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisfirehose.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FirehoseResource.deliverystream `FirehoseResource.deliverystream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "firehose:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisfirehose.html
 */
export const FirehoseResource = {

  /**
   * @see https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deliverystream: (options: Partial<{partition: string, region: string, account: string, deliveryStreamName: string}> = {}) => `arn:${options.partition || '*'}:firehose:${options.region || '*'}:${options.account || '*'}:deliverystream/${options.deliveryStreamName || '*'}`,
}

