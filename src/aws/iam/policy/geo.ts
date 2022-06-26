/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocation.html
 */
export enum GeoAction {

  /**
   * Write - Grants permission to create an association between a geofence-collection and a tracker resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_AssociateTrackerConsumer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  AssociateTrackerConsumer = "geo:AssociateTrackerConsumer",

  /**
   * Write - Grants permission to delete a batch of device position histories from a tracker resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_BatchDeleteDevicePositionHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  BatchDeleteDevicePositionHistory = "geo:BatchDeleteDevicePositionHistory",

  /**
   * Write - Grants permission to delete a batch of geofences from a geofence collection
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_BatchDeleteGeofence.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   */
  BatchDeleteGeofence = "geo:BatchDeleteGeofence",

  /**
   * Write - Grants permission to evaluate device positions against the position of geofences in a given geofence collection
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_BatchEvaluateGeofences.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   */
  BatchEvaluateGeofences = "geo:BatchEvaluateGeofences",

  /**
   * Read - Grants permission to send a batch request to retrieve device positions
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_BatchGetDevicePosition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  BatchGetDevicePosition = "geo:BatchGetDevicePosition",

  /**
   * Write - Grants permission to send a batch request for adding geofences into a given geofence collection
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_BatchPutGeofence.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   */
  BatchPutGeofence = "geo:BatchPutGeofence",

  /**
   * Write - Grants permission to upload a position update for one or more devices to a tracker resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_BatchUpdateDevicePosition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  BatchUpdateDevicePosition = "geo:BatchUpdateDevicePosition",

  /**
   * Read - Grants permission to calculate routes using a given route calculator resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_CalculateRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.routeCalculator `GeoResource.routeCalculator`} 
   */
  CalculateRoute = "geo:CalculateRoute",

  /**
   * Read - Grants permission to calculate a route matrix using a given route calculator resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_CalculateRouteMatrix.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.routeCalculator `GeoResource.routeCalculator`} 
   */
  CalculateRouteMatrix = "geo:CalculateRouteMatrix",

  /**
   * Write - Grants permission to create a geofence-collection
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_CreateGeofenceCollection.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateGeofenceCollection = "geo:CreateGeofenceCollection",

  /**
   * Write - Grants permission to create a map resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_CreateMap.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMap = "geo:CreateMap",

  /**
   * Write - Grants permission to create a place index resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_CreatePlaceIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePlaceIndex = "geo:CreatePlaceIndex",

  /**
   * Write - Grants permission to create a route calculator resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_CreateRouteCalculator.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRouteCalculator = "geo:CreateRouteCalculator",

  /**
   * Write - Grants permission to create a tracker resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_CreateTracker.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTracker = "geo:CreateTracker",

  /**
   * Write - Grants permission to delete a geofence-collection
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_DeleteGeofenceCollection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   */
  DeleteGeofenceCollection = "geo:DeleteGeofenceCollection",

  /**
   * Write - Grants permission to delete a map resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_DeleteMap.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.map `GeoResource.map`} 
   */
  DeleteMap = "geo:DeleteMap",

  /**
   * Write - Grants permission to delete a place index resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_DeletePlaceIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.placeIndex `GeoResource.placeIndex`} 
   */
  DeletePlaceIndex = "geo:DeletePlaceIndex",

  /**
   * Write - Grants permission to delete a route calculator resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_DeleteRouteCalculator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.routeCalculator `GeoResource.routeCalculator`} 
   */
  DeleteRouteCalculator = "geo:DeleteRouteCalculator",

  /**
   * Write - Grants permission to delete a tracker resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_DeleteTracker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  DeleteTracker = "geo:DeleteTracker",

  /**
   * Read - Grants permission to retrieve geofence collection details
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_DescribeGeofenceCollection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   */
  DescribeGeofenceCollection = "geo:DescribeGeofenceCollection",

  /**
   * Read - Grants permission to retrieve map resource details
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_DescribeMap.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.map `GeoResource.map`} 
   */
  DescribeMap = "geo:DescribeMap",

  /**
   * Read - Grants permission to retrieve place-index resource details
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_DescribePlaceIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.placeIndex `GeoResource.placeIndex`} 
   */
  DescribePlaceIndex = "geo:DescribePlaceIndex",

  /**
   * Read - Grants permission to retrieve route calculator resource details
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_DescribeRouteCalculator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.routeCalculator `GeoResource.routeCalculator`} 
   */
  DescribeRouteCalculator = "geo:DescribeRouteCalculator",

  /**
   * Read - Grants permission to retrieve a tracker resource details
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_DescribeTracker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  DescribeTracker = "geo:DescribeTracker",

  /**
   * Write - Grants permission to remove the association between a tracker resource and a geofence-collection
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_DisassociateTrackerConsumer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  DisassociateTrackerConsumer = "geo:DisassociateTrackerConsumer",

  /**
   * Read - Grants permission to retrieve the latest device position
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_GetDevicePosition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  GetDevicePosition = "geo:GetDevicePosition",

  /**
   * Read - Grants permission to retrieve the device position history
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_GetDevicePositionHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  GetDevicePositionHistory = "geo:GetDevicePositionHistory",

  /**
   * Read - Grants permission to retrieve the geofence details from a geofence-collection
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_GetGeofence.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   */
  GetGeofence = "geo:GetGeofence",

  /**
   * Read - Grants permission to retrieve the glyph file for a map resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_GetMapGlyphs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.map `GeoResource.map`} 
   */
  GetMapGlyphs = "geo:GetMapGlyphs",

  /**
   * Read - Grants permission to retrieve the sprite file for a map resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_GetMapSprites.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.map `GeoResource.map`} 
   */
  GetMapSprites = "geo:GetMapSprites",

  /**
   * Read - Grants permission to retrieve the map style descriptor from a map resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_GetMapStyleDescriptor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.map `GeoResource.map`} 
   */
  GetMapStyleDescriptor = "geo:GetMapStyleDescriptor",

  /**
   * Read - Grants permission to retrieve the map tile from the map resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_GetMapTile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.map `GeoResource.map`} 
   */
  GetMapTile = "geo:GetMapTile",

  /**
   * Read - Grants permission to retrieve a list of devices and their latest positions from the given tracker resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_ListDevicePositions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  ListDevicePositions = "geo:ListDevicePositions",

  /**
   * List - Grants permission to lists geofence-collections
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_ListGeofenceCollections.html
   */
  ListGeofenceCollections = "geo:ListGeofenceCollections",

  /**
   * Read - Grants permission to list geofences stored in a given geofence collection
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_ListGeofences.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   */
  ListGeofences = "geo:ListGeofences",

  /**
   * List - Grants permission to list map resources
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_ListMaps.html
   */
  ListMaps = "geo:ListMaps",

  /**
   * List - Grants permission to return a list of place index resources
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_ListPlaceIndexes.html
   */
  ListPlaceIndexes = "geo:ListPlaceIndexes",

  /**
   * List - Grants permission to return a list of route calculator resources
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_ListRouteCalculators.html
   */
  ListRouteCalculators = "geo:ListRouteCalculators",

  /**
   * Read - Grants permission to list the tags (metadata) which you have assigned to the resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   * - {@link GeoResource.map `GeoResource.map`} 
   * - {@link GeoResource.placeIndex `GeoResource.placeIndex`} 
   * - {@link GeoResource.routeCalculator `GeoResource.routeCalculator`} 
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  ListTagsForResource = "geo:ListTagsForResource",

  /**
   * Read - Grants permission to retrieve a list of geofence collections currently associated to the given tracker resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_ListTrackerConsumers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  ListTrackerConsumers = "geo:ListTrackerConsumers",

  /**
   * List - Grants permission to return a list of tracker resources
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_ListTrackers.html
   */
  ListTrackers = "geo:ListTrackers",

  /**
   * Write - Grants permission to add a new geofence or update an existing geofence to a given geofence-collection
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_PutGeofence.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   */
  PutGeofence = "geo:PutGeofence",

  /**
   * Read - Grants permission to reverse geocodes a given coordinate
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_SearchPlaceIndexForPosition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.placeIndex `GeoResource.placeIndex`} 
   */
  SearchPlaceIndexForPosition = "geo:SearchPlaceIndexForPosition",

  /**
   * Read - Grants permission to generate suggestions for addresses and points of interest based on partial or misspelled free-form text
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_SearchPlaceIndexForSuggestions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.placeIndex `GeoResource.placeIndex`} 
   */
  SearchPlaceIndexForSuggestions = "geo:SearchPlaceIndexForSuggestions",

  /**
   * Read - Grants permission to geocode free-form text, such as an address, name, city or region
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_SearchPlaceIndexForText.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.placeIndex `GeoResource.placeIndex`} 
   */
  SearchPlaceIndexForText = "geo:SearchPlaceIndexForText",

  /**
   * Tagging - Grants permission to adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   * - {@link GeoResource.map `GeoResource.map`} 
   * - {@link GeoResource.placeIndex `GeoResource.placeIndex`} 
   * - {@link GeoResource.routeCalculator `GeoResource.routeCalculator`} 
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "geo:TagResource",

  /**
   * Tagging - Grants permission to remove the given tags (metadata) from the resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   * - {@link GeoResource.map `GeoResource.map`} 
   * - {@link GeoResource.placeIndex `GeoResource.placeIndex`} 
   * - {@link GeoResource.routeCalculator `GeoResource.routeCalculator`} 
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "geo:UntagResource",

  /**
   * Write - Grants permission to update a geofence collection
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_UpdateGeofenceCollection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   */
  UpdateGeofenceCollection = "geo:UpdateGeofenceCollection",

  /**
   * Write - Grants permission to update a map resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_UpdateMap.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.map `GeoResource.map`} 
   */
  UpdateMap = "geo:UpdateMap",

  /**
   * Write - Grants permission to update a place index resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_UpdatePlaceIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.placeIndex `GeoResource.placeIndex`} 
   */
  UpdatePlaceIndex = "geo:UpdatePlaceIndex",

  /**
   * Write - Grants permission to update a route calculator resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_UpdateRouteCalculator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.routeCalculator `GeoResource.routeCalculator`} 
   */
  UpdateRouteCalculator = "geo:UpdateRouteCalculator",

  /**
   * Write - Grants permission to update a tracker resource
   * @see https://docs.aws.amazon.com/location/latest/developerguide/API_UpdateTracker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   */
  UpdateTracker = "geo:UpdateTracker",

  /**
   * * - Grant all geo permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GeoResource.tracker `GeoResource.tracker`} 
   * - {@link GeoResource.geofenceCollection `GeoResource.geofenceCollection`} 
   * - {@link GeoResource.routeCalculator `GeoResource.routeCalculator`} 
   * - {@link GeoResource.map `GeoResource.map`} 
   * - {@link GeoResource.placeIndex `GeoResource.placeIndex`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "geo:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlocation.html
 */
export const GeoResource = {

  /**
   * @see https://docs.aws.amazon.com/location/latest/developerguide/overview.html#geofence-overview
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  geofenceCollection: (options: Partial<{partition: string, region: string, account: string, geofenceCollectionName: string}> = {}) => `arn:${options.partition || '*'}:geo:${options.region || '*'}:${options.account || '*'}:geofence-collection/${options.geofenceCollectionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/location/latest/developerguide/overview.html#map-overview
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  map: (options: Partial<{partition: string, region: string, account: string, mapName: string}> = {}) => `arn:${options.partition || '*'}:geo:${options.region || '*'}:${options.account || '*'}:map/${options.mapName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/location/latest/developerguide/overview.html#places-overview
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  placeIndex: (options: Partial<{partition: string, region: string, account: string, indexName: string}> = {}) => `arn:${options.partition || '*'}:geo:${options.region || '*'}:${options.account || '*'}:place-index/${options.indexName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/location/latest/developerguide/overview.html#routes-overview
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  routeCalculator: (options: Partial<{partition: string, region: string, account: string, calculatorName: string}> = {}) => `arn:${options.partition || '*'}:geo:${options.region || '*'}:${options.account || '*'}:route-calculator/${options.calculatorName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/location/latest/developerguide/overview.html#tracking-overview
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  tracker: (options: Partial<{partition: string, region: string, account: string, trackerName: string}> = {}) => `arn:${options.partition || '*'}:geo:${options.region || '*'}:${options.account || '*'}:tracker/${options.trackerName || '*'}`,
}

