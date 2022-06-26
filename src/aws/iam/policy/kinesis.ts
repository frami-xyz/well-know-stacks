/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesis.html
 */
export enum KinesisAction {

  /**
   * Tagging - Grants permission to add or update tags for the specified Amazon Kinesis stream. Each stream can have up to 10 tags
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_AddTagsToStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  AddTagsToStream = "kinesis:AddTagsToStream",

  /**
   * Write - Grants permission to create a Amazon Kinesis stream
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  CreateStream = "kinesis:CreateStream",

  /**
   * Write - Grants permission to decrease the stream's retention period, which is the length of time data records are accessible after they are added to the stream
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DecreaseStreamRetentionPeriod.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  DecreaseStreamRetentionPeriod = "kinesis:DecreaseStreamRetentionPeriod",

  /**
   * Write - Grants permission to delete a stream and all its shards and data
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeleteStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  DeleteStream = "kinesis:DeleteStream",

  /**
   * Write - Grants permission to deregister a stream consumer with a Kinesis data stream
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeregisterStreamConsumer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.consumer `KinesisResource.consumer`} 
   */
  DeregisterStreamConsumer = "kinesis:DeregisterStreamConsumer",

  /**
   * Read - Grants permission to describe the shard limits and usage for the account
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeLimits.html
   */
  DescribeLimits = "kinesis:DescribeLimits",

  /**
   * Read - Grants permission to describe the specified stream
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  DescribeStream = "kinesis:DescribeStream",

  /**
   * Read - Grants permission to get the description of a registered stream consumer
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamConsumer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.consumer `KinesisResource.consumer`} 
   */
  DescribeStreamConsumer = "kinesis:DescribeStreamConsumer",

  /**
   * Read - Grants permission to provide a summarized description of the specified Kinesis data stream without the shard list
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  DescribeStreamSummary = "kinesis:DescribeStreamSummary",

  /**
   * Write - Grants permission to disables enhanced monitoring
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DisableEnhancedMonitoring.html
   */
  DisableEnhancedMonitoring = "kinesis:DisableEnhancedMonitoring",

  /**
   * Write - Grants permission to enable enhanced Kinesis data stream monitoring for shard-level metrics
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_EnableEnhancedMonitoring.html
   */
  EnableEnhancedMonitoring = "kinesis:EnableEnhancedMonitoring",

  /**
   * Read - Grants permission to get data records from a shard
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  GetRecords = "kinesis:GetRecords",

  /**
   * Read - Grants permission to get a shard iterator. A shard iterator expires five minutes after it is returned to the requester
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  GetShardIterator = "kinesis:GetShardIterator",

  /**
   * Write - Grants permission to increase the stream's retention period, which is the length of time data records are accessible after they are added to the stream
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_IncreaseStreamRetentionPeriod.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  IncreaseStreamRetentionPeriod = "kinesis:IncreaseStreamRetentionPeriod",

  /**
   * List - Grants permission to list the shards in a stream and provides information about each shard
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListShards.html
   */
  ListShards = "kinesis:ListShards",

  /**
   * List - Grants permission to list the stream consumers registered to receive data from a Kinesis stream using enhanced fan-out, and provides information about each consumer
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreamConsumers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  ListStreamConsumers = "kinesis:ListStreamConsumers",

  /**
   * List - Grants permission to list your streams
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreams.html
   */
  ListStreams = "kinesis:ListStreams",

  /**
   * Read - Grants permission to list the tags for the specified Amazon Kinesis stream
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListTagsForStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  ListTagsForStream = "kinesis:ListTagsForStream",

  /**
   * Write - Grants permission to merge two adjacent shards in a stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_MergeShards.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  MergeShards = "kinesis:MergeShards",

  /**
   * Write - Grants permission to write a single data record from a producer into an Amazon Kinesis stream
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  PutRecord = "kinesis:PutRecord",

  /**
   * Write - Grants permission to write multiple data records from a producer into an Amazon Kinesis stream in a single call (also referred to as a PutRecords request)
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecords.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  PutRecords = "kinesis:PutRecords",

  /**
   * Write - Grants permission to register a stream consumer with a Kinesis data stream
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RegisterStreamConsumer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  RegisterStreamConsumer = "kinesis:RegisterStreamConsumer",

  /**
   * Tagging - Grants permission to remove tags from the specified Kinesis data stream. Removed tags are deleted and cannot be recovered after this operation successfully completes
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RemoveTagsFromStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  RemoveTagsFromStream = "kinesis:RemoveTagsFromStream",

  /**
   * Write - Grants permission to split a shard into two new shards in the Kinesis data stream, to increase the stream's capacity to ingest and transport data
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SplitShard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  SplitShard = "kinesis:SplitShard",

  /**
   * Write - Grants permission to enable or update server-side encryption using an AWS KMS key for a specified stream
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StartStreamEncryption.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.kmsKey `KinesisResource.kmsKey`} 
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  StartStreamEncryption = "kinesis:StartStreamEncryption",

  /**
   * Write - Grants permission to disable server-side encryption for a specified stream
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StopStreamEncryption.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.kmsKey `KinesisResource.kmsKey`} 
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   */
  StopStreamEncryption = "kinesis:StopStreamEncryption",

  /**
   * Read - Grants permission to listen to a specific shard with enhanced fan-out
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SubscribeToShard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.consumer `KinesisResource.consumer`} 
   */
  SubscribeToShard = "kinesis:SubscribeToShard",

  /**
   * Write - Grants permission to update the shard count of the specified stream to the specified number of shards
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_UpdateShardCount.html
   */
  UpdateShardCount = "kinesis:UpdateShardCount",

  /**
   * Write - Grants permission to update the capacity mode of the data stream
   * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_UpdateStreamMode.html
   */
  UpdateStreamMode = "kinesis:UpdateStreamMode",

  /**
   * * - Grant all kinesis permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisResource.stream `KinesisResource.stream`} 
   * - {@link KinesisResource.consumer `KinesisResource.consumer`} 
   * - {@link KinesisResource.kmsKey `KinesisResource.kmsKey`} 
   */
  All = "kinesis:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesis.html
 */
export const KinesisResource = {

  /**
   * @see https://docs.aws.amazon.com/kinesis/latest/dev/amazon-kinesis-streams.html
   */
  stream: (options: Partial<{partition: string, region: string, account: string, streamName: string}> = {}) => `arn:${options.partition || '*'}:kinesis:${options.region || '*'}:${options.account || '*'}:stream/${options.streamName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/kinesis/latest/dev/amazon-kinesis-consumers.html
   */
  consumer: (options: Partial<{partition: string, region: string, account: string, streamType: string, streamName: string, consumerName: string, consumerCreationTimpstamp: string}> = {}) => `arn:${options.partition || '*'}:kinesis:${options.region || '*'}:${options.account || '*'}:${options.streamType || '*'}/${options.streamName || '*'}/consumer/${options.consumerName || '*'}:${options.consumerCreationTimpstamp || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/kinesis/latest/dev/concepts.html#kms_keys
   */
  kmsKey: (options: Partial<{partition: string, region: string, account: string, keyId: string}> = {}) => `arn:${options.partition || '*'}:kms:${options.region || '*'}:${options.account || '*'}:key/${options.keyId || '*'}`,
}

