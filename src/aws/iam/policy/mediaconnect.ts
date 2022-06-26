/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconnect.html
 */
export enum MediaconnectAction {

  /**
   * Write - Grants permission to add media streams to any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-mediastreams.html
   */
  AddFlowMediaStreams = "mediaconnect:AddFlowMediaStreams",

  /**
   * Write - Grants permission to add outputs to any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs.html
   */
  AddFlowOutputs = "mediaconnect:AddFlowOutputs",

  /**
   * Write - Grants permission to add sources to any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source.html
   */
  AddFlowSources = "mediaconnect:AddFlowSources",

  /**
   * Write - Grants permission to add VPC interfaces to any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-vpcinterfaces.html
   */
  AddFlowVpcInterfaces = "mediaconnect:AddFlowVpcInterfaces",

  /**
   * Write - Grants permission to create flows
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html
   */
  CreateFlow = "mediaconnect:CreateFlow",

  /**
   * Write - Grants permission to delete flows
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html
   */
  DeleteFlow = "mediaconnect:DeleteFlow",

  /**
   * Read - Grants permission to display the details of a flow including the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html
   */
  DescribeFlow = "mediaconnect:DescribeFlow",

  /**
   * Read - Grants permission to display the details of an offering
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-offerings-offeringarn.html
   */
  DescribeOffering = "mediaconnect:DescribeOffering",

  /**
   * Read - Grants permission to display the details of a reservation
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-reservations-reservationarn.html
   */
  DescribeReservation = "mediaconnect:DescribeReservation",

  /**
   * Write - Grants permission to grant entitlements on any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements.html
   */
  GrantFlowEntitlements = "mediaconnect:GrantFlowEntitlements",

  /**
   * List - Grants permission to display a list of all entitlements that have been granted to the account
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-entitlements.html
   */
  ListEntitlements = "mediaconnect:ListEntitlements",

  /**
   * List - Grants permission to display a list of flows that are associated with this account
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows.html
   */
  ListFlows = "mediaconnect:ListFlows",

  /**
   * List - Grants permission to display a list of all offerings that are available to the account in the current AWS Region
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-offerings.html
   */
  ListOfferings = "mediaconnect:ListOfferings",

  /**
   * List - Grants permission to display a list of all reservations that have been purchased by the account in the current AWS Region
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-reservations.html
   */
  ListReservations = "mediaconnect:ListReservations",

  /**
   * Read - Grants permission to display a list of all tags associated with a resource
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/tags-resourcearn.html
   */
  ListTagsForResource = "mediaconnect:ListTagsForResource",

  /**
   * Write - Grants permission to purchase an offering
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-offerings-offeringarn.html
   */
  PurchaseOffering = "mediaconnect:PurchaseOffering",

  /**
   * Write - Grants permission to remove media streams from any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-mediastreams-mediastreamname.html
   */
  RemoveFlowMediaStream = "mediaconnect:RemoveFlowMediaStream",

  /**
   * Write - Grants permission to remove outputs from any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs-outputarn.html
   */
  RemoveFlowOutput = "mediaconnect:RemoveFlowOutput",

  /**
   * Write - Grants permission to remove sources from any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source-sourcearn.html
   */
  RemoveFlowSource = "mediaconnect:RemoveFlowSource",

  /**
   * Write - Grants permission to remove VPC interfaces from any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-vpcinterfaces-vpcinterfacename.html
   */
  RemoveFlowVpcInterface = "mediaconnect:RemoveFlowVpcInterface",

  /**
   * Write - Grants permission to revoke entitlements on any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements-entitlementarn.html
   */
  RevokeFlowEntitlement = "mediaconnect:RevokeFlowEntitlement",

  /**
   * Write - Grants permission to start flows
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-start-flowarn.html
   */
  StartFlow = "mediaconnect:StartFlow",

  /**
   * Write - Grants permission to stop flows
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-stop-flowarn.html
   */
  StopFlow = "mediaconnect:StopFlow",

  /**
   * Tagging - Grants permission to associate tags with resources
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/tags-resourcearn.html
   */
  TagResource = "mediaconnect:TagResource",

  /**
   * Tagging - Grants permission to remove tags from resources
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/tags-resourcearn.html
   */
  UntagResource = "mediaconnect:UntagResource",

  /**
   * Write - Grants permission to update flows
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn.html
   */
  UpdateFlow = "mediaconnect:UpdateFlow",

  /**
   * Write - Grants permission to update entitlements on any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-entitlements-entitlementarn.html
   */
  UpdateFlowEntitlement = "mediaconnect:UpdateFlowEntitlement",

  /**
   * Write - Grants permission to update media streams on any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-mediastreams-mediastreamname.html
   */
  UpdateFlowMediaStream = "mediaconnect:UpdateFlowMediaStream",

  /**
   * Write - Grants permission to update outputs on any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-outputs-outputarn.html
   */
  UpdateFlowOutput = "mediaconnect:UpdateFlowOutput",

  /**
   * Write - Grants permission to update the source of any flow
   * @see https://docs.aws.amazon.com/mediaconnect/latest/api/v1-flows-flowarn-source-sourcearn.html
   */
  UpdateFlowSource = "mediaconnect:UpdateFlowSource",

  /**
   * * - Grant all mediaconnect permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconnect.html
   */
  All = "mediaconnect:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconnect.html
 */
export const MediaconnectResource = {

  /**
   * @see https://docs.aws.amazon.com/mediaconnect/latest/ug/entitlements.html
   */
  entitlement: (options: Partial<{partition: string, region: string, account: string, flowId: string, entitlementName: string}> = {}) => `arn:${options.partition || '*'}:mediaconnect:${options.region || '*'}:${options.account || '*'}:entitlement:${options.flowId || '*'}:${options.entitlementName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediaconnect/latest/ug/flows.html
   */
  flow: (options: Partial<{partition: string, region: string, account: string, flowId: string, flowName: string}> = {}) => `arn:${options.partition || '*'}:mediaconnect:${options.region || '*'}:${options.account || '*'}:flow:${options.flowId || '*'}:${options.flowName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediaconnect/latest/ug/outputs.html
   */
  output: (options: Partial<{partition: string, region: string, account: string, outputId: string, outputName: string}> = {}) => `arn:${options.partition || '*'}:mediaconnect:${options.region || '*'}:${options.account || '*'}:output:${options.outputId || '*'}:${options.outputName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediaconnect/latest/ug/sources.html
   */
  source: (options: Partial<{partition: string, region: string, account: string, sourceId: string, sourceName: string}> = {}) => `arn:${options.partition || '*'}:mediaconnect:${options.region || '*'}:${options.account || '*'}:source:${options.sourceId || '*'}:${options.sourceName || '*'}`,
}

