/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsessionmanagermessagegatewayservice.html
 */
export enum SsmmessagesAction {

  /**
   * Write - Grants permission to register a control channel for an instance to send control messages to Systems Manager service
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  CreateControlChannel = "ssmmessages:CreateControlChannel",

  /**
   * Write - Grants permission to register a data channel for an instance to send data messages to Systems Manager service
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  CreateDataChannel = "ssmmessages:CreateDataChannel",

  /**
   * Write - Grants permission to open a websocket connection for a registered control channel stream from an instance to Systems Manager service
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  OpenControlChannel = "ssmmessages:OpenControlChannel",

  /**
   * Write - Grants permission to open a websocket connection for a registered data channel stream from an instance to Systems Manager service
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-create-iam-instance-profile.html
   */
  OpenDataChannel = "ssmmessages:OpenDataChannel",

  /**
   * * - Grant all ssmmessages permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsessionmanagermessagegatewayservice.html
   */
  All = "ssmmessages:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsessionmanagermessagegatewayservice.html
 */
export const SsmmessagesResource = {
}

