/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_networkmanager.html
 */
export enum NetworkmanagerAction {

  /**
   * Write - Grants permission to accept creation of an attachment between a source and destination in a core network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AcceptAttachment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   */
  AcceptAttachment = "networkmanager:AcceptAttachment",

  /**
   * Write - Grants permission to associate a Connect Peer
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateConnectPeer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  AssociateConnectPeer = "networkmanager:AssociateConnectPeer",

  /**
   * Write - Grants permission to associate a customer gateway to a device
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateCustomerGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `networkmanager:cgwArn`: Filters access by which customer gateways can be associated or disassociated ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateCustomerGateway = "networkmanager:AssociateCustomerGateway",

  /**
   * Write - Grants permission to associate a link to a device
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateLink.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   */
  AssociateLink = "networkmanager:AssociateLink",

  /**
   * Write - Grants permission to associate a transit gateway connect peer to a device
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_AssociateTransitGatewayConnectPeer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `networkmanager:tgwConnectPeerArn`: Filters access by which transit gateway connect peers can be associated or disassociated ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateTransitGatewayConnectPeer = "networkmanager:AssociateTransitGatewayConnectPeer",

  /**
   * Write - Grants permission to create a Connect attachment
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnectAttachment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConnectAttachment = "networkmanager:CreateConnectAttachment",

  /**
   * Write - Grants permission to create a Connect Peer connection
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnectPeer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConnectPeer = "networkmanager:CreateConnectPeer",

  /**
   * Write - Grants permission to create a new connection
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConnection = "networkmanager:CreateConnection",

  /**
   * Write - Grants permission to create a new core network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateCoreNetwork.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCoreNetwork = "networkmanager:CreateCoreNetwork",

  /**
   * Write - Grants permission to create a new device
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDevice = "networkmanager:CreateDevice",

  /**
   * Write - Grants permission to create a new global network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateGlobalNetwork.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateGlobalNetwork = "networkmanager:CreateGlobalNetwork",

  /**
   * Write - Grants permission to create a new link
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateLink.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.site `NetworkmanagerResource.site`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLink = "networkmanager:CreateLink",

  /**
   * Write - Grants permission to create a new site
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateSite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSite = "networkmanager:CreateSite",

  /**
   * Write - Grants permission to create a site-to-site VPN attachment
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateSiteToSiteVpnAttachment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `networkmanager:vpnConnectionArn`: Filters access by which Site-to-Site VPN can be used to a create/update attachment ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSiteToSiteVpnAttachment = "networkmanager:CreateSiteToSiteVpnAttachment",

  /**
   * Write - Grants permission to create a VPC attachment
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_CreateVpcAttachment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `networkmanager:vpcArn`: Filters access by which VPC can be used to a create/update attachment ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `networkmanager:subnetArns`: Filters access by which VPC subnets can be added or removed from a VPC attachment ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateVpcAttachment = "networkmanager:CreateVpcAttachment",

  /**
   * Write - Grants permission to delete an attachment
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteAttachment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   */
  DeleteAttachment = "networkmanager:DeleteAttachment",

  /**
   * Write - Grants permission to delete a Connect Peer
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteConnectPeer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.connectPeer `NetworkmanagerResource.connectPeer`} 
   */
  DeleteConnectPeer = "networkmanager:DeleteConnectPeer",

  /**
   * Write - Grants permission to delete a connection
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.connection `NetworkmanagerResource.connection`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  DeleteConnection = "networkmanager:DeleteConnection",

  /**
   * Write - Grants permission to delete a core network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteCoreNetwork.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  DeleteCoreNetwork = "networkmanager:DeleteCoreNetwork",

  /**
   * Write - Grants permission to delete the core network policy version
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteCoreNetworkPolicyVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  DeleteCoreNetworkPolicyVersion = "networkmanager:DeleteCoreNetworkPolicyVersion",

  /**
   * Write - Grants permission to delete a device
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  DeleteDevice = "networkmanager:DeleteDevice",

  /**
   * Write - Grants permission to delete a global network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteGlobalNetwork.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  DeleteGlobalNetwork = "networkmanager:DeleteGlobalNetwork",

  /**
   * Write - Grants permission to delete a link
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteLink.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   */
  DeleteLink = "networkmanager:DeleteLink",

  /**
   * Write - Grants permission to delete a resource
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  DeleteResourcePolicy = "networkmanager:DeleteResourcePolicy",

  /**
   * Write - Grants permission to delete a site
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeleteSite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.site `NetworkmanagerResource.site`} 
   */
  DeleteSite = "networkmanager:DeleteSite",

  /**
   * Write - Grants permission to deregister a transit gateway from a global network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DeregisterTransitGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `networkmanager:tgwArn`: Filters access by which transit gateways can be registered or deregistered ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeregisterTransitGateway = "networkmanager:DeregisterTransitGateway",

  /**
   * List - Grants permission to describe global networks
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DescribeGlobalNetworks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  DescribeGlobalNetworks = "networkmanager:DescribeGlobalNetworks",

  /**
   * Write - Grants permission to disassociate a Connect Peer
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateConnectPeer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  DisassociateConnectPeer = "networkmanager:DisassociateConnectPeer",

  /**
   * Write - Grants permission to disassociate a customer gateway from a device
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateCustomerGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `networkmanager:cgwArn`: Filters access by which customer gateways can be associated or disassociated ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateCustomerGateway = "networkmanager:DisassociateCustomerGateway",

  /**
   * Write - Grants permission to disassociate a link from a device
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateLink.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   */
  DisassociateLink = "networkmanager:DisassociateLink",

  /**
   * Write - Grants permission to disassociate a transit gateway connect peer from a device
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_DisassociateTransitGatewayConnectPeer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `networkmanager:tgwConnectPeerArn`: Filters access by which transit gateway connect peers can be associated or disassociated ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateTransitGatewayConnectPeer = "networkmanager:DisassociateTransitGatewayConnectPeer",

  /**
   * Write - Grants permission to apply changes to the core network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ExecuteCoreNetworkChangeSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  ExecuteCoreNetworkChangeSet = "networkmanager:ExecuteCoreNetworkChangeSet",

  /**
   * Read - Grants permission to retrieve a Connect attachment
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectAttachment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   */
  GetConnectAttachment = "networkmanager:GetConnectAttachment",

  /**
   * Read - Grants permission to retrieve a Connect Peer
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectPeer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.connectPeer `NetworkmanagerResource.connectPeer`} 
   */
  GetConnectPeer = "networkmanager:GetConnectPeer",

  /**
   * Read - Grants permission to describe Connect Peer associations
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnectPeerAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  GetConnectPeerAssociations = "networkmanager:GetConnectPeerAssociations",

  /**
   * List - Grants permission to describe connections
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetConnections.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.connection `NetworkmanagerResource.connection`} 
   */
  GetConnections = "networkmanager:GetConnections",

  /**
   * Read - Grants permission to retrieve a core network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetwork.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  GetCoreNetwork = "networkmanager:GetCoreNetwork",

  /**
   * Read - Grants permission to retrieve a list of core network change sets
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetworkChangeSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  GetCoreNetworkChangeSet = "networkmanager:GetCoreNetworkChangeSet",

  /**
   * Read - Grants permission to retrieve core network policy
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCoreNetworkPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  GetCoreNetworkPolicy = "networkmanager:GetCoreNetworkPolicy",

  /**
   * List - Grants permission to describe customer gateway associations
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetCustomerGatewayAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  GetCustomerGatewayAssociations = "networkmanager:GetCustomerGatewayAssociations",

  /**
   * List - Grants permission to describe devices
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetDevices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   */
  GetDevices = "networkmanager:GetDevices",

  /**
   * List - Grants permission to describe link associations
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinkAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   */
  GetLinkAssociations = "networkmanager:GetLinkAssociations",

  /**
   * List - Grants permission to describe links
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetLinks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   */
  GetLinks = "networkmanager:GetLinks",

  /**
   * Read - Grants permission to return the number of resources for a global network grouped by type
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResourceCounts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  GetNetworkResourceCounts = "networkmanager:GetNetworkResourceCounts",

  /**
   * Read - Grants permission to retrieve related resources for a resource within the global network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResourceRelationships.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  GetNetworkResourceRelationships = "networkmanager:GetNetworkResourceRelationships",

  /**
   * Read - Grants permission to retrieve a global network resource
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  GetNetworkResources = "networkmanager:GetNetworkResources",

  /**
   * Read - Grants permission to retrieve routes for a route table within the global network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkRoutes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  GetNetworkRoutes = "networkmanager:GetNetworkRoutes",

  /**
   * Read - Grants permission to retrieve network telemetry objects for the global network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetNetworkTelemetry.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  GetNetworkTelemetry = "networkmanager:GetNetworkTelemetry",

  /**
   * Read - Grants permission to retrieve a resource policy
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  GetResourcePolicy = "networkmanager:GetResourcePolicy",

  /**
   * Read - Grants permission to retrieve a route analysis configuration and result
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetRouteAnalysis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  GetRouteAnalysis = "networkmanager:GetRouteAnalysis",

  /**
   * Read - Grants permission to retrieve a site-to-site VPN attachment
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetSiteToSiteVpnAttachment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   */
  GetSiteToSiteVpnAttachment = "networkmanager:GetSiteToSiteVpnAttachment",

  /**
   * List - Grants permission to describe global networks
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetSites.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.site `NetworkmanagerResource.site`} 
   */
  GetSites = "networkmanager:GetSites",

  /**
   * List - Grants permission to describe transit gateway connect peer associations
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayConnectPeerAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  GetTransitGatewayConnectPeerAssociations = "networkmanager:GetTransitGatewayConnectPeerAssociations",

  /**
   * List - Grants permission to describe transit gateway registrations
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetTransitGatewayRegistrations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  GetTransitGatewayRegistrations = "networkmanager:GetTransitGatewayRegistrations",

  /**
   * Read - Grants permission to retrieve a VPC attachment
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_GetVpcAttachment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   */
  GetVpcAttachment = "networkmanager:GetVpcAttachment",

  /**
   * List - Grants permission to describe attachments
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListAttachments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   */
  ListAttachments = "networkmanager:ListAttachments",

  /**
   * List - Grants permission to describe Connect Peers
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListConnectPeers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.connectPeer `NetworkmanagerResource.connectPeer`} 
   */
  ListConnectPeers = "networkmanager:ListConnectPeers",

  /**
   * List - Grants permission to list core network policy versions
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListCoreNetworkPolicyVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  ListCoreNetworkPolicyVersions = "networkmanager:ListCoreNetworkPolicyVersions",

  /**
   * List - Grants permission to list core networks
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListCoreNetworks.html
   */
  ListCoreNetworks = "networkmanager:ListCoreNetworks",

  /**
   * List - Grants permission to list organization service access status
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListOrganizationServiceAccessStatus.html
   */
  ListOrganizationServiceAccessStatus = "networkmanager:ListOrganizationServiceAccessStatus",

  /**
   * Read - Grants permission to list tags for a Network Manager resource
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   * - {@link NetworkmanagerResource.connectPeer `NetworkmanagerResource.connectPeer`} 
   * - {@link NetworkmanagerResource.connection `NetworkmanagerResource.connection`} 
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   * - {@link NetworkmanagerResource.site `NetworkmanagerResource.site`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "networkmanager:ListTagsForResource",

  /**
   * Write - Grants permission to create a core network policy
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_PutCoreNetworkPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  PutCoreNetworkPolicy = "networkmanager:PutCoreNetworkPolicy",

  /**
   * Write - Grants permission to create or update a resource policy
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_PutResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  PutResourcePolicy = "networkmanager:PutResourcePolicy",

  /**
   * Write - Grants permission to register a transit gateway to a global network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RegisterTransitGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `networkmanager:tgwArn`: Filters access by which transit gateways can be registered or deregistered ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RegisterTransitGateway = "networkmanager:RegisterTransitGateway",

  /**
   * Write - Grants permission to reject attachment request
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RejectAttachment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   */
  RejectAttachment = "networkmanager:RejectAttachment",

  /**
   * Write - Grants permission to restore the core network policy to a previous version
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_RestoreCoreNetworkPolicyVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  RestoreCoreNetworkPolicyVersion = "networkmanager:RestoreCoreNetworkPolicyVersion",

  /**
   * Write - Grants permission to start organization service access update
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_StartOrganizationServiceAccessUpdate.html
   */
  StartOrganizationServiceAccessUpdate = "networkmanager:StartOrganizationServiceAccessUpdate",

  /**
   * Write - Grants permission to start a route analysis and stores analysis configuration
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_StartRouteAnalysis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  StartRouteAnalysis = "networkmanager:StartRouteAnalysis",

  /**
   * Tagging - Grants permission to tag a Network Manager resource
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   * - {@link NetworkmanagerResource.connectPeer `NetworkmanagerResource.connectPeer`} 
   * - {@link NetworkmanagerResource.connection `NetworkmanagerResource.connection`} 
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   * - {@link NetworkmanagerResource.site `NetworkmanagerResource.site`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "networkmanager:TagResource",

  /**
   * Tagging - Grants permission to untag a Network Manager resource
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   * - {@link NetworkmanagerResource.connectPeer `NetworkmanagerResource.connectPeer`} 
   * - {@link NetworkmanagerResource.connection `NetworkmanagerResource.connection`} 
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   * - {@link NetworkmanagerResource.site `NetworkmanagerResource.site`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "networkmanager:UntagResource",

  /**
   * Write - Grants permission to update a connection
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.connection `NetworkmanagerResource.connection`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  UpdateConnection = "networkmanager:UpdateConnection",

  /**
   * Write - Grants permission to update a core network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateCoreNetwork.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   */
  UpdateCoreNetwork = "networkmanager:UpdateCoreNetwork",

  /**
   * Write - Grants permission to update a device
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  UpdateDevice = "networkmanager:UpdateDevice",

  /**
   * Write - Grants permission to update a global network
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateGlobalNetwork.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  UpdateGlobalNetwork = "networkmanager:UpdateGlobalNetwork",

  /**
   * Write - Grants permission to update a link
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateLink.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   */
  UpdateLink = "networkmanager:UpdateLink",

  /**
   * Write - Grants permission to add or update metadata key/value pairs on network resource
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateNetworkResourceMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   */
  UpdateNetworkResourceMetadata = "networkmanager:UpdateNetworkResourceMetadata",

  /**
   * Write - Grants permission to update a site
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateSite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.site `NetworkmanagerResource.site`} 
   */
  UpdateSite = "networkmanager:UpdateSite",

  /**
   * Write - Grants permission to update a VPC attachment
   * @see https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_UpdateVpcAttachment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `networkmanager:subnetArns`: Filters access by which VPC subnets can be added or removed from a VPC attachment ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateVpcAttachment = "networkmanager:UpdateVpcAttachment",

  /**
   * * - Grant all networkmanager permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_networkmanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link NetworkmanagerResource.attachment `NetworkmanagerResource.attachment`} 
   * - {@link NetworkmanagerResource.device `NetworkmanagerResource.device`} 
   * - {@link NetworkmanagerResource.globalNetwork `NetworkmanagerResource.globalNetwork`} 
   * - {@link NetworkmanagerResource.link `NetworkmanagerResource.link`} 
   * - {@link NetworkmanagerResource.coreNetwork `NetworkmanagerResource.coreNetwork`} 
   * - {@link NetworkmanagerResource.site `NetworkmanagerResource.site`} 
   * - {@link NetworkmanagerResource.connectPeer `NetworkmanagerResource.connectPeer`} 
   * - {@link NetworkmanagerResource.connection `NetworkmanagerResource.connection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `networkmanager:cgwArn`: Filters access by which customer gateways can be associated or disassociated ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `networkmanager:tgwConnectPeerArn`: Filters access by which transit gateway connect peers can be associated or disassociated ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `networkmanager:vpnConnectionArn`: Filters access by which Site-to-Site VPN can be used to a create/update attachment ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `networkmanager:vpcArn`: Filters access by which VPC can be used to a create/update attachment ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `networkmanager:subnetArns`: Filters access by which VPC subnets can be added or removed from a VPC attachment ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `networkmanager:tgwArn`: Filters access by which transit gateways can be registered or deregistered ({@link https://docs.aws.amazon.com/vpc/latest/tgw/nm-security-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "networkmanager:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_networkmanager.html
 */
export const NetworkmanagerResource = {

  /**
   * @see https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  globalNetwork: (options: Partial<{partition: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:networkmanager::${options.account || '*'}:global-network/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  site: (options: Partial<{partition: string, account: string, globalNetworkId: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:networkmanager::${options.account || '*'}:site/${options.globalNetworkId || '*'}/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  link: (options: Partial<{partition: string, account: string, globalNetworkId: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:networkmanager::${options.account || '*'}:link/${options.globalNetworkId || '*'}/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  device: (options: Partial<{partition: string, account: string, globalNetworkId: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:networkmanager::${options.account || '*'}:device/${options.globalNetworkId || '*'}/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  connection: (options: Partial<{partition: string, account: string, globalNetworkId: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:networkmanager::${options.account || '*'}:connection/${options.globalNetworkId || '*'}/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  coreNetwork: (options: Partial<{partition: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:networkmanager::${options.account || '*'}:core-network/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  attachment: (options: Partial<{partition: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:networkmanager::${options.account || '*'}:attachment/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/vpc/latest/tgw/what-is-network-manager.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  connectPeer: (options: Partial<{partition: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:networkmanager::${options.account || '*'}:connect-peer/${options.resourceId || '*'}`,
}

