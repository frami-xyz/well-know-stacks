/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointemailservice.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonses.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleemailservicev2.html
 */
export enum SesAction {

  /**
   * Write - Grants permission to create a configuration set
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateConfigurationSet = "ses:CreateConfigurationSet",

  /**
   * Write - Grants permission to create a configuration set event destination
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSetEventDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateConfigurationSetEventDestination = "ses:CreateConfigurationSetEventDestination",

  /**
   * Write - Grants permission to create a new pool of dedicated IP addresses
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDedicatedIpPool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.dedicatedIpPool `SesResource.dedicatedIpPool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDedicatedIpPool = "ses:CreateDedicatedIpPool",

  /**
   * Write - Grants permission to create a new predictive inbox placement test
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDeliverabilityTestReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDeliverabilityTestReport = "ses:CreateDeliverabilityTestReport",

  /**
   * Write - Grants permission to start the process of verifying an email identity
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateEmailIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEmailIdentity = "ses:CreateEmailIdentity",

  /**
   * Write - Grants permission to delete an existing configuration set
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteConfigurationSet = "ses:DeleteConfigurationSet",

  /**
   * Write - Grants permission to delete an event destination
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSetEventDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteConfigurationSetEventDestination = "ses:DeleteConfigurationSetEventDestination",

  /**
   * Write - Grants permission to delete a dedicated IP pool
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteDedicatedIpPool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.dedicatedIpPool `SesResource.dedicatedIpPool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteDedicatedIpPool = "ses:DeleteDedicatedIpPool",

  /**
   * Write - Grants permission to delete an email identity that you previously verified
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteEmailIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteEmailIdentity = "ses:DeleteEmailIdentity",

  /**
   * Read - Grants permission to get information about the email-sending status and capabilities
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccount = "ses:GetAccount",

  /**
   * Read - Grants permission to retrieve a list of the deny lists on which your dedicated IP addresses appear
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetBlacklistReports.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetBlacklistReports = "ses:GetBlacklistReports",

  /**
   * Read - Grants permission to get information about an existing configuration set
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetConfigurationSet = "ses:GetConfigurationSet",

  /**
   * Read - Grants permission to retrieve a list of event destinations that are associated with a configuration set
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSetEventDestinations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetConfigurationSetEventDestinations = "ses:GetConfigurationSetEventDestinations",

  /**
   * Read - Grants permission to get information about a dedicated IP address
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIp.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetDedicatedIp = "ses:GetDedicatedIp",

  /**
   * Read - Grants permission to list the dedicated IP addresses that are associated with your account
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIps.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.dedicatedIpPool `SesResource.dedicatedIpPool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetDedicatedIps = "ses:GetDedicatedIps",

  /**
   * Read - Grants permission to get the status of the Deliverability dashboard
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityDashboardOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetDeliverabilityDashboardOptions = "ses:GetDeliverabilityDashboardOptions",

  /**
   * Read - Grants permission to retrieve the results of a predictive inbox placement test
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityTestReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.deliverabilityTestReport `SesResource.deliverabilityTestReport`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetDeliverabilityTestReport = "ses:GetDeliverabilityTestReport",

  /**
   * Read - Grants permission to retrieve all the deliverability data for a specific campaign
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDomainDeliverabilityCampaign.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetDomainDeliverabilityCampaign = "ses:GetDomainDeliverabilityCampaign",

  /**
   * Read - Grants permission to retrieve inbox placement and engagement rates for the domains that you use to send email
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDomainStatisticsReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetDomainStatisticsReport = "ses:GetDomainStatisticsReport",

  /**
   * Read - Grants permission to get information about a specific identity associated with your account
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetEmailIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetEmailIdentity = "ses:GetEmailIdentity",

  /**
   * List - Grants permission to list all of the configuration sets associated with your account
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListConfigurationSets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListConfigurationSets = "ses:ListConfigurationSets",

  /**
   * List - Grants permission to list all of the dedicated IP pools that exist in your account
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDedicatedIpPools.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListDedicatedIpPools = "ses:ListDedicatedIpPools",

  /**
   * List - Grants permission to retrieve a list of the predictive inbox placement tests that you've performed, regardless of their statuses
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDeliverabilityTestReports.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListDeliverabilityTestReports = "ses:ListDeliverabilityTestReports",

  /**
   * Read - Grants permission to retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDomainDeliverabilityCampaigns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListDomainDeliverabilityCampaigns = "ses:ListDomainDeliverabilityCampaigns",

  /**
   * List - Grants permission to list all of the email identities that are associated with your account
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListEmailIdentities.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListEmailIdentities = "ses:ListEmailIdentities",

  /**
   * Read - Grants permission to retrieve a list of the tags (keys and values) that are associated with a specific resource
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * - {@link SesResource.dedicatedIpPool `SesResource.dedicatedIpPool`} 
   * - {@link SesResource.deliverabilityTestReport `SesResource.deliverabilityTestReport`} 
   * - {@link SesResource.identity `SesResource.identity`} 
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "ses:ListTagsForResource",

  /**
   * Write - Grants permission to enable or disable the automatic warm-up feature for dedicated IP addresses
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountDedicatedIpWarmupAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutAccountDedicatedIpWarmupAttributes = "ses:PutAccountDedicatedIpWarmupAttributes",

  /**
   * Write - Grants permission to enable or disable the ability of your account to send email
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountSendingAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutAccountSendingAttributes = "ses:PutAccountSendingAttributes",

  /**
   * Write - Grants permission to associate a configuration set with a dedicated IP pool
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetDeliveryOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutConfigurationSetDeliveryOptions = "ses:PutConfigurationSetDeliveryOptions",

  /**
   * Write - Grants permission to enable or disable collection of reputation metrics for emails that you send using a particular configuration set
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetReputationOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutConfigurationSetReputationOptions = "ses:PutConfigurationSetReputationOptions",

  /**
   * Write - Grants permission to enable or disable email sending for messages that use a particular configuration set
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetSendingOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutConfigurationSetSendingOptions = "ses:PutConfigurationSetSendingOptions",

  /**
   * Write - Grants permission to specify a custom domain to use for open and click tracking elements in email that you send using a particular configuration set
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetTrackingOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutConfigurationSetTrackingOptions = "ses:PutConfigurationSetTrackingOptions",

  /**
   * Write - Grants permission to move a dedicated IP address to an existing dedicated IP pool
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpInPool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.dedicatedIpPool `SesResource.dedicatedIpPool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutDedicatedIpInPool = "ses:PutDedicatedIpInPool",

  /**
   * Write - Grants permission to enable dedicated IP warm up attributes
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpWarmupAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutDedicatedIpWarmupAttributes = "ses:PutDedicatedIpWarmupAttributes",

  /**
   * Write - Grants permission to enable or disable the Deliverability dashboard
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDeliverabilityDashboardOption.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutDeliverabilityDashboardOption = "ses:PutDeliverabilityDashboardOption",

  /**
   * Write - Grants permission to enable or disable DKIM authentication for an email identity
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityDkimAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutEmailIdentityDkimAttributes = "ses:PutEmailIdentityDkimAttributes",

  /**
   * Write - Grants permission to enable or disable feedback forwarding for an identity
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityFeedbackAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutEmailIdentityFeedbackAttributes = "ses:PutEmailIdentityFeedbackAttributes",

  /**
   * Write - Grants permission to enable or disable the custom MAIL FROM domain configuration for an email identity
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityMailFromAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutEmailIdentityMailFromAttributes = "ses:PutEmailIdentityMailFromAttributes",

  /**
   * Write - Grants permission to send an email message
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_SendEmail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * - {@link SesResource.template `SesResource.template`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FeedbackAddress`: Filters actions based on the "Return-Path" address, which specifies where bounces and complaints are sent by email feedback forwarding ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromAddress`: Filters actions based on the "From" address of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromDisplayName`: Filters actions based on the "From" address that is used as the display name of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:Recipients`: Filters actions based on the recipient addresses of a message, which include the "To", "CC", and "BCC" addresses ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  SendEmail = "ses:SendEmail",

  /**
   * Tagging - Grants permission to add one or more tags (keys and values) to a specified resource
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * - {@link SesResource.dedicatedIpPool `SesResource.dedicatedIpPool`} 
   * - {@link SesResource.deliverabilityTestReport `SesResource.deliverabilityTestReport`} 
   * - {@link SesResource.identity `SesResource.identity`} 
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "ses:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags (keys and values) from a specified resource
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * - {@link SesResource.dedicatedIpPool `SesResource.dedicatedIpPool`} 
   * - {@link SesResource.deliverabilityTestReport `SesResource.deliverabilityTestReport`} 
   * - {@link SesResource.identity `SesResource.identity`} 
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "ses:UntagResource",

  /**
   * Write - Grants permission to update the configuration of an event destination for a configuration set
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UpdateConfigurationSetEventDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateConfigurationSetEventDestination = "ses:UpdateConfigurationSetEventDestination",

  /**
   * Write - Grants permission to create a receipt rule set by cloning an existing one
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_CloneReceiptRuleSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CloneReceiptRuleSet = "ses:CloneReceiptRuleSet",

  /**
   * Write - Grants permission to creates an association between a configuration set and a custom domain for open and click event tracking
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetTrackingOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateConfigurationSetTrackingOptions = "ses:CreateConfigurationSetTrackingOptions",

  /**
   * Write - Grants permission to create a new custom verification email template
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateCustomVerificationEmailTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.customVerificationEmailTemplate `SesResource.customVerificationEmailTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCustomVerificationEmailTemplate = "ses:CreateCustomVerificationEmailTemplate",

  /**
   * Write - Grants permission to create a new IP address filter
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateReceiptFilter = "ses:CreateReceiptFilter",

  /**
   * Write - Grants permission to create a receipt rule
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateReceiptRule = "ses:CreateReceiptRule",

  /**
   * Write - Grants permission to create an empty receipt rule set
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRuleSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateReceiptRuleSet = "ses:CreateReceiptRuleSet",

  /**
   * Write - Grants permission to creates an email template
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateTemplate = "ses:CreateTemplate",

  /**
   * Write - Grants permission to delete an association between a configuration set and a custom domain for open and click event tracking
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetTrackingOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteConfigurationSetTrackingOptions = "ses:DeleteConfigurationSetTrackingOptions",

  /**
   * Write - Grants permission to delete an existing custom verification email template
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteCustomVerificationEmailTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.customVerificationEmailTemplate `SesResource.customVerificationEmailTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteCustomVerificationEmailTemplate = "ses:DeleteCustomVerificationEmailTemplate",

  /**
   * Write - Grants permission to delete the specified identity
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteIdentity = "ses:DeleteIdentity",

  /**
   * PermissionsManagement - Grants permission to delete the specified sending authorization policy for the given identity (an email address or a domain)
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentityPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteIdentityPolicy = "ses:DeleteIdentityPolicy",

  /**
   * Write - Grants permission to delete the specified IP address filter
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptFilter.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteReceiptFilter = "ses:DeleteReceiptFilter",

  /**
   * Write - Grants permission to delete the specified receipt rule
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteReceiptRule = "ses:DeleteReceiptRule",

  /**
   * Write - Grants permission to delete the specified receipt rule set and all of the receipt rules it contains
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRuleSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteReceiptRuleSet = "ses:DeleteReceiptRuleSet",

  /**
   * Write - Grants permission to delete an email template
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteTemplate = "ses:DeleteTemplate",

  /**
   * Write - Grants permission to delete the specified email address from the list of verified addresses
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteVerifiedEmailAddress.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteVerifiedEmailAddress = "ses:DeleteVerifiedEmailAddress",

  /**
   * Read - Grants permission to return the metadata and receipt rules for the receipt rule set that is currently active
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeActiveReceiptRuleSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeActiveReceiptRuleSet = "ses:DescribeActiveReceiptRuleSet",

  /**
   * Read - Grants permission to return the details of the specified configuration set
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeConfigurationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeConfigurationSet = "ses:DescribeConfigurationSet",

  /**
   * Read - Grants permission to return the details of the specified receipt rule
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeReceiptRule = "ses:DescribeReceiptRule",

  /**
   * Read - Grants permission to return the details of the specified receipt rule set
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRuleSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeReceiptRuleSet = "ses:DescribeReceiptRuleSet",

  /**
   * Read - Grants permission to return the email sending status of your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_GetAccountSendingEnabled.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAccountSendingEnabled = "ses:GetAccountSendingEnabled",

  /**
   * Read - Grants permission to return the custom email verification template for the template name you specify
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_GetCustomVerificationEmailTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.customVerificationEmailTemplate `SesResource.customVerificationEmailTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetCustomVerificationEmailTemplate = "ses:GetCustomVerificationEmailTemplate",

  /**
   * Read - Grants permission to return the current status of Easy DKIM signing for an entity
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityDkimAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetIdentityDkimAttributes = "ses:GetIdentityDkimAttributes",

  /**
   * Read - Grants permission to return the custom MAIL FROM attributes for a list of identities (email addresses and/or domains)
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityMailFromDomainAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetIdentityMailFromDomainAttributes = "ses:GetIdentityMailFromDomainAttributes",

  /**
   * Read - Grants permission to return a structure describing identity notification attributes for a list of verified identities (email addresses and/or domains),
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityNotificationAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetIdentityNotificationAttributes = "ses:GetIdentityNotificationAttributes",

  /**
   * Read - Grants permission to return the requested sending authorization policies for the given identity (an email address or a domain)
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetIdentityPolicies = "ses:GetIdentityPolicies",

  /**
   * Read - Grants permission to return the verification status and (for domain identities) the verification token for a list of identities
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityVerificationAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetIdentityVerificationAttributes = "ses:GetIdentityVerificationAttributes",

  /**
   * Read - Grants permission to return the user's current sending limits
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendQuota.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetSendQuota = "ses:GetSendQuota",

  /**
   * Read - Grants permission to returns the user's sending statistics
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendStatistics.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetSendStatistics = "ses:GetSendStatistics",

  /**
   * Read - Grants permission to return the template object, which includes the subject line, HTML par, and text part for the template you specify
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_GetTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetTemplate = "ses:GetTemplate",

  /**
   * List - Grants permission to list all of the existing custom verification email templates for your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_ListCustomVerificationEmailTemplates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListCustomVerificationEmailTemplates = "ses:ListCustomVerificationEmailTemplates",

  /**
   * List - Grants permission to list the email identities for your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentities.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListIdentities = "ses:ListIdentities",

  /**
   * List - Grants permission to list all of the email templates for your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentityPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListIdentityPolicies = "ses:ListIdentityPolicies",

  /**
   * Read - Grants permission to list the IP address filters associated with your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptFilters.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListReceiptFilters = "ses:ListReceiptFilters",

  /**
   * Read - Grants permission to list the receipt rule sets that exist under your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptRuleSets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListReceiptRuleSets = "ses:ListReceiptRuleSets",

  /**
   * List - Grants permission to list the email templates present in your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_ListTemplates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTemplates = "ses:ListTemplates",

  /**
   * Read - Grants permission to list all of the email addresses that have been verified in your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_ListVerifiedEmailAddresses.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListVerifiedEmailAddresses = "ses:ListVerifiedEmailAddresses",

  /**
   * PermissionsManagement - Grants permission to add or update a sending authorization policy for the specified identity (an email address or a domain)
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_PutIdentityPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutIdentityPolicy = "ses:PutIdentityPolicy",

  /**
   * Write - Grants permission to reorder the receipt rules within a receipt rule set
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_ReorderReceiptRuleSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ReorderReceiptRuleSet = "ses:ReorderReceiptRuleSet",

  /**
   * Write - Grants permission to generate and send a bounce message to the sender of an email you received through Amazon SES
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBounce.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromAddress`: Filters actions based on the "From" address of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SendBounce = "ses:SendBounce",

  /**
   * Write - Grants permission to compose an email message to multiple destinations
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBulkTemplatedEmail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * - {@link SesResource.template `SesResource.template`} 
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FeedbackAddress`: Filters actions based on the "Return-Path" address, which specifies where bounces and complaints are sent by email feedback forwarding ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromAddress`: Filters actions based on the "From" address of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromDisplayName`: Filters actions based on the "From" address that is used as the display name of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:Recipients`: Filters actions based on the recipient addresses of a message, which include the "To", "CC", and "BCC" addresses ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  SendBulkTemplatedEmail = "ses:SendBulkTemplatedEmail",

  /**
   * Write - Grants permission to add an email address to the list of identities and attempts to verify it for your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SendCustomVerificationEmail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * - {@link SesResource.customVerificationEmailTemplate `SesResource.customVerificationEmailTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FeedbackAddress`: Filters actions based on the "Return-Path" address, which specifies where bounces and complaints are sent by email feedback forwarding ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromAddress`: Filters actions based on the "From" address of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromDisplayName`: Filters actions based on the "From" address that is used as the display name of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:Recipients`: Filters actions based on the recipient addresses of a message, which include the "To", "CC", and "BCC" addresses ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  SendCustomVerificationEmail = "ses:SendCustomVerificationEmail",

  /**
   * Write - Grants permission to send an email message, with header and content specified by the client
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SendRawEmail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FeedbackAddress`: Filters actions based on the "Return-Path" address, which specifies where bounces and complaints are sent by email feedback forwarding ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromAddress`: Filters actions based on the "From" address of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromDisplayName`: Filters actions based on the "From" address that is used as the display name of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:Recipients`: Filters actions based on the recipient addresses of a message, which include the "To", "CC", and "BCC" addresses ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  SendRawEmail = "ses:SendRawEmail",

  /**
   * Write - Grants permission to compose an email message using an email template
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SendTemplatedEmail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * - {@link SesResource.template `SesResource.template`} 
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FeedbackAddress`: Filters actions based on the "Return-Path" address, which specifies where bounces and complaints are sent by email feedback forwarding ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromAddress`: Filters actions based on the "From" address of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromDisplayName`: Filters actions based on the "From" address that is used as the display name of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:Recipients`: Filters actions based on the recipient addresses of a message, which include the "To", "CC", and "BCC" addresses ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  SendTemplatedEmail = "ses:SendTemplatedEmail",

  /**
   * Write - Grants permission to set the specified receipt rule set as the active receipt rule set
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SetActiveReceiptRuleSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SetActiveReceiptRuleSet = "ses:SetActiveReceiptRuleSet",

  /**
   * Write - Grants permission to enable or disable Easy DKIM signing of email sent from an identity
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityDkimEnabled.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SetIdentityDkimEnabled = "ses:SetIdentityDkimEnabled",

  /**
   * Write - Grants permission to enable or disable whether Amazon SES forwards bounce and complaint notifications for an identity (an email address or a domain)
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityFeedbackForwardingEnabled.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SetIdentityFeedbackForwardingEnabled = "ses:SetIdentityFeedbackForwardingEnabled",

  /**
   * Write - Grants permission to set whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type for a given identity (an email address or a domain)
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityHeadersInNotificationsEnabled.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SetIdentityHeadersInNotificationsEnabled = "ses:SetIdentityHeadersInNotificationsEnabled",

  /**
   * Write - Grants permission to enable or disable the custom MAIL FROM domain setup for a verified identity
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityMailFromDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SetIdentityMailFromDomain = "ses:SetIdentityMailFromDomain",

  /**
   * Write - Grants permission to set an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications for a verified identity
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityNotificationTopic.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SetIdentityNotificationTopic = "ses:SetIdentityNotificationTopic",

  /**
   * Write - Grants permission to set the position of the specified receipt rule in the receipt rule set
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_SetReceiptRulePosition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SetReceiptRulePosition = "ses:SetReceiptRulePosition",

  /**
   * Write - Grants permission to create a preview of the MIME content of an email when provided with a template and a set of replacement data
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_TestRenderTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TestRenderTemplate = "ses:TestRenderTemplate",

  /**
   * Write - Grants permission to enable or disable email sending for your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateAccountSendingEnabled.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateAccountSendingEnabled = "ses:UpdateAccountSendingEnabled",

  /**
   * Write - Grants permission to enable or disable the publishing of reputation metrics for emails sent using a specific configuration set
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetReputationMetricsEnabled.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateConfigurationSetReputationMetricsEnabled = "ses:UpdateConfigurationSetReputationMetricsEnabled",

  /**
   * Write - Grants permission  to enable or disable email sending for messages sent using a specific configuration set
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetSendingEnabled.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateConfigurationSetSendingEnabled = "ses:UpdateConfigurationSetSendingEnabled",

  /**
   * Write - Grants permission to modify an association between a configuration set and a custom domain for open and click event tracking
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetTrackingOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateConfigurationSetTrackingOptions = "ses:UpdateConfigurationSetTrackingOptions",

  /**
   * Write - Grants permission to update an existing custom verification email template
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateCustomVerificationEmailTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.customVerificationEmailTemplate `SesResource.customVerificationEmailTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateCustomVerificationEmailTemplate = "ses:UpdateCustomVerificationEmailTemplate",

  /**
   * Write - Grants permission to update a receipt rule
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateReceiptRule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateReceiptRule = "ses:UpdateReceiptRule",

  /**
   * Write - Grants permission to update an email template
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateTemplate = "ses:UpdateTemplate",

  /**
   * Write - Grants permission to return a set of DKIM tokens for a domain
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainDkim.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  VerifyDomainDkim = "ses:VerifyDomainDkim",

  /**
   * Write - Grants permission to verify a domain
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  VerifyDomainIdentity = "ses:VerifyDomainIdentity",

  /**
   * Write - Grants permission to verify an email address
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailAddress.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  VerifyEmailAddress = "ses:VerifyEmailAddress",

  /**
   * Write - Grants permission to verify an email identity
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailIdentity.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  VerifyEmailIdentity = "ses:VerifyEmailIdentity",

  /**
   * Write - Grants permission to create a contact
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateContact = "ses:CreateContact",

  /**
   * Write - Grants permission to create a contact list
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateContactList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateContactList = "ses:CreateContactList",

  /**
   * PermissionsManagement - Grants permission to create the specified sending authorization policy for the given identity
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailIdentityPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEmailIdentityPolicy = "ses:CreateEmailIdentityPolicy",

  /**
   * Write - Grants permission to create an email template
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.template `SesResource.template`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEmailTemplate = "ses:CreateEmailTemplate",

  /**
   * Write - Grants permission to creates an import job for a data destination
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateImportJob = "ses:CreateImportJob",

  /**
   * Write - Grants permission to delete a contact from a contact list
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteContact = "ses:DeleteContact",

  /**
   * Write - Grants permission to delete a contact list with all of its contacts
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteContactList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteContactList = "ses:DeleteContactList",

  /**
   * PermissionsManagement - Grants permission to delete the specified sending authorization policy for the given identity (an email address or a domain)
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailIdentityPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteEmailIdentityPolicy = "ses:DeleteEmailIdentityPolicy",

  /**
   * Write - Grants permission to delete an email template
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.template `SesResource.template`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteEmailTemplate = "ses:DeleteEmailTemplate",

  /**
   * Write - Grants permission to remove an email address from the suppression list for your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteSuppressedDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteSuppressedDestination = "ses:DeleteSuppressedDestination",

  /**
   * Read - Grants permission to return a contact from a contact list
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetContact = "ses:GetContact",

  /**
   * Read - Grants permission to return contact list metadata
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetContactList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetContactList = "ses:GetContactList",

  /**
   * Read - Grants permission to return the requested sending authorization policies for the given identity (an email address or a domain)
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailIdentityPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetEmailIdentityPolicies = "ses:GetEmailIdentityPolicies",

  /**
   * Read - Grants permission to return the template object, which includes the subject line, HTML part, and text part for the template you specify
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetEmailTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.template `SesResource.template`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetEmailTemplate = "ses:GetEmailTemplate",

  /**
   * Read - Grants permission to provide information about an import job
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.importJob `SesResource.importJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetImportJob = "ses:GetImportJob",

  /**
   * Read - Grants permission to retrieve information about a specific email address that's on the suppression list for your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetSuppressedDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetSuppressedDestination = "ses:GetSuppressedDestination",

  /**
   * List - Grants permission to list all of the contact lists available for your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListContactLists.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListContactLists = "ses:ListContactLists",

  /**
   * List - Grants permission to list the contacts present in a specific contact list
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListContacts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListContacts = "ses:ListContacts",

  /**
   * List - Grants permission to list all of the email templates for your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListEmailTemplates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListEmailTemplates = "ses:ListEmailTemplates",

  /**
   * List - Grants permission to list all of the import jobs for your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListImportJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListImportJobs = "ses:ListImportJobs",

  /**
   * Read - Grants permission to list email addresses that are on the suppression list for your account
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListSuppressedDestinations.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListSuppressedDestinations = "ses:ListSuppressedDestinations",

  /**
   * Write - Grants permission to update your account details
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutAccountDetails = "ses:PutAccountDetails",

  /**
   * Write - Grants permission to change the settings for the account-level suppression list
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutAccountSuppressionAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutAccountSuppressionAttributes = "ses:PutAccountSuppressionAttributes",

  /**
   * Write - Grants permission to specify the account suppression list preferences for a particular configuration set
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutConfigurationSetSuppressionOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutConfigurationSetSuppressionOptions = "ses:PutConfigurationSetSuppressionOptions",

  /**
   * Write - Grants permission to associate a configuration set with an email identity
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityConfigurationSetAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutEmailIdentityConfigurationSetAttributes = "ses:PutEmailIdentityConfigurationSetAttributes",

  /**
   * Write - Grants permission to configure or change the DKIM authentication settings for an email domain identity
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityDkimSigningAttributes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutEmailIdentityDkimSigningAttributes = "ses:PutEmailIdentityDkimSigningAttributes",

  /**
   * Write - Grants permission to add an email address to the suppression list
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutSuppressedDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutSuppressedDestination = "ses:PutSuppressedDestination",

  /**
   * Write - Grants permission to compose an email message to multiple destinations
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendBulkEmail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * - {@link SesResource.template `SesResource.template`} 
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SendBulkEmail = "ses:SendBulkEmail",

  /**
   * Write - Grants permission to create a preview of the MIME content of an email when provided with a template and a set of replacement data
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_TestRenderEmailTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.template `SesResource.template`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TestRenderEmailTemplate = "ses:TestRenderEmailTemplate",

  /**
   * Write - Grants permission to update a contact's preferences for a list
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateContact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateContact = "ses:UpdateContact",

  /**
   * Write - Grants permission to update contact list metadata
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateContactList.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateContactList = "ses:UpdateContactList",

  /**
   * PermissionsManagement - Grants permission to update the specified sending authorization policy for the given identity (an email address or a domain)
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateEmailIdentityPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.identity `SesResource.identity`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateEmailIdentityPolicy = "ses:UpdateEmailIdentityPolicy",

  /**
   * Write - Grants permission to update an email template
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_UpdateEmailTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.template `SesResource.template`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateEmailTemplate = "ses:UpdateEmailTemplate",

  /**
   * * - Grant all ses permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointemailservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SesResource.configurationSet `SesResource.configurationSet`} 
   * - {@link SesResource.dedicatedIpPool `SesResource.dedicatedIpPool`} 
   * - {@link SesResource.identity `SesResource.identity`} 
   * - {@link SesResource.deliverabilityTestReport `SesResource.deliverabilityTestReport`} 
   * - {@link SesResource.contactList `SesResource.contactList`} 
   * - {@link SesResource.template `SesResource.template`} 
   * - {@link SesResource.customVerificationEmailTemplate `SesResource.customVerificationEmailTemplate`} 
   * - {@link SesResource.importJob `SesResource.importJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ses:ApiVersion`: Filters actions based on the SES API version ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FeedbackAddress`: Filters actions based on the "Return-Path" address, which specifies where bounces and complaints are sent by email feedback forwarding ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromAddress`: Filters actions based on the "From" address of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:FromDisplayName`: Filters actions based on the "From" address that is used as the display name of a message ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ses:Recipients`: Filters actions based on the recipient addresses of a message, which include the "To", "CC", and "BCC" addresses ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html#amazonses-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "ses:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpointemailservice.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonses.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpleemailservicev2.html
 */
export const SesResource = {

  /**
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  configurationSet: (options: Partial<{partition: string, region: string, account: string, configurationSetName: string}> = {}) => `arn:${options.partition || '*'}:ses:${options.region || '*'}:${options.account || '*'}:configuration-set/${options.configurationSetName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DedicatedIp.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dedicatedIpPool: (options: Partial<{partition: string, region: string, account: string, dedicatedIPPool: string}> = {}) => `arn:${options.partition || '*'}:ses:${options.region || '*'}:${options.account || '*'}:dedicated-ip-pool/${options.dedicatedIPPool || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeliverabilityTestReport.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deliverabilityTestReport: (options: Partial<{partition: string, region: string, account: string, reportId: string}> = {}) => `arn:${options.partition || '*'}:ses:${options.region || '*'}:${options.account || '*'}:deliverability-test-report/${options.reportId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_IdentityInfo.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  identity: (options: Partial<{partition: string, region: string, account: string, identityName: string}> = {}) => `arn:${options.partition || '*'}:ses:${options.region || '*'}:${options.account || '*'}:identity/${options.identityName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_CustomVerificationEmailTemplate.html
   */
  customVerificationEmailTemplate: (options: Partial<{partition: string, region: string, account: string, templateName: string}> = {}) => `arn:${options.partition || '*'}:ses:${options.region || '*'}:${options.account || '*'}:custom-verification-email-template/${options.templateName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ses/latest/APIReference/API_Template.html
   */
  template: (options: Partial<{partition: string, region: string, account: string, templateName: string}> = {}) => `arn:${options.partition || '*'}:ses:${options.region || '*'}:${options.account || '*'}:template/${options.templateName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ContactList.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  contactList: (options: Partial<{partition: string, region: string, account: string, contactListName: string}> = {}) => `arn:${options.partition || '*'}:ses:${options.region || '*'}:${options.account || '*'}:contact-list/${options.contactListName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ImportJobSummary.html
   */
  importJob: (options: Partial<{partition: string, region: string, account: string, importJobId: string}> = {}) => `arn:${options.partition || '*'}:ses:${options.region || '*'}:${options.account || '*'}:import-job/${options.importJobId || '*'}`,
}

