/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsstepfunctions.html
 */
export enum StatesAction {

  /**
   * Write - Grants permission to create an activity
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateActivity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.activity `StatesResource.activity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateActivity = "states:CreateActivity",

  /**
   * Write - Grants permission to create a state machine
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateStateMachine.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.statemachine `StatesResource.statemachine`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateStateMachine = "states:CreateStateMachine",

  /**
   * Write - Grants permission to delete an activity
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteActivity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.activity `StatesResource.activity`} 
   */
  DeleteActivity = "states:DeleteActivity",

  /**
   * Write - Grants permission to delete a state machine
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachine.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.statemachine `StatesResource.statemachine`} 
   */
  DeleteStateMachine = "states:DeleteStateMachine",

  /**
   * Read - Grants permission to describe an activity
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeActivity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.activity `StatesResource.activity`} 
   */
  DescribeActivity = "states:DescribeActivity",

  /**
   * Read - Grants permission to describe an execution
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.execution `StatesResource.execution`} 
   */
  DescribeExecution = "states:DescribeExecution",

  /**
   * Read - Grants permission to describe a state machine
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachine.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.statemachine `StatesResource.statemachine`} 
   */
  DescribeStateMachine = "states:DescribeStateMachine",

  /**
   * Read - Grants permission to describe the state machine for an execution
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachineForExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.execution `StatesResource.execution`} 
   */
  DescribeStateMachineForExecution = "states:DescribeStateMachineForExecution",

  /**
   * Write - Grants permission to be used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetActivityTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.activity `StatesResource.activity`} 
   */
  GetActivityTask = "states:GetActivityTask",

  /**
   * Read - Grants permission to return the history of the specified execution as a list of events
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.execution `StatesResource.execution`} 
   */
  GetExecutionHistory = "states:GetExecutionHistory",

  /**
   * List - Grants permission to list the existing activities
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListActivities.html
   */
  ListActivities = "states:ListActivities",

  /**
   * Read - Grants permission to list the executions of a state machine
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.statemachine `StatesResource.statemachine`} 
   */
  ListExecutions = "states:ListExecutions",

  /**
   * List - Grants permission to lists the existing state machines
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachines.html
   */
  ListStateMachines = "states:ListStateMachines",

  /**
   * Read - Grants permission to list tags for an AWS Step Functions resource
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.activity `StatesResource.activity`} 
   * - {@link StatesResource.statemachine `StatesResource.statemachine`} 
   */
  ListTagsForResource = "states:ListTagsForResource",

  /**
   * Write - Grants permission to report that the task identified by the taskToken failed
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskFailure.html
   */
  SendTaskFailure = "states:SendTaskFailure",

  /**
   * Write - Grants permission to report to the service that the task represented by the specified taskToken is still making progress
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskHeartbeat.html
   */
  SendTaskHeartbeat = "states:SendTaskHeartbeat",

  /**
   * Write - Grants permission to report that the task identified by the taskToken completed successfully
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskSuccess.html
   */
  SendTaskSuccess = "states:SendTaskSuccess",

  /**
   * Write - Grants permission to start a state machine execution
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.statemachine `StatesResource.statemachine`} 
   */
  StartExecution = "states:StartExecution",

  /**
   * Write - Grants permission to start a Synchronous Express state machine execution
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartSyncExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.statemachine `StatesResource.statemachine`} 
   */
  StartSyncExecution = "states:StartSyncExecution",

  /**
   * Write - Grants permission to stop an execution
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_StopExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.execution `StatesResource.execution`} 
   */
  StopExecution = "states:StopExecution",

  /**
   * Tagging - Grants permission to tag an AWS Step Functions resource
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.activity `StatesResource.activity`} 
   * - {@link StatesResource.statemachine `StatesResource.statemachine`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "states:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from an AWS Step Functions resource
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.activity `StatesResource.activity`} 
   * - {@link StatesResource.statemachine `StatesResource.statemachine`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "states:UntagResource",

  /**
   * Write - Grants permission to update a state machine
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateStateMachine.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.statemachine `StatesResource.statemachine`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateStateMachine = "states:UpdateStateMachine",

  /**
   * * - Grant all states permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsstepfunctions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StatesResource.activity `StatesResource.activity`} 
   * - {@link StatesResource.statemachine `StatesResource.statemachine`} 
   * - {@link StatesResource.execution `StatesResource.execution`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "states:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsstepfunctions.html
 */
export const StatesResource = {

  /**
   * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-activities.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  activity: (options: Partial<{partition: string, region: string, account: string, activityName: string}> = {}) => `arn:${options.partition || '*'}:states:${options.region || '*'}:${options.account || '*'}:activity:${options.activityName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-executions.html
   */
  execution: (options: Partial<{partition: string, region: string, account: string, stateMachineName: string, executionId: string}> = {}) => `arn:${options.partition || '*'}:states:${options.region || '*'}:${options.account || '*'}:execution:${options.stateMachineName || '*'}:${options.executionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  statemachine: (options: Partial<{partition: string, region: string, account: string, stateMachineName: string}> = {}) => `arn:${options.partition || '*'}:states:${options.region || '*'}:${options.account || '*'}:stateMachine:${options.stateMachineName || '*'}`,
}

