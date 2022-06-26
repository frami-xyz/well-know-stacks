/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_high-volumeoutboundcommunications.html
 */
export enum ConnectCampaignsAction {

  /**
   * Write - Grants permission to create a campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCampaign = "connect-campaigns:CreateCampaign",

  /**
   * Write - Grants permission to delete a campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   */
  DeleteCampaign = "connect-campaigns:DeleteCampaign",

  /**
   * Write - Grants permission to remove configuration information for an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  DeleteConnectInstanceConfig = "connect-campaigns:DeleteConnectInstanceConfig",

  /**
   * Write - Grants permission to remove onboarding job for an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  DeleteInstanceOnboardingJob = "connect-campaigns:DeleteInstanceOnboardingJob",

  /**
   * Read - Grants permission to describe a specific campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeCampaign = "connect-campaigns:DescribeCampaign",

  /**
   * Read - Grants permission to get state of a campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetCampaignState = "connect-campaigns:GetCampaignState",

  /**
   * Read - Grants permission to get state of campaigns
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetCampaignStateBatch = "connect-campaigns:GetCampaignStateBatch",

  /**
   * Read - Grants permission to get configuration information for an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  GetConnectInstanceConfig = "connect-campaigns:GetConnectInstanceConfig",

  /**
   * Read - Grants permission to get onboarding job status for an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  GetInstanceOnboardingJobStatus = "connect-campaigns:GetInstanceOnboardingJobStatus",

  /**
   * List - Grants permission to provide summary of all campaigns
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListCampaigns = "connect-campaigns:ListCampaigns",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "connect-campaigns:ListTagsForResource",

  /**
   * Write - Grants permission to pause a campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   */
  PauseCampaign = "connect-campaigns:PauseCampaign",

  /**
   * Write - Grants permission to create dial requests for the specified campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   */
  PutDialRequestBatch = "connect-campaigns:PutDialRequestBatch",

  /**
   * Write - Grants permission to resume a campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   */
  ResumeCampaign = "connect-campaigns:ResumeCampaign",

  /**
   * Write - Grants permission to start a campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   */
  StartCampaign = "connect-campaigns:StartCampaign",

  /**
   * Write - Grants permission to start onboarding job for an Amazon Connect instance
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   */
  StartInstanceOnboardingJob = "connect-campaigns:StartInstanceOnboardingJob",

  /**
   * Write - Grants permission to stop a campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   */
  StopCampaign = "connect-campaigns:StopCampaign",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "connect-campaigns:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "connect-campaigns:UntagResource",

  /**
   * Write - Grants permission to update the dialer configuration of a campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   */
  UpdateCampaignDialerConfig = "connect-campaigns:UpdateCampaignDialerConfig",

  /**
   * Write - Grants permission to update the name of a campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   */
  UpdateCampaignName = "connect-campaigns:UpdateCampaignName",

  /**
   * Write - Grants permission to update the outbound call configuration of a campaign
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   */
  UpdateCampaignOutboundCallConfig = "connect-campaigns:UpdateCampaignOutboundCallConfig",

  /**
   * * - Grant all connect-campaigns permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_high-volumeoutboundcommunications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ConnectCampaignsResource.campaign `ConnectCampaignsResource.campaign`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "connect-campaigns:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_high-volumeoutboundcommunications.html
 */
export const ConnectCampaignsResource = {

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-high-volume-outbound-communications.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  campaign: (options: Partial<{partition: string, region: string, account: string, campaignId: string}> = {}) => `arn:${options.partition || '*'}:connect-campaigns:${options.region || '*'}:${options.account || '*'}:campaign/${options.campaignId || '*'}`,
}

