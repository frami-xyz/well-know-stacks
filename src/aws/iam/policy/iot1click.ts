/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot1-click.html
 */
export enum Iot1clickAction {

  /**
   * Write - Grants permission to associate a device to a placement
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_AssociateDeviceWithPlacement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  AssociateDeviceWithPlacement = "iot1click:AssociateDeviceWithPlacement",

  /**
   * Read - Grants permission to claim a batch of devices with a claim code
   * @see https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/claims-claimcode.html
   */
  ClaimDevicesByClaimCode = "iot1click:ClaimDevicesByClaimCode",

  /**
   * Write - Grants permission to create a new placement in a project
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreatePlacement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  CreatePlacement = "iot1click:CreatePlacement",

  /**
   * Write - Grants permission to create a new project
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_CreateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProject = "iot1click:CreateProject",

  /**
   * Write - Grants permission to delete a placement from a project
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeletePlacement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  DeletePlacement = "iot1click:DeletePlacement",

  /**
   * Write - Grants permission to delete a project
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DeleteProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  DeleteProject = "iot1click:DeleteProject",

  /**
   * Read - Grants permission to describe a device
   * @see https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   */
  DescribeDevice = "iot1click:DescribeDevice",

  /**
   * Read - Grants permission to describe a placement
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribePlacement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  DescribePlacement = "iot1click:DescribePlacement",

  /**
   * Read - Grants permission to describe a project
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DescribeProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  DescribeProject = "iot1click:DescribeProject",

  /**
   * Write - Grants permission to disassociate a device from a placement
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_DissacociateDeviceFromPlacement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  DisassociateDeviceFromPlacement = "iot1click:DisassociateDeviceFromPlacement",

  /**
   * Read - Grants permission to finalize a device claim
   * @see https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-finalize-claim.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  FinalizeDeviceClaim = "iot1click:FinalizeDeviceClaim",

  /**
   * Read - Grants permission to get available methods of a device
   * @see https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   */
  GetDeviceMethods = "iot1click:GetDeviceMethods",

  /**
   * Read - Grants permission to get devices associated to a placement
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_GetDevicesInPlacement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  GetDevicesInPlacement = "iot1click:GetDevicesInPlacement",

  /**
   * Read - Grants permission to initialize a device claim
   * @see https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-initiate-claim.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   */
  InitiateDeviceClaim = "iot1click:InitiateDeviceClaim",

  /**
   * Write - Grants permission to invoke a device method
   * @see https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-methods.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   */
  InvokeDeviceMethod = "iot1click:InvokeDeviceMethod",

  /**
   * Read - Grants permission to list past events published by a device
   * @see https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-events.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   */
  ListDeviceEvents = "iot1click:ListDeviceEvents",

  /**
   * List - Grants permission to list all devices
   * @see https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices.html
   */
  ListDevices = "iot1click:ListDevices",

  /**
   * Read - Grants permission to list placements in a project
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListPlacements.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  ListPlacements = "iot1click:ListPlacements",

  /**
   * List - Grants permission to list all projects
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListProjects.html
   */
  ListProjects = "iot1click:ListProjects",

  /**
   * Read - Grants permission to lists the tags for a resource
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  ListTagsForResource = "iot1click:ListTagsForResource",

  /**
   * Tagging - Grants permission to add or modify the tags of a resource
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "iot1click:TagResource",

  /**
   * Read - Grants permission to unclaim a device
   * @see https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-unclaim.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   */
  UnclaimDevice = "iot1click:UnclaimDevice",

  /**
   * Tagging - Grants permission to remove the given tags (metadata) from a resource
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "iot1click:UntagResource",

  /**
   * Write - Grants permission to update device state
   * @see https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid-state.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   */
  UpdateDeviceState = "iot1click:UpdateDeviceState",

  /**
   * Write - Grants permission to update a placement
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdatePlacement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  UpdatePlacement = "iot1click:UpdatePlacement",

  /**
   * Write - Update a project
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_UpdateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   */
  UpdateProject = "iot1click:UpdateProject",

  /**
   * * - Grant all iot1click permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot1-click.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Iot1clickResource.project `Iot1clickResource.project`} 
   * - {@link Iot1clickResource.device `Iot1clickResource.device`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "iot1click:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot1-click.html
 */
export const Iot1clickResource = {

  /**
   * @see https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/resources.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  device: (options: Partial<{partition: string, region: string, account: string, deviceId: string}> = {}) => `arn:${options.partition || '*'}:iot1click:${options.region || '*'}:${options.account || '*'}:devices/${options.deviceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-1-click/latest/projects-apireference/API_Operations.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  project: (options: Partial<{partition: string, region: string, account: string, projectName: string}> = {}) => `arn:${options.partition || '*'}:iot1click:${options.region || '*'}:${options.account || '*'}:projects/${options.projectName || '*'}`,
}

