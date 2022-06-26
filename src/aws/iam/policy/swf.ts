/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleworkflowservice.html
 */
export enum SwfAction {

  /**
   * Write - Grants permission to cancel a previously started timer and record a TimerCanceled event in the history
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  CancelTimer = "swf:CancelTimer",

  /**
   * Write - Grants permission to close the workflow execution and record a WorkflowExecutionCanceled event in the history
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  CancelWorkflowExecution = "swf:CancelWorkflowExecution",

  /**
   * Write - Grants permission to close the workflow execution and record a WorkflowExecutionCompleted event in the history
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  CompleteWorkflowExecution = "swf:CompleteWorkflowExecution",

  /**
   * Write - Grants permission to close the workflow execution and start a new workflow execution of the same type using the same workflow ID and a unique run Id
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  ContinueAsNewWorkflowExecution = "swf:ContinueAsNewWorkflowExecution",

  /**
   * Read - Grants permission to return the number of closed workflow executions within the given domain that meet the specified filtering criteria
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountClosedWorkflowExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:tagFilter.tag`: Filters access by the value of tagFilter.tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:typeFilter.name`: Filters access by the name of the type filter ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:typeFilter.version`: Filters access by the version of the type filter ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CountClosedWorkflowExecutions = "swf:CountClosedWorkflowExecutions",

  /**
   * Read - Grants permission to return the number of open workflow executions within the given domain that meet the specified filtering criteria
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountOpenWorkflowExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:tagFilter.tag`: Filters access by the value of tagFilter.tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:typeFilter.name`: Filters access by the name of the type filter ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:typeFilter.version`: Filters access by the version of the type filter ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CountOpenWorkflowExecutions = "swf:CountOpenWorkflowExecutions",

  /**
   * Read - Grants permission to return the estimated number of activity tasks in the specified task list
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingActivityTasks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:taskList.name`: Filters access by the name of the tasklist ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CountPendingActivityTasks = "swf:CountPendingActivityTasks",

  /**
   * Read - Grants permission to return the estimated number of decision tasks in the specified task list
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_CountPendingDecisionTasks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:taskList.name`: Filters access by the name of the tasklist ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CountPendingDecisionTasks = "swf:CountPendingDecisionTasks",

  /**
   * Write - Grants permission to deprecate the specified activity type
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateActivityType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:activityType.name`: Filters access by the name of the activity type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:activityType.version`: Filters access by the version of the activity type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeprecateActivityType = "swf:DeprecateActivityType",

  /**
   * Write - Grants permission to deprecate the specified domain
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  DeprecateDomain = "swf:DeprecateDomain",

  /**
   * Write - Grants permission to deprecate the specified workflow type
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DeprecateWorkflowType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:workflowType.name`: Filters access by the name of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:workflowType.version`: Filters access by the version of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeprecateWorkflowType = "swf:DeprecateWorkflowType",

  /**
   * Read - Grants permission to return information about the specified activity type
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeActivityType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:activityType.name`: Filters access by the name of the activity type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:activityType.version`: Filters access by the version of the activity type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeActivityType = "swf:DescribeActivityType",

  /**
   * Read - Grants permission to return information about the specified domain, including its description and status
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  DescribeDomain = "swf:DescribeDomain",

  /**
   * Read - Grants permission to return information about the specified workflow execution including its type and some statistics
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  DescribeWorkflowExecution = "swf:DescribeWorkflowExecution",

  /**
   * Read - Grants permission to return information about the specified workflow type
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_DescribeWorkflowType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:workflowType.name`: Filters access by the name of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:workflowType.version`: Filters access by the version of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeWorkflowType = "swf:DescribeWorkflowType",

  /**
   * Write - Grants permission to close the workflow execution and record a WorkflowExecutionFailed event in the history
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  FailWorkflowExecution = "swf:FailWorkflowExecution",

  /**
   * Read - Grants permission to return the history of the specified workflow execution
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_GetWorkflowExecutionHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  GetWorkflowExecutionHistory = "swf:GetWorkflowExecutionHistory",

  /**
   * List - Grants permission to return information about all activities registered in the specified domain that match the specified name and registration status
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListActivityTypes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  ListActivityTypes = "swf:ListActivityTypes",

  /**
   * List - Grants permission to return a list of closed workflow executions in the specified domain that meet the filtering criteria
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListClosedWorkflowExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:tagFilter.tag`: Filters access by the value of tagFilter.tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:typeFilter.name`: Filters access by the name of the type filter ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:typeFilter.version`: Filters access by the version of the type filter ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListClosedWorkflowExecutions = "swf:ListClosedWorkflowExecutions",

  /**
   * List - Grants permission to return the list of domains registered in the account
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListDomains.html
   */
  ListDomains = "swf:ListDomains",

  /**
   * List - Grants permission to return a list of open workflow executions in the specified domain that meet the filtering criteria
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListOpenWorkflowExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:tagFilter.tag`: Filters access by the value of tagFilter.tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:typeFilter.name`: Filters access by the name of the type filter ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:typeFilter.version`: Filters access by the version of the type filter ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListOpenWorkflowExecutions = "swf:ListOpenWorkflowExecutions",

  /**
   * List - Grants permission to list tags for an AWS SWF resource
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  ListTagsForResource = "swf:ListTagsForResource",

  /**
   * List - Grants permission to return information about workflow types in the specified domain
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_ListWorkflowTypes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  ListWorkflowTypes = "swf:ListWorkflowTypes",

  /**
   * Write - Grants permission to workers to get an ActivityTask from the specified activity taskList
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForActivityTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:taskList.name`: Filters access by the name of the tasklist ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PollForActivityTask = "swf:PollForActivityTask",

  /**
   * Write - Grants permission to deciders to get a DecisionTask from the specified decision taskList
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_PollForDecisionTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:taskList.name`: Filters access by the name of the tasklist ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PollForDecisionTask = "swf:PollForDecisionTask",

  /**
   * Write - Grants permission to workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RecordActivityTaskHeartbeat.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  RecordActivityTaskHeartbeat = "swf:RecordActivityTaskHeartbeat",

  /**
   * Write - Grants permission to record a MarkerRecorded event in the history
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  RecordMarker = "swf:RecordMarker",

  /**
   * Write - Grants permission to register a new activity type along with its configuration settings in the specified domain
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterActivityType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:defaultTaskList.name`: Filters access by the name of the default task list ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:name`: Filters access by the name of activities or workflows ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:version`: Filters access by the version of activities or workflows ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RegisterActivityType = "swf:RegisterActivityType",

  /**
   * Write - Grants permission to register a new domain
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag of the key ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tag of the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RegisterDomain = "swf:RegisterDomain",

  /**
   * Write - Grants permission to register a new workflow type and its configuration settings in the specified domain
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RegisterWorkflowType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:defaultTaskList.name`: Filters access by the name of the default task list ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:name`: Filters access by the name of activities or workflows ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:version`: Filters access by the version of activities or workflows ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RegisterWorkflowType = "swf:RegisterWorkflowType",

  /**
   * Write - Grants permission to attempt to cancel a previously scheduled activity task
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  RequestCancelActivityTask = "swf:RequestCancelActivityTask",

  /**
   * Write - Grants permission to request that a request be made to cancel the specified external workflow execution
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  RequestCancelExternalWorkflowExecution = "swf:RequestCancelExternalWorkflowExecution",

  /**
   * Write - Grants permission to record a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RequestCancelWorkflowExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  RequestCancelWorkflowExecution = "swf:RequestCancelWorkflowExecution",

  /**
   * Write - Grants permission to workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCanceled.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  RespondActivityTaskCanceled = "swf:RespondActivityTaskCanceled",

  /**
   * Write - Grants permission to workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided)
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskCompleted.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:activityType.name`: Filters access by the name of the activity type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:activityType.version`: Filters access by the version of the activity type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.0`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.1`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.2`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.3`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.4`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:taskList.name`: Filters access by the name of the tasklist ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:workflowType.name`: Filters access by the name of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:workflowType.version`: Filters access by the version of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RespondActivityTaskCompleted = "swf:RespondActivityTaskCompleted",

  /**
   * Write - Grants permission to workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified)
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondActivityTaskFailed.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  RespondActivityTaskFailed = "swf:RespondActivityTaskFailed",

  /**
   * Write - Grants permission to deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_RespondDecisionTaskCompleted.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  RespondDecisionTaskCompleted = "swf:RespondDecisionTaskCompleted",

  /**
   * Write - Grants permission to schedule an activity task
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  ScheduleActivityTask = "swf:ScheduleActivityTask",

  /**
   * Write - Grants permission to request a signal to be delivered to the specified external workflow execution and records
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  SignalExternalWorkflowExecution = "swf:SignalExternalWorkflowExecution",

  /**
   * Write - Grants permission to record a WorkflowExecutionSignaled event in the workflow execution history and create a decision task for the workflow execution identified by the given domain, workflowId and runId
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_SignalWorkflowExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  SignalWorkflowExecution = "swf:SignalWorkflowExecution",

  /**
   * Write - Grants permission to request that a child workflow execution be started
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  StartChildWorkflowExecution = "swf:StartChildWorkflowExecution",

  /**
   * Write - Grants permission to start a timer for a workflow execution
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_Decision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  StartTimer = "swf:StartTimer",

  /**
   * Write - Grants permission to start an execution of the workflow type in the specified domain using the provided workflowId and input data
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_StartWorkflowExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:tagList.member.0`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.1`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.2`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.3`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.4`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:taskList.name`: Filters access by the name of the tasklist ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:workflowType.name`: Filters access by the name of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:workflowType.version`: Filters access by the version of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartWorkflowExecution = "swf:StartWorkflowExecution",

  /**
   * Tagging - Grants permission to tag an AWS SWF resource
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag of the key ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tag of the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "swf:TagResource",

  /**
   * Write - Grants permission to record a WorkflowExecutionTerminated event and force closure of the workflow execution identified by the given domain, runId, and workflowId
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_TerminateWorkflowExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  TerminateWorkflowExecution = "swf:TerminateWorkflowExecution",

  /**
   * Write - Grants permission to undeprecate a previously deprecated activity type
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UndeprecateActivityType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:activityType.name`: Filters access by the name of the activity type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:activityType.version`: Filters access by the version of the activity type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UndeprecateActivityType = "swf:UndeprecateActivityType",

  /**
   * Write - Grants permission to undeprecate a previously deprecated domain
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UndeprecateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   */
  UndeprecateDomain = "swf:UndeprecateDomain",

  /**
   * Write - Grants permission to undeprecate a previously deprecated workflow type
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UndeprecateWorkflowType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:workflowType.name`: Filters access by the name of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:workflowType.version`: Filters access by the version of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UndeprecateWorkflowType = "swf:UndeprecateWorkflowType",

  /**
   * Tagging - Grants permission to remove a tag from an AWS SWF resource
   * @see https://docs.aws.amazon.com/amazonswf/latest/apireference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag of the key ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "swf:UntagResource",

  /**
   * * - Grant all swf permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleworkflowservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SwfResource.domain `SwfResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `swf:tagFilter.tag`: Filters access by the value of tagFilter.tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:typeFilter.name`: Filters access by the name of the type filter ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:typeFilter.version`: Filters access by the version of the type filter ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:taskList.name`: Filters access by the name of the tasklist ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:activityType.name`: Filters access by the name of the activity type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:activityType.version`: Filters access by the version of the activity type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:workflowType.name`: Filters access by the name of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:workflowType.version`: Filters access by the version of the workflow type ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:defaultTaskList.name`: Filters access by the name of the default task list ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:name`: Filters access by the name of activities or workflows ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:version`: Filters access by the version of activities or workflows ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag of the key ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tag of the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.0`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.1`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.2`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.3`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `swf:tagList.member.4`: Filters access by the specified tag ({@link https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html##swf-dev-iam.api documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "swf:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleworkflowservice.html
 */
export const SwfResource = {

  /**
   * @see https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-domains.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag of the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  domain: (options: Partial<{partition: string, account: string, domainName: string}> = {}) => `arn:${options.partition || '*'}:swf::${options.account || '*'}:/domain/${options.domainName || '*'}`,
}

