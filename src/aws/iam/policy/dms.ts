/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html
 */
export enum DmsAction {

  /**
   * Tagging - Grants permission to add metadata tags to DMS resources, including replication instances, endpoints, security groups, and migration tasks
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_AddTagsToResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.certificate `DmsResource.certificate`} 
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   * - {@link DmsResource.eventSubscription `DmsResource.eventSubscription`} 
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   * - {@link DmsResource.replicationSubnetGroup `DmsResource.replicationSubnetGroup`} 
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `dms:req-tag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_req-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AddTagsToResource = "dms:AddTagsToResource",

  /**
   * Write - Grants permission to apply a pending maintenance action to a resource (for example, to a replication instance)
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ApplyPendingMaintenanceAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   */
  ApplyPendingMaintenanceAction = "dms:ApplyPendingMaintenanceAction",

  /**
   * Write - Grants permission to cancel a single premigration assessment run
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_CancelReplicationTaskAssessmentRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTaskAssessmentRun `DmsResource.replicationTaskAssessmentRun`} 
   */
  CancelReplicationTaskAssessmentRun = "dms:CancelReplicationTaskAssessmentRun",

  /**
   * Write - Grants permission to create an endpoint using the provided settings
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `dms:req-tag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_req-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEndpoint = "dms:CreateEndpoint",

  /**
   * Write - Grants permission to create an AWS DMS event notification subscription
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateEventSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `dms:req-tag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_req-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateEventSubscription = "dms:CreateEventSubscription",

  /**
   * Write - Grants permission to create a replication instance using the specified parameters
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `dms:req-tag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_req-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateReplicationInstance = "dms:CreateReplicationInstance",

  /**
   * Write - Grants permission to create a replication subnet group given a list of the subnet IDs in a VPC
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `dms:req-tag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_req-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateReplicationSubnetGroup = "dms:CreateReplicationSubnetGroup",

  /**
   * Write - Grants permission to create a replication task using the specified parameters
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateReplicationTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `dms:req-tag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_req-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateReplicationTask = "dms:CreateReplicationTask",

  /**
   * Write - Grants permission to delete the specified certificate
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.certificate `DmsResource.certificate`} 
   */
  DeleteCertificate = "dms:DeleteCertificate",

  /**
   * Write - Grants permission to delete the specified connection between a replication instance and an endpoint
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   */
  DeleteConnection = "dms:DeleteConnection",

  /**
   * Write - Grants permission to delete the specified endpoint
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   */
  DeleteEndpoint = "dms:DeleteEndpoint",

  /**
   * Write - Grants permission to delete an AWS DMS event subscription
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteEventSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.eventSubscription `DmsResource.eventSubscription`} 
   */
  DeleteEventSubscription = "dms:DeleteEventSubscription",

  /**
   * Write - Grants permission to delete the specified replication instance
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   */
  DeleteReplicationInstance = "dms:DeleteReplicationInstance",

  /**
   * Write - Grants permission to deletes a subnet group
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationSubnetGroup `DmsResource.replicationSubnetGroup`} 
   */
  DeleteReplicationSubnetGroup = "dms:DeleteReplicationSubnetGroup",

  /**
   * Write - Grants permission to delete the specified replication task
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  DeleteReplicationTask = "dms:DeleteReplicationTask",

  /**
   * Write - Grants permission to delete the record of a single premigration assessment run
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DeleteReplicationTaskAssessmentRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTaskAssessmentRun `DmsResource.replicationTaskAssessmentRun`} 
   */
  DeleteReplicationTaskAssessmentRun = "dms:DeleteReplicationTaskAssessmentRun",

  /**
   * Read - Grants permission to list all of the AWS DMS attributes for a customer account
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeAccountAttributes.html
   */
  DescribeAccountAttributes = "dms:DescribeAccountAttributes",

  /**
   * Read - Grants permission to list individual assessments that you can specify for a new premigration assessment run
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeApplicableIndividualAssessments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  DescribeApplicableIndividualAssessments = "dms:DescribeApplicableIndividualAssessments",

  /**
   * Read - Grants permission to provide a description of the certificate
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeCertificates.html
   */
  DescribeCertificates = "dms:DescribeCertificates",

  /**
   * Read - Grants permission to describe the status of the connections that have been made between the replication instance and an endpoint
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeConnections.html
   */
  DescribeConnections = "dms:DescribeConnections",

  /**
   * Read - Grants permission to return the possible endpoint settings available when you create an endpoint for a specific database engine
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpointSettings.html
   */
  DescribeEndpointSettings = "dms:DescribeEndpointSettings",

  /**
   * Read - Grants permission to return information about the type of endpoints available
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpointTypes.html
   */
  DescribeEndpointTypes = "dms:DescribeEndpointTypes",

  /**
   * Read - Grants permission to return information about the endpoints for your account in the current region
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEndpoints.html
   */
  DescribeEndpoints = "dms:DescribeEndpoints",

  /**
   * Read - Grants permission to list categories for all event source types, or, if specified, for a specified source type
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventCategories.html
   */
  DescribeEventCategories = "dms:DescribeEventCategories",

  /**
   * Read - Grants permission to list all the event subscriptions for a customer account
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEventSubscriptions.html
   */
  DescribeEventSubscriptions = "dms:DescribeEventSubscriptions",

  /**
   * Read - Grants permission to list events for a given source identifier and source type
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeEvents.html
   */
  DescribeEvents = "dms:DescribeEvents",

  /**
   * Read - Grants permission to return information about the replication instance types that can be created in the specified region
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeOrderableReplicationInstances.html
   */
  DescribeOrderableReplicationInstances = "dms:DescribeOrderableReplicationInstances",

  /**
   * Read - Grants permission to returns the status of the RefreshSchemas operation
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeRefreshSchemasStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   */
  DescribeRefreshSchemasStatus = "dms:DescribeRefreshSchemasStatus",

  /**
   * Read - Grants permission to return information about the task logs for the specified task
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstanceTaskLogs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DescribeReplicationInstanceTaskLogs = "dms:DescribeReplicationInstanceTaskLogs",

  /**
   * Read - Grants permission to return information about replication instances for your account in the current region
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationInstances.html
   */
  DescribeReplicationInstances = "dms:DescribeReplicationInstances",

  /**
   * Read - Grants permission to return information about the replication subnet groups
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationSubnetGroups.html
   */
  DescribeReplicationSubnetGroups = "dms:DescribeReplicationSubnetGroups",

  /**
   * Read - Grants permission to return the latest task assessment results from Amazon S3
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskAssessmentResults.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  DescribeReplicationTaskAssessmentResults = "dms:DescribeReplicationTaskAssessmentResults",

  /**
   * Read - Grants permission to return a paginated list of premigration assessment runs based on filter settings
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskAssessmentRuns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   * - {@link DmsResource.replicationTaskAssessmentRun `DmsResource.replicationTaskAssessmentRun`} 
   */
  DescribeReplicationTaskAssessmentRuns = "dms:DescribeReplicationTaskAssessmentRuns",

  /**
   * Read - Grants permission to return a paginated list of individual assessments based on filter settings
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTaskIndividualAssessments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   * - {@link DmsResource.replicationTaskAssessmentRun `DmsResource.replicationTaskAssessmentRun`} 
   */
  DescribeReplicationTaskIndividualAssessments = "dms:DescribeReplicationTaskIndividualAssessments",

  /**
   * Read - Grants permission to return information about replication tasks for your account in the current region
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeReplicationTasks.html
   */
  DescribeReplicationTasks = "dms:DescribeReplicationTasks",

  /**
   * Read - Grants permission to return information about the schema for the specified endpoint
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeSchemas.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   */
  DescribeSchemas = "dms:DescribeSchemas",

  /**
   * Read - Grants permission to return table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeTableStatistics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  DescribeTableStatistics = "dms:DescribeTableStatistics",

  /**
   * Write - Grants permission to upload the specified certificate
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ImportCertificate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ImportCertificate = "dms:ImportCertificate",

  /**
   * Read - Grants permission to list all tags for an AWS DMS resource
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.certificate `DmsResource.certificate`} 
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   * - {@link DmsResource.eventSubscription `DmsResource.eventSubscription`} 
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   * - {@link DmsResource.replicationSubnetGroup `DmsResource.replicationSubnetGroup`} 
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  ListTagsForResource = "dms:ListTagsForResource",

  /**
   * Write - Grants permission to modify the specified endpoint
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   * - {@link DmsResource.certificate `DmsResource.certificate`} 
   */
  ModifyEndpoint = "dms:ModifyEndpoint",

  /**
   * Write - Grants permission to modify an existing AWS DMS event notification subscription
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyEventSubscription.html
   */
  ModifyEventSubscription = "dms:ModifyEventSubscription",

  /**
   * Write - Grants permission to modify the replication instance to apply new settings
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   */
  ModifyReplicationInstance = "dms:ModifyReplicationInstance",

  /**
   * Write - Grants permission to modify the settings for the specified replication subnet group
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationSubnetGroup.html
   */
  ModifyReplicationSubnetGroup = "dms:ModifyReplicationSubnetGroup",

  /**
   * Write - Grants permission to modify the specified replication task
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ModifyReplicationTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  ModifyReplicationTask = "dms:ModifyReplicationTask",

  /**
   * Write - Grants permission to move the specified replication task to a different replication instance
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_MoveReplicationTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  MoveReplicationTask = "dms:MoveReplicationTask",

  /**
   * Write - Grants permission to reboot a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_RebootReplicationInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   */
  RebootReplicationInstance = "dms:RebootReplicationInstance",

  /**
   * Write - Grants permission to populate the schema for the specified endpoint
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_RefreshSchemas.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   */
  RefreshSchemas = "dms:RefreshSchemas",

  /**
   * Write - Grants permission to reload the target database table with the source data
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ReloadTables.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  ReloadTables = "dms:ReloadTables",

  /**
   * Tagging - Grants permission to remove metadata tags from a DMS resource
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_RemoveTagsFromResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.certificate `DmsResource.certificate`} 
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   * - {@link DmsResource.eventSubscription `DmsResource.eventSubscription`} 
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   * - {@link DmsResource.replicationSubnetGroup `DmsResource.replicationSubnetGroup`} 
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RemoveTagsFromResource = "dms:RemoveTagsFromResource",

  /**
   * Write - Grants permission to start the replication task
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  StartReplicationTask = "dms:StartReplicationTask",

  /**
   * Write - Grants permission to start the replication task assessment for unsupported data types in the source database
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  StartReplicationTaskAssessment = "dms:StartReplicationTaskAssessment",

  /**
   * Write - Grants permission to start a new premigration assessment run for one or more individual assessments of a migration task
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTaskAssessmentRun.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  StartReplicationTaskAssessmentRun = "dms:StartReplicationTaskAssessmentRun",

  /**
   * Write - Grants permission to stop the replication task
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_StopReplicationTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   */
  StopReplicationTask = "dms:StopReplicationTask",

  /**
   * Read - Grants permission to test the connection between the replication instance and the endpoint
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_TestConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   */
  TestConnection = "dms:TestConnection",

  /**
   * * - Grant all dms permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DmsResource.certificate `DmsResource.certificate`} 
   * - {@link DmsResource.endpoint `DmsResource.endpoint`} 
   * - {@link DmsResource.eventSubscription `DmsResource.eventSubscription`} 
   * - {@link DmsResource.replicationInstance `DmsResource.replicationInstance`} 
   * - {@link DmsResource.replicationSubnetGroup `DmsResource.replicationSubnetGroup`} 
   * - {@link DmsResource.replicationTask `DmsResource.replicationTask`} 
   * - {@link DmsResource.replicationTaskAssessmentRun `DmsResource.replicationTaskAssessmentRun`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `dms:req-tag/${TagKey}`: Filters access based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_req-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "dms:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html
 */
export const DmsResource = {

  /**
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_Certificate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dms:cert-tag/${TagKey}`: Filters access based on the presence of tag keys in the request for Certificate ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice--dms_cert-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  certificate: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:dms:${options.region || '*'}:${options.account || '*'}:cert:*`,

  /**
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_Endpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dms:endpoint-tag/${TagKey}`: Filters access based on the presence of tag keys in the request for Endpoint ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_endpoint-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  endpoint: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:dms:${options.region || '*'}:${options.account || '*'}:endpoint:*`,

  /**
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_EventSubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dms:es-tag/${TagKey}`: Filters access based on the presence of tag keys in the request for EventSubscription ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_es-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  eventSubscription: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:dms:${options.region || '*'}:${options.account || '*'}:es:*`,

  /**
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dms:rep-tag/${TagKey}`: Filters access based on the presence of tag keys in the request for ReplicationInstance ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_rep-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  replicationInstance: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:dms:${options.region || '*'}:${options.account || '*'}:rep:*`,

  /**
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationSubnetGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dms:subgrp-tag/${TagKey}`: Filters access based on the presence of tag keys in the request for ReplicationSubnetGroup ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_subgrp-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  replicationSubnetGroup: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:dms:${options.region || '*'}:${options.account || '*'}:subgrp:*`,

  /**
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationTask.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dms:task-tag/${TagKey}`: Filters access based on the presence of tag keys in the request for ReplicationTask ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html#awsdatabasemigrationservice-dms_task-tag___TagKey_ documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  replicationTask: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:dms:${options.region || '*'}:${options.account || '*'}:task:*`,

  /**
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationTaskAssessmentRun.html
   */
  replicationTaskAssessmentRun: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:dms:${options.region || '*'}:${options.account || '*'}:assessment-run:*`,

  /**
   * @see https://docs.aws.amazon.com/dms/latest/APIReference/API_ReplicationTaskIndividualAssessment.html
   */
  replicationTaskIndividualAssessment: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:dms:${options.region || '*'}:${options.account || '*'}:individual-assessment:*`,
}

