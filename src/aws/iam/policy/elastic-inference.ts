/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html
 */
export enum ElasticInferenceAction {

  /**
   * Write - Grants permission to customer for connecting to Elastic Inference accelerator
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticInferenceResource.accelerator `ElasticInferenceResource.accelerator`} 
   */
  Connect = "elastic-inference:Connect",

  /**
   * List - Grants permission to describe the locations in which a given accelerator type or set of types is present in a given region
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html
   */
  DescribeAcceleratorOfferings = "elastic-inference:DescribeAcceleratorOfferings",

  /**
   * List - Grants permission to describe the accelerator types available in a given region, as well as their characteristics, such as memory and throughput
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html
   */
  DescribeAcceleratorTypes = "elastic-inference:DescribeAcceleratorTypes",

  /**
   * List - Grants permission to describe information over a provided set of accelerators belonging to an account
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html
   */
  DescribeAccelerators = "elastic-inference:DescribeAccelerators",

  /**
   * Read - Grants permission to list all tags on an Amazon RDS resource
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html
   */
  ListTagsForResource = "elastic-inference:ListTagsForResource",

  /**
   * Tagging - Grants permission to assign one or more tags (key-value pairs) to the specified QuickSight resource
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html
   */
  TagResource = "elastic-inference:TagResource",

  /**
   * Tagging - Grants permission to remove a tag or tags from a resource
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html
   */
  UntagResource = "elastic-inference:UntagResource",

  /**
   * * - Grant all elastic-inference permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticInferenceResource.accelerator `ElasticInferenceResource.accelerator`} 
   */
  All = "elastic-inference:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html
 */
export const ElasticInferenceResource = {

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html
   */
  accelerator: (options: Partial<{partition: string, region: string, account: string, acceleratorId: string}> = {}) => `arn:${options.partition || '*'}:elastic-inference:${options.region || '*'}:${options.account || '*'}:elastic-inference-accelerator/${options.acceleratorId || '*'}`,
}

