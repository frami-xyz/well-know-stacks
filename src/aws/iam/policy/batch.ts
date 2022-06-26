/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html
 */
export enum BatchAction {

  /**
   * Write - Grants permission to cancel a job in an AWS Batch job queue in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_CancelJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.job `BatchResource.job`} 
   */
  CancelJob = "batch:CancelJob",

  /**
   * Write - Grants permission to create an AWS Batch compute environment in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateComputeEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.computeEnvironment `BatchResource.computeEnvironment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateComputeEnvironment = "batch:CreateComputeEnvironment",

  /**
   * Write - Grants permission to create an AWS Batch job queue in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateJobQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.computeEnvironment `BatchResource.computeEnvironment`} 
   * - {@link BatchResource.jobQueue `BatchResource.jobQueue`} 
   * - {@link BatchResource.schedulingPolicy `BatchResource.schedulingPolicy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateJobQueue = "batch:CreateJobQueue",

  /**
   * Write - Grants permission to create an AWS Batch scheduling policy in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_CreateSchedulingPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.schedulingPolicy `BatchResource.schedulingPolicy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSchedulingPolicy = "batch:CreateSchedulingPolicy",

  /**
   * Write - Grants permission to delete an AWS Batch compute environment in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteComputeEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.computeEnvironment `BatchResource.computeEnvironment`} 
   */
  DeleteComputeEnvironment = "batch:DeleteComputeEnvironment",

  /**
   * Write - Grants permission to delete an AWS Batch job queue in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteJobQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.jobQueue `BatchResource.jobQueue`} 
   */
  DeleteJobQueue = "batch:DeleteJobQueue",

  /**
   * Write - Grants permission to delete an AWS Batch scheduling policy in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_DeleteSchedulingPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.schedulingPolicy `BatchResource.schedulingPolicy`} 
   */
  DeleteSchedulingPolicy = "batch:DeleteSchedulingPolicy",

  /**
   * Write - Grants permission to deregister an AWS Batch job definition in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_DeregisterJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.jobDefinition `BatchResource.jobDefinition`} 
   */
  DeregisterJobDefinition = "batch:DeregisterJobDefinition",

  /**
   * Read - Grants permission to describe one or more AWS Batch compute environments in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeComputeEnvironments.html
   */
  DescribeComputeEnvironments = "batch:DescribeComputeEnvironments",

  /**
   * Read - Grants permission to describe one or more AWS Batch job definitions in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobDefinitions.html
   */
  DescribeJobDefinitions = "batch:DescribeJobDefinitions",

  /**
   * Read - Grants permission to describe one or more AWS Batch job queues in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobQueues.html
   */
  DescribeJobQueues = "batch:DescribeJobQueues",

  /**
   * Read - Grants permission to describe a list of AWS Batch jobs in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeJobs.html
   */
  DescribeJobs = "batch:DescribeJobs",

  /**
   * Read - Grants permission to describe one or more AWS Batch scheduling policies in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_DescribeSchedulingPolicies.html
   */
  DescribeSchedulingPolicies = "batch:DescribeSchedulingPolicies",

  /**
   * List - Grants permission to list jobs for a specified AWS Batch job queue in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_ListJobs.html
   */
  ListJobs = "batch:ListJobs",

  /**
   * Read - Grants permission to list AWS Batch scheduling policies in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_ListSchedulingPolicies.html
   */
  ListSchedulingPolicies = "batch:ListSchedulingPolicies",

  /**
   * Read - Grants permission to list tags for an AWS Batch resource in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.computeEnvironment `BatchResource.computeEnvironment`} 
   * - {@link BatchResource.job `BatchResource.job`} 
   * - {@link BatchResource.jobDefinition `BatchResource.jobDefinition`} 
   * - {@link BatchResource.jobQueue `BatchResource.jobQueue`} 
   * - {@link BatchResource.schedulingPolicy `BatchResource.schedulingPolicy`} 
   */
  ListTagsForResource = "batch:ListTagsForResource",

  /**
   * Write - Grants permission to register an AWS Batch job definition in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_RegisterJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.jobDefinition `BatchResource.jobDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `batch:User`: Filters access by user name or numeric uid used inside the container ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:Privileged`: Filters access by the specified privileged parameter value that determines whether the container is given elevated privileges on the host container instance (similar to the root user) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `batch:Image`: Filters access by on the image used to start a container ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:LogDriver`: Filters access by the log driver used for the container ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:AWSLogsGroup`: Filters access by the awslogs group where the logs are located ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:AWSLogsRegion`: Filters access by the region where the logs are sent to ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:AWSLogsStreamPrefix`: Filters access by the awslogs log stream prefix ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:AWSLogsCreateGroup`: Filters access by the specified logging driver to determine whether awslogs group will be created for the logs ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RegisterJobDefinition = "batch:RegisterJobDefinition",

  /**
   * Write - Grants permission to submit an AWS Batch job from a job definition in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_SubmitJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.jobDefinition `BatchResource.jobDefinition`} 
   * - {@link BatchResource.jobQueue `BatchResource.jobQueue`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `batch:ShareIdentifier`: Filters access by the shareIdentifier used inside submit job ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SubmitJob = "batch:SubmitJob",

  /**
   * Tagging - Grants permission to tag an AWS Batch resource in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.computeEnvironment `BatchResource.computeEnvironment`} 
   * - {@link BatchResource.job `BatchResource.job`} 
   * - {@link BatchResource.jobDefinition `BatchResource.jobDefinition`} 
   * - {@link BatchResource.jobQueue `BatchResource.jobQueue`} 
   * - {@link BatchResource.schedulingPolicy `BatchResource.schedulingPolicy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "batch:TagResource",

  /**
   * Write - Grants permission to terminate a job in an AWS Batch job queue in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_TerminateJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.job `BatchResource.job`} 
   */
  TerminateJob = "batch:TerminateJob",

  /**
   * Tagging - Grants permission to untag an AWS Batch resource in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.computeEnvironment `BatchResource.computeEnvironment`} 
   * - {@link BatchResource.job `BatchResource.job`} 
   * - {@link BatchResource.jobDefinition `BatchResource.jobDefinition`} 
   * - {@link BatchResource.jobQueue `BatchResource.jobQueue`} 
   * - {@link BatchResource.schedulingPolicy `BatchResource.schedulingPolicy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "batch:UntagResource",

  /**
   * Write - Grants permission to update an AWS Batch compute environment in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateComputeEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.computeEnvironment `BatchResource.computeEnvironment`} 
   */
  UpdateComputeEnvironment = "batch:UpdateComputeEnvironment",

  /**
   * Write - Grants permission to update an AWS Batch job queue in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateJobQueue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.jobQueue `BatchResource.jobQueue`} 
   * - {@link BatchResource.computeEnvironment `BatchResource.computeEnvironment`} 
   * - {@link BatchResource.schedulingPolicy `BatchResource.schedulingPolicy`} 
   */
  UpdateJobQueue = "batch:UpdateJobQueue",

  /**
   * Write - Grants permission to update an AWS Batch scheduling policy in your account
   * @see https://docs.aws.amazon.com/batch/latest/APIReference/API_UpdateSchedulingPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.schedulingPolicy `BatchResource.schedulingPolicy`} 
   */
  UpdateSchedulingPolicy = "batch:UpdateSchedulingPolicy",

  /**
   * * - Grant all batch permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BatchResource.job `BatchResource.job`} 
   * - {@link BatchResource.computeEnvironment `BatchResource.computeEnvironment`} 
   * - {@link BatchResource.jobQueue `BatchResource.jobQueue`} 
   * - {@link BatchResource.schedulingPolicy `BatchResource.schedulingPolicy`} 
   * - {@link BatchResource.jobDefinition `BatchResource.jobDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `batch:User`: Filters access by user name or numeric uid used inside the container ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:Privileged`: Filters access by the specified privileged parameter value that determines whether the container is given elevated privileges on the host container instance (similar to the root user) ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `batch:Image`: Filters access by on the image used to start a container ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:LogDriver`: Filters access by the log driver used for the container ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:AWSLogsGroup`: Filters access by the awslogs group where the logs are located ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:AWSLogsRegion`: Filters access by the region where the logs are sent to ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:AWSLogsStreamPrefix`: Filters access by the awslogs log stream prefix ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `batch:AWSLogsCreateGroup`: Filters access by the specified logging driver to determine whether awslogs group will be created for the logs ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `batch:ShareIdentifier`: Filters access by the shareIdentifier used inside submit job ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html#awsbatch-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "batch:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbatch.html
 */
export const BatchResource = {

  /**
   * @see https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  computeEnvironment: (options: Partial<{partition: string, region: string, account: string, computeEnvironmentName: string}> = {}) => `arn:${options.partition || '*'}:batch:${options.region || '*'}:${options.account || '*'}:compute-environment/${options.computeEnvironmentName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/batch/latest/userguide/job_queues.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  jobQueue: (options: Partial<{partition: string, region: string, account: string, jobQueueName: string}> = {}) => `arn:${options.partition || '*'}:batch:${options.region || '*'}:${options.account || '*'}:job-queue/${options.jobQueueName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/batch/latest/userguide/job_definitions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  jobDefinition: (options: Partial<{partition: string, region: string, account: string, jobDefinitionName: string, revision: string}> = {}) => `arn:${options.partition || '*'}:batch:${options.region || '*'}:${options.account || '*'}:job-definition/${options.jobDefinitionName || '*'}:${options.revision || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/batch/latest/userguide/jobs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  job: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:batch:${options.region || '*'}:${options.account || '*'}:job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/batch/latest/userguide/scheduling-policy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  schedulingPolicy: (options: Partial<{partition: string, region: string, account: string, schedulingPolicyName: string}> = {}) => `arn:${options.partition || '*'}:batch:${options.region || '*'}:${options.account || '*'}:scheduling-policy/${options.schedulingPolicyName || '*'}`,
}

