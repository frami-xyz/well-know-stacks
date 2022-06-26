/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfreertos.html
 */
export enum FreertosAction {

  /**
   * Write - Creates a software configuration
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FreertosResource.configuration `FreertosResource.configuration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: A tag key that is present in the request that the user makes to Amazon FreeRTOS ({@link https://docs.aws.amazon.com/freertos/latest/userguide/console-tagging-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: The list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/freertos/latest/userguide/console-tagging-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSoftwareConfiguration = "freertos:CreateSoftwareConfiguration",

  /**
   * Write - Deletes the software configuration
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FreertosResource.configuration `FreertosResource.configuration`} 
   */
  DeleteSoftwareConfiguration = "freertos:DeleteSoftwareConfiguration",

  /**
   * Read - Describes the hardware platform
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  DescribeHardwarePlatform = "freertos:DescribeHardwarePlatform",

  /**
   * Read - Describes the software configuration
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FreertosResource.configuration `FreertosResource.configuration`} 
   */
  DescribeSoftwareConfiguration = "freertos:DescribeSoftwareConfiguration",

  /**
   * Read - Get the URL for Amazon FreeRTOS software download
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  GetSoftwareURL = "freertos:GetSoftwareURL",

  /**
   * Read - Get the URL for Amazon FreeRTOS software download based on the configuration
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  GetSoftwareURLForConfiguration = "freertos:GetSoftwareURLForConfiguration",

  /**
   * List - Lists versions of AmazonFreeRTOS
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  ListFreeRTOSVersions = "freertos:ListFreeRTOSVersions",

  /**
   * List - Lists the hardware platforms
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  ListHardwarePlatforms = "freertos:ListHardwarePlatforms",

  /**
   * List - Lists the hardware vendors
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  ListHardwareVendors = "freertos:ListHardwareVendors",

  /**
   * List - Lists the software configurations
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   */
  ListSoftwareConfigurations = "freertos:ListSoftwareConfigurations",

  /**
   * Write - Updates the software configuration
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FreertosResource.configuration `FreertosResource.configuration`} 
   */
  UpdateSoftwareConfiguration = "freertos:UpdateSoftwareConfiguration",

  /**
   * * - Grant all freertos permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfreertos.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FreertosResource.configuration `FreertosResource.configuration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: A tag key that is present in the request that the user makes to Amazon FreeRTOS ({@link https://docs.aws.amazon.com/freertos/latest/userguide/console-tagging-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: The list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/freertos/latest/userguide/console-tagging-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "freertos:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfreertos.html
 */
export const FreertosResource = {

  /**
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ocw.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: The tag key component of a tag attached to an Amazon FreeRTOS resource ({@link https://docs.aws.amazon.com/freertos/latest/userguide/console-tagging-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  configuration: (options: Partial<{partition: string, region: string, account: string, configurationName: string}> = {}) => `arn:${options.partition || '*'}:freertos:${options.region || '*'}:${options.account || '*'}:configuration/${options.configurationName || '*'}`,
}

