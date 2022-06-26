/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotcoredeviceadvisor.html
 */
export enum IotdeviceadvisorAction {

  /**
   * Write - Grants permission to create a suite definition
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_CreateSuiteDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSuiteDefinition = "iotdeviceadvisor:CreateSuiteDefinition",

  /**
   * Write - Grants permission to delete a suite definition
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_DeleteSuiteDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotdeviceadvisorResource.suitedefinition `IotdeviceadvisorResource.suitedefinition`} 
   */
  DeleteSuiteDefinition = "iotdeviceadvisor:DeleteSuiteDefinition",

  /**
   * Read - Grants permission to get a Device Advisor endpoint
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_GetEndpoint.html
   */
  GetEndpoint = "iotdeviceadvisor:GetEndpoint",

  /**
   * Read - Grants permission to get a suite definition
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_GetSuiteDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotdeviceadvisorResource.suitedefinition `IotdeviceadvisorResource.suitedefinition`} 
   */
  GetSuiteDefinition = "iotdeviceadvisor:GetSuiteDefinition",

  /**
   * Read - Grants permission to get a suite run
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_GetSuiteRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotdeviceadvisorResource.suiterun `IotdeviceadvisorResource.suiterun`} 
   */
  GetSuiteRun = "iotdeviceadvisor:GetSuiteRun",

  /**
   * Read - Grants permission to get the qualification report for a suite run
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_GetSuiteRunReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotdeviceadvisorResource.suiterun `IotdeviceadvisorResource.suiterun`} 
   */
  GetSuiteRunReport = "iotdeviceadvisor:GetSuiteRunReport",

  /**
   * List - Grants permission to list suite definitions
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_ListSuiteDefinitions.html
   */
  ListSuiteDefinitions = "iotdeviceadvisor:ListSuiteDefinitions",

  /**
   * List - Grants permission to list suite runs
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_ListSuiteRuns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotdeviceadvisorResource.suitedefinition `IotdeviceadvisorResource.suitedefinition`} 
   */
  ListSuiteRuns = "iotdeviceadvisor:ListSuiteRuns",

  /**
   * Read - Grants permission to list the tags (metadata) assigned to a resource
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotdeviceadvisorResource.suitedefinition `IotdeviceadvisorResource.suitedefinition`} 
   * - {@link IotdeviceadvisorResource.suiterun `IotdeviceadvisorResource.suiterun`} 
   */
  ListTagsForResource = "iotdeviceadvisor:ListTagsForResource",

  /**
   * Write - Grants permission to start a suite run
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_StartSuiteRun.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartSuiteRun = "iotdeviceadvisor:StartSuiteRun",

  /**
   * Write - Grants permission to stop a suite run
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_StopSuiteRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotdeviceadvisorResource.suiterun `IotdeviceadvisorResource.suiterun`} 
   */
  StopSuiteRun = "iotdeviceadvisor:StopSuiteRun",

  /**
   * Tagging - Grants permission to add to or modify the tags of the given resource. Tags are metadata which can be used to manage a resource
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotdeviceadvisorResource.suitedefinition `IotdeviceadvisorResource.suitedefinition`} 
   * - {@link IotdeviceadvisorResource.suiterun `IotdeviceadvisorResource.suiterun`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "iotdeviceadvisor:TagResource",

  /**
   * Tagging - Grants permission to remove the given tags (metadata) from a resource
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotdeviceadvisorResource.suitedefinition `IotdeviceadvisorResource.suitedefinition`} 
   * - {@link IotdeviceadvisorResource.suiterun `IotdeviceadvisorResource.suiterun`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "iotdeviceadvisor:UntagResource",

  /**
   * Write - Grants permission to update a suite definition
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_UpdateSuiteDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotdeviceadvisorResource.suitedefinition `IotdeviceadvisorResource.suitedefinition`} 
   */
  UpdateSuiteDefinition = "iotdeviceadvisor:UpdateSuiteDefinition",

  /**
   * * - Grant all iotdeviceadvisor permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotcoredeviceadvisor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotdeviceadvisorResource.suitedefinition `IotdeviceadvisorResource.suitedefinition`} 
   * - {@link IotdeviceadvisorResource.suiterun `IotdeviceadvisorResource.suiterun`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "iotdeviceadvisor:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotcoredeviceadvisor.html
 */
export const IotdeviceadvisorResource = {

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-workflow.html#device-advisor-workflow-create-suite-definition
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  suitedefinition: (options: Partial<{partition: string, region: string, account: string, suiteDefinitionId: string}> = {}) => `arn:${options.partition || '*'}:iotdeviceadvisor:${options.region || '*'}:${options.account || '*'}:suitedefinition/${options.suiteDefinitionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-workflow.html#device-advisor-workflow-start-suite-run
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  suiterun: (options: Partial<{partition: string, region: string, account: string, suiteDefinitionId: string, suiteRunId: string}> = {}) => `arn:${options.partition || '*'}:iotdeviceadvisor:${options.region || '*'}:${options.account || '*'}:suiterun/${options.suiteDefinitionId || '*'}/${options.suiteRunId || '*'}`,
}

