/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconfig.html
 */
export enum ConfigAction {

  /**
   * Read - Grants permission to return the current configuration items for resources that are present in your AWS Config aggregator
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetAggregateResourceConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  BatchGetAggregateResourceConfig = "config:BatchGetAggregateResourceConfig",

  /**
   * Read - Grants permission to return the current configuration for one or more requested resources
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetResourceConfig.html
   */
  BatchGetResourceConfig = "config:BatchGetResourceConfig",

  /**
   * Write - Grants permission to delete the authorization granted to the specified configuration aggregator account in a specified region
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteAggregationAuthorization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.aggregationAuthorization `ConfigResource.aggregationAuthorization`} 
   */
  DeleteAggregationAuthorization = "config:DeleteAggregationAuthorization",

  /**
   * Write - Grants permission to delete the specified AWS Config rule and all of its evaluation results
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   */
  DeleteConfigRule = "config:DeleteConfigRule",

  /**
   * Write - Grants permission to delete the specified configuration aggregator and the aggregated data associated with the aggregator
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationAggregator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  DeleteConfigurationAggregator = "config:DeleteConfigurationAggregator",

  /**
   * Write - Grants permission to delete the configuration recorder
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html
   */
  DeleteConfigurationRecorder = "config:DeleteConfigurationRecorder",

  /**
   * Write - Grants permission to delete the specified conformance pack and all the AWS Config rules and all evaluation results within that conformance pack
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConformancePack.html
   */
  DeleteConformancePack = "config:DeleteConformancePack",

  /**
   * Write - Grants permission to delete the delivery channel
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html
   */
  DeleteDeliveryChannel = "config:DeleteDeliveryChannel",

  /**
   * Write - Grants permission to delete the evaluation results for the specified Config rule
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteEvaluationResults.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   */
  DeleteEvaluationResults = "config:DeleteEvaluationResults",

  /**
   * Write - Grants permission to delete the specified organization config rule and all of its evaluation results from all member accounts in that organization
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConfigRule.html
   */
  DeleteOrganizationConfigRule = "config:DeleteOrganizationConfigRule",

  /**
   * Write - Grants permission to delete the specified organization conformance pack and all of its evaluation results from all member accounts in that organization
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConformancePack.html
   */
  DeleteOrganizationConformancePack = "config:DeleteOrganizationConformancePack",

  /**
   * Write - Grants permission to delete pending authorization requests for a specified aggregator account in a specified region
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeletePendingAggregationRequest.html
   */
  DeletePendingAggregationRequest = "config:DeletePendingAggregationRequest",

  /**
   * Write - Grants permission to delete the remediation configuration
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.remediationConfiguration `ConfigResource.remediationConfiguration`} 
   */
  DeleteRemediationConfiguration = "config:DeleteRemediationConfiguration",

  /**
   * Write - Grants permission to delete one or more remediation exceptions for specific resource keys for a specific AWS Config Rule
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationExceptions.html
   */
  DeleteRemediationExceptions = "config:DeleteRemediationExceptions",

  /**
   * Write - Grants permission to record the configuration state for a custom resource that has been deleted
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteResourceConfig.html
   */
  DeleteResourceConfig = "config:DeleteResourceConfig",

  /**
   * Write - Grants permission to delete the retention configuration
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRetentionConfiguration.html
   */
  DeleteRetentionConfiguration = "config:DeleteRetentionConfiguration",

  /**
   * Write - Grants permission to delete the stored query for an AWS account in an AWS Region
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteStoredQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.storedQuery `ConfigResource.storedQuery`} 
   */
  DeleteStoredQuery = "config:DeleteStoredQuery",

  /**
   * Read - Grants permission to schedule delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DeliverConfigSnapshot.html
   */
  DeliverConfigSnapshot = "config:DeliverConfigSnapshot",

  /**
   * Read - Grants permission to return a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregateComplianceByConfigRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  DescribeAggregateComplianceByConfigRules = "config:DescribeAggregateComplianceByConfigRules",

  /**
   * Read - Grants permission to return a list of compliant and noncompliant conformance packs along with count of compliant, non-compliant and total rules within each conformance pack
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregateComplianceByConformancePacks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  DescribeAggregateComplianceByConformancePacks = "config:DescribeAggregateComplianceByConformancePacks",

  /**
   * List - Grants permission to return a list of authorizations granted to various aggregator accounts and regions
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregationAuthorizations.html
   */
  DescribeAggregationAuthorizations = "config:DescribeAggregationAuthorizations",

  /**
   * Read - Grants permission to indicate whether the specified AWS Config rules are compliant
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByConfigRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   */
  DescribeComplianceByConfigRule = "config:DescribeComplianceByConfigRule",

  /**
   * Read - Grants permission to indicate whether the specified AWS resources are compliant
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByResource.html
   */
  DescribeComplianceByResource = "config:DescribeComplianceByResource",

  /**
   * Read - Grants permission to return status information for each of your AWS managed Config rules
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRuleEvaluationStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   */
  DescribeConfigRuleEvaluationStatus = "config:DescribeConfigRuleEvaluationStatus",

  /**
   * List - Grants permission to return details about your AWS Config rules
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   */
  DescribeConfigRules = "config:DescribeConfigRules",

  /**
   * Read - Grants permission to return status information for sources within an aggregator
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregatorSourcesStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  DescribeConfigurationAggregatorSourcesStatus = "config:DescribeConfigurationAggregatorSourcesStatus",

  /**
   * List - Grants permission to return the details of one or more configuration aggregators
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregators.html
   */
  DescribeConfigurationAggregators = "config:DescribeConfigurationAggregators",

  /**
   * Read - Grants permission to return the current status of the specified configuration recorder
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html
   */
  DescribeConfigurationRecorderStatus = "config:DescribeConfigurationRecorderStatus",

  /**
   * List - Grants permission to return the names of one or more specified configuration recorders
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html
   */
  DescribeConfigurationRecorders = "config:DescribeConfigurationRecorders",

  /**
   * Read - Grants permission to return compliance information for each rule in that conformance pack
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackCompliance.html
   */
  DescribeConformancePackCompliance = "config:DescribeConformancePackCompliance",

  /**
   * Read - Grants permission to provide one or more conformance packs deployment status
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackStatus.html
   */
  DescribeConformancePackStatus = "config:DescribeConformancePackStatus",

  /**
   * List - Grants permission to return a list of one or more conformance packs
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePacks.html
   */
  DescribeConformancePacks = "config:DescribeConformancePacks",

  /**
   * Read - Grants permission to return the current status of the specified delivery channel
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannelStatus.html
   */
  DescribeDeliveryChannelStatus = "config:DescribeDeliveryChannelStatus",

  /**
   * List - Grants permission to return details about the specified delivery channel
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannels.html
   */
  DescribeDeliveryChannels = "config:DescribeDeliveryChannels",

  /**
   * Read - Grants permission to provide organization config rule deployment status for an organization
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRuleStatuses.html
   */
  DescribeOrganizationConfigRuleStatuses = "config:DescribeOrganizationConfigRuleStatuses",

  /**
   * List - Grants permission to return a list of organization config rules
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRules.html
   */
  DescribeOrganizationConfigRules = "config:DescribeOrganizationConfigRules",

  /**
   * Read - Grants permission to provide organization conformance pack deployment status for an organization
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePackStatuses.html
   */
  DescribeOrganizationConformancePackStatuses = "config:DescribeOrganizationConformancePackStatuses",

  /**
   * List - Grants permission to return a list of organization conformance packs
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePacks.html
   */
  DescribeOrganizationConformancePacks = "config:DescribeOrganizationConformancePacks",

  /**
   * List - Grants permission to return a list of all pending aggregation requests
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribePendingAggregationRequests.html
   */
  DescribePendingAggregationRequests = "config:DescribePendingAggregationRequests",

  /**
   * List - Grants permission to return the details of one or more remediation configurations
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationConfigurations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.remediationConfiguration `ConfigResource.remediationConfiguration`} 
   */
  DescribeRemediationConfigurations = "config:DescribeRemediationConfigurations",

  /**
   * List - Grants permission to return the details of one or more remediation exceptions
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExceptions.html
   */
  DescribeRemediationExceptions = "config:DescribeRemediationExceptions",

  /**
   * Read - Grants permission to provide a detailed view of a Remediation Execution for a set of resources including state, timestamps and any error messages for steps that have failed
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExecutionStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.remediationConfiguration `ConfigResource.remediationConfiguration`} 
   */
  DescribeRemediationExecutionStatus = "config:DescribeRemediationExecutionStatus",

  /**
   * List - Grants permission to return the details of one or more retention configurations
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRetentionConfigurations.html
   */
  DescribeRetentionConfigurations = "config:DescribeRetentionConfigurations",

  /**
   * Read - Grants permission to return the evaluation results for the specified AWS Config rule for a specific resource in a rule
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateComplianceDetailsByConfigRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  GetAggregateComplianceDetailsByConfigRule = "config:GetAggregateComplianceDetailsByConfigRule",

  /**
   * Read - Grants permission to return the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateConfigRuleComplianceSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  GetAggregateConfigRuleComplianceSummary = "config:GetAggregateConfigRuleComplianceSummary",

  /**
   * Read - Grants permission to return the number of compliant and noncompliant conformance packs for one or more accounts and regions in an aggregator
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateConformancePackComplianceSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  GetAggregateConformancePackComplianceSummary = "config:GetAggregateConformancePackComplianceSummary",

  /**
   * Read - Grants permission to return the resource counts across accounts and regions that are present in your AWS Config aggregator
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateDiscoveredResourceCounts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  GetAggregateDiscoveredResourceCounts = "config:GetAggregateDiscoveredResourceCounts",

  /**
   * Read - Grants permission to return configuration item that is aggregated for your specific resource in a specific source account and region
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateResourceConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  GetAggregateResourceConfig = "config:GetAggregateResourceConfig",

  /**
   * Read - Grants permission to return the evaluation results for the specified AWS Config rule
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByConfigRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   */
  GetComplianceDetailsByConfigRule = "config:GetComplianceDetailsByConfigRule",

  /**
   * Read - Grants permission to return the evaluation results for the specified AWS resource
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html
   */
  GetComplianceDetailsByResource = "config:GetComplianceDetailsByResource",

  /**
   * Read - Grants permission to return the number of AWS Config rules that are compliant and noncompliant, up to a maximum of 25 for each
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByConfigRule.html
   */
  GetComplianceSummaryByConfigRule = "config:GetComplianceSummaryByConfigRule",

  /**
   * Read - Grants permission to return the number of resources that are compliant and the number that are noncompliant
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByResourceType.html
   */
  GetComplianceSummaryByResourceType = "config:GetComplianceSummaryByResourceType",

  /**
   * Read - Grants permission to return compliance details of a conformance pack for all AWS resources that are monitered by conformance pack
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceDetails.html
   */
  GetConformancePackComplianceDetails = "config:GetConformancePackComplianceDetails",

  /**
   * Read - Grants permission to provide compliance summary for one or more conformance packs
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceSummary.html
   */
  GetConformancePackComplianceSummary = "config:GetConformancePackComplianceSummary",

  /**
   * Read - Grants permission to return the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetDiscoveredResourceCounts.html
   */
  GetDiscoveredResourceCounts = "config:GetDiscoveredResourceCounts",

  /**
   * Read - Grants permission to return detailed status for each member account within an organization for a given organization config rule
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConfigRuleDetailedStatus.html
   */
  GetOrganizationConfigRuleDetailedStatus = "config:GetOrganizationConfigRuleDetailedStatus",

  /**
   * Read - Grants permission to return detailed status for each member account within an organization for a given organization conformance pack
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConformancePackDetailedStatus.html
   */
  GetOrganizationConformancePackDetailedStatus = "config:GetOrganizationConformancePackDetailedStatus",

  /**
   * Read - Grants permission to return a list of configuration items for the specified resource
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceConfigHistory.html
   */
  GetResourceConfigHistory = "config:GetResourceConfigHistory",

  /**
   * Read - Grants permission to return the details of a specific stored query
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_GetStoredQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.storedQuery `ConfigResource.storedQuery`} 
   */
  GetStoredQuery = "config:GetStoredQuery",

  /**
   * List - Grants permission to accept a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_ListAggregateDiscoveredResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  ListAggregateDiscoveredResources = "config:ListAggregateDiscoveredResources",

  /**
   * List - Grants permission to accept a resource type and returns a list of resource identifiers for the resources of that type
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_ListDiscoveredResources.html
   */
  ListDiscoveredResources = "config:ListDiscoveredResources",

  /**
   * List - Grants permission to list the stored queries for an AWS account in an AWS Region
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_ListStoredQueries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.storedQuery `ConfigResource.storedQuery`} 
   */
  ListStoredQueries = "config:ListStoredQueries",

  /**
   * Read - Grants permission to list the tags for AWS Config resource
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.aggregationAuthorization `ConfigResource.aggregationAuthorization`} 
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   */
  ListTagsForResource = "config:ListTagsForResource",

  /**
   * Write - Grants permission to authorize the aggregator account and region to collect data from the source account and region
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutAggregationAuthorization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.aggregationAuthorization `ConfigResource.aggregationAuthorization`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutAggregationAuthorization = "config:PutAggregationAuthorization",

  /**
   * Write - Grants permission to add or update an AWS Config rule for evaluating whether your AWS resources comply with your desired configurations
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutConfigRule = "config:PutConfigRule",

  /**
   * Write - Grants permission to create and update the configuration aggregator with the selected source accounts and regions
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationAggregator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutConfigurationAggregator = "config:PutConfigurationAggregator",

  /**
   * Write - Grants permission to create a new configuration recorder to record the selected resource configurations
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html
   */
  PutConfigurationRecorder = "config:PutConfigurationRecorder",

  /**
   * Write - Grants permission to create or update a conformance pack
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html
   */
  PutConformancePack = "config:PutConformancePack",

  /**
   * Write - Grants permission to create a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutDeliveryChannel.html
   */
  PutDeliveryChannel = "config:PutDeliveryChannel",

  /**
   * Write - Grants permission to be used by an AWS Lambda function to deliver evaluation results to AWS Config
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutEvaluations.html
   */
  PutEvaluations = "config:PutEvaluations",

  /**
   * Write - Grants permission to deliver evaluation result to AWS Config
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutExternalEvaluation.html
   */
  PutExternalEvaluation = "config:PutExternalEvaluation",

  /**
   * Write - Grants permission to add or update organization config rule for your entire organization evaluating whether your AWS resources comply with your desired configurations
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html
   */
  PutOrganizationConfigRule = "config:PutOrganizationConfigRule",

  /**
   * Write - Grants permission to add or update organization conformance pack for your entire organization evaluating whether your AWS resources comply with your desired configurations
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html
   */
  PutOrganizationConformancePack = "config:PutOrganizationConformancePack",

  /**
   * Write - Grants permission to add or update the remediation configuration with a specific AWS Config rule with the selected target or action
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationConfigurations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.remediationConfiguration `ConfigResource.remediationConfiguration`} 
   */
  PutRemediationConfigurations = "config:PutRemediationConfigurations",

  /**
   * Write - Grants permission to add or update remediation exceptions for specific resources for a specific AWS Config rule
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationExceptions.html
   */
  PutRemediationExceptions = "config:PutRemediationExceptions",

  /**
   * Write - Grants permission to record the configuration state for the resource provided in the request
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutResourceConfig.html
   */
  PutResourceConfig = "config:PutResourceConfig",

  /**
   * Write - Grants permission to create and update the retention configuration with details about retention period (number of days) that AWS Config stores your historical information
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutRetentionConfiguration.html
   */
  PutRetentionConfiguration = "config:PutRetentionConfiguration",

  /**
   * Write - Grants permission to save a new query or updates an existing saved query
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.storedQuery `ConfigResource.storedQuery`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutStoredQuery = "config:PutStoredQuery",

  /**
   * Read - Grants permission to accept a structured query language (SQL) SELECT command and an aggregator to query configuration state of AWS resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_SelectAggregateResourceConfig.html
   */
  SelectAggregateResourceConfig = "config:SelectAggregateResourceConfig",

  /**
   * Read - Grants permission to accept a structured query language (SQL) SELECT command, performs the corresponding search, and returns resource configurations matching the properties
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_SelectResourceConfig.html
   */
  SelectResourceConfig = "config:SelectResourceConfig",

  /**
   * Write - Grants permission to evaluate your resources against the specified Config rules
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigRulesEvaluation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   */
  StartConfigRulesEvaluation = "config:StartConfigRulesEvaluation",

  /**
   * Write - Grants permission to start recording configurations of the AWS resources you have selected to record in your AWS account
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html
   */
  StartConfigurationRecorder = "config:StartConfigurationRecorder",

  /**
   * Write - Grants permission to run an on-demand remediation for the specified AWS Config rules against the last known remediation configuration
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_StartRemediationExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.remediationConfiguration `ConfigResource.remediationConfiguration`} 
   */
  StartRemediationExecution = "config:StartRemediationExecution",

  /**
   * Write - Grants permission to stop recording configurations of the AWS resources you have selected to record in your AWS account
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html
   */
  StopConfigurationRecorder = "config:StopConfigurationRecorder",

  /**
   * Tagging - Grants permission to associate the specified tags to a resource with the specified resourceArn
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.aggregationAuthorization `ConfigResource.aggregationAuthorization`} 
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   * - {@link ConfigResource.conformancePack `ConfigResource.conformancePack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "config:TagResource",

  /**
   * Tagging - Grants permission to delete specified tags from a resource
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.aggregationAuthorization `ConfigResource.aggregationAuthorization`} 
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   * - {@link ConfigResource.conformancePack `ConfigResource.conformancePack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "config:UntagResource",

  /**
   * * - Grant all config permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConfigResource.configurationAggregator `ConfigResource.configurationAggregator`} 
   * - {@link ConfigResource.aggregationAuthorization `ConfigResource.aggregationAuthorization`} 
   * - {@link ConfigResource.configRule `ConfigResource.configRule`} 
   * - {@link ConfigResource.remediationConfiguration `ConfigResource.remediationConfiguration`} 
   * - {@link ConfigResource.storedQuery `ConfigResource.storedQuery`} 
   * - {@link ConfigResource.conformancePack `ConfigResource.conformancePack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "config:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconfig.html
 */
export const ConfigResource = {

  /**
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_AggregationAuthorization.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  aggregationAuthorization: (options: Partial<{partition: string, region: string, account: string, aggregatorAccount: string, aggregatorRegion: string}> = {}) => `arn:${options.partition || '*'}:config:${options.region || '*'}:${options.account || '*'}:aggregation-authorization/${options.aggregatorAccount || '*'}/${options.aggregatorRegion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigurationAggregator.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  configurationAggregator: (options: Partial<{partition: string, region: string, account: string, aggregatorId: string}> = {}) => `arn:${options.partition || '*'}:config:${options.region || '*'}:${options.account || '*'}:config-aggregator/${options.aggregatorId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigRule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  configRule: (options: Partial<{partition: string, region: string, account: string, configRuleId: string}> = {}) => `arn:${options.partition || '*'}:config:${options.region || '*'}:${options.account || '*'}:config-rule/${options.configRuleId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_ConformancePack.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  conformancePack: (options: Partial<{partition: string, region: string, account: string, conformancePackName: string, conformancePackId: string}> = {}) => `arn:${options.partition || '*'}:config:${options.region || '*'}:${options.account || '*'}:conformance-pack/${options.conformancePackName || '*'}/${options.conformancePackId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_OrganizationConfigRule.html
   */
  organizationConfigRule: (options: Partial<{partition: string, region: string, account: string, organizationConfigRuleId: string}> = {}) => `arn:${options.partition || '*'}:config:${options.region || '*'}:${options.account || '*'}:organization-config-rule/${options.organizationConfigRuleId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_OrganizationConformancePack.html
   */
  organizationConformancePack: (options: Partial<{partition: string, region: string, account: string, organizationConformancePackId: string}> = {}) => `arn:${options.partition || '*'}:config:${options.region || '*'}:${options.account || '*'}:organization-conformance-pack/${options.organizationConformancePackId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_RemediationConfiguration.html
   */
  remediationConfiguration: (options: Partial<{partition: string, region: string, account: string, remediationConfigurationId: string}> = {}) => `arn:${options.partition || '*'}:config:${options.region || '*'}:${options.account || '*'}:remediation-configuration/${options.remediationConfigurationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/config/latest/APIReference/API_StoredQuery.html
   */
  storedQuery: (options: Partial<{partition: string, region: string, account: string, storedQueryName: string, storedQueryId: string}> = {}) => `arn:${options.partition || '*'}:config:${options.region || '*'}:${options.account || '*'}:stored-query/${options.storedQueryName || '*'}/${options.storedQueryId || '*'}`,
}

