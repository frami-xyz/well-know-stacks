/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplace.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecatalog.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceentitlementservice.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceimagebuildingservice.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacemeteringservice.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceprivatemarketplace.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceprocurementsystemsintegration.html
 */
export enum AwsMarketplaceAction {

  /**
   * Write - Grants permission to users to approve an incoming subscription request (for providers who provide products that require subscription verification)
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  AcceptAgreementApprovalRequest = "aws-marketplace:AcceptAgreementApprovalRequest",

  /**
   * Write - Grants permission to users to cancel pending subscription requests for products that require subscription verification
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  CancelAgreementRequest = "aws-marketplace:CancelAgreementRequest",

  /**
   * Read - Grants permission to users to describe the metadata about the agreement
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  DescribeAgreement = "aws-marketplace:DescribeAgreement",

  /**
   * Read - Grants permission to users to view the details of their incoming subscription requests (for providers who provide products that require subscription verification)
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  GetAgreementApprovalRequest = "aws-marketplace:GetAgreementApprovalRequest",

  /**
   * Read - Grants permission to users to view the details of their subscription requests for data products that require subscription verification
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  GetAgreementRequest = "aws-marketplace:GetAgreementRequest",

  /**
   * List - Grants permission to users to get a list of terms for an agreement
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  GetAgreementTerms = "aws-marketplace:GetAgreementTerms",

  /**
   * List - Grants permission to users to list their incoming subscription requests (for providers who provide products that require subscription verification)
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  ListAgreementApprovalRequests = "aws-marketplace:ListAgreementApprovalRequests",

  /**
   * List - Grants permission to users to list their subscription requests for products that require subscription verification
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  ListAgreementRequests = "aws-marketplace:ListAgreementRequests",

  /**
   * Write - Grants permission to users to decline an incoming subscription requests (for providers who provide products that require subscription verification)
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  RejectAgreementApprovalRequest = "aws-marketplace:RejectAgreementApprovalRequest",

  /**
   * List - Grants permission to users to search their agreements
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  SearchAgreements = "aws-marketplace:SearchAgreements",

  /**
   * Write - Grants permission to users to subscribe to AWS Marketplace products. Includes the ability to send a subscription request for products that require subscription verification. Includes the ability to enable auto-renewal for an existing subscription
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  Subscribe = "aws-marketplace:Subscribe",

  /**
   * Write - Grants permission to users to remove subscriptions to AWS Marketplace products. Includes the ability to disable auto-renewal for an existing subscription
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  Unsubscribe = "aws-marketplace:Unsubscribe",

  /**
   * Write - Grants permission to users to make changes to an incoming subscription request, including the ability to delete the prospective subscriber's information (for providers who provide products that require subscription verification)
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  UpdateAgreementApprovalRequest = "aws-marketplace:UpdateAgreementApprovalRequest",

  /**
   * List - Grants permission to users to see their account's subscriptions
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-iam-users-groups-policies.htmlControllingAccessToAWSMarketplaceSubscriptions.html#SummaryOfAWSMarketplaceSubscriptionsPermissions
   */
  ViewSubscriptions = "aws-marketplace:ViewSubscriptions",

  /**
   * Write - Grants permission to cancel a running change set
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_CancelChangeSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AwsMarketplaceResource.changeSet `AwsMarketplaceResource.changeSet`} 
   */
  CancelChangeSet = "aws-marketplace:CancelChangeSet",

  /**
   * Write - Grants permission to complete an existing task and submit the content to the associated change
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/
   */
  CompleteTask = "aws-marketplace:CompleteTask",

  /**
   * Read - Grants permission to return the details of an existing change set
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeChangeSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AwsMarketplaceResource.changeSet `AwsMarketplaceResource.changeSet`} 
   */
  DescribeChangeSet = "aws-marketplace:DescribeChangeSet",

  /**
   * Read - Grants permission to return the details of an existing entity
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeEntity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AwsMarketplaceResource.entity `AwsMarketplaceResource.entity`} 
   */
  DescribeEntity = "aws-marketplace:DescribeEntity",

  /**
   * Read - Grants permission to return the details of an existing task
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/
   */
  DescribeTask = "aws-marketplace:DescribeTask",

  /**
   * List - Grants permission to list existing change sets
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListChangeSets.html
   */
  ListChangeSets = "aws-marketplace:ListChangeSets",

  /**
   * List - Grants permission to list existing entities
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListEntities.html
   */
  ListEntities = "aws-marketplace:ListEntities",

  /**
   * List - Grants permission to list existing tasks
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/
   */
  ListTasks = "aws-marketplace:ListTasks",

  /**
   * Write - Grants permission to request a new change set. (Note: resource-level permissions for this action and condition context keys for this action are only supported when used with Catalog API and are not supported when used with AWS Marketplace Management Portal)
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AwsMarketplaceResource.entity `AwsMarketplaceResource.entity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `catalog:ChangeType`: Filters access by the change type in the StartChangeSet request ({@link https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/api-access-control.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartChangeSet = "aws-marketplace:StartChangeSet",

  /**
   * Write - Grants permission to update the contents of an existing task
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/
   */
  UpdateTask = "aws-marketplace:UpdateTask",

  /**
   * Read - Retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceentitlementservice.html
   */
  GetEntitlements = "aws-marketplace:GetEntitlements",

  /**
   * Read - Describes Image Builds identified by a build Id
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  DescribeBuilds = "aws-marketplace:DescribeBuilds",

  /**
   * Read - Lists Image Builds.
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  ListBuilds = "aws-marketplace:ListBuilds",

  /**
   * Write - Starts an Image Build
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  StartBuild = "aws-marketplace:StartBuild",

  /**
   * Write - Grants permission to post metering records for a set of customers for SaaS applications
   * @see https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_BatchMeterUsage.html
   */
  BatchMeterUsage = "aws-marketplace:BatchMeterUsage",

  /**
   * Write - Grants permission to emit metering records
   * @see https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_MeterUsage.html
   */
  MeterUsage = "aws-marketplace:MeterUsage",

  /**
   * Write - Grants permission to to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Meters software use per ECS task, per hour, with usage prorated to the second
   * @see https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_RegisterUsage.html
   */
  RegisterUsage = "aws-marketplace:RegisterUsage",

  /**
   * Write - Grants permission to resolve a registration token to obtain a CustomerIdentifier and product code
   * @see https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_ResolveCustomer.html
   */
  ResolveCustomer = "aws-marketplace:ResolveCustomer",

  /**
   * Write - Grants permission to add new approved products to the Private Marketplace. Also allows to approve a request for a product to be associated with the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  AssociateProductsWithPrivateMarketplace = "aws-marketplace:AssociateProductsWithPrivateMarketplace",

  /**
   * Write - Grants permission to create a new request for a product or products to be associated with the Private Marketplace. This action can be performed by any account in an in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  CreatePrivateMarketplaceRequests = "aws-marketplace:CreatePrivateMarketplaceRequests",

  /**
   * List - Grants permission to describe requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  DescribePrivateMarketplaceRequests = "aws-marketplace:DescribePrivateMarketplaceRequests",

  /**
   * Write - Grants permission to remove approved products from the Private Marketplace. Also allows to decline a request for a product to be associated with the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  DisassociateProductsFromPrivateMarketplace = "aws-marketplace:DisassociateProductsFromPrivateMarketplace",

  /**
   * List - Grants permission to get a queryable list for requests and associated products in the Private Marketplace. This action can be performed by any account in an AWS Organization, provided the user has permissions to do so, and the Organization's Service Control Policies allow it.
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/private-marketplace.html
   */
  ListPrivateMarketplaceRequests = "aws-marketplace:ListPrivateMarketplaceRequests",

  /**
   * Read - Describes the Procurement System integration configuration (e.g. Coupa) for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/procurement-systems-integration.html
   */
  DescribeProcurementSystemConfiguration = "aws-marketplace:DescribeProcurementSystemConfiguration",

  /**
   * Write - Creates or updates the Procurement System integration configuration (e.g. Coupa) for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.
   * @see https://docs.aws.amazon.com/marketplace/latest/buyerguide/procurement-systems-integration.html
   */
  PutProcurementSystemConfiguration = "aws-marketplace:PutProcurementSystemConfiguration",

  /**
   * * - Grant all aws-marketplace permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AwsMarketplaceResource.changeSet `AwsMarketplaceResource.changeSet`} 
   * - {@link AwsMarketplaceResource.entity `AwsMarketplaceResource.entity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `catalog:ChangeType`: Filters access by the change type in the StartChangeSet request ({@link https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/api-access-control.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "aws-marketplace:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplace.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecatalog.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceentitlementservice.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceimagebuildingservice.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacemeteringservice.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceprivatemarketplace.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceprocurementsystemsintegration.html
 */
export const AwsMarketplaceResource = {

  /**
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeEntity.html#API_DescribeEntity_ResponseSyntax
   */
  entity: (options: Partial<{partition: string, region: string, account: string, catalog: string, entityType: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:aws-marketplace:${options.region || '*'}:${options.account || '*'}:${options.catalog || '*'}/${options.entityType || '*'}/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_ResponseSyntax
   */
  changeSet: (options: Partial<{partition: string, region: string, account: string, catalog: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:aws-marketplace:${options.region || '*'}:${options.account || '*'}:${options.catalog || '*'}/ChangeSet/${options.resourceId || '*'}`,
}

