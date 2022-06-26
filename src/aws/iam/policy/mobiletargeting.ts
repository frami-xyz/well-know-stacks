/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpoint.html
 */
export enum MobiletargetingAction {

  /**
   * Write - Grants permission to create an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateApp = "mobiletargeting:CreateApp",

  /**
   * Write - Grants permission to create a campaign for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html#rest-api-campaigns-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCampaign = "mobiletargeting:CreateCampaign",

  /**
   * Write - Grants permission to create an email template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEmailTemplate = "mobiletargeting:CreateEmailTemplate",

  /**
   * Write - Grants permission to create an export job that exports endpoint definitions to Amazon S3
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  CreateExportJob = "mobiletargeting:CreateExportJob",

  /**
   * Write - Grants permission to import endpoint definitions from to create a segment
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  CreateImportJob = "mobiletargeting:CreateImportJob",

  /**
   * Write - Grants permission to create an in-app message template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#templates-template-name-inapp-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateInAppTemplate = "mobiletargeting:CreateInAppTemplate",

  /**
   * Write - Grants permission to create a Journey for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateJourney = "mobiletargeting:CreateJourney",

  /**
   * Write - Grants permission to create a push notification template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreatePushTemplate = "mobiletargeting:CreatePushTemplate",

  /**
   * Write - Grants permission to create an Amazon Pinpoint configuration for a recommender model
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#CreateRecommenderConfiguration
   */
  CreateRecommenderConfiguration = "mobiletargeting:CreateRecommenderConfiguration",

  /**
   * Write - Grants permission to create a segment that is based on endpoint data reported to Pinpoint by your app. To allow a user to create a segment by importing endpoint data from outside of Pinpoint, allow the mobiletargeting:CreateImportJob action
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html#rest-api-segments-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSegment = "mobiletargeting:CreateSegment",

  /**
   * Write - Grants permission to create an sms message template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSmsTemplate = "mobiletargeting:CreateSmsTemplate",

  /**
   * Write - Grants permission to create a voice message template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateVoiceTemplate = "mobiletargeting:CreateVoiceTemplate",

  /**
   * Write - Grants permission to delete the ADM channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteAdmChannel = "mobiletargeting:DeleteAdmChannel",

  /**
   * Write - Grants permission to delete the APNs channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteApnsChannel = "mobiletargeting:DeleteApnsChannel",

  /**
   * Write - Grants permission to delete the APNs sandbox channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteApnsSandboxChannel = "mobiletargeting:DeleteApnsSandboxChannel",

  /**
   * Write - Grants permission to delete the APNs VoIP channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteApnsVoipChannel = "mobiletargeting:DeleteApnsVoipChannel",

  /**
   * Write - Grants permission to delete the APNs VoIP sandbox channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteApnsVoipSandboxChannel = "mobiletargeting:DeleteApnsVoipSandboxChannel",

  /**
   * Write - Grants permission to delete a specific campaign
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteApp = "mobiletargeting:DeleteApp",

  /**
   * Write - Grants permission to delete the Baidu channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteBaiduChannel = "mobiletargeting:DeleteBaiduChannel",

  /**
   * Write - Grants permission to delete a specific campaign
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.campaigns `MobiletargetingResource.campaigns`} 
   */
  DeleteCampaign = "mobiletargeting:DeleteCampaign",

  /**
   * Write - Grants permission to delete the email channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteEmailChannel = "mobiletargeting:DeleteEmailChannel",

  /**
   * Write - Grants permission to delete an email template or an email template version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  DeleteEmailTemplate = "mobiletargeting:DeleteEmailTemplate",

  /**
   * Write - Grants permission to delete an endpoint
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteEndpoint = "mobiletargeting:DeleteEndpoint",

  /**
   * Write - Grants permission to delete the event stream for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteEventStream = "mobiletargeting:DeleteEventStream",

  /**
   * Write - Grants permission to delete the GCM channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteGcmChannel = "mobiletargeting:DeleteGcmChannel",

  /**
   * Write - Grants permission to delete an in-app message template or an in-app message template version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#templates-template-name-inapp-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  DeleteInAppTemplate = "mobiletargeting:DeleteInAppTemplate",

  /**
   * Write - Grants permission to delete a specific journey
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.journeys `MobiletargetingResource.journeys`} 
   */
  DeleteJourney = "mobiletargeting:DeleteJourney",

  /**
   * Write - Grants permission to delete a push notification template or a push notification template version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  DeletePushTemplate = "mobiletargeting:DeletePushTemplate",

  /**
   * Write - Grants permission to delete an Amazon Pinpoint configuration for a recommender model
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#DeleteRecommenderConfiguration
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.recommenders `MobiletargetingResource.recommenders`} 
   */
  DeleteRecommenderConfiguration = "mobiletargeting:DeleteRecommenderConfiguration",

  /**
   * Write - Grants permission to delete a specific segment
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.segments `MobiletargetingResource.segments`} 
   */
  DeleteSegment = "mobiletargeting:DeleteSegment",

  /**
   * Write - Grants permission to delete the SMS channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteSmsChannel = "mobiletargeting:DeleteSmsChannel",

  /**
   * Write - Grants permission to delete an sms message template or an sms message template version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  DeleteSmsTemplate = "mobiletargeting:DeleteSmsTemplate",

  /**
   * Write - Grants permission to delete all of the endpoints that are associated with a user ID
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteUserEndpoints = "mobiletargeting:DeleteUserEndpoints",

  /**
   * Write - Grants permission to delete the Voice channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  DeleteVoiceChannel = "mobiletargeting:DeleteVoiceChannel",

  /**
   * Write - Grants permission to delete a voice message template or a voice message template version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  DeleteVoiceTemplate = "mobiletargeting:DeleteVoiceTemplate",

  /**
   * Read - Grants permission to retrieve information about the Amazon Device Messaging (ADM) channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetAdmChannel = "mobiletargeting:GetAdmChannel",

  /**
   * Read - Grants permission to retrieve information about the APNs channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetApnsChannel = "mobiletargeting:GetApnsChannel",

  /**
   * Read - Grants permission to retrieve information about the APNs sandbox channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetApnsSandboxChannel = "mobiletargeting:GetApnsSandboxChannel",

  /**
   * Read - Grants permission to retrieve information about the APNs VoIP channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetApnsVoipChannel = "mobiletargeting:GetApnsVoipChannel",

  /**
   * Read - Grants permission to retrieve information about the APNs VoIP sandbox channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetApnsVoipSandboxChannel = "mobiletargeting:GetApnsVoipSandboxChannel",

  /**
   * Read - Grants permission to retrieve information about a specific app in your Amazon Pinpoint account
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetApp = "mobiletargeting:GetApp",

  /**
   * Read - Grants permission to retrieve (queries) pre-aggregated data for a standard metric that applies to an application
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-kpis-daterange-kpi-name.html#GetApplicationDateRangeKpi
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetApplicationDateRangeKpi = "mobiletargeting:GetApplicationDateRangeKpi",

  /**
   * List - Grants permission to retrieve the default settings for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetApplicationSettings = "mobiletargeting:GetApplicationSettings",

  /**
   * Read - Grants permission to retrieve a list of apps in your Amazon Pinpoint account
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apps.html#rest-api-apps-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetApps = "mobiletargeting:GetApps",

  /**
   * Read - Grants permission to retrieve information about the Baidu channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetBaiduChannel = "mobiletargeting:GetBaiduChannel",

  /**
   * Read - Grants permission to retrieve information about a specific campaign
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.campaigns `MobiletargetingResource.campaigns`} 
   */
  GetCampaign = "mobiletargeting:GetCampaign",

  /**
   * List - Grants permission to retrieve information about the activities performed by a campaign
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-activities.html#rest-api-campaign-activities-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.campaigns `MobiletargetingResource.campaigns`} 
   */
  GetCampaignActivities = "mobiletargeting:GetCampaignActivities",

  /**
   * Read - Grants permission to retrieve (queries) pre-aggregated data for a standard metric that applies to a campaign
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-campaigns-campaign-id-kpis-daterange-kpi-name.html#GetCampaignDateRangeKpi
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.campaigns `MobiletargetingResource.campaigns`} 
   */
  GetCampaignDateRangeKpi = "mobiletargeting:GetCampaignDateRangeKpi",

  /**
   * Read - Grants permission to retrieve information about a specific campaign version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-version.html#rest-api-campaign-version-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.campaigns `MobiletargetingResource.campaigns`} 
   */
  GetCampaignVersion = "mobiletargeting:GetCampaignVersion",

  /**
   * List - Grants permission to retrieve information about the current and prior versions of a campaign
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign-versions.html#rest-api-campaign-versions-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.campaigns `MobiletargetingResource.campaigns`} 
   */
  GetCampaignVersions = "mobiletargeting:GetCampaignVersions",

  /**
   * List - Grants permission to retrieve information about all campaigns for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html#rest-api-campaigns-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetCampaigns = "mobiletargeting:GetCampaigns",

  /**
   * List - Grants permission to get all channels information for your app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-channels.html#rest-api-channels-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetChannels = "mobiletargeting:GetChannels",

  /**
   * Read - Grants permission to obtain information about the email channel in an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetEmailChannel = "mobiletargeting:GetEmailChannel",

  /**
   * Read - Grants permission to retrieve information about a specific or the active version of an email template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  GetEmailTemplate = "mobiletargeting:GetEmailTemplate",

  /**
   * Read - Grants permission to retrieve information about a specific endpoint
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetEndpoint = "mobiletargeting:GetEndpoint",

  /**
   * Read - Grants permission to retrieve information about the event stream for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetEventStream = "mobiletargeting:GetEventStream",

  /**
   * Read - Grants permission to obtain information about a specific export job
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetExportJob = "mobiletargeting:GetExportJob",

  /**
   * List - Grants permission to retrieve a list of all of the export jobs for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetExportJobs = "mobiletargeting:GetExportJobs",

  /**
   * Read - Grants permission to retrieve information about the GCM channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetGcmChannel = "mobiletargeting:GetGcmChannel",

  /**
   * Read - Grants permission to retrieve information about a specific import job
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-job.html#rest-api-import-job-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetImportJob = "mobiletargeting:GetImportJob",

  /**
   * List - Grants permission to retrieve information about all import jobs for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetImportJobs = "mobiletargeting:GetImportJobs",

  /**
   * Read - Grants permission to retrive in-app messages for the given endpoint id
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id-inappmessages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetInAppMessages = "mobiletargeting:GetInAppMessages",

  /**
   * Read - Grants permission to retrieve information about a specific or the active version of an in-app message template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#templates-template-name-inapp-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  GetInAppTemplate = "mobiletargeting:GetInAppTemplate",

  /**
   * Read - Grants permission to retrieve information about a specific journey
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.journeys `MobiletargetingResource.journeys`} 
   */
  GetJourney = "mobiletargeting:GetJourney",

  /**
   * Read - Grants permission to retrieve (queries) pre-aggregated data for a standard engagement metric that applies to a journey
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-kpis-daterange-kpi-name.html#GetJourneyDateRangeKpi
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.journeys `MobiletargetingResource.journeys`} 
   */
  GetJourneyDateRangeKpi = "mobiletargeting:GetJourneyDateRangeKpi",

  /**
   * Read - Grants permission to retrieve (queries) pre-aggregated data for a standard execution metric that applies to a journey activity
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-activities-journey-activity-id-execution-metrics.html#GetJourneyExecutionActivityMetrics
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.journeys `MobiletargetingResource.journeys`} 
   */
  GetJourneyExecutionActivityMetrics = "mobiletargeting:GetJourneyExecutionActivityMetrics",

  /**
   * Read - Grants permission to retrieve (queries) pre-aggregated data for a standard execution metric that applies to a journey
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-execution-metrics.html#GetJourneyExecutionMetrics
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.journeys `MobiletargetingResource.journeys`} 
   */
  GetJourneyExecutionMetrics = "mobiletargeting:GetJourneyExecutionMetrics",

  /**
   * Read - Grants permission to retrieve information about a specific or the active version of an push notification template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  GetPushTemplate = "mobiletargeting:GetPushTemplate",

  /**
   * Read - Grants permission to retrieve information about an Amazon Pinpoint configuration for a recommender model
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#GetRecommenderConfiguration
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.recommenders `MobiletargetingResource.recommenders`} 
   */
  GetRecommenderConfiguration = "mobiletargeting:GetRecommenderConfiguration",

  /**
   * List - Grants permission to retrieve information about all the recommender model configurations that are associated with an Amazon Pinpoint account
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html#GetRecommenderConfigurations
   */
  GetRecommenderConfigurations = "mobiletargeting:GetRecommenderConfigurations",

  /**
   * Read - Grants permission to mobiletargeting:GetReports
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7D/permissions-actions.html
   */
  GetReports = "mobiletargeting:GetReports",

  /**
   * Read - Grants permission to retrieve information about a specific segment
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.segments `MobiletargetingResource.segments`} 
   */
  GetSegment = "mobiletargeting:GetSegment",

  /**
   * List - Grants permission to retrieve information about jobs that export endpoint definitions from segments to Amazon S3
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-export-jobs.html#rest-api-export-jobs-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.segments `MobiletargetingResource.segments`} 
   */
  GetSegmentExportJobs = "mobiletargeting:GetSegmentExportJobs",

  /**
   * List - Grants permission to retrieve information about jobs that create segments by importing endpoint definitions from
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-import-jobs.html#rest-api-import-jobs-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.segments `MobiletargetingResource.segments`} 
   */
  GetSegmentImportJobs = "mobiletargeting:GetSegmentImportJobs",

  /**
   * Read - Grants permission to retrieve information about a specific segment version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-version.html#rest-api-segment-version-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.segments `MobiletargetingResource.segments`} 
   */
  GetSegmentVersion = "mobiletargeting:GetSegmentVersion",

  /**
   * List - Grants permission to retrieve information about the current and prior versions of a segment
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment-versions.html#rest-api-segment-versions-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.segments `MobiletargetingResource.segments`} 
   */
  GetSegmentVersions = "mobiletargeting:GetSegmentVersions",

  /**
   * List - Grants permission to retrieve information about the segments for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html#rest-api-segments-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetSegments = "mobiletargeting:GetSegments",

  /**
   * Read - Grants permission to obtain information about the SMS channel in an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetSmsChannel = "mobiletargeting:GetSmsChannel",

  /**
   * Read - Grants permission to retrieve information about a specific or the active version of an sms message template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  GetSmsTemplate = "mobiletargeting:GetSmsTemplate",

  /**
   * Read - Grants permission to retrieve information about the endpoints that are associated with a user ID
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-user.html#rest-api-user-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetUserEndpoints = "mobiletargeting:GetUserEndpoints",

  /**
   * Read - Grants permission to obtain information about the Voice channel in an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  GetVoiceChannel = "mobiletargeting:GetVoiceChannel",

  /**
   * Read - Grants permission to retrieve information about a specific or the active version of a voice message template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  GetVoiceTemplate = "mobiletargeting:GetVoiceTemplate",

  /**
   * List - Grants permission to retrieve information about all journeys for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html#apps-application-id-journeys-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  ListJourneys = "mobiletargeting:ListJourneys",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-get
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.campaigns `MobiletargetingResource.campaigns`} 
   * - {@link MobiletargetingResource.segments `MobiletargetingResource.segments`} 
   */
  ListTagsForResource = "mobiletargeting:ListTagsForResource",

  /**
   * List - Grants permission to retrieve all versions about a specific template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  ListTemplateVersions = "mobiletargeting:ListTemplateVersions",

  /**
   * List - Grants permission to retrieve metadata about the queried templates
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html#templates-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  ListTemplates = "mobiletargeting:ListTemplates",

  /**
   * Read - Grants permission to obtain metadata for a phone number, such as the number type (mobile, landline, or VoIP), location, and provider
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-phone-number-validate.html#rest-api-phone-number-validate-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.phoneNumberValidate `MobiletargetingResource.phoneNumberValidate`} 
   */
  PhoneNumberValidate = "mobiletargeting:PhoneNumberValidate",

  /**
   * Write - Grants permission to create or update an event stream for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-event-stream.html#rest-api-event-stream-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  PutEventStream = "mobiletargeting:PutEventStream",

  /**
   * Write - Grants permission to create or update events for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-events.html#rest-api-events-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  PutEvents = "mobiletargeting:PutEvents",

  /**
   * Write - Grants permission to remove the attributes for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-app.html#rest-api-app-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  RemoveAttributes = "mobiletargeting:RemoveAttributes",

  /**
   * Write - Grants permission to send an SMS message or push notification to specific endpoints
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-messages.html#rest-api-messages-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  SendMessages = "mobiletargeting:SendMessages",

  /**
   * Write - Grants permission to send an OTP code to a user of your application
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-otp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  SendOTPMessage = "mobiletargeting:SendOTPMessage",

  /**
   * Write - Grants permission to send an SMS message or push notification to all endpoints that are associated with a specific user ID
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-users-messages.html#rest-api-users-messages-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  SendUsersMessages = "mobiletargeting:SendUsersMessages",

  /**
   * Tagging - Grants permission to add tags to a resource
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-post
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.campaigns `MobiletargetingResource.campaigns`} 
   * - {@link MobiletargetingResource.segments `MobiletargetingResource.segments`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "mobiletargeting:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-tags.html#rest-api-tags-methods-delete
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.campaigns `MobiletargetingResource.campaigns`} 
   * - {@link MobiletargetingResource.segments `MobiletargetingResource.segments`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "mobiletargeting:UntagResource",

  /**
   * Write - Grants permission to update the Amazon Device Messaging (ADM) channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-adm-channel.html#rest-api-adm-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateAdmChannel = "mobiletargeting:UpdateAdmChannel",

  /**
   * Write - Grants permission to update the Apple Push Notification service (APNs) channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-channel.html#rest-api-apns-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateApnsChannel = "mobiletargeting:UpdateApnsChannel",

  /**
   * Write - Grants permission to update the Apple Push Notification service (APNs) sandbox channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-sandbox-channel.html#rest-api-apns-sandbox-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateApnsSandboxChannel = "mobiletargeting:UpdateApnsSandboxChannel",

  /**
   * Write - Grants permission to update the Apple Push Notification service (APNs) VoIP channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-channel.html#rest-api-apns-voip-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateApnsVoipChannel = "mobiletargeting:UpdateApnsVoipChannel",

  /**
   * Write - Grants permission to update the Apple Push Notification service (APNs) VoIP sandbox channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-apns-voip-sandbox-channel.html#rest-api-apns-voip-sandbox-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateApnsVoipSandboxChannel = "mobiletargeting:UpdateApnsVoipSandboxChannel",

  /**
   * Write - Grants permission to update the default settings for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-settings.html#rest-api-settings-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateApplicationSettings = "mobiletargeting:UpdateApplicationSettings",

  /**
   * Write - Grants permission to update the Baidu channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-baidu-channel.html#rest-api-baidu-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateBaiduChannel = "mobiletargeting:UpdateBaiduChannel",

  /**
   * Write - Grants permission to update a specific campaign
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaign.html#rest-api-campaign-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.campaigns `MobiletargetingResource.campaigns`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateCampaign = "mobiletargeting:UpdateCampaign",

  /**
   * Write - Grants permission to update the email channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-email-channel.html#rest-api-email-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateEmailChannel = "mobiletargeting:UpdateEmailChannel",

  /**
   * Write - Grants permission to update a specific email template under the same version or generate a new version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-email.html#templates-template-name-email-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateEmailTemplate = "mobiletargeting:UpdateEmailTemplate",

  /**
   * Write - Grants permission to create an endpoint or update the information for an endpoint
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoint.html#rest-api-endpoint-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateEndpoint = "mobiletargeting:UpdateEndpoint",

  /**
   * Write - Grants permission to create or update endpoints as a batch operation
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-endpoints.html#rest-api-endpoints-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateEndpointsBatch = "mobiletargeting:UpdateEndpointsBatch",

  /**
   * Write - Grants permission to update the Firebase Cloud Messaging (FCM) or Google Cloud Messaging (GCM) API key that allows to send push notifications to your Android app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-gcm-channel.html#rest-api-gcm-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateGcmChannel = "mobiletargeting:UpdateGcmChannel",

  /**
   * Write - Grants permission to update a specific in-app message template under the same version or generate a new version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-inapp.html#templates-template-name-inapp-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateInAppTemplate = "mobiletargeting:UpdateInAppTemplate",

  /**
   * Write - Grants permission to update a specific journey
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id.html#apps-application-id-journeys-journey-id-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.journeys `MobiletargetingResource.journeys`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateJourney = "mobiletargeting:UpdateJourney",

  /**
   * Write - Grants permission to update a specific journey state
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys-journey-id-state.html#apps-application-id-journeys-journey-id-state-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.journeys `MobiletargetingResource.journeys`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateJourneyState = "mobiletargeting:UpdateJourneyState",

  /**
   * Write - Grants permission to update a specific push notification template under the same version or generate a new version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-push.html#templates-template-name-push-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdatePushTemplate = "mobiletargeting:UpdatePushTemplate",

  /**
   * Write - Grants permission to update an Amazon Pinpoint configuration for a recommender model
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders-recommender-id.html#UpdateRecommenderConfiguration
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.recommenders `MobiletargetingResource.recommenders`} 
   */
  UpdateRecommenderConfiguration = "mobiletargeting:UpdateRecommenderConfiguration",

  /**
   * Write - Grants permission to update a specific segment
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segment.html#rest-api-segment-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.segments `MobiletargetingResource.segments`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateSegment = "mobiletargeting:UpdateSegment",

  /**
   * Write - Grants permission to update the SMS channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-sms-channel.html#rest-api-sms-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateSmsChannel = "mobiletargeting:UpdateSmsChannel",

  /**
   * Write - Grants permission to update a specific sms message template under the same version or generate a new version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-sms.html#templates-template-name-sms-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateSmsTemplate = "mobiletargeting:UpdateSmsTemplate",

  /**
   * Write - Grants permission to update the active version parameter of a specific template
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-template-type-versions.html#templates-template-name-template-type-versions-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   */
  UpdateTemplateActiveVersion = "mobiletargeting:UpdateTemplateActiveVersion",

  /**
   * Write - Grants permission to update the Voice channel for an app
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-voice-channel.html#rest-api-voice-channel-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  UpdateVoiceChannel = "mobiletargeting:UpdateVoiceChannel",

  /**
   * Write - Grants permission to update a specific voice message template under the same version or generate a new version
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates-template-name-voice.html#templates-template-name-voice-http-methods
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateVoiceTemplate = "mobiletargeting:UpdateVoiceTemplate",

  /**
   * Write - Grants permission to check the validity of One-Time Passwords (OTPs)
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-verify-otp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   */
  VerifyOTPMessage = "mobiletargeting:VerifyOTPMessage",

  /**
   * * - Grant all mobiletargeting permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobiletargetingResource.apps `MobiletargetingResource.apps`} 
   * - {@link MobiletargetingResource.campaigns `MobiletargetingResource.campaigns`} 
   * - {@link MobiletargetingResource.templates `MobiletargetingResource.templates`} 
   * - {@link MobiletargetingResource.journeys `MobiletargetingResource.journeys`} 
   * - {@link MobiletargetingResource.recommenders `MobiletargetingResource.recommenders`} 
   * - {@link MobiletargetingResource.segments `MobiletargetingResource.segments`} 
   * - {@link MobiletargetingResource.phoneNumberValidate `MobiletargetingResource.phoneNumberValidate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the pinpoint service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "mobiletargeting:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpinpoint.html
 */
export const MobiletargetingResource = {

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/developerguide/gettingstarted.html#gettingstarted-addapp
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  apps: (options: Partial<{partition: string, region: string, account: string, appId: string}> = {}) => `arn:${options.partition || '*'}:mobiletargeting:${options.region || '*'}:${options.account || '*'}:apps/${options.appId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-campaigns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  campaigns: (options: Partial<{partition: string, region: string, account: string, appId: string, campaignId: string}> = {}) => `arn:${options.partition || '*'}:mobiletargeting:${options.region || '*'}:${options.account || '*'}:apps/${options.appId || '*'}/campaigns/${options.campaignId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-journeys.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  journeys: (options: Partial<{partition: string, region: string, account: string, appId: string, journeyId: string}> = {}) => `arn:${options.partition || '*'}:mobiletargeting:${options.region || '*'}:${options.account || '*'}:apps/${options.appId || '*'}/journeys/${options.journeyId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/rest-api-segments.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  segments: (options: Partial<{partition: string, region: string, account: string, appId: string, segmentId: string}> = {}) => `arn:${options.partition || '*'}:mobiletargeting:${options.region || '*'}:${options.account || '*'}:apps/${options.appId || '*'}/segments/${options.segmentId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  templates: (options: Partial<{partition: string, region: string, account: string, templateName: string, channelType: string}> = {}) => `arn:${options.partition || '*'}:mobiletargeting:${options.region || '*'}:${options.account || '*'}:templates/${options.templateName || '*'}/${options.channelType || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/recommenders.html
   */
  recommenders: (options: Partial<{partition: string, region: string, account: string, recommenderId: string}> = {}) => `arn:${options.partition || '*'}:mobiletargeting:${options.region || '*'}:${options.account || '*'}:recommenders/${options.recommenderId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/pinpoint/latest/apireference/phone-number-validate.html
   */
  phoneNumberValidate: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:mobiletargeting:${options.region || '*'}:${options.account || '*'}:phone/number/validate`,
}

