/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudmap.html
 */
export enum ServicediscoveryAction {

  /**
   * Write - Grants permission to create an HTTP namespace
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateHttpNamespace.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateHttpNamespace = "servicediscovery:CreateHttpNamespace",

  /**
   * Write - Grants permission to create a private namespace based on DNS, which will be visible only inside a specified Amazon VPC
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePrivateDnsNamespace.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreatePrivateDnsNamespace = "servicediscovery:CreatePrivateDnsNamespace",

  /**
   * Write - Grants permission to create a public namespace based on DNS, which will be visible on the internet
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePublicDnsNamespace.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreatePublicDnsNamespace = "servicediscovery:CreatePublicDnsNamespace",

  /**
   * Write - Grants permission to create a service
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.namespace `ServicediscoveryResource.namespace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicediscovery:NamespaceArn`: Filters access by specifying the Amazon Resource Name (ARN) for the related namespace ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateService = "servicediscovery:CreateService",

  /**
   * Write - Grants permission to delete a specified namespace
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteNamespace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.namespace `ServicediscoveryResource.namespace`} 
   */
  DeleteNamespace = "servicediscovery:DeleteNamespace",

  /**
   * Write - Grants permission to delete a specified service
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.service `ServicediscoveryResource.service`} 
   */
  DeleteService = "servicediscovery:DeleteService",

  /**
   * Write - Grants permission to delete the records and the health check, if any, that Amazon Route 53 created for the specified instance
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_DeregisterInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.service `ServicediscoveryResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicediscovery:ServiceArn`: Filters access by specifying the Amazon Resource Name (ARN) for the related service ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeregisterInstance = "servicediscovery:DeregisterInstance",

  /**
   * Read - Grants permission to discover registered instances for a specified namespace and service
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicediscovery:NamespaceName`: Filters access by specifying the name of the related namespace ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicediscovery:ServiceName`: Filters access by specifying the name of the related service ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DiscoverInstances = "servicediscovery:DiscoverInstances",

  /**
   * Read - Grants permission to get information about a specified instance
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicediscovery:ServiceArn`: Filters access by specifying the Amazon Resource Name (ARN) for the related service ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetInstance = "servicediscovery:GetInstance",

  /**
   * Read - Grants permission to get the current health status (Healthy, Unhealthy, or Unknown) of one or more instances
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstancesHealthStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicediscovery:ServiceArn`: Filters access by specifying the Amazon Resource Name (ARN) for the related service ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetInstancesHealthStatus = "servicediscovery:GetInstancesHealthStatus",

  /**
   * Read - Grants permission to get information about a namespace
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_GetNamespace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.namespace `ServicediscoveryResource.namespace`} 
   */
  GetNamespace = "servicediscovery:GetNamespace",

  /**
   * Read - Grants permission to get information about a specific operation
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html
   */
  GetOperation = "servicediscovery:GetOperation",

  /**
   * Read - Grants permission to get the settings for a specified service
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_GetService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.service `ServicediscoveryResource.service`} 
   */
  GetService = "servicediscovery:GetService",

  /**
   * Read - Grants permission to get summary information about the instances that were registered with a specified service
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_ListInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicediscovery:ServiceArn`: Filters access by specifying the Amazon Resource Name (ARN) for the related service ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListInstances = "servicediscovery:ListInstances",

  /**
   * Read - Grants permission to get information about the namespaces
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_ListNamespaces.html
   */
  ListNamespaces = "servicediscovery:ListNamespaces",

  /**
   * List - Grants permission to list operations that match the criteria that you specify
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html
   */
  ListOperations = "servicediscovery:ListOperations",

  /**
   * Read - Grants permission to get settings for all the services that match specified filters
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_ListServices.html
   */
  ListServices = "servicediscovery:ListServices",

  /**
   * Read - Grants permission to lists tags for the specified resource
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_ListTagsForResource.html
   */
  ListTagsForResource = "servicediscovery:ListTagsForResource",

  /**
   * Write - Grants permission to register an instance based on the settings in a specified service
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.service `ServicediscoveryResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicediscovery:ServiceArn`: Filters access by specifying the Amazon Resource Name (ARN) for the related service ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RegisterInstance = "servicediscovery:RegisterInstance",

  /**
   * Tagging - Grants permission to add one or more tags to the specified resource
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "servicediscovery:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from the specified resource
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "servicediscovery:UntagResource",

  /**
   * Write - Grants permission to update the settings for a HTTP namespace
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateHttpNamespace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.namespace `ServicediscoveryResource.namespace`} 
   */
  UpdateHttpNamespace = "servicediscovery:UpdateHttpNamespace",

  /**
   * Write - Grants permission to update the current health status for an instance that has a custom health check
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicediscovery:ServiceArn`: Filters access by specifying the Amazon Resource Name (ARN) for the related service ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateInstanceCustomHealthStatus = "servicediscovery:UpdateInstanceCustomHealthStatus",

  /**
   * Write - Grants permission to update the settings for a private DNS namespace
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdatePrivateDnsNamespace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.namespace `ServicediscoveryResource.namespace`} 
   */
  UpdatePrivateDnsNamespace = "servicediscovery:UpdatePrivateDnsNamespace",

  /**
   * Write - Grants permission to update the settings for a public DNS namespace
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdatePublicDnsNamespace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.namespace `ServicediscoveryResource.namespace`} 
   */
  UpdatePublicDnsNamespace = "servicediscovery:UpdatePublicDnsNamespace",

  /**
   * Write - Grants permission to update the settings in a specified service
   * @see https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.service `ServicediscoveryResource.service`} 
   */
  UpdateService = "servicediscovery:UpdateService",

  /**
   * * - Grant all servicediscovery permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudmap.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicediscoveryResource.namespace `ServicediscoveryResource.namespace`} 
   * - {@link ServicediscoveryResource.service `ServicediscoveryResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicediscovery:NamespaceArn`: Filters access by specifying the Amazon Resource Name (ARN) for the related namespace ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicediscovery:ServiceArn`: Filters access by specifying the Amazon Resource Name (ARN) for the related service ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicediscovery:NamespaceName`: Filters access by specifying the name of the related namespace ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicediscovery:ServiceName`: Filters access by specifying the name of the related service ({@link https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "servicediscovery:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudmap.html
 */
export const ServicediscoveryResource = {

  /**
   * @see https://docs.aws.amazon.com/cloud-map/latest/dg/API_Namespace.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  namespace: (options: Partial<{partition: string, region: string, account: string, namespaceId: string}> = {}) => `arn:${options.partition || '*'}:servicediscovery:${options.region || '*'}:${options.account || '*'}:namespace/${options.namespaceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/cloud-map/latest/dg/API_Service.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  service: (options: Partial<{partition: string, region: string, account: string, serviceId: string}> = {}) => `arn:${options.partition || '*'}:servicediscovery:${options.region || '*'}:${options.account || '*'}:service/${options.serviceId || '*'}`,
}

