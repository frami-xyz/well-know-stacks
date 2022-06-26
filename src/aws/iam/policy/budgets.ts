/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbudgetservice.html
 */
export enum BudgetsAction {

  /**
   * Write - Grants permissions to create and define a response that you can configure to execute once your budget has exceeded a specific budget threshold.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BudgetsResource.budgetAction `BudgetsResource.budgetAction`} 
   */
  CreateBudgetAction = "budgets:CreateBudgetAction",

  /**
   * Write - Grants permissions to delete an action that is associated with a specific budget.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BudgetsResource.budgetAction `BudgetsResource.budgetAction`} 
   */
  DeleteBudgetAction = "budgets:DeleteBudgetAction",

  /**
   * Read - Grants permissions to retrieve the details of specific budget action associated with a budget.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BudgetsResource.budgetAction `BudgetsResource.budgetAction`} 
   */
  DescribeBudgetAction = "budgets:DescribeBudgetAction",

  /**
   * Read - Grants permissions to retrieve a historical view of the budget actions statuses associated with a particular budget action. These status include statues such as 'Standby', 'Pending' and 'Executed'.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BudgetsResource.budgetAction `BudgetsResource.budgetAction`} 
   */
  DescribeBudgetActionHistories = "budgets:DescribeBudgetActionHistories",

  /**
   * Read - Grants permissions to retrieve the details of all of the budget actions associated with your account.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   */
  DescribeBudgetActionsForAccount = "budgets:DescribeBudgetActionsForAccount",

  /**
   * Read - Grants permissions to retrieve the details of all of the budget actions associated with a budget.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BudgetsResource.budget `BudgetsResource.budget`} 
   */
  DescribeBudgetActionsForBudget = "budgets:DescribeBudgetActionsForBudget",

  /**
   * Write - Grants permissions to initiate a pending budget action as well as reverse a previously executed budget action.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BudgetsResource.budgetAction `BudgetsResource.budgetAction`} 
   */
  ExecuteBudgetAction = "budgets:ExecuteBudgetAction",

  /**
   * Write - Grants permissions to modify budgets and budget details
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BudgetsResource.budget `BudgetsResource.budget`} 
   */
  ModifyBudget = "budgets:ModifyBudget",

  /**
   * Write - Grants permissions to update the details of a specific budget action associated with a budget.
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BudgetsResource.budgetAction `BudgetsResource.budgetAction`} 
   */
  UpdateBudgetAction = "budgets:UpdateBudgetAction",

  /**
   * Read - Grants permissions to view budgets and budget details
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html#user-permissions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BudgetsResource.budget `BudgetsResource.budget`} 
   */
  ViewBudget = "budgets:ViewBudget",

  /**
   * * - Grant all budgets permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbudgetservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BudgetsResource.budgetAction `BudgetsResource.budgetAction`} 
   * - {@link BudgetsResource.budget `BudgetsResource.budget`} 
   */
  All = "budgets:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbudgetservice.html
 */
export const BudgetsResource = {

  /**
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html
   */
  budget: (options: Partial<{partition: string, account: string, budgetName: string}> = {}) => `arn:${options.partition || '*'}:budgets::${options.account || '*'}:budget/${options.budgetName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html
   */
  budgetAction: (options: Partial<{partition: string, account: string, budgetName: string, actionId: string}> = {}) => `arn:${options.partition || '*'}:budgets::${options.account || '*'}:budget/${options.budgetName || '*'}/action/${options.actionId || '*'}`,
}

