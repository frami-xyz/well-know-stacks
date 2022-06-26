/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitosync.html
 */
export enum CognitoSyncAction {

  /**
   * Write - Grants permission to initiate a bulk publish of all existing datasets for an Identity Pool to the configured stream
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_BulkPublish.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.identitypool `CognitoSyncResource.identitypool`} 
   */
  BulkPublish = "cognito-sync:BulkPublish",

  /**
   * Write - Grants permission to delete a specific dataset
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DeleteDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.dataset `CognitoSyncResource.dataset`} 
   */
  DeleteDataset = "cognito-sync:DeleteDataset",

  /**
   * Read - Grants permission to get metadata about a dataset by identity and dataset name
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.dataset `CognitoSyncResource.dataset`} 
   */
  DescribeDataset = "cognito-sync:DescribeDataset",

  /**
   * Read - Grants permission to get usage details (for example, data storage) about a particular identity pool
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeIdentityPoolUsage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.identitypool `CognitoSyncResource.identitypool`} 
   */
  DescribeIdentityPoolUsage = "cognito-sync:DescribeIdentityPoolUsage",

  /**
   * Read - Grants permission to get usage information for an identity, including number of datasets and data usage
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_DescribeIdentityUsage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.identity `CognitoSyncResource.identity`} 
   */
  DescribeIdentityUsage = "cognito-sync:DescribeIdentityUsage",

  /**
   * Read - Grants permission to get the status of the last BulkPublish operation for an identity pool
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetBulkPublishDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.identitypool `CognitoSyncResource.identitypool`} 
   */
  GetBulkPublishDetails = "cognito-sync:GetBulkPublishDetails",

  /**
   * Read - Grants permission to get the events and the corresponding Lambda functions associated with an identity pool
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetCognitoEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.identitypool `CognitoSyncResource.identitypool`} 
   */
  GetCognitoEvents = "cognito-sync:GetCognitoEvents",

  /**
   * Read - Grants permission to get the configuration settings of an identity pool
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_GetIdentityPoolConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.identitypool `CognitoSyncResource.identitypool`} 
   */
  GetIdentityPoolConfiguration = "cognito-sync:GetIdentityPoolConfiguration",

  /**
   * List - Grants permission to list datasets for an identity
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListDatasets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.dataset `CognitoSyncResource.dataset`} 
   */
  ListDatasets = "cognito-sync:ListDatasets",

  /**
   * Read - Grants permission to get a list of identity pools registered with Cognito
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListIdentityPoolUsage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.identitypool `CognitoSyncResource.identitypool`} 
   */
  ListIdentityPoolUsage = "cognito-sync:ListIdentityPoolUsage",

  /**
   * Read - Grants permission to get paginated records, optionally changed after a particular sync count for a dataset and identity
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_ListRecords.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.dataset `CognitoSyncResource.dataset`} 
   */
  ListRecords = "cognito-sync:ListRecords",

  /**
   * Read - Grants permission to query records
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitosync.html
   */
  QueryRecords = "cognito-sync:QueryRecords",

  /**
   * Write - Grants permission to register a device to receive push sync notifications
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_RegisterDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.identity `CognitoSyncResource.identity`} 
   */
  RegisterDevice = "cognito-sync:RegisterDevice",

  /**
   * Write - Grants permission to set the AWS Lambda function for a given event type for an identity pool
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SetCognitoEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.identitypool `CognitoSyncResource.identitypool`} 
   */
  SetCognitoEvents = "cognito-sync:SetCognitoEvents",

  /**
   * Write - Grants permission to configure datasets
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitosync.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.dataset `CognitoSyncResource.dataset`} 
   */
  SetDatasetConfiguration = "cognito-sync:SetDatasetConfiguration",

  /**
   * Write - Grants permission to set the necessary configuration for push sync
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SetIdentityPoolConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.identitypool `CognitoSyncResource.identitypool`} 
   */
  SetIdentityPoolConfiguration = "cognito-sync:SetIdentityPoolConfiguration",

  /**
   * Write - Grants permission to subscribe to receive notifications when a dataset is modified by another device
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_SubscribeToDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.dataset `CognitoSyncResource.dataset`} 
   */
  SubscribeToDataset = "cognito-sync:SubscribeToDataset",

  /**
   * Write - Grants permission to unsubscribe from receiving notifications when a dataset is modified by another device
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_UnsubscribeFromDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.dataset `CognitoSyncResource.dataset`} 
   */
  UnsubscribeFromDataset = "cognito-sync:UnsubscribeFromDataset",

  /**
   * Write - Grants permission to post updates to records and add and delete records for a dataset and user
   * @see https://docs.aws.amazon.com/cognitosync/latest/APIReference/API_UpdateRecords.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.dataset `CognitoSyncResource.dataset`} 
   */
  UpdateRecords = "cognito-sync:UpdateRecords",

  /**
   * * - Grant all cognito-sync permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitosync.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CognitoSyncResource.identitypool `CognitoSyncResource.identitypool`} 
   * - {@link CognitoSyncResource.dataset `CognitoSyncResource.dataset`} 
   * - {@link CognitoSyncResource.identity `CognitoSyncResource.identity`} 
   */
  All = "cognito-sync:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitosync.html
 */
export const CognitoSyncResource = {

  /**
   * @see https://docs.aws.amazon.com/cognito/latest/developerguide/synchronizing-data.html#understanding-datasets
   */
  dataset: (options: Partial<{partition: string, region: string, account: string, identityPoolId: string, identityId: string, datasetName: string}> = {}) => `arn:${options.partition || '*'}:cognito-sync:${options.region || '*'}:${options.account || '*'}:identitypool/${options.identityPoolId || '*'}/identity/${options.identityId || '*'}/dataset/${options.datasetName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html#authenticated-and-unauthenticated-identities
   */
  identity: (options: Partial<{partition: string, region: string, account: string, identityPoolId: string, identityId: string}> = {}) => `arn:${options.partition || '*'}:cognito-sync:${options.region || '*'}:${options.account || '*'}:identitypool/${options.identityPoolId || '*'}/identity/${options.identityId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html
   */
  identitypool: (options: Partial<{partition: string, region: string, account: string, identityPoolId: string}> = {}) => `arn:${options.partition || '*'}:cognito-sync:${options.region || '*'}:${options.account || '*'}:identitypool/${options.identityPoolId || '*'}`,
}

