/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplify.html
 */
export enum AmplifyAction {

  /**
   * Write - Creates a new Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApp = "amplify:CreateApp",

  /**
   * Write - Creates a new backend environment for an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  CreateBackendEnvironment = "amplify:CreateBackendEnvironment",

  /**
   * Write - Creates a new Branch for an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateBranch = "amplify:CreateBranch",

  /**
   * Write - Create a deployment for manual deploy apps. (Apps are not connected to repository)
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.branches `AmplifyResource.branches`} 
   */
  CreateDeployment = "amplify:CreateDeployment",

  /**
   * Write - Create a new DomainAssociation on an App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDomainAssociation = "amplify:CreateDomainAssociation",

  /**
   * Write - Create a new webhook on an App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.branches `AmplifyResource.branches`} 
   */
  CreateWebHook = "amplify:CreateWebHook",

  /**
   * Write - Delete an existing Amplify App by appId
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  DeleteApp = "amplify:DeleteApp",

  /**
   * Write - Deletes a branch for an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  DeleteBackendEnvironment = "amplify:DeleteBackendEnvironment",

  /**
   * Write - Deletes a branch for an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.branches `AmplifyResource.branches`} 
   */
  DeleteBranch = "amplify:DeleteBranch",

  /**
   * Write - Deletes a DomainAssociation
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.domains `AmplifyResource.domains`} 
   */
  DeleteDomainAssociation = "amplify:DeleteDomainAssociation",

  /**
   * Write - Delete a job, for an Amplify branch, part of Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.jobs `AmplifyResource.jobs`} 
   */
  DeleteJob = "amplify:DeleteJob",

  /**
   * Write - Delete a webhook by id
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  DeleteWebHook = "amplify:DeleteWebHook",

  /**
   * Write - Generate website access logs for a specific time range via a pre-signed URL
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  GenerateAccessLogs = "amplify:GenerateAccessLogs",

  /**
   * Read - Retrieves an existing Amplify App by appId
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  GetApp = "amplify:GetApp",

  /**
   * Read - Retrieves artifact info that corresponds to a artifactId
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  GetArtifactUrl = "amplify:GetArtifactUrl",

  /**
   * Read - Retrieves a backend environment for an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  GetBackendEnvironment = "amplify:GetBackendEnvironment",

  /**
   * Read - Retrieves a branch for an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.branches `AmplifyResource.branches`} 
   */
  GetBranch = "amplify:GetBranch",

  /**
   * Read - Retrieves domain info that corresponds to an appId and domainName
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.domains `AmplifyResource.domains`} 
   */
  GetDomainAssociation = "amplify:GetDomainAssociation",

  /**
   * Read - Get a job for a branch, part of an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.jobs `AmplifyResource.jobs`} 
   */
  GetJob = "amplify:GetJob",

  /**
   * Read - Retrieves webhook info that corresponds to a webhookId
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  GetWebHook = "amplify:GetWebHook",

  /**
   * List - Lists existing Amplify Apps
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  ListApps = "amplify:ListApps",

  /**
   * List - List artifacts with an app, a branch, a job and an artifact type
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  ListArtifacts = "amplify:ListArtifacts",

  /**
   * List - Lists backend environments for an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  ListBackendEnvironments = "amplify:ListBackendEnvironments",

  /**
   * List - Lists branches for an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  ListBranches = "amplify:ListBranches",

  /**
   * List - List domains with an app
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  ListDomainAssociations = "amplify:ListDomainAssociations",

  /**
   * List - List Jobs for a branch, part of an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.branches `AmplifyResource.branches`} 
   */
  ListJobs = "amplify:ListJobs",

  /**
   * Read - List tags for an AWS Amplify Console resource
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   * - {@link AmplifyResource.branches `AmplifyResource.branches`} 
   * - {@link AmplifyResource.jobs `AmplifyResource.jobs`} 
   */
  ListTagsForResource = "amplify:ListTagsForResource",

  /**
   * List - List webhooks on an App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  ListWebHooks = "amplify:ListWebHooks",

  /**
   * Write - Start a deployment for manual deploy apps. (Apps are not connected to repository)
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.branches `AmplifyResource.branches`} 
   */
  StartDeployment = "amplify:StartDeployment",

  /**
   * Write - Starts a new job for a branch, part of an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.jobs `AmplifyResource.jobs`} 
   */
  StartJob = "amplify:StartJob",

  /**
   * Write - Stop a job that is in progress, for an Amplify branch, part of Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.jobs `AmplifyResource.jobs`} 
   */
  StopJob = "amplify:StopJob",

  /**
   * Tagging - This action tags an AWS Amplify Console resource
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   * - {@link AmplifyResource.branches `AmplifyResource.branches`} 
   * - {@link AmplifyResource.jobs `AmplifyResource.jobs`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "amplify:TagResource",

  /**
   * Tagging - This action removes a tag from an AWS Amplify Console resource
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   * - {@link AmplifyResource.branches `AmplifyResource.branches`} 
   * - {@link AmplifyResource.jobs `AmplifyResource.jobs`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "amplify:UntagResource",

  /**
   * Write - Updates an existing Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  UpdateApp = "amplify:UpdateApp",

  /**
   * Write - Updates a branch for an Amplify App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.branches `AmplifyResource.branches`} 
   */
  UpdateBranch = "amplify:UpdateBranch",

  /**
   * Write - Update a DomainAssociation on an App
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.domains `AmplifyResource.domains`} 
   */
  UpdateDomainAssociation = "amplify:UpdateDomainAssociation",

  /**
   * Write - Update a webhook
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   */
  UpdateWebHook = "amplify:UpdateWebHook",

  /**
   * * - Grant all amplify permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplify.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyResource.apps `AmplifyResource.apps`} 
   * - {@link AmplifyResource.branches `AmplifyResource.branches`} 
   * - {@link AmplifyResource.domains `AmplifyResource.domains`} 
   * - {@link AmplifyResource.jobs `AmplifyResource.jobs`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag's key and value in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys in a request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "amplify:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplify.html
 */
export const AmplifyResource = {

  /**
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  apps: (options: Partial<{partition: string, region: string, account: string, appId: string}> = {}) => `arn:${options.partition || '*'}:amplify:${options.region || '*'}:${options.account || '*'}:apps/${options.appId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  branches: (options: Partial<{partition: string, region: string, account: string, appId: string, branchName: string}> = {}) => `arn:${options.partition || '*'}:amplify:${options.region || '*'}:${options.account || '*'}:apps/${options.appId || '*'}/branches/${options.branchName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  jobs: (options: Partial<{partition: string, region: string, account: string, appId: string, branchName: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:amplify:${options.region || '*'}:${options.account || '*'}:apps/${options.appId || '*'}/branches/${options.branchName || '*'}/jobs/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  domains: (options: Partial<{partition: string, region: string, account: string, appId: string, domainName: string}> = {}) => `arn:${options.partition || '*'}:amplify:${options.region || '*'}:${options.account || '*'}:apps/${options.appId || '*'}/domains/${options.domainName || '*'}`,
}

