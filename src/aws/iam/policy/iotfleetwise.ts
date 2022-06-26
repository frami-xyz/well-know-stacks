/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html
 */
export enum IotfleetwiseAction {

  /**
   * Write - Grants permission to associate the given vehicle to a fleet
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_AssociateVehicle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.fleet `IotfleetwiseResource.fleet`} 
   * - {@link IotfleetwiseResource.vehicle `IotfleetwiseResource.vehicle`} 
   */
  AssociateVehicle = "iotfleetwise:AssociateVehicle",

  /**
   * Write - Grants permission to create a campaign
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_CreateCampaign.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.fleet `IotfleetwiseResource.fleet`} 
   * - {@link IotfleetwiseResource.signalcatalog `IotfleetwiseResource.signalcatalog`} 
   * - {@link IotfleetwiseResource.vehicle `IotfleetwiseResource.vehicle`} 
   */
  CreateCampaign = "iotfleetwise:CreateCampaign",

  /**
   * Write - Grants permission to create a decoder manifest for an existing model
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_CreateDecoderManifest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.modelmanifest `IotfleetwiseResource.modelmanifest`} 
   */
  CreateDecoderManifest = "iotfleetwise:CreateDecoderManifest",

  /**
   * Write - Grants permission to create a fleet
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_CreateFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.signalcatalog `IotfleetwiseResource.signalcatalog`} 
   */
  CreateFleet = "iotfleetwise:CreateFleet",

  /**
   * Write - Grants permission to create a model manifest definition
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_CreateModelManifest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.signalcatalog `IotfleetwiseResource.signalcatalog`} 
   */
  CreateModelManifest = "iotfleetwise:CreateModelManifest",

  /**
   * Write - Grants permission to create a signal catalog
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_CreateSignalCatalog.html
   */
  CreateSignalCatalog = "iotfleetwise:CreateSignalCatalog",

  /**
   * Write - Grants permission to create a vehicle
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_CreateVehicle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.decodermanifest `IotfleetwiseResource.decodermanifest`} 
   * - {@link IotfleetwiseResource.modelmanifest `IotfleetwiseResource.modelmanifest`} 
   */
  CreateVehicle = "iotfleetwise:CreateVehicle",

  /**
   * Write - Grants permission to delete a campaign
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_DeleteCampaign.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.campaign `IotfleetwiseResource.campaign`} 
   */
  DeleteCampaign = "iotfleetwise:DeleteCampaign",

  /**
   * Write - Grants permission to delete the given decoder manifest
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_DeleteDecoderManifest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.decodermanifest `IotfleetwiseResource.decodermanifest`} 
   */
  DeleteDecoderManifest = "iotfleetwise:DeleteDecoderManifest",

  /**
   * Write - Grants permission to delete a fleet
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_DeleteFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.fleet `IotfleetwiseResource.fleet`} 
   */
  DeleteFleet = "iotfleetwise:DeleteFleet",

  /**
   * Write - Grants permission to delete the given model manifest
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_DeleteModelManifest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.modelmanifest `IotfleetwiseResource.modelmanifest`} 
   */
  DeleteModelManifest = "iotfleetwise:DeleteModelManifest",

  /**
   * Write - Grants permission to delete a specific signal catalog
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_DeleteSignalCatalog.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.signalcatalog `IotfleetwiseResource.signalcatalog`} 
   */
  DeleteSignalCatalog = "iotfleetwise:DeleteSignalCatalog",

  /**
   * Write - Grants permission to delete a vehicle
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_DeleteVehicle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.vehicle `IotfleetwiseResource.vehicle`} 
   */
  DeleteVehicle = "iotfleetwise:DeleteVehicle",

  /**
   * Write - Grants permission to disassociate a vehicle from an existing fleet
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_DisassociateVehicle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.fleet `IotfleetwiseResource.fleet`} 
   * - {@link IotfleetwiseResource.vehicle `IotfleetwiseResource.vehicle`} 
   */
  DisassociateVehicle = "iotfleetwise:DisassociateVehicle",

  /**
   * Read - Grants permission to get summary information for a given campaign
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_GetCampaign.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.campaign `IotfleetwiseResource.campaign`} 
   */
  GetCampaign = "iotfleetwise:GetCampaign",

  /**
   * Read - Grants permission to get summary information for a given decoder manifest definition
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_GetDecoderManifest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.decodermanifest `IotfleetwiseResource.decodermanifest`} 
   */
  GetDecoderManifest = "iotfleetwise:GetDecoderManifest",

  /**
   * Read - Grants permission to get summary information for a fleet
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_GetFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.fleet `IotfleetwiseResource.fleet`} 
   */
  GetFleet = "iotfleetwise:GetFleet",

  /**
   * Read - Grants permission to get summary information for a given model manifest definition
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_GetModelManifest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.modelmanifest `IotfleetwiseResource.modelmanifest`} 
   */
  GetModelManifest = "iotfleetwise:GetModelManifest",

  /**
   * Read - Grants permission to get the account registration status with IoT FleetWise
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_GetRegisterAccountStatus.html
   */
  GetRegisterAccountStatus = "iotfleetwise:GetRegisterAccountStatus",

  /**
   * Read - Grants permission to get summary information for a specific signal catalog
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_GetSignalCatalog.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.signalcatalog `IotfleetwiseResource.signalcatalog`} 
   */
  GetSignalCatalog = "iotfleetwise:GetSignalCatalog",

  /**
   * Read - Grants permission to get summary information for a vehicle
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_GetVehicle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.vehicle `IotfleetwiseResource.vehicle`} 
   */
  GetVehicle = "iotfleetwise:GetVehicle",

  /**
   * Read - Grants permission to get the status of the campaigns running on a specific vehicle
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_GetVehicleStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.vehicle `IotfleetwiseResource.vehicle`} 
   */
  GetVehicleStatus = "iotfleetwise:GetVehicleStatus",

  /**
   * Write - Grants permission to import an existing decoder manifest
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ImportDecoderManifest.html
   */
  ImportDecoderManifest = "iotfleetwise:ImportDecoderManifest",

  /**
   * Write - Grants permission to create a signal catalog by importing existing definitions
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ImportSignalCatalog.html
   */
  ImportSignalCatalog = "iotfleetwise:ImportSignalCatalog",

  /**
   * Read - Grants permission to list campaigns
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ListCampaigns.html
   */
  ListCampaigns = "iotfleetwise:ListCampaigns",

  /**
   * List - Grants permission to list network interfaces associated to the existing decoder manifest
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ListDecoderManifestNetworkInterfaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.decodermanifest `IotfleetwiseResource.decodermanifest`} 
   */
  ListDecoderManifestNetworkInterfaces = "iotfleetwise:ListDecoderManifestNetworkInterfaces",

  /**
   * List - Grants permission to list decoder manifest signals
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ListDecoderManifestSignals.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.decodermanifest `IotfleetwiseResource.decodermanifest`} 
   */
  ListDecoderManifestSignals = "iotfleetwise:ListDecoderManifestSignals",

  /**
   * Read - Grants permission to list all decoder manifests, with an optional filter on model manifest
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ListDecoderManifests.html
   */
  ListDecoderManifests = "iotfleetwise:ListDecoderManifests",

  /**
   * Read - Grants permission to list all fleets
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ListFleets.html
   */
  ListFleets = "iotfleetwise:ListFleets",

  /**
   * Read - Grants permission to list all the fleets that the given vehicle is associated with
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ListFleetsForVehicle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.vehicle `IotfleetwiseResource.vehicle`} 
   */
  ListFleetsForVehicle = "iotfleetwise:ListFleetsForVehicle",

  /**
   * List - Grants permission to list all nodes for the given model manifest
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ListModelManifestNodes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.modelmanifest `IotfleetwiseResource.modelmanifest`} 
   */
  ListModelManifestNodes = "iotfleetwise:ListModelManifestNodes",

  /**
   * Read - Grants permission to list all model manifests, with an optional filter on signal catalog
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ListModelManifests.html
   */
  ListModelManifests = "iotfleetwise:ListModelManifests",

  /**
   * Read - Grants permission to list all nodes for a given signal catalog
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.signalcatalog `IotfleetwiseResource.signalcatalog`} 
   */
  ListSignalCatalogNodes = "iotfleetwise:ListSignalCatalogNodes",

  /**
   * Read - Grants permission to list all signal catalogs
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ListSignalCatalogs.html
   */
  ListSignalCatalogs = "iotfleetwise:ListSignalCatalogs",

  /**
   * Read - Grants permission to list all vehicles, with an optional filter on model manifest
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ListVehicles.html
   */
  ListVehicles = "iotfleetwise:ListVehicles",

  /**
   * Read - Grants permission to list vehicles in the given fleet
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_ListVehiclesInFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.fleet `IotfleetwiseResource.fleet`} 
   */
  ListVehiclesInFleet = "iotfleetwise:ListVehiclesInFleet",

  /**
   * Write - Grants permission to register an AWS account to IoT FleetWise
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_RegisterAccount.html
   */
  RegisterAccount = "iotfleetwise:RegisterAccount",

  /**
   * Write - Grants permission to update the given campaign
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_UpdateCampaign.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.campaign `IotfleetwiseResource.campaign`} 
   */
  UpdateCampaign = "iotfleetwise:UpdateCampaign",

  /**
   * Write - Grants permission to update a decoder manifest defnition
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_UpdateDecoderManifest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.decodermanifest `IotfleetwiseResource.decodermanifest`} 
   */
  UpdateDecoderManifest = "iotfleetwise:UpdateDecoderManifest",

  /**
   * Write - Grants permission to update the fleet
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_UpdateFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.fleet `IotfleetwiseResource.fleet`} 
   */
  UpdateFleet = "iotfleetwise:UpdateFleet",

  /**
   * Write - Grants permission to update the given model manifest definition
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_UpdateModelManifest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.modelmanifest `IotfleetwiseResource.modelmanifest`} 
   */
  UpdateModelManifest = "iotfleetwise:UpdateModelManifest",

  /**
   * Write - Grants permission to update a specific signal catalog definition
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_UpdateSignalCatalog.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.signalcatalog `IotfleetwiseResource.signalcatalog`} 
   */
  UpdateSignalCatalog = "iotfleetwise:UpdateSignalCatalog",

  /**
   * Write - Grants permission to update the vehicle
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/apireference/API_UpdateVehicle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.vehicle `IotfleetwiseResource.vehicle`} 
   * - {@link IotfleetwiseResource.decodermanifest `IotfleetwiseResource.decodermanifest`} 
   * - {@link IotfleetwiseResource.modelmanifest `IotfleetwiseResource.modelmanifest`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotfleetwise:UpdateToModelManifestArn`: Filters access by a list of IoT FleetWise Model Manifest ARNs ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iotfleetwise:UpdateToDecoderManifestArn`: Filters access by a list of IoT FleetWise Decoder Manifest ARNs ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateVehicle = "iotfleetwise:UpdateVehicle",

  /**
   * * - Grant all iotfleetwise permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotfleetwiseResource.fleet `IotfleetwiseResource.fleet`} 
   * - {@link IotfleetwiseResource.vehicle `IotfleetwiseResource.vehicle`} 
   * - {@link IotfleetwiseResource.signalcatalog `IotfleetwiseResource.signalcatalog`} 
   * - {@link IotfleetwiseResource.modelmanifest `IotfleetwiseResource.modelmanifest`} 
   * - {@link IotfleetwiseResource.decodermanifest `IotfleetwiseResource.decodermanifest`} 
   * - {@link IotfleetwiseResource.campaign `IotfleetwiseResource.campaign`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iotfleetwise:UpdateToModelManifestArn`: Filters access by a list of IoT FleetWise Model Manifest ARNs ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iotfleetwise:UpdateToDecoderManifestArn`: Filters access by a list of IoT FleetWise Decoder Manifest ARNs ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "iotfleetwise:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleetwise.html
 */
export const IotfleetwiseResource = {

  /**
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/iot-vehicle-wise.html
   */
  campaign: (options: Partial<{partition: string, region: string, account: string, campaignName: string}> = {}) => `arn:${options.partition || '*'}:iotfleetwise:${options.region || '*'}:${options.account || '*'}:campaign/${options.campaignName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/iot-vehicle-wise.html
   */
  decodermanifest: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:iotfleetwise:${options.region || '*'}:${options.account || '*'}:decoder-manifest/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/iot-vehicle-wise.html
   */
  fleet: (options: Partial<{partition: string, region: string, account: string, fleetId: string}> = {}) => `arn:${options.partition || '*'}:iotfleetwise:${options.region || '*'}:${options.account || '*'}:fleet/${options.fleetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/iot-vehicle-wise.html
   */
  modelmanifest: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:iotfleetwise:${options.region || '*'}:${options.account || '*'}:model-manifest/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/iot-vehicle-wise.html
   */
  signalcatalog: (options: Partial<{partition: string, region: string, account: string, name: string}> = {}) => `arn:${options.partition || '*'}:iotfleetwise:${options.region || '*'}:${options.account || '*'}:signal-catalog/${options.name || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/iot-vehicle-wise.html
   */
  vehicle: (options: Partial<{partition: string, region: string, account: string, vehicleId: string}> = {}) => `arn:${options.partition || '*'}:iotfleetwise:${options.region || '*'}:${options.account || '*'}:vehicle/${options.vehicleId || '*'}`,
}

