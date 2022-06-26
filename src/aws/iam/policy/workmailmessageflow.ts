/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkmailmessageflow.html
 */
export enum WorkmailmessageflowAction {

  /**
   * Read - Grants permission to read the content of email messages with the specified message ID
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailmessageflowResource.rawMessage `WorkmailmessageflowResource.rawMessage`} 
   */
  GetRawMessageContent = "workmailmessageflow:GetRawMessageContent",

  /**
   * Write - Grants permission to update the content of email messages with the specified message ID
   * @see https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_PutRawMessageContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailmessageflowResource.rawMessage `WorkmailmessageflowResource.rawMessage`} 
   */
  PutRawMessageContent = "workmailmessageflow:PutRawMessageContent",

  /**
   * * - Grant all workmailmessageflow permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkmailmessageflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WorkmailmessageflowResource.rawMessage `WorkmailmessageflowResource.rawMessage`} 
   */
  All = "workmailmessageflow:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkmailmessageflow.html
 */
export const WorkmailmessageflowResource = {

  /**
   * @see https://docs.aws.amazon.com/workmail/latest/adminguide/lambda-content.html
   */
  rawMessage: (options: Partial<{partition: string, region: string, account: string, organizationId: string, context: string, messageId: string}> = {}) => `arn:${options.partition || '*'}:workmailmessageflow:${options.region || '*'}:${options.account || '*'}:message/${options.organizationId || '*'}/${options.context || '*'}/${options.messageId || '*'}`,
}

