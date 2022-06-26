/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
 */
export enum IotAction {

  /**
   * Write - Grants permission to accept a pending certificate transfer
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_AcceptCertificateTransfer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   */
  AcceptCertificateTransfer = "iot:AcceptCertificateTransfer",

  /**
   * Write - Grants permission to add a thing to the specified billing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToBillingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  AddThingToBillingGroup = "iot:AddThingToBillingGroup",

  /**
   * Write - Grants permission to add a thing to the specified thing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToThingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  AddThingToThingGroup = "iot:AddThingToThingGroup",

  /**
   * Write - Grants permission to associate a group with a continuous job
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_AssociateTargetsWithJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.job `IotResource.job`} 
   * - {@link IotResource.thing `IotResource.thing`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  AssociateTargetsWithJob = "iot:AssociateTargetsWithJob",

  /**
   * PermissionsManagement - Grants permission to attach a policy to the specified target
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  AttachPolicy = "iot:AttachPolicy",

  /**
   * PermissionsManagement - Grants permission to attach the specified policy to the specified principal (certificate or other credential)
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPrincipalPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   */
  AttachPrincipalPolicy = "iot:AttachPrincipalPolicy",

  /**
   * Write - Grants permission to associate a Device Defender security profile with a thing group or with this account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_AttachSecurityProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   * - {@link IotResource.dimension `IotResource.dimension`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  AttachSecurityProfile = "iot:AttachSecurityProfile",

  /**
   * Write - Grants permission to attach the specified principal to the specified thing
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_AttachThingPrincipal.html
   */
  AttachThingPrincipal = "iot:AttachThingPrincipal",

  /**
   * Write - Grants permission to cancel a mitigation action task that is in progress
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditMitigationActionsTask.html
   */
  CancelAuditMitigationActionsTask = "iot:CancelAuditMitigationActionsTask",

  /**
   * Write - Grants permission to cancel an audit that is in progress. The audit can be either scheduled or on-demand
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditTask.html
   */
  CancelAuditTask = "iot:CancelAuditTask",

  /**
   * Write - Grants permission to cancel a pending transfer for the specified certificate
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CancelCertificateTransfer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   */
  CancelCertificateTransfer = "iot:CancelCertificateTransfer",

  /**
   * Write - Grants permission to cancel a Device Defender ML Detect mitigation action
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDetectMitigationActionsTask.html
   */
  CancelDetectMitigationActionsTask = "iot:CancelDetectMitigationActionsTask",

  /**
   * Write - Grants permission to cancel a job
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.job `IotResource.job`} 
   */
  CancelJob = "iot:CancelJob",

  /**
   * Write - Grants permission to cancel a job execution on a particular device
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJobExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.job `IotResource.job`} 
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  CancelJobExecution = "iot:CancelJobExecution",

  /**
   * Write - Grants permission to clear the default authorizer
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ClearDefaultAuthorizer.html
   */
  ClearDefaultAuthorizer = "iot:ClearDefaultAuthorizer",

  /**
   * Write - Grants permission to close a tunnel
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_CloseTunnel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.tunnel `IotResource.tunnel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iot:Delete`: Filters access by a flag indicating whether or not to also delete an IoT Tunnel immediately when making iot:CloseTunnel request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  CloseTunnel = "iot:CloseTunnel",

  /**
   * Write - Grants permission to confirm a http url TopicRuleDestinationDestination
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ConfirmTopicRuleDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.destination `IotResource.destination`} 
   */
  ConfirmTopicRuleDestination = "iot:ConfirmTopicRuleDestination",

  /**
   * Write - Grants permission to connect as the specified client
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.client `IotResource.client`} 
   */
  Connect = "iot:Connect",

  /**
   * Write - Grants permission to create a Device Defender audit suppression
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateAuditSuppression.html
   */
  CreateAuditSuppression = "iot:CreateAuditSuppression",

  /**
   * Write - Grants permission to create an authorizer
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateAuthorizer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.authorizer `IotResource.authorizer`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAuthorizer = "iot:CreateAuthorizer",

  /**
   * Write - Grants permission to create a billing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateBillingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateBillingGroup = "iot:CreateBillingGroup",

  /**
   * Write - Grants permission to create an X.509 certificate using the specified certificate signing request
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateFromCsr.html
   */
  CreateCertificateFromCsr = "iot:CreateCertificateFromCsr",

  /**
   * Write - Grants permission to create a custom metric for device side metric reporting and monitoring
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCustomMetric.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCustomMetric = "iot:CreateCustomMetric",

  /**
   * Write - Grants permission to define a dimension that can be used to to limit the scope of a metric used in a security profile
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDimension.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.dimension `IotResource.dimension`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDimension = "iot:CreateDimension",

  /**
   * Write - Grants permission to create a domain configuration
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDomainConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.domainconfiguration `IotResource.domainconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `iot:DomainName`: Filters access by based on the domain name of an IoT DomainConfiguration ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDomainConfiguration = "iot:CreateDomainConfiguration",

  /**
   * Write - Grants permission to create a Dynamic Thing Group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDynamicThingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.dynamicthinggroup `IotResource.dynamicthinggroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDynamicThingGroup = "iot:CreateDynamicThingGroup",

  /**
   * Write - Grants permission to create a fleet metric
   * @see https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.fleetmetric `IotResource.fleetmetric`} 
   * - {@link IotResource.index `IotResource.index`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFleetMetric = "iot:CreateFleetMetric",

  /**
   * Write - Grants permission to create a job
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.job `IotResource.job`} 
   * - {@link IotResource.thing `IotResource.thing`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   * - {@link IotResource.jobtemplate `IotResource.jobtemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateJob = "iot:CreateJob",

  /**
   * Write - Grants permission to create a job template
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateJobTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.jobtemplate `IotResource.jobtemplate`} 
   * - {@link IotResource.job `IotResource.job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateJobTemplate = "iot:CreateJobTemplate",

  /**
   * Write - Grants permission to create a 2048 bit RSA key pair and issues an X.509 certificate using the issued public key
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateKeysAndCertificate.html
   */
  CreateKeysAndCertificate = "iot:CreateKeysAndCertificate",

  /**
   * Write - Grants permission to define an action that can be applied to audit findings by using StartAuditMitigationActionsTask
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateMitigationAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.mitigationaction `IotResource.mitigationaction`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMitigationAction = "iot:CreateMitigationAction",

  /**
   * Write - Grants permission to create an OTA update job
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateOTAUpdate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.otaupdate `IotResource.otaupdate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateOTAUpdate = "iot:CreateOTAUpdate",

  /**
   * Write - Grants permission to create an AWS IoT policy
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.policy `IotResource.policy`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePolicy = "iot:CreatePolicy",

  /**
   * Write - Grants permission to create a new version of the specified AWS IoT policy
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicyVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.policy `IotResource.policy`} 
   */
  CreatePolicyVersion = "iot:CreatePolicyVersion",

  /**
   * Write - Grants permission to create a provisioning claim
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningClaim.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   */
  CreateProvisioningClaim = "iot:CreateProvisioningClaim",

  /**
   * Write - Grants permission to create a fleet provisioning template
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProvisioningTemplate = "iot:CreateProvisioningTemplate",

  /**
   * Write - Grants permission to create a new version of a fleet provisioning template
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplateVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   */
  CreateProvisioningTemplateVersion = "iot:CreateProvisioningTemplateVersion",

  /**
   * Write - Grants permission to create a role alias
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateRoleAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.rolealias `IotResource.rolealias`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRoleAlias = "iot:CreateRoleAlias",

  /**
   * Write - Grants permission to create a scheduled audit that is run at a specified time interval
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateScheduledAudit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.scheduledaudit `IotResource.scheduledaudit`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateScheduledAudit = "iot:CreateScheduledAudit",

  /**
   * Write - Grants permission to create a Device Defender security profile
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateSecurityProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   * - {@link IotResource.dimension `IotResource.dimension`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSecurityProfile = "iot:CreateSecurityProfile",

  /**
   * Write - Grants permission to create a new AWS IoT stream
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.stream `IotResource.stream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateStream = "iot:CreateStream",

  /**
   * Write - Grants permission to create a thing in the thing registry
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   */
  CreateThing = "iot:CreateThing",

  /**
   * Write - Grants permission to create a thing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateThingGroup = "iot:CreateThingGroup",

  /**
   * Write - Grants permission to create a new thing type
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThingType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thingtype `IotResource.thingtype`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateThingType = "iot:CreateThingType",

  /**
   * Write - Grants permission to create a rule
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateTopicRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.rule `IotResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTopicRule = "iot:CreateTopicRule",

  /**
   * Write - Grants permission to create a TopicRuleDestination
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_CreateTopicRuleDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.destination `IotResource.destination`} 
   */
  CreateTopicRuleDestination = "iot:CreateTopicRuleDestination",

  /**
   * Write - Grants permission to delete the audit configuration associated with the account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAccountAuditConfiguration.html
   */
  DeleteAccountAuditConfiguration = "iot:DeleteAccountAuditConfiguration",

  /**
   * Write - Grants permission to delete a Device Defender audit suppression
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuditSuppression.html
   */
  DeleteAuditSuppression = "iot:DeleteAuditSuppression",

  /**
   * Write - Grants permission to delete the specified authorizer
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuthorizer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.authorizer `IotResource.authorizer`} 
   */
  DeleteAuthorizer = "iot:DeleteAuthorizer",

  /**
   * Write - Grants permission to delete the specified billing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteBillingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   */
  DeleteBillingGroup = "iot:DeleteBillingGroup",

  /**
   * Write - Grants permission to delete a registered CA certificate
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCACertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cacert `IotResource.cacert`} 
   */
  DeleteCACertificate = "iot:DeleteCACertificate",

  /**
   * Write - Grants permission to delete the specified certificate
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   */
  DeleteCertificate = "iot:DeleteCertificate",

  /**
   * Write - Grants permission to deletes the specified custom metric from your AWS account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCustomMetric.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   */
  DeleteCustomMetric = "iot:DeleteCustomMetric",

  /**
   * Write - Grants permission to remove the specified dimension from your AWS account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDimension.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.dimension `IotResource.dimension`} 
   */
  DeleteDimension = "iot:DeleteDimension",

  /**
   * Write - Grants permission to delete a domain configuration
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDomainConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.domainconfiguration `IotResource.domainconfiguration`} 
   */
  DeleteDomainConfiguration = "iot:DeleteDomainConfiguration",

  /**
   * Write - Grants permission to delete the specified Dynamic Thing Group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDynamicThingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.dynamicthinggroup `IotResource.dynamicthinggroup`} 
   */
  DeleteDynamicThingGroup = "iot:DeleteDynamicThingGroup",

  /**
   * Write - Grants permission to delete the specified fleet metric
   * @see https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.fleetmetric `IotResource.fleetmetric`} 
   */
  DeleteFleetMetric = "iot:DeleteFleetMetric",

  /**
   * Write - Grants permission to delete a job and its related job executions
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.job `IotResource.job`} 
   */
  DeleteJob = "iot:DeleteJob",

  /**
   * Write - Grants permission to delete a job execution
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJobExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.job `IotResource.job`} 
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  DeleteJobExecution = "iot:DeleteJobExecution",

  /**
   * Write - Grants permission to delete a job template
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJobTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.jobtemplate `IotResource.jobtemplate`} 
   */
  DeleteJobTemplate = "iot:DeleteJobTemplate",

  /**
   * Write - Grants permission to delete a defined mitigation action from your AWS account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteMitigationAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.mitigationaction `IotResource.mitigationaction`} 
   */
  DeleteMitigationAction = "iot:DeleteMitigationAction",

  /**
   * Write - Grants permission to delete an OTA update job
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteOTAUpdate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.otaupdate `IotResource.otaupdate`} 
   */
  DeleteOTAUpdate = "iot:DeleteOTAUpdate",

  /**
   * Write - Grants permission to delete the specified policy
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.policy `IotResource.policy`} 
   */
  DeletePolicy = "iot:DeletePolicy",

  /**
   * Write - Grants permission to Delete the specified version of the specified policy
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicyVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.policy `IotResource.policy`} 
   */
  DeletePolicyVersion = "iot:DeletePolicyVersion",

  /**
   * Write - Grants permission to delete a fleet provisioning template
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   */
  DeleteProvisioningTemplate = "iot:DeleteProvisioningTemplate",

  /**
   * Write - Grants permission to delete a fleet provisioning template version
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplateVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   */
  DeleteProvisioningTemplateVersion = "iot:DeleteProvisioningTemplateVersion",

  /**
   * Write - Grants permission to delete a CA certificate registration code
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRegistrationCode.html
   */
  DeleteRegistrationCode = "iot:DeleteRegistrationCode",

  /**
   * Write - Grants permission to delete the specified role alias
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRoleAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.rolealias `IotResource.rolealias`} 
   */
  DeleteRoleAlias = "iot:DeleteRoleAlias",

  /**
   * Write - Grants permission to delete a scheduled audit
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteScheduledAudit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.scheduledaudit `IotResource.scheduledaudit`} 
   */
  DeleteScheduledAudit = "iot:DeleteScheduledAudit",

  /**
   * Write - Grants permission to delete a Device Defender security profile
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteSecurityProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   * - {@link IotResource.dimension `IotResource.dimension`} 
   */
  DeleteSecurityProfile = "iot:DeleteSecurityProfile",

  /**
   * Write - Grants permission to delete a specified stream
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.stream `IotResource.stream`} 
   */
  DeleteStream = "iot:DeleteStream",

  /**
   * Write - Grants permission to delete the specified thing
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  DeleteThing = "iot:DeleteThing",

  /**
   * Write - Grants permission to delete the specified thing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  DeleteThingGroup = "iot:DeleteThingGroup",

  /**
   * Write - Grants permission to delete the specified thing shadow
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  DeleteThingShadow = "iot:DeleteThingShadow",

  /**
   * Write - Grants permission to delete the specified thing type
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thingtype `IotResource.thingtype`} 
   */
  DeleteThingType = "iot:DeleteThingType",

  /**
   * Write - Grants permission to delete the specified rule
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteTopicRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.rule `IotResource.rule`} 
   */
  DeleteTopicRule = "iot:DeleteTopicRule",

  /**
   * Write - Grants permission to delete a TopicRuleDestination
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteTopicRuleDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.destination `IotResource.destination`} 
   */
  DeleteTopicRuleDestination = "iot:DeleteTopicRuleDestination",

  /**
   * Write - Grants permission to delete the specified v2 logging level
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteV2LoggingLevel.html
   */
  DeleteV2LoggingLevel = "iot:DeleteV2LoggingLevel",

  /**
   * Write - Grants permission to deprecate the specified thing type
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DeprecateThingType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thingtype `IotResource.thingtype`} 
   */
  DeprecateThingType = "iot:DeprecateThingType",

  /**
   * Read - Grants permission to get information about audit configurations for the account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAccountAuditConfiguration.html
   */
  DescribeAccountAuditConfiguration = "iot:DescribeAccountAuditConfiguration",

  /**
   * Read - Grants permission to get information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and when the audit that returned the finding was started
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html
   */
  DescribeAuditFinding = "iot:DescribeAuditFinding",

  /**
   * Read - Grants permission to get information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditMitigationActionsTask.html
   */
  DescribeAuditMitigationActionsTask = "iot:DescribeAuditMitigationActionsTask",

  /**
   * Read - Grants permission to get information about a Device Defender audit suppression
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditSuppression.html
   */
  DescribeAuditSuppression = "iot:DescribeAuditSuppression",

  /**
   * Read - Grants permission to get information about a Device Defender audit
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditTask.html
   */
  DescribeAuditTask = "iot:DescribeAuditTask",

  /**
   * Read - Grants permission to describe an authorizer
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuthorizer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.authorizer `IotResource.authorizer`} 
   */
  DescribeAuthorizer = "iot:DescribeAuthorizer",

  /**
   * Read - Grants permission to get information about the specified billing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeBillingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   */
  DescribeBillingGroup = "iot:DescribeBillingGroup",

  /**
   * Read - Grants permission to describe a registered CA certificate
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCACertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cacert `IotResource.cacert`} 
   */
  DescribeCACertificate = "iot:DescribeCACertificate",

  /**
   * Read - Grants permission to get information about the specified certificate
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   */
  DescribeCertificate = "iot:DescribeCertificate",

  /**
   * Read - Grants permission to describe a custom metric that is defined in your AWS account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCustomMetric.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   */
  DescribeCustomMetric = "iot:DescribeCustomMetric",

  /**
   * Read - Grants permission to describe the default authorizer
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDefaultAuthorizer.html
   */
  DescribeDefaultAuthorizer = "iot:DescribeDefaultAuthorizer",

  /**
   * Read - Grants permission to describe a Device Defender ML Detect mitigation action
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDetectMitigationActionsTask.html
   */
  DescribeDetectMitigationActionsTask = "iot:DescribeDetectMitigationActionsTask",

  /**
   * Read - Grants permission to get details about a dimension that is defined in your AWS account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDimension.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.dimension `IotResource.dimension`} 
   */
  DescribeDimension = "iot:DescribeDimension",

  /**
   * Read - Grants permission to get information about the domain configuration
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDomainConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.domainconfiguration `IotResource.domainconfiguration`} 
   */
  DescribeDomainConfiguration = "iot:DescribeDomainConfiguration",

  /**
   * Read - Grants permission to get a unique endpoint specific to the AWS account making the call
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEndpoint.html
   */
  DescribeEndpoint = "iot:DescribeEndpoint",

  /**
   * Read - Grants permission to get account event configurations
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEventConfigurations.html
   */
  DescribeEventConfigurations = "iot:DescribeEventConfigurations",

  /**
   * Read - Grants permission to get information about the specified fleet metric
   * @see https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.fleetmetric `IotResource.fleetmetric`} 
   */
  DescribeFleetMetric = "iot:DescribeFleetMetric",

  /**
   * Read - Grants permission to get information about the specified index
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.index `IotResource.index`} 
   */
  DescribeIndex = "iot:DescribeIndex",

  /**
   * Read - Grants permission to describe a job
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.job `IotResource.job`} 
   */
  DescribeJob = "iot:DescribeJob",

  /**
   * Read - Grants permission to describe a job execution
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJobExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.job `IotResource.job`} 
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  DescribeJobExecution = "iot:DescribeJobExecution",

  /**
   * Read - Grants permission to describe a job template
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJobTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.jobtemplate `IotResource.jobtemplate`} 
   */
  DescribeJobTemplate = "iot:DescribeJobTemplate",

  /**
   * Read - Grants permission to describe a managed job template
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeManagedJobTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.jobtemplate `IotResource.jobtemplate`} 
   */
  DescribeManagedJobTemplate = "iot:DescribeManagedJobTemplate",

  /**
   * Read - Grants permission to get information about a mitigation action
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeMitigationAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.mitigationaction `IotResource.mitigationaction`} 
   */
  DescribeMitigationAction = "iot:DescribeMitigationAction",

  /**
   * Read - Grants permission to get information about a fleet provisioning template
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   */
  DescribeProvisioningTemplate = "iot:DescribeProvisioningTemplate",

  /**
   * Read - Grants permission to get information about a fleet provisioning template version
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplateVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   */
  DescribeProvisioningTemplateVersion = "iot:DescribeProvisioningTemplateVersion",

  /**
   * Read - Grants permission to describe a role alias
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeRoleAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.rolealias `IotResource.rolealias`} 
   */
  DescribeRoleAlias = "iot:DescribeRoleAlias",

  /**
   * Read - Grants permission to get information about a scheduled audit
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeScheduledAudit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.scheduledaudit `IotResource.scheduledaudit`} 
   */
  DescribeScheduledAudit = "iot:DescribeScheduledAudit",

  /**
   * Read - Grants permission to get information about a Device Defender security profile
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeSecurityProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   */
  DescribeSecurityProfile = "iot:DescribeSecurityProfile",

  /**
   * Read - Grants permission to get information about the specified stream
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.stream `IotResource.stream`} 
   */
  DescribeStream = "iot:DescribeStream",

  /**
   * Read - Grants permission to get information about the specified thing
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  DescribeThing = "iot:DescribeThing",

  /**
   * Read - Grants permission to get information about the specified thing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  DescribeThingGroup = "iot:DescribeThingGroup",

  /**
   * Read - Grants permission to get information about the bulk thing registration task
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingRegistrationTask.html
   */
  DescribeThingRegistrationTask = "iot:DescribeThingRegistrationTask",

  /**
   * Read - Grants permission to get information about the specified thing type
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thingtype `IotResource.thingtype`} 
   */
  DescribeThingType = "iot:DescribeThingType",

  /**
   * Read - Grants permission to describe a tunnel
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_DescribeTunnel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.tunnel `IotResource.tunnel`} 
   */
  DescribeTunnel = "iot:DescribeTunnel",

  /**
   * PermissionsManagement - Grants permission to detach a policy from the specified target
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  DetachPolicy = "iot:DetachPolicy",

  /**
   * PermissionsManagement - Grants permission to remove the specified policy from the specified certificate
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPrincipalPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   */
  DetachPrincipalPolicy = "iot:DetachPrincipalPolicy",

  /**
   * Write - Grants permission to disassociate a Device Defender security profile from a thing group or from this account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DetachSecurityProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   * - {@link IotResource.dimension `IotResource.dimension`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  DetachSecurityProfile = "iot:DetachSecurityProfile",

  /**
   * Write - Grants permission to detach the specified principal from the specified thing
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DetachThingPrincipal.html
   */
  DetachThingPrincipal = "iot:DetachThingPrincipal",

  /**
   * Write - Grants permission to disable the specified rule
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_DisableTopicRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.rule `IotResource.rule`} 
   */
  DisableTopicRule = "iot:DisableTopicRule",

  /**
   * Write - Grants permission to enable the specified rule
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_EnableTopicRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.rule `IotResource.rule`} 
   */
  EnableTopicRule = "iot:EnableTopicRule",

  /**
   * List - Grants permission to fetch a Device Defender's ML Detect Security Profile training model's status
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetBehaviorModelTrainingSummaries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   */
  GetBehaviorModelTrainingSummaries = "iot:GetBehaviorModelTrainingSummaries",

  /**
   * Read - Grants permission to get buckets aggregation for IoT fleet index
   * @see https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.index `IotResource.index`} 
   */
  GetBucketsAggregation = "iot:GetBucketsAggregation",

  /**
   * Read - Grants permission to get cardinality for IoT fleet index
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetCardinality.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.index `IotResource.index`} 
   */
  GetCardinality = "iot:GetCardinality",

  /**
   * Read - Grants permission to get effective policies
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetEffectivePolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   */
  GetEffectivePolicies = "iot:GetEffectivePolicies",

  /**
   * Read - Grants permission to get current fleet indexing configuration
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetIndexingConfiguration.html
   */
  GetIndexingConfiguration = "iot:GetIndexingConfiguration",

  /**
   * Read - Grants permission to get a job document
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetJobDocument.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.job `IotResource.job`} 
   */
  GetJobDocument = "iot:GetJobDocument",

  /**
   * Read - Grants permission to get the logging options
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetLoggingOptions.html
   */
  GetLoggingOptions = "iot:GetLoggingOptions",

  /**
   * Read - Grants permission to get the information about the OTA update job
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetOTAUpdate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.otaupdate `IotResource.otaupdate`} 
   */
  GetOTAUpdate = "iot:GetOTAUpdate",

  /**
   * Read - Grants permission to get percentiles for IoT fleet index
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetPercentiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.index `IotResource.index`} 
   */
  GetPercentiles = "iot:GetPercentiles",

  /**
   * Read - Grants permission to get information about the specified policy with the policy document of the default version
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.policy `IotResource.policy`} 
   */
  GetPolicy = "iot:GetPolicy",

  /**
   * Read - Grants permission to get information about the specified policy version
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicyVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.policy `IotResource.policy`} 
   */
  GetPolicyVersion = "iot:GetPolicyVersion",

  /**
   * Read - Grants permission to get a registration code used to register a CA certificate with AWS IoT
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetRegistrationCode.html
   */
  GetRegistrationCode = "iot:GetRegistrationCode",

  /**
   * Read - Grants permission to get the retained message on the specified topic
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.topic `IotResource.topic`} 
   */
  GetRetainedMessage = "iot:GetRetainedMessage",

  /**
   * Read - Grants permission to get statistics for IoT fleet index
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetStatistics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.index `IotResource.index`} 
   */
  GetStatistics = "iot:GetStatistics",

  /**
   * Read - Grants permission to get the thing shadow
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  GetThingShadow = "iot:GetThingShadow",

  /**
   * Read - Grants permission to get information about the specified rule
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetTopicRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.rule `IotResource.rule`} 
   */
  GetTopicRule = "iot:GetTopicRule",

  /**
   * Read - Grants permission to get a TopicRuleDestination
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetTopicRuleDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.destination `IotResource.destination`} 
   */
  GetTopicRuleDestination = "iot:GetTopicRuleDestination",

  /**
   * Read - Grants permission to get v2 logging options
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_GetV2LoggingOptions.html
   */
  GetV2LoggingOptions = "iot:GetV2LoggingOptions",

  /**
   * List - Grants permission to list the active violations for a given Device Defender security profile or Thing
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListActiveViolations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  ListActiveViolations = "iot:ListActiveViolations",

  /**
   * List - Grants permission to list the policies attached to the specified thing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListAttachedPolicies.html
   */
  ListAttachedPolicies = "iot:ListAttachedPolicies",

  /**
   * List - Grants permission to list the findings (results) of a Device Defender audit or of the audits performed during a specified time period
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditFindings.html
   */
  ListAuditFindings = "iot:ListAuditFindings",

  /**
   * List - Grants permission to get the status of audit mitigation action tasks that were executed
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsExecutions.html
   */
  ListAuditMitigationActionsExecutions = "iot:ListAuditMitigationActionsExecutions",

  /**
   * List - Grants permission to get a list of audit mitigation action tasks that match the specified filters
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsTasks.html
   */
  ListAuditMitigationActionsTasks = "iot:ListAuditMitigationActionsTasks",

  /**
   * List - Grants permission to list your Device Defender audit suppressions
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditSuppressions.html
   */
  ListAuditSuppressions = "iot:ListAuditSuppressions",

  /**
   * List - Grants permission to list the Device Defender audits that have been performed during a given time period
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditTasks.html
   */
  ListAuditTasks = "iot:ListAuditTasks",

  /**
   * List - Grants permission to list the authorizers registered in your account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuthorizers.html
   */
  ListAuthorizers = "iot:ListAuthorizers",

  /**
   * List - Grants permission to list all billing groups
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListBillingGroups.html
   */
  ListBillingGroups = "iot:ListBillingGroups",

  /**
   * List - Grants permission to list the CA certificates registered for your AWS account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListCACertificates.html
   */
  ListCACertificates = "iot:ListCACertificates",

  /**
   * List - Grants permission to list your certificates
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificates.html
   */
  ListCertificates = "iot:ListCertificates",

  /**
   * List - Grants permission to list the device certificates signed by the specified CA certificate
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificatesByCA.html
   */
  ListCertificatesByCA = "iot:ListCertificatesByCA",

  /**
   * List - Grants permission to list the custom metrics in your AWS account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListCustomMetrics.html
   */
  ListCustomMetrics = "iot:ListCustomMetrics",

  /**
   * List - Grants permission to lists mitigation actions executions for a Device Defender ML Detect Security Profile
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListDetectMitigationActionsExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  ListDetectMitigationActionsExecutions = "iot:ListDetectMitigationActionsExecutions",

  /**
   * List - Grants permission to list Device Defender ML Detect mitigation actions tasks
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListDetectMitigationActionsTasks.html
   */
  ListDetectMitigationActionsTasks = "iot:ListDetectMitigationActionsTasks",

  /**
   * List - Grants permission to list the dimensions that are defined for your AWS account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListDimensions.html
   */
  ListDimensions = "iot:ListDimensions",

  /**
   * List - Grants permission to list the domain configuration created by your AWS account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListDomainConfigurations.html
   */
  ListDomainConfigurations = "iot:ListDomainConfigurations",

  /**
   * List - Grants permission to list the fleet metrics in your account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html
   */
  ListFleetMetrics = "iot:ListFleetMetrics",

  /**
   * List - Grants permission to list all indices for fleet index
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListIndices.html
   */
  ListIndices = "iot:ListIndices",

  /**
   * List - Grants permission to list the job executions for a job
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.job `IotResource.job`} 
   */
  ListJobExecutionsForJob = "iot:ListJobExecutionsForJob",

  /**
   * List - Grants permission to list the job executions for the specified thing
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  ListJobExecutionsForThing = "iot:ListJobExecutionsForThing",

  /**
   * List - Grants permission to list job templates
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobTemplates.html
   */
  ListJobTemplates = "iot:ListJobTemplates",

  /**
   * List - Grants permission to list jobs
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobs.html
   */
  ListJobs = "iot:ListJobs",

  /**
   * List - Grants permission to list managed job templates
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListManagedJobTemplates.html
   */
  ListManagedJobTemplates = "iot:ListManagedJobTemplates",

  /**
   * List - Adds support to list metric datapoints collected for IoT devices
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListMetricValues.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  ListMetricValues = "iot:ListMetricValues",

  /**
   * List - Grants permission to get a list of all mitigation actions that match the specified filter criteria
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListMitigationActions.html
   */
  ListMitigationActions = "iot:ListMitigationActions",

  /**
   * List - Grants permission to list all named shadows for a given thing
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListNamedShadowsForThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  ListNamedShadowsForThing = "iot:ListNamedShadowsForThing",

  /**
   * List - Grants permission to list OTA update jobs in the account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListOTAUpdates.html
   */
  ListOTAUpdates = "iot:ListOTAUpdates",

  /**
   * List - Grants permission to list certificates that are being transfered but not yet accepted
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListOutgoingCertificates.html
   */
  ListOutgoingCertificates = "iot:ListOutgoingCertificates",

  /**
   * List - Grants permission to list your policies
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicies.html
   */
  ListPolicies = "iot:ListPolicies",

  /**
   * List - Grants permission to list the principals associated with the specified policy
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyPrincipals.html
   */
  ListPolicyPrincipals = "iot:ListPolicyPrincipals",

  /**
   * List - Grants permission to list the versions of the specified policy, and identifies the default version
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.policy `IotResource.policy`} 
   */
  ListPolicyVersions = "iot:ListPolicyVersions",

  /**
   * List - Grants permission to list the policies attached to the specified principal. If you use an Amazon Cognito identity, the ID needs to be in Amazon Cognito Identity format
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalPolicies.html
   */
  ListPrincipalPolicies = "iot:ListPrincipalPolicies",

  /**
   * List - Grants permission to list the things associated with the specified principal
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalThings.html
   */
  ListPrincipalThings = "iot:ListPrincipalThings",

  /**
   * List - Grants permission to get a list of fleet provisioning template versions
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplateVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   */
  ListProvisioningTemplateVersions = "iot:ListProvisioningTemplateVersions",

  /**
   * List - Grants permission to list the fleet provisioning templates in your AWS account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplates.html
   */
  ListProvisioningTemplates = "iot:ListProvisioningTemplates",

  /**
   * List - Grants permission to list the retained messages for your account
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  ListRetainedMessages = "iot:ListRetainedMessages",

  /**
   * List - Grants permission to list role aliases
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListRoleAliases.html
   */
  ListRoleAliases = "iot:ListRoleAliases",

  /**
   * List - Grants permission to list all of your scheduled audits
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListScheduledAudits.html
   */
  ListScheduledAudits = "iot:ListScheduledAudits",

  /**
   * List - Grants permission to list the Device Defender security profiles you have created
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   * - {@link IotResource.dimension `IotResource.dimension`} 
   */
  ListSecurityProfiles = "iot:ListSecurityProfiles",

  /**
   * List - Grants permission to list the Device Defender security profiles attached to a target
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfilesForTarget.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  ListSecurityProfilesForTarget = "iot:ListSecurityProfilesForTarget",

  /**
   * List - Grants permission to list the streams in your account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListStreams.html
   */
  ListStreams = "iot:ListStreams",

  /**
   * Read - Grants permission to list all tags for a given resource
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.authorizer `IotResource.authorizer`} 
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   * - {@link IotResource.cacert `IotResource.cacert`} 
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   * - {@link IotResource.dimension `IotResource.dimension`} 
   * - {@link IotResource.domainconfiguration `IotResource.domainconfiguration`} 
   * - {@link IotResource.dynamicthinggroup `IotResource.dynamicthinggroup`} 
   * - {@link IotResource.fleetmetric `IotResource.fleetmetric`} 
   * - {@link IotResource.job `IotResource.job`} 
   * - {@link IotResource.jobtemplate `IotResource.jobtemplate`} 
   * - {@link IotResource.mitigationaction `IotResource.mitigationaction`} 
   * - {@link IotResource.otaupdate `IotResource.otaupdate`} 
   * - {@link IotResource.policy `IotResource.policy`} 
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   * - {@link IotResource.rolealias `IotResource.rolealias`} 
   * - {@link IotResource.rule `IotResource.rule`} 
   * - {@link IotResource.scheduledaudit `IotResource.scheduledaudit`} 
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   * - {@link IotResource.stream `IotResource.stream`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   * - {@link IotResource.thingtype `IotResource.thingtype`} 
   */
  ListTagsForResource = "iot:ListTagsForResource",

  /**
   * List - Grants permission to list targets for the specified policy
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.policy `IotResource.policy`} 
   */
  ListTargetsForPolicy = "iot:ListTargetsForPolicy",

  /**
   * List - Grants permission to list the targets associated with a given Device Defender security profile
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForSecurityProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   */
  ListTargetsForSecurityProfile = "iot:ListTargetsForSecurityProfile",

  /**
   * List - Grants permission to list all thing groups
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroups.html
   */
  ListThingGroups = "iot:ListThingGroups",

  /**
   * List - Grants permission to list thing groups to which the specified thing belongs
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroupsForThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  ListThingGroupsForThing = "iot:ListThingGroupsForThing",

  /**
   * List - Grants permission to list the principals associated with the specified thing
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingPrincipals.html
   */
  ListThingPrincipals = "iot:ListThingPrincipals",

  /**
   * List - Grants permission to list information about bulk thing registration tasks
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTaskReports.html
   */
  ListThingRegistrationTaskReports = "iot:ListThingRegistrationTaskReports",

  /**
   * List - Grants permission to list bulk thing registration tasks
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTasks.html
   */
  ListThingRegistrationTasks = "iot:ListThingRegistrationTasks",

  /**
   * List - Grants permission to list all thing types
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingTypes.html
   */
  ListThingTypes = "iot:ListThingTypes",

  /**
   * List - Grants permission to list all things
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListThings.html
   */
  ListThings = "iot:ListThings",

  /**
   * List - Grants permission to list all things in the specified billing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInBillingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   */
  ListThingsInBillingGroup = "iot:ListThingsInBillingGroup",

  /**
   * List - Grants permission to list all things in the specified thing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInThingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  ListThingsInThingGroup = "iot:ListThingsInThingGroup",

  /**
   * List - Grants permission to list all TopicRuleDestinations
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListTopicRuleDestinations.html
   */
  ListTopicRuleDestinations = "iot:ListTopicRuleDestinations",

  /**
   * List - Grants permission to list the rules for the specific topic
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListTopicRules.html
   */
  ListTopicRules = "iot:ListTopicRules",

  /**
   * List - Grants permission to list tunnels
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_ListTunnels.html
   */
  ListTunnels = "iot:ListTunnels",

  /**
   * List - Grants permission to list the v2 logging levels
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListV2LoggingLevels.html
   */
  ListV2LoggingLevels = "iot:ListV2LoggingLevels",

  /**
   * List - Grants permission to list the Device Defender security profile violations discovered during the given time period
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ListViolationEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  ListViolationEvents = "iot:ListViolationEvents",

  /**
   * Write - Grants permission to open a tunnel
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_OpenTunnel.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `iot:ThingGroupArn`: Filters access by a list of IoT Thing Group ARNs that the destination IoT Thing belongs to for an IoT Tunnel ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iot:TunnelDestinationService`: Filters access by a list of destination services for an IoT Tunnel ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  OpenTunnel = "iot:OpenTunnel",

  /**
   * Write - Grants permission to publish to the specified topic
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.topic `IotResource.topic`} 
   */
  Publish = "iot:Publish",

  /**
   * Write - Grants permission to put verification state on a violation
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_PutVerificationStateOnViolation.html
   */
  PutVerificationStateOnViolation = "iot:PutVerificationStateOnViolation",

  /**
   * Write - Grants permission to receive from the specified topic
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.topic `IotResource.topic`} 
   */
  Receive = "iot:Receive",

  /**
   * Write - Grants permission to register a CA certificate with AWS IoT
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCACertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RegisterCACertificate = "iot:RegisterCACertificate",

  /**
   * Write - Grants permission to register a device certificate with AWS IoT
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificate.html
   */
  RegisterCertificate = "iot:RegisterCertificate",

  /**
   * Write - Grants permission to register a device certificate with AWS IoT without a registered CA (certificate authority)
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificateWithoutCA.html
   */
  RegisterCertificateWithoutCA = "iot:RegisterCertificateWithoutCA",

  /**
   * Write - Grants permission to register your thing
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterThing.html
   */
  RegisterThing = "iot:RegisterThing",

  /**
   * Write - Grants permission to reject a pending certificate transfer
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_RejectCertificateTransfer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   */
  RejectCertificateTransfer = "iot:RejectCertificateTransfer",

  /**
   * Write - Grants permission to remove thing from the specified billing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromBillingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  RemoveThingFromBillingGroup = "iot:RemoveThingFromBillingGroup",

  /**
   * Write - Grants permission to remove thing from the specified thing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromThingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  RemoveThingFromThingGroup = "iot:RemoveThingFromThingGroup",

  /**
   * Write - Grants permission to replace the specified rule
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ReplaceTopicRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.rule `IotResource.rule`} 
   */
  ReplaceTopicRule = "iot:ReplaceTopicRule",

  /**
   * Write - Grants permission to publish a retained message to the specified topic
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.topic `IotResource.topic`} 
   */
  RetainPublish = "iot:RetainPublish",

  /**
   * Write - Grants permission to rotate the access token of a tunnel
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_RotateTunnelAccessToken.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.tunnel `IotResource.tunnel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iot:ThingGroupArn`: Filters access by a list of IoT Thing Group ARNs that the destination IoT Thing belongs to for an IoT Tunnel ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iot:TunnelDestinationService`: Filters access by a list of destination services for an IoT Tunnel ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iot:ClientMode`: Filters access by the mode of the client for IoT Tunnel ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RotateTunnelAccessToken = "iot:RotateTunnelAccessToken",

  /**
   * Read - Grants permission to search IoT fleet index
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_SearchIndex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.index `IotResource.index`} 
   */
  SearchIndex = "iot:SearchIndex",

  /**
   * PermissionsManagement - Grants permission to set the default authorizer. This will be used if a websocket connection is made without specifying an authorizer
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultAuthorizer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.authorizer `IotResource.authorizer`} 
   */
  SetDefaultAuthorizer = "iot:SetDefaultAuthorizer",

  /**
   * PermissionsManagement - Grants permission to set the specified version of the specified policy as the policy's default (operative) version
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultPolicyVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.policy `IotResource.policy`} 
   */
  SetDefaultPolicyVersion = "iot:SetDefaultPolicyVersion",

  /**
   * Write - Grants permission to set the logging options
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_SetLoggingOptions.html
   */
  SetLoggingOptions = "iot:SetLoggingOptions",

  /**
   * Write - Grants permission to set the v2 logging level
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingLevel.html
   */
  SetV2LoggingLevel = "iot:SetV2LoggingLevel",

  /**
   * Write - Grants permission to set the v2 logging options
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingOptions.html
   */
  SetV2LoggingOptions = "iot:SetV2LoggingOptions",

  /**
   * Write - Grants permission to start a task that applies a set of mitigation actions to the specified target
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_StartAuditMitigationActionsTask.html
   */
  StartAuditMitigationActionsTask = "iot:StartAuditMitigationActionsTask",

  /**
   * Write - Grants permission to start a Device Defender ML Detect mitigation actions task
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_StartDetectMitigationActionsTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   */
  StartDetectMitigationActionsTask = "iot:StartDetectMitigationActionsTask",

  /**
   * Write - Grants permission to start an on-demand Device Defender audit
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_StartOnDemandAuditTask.html
   */
  StartOnDemandAuditTask = "iot:StartOnDemandAuditTask",

  /**
   * Write - Grants permission to start a bulk thing registration task
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_StartThingRegistrationTask.html
   */
  StartThingRegistrationTask = "iot:StartThingRegistrationTask",

  /**
   * Write - Grants permission to stop a bulk thing registration task
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_StopThingRegistrationTask.html
   */
  StopThingRegistrationTask = "iot:StopThingRegistrationTask",

  /**
   * Write - Grants permission to subscribe to the specified TopicFilter
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.topicfilter `IotResource.topicfilter`} 
   */
  Subscribe = "iot:Subscribe",

  /**
   * Tagging - Grants permission to tag a specified resource
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.authorizer `IotResource.authorizer`} 
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   * - {@link IotResource.cacert `IotResource.cacert`} 
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   * - {@link IotResource.dimension `IotResource.dimension`} 
   * - {@link IotResource.domainconfiguration `IotResource.domainconfiguration`} 
   * - {@link IotResource.dynamicthinggroup `IotResource.dynamicthinggroup`} 
   * - {@link IotResource.fleetmetric `IotResource.fleetmetric`} 
   * - {@link IotResource.job `IotResource.job`} 
   * - {@link IotResource.jobtemplate `IotResource.jobtemplate`} 
   * - {@link IotResource.mitigationaction `IotResource.mitigationaction`} 
   * - {@link IotResource.otaupdate `IotResource.otaupdate`} 
   * - {@link IotResource.policy `IotResource.policy`} 
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   * - {@link IotResource.rolealias `IotResource.rolealias`} 
   * - {@link IotResource.rule `IotResource.rule`} 
   * - {@link IotResource.scheduledaudit `IotResource.scheduledaudit`} 
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   * - {@link IotResource.stream `IotResource.stream`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   * - {@link IotResource.thingtype `IotResource.thingtype`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "iot:TagResource",

  /**
   * Read - Grants permission to test the policies evaluation for group policies
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_TestAuthorization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   */
  TestAuthorization = "iot:TestAuthorization",

  /**
   * Read - Grants permission to test invoke the specified custom authorizer for testing purposes
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_TestInvokeAuthorizer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.authorizer `IotResource.authorizer`} 
   */
  TestInvokeAuthorizer = "iot:TestInvokeAuthorizer",

  /**
   * Write - Grants permission to transfer the specified certificate to the specified AWS account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_TransferCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   */
  TransferCertificate = "iot:TransferCertificate",

  /**
   * Tagging - Grants permission to untag a specified resource
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.authorizer `IotResource.authorizer`} 
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   * - {@link IotResource.cacert `IotResource.cacert`} 
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   * - {@link IotResource.dimension `IotResource.dimension`} 
   * - {@link IotResource.domainconfiguration `IotResource.domainconfiguration`} 
   * - {@link IotResource.dynamicthinggroup `IotResource.dynamicthinggroup`} 
   * - {@link IotResource.fleetmetric `IotResource.fleetmetric`} 
   * - {@link IotResource.job `IotResource.job`} 
   * - {@link IotResource.jobtemplate `IotResource.jobtemplate`} 
   * - {@link IotResource.mitigationaction `IotResource.mitigationaction`} 
   * - {@link IotResource.otaupdate `IotResource.otaupdate`} 
   * - {@link IotResource.policy `IotResource.policy`} 
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   * - {@link IotResource.rolealias `IotResource.rolealias`} 
   * - {@link IotResource.rule `IotResource.rule`} 
   * - {@link IotResource.scheduledaudit `IotResource.scheduledaudit`} 
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   * - {@link IotResource.stream `IotResource.stream`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   * - {@link IotResource.thingtype `IotResource.thingtype`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "iot:UntagResource",

  /**
   * Write - Grants permission to configure or reconfigure the Device Defender audit settings for this account
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAccountAuditConfiguration.html
   */
  UpdateAccountAuditConfiguration = "iot:UpdateAccountAuditConfiguration",

  /**
   * Write - Grants permission to update a Device Defender audit suppression
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAuditSuppression.html
   */
  UpdateAuditSuppression = "iot:UpdateAuditSuppression",

  /**
   * Write - Grants permission to update an authorizer
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAuthorizer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.authorizer `IotResource.authorizer`} 
   */
  UpdateAuthorizer = "iot:UpdateAuthorizer",

  /**
   * Write - Grants permission to update information associated with the specified billing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateBillingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   */
  UpdateBillingGroup = "iot:UpdateBillingGroup",

  /**
   * Write - Grants permission to update a registered CA certificate
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCACertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cacert `IotResource.cacert`} 
   */
  UpdateCACertificate = "iot:UpdateCACertificate",

  /**
   * Write - Grants permission to update the status of the specified certificate. This operation is idempotent
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   */
  UpdateCertificate = "iot:UpdateCertificate",

  /**
   * Write - Grants permission to update the specified custom metric
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCustomMetric.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   */
  UpdateCustomMetric = "iot:UpdateCustomMetric",

  /**
   * Write - Grants permission to update the definition for a dimension
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDimension.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.dimension `IotResource.dimension`} 
   */
  UpdateDimension = "iot:UpdateDimension",

  /**
   * Write - Grants permission to update a domain configuration
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDomainConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.domainconfiguration `IotResource.domainconfiguration`} 
   */
  UpdateDomainConfiguration = "iot:UpdateDomainConfiguration",

  /**
   * Write - Grants permission to update a Dynamic Thing Group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDynamicThingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.dynamicthinggroup `IotResource.dynamicthinggroup`} 
   */
  UpdateDynamicThingGroup = "iot:UpdateDynamicThingGroup",

  /**
   * Write - Grants permission to update event configurations
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateEventConfigurations.html
   */
  UpdateEventConfigurations = "iot:UpdateEventConfigurations",

  /**
   * Write - Grants permission to update a fleet metric
   * @see https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.fleetmetric `IotResource.fleetmetric`} 
   * - {@link IotResource.index `IotResource.index`} 
   */
  UpdateFleetMetric = "iot:UpdateFleetMetric",

  /**
   * Write - Grants permission to update fleet indexing configuration
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateIndexingConfiguration.html
   */
  UpdateIndexingConfiguration = "iot:UpdateIndexingConfiguration",

  /**
   * Write - Grants permission to update a job
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.job `IotResource.job`} 
   */
  UpdateJob = "iot:UpdateJob",

  /**
   * Write - Grants permission to update the definition for the specified mitigation action
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateMitigationAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.mitigationaction `IotResource.mitigationaction`} 
   */
  UpdateMitigationAction = "iot:UpdateMitigationAction",

  /**
   * Write - Grants permission to update a fleet provisioning template
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateProvisioningTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   */
  UpdateProvisioningTemplate = "iot:UpdateProvisioningTemplate",

  /**
   * Write - Grants permission to update the role alias
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateRoleAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.rolealias `IotResource.rolealias`} 
   */
  UpdateRoleAlias = "iot:UpdateRoleAlias",

  /**
   * Write - Grants permission to update a scheduled audit, including what checks are performed and how often the audit takes place
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateScheduledAudit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.scheduledaudit `IotResource.scheduledaudit`} 
   */
  UpdateScheduledAudit = "iot:UpdateScheduledAudit",

  /**
   * Write - Grants permission to update a Device Defender security profile
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateSecurityProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   * - {@link IotResource.dimension `IotResource.dimension`} 
   */
  UpdateSecurityProfile = "iot:UpdateSecurityProfile",

  /**
   * Write - Grants permission to update the data for a stream
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.stream `IotResource.stream`} 
   */
  UpdateStream = "iot:UpdateStream",

  /**
   * Write - Grants permission to update information associated with the specified thing
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  UpdateThing = "iot:UpdateThing",

  /**
   * Write - Grants permission to update information associated with the specified thing group
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  UpdateThingGroup = "iot:UpdateThingGroup",

  /**
   * Write - Grants permission to update the thing groups to which the thing belongs
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroupsForThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   */
  UpdateThingGroupsForThing = "iot:UpdateThingGroupsForThing",

  /**
   * Write - Grants permission to update the thing shadow
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.thing `IotResource.thing`} 
   */
  UpdateThingShadow = "iot:UpdateThingShadow",

  /**
   * Write - Grants permission to update a TopicRuleDestination
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateTopicRuleDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.destination `IotResource.destination`} 
   */
  UpdateTopicRuleDestination = "iot:UpdateTopicRuleDestination",

  /**
   * Read - Grants permission to validate a Device Defender security profile behaviors specification
   * @see https://docs.aws.amazon.com/iot/latest/apireference/API_ValidateSecurityProfileBehaviors.html
   */
  ValidateSecurityProfileBehaviors = "iot:ValidateSecurityProfileBehaviors",

  /**
   * * - Grant all iot permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotResource.cert `IotResource.cert`} 
   * - {@link IotResource.billinggroup `IotResource.billinggroup`} 
   * - {@link IotResource.thing `IotResource.thing`} 
   * - {@link IotResource.thinggroup `IotResource.thinggroup`} 
   * - {@link IotResource.job `IotResource.job`} 
   * - {@link IotResource.securityprofile `IotResource.securityprofile`} 
   * - {@link IotResource.custommetric `IotResource.custommetric`} 
   * - {@link IotResource.dimension `IotResource.dimension`} 
   * - {@link IotResource.tunnel `IotResource.tunnel`} 
   * - {@link IotResource.destination `IotResource.destination`} 
   * - {@link IotResource.client `IotResource.client`} 
   * - {@link IotResource.authorizer `IotResource.authorizer`} 
   * - {@link IotResource.domainconfiguration `IotResource.domainconfiguration`} 
   * - {@link IotResource.dynamicthinggroup `IotResource.dynamicthinggroup`} 
   * - {@link IotResource.fleetmetric `IotResource.fleetmetric`} 
   * - {@link IotResource.index `IotResource.index`} 
   * - {@link IotResource.jobtemplate `IotResource.jobtemplate`} 
   * - {@link IotResource.mitigationaction `IotResource.mitigationaction`} 
   * - {@link IotResource.otaupdate `IotResource.otaupdate`} 
   * - {@link IotResource.policy `IotResource.policy`} 
   * - {@link IotResource.provisioningtemplate `IotResource.provisioningtemplate`} 
   * - {@link IotResource.rolealias `IotResource.rolealias`} 
   * - {@link IotResource.scheduledaudit `IotResource.scheduledaudit`} 
   * - {@link IotResource.stream `IotResource.stream`} 
   * - {@link IotResource.thingtype `IotResource.thingtype`} 
   * - {@link IotResource.rule `IotResource.rule`} 
   * - {@link IotResource.cacert `IotResource.cacert`} 
   * - {@link IotResource.topic `IotResource.topic`} 
   * - {@link IotResource.topicfilter `IotResource.topicfilter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `iot:Delete`: Filters access by a flag indicating whether or not to also delete an IoT Tunnel immediately when making iot:CloseTunnel request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `iot:DomainName`: Filters access by based on the domain name of an IoT DomainConfiguration ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iot:ThingGroupArn`: Filters access by a list of IoT Thing Group ARNs that the destination IoT Thing belongs to for an IoT Tunnel ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iot:TunnelDestinationService`: Filters access by a list of destination services for an IoT Tunnel ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `iot:ClientMode`: Filters access by the mode of the client for IoT Tunnel ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "iot:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
 */
export const IotResource = {

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/iot-message-broker.html
   */
  client: (options: Partial<{partition: string, region: string, account: string, clientId: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:client/${options.clientId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/iot-indexing.html
   */
  index: (options: Partial<{partition: string, region: string, account: string, indexName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:index/${options.indexName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/iot-indexing.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  fleetmetric: (options: Partial<{partition: string, region: string, account: string, fleetMetricName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:fleetmetric/${options.fleetMetricName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/iot-jobs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  job: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/iot-job-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  jobtemplate: (options: Partial<{partition: string, region: string, account: string, jobTemplateId: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:jobtemplate/${options.jobTemplateId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/iot-tunnels.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  tunnel: (options: Partial<{partition: string, region: string, account: string, tunnelId: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:tunnel/${options.tunnelId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   */
  thing: (options: Partial<{partition: string, region: string, account: string, thingName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:thing/${options.thingName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/thing-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  thinggroup: (options: Partial<{partition: string, region: string, account: string, thingGroupName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:thinggroup/${options.thingGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/billing-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  billinggroup: (options: Partial<{partition: string, region: string, account: string, billingGroupName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:billinggroup/${options.billingGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/dynamic-thing-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dynamicthinggroup: (options: Partial<{partition: string, region: string, account: string, thingGroupName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:thinggroup/${options.thingGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/thing-types.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  thingtype: (options: Partial<{partition: string, region: string, account: string, thingTypeName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:thingtype/${options.thingTypeName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/iot-message-broker.html
   */
  topic: (options: Partial<{partition: string, region: string, account: string, topicName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:topic/${options.topicName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/topics.html
   */
  topicfilter: (options: Partial<{partition: string, region: string, account: string, topicFilter: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:topicfilter/${options.topicFilter || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  rolealias: (options: Partial<{partition: string, region: string, account: string, roleAlias: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:rolealias/${options.roleAlias || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/custom-authorizer.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  authorizer: (options: Partial<{partition: string, region: string, account: string, authorizerName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:authorizer/${options.authorizerName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/iot-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  policy: (options: Partial<{partition: string, region: string, account: string, policyName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:policy/${options.policyName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/x509-certs.html
   */
  cert: (options: Partial<{partition: string, region: string, account: string, certificate: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:cert/${options.certificate || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/x509-certs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cacert: (options: Partial<{partition: string, region: string, account: string, cACertificate: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:cacert/${options.cACertificate || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ota-dev.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  stream: (options: Partial<{partition: string, region: string, account: string, streamId: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:stream/${options.streamId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ota-dev.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  otaupdate: (options: Partial<{partition: string, region: string, account: string, otaUpdateId: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:otaupdate/${options.otaUpdateId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-audit.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  scheduledaudit: (options: Partial<{partition: string, region: string, account: string, scheduleName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:scheduledaudit/${options.scheduleName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  mitigationaction: (options: Partial<{partition: string, region: string, account: string, mitigationActionName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:mitigationaction/${options.mitigationActionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  securityprofile: (options: Partial<{partition: string, region: string, account: string, securityProfileName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:securityprofile/${options.securityProfileName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  custommetric: (options: Partial<{partition: string, region: string, account: string, metricName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:custommetric/${options.metricName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dimension: (options: Partial<{partition: string, region: string, account: string, dimensionName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:dimension/${options.dimensionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  rule: (options: Partial<{partition: string, region: string, account: string, ruleName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:rule/${options.ruleName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/rule-destination.html
   */
  destination: (options: Partial<{partition: string, region: string, account: string, destinationType: string, uuid: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:destination/${options.destinationType || '*'}/${options.uuid || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  provisioningtemplate: (options: Partial<{partition: string, region: string, account: string, provisioningTemplate: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:provisioningtemplate/${options.provisioningTemplate || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/domain-configuration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key component of a tag associated to the IoT resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  domainconfiguration: (options: Partial<{partition: string, region: string, account: string, domainConfigurationName: string, id: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:domainconfiguration/${options.domainConfigurationName || '*'}/${options.id || '*'}`,
}

