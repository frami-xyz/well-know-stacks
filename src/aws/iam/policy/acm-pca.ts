/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanagerprivatecertificateauthority.html
 */
export enum AcmPcaAction {

  /**
   * Write - Grants permission to create an ACM Private CA and its associated private key and configuration
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters create requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCertificateAuthority = "acm-pca:CreateCertificateAuthority",

  /**
   * Write - Grants permission to create an audit report for an ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  CreateCertificateAuthorityAuditReport = "acm-pca:CreateCertificateAuthorityAuditReport",

  /**
   * PermissionsManagement - Grants permission to create a permission for an ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreatePermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  CreatePermission = "acm-pca:CreatePermission",

  /**
   * Write - Grants permission to delete an ACM Private CA and its associated private key and configuration
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeleteCertificateAuthority.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  DeleteCertificateAuthority = "acm-pca:DeleteCertificateAuthority",

  /**
   * PermissionsManagement - Grants permission to delete a permission for an ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  DeletePermission = "acm-pca:DeletePermission",

  /**
   * PermissionsManagement - Grants permission to delete the policy for an ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  DeletePolicy = "acm-pca:DeletePolicy",

  /**
   * Read - Grants permission to return a list of the configuration and status fields contained in the specified ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthority.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  DescribeCertificateAuthority = "acm-pca:DescribeCertificateAuthority",

  /**
   * Read - Grants permission to return the status and information about an ACM Private CA audit report
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DescribeCertificateAuthorityAuditReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  DescribeCertificateAuthorityAuditReport = "acm-pca:DescribeCertificateAuthorityAuditReport",

  /**
   * Read - Grants permission to retrieve an ACM Private CA certificate and certificate chain for the certificate authority specified by an ARN
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  GetCertificate = "acm-pca:GetCertificate",

  /**
   * Read - Grants permission to retrieve an ACM Private CA certificate and certificate chain for the certificate authority specified by an ARN
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  GetCertificateAuthorityCertificate = "acm-pca:GetCertificateAuthorityCertificate",

  /**
   * Read - Grants permission to retrieve an ACM Private CA certificate signing request (CSR) for the certificate-authority specified by an ARN
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCsr.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  GetCertificateAuthorityCsr = "acm-pca:GetCertificateAuthorityCsr",

  /**
   * Read - Grants permission to retrieve the policy on an ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  GetPolicy = "acm-pca:GetPolicy",

  /**
   * Write - Grants permission to import an SSL/TLS certificate into ACM Private CA for use as the CA certificate of an ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  ImportCertificateAuthorityCertificate = "acm-pca:ImportCertificateAuthorityCertificate",

  /**
   * Write - Grants permission to issue an ACM Private CA certificate
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_IssueCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `acm-pca:TemplateArn`: Filters issue certificate requests based on the presence of TemplateArn in the request ({@link https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html#template-varieties documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  IssueCertificate = "acm-pca:IssueCertificate",

  /**
   * List - Grants permission to retrieve a list of the ACM Private CA certificate authority ARNs, and a summary of the status of each CA in the calling account
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html
   */
  ListCertificateAuthorities = "acm-pca:ListCertificateAuthorities",

  /**
   * Read - Grants permission to list the permissions that have been applied to the ACM Private CA certificate authority
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  ListPermissions = "acm-pca:ListPermissions",

  /**
   * Read - Grants permission to list the tags that have been applied to the ACM Private CA certificate authority
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  ListTags = "acm-pca:ListTags",

  /**
   * PermissionsManagement - Grants permission to put a policy on an ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_PutPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  PutPolicy = "acm-pca:PutPolicy",

  /**
   * Write - Grants permission to restore an ACM Private CA from the deleted state to the state it was in when deleted
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RestoreCertificateAuthority.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  RestoreCertificateAuthority = "acm-pca:RestoreCertificateAuthority",

  /**
   * Write - Grants permission to revoke a certificate issued by an ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  RevokeCertificate = "acm-pca:RevokeCertificate",

  /**
   * Tagging - Grants permission to add one or more tags to an ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_TagCertificateAuthority.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters create requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagCertificateAuthority = "acm-pca:TagCertificateAuthority",

  /**
   * Tagging - Grants permission to remove one or more tags from an ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UntagCertificateAuthority.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagCertificateAuthority = "acm-pca:UntagCertificateAuthority",

  /**
   * Write - Grants permission to update the configuration of an ACM Private CA
   * @see https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   */
  UpdateCertificateAuthority = "acm-pca:UpdateCertificateAuthority",

  /**
   * * - Grant all acm-pca permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanagerprivatecertificateauthority.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmPcaResource.certificateAuthority `AcmPcaResource.certificateAuthority`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters create requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters create requests based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `acm-pca:TemplateArn`: Filters issue certificate requests based on the presence of TemplateArn in the request ({@link https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html#template-varieties documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "acm-pca:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanagerprivatecertificateauthority.html
 */
export const AcmPcaResource = {

  /**
   * @see https://docs.aws.amazon.com/acm-pca/latest/userguide/authen-overview.html#acm-pca-resources-operations
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  certificateAuthority: (options: Partial<{partition: string, region: string, account: string, certificateAuthorityId: string}> = {}) => `arn:${options.partition || '*'}:acm-pca:${options.region || '*'}:${options.account || '*'}:certificate-authority/${options.certificateAuthorityId || '*'}`,
}

