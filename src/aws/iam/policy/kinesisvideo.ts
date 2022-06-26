/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisvideostreams.html
 */
export enum KinesisvideoAction {

  /**
   * Write - Grants permission to connect as a master to the signaling channel specified by the endpoint
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsMaster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   */
  ConnectAsMaster = "kinesisvideo:ConnectAsMaster",

  /**
   * Write - Grants permission to connect as a viewer to the signaling channel specified by the endpoint
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ConnectAsViewer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   */
  ConnectAsViewer = "kinesisvideo:ConnectAsViewer",

  /**
   * Write - Grants permission to create a signaling channel
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateSignalingChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters requests based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSignalingChannel = "kinesisvideo:CreateSignalingChannel",

  /**
   * Write - Grants permission to create a Kinesis video stream
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_CreateStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters requests based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateStream = "kinesisvideo:CreateStream",

  /**
   * Write - Grants permission to delete an existing signaling channel
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteSignalingChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   */
  DeleteSignalingChannel = "kinesisvideo:DeleteSignalingChannel",

  /**
   * Write - Grants permission to delete an existing Kinesis video stream
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DeleteStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  DeleteStream = "kinesisvideo:DeleteStream",

  /**
   * List - Grants permission to describe the specified signaling channel
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeSignalingChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   */
  DescribeSignalingChannel = "kinesisvideo:DescribeSignalingChannel",

  /**
   * List - Grants permission to describe the specified Kinesis video stream
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  DescribeStream = "kinesisvideo:DescribeStream",

  /**
   * Read - Grants permission to get a media clip from a video stream
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetClip.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  GetClip = "kinesisvideo:GetClip",

  /**
   * Read - Grants permission to create a URL for MPEG-DASH video streaming
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDASHStreamingSessionURL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  GetDASHStreamingSessionURL = "kinesisvideo:GetDASHStreamingSessionURL",

  /**
   * Read - Grants permission to get an endpoint for a specified stream for either reading or writing media data to Kinesis Video Streams
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  GetDataEndpoint = "kinesisvideo:GetDataEndpoint",

  /**
   * Read - Grants permission to create a URL for HLS video streaming
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetHLSStreamingSessionURL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  GetHLSStreamingSessionURL = "kinesisvideo:GetHLSStreamingSessionURL",

  /**
   * Read - Grants permission to get the ICE server configuration
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetIceServerConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   */
  GetIceServerConfig = "kinesisvideo:GetIceServerConfig",

  /**
   * Read - Grants permission to return media content of a Kinesis video stream
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetMedia.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  GetMedia = "kinesisvideo:GetMedia",

  /**
   * Read - Grants permission to read and return media data only from persisted storage
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetMediaForFragmentList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  GetMediaForFragmentList = "kinesisvideo:GetMediaForFragmentList",

  /**
   * Read - Grants permission to get endpoints for a specified combination of protocol and role for a signaling channel
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetSignalingChannelEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   */
  GetSignalingChannelEndpoint = "kinesisvideo:GetSignalingChannelEndpoint",

  /**
   * List - Grants permission to list the fragments from archival storage based on the pagination token or selector type with range specified
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListFragments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  ListFragments = "kinesisvideo:ListFragments",

  /**
   * List - Grants permission to list your signaling channels
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListSignalingChannels.html
   */
  ListSignalingChannels = "kinesisvideo:ListSignalingChannels",

  /**
   * List - Grants permission to list your Kinesis video streams
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListStreams.html
   */
  ListStreams = "kinesisvideo:ListStreams",

  /**
   * Read - Grants permission to fetch the tags associated with your resource
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  ListTagsForResource = "kinesisvideo:ListTagsForResource",

  /**
   * Read - Grants permission to fetch the tags associated with Kinesis video stream
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_ListTagsForStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  ListTagsForStream = "kinesisvideo:ListTagsForStream",

  /**
   * Write - Grants permission to send media data to a Kinesis video stream
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_PutMedia.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  PutMedia = "kinesisvideo:PutMedia",

  /**
   * Write - Grants permission to send the Alexa SDP offer to the master
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_SendAlexaOfferToMaster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   */
  SendAlexaOfferToMaster = "kinesisvideo:SendAlexaOfferToMaster",

  /**
   * Tagging - Grants permission to attach set of tags to your resource
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters requests based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "kinesisvideo:TagResource",

  /**
   * Tagging - Grants permission to attach set of tags to your Kinesis video streams
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_TagStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters requests based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagStream = "kinesisvideo:TagStream",

  /**
   * Tagging - Grants permission to remove one or more tags from your resource
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters requests based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "kinesisvideo:UntagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from your Kinesis video streams
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UntagStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters requests based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagStream = "kinesisvideo:UntagStream",

  /**
   * Write - Grants permission to update the data retention period of your Kinesis video stream
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateDataRetention.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  UpdateDataRetention = "kinesisvideo:UpdateDataRetention",

  /**
   * Write - Grants permission to update an existing signaling channel
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateSignalingChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   */
  UpdateSignalingChannel = "kinesisvideo:UpdateSignalingChannel",

  /**
   * Write - Grants permission to update an existing Kinesis video stream
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_UpdateStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   */
  UpdateStream = "kinesisvideo:UpdateStream",

  /**
   * * - Grant all kinesisvideo permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisvideostreams.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisvideoResource.channel `KinesisvideoResource.channel`} 
   * - {@link KinesisvideoResource.stream `KinesisvideoResource.stream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters requests based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters requests based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "kinesisvideo:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisvideostreams.html
 */
export const KinesisvideoResource = {

  /**
   * @see https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the stream ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  stream: (options: Partial<{partition: string, region: string, account: string, streamName: string, creationTime: string}> = {}) => `arn:${options.partition || '*'}:kinesisvideo:${options.region || '*'}:${options.account || '*'}:stream/${options.streamName || '*'}/${options.creationTime || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/kinesisvideostreams-webrtc-dg/latest/devguide/kvswebrtc-how-it-works.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the stream ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  channel: (options: Partial<{partition: string, region: string, account: string, channelName: string, creationTime: string}> = {}) => `arn:${options.partition || '*'}:kinesisvideo:${options.region || '*'}:${options.account || '*'}:channel/${options.channelName || '*'}/${options.creationTime || '*'}`,
}

