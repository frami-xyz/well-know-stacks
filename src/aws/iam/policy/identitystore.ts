/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitystore.html
 */
export enum IdentitystoreAction {

  /**
   * Read - Grants permission to retrieves information about group from the directory that AWS Identity Store provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeGroup.html
   */
  DescribeGroup = "identitystore:DescribeGroup",

  /**
   * Read - Grants permission to retrieves information about user from the directory that AWS Identity Store provides by default
   * @see https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeUser.html
   */
  DescribeUser = "identitystore:DescribeUser",

  /**
   * List - Grants permission to search for groups within the associated directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroups.html
   */
  ListGroups = "identitystore:ListGroups",

  /**
   * List - Grants permission to search for users within the associated directory
   * @see https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListUsers.html
   */
  ListUsers = "identitystore:ListUsers",

  /**
   * * - Grant all identitystore permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitystore.html
   */
  All = "identitystore:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitystore.html
 */
export const IdentitystoreResource = {
}

