/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowdevicemanagement.html
 */
export enum SnowDeviceManagementAction {

  /**
   * Write - Grants permission to cancel tasks on remote devices
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-cancel-task.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnowDeviceManagementResource.task `SnowDeviceManagementResource.task`} 
   */
  CancelTask = "snow-device-management:CancelTask",

  /**
   * Write - Grants permission to create tasks on remote devices
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-create-task.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateTask = "snow-device-management:CreateTask",

  /**
   * Read - Grants permission to describe a remotely-managed device
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-device.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnowDeviceManagementResource.managedDevice `SnowDeviceManagementResource.managedDevice`} 
   */
  DescribeDevice = "snow-device-management:DescribeDevice",

  /**
   * Read - Grants permission to describe a remotely-managed device's EC2 instances
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-ec2-instances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnowDeviceManagementResource.managedDevice `SnowDeviceManagementResource.managedDevice`} 
   */
  DescribeDeviceEc2Instances = "snow-device-management:DescribeDeviceEc2Instances",

  /**
   * Read - Grants permission to describe task executions
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-execution.html
   */
  DescribeExecution = "snow-device-management:DescribeExecution",

  /**
   * Read - Grants permission to describe a task
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-describe-task.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnowDeviceManagementResource.task `SnowDeviceManagementResource.task`} 
   */
  DescribeTask = "snow-device-management:DescribeTask",

  /**
   * List - Grants permission to list a remotely-managed device's resources
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-device-resources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnowDeviceManagementResource.managedDevice `SnowDeviceManagementResource.managedDevice`} 
   */
  ListDeviceResources = "snow-device-management:ListDeviceResources",

  /**
   * List - Grants permission to list remotely-managed devices
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-devices.html
   */
  ListDevices = "snow-device-management:ListDevices",

  /**
   * List - Grants permission to list task executions
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-executions.html
   */
  ListExecutions = "snow-device-management:ListExecutions",

  /**
   * Read - Grants permission to list the tags for a resource (device or task)
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-tags-for-resource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "snow-device-management:ListTagsForResource",

  /**
   * List - Grants permission to list tasks
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-list-tasks.html
   */
  ListTasks = "snow-device-management:ListTasks",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-tag-resource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnowDeviceManagementResource.managedDevice `SnowDeviceManagementResource.managedDevice`} 
   * - {@link SnowDeviceManagementResource.task `SnowDeviceManagementResource.task`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "snow-device-management:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/sdms-cli-untag-resources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnowDeviceManagementResource.managedDevice `SnowDeviceManagementResource.managedDevice`} 
   * - {@link SnowDeviceManagementResource.task `SnowDeviceManagementResource.task`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "snow-device-management:UntagResource",

  /**
   * * - Grant all snow-device-management permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowdevicemanagement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SnowDeviceManagementResource.task `SnowDeviceManagementResource.task`} 
   * - {@link SnowDeviceManagementResource.managedDevice `SnowDeviceManagementResource.managedDevice`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "snow-device-management:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowdevicemanagement.html
 */
export const SnowDeviceManagementResource = {

  /**
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/aws-sdms.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  managedDevice: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:snow-device-management:${options.region || '*'}:${options.account || '*'}:managed-device/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/snowball/latest/snowcone-guide/aws-sdms.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  task: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:snow-device-management:${options.region || '*'}:${options.account || '*'}:task/${options.resourceId || '*'}`,
}

