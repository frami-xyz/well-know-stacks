/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html
 */
export enum DynamodbAction {

  /**
   * Read - Grants permission to return the attributes of one or more items from one or more tables
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnConsumedCapacity`: Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:Select`: Filter based on the Select parameter of a Query or Scan request ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchGetItem = "dynamodb:BatchGetItem",

  /**
   * Write - Grants permission to put or delete multiple items in one or more tables
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnConsumedCapacity`: Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchWriteItem = "dynamodb:BatchWriteItem",

  /**
   * Read - Grants permission to the ConditionCheckItem operation checks the existence of a set of attributes for the item with the given primary key
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConditionCheckItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnConsumedCapacity`: Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnValues`: Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ConditionCheckItem = "dynamodb:ConditionCheckItem",

  /**
   * Write - Grants permission to create a backup for an existing table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  CreateBackup = "dynamodb:CreateBackup",

  /**
   * Write - Grants permission to create a global table from an existing table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateGlobalTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.globalTable `DynamodbResource.globalTable`} 
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  CreateGlobalTable = "dynamodb:CreateGlobalTable",

  /**
   * Write - Grants permission to the CreateTable operation adds a new table to your account
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  CreateTable = "dynamodb:CreateTable",

  /**
   * Write - Grants permission to add a new replica table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/V2gt_IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  CreateTableReplica = "dynamodb:CreateTableReplica",

  /**
   * Write - Grants permission to delete an existing backup of a table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.backup `DynamodbResource.backup`} 
   */
  DeleteBackup = "dynamodb:DeleteBackup",

  /**
   * Write - Grants permission to deletes a single item in a table by primary key
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnConsumedCapacity`: Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnValues`: Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteItem = "dynamodb:DeleteItem",

  /**
   * Write - Grants permission to the DeleteTable operation which deletes a table and all of its items
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  DeleteTable = "dynamodb:DeleteTable",

  /**
   * Write - Grants permission to delete a replica table and all of its items
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/V2gt_IAM.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  DeleteTableReplica = "dynamodb:DeleteTableReplica",

  /**
   * Read - Grants permission to describe an existing backup of a table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.backup `DynamodbResource.backup`} 
   */
  DescribeBackup = "dynamodb:DescribeBackup",

  /**
   * Read - Grants permission to check the status of the backup restore settings on the specified table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContinuousBackups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  DescribeContinuousBackups = "dynamodb:DescribeContinuousBackups",

  /**
   * Read - Grants permission to describe the contributor insights status and related details for a given table or global secondary index
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeContributorInsights.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * - {@link DynamodbResource.index `DynamodbResource.index`} 
   */
  DescribeContributorInsights = "dynamodb:DescribeContributorInsights",

  /**
   * Read - Grants permission to describe an existing Export of a table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeExport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.export `DynamodbResource.export`} 
   */
  DescribeExport = "dynamodb:DescribeExport",

  /**
   * Read - Grants permission to return information about the specified global table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.globalTable `DynamodbResource.globalTable`} 
   */
  DescribeGlobalTable = "dynamodb:DescribeGlobalTable",

  /**
   * Read - Grants permission to return settings information about the specified global table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeGlobalTableSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.globalTable `DynamodbResource.globalTable`} 
   */
  DescribeGlobalTableSettings = "dynamodb:DescribeGlobalTableSettings",

  /**
   * Read - Grants permission to grant permission to describe the status of Kinesis streaming and related details for a given table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeKinesisStreamingDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  DescribeKinesisStreamingDestination = "dynamodb:DescribeKinesisStreamingDestination",

  /**
   * Read - Grants permission to return the current provisioned-capacity limits for your AWS account in a region, both for the region as a whole and for any one DynamoDB table that you create there
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeLimits.html
   */
  DescribeLimits = "dynamodb:DescribeLimits",

  /**
   * Read - Grants permission to describe one or more of the Reserved Capacity purchased
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html
   */
  DescribeReservedCapacity = "dynamodb:DescribeReservedCapacity",

  /**
   * Read - Grants permission to describe Reserved Capacity offerings that are available for purchase
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html
   */
  DescribeReservedCapacityOfferings = "dynamodb:DescribeReservedCapacityOfferings",

  /**
   * Read - Grants permission to return information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.stream `DynamodbResource.stream`} 
   */
  DescribeStream = "dynamodb:DescribeStream",

  /**
   * Read - Grants permission to return information about the table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  DescribeTable = "dynamodb:DescribeTable",

  /**
   * Read - Grants permission to describe the auto scaling settings across all replicas of the global table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTableReplicaAutoScaling.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  DescribeTableReplicaAutoScaling = "dynamodb:DescribeTableReplicaAutoScaling",

  /**
   * Read - Grants permission to give a description of the Time to Live (TTL) status on the specified table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTimeToLive.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  DescribeTimeToLive = "dynamodb:DescribeTimeToLive",

  /**
   * Write - Grants permission to grant permission to stop replication from the DynamoDB table to the Kinesis data stream
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DisableKinesisStreamingDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  DisableKinesisStreamingDestination = "dynamodb:DisableKinesisStreamingDestination",

  /**
   * Write - Grants permission to grant permission to start table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_EnableKinesisStreamingDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  EnableKinesisStreamingDestination = "dynamodb:EnableKinesisStreamingDestination",

  /**
   * Write - Grants permission to initiate an Export of a DynamoDB table to S3
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExportTableToPointInTime.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  ExportTableToPointInTime = "dynamodb:ExportTableToPointInTime",

  /**
   * Read - Grants permission to the GetItem operation that returns a set of attributes for the item with the given primary key
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnConsumedCapacity`: Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:Select`: Filter based on the Select parameter of a Query or Scan request ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetItem = "dynamodb:GetItem",

  /**
   * Read - Grants permission to retrieve the stream records from a given shard
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetRecords.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.stream `DynamodbResource.stream`} 
   */
  GetRecords = "dynamodb:GetRecords",

  /**
   * Read - Grants permission to return a shard iterator
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetShardIterator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.stream `DynamodbResource.stream`} 
   */
  GetShardIterator = "dynamodb:GetShardIterator",

  /**
   * List - Grants permission to list backups associated with the account and endpoint
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListBackups.html
   */
  ListBackups = "dynamodb:ListBackups",

  /**
   * List - Grants permission to list the ContributorInsightsSummary for all tables and global secondary indexes associated with the current account and endpoint
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListContributorInsights.html
   */
  ListContributorInsights = "dynamodb:ListContributorInsights",

  /**
   * List - Grants permission to list exports associated with the account and endpoint
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListExports.html
   */
  ListExports = "dynamodb:ListExports",

  /**
   * List - Grants permission to list all global tables that have a replica in the specified region
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListGlobalTables.html
   */
  ListGlobalTables = "dynamodb:ListGlobalTables",

  /**
   * Read - Grants permission to return an array of stream ARNs associated with the current account and endpoint
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListStreams.html
   */
  ListStreams = "dynamodb:ListStreams",

  /**
   * List - Grants permission to return an array of table names associated with the current account and endpoint
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html
   */
  ListTables = "dynamodb:ListTables",

  /**
   * Read - Grants permission to list all tags on an Amazon DynamoDB resource
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTagsOfResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  ListTagsOfResource = "dynamodb:ListTagsOfResource",

  /**
   * Write - Grants permission to delete a single item in a table by primary key
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnValues`: Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PartiQLDelete = "dynamodb:PartiQLDelete",

  /**
   * Write - Grants permission to create a new item, if an item with same primary key does not exist in the table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PartiQLInsert = "dynamodb:PartiQLInsert",

  /**
   * Read - Grants permission to read a set of attributes for items from a table or index
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * - {@link DynamodbResource.index `DynamodbResource.index`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:FullTableScan`: Used to block full table scan ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:Select`: Filter based on the Select parameter of a Query or Scan request ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PartiQLSelect = "dynamodb:PartiQLSelect",

  /**
   * Write - Grants permission to edit an existing item's attributes
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ExecuteStatement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnValues`: Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PartiQLUpdate = "dynamodb:PartiQLUpdate",

  /**
   * Write - Grants permission to purchases reserved capacity for use with your account
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html
   */
  PurchaseReservedCapacityOfferings = "dynamodb:PurchaseReservedCapacityOfferings",

  /**
   * Write - Grants permission to create a new item, or replace an old item with a new item
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnConsumedCapacity`: Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnValues`: Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutItem = "dynamodb:PutItem",

  /**
   * Read - Grants permission to use the primary key of a table or a secondary index to directly access items from that table or index
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * - {@link DynamodbResource.index `DynamodbResource.index`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnConsumedCapacity`: Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnValues`: Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:Select`: Filter based on the Select parameter of a Query or Scan request ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  Query = "dynamodb:Query",

  /**
   * Write - Grants permission to create a new table from recovery point on AWS Backup
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromAwsBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  RestoreTableFromAwsBackup = "dynamodb:RestoreTableFromAwsBackup",

  /**
   * Write - Grants permission to create a new table from an existing backup
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableFromBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.backup `DynamodbResource.backup`} 
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  RestoreTableFromBackup = "dynamodb:RestoreTableFromBackup",

  /**
   * Write - Grants permission to restore a table to a point in time
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_RestoreTableToPointInTime.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  RestoreTableToPointInTime = "dynamodb:RestoreTableToPointInTime",

  /**
   * Read - Grants permission to return one or more items and item attributes by accessing every item in a table or a secondary index
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * - {@link DynamodbResource.index `DynamodbResource.index`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnConsumedCapacity`: Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnValues`: Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:Select`: Filter based on the Select parameter of a Query or Scan request ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  Scan = "dynamodb:Scan",

  /**
   * Write - Grants permission to create a backup on AWS Backup with advanced features enabled
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_StartAwsBackupJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  StartAwsBackupJob = "dynamodb:StartAwsBackupJob",

  /**
   * Tagging - Grants permission to associate a set of tags with an Amazon DynamoDB resource
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  TagResource = "dynamodb:TagResource",

  /**
   * Tagging - Grants permission to remove the association of tags from an Amazon DynamoDB resource
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  UntagResource = "dynamodb:UntagResource",

  /**
   * Write - Grants permission to enable or disable continuous backups
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContinuousBackups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  UpdateContinuousBackups = "dynamodb:UpdateContinuousBackups",

  /**
   * Write - Grants permission to update the status for contributor insights for a specific table or global secondary index
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateContributorInsights.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * - {@link DynamodbResource.index `DynamodbResource.index`} 
   */
  UpdateContributorInsights = "dynamodb:UpdateContributorInsights",

  /**
   * Write - Grants permission to add or remove replicas in the specified global table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.globalTable `DynamodbResource.globalTable`} 
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  UpdateGlobalTable = "dynamodb:UpdateGlobalTable",

  /**
   * Write - Grants permission to update settings of the specified global table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateGlobalTableSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.globalTable `DynamodbResource.globalTable`} 
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  UpdateGlobalTableSettings = "dynamodb:UpdateGlobalTableSettings",

  /**
   * Write - Grants permission to edit an existing item's attributes, or adds a new item to the table if it does not already exist
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnConsumedCapacity`: Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnValues`: Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateItem = "dynamodb:UpdateItem",

  /**
   * Write - Grants permission to modify the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  UpdateTable = "dynamodb:UpdateTable",

  /**
   * Write - Grants permission to update auto scaling settings on your replica table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTableReplicaAutoScaling.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  UpdateTableReplicaAutoScaling = "dynamodb:UpdateTableReplicaAutoScaling",

  /**
   * Write - Grants permission to enable or disable TTL for the specified table
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTimeToLive.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   */
  UpdateTimeToLive = "dynamodb:UpdateTimeToLive",

  /**
   * * - Grant all dynamodb permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DynamodbResource.table `DynamodbResource.table`} 
   * - {@link DynamodbResource.globalTable `DynamodbResource.globalTable`} 
   * - {@link DynamodbResource.backup `DynamodbResource.backup`} 
   * - {@link DynamodbResource.index `DynamodbResource.index`} 
   * - {@link DynamodbResource.export `DynamodbResource.export`} 
   * - {@link DynamodbResource.stream `DynamodbResource.stream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `dynamodb:Attributes`: Filter based on the attribute (field or column) names of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:LeadingKeys`: Filters based on the partition key of the table ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnConsumedCapacity`: Filter based on the ReturnConsumedCapacity parameter of a request. Contains either "TOTAL" or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:Select`: Filter based on the Select parameter of a Query or Scan request ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:ReturnValues`: Filter based on the ReturnValues parameter of request. Contains one of the following: "ALL_OLD", "UPDATED_OLD","ALL_NEW","UPDATED_NEW", or "NONE" ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:EnclosingOperation`: Used to block Transactions APIs calls and allow the non-Transaction APIs calls and vice-versa ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `dynamodb:FullTableScan`: Used to block full table scan ({@link https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  All = "dynamodb:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html
 */
export const DynamodbResource = {

  /**
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey
   */
  index: (options: Partial<{partition: string, region: string, account: string, tableName: string, indexName: string}> = {}) => `arn:${options.partition || '*'}:dynamodb:${options.region || '*'}:${options.account || '*'}:table/${options.tableName || '*'}/index/${options.indexName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.Streams
   */
  stream: (options: Partial<{partition: string, region: string, account: string, tableName: string, streamLabel: string}> = {}) => `arn:${options.partition || '*'}:dynamodb:${options.region || '*'}:${options.account || '*'}:table/${options.tableName || '*'}/stream/${options.streamLabel || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.htmlHowItWorks.CoreComponents.html#HowItWorks.CoreComponents.TablesItemsAttributes
   */
  table: (options: Partial<{partition: string, region: string, account: string, tableName: string}> = {}) => `arn:${options.partition || '*'}:dynamodb:${options.region || '*'}:${options.account || '*'}:table/${options.tableName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/backuprestore_HowItWorks.html
   */
  backup: (options: Partial<{partition: string, region: string, account: string, tableName: string, backupName: string}> = {}) => `arn:${options.partition || '*'}:dynamodb:${options.region || '*'}:${options.account || '*'}:table/${options.tableName || '*'}/backup/${options.backupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataExport.HowItWorks.html
   */
  export: (options: Partial<{partition: string, region: string, account: string, tableName: string, exportName: string}> = {}) => `arn:${options.partition || '*'}:dynamodb:${options.region || '*'}:${options.account || '*'}:table/${options.tableName || '*'}/export/${options.exportName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables_HowItWorks.html
   */
  globalTable: (options: Partial<{partition: string, account: string, globalTableName: string}> = {}) => `arn:${options.partition || '*'}:dynamodb::${options.account || '*'}:global-table/${options.globalTableName || '*'}`,
}

