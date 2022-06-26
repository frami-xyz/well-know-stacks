/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsqs.html
 */
export enum SqsAction {

  /**
   * Permissions management - Grants permission to a queue for a specific principal
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_AddPermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  AddPermission = "sqs:AddPermission",

  /**
   * Write - Grants permission to change the visibility timeout of a specified message in a queue to a new value
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibility.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  ChangeMessageVisibility = "sqs:ChangeMessageVisibility",

  /**
   * Write - Grants permission to create a new queue, or returns the URL of an existing one
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  CreateQueue = "sqs:CreateQueue",

  /**
   * Write - Grants permission to delete the specified message from the specified queue
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  DeleteMessage = "sqs:DeleteMessage",

  /**
   * Write - Grants permission to delete the queue specified by the queue URL, regardless of whether the queue is empty
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  DeleteQueue = "sqs:DeleteQueue",

  /**
   * Read - Grants permission to get attributes for the specified queue
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  GetQueueAttributes = "sqs:GetQueueAttributes",

  /**
   * Read - Grants permission to return the URL of an existing queue
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  GetQueueUrl = "sqs:GetQueueUrl",

  /**
   * Read - Grants permission to return a list of your queues that have the RedrivePolicy queue attribute configured with a dead letter queue
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListDeadLetterSourceQueues.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  ListDeadLetterSourceQueues = "sqs:ListDeadLetterSourceQueues",

  /**
   * Read - Grants permission to list tags added to an SQS queue
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueueTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  ListQueueTags = "sqs:ListQueueTags",

  /**
   * Read - Grants permission to return a list of your queues
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueues.html
   */
  ListQueues = "sqs:ListQueues",

  /**
   * Write - Grants permission to delete the messages in a queue specified by the queue URL
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  PurgeQueue = "sqs:PurgeQueue",

  /**
   * Read - Grants permission to retrieve one or more messages, with a maximum limit of 10 messages, from the specified queue
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  ReceiveMessage = "sqs:ReceiveMessage",

  /**
   * Permissions management - Grants permission to revoke any permissions in the queue policy that matches the specified Label parameter
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_RemovePermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  RemovePermission = "sqs:RemovePermission",

  /**
   * Write - Grants permission to deliver a message to the specified queue
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  SendMessage = "sqs:SendMessage",

  /**
   * Write - Grants permission to set the value of one or more queue attributes
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SetQueueAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  SetQueueAttributes = "sqs:SetQueueAttributes",

  /**
   * Tagging - Grants permission to add tags to the specified SQS queue
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_TagQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  TagQueue = "sqs:TagQueue",

  /**
   * Tagging - Grants permission to remove tags from the specified SQS queue
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_UntagQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  UntagQueue = "sqs:UntagQueue",

  /**
   * * - Grant all sqs permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsqs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SqsResource.queue `SqsResource.queue`} 
   */
  All = "sqs:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsqs.html
 */
export const SqsResource = {

  /**
   * @see https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-how-it-works.html
   */
  queue: (options: Partial<{partition: string, region: string, account: string, queueName: string}> = {}) => `arn:${options.partition || '*'}:sqs:${options.region || '*'}:${options.account || '*'}:${options.queueName || '*'}`,
}

