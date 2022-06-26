/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_apachekafkaapisforamazonmskclusters.html
 */
export enum KafkaClusterAction {

  /**
   * Write - Grants permission to alter various aspects of the cluster, equivalent to Apache Kafka's ALTER CLUSTER ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.cluster `KafkaClusterResource.cluster`} 
   */
  AlterCluster = "kafka-cluster:AlterCluster",

  /**
   * Write - Grants permission to alter the dynamic configuration of a cluster, equivalent to Apache Kafka's ALTER_CONFIGS CLUSTER ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.cluster `KafkaClusterResource.cluster`} 
   */
  AlterClusterDynamicConfiguration = "kafka-cluster:AlterClusterDynamicConfiguration",

  /**
   * Write - Grants permission to join groups on a cluster, equivalent to Apache Kafka's READ GROUP ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.group `KafkaClusterResource.group`} 
   */
  AlterGroup = "kafka-cluster:AlterGroup",

  /**
   * Write - Grants permission to alter topics on a cluster, equivalent to Apache Kafka's ALTER TOPIC ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.topic `KafkaClusterResource.topic`} 
   */
  AlterTopic = "kafka-cluster:AlterTopic",

  /**
   * Write - Grants permission to alter the dynamic configuration of topics on a cluster, equivalent to Apache Kafka's ALTER_CONFIGS TOPIC ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.topic `KafkaClusterResource.topic`} 
   */
  AlterTopicDynamicConfiguration = "kafka-cluster:AlterTopicDynamicConfiguration",

  /**
   * Write - Grants permission to alter transactional IDs on a cluster, equivalent to Apache Kafka's WRITE TRANSACTIONAL_ID ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.transactionalId `KafkaClusterResource.transactionalId`} 
   */
  AlterTransactionalId = "kafka-cluster:AlterTransactionalId",

  /**
   * Write - Grants permission to connect and authenticate to the cluster
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.cluster `KafkaClusterResource.cluster`} 
   */
  Connect = "kafka-cluster:Connect",

  /**
   * Write - Grants permission to create topics on a cluster, equivalent to Apache Kafka's CREATE CLUSTER/TOPIC ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.topic `KafkaClusterResource.topic`} 
   */
  CreateTopic = "kafka-cluster:CreateTopic",

  /**
   * Write - Grants permission to delete groups on a cluster, equivalent to Apache Kafka's DELETE GROUP ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.group `KafkaClusterResource.group`} 
   */
  DeleteGroup = "kafka-cluster:DeleteGroup",

  /**
   * Write - Grants permission to delete topics on a cluster, equivalent to Apache Kafka's DELETE TOPIC ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.topic `KafkaClusterResource.topic`} 
   */
  DeleteTopic = "kafka-cluster:DeleteTopic",

  /**
   * List - Grants permission to describe various aspects of the cluster, equivalent to Apache Kafka's DESCRIBE CLUSTER ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.cluster `KafkaClusterResource.cluster`} 
   */
  DescribeCluster = "kafka-cluster:DescribeCluster",

  /**
   * List - Grants permission to describe the dynamic configuration of a cluster, equivalent to Apache Kafka's DESCRIBE_CONFIGS CLUSTER ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.cluster `KafkaClusterResource.cluster`} 
   */
  DescribeClusterDynamicConfiguration = "kafka-cluster:DescribeClusterDynamicConfiguration",

  /**
   * List - Grants permission to describe groups on a cluster, equivalent to Apache Kafka's DESCRIBE GROUP ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.group `KafkaClusterResource.group`} 
   */
  DescribeGroup = "kafka-cluster:DescribeGroup",

  /**
   * List - Grants permission to describe topics on a cluster, equivalent to Apache Kafka's DESCRIBE TOPIC ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.topic `KafkaClusterResource.topic`} 
   */
  DescribeTopic = "kafka-cluster:DescribeTopic",

  /**
   * List - Grants permission to describe the dynamic configuration of topics on a cluster, equivalent to Apache Kafka's DESCRIBE_CONFIGS TOPIC ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.topic `KafkaClusterResource.topic`} 
   */
  DescribeTopicDynamicConfiguration = "kafka-cluster:DescribeTopicDynamicConfiguration",

  /**
   * List - Grants permission to describe transactional IDs on a cluster, equivalent to Apache Kafka's DESCRIBE TRANSACTIONAL_ID ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.transactionalId `KafkaClusterResource.transactionalId`} 
   */
  DescribeTransactionalId = "kafka-cluster:DescribeTransactionalId",

  /**
   * Read - Grants permission to read data from topics on a cluster, equivalent to Apache Kafka's READ TOPIC ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.topic `KafkaClusterResource.topic`} 
   */
  ReadData = "kafka-cluster:ReadData",

  /**
   * Write - Grants permission to write data to topics on a cluster, equivalent to Apache Kafka's WRITE TOPIC ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.topic `KafkaClusterResource.topic`} 
   */
  WriteData = "kafka-cluster:WriteData",

  /**
   * Write - Grants permission to write data idempotently on a cluster, equivalent to Apache Kafka's IDEMPOTENT_WRITE CLUSTER ACL
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.cluster `KafkaClusterResource.cluster`} 
   */
  WriteDataIdempotently = "kafka-cluster:WriteDataIdempotently",

  /**
   * * - Grant all kafka-cluster permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_apachekafkaapisforamazonmskclusters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KafkaClusterResource.cluster `KafkaClusterResource.cluster`} 
   * - {@link KafkaClusterResource.group `KafkaClusterResource.group`} 
   * - {@link KafkaClusterResource.topic `KafkaClusterResource.topic`} 
   * - {@link KafkaClusterResource.transactionalId `KafkaClusterResource.transactionalId`} 
   */
  All = "kafka-cluster:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_apachekafkaapisforamazonmskclusters.html
 */
export const KafkaClusterResource = {

  /**
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#msk-iam-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource. The resource tag context key will only apply to the cluster resource, not topics, groups and transactional IDs ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cluster: (options: Partial<{partition: string, region: string, account: string, clusterName: string, clusterUuid: string}> = {}) => `arn:${options.partition || '*'}:kafka:${options.region || '*'}:${options.account || '*'}:cluster/${options.clusterName || '*'}/${options.clusterUuid || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#msk-iam-resources
   */
  topic: (options: Partial<{partition: string, region: string, account: string, clusterName: string, clusterUuid: string, topicName: string}> = {}) => `arn:${options.partition || '*'}:kafka:${options.region || '*'}:${options.account || '*'}:topic/${options.clusterName || '*'}/${options.clusterUuid || '*'}/${options.topicName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#msk-iam-resources
   */
  group: (options: Partial<{partition: string, region: string, account: string, clusterName: string, clusterUuid: string, groupName: string}> = {}) => `arn:${options.partition || '*'}:kafka:${options.region || '*'}:${options.account || '*'}:group/${options.clusterName || '*'}/${options.clusterUuid || '*'}/${options.groupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html#msk-iam-resources
   */
  transactionalId: (options: Partial<{partition: string, region: string, account: string, clusterName: string, clusterUuid: string, transactionalId: string}> = {}) => `arn:${options.partition || '*'}:kafka:${options.region || '*'}:${options.account || '*'}:transactional-id/${options.clusterName || '*'}/${options.clusterUuid || '*'}/${options.transactionalId || '*'}`,
}

