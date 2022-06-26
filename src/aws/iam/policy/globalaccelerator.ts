/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglobalaccelerator.html
 */
export enum GlobalacceleratorAction {

  /**
   * Write - Grants permission to add a virtual private cloud (VPC) subnet endpoint to a custom routing accelerator endpoint group
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_AddCustomRoutingEndpoints.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.endpointgroup `GlobalacceleratorResource.endpointgroup`} 
   */
  AddCustomRoutingEndpoints = "globalaccelerator:AddCustomRoutingEndpoints",

  /**
   * Write - Grants permission to advertises an IPv4 address range that is provisioned for use with your accelerator through bring your own IP addresses (BYOIP)
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_AdvertiseByoipCidr.html
   */
  AdvertiseByoipCidr = "globalaccelerator:AdvertiseByoipCidr",

  /**
   * Write - Grants permission to allows custom routing of user traffic to a private destination IP:PORT in a specific VPC subnet
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.endpointgroup `GlobalacceleratorResource.endpointgroup`} 
   */
  AllowCustomRoutingTraffic = "globalaccelerator:AllowCustomRoutingTraffic",

  /**
   * Write - Grants permission to create a standard accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateAccelerator.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAccelerator = "globalaccelerator:CreateAccelerator",

  /**
   * Write - Grants permission to create a Custom Routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCustomRoutingAccelerator.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCustomRoutingAccelerator = "globalaccelerator:CreateCustomRoutingAccelerator",

  /**
   * Write - Grants permission to create an endpoint group for the specified listener for a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCustomRoutingEndpointGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.listener `GlobalacceleratorResource.listener`} 
   */
  CreateCustomRoutingEndpointGroup = "globalaccelerator:CreateCustomRoutingEndpointGroup",

  /**
   * Write - Grants permission to create a listener to process inbound connections from clients to a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateCustomRoutingListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  CreateCustomRoutingListener = "globalaccelerator:CreateCustomRoutingListener",

  /**
   * Write - Grants permission to add an endpoint group to a standard accelerator listener
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.listener `GlobalacceleratorResource.listener`} 
   */
  CreateEndpointGroup = "globalaccelerator:CreateEndpointGroup",

  /**
   * Write - Grants permission to add a listener to a standard accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  CreateListener = "globalaccelerator:CreateListener",

  /**
   * Write - Grants permission to delete a standard accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteAccelerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  DeleteAccelerator = "globalaccelerator:DeleteAccelerator",

  /**
   * Write - Grants permission to delete a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingAccelerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  DeleteCustomRoutingAccelerator = "globalaccelerator:DeleteCustomRoutingAccelerator",

  /**
   * Write - Grants permission to delete an endpoint group from a listener for a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingEndpointGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.endpointgroup `GlobalacceleratorResource.endpointgroup`} 
   */
  DeleteCustomRoutingEndpointGroup = "globalaccelerator:DeleteCustomRoutingEndpointGroup",

  /**
   * Write - Grants permission to delete a listener for a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteCustomRoutingListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.listener `GlobalacceleratorResource.listener`} 
   */
  DeleteCustomRoutingListener = "globalaccelerator:DeleteCustomRoutingListener",

  /**
   * Write - Grants permission to delete an endpoint group associated with a standard accelerator listener
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteEndpointGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.endpointgroup `GlobalacceleratorResource.endpointgroup`} 
   */
  DeleteEndpointGroup = "globalaccelerator:DeleteEndpointGroup",

  /**
   * Write - Grants permission to delete a listener from a standard accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeleteListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.listener `GlobalacceleratorResource.listener`} 
   */
  DeleteListener = "globalaccelerator:DeleteListener",

  /**
   * Write - Grants permission to disallows custom routing of user traffic to a private destination IP:PORT in a specific VPC subnet
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DenyCustomRoutingTraffic.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.endpointgroup `GlobalacceleratorResource.endpointgroup`} 
   */
  DenyCustomRoutingTraffic = "globalaccelerator:DenyCustomRoutingTraffic",

  /**
   * Write - Grants permission to releases the specified address range that you provisioned for use with your accelerator through bring your own IP addresses (BYOIP)
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DeprovisionByoipCidr.html
   */
  DeprovisionByoipCidr = "globalaccelerator:DeprovisionByoipCidr",

  /**
   * Read - Grants permissions to describe a standard accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAccelerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  DescribeAccelerator = "globalaccelerator:DescribeAccelerator",

  /**
   * Read - Grants permission to describe a standard accelerator attributes
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAcceleratorAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  DescribeAcceleratorAttributes = "globalaccelerator:DescribeAcceleratorAttributes",

  /**
   * Read - Grants permission to describe a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingAccelerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  DescribeCustomRoutingAccelerator = "globalaccelerator:DescribeCustomRoutingAccelerator",

  /**
   * Read - Grants permission to describe the attributes of a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingAcceleratorAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  DescribeCustomRoutingAcceleratorAttributes = "globalaccelerator:DescribeCustomRoutingAcceleratorAttributes",

  /**
   * Read - Grants permission to describe an endpoint group for a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingEndpointGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.endpointgroup `GlobalacceleratorResource.endpointgroup`} 
   */
  DescribeCustomRoutingEndpointGroup = "globalaccelerator:DescribeCustomRoutingEndpointGroup",

  /**
   * Read - Grants permission to describe a listener for a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeCustomRoutingListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.listener `GlobalacceleratorResource.listener`} 
   */
  DescribeCustomRoutingListener = "globalaccelerator:DescribeCustomRoutingListener",

  /**
   * Read - Grants permission to describe a standard accelerator endpoint group
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeEndpointGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.endpointgroup `GlobalacceleratorResource.endpointgroup`} 
   */
  DescribeEndpointGroup = "globalaccelerator:DescribeEndpointGroup",

  /**
   * Read - Grants permission to describe a standard accelerator listener
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.listener `GlobalacceleratorResource.listener`} 
   */
  DescribeListener = "globalaccelerator:DescribeListener",

  /**
   * List - Grants permission to list all standard accelerators
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListAccelerators.html
   */
  ListAccelerators = "globalaccelerator:ListAccelerators",

  /**
   * List - Grants permission to list the BYOIP cidrs
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListByoipCidrs.html
   */
  ListByoipCidrs = "globalaccelerator:ListByoipCidrs",

  /**
   * List - Grants permission to list the custom routing accelerators for an AWS account
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingAccelerators.html
   */
  ListCustomRoutingAccelerators = "globalaccelerator:ListCustomRoutingAccelerators",

  /**
   * List - Grants permission to list the endpoint groups that are associated with a listener for a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingEndpointGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.listener `GlobalacceleratorResource.listener`} 
   */
  ListCustomRoutingEndpointGroups = "globalaccelerator:ListCustomRoutingEndpointGroups",

  /**
   * List - Grants permission to list the listeners for a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingListeners.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  ListCustomRoutingListeners = "globalaccelerator:ListCustomRoutingListeners",

  /**
   * List - Grants permission to list the port mappings for a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingPortMappings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  ListCustomRoutingPortMappings = "globalaccelerator:ListCustomRoutingPortMappings",

  /**
   * List - Grants permission to list the port mappings for a specific endpoint IP address (a destination address) in a subnet
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListCustomRoutingPortMappingsByDestination.html
   */
  ListCustomRoutingPortMappingsByDestination = "globalaccelerator:ListCustomRoutingPortMappingsByDestination",

  /**
   * List - Grants permission to list all endpoint groups associated with a standard accelerator listener
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListEndpointGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.listener `GlobalacceleratorResource.listener`} 
   */
  ListEndpointGroups = "globalaccelerator:ListEndpointGroups",

  /**
   * List - Grants permission to list all listeners associated with a standard accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListListeners.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  ListListeners = "globalaccelerator:ListListeners",

  /**
   * Read - Grants permission to list tags for a globalaccelerator resource
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  ListTagsForResource = "globalaccelerator:ListTagsForResource",

  /**
   * Write - Grants permission to provisions an address range for use with your accelerator through bring your own IP addresses (BYOIP)
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_ProvisionByoipCidr.html
   */
  ProvisionByoipCidr = "globalaccelerator:ProvisionByoipCidr",

  /**
   * Write - Grants permission to remove virtual private cloud (VPC) subnet endpoints from a custom routing accelerator endpoint group
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_RemoveCustomRoutingEndpoints.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.endpointgroup `GlobalacceleratorResource.endpointgroup`} 
   */
  RemoveCustomRoutingEndpoints = "globalaccelerator:RemoveCustomRoutingEndpoints",

  /**
   * Tagging - Grants permission to add tags to a globalaccelerator resource
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "globalaccelerator:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a globalaccelerator resource
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "globalaccelerator:UntagResource",

  /**
   * Write - Grants permission to update a standard accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAccelerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  UpdateAccelerator = "globalaccelerator:UpdateAccelerator",

  /**
   * Write - Grants permission to update a standard accelerator attributes
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateAcceleratorAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  UpdateAcceleratorAttributes = "globalaccelerator:UpdateAcceleratorAttributes",

  /**
   * Write - Grants permission to update a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingAccelerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  UpdateCustomRoutingAccelerator = "globalaccelerator:UpdateCustomRoutingAccelerator",

  /**
   * Write - Grants permission to update the attributes for a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingAcceleratorAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   */
  UpdateCustomRoutingAcceleratorAttributes = "globalaccelerator:UpdateCustomRoutingAcceleratorAttributes",

  /**
   * Write - Grants permission to update a listener for a custom routing accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateCustomRoutingListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.listener `GlobalacceleratorResource.listener`} 
   */
  UpdateCustomRoutingListener = "globalaccelerator:UpdateCustomRoutingListener",

  /**
   * Write - Grants permission to update an endpoint group on a standard accelerator listener
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.endpointgroup `GlobalacceleratorResource.endpointgroup`} 
   */
  UpdateEndpointGroup = "globalaccelerator:UpdateEndpointGroup",

  /**
   * Write - Grants permission to update a listener on a standard accelerator
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateListener.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.listener `GlobalacceleratorResource.listener`} 
   */
  UpdateListener = "globalaccelerator:UpdateListener",

  /**
   * Write - Grants permission to stops advertising a BYOIP IPv4 address
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_WithdrawByoipCidr.html
   */
  WithdrawByoipCidr = "globalaccelerator:WithdrawByoipCidr",

  /**
   * * - Grant all globalaccelerator permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglobalaccelerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlobalacceleratorResource.endpointgroup `GlobalacceleratorResource.endpointgroup`} 
   * - {@link GlobalacceleratorResource.listener `GlobalacceleratorResource.listener`} 
   * - {@link GlobalacceleratorResource.accelerator `GlobalacceleratorResource.accelerator`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "globalaccelerator:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglobalaccelerator.html
 */
export const GlobalacceleratorResource = {

  /**
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_Accelerator.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  accelerator: (options: Partial<{partition: string, account: string, acceleratorId: string}> = {}) => `arn:${options.partition || '*'}:globalaccelerator::${options.account || '*'}:accelerator/${options.acceleratorId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_Listener.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  listener: (options: Partial<{partition: string, account: string, acceleratorId: string, listenerId: string}> = {}) => `arn:${options.partition || '*'}:globalaccelerator::${options.account || '*'}:accelerator/${options.acceleratorId || '*'}/listener/${options.listenerId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/global-accelerator/latest/api/API_EndpointGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  endpointgroup: (options: Partial<{partition: string, account: string, acceleratorId: string, listenerId: string, endpointGroupId: string}> = {}) => `arn:${options.partition || '*'}:globalaccelerator::${options.account || '*'}:accelerator/${options.acceleratorId || '*'}/listener/${options.listenerId || '*'}/endpoint-group/${options.endpointGroupId || '*'}`,
}

