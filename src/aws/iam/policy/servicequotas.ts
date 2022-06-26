/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_servicequotas.html
 */
export enum ServicequotasAction {

  /**
   * Write - Grants permission to associate the Service Quotas template with your organization
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_AssociateServiceQuotaTemplate.html
   */
  AssociateServiceQuotaTemplate = "servicequotas:AssociateServiceQuotaTemplate",

  /**
   * Write - Grants permission to remove the specified service quota from the service quota template
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DeleteServiceQuotaIncreaseRequestFromTemplate.html
   */
  DeleteServiceQuotaIncreaseRequestFromTemplate = "servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate",

  /**
   * Write - Grants permission to disassociate the Service Quotas template from your organization
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DisassociateServiceQuotaTemplate.html
   */
  DisassociateServiceQuotaTemplate = "servicequotas:DisassociateServiceQuotaTemplate",

  /**
   * Read - Grants permission to return the details for the specified service quota, including the AWS default value
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAWSDefaultServiceQuota.html
   */
  GetAWSDefaultServiceQuota = "servicequotas:GetAWSDefaultServiceQuota",

  /**
   * Read - Grants permission to retrieve the ServiceQuotaTemplateAssociationStatus value, which tells you if the Service Quotas template is associated with an organization
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAssociationForServiceQuotaTemplate.html
   */
  GetAssociationForServiceQuotaTemplate = "servicequotas:GetAssociationForServiceQuotaTemplate",

  /**
   * Read - Grants permission to retrieve the details for a particular service quota increase request
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetRequestedServiceQuotaChange.html
   */
  GetRequestedServiceQuotaChange = "servicequotas:GetRequestedServiceQuotaChange",

  /**
   * Read - Grants permission to return the details for the specified service quota, including the applied value
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuota.html
   */
  GetServiceQuota = "servicequotas:GetServiceQuota",

  /**
   * Read - Grants permission to retrieve the details for a service quota increase request from the service quota template
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuotaIncreaseRequestFromTemplate.html
   */
  GetServiceQuotaIncreaseRequestFromTemplate = "servicequotas:GetServiceQuotaIncreaseRequestFromTemplate",

  /**
   * Read - Grants permission to list all default service quotas for the specified AWS service
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListAWSDefaultServiceQuotas.html
   */
  ListAWSDefaultServiceQuotas = "servicequotas:ListAWSDefaultServiceQuotas",

  /**
   * Read - Grants permission to request a list of the changes to quotas for a service
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistory.html
   */
  ListRequestedServiceQuotaChangeHistory = "servicequotas:ListRequestedServiceQuotaChangeHistory",

  /**
   * Read - Grants permission to request a list of the changes to specific service quotas
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistoryByQuota.html
   */
  ListRequestedServiceQuotaChangeHistoryByQuota = "servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota",

  /**
   * Read - Grants permission to return a list of the service quota increase requests from the service quota template
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotaIncreaseRequestsInTemplate
   */
  ListServiceQuotaIncreaseRequestsInTemplate = "servicequotas:ListServiceQuotaIncreaseRequestsInTemplate",

  /**
   * Read - Grants permission to list all service quotas for the specified AWS service, in that account, in that Region
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html
   */
  ListServiceQuotas = "servicequotas:ListServiceQuotas",

  /**
   * Read - Grants permission to list the AWS services available in Service Quotas
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServices.html
   */
  ListServices = "servicequotas:ListServices",

  /**
   * Read - Grants permission to view the existing tags on a SQ resource
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListTagsForResource
   */
  ListTagsForResource = "servicequotas:ListTagsForResource",

  /**
   * Write - Grants permission to define and add a quota to the service quota template
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_PutServiceQuotaIncreaseRequestIntoTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicequotasResource.quota `ServicequotasResource.quota`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicequotas:service`: Filters access by the specified AWS service ({@link https://docs.aws.amazon.com/servicequotas/latest/userguide/identity-access-management.html#condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutServiceQuotaIncreaseRequestIntoTemplate = "servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate",

  /**
   * Write - Grants permission to submit the request for a service quota increase
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicequotasResource.quota `ServicequotasResource.quota`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicequotas:service`: Filters access by the specified AWS service ({@link https://docs.aws.amazon.com/servicequotas/latest/userguide/identity-access-management.html#condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RequestServiceQuotaIncrease = "servicequotas:RequestServiceQuotaIncrease",

  /**
   * Tagging - Grants permission to associate a set of tags with an existing SQ resource
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_TagResource
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "servicequotas:TagResource",

  /**
   * Tagging - Grants permission to remove a set of tags from a SQ resource, where tags to be removed match a set of customer-supplied tag keys
   * @see https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_UntagResource
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "servicequotas:UntagResource",

  /**
   * * - Grant all servicequotas permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_servicequotas.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicequotasResource.quota `ServicequotasResource.quota`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicequotas:service`: Filters access by the specified AWS service ({@link https://docs.aws.amazon.com/servicequotas/latest/userguide/identity-access-management.html#condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "servicequotas:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_servicequotas.html
 */
export const ServicequotasResource = {

  /**
   * @see https://docs.aws.amazon.com/servicequotas/latest/userguide/identity-access-management.html#resources
   */
  quota: (options: Partial<{partition: string, region: string, account: string, serviceCode: string, quotaCode: string}> = {}) => `arn:${options.partition || '*'}:servicequotas:${options.region || '*'}:${options.account || '*'}:${options.serviceCode || '*'}/${options.quotaCode || '*'}`,
}

