/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconnectorservice.html
 */
export enum AwsconnectorAction {

  /**
   * Read - Retrieves all health metrics that were published from the Server Migration Connector.
   * @see https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions
   */
  GetConnectorHealth = "awsconnector:GetConnectorHealth",

  /**
   * Write - Registers AWS Connector with AWS Connector Service.
   * @see https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions
   */
  RegisterConnector = "awsconnector:RegisterConnector",

  /**
   * Read - Validates Server Migration Connector Id that was registered with AWS Connector Service.
   * @see https://docs.aws.amazon.com/server-migration-service/latest/userguide/prereqs.html#connector-permissions
   */
  ValidateConnectorId = "awsconnector:ValidateConnectorId",

  /**
   * * - Grant all awsconnector permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconnectorservice.html
   */
  All = "awsconnector:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconnectorservice.html
 */
export const AwsconnectorResource = {
}

