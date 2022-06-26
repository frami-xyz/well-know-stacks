/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkdocs.html
 */
export enum WorkdocsAction {

  /**
   * Write - Grants permission to abort the upload of the specified document version that was previously initiated by InitiateDocumentVersionUpload.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AbortDocumentVersionUpload.html
   */
  AbortDocumentVersionUpload = "workdocs:AbortDocumentVersionUpload",

  /**
   * Write - Grants permission to activate the specified user. Only active users can access Amazon WorkDocs.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_ActivateUser.html
   */
  ActivateUser = "workdocs:ActivateUser",

  /**
   * Write - Grants permission to create a set of permissions for the specified folder or document.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_AddResourcePermissions.html
   */
  AddResourcePermissions = "workdocs:AddResourcePermissions",

  /**
   * Write - Grants permission to add a user to a group.
   * @see https://docs.aws.amazon.com/workdocs/latest/adminguide/manage_set_admin.html
   */
  AddUserToGroup = "workdocs:AddUserToGroup",

  /**
   * Read - Grants permission to check an alias.
   * @see https://docs.aws.amazon.com/workdocs/latest/adminguide/cloud_quick_start.html
   */
  CheckAlias = "workdocs:CheckAlias",

  /**
   * Write - Grants permission to add a new comment to the specified document version.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateComment.html
   */
  CreateComment = "workdocs:CreateComment",

  /**
   * Write - Grants permission to add one or more custom properties to the specified resource.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateCustomMetadata.html
   */
  CreateCustomMetadata = "workdocs:CreateCustomMetadata",

  /**
   * Write - Grants permission to create a folder with the specified name and parent folder.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateFolder.html
   */
  CreateFolder = "workdocs:CreateFolder",

  /**
   * Write - Grants permission to create an instance.
   * @see https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  CreateInstance = "workdocs:CreateInstance",

  /**
   * Write - Grants permission to add labels to the given resource.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateLabels.html
   */
  CreateLabels = "workdocs:CreateLabels",

  /**
   * Write - Grants permission to configure WorkDocs to use Amazon SNS notifications.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateNotificationSubscription.html
   */
  CreateNotificationSubscription = "workdocs:CreateNotificationSubscription",

  /**
   * Write - Grants permission to create a user in a Simple AD or Microsoft AD directory.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html
   */
  CreateUser = "workdocs:CreateUser",

  /**
   * Write - Grants permission to deactivate the specified user, which revokes the user's access to Amazon WorkDocs.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeactivateUser.html
   */
  DeactivateUser = "workdocs:DeactivateUser",

  /**
   * Write - Grants permission to delete the specified comment from the document version.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteComment.html
   */
  DeleteComment = "workdocs:DeleteComment",

  /**
   * Write - Grants permission to delete custom metadata from the specified resource.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteCustomMetadata.html
   */
  DeleteCustomMetadata = "workdocs:DeleteCustomMetadata",

  /**
   * Write - Grants permission to permanently delete the specified document and its associated metadata.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteDocument.html
   */
  DeleteDocument = "workdocs:DeleteDocument",

  /**
   * Write - Grants permission to permanently delete the specified folder and its contents.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolder.html
   */
  DeleteFolder = "workdocs:DeleteFolder",

  /**
   * Write - Grants permission to delete the contents of the specified folder.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteFolderContents.html
   */
  DeleteFolderContents = "workdocs:DeleteFolderContents",

  /**
   * Write - Grants permission to delete an instance.
   * @see https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site
   */
  DeleteInstance = "workdocs:DeleteInstance",

  /**
   * Write - Grants permission to delete one or more labels from a resource.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteLabels.html
   */
  DeleteLabels = "workdocs:DeleteLabels",

  /**
   * Write - Grants permission to delete the specified subscription from the specified organization.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteNotificationSubscription.html
   */
  DeleteNotificationSubscription = "workdocs:DeleteNotificationSubscription",

  /**
   * Write - Grants permission to delete the specified user from a Simple AD or Microsoft AD directory.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DeleteUser.html
   */
  DeleteUser = "workdocs:DeleteUser",

  /**
   * Write - Grants permission to deregister a directory.
   * @see https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html#delete_site
   */
  DeregisterDirectory = "workdocs:DeregisterDirectory",

  /**
   * List - Grants permission to fetch user activities in a specified time period.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeActivities.html
   */
  DescribeActivities = "workdocs:DescribeActivities",

  /**
   * List - Grants permission to describe available directories.
   * @see https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  DescribeAvailableDirectories = "workdocs:DescribeAvailableDirectories",

  /**
   * List - Grants permission to list all the comments for the specified document version.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeComments.html
   */
  DescribeComments = "workdocs:DescribeComments",

  /**
   * List - Grants permission to retrieve the document versions for the specified document.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeDocumentVersions.html
   */
  DescribeDocumentVersions = "workdocs:DescribeDocumentVersions",

  /**
   * List - Grants permission to describe the contents of the specified folder, including its documents and sub-folders.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeFolderContents.html
   */
  DescribeFolderContents = "workdocs:DescribeFolderContents",

  /**
   * List - Grants permission to describe the user groups.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeGroups.html
   */
  DescribeGroups = "workdocs:DescribeGroups",

  /**
   * List - Grants permission to describe instances.
   * @see https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  DescribeInstances = "workdocs:DescribeInstances",

  /**
   * List - Grants permission to list the specified notification subscriptions.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeNotificationSubscriptions.html
   */
  DescribeNotificationSubscriptions = "workdocs:DescribeNotificationSubscriptions",

  /**
   * List - Grants permission to view a description of a specified resource's permissions.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeResourcePermissions.html
   */
  DescribeResourcePermissions = "workdocs:DescribeResourcePermissions",

  /**
   * List - Grants permission to describe the root folders.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeRootFolders.html
   */
  DescribeRootFolders = "workdocs:DescribeRootFolders",

  /**
   * List - Grants permission to view a description of the specified users. You can describe all users or filter the results (for example, by status or organization).
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_DescribeUsers.html
   */
  DescribeUsers = "workdocs:DescribeUsers",

  /**
   * Read - Grants permission to download a specified document version.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html
   */
  DownloadDocumentVersion = "workdocs:DownloadDocumentVersion",

  /**
   * Read - Grants permission to retrieve the details of the current user.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetCurrentUser.html
   */
  GetCurrentUser = "workdocs:GetCurrentUser",

  /**
   * Read - Grants permission to retrieve the specified document object.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocument.html
   */
  GetDocument = "workdocs:GetDocument",

  /**
   * Read - Grants permission to retrieve the path information (the hierarchy from the root folder) for the requested document.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentPath.html
   */
  GetDocumentPath = "workdocs:GetDocumentPath",

  /**
   * Read - Grants permission to retrieve version metadata for the specified document.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetDocumentVersion.html
   */
  GetDocumentVersion = "workdocs:GetDocumentVersion",

  /**
   * Read - Grants permission to retrieve the metadata of the specified folder.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolder.html
   */
  GetFolder = "workdocs:GetFolder",

  /**
   * Read - Grants permission to retrieve the path information (the hierarchy from the root folder) for the specified folder.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetFolderPath.html
   */
  GetFolderPath = "workdocs:GetFolderPath",

  /**
   * Read - Grants permission to retrieve details for the specified group.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_Operations.html
   */
  GetGroup = "workdocs:GetGroup",

  /**
   * Read - Grants permission to get a collection of resources.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_GetResources.html
   */
  GetResources = "workdocs:GetResources",

  /**
   * Write - Grants permission to create a new document object and version object.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_InitiateDocumentVersionUpload.html
   */
  InitiateDocumentVersionUpload = "workdocs:InitiateDocumentVersionUpload",

  /**
   * Write - Grants permission to register a directory.
   * @see https://docs.aws.amazon.com/workdocs/latest/adminguide/existing-dir-setup.html
   */
  RegisterDirectory = "workdocs:RegisterDirectory",

  /**
   * Write - Grants permission to remove all the permissions from the specified resource.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveAllResourcePermissions.html
   */
  RemoveAllResourcePermissions = "workdocs:RemoveAllResourcePermissions",

  /**
   * Write - Grants permission to remove the permission for the specified principal from the specified resource.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_RemoveResourcePermission.html
   */
  RemoveResourcePermission = "workdocs:RemoveResourcePermission",

  /**
   * Write - Grants permission to update the specified attributes of the specified document.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocument.html
   */
  UpdateDocument = "workdocs:UpdateDocument",

  /**
   * Write - Grants permission to change the status of the document version to ACTIVE.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateDocumentVersion.html
   */
  UpdateDocumentVersion = "workdocs:UpdateDocumentVersion",

  /**
   * Write - Grants permission to update the specified attributes of the specified folder.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateFolder.html
   */
  UpdateFolder = "workdocs:UpdateFolder",

  /**
   * Write - Grants permission to update an instance alias.
   * @see https://docs.aws.amazon.com/workdocs/latest/adminguide/getting_started.html
   */
  UpdateInstanceAlias = "workdocs:UpdateInstanceAlias",

  /**
   * Write - Grants permission to update the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.
   * @see https://docs.aws.amazon.com/workdocs/latest/APIReference/API_UpdateUser.html
   */
  UpdateUser = "workdocs:UpdateUser",

  /**
   * * - Grant all workdocs permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkdocs.html
   */
  All = "workdocs:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkdocs.html
 */
export const WorkdocsResource = {
}

