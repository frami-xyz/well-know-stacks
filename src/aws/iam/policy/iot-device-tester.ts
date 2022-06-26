/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotdevicetester.html
 */
export enum IotDeviceTesterAction {

  /**
   * Read - Grants permission for IoT Device Tester to check if a given set of product, test suite and device tester version are compatible
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  CheckVersion = "iot-device-tester:CheckVersion",

  /**
   * Read - Grants permission for IoT Device Tester to download compatible test suite versions
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  DownloadTestSuite = "iot-device-tester:DownloadTestSuite",

  /**
   * Read - Grants permission for IoT Device Tester to get information on latest version of device tester available
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  LatestIdt = "iot-device-tester:LatestIdt",

  /**
   * Write - Grants permissions for IoT Device Tester to send usage metrics on your behalf
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  SendMetrics = "iot-device-tester:SendMetrics",

  /**
   * Read - Grants permission for IoT Device Tester to get list of supported products and test suite versions
   * @see https://docs.aws.amazon.com/freertos/latest/userguide/dev-tester-prereqs.html
   */
  SupportedVersion = "iot-device-tester:SupportedVersion",

  /**
   * * - Grant all iot-device-tester permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotdevicetester.html
   */
  All = "iot-device-tester:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotdevicetester.html
 */
export const IotDeviceTesterResource = {
}

