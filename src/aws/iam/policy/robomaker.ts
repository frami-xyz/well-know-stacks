/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrobomaker.html
 */
export enum RobomakerAction {

  /**
   * Write - Delete one or more worlds in a batch operation
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_BatchDeleteWorlds.html
   */
  BatchDeleteWorlds = "robomaker:BatchDeleteWorlds",

  /**
   * Read - Describe multiple simulation jobs
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_BatchDescribeSimulationJob.html
   */
  BatchDescribeSimulationJob = "robomaker:BatchDescribeSimulationJob",

  /**
   * Write - Cancel a deployment job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelDeploymentJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.deploymentJob `RobomakerResource.deploymentJob`} 
   */
  CancelDeploymentJob = "robomaker:CancelDeploymentJob",

  /**
   * Write - Cancel a simulation job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.simulationJob `RobomakerResource.simulationJob`} 
   */
  CancelSimulationJob = "robomaker:CancelSimulationJob",

  /**
   * Write - Cancel a simulation job batch
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJobBatch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.simulationJobBatch `RobomakerResource.simulationJobBatch`} 
   */
  CancelSimulationJobBatch = "robomaker:CancelSimulationJobBatch",

  /**
   * Write - Cancel a world export job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelWorldExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.worldExportJob `RobomakerResource.worldExportJob`} 
   */
  CancelWorldExportJob = "robomaker:CancelWorldExportJob",

  /**
   * Write - Cancel a world generation job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelWorldGenerationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.worldGenerationJob `RobomakerResource.worldGenerationJob`} 
   */
  CancelWorldGenerationJob = "robomaker:CancelWorldGenerationJob",

  /**
   * Write - Create a deployment job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateDeploymentJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDeploymentJob = "robomaker:CreateDeploymentJob",

  /**
   * Write - Create a deployment fleet that represents a logical group of robots running the same robot application
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateFleet = "robomaker:CreateFleet",

  /**
   * Write - Create a robot that can be registered to a fleet
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobot.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateRobot = "robomaker:CreateRobot",

  /**
   * Write - Create a robot application
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateRobotApplication = "robomaker:CreateRobotApplication",

  /**
   * Write - Create a snapshot of a robot application
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplicationVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.robotApplication `RobomakerResource.robotApplication`} 
   */
  CreateRobotApplicationVersion = "robomaker:CreateRobotApplicationVersion",

  /**
   * Write - Create a simulation application
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSimulationApplication = "robomaker:CreateSimulationApplication",

  /**
   * Write - Create a snapshot of a simulation application
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplicationVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.simulationApplication `RobomakerResource.simulationApplication`} 
   */
  CreateSimulationApplicationVersion = "robomaker:CreateSimulationApplicationVersion",

  /**
   * Write - Create a simulation job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateSimulationJob = "robomaker:CreateSimulationJob",

  /**
   * Write - Create a world export job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateWorldExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.world `RobomakerResource.world`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateWorldExportJob = "robomaker:CreateWorldExportJob",

  /**
   * Write - Create a world generation job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateWorldGenerationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.worldTemplate `RobomakerResource.worldTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateWorldGenerationJob = "robomaker:CreateWorldGenerationJob",

  /**
   * Write - Create a world template
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateWorldTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateWorldTemplate = "robomaker:CreateWorldTemplate",

  /**
   * Write - Delete a deployment fleet
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.deploymentFleet `RobomakerResource.deploymentFleet`} 
   */
  DeleteFleet = "robomaker:DeleteFleet",

  /**
   * Write - Delete a robot
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.robot `RobomakerResource.robot`} 
   */
  DeleteRobot = "robomaker:DeleteRobot",

  /**
   * Write - Delete a robot application
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobotApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.robotApplication `RobomakerResource.robotApplication`} 
   */
  DeleteRobotApplication = "robomaker:DeleteRobotApplication",

  /**
   * Write - Delete a simulation application
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteSimulationApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.simulationApplication `RobomakerResource.simulationApplication`} 
   */
  DeleteSimulationApplication = "robomaker:DeleteSimulationApplication",

  /**
   * Write - Delete a world template
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteWorldTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.worldTemplate `RobomakerResource.worldTemplate`} 
   */
  DeleteWorldTemplate = "robomaker:DeleteWorldTemplate",

  /**
   * Write - Deregister a robot from a fleet
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DeregisterRobot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.deploymentFleet `RobomakerResource.deploymentFleet`} 
   * - {@link RobomakerResource.robot `RobomakerResource.robot`} 
   */
  DeregisterRobot = "robomaker:DeregisterRobot",

  /**
   * Read - Describe a deployment job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeDeploymentJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.deploymentJob `RobomakerResource.deploymentJob`} 
   */
  DescribeDeploymentJob = "robomaker:DescribeDeploymentJob",

  /**
   * Read - Describe a deployment fleet
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.deploymentFleet `RobomakerResource.deploymentFleet`} 
   */
  DescribeFleet = "robomaker:DescribeFleet",

  /**
   * Read - Describe a robot
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.robot `RobomakerResource.robot`} 
   */
  DescribeRobot = "robomaker:DescribeRobot",

  /**
   * Read - Describe a robot application
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobotApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.robotApplication `RobomakerResource.robotApplication`} 
   */
  DescribeRobotApplication = "robomaker:DescribeRobotApplication",

  /**
   * Read - Describe a simulation application
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.simulationApplication `RobomakerResource.simulationApplication`} 
   */
  DescribeSimulationApplication = "robomaker:DescribeSimulationApplication",

  /**
   * Read - Describe a simulation job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.simulationJob `RobomakerResource.simulationJob`} 
   */
  DescribeSimulationJob = "robomaker:DescribeSimulationJob",

  /**
   * Read - Describe a simulation job batch
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJobBatch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.simulationJobBatch `RobomakerResource.simulationJobBatch`} 
   */
  DescribeSimulationJobBatch = "robomaker:DescribeSimulationJobBatch",

  /**
   * Read - Describe a world
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorld.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.world `RobomakerResource.world`} 
   */
  DescribeWorld = "robomaker:DescribeWorld",

  /**
   * Read - Describe a world export job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorldExportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.worldExportJob `RobomakerResource.worldExportJob`} 
   */
  DescribeWorldExportJob = "robomaker:DescribeWorldExportJob",

  /**
   * Read - Describe a world generation job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorldGenerationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.worldGenerationJob `RobomakerResource.worldGenerationJob`} 
   */
  DescribeWorldGenerationJob = "robomaker:DescribeWorldGenerationJob",

  /**
   * Read - Describe a world template
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorldTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.worldTemplate `RobomakerResource.worldTemplate`} 
   */
  DescribeWorldTemplate = "robomaker:DescribeWorldTemplate",

  /**
   * Read - Get the body of a world template
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_GetWorldTemplateBody.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.worldTemplate `RobomakerResource.worldTemplate`} 
   */
  GetWorldTemplateBody = "robomaker:GetWorldTemplateBody",

  /**
   * List - List deployment jobs
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListDeploymentJobs.html
   */
  ListDeploymentJobs = "robomaker:ListDeploymentJobs",

  /**
   * List - List fleets
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListFleets.html
   */
  ListFleets = "robomaker:ListFleets",

  /**
   * List - List robot applications
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobotApplications.html
   */
  ListRobotApplications = "robomaker:ListRobotApplications",

  /**
   * List - List robots
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobots.html
   */
  ListRobots = "robomaker:ListRobots",

  /**
   * List - List simulation applications
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationApplications.html
   */
  ListSimulationApplications = "robomaker:ListSimulationApplications",

  /**
   * List - List simulation job batches
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobBatches.html
   */
  ListSimulationJobBatches = "robomaker:ListSimulationJobBatches",

  /**
   * List - List simulation jobs
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobs.html
   */
  ListSimulationJobs = "robomaker:ListSimulationJobs",

  /**
   * List - Lists supported availability zones
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrobomaker.html
   */
  ListSupportedAvailabilityZones = "robomaker:ListSupportedAvailabilityZones",

  /**
   * List - List tags for a RoboMaker resource
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.deploymentFleet `RobomakerResource.deploymentFleet`} 
   * - {@link RobomakerResource.deploymentJob `RobomakerResource.deploymentJob`} 
   * - {@link RobomakerResource.robot `RobomakerResource.robot`} 
   * - {@link RobomakerResource.robotApplication `RobomakerResource.robotApplication`} 
   * - {@link RobomakerResource.simulationApplication `RobomakerResource.simulationApplication`} 
   * - {@link RobomakerResource.simulationJob `RobomakerResource.simulationJob`} 
   * - {@link RobomakerResource.simulationJobBatch `RobomakerResource.simulationJobBatch`} 
   * - {@link RobomakerResource.world `RobomakerResource.world`} 
   * - {@link RobomakerResource.worldExportJob `RobomakerResource.worldExportJob`} 
   * - {@link RobomakerResource.worldGenerationJob `RobomakerResource.worldGenerationJob`} 
   * - {@link RobomakerResource.worldTemplate `RobomakerResource.worldTemplate`} 
   */
  ListTagsForResource = "robomaker:ListTagsForResource",

  /**
   * List - List world export jobs
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorldExportJobs.html
   */
  ListWorldExportJobs = "robomaker:ListWorldExportJobs",

  /**
   * List - List world generation jobs
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorldGenerationJobs.html
   */
  ListWorldGenerationJobs = "robomaker:ListWorldGenerationJobs",

  /**
   * List - List world templates
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorldTemplates.html
   */
  ListWorldTemplates = "robomaker:ListWorldTemplates",

  /**
   * List - List worlds
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorlds.html
   */
  ListWorlds = "robomaker:ListWorlds",

  /**
   * Write - Register a robot to a fleet
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_RegisterRobot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.deploymentFleet `RobomakerResource.deploymentFleet`} 
   * - {@link RobomakerResource.robot `RobomakerResource.robot`} 
   */
  RegisterRobot = "robomaker:RegisterRobot",

  /**
   * Write - Restart a running simulation job
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_RestartSimulationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.simulationJob `RobomakerResource.simulationJob`} 
   */
  RestartSimulationJob = "robomaker:RestartSimulationJob",

  /**
   * Write - Create a simulation job batch
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_StartSimulationJobBatch.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartSimulationJobBatch = "robomaker:StartSimulationJobBatch",

  /**
   * Write - Ensures the most recently deployed robot application is deployed to all robots in the fleet
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_SyncDeploymentJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.deploymentFleet `RobomakerResource.deploymentFleet`} 
   */
  SyncDeploymentJob = "robomaker:SyncDeploymentJob",

  /**
   * Tagging - Add tags to a RoboMaker resource
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.deploymentFleet `RobomakerResource.deploymentFleet`} 
   * - {@link RobomakerResource.deploymentJob `RobomakerResource.deploymentJob`} 
   * - {@link RobomakerResource.robot `RobomakerResource.robot`} 
   * - {@link RobomakerResource.robotApplication `RobomakerResource.robotApplication`} 
   * - {@link RobomakerResource.simulationApplication `RobomakerResource.simulationApplication`} 
   * - {@link RobomakerResource.simulationJob `RobomakerResource.simulationJob`} 
   * - {@link RobomakerResource.simulationJobBatch `RobomakerResource.simulationJobBatch`} 
   * - {@link RobomakerResource.world `RobomakerResource.world`} 
   * - {@link RobomakerResource.worldExportJob `RobomakerResource.worldExportJob`} 
   * - {@link RobomakerResource.worldGenerationJob `RobomakerResource.worldGenerationJob`} 
   * - {@link RobomakerResource.worldTemplate `RobomakerResource.worldTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "robomaker:TagResource",

  /**
   * Tagging - Remove tags from a RoboMaker resource
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.deploymentFleet `RobomakerResource.deploymentFleet`} 
   * - {@link RobomakerResource.deploymentJob `RobomakerResource.deploymentJob`} 
   * - {@link RobomakerResource.robot `RobomakerResource.robot`} 
   * - {@link RobomakerResource.robotApplication `RobomakerResource.robotApplication`} 
   * - {@link RobomakerResource.simulationApplication `RobomakerResource.simulationApplication`} 
   * - {@link RobomakerResource.simulationJob `RobomakerResource.simulationJob`} 
   * - {@link RobomakerResource.simulationJobBatch `RobomakerResource.simulationJobBatch`} 
   * - {@link RobomakerResource.world `RobomakerResource.world`} 
   * - {@link RobomakerResource.worldExportJob `RobomakerResource.worldExportJob`} 
   * - {@link RobomakerResource.worldGenerationJob `RobomakerResource.worldGenerationJob`} 
   * - {@link RobomakerResource.worldTemplate `RobomakerResource.worldTemplate`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "robomaker:UntagResource",

  /**
   * Write - Update a robot application
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateRobotApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.robotApplication `RobomakerResource.robotApplication`} 
   */
  UpdateRobotApplication = "robomaker:UpdateRobotApplication",

  /**
   * Write - Report the deployment status for an individual robot
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrobomaker.html
   */
  UpdateRobotDeployment = "robomaker:UpdateRobotDeployment",

  /**
   * Write - Update a simulation application
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateSimulationApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.simulationApplication `RobomakerResource.simulationApplication`} 
   */
  UpdateSimulationApplication = "robomaker:UpdateSimulationApplication",

  /**
   * Write - Update a world template
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateWorldTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.worldTemplate `RobomakerResource.worldTemplate`} 
   */
  UpdateWorldTemplate = "robomaker:UpdateWorldTemplate",

  /**
   * * - Grant all robomaker permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrobomaker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RobomakerResource.deploymentJob `RobomakerResource.deploymentJob`} 
   * - {@link RobomakerResource.simulationJob `RobomakerResource.simulationJob`} 
   * - {@link RobomakerResource.simulationJobBatch `RobomakerResource.simulationJobBatch`} 
   * - {@link RobomakerResource.worldExportJob `RobomakerResource.worldExportJob`} 
   * - {@link RobomakerResource.worldGenerationJob `RobomakerResource.worldGenerationJob`} 
   * - {@link RobomakerResource.robotApplication `RobomakerResource.robotApplication`} 
   * - {@link RobomakerResource.simulationApplication `RobomakerResource.simulationApplication`} 
   * - {@link RobomakerResource.world `RobomakerResource.world`} 
   * - {@link RobomakerResource.worldTemplate `RobomakerResource.worldTemplate`} 
   * - {@link RobomakerResource.deploymentFleet `RobomakerResource.deploymentFleet`} 
   * - {@link RobomakerResource.robot `RobomakerResource.robot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "robomaker:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrobomaker.html
 */
export const RobomakerResource = {

  /**
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/managing-robot-applications.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  robotApplication: (options: Partial<{partition: string, region: string, account: string, applicationName: string, createdOnEpoch: string}> = {}) => `arn:${options.partition || '*'}:robomaker:${options.region || '*'}:${options.account || '*'}:robot-application/${options.applicationName || '*'}/${options.createdOnEpoch || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/managing-simulation-applications.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  simulationApplication: (options: Partial<{partition: string, region: string, account: string, applicationName: string, createdOnEpoch: string}> = {}) => `arn:${options.partition || '*'}:robomaker:${options.region || '*'}:${options.account || '*'}:simulation-application/${options.applicationName || '*'}/${options.createdOnEpoch || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/simulation.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  simulationJob: (options: Partial<{partition: string, region: string, account: string, simulationJobId: string}> = {}) => `arn:${options.partition || '*'}:robomaker:${options.region || '*'}:${options.account || '*'}:simulation-job/${options.simulationJobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/simulation-job-batch.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  simulationJobBatch: (options: Partial<{partition: string, region: string, account: string, simulationJobBatchId: string}> = {}) => `arn:${options.partition || '*'}:robomaker:${options.region || '*'}:${options.account || '*'}:simulation-job-batch/${options.simulationJobBatchId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/deployment.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deploymentJob: (options: Partial<{partition: string, region: string, account: string, deploymentJobId: string}> = {}) => `arn:${options.partition || '*'}:robomaker:${options.region || '*'}:${options.account || '*'}:deployment-job/${options.deploymentJobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  robot: (options: Partial<{partition: string, region: string, account: string, robotName: string, createdOnEpoch: string}> = {}) => `arn:${options.partition || '*'}:robomaker:${options.region || '*'}:${options.account || '*'}:robot/${options.robotName || '*'}/${options.createdOnEpoch || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/managing-simulation-applications.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deploymentFleet: (options: Partial<{partition: string, region: string, account: string, fleetName: string, createdOnEpoch: string}> = {}) => `arn:${options.partition || '*'}:robomaker:${options.region || '*'}:${options.account || '*'}:deployment-fleet/${options.fleetName || '*'}/${options.createdOnEpoch || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/worlds-managing-generation-jobs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  worldGenerationJob: (options: Partial<{partition: string, region: string, account: string, worldGenerationJobId: string}> = {}) => `arn:${options.partition || '*'}:robomaker:${options.region || '*'}:${options.account || '*'}:world-generation-job/${options.worldGenerationJobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/worlds-managing-export-jobs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  worldExportJob: (options: Partial<{partition: string, region: string, account: string, worldExportJobId: string}> = {}) => `arn:${options.partition || '*'}:robomaker:${options.region || '*'}:${options.account || '*'}:world-export-job/${options.worldExportJobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/worlds-managing-simworld-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  worldTemplate: (options: Partial<{partition: string, region: string, account: string, worldTemplateJobId: string}> = {}) => `arn:${options.partition || '*'}:robomaker:${options.region || '*'}:${options.account || '*'}:world-template/${options.worldTemplateJobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/robomaker/latest/dg/worlds-managing-generated-worlds.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/robomaker/latest/dg/tagging-resources-iam-policies.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  world: (options: Partial<{partition: string, region: string, account: string, worldId: string}> = {}) => `arn:${options.partition || '*'}:robomaker:${options.region || '*'}:${options.account || '*'}:world/${options.worldId || '*'}`,
}

