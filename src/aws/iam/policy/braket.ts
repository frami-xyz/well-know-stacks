/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbraket.html
 */
export enum BraketAction {

  /**
   * Write - Grants permission to cancel a job
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_CancelJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BraketResource.job `BraketResource.job`} 
   */
  CancelJob = "braket:CancelJob",

  /**
   * Write - Grants permission to cancel a quantum task
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_CancelQuantumTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BraketResource.quantumTask `BraketResource.quantumTask`} 
   */
  CancelQuantumTask = "braket:CancelQuantumTask",

  /**
   * Write - Grants permission to create a job
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_CreateJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateJob = "braket:CreateJob",

  /**
   * Write - Grants permission to create a quantum task
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_CreateQuantumTask.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateQuantumTask = "braket:CreateQuantumTask",

  /**
   * Read - Grants permission to retrieve information about the devices available in Amazon Braket
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_GetDevice.html
   */
  GetDevice = "braket:GetDevice",

  /**
   * Read - Grants permission to retrieve jobs
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_Job.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BraketResource.job `BraketResource.job`} 
   */
  GetJob = "braket:GetJob",

  /**
   * Read - Grants permission to retrieve quantum tasks
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_GetQuantumTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BraketResource.quantumTask `BraketResource.quantumTask`} 
   */
  GetQuantumTask = "braket:GetQuantumTask",

  /**
   * Read - Grants permission to listing the tags that have been applied to the quantum task resource or the job
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BraketResource.job `BraketResource.job`} 
   * - {@link BraketResource.quantumTask `BraketResource.quantumTask`} 
   */
  ListTagsForResource = "braket:ListTagsForResource",

  /**
   * Read - Grants permission to search for devices available in Amazon Braket
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchDevices.html
   */
  SearchDevices = "braket:SearchDevices",

  /**
   * Read - Grants permission to search for jobs
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchJob.html
   */
  SearchJobs = "braket:SearchJobs",

  /**
   * Read - Grants permission to search for quantum tasks
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchQuantumTasks.html
   */
  SearchQuantumTasks = "braket:SearchQuantumTasks",

  /**
   * Tagging - Grants permission to add one or more tags to a quantum task
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BraketResource.quantumTask `BraketResource.quantumTask`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "braket:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from a quantum task resource or a job. A tag consists of a key-value pair
   * @see https://docs.aws.amazon.com/braket/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BraketResource.job `BraketResource.job`} 
   * - {@link BraketResource.quantumTask `BraketResource.quantumTask`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "braket:UntagResource",

  /**
   * * - Grant all braket permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbraket.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BraketResource.job `BraketResource.job`} 
   * - {@link BraketResource.quantumTask `BraketResource.quantumTask`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "braket:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbraket.html
 */
export const BraketResource = {

  /**
   * @see https://docs.aws.amazon.com/braket/latest/developerguide/braket-manage-access.html#resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  quantumTask: (options: Partial<{partition: string, region: string, account: string, randomId: string}> = {}) => `arn:${options.partition || '*'}:braket:${options.region || '*'}:${options.account || '*'}:quantum-task/${options.randomId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/braket/latest/developerguide/braket-manage-access.html#resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  job: (options: Partial<{partition: string, region: string, account: string, jobName: string}> = {}) => `arn:${options.partition || '*'}:braket:${options.region || '*'}:${options.account || '*'}:job/${options.jobName || '*'}`,
}

