/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmicroserviceextractorfor.net.html
 */
export enum ServiceextractAction {

  /**
   * Read - Grants permission to get required configuration for the AWS Microservice Extractor for .NET desktop client
   * @see https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  GetConfig = "serviceextract:GetConfig",

  /**
   * * - Grant all serviceextract permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmicroserviceextractorfor.net.html
   */
  All = "serviceextract:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmicroserviceextractorfor.net.html
 */
export const ServiceextractResource = {
}

