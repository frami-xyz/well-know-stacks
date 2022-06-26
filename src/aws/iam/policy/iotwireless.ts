/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotcoreforlorawan.html
 */
export enum IotwirelessAction {

  /**
   * Write - Grants permission to link partner accounts with Aws account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateAwsAccountWithPartnerAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  AssociateAwsAccountWithPartnerAccount = "iotwireless:AssociateAwsAccountWithPartnerAccount",

  /**
   * Write - Grants permission to associate the MulticastGroup with FuotaTask
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateMulticastGroupWithFuotaTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.fuotaTask `IotwirelessResource.fuotaTask`} 
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   */
  AssociateMulticastGroupWithFuotaTask = "iotwireless:AssociateMulticastGroupWithFuotaTask",

  /**
   * Write - Grants permission to associate the wireless device with FuotaTask
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessDeviceWithFuotaTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.fuotaTask `IotwirelessResource.fuotaTask`} 
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   */
  AssociateWirelessDeviceWithFuotaTask = "iotwireless:AssociateWirelessDeviceWithFuotaTask",

  /**
   * Write - Grants permission to associate the WirelessDevice with MulticastGroup
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessDeviceWithMulticastGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   */
  AssociateWirelessDeviceWithMulticastGroup = "iotwireless:AssociateWirelessDeviceWithMulticastGroup",

  /**
   * Write - Grants permission to associate the wireless device with AWS IoT thing for a given wirelessDeviceId
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessDeviceWithThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.thing `IotwirelessResource.thing`} 
   */
  AssociateWirelessDeviceWithThing = "iotwireless:AssociateWirelessDeviceWithThing",

  /**
   * Write - Grants permission to associate a WirelessGateway with the IoT Core Identity certificate
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessGatewayWithCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   * - {@link IotwirelessResource.cert `IotwirelessResource.cert`} 
   */
  AssociateWirelessGatewayWithCertificate = "iotwireless:AssociateWirelessGatewayWithCertificate",

  /**
   * Write - Grants permission to associate the wireless gateway with AWS IoT thing for a given wirelessGatewayId
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateWirelessGatewayWithThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   * - {@link IotwirelessResource.thing `IotwirelessResource.thing`} 
   */
  AssociateWirelessGatewayWithThing = "iotwireless:AssociateWirelessGatewayWithThing",

  /**
   * Write - Grants permission to cancel the MulticastGroup session
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CancelMulticastGroupSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   */
  CancelMulticastGroupSession = "iotwireless:CancelMulticastGroupSession",

  /**
   * Write - Grants permission to create a Destination resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDestination = "iotwireless:CreateDestination",

  /**
   * Write - Grants permission to create a DeviceProfile resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateDeviceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDeviceProfile = "iotwireless:CreateDeviceProfile",

  /**
   * Write - Grants permission to create a FuotaTask resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateFuotaTask.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFuotaTask = "iotwireless:CreateFuotaTask",

  /**
   * Write - Grants permission to create a MulticastGroup resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateMulticastGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMulticastGroup = "iotwireless:CreateMulticastGroup",

  /**
   * Write - Grants permission to create a NetworkAnalyzerConfiguration resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateNetworkAnalyzerConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateNetworkAnalyzerConfiguration = "iotwireless:CreateNetworkAnalyzerConfiguration",

  /**
   * Write - Grants permission to create a ServiceProfile resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateServiceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateServiceProfile = "iotwireless:CreateServiceProfile",

  /**
   * Write - Grants permission to create a WirelessDevice resource with given Destination
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWirelessDevice = "iotwireless:CreateWirelessDevice",

  /**
   * Write - Grants permission to create a WirelessGateway resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWirelessGateway = "iotwireless:CreateWirelessGateway",

  /**
   * Write - Grants permission to create a task for a given WirelessGateway
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGatewayTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  CreateWirelessGatewayTask = "iotwireless:CreateWirelessGatewayTask",

  /**
   * Write - Grants permission to create a WirelessGateway task definition
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGatewayTaskDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWirelessGatewayTaskDefinition = "iotwireless:CreateWirelessGatewayTaskDefinition",

  /**
   * Write - Grants permission to delete a Destination
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.destination `IotwirelessResource.destination`} 
   */
  DeleteDestination = "iotwireless:DeleteDestination",

  /**
   * Write - Grants permission to delete a DeviceProfile
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteDeviceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.deviceProfile `IotwirelessResource.deviceProfile`} 
   */
  DeleteDeviceProfile = "iotwireless:DeleteDeviceProfile",

  /**
   * Write - Grants permission to delete the FuotaTask
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteFuotaTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.fuotaTask `IotwirelessResource.fuotaTask`} 
   */
  DeleteFuotaTask = "iotwireless:DeleteFuotaTask",

  /**
   * Write - Grants permission to delete the MulticastGroup
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteMulticastGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   */
  DeleteMulticastGroup = "iotwireless:DeleteMulticastGroup",

  /**
   * Write - Grants permission to delete the NetworkAnalyzerConfiguration
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteNetworkAnalyzerConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.networkAnalyzerConfiguration `IotwirelessResource.networkAnalyzerConfiguration`} 
   */
  DeleteNetworkAnalyzerConfiguration = "iotwireless:DeleteNetworkAnalyzerConfiguration",

  /**
   * Write - Grants permission to delete QueuedMessages
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteQueuedMessages.html
   */
  DeleteQueuedMessages = "iotwireless:DeleteQueuedMessages",

  /**
   * Write - Grants permission to delete a ServiceProfile
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteServiceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.serviceProfile `IotwirelessResource.serviceProfile`} 
   */
  DeleteServiceProfile = "iotwireless:DeleteServiceProfile",

  /**
   * Write - Grants permission to delete a WirelessDevice
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   */
  DeleteWirelessDevice = "iotwireless:DeleteWirelessDevice",

  /**
   * Write - Grants permission to delete a WirelessGateway
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  DeleteWirelessGateway = "iotwireless:DeleteWirelessGateway",

  /**
   * Write - Grants permission to delete task for a given WirelessGateway
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessGatewayTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  DeleteWirelessGatewayTask = "iotwireless:DeleteWirelessGatewayTask",

  /**
   * Write - Grants permission to delete a WirelessGateway task definition
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DeleteWirelessGatewayTaskDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGatewayTaskDefinition `IotwirelessResource.wirelessGatewayTaskDefinition`} 
   */
  DeleteWirelessGatewayTaskDefinition = "iotwireless:DeleteWirelessGatewayTaskDefinition",

  /**
   * Write - Grants permission to disassociate an AWS account from a partner account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateAwsAccountFromPartnerAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.sidewalkAccount `IotwirelessResource.sidewalkAccount`} 
   */
  DisassociateAwsAccountFromPartnerAccount = "iotwireless:DisassociateAwsAccountFromPartnerAccount",

  /**
   * Write - Grants permission to disassociate the MulticastGroup from FuotaTask
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateMulticastGroupFromFuotaTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.fuotaTask `IotwirelessResource.fuotaTask`} 
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   */
  DisassociateMulticastGroupFromFuotaTask = "iotwireless:DisassociateMulticastGroupFromFuotaTask",

  /**
   * Write - Grants permission to disassociate the wireless device from FuotaTask
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessDeviceFromFuotaTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.fuotaTask `IotwirelessResource.fuotaTask`} 
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   */
  DisassociateWirelessDeviceFromFuotaTask = "iotwireless:DisassociateWirelessDeviceFromFuotaTask",

  /**
   * Write - Grants permission to disassociate the wireless device from MulticastGroup
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessDeviceFromMulticastGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   */
  DisassociateWirelessDeviceFromMulticastGroup = "iotwireless:DisassociateWirelessDeviceFromMulticastGroup",

  /**
   * Write - Grants permission to disassociate a wireless device from a AWS IoT thing
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessDeviceFromThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.thing `IotwirelessResource.thing`} 
   */
  DisassociateWirelessDeviceFromThing = "iotwireless:DisassociateWirelessDeviceFromThing",

  /**
   * Write - Grants permission to disassociate a WirelessGateway from a IoT Core Identity certificate
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessGatewayFromCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   * - {@link IotwirelessResource.cert `IotwirelessResource.cert`} 
   */
  DisassociateWirelessGatewayFromCertificate = "iotwireless:DisassociateWirelessGatewayFromCertificate",

  /**
   * Write - Grants permission to disassociate a WirelessGateway from a IoT Core thing
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_DisassociateWirelessGatewayFromThing.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   * - {@link IotwirelessResource.thing `IotwirelessResource.thing`} 
   */
  DisassociateWirelessGatewayFromThing = "iotwireless:DisassociateWirelessGatewayFromThing",

  /**
   * Read - Grants permission to get the Destination
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.destination `IotwirelessResource.destination`} 
   */
  GetDestination = "iotwireless:GetDestination",

  /**
   * Read - Grants permission to get the DeviceProfile
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetDeviceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.deviceProfile `IotwirelessResource.deviceProfile`} 
   */
  GetDeviceProfile = "iotwireless:GetDeviceProfile",

  /**
   * Read - Grants permission to get event configuration by resource types
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetEventConfigurationByResourceTypes.html
   */
  GetEventConfigurationByResourceTypes = "iotwireless:GetEventConfigurationByResourceTypes",

  /**
   * Read - Grants permission to get the FuotaTask
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetFuotaTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.fuotaTask `IotwirelessResource.fuotaTask`} 
   */
  GetFuotaTask = "iotwireless:GetFuotaTask",

  /**
   * Read - Grants permission to get log levels by resource types
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetLogLevelsByResourceTypes.html
   */
  GetLogLevelsByResourceTypes = "iotwireless:GetLogLevelsByResourceTypes",

  /**
   * Read - Grants permission to get the MulticastGroup
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetMulticastGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   */
  GetMulticastGroup = "iotwireless:GetMulticastGroup",

  /**
   * Read - Grants permission to get the MulticastGroup session
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetMulticastGroupSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   */
  GetMulticastGroupSession = "iotwireless:GetMulticastGroupSession",

  /**
   * Read - Grants permission to get the NetworkAnalyzerConfiguration
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetNetworkAnalyzerConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.networkAnalyzerConfiguration `IotwirelessResource.networkAnalyzerConfiguration`} 
   */
  GetNetworkAnalyzerConfiguration = "iotwireless:GetNetworkAnalyzerConfiguration",

  /**
   * Read - Grants permission to get the associated PartnerAccount
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetPartnerAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.sidewalkAccount `IotwirelessResource.sidewalkAccount`} 
   */
  GetPartnerAccount = "iotwireless:GetPartnerAccount",

  /**
   * Read - Grants permission to get an event configuration for an identifier
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourceEventConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.sidewalkAccount `IotwirelessResource.sidewalkAccount`} 
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  GetResourceEventConfiguration = "iotwireless:GetResourceEventConfiguration",

  /**
   * Read - Grants permission to get resource log level
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetResourceLogLevel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  GetResourceLogLevel = "iotwireless:GetResourceLogLevel",

  /**
   * Read - Grants permission to retrieve the customer account specific endpoint for CUPS protocol connection or LoRaWAN Network Server (LNS) protocol connection, and optionally server trust certificate in PEM format
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetServiceEndpoint.html
   */
  GetServiceEndpoint = "iotwireless:GetServiceEndpoint",

  /**
   * Read - Grants permission to get the ServiceProfile
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetServiceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.serviceProfile `IotwirelessResource.serviceProfile`} 
   */
  GetServiceProfile = "iotwireless:GetServiceProfile",

  /**
   * Read - Grants permission to get the WirelessDevice
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   */
  GetWirelessDevice = "iotwireless:GetWirelessDevice",

  /**
   * Read - Grants permission to get statistics info for a given WirelessDevice
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessDeviceStatistics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   */
  GetWirelessDeviceStatistics = "iotwireless:GetWirelessDeviceStatistics",

  /**
   * Read - Grants permission to get the WirelessGateway
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  GetWirelessGateway = "iotwireless:GetWirelessGateway",

  /**
   * Read - Grants permission to get the IoT Core Identity certificate id associated with the WirelessGateway
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  GetWirelessGatewayCertificate = "iotwireless:GetWirelessGatewayCertificate",

  /**
   * Read - Grants permission to get Current firmware version and other information for the WirelessGateway
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayFirmwareInformation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  GetWirelessGatewayFirmwareInformation = "iotwireless:GetWirelessGatewayFirmwareInformation",

  /**
   * Read - Grants permission to get statistics info for a given WirelessGateway
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayStatistics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  GetWirelessGatewayStatistics = "iotwireless:GetWirelessGatewayStatistics",

  /**
   * Read - Grants permission to get the task for a given WirelessGateway
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  GetWirelessGatewayTask = "iotwireless:GetWirelessGatewayTask",

  /**
   * Read - Grants permission to get the given WirelessGateway task definition
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_GetWirelessGatewayTaskDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGatewayTaskDefinition `IotwirelessResource.wirelessGatewayTaskDefinition`} 
   */
  GetWirelessGatewayTaskDefinition = "iotwireless:GetWirelessGatewayTaskDefinition",

  /**
   * Read - Grants permission to list information of available Destinations based on the AWS account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListDestinations.html
   */
  ListDestinations = "iotwireless:ListDestinations",

  /**
   * Read - Grants permission to list information of available DeviceProfiles based on the AWS account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListDeviceProfiles.html
   */
  ListDeviceProfiles = "iotwireless:ListDeviceProfiles",

  /**
   * Read - Grants permission to list information of available event configurations based on the AWS account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListEventConfigurations.html
   */
  ListEventConfigurations = "iotwireless:ListEventConfigurations",

  /**
   * Read - Grants permission to list information of available FuotaTasks based on the AWS account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListFuotaTasks.html
   */
  ListFuotaTasks = "iotwireless:ListFuotaTasks",

  /**
   * Read - Grants permission to list information of available MulticastGroups based on the AWS account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListMulticastGroups.html
   */
  ListMulticastGroups = "iotwireless:ListMulticastGroups",

  /**
   * Read - Grants permission to list information of available MulticastGroups by FuotaTask based on the AWS account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListMulticastGroupsByFuotaTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.fuotaTask `IotwirelessResource.fuotaTask`} 
   */
  ListMulticastGroupsByFuotaTask = "iotwireless:ListMulticastGroupsByFuotaTask",

  /**
   * Read - Grants permission to list information of available NetworkAnalyzerConfigurations based on the AWS account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListNetworkAnalyzerConfigurations.html
   */
  ListNetworkAnalyzerConfigurations = "iotwireless:ListNetworkAnalyzerConfigurations",

  /**
   * Read - Grants permission to list the available partner accounts
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListPartnerAccounts.html
   */
  ListPartnerAccounts = "iotwireless:ListPartnerAccounts",

  /**
   * Read - Grants permission to list the Queued Messages
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListQueuedMessages.html
   */
  ListQueuedMessages = "iotwireless:ListQueuedMessages",

  /**
   * Read - Grants permission to list information of available ServiceProfiles based on the AWS account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListServiceProfiles.html
   */
  ListServiceProfiles = "iotwireless:ListServiceProfiles",

  /**
   * Read - Grants permission to list all tags for a given resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.destination `IotwirelessResource.destination`} 
   * - {@link IotwirelessResource.deviceProfile `IotwirelessResource.deviceProfile`} 
   * - {@link IotwirelessResource.networkAnalyzerConfiguration `IotwirelessResource.networkAnalyzerConfiguration`} 
   * - {@link IotwirelessResource.serviceProfile `IotwirelessResource.serviceProfile`} 
   * - {@link IotwirelessResource.sidewalkAccount `IotwirelessResource.sidewalkAccount`} 
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   * - {@link IotwirelessResource.wirelessGatewayTaskDefinition `IotwirelessResource.wirelessGatewayTaskDefinition`} 
   */
  ListTagsForResource = "iotwireless:ListTagsForResource",

  /**
   * Read - Grants permission to list information of available WirelessDevices based on the AWS account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListWirelessDevices.html
   */
  ListWirelessDevices = "iotwireless:ListWirelessDevices",

  /**
   * Read - Grants permission to list information of available WirelessGateway task definitions based on the AWS account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListWirelessGatewayTaskDefinitions.html
   */
  ListWirelessGatewayTaskDefinitions = "iotwireless:ListWirelessGatewayTaskDefinitions",

  /**
   * Read - Grants permission to list information of available WirelessGateways based on the AWS account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ListWirelessGateways.html
   */
  ListWirelessGateways = "iotwireless:ListWirelessGateways",

  /**
   * Write - Grants permission to put resource log level
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_PutResourceLogLevel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  PutResourceLogLevel = "iotwireless:PutResourceLogLevel",

  /**
   * Write - Grants permission to reset all resource log levels
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ResetAllResourceLogLevels.html
   */
  ResetAllResourceLogLevels = "iotwireless:ResetAllResourceLogLevels",

  /**
   * Write - Grants permission to reset resource log level
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_ResetResourceLogLevel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  ResetResourceLogLevel = "iotwireless:ResetResourceLogLevel",

  /**
   * Write - Grants permission to send data to the MulticastGroup
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_SendDataToMulticastGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   */
  SendDataToMulticastGroup = "iotwireless:SendDataToMulticastGroup",

  /**
   * Write - Grants permission to send the decrypted application data frame to the target device
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_SendDataToWirelessDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   */
  SendDataToWirelessDevice = "iotwireless:SendDataToWirelessDevice",

  /**
   * Write - Grants permission to associate the WirelessDevices with MulticastGroup
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_StartBulkAssociateWirelessDeviceWithMulticastGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   */
  StartBulkAssociateWirelessDeviceWithMulticastGroup = "iotwireless:StartBulkAssociateWirelessDeviceWithMulticastGroup",

  /**
   * Write - Grants permission to bulk disassociate the WirelessDevices from MulticastGroup
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_StartBulkDisassociateWirelessDeviceFromMulticastGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   */
  StartBulkDisassociateWirelessDeviceFromMulticastGroup = "iotwireless:StartBulkDisassociateWirelessDeviceFromMulticastGroup",

  /**
   * Write - Grants permission to start the FuotaTask
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_StartFuotaTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.fuotaTask `IotwirelessResource.fuotaTask`} 
   */
  StartFuotaTask = "iotwireless:StartFuotaTask",

  /**
   * Write - Grants permission to start the MulticastGroup session
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_StartMulticastGroupSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   */
  StartMulticastGroupSession = "iotwireless:StartMulticastGroupSession",

  /**
   * Write - Grants permission to start NetworkAnalyzer stream
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-network-analyzer-api.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.networkAnalyzerConfiguration `IotwirelessResource.networkAnalyzerConfiguration`} 
   */
  StartNetworkAnalyzerStream = "iotwireless:StartNetworkAnalyzerStream",

  /**
   * Tagging - Grants permission to tag a given resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.destination `IotwirelessResource.destination`} 
   * - {@link IotwirelessResource.deviceProfile `IotwirelessResource.deviceProfile`} 
   * - {@link IotwirelessResource.networkAnalyzerConfiguration `IotwirelessResource.networkAnalyzerConfiguration`} 
   * - {@link IotwirelessResource.serviceProfile `IotwirelessResource.serviceProfile`} 
   * - {@link IotwirelessResource.sidewalkAccount `IotwirelessResource.sidewalkAccount`} 
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   * - {@link IotwirelessResource.wirelessGatewayTaskDefinition `IotwirelessResource.wirelessGatewayTaskDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "iotwireless:TagResource",

  /**
   * Write - Grants permission to simulate a provisioned device to send an uplink data with payload of 'Hello'
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_TestWirelessDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   */
  TestWirelessDevice = "iotwireless:TestWirelessDevice",

  /**
   * Tagging - Grants permission to remove the given tags from the resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.destination `IotwirelessResource.destination`} 
   * - {@link IotwirelessResource.deviceProfile `IotwirelessResource.deviceProfile`} 
   * - {@link IotwirelessResource.networkAnalyzerConfiguration `IotwirelessResource.networkAnalyzerConfiguration`} 
   * - {@link IotwirelessResource.serviceProfile `IotwirelessResource.serviceProfile`} 
   * - {@link IotwirelessResource.sidewalkAccount `IotwirelessResource.sidewalkAccount`} 
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   * - {@link IotwirelessResource.wirelessGatewayTaskDefinition `IotwirelessResource.wirelessGatewayTaskDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "iotwireless:UntagResource",

  /**
   * Write - Grants permission to update a Destination resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.destination `IotwirelessResource.destination`} 
   */
  UpdateDestination = "iotwireless:UpdateDestination",

  /**
   * Write - Grants permission to update event configuration by resource types
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateEventConfigurationByResourceTypes.html
   */
  UpdateEventConfigurationByResourceTypes = "iotwireless:UpdateEventConfigurationByResourceTypes",

  /**
   * Write - Grants permission to update the FuotaTask
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateFuotaTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.fuotaTask `IotwirelessResource.fuotaTask`} 
   */
  UpdateFuotaTask = "iotwireless:UpdateFuotaTask",

  /**
   * Write - Grants permission to update log levels by resource types
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateLogLevelsByResourceTypes.html
   */
  UpdateLogLevelsByResourceTypes = "iotwireless:UpdateLogLevelsByResourceTypes",

  /**
   * Write - Grants permission to update the MulticastGroup
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateMulticastGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   */
  UpdateMulticastGroup = "iotwireless:UpdateMulticastGroup",

  /**
   * Write - Grants permission to update the NetworkAnalyzerConfiguration
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateNetworkAnalyzerConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.networkAnalyzerConfiguration `IotwirelessResource.networkAnalyzerConfiguration`} 
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  UpdateNetworkAnalyzerConfiguration = "iotwireless:UpdateNetworkAnalyzerConfiguration",

  /**
   * Write - Grants permission to update a partner account
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdatePartnerAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.sidewalkAccount `IotwirelessResource.sidewalkAccount`} 
   */
  UpdatePartnerAccount = "iotwireless:UpdatePartnerAccount",

  /**
   * Write - Grants permission to update an event configuration for an identifier
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateResourceEventConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.sidewalkAccount `IotwirelessResource.sidewalkAccount`} 
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  UpdateResourceEventConfiguration = "iotwireless:UpdateResourceEventConfiguration",

  /**
   * Write - Grants permission to update a WirelessDevice resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateWirelessDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   */
  UpdateWirelessDevice = "iotwireless:UpdateWirelessDevice",

  /**
   * Write - Grants permission to update a WirelessGateway resource
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_UpdateWirelessGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   */
  UpdateWirelessGateway = "iotwireless:UpdateWirelessGateway",

  /**
   * * - Grant all iotwireless permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotcoreforlorawan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IotwirelessResource.fuotaTask `IotwirelessResource.fuotaTask`} 
   * - {@link IotwirelessResource.multicastGroup `IotwirelessResource.multicastGroup`} 
   * - {@link IotwirelessResource.wirelessDevice `IotwirelessResource.wirelessDevice`} 
   * - {@link IotwirelessResource.thing `IotwirelessResource.thing`} 
   * - {@link IotwirelessResource.wirelessGateway `IotwirelessResource.wirelessGateway`} 
   * - {@link IotwirelessResource.cert `IotwirelessResource.cert`} 
   * - {@link IotwirelessResource.destination `IotwirelessResource.destination`} 
   * - {@link IotwirelessResource.deviceProfile `IotwirelessResource.deviceProfile`} 
   * - {@link IotwirelessResource.networkAnalyzerConfiguration `IotwirelessResource.networkAnalyzerConfiguration`} 
   * - {@link IotwirelessResource.serviceProfile `IotwirelessResource.serviceProfile`} 
   * - {@link IotwirelessResource.wirelessGatewayTaskDefinition `IotwirelessResource.wirelessGatewayTaskDefinition`} 
   * - {@link IotwirelessResource.sidewalkAccount `IotwirelessResource.sidewalkAccount`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key that is present in the request that the user makes to IoT Wireless ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "iotwireless:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotcoreforlorawan.html
 */
export const IotwirelessResource = {

  /**
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key component of a tag attached to an IoT Wireless resource ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  wirelessDevice: (options: Partial<{partition: string, region: string, account: string, wirelessDeviceId: string}> = {}) => `arn:${options.partition || '*'}:iotwireless:${options.region || '*'}:${options.account || '*'}:WirelessDevice/${options.wirelessDeviceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key component of a tag attached to an IoT Wireless resource ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  wirelessGateway: (options: Partial<{partition: string, region: string, account: string, wirelessGatewayId: string}> = {}) => `arn:${options.partition || '*'}:iotwireless:${options.region || '*'}:${options.account || '*'}:WirelessGateway/${options.wirelessGatewayId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateDeviceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key component of a tag attached to an IoT Wireless resource ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deviceProfile: (options: Partial<{partition: string, region: string, account: string, deviceProfileId: string}> = {}) => `arn:${options.partition || '*'}:iotwireless:${options.region || '*'}:${options.account || '*'}:DeviceProfile/${options.deviceProfileId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateServiceProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key component of a tag attached to an IoT Wireless resource ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  serviceProfile: (options: Partial<{partition: string, region: string, account: string, serviceProfileId: string}> = {}) => `arn:${options.partition || '*'}:iotwireless:${options.region || '*'}:${options.account || '*'}:ServiceProfile/${options.serviceProfileId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key component of a tag attached to an IoT Wireless resource ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  destination: (options: Partial<{partition: string, region: string, account: string, destinationName: string}> = {}) => `arn:${options.partition || '*'}:iotwireless:${options.region || '*'}:${options.account || '*'}:Destination/${options.destinationName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_AssociateAwsAccountWithPartnerAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key component of a tag attached to an IoT Wireless resource ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  sidewalkAccount: (options: Partial<{partition: string, region: string, account: string, sidewalkAccountId: string}> = {}) => `arn:${options.partition || '*'}:iotwireless:${options.region || '*'}:${options.account || '*'}:SidewalkAccount/${options.sidewalkAccountId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateWirelessGatewayTaskDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key component of a tag attached to an IoT Wireless resource ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  wirelessGatewayTaskDefinition: (options: Partial<{partition: string, region: string, account: string, wirelessGatewayTaskDefinitionId: string}> = {}) => `arn:${options.partition || '*'}:iotwireless:${options.region || '*'}:${options.account || '*'}:WirelessGatewayTaskDefinition/${options.wirelessGatewayTaskDefinitionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateFuotaTask.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key component of a tag attached to an IoT Wireless resource ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  fuotaTask: (options: Partial<{partition: string, region: string, account: string, fuotaTaskId: string}> = {}) => `arn:${options.partition || '*'}:iotwireless:${options.region || '*'}:${options.account || '*'}:FuotaTask/${options.fuotaTaskId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateMulticastGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key component of a tag attached to an IoT Wireless resource ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  multicastGroup: (options: Partial<{partition: string, region: string, account: string, multicastGroupId: string}> = {}) => `arn:${options.partition || '*'}:iotwireless:${options.region || '*'}:${options.account || '*'}:MulticastGroup/${options.multicastGroupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot-wireless/2020-11-22/apireference/API_CreateNetworkAnalyzerConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key component of a tag attached to an IoT Wireless resource ({@link https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot-iam.html/ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  networkAnalyzerConfiguration: (options: Partial<{partition: string, region: string, account: string, networkAnalyzerConfigurationName: string}> = {}) => `arn:${options.partition || '*'}:iotwireless:${options.region || '*'}:${options.account || '*'}:NetworkAnalyzerConfiguration/${options.networkAnalyzerConfigurationName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   */
  thing: (options: Partial<{partition: string, region: string, account: string, thingName: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:thing/${options.thingName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html
   */
  cert: (options: Partial<{partition: string, region: string, account: string, certificate: string}> = {}) => `arn:${options.partition || '*'}:iot:${options.region || '*'}:${options.account || '*'}:cert/${options.certificate || '*'}`,
}

