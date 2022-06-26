/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanager.html
 */
export enum LicenseManagerAction {

  /**
   * Write - Grants permission to accept a grant
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_AcceptGrant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.grant `LicenseManagerResource.grant`} 
   */
  AcceptGrant = "license-manager:AcceptGrant",

  /**
   * Write - Grants permission to check in license entitlements back to pool
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckInLicense.html
   */
  CheckInLicense = "license-manager:CheckInLicense",

  /**
   * Write - Grants permission to check out license entitlements for borrow use case
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckoutBorrowLicense.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.license `LicenseManagerResource.license`} 
   */
  CheckoutBorrowLicense = "license-manager:CheckoutBorrowLicense",

  /**
   * Write - Grants permission to check out license entitlements
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckoutLicense.html
   */
  CheckoutLicense = "license-manager:CheckoutLicense",

  /**
   * Write - Grants permission to create a new grant for license
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateGrant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.license `LicenseManagerResource.license`} 
   */
  CreateGrant = "license-manager:CreateGrant",

  /**
   * Write - Grants permission to create new version of grant
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateGrantVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.grant `LicenseManagerResource.grant`} 
   */
  CreateGrantVersion = "license-manager:CreateGrantVersion",

  /**
   * Write - Grants permission to create a new license
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicense.html
   */
  CreateLicense = "license-manager:CreateLicense",

  /**
   * Write - Grants permission to create a new license configuration
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLicenseConfiguration = "license-manager:CreateLicenseConfiguration",

  /**
   * Write - Grants permission to create a license conversion task for a resource
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseConversionTaskForResource.html
   */
  CreateLicenseConversionTaskForResource = "license-manager:CreateLicenseConversionTaskForResource",

  /**
   * Write - Grants permission to create a report generator for a license configuration
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseManagerReportGenerator.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLicenseManagerReportGenerator = "license-manager:CreateLicenseManagerReportGenerator",

  /**
   * Write - Grants permission to create new version of license
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.license `LicenseManagerResource.license`} 
   */
  CreateLicenseVersion = "license-manager:CreateLicenseVersion",

  /**
   * Write - Grants permission to create a new token for license
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateToken.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.license `LicenseManagerResource.license`} 
   */
  CreateToken = "license-manager:CreateToken",

  /**
   * Write - Grants permission to delete a grant
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteGrant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.grant `LicenseManagerResource.grant`} 
   */
  DeleteGrant = "license-manager:DeleteGrant",

  /**
   * Write - Grants permission to delete a license
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicense.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.license `LicenseManagerResource.license`} 
   */
  DeleteLicense = "license-manager:DeleteLicense",

  /**
   * Write - Grants permission to permanently delete a license configuration
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicenseConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   */
  DeleteLicenseConfiguration = "license-manager:DeleteLicenseConfiguration",

  /**
   * Write - Grants permission to delete a report generator
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicenseManagerReportGenerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.reportGenerator `LicenseManagerResource.reportGenerator`} 
   */
  DeleteLicenseManagerReportGenerator = "license-manager:DeleteLicenseManagerReportGenerator",

  /**
   * Write - Grants permission to delete token
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteToken.html
   */
  DeleteToken = "license-manager:DeleteToken",

  /**
   * Write - Grants permission to extend consumption period of already checkout license entitlements
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ExtendLicenseConsumption.html
   */
  ExtendLicenseConsumption = "license-manager:ExtendLicenseConsumption",

  /**
   * Read - Grants permission to get access token
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetAccessToken.html
   */
  GetAccessToken = "license-manager:GetAccessToken",

  /**
   * Read - Grants permission to get a grant
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetGrant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.grant `LicenseManagerResource.grant`} 
   */
  GetGrant = "license-manager:GetGrant",

  /**
   * Read - Grants permission to get a license
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicense.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.license `LicenseManagerResource.license`} 
   */
  GetLicense = "license-manager:GetLicense",

  /**
   * Read - Grants permission to get a license configuration
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   */
  GetLicenseConfiguration = "license-manager:GetLicenseConfiguration",

  /**
   * Read - Grants permission to retrieve a license conversion task
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseConversionTask.html
   */
  GetLicenseConversionTask = "license-manager:GetLicenseConversionTask",

  /**
   * Read - Grants permission to get a report generator
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseManagerReportGenerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.reportGenerator `LicenseManagerResource.reportGenerator`} 
   */
  GetLicenseManagerReportGenerator = "license-manager:GetLicenseManagerReportGenerator",

  /**
   * Read - Grants permission to get a license usage
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseUsage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.license `LicenseManagerResource.license`} 
   */
  GetLicenseUsage = "license-manager:GetLicenseUsage",

  /**
   * List - Grants permission to get service settings
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetServiceSettings.html
   */
  GetServiceSettings = "license-manager:GetServiceSettings",

  /**
   * List - Grants permission to list associations for a selected license configuration
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListAssociationsForLicenseConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   */
  ListAssociationsForLicenseConfiguration = "license-manager:ListAssociationsForLicenseConfiguration",

  /**
   * List - Grants permission to list distributed grants
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListDistributedGrants.html
   */
  ListDistributedGrants = "license-manager:ListDistributedGrants",

  /**
   * List - Grants permission to list the license configuration operations that failed
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListFailuresForLicenseConfigurationOperations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   */
  ListFailuresForLicenseConfigurationOperations = "license-manager:ListFailuresForLicenseConfigurationOperations",

  /**
   * Read - Grants permission to list license configurations
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseConfigurations.html
   */
  ListLicenseConfigurations = "license-manager:ListLicenseConfigurations",

  /**
   * List - Grants permission to list license conversion tasks
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseConversionTasks.html
   */
  ListLicenseConversionTasks = "license-manager:ListLicenseConversionTasks",

  /**
   * List - Grants permission to list report generators
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseManagerReportGenerators.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   */
  ListLicenseManagerReportGenerators = "license-manager:ListLicenseManagerReportGenerators",

  /**
   * List - Grants permission to list license specifications associated with a selected resource
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseSpecificationsForResource.html
   */
  ListLicenseSpecificationsForResource = "license-manager:ListLicenseSpecificationsForResource",

  /**
   * List - Grants permission to list license versions
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.license `LicenseManagerResource.license`} 
   */
  ListLicenseVersions = "license-manager:ListLicenseVersions",

  /**
   * Read - Grants permission to list licenses
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenses.html
   */
  ListLicenses = "license-manager:ListLicenses",

  /**
   * List - Grants permission to list received grants
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedGrants.html
   */
  ListReceivedGrants = "license-manager:ListReceivedGrants",

  /**
   * List - Grants permission to list received licenses
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedLicenses.html
   */
  ListReceivedLicenses = "license-manager:ListReceivedLicenses",

  /**
   * List - Grants permission to list resource inventory
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListResourceInventory.html
   */
  ListResourceInventory = "license-manager:ListResourceInventory",

  /**
   * Read - Grants permission to list tags for a selected resource
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   */
  ListTagsForResource = "license-manager:ListTagsForResource",

  /**
   * List - Grants permission to list tokens
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTokens.html
   */
  ListTokens = "license-manager:ListTokens",

  /**
   * List - Grants permission to list usage records for selected license configuration
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListUsageForLicenseConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   */
  ListUsageForLicenseConfiguration = "license-manager:ListUsageForLicenseConfiguration",

  /**
   * Write - Grants permission to reject a grant
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_RejectGrant.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.grant `LicenseManagerResource.grant`} 
   */
  RejectGrant = "license-manager:RejectGrant",

  /**
   * Tagging - Grants permission to tag a selected resource
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "license-manager:TagResource",

  /**
   * Tagging - Grants permission to untag a selected resource
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   */
  UntagResource = "license-manager:UntagResource",

  /**
   * Write - Grants permission to update an existing license configuration
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   */
  UpdateLicenseConfiguration = "license-manager:UpdateLicenseConfiguration",

  /**
   * Write - Grants permission to update a report generator for a license configuration
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseManagerReportGenerator.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.reportGenerator `LicenseManagerResource.reportGenerator`} 
   */
  UpdateLicenseManagerReportGenerator = "license-manager:UpdateLicenseManagerReportGenerator",

  /**
   * Write - Grants permission to updates license specifications for a selected resource
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseSpecificationsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   */
  UpdateLicenseSpecificationsForResource = "license-manager:UpdateLicenseSpecificationsForResource",

  /**
   * PermissionsManagement - Grants permission to updates service settings
   * @see https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateServiceSettings.html
   */
  UpdateServiceSettings = "license-manager:UpdateServiceSettings",

  /**
   * * - Grant all license-manager permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LicenseManagerResource.grant `LicenseManagerResource.grant`} 
   * - {@link LicenseManagerResource.license `LicenseManagerResource.license`} 
   * - {@link LicenseManagerResource.licenseConfiguration `LicenseManagerResource.licenseConfiguration`} 
   * - {@link LicenseManagerResource.reportGenerator `LicenseManagerResource.reportGenerator`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "license-manager:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanager.html
 */
export const LicenseManagerResource = {

  /**
   * @see https://docs.aws.amazon.com/license-manager/latest/userguide/license-configurations.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `license-manager:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  licenseConfiguration: (options: Partial<{partition: string, region: string, account: string, licenseConfigurationId: string}> = {}) => `arn:${options.partition || '*'}:license-manager:${options.region || '*'}:${options.account || '*'}:license-configuration:${options.licenseConfigurationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/license-manager/latest/userguide/seller-issued-licenses.html
   */
  license: (options: Partial<{partition: string, account: string, licenseId: string}> = {}) => `arn:${options.partition || '*'}:license-manager::${options.account || '*'}:license:${options.licenseId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html
   */
  grant: (options: Partial<{partition: string, account: string, grantId: string}> = {}) => `arn:${options.partition || '*'}:license-manager::${options.account || '*'}:grant:${options.grantId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/license-manager/latest/userguide/report-generators.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `license-manager:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  reportGenerator: (options: Partial<{partition: string, region: string, account: string, reportGeneratorId: string}> = {}) => `arn:${options.partition || '*'}:license-manager:${options.region || '*'}:${options.account || '*'}:report-generator:${options.reportGeneratorId || '*'}`,
}

