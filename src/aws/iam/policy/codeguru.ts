/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodeguru.html
 */
export enum CodeguruAction {

  /**
   * Read - Gets free trial summary for the CodeGuru service which includes expiration date.
   * @see https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetCodeGuruFreeTrialSummary.html
   */
  GetCodeGuruFreeTrialSummary = "codeguru:GetCodeGuruFreeTrialSummary",

  /**
   * * - Grant all codeguru permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodeguru.html
   */
  All = "codeguru:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodeguru.html
 */
export const CodeguruResource = {
}

