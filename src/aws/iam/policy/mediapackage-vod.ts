/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackagevod.html
 */
export enum MediapackageVodAction {

  /**
   * Write - Grants permission to configure egress access logs for a PackagingGroup
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id-configure_logs.html#packaging_groups-id-configure_logsput
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.packagingGroups `MediapackageVodResource.packagingGroups`} 
   */
  ConfigureLogs = "mediapackage-vod:ConfigureLogs",

  /**
   * Write - Grants permission to create an asset in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets.html#assetspost
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAsset = "mediapackage-vod:CreateAsset",

  /**
   * Write - Grants permission to create a packaging configuration in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations.html#packaging_configurationspost
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePackagingConfiguration = "mediapackage-vod:CreatePackagingConfiguration",

  /**
   * Write - Grants permission to create a packaging group in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups.html#packaging_groupspost
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePackagingGroup = "mediapackage-vod:CreatePackagingGroup",

  /**
   * Write - Grants permission to delete an asset in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets-id.html#assets-iddelete
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.assets `MediapackageVodResource.assets`} 
   */
  DeleteAsset = "mediapackage-vod:DeleteAsset",

  /**
   * Write - Grants permission to delete a packaging configuration in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations-id.html#packaging_configurations-iddelete
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.packagingConfigurations `MediapackageVodResource.packagingConfigurations`} 
   */
  DeletePackagingConfiguration = "mediapackage-vod:DeletePackagingConfiguration",

  /**
   * Write - Grants permission to delete a packaging group in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-iddelete
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.packagingGroups `MediapackageVodResource.packagingGroups`} 
   */
  DeletePackagingGroup = "mediapackage-vod:DeletePackagingGroup",

  /**
   * Read - Grants permission to view the details of an asset in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets-id.html#assets-idget
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.assets `MediapackageVodResource.assets`} 
   */
  DescribeAsset = "mediapackage-vod:DescribeAsset",

  /**
   * Read - Grants permission to view the details of a packaging configuration in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations-id.html#packaging_configurations-idget
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.packagingConfigurations `MediapackageVodResource.packagingConfigurations`} 
   */
  DescribePackagingConfiguration = "mediapackage-vod:DescribePackagingConfiguration",

  /**
   * Read - Grants permission to view the details of a packaging group in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-idget
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.packagingGroups `MediapackageVodResource.packagingGroups`} 
   */
  DescribePackagingGroup = "mediapackage-vod:DescribePackagingGroup",

  /**
   * List - Grants permission to view a list of assets in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets.html#assetsget
   */
  ListAssets = "mediapackage-vod:ListAssets",

  /**
   * List - Grants permission to view a list of packaging configurations in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations.html#packaging_configurationsget
   */
  ListPackagingConfigurations = "mediapackage-vod:ListPackagingConfigurations",

  /**
   * List - Grants permission to view a list of packaging groups in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups.html#packaging_groupsget
   */
  ListPackagingGroups = "mediapackage-vod:ListPackagingGroups",

  /**
   * Read - Grants permission to list the tags assigned to a PackagingGroup, PackagingConfiguration, or Asset
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arnget
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.assets `MediapackageVodResource.assets`} 
   * - {@link MediapackageVodResource.packagingConfigurations `MediapackageVodResource.packagingConfigurations`} 
   * - {@link MediapackageVodResource.packagingGroups `MediapackageVodResource.packagingGroups`} 
   */
  ListTagsForResource = "mediapackage-vod:ListTagsForResource",

  /**
   * Tagging - Grants permission to assign tags to a PackagingGroup, PackagingConfiguration, or Asset
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arnpost
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.assets `MediapackageVodResource.assets`} 
   * - {@link MediapackageVodResource.packagingConfigurations `MediapackageVodResource.packagingConfigurations`} 
   * - {@link MediapackageVodResource.packagingGroups `MediapackageVodResource.packagingGroups`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "mediapackage-vod:TagResource",

  /**
   * Tagging - Grants permission to delete tags from a PackagingGroup, PackagingConfiguration, or Asset
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arndelete
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.assets `MediapackageVodResource.assets`} 
   * - {@link MediapackageVodResource.packagingConfigurations `MediapackageVodResource.packagingConfigurations`} 
   * - {@link MediapackageVodResource.packagingGroups `MediapackageVodResource.packagingGroups`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "mediapackage-vod:UntagResource",

  /**
   * Write - Grants permission to update a packaging group in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-idput
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.packagingGroups `MediapackageVodResource.packagingGroups`} 
   */
  UpdatePackagingGroup = "mediapackage-vod:UpdatePackagingGroup",

  /**
   * * - Grant all mediapackage-vod permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackagevod.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageVodResource.packagingGroups `MediapackageVodResource.packagingGroups`} 
   * - {@link MediapackageVodResource.assets `MediapackageVodResource.assets`} 
   * - {@link MediapackageVodResource.packagingConfigurations `MediapackageVodResource.packagingConfigurations`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "mediapackage-vod:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackagevod.html
 */
export const MediapackageVodResource = {

  /**
   * @see https://docs.aws.amazon.com/mediapackage/latest/ug/asset.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  assets: (options: Partial<{partition: string, region: string, account: string, assetIdentifier: string}> = {}) => `arn:${options.partition || '*'}:mediapackage-vod:${options.region || '*'}:${options.account || '*'}:assets/${options.assetIdentifier || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediapackage/latest/ug/pkg-cfig.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  packagingConfigurations: (options: Partial<{partition: string, region: string, account: string, packagingConfigurationIdentifier: string}> = {}) => `arn:${options.partition || '*'}:mediapackage-vod:${options.region || '*'}:${options.account || '*'}:packaging-configurations/${options.packagingConfigurationIdentifier || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediapackage/latest/ug/pkg-group.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  packagingGroups: (options: Partial<{partition: string, region: string, account: string, packagingGroupIdentifier: string}> = {}) => `arn:${options.partition || '*'}:mediapackage-vod:${options.region || '*'}:${options.account || '*'}:packaging-groups/${options.packagingGroupIdentifier || '*'}`,
}

