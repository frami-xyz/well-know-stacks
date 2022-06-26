/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsperformanceinsights.html
 */
export enum PiAction {

  /**
   * Read - Grants permission to call DescribeDimensionKeys API to retrieve the top N dimension keys for a metric for a specific time period
   * @see https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_DescribeDimensionKeys.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PiResource.metricResource `PiResource.metricResource`} 
   */
  DescribeDimensionKeys = "pi:DescribeDimensionKeys",

  /**
   * Read - Grants permission to call GetDimensionKeyDetails API to retrieve the attributes of the specified dimension group
   * @see https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetDimensionKeyDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PiResource.metricResource `PiResource.metricResource`} 
   */
  GetDimensionKeyDetails = "pi:GetDimensionKeyDetails",

  /**
   * Read - Grants permission to call GetResourceMetadata API to retrieve the metadata for different features
   * @see https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PiResource.metricResource `PiResource.metricResource`} 
   */
  GetResourceMetadata = "pi:GetResourceMetadata",

  /**
   * Read - Grants permission to call GetResourceMetrics API to retrieve PI metrics for a set of data sources, over a time period
   * @see https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetrics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PiResource.metricResource `PiResource.metricResource`} 
   */
  GetResourceMetrics = "pi:GetResourceMetrics",

  /**
   * Read - Grants permission to call ListAvailableResourceDimensions API to retrieve the dimensions that can be queried for each specified metric type on a specified DB instance
   * @see https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListAvailableResourceDimensions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PiResource.metricResource `PiResource.metricResource`} 
   */
  ListAvailableResourceDimensions = "pi:ListAvailableResourceDimensions",

  /**
   * Read - Grants permission to call ListAvailableResourceMetrics API to retrieve metrics of the specified types that can be queried for a specified DB instance
   * @see https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_ListAvailableResourceMetrics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PiResource.metricResource `PiResource.metricResource`} 
   */
  ListAvailableResourceMetrics = "pi:ListAvailableResourceMetrics",

  /**
   * * - Grant all pi permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsperformanceinsights.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PiResource.metricResource `PiResource.metricResource`} 
   */
  All = "pi:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsperformanceinsights.html
 */
export const PiResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.access-control.html
   */
  metricResource: (options: Partial<{partition: string, region: string, account: string, serviceType: string, identifier: string}> = {}) => `arn:${options.partition || '*'}:pi:${options.region || '*'}:${options.account || '*'}:metrics/${options.serviceType || '*'}/${options.identifier || '*'}`,
}

