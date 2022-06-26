/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatasync.html
 */
export enum DatasyncAction {

  /**
   * Write - Grants permission to cancel execution of a sync task
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CancelTaskExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.taskexecution `DatasyncResource.taskexecution`} 
   */
  CancelTaskExecution = "datasync:CancelTaskExecution",

  /**
   * Write - Grants permission to activate an agent that you have deployed on your host
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAgent = "datasync:CreateAgent",

  /**
   * Write - Grants permission to create an endpoint for an Amazon EFS file system
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationEfs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLocationEfs = "datasync:CreateLocationEfs",

  /**
   * Write - Grants permission to create an endpoint for an Amazon Fsx Lustre
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxLustre.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLocationFsxLustre = "datasync:CreateLocationFsxLustre",

  /**
   * Write - Grants permission to create an endpoint for Amazon FSx for OpenZFS
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxOpenZfs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLocationFsxOpenZfs = "datasync:CreateLocationFsxOpenZfs",

  /**
   * Write - Grants permission to create an endpoint for an Amazon FSx Windows File Server file system
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationFsxWindows.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLocationFsxWindows = "datasync:CreateLocationFsxWindows",

  /**
   * Write - Grants permission to create an endpoint for an Amazon Hdfs
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationHdfs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLocationHdfs = "datasync:CreateLocationHdfs",

  /**
   * Write - Grants permission to create an endpoint for a NFS file system
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationNfs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLocationNfs = "datasync:CreateLocationNfs",

  /**
   * Write - Grants permission to create an endpoint for a self-managed object storage bucket
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationObjectStorage.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLocationObjectStorage = "datasync:CreateLocationObjectStorage",

  /**
   * Write - Grants permission to create an endpoint for an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationS3.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLocationS3 = "datasync:CreateLocationS3",

  /**
   * Write - Grants permission to create an endpoint for an SMB file system
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateLocationSmb.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLocationSmb = "datasync:CreateLocationSmb",

  /**
   * Write - Grants permission to create a sync task
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTask = "datasync:CreateTask",

  /**
   * Write - Grants permission to delete an agent
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteAgent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.agent `DatasyncResource.agent`} 
   */
  DeleteAgent = "datasync:DeleteAgent",

  /**
   * Write - Grants permission to delete a location used by AWS DataSync
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteLocation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  DeleteLocation = "datasync:DeleteLocation",

  /**
   * Write - Grants permission to delete a sync task
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DeleteTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.task `DatasyncResource.task`} 
   */
  DeleteTask = "datasync:DeleteTask",

  /**
   * Read - Grants permission to view metadata such as name, network interfaces, and the status (that is, whether the agent is running or not) about a sync agent
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.agent `DatasyncResource.agent`} 
   */
  DescribeAgent = "datasync:DescribeAgent",

  /**
   * Read - Grants permission to view metadata, such as the path information about an Amazon EFS sync location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationEfs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  DescribeLocationEfs = "datasync:DescribeLocationEfs",

  /**
   * Read - Grants permission to view metadata, such as the path information about an Amazon FSx Lustre sync location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxLustre.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  DescribeLocationFsxLustre = "datasync:DescribeLocationFsxLustre",

  /**
   * Read - Grants permission to view metadata, such as the path information about an Amazon FSx OpenZFS sync location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxOpenZfs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  DescribeLocationFsxOpenZfs = "datasync:DescribeLocationFsxOpenZfs",

  /**
   * Read - Grants permission to view metadata, such as the path information about an Amazon FSx Windows sync location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationFsxWindows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  DescribeLocationFsxWindows = "datasync:DescribeLocationFsxWindows",

  /**
   * Read - Grants permission to view metadata, such as the path information about an Amazon HDFS sync location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationHdfs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  DescribeLocationHdfs = "datasync:DescribeLocationHdfs",

  /**
   * Read - Grants permission to view metadata, such as the path information, about a NFS sync location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationNfs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  DescribeLocationNfs = "datasync:DescribeLocationNfs",

  /**
   * Read - Grants permission to view metadata about a self-managed object storage server location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationObjectStorage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  DescribeLocationObjectStorage = "datasync:DescribeLocationObjectStorage",

  /**
   * Read - Grants permission to view metadata, such as bucket name, about an Amazon S3 bucket sync location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationS3.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  DescribeLocationS3 = "datasync:DescribeLocationS3",

  /**
   * Read - Grants permission to view metadata, such as the path information, about an SMB sync location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeLocationSmb.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  DescribeLocationSmb = "datasync:DescribeLocationSmb",

  /**
   * Read - Grants permission to view metadata about a sync task
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.task `DatasyncResource.task`} 
   */
  DescribeTask = "datasync:DescribeTask",

  /**
   * Read - Grants permission to view metadata about a sync task that is being executed
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeTaskExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.taskexecution `DatasyncResource.taskexecution`} 
   */
  DescribeTaskExecution = "datasync:DescribeTaskExecution",

  /**
   * List - Grants permission to list agents owned by an AWS account in a region specified in the request
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html
   */
  ListAgents = "datasync:ListAgents",

  /**
   * List - Grants permission to list source and destination sync locations
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html
   */
  ListLocations = "datasync:ListLocations",

  /**
   * Read - Grants permission to list tags that have been added to the specified resource
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.agent `DatasyncResource.agent`} 
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   * - {@link DatasyncResource.task `DatasyncResource.task`} 
   */
  ListTagsForResource = "datasync:ListTagsForResource",

  /**
   * List - Grants permission to list executed sync tasks
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html
   */
  ListTaskExecutions = "datasync:ListTaskExecutions",

  /**
   * List - Grants permission to list of all the sync tasks
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html
   */
  ListTasks = "datasync:ListTasks",

  /**
   * Write - Grants permission to start a specific invocation of a sync task
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.task `DatasyncResource.task`} 
   */
  StartTaskExecution = "datasync:StartTaskExecution",

  /**
   * Tagging - Grants permission to apply a key-value pair to an AWS resource
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.agent `DatasyncResource.agent`} 
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   * - {@link DatasyncResource.task `DatasyncResource.task`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "datasync:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from the specified resource
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.agent `DatasyncResource.agent`} 
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   * - {@link DatasyncResource.task `DatasyncResource.task`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "datasync:UntagResource",

  /**
   * Write - Grants permission to update the name of an agent
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateAgent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.agent `DatasyncResource.agent`} 
   */
  UpdateAgent = "datasync:UpdateAgent",

  /**
   * Write - Grants permission to update an HDFS sync Location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationHdfs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  UpdateLocationHdfs = "datasync:UpdateLocationHdfs",

  /**
   * Write - Grants permission to update an NFS sync Location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationNfs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  UpdateLocationNfs = "datasync:UpdateLocationNfs",

  /**
   * Write - Grants permission to update a self-managed object storage server location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationObjectStorage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  UpdateLocationObjectStorage = "datasync:UpdateLocationObjectStorage",

  /**
   * Write - Grants permission to update a SMB sync location
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateLocationSmb.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   */
  UpdateLocationSmb = "datasync:UpdateLocationSmb",

  /**
   * Write - Grants permission to update metadata associated with a sync task
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.task `DatasyncResource.task`} 
   */
  UpdateTask = "datasync:UpdateTask",

  /**
   * Write - Grants permission to update execution of a sync task
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/API_UpdateTaskExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.taskexecution `DatasyncResource.taskexecution`} 
   */
  UpdateTaskExecution = "datasync:UpdateTaskExecution",

  /**
   * * - Grant all datasync permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatasync.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DatasyncResource.taskexecution `DatasyncResource.taskexecution`} 
   * - {@link DatasyncResource.agent `DatasyncResource.agent`} 
   * - {@link DatasyncResource.location `DatasyncResource.location`} 
   * - {@link DatasyncResource.task `DatasyncResource.task`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "datasync:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatasync.html
 */
export const DatasyncResource = {

  /**
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/agent.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  agent: (options: Partial<{partition: string, region: string, accountId: string, agentId: string}> = {}) => `arn:${options.partition || '*'}:datasync:${options.region || '*'}:${options.accountId || '*'}:agent/${options.agentId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/location.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  location: (options: Partial<{partition: string, region: string, accountId: string, locationId: string}> = {}) => `arn:${options.partition || '*'}:datasync:${options.region || '*'}:${options.accountId || '*'}:location/${options.locationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/task.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  task: (options: Partial<{partition: string, region: string, accountId: string, taskId: string}> = {}) => `arn:${options.partition || '*'}:datasync:${options.region || '*'}:${options.accountId || '*'}:task/${options.taskId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/datasync/latest/userguide/taskexecution.html
   */
  taskexecution: (options: Partial<{partition: string, region: string, accountId: string, taskId: string, executionId: string}> = {}) => `arn:${options.partition || '*'}:datasync:${options.region || '*'}:${options.accountId || '*'}:task/${options.taskId || '*'}/execution/${options.executionId || '*'}`,
}

