/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectconnect.html
 */
export enum DirectconnectAction {

  /**
   * Write - Grants permission to accept a proposal request to attach a virtual private gateway to a Direct Connect gateway
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AcceptDirectConnectGatewayAssociationProposal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxGateway `DirectconnectResource.dxGateway`} 
   */
  AcceptDirectConnectGatewayAssociationProposal = "directconnect:AcceptDirectConnectGatewayAssociationProposal",

  /**
   * Write - Grants permission to create a hosted connection on an interconnect
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateConnectionOnInterconnect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   */
  AllocateConnectionOnInterconnect = "directconnect:AllocateConnectionOnInterconnect",

  /**
   * Write - Grants permission to create a new hosted connection between a AWS Direct Connect partner's network and a specific AWS Direct Connect location
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateHostedConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AllocateHostedConnection = "directconnect:AllocateHostedConnection",

  /**
   * Write - Grants permission to provision a private virtual interface to be owned by a different customer
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePrivateVirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AllocatePrivateVirtualInterface = "directconnect:AllocatePrivateVirtualInterface",

  /**
   * Write - Grants permission to provision a public virtual interface to be owned by a different customer
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocatePublicVirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AllocatePublicVirtualInterface = "directconnect:AllocatePublicVirtualInterface",

  /**
   * Write - Grants permission to provision a transit virtual interface to be owned by a different customer
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateTransitVirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AllocateTransitVirtualInterface = "directconnect:AllocateTransitVirtualInterface",

  /**
   * Write - Grants permission to associate a connection with a LAG
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateConnectionWithLag.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   */
  AssociateConnectionWithLag = "directconnect:AssociateConnectionWithLag",

  /**
   * Write - Grants permission to associate a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateHostedConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   */
  AssociateHostedConnection = "directconnect:AssociateHostedConnection",

  /**
   * Write - Grants permission to associate a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an AWS Direct Connect dedicated connection
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateMacSecKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   */
  AssociateMacSecKey = "directconnect:AssociateMacSecKey",

  /**
   * Write - Grants permission to associate a virtual interface with a specified link aggregation group (LAG) or connection
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AssociateVirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   */
  AssociateVirtualInterface = "directconnect:AssociateVirtualInterface",

  /**
   * Write - Grants permission to confirm the creation of a hosted connection on an interconnect
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   */
  ConfirmConnection = "directconnect:ConfirmConnection",

  /**
   * Write - Grants permission to confirm the the terms of agreement when creating the connection or link aggregation group (LAG)
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmCustomerAgreement.html
   */
  ConfirmCustomerAgreement = "directconnect:ConfirmCustomerAgreement",

  /**
   * Write - Grants permission to accept ownership of a private virtual interface created by another customer
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPrivateVirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  ConfirmPrivateVirtualInterface = "directconnect:ConfirmPrivateVirtualInterface",

  /**
   * Write - Grants permission to accept ownership of a public virtual interface created by another customer
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmPublicVirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  ConfirmPublicVirtualInterface = "directconnect:ConfirmPublicVirtualInterface",

  /**
   * Write - Grants permission to accept ownership of a transit virtual interface created by another customer
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ConfirmTransitVirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  ConfirmTransitVirtualInterface = "directconnect:ConfirmTransitVirtualInterface",

  /**
   * Write - Grants permission to create a BGP peer on the specified virtual interface
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateBGPPeer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  CreateBGPPeer = "directconnect:CreateBGPPeer",

  /**
   * Write - Grants permission to create a new connection between the customer network and a specific AWS Direct Connect location
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateConnection = "directconnect:CreateConnection",

  /**
   * Write - Grants permission to create a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGateway.html
   */
  CreateDirectConnectGateway = "directconnect:CreateDirectConnectGateway",

  /**
   * Write - Grants permission to create an association between a Direct Connect gateway and a virtual private gateway
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxGateway `DirectconnectResource.dxGateway`} 
   */
  CreateDirectConnectGatewayAssociation = "directconnect:CreateDirectConnectGatewayAssociation",

  /**
   * Write - Grants permission to create a proposal to associate the specified virtual private gateway with the specified Direct Connect gateway
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateDirectConnectGatewayAssociationProposal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxGateway `DirectconnectResource.dxGateway`} 
   */
  CreateDirectConnectGatewayAssociationProposal = "directconnect:CreateDirectConnectGatewayAssociationProposal",

  /**
   * Write - Grants permission to create a new interconnect between a AWS Direct Connect partner's network and a specific AWS Direct Connect location
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateInterconnect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateInterconnect = "directconnect:CreateInterconnect",

  /**
   * Write - Grants permission to create a link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateLag.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateLag = "directconnect:CreateLag",

  /**
   * Write - Grants permission to create a new private virtual interface
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePrivateVirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreatePrivateVirtualInterface = "directconnect:CreatePrivateVirtualInterface",

  /**
   * Write - Grants permission to create a new public virtual interface
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreatePublicVirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreatePublicVirtualInterface = "directconnect:CreatePublicVirtualInterface",

  /**
   * Write - Grants permission to create a new transit virtual interface
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_CreateTransitVirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateTransitVirtualInterface = "directconnect:CreateTransitVirtualInterface",

  /**
   * Write - Grants permission to delete the specified BGP peer on the specified virtual interface with the specified customer address and ASN
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteBGPPeer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  DeleteBGPPeer = "directconnect:DeleteBGPPeer",

  /**
   * Write - Grants permission to delete the connection
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   */
  DeleteConnection = "directconnect:DeleteConnection",

  /**
   * Write - Grants permission to delete the specified Direct Connect gateway
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxGateway `DirectconnectResource.dxGateway`} 
   */
  DeleteDirectConnectGateway = "directconnect:DeleteDirectConnectGateway",

  /**
   * Write - Grants permission to delete the association between the specified Direct Connect gateway and virtual private gateway
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxGateway `DirectconnectResource.dxGateway`} 
   */
  DeleteDirectConnectGatewayAssociation = "directconnect:DeleteDirectConnectGatewayAssociation",

  /**
   * Write - Grants permission to delete the association proposal request between the specified Direct Connect gateway and virtual private gateway
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteDirectConnectGatewayAssociationProposal.html
   */
  DeleteDirectConnectGatewayAssociationProposal = "directconnect:DeleteDirectConnectGatewayAssociationProposal",

  /**
   * Write - Grants permission to delete the specified interconnect
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteInterconnect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   */
  DeleteInterconnect = "directconnect:DeleteInterconnect",

  /**
   * Write - Grants permission to delete the specified link aggregation group (LAG)
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteLag.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   */
  DeleteLag = "directconnect:DeleteLag",

  /**
   * Write - Grants permission to delete a virtual interface
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DeleteVirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  DeleteVirtualInterface = "directconnect:DeleteVirtualInterface",

  /**
   * Read - Grants permission to describe the LOA-CFA for a Connection
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionLoa.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   */
  DescribeConnectionLoa = "directconnect:DescribeConnectionLoa",

  /**
   * Read - Grants permission to describe all connections in this region
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnections.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   */
  DescribeConnections = "directconnect:DescribeConnections",

  /**
   * Read - Grants permission to describe a list of connections that have been provisioned on the given interconnect
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeConnectionsOnInterconnect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   */
  DescribeConnectionsOnInterconnect = "directconnect:DescribeConnectionsOnInterconnect",

  /**
   * Read - Grants permission to view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeCustomerMetadata.html
   */
  DescribeCustomerMetadata = "directconnect:DescribeCustomerMetadata",

  /**
   * Read - Grants permission to describe one or more association proposals for connection between a virtual private gateway and a Direct Connect gateway
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociationProposals.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxGateway `DirectconnectResource.dxGateway`} 
   */
  DescribeDirectConnectGatewayAssociationProposals = "directconnect:DescribeDirectConnectGatewayAssociationProposals",

  /**
   * Read - Grants permission to describe the associations between your Direct Connect gateways and virtual private gateways
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxGateway `DirectconnectResource.dxGateway`} 
   */
  DescribeDirectConnectGatewayAssociations = "directconnect:DescribeDirectConnectGatewayAssociations",

  /**
   * Read - Grants permission to describe the attachments between your Direct Connect gateways and virtual interfaces
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGatewayAttachments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxGateway `DirectconnectResource.dxGateway`} 
   */
  DescribeDirectConnectGatewayAttachments = "directconnect:DescribeDirectConnectGatewayAttachments",

  /**
   * Read - Grants permission to describe all your Direct Connect gateways or only the specified Direct Connect gateway
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeDirectConnectGateways.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxGateway `DirectconnectResource.dxGateway`} 
   */
  DescribeDirectConnectGateways = "directconnect:DescribeDirectConnectGateways",

  /**
   * Read - Grants permission to describe the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG)
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeHostedConnections.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   */
  DescribeHostedConnections = "directconnect:DescribeHostedConnections",

  /**
   * Read - Grants permission to describe the LOA-CFA for an Interconnect
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnectLoa.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   */
  DescribeInterconnectLoa = "directconnect:DescribeInterconnectLoa",

  /**
   * Read - Grants permission to describe a list of interconnects owned by the AWS account
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeInterconnects.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   */
  DescribeInterconnects = "directconnect:DescribeInterconnects",

  /**
   * Read - Grants permission to describe all your link aggregation groups (LAG) or the specified LAG
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   */
  DescribeLags = "directconnect:DescribeLags",

  /**
   * Read - Grants permission to describe the LOA-CFA for a connection, interconnect, or link aggregation group (LAG)
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLoa.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   */
  DescribeLoa = "directconnect:DescribeLoa",

  /**
   * Read - Grants permission to describe the list of AWS Direct Connect locations in the current AWS region
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLocations.html
   */
  DescribeLocations = "directconnect:DescribeLocations",

  /**
   * Read - Grants permission to describe Details about the router for a virtual interface
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeRouterConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  DescribeRouterConfiguration = "directconnect:DescribeRouterConfiguration",

  /**
   * Read - Grants permission to describe the tags associated with the specified AWS Direct Connect resources
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  DescribeTags = "directconnect:DescribeTags",

  /**
   * Read - Grants permission to describe a list of virtual private gateways owned by the AWS account
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualGateways.html
   */
  DescribeVirtualGateways = "directconnect:DescribeVirtualGateways",

  /**
   * Read - Grants permission to describe all virtual interfaces for an AWS account
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeVirtualInterfaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  DescribeVirtualInterfaces = "directconnect:DescribeVirtualInterfaces",

  /**
   * Write - Grants permission to disassociate a connection from a link aggregation group (LAG)
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DisassociateConnectionFromLag.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   */
  DisassociateConnectionFromLag = "directconnect:DisassociateConnectionFromLag",

  /**
   * Write - Grants permission to remove the association between a MAC Security (MACsec) security key and an AWS Direct Connect dedicated connection
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DisassociateMacSecKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   */
  DisassociateMacSecKey = "directconnect:DisassociateMacSecKey",

  /**
   * List - Grants permission to list the virtual interface failover test history
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  ListVirtualInterfaceTestHistory = "directconnect:ListVirtualInterfaceTestHistory",

  /**
   * Write - Grants permission to start the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StartBgpFailoverTest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  StartBgpFailoverTest = "directconnect:StartBgpFailoverTest",

  /**
   * Write - Grants permission to stop the virtual interface failover test
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  StopBgpFailoverTest = "directconnect:StopBgpFailoverTest",

  /**
   * Tagging - Grants permission to add the specified tags to the specified AWS Direct Connect resource. Each resource can have a maximum of 50 tags
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "directconnect:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from the specified AWS Direct Connect resource
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "directconnect:UntagResource",

  /**
   * Write - Grants permission to update the AWS Direct Connect dedicated connection configuration. You can update the following parameters for a connection: The connection name or The connection's MAC Security (MACsec) encryption mode
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   */
  UpdateConnection = "directconnect:UpdateConnection",

  /**
   * Write - Grants permission to update the name of a Direct Connect gateway
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxGateway `DirectconnectResource.dxGateway`} 
   */
  UpdateDirectConnectGateway = "directconnect:UpdateDirectConnectGateway",

  /**
   * Write - Grants permission to update the specified attributes of the Direct Connect gateway association
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateDirectConnectGatewayAssociation.html
   */
  UpdateDirectConnectGatewayAssociation = "directconnect:UpdateDirectConnectGatewayAssociation",

  /**
   * Write - Grants permission to update the attributes of the specified link aggregation group (LAG)
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateLag.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   */
  UpdateLag = "directconnect:UpdateLag",

  /**
   * Write - Grants permission to update the specified attributes of the specified virtual private interface
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_UpdateVirtualInterfaceAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   */
  UpdateVirtualInterfaceAttributes = "directconnect:UpdateVirtualInterfaceAttributes",

  /**
   * * - Grant all directconnect permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectconnect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DirectconnectResource.dxGateway `DirectconnectResource.dxGateway`} 
   * - {@link DirectconnectResource.dxcon `DirectconnectResource.dxcon`} 
   * - {@link DirectconnectResource.dxlag `DirectconnectResource.dxlag`} 
   * - {@link DirectconnectResource.dxvif `DirectconnectResource.dxvif`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "directconnect:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectconnect.html
 */
export const DirectconnectResource = {

  /**
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_Connection.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dxcon: (options: Partial<{partition: string, region: string, account: string, connectionId: string}> = {}) => `arn:${options.partition || '*'}:directconnect:${options.region || '*'}:${options.account || '*'}:dxcon/${options.connectionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_Lag.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dxlag: (options: Partial<{partition: string, region: string, account: string, lagId: string}> = {}) => `arn:${options.partition || '*'}:directconnect:${options.region || '*'}:${options.account || '*'}:dxlag/${options.lagId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_VirtualInterface.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dxvif: (options: Partial<{partition: string, region: string, account: string, virtualInterfaceId: string}> = {}) => `arn:${options.partition || '*'}:directconnect:${options.region || '*'}:${options.account || '*'}:dxvif/${options.virtualInterfaceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DirectConnectGateway.html
   */
  dxGateway: (options: Partial<{partition: string, account: string, directConnectGatewayId: string}> = {}) => `arn:${options.partition || '*'}:directconnect::${options.account || '*'}:dx-gateway/${options.directConnectGatewayId || '*'}`,
}

