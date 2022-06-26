/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyadmin.html
 */
export enum AmplifybackendAction {

  /**
   * Write - Grants permission to clone an existing Amplify Admin backend environment into a new Amplify Admin backend enviroment
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-environments-backendenvironmentname-clone.html#CloneBackend
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   */
  CloneBackend = "amplifybackend:CloneBackend",

  /**
   * Write - Grants permission to create a new Amplify Admin backend environment by Amplify appId
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend.html#CreateBackend
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   */
  CreateBackend = "amplifybackend:CreateBackend",

  /**
   * Write - Grants permission to create an API for an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api.html#CreateBackendAPI
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.api `AmplifybackendResource.api`} 
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  CreateBackendAPI = "amplifybackend:CreateBackendAPI",

  /**
   * Write - Grants permission to create an auth resource for an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth.html#CreateBackendAuth
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.auth `AmplifybackendResource.auth`} 
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  CreateBackendAuth = "amplifybackend:CreateBackendAuth",

  /**
   * Write - Grants permission to create a new Amplify Admin backend config by Amplify appId
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config.html#CreateBackendConfig
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   */
  CreateBackendConfig = "amplifybackend:CreateBackendConfig",

  /**
   * Write - Grants permission to create a backend storage resource
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#CreateBackendStorage
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  CreateBackendStorage = "amplifybackend:CreateBackendStorage",

  /**
   * Write - Grants permission to create an Amplify Admin challenge token by appId
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge.html#CreateToken
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   */
  CreateToken = "amplifybackend:CreateToken",

  /**
   * Write - Grants permission to delete an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-environments-backendenvironmentname-remove.html#DeleteBackend
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  DeleteBackend = "amplifybackend:DeleteBackend",

  /**
   * Write - Grants permission to delete an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-remove.html#DeleteBackendAPI
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.api `AmplifybackendResource.api`} 
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  DeleteBackendAPI = "amplifybackend:DeleteBackendAPI",

  /**
   * Write - Grants permission to delete an auth resource of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname-remove.html#DeleteBackendAuth
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.auth `AmplifybackendResource.auth`} 
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  DeleteBackendAuth = "amplifybackend:DeleteBackendAuth",

  /**
   * Write - Grants permission to delete a backend storage resource
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#DeleteBackendStorage
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   * - {@link AmplifybackendResource.storage `AmplifybackendResource.storage`} 
   */
  DeleteBackendStorage = "amplifybackend:DeleteBackendStorage",

  /**
   * Write - Grants permission to delete an Amplify Admin challenge token by appId
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge-sessionid-remove.html#DeleteToken
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   */
  DeleteToken = "amplifybackend:DeleteToken",

  /**
   * Write - Grants permission to generate models for an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-generatemodels.html#GenerateBackendAPIModels
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.api `AmplifybackendResource.api`} 
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  GenerateBackendAPIModels = "amplifybackend:GenerateBackendAPIModels",

  /**
   * Read - Grants permission to retrieve an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-details.html#GetBackend
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  GetBackend = "amplifybackend:GetBackend",

  /**
   * Read - Grants permission to retrieve an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-details.html#GetBackendAPI
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.api `AmplifybackendResource.api`} 
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  GetBackendAPI = "amplifybackend:GetBackendAPI",

  /**
   * Read - Grants permission to retrieve models for an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-getmodels.html#GetBackendAPIModels
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.api `AmplifybackendResource.api`} 
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  GetBackendAPIModels = "amplifybackend:GetBackendAPIModels",

  /**
   * Read - Grants permission to retrieve an auth resource of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname-details.html#GetBackendAuth
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.auth `AmplifybackendResource.auth`} 
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  GetBackendAuth = "amplifybackend:GetBackendAuth",

  /**
   * Read - Grants permission to retrieve a job of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname-jobid.html#GetBackendJob
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.job `AmplifybackendResource.job`} 
   */
  GetBackendJob = "amplifybackend:GetBackendJob",

  /**
   * Read - Grants permission to retrieve an existing backend storage resource
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#GetBackendStorage
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  GetBackendStorage = "amplifybackend:GetBackendStorage",

  /**
   * Read - Grants permission to retrieve an Amplify Admin challenge token by appId
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge-sessionid.html#GetToken
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   */
  GetToken = "amplifybackend:GetToken",

  /**
   * Write - Grants permission to import an existing auth resource of an Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname.html#ImportBackendAuth
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.auth `AmplifybackendResource.auth`} 
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  ImportBackendAuth = "amplifybackend:ImportBackendAuth",

  /**
   * Write - Grants permission to import an existing backend storage resource
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#ImportBackendStorage
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   * - {@link AmplifybackendResource.storage `AmplifybackendResource.storage`} 
   */
  ImportBackendStorage = "amplifybackend:ImportBackendStorage",

  /**
   * List - Grants permission to retrieve the jobs of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname.html#ListBackendJobs
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.job `AmplifybackendResource.job`} 
   */
  ListBackendJobs = "amplifybackend:ListBackendJobs",

  /**
   * List - Grants permission to retrieve s3 buckets
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#ListS3Buckets
   */
  ListS3Buckets = "amplifybackend:ListS3Buckets",

  /**
   * Write - Grants permission to delete all existing Amplify Admin backend environments by appId
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-remove.html#RemoveAllBackends
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  RemoveAllBackends = "amplifybackend:RemoveAllBackends",

  /**
   * Write - Grants permission to delete an Amplify Admin backend config by Amplify appId
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config-remove.html#RemoveBackendConfig
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   */
  RemoveBackendConfig = "amplifybackend:RemoveBackendConfig",

  /**
   * Write - Grants permission to update an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname.html#UpdateBackendAPI
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.api `AmplifybackendResource.api`} 
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  UpdateBackendAPI = "amplifybackend:UpdateBackendAPI",

  /**
   * Write - Grants permission to update an auth resource of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname.html#UpdateBackendAuth
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.auth `AmplifybackendResource.auth`} 
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   */
  UpdateBackendAuth = "amplifybackend:UpdateBackendAuth",

  /**
   * Write - Grants permission to update an Amplify Admin backend config by Amplify appId
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config-update.html#UpdateBackendConfig
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   */
  UpdateBackendConfig = "amplifybackend:UpdateBackendConfig",

  /**
   * Write - Grants permission to update a job of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname-jobid.html#UpdateBackendJob
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.job `AmplifybackendResource.job`} 
   */
  UpdateBackendJob = "amplifybackend:UpdateBackendJob",

  /**
   * Write - Grants permission to update a backend storage resource
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#UpdateBackendStorage
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   * - {@link AmplifybackendResource.storage `AmplifybackendResource.storage`} 
   */
  UpdateBackendStorage = "amplifybackend:UpdateBackendStorage",

  /**
   * * - Grant all amplifybackend permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyadmin.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifybackendResource.backend `AmplifybackendResource.backend`} 
   * - {@link AmplifybackendResource.api `AmplifybackendResource.api`} 
   * - {@link AmplifybackendResource.environment `AmplifybackendResource.environment`} 
   * - {@link AmplifybackendResource.auth `AmplifybackendResource.auth`} 
   * - {@link AmplifybackendResource.storage `AmplifybackendResource.storage`} 
   * - {@link AmplifybackendResource.job `AmplifybackendResource.job`} 
   */
  All = "amplifybackend:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyadmin.html
 */
export const AmplifybackendResource = {

  /**
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend.html
   */
  backend: (options: Partial<{partition: string, region: string, account: string, appId: string}> = {}) => `arn:${options.partition || '*'}:amplifybackend:${options.region || '*'}:${options.account || '*'}:backend/${options.appId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-details.html
   */
  environment: (options: Partial<{partition: string, region: string, account: string, appId: string}> = {}) => `arn:${options.partition || '*'}:amplifybackend:${options.region || '*'}:${options.account || '*'}:backend/${options.appId || '*'}/environments`,

  /**
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api.html
   */
  api: (options: Partial<{partition: string, region: string, account: string, appId: string}> = {}) => `arn:${options.partition || '*'}:amplifybackend:${options.region || '*'}:${options.account || '*'}:backend/${options.appId || '*'}/api`,

  /**
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth.html
   */
  auth: (options: Partial<{partition: string, region: string, account: string, appId: string}> = {}) => `arn:${options.partition || '*'}:amplifybackend:${options.region || '*'}:${options.account || '*'}:backend/${options.appId || '*'}/auth`,

  /**
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname.html
   */
  job: (options: Partial<{partition: string, region: string, account: string, appId: string}> = {}) => `arn:${options.partition || '*'}:amplifybackend:${options.region || '*'}:${options.account || '*'}:backend/${options.appId || '*'}/job`,

  /**
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config.html
   */
  config: (options: Partial<{partition: string, region: string, account: string, appId: string}> = {}) => `arn:${options.partition || '*'}:amplifybackend:${options.region || '*'}:${options.account || '*'}:backend/${options.appId || '*'}/config`,

  /**
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-token.html
   */
  token: (options: Partial<{partition: string, region: string, account: string, appId: string}> = {}) => `arn:${options.partition || '*'}:amplifybackend:${options.region || '*'}:${options.account || '*'}:backend/${options.appId || '*'}/token`,

  /**
   * @see https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html
   */
  storage: (options: Partial<{partition: string, region: string, account: string, appId: string}> = {}) => `arn:${options.partition || '*'}:amplifybackend:${options.region || '*'}:${options.account || '*'}:backend/${options.appId || '*'}/storage`,
}

