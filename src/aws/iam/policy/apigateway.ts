/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigatewaymanagement.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigatewaymanagementv2.html
 */
export enum ApigatewayAction {

  /**
   * PermissionsManagement - Grants permission to add certificates for mutual TLS authentication to a domain name. This is an additional authorization control for managing the DomainName resource due to the sensitive nature of mTLS
   * @see https://docs.aws.amazon.com/apigateway/api-reference/ADD_CERTIFICATE_TO_DOMAIN.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApigatewayResource.domainName `ApigatewayResource.domainName`} 
   * - {@link ApigatewayResource.domainNames `ApigatewayResource.domainNames`} 
   */
  AddCertificateToDomain = "apigateway:AddCertificateToDomain",

  /**
   * Write - Grants permission to delete a particular resource
   * @see https://docs.aws.amazon.com/apigateway/api-reference/API_DELETE.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApigatewayResource.apiKey `ApigatewayResource.apiKey`} 
   * - {@link ApigatewayResource.authorizer `ApigatewayResource.authorizer`} 
   * - {@link ApigatewayResource.basePathMapping `ApigatewayResource.basePathMapping`} 
   * - {@link ApigatewayResource.clientCertificate `ApigatewayResource.clientCertificate`} 
   * - {@link ApigatewayResource.deployment `ApigatewayResource.deployment`} 
   * - {@link ApigatewayResource.documentationPart `ApigatewayResource.documentationPart`} 
   * - {@link ApigatewayResource.documentationVersion `ApigatewayResource.documentationVersion`} 
   * - {@link ApigatewayResource.domainName `ApigatewayResource.domainName`} 
   * - {@link ApigatewayResource.gatewayResponse `ApigatewayResource.gatewayResponse`} 
   * - {@link ApigatewayResource.integration `ApigatewayResource.integration`} 
   * - {@link ApigatewayResource.integrationResponse `ApigatewayResource.integrationResponse`} 
   * - {@link ApigatewayResource.method `ApigatewayResource.method`} 
   * - {@link ApigatewayResource.methodResponse `ApigatewayResource.methodResponse`} 
   * - {@link ApigatewayResource.model `ApigatewayResource.model`} 
   * - {@link ApigatewayResource.requestValidator `ApigatewayResource.requestValidator`} 
   * - {@link ApigatewayResource.resource `ApigatewayResource.resource`} 
   * - {@link ApigatewayResource.restApi `ApigatewayResource.restApi`} 
   * - {@link ApigatewayResource.stage `ApigatewayResource.stage`} 
   * - {@link ApigatewayResource.template `ApigatewayResource.template`} 
   * - {@link ApigatewayResource.usagePlan `ApigatewayResource.usagePlan`} 
   * - {@link ApigatewayResource.usagePlanKey `ApigatewayResource.usagePlanKey`} 
   * - {@link ApigatewayResource.vpcLink `ApigatewayResource.vpcLink`} 
   * - {@link ApigatewayResource.accessLogSettings `ApigatewayResource.accessLogSettings`} 
   * - {@link ApigatewayResource.api `ApigatewayResource.api`} 
   * - {@link ApigatewayResource.apiMapping `ApigatewayResource.apiMapping`} 
   * - {@link ApigatewayResource.authorizersCache `ApigatewayResource.authorizersCache`} 
   * - {@link ApigatewayResource.cors `ApigatewayResource.cors`} 
   * - {@link ApigatewayResource.route `ApigatewayResource.route`} 
   * - {@link ApigatewayResource.routeRequestParameter `ApigatewayResource.routeRequestParameter`} 
   * - {@link ApigatewayResource.routeResponse `ApigatewayResource.routeResponse`} 
   * - {@link ApigatewayResource.routeSettings `ApigatewayResource.routeSettings`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DELETE = "apigateway:DELETE",

  /**
   * Read - Grants permission to read a particular resource
   * @see https://docs.aws.amazon.com/apigateway/api-reference/API_GET.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApigatewayResource.account `ApigatewayResource.account`} 
   * - {@link ApigatewayResource.apiKey `ApigatewayResource.apiKey`} 
   * - {@link ApigatewayResource.apiKeys `ApigatewayResource.apiKeys`} 
   * - {@link ApigatewayResource.authorizer `ApigatewayResource.authorizer`} 
   * - {@link ApigatewayResource.authorizers `ApigatewayResource.authorizers`} 
   * - {@link ApigatewayResource.basePathMapping `ApigatewayResource.basePathMapping`} 
   * - {@link ApigatewayResource.basePathMappings `ApigatewayResource.basePathMappings`} 
   * - {@link ApigatewayResource.clientCertificate `ApigatewayResource.clientCertificate`} 
   * - {@link ApigatewayResource.clientCertificates `ApigatewayResource.clientCertificates`} 
   * - {@link ApigatewayResource.deployment `ApigatewayResource.deployment`} 
   * - {@link ApigatewayResource.deployments `ApigatewayResource.deployments`} 
   * - {@link ApigatewayResource.documentationPart `ApigatewayResource.documentationPart`} 
   * - {@link ApigatewayResource.documentationParts `ApigatewayResource.documentationParts`} 
   * - {@link ApigatewayResource.documentationVersion `ApigatewayResource.documentationVersion`} 
   * - {@link ApigatewayResource.documentationVersions `ApigatewayResource.documentationVersions`} 
   * - {@link ApigatewayResource.domainName `ApigatewayResource.domainName`} 
   * - {@link ApigatewayResource.domainNames `ApigatewayResource.domainNames`} 
   * - {@link ApigatewayResource.gatewayResponse `ApigatewayResource.gatewayResponse`} 
   * - {@link ApigatewayResource.gatewayResponses `ApigatewayResource.gatewayResponses`} 
   * - {@link ApigatewayResource.integration `ApigatewayResource.integration`} 
   * - {@link ApigatewayResource.integrationResponse `ApigatewayResource.integrationResponse`} 
   * - {@link ApigatewayResource.method `ApigatewayResource.method`} 
   * - {@link ApigatewayResource.methodResponse `ApigatewayResource.methodResponse`} 
   * - {@link ApigatewayResource.model `ApigatewayResource.model`} 
   * - {@link ApigatewayResource.models `ApigatewayResource.models`} 
   * - {@link ApigatewayResource.requestValidator `ApigatewayResource.requestValidator`} 
   * - {@link ApigatewayResource.requestValidators `ApigatewayResource.requestValidators`} 
   * - {@link ApigatewayResource.resource `ApigatewayResource.resource`} 
   * - {@link ApigatewayResource.resources `ApigatewayResource.resources`} 
   * - {@link ApigatewayResource.restApi `ApigatewayResource.restApi`} 
   * - {@link ApigatewayResource.restApis `ApigatewayResource.restApis`} 
   * - {@link ApigatewayResource.sdk `ApigatewayResource.sdk`} 
   * - {@link ApigatewayResource.stage `ApigatewayResource.stage`} 
   * - {@link ApigatewayResource.stages `ApigatewayResource.stages`} 
   * - {@link ApigatewayResource.usagePlan `ApigatewayResource.usagePlan`} 
   * - {@link ApigatewayResource.usagePlanKey `ApigatewayResource.usagePlanKey`} 
   * - {@link ApigatewayResource.usagePlanKeys `ApigatewayResource.usagePlanKeys`} 
   * - {@link ApigatewayResource.usagePlans `ApigatewayResource.usagePlans`} 
   * - {@link ApigatewayResource.vpcLink `ApigatewayResource.vpcLink`} 
   * - {@link ApigatewayResource.vpcLinks `ApigatewayResource.vpcLinks`} 
   * - {@link ApigatewayResource.accessLogSettings `ApigatewayResource.accessLogSettings`} 
   * - {@link ApigatewayResource.api `ApigatewayResource.api`} 
   * - {@link ApigatewayResource.apiMapping `ApigatewayResource.apiMapping`} 
   * - {@link ApigatewayResource.apiMappings `ApigatewayResource.apiMappings`} 
   * - {@link ApigatewayResource.apis `ApigatewayResource.apis`} 
   * - {@link ApigatewayResource.authorizersCache `ApigatewayResource.authorizersCache`} 
   * - {@link ApigatewayResource.cors `ApigatewayResource.cors`} 
   * - {@link ApigatewayResource.exportedAPI `ApigatewayResource.exportedAPI`} 
   * - {@link ApigatewayResource.integrationResponses `ApigatewayResource.integrationResponses`} 
   * - {@link ApigatewayResource.integrations `ApigatewayResource.integrations`} 
   * - {@link ApigatewayResource.modelTemplate `ApigatewayResource.modelTemplate`} 
   * - {@link ApigatewayResource.route `ApigatewayResource.route`} 
   * - {@link ApigatewayResource.routeRequestParameter `ApigatewayResource.routeRequestParameter`} 
   * - {@link ApigatewayResource.routeResponse `ApigatewayResource.routeResponse`} 
   * - {@link ApigatewayResource.routeResponses `ApigatewayResource.routeResponses`} 
   * - {@link ApigatewayResource.routeSettings `ApigatewayResource.routeSettings`} 
   * - {@link ApigatewayResource.routes `ApigatewayResource.routes`} 
   */
  GET = "apigateway:GET",

  /**
   * Write - Grants permission to update a particular resource
   * @see https://docs.aws.amazon.com/apigateway/api-reference/API_PATCH.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApigatewayResource.account `ApigatewayResource.account`} 
   * - {@link ApigatewayResource.apiKey `ApigatewayResource.apiKey`} 
   * - {@link ApigatewayResource.authorizer `ApigatewayResource.authorizer`} 
   * - {@link ApigatewayResource.basePathMapping `ApigatewayResource.basePathMapping`} 
   * - {@link ApigatewayResource.clientCertificate `ApigatewayResource.clientCertificate`} 
   * - {@link ApigatewayResource.deployment `ApigatewayResource.deployment`} 
   * - {@link ApigatewayResource.documentationPart `ApigatewayResource.documentationPart`} 
   * - {@link ApigatewayResource.documentationVersion `ApigatewayResource.documentationVersion`} 
   * - {@link ApigatewayResource.domainName `ApigatewayResource.domainName`} 
   * - {@link ApigatewayResource.gatewayResponse `ApigatewayResource.gatewayResponse`} 
   * - {@link ApigatewayResource.integration `ApigatewayResource.integration`} 
   * - {@link ApigatewayResource.integrationResponse `ApigatewayResource.integrationResponse`} 
   * - {@link ApigatewayResource.method `ApigatewayResource.method`} 
   * - {@link ApigatewayResource.methodResponse `ApigatewayResource.methodResponse`} 
   * - {@link ApigatewayResource.model `ApigatewayResource.model`} 
   * - {@link ApigatewayResource.requestValidator `ApigatewayResource.requestValidator`} 
   * - {@link ApigatewayResource.resource `ApigatewayResource.resource`} 
   * - {@link ApigatewayResource.restApi `ApigatewayResource.restApi`} 
   * - {@link ApigatewayResource.stage `ApigatewayResource.stage`} 
   * - {@link ApigatewayResource.template `ApigatewayResource.template`} 
   * - {@link ApigatewayResource.usagePlan `ApigatewayResource.usagePlan`} 
   * - {@link ApigatewayResource.usagePlanKey `ApigatewayResource.usagePlanKey`} 
   * - {@link ApigatewayResource.vpcLink `ApigatewayResource.vpcLink`} 
   * - {@link ApigatewayResource.api `ApigatewayResource.api`} 
   * - {@link ApigatewayResource.apiMapping `ApigatewayResource.apiMapping`} 
   * - {@link ApigatewayResource.route `ApigatewayResource.route`} 
   * - {@link ApigatewayResource.routeRequestParameter `ApigatewayResource.routeRequestParameter`} 
   * - {@link ApigatewayResource.routeResponse `ApigatewayResource.routeResponse`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PATCH = "apigateway:PATCH",

  /**
   * Write - Grants permission to create a particular resource
   * @see https://docs.aws.amazon.com/apigateway/api-reference/API_POST.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApigatewayResource.apiKeys `ApigatewayResource.apiKeys`} 
   * - {@link ApigatewayResource.authorizers `ApigatewayResource.authorizers`} 
   * - {@link ApigatewayResource.basePathMappings `ApigatewayResource.basePathMappings`} 
   * - {@link ApigatewayResource.clientCertificates `ApigatewayResource.clientCertificates`} 
   * - {@link ApigatewayResource.deployments `ApigatewayResource.deployments`} 
   * - {@link ApigatewayResource.documentationParts `ApigatewayResource.documentationParts`} 
   * - {@link ApigatewayResource.documentationVersions `ApigatewayResource.documentationVersions`} 
   * - {@link ApigatewayResource.domainNames `ApigatewayResource.domainNames`} 
   * - {@link ApigatewayResource.gatewayResponses `ApigatewayResource.gatewayResponses`} 
   * - {@link ApigatewayResource.integrationResponse `ApigatewayResource.integrationResponse`} 
   * - {@link ApigatewayResource.methodResponse `ApigatewayResource.methodResponse`} 
   * - {@link ApigatewayResource.models `ApigatewayResource.models`} 
   * - {@link ApigatewayResource.requestValidators `ApigatewayResource.requestValidators`} 
   * - {@link ApigatewayResource.resources `ApigatewayResource.resources`} 
   * - {@link ApigatewayResource.restApis `ApigatewayResource.restApis`} 
   * - {@link ApigatewayResource.stages `ApigatewayResource.stages`} 
   * - {@link ApigatewayResource.usagePlanKeys `ApigatewayResource.usagePlanKeys`} 
   * - {@link ApigatewayResource.usagePlans `ApigatewayResource.usagePlans`} 
   * - {@link ApigatewayResource.vpcLinks `ApigatewayResource.vpcLinks`} 
   * - {@link ApigatewayResource.apiMappings `ApigatewayResource.apiMappings`} 
   * - {@link ApigatewayResource.apis `ApigatewayResource.apis`} 
   * - {@link ApigatewayResource.integrationResponses `ApigatewayResource.integrationResponses`} 
   * - {@link ApigatewayResource.integrations `ApigatewayResource.integrations`} 
   * - {@link ApigatewayResource.routeResponses `ApigatewayResource.routeResponses`} 
   * - {@link ApigatewayResource.routes `ApigatewayResource.routes`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  POST = "apigateway:POST",

  /**
   * Write - Grants permission to update a particular resource
   * @see https://docs.aws.amazon.com/apigateway/api-reference/API_PUT.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApigatewayResource.documentationPart `ApigatewayResource.documentationPart`} 
   * - {@link ApigatewayResource.gatewayResponse `ApigatewayResource.gatewayResponse`} 
   * - {@link ApigatewayResource.integrationResponse `ApigatewayResource.integrationResponse`} 
   * - {@link ApigatewayResource.methodResponse `ApigatewayResource.methodResponse`} 
   * - {@link ApigatewayResource.restApi `ApigatewayResource.restApi`} 
   * - {@link ApigatewayResource.apis `ApigatewayResource.apis`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PUT = "apigateway:PUT",

  /**
   * PermissionsManagement - Grants permission to remove certificates for mutual TLS authentication from a domain name. This is an additional authorization control for managing the DomainName resource due to the sensitive nature of mTLS
   * @see https://docs.aws.amazon.com/apigateway/api-reference/REMOVE_CERTIFICATE_FROM_DOMAIN.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApigatewayResource.domainName `ApigatewayResource.domainName`} 
   * - {@link ApigatewayResource.domainNames `ApigatewayResource.domainNames`} 
   */
  RemoveCertificateFromDomain = "apigateway:RemoveCertificateFromDomain",

  /**
   * PermissionsManagement - Grants permission set a WAF access control list (ACL). This is an additional authorization control for managing the Stage resource due to the sensitive nature of WebAcl's
   * @see https://docs.aws.amazon.com/apigateway/api-reference/WEBACL_SET.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApigatewayResource.stage `ApigatewayResource.stage`} 
   * - {@link ApigatewayResource.stages `ApigatewayResource.stages`} 
   */
  SetWebACL = "apigateway:SetWebACL",

  /**
   * PermissionsManagement - Grants permission to manage the IAM resource policy for an API. This is an additional authorization control for managing an API due to the sensitive nature of the resource policy
   * @see https://docs.aws.amazon.com/apigateway/api-reference/UPDATE_REST_API_POLICY.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApigatewayResource.restApi `ApigatewayResource.restApi`} 
   * - {@link ApigatewayResource.restApis `ApigatewayResource.restApis`} 
   */
  UpdateRestApiPolicy = "apigateway:UpdateRestApiPolicy",

  /**
   * * - Grant all apigateway permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigatewaymanagement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApigatewayResource.domainName `ApigatewayResource.domainName`} 
   * - {@link ApigatewayResource.domainNames `ApigatewayResource.domainNames`} 
   * - {@link ApigatewayResource.apiKey `ApigatewayResource.apiKey`} 
   * - {@link ApigatewayResource.authorizer `ApigatewayResource.authorizer`} 
   * - {@link ApigatewayResource.basePathMapping `ApigatewayResource.basePathMapping`} 
   * - {@link ApigatewayResource.clientCertificate `ApigatewayResource.clientCertificate`} 
   * - {@link ApigatewayResource.deployment `ApigatewayResource.deployment`} 
   * - {@link ApigatewayResource.documentationPart `ApigatewayResource.documentationPart`} 
   * - {@link ApigatewayResource.documentationVersion `ApigatewayResource.documentationVersion`} 
   * - {@link ApigatewayResource.gatewayResponse `ApigatewayResource.gatewayResponse`} 
   * - {@link ApigatewayResource.integration `ApigatewayResource.integration`} 
   * - {@link ApigatewayResource.integrationResponse `ApigatewayResource.integrationResponse`} 
   * - {@link ApigatewayResource.method `ApigatewayResource.method`} 
   * - {@link ApigatewayResource.methodResponse `ApigatewayResource.methodResponse`} 
   * - {@link ApigatewayResource.model `ApigatewayResource.model`} 
   * - {@link ApigatewayResource.requestValidator `ApigatewayResource.requestValidator`} 
   * - {@link ApigatewayResource.resource `ApigatewayResource.resource`} 
   * - {@link ApigatewayResource.restApi `ApigatewayResource.restApi`} 
   * - {@link ApigatewayResource.stage `ApigatewayResource.stage`} 
   * - {@link ApigatewayResource.template `ApigatewayResource.template`} 
   * - {@link ApigatewayResource.usagePlan `ApigatewayResource.usagePlan`} 
   * - {@link ApigatewayResource.usagePlanKey `ApigatewayResource.usagePlanKey`} 
   * - {@link ApigatewayResource.vpcLink `ApigatewayResource.vpcLink`} 
   * - {@link ApigatewayResource.accessLogSettings `ApigatewayResource.accessLogSettings`} 
   * - {@link ApigatewayResource.api `ApigatewayResource.api`} 
   * - {@link ApigatewayResource.apiMapping `ApigatewayResource.apiMapping`} 
   * - {@link ApigatewayResource.authorizersCache `ApigatewayResource.authorizersCache`} 
   * - {@link ApigatewayResource.cors `ApigatewayResource.cors`} 
   * - {@link ApigatewayResource.route `ApigatewayResource.route`} 
   * - {@link ApigatewayResource.routeRequestParameter `ApigatewayResource.routeRequestParameter`} 
   * - {@link ApigatewayResource.routeResponse `ApigatewayResource.routeResponse`} 
   * - {@link ApigatewayResource.routeSettings `ApigatewayResource.routeSettings`} 
   * - {@link ApigatewayResource.account `ApigatewayResource.account`} 
   * - {@link ApigatewayResource.apiKeys `ApigatewayResource.apiKeys`} 
   * - {@link ApigatewayResource.authorizers `ApigatewayResource.authorizers`} 
   * - {@link ApigatewayResource.basePathMappings `ApigatewayResource.basePathMappings`} 
   * - {@link ApigatewayResource.clientCertificates `ApigatewayResource.clientCertificates`} 
   * - {@link ApigatewayResource.deployments `ApigatewayResource.deployments`} 
   * - {@link ApigatewayResource.documentationParts `ApigatewayResource.documentationParts`} 
   * - {@link ApigatewayResource.documentationVersions `ApigatewayResource.documentationVersions`} 
   * - {@link ApigatewayResource.gatewayResponses `ApigatewayResource.gatewayResponses`} 
   * - {@link ApigatewayResource.models `ApigatewayResource.models`} 
   * - {@link ApigatewayResource.requestValidators `ApigatewayResource.requestValidators`} 
   * - {@link ApigatewayResource.resources `ApigatewayResource.resources`} 
   * - {@link ApigatewayResource.restApis `ApigatewayResource.restApis`} 
   * - {@link ApigatewayResource.sdk `ApigatewayResource.sdk`} 
   * - {@link ApigatewayResource.stages `ApigatewayResource.stages`} 
   * - {@link ApigatewayResource.usagePlanKeys `ApigatewayResource.usagePlanKeys`} 
   * - {@link ApigatewayResource.usagePlans `ApigatewayResource.usagePlans`} 
   * - {@link ApigatewayResource.vpcLinks `ApigatewayResource.vpcLinks`} 
   * - {@link ApigatewayResource.apiMappings `ApigatewayResource.apiMappings`} 
   * - {@link ApigatewayResource.apis `ApigatewayResource.apis`} 
   * - {@link ApigatewayResource.exportedAPI `ApigatewayResource.exportedAPI`} 
   * - {@link ApigatewayResource.integrationResponses `ApigatewayResource.integrationResponses`} 
   * - {@link ApigatewayResource.integrations `ApigatewayResource.integrations`} 
   * - {@link ApigatewayResource.modelTemplate `ApigatewayResource.modelTemplate`} 
   * - {@link ApigatewayResource.routeResponses `ApigatewayResource.routeResponses`} 
   * - {@link ApigatewayResource.routes `ApigatewayResource.routes`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "apigateway:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigatewaymanagement.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigatewaymanagementv2.html
 */
export const ApigatewayResource = {

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  account: (options: Partial<{partition: string, region: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/account`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  apiKey: (options: Partial<{partition: string, region: string, apiKeyId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apikeys/${options.apiKeyId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  apiKeys: (options: Partial<{partition: string, region: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apikeys`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/AuthorizerType`: Filters access by type of authorizer in the request, for example TOKEN, REQUEST, JWT. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/AuthorizerUri`: Filters access by URI of a Lambda authorizer function. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/AuthorizerType`: Filters access by the current type of authorizer, for example TOKEN, REQUEST, JWT. Available during UpdateAuthorizer and DeleteAuthorizer operations. Also available during reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/AuthorizerUri`: Filters access by URI of a Lambda authorizer function. Available during UpdateAuthorizer and DeleteAuthorizer operations. Also available during reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  authorizer: (options: Partial<{partition: string, region: string, restApiId: string, authorizerId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/authorizers/${options.authorizerId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/AuthorizerType`: Filters access by type of authorizer in the request, for example TOKEN, REQUEST, JWT. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/AuthorizerUri`: Filters access by URI of a Lambda authorizer function. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  authorizers: (options: Partial<{partition: string, region: string, restApiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/authorizers`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  basePathMapping: (options: Partial<{partition: string, region: string, domainName: string, basePath: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/domainnames/${options.domainName || '*'}/basepathmappings/${options.basePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  basePathMappings: (options: Partial<{partition: string, region: string, domainName: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/domainnames/${options.domainName || '*'}/basepathmappings`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  clientCertificate: (options: Partial<{partition: string, region: string, clientCertificateId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/clientcertificates/${options.clientCertificateId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  clientCertificates: (options: Partial<{partition: string, region: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/clientcertificates`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deployment: (options: Partial<{partition: string, region: string, restApiId: string, deploymentId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/deployments/${options.deploymentId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/StageName`: Filters access by stage name of the deployment that you attempt to create. Available during the CreateDeployment operation ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deployments: (options: Partial<{partition: string, region: string, restApiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/deployments`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  documentationPart: (options: Partial<{partition: string, region: string, restApiId: string, documentationPartId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/documentation/parts/${options.documentationPartId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  documentationParts: (options: Partial<{partition: string, region: string, restApiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/documentation/parts`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  documentationVersion: (options: Partial<{partition: string, region: string, restApiId: string, documentationVersionId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/documentation/versions/${options.documentationVersionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  documentationVersions: (options: Partial<{partition: string, region: string, restApiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/documentation/versions`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/EndpointType`: Filters access by endpoint type. Available during the CreateDomainName, UpdateDomainName, CreateRestApi, and UpdateRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/MtlsTrustStoreUri`: Filters access by URI of the truststore used for mutual TLS authentication. Available during the CreateDomainName and UpdateDomainName operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Request/MtlsTrustStoreVersion`: Filters access by version of the truststore used for mutual TLS authentication. Available during the CreateDomainName and UpdateDomainName operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Request/SecurityPolicy`: Filters access by TLS version. Available during the CreateDomain and UpdateDomain operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/EndpointType`: Filters access by endpoint type. Available during the UpdateDomainName, DeleteDomainName, UpdateRestApi, and DeleteRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/MtlsTrustStoreUri`: Filters access by URI of the truststore used for mutual TLS authentication. Available during UpdateDomainName and DeleteDomainName operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Resource/MtlsTrustStoreVersion`: Filters access by version of the truststore used for mutual TLS authentication. Available during UpdateDomainName and DeleteDomainName operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Resource/SecurityPolicy`: Filters access by TLS version. Available during UpdateDomain and DeleteDomain operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  domainName: (options: Partial<{partition: string, region: string, domainName: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/domainnames/${options.domainName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/EndpointType`: Filters access by endpoint type. Available during the CreateDomainName, UpdateDomainName, CreateRestApi, and UpdateRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/MtlsTrustStoreUri`: Filters access by URI of the truststore used for mutual TLS authentication. Available during the CreateDomainName and UpdateDomainName operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Request/MtlsTrustStoreVersion`: Filters access by version of the truststore used for mutual TLS authentication. Available during the CreateDomainName and UpdateDomainName operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Request/SecurityPolicy`: Filters access by TLS version. Available during the CreateDomain and UpdateDomain operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  domainNames: (options: Partial<{partition: string, region: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/domainnames`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  gatewayResponse: (options: Partial<{partition: string, region: string, restApiId: string, responseType: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/gatewayresponses/${options.responseType || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  gatewayResponses: (options: Partial<{partition: string, region: string, restApiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/gatewayresponses`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  integration: (options: Partial<{partition: string, region: string, restApiId: string, resourceId: string, httpMethodType: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/resources/${options.resourceId || '*'}/methods/${options.httpMethodType || '*'}/integration`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  integrationResponse: (options: Partial<{partition: string, region: string, restApiId: string, resourceId: string, httpMethodType: string, statusCode: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/resources/${options.resourceId || '*'}/methods/${options.httpMethodType || '*'}/integration/responses/${options.statusCode || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/ApiKeyRequired`: Filters access based on whether an API key is required or not. Available during the CreateMethod and PutMethod operations. Also available as a collection during import and reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfBool `ArrayOfBool`})
   * - `apigateway:Request/RouteAuthorizationType`: Filters access by authorization type, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the CreateMethod and PutMethod operations Also available as a collection during import ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/ApiKeyRequired`: Filters access based on whether an API key is required or not for the existing Method resource. Available during the PutMethod and DeleteMethod operations. Also available as a collection during reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfBool `ArrayOfBool`})
   * - `apigateway:Resource/RouteAuthorizationType`: Filters access by authorization type of the existing Method resource, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the PutMethod and DeleteMethod operations. Also available as a collection during reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  method: (options: Partial<{partition: string, region: string, restApiId: string, resourceId: string, httpMethodType: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/resources/${options.resourceId || '*'}/methods/${options.httpMethodType || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  methodResponse: (options: Partial<{partition: string, region: string, restApiId: string, resourceId: string, httpMethodType: string, statusCode: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/resources/${options.resourceId || '*'}/methods/${options.httpMethodType || '*'}/responses/${options.statusCode || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  model: (options: Partial<{partition: string, region: string, restApiId: string, modelName: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/models/${options.modelName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  models: (options: Partial<{partition: string, region: string, restApiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/models`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  requestValidator: (options: Partial<{partition: string, region: string, restApiId: string, requestValidatorId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/requestvalidators/${options.requestValidatorId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  requestValidators: (options: Partial<{partition: string, region: string, restApiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/requestvalidators`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  resource: (options: Partial<{partition: string, region: string, restApiId: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/resources/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  resources: (options: Partial<{partition: string, region: string, restApiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/resources`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/ApiKeyRequired`: Filters access based on whether an API key is required or not. Available during the CreateMethod and PutMethod operations. Also available as a collection during import and reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfBool `ArrayOfBool`})
   * - `apigateway:Request/ApiName`: Filters access by API name. Available during the CreateRestApi and UpdateRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Request/AuthorizerType`: Filters access by type of authorizer in the request, for example TOKEN, REQUEST, JWT. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/AuthorizerUri`: Filters access by URI of a Lambda authorizer function. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/DisableExecuteApiEndpoint`: Filters access by status of the default execute-api endpoint. Available during the CreateRestApi and DeleteRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `apigateway:Request/EndpointType`: Filters access by endpoint type. Available during the CreateDomainName, UpdateDomainName, CreateRestApi, and UpdateRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/RouteAuthorizationType`: Filters access by authorization type, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the CreateMethod and PutMethod operations Also available as a collection during import ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/ApiKeyRequired`: Filters access based on whether an API key is required or not for the existing Method resource. Available during the PutMethod and DeleteMethod operations. Also available as a collection during reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfBool `ArrayOfBool`})
   * - `apigateway:Resource/ApiName`: Filters access by API name of the existing RestApi resource. Available during UpdateRestApi and DeleteRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Resource/AuthorizerType`: Filters access by the current type of authorizer, for example TOKEN, REQUEST, JWT. Available during UpdateAuthorizer and DeleteAuthorizer operations. Also available during reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/AuthorizerUri`: Filters access by URI of a Lambda authorizer function. Available during UpdateAuthorizer and DeleteAuthorizer operations. Also available during reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/DisableExecuteApiEndpoint`: Filters access by status of the default execute-api endpoint of the current RestApi resource. Available during UpdateRestApi and DeleteRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `apigateway:Resource/EndpointType`: Filters access by endpoint type. Available during the UpdateDomainName, DeleteDomainName, UpdateRestApi, and DeleteRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/RouteAuthorizationType`: Filters access by authorization type of the existing Method resource, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the PutMethod and DeleteMethod operations. Also available as a collection during reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  restApi: (options: Partial<{partition: string, region: string, restApiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/ApiKeyRequired`: Filters access based on whether an API key is required or not. Available during the CreateMethod and PutMethod operations. Also available as a collection during import and reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfBool `ArrayOfBool`})
   * - `apigateway:Request/ApiName`: Filters access by API name. Available during the CreateRestApi and UpdateRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Request/AuthorizerType`: Filters access by type of authorizer in the request, for example TOKEN, REQUEST, JWT. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/AuthorizerUri`: Filters access by URI of a Lambda authorizer function. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/DisableExecuteApiEndpoint`: Filters access by status of the default execute-api endpoint. Available during the CreateRestApi and DeleteRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `apigateway:Request/EndpointType`: Filters access by endpoint type. Available during the CreateDomainName, UpdateDomainName, CreateRestApi, and UpdateRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/RouteAuthorizationType`: Filters access by authorization type, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the CreateMethod and PutMethod operations Also available as a collection during import ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  restApis: (options: Partial<{partition: string, region: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  sdk: (options: Partial<{partition: string, region: string, restApiId: string, stageName: string, sdkType: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/stages/${options.stageName || '*'}/sdks/${options.sdkType || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/AccessLoggingDestination`: Filters access by access log destination. Available during the CreateStage and UpdateStage operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Request/AccessLoggingFormat`: Filters access by access log format. Available during the CreateStage and UpdateStage operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Resource/AccessLoggingDestination`: Filters access by access log destination of the current Stage resource. Available during the UpdateStage and DeleteStage operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Resource/AccessLoggingFormat`: Filters access by access log format of the current Stage resource. Available during the UpdateStage and DeleteStage operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  stage: (options: Partial<{partition: string, region: string, restApiId: string, stageName: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/stages/${options.stageName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/AccessLoggingDestination`: Filters access by access log destination. Available during the CreateStage and UpdateStage operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Request/AccessLoggingFormat`: Filters access by access log format. Available during the CreateStage and UpdateStage operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  stages: (options: Partial<{partition: string, region: string, restApiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/${options.restApiId || '*'}/stages`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  template: (options: Partial<{partition: string, region: string, modelName: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/restapis/models/${options.modelName || '*'}/template`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  usagePlan: (options: Partial<{partition: string, region: string, usagePlanId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/usageplans/${options.usagePlanId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  usagePlans: (options: Partial<{partition: string, region: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/usageplans`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  usagePlanKey: (options: Partial<{partition: string, region: string, usagePlanId: string, id: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/usageplans/${options.usagePlanId || '*'}/keys/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  usagePlanKeys: (options: Partial<{partition: string, region: string, usagePlanId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/usageplans/${options.usagePlanId || '*'}/keys`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  vpcLink: (options: Partial<{partition: string, region: string, vpcLinkId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/vpclinks/${options.vpcLinkId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  vpcLinks: (options: Partial<{partition: string, region: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/vpclinks`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  accessLogSettings: (options: Partial<{partition: string, region: string, apiId: string, stageName: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/stages/${options.stageName || '*'}/accesslogsettings`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/ApiKeyRequired`: Filters access based on whether an API key is required or not. Available during the CreateMethod and PutMethod operations. Also available as a collection during import and reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfBool `ArrayOfBool`})
   * - `apigateway:Request/ApiName`: Filters access by API name. Available during the CreateRestApi and UpdateRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Request/AuthorizerType`: Filters access by type of authorizer in the request, for example TOKEN, REQUEST, JWT. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/AuthorizerUri`: Filters access by URI of a Lambda authorizer function. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/DisableExecuteApiEndpoint`: Filters access by status of the default execute-api endpoint. Available during the CreateRestApi and DeleteRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `apigateway:Request/EndpointType`: Filters access by endpoint type. Available during the CreateDomainName, UpdateDomainName, CreateRestApi, and UpdateRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/RouteAuthorizationType`: Filters access by authorization type, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the CreateMethod and PutMethod operations Also available as a collection during import ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/ApiKeyRequired`: Filters access based on whether an API key is required or not for the existing Method resource. Available during the PutMethod and DeleteMethod operations. Also available as a collection during reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfBool `ArrayOfBool`})
   * - `apigateway:Resource/ApiName`: Filters access by API name of the existing RestApi resource. Available during UpdateRestApi and DeleteRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Resource/AuthorizerType`: Filters access by the current type of authorizer, for example TOKEN, REQUEST, JWT. Available during UpdateAuthorizer and DeleteAuthorizer operations. Also available during reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/AuthorizerUri`: Filters access by URI of a Lambda authorizer function. Available during UpdateAuthorizer and DeleteAuthorizer operations. Also available during reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/DisableExecuteApiEndpoint`: Filters access by status of the default execute-api endpoint of the current RestApi resource. Available during UpdateRestApi and DeleteRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `apigateway:Resource/EndpointType`: Filters access by endpoint type. Available during the UpdateDomainName, DeleteDomainName, UpdateRestApi, and DeleteRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/RouteAuthorizationType`: Filters access by authorization type of the existing Method resource, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the PutMethod and DeleteMethod operations. Also available as a collection during reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  api: (options: Partial<{partition: string, region: string, apiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/ApiKeyRequired`: Filters access based on whether an API key is required or not. Available during the CreateMethod and PutMethod operations. Also available as a collection during import and reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfBool `ArrayOfBool`})
   * - `apigateway:Request/ApiName`: Filters access by API name. Available during the CreateRestApi and UpdateRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `apigateway:Request/AuthorizerType`: Filters access by type of authorizer in the request, for example TOKEN, REQUEST, JWT. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/AuthorizerUri`: Filters access by URI of a Lambda authorizer function. Available during CreateAuthorizer and UpdateAuthorizer. Also available during import and reimport as an ArrayOfString ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/DisableExecuteApiEndpoint`: Filters access by status of the default execute-api endpoint. Available during the CreateRestApi and DeleteRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `apigateway:Request/EndpointType`: Filters access by endpoint type. Available during the CreateDomainName, UpdateDomainName, CreateRestApi, and UpdateRestApi operations ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Request/RouteAuthorizationType`: Filters access by authorization type, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the CreateMethod and PutMethod operations Also available as a collection during import ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  apis: (options: Partial<{partition: string, region: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  apiMapping: (options: Partial<{partition: string, region: string, domainName: string, apiMappingId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/domainnames/${options.domainName || '*'}/apimappings/${options.apiMappingId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  apiMappings: (options: Partial<{partition: string, region: string, domainName: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/domainnames/${options.domainName || '*'}/apimappings`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  authorizersCache: (options: Partial<{partition: string, region: string, apiId: string, stageName: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/stages/${options.stageName || '*'}/cache/authorizers`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  cors: (options: Partial<{partition: string, region: string, apiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/cors`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  exportedAPI: (options: Partial<{partition: string, region: string, apiId: string, specification: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/exports/${options.specification || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  integrations: (options: Partial<{partition: string, region: string, apiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/integrations`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  integrationResponses: (options: Partial<{partition: string, region: string, apiId: string, integrationId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/integrations/${options.integrationId || '*'}/integrationresponses`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  modelTemplate: (options: Partial<{partition: string, region: string, apiId: string, modelId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/models/${options.modelId || '*'}/template`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/ApiKeyRequired`: Filters access based on whether an API key is required or not. Available during the CreateMethod and PutMethod operations. Also available as a collection during import and reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfBool `ArrayOfBool`})
   * - `apigateway:Request/RouteAuthorizationType`: Filters access by authorization type, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the CreateMethod and PutMethod operations Also available as a collection during import ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apigateway:Resource/ApiKeyRequired`: Filters access based on whether an API key is required or not for the existing Method resource. Available during the PutMethod and DeleteMethod operations. Also available as a collection during reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfBool `ArrayOfBool`})
   * - `apigateway:Resource/RouteAuthorizationType`: Filters access by authorization type of the existing Method resource, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the PutMethod and DeleteMethod operations. Also available as a collection during reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  route: (options: Partial<{partition: string, region: string, apiId: string, routeId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/routes/${options.routeId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apigateway:Request/ApiKeyRequired`: Filters access based on whether an API key is required or not. Available during the CreateMethod and PutMethod operations. Also available as a collection during import and reimport ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfBool `ArrayOfBool`})
   * - `apigateway:Request/RouteAuthorizationType`: Filters access by authorization type, for example NONE, AWS_IAM, CUSTOM, JWT, COGNITO_USER_POOLS. Available during the CreateMethod and PutMethod operations Also available as a collection during import ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  routes: (options: Partial<{partition: string, region: string, apiId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/routes`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  routeResponse: (options: Partial<{partition: string, region: string, apiId: string, routeId: string, routeResponseId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/routes/${options.routeId || '*'}/routeresponses/${options.routeResponseId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  routeResponses: (options: Partial<{partition: string, region: string, apiId: string, routeId: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/routes/${options.routeId || '*'}/routeresponses`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  routeRequestParameter: (options: Partial<{partition: string, region: string, apiId: string, routeId: string, requestParameterKey: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/routes/${options.routeId || '*'}/requestparameters/${options.requestParameterKey || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   */
  routeSettings: (options: Partial<{partition: string, region: string, apiId: string, stageName: string, routeKey: string}> = {}) => `arn:${options.partition || '*'}:apigateway:${options.region || '*'}::/apis/${options.apiId || '*'}/stages/${options.stageName || '*'}/routesettings/${options.routeKey || '*'}`,
}

