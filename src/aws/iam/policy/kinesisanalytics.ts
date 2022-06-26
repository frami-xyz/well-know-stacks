/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalytics.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalyticsv2.html
 */
export enum KinesisanalyticsAction {

  /**
   * Write - Adds input to the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationInput.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  AddApplicationInput = "kinesisanalytics:AddApplicationInput",

  /**
   * Write - Adds output to the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationOutput.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  AddApplicationOutput = "kinesisanalytics:AddApplicationOutput",

  /**
   * Write - Adds reference data source to the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  AddApplicationReferenceDataSource = "kinesisanalytics:AddApplicationReferenceDataSource",

  /**
   * Write - Creates an application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateApplication = "kinesisanalytics:CreateApplication",

  /**
   * Write - Deletes the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DeleteApplication = "kinesisanalytics:DeleteApplication",

  /**
   * Write - Deletes the specified output of the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationOutput.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DeleteApplicationOutput = "kinesisanalytics:DeleteApplicationOutput",

  /**
   * Write - Deletes the specified reference data source of the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DeleteApplicationReferenceDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DeleteApplicationReferenceDataSource = "kinesisanalytics:DeleteApplicationReferenceDataSource",

  /**
   * Read - Describes the specified application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DescribeApplication = "kinesisanalytics:DescribeApplication",

  /**
   * Read - Discovers the input schema for the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DiscoverInputSchema.html
   */
  DiscoverInputSchema = "kinesisanalytics:DiscoverInputSchema",

  /**
   * Read - Grant permission to Kinesis Data Analytics console to display stream results for Kinesis Data Analytics SQL runtime applications.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/api-permissions-reference.html#api-permissions-reference-gas
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  GetApplicationState = "kinesisanalytics:GetApplicationState",

  /**
   * List - List applications for the account
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html
   */
  ListApplications = "kinesisanalytics:ListApplications",

  /**
   * Read - Fetch the tags associated with the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  ListTagsForResource = "kinesisanalytics:ListTagsForResource",

  /**
   * Write - Starts the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StartsApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  StartApplication = "kinesisanalytics:StartApplication",

  /**
   * Write - Stops the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_StopApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  StopApplication = "kinesisanalytics:StopApplication",

  /**
   * Tagging - Add tags to the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "kinesisanalytics:TagResource",

  /**
   * Tagging - Remove the specified tags from the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "kinesisanalytics:UntagResource",

  /**
   * Write - Updates the application.
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  UpdateApplication = "kinesisanalytics:UpdateApplication",

  /**
   * Write - Grants permission to add cloudwatch logging option to the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationCloudWatchLoggingOption.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  AddApplicationCloudWatchLoggingOption = "kinesisanalytics:AddApplicationCloudWatchLoggingOption",

  /**
   * Write - Grants permission to add input to the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInput.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  AddApplicationInput = "kinesisanalytics:AddApplicationInput",

  /**
   * Write - Grants permission to add input processing configuration to the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationInputProcessingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  AddApplicationInputProcessingConfiguration = "kinesisanalytics:AddApplicationInputProcessingConfiguration",

  /**
   * Write - Grants permission to add output to the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationOutput.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  AddApplicationOutput = "kinesisanalytics:AddApplicationOutput",

  /**
   * Write - Grants permission to add reference data source to the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationReferenceDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  AddApplicationReferenceDataSource = "kinesisanalytics:AddApplicationReferenceDataSource",

  /**
   * Write - Grants permission to add VPC configuration to the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_AddApplicationVpcConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  AddApplicationVpcConfiguration = "kinesisanalytics:AddApplicationVpcConfiguration",

  /**
   * Write - Grants permission to create an application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateApplication = "kinesisanalytics:CreateApplication",

  /**
   * Read - Grants permission to create and return a URL that you can use to connect to an application's extension
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplicationPresignedUrl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  CreateApplicationPresignedUrl = "kinesisanalytics:CreateApplicationPresignedUrl",

  /**
   * Write - Grants permission to create a snapshot for an application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CreateApplicationSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  CreateApplicationSnapshot = "kinesisanalytics:CreateApplicationSnapshot",

  /**
   * Write - Grants permission to delete the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DeleteApplication = "kinesisanalytics:DeleteApplication",

  /**
   * Write - Grants permission to delete the specified cloudwatch logging option of the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationCloudWatchLoggingOption.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DeleteApplicationCloudWatchLoggingOption = "kinesisanalytics:DeleteApplicationCloudWatchLoggingOption",

  /**
   * Write - Grants permission to delete the specified input processing configuration of the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationInputProcessingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DeleteApplicationInputProcessingConfiguration = "kinesisanalytics:DeleteApplicationInputProcessingConfiguration",

  /**
   * Write - Grants permission to delete the specified output of the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationOutput.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DeleteApplicationOutput = "kinesisanalytics:DeleteApplicationOutput",

  /**
   * Write - Grants permission to delete the specified reference data source of the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationReferenceDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DeleteApplicationReferenceDataSource = "kinesisanalytics:DeleteApplicationReferenceDataSource",

  /**
   * Write - Grants permission to delete a snapshot for an application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DeleteApplicationSnapshot = "kinesisanalytics:DeleteApplicationSnapshot",

  /**
   * Write - Grants permission to delete the specified VPC configuration of the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DeleteApplicationVpcConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DeleteApplicationVpcConfiguration = "kinesisanalytics:DeleteApplicationVpcConfiguration",

  /**
   * Read - Grants permission to describe the specified application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DescribeApplication = "kinesisanalytics:DescribeApplication",

  /**
   * Read - Grants permission to describe an application snapshot
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplicationSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DescribeApplicationSnapshot = "kinesisanalytics:DescribeApplicationSnapshot",

  /**
   * Read - Grants permission to describe the application version of an application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DescribeApplicationVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  DescribeApplicationVersion = "kinesisanalytics:DescribeApplicationVersion",

  /**
   * Read - Grants permission to discover the input schema for the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_DiscoverInputSchema.html
   */
  DiscoverInputSchema = "kinesisanalytics:DiscoverInputSchema",

  /**
   * Read - Grants permission to list the snapshots for an application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplicationSnapshots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  ListApplicationSnapshots = "kinesisanalytics:ListApplicationSnapshots",

  /**
   * Read - Grants permission to list application versions of an application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplicationVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  ListApplicationVersions = "kinesisanalytics:ListApplicationVersions",

  /**
   * List - Grants permission to list applications for the account
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListApplications.html
   */
  ListApplications = "kinesisanalytics:ListApplications",

  /**
   * Read - Grants permission to fetch the tags associated with the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  ListTagsForResource = "kinesisanalytics:ListTagsForResource",

  /**
   * Write - Grants permission to perform rollback operation on an application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_RollbackApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  RollbackApplication = "kinesisanalytics:RollbackApplication",

  /**
   * Write - Grants permission to start the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StartsApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  StartApplication = "kinesisanalytics:StartApplication",

  /**
   * Write - Grants permission to stop the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_StopApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  StopApplication = "kinesisanalytics:StopApplication",

  /**
   * Tagging - Grants permission to add tags to the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "kinesisanalytics:TagResource",

  /**
   * Tagging - Grants permission to remove the specified tags from the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "kinesisanalytics:UntagResource",

  /**
   * Write - Grants permission to update the application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UpdateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  UpdateApplication = "kinesisanalytics:UpdateApplication",

  /**
   * Write - Grants permission to update the maintenance configuration of an application
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_UpdateApplicationMaintenanceConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   */
  UpdateApplicationMaintenanceConfiguration = "kinesisanalytics:UpdateApplicationMaintenanceConfiguration",

  /**
   * * - Grant all kinesisanalytics permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalytics.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link KinesisanalyticsResource.application `KinesisanalyticsResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of mandatory tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "kinesisanalytics:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalytics.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesisanalyticsv2.html
 */
export const KinesisanalyticsResource = {

  /**
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  application: (options: Partial<{partition: string, region: string, account: string, applicationName: string}> = {}) => `arn:${options.partition || '*'}:kinesisanalytics:${options.region || '*'}:${options.account || '*'}:application/${options.applicationName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/how-it-works.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag-value assoicated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  application: (options: Partial<{partition: string, region: string, account: string, applicationName: string}> = {}) => `arn:${options.partition || '*'}:kinesisanalytics:${options.region || '*'}:${options.account || '*'}:application/${options.applicationName || '*'}`,
}

