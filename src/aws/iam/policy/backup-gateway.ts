/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupgateway.html
 */
export enum BackupGatewayAction {

  /**
   * Write - Grants permission to AssociateGatewayToServer
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_AssociateGatewayToServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   * - {@link BackupGatewayResource.hypervisor `BackupGatewayResource.hypervisor`} 
   */
  AssociateGatewayToServer = "backup-gateway:AssociateGatewayToServer",

  /**
   * Write - Grants permission to Backup
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartBackupJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.virtualmachine `BackupGatewayResource.virtualmachine`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  Backup = "backup-gateway:Backup",

  /**
   * Write - Grants permission to to CreateGateway
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_CreateGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateGateway = "backup-gateway:CreateGateway",

  /**
   * Write - Grants permission to DeleteGateway
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_DeleteGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   */
  DeleteGateway = "backup-gateway:DeleteGateway",

  /**
   * Write - Grants permission to DeleteHypervisor
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_DeleteHypervisor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.hypervisor `BackupGatewayResource.hypervisor`} 
   */
  DeleteHypervisor = "backup-gateway:DeleteHypervisor",

  /**
   * Write - Grants permission to DisassociateGatewayFromServer
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_DisassociateGatewayFromServer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   */
  DisassociateGatewayFromServer = "backup-gateway:DisassociateGatewayFromServer",

  /**
   * Read - Grants permission to GetGateway
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_GetGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   */
  GetGateway = "backup-gateway:GetGateway",

  /**
   * Write - Grants permission to ImportHypervisorConfiguration
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ImportHypervisorConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ImportHypervisorConfiguration = "backup-gateway:ImportHypervisorConfiguration",

  /**
   * Read - Grants permission to ListGateways
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html
   */
  ListGateways = "backup-gateway:ListGateways",

  /**
   * Read - Grants permission to ListHypervisors
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListHypervisors.html
   */
  ListHypervisors = "backup-gateway:ListHypervisors",

  /**
   * Read - Grants permission to ListTagsForResource
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   * - {@link BackupGatewayResource.hypervisor `BackupGatewayResource.hypervisor`} 
   * - {@link BackupGatewayResource.virtualmachine `BackupGatewayResource.virtualmachine`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListTagsForResource = "backup-gateway:ListTagsForResource",

  /**
   * Read - Grants permission to ListVirtualMachines
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListVirtualMachines.html
   */
  ListVirtualMachines = "backup-gateway:ListVirtualMachines",

  /**
   * Write - Grants permission to PutMaintenanceStartTime
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_PutMaintenanceStartTime.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   */
  PutMaintenanceStartTime = "backup-gateway:PutMaintenanceStartTime",

  /**
   * Write - Grants permission to Restore
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_StartRestoreJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.hypervisor `BackupGatewayResource.hypervisor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  Restore = "backup-gateway:Restore",

  /**
   * Tagging - Grants permission to TagResource
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   * - {@link BackupGatewayResource.hypervisor `BackupGatewayResource.hypervisor`} 
   * - {@link BackupGatewayResource.virtualmachine `BackupGatewayResource.virtualmachine`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "backup-gateway:TagResource",

  /**
   * Write - Grants permission to TestHypervisorConfiguration
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_TestHypervisorConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   */
  TestHypervisorConfiguration = "backup-gateway:TestHypervisorConfiguration",

  /**
   * Tagging - Grants permission to UntagResource
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   * - {@link BackupGatewayResource.hypervisor `BackupGatewayResource.hypervisor`} 
   * - {@link BackupGatewayResource.virtualmachine `BackupGatewayResource.virtualmachine`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "backup-gateway:UntagResource",

  /**
   * Write - Grants permission to UpdateGatewayInformation
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UpdateGatewayInformation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   */
  UpdateGatewayInformation = "backup-gateway:UpdateGatewayInformation",

  /**
   * Write - Grants permission to UpdateGatewaySoftwareNow
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UpdateGatewaySoftwareNow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   */
  UpdateGatewaySoftwareNow = "backup-gateway:UpdateGatewaySoftwareNow",

  /**
   * Write - Grants permission to UpdateHypervisor
   * @see https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_UpdateHypervisor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   */
  UpdateHypervisor = "backup-gateway:UpdateHypervisor",

  /**
   * * - Grant all backup-gateway permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupgateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BackupGatewayResource.gateway `BackupGatewayResource.gateway`} 
   * - {@link BackupGatewayResource.hypervisor `BackupGatewayResource.hypervisor`} 
   * - {@link BackupGatewayResource.virtualmachine `BackupGatewayResource.virtualmachine`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "backup-gateway:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupgateway.html
 */
export const BackupGatewayResource = {

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupgateway.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  gateway: (options: Partial<{partition: string, account: string, gatewayId: string}> = {}) => `arn:${options.partition || '*'}:backup-gateway::${options.account || '*'}:gateway/${options.gatewayId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupgateway.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  hypervisor: (options: Partial<{partition: string, account: string, hypervisorId: string}> = {}) => `arn:${options.partition || '*'}:backup-gateway::${options.account || '*'}:hypervisor/${options.hypervisorId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbackupgateway.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  virtualmachine: (options: Partial<{partition: string, account: string, virtualmachineId: string}> = {}) => `arn:${options.partition || '*'}:backup-gateway::${options.account || '*'}:vm/${options.virtualmachineId || '*'}`,
}

