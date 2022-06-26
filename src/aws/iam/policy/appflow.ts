/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappflow.html
 */
export enum AppflowAction {

  /**
   * Write - Grants permission to create a login profile to be used with Amazon AppFlow flows
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateConnectorProfile.html
   */
  CreateConnectorProfile = "appflow:CreateConnectorProfile",

  /**
   * Write - Grants permission to create an Amazon AppFlow flow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFlow = "appflow:CreateFlow",

  /**
   * Write - Grants permission to delete a login profile configured in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.connectorprofile `AppflowResource.connectorprofile`} 
   */
  DeleteConnectorProfile = "appflow:DeleteConnectorProfile",

  /**
   * Write - Grants permission to delete an Amazon AppFlow flow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DeleteFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteFlow = "appflow:DeleteFlow",

  /**
   * Read - Grants permission to describe a connector registered in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.connector `AppflowResource.connector`} 
   */
  DescribeConnector = "appflow:DescribeConnector",

  /**
   * Read - Grants permission to describe all fields for an object in a login profile configured in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorEntity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.connectorprofile `AppflowResource.connectorprofile`} 
   */
  DescribeConnectorEntity = "appflow:DescribeConnectorEntity",

  /**
   * Read - Grants permission to describe all fields for an object in a login profile configured in Amazon AppFlow (Console Only)
   * @see https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.connectorprofile `AppflowResource.connectorprofile`} 
   */
  DescribeConnectorFields = "appflow:DescribeConnectorFields",

  /**
   * Read - Grants permission to describe all login profiles configured in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html
   */
  DescribeConnectorProfiles = "appflow:DescribeConnectorProfiles",

  /**
   * Read - Grants permission to describe all connectors supported by Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectors.html
   */
  DescribeConnectors = "appflow:DescribeConnectors",

  /**
   * Read - Grants permission to describe a specific flow configured in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlow.html
   */
  DescribeFlow = "appflow:DescribeFlow",

  /**
   * Read - Grants permission to describe all flow executions for a flow configured in Amazon AppFlow (Console Only)
   * @see https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   */
  DescribeFlowExecution = "appflow:DescribeFlowExecution",

  /**
   * Read - Grants permission to describe all flow executions for a flow configured in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlowExecutionRecords.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   */
  DescribeFlowExecutionRecords = "appflow:DescribeFlowExecutionRecords",

  /**
   * Read - Grants permission to describe all flows configured in Amazon AppFlow (Console Only)
   * @see https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  DescribeFlows = "appflow:DescribeFlows",

  /**
   * List - Grants permission to list all objects for a login profile configured in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListConnectorEntities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.connectorprofile `AppflowResource.connectorprofile`} 
   */
  ListConnectorEntities = "appflow:ListConnectorEntities",

  /**
   * Read - Grants permission to list all objects for a login profile configured in Amazon AppFlow (Console Only)
   * @see https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.connectorprofile `AppflowResource.connectorprofile`} 
   */
  ListConnectorFields = "appflow:ListConnectorFields",

  /**
   * List - Grants permission to list all connectors supported in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListConnectors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.connector `AppflowResource.connector`} 
   */
  ListConnectors = "appflow:ListConnectors",

  /**
   * List - Grants permission to list all flows configured in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListFlows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   */
  ListFlows = "appflow:ListFlows",

  /**
   * Read - Grants permission to list tags for a flow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   */
  ListTagsForResource = "appflow:ListTagsForResource",

  /**
   * Write - Grants permission to register an Amazon AppFlow connector
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_RegisterConnector.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RegisterConnector = "appflow:RegisterConnector",

  /**
   * Write - Grants permission to run a flow configured in Amazon AppFlow (Console Only)
   * @see https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   */
  RunFlow = "appflow:RunFlow",

  /**
   * Write - Grants permission to activate (for scheduled and event-triggered flows) or run (for on-demand flows) a flow configured in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StartFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   */
  StartFlow = "appflow:StartFlow",

  /**
   * Write - Grants permission to deactivate a scheduled or event-triggered flow configured in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StopFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   */
  StopFlow = "appflow:StopFlow",

  /**
   * Tagging - Grants permission to tag a flow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "appflow:TagResource",

  /**
   * Write - Grants permission to un-register a connector in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UnRegisterConnector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.connector `AppflowResource.connector`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UnRegisterConnector = "appflow:UnRegisterConnector",

  /**
   * Tagging - Grants permission to untag a flow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "appflow:UntagResource",

  /**
   * Write - Grants permission to update a login profile configured in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateConnectorProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.connectorprofile `AppflowResource.connectorprofile`} 
   */
  UpdateConnectorProfile = "appflow:UpdateConnectorProfile",

  /**
   * Write - Grants permission to update a flow configured in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateFlow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   */
  UpdateFlow = "appflow:UpdateFlow",

  /**
   * Write - Grants permission to use a connector profile while creating a flow in Amazon AppFlow
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UseConnectorProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.connectorprofile `AppflowResource.connectorprofile`} 
   */
  UseConnectorProfile = "appflow:UseConnectorProfile",

  /**
   * * - Grant all appflow permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppflowResource.connectorprofile `AppflowResource.connectorprofile`} 
   * - {@link AppflowResource.flow `AppflowResource.flow`} 
   * - {@link AppflowResource.connector `AppflowResource.connector`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "appflow:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappflow.html
 */
export const AppflowResource = {

  /**
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ConnectorProfile.html
   */
  connectorprofile: (options: Partial<{partition: string, region: string, account: string, profileName: string}> = {}) => `arn:${options.partition || '*'}:appflow:${options.region || '*'}:${options.account || '*'}:connectorprofile/${options.profileName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_FlowDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  flow: (options: Partial<{partition: string, region: string, account: string, flowName: string}> = {}) => `arn:${options.partition || '*'}:appflow:${options.region || '*'}:${options.account || '*'}:flow/${options.flowName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ConnectorDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  connector: (options: Partial<{partition: string, region: string, account: string, connectorLabel: string}> = {}) => `arn:${options.partition || '*'}:appflow:${options.region || '*'}:${options.account || '*'}:connector/${options.connectorLabel || '*'}`,
}

