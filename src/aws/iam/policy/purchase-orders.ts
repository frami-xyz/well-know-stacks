/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspurchaseordersconsole.html
 */
export enum PurchaseOrdersAction {

  /**
   * Write - Modify purchase orders and details
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  ModifyPurchaseOrders = "purchase-orders:ModifyPurchaseOrders",

  /**
   * Read - View purchase orders and details
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  ViewPurchaseOrders = "purchase-orders:ViewPurchaseOrders",

  /**
   * * - Grant all purchase-orders permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspurchaseordersconsole.html
   */
  All = "purchase-orders:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspurchaseordersconsole.html
 */
export const PurchaseOrdersResource = {
}

