/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemroneksemrcontainers.html
 */
export enum EmrContainersAction {

  /**
   * Write - Grants permission to cancel a job run
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CancelJobRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.jobRun `EmrContainersResource.jobRun`} 
   */
  CancelJobRun = "emr-containers:CancelJobRun",

  /**
   * Write - Grants permission to create a managed endpoint
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CreateManagedEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.virtualCluster `EmrContainersResource.virtualCluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `emr-containers:ExecutionRoleArn`: Filters actions based on whether the execution role arn is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/iam-execution-role.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateManagedEndpoint = "emr-containers:CreateManagedEndpoint",

  /**
   * Write - Grants permission to create a virtual cluster
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CreateVirtualCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateVirtualCluster = "emr-containers:CreateVirtualCluster",

  /**
   * Write - Grants permission to delete a managed endpoint
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DeleteManagedEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.managedEndpoint `EmrContainersResource.managedEndpoint`} 
   */
  DeleteManagedEndpoint = "emr-containers:DeleteManagedEndpoint",

  /**
   * Write - Grants permission to delete a virtual cluster
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DeleteVirtualCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.virtualCluster `EmrContainersResource.virtualCluster`} 
   */
  DeleteVirtualCluster = "emr-containers:DeleteVirtualCluster",

  /**
   * Read - Grants permission to describe a job run
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeJobRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.jobRun `EmrContainersResource.jobRun`} 
   */
  DescribeJobRun = "emr-containers:DescribeJobRun",

  /**
   * Read - Grants permission to describe a managed endpoint
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeManagedEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.managedEndpoint `EmrContainersResource.managedEndpoint`} 
   */
  DescribeManagedEndpoint = "emr-containers:DescribeManagedEndpoint",

  /**
   * Read - Grants permission to describe a virtual cluster
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeVirtualCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.virtualCluster `EmrContainersResource.virtualCluster`} 
   */
  DescribeVirtualCluster = "emr-containers:DescribeVirtualCluster",

  /**
   * List - Grants permission to list job runs associated with a virtual cluster
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListJobRuns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.virtualCluster `EmrContainersResource.virtualCluster`} 
   */
  ListJobRuns = "emr-containers:ListJobRuns",

  /**
   * List - Grants permission to list managed endpoints associated with a virtual cluster
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListManagedEndpoints.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.virtualCluster `EmrContainersResource.virtualCluster`} 
   */
  ListManagedEndpoints = "emr-containers:ListManagedEndpoints",

  /**
   * List - Grants permission to list tags for the specified resource
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.jobRun `EmrContainersResource.jobRun`} 
   * - {@link EmrContainersResource.managedEndpoint `EmrContainersResource.managedEndpoint`} 
   * - {@link EmrContainersResource.virtualCluster `EmrContainersResource.virtualCluster`} 
   */
  ListTagsForResource = "emr-containers:ListTagsForResource",

  /**
   * List - Grants permission to list virtual clusters
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListVirtualClusters.html
   */
  ListVirtualClusters = "emr-containers:ListVirtualClusters",

  /**
   * Write - Grants permission to start a job run
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.virtualCluster `EmrContainersResource.virtualCluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `emr-containers:ExecutionRoleArn`: Filters actions based on whether the execution role arn is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/iam-execution-role.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartJobRun = "emr-containers:StartJobRun",

  /**
   * Tagging - Grants permission to tag the specified resource
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.jobRun `EmrContainersResource.jobRun`} 
   * - {@link EmrContainersResource.managedEndpoint `EmrContainersResource.managedEndpoint`} 
   * - {@link EmrContainersResource.virtualCluster `EmrContainersResource.virtualCluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "emr-containers:TagResource",

  /**
   * Tagging - Grants permission to untag the specified resource
   * @see https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_UnTagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.jobRun `EmrContainersResource.jobRun`} 
   * - {@link EmrContainersResource.managedEndpoint `EmrContainersResource.managedEndpoint`} 
   * - {@link EmrContainersResource.virtualCluster `EmrContainersResource.virtualCluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "emr-containers:UntagResource",

  /**
   * * - Grant all emr-containers permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemroneksemrcontainers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EmrContainersResource.jobRun `EmrContainersResource.jobRun`} 
   * - {@link EmrContainersResource.virtualCluster `EmrContainersResource.virtualCluster`} 
   * - {@link EmrContainersResource.managedEndpoint `EmrContainersResource.managedEndpoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `emr-containers:ExecutionRoleArn`: Filters actions based on whether the execution role arn is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/iam-execution-role.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "emr-containers:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemroneksemrcontainers.html
 */
export const EmrContainersResource = {

  /**
   * @see https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/virtual-cluster.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  virtualCluster: (options: Partial<{partition: string, region: string, account: string, virtualClusterId: string}> = {}) => `arn:${options.partition || '*'}:emr-containers:${options.region || '*'}:${options.account || '*'}:/virtualclusters/${options.virtualClusterId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/job-runs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  jobRun: (options: Partial<{partition: string, region: string, account: string, virtualClusterId: string, jobRunId: string}> = {}) => `arn:${options.partition || '*'}:emr-containers:${options.region || '*'}:${options.account || '*'}:/virtualclusters/${options.virtualClusterId || '*'}/jobruns/${options.jobRunId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemroneksemrcontainers.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  managedEndpoint: (options: Partial<{partition: string, region: string, account: string, virtualClusterId: string, endpointId: string}> = {}) => `arn:${options.partition || '*'}:emr-containers:${options.region || '*'}:${options.account || '*'}:/virtualclusters/${options.virtualClusterId || '*'}/endpoints/${options.endpointId || '*'}`,
}

