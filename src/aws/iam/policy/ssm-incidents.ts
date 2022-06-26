/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanager.html
 */
export enum SsmIncidentsAction {

  /**
   * Write - Grants permission to create a replication set
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateReplicationSet.html
   */
  CreateReplicationSet = "ssm-incidents:CreateReplicationSet",

  /**
   * Write - Grants permission to create a response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateResponsePlan.html
   */
  CreateResponsePlan = "ssm-incidents:CreateResponsePlan",

  /**
   * Write - Grants permission to create a timeline event for an incident record
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateTimelineEvent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.incidentRecord `SsmIncidentsResource.incidentRecord`} 
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  CreateTimelineEvent = "ssm-incidents:CreateTimelineEvent",

  /**
   * Write - Grants permission to delete an incident record
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteIncidentRecord.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.incidentRecord `SsmIncidentsResource.incidentRecord`} 
   */
  DeleteIncidentRecord = "ssm-incidents:DeleteIncidentRecord",

  /**
   * Write - Grants permission to delete a replication set
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteReplicationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.replicationSet `SsmIncidentsResource.replicationSet`} 
   */
  DeleteReplicationSet = "ssm-incidents:DeleteReplicationSet",

  /**
   * PermissionsManagement - Grants permission to delete resource policy from a response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  DeleteResourcePolicy = "ssm-incidents:DeleteResourcePolicy",

  /**
   * Write - Grants permission to delete a response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteResponsePlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  DeleteResponsePlan = "ssm-incidents:DeleteResponsePlan",

  /**
   * Write - Grants permission to delete a timeline event
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteTimelineEvent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.incidentRecord `SsmIncidentsResource.incidentRecord`} 
   */
  DeleteTimelineEvent = "ssm-incidents:DeleteTimelineEvent",

  /**
   * Read - Grants permission to view the contents of an incident record
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetIncidentRecord.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.incidentRecord `SsmIncidentsResource.incidentRecord`} 
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  GetIncidentRecord = "ssm-incidents:GetIncidentRecord",

  /**
   * Read - Grants permission to view the replication set
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetReplicationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.replicationSet `SsmIncidentsResource.replicationSet`} 
   */
  GetReplicationSet = "ssm-incidents:GetReplicationSet",

  /**
   * Read - Grants permission to view resource policies of a response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetResourcePolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  GetResourcePolicies = "ssm-incidents:GetResourcePolicies",

  /**
   * Read - Grants permission to view the contents of a specified response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetResponsePlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  GetResponsePlan = "ssm-incidents:GetResponsePlan",

  /**
   * Read - Grants permission to view a timeline event
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetTimelineEvent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.incidentRecord `SsmIncidentsResource.incidentRecord`} 
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  GetTimelineEvent = "ssm-incidents:GetTimelineEvent",

  /**
   * List - Grants permission to list the contents of all incident records
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListIncidentRecords.html
   */
  ListIncidentRecords = "ssm-incidents:ListIncidentRecords",

  /**
   * List - Grants permission to list related items of an incident records
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListRelatedItems.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.incidentRecord `SsmIncidentsResource.incidentRecord`} 
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  ListRelatedItems = "ssm-incidents:ListRelatedItems",

  /**
   * List - Grants permission to list all replication sets
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListReplicationSets.html
   */
  ListReplicationSets = "ssm-incidents:ListReplicationSets",

  /**
   * List - Grants permission to list all response plans
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListResponsePlans.html
   */
  ListResponsePlans = "ssm-incidents:ListResponsePlans",

  /**
   * Read - Grants permission to view a list of resource tags for a specified resource
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  ListTagsForResource = "ssm-incidents:ListTagsForResource",

  /**
   * List - Grants permission to list all timeline events for an incident record
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListTimelineEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.incidentRecord `SsmIncidentsResource.incidentRecord`} 
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  ListTimelineEvents = "ssm-incidents:ListTimelineEvents",

  /**
   * PermissionsManagement - Grants permission to put resource policy on a response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_PutResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  PutResourcePolicy = "ssm-incidents:PutResourcePolicy",

  /**
   * Write - Grants permission to start a new incident using a response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_StartIncident.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  StartIncident = "ssm-incidents:StartIncident",

  /**
   * Tagging - Grants permission to add tags to a response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  TagResource = "ssm-incidents:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  UntagResource = "ssm-incidents:UntagResource",

  /**
   * Write - Grants permission to update replication set deletion protection
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateDeletionProtection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.replicationSet `SsmIncidentsResource.replicationSet`} 
   */
  UpdateDeletionProtection = "ssm-incidents:UpdateDeletionProtection",

  /**
   * Write - Grants permission to update the contents of an incident record
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateIncidentRecord.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.incidentRecord `SsmIncidentsResource.incidentRecord`} 
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  UpdateIncidentRecord = "ssm-incidents:UpdateIncidentRecord",

  /**
   * Write - Grants permission to update related items of an incident record
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateRelatedItems.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.incidentRecord `SsmIncidentsResource.incidentRecord`} 
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  UpdateRelatedItems = "ssm-incidents:UpdateRelatedItems",

  /**
   * Write - Grants permission to update a replication set
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateReplicationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.replicationSet `SsmIncidentsResource.replicationSet`} 
   */
  UpdateReplicationSet = "ssm-incidents:UpdateReplicationSet",

  /**
   * Write - Grants permission to update the contents of a response plan
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateResponsePlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  UpdateResponsePlan = "ssm-incidents:UpdateResponsePlan",

  /**
   * Write - Grants permission to update a timeline event
   * @see https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateTimelineEvent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.incidentRecord `SsmIncidentsResource.incidentRecord`} 
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   */
  UpdateTimelineEvent = "ssm-incidents:UpdateTimelineEvent",

  /**
   * * - Grant all ssm-incidents permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmIncidentsResource.incidentRecord `SsmIncidentsResource.incidentRecord`} 
   * - {@link SsmIncidentsResource.responsePlan `SsmIncidentsResource.responsePlan`} 
   * - {@link SsmIncidentsResource.replicationSet `SsmIncidentsResource.replicationSet`} 
   */
  All = "ssm-incidents:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanager.html
 */
export const SsmIncidentsResource = {

  /**
   * @see https://docs.aws.amazon.com/incident-manager/latest/userguide/response-plans.html
   */
  responsePlan: (options: Partial<{partition: string, account: string, responsePlan: string}> = {}) => `arn:${options.partition || '*'}:ssm-incidents::${options.account || '*'}:response-plan/${options.responsePlan || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-record.html
   */
  incidentRecord: (options: Partial<{partition: string, account: string, responsePlan: string, incidentRecord: string}> = {}) => `arn:${options.partition || '*'}:ssm-incidents::${options.account || '*'}:incident-record/${options.responsePlan || '*'}/${options.incidentRecord || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/incident-manager/latest/userguide/replication-set.html
   */
  replicationSet: (options: Partial<{partition: string, account: string, replicationSet: string}> = {}) => `arn:${options.partition || '*'}:ssm-incidents::${options.account || '*'}:replication-set/${options.replicationSet || '*'}`,
}

