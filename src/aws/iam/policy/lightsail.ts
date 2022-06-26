/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlightsail.html
 */
export enum LightsailAction {

  /**
   * Write - Grants permission to create a static IP address that can be attached to an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AllocateStaticIp.html
   */
  AllocateStaticIp = "lightsail:AllocateStaticIp",

  /**
   * Write - Grants permission to attach an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachCertificateToDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.certificate `LightsailResource.certificate`} 
   * - {@link LightsailResource.distribution `LightsailResource.distribution`} 
   */
  AttachCertificateToDistribution = "lightsail:AttachCertificateToDistribution",

  /**
   * Write - Grants permission to attach a disk to an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachDisk.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.disk `LightsailResource.disk`} 
   */
  AttachDisk = "lightsail:AttachDisk",

  /**
   * Write - Grants permission to attach one or more instances to a load balancer
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachInstancesToLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.loadBalancer `LightsailResource.loadBalancer`} 
   */
  AttachInstancesToLoadBalancer = "lightsail:AttachInstancesToLoadBalancer",

  /**
   * Write - Grants permission to attach a TLS certificate to a load balancer
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachLoadBalancerTlsCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.loadBalancer `LightsailResource.loadBalancer`} 
   */
  AttachLoadBalancerTlsCertificate = "lightsail:AttachLoadBalancerTlsCertificate",

  /**
   * Write - Grants permission to attach a static IP address to an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachStaticIp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   * - {@link LightsailResource.staticIp `LightsailResource.staticIp`} 
   */
  AttachStaticIp = "lightsail:AttachStaticIp",

  /**
   * Write - Grants permission to close a public port of an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloseInstancePublicPorts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   */
  CloseInstancePublicPorts = "lightsail:CloseInstancePublicPorts",

  /**
   * Write - Grants permission to copy a snapshot from one AWS Region to another in Amazon Lightsail
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CopySnapshot.html
   */
  CopySnapshot = "lightsail:CopySnapshot",

  /**
   * Write - Grants permission to create an Amazon Lightsail bucket
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucket.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateBucket = "lightsail:CreateBucket",

  /**
   * Write - Grants permission to create a new access key for the specified bucket
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.bucket `LightsailResource.bucket`} 
   */
  CreateBucketAccessKey = "lightsail:CreateBucketAccessKey",

  /**
   * Write - Grants permission to create an SSL/TLS certificate
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCertificate = "lightsail:CreateCertificate",

  /**
   * Write - Grants permission to create a new Amazon EC2 instance from an exported Amazon Lightsail snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html
   */
  CreateCloudFormationStack = "lightsail:CreateCloudFormationStack",

  /**
   * Write - Grants permission to create an email or SMS text message contact method
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContactMethod.html
   */
  CreateContactMethod = "lightsail:CreateContactMethod",

  /**
   * Write - Grants permission to create an Amazon Lightsail container service
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContainerService.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateContainerService = "lightsail:CreateContainerService",

  /**
   * Write - Grants permission to create a deployment for your Amazon Lightsail container service
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContainerServiceDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.containerService `LightsailResource.containerService`} 
   */
  CreateContainerServiceDeployment = "lightsail:CreateContainerServiceDeployment",

  /**
   * Write - Grants permission to create a temporary set of log in credentials that you can use to log in to the Docker process on your local machine
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContainerServiceRegistryLogin.html
   */
  CreateContainerServiceRegistryLogin = "lightsail:CreateContainerServiceRegistryLogin",

  /**
   * Write - Grants permission to create a disk
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDisk.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDisk = "lightsail:CreateDisk",

  /**
   * Write - Grants permission to create a disk from snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDiskFromSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.diskSnapshot `LightsailResource.diskSnapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDiskFromSnapshot = "lightsail:CreateDiskFromSnapshot",

  /**
   * Write - Grants permission to create a disk snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDiskSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.disk `LightsailResource.disk`} 
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDiskSnapshot = "lightsail:CreateDiskSnapshot",

  /**
   * Write - Grants permission to create an Amazon Lightsail content delivery network (CDN) distribution
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDistribution = "lightsail:CreateDistribution",

  /**
   * Write - Grants permission to create a domain resource for the specified domain name
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDomain = "lightsail:CreateDomain",

  /**
   * Write - Grants permission to create one or more DNS record entries for a domain resource: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT)
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomainEntry.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.domain `LightsailResource.domain`} 
   */
  CreateDomainEntry = "lightsail:CreateDomainEntry",

  /**
   * Write - Grants permission to create an instance snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstanceSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateInstanceSnapshot = "lightsail:CreateInstanceSnapshot",

  /**
   * Write - Grants permission to create one or more instances
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateInstances = "lightsail:CreateInstances",

  /**
   * Write - Grants permission to create one or more instances based on an instance snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstancesFromSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instanceSnapshot `LightsailResource.instanceSnapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateInstancesFromSnapshot = "lightsail:CreateInstancesFromSnapshot",

  /**
   * Write - Grants permission to create a key pair used to authenticate and connect to an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateKeyPair = "lightsail:CreateKeyPair",

  /**
   * Write - Grants permission to create a load balancer
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLoadBalancer = "lightsail:CreateLoadBalancer",

  /**
   * Write - Grants permission to create a load balancer TLS certificate
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancerTlsCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.loadBalancer `LightsailResource.loadBalancer`} 
   */
  CreateLoadBalancerTlsCertificate = "lightsail:CreateLoadBalancerTlsCertificate",

  /**
   * Write - Grants permission to create a new relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRelationalDatabase = "lightsail:CreateRelationalDatabase",

  /**
   * Write - Grants permission to create a new relational database from a snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabaseFromSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.relationalDatabaseSnapshot `LightsailResource.relationalDatabaseSnapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRelationalDatabaseFromSnapshot = "lightsail:CreateRelationalDatabaseFromSnapshot",

  /**
   * Write - Grants permission to create a relational database snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabaseSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRelationalDatabaseSnapshot = "lightsail:CreateRelationalDatabaseSnapshot",

  /**
   * Write - Grants permission to delete an alarm
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteAlarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.alarm `LightsailResource.alarm`} 
   */
  DeleteAlarm = "lightsail:DeleteAlarm",

  /**
   * Write - Grants permission to delete an automatic snapshot of an instance or disk
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteAutoSnapshot.html
   */
  DeleteAutoSnapshot = "lightsail:DeleteAutoSnapshot",

  /**
   * Write - Grants permission to delete an Amazon Lightsail bucket
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteBucket.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.bucket `LightsailResource.bucket`} 
   */
  DeleteBucket = "lightsail:DeleteBucket",

  /**
   * Write - Grants permission to delete an access key for the specified Amazon Lightsail bucket
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteBucketAccessKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.bucket `LightsailResource.bucket`} 
   */
  DeleteBucketAccessKey = "lightsail:DeleteBucketAccessKey",

  /**
   * Write - Grants permission to delete an SSL/TLS certificate
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.certificate `LightsailResource.certificate`} 
   */
  DeleteCertificate = "lightsail:DeleteCertificate",

  /**
   * Write - Grants permission to delete a contact method
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteContactMethod.html
   */
  DeleteContactMethod = "lightsail:DeleteContactMethod",

  /**
   * Write - Grants permission to delete a container image that is registered to your Amazon Lightsail container service
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteContainerImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.containerService `LightsailResource.containerService`} 
   */
  DeleteContainerImage = "lightsail:DeleteContainerImage",

  /**
   * Write - Grants permission to delete your Amazon Lightsail container service
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteContainerService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.containerService `LightsailResource.containerService`} 
   */
  DeleteContainerService = "lightsail:DeleteContainerService",

  /**
   * Write - Grants permission to delete a disk
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDisk.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.disk `LightsailResource.disk`} 
   */
  DeleteDisk = "lightsail:DeleteDisk",

  /**
   * Write - Grants permission to delete a disk snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDiskSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.diskSnapshot `LightsailResource.diskSnapshot`} 
   */
  DeleteDiskSnapshot = "lightsail:DeleteDiskSnapshot",

  /**
   * Write - Grants permission to delete your Amazon Lightsail content delivery network (CDN) distribution
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.distribution `LightsailResource.distribution`} 
   */
  DeleteDistribution = "lightsail:DeleteDistribution",

  /**
   * Write - Grants permission to delete a domain resource and all of its DNS records
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.domain `LightsailResource.domain`} 
   */
  DeleteDomain = "lightsail:DeleteDomain",

  /**
   * Write - Grants permission to delete a DNS record entry for a domain resource
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomainEntry.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.domain `LightsailResource.domain`} 
   */
  DeleteDomainEntry = "lightsail:DeleteDomainEntry",

  /**
   * Write - Grants permission to delete an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   */
  DeleteInstance = "lightsail:DeleteInstance",

  /**
   * Write - Grants permission to delete an instance snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstanceSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instanceSnapshot `LightsailResource.instanceSnapshot`} 
   */
  DeleteInstanceSnapshot = "lightsail:DeleteInstanceSnapshot",

  /**
   * Write - Grants permission to delete a key pair used to authenticate and connect to an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKeyPair.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.keyPair `LightsailResource.keyPair`} 
   */
  DeleteKeyPair = "lightsail:DeleteKeyPair",

  /**
   * Write - Grants permission to delete the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKnownHostKeys.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   */
  DeleteKnownHostKeys = "lightsail:DeleteKnownHostKeys",

  /**
   * Write - Grants permission to delete a load balancer
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.loadBalancer `LightsailResource.loadBalancer`} 
   */
  DeleteLoadBalancer = "lightsail:DeleteLoadBalancer",

  /**
   * Write - Grants permission to delete a load balancer TLS certificate
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancerTlsCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.loadBalancer `LightsailResource.loadBalancer`} 
   */
  DeleteLoadBalancerTlsCertificate = "lightsail:DeleteLoadBalancerTlsCertificate",

  /**
   * Write - Grants permission to delete a relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.relationalDatabase `LightsailResource.relationalDatabase`} 
   */
  DeleteRelationalDatabase = "lightsail:DeleteRelationalDatabase",

  /**
   * Write - Grants permission to delete a relational database snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabaseSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.relationalDatabaseSnapshot `LightsailResource.relationalDatabaseSnapshot`} 
   */
  DeleteRelationalDatabaseSnapshot = "lightsail:DeleteRelationalDatabaseSnapshot",

  /**
   * Write - Grants permission to detach an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachCertificateFromDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.distribution `LightsailResource.distribution`} 
   */
  DetachCertificateFromDistribution = "lightsail:DetachCertificateFromDistribution",

  /**
   * Write - Grants permission to detach a disk from an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachDisk.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.disk `LightsailResource.disk`} 
   */
  DetachDisk = "lightsail:DetachDisk",

  /**
   * Write - Grants permission to detach one or more instances from a load balancer
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.loadBalancer `LightsailResource.loadBalancer`} 
   */
  DetachInstancesFromLoadBalancer = "lightsail:DetachInstancesFromLoadBalancer",

  /**
   * Write - Grants permission to detach a static IP from an instance to which it is attached
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachStaticIp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.staticIp `LightsailResource.staticIp`} 
   */
  DetachStaticIp = "lightsail:DetachStaticIp",

  /**
   * Write - Grants permission to disable an add-on for an Amazon Lightsail resource
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DisableAddOn.html
   */
  DisableAddOn = "lightsail:DisableAddOn",

  /**
   * Write - Grants permission to download the default key pair used to authenticate and connect to instances in a specific AWS Region
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html
   */
  DownloadDefaultKeyPair = "lightsail:DownloadDefaultKeyPair",

  /**
   * Write - Grants permission to enable or modify an add-on for an Amazon Lightsail resource
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_EnableAddOn.html
   */
  EnableAddOn = "lightsail:EnableAddOn",

  /**
   * Write - Grants permission to export an Amazon Lightsail snapshot to Amazon EC2
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.diskSnapshot `LightsailResource.diskSnapshot`} 
   * - {@link LightsailResource.instanceSnapshot `LightsailResource.instanceSnapshot`} 
   */
  ExportSnapshot = "lightsail:ExportSnapshot",

  /**
   * Read - Grants permission to get the names of all active (not deleted) resources
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetActiveNames.html
   */
  GetActiveNames = "lightsail:GetActiveNames",

  /**
   * Read - Grants permission to view information about the configured alarms
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetAlarms.html
   */
  GetAlarms = "lightsail:GetAlarms",

  /**
   * Read - Grants permission to view the available automatic snapshots for an instance or disk
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetAutoSnapshots.html
   */
  GetAutoSnapshots = "lightsail:GetAutoSnapshots",

  /**
   * Read - Grants permission to get a list of instance images, or blueprints. You can use a blueprint to create a new instance already running a specific operating system, as well as a pre-installed application or development stack. The software that runs on your instance depends on the blueprint you define when creating the instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBlueprints.html
   */
  GetBlueprints = "lightsail:GetBlueprints",

  /**
   * Read - Grants permission to get the existing access key IDs for the specified Amazon Lightsail bucket
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html
   */
  GetBucketAccessKeys = "lightsail:GetBucketAccessKeys",

  /**
   * Read - Grants permission to get the bundles that can be applied to an Amazon Lightsail bucket
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketBundles.html
   */
  GetBucketBundles = "lightsail:GetBucketBundles",

  /**
   * Read - Grants permission to get the data points of a specific metric for an Amazon Lightsail bucket
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketMetricData.html
   */
  GetBucketMetricData = "lightsail:GetBucketMetricData",

  /**
   * Read - Grants permission to get information about one or more Amazon Lightsail buckets
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html
   */
  GetBuckets = "lightsail:GetBuckets",

  /**
   * Read - Grants permission to get a list of instance bundles. You can use a bundle to create a new instance with a set of performance specifications, such as CPU count, disk size, RAM size, and network transfer allowance. The cost of your instance depends on the bundle you define when creating the instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBundles.html
   */
  GetBundles = "lightsail:GetBundles",

  /**
   * Read - Grants permission to view information about one or more Amazon Lightsail SSL/TLS certificates
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCertificates.html
   */
  GetCertificates = "lightsail:GetCertificates",

  /**
   * Read - Grants permission to get information about all CloudFormation stacks used to create Amazon EC2 resources from exported Amazon Lightsail snapshots
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCloudFormationStackRecords.html
   */
  GetCloudFormationStackRecords = "lightsail:GetCloudFormationStackRecords",

  /**
   * Read - Grants permission to view information about the configured contact methods
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContactMethods.html
   */
  GetContactMethods = "lightsail:GetContactMethods",

  /**
   * Read - Grants permission to view information about Amazon Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerAPIMetadata.html
   */
  GetContainerAPIMetadata = "lightsail:GetContainerAPIMetadata",

  /**
   * Read - Grants permission to view the container images that are registered to your Amazon Lightsail container service
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerImages.html
   */
  GetContainerImages = "lightsail:GetContainerImages",

  /**
   * Read - Grants permission to view the log events of a container of your Amazon Lightsail container service
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerLog.html
   */
  GetContainerLog = "lightsail:GetContainerLog",

  /**
   * Read - Grants permission to view the deployments for your Amazon Lightsail container service
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServiceDeployments.html
   */
  GetContainerServiceDeployments = "lightsail:GetContainerServiceDeployments",

  /**
   * Read - Grants permission to view the data points of a specific metric of your Amazon Lightsail container service
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServiceMetricData.html
   */
  GetContainerServiceMetricData = "lightsail:GetContainerServiceMetricData",

  /**
   * Read - Grants permission to view the list of powers that can be specified for your Amazon Lightsail container services
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServicePowers.html
   */
  GetContainerServicePowers = "lightsail:GetContainerServicePowers",

  /**
   * Read - Grants permission to view information about one or more of your Amazon Lightsail container services
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServices.html
   */
  GetContainerServices = "lightsail:GetContainerServices",

  /**
   * Read - Grants permission to get information about a disk
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisk.html
   */
  GetDisk = "lightsail:GetDisk",

  /**
   * Read - Grants permission to get information about a disk snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshot.html
   */
  GetDiskSnapshot = "lightsail:GetDiskSnapshot",

  /**
   * Read - Grants permission to get information about all disk snapshots
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshots.html
   */
  GetDiskSnapshots = "lightsail:GetDiskSnapshots",

  /**
   * Read - Grants permission to get information about all disks
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisks.html
   */
  GetDisks = "lightsail:GetDisks",

  /**
   * Read - Grants permission to view the list of bundles that can be applied to you Amazon Lightsail content delivery network (CDN) distributions
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributionBundles.html
   */
  GetDistributionBundles = "lightsail:GetDistributionBundles",

  /**
   * Read - Grants permission to view the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributionLatestCacheReset.html
   */
  GetDistributionLatestCacheReset = "lightsail:GetDistributionLatestCacheReset",

  /**
   * Read - Grants permission to view the data points of a specific metric for an Amazon Lightsail content delivery network (CDN) distribution
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributionMetricData.html
   */
  GetDistributionMetricData = "lightsail:GetDistributionMetricData",

  /**
   * Read - Grants permission to view information about one or more of your Amazon Lightsail content delivery network (CDN) distributions
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributions.html
   */
  GetDistributions = "lightsail:GetDistributions",

  /**
   * Read - Grants permission to get DNS records for a domain resource
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomain.html
   */
  GetDomain = "lightsail:GetDomain",

  /**
   * Read - Grants permission to get DNS records for all domain resources
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomains.html
   */
  GetDomains = "lightsail:GetDomains",

  /**
   * Read - Grants permission to get information about all records of exported Amazon Lightsail snapshots to Amazon EC2
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetExportSnapshotRecords.html
   */
  GetExportSnapshotRecords = "lightsail:GetExportSnapshotRecords",

  /**
   * Read - Grants permission to get information about an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstance.html
   */
  GetInstance = "lightsail:GetInstance",

  /**
   * Write - Grants permission to get temporary keys you can use to authenticate and connect to an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceAccessDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   */
  GetInstanceAccessDetails = "lightsail:GetInstanceAccessDetails",

  /**
   * Read - Grants permission to get the data points for the specified metric of an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceMetricData.html
   */
  GetInstanceMetricData = "lightsail:GetInstanceMetricData",

  /**
   * Read - Grants permission to get the port states of an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstancePortStates.html
   */
  GetInstancePortStates = "lightsail:GetInstancePortStates",

  /**
   * Read - Grants permission to get information about an instance snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshot.html
   */
  GetInstanceSnapshot = "lightsail:GetInstanceSnapshot",

  /**
   * Read - Grants permission to get information about all instance snapshots
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshots.html
   */
  GetInstanceSnapshots = "lightsail:GetInstanceSnapshots",

  /**
   * Read - Grants permission to get the state of an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceState.html
   */
  GetInstanceState = "lightsail:GetInstanceState",

  /**
   * Read - Grants permission to get information about all instances
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstances.html
   */
  GetInstances = "lightsail:GetInstances",

  /**
   * Read - Grants permission to get information about a key pair
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPair.html
   */
  GetKeyPair = "lightsail:GetKeyPair",

  /**
   * Read - Grants permission to get information about all key pairs
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPairs.html
   */
  GetKeyPairs = "lightsail:GetKeyPairs",

  /**
   * Read - Grants permission to get information about a load balancer
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancer.html
   */
  GetLoadBalancer = "lightsail:GetLoadBalancer",

  /**
   * Read - Grants permission to get the data points for the specified metric of a load balancer
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerMetricData.html
   */
  GetLoadBalancerMetricData = "lightsail:GetLoadBalancerMetricData",

  /**
   * Read - Grants permission to get information about a load balancer's TLS certificates
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsCertificates.html
   */
  GetLoadBalancerTlsCertificates = "lightsail:GetLoadBalancerTlsCertificates",

  /**
   * Read - Grants permission to get a list of TLS security policies that you can apply to Lightsail load balancers
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsPolicies.html
   */
  GetLoadBalancerTlsPolicies = "lightsail:GetLoadBalancerTlsPolicies",

  /**
   * Read - Grants permission to get information about load balancers
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancers.html
   */
  GetLoadBalancers = "lightsail:GetLoadBalancers",

  /**
   * Read - Grants permission to get information about an operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperation.html
   */
  GetOperation = "lightsail:GetOperation",

  /**
   * Read - Grants permission to get information about all operations. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperations.html
   */
  GetOperations = "lightsail:GetOperations",

  /**
   * Read - Grants permission to get operations for a resource
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperationsForResource.html
   */
  GetOperationsForResource = "lightsail:GetOperationsForResource",

  /**
   * Read - Grants permission to get a list of all valid AWS Regions for Amazon Lightsail
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html
   */
  GetRegions = "lightsail:GetRegions",

  /**
   * Read - Grants permission to get information about a relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabase.html
   */
  GetRelationalDatabase = "lightsail:GetRelationalDatabase",

  /**
   * Read - Grants permission to get a list of relational database images, or blueprints. You can use a blueprint to create a new database running a specific database engine. The database engine that runs on your database depends on the blueprint you define when creating the relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBlueprints.html
   */
  GetRelationalDatabaseBlueprints = "lightsail:GetRelationalDatabaseBlueprints",

  /**
   * Read - Grants permission to get a list of relational database bundles. You can use a bundle to create a new database with a set of performance specifications, such as CPU count, disk size, RAM size, network transfer allowance, and standard of high availability. The cost of your database depends on the bundle you define when creating the relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBundles.html
   */
  GetRelationalDatabaseBundles = "lightsail:GetRelationalDatabaseBundles",

  /**
   * Read - Grants permission to get events for a relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseEvents.html
   */
  GetRelationalDatabaseEvents = "lightsail:GetRelationalDatabaseEvents",

  /**
   * Read - Grants permission to get events for the specified log stream of a relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogEvents.html
   */
  GetRelationalDatabaseLogEvents = "lightsail:GetRelationalDatabaseLogEvents",

  /**
   * Read - Grants permission to get the log streams available for a relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogStreams.html
   */
  GetRelationalDatabaseLogStreams = "lightsail:GetRelationalDatabaseLogStreams",

  /**
   * Write - Grants permission to get the master user password of a relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMasterUserPassword.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.relationalDatabase `LightsailResource.relationalDatabase`} 
   */
  GetRelationalDatabaseMasterUserPassword = "lightsail:GetRelationalDatabaseMasterUserPassword",

  /**
   * Read - Grants permission to get the data points for the specified metric of a relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMetricData.html
   */
  GetRelationalDatabaseMetricData = "lightsail:GetRelationalDatabaseMetricData",

  /**
   * Read - Grants permission to get the parameters of a relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseParameters.html
   */
  GetRelationalDatabaseParameters = "lightsail:GetRelationalDatabaseParameters",

  /**
   * Read - Grants permission to get information about a relational database snapshot
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshot.html
   */
  GetRelationalDatabaseSnapshot = "lightsail:GetRelationalDatabaseSnapshot",

  /**
   * Read - Grants permission to get information about all relational database snapshots
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshots.html
   */
  GetRelationalDatabaseSnapshots = "lightsail:GetRelationalDatabaseSnapshots",

  /**
   * Read - Grants permission to get information about all relational databases
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabases.html
   */
  GetRelationalDatabases = "lightsail:GetRelationalDatabases",

  /**
   * Read - Grants permission to get information about a static IP
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIp.html
   */
  GetStaticIp = "lightsail:GetStaticIp",

  /**
   * Read - Grants permission to get information about all static IPs
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIps.html
   */
  GetStaticIps = "lightsail:GetStaticIps",

  /**
   * Write - Grants permission to import a public key from a key pair
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html
   */
  ImportKeyPair = "lightsail:ImportKeyPair",

  /**
   * Read - Grants permission to get a boolean value indicating whether the Amazon Lightsail virtual private cloud (VPC) is peered
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_IsVpcPeered.html
   */
  IsVpcPeered = "lightsail:IsVpcPeered",

  /**
   * Write - Grants permission to add, or open a public port of an instance
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_OpenInstancePublicPorts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   */
  OpenInstancePublicPorts = "lightsail:OpenInstancePublicPorts",

  /**
   * Write - Grants permission to try to peer the Amazon Lightsail virtual private cloud (VPC) with the default VPC
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PeerVpc.html
   */
  PeerVpc = "lightsail:PeerVpc",

  /**
   * Write - Grants permission to creates or update an alarm, and associate it with the specified metric
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PutAlarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.alarm `LightsailResource.alarm`} 
   */
  PutAlarm = "lightsail:PutAlarm",

  /**
   * Write - Grants permission to set the specified open ports for an instance, and closes all ports for every protocol not included in the request
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PutInstancePublicPorts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   */
  PutInstancePublicPorts = "lightsail:PutInstancePublicPorts",

  /**
   * Write - Grants permission to reboot an instance that is in a running state
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   */
  RebootInstance = "lightsail:RebootInstance",

  /**
   * Write - Grants permission to reboot a relational database that is in a running state
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootRelationalDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.relationalDatabase `LightsailResource.relationalDatabase`} 
   */
  RebootRelationalDatabase = "lightsail:RebootRelationalDatabase",

  /**
   * Write - Grants permission to register a container image to your Amazon Lightsail container service
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RegisterContainerImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.containerService `LightsailResource.containerService`} 
   */
  RegisterContainerImage = "lightsail:RegisterContainerImage",

  /**
   * Write - Grants permission to delete a static IP
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ReleaseStaticIp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.staticIp `LightsailResource.staticIp`} 
   */
  ReleaseStaticIp = "lightsail:ReleaseStaticIp",

  /**
   * Write - Grants permission to delete currently cached content from your Amazon Lightsail content delivery network (CDN) distribution
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ResetDistributionCache.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.distribution `LightsailResource.distribution`} 
   */
  ResetDistributionCache = "lightsail:ResetDistributionCache",

  /**
   * Write - Grants permission to send a verification request to an email contact method to ensure it's owned by the requester
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SendContactMethodVerification.html
   */
  SendContactMethodVerification = "lightsail:SendContactMethodVerification",

  /**
   * Write - Grants permission to set the IP address type for a Amazon Lightsail resource
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetIpAddressType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.distribution `LightsailResource.distribution`} 
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   * - {@link LightsailResource.loadBalancer `LightsailResource.loadBalancer`} 
   */
  SetIpAddressType = "lightsail:SetIpAddressType",

  /**
   * Write - Grants permission to set the Amazon Lightsail resources that can access the specified Amazon Lightsail bucket
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.bucket `LightsailResource.bucket`} 
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   */
  SetResourceAccessForBucket = "lightsail:SetResourceAccessForBucket",

  /**
   * Write - Grants permission to start an instance that is in a stopped state
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   */
  StartInstance = "lightsail:StartInstance",

  /**
   * Write - Grants permission to start a relational database that is in a stopped state
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartRelationalDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.relationalDatabase `LightsailResource.relationalDatabase`} 
   */
  StartRelationalDatabase = "lightsail:StartRelationalDatabase",

  /**
   * Write - Grants permission to stop an instance that is in a running state
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   */
  StopInstance = "lightsail:StopInstance",

  /**
   * Write - Grants permission to stop a relational database that is in a running state
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopRelationalDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.relationalDatabase `LightsailResource.relationalDatabase`} 
   */
  StopRelationalDatabase = "lightsail:StopRelationalDatabase",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.bucket `LightsailResource.bucket`} 
   * - {@link LightsailResource.certificate `LightsailResource.certificate`} 
   * - {@link LightsailResource.containerService `LightsailResource.containerService`} 
   * - {@link LightsailResource.disk `LightsailResource.disk`} 
   * - {@link LightsailResource.diskSnapshot `LightsailResource.diskSnapshot`} 
   * - {@link LightsailResource.distribution `LightsailResource.distribution`} 
   * - {@link LightsailResource.domain `LightsailResource.domain`} 
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   * - {@link LightsailResource.instanceSnapshot `LightsailResource.instanceSnapshot`} 
   * - {@link LightsailResource.keyPair `LightsailResource.keyPair`} 
   * - {@link LightsailResource.loadBalancer `LightsailResource.loadBalancer`} 
   * - {@link LightsailResource.relationalDatabase `LightsailResource.relationalDatabase`} 
   * - {@link LightsailResource.relationalDatabaseSnapshot `LightsailResource.relationalDatabaseSnapshot`} 
   * - {@link LightsailResource.staticIp `LightsailResource.staticIp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "lightsail:TagResource",

  /**
   * Write - Grants permission to test an alarm by displaying a banner on the Amazon Lightsail console or if a notification trigger is configured for the specified alarm, by sending a notification to the notification protocol
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TestAlarm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.alarm `LightsailResource.alarm`} 
   */
  TestAlarm = "lightsail:TestAlarm",

  /**
   * Write - Grants permission to try to unpeer the Amazon Lightsail virtual private cloud (VPC) from the default VPC
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UnpeerVpc.html
   */
  UnpeerVpc = "lightsail:UnpeerVpc",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.bucket `LightsailResource.bucket`} 
   * - {@link LightsailResource.certificate `LightsailResource.certificate`} 
   * - {@link LightsailResource.containerService `LightsailResource.containerService`} 
   * - {@link LightsailResource.disk `LightsailResource.disk`} 
   * - {@link LightsailResource.diskSnapshot `LightsailResource.diskSnapshot`} 
   * - {@link LightsailResource.distribution `LightsailResource.distribution`} 
   * - {@link LightsailResource.domain `LightsailResource.domain`} 
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   * - {@link LightsailResource.instanceSnapshot `LightsailResource.instanceSnapshot`} 
   * - {@link LightsailResource.keyPair `LightsailResource.keyPair`} 
   * - {@link LightsailResource.loadBalancer `LightsailResource.loadBalancer`} 
   * - {@link LightsailResource.relationalDatabase `LightsailResource.relationalDatabase`} 
   * - {@link LightsailResource.relationalDatabaseSnapshot `LightsailResource.relationalDatabaseSnapshot`} 
   * - {@link LightsailResource.staticIp `LightsailResource.staticIp`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "lightsail:UntagResource",

  /**
   * Write - Grants permission to update an existing Amazon Lightsail bucket
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucket.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.bucket `LightsailResource.bucket`} 
   */
  UpdateBucket = "lightsail:UpdateBucket",

  /**
   * Write - Grants permission to update the bundle, or storage plan, of an existing Amazon Lightsail bucket
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.bucket `LightsailResource.bucket`} 
   */
  UpdateBucketBundle = "lightsail:UpdateBucketBundle",

  /**
   * Write - Grants permission to update the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateContainerService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.containerService `LightsailResource.containerService`} 
   */
  UpdateContainerService = "lightsail:UpdateContainerService",

  /**
   * Write - Grants permission to update an existing Amazon Lightsail content delivery network (CDN) distribution or its configuration
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.distribution `LightsailResource.distribution`} 
   */
  UpdateDistribution = "lightsail:UpdateDistribution",

  /**
   * Write - Grants permission to update the bundle of your Amazon Lightsail content delivery network (CDN) distribution
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDistributionBundle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.distribution `LightsailResource.distribution`} 
   */
  UpdateDistributionBundle = "lightsail:UpdateDistributionBundle",

  /**
   * Write - Grants permission to update a domain recordset after it is created
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDomainEntry.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.domain `LightsailResource.domain`} 
   */
  UpdateDomainEntry = "lightsail:UpdateDomainEntry",

  /**
   * Write - Grants permission to update a load balancer attribute, such as the health check path and session stickiness
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.loadBalancer `LightsailResource.loadBalancer`} 
   */
  UpdateLoadBalancerAttribute = "lightsail:UpdateLoadBalancerAttribute",

  /**
   * Write - Grants permission to update a relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.relationalDatabase `LightsailResource.relationalDatabase`} 
   */
  UpdateRelationalDatabase = "lightsail:UpdateRelationalDatabase",

  /**
   * Write - Grants permission to update the parameters of a relational database
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabaseParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.relationalDatabase `LightsailResource.relationalDatabase`} 
   */
  UpdateRelationalDatabaseParameters = "lightsail:UpdateRelationalDatabaseParameters",

  /**
   * * - Grant all lightsail permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlightsail.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LightsailResource.certificate `LightsailResource.certificate`} 
   * - {@link LightsailResource.distribution `LightsailResource.distribution`} 
   * - {@link LightsailResource.disk `LightsailResource.disk`} 
   * - {@link LightsailResource.loadBalancer `LightsailResource.loadBalancer`} 
   * - {@link LightsailResource.instance `LightsailResource.instance`} 
   * - {@link LightsailResource.staticIp `LightsailResource.staticIp`} 
   * - {@link LightsailResource.bucket `LightsailResource.bucket`} 
   * - {@link LightsailResource.containerService `LightsailResource.containerService`} 
   * - {@link LightsailResource.diskSnapshot `LightsailResource.diskSnapshot`} 
   * - {@link LightsailResource.domain `LightsailResource.domain`} 
   * - {@link LightsailResource.instanceSnapshot `LightsailResource.instanceSnapshot`} 
   * - {@link LightsailResource.relationalDatabaseSnapshot `LightsailResource.relationalDatabaseSnapshot`} 
   * - {@link LightsailResource.alarm `LightsailResource.alarm`} 
   * - {@link LightsailResource.keyPair `LightsailResource.keyPair`} 
   * - {@link LightsailResource.relationalDatabase `LightsailResource.relationalDatabase`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "lightsail:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlightsail.html
 */
export const LightsailResource = {

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Domain.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  domain: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:Domain/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Instance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  instance: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:Instance/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_InstanceSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  instanceSnapshot: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:InstanceSnapshot/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_KeyPair.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  keyPair: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:KeyPair/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StaticIp.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  staticIp: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:StaticIp/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Disk.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  disk: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:Disk/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DiskSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  diskSnapshot: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:DiskSnapshot/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_LoadBalancer.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  loadBalancer: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:LoadBalancer/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_LoadBalancerTlsCertificate.html
   */
  loadBalancerTlsCertificate: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:LoadBalancerTlsCertificate/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshotRecord.html
   */
  exportSnapshotRecord: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:ExportSnapshotRecord/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloudFormationStackRecord.html
   */
  cloudFormationStackRecord: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:CloudFormationStackRecord/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RelationalDatabase.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  relationalDatabase: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:RelationalDatabase/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RelationalDatabaseSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  relationalDatabaseSnapshot: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:RelationalDatabaseSnapshot/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Alarm.html
   */
  alarm: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:Alarm/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Certificate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  certificate: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:Certificate/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ContactMethod.html
   */
  contactMethod: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:ContactMethod/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ContainerService.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  containerService: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:ContainerService/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_LightsailDistribution.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  distribution: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:Distribution/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Bucket.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair of a resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  bucket: (options: Partial<{partition: string, region: string, account: string, id: string}> = {}) => `arn:${options.partition || '*'}:lightsail:${options.region || '*'}:${options.account || '*'}:Bucket/${options.id || '*'}`,
}

