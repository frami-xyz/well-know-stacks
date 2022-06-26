/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostandusagereport.html
 */
export enum CurAction {

  /**
   * Write - Delete Cost and Usage Report Definition
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/delete-report-definition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CurResource.cur `CurResource.cur`} 
   */
  DeleteReportDefinition = "cur:DeleteReportDefinition",

  /**
   * Read - Get Cost and Usage Report Definitions
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/describe-report-definitions.html
   */
  DescribeReportDefinitions = "cur:DescribeReportDefinitions",

  /**
   * Write - Modify Cost and Usage Report Definition
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/modify-report-definition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CurResource.cur `CurResource.cur`} 
   */
  ModifyReportDefinition = "cur:ModifyReportDefinition",

  /**
   * Write - Write Cost and Usage Report Definition
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/put-report-definition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CurResource.cur `CurResource.cur`} 
   */
  PutReportDefinition = "cur:PutReportDefinition",

  /**
   * * - Grant all cur permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostandusagereport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CurResource.cur `CurResource.cur`} 
   */
  All = "cur:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostandusagereport.html
 */
export const CurResource = {

  /**
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-reports.html#enhanced-reports
   */
  cur: (options: Partial<{partition: string, region: string, account: string, reportName: string}> = {}) => `arn:${options.partition || '*'}:cur:${options.region || '*'}:${options.account || '*'}:definition/${options.reportName || '*'}`,
}

