/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiqpermissions.html
 */
export enum IqPermissionAction {

  /**
   * Write - Grants permission to approve an access grant
   * @see https://aws.amazon.com/iq/
   */
  ApproveAccessGrant = "iq-permission:ApproveAccessGrant",

  /**
   * * - Grant all iq-permission permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiqpermissions.html
   */
  All = "iq-permission:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiqpermissions.html
 */
export const IqPermissionResource = {
}

