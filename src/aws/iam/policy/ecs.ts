/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerservice.html
 */
export enum EcsAction {

  /**
   * Write - Grants permission to create a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCapacityProvider = "ecs:CreateCapacityProvider",

  /**
   * Write - Grants permission to create a new Amazon ECS cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:capacity-provider`: Filters access by the ARN of an Amazon ECS capacity provider ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCluster = "ecs:CreateCluster",

  /**
   * Write - Grants permission to run and maintain a desired number of tasks from a specified task definition via service creation
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.service `EcsResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:capacity-provider`: Filters access by the ARN of an Amazon ECS capacity provider ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:task-definition`: Filters access by the ARN of an Amazon ECS task definition ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:enable-execute-command`: Filters access by the execute-command capability of your Amazon ECS task or Amazon ECS service ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateService = "ecs:CreateService",

  /**
   * Write - Grants permission to create a new Amazon ECS task set
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:capacity-provider`: Filters access by the ARN of an Amazon ECS capacity provider ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:service`: Filters access by the ARN of an Amazon ECS service ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:task-definition`: Filters access by the ARN of an Amazon ECS task definition ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  CreateTaskSet = "ecs:CreateTaskSet",

  /**
   * Write - Grants permission to modify the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are disabled for new resources that are created
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAccountSetting.html
   */
  DeleteAccountSetting = "ecs:DeleteAccountSetting",

  /**
   * Write - Grants permission to delete one or more custom attributes from an Amazon ECS resource
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DeleteAttributes = "ecs:DeleteAttributes",

  /**
   * Write - Grants permission to delete the specified capacity provider
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCapacityProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.capacityProvider `EcsResource.capacityProvider`} 
   */
  DeleteCapacityProvider = "ecs:DeleteCapacityProvider",

  /**
   * Write - Grants permission to delete the specified cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   */
  DeleteCluster = "ecs:DeleteCluster",

  /**
   * Write - Grants permission to delete a specified service within a cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.service `EcsResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DeleteService = "ecs:DeleteService",

  /**
   * Write - Grants permission to delete the specified task set
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.taskSet `EcsResource.taskSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:service`: Filters access by the ARN of an Amazon ECS service ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DeleteTaskSet = "ecs:DeleteTaskSet",

  /**
   * Write - Grants permission to deregister an Amazon ECS container instance from the specified cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   */
  DeregisterContainerInstance = "ecs:DeregisterContainerInstance",

  /**
   * Write - Grants permission to deregister the specified task definition by family and revision
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html
   */
  DeregisterTaskDefinition = "ecs:DeregisterTaskDefinition",

  /**
   * Read - Grants permission to describe one or more Amazon ECS capacity providers
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeCapacityProviders.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.capacityProvider `EcsResource.capacityProvider`} 
   */
  DescribeCapacityProviders = "ecs:DescribeCapacityProviders",

  /**
   * Read - Grants permission to describes one or more of your clusters
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeClusters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   */
  DescribeClusters = "ecs:DescribeClusters",

  /**
   * Read - Grants permission to describes Amazon ECS container instances
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeContainerInstances = "ecs:DescribeContainerInstances",

  /**
   * Read - Grants permission to describe the specified services running in your cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.service `EcsResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeServices = "ecs:DescribeServices",

  /**
   * Read - Grants permission to describe a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskDefinition.html
   */
  DescribeTaskDefinition = "ecs:DescribeTaskDefinition",

  /**
   * Read - Grants permission to describe Amazon ECS task sets
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.taskSet `EcsResource.taskSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:service`: Filters access by the ARN of an Amazon ECS service ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeTaskSets = "ecs:DescribeTaskSets",

  /**
   * Read - Grants permission to describe a specified task or tasks
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.task `EcsResource.task`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DescribeTasks = "ecs:DescribeTasks",

  /**
   * Write - Grants permission to get an endpoint for the Amazon ECS agent to poll for updates
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DiscoverPollEndpoint.html
   */
  DiscoverPollEndpoint = "ecs:DiscoverPollEndpoint",

  /**
   * Write - Grants permission to run a command remotely on an Amazon ECS container
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ExecuteCommand.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   * - {@link EcsResource.task `EcsResource.task`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:container-name`: Filters access by the name of an Amazon ECS container which is defined in the ECS task definition ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:task`: Filters access by the ARN of an Amazon ECS task ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  ExecuteCommand = "ecs:ExecuteCommand",

  /**
   * Read - Grants permission to list the account settings for an Amazon ECS resource for a specified principal
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAccountSettings.html
   */
  ListAccountSettings = "ecs:ListAccountSettings",

  /**
   * List - Grants permission to lists the attributes for Amazon ECS resources within a specified target type and cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   */
  ListAttributes = "ecs:ListAttributes",

  /**
   * List - Grants permission to get a list of existing clusters
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html
   */
  ListClusters = "ecs:ListClusters",

  /**
   * List - Grants permission to get a list of container instances in a specified cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   */
  ListContainerInstances = "ecs:ListContainerInstances",

  /**
   * List - Grants permission to get a list of services that are running in a specified cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  ListServices = "ecs:ListServices",

  /**
   * Read - Grants permission to get a list of tags for the specified resource
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * - {@link EcsResource.task `EcsResource.task`} 
   * - {@link EcsResource.taskDefinition `EcsResource.taskDefinition`} 
   */
  ListTagsForResource = "ecs:ListTagsForResource",

  /**
   * List - Grants permission to get a list of task definition families that are registered to your account (which may include task definition families that no longer have any ACTIVE task definitions)
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html
   */
  ListTaskDefinitionFamilies = "ecs:ListTaskDefinitionFamilies",

  /**
   * List - Grants permission to get a list of task definitions that are registered to your account
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTaskDefinitions.html
   */
  ListTaskDefinitions = "ecs:ListTaskDefinitions",

  /**
   * List - Grants permission to get a list of tasks for a specified cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  ListTasks = "ecs:ListTasks",

  /**
   * Write - Grants permission to an agent to connect with the Amazon ECS service to report status and get commands
   * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/instance_IAM_role.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  Poll = "ecs:Poll",

  /**
   * Write - Grants permission to modify the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are enabled for new resources that are created. Enabling this setting is required to use new Amazon ECS features such as resource tagging
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html
   */
  PutAccountSetting = "ecs:PutAccountSetting",

  /**
   * Write - Grants permission to modify the ARN and resource ID format of a resource type for all IAM users on an account for which no individual account setting has been set. Enabling this setting is required to use new Amazon ECS features such as resource tagging
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html
   */
  PutAccountSettingDefault = "ecs:PutAccountSettingDefault",

  /**
   * Write - Grants permission to create or update an attribute on an Amazon ECS resource
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  PutAttributes = "ecs:PutAttributes",

  /**
   * Write - Grants permission to modify the available capacity providers and the default capacity provider strategy for a cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.capacityProvider `EcsResource.capacityProvider`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:capacity-provider`: Filters access by the ARN of an Amazon ECS capacity provider ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  PutClusterCapacityProviders = "ecs:PutClusterCapacityProviders",

  /**
   * Write - Grants permission to register an EC2 instance into the specified cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterContainerInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RegisterContainerInstance = "ecs:RegisterContainerInstance",

  /**
   * Write - Grants permission to register a new task definition from the supplied family and containerDefinitions
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterTaskDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RegisterTaskDefinition = "ecs:RegisterTaskDefinition",

  /**
   * Write - Grants permission to start a task using random placement and the default Amazon ECS scheduler
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.taskDefinition `EcsResource.taskDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:capacity-provider`: Filters access by the ARN of an Amazon ECS capacity provider ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:enable-execute-command`: Filters access by the execute-command capability of your Amazon ECS task or Amazon ECS service ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RunTask = "ecs:RunTask",

  /**
   * Write - Grants permission to start a new task from the specified task definition on the specified container instance or instances
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StartTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.taskDefinition `EcsResource.taskDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:container-instances`: Filters access by the ARN of an Amazon ECS container instance ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:enable-execute-command`: Filters access by the execute-command capability of your Amazon ECS task or Amazon ECS service ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartTask = "ecs:StartTask",

  /**
   * Write - Grants permission to start a telemetry session
   * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html#enable_cloudwatch
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  StartTelemetrySession = "ecs:StartTelemetrySession",

  /**
   * Write - Grants permission to stop a running task
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StopTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.task `EcsResource.task`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  StopTask = "ecs:StopTask",

  /**
   * Write - Grants permission to send an acknowledgement that attachments changed states
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitAttachmentStateChanges.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   */
  SubmitAttachmentStateChanges = "ecs:SubmitAttachmentStateChanges",

  /**
   * Write - Grants permission to send an acknowledgement that a container changed states
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitContainerStateChange.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   */
  SubmitContainerStateChange = "ecs:SubmitContainerStateChange",

  /**
   * Write - Grants permission to send an acknowledgement that a task changed states
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitTaskStateChange.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   */
  SubmitTaskStateChange = "ecs:SubmitTaskStateChange",

  /**
   * Tagging - Grants permission to tag the specified resource
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * - {@link EcsResource.service `EcsResource.service`} 
   * - {@link EcsResource.task `EcsResource.task`} 
   * - {@link EcsResource.taskDefinition `EcsResource.taskDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "ecs:TagResource",

  /**
   * Tagging - Grants permission to untag the specified resource
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * - {@link EcsResource.service `EcsResource.service`} 
   * - {@link EcsResource.task `EcsResource.task`} 
   * - {@link EcsResource.taskDefinition `EcsResource.taskDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "ecs:UntagResource",

  /**
   * Write - Grants permission to update the specified capacity provider
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateCapacityProvider.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.capacityProvider `EcsResource.capacityProvider`} 
   */
  UpdateCapacityProvider = "ecs:UpdateCapacityProvider",

  /**
   * Write - Grants permission to modify the configuration or settings to use for a cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   */
  UpdateCluster = "ecs:UpdateCluster",

  /**
   * Write - Grants permission to modify the settings to use for a cluster
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateClusterSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   */
  UpdateClusterSettings = "ecs:UpdateClusterSettings",

  /**
   * Write - Grants permission to update the Amazon ECS container agent on a specified container instance
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerAgent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  UpdateContainerAgent = "ecs:UpdateContainerAgent",

  /**
   * Write - Grants permission to the user to modify the status of an Amazon ECS container instance
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerInstancesState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  UpdateContainerInstancesState = "ecs:UpdateContainerInstancesState",

  /**
   * Write - Grants permission to modify the parameters of a service
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.service `EcsResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:capacity-provider`: Filters access by the ARN of an Amazon ECS capacity provider ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:enable-execute-command`: Filters access by the execute-command capability of your Amazon ECS task or Amazon ECS service ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:task-definition`: Filters access by the ARN of an Amazon ECS task definition ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  UpdateService = "ecs:UpdateService",

  /**
   * Write - Grants permission to modify the primary task set used in a service
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateServicePrimaryTaskSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.service `EcsResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  UpdateServicePrimaryTaskSet = "ecs:UpdateServicePrimaryTaskSet",

  /**
   * Write - Grants permission to update the specified task set
   * @see https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.taskSet `EcsResource.taskSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:service`: Filters access by the ARN of an Amazon ECS service ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  UpdateTaskSet = "ecs:UpdateTaskSet",

  /**
   * * - Grant all ecs permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EcsResource.service `EcsResource.service`} 
   * - {@link EcsResource.containerInstance `EcsResource.containerInstance`} 
   * - {@link EcsResource.capacityProvider `EcsResource.capacityProvider`} 
   * - {@link EcsResource.cluster `EcsResource.cluster`} 
   * - {@link EcsResource.taskSet `EcsResource.taskSet`} 
   * - {@link EcsResource.task `EcsResource.task`} 
   * - {@link EcsResource.taskDefinition `EcsResource.taskDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:capacity-provider`: Filters access by the ARN of an Amazon ECS capacity provider ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:cluster`: Filters access by the ARN of an Amazon ECS cluster ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:task-definition`: Filters access by the ARN of an Amazon ECS task definition ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:enable-execute-command`: Filters access by the execute-command capability of your Amazon ECS task or Amazon ECS service ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:service`: Filters access by the ARN of an Amazon ECS service ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:container-name`: Filters access by the name of an Amazon ECS container which is defined in the ECS task definition ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:task`: Filters access by the ARN of an Amazon ECS task ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ecs:container-instances`: Filters access by the ARN of an Amazon ECS container instance ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  All = "ecs:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerservice.html
 */
export const EcsResource = {

  /**
   * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_clusters.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cluster: (options: Partial<{partition: string, region: string, account: string, clusterName: string}> = {}) => `arn:${options.partition || '*'}:ecs:${options.region || '*'}:${options.account || '*'}:cluster/${options.clusterName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_instances.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  containerInstance: (options: Partial<{partition: string, region: string, account: string, clusterName: string, containerInstanceId: string}> = {}) => `arn:${options.partition || '*'}:ecs:${options.region || '*'}:${options.account || '*'}:container-instance/${options.clusterName || '*'}/${options.containerInstanceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  service: (options: Partial<{partition: string, region: string, account: string, clusterName: string, serviceName: string}> = {}) => `arn:${options.partition || '*'}:ecs:${options.region || '*'}:${options.account || '*'}:service/${options.clusterName || '*'}/${options.serviceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  task: (options: Partial<{partition: string, region: string, account: string, clusterName: string, taskId: string}> = {}) => `arn:${options.partition || '*'}:ecs:${options.region || '*'}:${options.account || '*'}:task/${options.clusterName || '*'}/${options.taskId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  taskDefinition: (options: Partial<{partition: string, region: string, account: string, taskDefinitionFamilyName: string, taskDefinitionRevisionNumber: string}> = {}) => `arn:${options.partition || '*'}:ecs:${options.region || '*'}:${options.account || '*'}:task-definition/${options.taskDefinitionFamilyName || '*'}:${options.taskDefinitionRevisionNumber || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/capacity_provider_definitions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  capacityProvider: (options: Partial<{partition: string, region: string, account: string, capacityProviderName: string}> = {}) => `arn:${options.partition || '*'}:ecs:${options.region || '*'}:${options.account || '*'}:capacity-provider/${options.capacityProviderName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_sets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ecs:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  taskSet: (options: Partial<{partition: string, region: string, account: string, clusterName: string, serviceName: string, taskSetId: string}> = {}) => `arn:${options.partition || '*'}:ecs:${options.region || '*'}:${options.account || '*'}:task-set/${options.clusterName || '*'}/${options.serviceName || '*'}/${options.taskSetId || '*'}`,
}

