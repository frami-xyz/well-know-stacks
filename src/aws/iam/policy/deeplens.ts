/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
 */
export enum DeeplensAction {

  /**
   * Permissions management - Associates the user's account with IAM roles controlling various permissions needed by AWS DeepLens for proper functionality.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  AssociateServiceRoleToAccount = "deeplens:AssociateServiceRoleToAccount",

  /**
   * Read - Retrieves a list of AWS DeepLens devices.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.device `DeeplensResource.device`} 
   */
  BatchGetDevice = "deeplens:BatchGetDevice",

  /**
   * Read - Retrieves a list of AWS DeepLens Models.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.model `DeeplensResource.model`} 
   */
  BatchGetModel = "deeplens:BatchGetModel",

  /**
   * Read - Retrieves a list of AWS DeepLens Projects.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.project `DeeplensResource.project`} 
   */
  BatchGetProject = "deeplens:BatchGetProject",

  /**
   * Write - Creates a certificate package that is used to successfully authenticate and Register an AWS DeepLens device.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  CreateDeviceCertificates = "deeplens:CreateDeviceCertificates",

  /**
   * Write - Creates a new AWS DeepLens Model.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  CreateModel = "deeplens:CreateModel",

  /**
   * Write - Creates a new AWS DeepLens Project.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  CreateProject = "deeplens:CreateProject",

  /**
   * Write - Deletes an AWS DeepLens Model.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.model `DeeplensResource.model`} 
   */
  DeleteModel = "deeplens:DeleteModel",

  /**
   * Write - Deletes an AWS DeepLens Project.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.project `DeeplensResource.project`} 
   */
  DeleteProject = "deeplens:DeleteProject",

  /**
   * Write - Deploys an AWS DeepLens project to a registered AWS DeepLens device.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.device `DeeplensResource.device`} 
   * - {@link DeeplensResource.project `DeeplensResource.project`} 
   */
  DeployProject = "deeplens:DeployProject",

  /**
   * Write - Begins a device de-registration workflow for a registered AWS DeepLens device.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.device `DeeplensResource.device`} 
   */
  DeregisterDevice = "deeplens:DeregisterDevice",

  /**
   * Read - Retrieves the account level resources associated with the user's account.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  GetAssociatedResources = "deeplens:GetAssociatedResources",

  /**
   * Read - Retrieves the the deployment status of a particular AWS DeepLens device, along with any associated metadata.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  GetDeploymentStatus = "deeplens:GetDeploymentStatus",

  /**
   * Read - Retrieves information about an AWS DeepLens device.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.device `DeeplensResource.device`} 
   */
  GetDevice = "deeplens:GetDevice",

  /**
   * Read - Retrieves an AWS DeepLens Model.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.model `DeeplensResource.model`} 
   */
  GetModel = "deeplens:GetModel",

  /**
   * Read - Retrieves an AWS DeepLens Project.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.project `DeeplensResource.project`} 
   */
  GetProject = "deeplens:GetProject",

  /**
   * Write - Creates a new AWS DeepLens project from a sample project template.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  ImportProjectFromTemplate = "deeplens:ImportProjectFromTemplate",

  /**
   * List - Retrieves a list of AWS DeepLens Deployment identifiers.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  ListDeployments = "deeplens:ListDeployments",

  /**
   * List - Retrieves a list of AWS DeepLens device identifiers.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  ListDevices = "deeplens:ListDevices",

  /**
   * List - Retrieves a list of AWS DeepLens Model identifiers.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  ListModels = "deeplens:ListModels",

  /**
   * List - Retrieves a list of AWS DeepLens Project identifiers.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  ListProjects = "deeplens:ListProjects",

  /**
   * Write - Begins a device registration workflow for an AWS DeepLens device.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  RegisterDevice = "deeplens:RegisterDevice",

  /**
   * Write - Removes a deployed AWS DeepLens project from an AWS DeepLens device.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.device `DeeplensResource.device`} 
   */
  RemoveProject = "deeplens:RemoveProject",

  /**
   * Write - Updates an existing AWS DeepLens Project.
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.project `DeeplensResource.project`} 
   */
  UpdateProject = "deeplens:UpdateProject",

  /**
   * * - Grant all deeplens permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeeplensResource.device `DeeplensResource.device`} 
   * - {@link DeeplensResource.model `DeeplensResource.model`} 
   * - {@link DeeplensResource.project `DeeplensResource.project`} 
   */
  All = "deeplens:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
 */
export const DeeplensResource = {

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  device: (options: Partial<{partition: string, region: string, account: string, deviceName: string}> = {}) => `arn:${options.partition || '*'}:deeplens:${options.region || '*'}:${options.account || '*'}:device/${options.deviceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  project: (options: Partial<{partition: string, region: string, account: string, projectName: string}> = {}) => `arn:${options.partition || '*'}:deeplens:${options.region || '*'}:${options.account || '*'}:project/${options.projectName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeeplens.html
   */
  model: (options: Partial<{partition: string, region: string, account: string, modelName: string}> = {}) => `arn:${options.partition || '*'}:deeplens:${options.region || '*'}:${options.account || '*'}:model/${options.modelName || '*'}`,
}

