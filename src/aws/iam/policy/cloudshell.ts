/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudshell.html
 */
export enum CloudshellAction {

  /**
   * Write - Grants permissions to create a CloudShell environment
   * @see https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#CreateEnvironment
   */
  CreateEnvironment = "cloudshell:CreateEnvironment",

  /**
   * Write - Grants permissions to connect to a CloudShell environment from the AWS Management Console
   * @see https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#CreateSession
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudshellResource.environment `CloudshellResource.environment`} 
   */
  CreateSession = "cloudshell:CreateSession",

  /**
   * Write - Grants permission to delete a CloudShell environment
   * @see https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#DeleteEnvironment
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudshellResource.environment `CloudshellResource.environment`} 
   */
  DeleteEnvironment = "cloudshell:DeleteEnvironment",

  /**
   * Read - Grants permission to read a CloudShell environment status
   * @see https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#GetEnvironmentStatus
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudshellResource.environment `CloudshellResource.environment`} 
   */
  GetEnvironmentStatus = "cloudshell:GetEnvironmentStatus",

  /**
   * Write - Grants permissions to download files from a CloudShell environment
   * @see https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#GetFileDownloadUrls
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudshellResource.environment `CloudshellResource.environment`} 
   */
  GetFileDownloadUrls = "cloudshell:GetFileDownloadUrls",

  /**
   * Write - Grants permissions to upload files to a CloudShell environment
   * @see https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#GetFileUploadUrls
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudshellResource.environment `CloudshellResource.environment`} 
   */
  GetFileUploadUrls = "cloudshell:GetFileUploadUrls",

  /**
   * Write - Grants permissions to forward console credentials to the environment
   * @see https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#PutCredentials
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudshellResource.environment `CloudshellResource.environment`} 
   */
  PutCredentials = "cloudshell:PutCredentials",

  /**
   * Write - Grants permission to start a stopped CloudShell environment
   * @see https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#StartEnvironment
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudshellResource.environment `CloudshellResource.environment`} 
   */
  StartEnvironment = "cloudshell:StartEnvironment",

  /**
   * Write - Grants permission to stop a running CloudShell environment
   * @see https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#StopEnvironment
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudshellResource.environment `CloudshellResource.environment`} 
   */
  StopEnvironment = "cloudshell:StopEnvironment",

  /**
   * * - Grant all cloudshell permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudshell.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudshellResource.environment `CloudshellResource.environment`} 
   */
  All = "cloudshell:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudshell.html
 */
export const CloudshellResource = {

  /**
   * @see https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#Environment
   */
  environment: (options: Partial<{partition: string, region: string, account: string, environmentId: string}> = {}) => `arn:${options.partition || '*'}:cloudshell:${options.region || '*'}:${options.account || '*'}:environment/${options.environmentId || '*'}`,
}

