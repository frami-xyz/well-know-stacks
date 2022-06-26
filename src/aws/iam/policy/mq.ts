/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmq.html
 */
export enum MqAction {

  /**
   * Write - Grants permission to create a broker
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-post
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateBroker = "mq:CreateBroker",

  /**
   * Write - Grants permission to create a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and engine version)
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-post
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConfiguration = "mq:CreateConfiguration",

  /**
   * Tagging - Grants permission to create tags
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-post
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   * - {@link MqResource.configurations `MqResource.configurations`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTags = "mq:CreateTags",

  /**
   * Write - Grants permission to create an ActiveMQ user
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-post
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   */
  CreateUser = "mq:CreateUser",

  /**
   * Write - Grants permission to delete a broker
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-delete
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   */
  DeleteBroker = "mq:DeleteBroker",

  /**
   * Tagging - Grants permission to delete tags
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-delete
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   * - {@link MqResource.configurations `MqResource.configurations`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteTags = "mq:DeleteTags",

  /**
   * Write - Grants permission to delete an ActiveMQ user
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-delete
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   */
  DeleteUser = "mq:DeleteUser",

  /**
   * Read - Grants permission to return information about the specified broker
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   */
  DescribeBroker = "mq:DescribeBroker",

  /**
   * Read - Grants permission to return information about broker engines
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-engine-types.html#broker-engine-types-http-methods
   */
  DescribeBrokerEngineTypes = "mq:DescribeBrokerEngineTypes",

  /**
   * Read - Grants permission to return information about the broker instance options
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-instance-options.html#broker-engine-types-http-methods
   */
  DescribeBrokerInstanceOptions = "mq:DescribeBrokerInstanceOptions",

  /**
   * Read - Grants permission to return information about the specified configuration
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-get
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.configurations `MqResource.configurations`} 
   */
  DescribeConfiguration = "mq:DescribeConfiguration",

  /**
   * Read - Grants permission to return the specified configuration revision for the specified configuration
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration-revision.html#rest-api-configuration-revision-methods-get
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.configurations `MqResource.configurations`} 
   */
  DescribeConfigurationRevision = "mq:DescribeConfigurationRevision",

  /**
   * Read - Grants permission to return information about an ActiveMQ user
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-get
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   */
  DescribeUser = "mq:DescribeUser",

  /**
   * List - Grants permission to return a list of all brokers
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-get
   */
  ListBrokers = "mq:ListBrokers",

  /**
   * List - Grants permission to return a list of all existing revisions for the specified configuration
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-revisions.html#rest-api-revisions-methods-get
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.configurations `MqResource.configurations`} 
   */
  ListConfigurationRevisions = "mq:ListConfigurationRevisions",

  /**
   * List - Grants permission to return a list of all configurations
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-get
   */
  ListConfigurations = "mq:ListConfigurations",

  /**
   * List - Grants permission to return a list of tags
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-get
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   * - {@link MqResource.configurations `MqResource.configurations`} 
   */
  ListTags = "mq:ListTags",

  /**
   * List - Grants permission to return a list of all ActiveMQ users
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-users.html#rest-api-users-methods-get
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   */
  ListUsers = "mq:ListUsers",

  /**
   * Write - Grants permission to reboot a broker
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-restart.html#rest-api-reboot-methods-post
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   */
  RebootBroker = "mq:RebootBroker",

  /**
   * Write - Grants permission to add a pending configuration change to a broker
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   */
  UpdateBroker = "mq:UpdateBroker",

  /**
   * Write - Grants permission to update the specified configuration
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-put
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.configurations `MqResource.configurations`} 
   */
  UpdateConfiguration = "mq:UpdateConfiguration",

  /**
   * Write - Grants permission to update the information for an ActiveMQ user
   * @see https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-put
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   */
  UpdateUser = "mq:UpdateUser",

  /**
   * * - Grant all mq permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmq.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MqResource.brokers `MqResource.brokers`} 
   * - {@link MqResource.configurations `MqResource.configurations`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "mq:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmq.html
 */
export const MqResource = {

  /**
   * @see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-how-it-works.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  brokers: (options: Partial<{partition: string, region: string, account: string, brokerId: string}> = {}) => `arn:${options.partition || '*'}:mq:${options.region || '*'}:${options.account || '*'}:broker:${options.brokerId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-how-it-works.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  configurations: (options: Partial<{partition: string, region: string, account: string, configurationId: string}> = {}) => `arn:${options.partition || '*'}:mq:${options.region || '*'}:${options.account || '*'}:configuration:${options.configurationId || '*'}`,
}

