/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediatailor.html
 */
export enum MediatailorAction {

  /**
   * Write - Grants permission to configure logs for a playback configuration
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/configurelogs-playbackconfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.playbackConfiguration `MediatailorResource.playbackConfiguration`} 
   */
  ConfigureLogsForPlaybackConfiguration = "mediatailor:ConfigureLogsForPlaybackConfiguration",

  /**
   * Write - Grants permission to create a new channel
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateChannel = "mediatailor:CreateChannel",

  /**
   * Write - Grants permission to create a new live source on the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLiveSource = "mediatailor:CreateLiveSource",

  /**
   * Write - Grants permission to create a prefetch schedule for the playback configuration with the specified playback configuration name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.playbackConfiguration `MediatailorResource.playbackConfiguration`} 
   */
  CreatePrefetchSchedule = "mediatailor:CreatePrefetchSchedule",

  /**
   * Write - Grants permission to create a new program on the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   */
  CreateProgram = "mediatailor:CreateProgram",

  /**
   * Write - Grants permission to create a new source location
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSourceLocation = "mediatailor:CreateSourceLocation",

  /**
   * Write - Grants permission to create a new VOD source on the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateVodSource = "mediatailor:CreateVodSource",

  /**
   * Write - Grants permission to delete the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   */
  DeleteChannel = "mediatailor:DeleteChannel",

  /**
   * PermissionsManagement - Grants permission to delete the IAM policy on the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-policy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   */
  DeleteChannelPolicy = "mediatailor:DeleteChannelPolicy",

  /**
   * Write - Grants permission to delete the live source with the specified live source name on the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.liveSource `MediatailorResource.liveSource`} 
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   */
  DeleteLiveSource = "mediatailor:DeleteLiveSource",

  /**
   * Write - Grants permission to delete the specified playback configuration
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.playbackConfiguration `MediatailorResource.playbackConfiguration`} 
   */
  DeletePlaybackConfiguration = "mediatailor:DeletePlaybackConfiguration",

  /**
   * Write - Grants permission to delete a prefetch schedule for a playback configuration with the specified prefetch schedule name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.playbackConfiguration `MediatailorResource.playbackConfiguration`} 
   * - {@link MediatailorResource.prefetchSchedule `MediatailorResource.prefetchSchedule`} 
   */
  DeletePrefetchSchedule = "mediatailor:DeletePrefetchSchedule",

  /**
   * Write - Grants permission to delete the program with the specified program name on the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   * - {@link MediatailorResource.program `MediatailorResource.program`} 
   */
  DeleteProgram = "mediatailor:DeleteProgram",

  /**
   * Write - Grants permission to delete the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   */
  DeleteSourceLocation = "mediatailor:DeleteSourceLocation",

  /**
   * Write - Grants permission to delete the VOD source with the specified VOD source name on the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   * - {@link MediatailorResource.vodSource `MediatailorResource.vodSource`} 
   */
  DeleteVodSource = "mediatailor:DeleteVodSource",

  /**
   * Read - Grants permission to retrieve the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   */
  DescribeChannel = "mediatailor:DescribeChannel",

  /**
   * Read - Grants permission to retrieve the live source with the specified live source name on the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.liveSource `MediatailorResource.liveSource`} 
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   */
  DescribeLiveSource = "mediatailor:DescribeLiveSource",

  /**
   * Read - Grants permission to retrieve the program with the specified program name on the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   * - {@link MediatailorResource.program `MediatailorResource.program`} 
   */
  DescribeProgram = "mediatailor:DescribeProgram",

  /**
   * Read - Grants permission to retrieve the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   */
  DescribeSourceLocation = "mediatailor:DescribeSourceLocation",

  /**
   * Read - Grants permission to retrieve the VOD source with the specified VOD source name on the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   * - {@link MediatailorResource.vodSource `MediatailorResource.vodSource`} 
   */
  DescribeVodSource = "mediatailor:DescribeVodSource",

  /**
   * Read - Grants permission to read the IAM policy on the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-policy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   */
  GetChannelPolicy = "mediatailor:GetChannelPolicy",

  /**
   * Read - Grants permission to retrieve the schedule of programs on the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-schedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   */
  GetChannelSchedule = "mediatailor:GetChannelSchedule",

  /**
   * Read - Grants permission to retrieve the configuration for the specified name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.playbackConfiguration `MediatailorResource.playbackConfiguration`} 
   */
  GetPlaybackConfiguration = "mediatailor:GetPlaybackConfiguration",

  /**
   * Read - Grants permission to retrieve prefetch schedule for a playback configuration with the specified prefetch schedule name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname-name.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.playbackConfiguration `MediatailorResource.playbackConfiguration`} 
   * - {@link MediatailorResource.prefetchSchedule `MediatailorResource.prefetchSchedule`} 
   */
  GetPrefetchSchedule = "mediatailor:GetPrefetchSchedule",

  /**
   * Read - Grants permission to retrieve the list of alerts on a resource
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/alerts.html
   */
  ListAlerts = "mediatailor:ListAlerts",

  /**
   * Read - Grants permission to retrieve the list of existing channels
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channels.html
   */
  ListChannels = "mediatailor:ListChannels",

  /**
   * Read - Grants permission to retrieve the list of existing live sources on the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   */
  ListLiveSources = "mediatailor:ListLiveSources",

  /**
   * List - Grants permission to retrieve the list of available configurations
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfigurations.html
   */
  ListPlaybackConfigurations = "mediatailor:ListPlaybackConfigurations",

  /**
   * List - Grants permission to retrieve the list of prefetch schedules for a playback configuration
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.playbackConfiguration `MediatailorResource.playbackConfiguration`} 
   */
  ListPrefetchSchedules = "mediatailor:ListPrefetchSchedules",

  /**
   * Read - Grants permission to retrieve the list of existing source locations
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocations.html
   */
  ListSourceLocations = "mediatailor:ListSourceLocations",

  /**
   * Read - Grants permission to list the tags assigned to the specified playback configuration resource
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   * - {@link MediatailorResource.liveSource `MediatailorResource.liveSource`} 
   * - {@link MediatailorResource.playbackConfiguration `MediatailorResource.playbackConfiguration`} 
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   * - {@link MediatailorResource.vodSource `MediatailorResource.vodSource`} 
   */
  ListTagsForResource = "mediatailor:ListTagsForResource",

  /**
   * Read - Grants permission to retrieve the list of existing VOD sources on the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   */
  ListVodSources = "mediatailor:ListVodSources",

  /**
   * PermissionsManagement - Grants permission to set the IAM policy on the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-policy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   */
  PutChannelPolicy = "mediatailor:PutChannelPolicy",

  /**
   * Write - Grants permission to add a new configuration
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutPlaybackConfiguration = "mediatailor:PutPlaybackConfiguration",

  /**
   * Write - Grants permission to start the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-start.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   */
  StartChannel = "mediatailor:StartChannel",

  /**
   * Write - Grants permission to stop the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-stop.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   */
  StopChannel = "mediatailor:StopChannel",

  /**
   * Tagging - Grants permission to add tags to the specified playback configuration resource
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   * - {@link MediatailorResource.liveSource `MediatailorResource.liveSource`} 
   * - {@link MediatailorResource.playbackConfiguration `MediatailorResource.playbackConfiguration`} 
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   * - {@link MediatailorResource.vodSource `MediatailorResource.vodSource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "mediatailor:TagResource",

  /**
   * Tagging - Grants permission to remove tags from the specified playback configuration resource
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/tags-resourcearn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   * - {@link MediatailorResource.liveSource `MediatailorResource.liveSource`} 
   * - {@link MediatailorResource.playbackConfiguration `MediatailorResource.playbackConfiguration`} 
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   * - {@link MediatailorResource.vodSource `MediatailorResource.vodSource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "mediatailor:UntagResource",

  /**
   * Write - Grants permission to update the channel with the specified channel name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   */
  UpdateChannel = "mediatailor:UpdateChannel",

  /**
   * Write - Grants permission to update the live source with the specified live source name on the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.liveSource `MediatailorResource.liveSource`} 
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   */
  UpdateLiveSource = "mediatailor:UpdateLiveSource",

  /**
   * Write - Grants permission to update the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   */
  UpdateSourceLocation = "mediatailor:UpdateSourceLocation",

  /**
   * Write - Grants permission to update the VOD source with the specified VOD source name on the source location with the specified source location name
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   * - {@link MediatailorResource.vodSource `MediatailorResource.vodSource`} 
   */
  UpdateVodSource = "mediatailor:UpdateVodSource",

  /**
   * * - Grant all mediatailor permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediatailor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MediatailorResource.playbackConfiguration `MediatailorResource.playbackConfiguration`} 
   * - {@link MediatailorResource.sourceLocation `MediatailorResource.sourceLocation`} 
   * - {@link MediatailorResource.channel `MediatailorResource.channel`} 
   * - {@link MediatailorResource.liveSource `MediatailorResource.liveSource`} 
   * - {@link MediatailorResource.prefetchSchedule `MediatailorResource.prefetchSchedule`} 
   * - {@link MediatailorResource.program `MediatailorResource.program`} 
   * - {@link MediatailorResource.vodSource `MediatailorResource.vodSource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "mediatailor:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediatailor.html
 */
export const MediatailorResource = {

  /**
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/playbackconfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  playbackConfiguration: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:mediatailor:${options.region || '*'}:${options.account || '*'}:playbackConfiguration/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/prefetchschedule-playbackconfigurationname-name.html
   */
  prefetchSchedule: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:mediatailor:${options.region || '*'}:${options.account || '*'}:prefetchSchedule/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  channel: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:mediatailor:${options.region || '*'}:${options.account || '*'}:channel/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/channel-channelname-program-programname.html
   */
  program: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:mediatailor:${options.region || '*'}:${options.account || '*'}:program/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  sourceLocation: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:mediatailor:${options.region || '*'}:${options.account || '*'}:sourceLocation/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-vodsource-vodsourcename.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  vodSource: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:mediatailor:${options.region || '*'}:${options.account || '*'}:vodSource/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/mediatailor/latest/apireference/sourcelocation-sourcelocationname-livesource-livesourcename.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  liveSource: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:mediatailor:${options.region || '*'}:${options.account || '*'}:liveSource/${options.resourceId || '*'}`,
}

