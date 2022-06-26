/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslambda.html
 */
export enum LambdaAction {

  /**
   * Permissions management - Grants permission to add permissions to the resource-based policy of a version of an AWS Lambda layer
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_AddLayerVersionPermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.layerVersion `LambdaResource.layerVersion`} 
   */
  AddLayerVersionPermission = "lambda:AddLayerVersionPermission",

  /**
   * Permissions management - Grants permission to give an AWS service or another account permission to use an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:Principal`: Filters access by restricting the AWS service or account that can invoke a function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:FunctionUrlAuthType`: Filters access by authorization type specified in request. Available during CreateFunctionUrlConfig, UpdateFunctionUrlConfig, DeleteFunctionUrlConfig, GetFunctionUrlConfig, ListFunctionUrlConfig, AddPermission and RemovePermission operations ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AddPermission = "lambda:AddPermission",

  /**
   * Write - Grants permission to create an alias for a Lambda function version
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  CreateAlias = "lambda:CreateAlias",

  /**
   * Write - Grants permission to create an AWS Lambda code signing config
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_CreateCodeSigningConfig.html
   */
  CreateCodeSigningConfig = "lambda:CreateCodeSigningConfig",

  /**
   * Write - Grants permission to create a mapping between an event source and an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:FunctionArn`: Filters access by the ARN of an AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  CreateEventSourceMapping = "lambda:CreateEventSourceMapping",

  /**
   * Write - Grants permission to create an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:Layer`: Filters access by the ARN of a version of an AWS Lambda layer ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `lambda:VpcIds`: Filters access by the ID of the VPC configured for the AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:SubnetIds`: Filters access by the ID of subnets configured for the AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `lambda:SecurityGroupIds`: Filters access by the ID of security groups configured for the AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `lambda:CodeSigningConfigArn`: Filters access by the ARN of an AWS Lambda code signing config ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateFunction = "lambda:CreateFunction",

  /**
   * Write - Grants permission to create a function url configuration for a Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunctionUrlConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:FunctionUrlAuthType`: Filters access by authorization type specified in request. Available during CreateFunctionUrlConfig, UpdateFunctionUrlConfig, DeleteFunctionUrlConfig, GetFunctionUrlConfig, ListFunctionUrlConfig, AddPermission and RemovePermission operations ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:FunctionArn`: Filters access by the ARN of an AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  CreateFunctionUrlConfig = "lambda:CreateFunctionUrlConfig",

  /**
   * Write - Grants permission to delete an AWS Lambda function alias
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  DeleteAlias = "lambda:DeleteAlias",

  /**
   * Write - Grants permission to delete an AWS Lambda code signing config
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteCodeSigningConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.code signing config `LambdaResource.code signing config`} 
   */
  DeleteCodeSigningConfig = "lambda:DeleteCodeSigningConfig",

  /**
   * Write - Grants permission to delete an AWS Lambda event source mapping
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteEventSourceMapping.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.eventSourceMapping `LambdaResource.eventSourceMapping`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:FunctionArn`: Filters access by the ARN of an AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DeleteEventSourceMapping = "lambda:DeleteEventSourceMapping",

  /**
   * Write - Grants permission to delete an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  DeleteFunction = "lambda:DeleteFunction",

  /**
   * Write - Grants permission to detach a code signing config from an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionCodeSigningConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  DeleteFunctionCodeSigningConfig = "lambda:DeleteFunctionCodeSigningConfig",

  /**
   * Write - Grants permission to remove a concurrent execution limit from an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  DeleteFunctionConcurrency = "lambda:DeleteFunctionConcurrency",

  /**
   * Write - Grants permission to delete the configuration for asynchronous invocation for an AWS Lambda function, version, or alias
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionEventInvokeConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  DeleteFunctionEventInvokeConfig = "lambda:DeleteFunctionEventInvokeConfig",

  /**
   * Write - Grants permission to delete function url configuration for a Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionUrlConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:FunctionUrlAuthType`: Filters access by authorization type specified in request. Available during CreateFunctionUrlConfig, UpdateFunctionUrlConfig, DeleteFunctionUrlConfig, GetFunctionUrlConfig, ListFunctionUrlConfig, AddPermission and RemovePermission operations ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:FunctionArn`: Filters access by the ARN of an AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DeleteFunctionUrlConfig = "lambda:DeleteFunctionUrlConfig",

  /**
   * Write - Grants permission to delete a version of an AWS Lambda layer
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteLayerVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.layerVersion `LambdaResource.layerVersion`} 
   */
  DeleteLayerVersion = "lambda:DeleteLayerVersion",

  /**
   * Write - Grants permission to delete the provisioned concurrency configuration for an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteProvisionedConcurrencyConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function alias `LambdaResource.function alias`} 
   * - {@link LambdaResource.function version `LambdaResource.function version`} 
   */
  DeleteProvisionedConcurrencyConfig = "lambda:DeleteProvisionedConcurrencyConfig",

  /**
   * Permissions management - Grants permission to disable replication for a Lambda@Edge function
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  DisableReplication = "lambda:DisableReplication",

  /**
   * Permissions management - Grants permission to enable replication for a Lambda@Edge function
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  EnableReplication = "lambda:EnableReplication",

  /**
   * Read - Grants permission to view details about an account's limits and usage in an AWS Region
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetAccountSettings.html
   */
  GetAccountSettings = "lambda:GetAccountSettings",

  /**
   * Read - Grants permission to view details about an AWS Lambda function alias
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  GetAlias = "lambda:GetAlias",

  /**
   * Read - Grants permission to view details about an AWS Lambda code signing config
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetCodeSigningConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.code signing config `LambdaResource.code signing config`} 
   */
  GetCodeSigningConfig = "lambda:GetCodeSigningConfig",

  /**
   * Read - Grants permission to view details about an AWS Lambda event source mapping
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetEventSourceMapping.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.eventSourceMapping `LambdaResource.eventSourceMapping`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:FunctionArn`: Filters access by the ARN of an AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  GetEventSourceMapping = "lambda:GetEventSourceMapping",

  /**
   * Read - Grants permission to view details about an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  GetFunction = "lambda:GetFunction",

  /**
   * Read - Grants permission to view the code signing config arn attached to an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionCodeSigningConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  GetFunctionCodeSigningConfig = "lambda:GetFunctionCodeSigningConfig",

  /**
   * Read - Grants permission to view details about the reserved concurrency configuration for a function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConcurrency.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  GetFunctionConcurrency = "lambda:GetFunctionConcurrency",

  /**
   * Read - Grants permission to view details about the version-specific settings of an AWS Lambda function or version
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  GetFunctionConfiguration = "lambda:GetFunctionConfiguration",

  /**
   * Read - Grants permission to view the configuration for asynchronous invocation for a function, version, or alias
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionEventInvokeConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  GetFunctionEventInvokeConfig = "lambda:GetFunctionEventInvokeConfig",

  /**
   * Read - Grants permission to read function url configuration for a Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionUrlConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:FunctionUrlAuthType`: Filters access by authorization type specified in request. Available during CreateFunctionUrlConfig, UpdateFunctionUrlConfig, DeleteFunctionUrlConfig, GetFunctionUrlConfig, ListFunctionUrlConfig, AddPermission and RemovePermission operations ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:FunctionArn`: Filters access by the ARN of an AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  GetFunctionUrlConfig = "lambda:GetFunctionUrlConfig",

  /**
   * Read - Grants permission to view details about a version of an AWS Lambda layer. Note this action also supports GetLayerVersionByArn API
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.layerVersion `LambdaResource.layerVersion`} 
   */
  GetLayerVersion = "lambda:GetLayerVersion",

  /**
   * Read - Grants permission to view the resource-based policy for a version of an AWS Lambda layer
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.layerVersion `LambdaResource.layerVersion`} 
   */
  GetLayerVersionPolicy = "lambda:GetLayerVersionPolicy",

  /**
   * Read - Grants permission to view the resource-based policy for an AWS Lambda function, version, or alias
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  GetPolicy = "lambda:GetPolicy",

  /**
   * Read - Grants permission to view the provisioned concurrency configuration for an AWS Lambda function's alias or version
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_GetProvisionedConcurrencyConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function alias `LambdaResource.function alias`} 
   * - {@link LambdaResource.function version `LambdaResource.function version`} 
   */
  GetProvisionedConcurrencyConfig = "lambda:GetProvisionedConcurrencyConfig",

  /**
   * Write - Grants permission to invoke a function asynchronously (Deprecated)
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeAsync.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  InvokeAsync = "lambda:InvokeAsync",

  /**
   * Write - Grants permission to invoke an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  InvokeFunction = "lambda:InvokeFunction",

  /**
   * Write - Grants permission to invoke an AWS Lambda function through url
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeFunctionUrl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:FunctionUrlAuthType`: Filters access by authorization type specified in request. Available during CreateFunctionUrlConfig, UpdateFunctionUrlConfig, DeleteFunctionUrlConfig, GetFunctionUrlConfig, ListFunctionUrlConfig, AddPermission and RemovePermission operations ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:FunctionArn`: Filters access by the ARN of an AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  InvokeFunctionUrl = "lambda:InvokeFunctionUrl",

  /**
   * List - Grants permission to retrieve a list of aliases for an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  ListAliases = "lambda:ListAliases",

  /**
   * List - Grants permission to retrieve a list of AWS Lambda code signing configs
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListCodeSigningConfigs.html
   */
  ListCodeSigningConfigs = "lambda:ListCodeSigningConfigs",

  /**
   * List - Grants permission to retrieve a list of AWS Lambda event source mappings
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListEventSourceMappings.html
   */
  ListEventSourceMappings = "lambda:ListEventSourceMappings",

  /**
   * List - Grants permission to retrieve a list of configurations for asynchronous invocation for a function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionEventInvokeConfigs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  ListFunctionEventInvokeConfigs = "lambda:ListFunctionEventInvokeConfigs",

  /**
   * List - Grants permission to read function url configurations for a function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionUrlConfigs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:FunctionUrlAuthType`: Filters access by authorization type specified in request. Available during CreateFunctionUrlConfig, UpdateFunctionUrlConfig, DeleteFunctionUrlConfig, GetFunctionUrlConfig, ListFunctionUrlConfig, AddPermission and RemovePermission operations ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListFunctionUrlConfigs = "lambda:ListFunctionUrlConfigs",

  /**
   * List - Grants permission to retrieve a list of AWS Lambda functions, with the version-specific configuration of each function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html
   */
  ListFunctions = "lambda:ListFunctions",

  /**
   * List - Grants permission to retrieve a list of AWS Lambda functions by the code signing config assigned
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionsByCodeSigningConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.code signing config `LambdaResource.code signing config`} 
   */
  ListFunctionsByCodeSigningConfig = "lambda:ListFunctionsByCodeSigningConfig",

  /**
   * List - Grants permission to retrieve a list of versions of an AWS Lambda layer
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html
   */
  ListLayerVersions = "lambda:ListLayerVersions",

  /**
   * List - Grants permission to retrieve a list of AWS Lambda layers, with details about the latest version of each layer
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html
   */
  ListLayers = "lambda:ListLayers",

  /**
   * List - Grants permission to retrieve a list of provisioned concurrency configurations for an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListProvisionedConcurrencyConfigs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  ListProvisionedConcurrencyConfigs = "lambda:ListProvisionedConcurrencyConfigs",

  /**
   * Read - Grants permission to retrieve a list of tags for an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  ListTags = "lambda:ListTags",

  /**
   * List - Grants permission to retrieve a list of versions for an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_ListVersionsByFunction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  ListVersionsByFunction = "lambda:ListVersionsByFunction",

  /**
   * Write - Grants permission to create an AWS Lambda layer
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.layer `LambdaResource.layer`} 
   */
  PublishLayerVersion = "lambda:PublishLayerVersion",

  /**
   * Write - Grants permission to create an AWS Lambda function version
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  PublishVersion = "lambda:PublishVersion",

  /**
   * Write - Grants permission to attach a code signing config to an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionCodeSigningConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.code signing config `LambdaResource.code signing config`} 
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:CodeSigningConfigArn`: Filters access by the ARN of an AWS Lambda code signing config ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutFunctionCodeSigningConfig = "lambda:PutFunctionCodeSigningConfig",

  /**
   * Write - Grants permission to configure reserved concurrency for an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  PutFunctionConcurrency = "lambda:PutFunctionConcurrency",

  /**
   * Write - Grants permission to configures options for asynchronous invocation on an AWS Lambda function, version, or alias
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  PutFunctionEventInvokeConfig = "lambda:PutFunctionEventInvokeConfig",

  /**
   * Write - Grants permission to configure provisioned concurrency for an AWS Lambda function's alias or version
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_PutProvisionedConcurrencyConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function alias `LambdaResource.function alias`} 
   * - {@link LambdaResource.function version `LambdaResource.function version`} 
   */
  PutProvisionedConcurrencyConfig = "lambda:PutProvisionedConcurrencyConfig",

  /**
   * Permissions management - Grants permission to remove a statement from the permissions policy for a version of an AWS Lambda layer
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_RemoveLayerVersionPermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.layerVersion `LambdaResource.layerVersion`} 
   */
  RemoveLayerVersionPermission = "lambda:RemoveLayerVersionPermission",

  /**
   * Permissions management - Grants permission to revoke function-use permission from an AWS service or another account
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_RemovePermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:Principal`: Filters access by restricting the AWS service or account that can invoke a function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:FunctionUrlAuthType`: Filters access by authorization type specified in request. Available during CreateFunctionUrlConfig, UpdateFunctionUrlConfig, DeleteFunctionUrlConfig, GetFunctionUrlConfig, ListFunctionUrlConfig, AddPermission and RemovePermission operations ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RemovePermission = "lambda:RemovePermission",

  /**
   * Tagging - Grants permission to add tags to an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_TagResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  TagResource = "lambda:TagResource",

  /**
   * Tagging - Grants permission to remove tags from an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  UntagResource = "lambda:UntagResource",

  /**
   * Write - Grants permission to update the configuration of an AWS Lambda function's alias
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  UpdateAlias = "lambda:UpdateAlias",

  /**
   * Write - Grants permission to update an AWS Lambda code signing config
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateCodeSigningConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.code signing config `LambdaResource.code signing config`} 
   */
  UpdateCodeSigningConfig = "lambda:UpdateCodeSigningConfig",

  /**
   * Write - Grants permission to update the configuration of an AWS Lambda event source mapping
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.eventSourceMapping `LambdaResource.eventSourceMapping`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:FunctionArn`: Filters access by the ARN of an AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  UpdateEventSourceMapping = "lambda:UpdateEventSourceMapping",

  /**
   * Write - Grants permission to update the code of an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  UpdateFunctionCode = "lambda:UpdateFunctionCode",

  /**
   * Write - Grants permission to update the code signing config of an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCodeSigningConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.code signing config `LambdaResource.code signing config`} 
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  UpdateFunctionCodeSigningConfig = "lambda:UpdateFunctionCodeSigningConfig",

  /**
   * Write - Grants permission to modify the version-specific settings of an AWS Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:Layer`: Filters access by the ARN of a version of an AWS Lambda layer ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `lambda:VpcIds`: Filters access by the ID of the VPC configured for the AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:SubnetIds`: Filters access by the ID of subnets configured for the AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `lambda:SecurityGroupIds`: Filters access by the ID of security groups configured for the AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateFunctionConfiguration = "lambda:UpdateFunctionConfiguration",

  /**
   * Write - Grants permission to modify the configuration for asynchronous invocation for an AWS Lambda function, version, or alias
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   */
  UpdateFunctionEventInvokeConfig = "lambda:UpdateFunctionEventInvokeConfig",

  /**
   * Write - Grants permission to update a function url configuration for a Lambda function
   * @see https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionUrlConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:FunctionUrlAuthType`: Filters access by authorization type specified in request. Available during CreateFunctionUrlConfig, UpdateFunctionUrlConfig, DeleteFunctionUrlConfig, GetFunctionUrlConfig, ListFunctionUrlConfig, AddPermission and RemovePermission operations ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:FunctionArn`: Filters access by the ARN of an AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  UpdateFunctionUrlConfig = "lambda:UpdateFunctionUrlConfig",

  /**
   * * - Grant all lambda permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslambda.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LambdaResource.layerVersion `LambdaResource.layerVersion`} 
   * - {@link LambdaResource.function `LambdaResource.function`} 
   * - {@link LambdaResource.code signing config `LambdaResource.code signing config`} 
   * - {@link LambdaResource.eventSourceMapping `LambdaResource.eventSourceMapping`} 
   * - {@link LambdaResource.function alias `LambdaResource.function alias`} 
   * - {@link LambdaResource.function version `LambdaResource.function version`} 
   * - {@link LambdaResource.layer `LambdaResource.layer`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `lambda:Principal`: Filters access by restricting the AWS service or account that can invoke a function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:FunctionUrlAuthType`: Filters access by authorization type specified in request. Available during CreateFunctionUrlConfig, UpdateFunctionUrlConfig, DeleteFunctionUrlConfig, GetFunctionUrlConfig, ListFunctionUrlConfig, AddPermission and RemovePermission operations ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:FunctionArn`: Filters access by the ARN of an AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `lambda:Layer`: Filters access by the ARN of a version of an AWS Lambda layer ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `lambda:VpcIds`: Filters access by the ID of the VPC configured for the AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `lambda:SubnetIds`: Filters access by the ID of subnets configured for the AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `lambda:SecurityGroupIds`: Filters access by the ID of security groups configured for the AWS Lambda function ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `lambda:CodeSigningConfigArn`: Filters access by the ARN of an AWS Lambda code signing config ({@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "lambda:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslambda.html
 */
export const LambdaResource = {

  /**
   * @see https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   */
  code signing config: (options: Partial<{partition: string, region: string, account: string, codeSigningConfigId: string}> = {}) => `arn:${options.partition || '*'}:lambda:${options.region || '*'}:${options.account || '*'}:code-signing-config:${options.codeSigningConfigId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   */
  eventSourceMapping: (options: Partial<{partition: string, region: string, account: string, uUID: string}> = {}) => `arn:${options.partition || '*'}:lambda:${options.region || '*'}:${options.account || '*'}:event-source-mapping:${options.uUID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   */
  function: (options: Partial<{partition: string, region: string, account: string, functionName: string}> = {}) => `arn:${options.partition || '*'}:lambda:${options.region || '*'}:${options.account || '*'}:function:${options.functionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   */
  function alias: (options: Partial<{partition: string, region: string, account: string, functionName: string, alias: string}> = {}) => `arn:${options.partition || '*'}:lambda:${options.region || '*'}:${options.account || '*'}:function:${options.functionName || '*'}:${options.alias || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   */
  function version: (options: Partial<{partition: string, region: string, account: string, functionName: string, version: string}> = {}) => `arn:${options.partition || '*'}:lambda:${options.region || '*'}:${options.account || '*'}:function:${options.functionName || '*'}:${options.version || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   */
  layer: (options: Partial<{partition: string, region: string, account: string, layerName: string}> = {}) => `arn:${options.partition || '*'}:lambda:${options.region || '*'}:${options.account || '*'}:layer:${options.layerName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   */
  layerVersion: (options: Partial<{partition: string, region: string, account: string, layerName: string, layerVersion: string}> = {}) => `arn:${options.partition || '*'}:lambda:${options.region || '*'}:${options.account || '*'}:layer:${options.layerName || '*'}:${options.layerVersion || '*'}`,
}

