/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodebuild.html
 */
export enum CodebuildAction {

  /**
   * Write - Grants permission to delete one or more builds
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchDeleteBuilds.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  BatchDeleteBuilds = "codebuild:BatchDeleteBuilds",

  /**
   * Read - Grants permission to get information about one or more build batches
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuildBatches.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  BatchGetBuildBatches = "codebuild:BatchGetBuildBatches",

  /**
   * Read - Grants permission to get information about one or more builds
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuilds.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  BatchGetBuilds = "codebuild:BatchGetBuilds",

  /**
   * Read - Grants permission to get information about one or more build projects
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetProjects.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  BatchGetProjects = "codebuild:BatchGetProjects",

  /**
   * Read - Grants permission to return an array of ReportGroup objects that are specified by the input reportGroupArns parameter
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReportGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  BatchGetReportGroups = "codebuild:BatchGetReportGroups",

  /**
   * Read - Grants permission to return an array of the Report objects specified by the input reportArns parameter
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReports.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  BatchGetReports = "codebuild:BatchGetReports",

  /**
   * Write - Grants permission to add or update information about a report
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  BatchPutCodeCoverages = "codebuild:BatchPutCodeCoverages",

  /**
   * Write - Grants permission to add or update information about a report
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  BatchPutTestCases = "codebuild:BatchPutTestCases",

  /**
   * Write - Grants permission to create a build project
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProject = "codebuild:CreateProject",

  /**
   * Write - Grants permission to create a report. A report is created when tests specified in the buildspec file for a report groups run during the build of a project
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  CreateReport = "codebuild:CreateReport",

  /**
   * Write - Grants permission to create a report group
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateReportGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateReportGroup = "codebuild:CreateReportGroup",

  /**
   * Write - Grants permission to create webhook. For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code change is pushed to the repository
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateWebhook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  CreateWebhook = "codebuild:CreateWebhook",

  /**
   * Write - Grants permission to delete a build batch
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteBuildBatch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  DeleteBuildBatch = "codebuild:DeleteBuildBatch",

  /**
   * Write - Grants permission to delete an OAuth token from a connected third-party OAuth provider. Only used in the AWS CodeBuild console
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  DeleteOAuthToken = "codebuild:DeleteOAuthToken",

  /**
   * Write - Grants permission to delete a build project
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  DeleteProject = "codebuild:DeleteProject",

  /**
   * Write - Grants permission to delete a report
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  DeleteReport = "codebuild:DeleteReport",

  /**
   * Write - Grants permission to delete a report group
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReportGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  DeleteReportGroup = "codebuild:DeleteReportGroup",

  /**
   * Permissions management - Grants permission to delete a resource policy for the associated project or report group
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  DeleteResourcePolicy = "codebuild:DeleteResourcePolicy",

  /**
   * Write - Grants permission to delete a set of GitHub, GitHub Enterprise, or Bitbucket source credentials
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteSourceCredentials.html
   */
  DeleteSourceCredentials = "codebuild:DeleteSourceCredentials",

  /**
   * Write - Grants permission to delete webhook. For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change is pushed to the repository
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteWebhook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  DeleteWebhook = "codebuild:DeleteWebhook",

  /**
   * Read - Grants permission to return an array of CodeCoverage objects
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeCodeCoverages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  DescribeCodeCoverages = "codebuild:DescribeCodeCoverages",

  /**
   * Read - Grants permission to return an array of TestCase objects
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeTestCases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  DescribeTestCases = "codebuild:DescribeTestCases",

  /**
   * Read - Grants permission to analyze and accumulate test report values for the test reports in the specified report group
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_GetReportGroupTrend.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  GetReportGroupTrend = "codebuild:GetReportGroupTrend",

  /**
   * Read - Grants permission to return a resource policy for the specified project or report group
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_GetResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  GetResourcePolicy = "codebuild:GetResourcePolicy",

  /**
   * Write - Grants permission to import the source repository credentials for an AWS CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ImportSourceCredentials.html
   */
  ImportSourceCredentials = "codebuild:ImportSourceCredentials",

  /**
   * Write - Grants permission to reset the cache for a project
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_InvalidateProjectCache.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  InvalidateProjectCache = "codebuild:InvalidateProjectCache",

  /**
   * List - Grants permission to get a list of build batch IDs, with each build batch ID representing a single build batch
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildBatches.html
   */
  ListBuildBatches = "codebuild:ListBuildBatches",

  /**
   * List - Grants permission to get a list of build batch IDs for the specified build project, with each build batch ID representing a single build batch
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildBatchesForProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  ListBuildBatchesForProject = "codebuild:ListBuildBatchesForProject",

  /**
   * List - Grants permission to get a list of build IDs, with each build ID representing a single build
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuilds.html
   */
  ListBuilds = "codebuild:ListBuilds",

  /**
   * List - Grants permission to get a list of build IDs for the specified build project, with each build ID representing a single build
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildsForProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  ListBuildsForProject = "codebuild:ListBuildsForProject",

  /**
   * List - Grants permission to list connected third-party OAuth providers. Only used in the AWS CodeBuild console
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  ListConnectedOAuthAccounts = "codebuild:ListConnectedOAuthAccounts",

  /**
   * List - Grants permission to get information about Docker images that are managed by AWS CodeBuild
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListCuratedEnvironmentImages.html
   */
  ListCuratedEnvironmentImages = "codebuild:ListCuratedEnvironmentImages",

  /**
   * List - Grants permission to get a list of build project names, with each build project name representing a single build project
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListProjects.html
   */
  ListProjects = "codebuild:ListProjects",

  /**
   * List - Grants permission to return a list of report group ARNs. Each report group ARN represents one report group
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportGroups.html
   */
  ListReportGroups = "codebuild:ListReportGroups",

  /**
   * List - Grants permission to return a list of report ARNs. Each report ARN representing one report
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReports.html
   */
  ListReports = "codebuild:ListReports",

  /**
   * List - Grants permission to return a list of report ARNs that belong to the specified report group. Each report ARN represents one report
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  ListReportsForReportGroup = "codebuild:ListReportsForReportGroup",

  /**
   * List - Grants permission to list source code repositories from a connected third-party OAuth provider. Only used in the AWS CodeBuild console
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  ListRepositories = "codebuild:ListRepositories",

  /**
   * List - Grants permission to return a list of project ARNs that have been shared with the requester. Each project ARN represents one project
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedProjects.html
   */
  ListSharedProjects = "codebuild:ListSharedProjects",

  /**
   * List - Grants permission to return a list of report group ARNs that have been shared with the requester. Each report group ARN represents one report group
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedReportGroups.html
   */
  ListSharedReportGroups = "codebuild:ListSharedReportGroups",

  /**
   * List - Grants permission to return a list of SourceCredentialsInfo objects
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSourceCredentials.html
   */
  ListSourceCredentials = "codebuild:ListSourceCredentials",

  /**
   * Write - Grants permission to save an OAuth token from a connected third-party OAuth provider. Only used in the AWS CodeBuild console
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  PersistOAuthToken = "codebuild:PersistOAuthToken",

  /**
   * Permissions management - Grants permission to create a resource policy for the associated project or report group
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_PutResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  PutResourcePolicy = "codebuild:PutResourcePolicy",

  /**
   * Write - Grants permission to retry a build
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_RetryBuild.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  RetryBuild = "codebuild:RetryBuild",

  /**
   * Write - Grants permission to retry a build batch
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_RetryBuildBatch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  RetryBuildBatch = "codebuild:RetryBuildBatch",

  /**
   * Write - Grants permission to start running a build
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuild.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  StartBuild = "codebuild:StartBuild",

  /**
   * Write - Grants permission to start running a build batch
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuildBatch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  StartBuildBatch = "codebuild:StartBuildBatch",

  /**
   * Write - Grants permission to attempt to stop running a build
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuild.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  StopBuild = "codebuild:StopBuild",

  /**
   * Write - Grants permission to attempt to stop running a build batch
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuildBatch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  StopBuildBatch = "codebuild:StopBuildBatch",

  /**
   * Write - Grants permission to change the settings of an existing build project
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateProject = "codebuild:UpdateProject",

  /**
   * Write - Grants permission to change the public visibility of a project and its builds
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateProjectVisibility.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateProjectVisibility = "codebuild:UpdateProjectVisibility",

  /**
   * Write - Grants permission to update information about a report
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   */
  UpdateReport = "codebuild:UpdateReport",

  /**
   * Write - Grants permission to change the settings of an existing report group
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateReportGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateReportGroup = "codebuild:UpdateReportGroup",

  /**
   * Write - Grants permission to update the webhook associated with an AWS CodeBuild build project
   * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateWebhook.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   */
  UpdateWebhook = "codebuild:UpdateWebhook",

  /**
   * * - Grant all codebuild permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodebuild.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodebuildResource.project `CodebuildResource.project`} 
   * - {@link CodebuildResource.reportGroup `CodebuildResource.reportGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "codebuild:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodebuild.html
 */
export const CodebuildResource = {

  /**
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   */
  build: (options: Partial<{partition: string, region: string, account: string, buildId: string}> = {}) => `arn:${options.partition || '*'}:codebuild:${options.region || '*'}:${options.account || '*'}:build/${options.buildId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   */
  buildBatch: (options: Partial<{partition: string, region: string, account: string, buildBatchId: string}> = {}) => `arn:${options.partition || '*'}:codebuild:${options.region || '*'}:${options.account || '*'}:build-batch/${options.buildBatchId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  project: (options: Partial<{partition: string, region: string, account: string, projectName: string}> = {}) => `arn:${options.partition || '*'}:codebuild:${options.region || '*'}:${options.account || '*'}:project/${options.projectName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  reportGroup: (options: Partial<{partition: string, region: string, account: string, reportGroupName: string}> = {}) => `arn:${options.partition || '*'}:codebuild:${options.region || '*'}:${options.account || '*'}:report-group/${options.reportGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   */
  report: (options: Partial<{partition: string, region: string, account: string, reportGroupName: string, reportId: string}> = {}) => `arn:${options.partition || '*'}:codebuild:${options.region || '*'}:${options.account || '*'}:report/${options.reportGroupName || '*'}:${options.reportId || '*'}`,
}

