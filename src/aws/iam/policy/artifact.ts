/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsartifact.html
 */
export enum ArtifactAction {

  /**
   * Write - Grants permission to accept an AWS agreement that has not yet been accepted by the customer account.
   * @see https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ArtifactResource.agreement `ArtifactResource.agreement`} 
   */
  AcceptAgreement = "artifact:AcceptAgreement",

  /**
   * Read - Grants permission to download an AWS agreement that has not yet been accepted or a customer agreement that has been accepted by the customer account.
   * @see https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ArtifactResource.agreement `ArtifactResource.agreement`} 
   * - {@link ArtifactResource.customerAgreement `ArtifactResource.customerAgreement`} 
   */
  DownloadAgreement = "artifact:DownloadAgreement",

  /**
   * Read - Grants permission to download an AWS compliance report package.
   * @see https://docs.aws.amazon.com/artifact/latest/ug/getting-started.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ArtifactResource.reportPackage `ArtifactResource.reportPackage`} 
   */
  Get = "artifact:Get",

  /**
   * Write - Grants permission to terminate a customer agreement that was previously accepted by the customer account.
   * @see https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ArtifactResource.customerAgreement `ArtifactResource.customerAgreement`} 
   */
  TerminateAgreement = "artifact:TerminateAgreement",

  /**
   * * - Grant all artifact permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsartifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ArtifactResource.agreement `ArtifactResource.agreement`} 
   * - {@link ArtifactResource.customerAgreement `ArtifactResource.customerAgreement`} 
   * - {@link ArtifactResource.reportPackage `ArtifactResource.reportPackage`} 
   */
  All = "artifact:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsartifact.html
 */
export const ArtifactResource = {

  /**
   * @see https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html
   */
  reportPackage: (options: Partial<{partition: string}> = {}) => `arn:${options.partition || '*'}:artifact:::report-package/*`,

  /**
   * @see https://docs.aws.amazon.com/artifact/latest/ug/$managingagreements.html
   */
  customerAgreement: (options: Partial<{partition: string, account: string}> = {}) => `arn:${options.partition || '*'}:artifact::${options.account || '*'}:customer-agreement/*`,

  /**
   * @see https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html
   */
  agreement: (options: Partial<{partition: string}> = {}) => `arn:${options.partition || '*'}:artifact:::agreement/*`,
}

