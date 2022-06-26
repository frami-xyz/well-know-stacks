/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmobilehub.html
 */
export enum MobilehubAction {

  /**
   * Write - Create a project
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  CreateProject = "mobilehub:CreateProject",

  /**
   * Write - Enable AWS Mobile Hub in the account by creating the required service role
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  CreateServiceRole = "mobilehub:CreateServiceRole",

  /**
   * Write - Delete the specified project
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobilehubResource.project `MobilehubResource.project`} 
   */
  DeleteProject = "mobilehub:DeleteProject",

  /**
   * Write - Delete a saved snapshot of project configuration
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  DeleteProjectSnapshot = "mobilehub:DeleteProjectSnapshot",

  /**
   * Write - Deploy changes to the specified stage
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  DeployToStage = "mobilehub:DeployToStage",

  /**
   * Read - Describe the download bundle
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  DescribeBundle = "mobilehub:DescribeBundle",

  /**
   * Read - Export the download bundle
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  ExportBundle = "mobilehub:ExportBundle",

  /**
   * Read - Export the project configuration
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobilehubResource.project `MobilehubResource.project`} 
   */
  ExportProject = "mobilehub:ExportProject",

  /**
   * Read - Generate project parameters required for code generation
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobilehubResource.project `MobilehubResource.project`} 
   */
  GenerateProjectParameters = "mobilehub:GenerateProjectParameters",

  /**
   * Read - Get project configuration and resources
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobilehubResource.project `MobilehubResource.project`} 
   */
  GetProject = "mobilehub:GetProject",

  /**
   * Read - Fetch the previously exported project configuration snapshot
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  GetProjectSnapshot = "mobilehub:GetProjectSnapshot",

  /**
   * Write - Create a new project from the previously exported project configuration
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  ImportProject = "mobilehub:ImportProject",

  /**
   * Write - Install a bundle in the project deployments S3 bucket
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  InstallBundle = "mobilehub:InstallBundle",

  /**
   * List - List the available SaaS (Software as a Service) connectors
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  ListAvailableConnectors = "mobilehub:ListAvailableConnectors",

  /**
   * List - List available features
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  ListAvailableFeatures = "mobilehub:ListAvailableFeatures",

  /**
   * List - List available regions for projects
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  ListAvailableRegions = "mobilehub:ListAvailableRegions",

  /**
   * List - List the available download bundles
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  ListBundles = "mobilehub:ListBundles",

  /**
   * List - List saved snapshots of project configuration
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  ListProjectSnapshots = "mobilehub:ListProjectSnapshots",

  /**
   * List - List projects
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  ListProjects = "mobilehub:ListProjects",

  /**
   * Write - Synchronize state of resources into project
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobilehubResource.project `MobilehubResource.project`} 
   */
  SynchronizeProject = "mobilehub:SynchronizeProject",

  /**
   * Write - Update project
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobilehubResource.project `MobilehubResource.project`} 
   */
  UpdateProject = "mobilehub:UpdateProject",

  /**
   * Read - Validate a mobile hub project.
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  ValidateProject = "mobilehub:ValidateProject",

  /**
   * Read - Verify AWS Mobile Hub is enabled in the account
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/managed-policies.html
   */
  VerifyServiceRole = "mobilehub:VerifyServiceRole",

  /**
   * * - Grant all mobilehub permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmobilehub.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MobilehubResource.project `MobilehubResource.project`} 
   */
  All = "mobilehub:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmobilehub.html
 */
export const MobilehubResource = {

  /**
   * @see https://docs.aws.amazon.com/mobile-hub/latest/developerguide/reference-mobile-hub-iam-managed-policies.html
   */
  project: (options: Partial<{partition: string, region: string, account: string, projectId: string}> = {}) => `arn:${options.partition || '*'}:mobilehub:${options.region || '*'}:${options.account || '*'}:project/${options.projectId || '*'}`,
}

