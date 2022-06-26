/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticmapreduce.html
 */
export enum ElasticmapreduceAction {

  /**
   * Write - Grants permission to add an instance fleet to a running cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  AddInstanceFleet = "elasticmapreduce:AddInstanceFleet",

  /**
   * Write - Grants permission to add instance groups to a running cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  AddInstanceGroups = "elasticmapreduce:AddInstanceGroups",

  /**
   * Write - Grants permission to add new steps to a running cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_AddJobFlowSteps.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  AddJobFlowSteps = "elasticmapreduce:AddJobFlowSteps",

  /**
   * Tagging - Grants permission to add tags to an Amazon EMR resource
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_AddTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by whether the tag keys are provided with the action regardless of tag value ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticmapreduce:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AddTags = "elasticmapreduce:AddTags",

  /**
   * Write - Grants permission to attach an EMR notebook to a compute engine
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   */
  AttachEditor = "elasticmapreduce:AttachEditor",

  /**
   * Write - Grants permission to cancel a pending step or steps in a running cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_CancelSteps.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  CancelSteps = "elasticmapreduce:CancelSteps",

  /**
   * Write - Grants permission to create an EMR notebook
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-create.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by whether the tag keys are provided with the action regardless of tag value ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticmapreduce:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEditor = "elasticmapreduce:CreateEditor",

  /**
   * Write - Grants permission to create a persistent application history server
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  CreatePersistentAppUI = "elasticmapreduce:CreatePersistentAppUI",

  /**
   * Write - Grants permission to create an EMR notebook repository
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  CreateRepository = "elasticmapreduce:CreateRepository",

  /**
   * Write - Grants permission to create a security configuration
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_CreateSecurityConfiguration.html
   */
  CreateSecurityConfiguration = "elasticmapreduce:CreateSecurityConfiguration",

  /**
   * Write - Grants permission to create an EMR Studio
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by whether the tag keys are provided with the action regardless of tag value ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticmapreduce:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateStudio = "elasticmapreduce:CreateStudio",

  /**
   * Write - Grants permission to launch an EMR Studio using IAM authentication mode
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.studio `ElasticmapreduceResource.studio`} 
   */
  CreateStudioPresignedUrl = "elasticmapreduce:CreateStudioPresignedUrl",

  /**
   * Write - Grants permission to create an EMR Studio session mapping
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.studio `ElasticmapreduceResource.studio`} 
   */
  CreateStudioSessionMapping = "elasticmapreduce:CreateStudioSessionMapping",

  /**
   * Write - Grants permission to delete an EMR notebook
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-deleting
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   */
  DeleteEditor = "elasticmapreduce:DeleteEditor",

  /**
   * Write - Grants permission to delete an EMR notebook repository
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  DeleteRepository = "elasticmapreduce:DeleteRepository",

  /**
   * Write - Grants permission to delete a security configuration
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_DeleteSecurityConfiguration.html
   */
  DeleteSecurityConfiguration = "elasticmapreduce:DeleteSecurityConfiguration",

  /**
   * Write - Grants permission to delete an EMR Studio
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.studio `ElasticmapreduceResource.studio`} 
   */
  DeleteStudio = "elasticmapreduce:DeleteStudio",

  /**
   * Write - Grants permission to delete an EMR Studio session mapping
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.studio `ElasticmapreduceResource.studio`} 
   */
  DeleteStudioSessionMapping = "elasticmapreduce:DeleteStudioSessionMapping",

  /**
   * Permissions management - Grants permission to block an identity from opening a collaborative workspace
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   */
  DeleteWorkspaceAccess = "elasticmapreduce:DeleteWorkspaceAccess",

  /**
   * Read - Grants permission to get details about a cluster, including status, hardware and software configuration, VPC settings, and so on
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  DescribeCluster = "elasticmapreduce:DescribeCluster",

  /**
   * Read - Grants permission to view information about a notebook, including status, user, role, tags, location, and more
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   */
  DescribeEditor = "elasticmapreduce:DescribeEditor",

  /**
   * Read - Grants permission to describe details of clusters (job flows). This API is deprecated and will eventually be removed. We recommend you use ListClusters, DescribeCluster, ListSteps, ListInstanceGroups and ListBootstrapActions instead
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeJobFlows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  DescribeJobFlows = "elasticmapreduce:DescribeJobFlows",

  /**
   * Read - Grants permission to view information about a notebook execution
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.notebookExecution `ElasticmapreduceResource.notebookExecution`} 
   */
  DescribeNotebookExecution = "elasticmapreduce:DescribeNotebookExecution",

  /**
   * Read - Grants permission to describe a persistent application history server
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  DescribePersistentAppUI = "elasticmapreduce:DescribePersistentAppUI",

  /**
   * Read - Grants permission to view information about an EMR release, such as which applications are supported
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeReleaseLabel.html
   */
  DescribeReleaseLabel = "elasticmapreduce:DescribeReleaseLabel",

  /**
   * Read - Grants permission to describe an EMR notebook repository
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  DescribeRepository = "elasticmapreduce:DescribeRepository",

  /**
   * Read - Grants permission to get details of a security configuration
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeSecurityConfiguration.html
   */
  DescribeSecurityConfiguration = "elasticmapreduce:DescribeSecurityConfiguration",

  /**
   * Read - Grants permission to get details about a cluster step
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeStep.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  DescribeStep = "elasticmapreduce:DescribeStep",

  /**
   * Read - Grants permission to view information about an EMR Studio
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.studio `ElasticmapreduceResource.studio`} 
   */
  DescribeStudio = "elasticmapreduce:DescribeStudio",

  /**
   * Write - Grants permission to detach an EMR notebook from a compute engine
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   */
  DetachEditor = "elasticmapreduce:DetachEditor",

  /**
   * Read - Grants permission to retrieve the auto-termination policy associated with a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_GetAutoTerminationPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  GetAutoTerminationPolicy = "elasticmapreduce:GetAutoTerminationPolicy",

  /**
   * Read - Grants permission to retrieve the EMR block public access configuration for the AWS account in the Region
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_GetBlockPublicAccessConfiguration.html
   */
  GetBlockPublicAccessConfiguration = "elasticmapreduce:GetBlockPublicAccessConfiguration",

  /**
   * Read - Grants permission to retrieve the managed scaling policy associated with a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_GetManagedScalingPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  GetManagedScalingPolicy = "elasticmapreduce:GetManagedScalingPolicy",

  /**
   * Write - Grants permission to get a presigned URL for an application history server running on the cluster
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  GetOnClusterAppUIPresignedURL = "elasticmapreduce:GetOnClusterAppUIPresignedURL",

  /**
   * Write - Grants permission to get a presigned URL for a persistent application history server
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-debug.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  GetPersistentAppUIPresignedURL = "elasticmapreduce:GetPersistentAppUIPresignedURL",

  /**
   * Read - Grants permission to view information about an EMR Studio session mapping
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.studio `ElasticmapreduceResource.studio`} 
   */
  GetStudioSessionMapping = "elasticmapreduce:GetStudioSessionMapping",

  /**
   * Write - Grants permission to link an EMR notebook repository to EMR notebooks
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  LinkRepository = "elasticmapreduce:LinkRepository",

  /**
   * Read - Grants permission to get details about the bootstrap actions associated with a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ListBootstrapActions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  ListBootstrapActions = "elasticmapreduce:ListBootstrapActions",

  /**
   * List - Grants permission to get the status of accessible clusters
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ListClusters.html
   */
  ListClusters = "elasticmapreduce:ListClusters",

  /**
   * List - Grants permission to list summary information for accessible EMR notebooks
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  ListEditors = "elasticmapreduce:ListEditors",

  /**
   * Read - Grants permission to get details of instance fleets in a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceFleets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  ListInstanceFleets = "elasticmapreduce:ListInstanceFleets",

  /**
   * Read - Grants permission to get details of instance groups in a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  ListInstanceGroups = "elasticmapreduce:ListInstanceGroups",

  /**
   * Read - Grants permission to get details about the Amazon EC2 instances in a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  ListInstances = "elasticmapreduce:ListInstances",

  /**
   * List - Grants permission to list summary information for notebook executions
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html
   */
  ListNotebookExecutions = "elasticmapreduce:ListNotebookExecutions",

  /**
   * List - Grants permission to list and filter the available EMR releases in the current region
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ListReleaseLabels.html
   */
  ListReleaseLabels = "elasticmapreduce:ListReleaseLabels",

  /**
   * List - Grants permission to list existing EMR notebook repositories
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  ListRepositories = "elasticmapreduce:ListRepositories",

  /**
   * List - Grants permission to list available security configurations in this account by name, along with creation dates and times
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSecurityConfigurations.html
   */
  ListSecurityConfigurations = "elasticmapreduce:ListSecurityConfigurations",

  /**
   * Read - Grants permission to list steps associated with a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSteps.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  ListSteps = "elasticmapreduce:ListSteps",

  /**
   * List - Grants permission to list summary information about EMR Studio session mappings
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  ListStudioSessionMappings = "elasticmapreduce:ListStudioSessionMappings",

  /**
   * List - Grants permission to list summary information about EMR Studios
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   */
  ListStudios = "elasticmapreduce:ListStudios",

  /**
   * List - Grants permission to list identities that are granted access to a workspace
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   */
  ListWorkspaceAccessIdentities = "elasticmapreduce:ListWorkspaceAccessIdentities",

  /**
   * Write - Grants permission to change cluster settings such as number of steps that can be executed concurrently for a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  ModifyCluster = "elasticmapreduce:ModifyCluster",

  /**
   * Write - Grants permission to change the target On-Demand and target Spot capacities for a instance fleet
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  ModifyInstanceFleet = "elasticmapreduce:ModifyInstanceFleet",

  /**
   * Write - Grants permission to change the number and configuration of EC2 instances for an instance group
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  ModifyInstanceGroups = "elasticmapreduce:ModifyInstanceGroups",

  /**
   * Write - Grants permission to launch the Jupyter notebook editor for an EMR notebook from within the console
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   */
  OpenEditorInConsole = "elasticmapreduce:OpenEditorInConsole",

  /**
   * Write - Grants permission to create or update an automatic scaling policy for a core instance group or task instance group
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_PutAutoScalingPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  PutAutoScalingPolicy = "elasticmapreduce:PutAutoScalingPolicy",

  /**
   * Write - Grants permission to create or update the auto-termination policy associated with a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_PutAutoTerminationPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  PutAutoTerminationPolicy = "elasticmapreduce:PutAutoTerminationPolicy",

  /**
   * Permissions management - Grants permission to create or update the EMR block public access configuration for the AWS account in the Region
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_PutBlockPublicAccessConfiguration.html
   */
  PutBlockPublicAccessConfiguration = "elasticmapreduce:PutBlockPublicAccessConfiguration",

  /**
   * Write - Grants permission to create or update the managed scaling policy associated with a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_PutManagedScalingPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  PutManagedScalingPolicy = "elasticmapreduce:PutManagedScalingPolicy",

  /**
   * Permissions management - Grants permission to allow an identity to open a collaborative workspace
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   */
  PutWorkspaceAccess = "elasticmapreduce:PutWorkspaceAccess",

  /**
   * Write - Grants permission to remove an automatic scaling policy from an instance group
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveAutoScalingPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  RemoveAutoScalingPolicy = "elasticmapreduce:RemoveAutoScalingPolicy",

  /**
   * Write - Grants permission to remove the auto-termination policy associated with a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveAutoTerminationPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  RemoveAutoTerminationPolicy = "elasticmapreduce:RemoveAutoTerminationPolicy",

  /**
   * Write - Grants permission to remove the managed scaling policy associated with a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveManagedScalingPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  RemoveManagedScalingPolicy = "elasticmapreduce:RemoveManagedScalingPolicy",

  /**
   * Tagging - Grants permission to remove tags from an Amazon EMR resource
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by whether the tag keys are provided with the action regardless of tag value ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RemoveTags = "elasticmapreduce:RemoveTags",

  /**
   * Write - Grants permission to create and launch a cluster (job flow)
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_RunJobFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by whether the tag keys are provided with the action regardless of tag value ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticmapreduce:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RunJobFlow = "elasticmapreduce:RunJobFlow",

  /**
   * Write - Grants permission to add and remove termination protection for a cluster
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_SetTerminationProtection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  SetTerminationProtection = "elasticmapreduce:SetTerminationProtection",

  /**
   * Write - Grants permission to start an EMR notebook
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   */
  StartEditor = "elasticmapreduce:StartEditor",

  /**
   * Write - Grants permission to start an EMR notebook execution
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by whether the tag keys are provided with the action regardless of tag value ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticmapreduce:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartNotebookExecution = "elasticmapreduce:StartNotebookExecution",

  /**
   * Write - Grants permission to shut down an EMR notebook
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   */
  StopEditor = "elasticmapreduce:StopEditor",

  /**
   * Write - Grants permission to stop notebook execution
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.notebookExecution `ElasticmapreduceResource.notebookExecution`} 
   */
  StopNotebookExecution = "elasticmapreduce:StopNotebookExecution",

  /**
   * Write - Grants permission to terminate a cluster (job flow)
   * @see https://docs.aws.amazon.com/emr/latest/APIReference/API_TerminateJobFlows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   */
  TerminateJobFlows = "elasticmapreduce:TerminateJobFlows",

  /**
   * Write - Grants permission to unlink an EMR notebook repository from EMR notebooks
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  UnlinkRepository = "elasticmapreduce:UnlinkRepository",

  /**
   * Write - Grants permission to update an EMR notebook
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   */
  UpdateEditor = "elasticmapreduce:UpdateEditor",

  /**
   * Write - Grants permission to update an EMR notebook repository
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  UpdateRepository = "elasticmapreduce:UpdateRepository",

  /**
   * Write - Grants permission to update information about an EMR Studio
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.studio `ElasticmapreduceResource.studio`} 
   */
  UpdateStudio = "elasticmapreduce:UpdateStudio",

  /**
   * Write - Grants permission to update an EMR Studio session mapping
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.studio `ElasticmapreduceResource.studio`} 
   */
  UpdateStudioSessionMapping = "elasticmapreduce:UpdateStudioSessionMapping",

  /**
   * List - Grants permission to use the EMR console to view events from all clusters
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticmapreduce.html
   */
  ViewEventsFromAllClustersInConsole = "elasticmapreduce:ViewEventsFromAllClustersInConsole",

  /**
   * * - Grant all elasticmapreduce permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticmapreduce.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElasticmapreduceResource.cluster `ElasticmapreduceResource.cluster`} 
   * - {@link ElasticmapreduceResource.editor `ElasticmapreduceResource.editor`} 
   * - {@link ElasticmapreduceResource.studio `ElasticmapreduceResource.studio`} 
   * - {@link ElasticmapreduceResource.notebookExecution `ElasticmapreduceResource.notebookExecution`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by whether the tag keys are provided with the action regardless of tag value ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `elasticmapreduce:RequestTag/${TagKey}`: Filters access by whether the tag and value pair is provided with the action ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "elasticmapreduce:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticmapreduce.html
 */
export const ElasticmapreduceResource = {

  /**
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag and value pair associated with an Amazon EMR resource ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticmapreduce:ResourceTag/${TagKey}`: Filters access by the tag and value pair associated with an Amazon EMR resource ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cluster: (options: Partial<{partition: string, region: string, account: string, clusterId: string}> = {}) => `arn:${options.partition || '*'}:elasticmapreduce:${options.region || '*'}:${options.account || '*'}:cluster/${options.clusterId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag and value pair associated with an Amazon EMR resource ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticmapreduce:ResourceTag/${TagKey}`: Filters access by the tag and value pair associated with an Amazon EMR resource ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  editor: (options: Partial<{partition: string, region: string, account: string, editorId: string}> = {}) => `arn:${options.partition || '*'}:elasticmapreduce:${options.region || '*'}:${options.account || '*'}:editor/${options.editorId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-headless.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag and value pair associated with an Amazon EMR resource ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticmapreduce:ResourceTag/${TagKey}`: Filters access by the tag and value pair associated with an Amazon EMR resource ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  notebookExecution: (options: Partial<{partition: string, region: string, account: string, notebookExecutionId: string}> = {}) => `arn:${options.partition || '*'}:elasticmapreduce:${options.region || '*'}:${options.account || '*'}:notebook-execution/${options.notebookExecutionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag and value pair associated with an Amazon EMR resource ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `elasticmapreduce:ResourceTag/${TagKey}`: Filters access by the tag and value pair associated with an Amazon EMR resource ({@link https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  studio: (options: Partial<{partition: string, region: string, account: string, studioId: string}> = {}) => `arn:${options.partition || '*'}:elasticmapreduce:${options.region || '*'}:${options.account || '*'}:studio/${options.studioId || '*'}`,
}

