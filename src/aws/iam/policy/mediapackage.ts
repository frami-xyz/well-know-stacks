/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackage.html
 */
export enum MediapackageAction {

  /**
   * Write - Grants permission to configure access logs for a Channel
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id-configure_logs.html#channels-id-configure_logsput
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.channels `MediapackageResource.channels`} 
   */
  ConfigureLogs = "mediapackage:ConfigureLogs",

  /**
   * Write - Grants permission to create a channel in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/channels.html#channelspost
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag for a MediaPackage request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys for a MediaPackage resource or request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateChannel = "mediapackage:CreateChannel",

  /**
   * Write - Grants permission to create a harvest job in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs.html#harvest_jobspost
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag for a MediaPackage request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys for a MediaPackage resource or request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateHarvestJob = "mediapackage:CreateHarvestJob",

  /**
   * Write - Grants permission to create an endpoint in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints.html#origin_endpointspost
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag for a MediaPackage request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys for a MediaPackage resource or request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateOriginEndpoint = "mediapackage:CreateOriginEndpoint",

  /**
   * Write - Grants permission to delete a channel in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-iddelete
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.channels `MediapackageResource.channels`} 
   */
  DeleteChannel = "mediapackage:DeleteChannel",

  /**
   * Write - Grants permission to delete an endpoint in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-iddelete
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.origin_endpoints `MediapackageResource.origin_endpoints`} 
   */
  DeleteOriginEndpoint = "mediapackage:DeleteOriginEndpoint",

  /**
   * Read - Grants permission to view the details of a channel in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-idget
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.channels `MediapackageResource.channels`} 
   */
  DescribeChannel = "mediapackage:DescribeChannel",

  /**
   * Read - Grants permission to view the details of a harvest job in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs-id.html#harvest_jobs-idget
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.harvest_jobs `MediapackageResource.harvest_jobs`} 
   */
  DescribeHarvestJob = "mediapackage:DescribeHarvestJob",

  /**
   * Read - Grants permission to view the details of an endpoint in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-idget
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.origin_endpoints `MediapackageResource.origin_endpoints`} 
   */
  DescribeOriginEndpoint = "mediapackage:DescribeOriginEndpoint",

  /**
   * Read - Grants permission to view a list of channels in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/channels.html#channelsget
   */
  ListChannels = "mediapackage:ListChannels",

  /**
   * Read - Grants permission to view a list of harvest jobs in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/harvest_jobs.html#harvest_jobsget
   */
  ListHarvestJobs = "mediapackage:ListHarvestJobs",

  /**
   * Read - Grants permission to view a list of endpoints in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints.html#origin_endpointsget
   */
  ListOriginEndpoints = "mediapackage:ListOriginEndpoints",

  /**
   * Read - Grants permission to list the tags assigned to a Channel or OriginEndpoint
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arnget
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.channels `MediapackageResource.channels`} 
   * - {@link MediapackageResource.harvest_jobs `MediapackageResource.harvest_jobs`} 
   * - {@link MediapackageResource.origin_endpoints `MediapackageResource.origin_endpoints`} 
   */
  ListTagsForResource = "mediapackage:ListTagsForResource",

  /**
   * Write - Grants permission to rotate credentials for the first IngestEndpoint of a Channel in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id-credentials.html#channels-id-credentialsput
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.channels `MediapackageResource.channels`} 
   */
  RotateChannelCredentials = "mediapackage:RotateChannelCredentials",

  /**
   * Write - Grants permission to rotate IngestEndpoint credentials for a Channel in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id-ingest_endpoints-ingest_endpoint_id-credentials.html#channels-id-ingest_endpoints-ingest_endpoint_id-credentialsput
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.channels `MediapackageResource.channels`} 
   */
  RotateIngestEndpointCredentials = "mediapackage:RotateIngestEndpointCredentials",

  /**
   * Tagging - Grants permission to tag a MediaPackage resource
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/hj-create.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.channels `MediapackageResource.channels`} 
   * - {@link MediapackageResource.harvest_jobs `MediapackageResource.harvest_jobs`} 
   * - {@link MediapackageResource.origin_endpoints `MediapackageResource.origin_endpoints`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag for a MediaPackage request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys for a MediaPackage resource or request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "mediapackage:TagResource",

  /**
   * Tagging - Grants permission to delete tags to a Channel or OriginEndpoint
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/tags-resource-arn.html#tags-resource-arndelete
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.channels `MediapackageResource.channels`} 
   * - {@link MediapackageResource.harvest_jobs `MediapackageResource.harvest_jobs`} 
   * - {@link MediapackageResource.origin_endpoints `MediapackageResource.origin_endpoints`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys for a MediaPackage resource or request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "mediapackage:UntagResource",

  /**
   * Write - Grants permission to make changes to a channel in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/channels-id.html#channels-idput
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.channels `MediapackageResource.channels`} 
   */
  UpdateChannel = "mediapackage:UpdateChannel",

  /**
   * Write - Grants permission to make changes to an endpoint in AWS Elemental MediaPackage
   * @see https://docs.aws.amazon.com/mediapackage/latest/apireference/origin_endpoints-id.html#origin_endpoints-idput
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.origin_endpoints `MediapackageResource.origin_endpoints`} 
   */
  UpdateOriginEndpoint = "mediapackage:UpdateOriginEndpoint",

  /**
   * * - Grant all mediapackage permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediapackageResource.channels `MediapackageResource.channels`} 
   * - {@link MediapackageResource.origin_endpoints `MediapackageResource.origin_endpoints`} 
   * - {@link MediapackageResource.harvest_jobs `MediapackageResource.harvest_jobs`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tag for a MediaPackage request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys for a MediaPackage resource or request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "mediapackage:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackage.html
 */
export const MediapackageResource = {

  /**
   * @see https://docs.aws.amazon.com/mediapackage/latest/ug/channels.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag for a MediaPackage resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  channels: (options: Partial<{partition: string, region: string, account: string, channelIdentifier: string}> = {}) => `arn:${options.partition || '*'}:mediapackage:${options.region || '*'}:${options.account || '*'}:channels/${options.channelIdentifier || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediapackage/latest/ug/endpoints.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag for a MediaPackage resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  origin_endpoints: (options: Partial<{partition: string, region: string, account: string, originEndpointIdentifier: string}> = {}) => `arn:${options.partition || '*'}:mediapackage:${options.region || '*'}:${options.account || '*'}:origin_endpoints/${options.originEndpointIdentifier || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediapackage/latest/ug/harvest-jobs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag for a MediaPackage resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  harvest_jobs: (options: Partial<{partition: string, region: string, account: string, harvestJobIdentifier: string}> = {}) => `arn:${options.partition || '*'}:mediapackage:${options.region || '*'}:${options.account || '*'}:harvest_jobs/${options.harvestJobIdentifier || '*'}`,
}

