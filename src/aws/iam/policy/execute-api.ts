/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigateway.html
 */
export enum ExecuteApiAction {

  /**
   * Write - Used to invalidate API cache upon a client request
   * @see https://docs.aws.amazon.com/apigateway/api-reference/api-gateway-caching.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ExecuteApiResource.executeApiGeneral `ExecuteApiResource.executeApiGeneral`} 
   */
  InvalidateCache = "execute-api:InvalidateCache",

  /**
   * Write - Used to invoke an API upon a client request
   * @see https://docs.aws.amazon.com/apigateway/api-reference/how-to-call-api.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ExecuteApiResource.executeApiGeneral `ExecuteApiResource.executeApiGeneral`} 
   */
  Invoke = "execute-api:Invoke",

  /**
   * Write - ManageConnections controls access to the @connections API
   * @see https://docs.aws.amazon.com/apigateway/api-reference/apigateway-websocket-control-access-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ExecuteApiResource.executeApiGeneral `ExecuteApiResource.executeApiGeneral`} 
   */
  ManageConnections = "execute-api:ManageConnections",

  /**
   * * - Grant all execute-api permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ExecuteApiResource.executeApiGeneral `ExecuteApiResource.executeApiGeneral`} 
   */
  All = "execute-api:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigateway.html
 */
export const ExecuteApiResource = {

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigateway.html
   */
  executeApiGeneral: (options: Partial<{partition: string, region: string, account: string, apiId: string, stage: string, method: string, apiSpecificResourcePath: string}> = {}) => `arn:${options.partition || '*'}:execute-api:${options.region || '*'}:${options.account || '*'}:${options.apiId || '*'}/${options.stage || '*'}/${options.method || '*'}/${options.apiSpecificResourcePath || '*'}`,
}

