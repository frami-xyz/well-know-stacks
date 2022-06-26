/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploysecurehostcommandsservice.html
 */
export enum CodedeployCommandsSecureAction {

  /**
   * Read - Grants permission to get deployment specification
   * @see https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration
   */
  GetDeploymentSpecification = "codedeploy-commands-secure:GetDeploymentSpecification",

  /**
   * Read - Grants permission to request host agent commands
   * @see https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration
   */
  PollHostCommand = "codedeploy-commands-secure:PollHostCommand",

  /**
   * Write - Grants permission to mark host agent commands acknowledged
   * @see https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration
   */
  PutHostCommandAcknowledgement = "codedeploy-commands-secure:PutHostCommandAcknowledgement",

  /**
   * Write - Grants permission to mark host agent commands completed
   * @see https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration
   */
  PutHostCommandComplete = "codedeploy-commands-secure:PutHostCommandComplete",

  /**
   * * - Grant all codedeploy-commands-secure permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploysecurehostcommandsservice.html
   */
  All = "codedeploy-commands-secure:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploysecurehostcommandsservice.html
 */
export const CodedeployCommandsSecureResource = {
}

