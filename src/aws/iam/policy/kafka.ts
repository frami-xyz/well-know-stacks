/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedstreamingforapachekafka.html
 */
export enum KafkaAction {

  /**
   * Write - Grants permission to associate one or more Scram Secrets with an Amazon MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-scram-secrets.html#BatchAssociateScramSecret
   */
  BatchAssociateScramSecret = "kafka:BatchAssociateScramSecret",

  /**
   * Write - Grants permission to disassociate one or more Scram Secrets from an Amazon MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-scram-secrets.html#BatchDisassociateScramSecret
   */
  BatchDisassociateScramSecret = "kafka:BatchDisassociateScramSecret",

  /**
   * Write - Grants permission to create an MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#CreateCluster
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCluster = "kafka:CreateCluster",

  /**
   * Write - Grants permission to create an MSK cluster
   * @see https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-clusters.html#CreateClusterV2
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateClusterV2 = "kafka:CreateClusterV2",

  /**
   * Write - Grants permission to create an MSK configuration
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/configurations.html#CreateConfiguration
   */
  CreateConfiguration = "kafka:CreateConfiguration",

  /**
   * Write - Grants permission to delete an MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html#DeleteCluster
   */
  DeleteCluster = "kafka:DeleteCluster",

  /**
   * Write - Grants permission to delete the specified MSK configuration
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#DeleteConfiguration
   */
  DeleteConfiguration = "kafka:DeleteConfiguration",

  /**
   * Read - Grants permission to describe an MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html#DescribeCluster
   */
  DescribeCluster = "kafka:DescribeCluster",

  /**
   * Read - Grants permission to describe the cluster operation that is specified by the given ARN
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/operations-clusteroperationarn.html#DescribeClusterOperation
   */
  DescribeClusterOperation = "kafka:DescribeClusterOperation",

  /**
   * Read - Grants permission to describe an MSK cluster
   * @see https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-clusters-clusterarn.html#DescribeClusterV2
   */
  DescribeClusterV2 = "kafka:DescribeClusterV2",

  /**
   * Read - Grants permission to describe an MSK configuration
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#DescribeConfiguration
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaResource.configuration `KafkaResource.configuration`} 
   */
  DescribeConfiguration = "kafka:DescribeConfiguration",

  /**
   * Read - Grants permission to describe an MSK configuration revision
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn-revisions-revision.html#DescribeConfigurationRevision
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaResource.configuration `KafkaResource.configuration`} 
   */
  DescribeConfigurationRevision = "kafka:DescribeConfigurationRevision",

  /**
   * Read - Grants permission to get connection details for the brokers in an MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-bootstrap-brokers.html#GetBootstrapBrokers
   */
  GetBootstrapBrokers = "kafka:GetBootstrapBrokers",

  /**
   * List - Grants permission to get a list of the Apache Kafka versions to which you can update an MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/compatible-kafka-versions.html#GetCompatibleKafkaVersions
   */
  GetCompatibleKafkaVersions = "kafka:GetCompatibleKafkaVersions",

  /**
   * List - Grants permission to return a list of all the operations that have been performed on the specified MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-operations.html#ListClusterOperations
   */
  ListClusterOperations = "kafka:ListClusterOperations",

  /**
   * List - Grants permission to list all MSK clusters in this account
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters.html#ListClusters
   */
  ListClusters = "kafka:ListClusters",

  /**
   * List - Grants permission to list all MSK clusters in this account
   * @see https://docs.aws.amazon.com/MSK/2.0/APIReference/v2-clusters.html#ListClustersV2
   */
  ListClustersV2 = "kafka:ListClustersV2",

  /**
   * List - Grants permission to list all revisions for an MSK configuration in this account
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn-revisions.html#ListConfigurationRevisions
   */
  ListConfigurationRevisions = "kafka:ListConfigurationRevisions",

  /**
   * List - Grants permission to list all MSK configurations in this account
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/configurations.html#ListConfigurations
   */
  ListConfigurations = "kafka:ListConfigurations",

  /**
   * List - Grants permission to list all Apache Kafka versions supported by Amazon MSK
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/kafka-versions.html#ListKafkaVersions
   */
  ListKafkaVersions = "kafka:ListKafkaVersions",

  /**
   * List - Grants permission to list brokers in an MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes.html#ListNodes
   */
  ListNodes = "kafka:ListNodes",

  /**
   * List - Grants permission to list the Scram Secrets associated with an Amazon MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-scram-secrets.html#ListScramSecrets
   */
  ListScramSecrets = "kafka:ListScramSecrets",

  /**
   * Read - Grants permission to list tags of an MSK resource
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#ListTagsForResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaResource.cluster `KafkaResource.cluster`} 
   */
  ListTagsForResource = "kafka:ListTagsForResource",

  /**
   * Write - Grants permission to reboot broker
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-reboot-broker.html#RebootBroker
   */
  RebootBroker = "kafka:RebootBroker",

  /**
   * Tagging - Grants permission to tag an MSK resource
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#TagResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaResource.cluster `KafkaResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "kafka:TagResource",

  /**
   * Tagging - Grants permission to remove tags from an MSK resource
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/tags-resourcearn.html#UntagResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaResource.cluster `KafkaResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "kafka:UntagResource",

  /**
   * Write - Grants permission to update the number of brokers of the MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-count.html#UpdateBrokerCount
   */
  UpdateBrokerCount = "kafka:UpdateBrokerCount",

  /**
   * Write - Grants permission to update the storage size of the brokers of the MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-storage.html#UpdateBrokerStorage
   */
  UpdateBrokerStorage = "kafka:UpdateBrokerStorage",

  /**
   * Write - Grants permission to update the broker type of an Amazon MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-nodes-type.html#UpdateBrokerType
   */
  UpdateBrokerType = "kafka:UpdateBrokerType",

  /**
   * Write - Grants permission to update the configuration of the MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-configuration.html#UpdateClusterConfiguration
   */
  UpdateClusterConfiguration = "kafka:UpdateClusterConfiguration",

  /**
   * Write - Grants permission to update the MSK cluster to the specified Apache Kafka version
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-version.html#UpdateClusterKafkaVersion
   */
  UpdateClusterKafkaVersion = "kafka:UpdateClusterKafkaVersion",

  /**
   * Write - Grants permission to create a new revision of the MSK configuration
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html#UpdateConfiguration
   */
  UpdateConfiguration = "kafka:UpdateConfiguration",

  /**
   * Write - Grants permission to update the connectivity settings for the MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-connectivity.html#UpdateConnectivity
   */
  UpdateConnectivity = "kafka:UpdateConnectivity",

  /**
   * Write - Grants permission to update the monitoring settings for the MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-monitoring.html#UpdateMonitoring
   */
  UpdateMonitoring = "kafka:UpdateMonitoring",

  /**
   * Write - Grants permission to update the security settings for the MSK cluster
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn-security.html#UpdateSecurity
   */
  UpdateSecurity = "kafka:UpdateSecurity",

  /**
   * * - Grant all kafka permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedstreamingforapachekafka.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaResource.configuration `KafkaResource.configuration`} 
   * - {@link KafkaResource.cluster `KafkaResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "kafka:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedstreamingforapachekafka.html
 */
export const KafkaResource = {

  /**
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/clusters-clusterarn.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cluster: (options: Partial<{partition: string, region: string, account: string, clusterName: string, uuid: string}> = {}) => `arn:${options.partition || '*'}:kafka:${options.region || '*'}:${options.account || '*'}:cluster/${options.clusterName || '*'}/${options.uuid || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/msk/1.0/apireference/configurations-arn.html
   */
  configuration: (options: Partial<{partition: string, region: string, account: string, configurationName: string, uuid: string}> = {}) => `arn:${options.partition || '*'}:kafka:${options.region || '*'}:${options.account || '*'}:configuration/${options.configurationName || '*'}/${options.uuid || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/topics
   */
  topic: (options: Partial<{partition: string, region: string, account: string, clusterName: string, clusterUuid: string, topicName: string}> = {}) => `arn:${options.partition || '*'}:kafka:${options.region || '*'}:${options.account || '*'}:topic/${options.clusterName || '*'}/${options.clusterUuid || '*'}/${options.topicName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/groups
   */
  group: (options: Partial<{partition: string, region: string, account: string, clusterName: string, clusterUuid: string, groupName: string}> = {}) => `arn:${options.partition || '*'}:kafka:${options.region || '*'}:${options.account || '*'}:group/${options.clusterName || '*'}/${options.clusterUuid || '*'}/${options.groupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/transactional_ids
   */
  transactionalId: (options: Partial<{partition: string, region: string, account: string, clusterName: string, clusterUuid: string, transactionalId: string}> = {}) => `arn:${options.partition || '*'}:kafka:${options.region || '*'}:${options.account || '*'}:transactional-id/${options.clusterName || '*'}/${options.clusterUuid || '*'}/${options.transactionalId || '*'}`,
}

