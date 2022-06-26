/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshift.html
 */
export enum RedshiftAction {

  /**
   * Write - Grants permission to exchange a DC1 reserved node for a DC2 reserved node with no changes to the configuration
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_AcceptReservedNodeExchange.html
   */
  AcceptReservedNodeExchange = "redshift:AcceptReservedNodeExchange",

  /**
   * Write - Grants permission to add a partner integration to a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_AddPartner.html
   */
  AddPartner = "redshift:AddPartner",

  /**
   * Write - Grants permission to associate a consumer to a datashare
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_AssociateDataShareConsumer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.datashare `RedshiftResource.datashare`} 
   */
  AssociateDataShareConsumer = "redshift:AssociateDataShareConsumer",

  /**
   * Write - Grants permission to add an inbound (ingress) rule to an Amazon Redshift security group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeClusterSecurityGroupIngress.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.securitygroup `RedshiftResource.securitygroup`} 
   * - {@link RedshiftResource.securitygroupingressEc2securitygroup `RedshiftResource.securitygroupingressEc2securitygroup`} 
   */
  AuthorizeClusterSecurityGroupIngress = "redshift:AuthorizeClusterSecurityGroupIngress",

  /**
   * PermissionsManagement - Grants permission to authorize the specified datashare consumer to consume a datashare
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeDataShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.datashare `RedshiftResource.datashare`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `redshift:ConsumerIdentifier`: Filters access by the datashare consumer ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AuthorizeDataShare = "redshift:AuthorizeDataShare",

  /**
   * PermissionsManagement - Grants permission to authorize endpoint related activities for redshift-managed vpc endpoint
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeEndpointAccess.html
   */
  AuthorizeEndpointAccess = "redshift:AuthorizeEndpointAccess",

  /**
   * PermissionsManagement - Grants permission to the specified AWS account to restore a snapshot
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_AuthorizeSnapshotAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   */
  AuthorizeSnapshotAccess = "redshift:AuthorizeSnapshotAccess",

  /**
   * Write - Grants permission to delete snapshots in a batch of size upto 100
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchDeleteClusterSnapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   */
  BatchDeleteClusterSnapshots = "redshift:BatchDeleteClusterSnapshots",

  /**
   * Write - Grants permission to modify settings for a list of snapshots
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_BatchModifyClusterSnapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   */
  BatchModifyClusterSnapshots = "redshift:BatchModifyClusterSnapshots",

  /**
   * Write - Grants permission to cancel a query through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  CancelQuery = "redshift:CancelQuery",

  /**
   * Write - Grants permission to see queries in the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  CancelQuerySession = "redshift:CancelQuerySession",

  /**
   * Write - Grants permission to cancel a resize operation
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CancelResize.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  CancelResize = "redshift:CancelResize",

  /**
   * Write - Grants permission to copy a cluster snapshot
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CopyClusterSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CopyClusterSnapshot = "redshift:CopyClusterSnapshot",

  /**
   * Write - Grants permission to create an Amazon Redshift authentication profile
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateAuthenticationProfile.html
   */
  CreateAuthenticationProfile = "redshift:CreateAuthenticationProfile",

  /**
   * Write - Grants permission to create a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCluster = "redshift:CreateCluster",

  /**
   * Write - Grants permission to create an Amazon Redshift parameter group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.parametergroup `RedshiftResource.parametergroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateClusterParameterGroup = "redshift:CreateClusterParameterGroup",

  /**
   * Write - Grants permission to create an Amazon Redshift security group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSecurityGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.securitygroup `RedshiftResource.securitygroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateClusterSecurityGroup = "redshift:CreateClusterSecurityGroup",

  /**
   * Write - Grants permission to create a manual snapshot of the specified cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateClusterSnapshot = "redshift:CreateClusterSnapshot",

  /**
   * Write - Grants permission to create an Amazon Redshift subnet group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.subnetgroup `RedshiftResource.subnetgroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateClusterSubnetGroup = "redshift:CreateClusterSubnetGroup",

  /**
   * PermissionsManagement - Grants permission to automatically create the specified Amazon Redshift user if it does not exist
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/generating-iam-credentials-role-permissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.dbuser `RedshiftResource.dbuser`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `redshift:DbUser`: Filters access by the database user name ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateClusterUser = "redshift:CreateClusterUser",

  /**
   * Write - Grants permission to create a redshift-managed vpc endpoint
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateEndpointAccess.html
   */
  CreateEndpointAccess = "redshift:CreateEndpointAccess",

  /**
   * Write - Grants permission to create an Amazon Redshift event notification subscription
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateEventSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.eventsubscription `RedshiftResource.eventsubscription`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEventSubscription = "redshift:CreateEventSubscription",

  /**
   * Write - Grants permission to create an HSM client certificate that a cluster uses to connect to an HSM
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmClientCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.hsmclientcertificate `RedshiftResource.hsmclientcertificate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateHsmClientCertificate = "redshift:CreateHsmClientCertificate",

  /**
   * Write - Grants permission to create an HSM configuration that contains information required by a cluster to store and use database encryption keys in a hardware security module (HSM)
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateHsmConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.hsmconfiguration `RedshiftResource.hsmconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateHsmConfiguration = "redshift:CreateHsmConfiguration",

  /**
   * Write - Grants permission to create saved SQL queries through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  CreateSavedQuery = "redshift:CreateSavedQuery",

  /**
   * Write - Grants permission to create an Amazon Redshift scheduled action
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateScheduledAction.html
   */
  CreateScheduledAction = "redshift:CreateScheduledAction",

  /**
   * PermissionsManagement - Grants permission to create a snapshot copy grant and encrypt copied snapshots in a destination AWS Region
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotCopyGrant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshotcopygrant `RedshiftResource.snapshotcopygrant`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSnapshotCopyGrant = "redshift:CreateSnapshotCopyGrant",

  /**
   * Write - Grants permission to create a snapshot schedule
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateSnapshotSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshotschedule `RedshiftResource.snapshotschedule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSnapshotSchedule = "redshift:CreateSnapshotSchedule",

  /**
   * Tagging - Grants permission to add one or more tags to a specified resource
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   * - {@link RedshiftResource.dbgroup `RedshiftResource.dbgroup`} 
   * - {@link RedshiftResource.dbname `RedshiftResource.dbname`} 
   * - {@link RedshiftResource.dbuser `RedshiftResource.dbuser`} 
   * - {@link RedshiftResource.eventsubscription `RedshiftResource.eventsubscription`} 
   * - {@link RedshiftResource.hsmclientcertificate `RedshiftResource.hsmclientcertificate`} 
   * - {@link RedshiftResource.hsmconfiguration `RedshiftResource.hsmconfiguration`} 
   * - {@link RedshiftResource.parametergroup `RedshiftResource.parametergroup`} 
   * - {@link RedshiftResource.securitygroup `RedshiftResource.securitygroup`} 
   * - {@link RedshiftResource.securitygroupingressCidr `RedshiftResource.securitygroupingressCidr`} 
   * - {@link RedshiftResource.securitygroupingressEc2securitygroup `RedshiftResource.securitygroupingressEc2securitygroup`} 
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   * - {@link RedshiftResource.snapshotcopygrant `RedshiftResource.snapshotcopygrant`} 
   * - {@link RedshiftResource.snapshotschedule `RedshiftResource.snapshotschedule`} 
   * - {@link RedshiftResource.subnetgroup `RedshiftResource.subnetgroup`} 
   * - {@link RedshiftResource.usagelimit `RedshiftResource.usagelimit`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTags = "redshift:CreateTags",

  /**
   * Write - Grants permission to create a usage limit
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateUsageLimit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.usagelimit `RedshiftResource.usagelimit`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateUsageLimit = "redshift:CreateUsageLimit",

  /**
   * PermissionsManagement - Grants permission to remove permission from the specified datashare consumer to consume a datashare
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeauthorizeDataShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.datashare `RedshiftResource.datashare`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `redshift:ConsumerIdentifier`: Filters access by the datashare consumer ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeauthorizeDataShare = "redshift:DeauthorizeDataShare",

  /**
   * Write - Grants permission to delete an Amazon Redshift authentication profile
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/API_DeleteAuthenticationProfile.html
   */
  DeleteAuthenticationProfile = "redshift:DeleteAuthenticationProfile",

  /**
   * Write - Grants permission to delete a previously provisioned cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  DeleteCluster = "redshift:DeleteCluster",

  /**
   * Write - Grants permission to delete an Amazon Redshift parameter group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.parametergroup `RedshiftResource.parametergroup`} 
   */
  DeleteClusterParameterGroup = "redshift:DeleteClusterParameterGroup",

  /**
   * Write - Grants permission to delete an Amazon Redshift security group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSecurityGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.securitygroup `RedshiftResource.securitygroup`} 
   */
  DeleteClusterSecurityGroup = "redshift:DeleteClusterSecurityGroup",

  /**
   * Write - Grants permission to delete a manual snapshot
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   */
  DeleteClusterSnapshot = "redshift:DeleteClusterSnapshot",

  /**
   * Write - Grants permission to delete a cluster subnet group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteClusterSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.subnetgroup `RedshiftResource.subnetgroup`} 
   */
  DeleteClusterSubnetGroup = "redshift:DeleteClusterSubnetGroup",

  /**
   * Write - Grants permission to delete a redshift-managed vpc endpoint
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteEndpointAccess.html
   */
  DeleteEndpointAccess = "redshift:DeleteEndpointAccess",

  /**
   * Write - Grants permission to delete an Amazon Redshift event notification subscription
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteEventSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.eventsubscription `RedshiftResource.eventsubscription`} 
   */
  DeleteEventSubscription = "redshift:DeleteEventSubscription",

  /**
   * Write - Grants permission to delete an HSM client certificate
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmClientCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.hsmclientcertificate `RedshiftResource.hsmclientcertificate`} 
   */
  DeleteHsmClientCertificate = "redshift:DeleteHsmClientCertificate",

  /**
   * Write - Grants permission to delete an Amazon Redshift HSM configuration
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteHsmConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.hsmconfiguration `RedshiftResource.hsmconfiguration`} 
   */
  DeleteHsmConfiguration = "redshift:DeleteHsmConfiguration",

  /**
   * Write - Grants permission to delete a partner integration from a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeletePartner.html
   */
  DeletePartner = "redshift:DeletePartner",

  /**
   * Write - Grants permission to delete saved SQL queries through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  DeleteSavedQueries = "redshift:DeleteSavedQueries",

  /**
   * Write - Grants permission to delete an Amazon Redshift scheduled action
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/API_DeleteScheduledAction.html
   */
  DeleteScheduledAction = "redshift:DeleteScheduledAction",

  /**
   * Write - Grants permission to delete a snapshot copy grant
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotCopyGrant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshotcopygrant `RedshiftResource.snapshotcopygrant`} 
   */
  DeleteSnapshotCopyGrant = "redshift:DeleteSnapshotCopyGrant",

  /**
   * Write - Grants permission to delete a snapshot schedule
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteSnapshotSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshotschedule `RedshiftResource.snapshotschedule`} 
   */
  DeleteSnapshotSchedule = "redshift:DeleteSnapshotSchedule",

  /**
   * Tagging - Grants permission to delete a tag or tags from a resource
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   * - {@link RedshiftResource.dbgroup `RedshiftResource.dbgroup`} 
   * - {@link RedshiftResource.dbname `RedshiftResource.dbname`} 
   * - {@link RedshiftResource.dbuser `RedshiftResource.dbuser`} 
   * - {@link RedshiftResource.eventsubscription `RedshiftResource.eventsubscription`} 
   * - {@link RedshiftResource.hsmclientcertificate `RedshiftResource.hsmclientcertificate`} 
   * - {@link RedshiftResource.hsmconfiguration `RedshiftResource.hsmconfiguration`} 
   * - {@link RedshiftResource.parametergroup `RedshiftResource.parametergroup`} 
   * - {@link RedshiftResource.securitygroup `RedshiftResource.securitygroup`} 
   * - {@link RedshiftResource.securitygroupingressCidr `RedshiftResource.securitygroupingressCidr`} 
   * - {@link RedshiftResource.securitygroupingressEc2securitygroup `RedshiftResource.securitygroupingressEc2securitygroup`} 
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   * - {@link RedshiftResource.snapshotcopygrant `RedshiftResource.snapshotcopygrant`} 
   * - {@link RedshiftResource.snapshotschedule `RedshiftResource.snapshotschedule`} 
   * - {@link RedshiftResource.subnetgroup `RedshiftResource.subnetgroup`} 
   * - {@link RedshiftResource.usagelimit `RedshiftResource.usagelimit`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteTags = "redshift:DeleteTags",

  /**
   * Write - Grants permission to delete a usage limit
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DeleteUsageLimit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.usagelimit `RedshiftResource.usagelimit`} 
   */
  DeleteUsageLimit = "redshift:DeleteUsageLimit",

  /**
   * Read - Grants permission to describe attributes attached to the specified AWS account
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeAccountAttributes.html
   */
  DescribeAccountAttributes = "redshift:DescribeAccountAttributes",

  /**
   * Read - Grants permission to describe created Amazon Redshift authentication profiles
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/API_DescribeAuthenticationProfiles.html
   */
  DescribeAuthenticationProfiles = "redshift:DescribeAuthenticationProfiles",

  /**
   * List - Grants permission to describe database revisions for a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterDbRevisions.html
   */
  DescribeClusterDbRevisions = "redshift:DescribeClusterDbRevisions",

  /**
   * Read - Grants permission to describe Amazon Redshift parameter groups, including parameter groups you created and the default parameter group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameterGroups.html
   */
  DescribeClusterParameterGroups = "redshift:DescribeClusterParameterGroups",

  /**
   * Read - Grants permission to describe parameters contained within an Amazon Redshift parameter group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.parametergroup `RedshiftResource.parametergroup`} 
   */
  DescribeClusterParameters = "redshift:DescribeClusterParameters",

  /**
   * Read - Grants permission to describe Amazon Redshift security groups
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSecurityGroups.html
   */
  DescribeClusterSecurityGroups = "redshift:DescribeClusterSecurityGroups",

  /**
   * Read - Grants permission to describe one or more snapshot objects, which contain metadata about your cluster snapshots
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSnapshots.html
   */
  DescribeClusterSnapshots = "redshift:DescribeClusterSnapshots",

  /**
   * Read - Grants permission to describe one or more cluster subnet group objects, which contain metadata about your cluster subnet groups
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterSubnetGroups.html
   */
  DescribeClusterSubnetGroups = "redshift:DescribeClusterSubnetGroups",

  /**
   * List - Grants permission to describe available maintenance tracks
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterTracks.html
   */
  DescribeClusterTracks = "redshift:DescribeClusterTracks",

  /**
   * Read - Grants permission to describe available Amazon Redshift cluster versions
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusterVersions.html
   */
  DescribeClusterVersions = "redshift:DescribeClusterVersions",

  /**
   * List - Grants permission to describe properties of provisioned clusters
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeClusters.html
   */
  DescribeClusters = "redshift:DescribeClusters",

  /**
   * Read - Grants permission to describe datashares created and consumed by your clusters
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDataShares.html
   */
  DescribeDataShares = "redshift:DescribeDataShares",

  /**
   * Read - Grants permission to describe only datashares consumed by your clusters
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDataSharesForConsumer.html
   */
  DescribeDataSharesForConsumer = "redshift:DescribeDataSharesForConsumer",

  /**
   * Read - Grants permission to describe only datashares created by your clusters
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDataSharesForProducer.html
   */
  DescribeDataSharesForProducer = "redshift:DescribeDataSharesForProducer",

  /**
   * Read - Grants permission to describe parameter settings for a parameter group family
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeDefaultClusterParameters.html
   */
  DescribeDefaultClusterParameters = "redshift:DescribeDefaultClusterParameters",

  /**
   * Read - Grants permission to describe redshift-managed vpc endpoints
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEndpointAccess.html
   */
  DescribeEndpointAccess = "redshift:DescribeEndpointAccess",

  /**
   * PermissionsManagement - Grants permission to authorize describe activity for redshift-managed vpc endpoint
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEndpointAuthorization.html
   */
  DescribeEndpointAuthorization = "redshift:DescribeEndpointAuthorization",

  /**
   * Read - Grants permission to describe event categories for all event source types, or for a specified source type
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventCategories.html
   */
  DescribeEventCategories = "redshift:DescribeEventCategories",

  /**
   * Read - Grants permission to describe Amazon Redshift event notification subscriptions for the specified AWS account
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEventSubscriptions.html
   */
  DescribeEventSubscriptions = "redshift:DescribeEventSubscriptions",

  /**
   * List - Grants permission to describe events related to clusters, security groups, snapshots, and parameter groups for the past 14 days
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeEvents.html
   */
  DescribeEvents = "redshift:DescribeEvents",

  /**
   * Read - Grants permission to describe HSM client certificates
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmClientCertificates.html
   */
  DescribeHsmClientCertificates = "redshift:DescribeHsmClientCertificates",

  /**
   * Read - Grants permission to describe Amazon Redshift HSM configurations
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeHsmConfigurations.html
   */
  DescribeHsmConfigurations = "redshift:DescribeHsmConfigurations",

  /**
   * Read - Grants permission to describe whether information, such as queries and connection attempts, is being logged for a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeLoggingStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  DescribeLoggingStatus = "redshift:DescribeLoggingStatus",

  /**
   * List - Grants permission to describe properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeNodeConfigurationOptions.html
   */
  DescribeNodeConfigurationOptions = "redshift:DescribeNodeConfigurationOptions",

  /**
   * Read - Grants permission to describe orderable cluster options
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeOrderableClusterOptions.html
   */
  DescribeOrderableClusterOptions = "redshift:DescribeOrderableClusterOptions",

  /**
   * Read - Grants permission to retrieve information about the partner integrations defined for a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribePartners.html
   */
  DescribePartners = "redshift:DescribePartners",

  /**
   * Read - Grants permission to describe a query through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  DescribeQuery = "redshift:DescribeQuery",

  /**
   * Read - Grants permission to describe exchange status details and associated metadata for a reserved-node exchange. Statuses include such values as in progress and requested
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodeExchangeStatus.html
   */
  DescribeReservedNodeExchangeStatus = "redshift:DescribeReservedNodeExchangeStatus",

  /**
   * Read - Grants permission to describe available reserved node offerings by Amazon Redshift
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodeOfferings.html
   */
  DescribeReservedNodeOfferings = "redshift:DescribeReservedNodeOfferings",

  /**
   * Read - Grants permission to describe the reserved nodes
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeReservedNodes.html
   */
  DescribeReservedNodes = "redshift:DescribeReservedNodes",

  /**
   * Read - Grants permission to describe the last resize operation for a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeResize.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  DescribeResize = "redshift:DescribeResize",

  /**
   * Read - Grants permission to describe saved queries through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  DescribeSavedQueries = "redshift:DescribeSavedQueries",

  /**
   * Read - Grants permission to describe created Amazon Redshift scheduled actions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/API_DescribeScheduledActions.html
   */
  DescribeScheduledActions = "redshift:DescribeScheduledActions",

  /**
   * Read - Grants permission to describe snapshot copy grants owned by the specified AWS account in the destination AWS Region
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotCopyGrants.html
   */
  DescribeSnapshotCopyGrants = "redshift:DescribeSnapshotCopyGrants",

  /**
   * Read - Grants permission to describe snapshot schedules
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeSnapshotSchedules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshotschedule `RedshiftResource.snapshotschedule`} 
   */
  DescribeSnapshotSchedules = "redshift:DescribeSnapshotSchedules",

  /**
   * Read - Grants permission to describe account level backups storage size and provisional storage
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeStorage.html
   */
  DescribeStorage = "redshift:DescribeStorage",

  /**
   * Read - Grants permission to describe a table through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  DescribeTable = "redshift:DescribeTable",

  /**
   * Read - Grants permission to describe status of one or more table restore requests made using the RestoreTableFromClusterSnapshot API action
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTableRestoreStatus.html
   */
  DescribeTableRestoreStatus = "redshift:DescribeTableRestoreStatus",

  /**
   * Read - Grants permission to describe tags
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   * - {@link RedshiftResource.dbgroup `RedshiftResource.dbgroup`} 
   * - {@link RedshiftResource.dbname `RedshiftResource.dbname`} 
   * - {@link RedshiftResource.dbuser `RedshiftResource.dbuser`} 
   * - {@link RedshiftResource.eventsubscription `RedshiftResource.eventsubscription`} 
   * - {@link RedshiftResource.hsmclientcertificate `RedshiftResource.hsmclientcertificate`} 
   * - {@link RedshiftResource.hsmconfiguration `RedshiftResource.hsmconfiguration`} 
   * - {@link RedshiftResource.parametergroup `RedshiftResource.parametergroup`} 
   * - {@link RedshiftResource.securitygroup `RedshiftResource.securitygroup`} 
   * - {@link RedshiftResource.securitygroupingressCidr `RedshiftResource.securitygroupingressCidr`} 
   * - {@link RedshiftResource.securitygroupingressEc2securitygroup `RedshiftResource.securitygroupingressEc2securitygroup`} 
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   * - {@link RedshiftResource.snapshotcopygrant `RedshiftResource.snapshotcopygrant`} 
   * - {@link RedshiftResource.snapshotschedule `RedshiftResource.snapshotschedule`} 
   * - {@link RedshiftResource.subnetgroup `RedshiftResource.subnetgroup`} 
   * - {@link RedshiftResource.usagelimit `RedshiftResource.usagelimit`} 
   */
  DescribeTags = "redshift:DescribeTags",

  /**
   * Read - Grants permission to describe usage limits
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DescribeUsageLimits.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.usagelimit `RedshiftResource.usagelimit`} 
   */
  DescribeUsageLimits = "redshift:DescribeUsageLimits",

  /**
   * Write - Grants permission to disable logging information, such as queries and connection attempts, for a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableLogging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  DisableLogging = "redshift:DisableLogging",

  /**
   * Write - Grants permission to disable the automatic copy of snapshots for a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisableSnapshotCopy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  DisableSnapshotCopy = "redshift:DisableSnapshotCopy",

  /**
   * Write - Grants permission to disassociate a consumer from a datashare
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_DisassociateDataShareConsumer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.datashare `RedshiftResource.datashare`} 
   */
  DisassociateDataShareConsumer = "redshift:DisassociateDataShareConsumer",

  /**
   * Write - Grants permission to enable logging information, such as queries and connection attempts, for a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableLogging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  EnableLogging = "redshift:EnableLogging",

  /**
   * Write - Grants permission to enable the automatic copy of snapshots for a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_EnableSnapshotCopy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  EnableSnapshotCopy = "redshift:EnableSnapshotCopy",

  /**
   * Write - Grants permission to execute a query through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ExecuteQuery = "redshift:ExecuteQuery",

  /**
   * Read - Grants permission to fetch query results through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  FetchResults = "redshift:FetchResults",

  /**
   * Write - Grants permission to get temporary credentials to access an Amazon Redshift database by the specified AWS account
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.dbuser `RedshiftResource.dbuser`} 
   * - {@link RedshiftResource.dbgroup `RedshiftResource.dbgroup`} 
   * - {@link RedshiftResource.dbname `RedshiftResource.dbname`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `redshift:DbName`: Filters access by the database name ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `redshift:DbUser`: Filters access by the database user name ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `redshift:DurationSeconds`: Filters access by the number of seconds until a temporary credential set expires ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetClusterCredentials = "redshift:GetClusterCredentials",

  /**
   * Read - Grants permission to get the configuration options for the reserved-node exchange
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetReservedNodeExchangeConfigurationOptions.html
   */
  GetReservedNodeExchangeConfigurationOptions = "redshift:GetReservedNodeExchangeConfigurationOptions",

  /**
   * Read - Grants permission to get an array of DC2 ReservedNodeOfferings that matches the payment type, term, and usage price of the given DC1 reserved node
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetReservedNodeExchangeOfferings.html
   */
  GetReservedNodeExchangeOfferings = "redshift:GetReservedNodeExchangeOfferings",

  /**
   * PermissionsManagement - Grants permission to join the specified Amazon Redshift group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.dbgroup `RedshiftResource.dbgroup`} 
   */
  JoinGroup = "redshift:JoinGroup",

  /**
   * List - Grants permission to list databases through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ListDatabases = "redshift:ListDatabases",

  /**
   * List - Grants permission to list saved queries through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ListSavedQueries = "redshift:ListSavedQueries",

  /**
   * List - Grants permission to list schemas through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ListSchemas = "redshift:ListSchemas",

  /**
   * List - Grants permission to list tables through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ListTables = "redshift:ListTables",

  /**
   * Write - Grants permission to modify the AQUA configuration of a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyAquaConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  ModifyAquaConfiguration = "redshift:ModifyAquaConfiguration",

  /**
   * Write - Grants permission to modify an existing Amazon Redshift authentication profile
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyAuthenticationProfile.html
   */
  ModifyAuthenticationProfile = "redshift:ModifyAuthenticationProfile",

  /**
   * Write - Grants permission to modify the settings of a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  ModifyCluster = "redshift:ModifyCluster",

  /**
   * Write - Grants permission to modify the database revision of a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterDbRevision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  ModifyClusterDbRevision = "redshift:ModifyClusterDbRevision",

  /**
   * PermissionsManagement - Grants permission to modify the list of AWS Identity and Access Management (IAM) roles that can be used by a cluster to access other AWS services
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterIamRoles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  ModifyClusterIamRoles = "redshift:ModifyClusterIamRoles",

  /**
   * Write - Grants permission to modify the maintenance settings of a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterMaintenance.html
   */
  ModifyClusterMaintenance = "redshift:ModifyClusterMaintenance",

  /**
   * Write - Grants permission to modify the parameters of a parameter group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.parametergroup `RedshiftResource.parametergroup`} 
   */
  ModifyClusterParameterGroup = "redshift:ModifyClusterParameterGroup",

  /**
   * Write - Grants permission to modify the settings of a snapshot
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   */
  ModifyClusterSnapshot = "redshift:ModifyClusterSnapshot",

  /**
   * Write - Grants permission to modify a snapshot schedule for a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSnapshotSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  ModifyClusterSnapshotSchedule = "redshift:ModifyClusterSnapshotSchedule",

  /**
   * Write - Grants permission to modify a cluster subnet group to include the specified list of VPC subnets
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyClusterSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.subnetgroup `RedshiftResource.subnetgroup`} 
   */
  ModifyClusterSubnetGroup = "redshift:ModifyClusterSubnetGroup",

  /**
   * Write - Grants permission to modify a redshift-managed vpc endpoint
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyEndpointAccess.html
   */
  ModifyEndpointAccess = "redshift:ModifyEndpointAccess",

  /**
   * Write - Grants permission to modify an existing Amazon Redshift event notification subscription
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyEventSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.eventsubscription `RedshiftResource.eventsubscription`} 
   */
  ModifyEventSubscription = "redshift:ModifyEventSubscription",

  /**
   * Write - Grants permission to modify an existing saved query through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ModifySavedQuery = "redshift:ModifySavedQuery",

  /**
   * Write - Grants permission to modify an existing Amazon Redshift scheduled action
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyScheduledAction.html
   */
  ModifyScheduledAction = "redshift:ModifyScheduledAction",

  /**
   * Write - Grants permission to modify the number of days to retain snapshots in the destination AWS Region after they are copied from the source AWS Region
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotCopyRetentionPeriod.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  ModifySnapshotCopyRetentionPeriod = "redshift:ModifySnapshotCopyRetentionPeriod",

  /**
   * Write - Grants permission to modify a snapshot schedule
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifySnapshotSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshotschedule `RedshiftResource.snapshotschedule`} 
   */
  ModifySnapshotSchedule = "redshift:ModifySnapshotSchedule",

  /**
   * Write - Grants permission to modify a usage limit
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyUsageLimit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.usagelimit `RedshiftResource.usagelimit`} 
   */
  ModifyUsageLimit = "redshift:ModifyUsageLimit",

  /**
   * Write - Grants permission to pause a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_PauseCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  PauseCluster = "redshift:PauseCluster",

  /**
   * Write - Grants permission to purchase a reserved node
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_PurchaseReservedNodeOffering.html
   */
  PurchaseReservedNodeOffering = "redshift:PurchaseReservedNodeOffering",

  /**
   * Write - Grants permission to reboot a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_RebootCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  RebootCluster = "redshift:RebootCluster",

  /**
   * PermissionsManagement - Grants permission to decline a datashare shared from another account
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_RejectDataShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.datashare `RedshiftResource.datashare`} 
   */
  RejectDataShare = "redshift:RejectDataShare",

  /**
   * Write - Grants permission to set one or more parameters of a parameter group to their default values and set the source values of the parameters to "engine-default"
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResetClusterParameterGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.parametergroup `RedshiftResource.parametergroup`} 
   */
  ResetClusterParameterGroup = "redshift:ResetClusterParameterGroup",

  /**
   * Write - Grants permission to change the size of a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResizeCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  ResizeCluster = "redshift:ResizeCluster",

  /**
   * Write - Grants permission to create a cluster from a snapshot
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreFromClusterSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RestoreFromClusterSnapshot = "redshift:RestoreFromClusterSnapshot",

  /**
   * Write - Grants permission to create a table from a table in an Amazon Redshift cluster snapshot
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_RestoreTableFromClusterSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   */
  RestoreTableFromClusterSnapshot = "redshift:RestoreTableFromClusterSnapshot",

  /**
   * Write - Grants permission to resume a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_ResumeCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  ResumeCluster = "redshift:ResumeCluster",

  /**
   * Write - Grants permission to revoke an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeClusterSecurityGroupIngress.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.securitygroup `RedshiftResource.securitygroup`} 
   * - {@link RedshiftResource.securitygroupingressEc2securitygroup `RedshiftResource.securitygroupingressEc2securitygroup`} 
   */
  RevokeClusterSecurityGroupIngress = "redshift:RevokeClusterSecurityGroupIngress",

  /**
   * PermissionsManagement - Grants permission to revoke access for endpoint related activities for redshift-managed vpc endpoint
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeEndpointAccess.html
   */
  RevokeEndpointAccess = "redshift:RevokeEndpointAccess",

  /**
   * PermissionsManagement - Grants permission to revoke access from the specified AWS account to restore a snapshot
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_RevokeSnapshotAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   */
  RevokeSnapshotAccess = "redshift:RevokeSnapshotAccess",

  /**
   * Write - Grants permission to rotate an encryption key for a cluster
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_RotateEncryptionKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   */
  RotateEncryptionKey = "redshift:RotateEncryptionKey",

  /**
   * Write - Grants permission to update the status of a partner integration
   * @see https://docs.aws.amazon.com/redshift/latest/APIReference/API_UpdatePartnerStatus.html
   */
  UpdatePartnerStatus = "redshift:UpdatePartnerStatus",

  /**
   * List - Grants permission to view query results through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ViewQueriesFromConsole = "redshift:ViewQueriesFromConsole",

  /**
   * List - Grants permission to terminate running queries and loads through the Amazon Redshift console
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-policy-resources.resource-permissions.html
   */
  ViewQueriesInConsole = "redshift:ViewQueriesInConsole",

  /**
   * * - Grant all redshift permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshift.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RedshiftResource.datashare `RedshiftResource.datashare`} 
   * - {@link RedshiftResource.securitygroup `RedshiftResource.securitygroup`} 
   * - {@link RedshiftResource.securitygroupingressEc2securitygroup `RedshiftResource.securitygroupingressEc2securitygroup`} 
   * - {@link RedshiftResource.snapshot `RedshiftResource.snapshot`} 
   * - {@link RedshiftResource.cluster `RedshiftResource.cluster`} 
   * - {@link RedshiftResource.parametergroup `RedshiftResource.parametergroup`} 
   * - {@link RedshiftResource.subnetgroup `RedshiftResource.subnetgroup`} 
   * - {@link RedshiftResource.dbuser `RedshiftResource.dbuser`} 
   * - {@link RedshiftResource.eventsubscription `RedshiftResource.eventsubscription`} 
   * - {@link RedshiftResource.hsmclientcertificate `RedshiftResource.hsmclientcertificate`} 
   * - {@link RedshiftResource.hsmconfiguration `RedshiftResource.hsmconfiguration`} 
   * - {@link RedshiftResource.snapshotcopygrant `RedshiftResource.snapshotcopygrant`} 
   * - {@link RedshiftResource.snapshotschedule `RedshiftResource.snapshotschedule`} 
   * - {@link RedshiftResource.dbgroup `RedshiftResource.dbgroup`} 
   * - {@link RedshiftResource.dbname `RedshiftResource.dbname`} 
   * - {@link RedshiftResource.securitygroupingressCidr `RedshiftResource.securitygroupingressCidr`} 
   * - {@link RedshiftResource.usagelimit `RedshiftResource.usagelimit`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `redshift:ConsumerIdentifier`: Filters access by the datashare consumer ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `redshift:DbUser`: Filters access by the database user name ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `redshift:DbName`: Filters access by the database name ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `redshift:DurationSeconds`: Filters access by the number of seconds until a temporary credential set expires ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "redshift:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonredshift.html
 */
export const RedshiftResource = {

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cluster: (options: Partial<{partition: string, region: string, account: string, clusterName: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:cluster:${options.clusterName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/dg/datashare-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  datashare: (options: Partial<{partition: string, region: string, account: string, producerClusterNamespace: string, dataShareName: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:datashare:${options.producerClusterNamespace || '*'}/${options.dataShareName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_GROUP.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dbgroup: (options: Partial<{partition: string, region: string, account: string, clusterName: string, dbGroup: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:dbgroup:${options.clusterName || '*'}/${options.dbGroup || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dbname: (options: Partial<{partition: string, region: string, account: string, clusterName: string, dbName: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:dbname:${options.clusterName || '*'}/${options.dbName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/dg/r_Users.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dbuser: (options: Partial<{partition: string, region: string, account: string, clusterName: string, dbUser: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:dbuser:${options.clusterName || '*'}/${options.dbUser || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-events.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  eventsubscription: (options: Partial<{partition: string, region: string, account: string, eventSubscriptionName: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:eventsubscription:${options.eventSubscriptionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  hsmclientcertificate: (options: Partial<{partition: string, region: string, account: string, hSMClientCertificateId: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:hsmclientcertificate:${options.hSMClientCertificateId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  hsmconfiguration: (options: Partial<{partition: string, region: string, account: string, hSMConfigurationId: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:hsmconfiguration:${options.hSMConfigurationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  parametergroup: (options: Partial<{partition: string, region: string, account: string, parameterGroupName: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:parametergroup:${options.parameterGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  securitygroup: (options: Partial<{partition: string, region: string, account: string, securityGroupName: string, owner: string, ec2SecurityGroupId: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:securitygroup:${options.securityGroupName || '*'}/ec2securitygroup/${options.owner || '*'}/${options.ec2SecurityGroupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  securitygroupingressCidr: (options: Partial<{partition: string, region: string, account: string, securityGroupName: string, ipRange: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:securitygroupingress:${options.securityGroupName || '*'}/cidrip/${options.ipRange || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  securitygroupingressEc2securitygroup: (options: Partial<{partition: string, region: string, account: string, securityGroupName: string, owner: string, ece2SecuritygroupId: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:securitygroupingress:${options.securityGroupName || '*'}/ec2securitygroup/${options.owner || '*'}/${options.ece2SecuritygroupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  snapshot: (options: Partial<{partition: string, region: string, account: string, clusterName: string, snapshotName: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:snapshot:${options.clusterName || '*'}/${options.snapshotName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#configure-snapshot-copy-grant
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  snapshotcopygrant: (options: Partial<{partition: string, region: string, account: string, snapshotCopyGrantName: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:snapshotcopygrant:${options.snapshotCopyGrantName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  snapshotschedule: (options: Partial<{partition: string, region: string, account: string, parameterGroupName: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:snapshotschedule:${options.parameterGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  subnetgroup: (options: Partial<{partition: string, region: string, account: string, subnetGroupName: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:subnetgroup:${options.subnetGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/redshift/latest/mgmt/managing-cluster-usage-limits.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag-value associated with the resource ({@link https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-policy-resources.conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  usagelimit: (options: Partial<{partition: string, region: string, account: string, usageLimitId: string}> = {}) => `arn:${options.partition || '*'}:redshift:${options.region || '*'}:${options.account || '*'}:usagelimit:${options.usageLimitId || '*'}`,
}

