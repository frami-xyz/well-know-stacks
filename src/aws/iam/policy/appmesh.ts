/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappmesh.html
 */
export enum AppmeshAction {

  /**
   * Write - Grants permission to create a gateway route that is associated with a virtual gateway
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateGatewayRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.gatewayRoute `AppmeshResource.gatewayRoute`} 
   * - {@link AppmeshResource.virtualService `AppmeshResource.virtualService`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateGatewayRoute = "appmesh:CreateGatewayRoute",

  /**
   * Write - Grants permission to create a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateMesh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateMesh = "appmesh:CreateMesh",

  /**
   * Write - Grants permission to create a route that is associated with a virtual router
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.route `AppmeshResource.route`} 
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateRoute = "appmesh:CreateRoute",

  /**
   * Write - Grants permission to create a virtual gateway within a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualGateway `AppmeshResource.virtualGateway`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateVirtualGateway = "appmesh:CreateVirtualGateway",

  /**
   * Write - Grants permission to create a virtual node within a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   * - {@link AppmeshResource.virtualService `AppmeshResource.virtualService`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateVirtualNode = "appmesh:CreateVirtualNode",

  /**
   * Write - Grants permission to create a virtual router within a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualRouter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualRouter `AppmeshResource.virtualRouter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateVirtualRouter = "appmesh:CreateVirtualRouter",

  /**
   * Write - Grants permission to create a virtual service within a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualService `AppmeshResource.virtualService`} 
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   * - {@link AppmeshResource.virtualRouter `AppmeshResource.virtualRouter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateVirtualService = "appmesh:CreateVirtualService",

  /**
   * Write - Grants permission to delete an existing gateway route
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteGatewayRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.gatewayRoute `AppmeshResource.gatewayRoute`} 
   */
  DeleteGatewayRoute = "appmesh:DeleteGatewayRoute",

  /**
   * Write - Grants permission to delete an existing service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteMesh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   */
  DeleteMesh = "appmesh:DeleteMesh",

  /**
   * Write - Grants permission to delete an existing route
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.route `AppmeshResource.route`} 
   */
  DeleteRoute = "appmesh:DeleteRoute",

  /**
   * Write - Grants permission to delete an existing virtual gateway
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualGateway `AppmeshResource.virtualGateway`} 
   */
  DeleteVirtualGateway = "appmesh:DeleteVirtualGateway",

  /**
   * Write - Grants permission to delete an existing virtual node
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   */
  DeleteVirtualNode = "appmesh:DeleteVirtualNode",

  /**
   * Write - Grants permission to delete an existing virtual router
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualRouter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualRouter `AppmeshResource.virtualRouter`} 
   */
  DeleteVirtualRouter = "appmesh:DeleteVirtualRouter",

  /**
   * Write - Grants permission to delete an existing virtual service
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualService `AppmeshResource.virtualService`} 
   */
  DeleteVirtualService = "appmesh:DeleteVirtualService",

  /**
   * Read - Grants permission to describe an existing gateway route
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeGatewayRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.gatewayRoute `AppmeshResource.gatewayRoute`} 
   */
  DescribeGatewayRoute = "appmesh:DescribeGatewayRoute",

  /**
   * Read - Grants permission to describe an existing service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeMesh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   */
  DescribeMesh = "appmesh:DescribeMesh",

  /**
   * Read - Grants permission to describe an existing route
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.route `AppmeshResource.route`} 
   */
  DescribeRoute = "appmesh:DescribeRoute",

  /**
   * Read - Grants permission to describe an existing virtual gateway
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualGateway `AppmeshResource.virtualGateway`} 
   */
  DescribeVirtualGateway = "appmesh:DescribeVirtualGateway",

  /**
   * Read - Grants permission to describe an existing virtual node
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   */
  DescribeVirtualNode = "appmesh:DescribeVirtualNode",

  /**
   * Read - Grants permission to describe an existing virtual router
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualRouter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualRouter `AppmeshResource.virtualRouter`} 
   */
  DescribeVirtualRouter = "appmesh:DescribeVirtualRouter",

  /**
   * Read - Grants permission to describe an existing virtual service
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualService `AppmeshResource.virtualService`} 
   */
  DescribeVirtualService = "appmesh:DescribeVirtualService",

  /**
   * List - Grants permission to list existing gateway routes in a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListGatewayRoutes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualGateway `AppmeshResource.virtualGateway`} 
   */
  ListGatewayRoutes = "appmesh:ListGatewayRoutes",

  /**
   * List - Grants permission to list existing service meshes
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListMeshes.html
   */
  ListMeshes = "appmesh:ListMeshes",

  /**
   * List - Grants permission to list existing routes in a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListRoutes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualRouter `AppmeshResource.virtualRouter`} 
   */
  ListRoutes = "appmesh:ListRoutes",

  /**
   * List - Grants permission to list the tags for an App Mesh resource
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.gatewayRoute `AppmeshResource.gatewayRoute`} 
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   * - {@link AppmeshResource.route `AppmeshResource.route`} 
   * - {@link AppmeshResource.virtualGateway `AppmeshResource.virtualGateway`} 
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   * - {@link AppmeshResource.virtualRouter `AppmeshResource.virtualRouter`} 
   * - {@link AppmeshResource.virtualService `AppmeshResource.virtualService`} 
   */
  ListTagsForResource = "appmesh:ListTagsForResource",

  /**
   * List - Grants permission to list existing virtual gateways in a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualGateways.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   */
  ListVirtualGateways = "appmesh:ListVirtualGateways",

  /**
   * List - Grants permission to list existing virtual nodes
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualNodes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   */
  ListVirtualNodes = "appmesh:ListVirtualNodes",

  /**
   * List - Grants permission to list existing virtual routers in a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualRouters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   */
  ListVirtualRouters = "appmesh:ListVirtualRouters",

  /**
   * List - Grants permission to list existing virtual services in a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualServices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   */
  ListVirtualServices = "appmesh:ListVirtualServices",

  /**
   * Read - Grants permission to receive streamed resources for an App Mesh endpoint (VirtualNode/VirtualGateway)
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualGateway `AppmeshResource.virtualGateway`} 
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   */
  StreamAggregatedResources = "appmesh:StreamAggregatedResources",

  /**
   * Tagging - Grants permission to tag a resource with a specified resourceArn
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.gatewayRoute `AppmeshResource.gatewayRoute`} 
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   * - {@link AppmeshResource.route `AppmeshResource.route`} 
   * - {@link AppmeshResource.virtualGateway `AppmeshResource.virtualGateway`} 
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   * - {@link AppmeshResource.virtualRouter `AppmeshResource.virtualRouter`} 
   * - {@link AppmeshResource.virtualService `AppmeshResource.virtualService`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "appmesh:TagResource",

  /**
   * Tagging - Grants permission to delete a tag from a resource
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.gatewayRoute `AppmeshResource.gatewayRoute`} 
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   * - {@link AppmeshResource.route `AppmeshResource.route`} 
   * - {@link AppmeshResource.virtualGateway `AppmeshResource.virtualGateway`} 
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   * - {@link AppmeshResource.virtualRouter `AppmeshResource.virtualRouter`} 
   * - {@link AppmeshResource.virtualService `AppmeshResource.virtualService`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "appmesh:UntagResource",

  /**
   * Write - Grants permission to update an existing gateway route for a specified service mesh and virtual gateway
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateGatewayRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.gatewayRoute `AppmeshResource.gatewayRoute`} 
   * - {@link AppmeshResource.virtualService `AppmeshResource.virtualService`} 
   */
  UpdateGatewayRoute = "appmesh:UpdateGatewayRoute",

  /**
   * Write - Grants permission to update an existing service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateMesh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   */
  UpdateMesh = "appmesh:UpdateMesh",

  /**
   * Write - Grants permission to update an existing route for a specified service mesh and virtual router
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.route `AppmeshResource.route`} 
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   */
  UpdateRoute = "appmesh:UpdateRoute",

  /**
   * Write - Grants permission to update an existing virtual gateway in a specified service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualGateway `AppmeshResource.virtualGateway`} 
   */
  UpdateVirtualGateway = "appmesh:UpdateVirtualGateway",

  /**
   * Write - Grants permission to update an existing virtual node in a specified service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   */
  UpdateVirtualNode = "appmesh:UpdateVirtualNode",

  /**
   * Write - Grants permission to update an existing virtual router in a specified service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualRouter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualRouter `AppmeshResource.virtualRouter`} 
   */
  UpdateVirtualRouter = "appmesh:UpdateVirtualRouter",

  /**
   * Write - Grants permission to update an existing virtual service in a specified service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.virtualService `AppmeshResource.virtualService`} 
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   * - {@link AppmeshResource.virtualRouter `AppmeshResource.virtualRouter`} 
   */
  UpdateVirtualService = "appmesh:UpdateVirtualService",

  /**
   * * - Grant all appmesh permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappmesh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshResource.gatewayRoute `AppmeshResource.gatewayRoute`} 
   * - {@link AppmeshResource.virtualService `AppmeshResource.virtualService`} 
   * - {@link AppmeshResource.mesh `AppmeshResource.mesh`} 
   * - {@link AppmeshResource.route `AppmeshResource.route`} 
   * - {@link AppmeshResource.virtualNode `AppmeshResource.virtualNode`} 
   * - {@link AppmeshResource.virtualGateway `AppmeshResource.virtualGateway`} 
   * - {@link AppmeshResource.virtualRouter `AppmeshResource.virtualRouter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "appmesh:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappmesh.html
 */
export const AppmeshResource = {

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  mesh: (options: Partial<{partition: string, region: string, account: string, meshName: string}> = {}) => `arn:${options.partition || '*'}:appmesh:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  virtualService: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualServiceName: string}> = {}) => `arn:${options.partition || '*'}:appmesh:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualService/${options.virtualServiceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  virtualNode: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualNodeName: string}> = {}) => `arn:${options.partition || '*'}:appmesh:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualNode/${options.virtualNodeName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  virtualRouter: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualRouterName: string}> = {}) => `arn:${options.partition || '*'}:appmesh:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualRouter/${options.virtualRouterName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  route: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualRouterName: string, routeName: string}> = {}) => `arn:${options.partition || '*'}:appmesh:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualRouter/${options.virtualRouterName || '*'}/route/${options.routeName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  virtualGateway: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualGatewayName: string}> = {}) => `arn:${options.partition || '*'}:appmesh:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualGateway/${options.virtualGatewayName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  gatewayRoute: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualGatewayName: string, gatewayRouteName: string}> = {}) => `arn:${options.partition || '*'}:appmesh:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualGateway/${options.virtualGatewayName || '*'}/gatewayRoute/${options.gatewayRouteName || '*'}`,
}

