/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
 */
export enum Ec2messagesAction {

  /**
   * Write - Grants permission to acknowledge a message, ensuring it will not be delivered again
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  AcknowledgeMessage = "ec2messages:AcknowledgeMessage",

  /**
   * Write - Grants permission to delete a message
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  DeleteMessage = "ec2messages:DeleteMessage",

  /**
   * Write - Grants permission to fail a message, signifying the message could not be processed successfully, ensuring it cannot be replied to or delivered again
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  FailMessage = "ec2messages:FailMessage",

  /**
   * Read - Grants permission to route traffic to the correct endpoint based on the given destination for the messages
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  GetEndpoint = "ec2messages:GetEndpoint",

  /**
   * Read - Grants permission to deliver messages to clients/instances using long polling
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  GetMessages = "ec2messages:GetMessages",

  /**
   * Write - Grants permission to send replies from clients/instances to upstream service
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  SendReply = "ec2messages:SendReply",

  /**
   * * - Grant all ec2messages permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
   */
  All = "ec2messages:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmessagedeliveryservice.html
 */
export const Ec2messagesResource = {
}

