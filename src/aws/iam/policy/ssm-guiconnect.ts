/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerguiconnect.html
 */
export enum SsmGuiconnectAction {

  /**
   * Write - Grants permission to terminate a GUI Connect session
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html
   */
  CancelConnection = "ssm-guiconnect:CancelConnection",

  /**
   * Read - Grants permission to get the metadata for a GUI Connect session
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html
   */
  GetConnection = "ssm-guiconnect:GetConnection",

  /**
   * Write - Grants permission to start a GUI Connect session
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/fleet-rdp.html
   */
  StartConnection = "ssm-guiconnect:StartConnection",

  /**
   * * - Grant all ssm-guiconnect permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerguiconnect.html
   */
  All = "ssm-guiconnect:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerguiconnect.html
 */
export const SsmGuiconnectResource = {
}

