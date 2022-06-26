/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloud9.html
 */
export enum Cloud9Action {

  /**
   * Write - Grants permission to start the Amazon EC2 instance that your AWS Cloud9 IDE connects to
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  ActivateEC2Remote = "cloud9:ActivateEC2Remote",

  /**
   * Write - Grants permission to create an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then hosts the environment on the instance
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentEC2.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloud9:EnvironmentName`: Filters access by the AWS Cloud9 environment name ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_EnvironmentName documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloud9:InstanceType`: Filters access by the instance type of the AWS Cloud9 environment's Amazon EC2 instance ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_InstanceType documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloud9:SubnetId`: Filters access by the subnet ID that the AWS Cloud9 environment will be created in ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_SubnetId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloud9:UserArn`: Filters access by the user ARN specified ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_UserArn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `cloud9:OwnerArn`: Filters access by the owner ARN specified ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_OwnerArn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEnvironmentEC2 = "cloud9:CreateEnvironmentEC2",

  /**
   * Write - Grants permission to add an environment member to an AWS Cloud9 development environment
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloud9:UserArn`: Filters access by the user ARN specified ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_UserArn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `cloud9:EnvironmentId`: Filters access by the AWS Cloud9 environment ID ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_EnvironmentId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloud9:Permissions`: Filters access by the type of AWS Cloud9 permissions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_Permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEnvironmentMembership = "cloud9:CreateEnvironmentMembership",

  /**
   * Write - Grants permission to create an AWS Cloud9 SSH development environment
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloud9:EnvironmentName`: Filters access by the AWS Cloud9 environment name ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_EnvironmentName documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloud9:OwnerArn`: Filters access by the owner ARN specified ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_OwnerArn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEnvironmentSSH = "cloud9:CreateEnvironmentSSH",

  /**
   * Read - Grants permission to create an authentication token that allows a connection between the AWS Cloud9 IDE and the user's environment
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  CreateEnvironmentToken = "cloud9:CreateEnvironmentToken",

  /**
   * Write - Grants permission to delete an AWS Cloud9 development environment. If the environment is hosted on an Amazon Elastic Compute Cloud (Amazon EC2) instance, also terminates the instance
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  DeleteEnvironment = "cloud9:DeleteEnvironment",

  /**
   * Write - Grants permission to delete an environment member from an AWS Cloud9 development environment
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironmentMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  DeleteEnvironmentMembership = "cloud9:DeleteEnvironmentMembership",

  /**
   * Read - Grants permission to get details about the connection to the EC2 development environment, including host, user, and port
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  DescribeEC2Remote = "cloud9:DescribeEC2Remote",

  /**
   * Read - Grants permission to get information about environment members for an AWS Cloud9 development environment
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentMemberships.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloud9:UserArn`: Filters access by the user ARN specified ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_UserArn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `cloud9:EnvironmentId`: Filters access by the AWS Cloud9 environment ID ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_EnvironmentId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeEnvironmentMemberships = "cloud9:DescribeEnvironmentMemberships",

  /**
   * Read - Grants permission to get status information for an AWS Cloud9 development environment
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  DescribeEnvironmentStatus = "cloud9:DescribeEnvironmentStatus",

  /**
   * Read - Grants permission to get information about AWS Cloud9 development environments
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  DescribeEnvironments = "cloud9:DescribeEnvironments",

  /**
   * Read - Grants permission to get details about the connection to the SSH development environment, including host, user, and port
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  DescribeSSHRemote = "cloud9:DescribeSSHRemote",

  /**
   * Read - Grants permission to get configuration information that's used to initialize the AWS Cloud9 IDE
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  GetEnvironmentConfig = "cloud9:GetEnvironmentConfig",

  /**
   * Read - Grants permission to get the AWS Cloud9 IDE settings for a specified development environment
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  GetEnvironmentSettings = "cloud9:GetEnvironmentSettings",

  /**
   * Read - Grants permission to get the AWS Cloud9 IDE settings for a specified environment member
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  GetMembershipSettings = "cloud9:GetMembershipSettings",

  /**
   * Read - Grants permission to get the user's public SSH key, which is used by AWS Cloud9 to connect to SSH development environments
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloud9:UserArn`: Filters access by the user ARN specified ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_UserArn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  GetUserPublicKey = "cloud9:GetUserPublicKey",

  /**
   * Read - Grants permission to get the AWS Cloud9 IDE settings for a specified user
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  GetUserSettings = "cloud9:GetUserSettings",

  /**
   * Read - Grants permission to get a list of AWS Cloud9 development environment identifiers
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListEnvironments.html
   */
  ListEnvironments = "cloud9:ListEnvironments",

  /**
   * Read - Grants permission to list tags for a cloud9 environment
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  ListTagsForResource = "cloud9:ListTagsForResource",

  /**
   * Write - Grants permission to set AWS managed temporary credentials on the Amazon EC2 instance that's used by the AWS Cloud9 integrated development environment (IDE)
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  ModifyTemporaryCredentialsOnEnvironmentEC2 = "cloud9:ModifyTemporaryCredentialsOnEnvironmentEC2",

  /**
   * Tagging - Grants permission to add tags to a cloud9 environment
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "cloud9:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a cloud9 environment
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "cloud9:UntagResource",

  /**
   * Write - Grants permission to change the settings of an existing AWS Cloud9 development environment
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  UpdateEnvironment = "cloud9:UpdateEnvironment",

  /**
   * Write - Grants permission to change the settings of an existing environment member for an AWS Cloud9 development environment
   * @see https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironmentMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloud9:UserArn`: Filters access by the user ARN specified ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_UserArn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `cloud9:EnvironmentId`: Filters access by the AWS Cloud9 environment ID ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_EnvironmentId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloud9:Permissions`: Filters access by the type of AWS Cloud9 permissions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_Permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateEnvironmentMembership = "cloud9:UpdateEnvironmentMembership",

  /**
   * Write - Grants permission to update the AWS Cloud9 IDE settings for a specified development environment
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  UpdateEnvironmentSettings = "cloud9:UpdateEnvironmentSettings",

  /**
   * Write - Grants permission to update the AWS Cloud9 IDE settings for a specified environment member
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  UpdateMembershipSettings = "cloud9:UpdateMembershipSettings",

  /**
   * Write - Grants permission to update details about the connection to the SSH development environment, including host, user, and port
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   */
  UpdateSSHRemote = "cloud9:UpdateSSHRemote",

  /**
   * Write - Grants permission to update IDE-specific settings of an AWS Cloud9 user
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  UpdateUserSettings = "cloud9:UpdateUserSettings",

  /**
   * Read - Grants permission to validate the environment name during the process of creating an AWS Cloud9 development environment
   * @see https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  ValidateEnvironmentName = "cloud9:ValidateEnvironmentName",

  /**
   * * - Grant all cloud9 permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloud9.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Cloud9Resource.environment `Cloud9Resource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloud9:EnvironmentName`: Filters access by the AWS Cloud9 environment name ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_EnvironmentName documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloud9:InstanceType`: Filters access by the instance type of the AWS Cloud9 environment's Amazon EC2 instance ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_InstanceType documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloud9:SubnetId`: Filters access by the subnet ID that the AWS Cloud9 environment will be created in ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_SubnetId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloud9:UserArn`: Filters access by the user ARN specified ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_UserArn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `cloud9:OwnerArn`: Filters access by the owner ARN specified ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_OwnerArn documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `cloud9:EnvironmentId`: Filters access by the AWS Cloud9 environment ID ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_EnvironmentId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloud9:Permissions`: Filters access by the type of AWS Cloud9 permissions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_Permissions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "cloud9:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloud9.html
 */
export const Cloud9Resource = {

  /**
   * @see https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-environment
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  environment: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:cloud9:${options.region || '*'}:${options.account || '*'}:environment:${options.resourceId || '*'}`,
}

