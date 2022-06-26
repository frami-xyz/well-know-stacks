/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationcostprofilerservice.html
 */
export enum ApplicationCostProfilerAction {

  /**
   * Write - Grants permission to delete the configuration with specific Application Cost Profiler Report thereby effectively disabling report generation
   * @see https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_DeleteReportDefinition.html
   */
  DeleteReportDefinition = "application-cost-profiler:DeleteReportDefinition",

  /**
   * Read - Grants permission to fetch the configuration with specific Application Cost Profiler Report request
   * @see https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_GetReportDefinition.html
   */
  GetReportDefinition = "application-cost-profiler:GetReportDefinition",

  /**
   * Write - Grants permission to import the application usage from S3
   * @see https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_ImportApplicationUsage.html
   */
  ImportApplicationUsage = "application-cost-profiler:ImportApplicationUsage",

  /**
   * Read - Grants permission to get a list of the different Application Cost Profiler Report configurations they have created
   * @see https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_ListReportDefinitions.html
   */
  ListReportDefinitions = "application-cost-profiler:ListReportDefinitions",

  /**
   * Write - Grants permission to create Application Cost Profiler Report configurations
   * @see https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_PutReportDefinition.html
   */
  PutReportDefinition = "application-cost-profiler:PutReportDefinition",

  /**
   * Write - Grants permission to update an existing Application Cost Profiler Report configuration
   * @see https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_UpdateReportDefinition.html
   */
  UpdateReportDefinition = "application-cost-profiler:UpdateReportDefinition",

  /**
   * * - Grant all application-cost-profiler permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationcostprofilerservice.html
   */
  All = "application-cost-profiler:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationcostprofilerservice.html
 */
export const ApplicationCostProfilerResource = {
}

