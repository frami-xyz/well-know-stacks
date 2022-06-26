/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
 */
export enum ChatbotAction {

  /**
   * Write - Grants permission to create an AWS Chatbot Chime Webhook Configuration
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  CreateChimeWebhookConfiguration = "chatbot:CreateChimeWebhookConfiguration",

  /**
   * Write - Grants permission to create an AWS Chatbot Slack Channel Configuration
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  CreateSlackChannelConfiguration = "chatbot:CreateSlackChannelConfiguration",

  /**
   * Write - Grants permission to delete an AWS Chatbot Chime Webhook Configuration
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChatbotResource.chatbotConfiguration `ChatbotResource.chatbotConfiguration`} 
   */
  DeleteChimeWebhookConfiguration = "chatbot:DeleteChimeWebhookConfiguration",

  /**
   * Write - Grants permission to delete an AWS Chatbot Slack Channel Configuration
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChatbotResource.chatbotConfiguration `ChatbotResource.chatbotConfiguration`} 
   */
  DeleteSlackChannelConfiguration = "chatbot:DeleteSlackChannelConfiguration",

  /**
   * Write - Grants permission to delete an AWS Chatbot Slack User Identity
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  DeleteSlackUserIdentity = "chatbot:DeleteSlackUserIdentity",

  /**
   * Write - Grants permission to delete the Slack workspace authorization with AWS Chatbot, associated with an AWS account
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  DeleteSlackWorkspaceAuthorization = "chatbot:DeleteSlackWorkspaceAuthorization",

  /**
   * Read - Grants permission to list all AWS Chatbot Chime Webhook Configurations in an AWS Account
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  DescribeChimeWebhookConfigurations = "chatbot:DescribeChimeWebhookConfigurations",

  /**
   * Read - Grants permission to list all AWS Chatbot Slack Channel Configurations in an AWS account
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  DescribeSlackChannelConfigurations = "chatbot:DescribeSlackChannelConfigurations",

  /**
   * Read - Grants permission to list all public Slack channels in the Slack workspace connected to the AWS Account onboarded with AWS Chatbot service
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  DescribeSlackChannels = "chatbot:DescribeSlackChannels",

  /**
   * Read - Grants permission to describe AWS Chatbot Slack User Identities
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  DescribeSlackUserIdentities = "chatbot:DescribeSlackUserIdentities",

  /**
   * Read - Grants permission to list all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot service
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  DescribeSlackWorkspaces = "chatbot:DescribeSlackWorkspaces",

  /**
   * Read - Grants permission to retrieve AWS Chatbot account preferences
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  GetAccountPreferences = "chatbot:GetAccountPreferences",

  /**
   * Read - Grants permission to generate OAuth parameters to request Slack OAuth code to be used by the AWS Chatbot service
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  GetSlackOauthParameters = "chatbot:GetSlackOauthParameters",

  /**
   * Write - Grants permission to redeem previously generated parameters with Slack API, to acquire OAuth tokens to be used by the AWS Chatbot service
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  RedeemSlackOauthCode = "chatbot:RedeemSlackOauthCode",

  /**
   * Write - Grants permission to update AWS Chatbot account preferences
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   */
  UpdateAccountPreferences = "chatbot:UpdateAccountPreferences",

  /**
   * Write - Grants permission to update an AWS Chatbot Chime Webhook Configuration
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChatbotResource.chatbotConfiguration `ChatbotResource.chatbotConfiguration`} 
   */
  UpdateChimeWebhookConfiguration = "chatbot:UpdateChimeWebhookConfiguration",

  /**
   * Write - Grants permission to update an AWS Chatbot Slack Channel Configuration
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChatbotResource.chatbotConfiguration `ChatbotResource.chatbotConfiguration`} 
   */
  UpdateSlackChannelConfiguration = "chatbot:UpdateSlackChannelConfiguration",

  /**
   * * - Grant all chatbot permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ChatbotResource.chatbotConfiguration `ChatbotResource.chatbotConfiguration`} 
   */
  All = "chatbot:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html
 */
export const ChatbotResource = {

  /**
   * @see https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html
   */
  chatbotConfiguration: (options: Partial<{partition: string, account: string, configurationType: string, chatbotConfigurationName: string}> = {}) => `arn:${options.partition || '*'}:chatbot::${options.account || '*'}:chat-configuration/${options.configurationType || '*'}/${options.chatbotConfigurationName || '*'}`,
}

