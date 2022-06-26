/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectvoiceid.html
 */
export enum VoiceidAction {

  /**
   * Write - Grants permission to create a domain
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_CreateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDomain = "voiceid:CreateDomain",

  /**
   * Write - Grants permission to delete a domain
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DeleteDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  DeleteDomain = "voiceid:DeleteDomain",

  /**
   * Write - Grants permission to delete a fraudster
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DeleteFraudster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  DeleteFraudster = "voiceid:DeleteFraudster",

  /**
   * Write - Grants permission to delete a speaker
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DeleteSpeaker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  DeleteSpeaker = "voiceid:DeleteSpeaker",

  /**
   * Read - Grants permission to describe compliance consent
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-voiceid.html#enable-voiceid-step1
   */
  DescribeComplianceConsent = "voiceid:DescribeComplianceConsent",

  /**
   * Read - Grants permission to describe a domain
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DescribeDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  DescribeDomain = "voiceid:DescribeDomain",

  /**
   * Read - Grants permission to describe a fraudster
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DescribeFraudster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  DescribeFraudster = "voiceid:DescribeFraudster",

  /**
   * Read - Grants permission to describe a fraudster registration job
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DescribeFraudsterRegistrationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  DescribeFraudsterRegistrationJob = "voiceid:DescribeFraudsterRegistrationJob",

  /**
   * Read - Grants permission to describe a speaker
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DescribeSpeaker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  DescribeSpeaker = "voiceid:DescribeSpeaker",

  /**
   * Read - Grants permission to describe a speaker enrollment job
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DescribeSpeakerEnrollmentJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  DescribeSpeakerEnrollmentJob = "voiceid:DescribeSpeakerEnrollmentJob",

  /**
   * Write - Grants permission to evaluate a session
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_EvaluateSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  EvaluateSession = "voiceid:EvaluateSession",

  /**
   * List - Grants permission to list domains for an account
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListDomains.html
   */
  ListDomains = "voiceid:ListDomains",

  /**
   * List - Grants permission to list fraudster registration jobs for a domain
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListFraudsterRegistrationJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  ListFraudsterRegistrationJobs = "voiceid:ListFraudsterRegistrationJobs",

  /**
   * List - Grants permission to list speaker enrollment jobs for a domain
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListSpeakerEnrollmentJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  ListSpeakerEnrollmentJobs = "voiceid:ListSpeakerEnrollmentJobs",

  /**
   * List - Grants permission to list speakers for a domain
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListSpeakers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  ListSpeakers = "voiceid:ListSpeakers",

  /**
   * Read - Grants permission to list tags for a Voice ID resource
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  ListTagsForResource = "voiceid:ListTagsForResource",

  /**
   * Write - Grants permission to opt out a speaker
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_OptOutSpeaker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  OptOutSpeaker = "voiceid:OptOutSpeaker",

  /**
   * Write - Grants permission to register compliance consent
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-voiceid.html#enable-voiceid-step1
   */
  RegisterComplianceConsent = "voiceid:RegisterComplianceConsent",

  /**
   * Write - Grants permission to start a fraudster registration job
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_StartFraudsterRegistrationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  StartFraudsterRegistrationJob = "voiceid:StartFraudsterRegistrationJob",

  /**
   * Write - Grants permission to start a speaker enrollment job
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_StartSpeakerEnrollmentJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  StartSpeakerEnrollmentJob = "voiceid:StartSpeakerEnrollmentJob",

  /**
   * Tagging - Grants permission to tag a Voice ID resource
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "voiceid:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from a Voice ID resource
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "voiceid:UntagResource",

  /**
   * Write - Grants permission to update a domain
   * @see https://docs.aws.amazon.com/voiceid/latest/APIReference/API_UpdateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   */
  UpdateDomain = "voiceid:UpdateDomain",

  /**
   * * - Grant all voiceid permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectvoiceid.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link VoiceidResource.domain `VoiceidResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "voiceid:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectvoiceid.html
 */
export const VoiceidResource = {

  /**
   * @see https://docs.aws.amazon.com/connect/latest/adminguide/enable-voiceid.html#voiceid-domain
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  domain: (options: Partial<{partition: string, region: string, account: string, domainId: string}> = {}) => `arn:${options.partition || '*'}:voiceid:${options.region || '*'}:${options.account || '*'}:domain/${options.domainId || '*'}`,
}

