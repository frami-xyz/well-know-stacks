/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappmeshpreview.html
 */
export enum AppmeshPreviewAction {

  /**
   * Write - Grants permission to create a gateway route that is associated with a virtual gateway
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateGatewayRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.gatewayRoute `AppmeshPreviewResource.gatewayRoute`} 
   * - {@link AppmeshPreviewResource.virtualService `AppmeshPreviewResource.virtualService`} 
   */
  CreateGatewayRoute = "appmesh-preview:CreateGatewayRoute",

  /**
   * Write - Grants permission to create a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateMesh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.mesh `AppmeshPreviewResource.mesh`} 
   */
  CreateMesh = "appmesh-preview:CreateMesh",

  /**
   * Write - Grants permission to create a route that is associated with a virtual router
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.route `AppmeshPreviewResource.route`} 
   * - {@link AppmeshPreviewResource.virtualNode `AppmeshPreviewResource.virtualNode`} 
   */
  CreateRoute = "appmesh-preview:CreateRoute",

  /**
   * Write - Grants permission to create a virtual gateway within a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualGateway `AppmeshPreviewResource.virtualGateway`} 
   */
  CreateVirtualGateway = "appmesh-preview:CreateVirtualGateway",

  /**
   * Write - Grants permission to create a virtual node within a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualNode `AppmeshPreviewResource.virtualNode`} 
   * - {@link AppmeshPreviewResource.virtualService `AppmeshPreviewResource.virtualService`} 
   */
  CreateVirtualNode = "appmesh-preview:CreateVirtualNode",

  /**
   * Write - Grants permission to create a virtual router within a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualRouter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualRouter `AppmeshPreviewResource.virtualRouter`} 
   */
  CreateVirtualRouter = "appmesh-preview:CreateVirtualRouter",

  /**
   * Write - Grants permission to create a virtual service within a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_CreateVirtualService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualService `AppmeshPreviewResource.virtualService`} 
   * - {@link AppmeshPreviewResource.virtualNode `AppmeshPreviewResource.virtualNode`} 
   * - {@link AppmeshPreviewResource.virtualRouter `AppmeshPreviewResource.virtualRouter`} 
   */
  CreateVirtualService = "appmesh-preview:CreateVirtualService",

  /**
   * Write - Grants permission to delete an existing gateway route
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteGatewayRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.gatewayRoute `AppmeshPreviewResource.gatewayRoute`} 
   */
  DeleteGatewayRoute = "appmesh-preview:DeleteGatewayRoute",

  /**
   * Write - Grants permission to delete an existing service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteMesh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.mesh `AppmeshPreviewResource.mesh`} 
   */
  DeleteMesh = "appmesh-preview:DeleteMesh",

  /**
   * Write - Grants permission to delete an existing route
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.route `AppmeshPreviewResource.route`} 
   */
  DeleteRoute = "appmesh-preview:DeleteRoute",

  /**
   * Write - Grants permission to delete an existing virtual gateway
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualGateway `AppmeshPreviewResource.virtualGateway`} 
   */
  DeleteVirtualGateway = "appmesh-preview:DeleteVirtualGateway",

  /**
   * Write - Grants permission to delete an existing virtual node
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualNode `AppmeshPreviewResource.virtualNode`} 
   */
  DeleteVirtualNode = "appmesh-preview:DeleteVirtualNode",

  /**
   * Write - Grants permission to delete an existing virtual router
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualRouter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualRouter `AppmeshPreviewResource.virtualRouter`} 
   */
  DeleteVirtualRouter = "appmesh-preview:DeleteVirtualRouter",

  /**
   * Write - Grants permission to delete an existing virtual service
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DeleteVirtualService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualService `AppmeshPreviewResource.virtualService`} 
   */
  DeleteVirtualService = "appmesh-preview:DeleteVirtualService",

  /**
   * Read - Grants permission to describe an existing gateway route
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeGatewayRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.gatewayRoute `AppmeshPreviewResource.gatewayRoute`} 
   */
  DescribeGatewayRoute = "appmesh-preview:DescribeGatewayRoute",

  /**
   * Read - Grants permission to describe an existing service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeMesh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.mesh `AppmeshPreviewResource.mesh`} 
   */
  DescribeMesh = "appmesh-preview:DescribeMesh",

  /**
   * Read - Grants permission to describe an existing route
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.route `AppmeshPreviewResource.route`} 
   */
  DescribeRoute = "appmesh-preview:DescribeRoute",

  /**
   * Read - Grants permission to describe an existing virtual gateway
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualGateway `AppmeshPreviewResource.virtualGateway`} 
   */
  DescribeVirtualGateway = "appmesh-preview:DescribeVirtualGateway",

  /**
   * Read - Grants permission to describe an existing virtual node
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualNode `AppmeshPreviewResource.virtualNode`} 
   */
  DescribeVirtualNode = "appmesh-preview:DescribeVirtualNode",

  /**
   * Read - Grants permission to describe an existing virtual router
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualRouter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualRouter `AppmeshPreviewResource.virtualRouter`} 
   */
  DescribeVirtualRouter = "appmesh-preview:DescribeVirtualRouter",

  /**
   * Read - Grants permission to describe an existing virtual service
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_DescribeVirtualService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualService `AppmeshPreviewResource.virtualService`} 
   */
  DescribeVirtualService = "appmesh-preview:DescribeVirtualService",

  /**
   * List - Grants permission to list existing gateway routes in a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListGatewayRoutes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualGateway `AppmeshPreviewResource.virtualGateway`} 
   */
  ListGatewayRoutes = "appmesh-preview:ListGatewayRoutes",

  /**
   * List - Grants permission to list existing service meshes
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListMeshes.html
   */
  ListMeshes = "appmesh-preview:ListMeshes",

  /**
   * List - Grants permission to list existing routes in a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListRoutes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualRouter `AppmeshPreviewResource.virtualRouter`} 
   */
  ListRoutes = "appmesh-preview:ListRoutes",

  /**
   * List - Grants permission to list existing virtual gateways in a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualGateways.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.mesh `AppmeshPreviewResource.mesh`} 
   */
  ListVirtualGateways = "appmesh-preview:ListVirtualGateways",

  /**
   * List - Grants permission to list existing virtual nodes
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualNodes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.mesh `AppmeshPreviewResource.mesh`} 
   */
  ListVirtualNodes = "appmesh-preview:ListVirtualNodes",

  /**
   * List - Grants permission to list existing virtual routers in a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualRouters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.mesh `AppmeshPreviewResource.mesh`} 
   */
  ListVirtualRouters = "appmesh-preview:ListVirtualRouters",

  /**
   * List - Grants permission to list existing virtual services in a service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_ListVirtualServices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.mesh `AppmeshPreviewResource.mesh`} 
   */
  ListVirtualServices = "appmesh-preview:ListVirtualServices",

  /**
   * Read - Grants permission to receive streamed resources for an App Mesh endpoint (VirtualNode/VirtualGateway)
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualGateway `AppmeshPreviewResource.virtualGateway`} 
   * - {@link AppmeshPreviewResource.virtualNode `AppmeshPreviewResource.virtualNode`} 
   */
  StreamAggregatedResources = "appmesh-preview:StreamAggregatedResources",

  /**
   * Write - Grants permission to update an existing gateway route for a specified service mesh and virtual gateway
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateGatewayRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.gatewayRoute `AppmeshPreviewResource.gatewayRoute`} 
   * - {@link AppmeshPreviewResource.virtualService `AppmeshPreviewResource.virtualService`} 
   */
  UpdateGatewayRoute = "appmesh-preview:UpdateGatewayRoute",

  /**
   * Write - Grants permission to update an existing service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateMesh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.mesh `AppmeshPreviewResource.mesh`} 
   */
  UpdateMesh = "appmesh-preview:UpdateMesh",

  /**
   * Write - Grants permission to update an existing route for a specified service mesh and virtual router
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.route `AppmeshPreviewResource.route`} 
   * - {@link AppmeshPreviewResource.virtualNode `AppmeshPreviewResource.virtualNode`} 
   */
  UpdateRoute = "appmesh-preview:UpdateRoute",

  /**
   * Write - Grants permission to update an existing virtual gateway in a specified service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualGateway `AppmeshPreviewResource.virtualGateway`} 
   */
  UpdateVirtualGateway = "appmesh-preview:UpdateVirtualGateway",

  /**
   * Write - Grants permission to update an existing virtual node in a specified service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualNode `AppmeshPreviewResource.virtualNode`} 
   */
  UpdateVirtualNode = "appmesh-preview:UpdateVirtualNode",

  /**
   * Write - Grants permission to update an existing virtual router in a specified service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualRouter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualRouter `AppmeshPreviewResource.virtualRouter`} 
   */
  UpdateVirtualRouter = "appmesh-preview:UpdateVirtualRouter",

  /**
   * Write - Grants permission to update an existing virtual service in a specified service mesh
   * @see https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_UpdateVirtualService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.virtualService `AppmeshPreviewResource.virtualService`} 
   * - {@link AppmeshPreviewResource.virtualNode `AppmeshPreviewResource.virtualNode`} 
   * - {@link AppmeshPreviewResource.virtualRouter `AppmeshPreviewResource.virtualRouter`} 
   */
  UpdateVirtualService = "appmesh-preview:UpdateVirtualService",

  /**
   * * - Grant all appmesh-preview permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappmeshpreview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppmeshPreviewResource.gatewayRoute `AppmeshPreviewResource.gatewayRoute`} 
   * - {@link AppmeshPreviewResource.virtualService `AppmeshPreviewResource.virtualService`} 
   * - {@link AppmeshPreviewResource.mesh `AppmeshPreviewResource.mesh`} 
   * - {@link AppmeshPreviewResource.route `AppmeshPreviewResource.route`} 
   * - {@link AppmeshPreviewResource.virtualNode `AppmeshPreviewResource.virtualNode`} 
   * - {@link AppmeshPreviewResource.virtualGateway `AppmeshPreviewResource.virtualGateway`} 
   * - {@link AppmeshPreviewResource.virtualRouter `AppmeshPreviewResource.virtualRouter`} 
   */
  All = "appmesh-preview:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappmeshpreview.html
 */
export const AppmeshPreviewResource = {

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html
   */
  mesh: (options: Partial<{partition: string, region: string, account: string, meshName: string}> = {}) => `arn:${options.partition || '*'}:appmesh-preview:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html
   */
  virtualService: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualServiceName: string}> = {}) => `arn:${options.partition || '*'}:appmesh-preview:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualService/${options.virtualServiceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html
   */
  virtualNode: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualNodeName: string}> = {}) => `arn:${options.partition || '*'}:appmesh-preview:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualNode/${options.virtualNodeName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html
   */
  virtualRouter: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualRouterName: string}> = {}) => `arn:${options.partition || '*'}:appmesh-preview:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualRouter/${options.virtualRouterName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html
   */
  route: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualRouterName: string, routeName: string}> = {}) => `arn:${options.partition || '*'}:appmesh-preview:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualRouter/${options.virtualRouterName || '*'}/route/${options.routeName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html
   */
  virtualGateway: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualGatewayName: string}> = {}) => `arn:${options.partition || '*'}:appmesh-preview:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualGateway/${options.virtualGatewayName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html
   */
  gatewayRoute: (options: Partial<{partition: string, region: string, account: string, meshName: string, virtualGatewayName: string, gatewayRouteName: string}> = {}) => `arn:${options.partition || '*'}:appmesh-preview:${options.region || '*'}:${options.account || '*'}:mesh/${options.meshName || '*'}/virtualGateway/${options.virtualGatewayName || '*'}/gatewayRoute/${options.gatewayRouteName || '*'}`,
}

