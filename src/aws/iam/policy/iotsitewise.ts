/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotsitewise.html
 */
export enum IotsitewiseAction {

  /**
   * Write - Grants permission to associate a child asset with a parent asset through a hierarchy
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssociateAssets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   */
  AssociateAssets = "iotsitewise:AssociateAssets",

  /**
   * Write - Grants permission to associate a time series with an asset property
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssociateTimeSeriesToAssetProperty.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  AssociateTimeSeriesToAssetProperty = "iotsitewise:AssociateTimeSeriesToAssetProperty",

  /**
   * Write - Grants permission to associate assets to a project
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchAssociateProjectAssets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   */
  BatchAssociateProjectAssets = "iotsitewise:BatchAssociateProjectAssets",

  /**
   * Write - Grants permission to disassociate assets from a project
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchDisassociateProjectAssets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   */
  BatchDisassociateProjectAssets = "iotsitewise:BatchDisassociateProjectAssets",

  /**
   * Read - Grants permission to retrieve computed aggregates for multiple asset properties
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  BatchGetAssetPropertyAggregates = "iotsitewise:BatchGetAssetPropertyAggregates",

  /**
   * Read - Grants permission to retrieve the latest value for multiple asset properties
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  BatchGetAssetPropertyValue = "iotsitewise:BatchGetAssetPropertyValue",

  /**
   * Read - Grants permission to retrieve the value history for multiple asset properties
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValueHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  BatchGetAssetPropertyValueHistory = "iotsitewise:BatchGetAssetPropertyValueHistory",

  /**
   * Write - Grants permission to put property values for asset properties
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  BatchPutAssetPropertyValue = "iotsitewise:BatchPutAssetPropertyValue",

  /**
   * Write - Grants permission to create an access policy for a portal or a project
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.portal `IotsitewiseResource.portal`} 
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAccessPolicy = "iotsitewise:CreateAccessPolicy",

  /**
   * Write - Grants permission to create an asset from an asset model
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAsset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.assetModel `IotsitewiseResource.assetModel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAsset = "iotsitewise:CreateAsset",

  /**
   * Write - Grants permission to create an asset model
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAssetModel = "iotsitewise:CreateAssetModel",

  /**
   * Write - Grants permission to create a dashboard in a project
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDashboard = "iotsitewise:CreateDashboard",

  /**
   * Write - Grants permission to create a gateway
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateGateway = "iotsitewise:CreateGateway",

  /**
   * Write - Grants permission to create a portal
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePortal = "iotsitewise:CreatePortal",

  /**
   * Write - Grants permission to create a project in a portal
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.portal `IotsitewiseResource.portal`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProject = "iotsitewise:CreateProject",

  /**
   * Write - Grants permission to delete an access policy
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAccessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.accessPolicy `IotsitewiseResource.accessPolicy`} 
   */
  DeleteAccessPolicy = "iotsitewise:DeleteAccessPolicy",

  /**
   * Write - Grants permission to delete an asset
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAsset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   */
  DeleteAsset = "iotsitewise:DeleteAsset",

  /**
   * Write - Grants permission to delete an asset model
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAssetModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.assetModel `IotsitewiseResource.assetModel`} 
   */
  DeleteAssetModel = "iotsitewise:DeleteAssetModel",

  /**
   * Write - Grants permission to delete a dashboard
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteDashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.dashboard `IotsitewiseResource.dashboard`} 
   */
  DeleteDashboard = "iotsitewise:DeleteDashboard",

  /**
   * Write - Grants permission to delete a gateway
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.gateway `IotsitewiseResource.gateway`} 
   */
  DeleteGateway = "iotsitewise:DeleteGateway",

  /**
   * Write - Grants permission to delete a portal
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeletePortal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.portal `IotsitewiseResource.portal`} 
   */
  DeletePortal = "iotsitewise:DeletePortal",

  /**
   * Write - Grants permission to delete a project
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   */
  DeleteProject = "iotsitewise:DeleteProject",

  /**
   * Write - Grants permission to delete a time series
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteTimeSeries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  DeleteTimeSeries = "iotsitewise:DeleteTimeSeries",

  /**
   * Read - Grants permission to describe an access policy
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAccessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.accessPolicy `IotsitewiseResource.accessPolicy`} 
   */
  DescribeAccessPolicy = "iotsitewise:DescribeAccessPolicy",

  /**
   * Read - Grants permission to describe an asset
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   */
  DescribeAsset = "iotsitewise:DescribeAsset",

  /**
   * Read - Grants permission to describe an asset model
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.assetModel `IotsitewiseResource.assetModel`} 
   */
  DescribeAssetModel = "iotsitewise:DescribeAssetModel",

  /**
   * Read - Grants permission to describe an asset property
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   */
  DescribeAssetProperty = "iotsitewise:DescribeAssetProperty",

  /**
   * Read - Grants permission to describe a dashboard
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeDashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.dashboard `IotsitewiseResource.dashboard`} 
   */
  DescribeDashboard = "iotsitewise:DescribeDashboard",

  /**
   * Read - Grants permission to describe the default encryption configuration for the AWS account
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeDefaultEncryptionConfiguration.html
   */
  DescribeDefaultEncryptionConfiguration = "iotsitewise:DescribeDefaultEncryptionConfiguration",

  /**
   * Read - Grants permission to describe a gateway
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.gateway `IotsitewiseResource.gateway`} 
   */
  DescribeGateway = "iotsitewise:DescribeGateway",

  /**
   * Read - Grants permission to describe a capability configuration for a gateway
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.gateway `IotsitewiseResource.gateway`} 
   */
  DescribeGatewayCapabilityConfiguration = "iotsitewise:DescribeGatewayCapabilityConfiguration",

  /**
   * Read - Grants permission to describe logging options for the AWS account
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeLoggingOptions.html
   */
  DescribeLoggingOptions = "iotsitewise:DescribeLoggingOptions",

  /**
   * Read - Grants permission to describe a portal
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribePortal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.portal `IotsitewiseResource.portal`} 
   */
  DescribePortal = "iotsitewise:DescribePortal",

  /**
   * Read - Grants permission to describe a project
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   */
  DescribeProject = "iotsitewise:DescribeProject",

  /**
   * Read - Grants permission to describe the storage configuration for the AWS account
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeStorageConfiguration.html
   */
  DescribeStorageConfiguration = "iotsitewise:DescribeStorageConfiguration",

  /**
   * Read - Grants permission to describe a time series
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeTimeSeries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  DescribeTimeSeries = "iotsitewise:DescribeTimeSeries",

  /**
   * Write - Grants permission to disassociate a child asset from a parent asset by a hierarchy
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   */
  DisassociateAssets = "iotsitewise:DisassociateAssets",

  /**
   * Write - Grants permission to disassociate a time series from an asset property
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateTimeSeriesFromAssetProperty.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  DisassociateTimeSeriesFromAssetProperty = "iotsitewise:DisassociateTimeSeriesFromAssetProperty",

  /**
   * Read - Grants permission to retrieve computed aggregates for an asset property
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyAggregates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  GetAssetPropertyAggregates = "iotsitewise:GetAssetPropertyAggregates",

  /**
   * Read - Grants permission to retrieve the latest value for an asset property
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  GetAssetPropertyValue = "iotsitewise:GetAssetPropertyValue",

  /**
   * Read - Grants permission to retrieve the value history for an asset property
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValueHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  GetAssetPropertyValueHistory = "iotsitewise:GetAssetPropertyValueHistory",

  /**
   * Read - Grants permission to retrieve interpolated values for an asset property
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetInterpolatedAssetPropertyValues.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   */
  GetInterpolatedAssetPropertyValues = "iotsitewise:GetInterpolatedAssetPropertyValues",

  /**
   * List - Grants permission to list all access policies for an identity or a resource
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAccessPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.portal `IotsitewiseResource.portal`} 
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   */
  ListAccessPolicies = "iotsitewise:ListAccessPolicies",

  /**
   * List - Grants permission to list all asset models
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html
   */
  ListAssetModels = "iotsitewise:ListAssetModels",

  /**
   * List - Grants permission to list the asset relationship graph for an asset
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetRelationships.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   */
  ListAssetRelationships = "iotsitewise:ListAssetRelationships",

  /**
   * List - Grants permission to list all assets
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.assetModel `IotsitewiseResource.assetModel`} 
   */
  ListAssets = "iotsitewise:ListAssets",

  /**
   * List - Grants permission to list all assets associated with an asset through a hierarchy
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssociatedAssets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   */
  ListAssociatedAssets = "iotsitewise:ListAssociatedAssets",

  /**
   * List - Grants permission to list all dashboards in a project
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListDashboards.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   */
  ListDashboards = "iotsitewise:ListDashboards",

  /**
   * List - Grants permission to list all gateways
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListGateways.html
   */
  ListGateways = "iotsitewise:ListGateways",

  /**
   * List - Grants permission to list all portals
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListPortals.html
   */
  ListPortals = "iotsitewise:ListPortals",

  /**
   * List - Grants permission to list all assets associated with a project
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjectAssets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   */
  ListProjectAssets = "iotsitewise:ListProjectAssets",

  /**
   * List - Grants permission to list all projects in a portal
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjects.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.portal `IotsitewiseResource.portal`} 
   */
  ListProjects = "iotsitewise:ListProjects",

  /**
   * Read - Grants permission to list all tags for a resource
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.accessPolicy `IotsitewiseResource.accessPolicy`} 
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.assetModel `IotsitewiseResource.assetModel`} 
   * - {@link IotsitewiseResource.dashboard `IotsitewiseResource.dashboard`} 
   * - {@link IotsitewiseResource.gateway `IotsitewiseResource.gateway`} 
   * - {@link IotsitewiseResource.portal `IotsitewiseResource.portal`} 
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "iotsitewise:ListTagsForResource",

  /**
   * List - Grants permission to list time series
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListTimeSeries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   */
  ListTimeSeries = "iotsitewise:ListTimeSeries",

  /**
   * Write - Grants permission to set the default encryption configuration for the AWS account
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutDefaultEncryptionConfiguration.html
   */
  PutDefaultEncryptionConfiguration = "iotsitewise:PutDefaultEncryptionConfiguration",

  /**
   * Write - Grants permission to set logging options for the AWS account
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutLoggingOptions.html
   */
  PutLoggingOptions = "iotsitewise:PutLoggingOptions",

  /**
   * Write - Grants permission to configure storage settings for the AWS account
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html
   */
  PutStorageConfiguration = "iotsitewise:PutStorageConfiguration",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.accessPolicy `IotsitewiseResource.accessPolicy`} 
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.assetModel `IotsitewiseResource.assetModel`} 
   * - {@link IotsitewiseResource.dashboard `IotsitewiseResource.dashboard`} 
   * - {@link IotsitewiseResource.gateway `IotsitewiseResource.gateway`} 
   * - {@link IotsitewiseResource.portal `IotsitewiseResource.portal`} 
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "iotsitewise:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.accessPolicy `IotsitewiseResource.accessPolicy`} 
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.assetModel `IotsitewiseResource.assetModel`} 
   * - {@link IotsitewiseResource.dashboard `IotsitewiseResource.dashboard`} 
   * - {@link IotsitewiseResource.gateway `IotsitewiseResource.gateway`} 
   * - {@link IotsitewiseResource.portal `IotsitewiseResource.portal`} 
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "iotsitewise:UntagResource",

  /**
   * Write - Grants permission to update an access policy
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAccessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.accessPolicy `IotsitewiseResource.accessPolicy`} 
   */
  UpdateAccessPolicy = "iotsitewise:UpdateAccessPolicy",

  /**
   * Write - Grants permission to update an asset
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAsset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   */
  UpdateAsset = "iotsitewise:UpdateAsset",

  /**
   * Write - Grants permission to update an asset model
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.assetModel `IotsitewiseResource.assetModel`} 
   */
  UpdateAssetModel = "iotsitewise:UpdateAssetModel",

  /**
   * Write - Grants permission to update an AssetModel property routing
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dalarms-iam-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.assetModel `IotsitewiseResource.assetModel`} 
   */
  UpdateAssetModelPropertyRouting = "iotsitewise:UpdateAssetModelPropertyRouting",

  /**
   * Write - Grants permission to update an asset property
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   */
  UpdateAssetProperty = "iotsitewise:UpdateAssetProperty",

  /**
   * Write - Grants permission to update a dashboard
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateDashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.dashboard `IotsitewiseResource.dashboard`} 
   */
  UpdateDashboard = "iotsitewise:UpdateDashboard",

  /**
   * Write - Grants permission to update a gateway
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.gateway `IotsitewiseResource.gateway`} 
   */
  UpdateGateway = "iotsitewise:UpdateGateway",

  /**
   * Write - Grants permission to update a capability configuration for a gateway
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGatewayCapabilityConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.gateway `IotsitewiseResource.gateway`} 
   */
  UpdateGatewayCapabilityConfiguration = "iotsitewise:UpdateGatewayCapabilityConfiguration",

  /**
   * Write - Grants permission to update a portal
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdatePortal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.portal `IotsitewiseResource.portal`} 
   */
  UpdatePortal = "iotsitewise:UpdatePortal",

  /**
   * Write - Grants permission to update a project
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   */
  UpdateProject = "iotsitewise:UpdateProject",

  /**
   * * - Grant all iotsitewise permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotsitewise.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotsitewiseResource.asset `IotsitewiseResource.asset`} 
   * - {@link IotsitewiseResource.timeSeries `IotsitewiseResource.timeSeries`} 
   * - {@link IotsitewiseResource.project `IotsitewiseResource.project`} 
   * - {@link IotsitewiseResource.portal `IotsitewiseResource.portal`} 
   * - {@link IotsitewiseResource.assetModel `IotsitewiseResource.assetModel`} 
   * - {@link IotsitewiseResource.accessPolicy `IotsitewiseResource.accessPolicy`} 
   * - {@link IotsitewiseResource.dashboard `IotsitewiseResource.dashboard`} 
   * - {@link IotsitewiseResource.gateway `IotsitewiseResource.gateway`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "iotsitewise:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotsitewise.html
 */
export const IotsitewiseResource = {

  /**
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAsset.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  asset: (options: Partial<{partition: string, region: string, account: string, assetId: string}> = {}) => `arn:${options.partition || '*'}:iotsitewise:${options.region || '*'}:${options.account || '*'}:asset/${options.assetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  assetModel: (options: Partial<{partition: string, region: string, account: string, assetModelId: string}> = {}) => `arn:${options.partition || '*'}:iotsitewise:${options.region || '*'}:${options.account || '*'}:asset-model/${options.assetModelId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeTimeSeries.html
   */
  timeSeries: (options: Partial<{partition: string, region: string, account: string, timeSeriesId: string}> = {}) => `arn:${options.partition || '*'}:iotsitewise:${options.region || '*'}:${options.account || '*'}:time-series/${options.timeSeriesId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  gateway: (options: Partial<{partition: string, region: string, account: string, gatewayId: string}> = {}) => `arn:${options.partition || '*'}:iotsitewise:${options.region || '*'}:${options.account || '*'}:gateway/${options.gatewayId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  portal: (options: Partial<{partition: string, region: string, account: string, portalId: string}> = {}) => `arn:${options.partition || '*'}:iotsitewise:${options.region || '*'}:${options.account || '*'}:portal/${options.portalId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  project: (options: Partial<{partition: string, region: string, account: string, projectId: string}> = {}) => `arn:${options.partition || '*'}:iotsitewise:${options.region || '*'}:${options.account || '*'}:project/${options.projectId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dashboard: (options: Partial<{partition: string, region: string, account: string, dashboardId: string}> = {}) => `arn:${options.partition || '*'}:iotsitewise:${options.region || '*'}:${options.account || '*'}:dashboard/${options.dashboardId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  accessPolicy: (options: Partial<{partition: string, region: string, account: string, accessPolicyId: string}> = {}) => `arn:${options.partition || '*'}:iotsitewise:${options.region || '*'}:${options.account || '*'}:access-policy/${options.accessPolicyId || '*'}`,
}

