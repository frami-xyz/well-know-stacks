/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanager.html
 */
export enum AcmAction {

  /**
   * Tagging - Grants permission to add one or more tags to a certificate
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_AddTagsToCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filter access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  AddTagsToCertificate = "acm:AddTagsToCertificate",

  /**
   * Write - Grants permission to delete a certificate and its associated private key
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   */
  DeleteCertificate = "acm:DeleteCertificate",

  /**
   * Read - Grants permission to retreive a certificates and its metadata
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   */
  DescribeCertificate = "acm:DescribeCertificate",

  /**
   * Read - Grants permission to export a private certificate issued by a private certificate authority (CA) for use anywhere
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_ExportCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   */
  ExportCertificate = "acm:ExportCertificate",

  /**
   * Read - Grants permission to retrieve account level configuration from AWS Certificate Manager
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_GetAccountConfiguration.html
   */
  GetAccountConfiguration = "acm:GetAccountConfiguration",

  /**
   * Read - Grants permission to retrieve a certificate and certificate chain for a certificate ARN
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_GetCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   */
  GetCertificate = "acm:GetCertificate",

  /**
   * Write - Grants permission to import a 3rd party certificate into AWS Certificate Manager (ACM)
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_ImportCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filter access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ImportCertificate = "acm:ImportCertificate",

  /**
   * List - Grants permission to retrieve a list of the certificate ARNs and the domain name for each ARN
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html
   */
  ListCertificates = "acm:ListCertificates",

  /**
   * Read - Grants permission to lists the tags that have been associated with a certificate
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_ListTagsForCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   */
  ListTagsForCertificate = "acm:ListTagsForCertificate",

  /**
   * Write - Grants permission to update account level configuration in AWS Certificate Manager
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_PutAccountConfiguration.html
   */
  PutAccountConfiguration = "acm:PutAccountConfiguration",

  /**
   * Tagging - Grants permission to remove one or more tags from a certificate
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_RemoveTagsFromCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filter access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RemoveTagsFromCertificate = "acm:RemoveTagsFromCertificate",

  /**
   * Write - Grants permission to renew an eligible private certificate
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_RenewCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   */
  RenewCertificate = "acm:RenewCertificate",

  /**
   * Write - Grants permission to requests a public or private certificate
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filter access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RequestCertificate = "acm:RequestCertificate",

  /**
   * Write - Grants permission to resend an email to request domain ownership validation
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_ResendValidationEmail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   */
  ResendValidationEmail = "acm:ResendValidationEmail",

  /**
   * Write - Grants permission to update a certificate configuration. Use this to specify whether to opt in to or out of certificate transparency logging
   * @see https://docs.aws.amazon.com/acm/latest/APIReference/API_UpdateCertificateOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   */
  UpdateCertificateOptions = "acm:UpdateCertificateOptions",

  /**
   * * - Grant all acm permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AcmResource.certificate `AcmResource.certificate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filter access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "acm:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscertificatemanager.html
 */
export const AcmResource = {

  /**
   * @see https://docs.aws.amazon.com/acm/latest/userguide/authen-overview.html#acm-resources-operations
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filter access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  certificate: (options: Partial<{partition: string, region: string, account: string, certificateId: string}> = {}) => `arn:${options.partition || '*'}:acm:${options.region || '*'}:${options.account || '*'}:certificate/${options.certificateId || '*'}`,
}

