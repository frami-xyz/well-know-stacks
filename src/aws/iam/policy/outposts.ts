/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsoutposts.html
 */
export enum OutpostsAction {

  /**
   * Write - Grants permission to cancel an order
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_CancelOrder.html
   */
  CancelOrder = "outposts:CancelOrder",

  /**
   * Write - Grants permission to create an order
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_CreateOrder.html
   */
  CreateOrder = "outposts:CreateOrder",

  /**
   * Write - Grants permission to create an Outpost
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_CreateOutpost.html
   */
  CreateOutpost = "outposts:CreateOutpost",

  /**
   * Write - Grants permission to create a private connectivity configuration
   * @see https://docs.aws.amazon.com/outposts/latest/userguide/how-outposts-works.html#private-connectivity
   */
  CreatePrivateConnectivityConfig = "outposts:CreatePrivateConnectivityConfig",

  /**
   * Write - Grants permission to create a site
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_CreateSite.html
   */
  CreateSite = "outposts:CreateSite",

  /**
   * Write - Grants permission to delete an Outpost
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_DeleteOutpost.html
   */
  DeleteOutpost = "outposts:DeleteOutpost",

  /**
   * Write - Grants permission to delete a site
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_DeleteSite.html
   */
  DeleteSite = "outposts:DeleteSite",

  /**
   * Read - Grants permission to get a catalog item
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetCatalogItem.html
   */
  GetCatalogItem = "outposts:GetCatalogItem",

  /**
   * Read - Grants permission to get information about the connection for your Outpost server
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetConnection.html
   */
  GetConnection = "outposts:GetConnection",

  /**
   * Read - Grants permission to get information about an order
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOrder.html
   */
  GetOrder = "outposts:GetOrder",

  /**
   * Read - Grants permission to get information about the specified Outpost
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpost.html
   */
  GetOutpost = "outposts:GetOutpost",

  /**
   * Read - Grants permission to get the instance types for the specified Outpost
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpostInstanceTypes.html
   */
  GetOutpostInstanceTypes = "outposts:GetOutpostInstanceTypes",

  /**
   * Read - Grants permission to get a private connectivity configuration
   * @see https://docs.aws.amazon.com/outposts/latest/userguide/how-outposts-works.html#private-connectivity
   */
  GetPrivateConnectivityConfig = "outposts:GetPrivateConnectivityConfig",

  /**
   * Read - Grants permission to get a site
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetSite.html
   */
  GetSite = "outposts:GetSite",

  /**
   * Read - Grants permission to get a site address
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetSiteAddress.html
   */
  GetSiteAddress = "outposts:GetSiteAddress",

  /**
   * List - Grants permission to list the assets for your Outpost
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListAssets.html
   */
  ListAssets = "outposts:ListAssets",

  /**
   * List - Grants permission to list all catalog items
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListCatalogItems.html
   */
  ListCatalogItems = "outposts:ListCatalogItems",

  /**
   * List - Grants permission to list the orders for your AWS account
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListOrders.html
   */
  ListOrders = "outposts:ListOrders",

  /**
   * List - Grants permission to list the Outposts for your AWS account
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListOutposts.html
   */
  ListOutposts = "outposts:ListOutposts",

  /**
   * List - Grants permission to list the sites for your AWS account
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListSites.html
   */
  ListSites = "outposts:ListSites",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "outposts:ListTagsForResource",

  /**
   * Write - Grants permission to start a connection for your Outpost server
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_StartConnection.html
   */
  StartConnection = "outposts:StartConnection",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_TagResource.html
   */
  TagResource = "outposts:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_UntagResource.html
   */
  UntagResource = "outposts:UntagResource",

  /**
   * Write - Grants permission to update an Outpost
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_UpdateOutpost.html
   */
  UpdateOutpost = "outposts:UpdateOutpost",

  /**
   * Write - Grants permission to update a site
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_UpdateSite.html
   */
  UpdateSite = "outposts:UpdateSite",

  /**
   * Write - Grants permission to update the site address
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_UpdateSiteAddress.html
   */
  UpdateSiteAddress = "outposts:UpdateSiteAddress",

  /**
   * Write - Grants permission to update the physical properties of a rack at a site
   * @see https://docs.aws.amazon.com/outposts/latest/APIReference/API_UpdateSiteRackPhysicalProperties.html
   */
  UpdateSiteRackPhysicalProperties = "outposts:UpdateSiteRackPhysicalProperties",

  /**
   * * - Grant all outposts permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsoutposts.html
   */
  All = "outposts:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsoutposts.html
 */
export const OutpostsResource = {
}

