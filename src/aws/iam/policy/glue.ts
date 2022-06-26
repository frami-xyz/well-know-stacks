/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglue.html
 */
export enum GlueAction {

  /**
   * Write - Grants permission to create one or more partitions
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchCreatePartition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  BatchCreatePartition = "glue:BatchCreatePartition",

  /**
   * Write - Grants permission to delete one or more connections
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-BatchDeleteConnection
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.connection `GlueResource.connection`} 
   */
  BatchDeleteConnection = "glue:BatchDeleteConnection",

  /**
   * Write - Grants permission to delete one or more partitions
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchDeletePartition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  BatchDeletePartition = "glue:BatchDeletePartition",

  /**
   * Write - Grants permission to delete one or more tables
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-BatchDeleteTable
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  BatchDeleteTable = "glue:BatchDeleteTable",

  /**
   * Write - Grants permission to delete one or more versions of a table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  BatchDeleteTableVersion = "glue:BatchDeleteTableVersion",

  /**
   * Read - Grants permission to retrieve one or more blueprints
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-BatchGetBlueprints
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.blueprint `GlueResource.blueprint`} 
   */
  BatchGetBlueprints = "glue:BatchGetBlueprints",

  /**
   * Read - Grants permission to retrieve one or more crawlers
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-BatchGetCrawlers
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.crawler `GlueResource.crawler`} 
   */
  BatchGetCrawlers = "glue:BatchGetCrawlers",

  /**
   * Read - Grants permission to retrieve one or more Custom Entity Types
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-sensitive-data-api.html#aws-glue-sensitive-data-api-BatchGetCustomEntityTypes
   */
  BatchGetCustomEntityTypes = "glue:BatchGetCustomEntityTypes",

  /**
   * Read - Grants permission to retrieve one or more development endpoints
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-BatchGetDevEndpoints
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.devendpoint `GlueResource.devendpoint`} 
   */
  BatchGetDevEndpoints = "glue:BatchGetDevEndpoints",

  /**
   * Read - Grants permission to retrieve one or more jobs
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-BatchGetJobs
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.job `GlueResource.job`} 
   */
  BatchGetJobs = "glue:BatchGetJobs",

  /**
   * Read - Grants permission to retrieve one or more partitions
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchGetPartition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  BatchGetPartition = "glue:BatchGetPartition",

  /**
   * Read - Grants permission to retrieve one or more triggers
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-BatchGetTriggers
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.trigger `GlueResource.trigger`} 
   */
  BatchGetTriggers = "glue:BatchGetTriggers",

  /**
   * Read - Grants permission to retrieve one or more workflows
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-BatchGetWorkflows
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  BatchGetWorkflows = "glue:BatchGetWorkflows",

  /**
   * Write - Grants permission to stop one or more job runs for a job
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-BatchStopStartJobRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.job `GlueResource.job`} 
   */
  BatchStopJobRun = "glue:BatchStopJobRun",

  /**
   * Write - Grants permission to update one or more partitions
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-BatchUpdatePartition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  BatchUpdatePartition = "glue:BatchUpdatePartition",

  /**
   * Write - Grants permission to stop a running ML Task Run
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CancelMLTaskRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  CancelMLTaskRun = "glue:CancelMLTaskRun",

  /**
   * Write - Grants permission to cancel a statement in an interactive session
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-session.html#aws-glue-session-CancelStatement
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.session `GlueResource.session`} 
   */
  CancelStatement = "glue:CancelStatement",

  /**
   * Read - Grants permission to retrieve a check the validity of schema version
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CheckSchemaVersionValidity
   */
  CheckSchemaVersionValidity = "glue:CheckSchemaVersionValidity",

  /**
   * Write - Grants permission to create a blueprint
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-CreateBlueprint
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateBlueprint = "glue:CreateBlueprint",

  /**
   * Write - Grants permission to create a classifier
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-CreateClassifier
   */
  CreateClassifier = "glue:CreateClassifier",

  /**
   * Write - Grants permission to create a connection
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-CreateConnection
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConnection = "glue:CreateConnection",

  /**
   * Write - Grants permission to create a crawler
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-CreateCrawler
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCrawler = "glue:CreateCrawler",

  /**
   * Write - Grants permission to create a Custom Entity Type
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-sensitive-data-api.html#aws-glue-sensitive-data-api-CreateCustomEntityType
   */
  CreateCustomEntityType = "glue:CreateCustomEntityType",

  /**
   * Write - Grants permission to create a database
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-CreateDatabase
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   */
  CreateDatabase = "glue:CreateDatabase",

  /**
   * Write - Grants permission to create a development endpoint
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-CreateDevEndpoint
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDevEndpoint = "glue:CreateDevEndpoint",

  /**
   * Write - Grants permission to create a job
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-CreateJob
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `glue:VpcIds`: Filters access by the ID of the VPC configured for the Glue job ({@link https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `glue:SubnetIds`: Filters access by the ID of subnets configured for the Glue job ({@link https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `glue:SecurityGroupIds`: Filters access by the ID of security groups configured for the Glue job ({@link https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateJob = "glue:CreateJob",

  /**
   * Write - Grants permission to create an ML Transform
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-CreateMLTransform
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMLTransform = "glue:CreateMLTransform",

  /**
   * Write - Grants permission to create a partition
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-CreatePartition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  CreatePartition = "glue:CreatePartition",

  /**
   * Write - Grants permission to create a specified partition index in an existing table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-CreatePartitionIndex
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  CreatePartitionIndex = "glue:CreatePartitionIndex",

  /**
   * Write - Grants permission to create a new schema registry
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CreateRegistry
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRegistry = "glue:CreateRegistry",

  /**
   * Write - Grants permission to create a new schema container
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-CreateSchema
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSchema = "glue:CreateSchema",

  /**
   * Write - Grants permission to create a script
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-CreateScript
   */
  CreateScript = "glue:CreateScript",

  /**
   * Write - Grants permission to create a security configuration
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-CreateSecurityConfiguration
   */
  CreateSecurityConfiguration = "glue:CreateSecurityConfiguration",

  /**
   * Write - Grants permission to create an interactive session
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-session.html#aws-glue-api-session-CreateSession
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSession = "glue:CreateSession",

  /**
   * Write - Grants permission to create a table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-CreateTable
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   */
  CreateTable = "glue:CreateTable",

  /**
   * Write - Grants permission to create a trigger
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-CreateTrigger
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTrigger = "glue:CreateTrigger",

  /**
   * Write - Grants permission to create a function definition
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-CreateUserDefinedFunction
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   */
  CreateUserDefinedFunction = "glue:CreateUserDefinedFunction",

  /**
   * Write - Grants permission to create a workflow
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-CreateWorkflow
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWorkflow = "glue:CreateWorkflow",

  /**
   * Write - Grants permission to delete a blueprint
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-DeleteBlueprint
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.blueprint `GlueResource.blueprint`} 
   */
  DeleteBlueprint = "glue:DeleteBlueprint",

  /**
   * Write - Grants permission to delete a classifier
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-DeleteClassifier
   */
  DeleteClassifier = "glue:DeleteClassifier",

  /**
   * Write - Grants permission to delete the partition column statistics of a column
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-DeleteColumnStatisticsForPartition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  DeleteColumnStatisticsForPartition = "glue:DeleteColumnStatisticsForPartition",

  /**
   * Write - Grants permission to delete the table statistics of columns
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteColumnStatisticsForTable
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  DeleteColumnStatisticsForTable = "glue:DeleteColumnStatisticsForTable",

  /**
   * Write - Grants permission to delete a connection
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-DeleteConnection
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.connection `GlueResource.connection`} 
   */
  DeleteConnection = "glue:DeleteConnection",

  /**
   * Write - Grants permission to delete a crawler
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-DeleteCrawler
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.crawler `GlueResource.crawler`} 
   */
  DeleteCrawler = "glue:DeleteCrawler",

  /**
   * Write - Grants permission to delete a Custom Entity Type
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-sensitive-data-api.html#aws-glue-sensitive-data-api-DeleteCustomEntityType
   */
  DeleteCustomEntityType = "glue:DeleteCustomEntityType",

  /**
   * Write - Grants permission to delete a database
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-DeleteDatabase
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   * - {@link GlueResource.userdefinedfunction `GlueResource.userdefinedfunction`} 
   */
  DeleteDatabase = "glue:DeleteDatabase",

  /**
   * Write - Grants permission to delete a development endpoint
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-DeleteDevEndpoint
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.devendpoint `GlueResource.devendpoint`} 
   */
  DeleteDevEndpoint = "glue:DeleteDevEndpoint",

  /**
   * Write - Grants permission to delete a job
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-DeleteJob
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.job `GlueResource.job`} 
   */
  DeleteJob = "glue:DeleteJob",

  /**
   * Write - Grants permission to delete an ML Transform
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-DeleteMLTransform
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  DeleteMLTransform = "glue:DeleteMLTransform",

  /**
   * Write - Grants permission to delete a partition
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-DeletePartition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  DeletePartition = "glue:DeletePartition",

  /**
   * Write - Grants permission to delete a specified partition index from an existing table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeletePartitionIndex
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  DeletePartitionIndex = "glue:DeletePartitionIndex",

  /**
   * Write - Grants permission to delete a schema registry
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteRegistry
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   */
  DeleteRegistry = "glue:DeleteRegistry",

  /**
   * PermissionsManagement - Grants permission to delete a resource policy
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteResourcePolicy
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   */
  DeleteResourcePolicy = "glue:DeleteResourcePolicy",

  /**
   * Write - Grants permission to delete a schema container
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteSchema
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  DeleteSchema = "glue:DeleteSchema",

  /**
   * Write - Grants permission to delete a range of schema versions
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-DeleteSchemaVersions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  DeleteSchemaVersions = "glue:DeleteSchemaVersions",

  /**
   * Write - Grants permission to delete a security configuration
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-DeleteSecurityConfiguration
   */
  DeleteSecurityConfiguration = "glue:DeleteSecurityConfiguration",

  /**
   * Write - Grants permission to delete an interactive session after stopping the session if not already stopped
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-session.html#aws-glue-session-DeleteSession
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.session `GlueResource.session`} 
   */
  DeleteSession = "glue:DeleteSession",

  /**
   * Write - Grants permission to delete a table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTable
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  DeleteTable = "glue:DeleteTable",

  /**
   * Write - Grants permission to delete a version of a table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-DeleteTableVersion
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  DeleteTableVersion = "glue:DeleteTableVersion",

  /**
   * Write - Grants permission to delete a trigger
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-DeleteTrigger
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.trigger `GlueResource.trigger`} 
   */
  DeleteTrigger = "glue:DeleteTrigger",

  /**
   * Write - Grants permission to delete a function definition
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-DeleteUserDefinedFunction
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.userdefinedfunction `GlueResource.userdefinedfunction`} 
   */
  DeleteUserDefinedFunction = "glue:DeleteUserDefinedFunction",

  /**
   * Write - Grants permission to delete a workflow
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-DeleteWorkflow
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  DeleteWorkflow = "glue:DeleteWorkflow",

  /**
   * Read - Grants permission to retrieve a blueprint
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetBlueprint
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.blueprint `GlueResource.blueprint`} 
   */
  GetBlueprint = "glue:GetBlueprint",

  /**
   * Read - Grants permission to retrieve a blueprint run
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetBlueprintRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.blueprint `GlueResource.blueprint`} 
   */
  GetBlueprintRun = "glue:GetBlueprintRun",

  /**
   * Read - Grants permission to retrieve all runs of a blueprint
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetBlueprintRuns
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.blueprint `GlueResource.blueprint`} 
   */
  GetBlueprintRuns = "glue:GetBlueprintRuns",

  /**
   * Read - Grants permission to retrieve the catalog import status
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-GetCatalogImportStatus
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   */
  GetCatalogImportStatus = "glue:GetCatalogImportStatus",

  /**
   * Read - Grants permission to retrieve a classifier
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifier
   */
  GetClassifier = "glue:GetClassifier",

  /**
   * Read - Grants permission to list all classifiers
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-GetClassifiers
   */
  GetClassifiers = "glue:GetClassifiers",

  /**
   * Read - Grants permission to retrieve partition statistics of columns
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetColumnStatisticsForPartition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  GetColumnStatisticsForPartition = "glue:GetColumnStatisticsForPartition",

  /**
   * Read - Grants permission to retrieve table statistics of columns
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetColumnStatisticsForTable
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  GetColumnStatisticsForTable = "glue:GetColumnStatisticsForTable",

  /**
   * Read - Grants permission to retrieve a connection
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnection
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.connection `GlueResource.connection`} 
   */
  GetConnection = "glue:GetConnection",

  /**
   * Read - Grants permission to retrieve a list of connections
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-GetConnections
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.connection `GlueResource.connection`} 
   */
  GetConnections = "glue:GetConnections",

  /**
   * Read - Grants permission to retrieve a crawler
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawler
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.crawler `GlueResource.crawler`} 
   */
  GetCrawler = "glue:GetCrawler",

  /**
   * Read - Grants permission to retrieve metrics about crawlers
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlerMetrics
   */
  GetCrawlerMetrics = "glue:GetCrawlerMetrics",

  /**
   * Read - Grants permission to retrieve all crawlers
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-GetCrawlers
   */
  GetCrawlers = "glue:GetCrawlers",

  /**
   * Read - Grants permission to read a Custom Entity Type
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-sensitive-data-api.html#aws-glue-sensitive-data-api-GetCustomEntityType
   */
  GetCustomEntityType = "glue:GetCustomEntityType",

  /**
   * Read - Grants permission to retrieve catalog encryption settings
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetDataCatalogEncryptionSettings
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   */
  GetDataCatalogEncryptionSettings = "glue:GetDataCatalogEncryptionSettings",

  /**
   * Read - Grants permission to retrieve a database
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabase
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   */
  GetDatabase = "glue:GetDatabase",

  /**
   * Read - Grants permission to retrieve all databases
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-GetDatabases
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   */
  GetDatabases = "glue:GetDatabases",

  /**
   * Read - Grants permission to transform a script into a directed acyclic graph (DAG)
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetDataflowGraph
   */
  GetDataflowGraph = "glue:GetDataflowGraph",

  /**
   * Read - Grants permission to retrieve a development endpoint
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoint
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.devendpoint `GlueResource.devendpoint`} 
   */
  GetDevEndpoint = "glue:GetDevEndpoint",

  /**
   * Read - Grants permission to retrieve all development endpoints
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-GetDevEndpoints
   */
  GetDevEndpoints = "glue:GetDevEndpoints",

  /**
   * Read - Grants permission to retrieve a job
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJob
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.job `GlueResource.job`} 
   */
  GetJob = "glue:GetJob",

  /**
   * Read - Grants permission to retrieve a job bookmark
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-job-GetJobBookmark
   */
  GetJobBookmark = "glue:GetJobBookmark",

  /**
   * Read - Grants permission to retrieve a job run
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.job `GlueResource.job`} 
   */
  GetJobRun = "glue:GetJobRun",

  /**
   * Read - Grants permission to retrieve all job runs of a job
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-GetJobRuns
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.job `GlueResource.job`} 
   */
  GetJobRuns = "glue:GetJobRuns",

  /**
   * Read - Grants permission to retrieve all current jobs
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-GetJobs
   */
  GetJobs = "glue:GetJobs",

  /**
   * Read - Grants permission to retrieve an ML Task Run
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  GetMLTaskRun = "glue:GetMLTaskRun",

  /**
   * List - Grants permission to retrieve all ML Task Runs
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTaskRuns
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  GetMLTaskRuns = "glue:GetMLTaskRuns",

  /**
   * Read - Grants permission to retrieve an ML Transform
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransform
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  GetMLTransform = "glue:GetMLTransform",

  /**
   * List - Grants permission to retrieve all ML Transforms
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-GetMLTransforms
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  GetMLTransforms = "glue:GetMLTransforms",

  /**
   * Read - Grants permission to create a mapping
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetMapping
   */
  GetMapping = "glue:GetMapping",

  /**
   * Read - Grants permission to retrieve a partition
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  GetPartition = "glue:GetPartition",

  /**
   * Read - Grants permission to retrieve partition indexes for a table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetPartitionIndexes
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  GetPartitionIndexes = "glue:GetPartitionIndexes",

  /**
   * Read - Grants permission to retrieve the partitions of a table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-GetPartitions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  GetPartitions = "glue:GetPartitions",

  /**
   * Read - Grants permission to retrieve a mapping for a script
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-etl-script-generation.html#aws-glue-api-etl-script-generation-GetPlan
   */
  GetPlan = "glue:GetPlan",

  /**
   * Read - Grants permission to retrieve a schema registry
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetRegistry
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   */
  GetRegistry = "glue:GetRegistry",

  /**
   * Read - Grants permission to retrieve resource policies
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetResourcePolicies
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   */
  GetResourcePolicies = "glue:GetResourcePolicies",

  /**
   * Read - Grants permission to retrieve a resource policy
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetResourcePolicy
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   */
  GetResourcePolicy = "glue:GetResourcePolicy",

  /**
   * Read - Grants permission to retrieve a schema container
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchema
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  GetSchema = "glue:GetSchema",

  /**
   * Read - Grants permission to retrieve a schema version based on schema definition
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaByDefinition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  GetSchemaByDefinition = "glue:GetSchemaByDefinition",

  /**
   * Read - Grants permission to retrieve a schema version
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaVersion
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  GetSchemaVersion = "glue:GetSchemaVersion",

  /**
   * Read - Grants permission to compare two schema versions in schema registry
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-GetSchemaVersionsDiff
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  GetSchemaVersionsDiff = "glue:GetSchemaVersionsDiff",

  /**
   * Read - Grants permission to retrieve a security configuration
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfiguration
   */
  GetSecurityConfiguration = "glue:GetSecurityConfiguration",

  /**
   * Read - Grants permission to retrieve one or more security configurations
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-GetSecurityConfigurations
   */
  GetSecurityConfigurations = "glue:GetSecurityConfigurations",

  /**
   * Read - Grants permission to retrieve an interactive session
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-session.html#aws-glue-session-GetSession
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.session `GlueResource.session`} 
   */
  GetSession = "glue:GetSession",

  /**
   * Read - Grants permission to retrieve result and information about a statement in an interactive session
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-session.html#aws-glue-session-GetStatement
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.session `GlueResource.session`} 
   */
  GetStatement = "glue:GetStatement",

  /**
   * Read - Grants permission to retrieve a table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTable
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  GetTable = "glue:GetTable",

  /**
   * Read - Grants permission to retrieve a version of a table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersion
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  GetTableVersion = "glue:GetTableVersion",

  /**
   * Read - Grants permission to retrieve a list of versions of a table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTableVersions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  GetTableVersions = "glue:GetTableVersions",

  /**
   * Read - Grants permission to retrieve the tables in a database
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-GetTables
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  GetTables = "glue:GetTables",

  /**
   * Read - Grants permission to retrieve all tags associated with a resource
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.blueprint `GlueResource.blueprint`} 
   * - {@link GlueResource.crawler `GlueResource.crawler`} 
   * - {@link GlueResource.devendpoint `GlueResource.devendpoint`} 
   * - {@link GlueResource.job `GlueResource.job`} 
   * - {@link GlueResource.trigger `GlueResource.trigger`} 
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  GetTags = "glue:GetTags",

  /**
   * Read - Grants permission to retrieve a trigger
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTrigger
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.trigger `GlueResource.trigger`} 
   */
  GetTrigger = "glue:GetTrigger",

  /**
   * Read - Grants permission to retrieve the triggers associated with a job
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-GetTriggers
   */
  GetTriggers = "glue:GetTriggers",

  /**
   * Read - Grants permission to retrieve a function definition
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunction
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.userdefinedfunction `GlueResource.userdefinedfunction`} 
   */
  GetUserDefinedFunction = "glue:GetUserDefinedFunction",

  /**
   * Read - Grants permission to retrieve multiple function definitions
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-GetUserDefinedFunctions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.userdefinedfunction `GlueResource.userdefinedfunction`} 
   */
  GetUserDefinedFunctions = "glue:GetUserDefinedFunctions",

  /**
   * Read - Grants permission to retrieve a workflow
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflow
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  GetWorkflow = "glue:GetWorkflow",

  /**
   * Read - Grants permission to retrieve a workflow run
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  GetWorkflowRun = "glue:GetWorkflowRun",

  /**
   * Read - Grants permission to retrieve workflow run properties
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRunProperties
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  GetWorkflowRunProperties = "glue:GetWorkflowRunProperties",

  /**
   * Read - Grants permission to retrieve all runs of a workflow
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-GetWorkflowRuns
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  GetWorkflowRuns = "glue:GetWorkflowRuns",

  /**
   * Write - Grants permission to import an Athena data catalog into AWS Glue
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-migration.html#aws-glue-api-catalog-migration-ImportCatalogToGlue
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   */
  ImportCatalogToGlue = "glue:ImportCatalogToGlue",

  /**
   * List - Grants permission to retrieve all blueprints
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ListBlueprints
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListBlueprints = "glue:ListBlueprints",

  /**
   * List - Grants permission to retrieve all crawlers
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-ListCrawlers
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListCrawlers = "glue:ListCrawlers",

  /**
   * List - Grants permission to retrieve all Custom Entity Types
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-sensitive-data-api.html#aws-glue-sensitive-data-api-ListGetCustomEntityTypes
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListCustomEntityTypes = "glue:ListCustomEntityTypes",

  /**
   * List - Grants permission to retrieve all development endpoints
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-ListDevEndpoints
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListDevEndpoints = "glue:ListDevEndpoints",

  /**
   * List - Grants permission to retrieve all current jobs
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-ListJobs
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListJobs = "glue:ListJobs",

  /**
   * List - Grants permission to retrieve all ML Transforms
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-ListMLTransforms
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListMLTransforms = "glue:ListMLTransforms",

  /**
   * List - Grants permission to retrieve a list of schema registries
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListRegistries
   */
  ListRegistries = "glue:ListRegistries",

  /**
   * List - Grants permission to retrieve a list of schema versions
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListSchemaVersions
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  ListSchemaVersions = "glue:ListSchemaVersions",

  /**
   * List - Grants permission to retrieve a list of schema containers
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-ListSchemas
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   */
  ListSchemas = "glue:ListSchemas",

  /**
   * List - Grants permission to retrieve a list of interactive session
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-session.html#aws-glue-session-ListSessions
   */
  ListSessions = "glue:ListSessions",

  /**
   * List - Grants permission to retrieve a list of statements in an interactive session
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-session.html#aws-glue-session-ListStatements
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.session `GlueResource.session`} 
   */
  ListStatements = "glue:ListStatements",

  /**
   * List - Grants permission to retrieve all triggers
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-ListTriggers
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListTriggers = "glue:ListTriggers",

  /**
   * List - Grants permission to retrieve all workflows
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ListWorkflows
   */
  ListWorkflows = "glue:ListWorkflows",

  /**
   * Write - Grants permission to notify an event to the event-driven workflow
   * @see https://docs.aws.amazon.com/glue/latest/dg/starting-workflow-eventbridge.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  NotifyEvent = "glue:NotifyEvent",

  /**
   * Write - Grants permission to update catalog encryption settings
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutDataCatalogEncryptionSettings
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   */
  PutDataCatalogEncryptionSettings = "glue:PutDataCatalogEncryptionSettings",

  /**
   * PermissionsManagement - Grants permission to update a resource policy
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-security.html#aws-glue-api-jobs-security-PutResourcePolicy
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   */
  PutResourcePolicy = "glue:PutResourcePolicy",

  /**
   * Write - Grants permission to add metadata to schema version
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-PutSchemaVersionMetadata
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  PutSchemaVersionMetadata = "glue:PutSchemaVersionMetadata",

  /**
   * Write - Grants permission to update workflow run properties
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-PutWorkflowRunProperties
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  PutWorkflowRunProperties = "glue:PutWorkflowRunProperties",

  /**
   * List - Grants permission to fetch metadata for a schema version
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-QuerySchemaVersionMetadata
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  QuerySchemaVersionMetadata = "glue:QuerySchemaVersionMetadata",

  /**
   * Write - Grants permission to create a new schema version
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-RegisterSchemaVersion
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  RegisterSchemaVersion = "glue:RegisterSchemaVersion",

  /**
   * Write - Grants permission to remove metadata from schema version
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-RemoveSchemaVersionMetadata
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  RemoveSchemaVersionMetadata = "glue:RemoveSchemaVersionMetadata",

  /**
   * Write - Grants permission to reset a job bookmark
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-ResetJobBookmark
   */
  ResetJobBookmark = "glue:ResetJobBookmark",

  /**
   * Write - Grants permission to resume a workflow run
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-ResumeWorkflowRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  ResumeWorkflowRun = "glue:ResumeWorkflowRun",

  /**
   * Write - Grants permission to run a code or statement in an interactive session
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-session.html#aws-glue-session-RunStatement
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.session `GlueResource.session`} 
   */
  RunStatement = "glue:RunStatement",

  /**
   * Read - Grants permission to retrieve the tables in the catalog
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-SearchTables
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  SearchTables = "glue:SearchTables",

  /**
   * Write - Grants permission to start running a blueprint
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StartBlueprintRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.blueprint `GlueResource.blueprint`} 
   */
  StartBlueprintRun = "glue:StartBlueprintRun",

  /**
   * Write - Grants permission to start a crawler
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StartCrawler
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.crawler `GlueResource.crawler`} 
   */
  StartCrawler = "glue:StartCrawler",

  /**
   * Write - Grants permission to change the schedule state of a crawler to SCHEDULED
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StartCrawlerSchedule
   */
  StartCrawlerSchedule = "glue:StartCrawlerSchedule",

  /**
   * Write - Grants permission to start an Export Labels ML Task Run
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartExportLabelsTaskRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  StartExportLabelsTaskRun = "glue:StartExportLabelsTaskRun",

  /**
   * Write - Grants permission to start an Import Labels ML Task Run
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartImportLabelsTaskRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  StartImportLabelsTaskRun = "glue:StartImportLabelsTaskRun",

  /**
   * Write - Grants permission to start running a job
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-StartJobRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.job `GlueResource.job`} 
   */
  StartJobRun = "glue:StartJobRun",

  /**
   * Write - Grants permission to start an Evaluation ML Task Run
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLEvaluationTaskRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  StartMLEvaluationTaskRun = "glue:StartMLEvaluationTaskRun",

  /**
   * Write - Grants permission to start a Labeling Set Generation ML Task Run
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-StartMLLabelingSetGenerationTaskRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  StartMLLabelingSetGenerationTaskRun = "glue:StartMLLabelingSetGenerationTaskRun",

  /**
   * Write - Grants permission to start a trigger
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StartTrigger
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.trigger `GlueResource.trigger`} 
   */
  StartTrigger = "glue:StartTrigger",

  /**
   * Write - Grants permission to start running a workflow
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StartWorkflowRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  StartWorkflowRun = "glue:StartWorkflowRun",

  /**
   * Write - Grants permission to stop a running crawler
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-StopCrawler
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.crawler `GlueResource.crawler`} 
   */
  StopCrawler = "glue:StopCrawler",

  /**
   * Write - Grants permission to set the schedule state of a crawler to NOT_SCHEDULED
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-StopCrawlerSchedule
   */
  StopCrawlerSchedule = "glue:StopCrawlerSchedule",

  /**
   * Write - Grants permission to stop an interactive session
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-session.html#aws-glue-session-StopSession
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.session `GlueResource.session`} 
   */
  StopSession = "glue:StopSession",

  /**
   * Write - Grants permission to stop a trigger
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-StopTrigger
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.trigger `GlueResource.trigger`} 
   */
  StopTrigger = "glue:StopTrigger",

  /**
   * Write - Grants permission to stop a workflow run
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-StopWorkflowRun
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  StopWorkflowRun = "glue:StopWorkflowRun",

  /**
   * Tagging - Grants permission to add tags to a resource
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-TagResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.blueprint `GlueResource.blueprint`} 
   * - {@link GlueResource.crawler `GlueResource.crawler`} 
   * - {@link GlueResource.devendpoint `GlueResource.devendpoint`} 
   * - {@link GlueResource.job `GlueResource.job`} 
   * - {@link GlueResource.trigger `GlueResource.trigger`} 
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "glue:TagResource",

  /**
   * Tagging - Grants permission to remove tags associated with a resource
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-tags.html#aws-glue-api-tags-UntagResource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.blueprint `GlueResource.blueprint`} 
   * - {@link GlueResource.crawler `GlueResource.crawler`} 
   * - {@link GlueResource.devendpoint `GlueResource.devendpoint`} 
   * - {@link GlueResource.job `GlueResource.job`} 
   * - {@link GlueResource.trigger `GlueResource.trigger`} 
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "glue:UntagResource",

  /**
   * Write - Grants permission to update a blueprint
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-UpdateBlueprint
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.blueprint `GlueResource.blueprint`} 
   */
  UpdateBlueprint = "glue:UpdateBlueprint",

  /**
   * Write - Grants permission to update a classifier
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-UpdateClassifier
   */
  UpdateClassifier = "glue:UpdateClassifier",

  /**
   * Write - Grants permission to update partition statistics of columns
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-UpdateColumnStatisticsForPartition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  UpdateColumnStatisticsForPartition = "glue:UpdateColumnStatisticsForPartition",

  /**
   * Write - Grants permission to update table statistics of columns
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-UpdateColumnStatisticsForTable
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  UpdateColumnStatisticsForTable = "glue:UpdateColumnStatisticsForTable",

  /**
   * Write - Grants permission to update a connection
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-UpdateConnection
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.connection `GlueResource.connection`} 
   */
  UpdateConnection = "glue:UpdateConnection",

  /**
   * Write - Grants permission to update a crawler
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-UpdateCrawler
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.crawler `GlueResource.crawler`} 
   */
  UpdateCrawler = "glue:UpdateCrawler",

  /**
   * Write - Grants permission to update the schedule of a crawler
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-scheduler.html#aws-glue-api-crawler-scheduler-UpdateCrawlerSchedule
   */
  UpdateCrawlerSchedule = "glue:UpdateCrawlerSchedule",

  /**
   * Write - Grants permission to update a database
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-databases.html#aws-glue-api-catalog-databases-UpdateDatabase
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   */
  UpdateDatabase = "glue:UpdateDatabase",

  /**
   * Write - Grants permission to update a development endpoint
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-dev-endpoint.html#aws-glue-api-dev-endpoint-UpdateDevEndpoint
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.devendpoint `GlueResource.devendpoint`} 
   */
  UpdateDevEndpoint = "glue:UpdateDevEndpoint",

  /**
   * Write - Grants permission to update a job
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-UpdateJob
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.job `GlueResource.job`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `glue:VpcIds`: Filters access by the ID of the VPC configured for the Glue job ({@link https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `glue:SubnetIds`: Filters access by the ID of subnets configured for the Glue job ({@link https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `glue:SecurityGroupIds`: Filters access by the ID of security groups configured for the Glue job ({@link https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateJob = "glue:UpdateJob",

  /**
   * Write - Grants permission to update an ML Transform
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html#aws-glue-api-machine-learning-api-UpdateMLTransform
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  UpdateMLTransform = "glue:UpdateMLTransform",

  /**
   * Write - Grants permission to update a partition
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-partitions.html#aws-glue-api-catalog-partitions-UpdatePartition
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  UpdatePartition = "glue:UpdatePartition",

  /**
   * Write - Grants permission to update a schema registry
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-UpdateRegistry
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   */
  UpdateRegistry = "glue:UpdateRegistry",

  /**
   * Write - Grants permission to update a schema container
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-schema-registry-api.html#aws-glue-api-schema-registry-api-UpdateSchema
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   */
  UpdateSchema = "glue:UpdateSchema",

  /**
   * Write - Grants permission to update a table
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-tables.html#aws-glue-api-catalog-tables-UpdateTable
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   */
  UpdateTable = "glue:UpdateTable",

  /**
   * Write - Grants permission to update a trigger
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-UpdateTrigger
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.trigger `GlueResource.trigger`} 
   */
  UpdateTrigger = "glue:UpdateTrigger",

  /**
   * Write - Grants permission to update a function definition
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-functions.html#aws-glue-api-catalog-functions-UpdateUserDefinedFunction
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.userdefinedfunction `GlueResource.userdefinedfunction`} 
   */
  UpdateUserDefinedFunction = "glue:UpdateUserDefinedFunction",

  /**
   * Write - Grants permission to update a workflow
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-workflow.html#aws-glue-api-workflow-UpdateWorkflow
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   */
  UpdateWorkflow = "glue:UpdateWorkflow",

  /**
   * Write - Grants permission to use an ML Transform from within a Glue ETL Script
   * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-machine-learning-api.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   */
  UseMLTransforms = "glue:UseMLTransforms",

  /**
   * * - Grant all glue permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglue.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link GlueResource.catalog `GlueResource.catalog`} 
   * - {@link GlueResource.database `GlueResource.database`} 
   * - {@link GlueResource.table `GlueResource.table`} 
   * - {@link GlueResource.connection `GlueResource.connection`} 
   * - {@link GlueResource.blueprint `GlueResource.blueprint`} 
   * - {@link GlueResource.crawler `GlueResource.crawler`} 
   * - {@link GlueResource.devendpoint `GlueResource.devendpoint`} 
   * - {@link GlueResource.job `GlueResource.job`} 
   * - {@link GlueResource.trigger `GlueResource.trigger`} 
   * - {@link GlueResource.workflow `GlueResource.workflow`} 
   * - {@link GlueResource.mlTransform `GlueResource.mlTransform`} 
   * - {@link GlueResource.session `GlueResource.session`} 
   * - {@link GlueResource.registry `GlueResource.registry`} 
   * - {@link GlueResource.schema `GlueResource.schema`} 
   * - {@link GlueResource.userdefinedfunction `GlueResource.userdefinedfunction`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `glue:VpcIds`: Filters access by the ID of the VPC configured for the Glue job ({@link https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `glue:SubnetIds`: Filters access by the ID of subnets configured for the Glue job ({@link https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `glue:SecurityGroupIds`: Filters access by the ID of security groups configured for the Glue job ({@link https://docs.aws.amazon.com/glue/latest/dg/using-identity-based-policies.html#glue-identity-based-policy-condition-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "glue:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsglue.html
 */
export const GlueResource = {

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   */
  catalog: (options: Partial<{partition: string, region: string, account: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:catalog`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   */
  database: (options: Partial<{partition: string, region: string, account: string, databaseName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:database/${options.databaseName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   */
  table: (options: Partial<{partition: string, region: string, account: string, databaseName: string, tableName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:table/${options.databaseName || '*'}/${options.tableName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   */
  tableversion: (options: Partial<{partition: string, region: string, account: string, databaseName: string, tableName: string, tableVersionName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:tableVersion/${options.databaseName || '*'}/${options.tableName || '*'}/${options.tableVersionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   */
  connection: (options: Partial<{partition: string, region: string, account: string, connectionName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:connection/${options.connectionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   */
  userdefinedfunction: (options: Partial<{partition: string, region: string, account: string, databaseName: string, userDefinedFunctionName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:userDefinedFunction/${options.databaseName || '*'}/${options.userDefinedFunctionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  devendpoint: (options: Partial<{partition: string, region: string, account: string, devEndpointName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:devEndpoint/${options.devEndpointName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  job: (options: Partial<{partition: string, region: string, account: string, jobName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:job/${options.jobName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  trigger: (options: Partial<{partition: string, region: string, account: string, triggerName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:trigger/${options.triggerName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  crawler: (options: Partial<{partition: string, region: string, account: string, crawlerName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:crawler/${options.crawlerName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workflow: (options: Partial<{partition: string, region: string, account: string, workflowName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:workflow/${options.workflowName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  blueprint: (options: Partial<{partition: string, region: string, account: string, blueprintName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:blueprint/${options.blueprintName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  mlTransform: (options: Partial<{partition: string, region: string, account: string, transformId: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:mlTransform/${options.transformId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  registry: (options: Partial<{partition: string, region: string, account: string, registryName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:registry/${options.registryName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  schema: (options: Partial<{partition: string, region: string, account: string, schemaName: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:schema/${options.schemaName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  session: (options: Partial<{partition: string, region: string, account: string, sessionId: string}> = {}) => `arn:${options.partition || '*'}:glue:${options.region || '*'}:${options.account || '*'}:session/${options.sessionId || '*'}`,
}

