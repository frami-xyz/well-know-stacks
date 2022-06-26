/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservice.html
 */
export enum IvsAction {

  /**
   * Read - Grants permission to get multiple channels simultaneously by channel ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_BatchGetChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   */
  BatchGetChannel = "ivs:BatchGetChannel",

  /**
   * Read - Grants permission to get multiple stream keys simultaneously by stream key ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_BatchGetStreamKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.streamKey `IvsResource.streamKey`} 
   */
  BatchGetStreamKey = "ivs:BatchGetStreamKey",

  /**
   * Write - Grants permission to create a new channel and an associated stream key
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_CreateChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   * - {@link IvsResource.streamKey `IvsResource.streamKey`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateChannel = "ivs:CreateChannel",

  /**
   * Write - Grants permission to create a a new recording configuration
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_CreateRecordingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.recordingConfiguration `IvsResource.recordingConfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateRecordingConfiguration = "ivs:CreateRecordingConfiguration",

  /**
   * Write - Grants permission to create a stream key
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_CreateStreamKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.streamKey `IvsResource.streamKey`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateStreamKey = "ivs:CreateStreamKey",

  /**
   * Write - Grants permission to delete a channel and channel's stream keys
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_DeleteChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   * - {@link IvsResource.streamKey `IvsResource.streamKey`} 
   */
  DeleteChannel = "ivs:DeleteChannel",

  /**
   * Write - Grants permission to delete the playback key pair for a specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_DeletePlaybackKeyPair.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.playbackKeyPair `IvsResource.playbackKeyPair`} 
   */
  DeletePlaybackKeyPair = "ivs:DeletePlaybackKeyPair",

  /**
   * Write - Grants permission to delete a recording configuration for the specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_DeleteRecordingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.recordingConfiguration `IvsResource.recordingConfiguration`} 
   */
  DeleteRecordingConfiguration = "ivs:DeleteRecordingConfiguration",

  /**
   * Write - Grants permission to delete the stream key for a specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_DeleteStreamKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.streamKey `IvsResource.streamKey`} 
   */
  DeleteStreamKey = "ivs:DeleteStreamKey",

  /**
   * Read - Grants permission to get the channel configuration for a specified channel ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   */
  GetChannel = "ivs:GetChannel",

  /**
   * Read - Grants permission to get the playback keypair information for a specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetPlaybackKeyPair.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.playbackKeyPair `IvsResource.playbackKeyPair`} 
   */
  GetPlaybackKeyPair = "ivs:GetPlaybackKeyPair",

  /**
   * Read - Grants permission to get the recording configuration for the specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetRecordingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.recordingConfiguration `IvsResource.recordingConfiguration`} 
   */
  GetRecordingConfiguration = "ivs:GetRecordingConfiguration",

  /**
   * Read - Grants permission to get information about the active (live) stream on a specified channel
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   */
  GetStream = "ivs:GetStream",

  /**
   * Read - Grants permission to get stream-key information for a specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetStreamKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.streamKey `IvsResource.streamKey`} 
   */
  GetStreamKey = "ivs:GetStreamKey",

  /**
   * Read - Grants permission to get information about the stream session on a specified channel
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_GetStreamSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   */
  GetStreamSession = "ivs:GetStreamSession",

  /**
   * Write - Grants permission to import the public key
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_ImportPlaybackKeyPair.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.playbackKeyPair `IvsResource.playbackKeyPair`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ImportPlaybackKeyPair = "ivs:ImportPlaybackKeyPair",

  /**
   * List - Grants permission to get summary information about channels
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListChannels.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   */
  ListChannels = "ivs:ListChannels",

  /**
   * List - Grants permission to get summary information about playback key pairs
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListPlaybackKeyPairs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.playbackKeyPair `IvsResource.playbackKeyPair`} 
   */
  ListPlaybackKeyPairs = "ivs:ListPlaybackKeyPairs",

  /**
   * List - Grants permission to get summary information about recording configurations
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListRecordingConfigurations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.recordingConfiguration `IvsResource.recordingConfiguration`} 
   */
  ListRecordingConfigurations = "ivs:ListRecordingConfigurations",

  /**
   * List - Grants permission to get summary information about stream keys
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListStreamKeys.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   * - {@link IvsResource.streamKey `IvsResource.streamKey`} 
   */
  ListStreamKeys = "ivs:ListStreamKeys",

  /**
   * List - Grants permission to get summary information about streams sessions on a specified channel
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListStreamSessions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   */
  ListStreamSessions = "ivs:ListStreamSessions",

  /**
   * List - Grants permission to get summary information about live streams
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListStreams.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   */
  ListStreams = "ivs:ListStreams",

  /**
   * Read - Grants permission to get information about the tags for a specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   * - {@link IvsResource.playbackKeyPair `IvsResource.playbackKeyPair`} 
   * - {@link IvsResource.recordingConfiguration `IvsResource.recordingConfiguration`} 
   * - {@link IvsResource.streamKey `IvsResource.streamKey`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "ivs:ListTagsForResource",

  /**
   * Write - Grants permission to insert metadata into an RTMP stream for a specified channel
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_PutMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   */
  PutMetadata = "ivs:PutMetadata",

  /**
   * Write - Grants permission to disconnect a streamer on a specified channel
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_StopStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   */
  StopStream = "ivs:StopStream",

  /**
   * Tagging - Grants permission to add or update tags for a resource with a specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   * - {@link IvsResource.playbackKeyPair `IvsResource.playbackKeyPair`} 
   * - {@link IvsResource.recordingConfiguration `IvsResource.recordingConfiguration`} 
   * - {@link IvsResource.streamKey `IvsResource.streamKey`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "ivs:TagResource",

  /**
   * Tagging - Grants permission to remove tags for a resource with a specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   * - {@link IvsResource.playbackKeyPair `IvsResource.playbackKeyPair`} 
   * - {@link IvsResource.recordingConfiguration `IvsResource.recordingConfiguration`} 
   * - {@link IvsResource.streamKey `IvsResource.streamKey`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "ivs:UntagResource",

  /**
   * Write - Grants permission to update a channel's configuration
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_UpdateChannel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   */
  UpdateChannel = "ivs:UpdateChannel",

  /**
   * * - Grant all ivs permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvsResource.channel `IvsResource.channel`} 
   * - {@link IvsResource.streamKey `IvsResource.streamKey`} 
   * - {@link IvsResource.recordingConfiguration `IvsResource.recordingConfiguration`} 
   * - {@link IvsResource.playbackKeyPair `IvsResource.playbackKeyPair`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "ivs:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservice.html
 */
export const IvsResource = {

  /**
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_Channel.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  channel: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:ivs:${options.region || '*'}:${options.account || '*'}:channel/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_StreamKey.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  streamKey: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:ivs:${options.region || '*'}:${options.account || '*'}:stream-key/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_PlaybackKeyPair.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  playbackKeyPair: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:ivs:${options.region || '*'}:${options.account || '*'}:playback-key/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ivs/latest/APIReference/API_RecordingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  recordingConfiguration: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:ivs:${options.region || '*'}:${options.account || '*'}:recording-configuration/${options.resourceId || '*'}`,
}

