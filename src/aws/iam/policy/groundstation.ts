/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsgroundstation.html
 */
export enum GroundstationAction {

  /**
   * Write - Grants permission to cancel a contact
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CancelContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.contact `GroundstationResource.contact`} 
   */
  CancelContact = "groundstation:CancelContact",

  /**
   * Write - Grants permission to create a configuration
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConfig = "groundstation:CreateConfig",

  /**
   * Write - Grants permission to create a data flow endpoint group
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateDataflowEndpointGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataflowEndpointGroup = "groundstation:CreateDataflowEndpointGroup",

  /**
   * Write - Grants permission to create a mission profile
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateMissionProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMissionProfile = "groundstation:CreateMissionProfile",

  /**
   * Write - Grants permission to delete a config
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.config `GroundstationResource.config`} 
   */
  DeleteConfig = "groundstation:DeleteConfig",

  /**
   * Write - Grants permission to delete a data flow endpoint group
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteDataflowEndpointGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.dataflowEndpointGroup `GroundstationResource.dataflowEndpointGroup`} 
   */
  DeleteDataflowEndpointGroup = "groundstation:DeleteDataflowEndpointGroup",

  /**
   * Write - Grants permission to delete a mission profile
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteMissionProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.missionProfile `GroundstationResource.missionProfile`} 
   */
  DeleteMissionProfile = "groundstation:DeleteMissionProfile",

  /**
   * Read - Grants permission to describe a contact
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DescribeContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.contact `GroundstationResource.contact`} 
   */
  DescribeContact = "groundstation:DescribeContact",

  /**
   * Read - Grants permission to return a configuration
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.config `GroundstationResource.config`} 
   */
  GetConfig = "groundstation:GetConfig",

  /**
   * Read - Grants permission to return a data flow endpoint group
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetDataflowEndpointGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.dataflowEndpointGroup `GroundstationResource.dataflowEndpointGroup`} 
   */
  GetDataflowEndpointGroup = "groundstation:GetDataflowEndpointGroup",

  /**
   * Read - Grants permission to return minutes usage
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMinuteUsage.html
   */
  GetMinuteUsage = "groundstation:GetMinuteUsage",

  /**
   * Read - Grants permission to retrieve a mission profile
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMissionProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.missionProfile `GroundstationResource.missionProfile`} 
   */
  GetMissionProfile = "groundstation:GetMissionProfile",

  /**
   * Read - Grants permission to return information about a satellite
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetSatellite.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.satellite `GroundstationResource.satellite`} 
   */
  GetSatellite = "groundstation:GetSatellite",

  /**
   * List - Grants permission to return a list of past configurations
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListConfigs.html
   */
  ListConfigs = "groundstation:ListConfigs",

  /**
   * List - Grants permission to return a list of contacts
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListContacts.html
   */
  ListContacts = "groundstation:ListContacts",

  /**
   * List - Grants permission to list data flow endpoint groups
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListDataflowEndpointGroups.html
   */
  ListDataflowEndpointGroups = "groundstation:ListDataflowEndpointGroups",

  /**
   * List - Grants permission to list ground stations
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListGroundStations.html
   */
  ListGroundStations = "groundstation:ListGroundStations",

  /**
   * List - Grants permission to return a list of mission profiles
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListMissionProfiles.html
   */
  ListMissionProfiles = "groundstation:ListMissionProfiles",

  /**
   * List - Grants permission to list satellites
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListSatellites.html
   */
  ListSatellites = "groundstation:ListSatellites",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.config `GroundstationResource.config`} 
   * - {@link GroundstationResource.contact `GroundstationResource.contact`} 
   * - {@link GroundstationResource.dataflowEndpointGroup `GroundstationResource.dataflowEndpointGroup`} 
   * - {@link GroundstationResource.missionProfile `GroundstationResource.missionProfile`} 
   */
  ListTagsForResource = "groundstation:ListTagsForResource",

  /**
   * Write - Grants permission to reserve a contact
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ReserveContact.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ReserveContact = "groundstation:ReserveContact",

  /**
   * Tagging - Grants permission to assign a resource tag
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.config `GroundstationResource.config`} 
   * - {@link GroundstationResource.contact `GroundstationResource.contact`} 
   * - {@link GroundstationResource.dataflowEndpointGroup `GroundstationResource.dataflowEndpointGroup`} 
   * - {@link GroundstationResource.missionProfile `GroundstationResource.missionProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "groundstation:TagResource",

  /**
   * Tagging - Grants permission to deassign a resource tag
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.config `GroundstationResource.config`} 
   * - {@link GroundstationResource.contact `GroundstationResource.contact`} 
   * - {@link GroundstationResource.dataflowEndpointGroup `GroundstationResource.dataflowEndpointGroup`} 
   * - {@link GroundstationResource.missionProfile `GroundstationResource.missionProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "groundstation:UntagResource",

  /**
   * Write - Grants permission to update a configuration
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.config `GroundstationResource.config`} 
   */
  UpdateConfig = "groundstation:UpdateConfig",

  /**
   * Write - Grants permission to update a mission profile
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateMissionProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.missionProfile `GroundstationResource.missionProfile`} 
   */
  UpdateMissionProfile = "groundstation:UpdateMissionProfile",

  /**
   * * - Grant all groundstation permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsgroundstation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GroundstationResource.contact `GroundstationResource.contact`} 
   * - {@link GroundstationResource.config `GroundstationResource.config`} 
   * - {@link GroundstationResource.dataflowEndpointGroup `GroundstationResource.dataflowEndpointGroup`} 
   * - {@link GroundstationResource.missionProfile `GroundstationResource.missionProfile`} 
   * - {@link GroundstationResource.satellite `GroundstationResource.satellite`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "groundstation:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsgroundstation.html
 */
export const GroundstationResource = {

  /**
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ConfigListItem.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `groundstation:ConfigId`: Filters access by the ID of a config ({@link https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateConfig.html#groundstation-CreateConfig-response-configId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `groundstation:ConfigType`: Filters access by the type of a config ({@link https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateConfig.html#groundstation-CreateConfig-response-configType documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  config: (options: Partial<{partition: string, region: string, account: string, configType: string, configId: string}> = {}) => `arn:${options.partition || '*'}:groundstation:${options.region || '*'}:${options.account || '*'}:config/${options.configType || '*'}/${options.configId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ContactData.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `groundstation:ContactId`: Filters access by the ID of a contact ({@link https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ReserveContact.html#groundstation-ReserveContact-response-contactId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  contact: (options: Partial<{partition: string, region: string, account: string, contactId: string}> = {}) => `arn:${options.partition || '*'}:groundstation:${options.region || '*'}:${options.account || '*'}:contact/${options.contactId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DataflowEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `groundstation:DataflowEndpointGroupId`: Filters access by the ID of a dataflow endpoint group ({@link https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateDataflowEndpointGroup.html#groundstation-CreateDataflowEndpointGroup-response-dataflowEndpointGroupId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataflowEndpointGroup: (options: Partial<{partition: string, region: string, account: string, dataflowEndpointGroupId: string}> = {}) => `arn:${options.partition || '*'}:groundstation:${options.region || '*'}:${options.account || '*'}:dataflow-endpoint-group/${options.dataflowEndpointGroupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GroundStationData.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `groundstation:GroundStationId`: Filters access by the ID of a ground station ({@link https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GroundStationData.html#groundstation-Type-GroundStationData-groundStationId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  groundStationResource: (options: Partial<{partition: string, region: string, account: string, groundStationId: string}> = {}) => `arn:${options.partition || '*'}:groundstation:${options.region || '*'}:${options.account || '*'}:groundstation:${options.groundStationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_MissionProfileListItem.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `groundstation:MissionProfileId`: Filters access by the ID of a mission profile ({@link https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateMissionProfile.html#groundstation-CreateMissionProfile-response-missionProfileId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  missionProfile: (options: Partial<{partition: string, region: string, account: string, missionProfileId: string}> = {}) => `arn:${options.partition || '*'}:groundstation:${options.region || '*'}:${options.account || '*'}:mission-profile/${options.missionProfileId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ground-station/latest/APIReference/API_SatelliteListItem.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `groundstation:SatelliteId`: Filters access by the ID of a satellite ({@link https://docs.aws.amazon.com/ground-station/latest/APIReference/API_SatelliteListItem.html#groundstation-Type-SatelliteListItem-satelliteId documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  satellite: (options: Partial<{partition: string, region: string, account: string, satelliteId: string}> = {}) => `arn:${options.partition || '*'}:groundstation:${options.region || '*'}:${options.account || '*'}:satellite/${options.satelliteId || '*'}`,
}

