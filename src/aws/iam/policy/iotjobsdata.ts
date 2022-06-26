/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotjobsdataplane.html
 */
export enum IotjobsdataAction {

  /**
   * Read - Grants permission to describe a job execution
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_DescribeJobExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotjobsdataResource.thing `IotjobsdataResource.thing`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iot:JobId`: Filters access by jobId for iotjobsdata:DescribeJobExecution and iotjobsdata:UpdateJobExecution APIs ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeJobExecution = "iotjobsdata:DescribeJobExecution",

  /**
   * Read - Grants permission to get the list of all jobs for a thing that are not in a terminal state
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_GetPendingJobExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotjobsdataResource.thing `IotjobsdataResource.thing`} 
   */
  GetPendingJobExecutions = "iotjobsdata:GetPendingJobExecutions",

  /**
   * Write - Grants permission to get and start the next pending job execution for a thing
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_StartNextPendingJobExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotjobsdataResource.thing `IotjobsdataResource.thing`} 
   */
  StartNextPendingJobExecution = "iotjobsdata:StartNextPendingJobExecution",

  /**
   * Write - Grants permission to update a job execution
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_UpdateJobExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotjobsdataResource.thing `IotjobsdataResource.thing`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iot:JobId`: Filters access by jobId for iotjobsdata:DescribeJobExecution and iotjobsdata:UpdateJobExecution APIs ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateJobExecution = "iotjobsdata:UpdateJobExecution",

  /**
   * * - Grant all iotjobsdata permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotjobsdataplane.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotjobsdataResource.thing `IotjobsdataResource.thing`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iot:JobId`: Filters access by jobId for iotjobsdata:DescribeJobExecution and iotjobsdata:UpdateJobExecution APIs ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "iotjobsdata:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotjobsdataplane.html
 */
export const IotjobsdataResource = {

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   */
  thing: (options: Partial<{partition: string, region: string, account: string, thingName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:thing/${options.thingName || '*'}`,
}

