/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodecommit.html
 */
export enum CodecommitAction {

  /**
   * Write - Grants permission to associate an approval rule template with a repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_AssociateApprovalRuleTemplateWithRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  AssociateApprovalRuleTemplateWithRepository = "codecommit:AssociateApprovalRuleTemplateWithRepository",

  /**
   * Write - Grants permission to associate an approval rule template with multiple repositories in a single operation
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchAssociateApprovalRuleTemplateWithRepositories.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  BatchAssociateApprovalRuleTemplateWithRepositories = "codecommit:BatchAssociateApprovalRuleTemplateWithRepositories",

  /**
   * Read - Grants permission to get information about multiple merge conflicts when attempting to merge two commits using either the three-way merge or the squash merge option
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchDescribeMergeConflicts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  BatchDescribeMergeConflicts = "codecommit:BatchDescribeMergeConflicts",

  /**
   * Write - Grants permission to remove the association between an approval rule template and multiple repositories in a single operation
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchDisassociateApprovalRuleTemplateFromRepositories.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  BatchDisassociateApprovalRuleTemplateFromRepositories = "codecommit:BatchDisassociateApprovalRuleTemplateFromRepositories",

  /**
   * Read - Grants permission to get return information about one or more commits in an AWS CodeCommit repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchGetCommits.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  BatchGetCommits = "codecommit:BatchGetCommits",

  /**
   * Read - Grants permission to return information about one or more pull requests in an AWS CodeCommit repository
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-pr
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  BatchGetPullRequests = "codecommit:BatchGetPullRequests",

  /**
   * Read - Grants permission to get information about multiple repositories
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_BatchGetRepositories.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  BatchGetRepositories = "codecommit:BatchGetRepositories",

  /**
   * Read - Grants permission to cancel the uploading of an archive to a pipeline in AWS CodePipeline
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  CancelUploadArchive = "codecommit:CancelUploadArchive",

  /**
   * Write - Grants permission to create an approval rule template that will automatically create approval rules in pull requests that match the conditions defined in the template; does not grant permission to create approval rules for individual pull requests
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateApprovalRuleTemplate.html
   */
  CreateApprovalRuleTemplate = "codecommit:CreateApprovalRuleTemplate",

  /**
   * Write - Grants permission to create a branch in an AWS CodeCommit repository with this API; does not control Git create branch actions
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateBranch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateBranch = "codecommit:CreateBranch",

  /**
   * Write - Grants permission to add, copy, move or update single or multiple files in a branch in an AWS CodeCommit repository, and generate a commit for the changes in the specified branch
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateCommit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCommit = "codecommit:CreateCommit",

  /**
   * Write - Grants permission to create a pull request in the specified repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreatePullRequest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  CreatePullRequest = "codecommit:CreatePullRequest",

  /**
   * Write - Grants permission to create an approval rule specific to an individual pull request; does not grant permission to create approval rule templates
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreatePullRequestApprovalRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  CreatePullRequestApprovalRule = "codecommit:CreatePullRequestApprovalRule",

  /**
   * Write - Grants permission to create an AWS CodeCommit repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRepository = "codecommit:CreateRepository",

  /**
   * Write - Grants permission to create an unreferenced commit that contains the result of merging two commits using either the three-way or the squash merge option; does not control Git merge actions
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_CreateUnreferencedMergeCommit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateUnreferencedMergeCommit = "codecommit:CreateUnreferencedMergeCommit",

  /**
   * Write - Grants permission to delete an approval rule template
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteApprovalRuleTemplate.html
   */
  DeleteApprovalRuleTemplate = "codecommit:DeleteApprovalRuleTemplate",

  /**
   * Write - Grants permission to delete a branch in an AWS CodeCommit repository with this API; does not control Git delete branch actions
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteBranch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteBranch = "codecommit:DeleteBranch",

  /**
   * Write - Grants permission to delete the content of a comment made on a change, file, or commit in a repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteCommentContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  DeleteCommentContent = "codecommit:DeleteCommentContent",

  /**
   * Write - Grants permission to delete a specified file from a specified branch
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteFile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteFile = "codecommit:DeleteFile",

  /**
   * Write - Grants permission to delete approval rule created for a pull request if the rule was not created by an approval rule template
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeletePullRequestApprovalRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  DeletePullRequestApprovalRule = "codecommit:DeletePullRequestApprovalRule",

  /**
   * Write - Grants permission to delete an AWS CodeCommit repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DeleteRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  DeleteRepository = "codecommit:DeleteRepository",

  /**
   * Read - Grants permission to get information about specific merge conflicts when attempting to merge two commits using either the three-way or the squash merge option
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DescribeMergeConflicts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  DescribeMergeConflicts = "codecommit:DescribeMergeConflicts",

  /**
   * Read - Grants permission to return information about one or more pull request events
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DescribePullRequestEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  DescribePullRequestEvents = "codecommit:DescribePullRequestEvents",

  /**
   * Write - Grants permission to remove the association between an approval rule template and a repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_DisassociateApprovalRuleTemplateFromRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  DisassociateApprovalRuleTemplateFromRepository = "codecommit:DisassociateApprovalRuleTemplateFromRepository",

  /**
   * Read - Grants permission to evaluate whether a pull request is mergable based on its current approval state and approval rule requirements
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_EvaluatePullRequestApprovalRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  EvaluatePullRequestApprovalRules = "codecommit:EvaluatePullRequestApprovalRules",

  /**
   * Read - Grants permission to return information about an approval rule template
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetApprovalRuleTemplate.html
   */
  GetApprovalRuleTemplate = "codecommit:GetApprovalRuleTemplate",

  /**
   * Read - Grants permission to view the encoded content of an individual file in an AWS CodeCommit repository from the AWS CodeCommit console
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetBlob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetBlob = "codecommit:GetBlob",

  /**
   * Read - Grants permission to get details about a branch in an AWS CodeCommit repository with this API; does not control Git branch actions
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetBranch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetBranch = "codecommit:GetBranch",

  /**
   * Read - Grants permission to get the content of a comment made on a change, file, or commit in a repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetComment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetComment = "codecommit:GetComment",

  /**
   * Read - Grants permission to get the reactions on a comment
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentReactions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetCommentReactions = "codecommit:GetCommentReactions",

  /**
   * Read - Grants permission to get information about comments made on the comparison between two commits
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentsForComparedCommit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetCommentsForComparedCommit = "codecommit:GetCommentsForComparedCommit",

  /**
   * Read - Grants permission to get comments made on a pull request
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommentsForPullRequest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetCommentsForPullRequest = "codecommit:GetCommentsForPullRequest",

  /**
   * Read - Grants permission to return information about a commit, including commit message and committer information, with this API; does not control Git log actions
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetCommit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetCommit = "codecommit:GetCommit",

  /**
   * Read - Grants permission to get information about the history of commits in a repository
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetCommitHistory = "codecommit:GetCommitHistory",

  /**
   * Read - Grants permission to get information about the difference between commits in the context of a potential merge
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-pr
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetCommitsFromMergeBase = "codecommit:GetCommitsFromMergeBase",

  /**
   * Read - Grants permission to view information about the differences between valid commit specifiers such as a branch, tag, HEAD, commit ID, or other fully qualified reference
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetDifferences.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetDifferences = "codecommit:GetDifferences",

  /**
   * Read - Grants permission to return the base-64 encoded contents of a specified file and its metadata
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetFile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetFile = "codecommit:GetFile",

  /**
   * Read - Grants permission to return the contents of a specified folder in a repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetFolder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetFolder = "codecommit:GetFolder",

  /**
   * Read - Grants permission to get information about a merge commit created by one of the merge options for pull requests that creates merge commits. Not all merge options create merge commits. This permission does not control Git merge actions
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeCommit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetMergeCommit = "codecommit:GetMergeCommit",

  /**
   * Read - Grants permission to get information about merge conflicts between the before and after commit IDs for a pull request in a repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeConflicts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetMergeConflicts = "codecommit:GetMergeConflicts",

  /**
   * Read - Grants permission to get information about merge options for pull requests that can be used to merge two commits; does not control Git merge actions
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetMergeOptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetMergeOptions = "codecommit:GetMergeOptions",

  /**
   * Read - Grants permission to resolve blobs, trees, and commits to their identifier
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetObjectIdentifier = "codecommit:GetObjectIdentifier",

  /**
   * Read - Grants permission to get information about a pull request in a specified repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetPullRequest = "codecommit:GetPullRequest",

  /**
   * Read - Grants permission to retrieve the current approvals on an inputted pull request
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequestApprovalStates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetPullRequestApprovalStates = "codecommit:GetPullRequestApprovalStates",

  /**
   * Read - Grants permission to retrieve the current override state of a given pull request
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetPullRequestOverrideState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetPullRequestOverrideState = "codecommit:GetPullRequestOverrideState",

  /**
   * Read - Grants permission to get details about references in an AWS CodeCommit repository; does not control Git reference actions
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetReferences = "codecommit:GetReferences",

  /**
   * Read - Grants permission to get information about an AWS CodeCommit repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetRepository = "codecommit:GetRepository",

  /**
   * Read - Grants permission to get information about triggers configured for a repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepositoryTriggers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetRepositoryTriggers = "codecommit:GetRepositoryTriggers",

  /**
   * Read - Grants permission to view the contents of a specified tree in an AWS CodeCommit repository from the AWS CodeCommit console
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-code
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetTree = "codecommit:GetTree",

  /**
   * Read - Grants permission to get status information about an archive upload to a pipeline in AWS CodePipeline
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GetUploadArchiveStatus = "codecommit:GetUploadArchiveStatus",

  /**
   * Read - Grants permission to pull information from an AWS CodeCommit repository to a local repo
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-git
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  GitPull = "codecommit:GitPull",

  /**
   * Write - Grants permission to push information from a local repo to an AWS CodeCommit repository
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-git
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GitPush = "codecommit:GitPush",

  /**
   * List - Grants permission to list all approval rule templates in an AWS Region for the AWS account
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListApprovalRuleTemplates.html
   */
  ListApprovalRuleTemplates = "codecommit:ListApprovalRuleTemplates",

  /**
   * List - Grants permission to list approval rule templates that are associated with a repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListAssociatedApprovalRuleTemplatesForRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  ListAssociatedApprovalRuleTemplatesForRepository = "codecommit:ListAssociatedApprovalRuleTemplatesForRepository",

  /**
   * List - Grants permission to list branches for an AWS CodeCommit repository with this API; does not control Git branch actions
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListBranches.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  ListBranches = "codecommit:ListBranches",

  /**
   * List - Grants permission to list pull requests for a specified repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListPullRequests.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  ListPullRequests = "codecommit:ListPullRequests",

  /**
   * List - Grants permission to list information about AWS CodeCommit repositories in the current Region for your AWS account
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListRepositories.html
   */
  ListRepositories = "codecommit:ListRepositories",

  /**
   * List - Grants permission to list repositories that are associated with an approval rule template
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListRepositoriesForApprovalRuleTemplate.html
   */
  ListRepositoriesForApprovalRuleTemplate = "codecommit:ListRepositoriesForApprovalRuleTemplate",

  /**
   * List - Grants permission to list the resource attached to a CodeCommit resource ARN
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  ListTagsForResource = "codecommit:ListTagsForResource",

  /**
   * Write - Grants permission to merge two commits into the specified destination branch using the fast-forward merge option
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesByFastForward.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  MergeBranchesByFastForward = "codecommit:MergeBranchesByFastForward",

  /**
   * Write - Grants permission to merge two commits into the specified destination branch using the squash merge option
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesBySquash.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  MergeBranchesBySquash = "codecommit:MergeBranchesBySquash",

  /**
   * Write - Grants permission to merge two commits into the specified destination branch using the three-way merge option
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergeBranchesByThreeWay.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  MergeBranchesByThreeWay = "codecommit:MergeBranchesByThreeWay",

  /**
   * Write - Grants permission to close a pull request and attempt to merge it into the specified destination branch for that pull request at the specified commit using the fast-forward merge option
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestByFastForward.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  MergePullRequestByFastForward = "codecommit:MergePullRequestByFastForward",

  /**
   * Write - Grants permission to close a pull request and attempt to merge it into the specified destination branch for that pull request at the specified commit using the squash merge option
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestBySquash.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  MergePullRequestBySquash = "codecommit:MergePullRequestBySquash",

  /**
   * Write - Grants permission to close a pull request and attempt to merge it into the specified destination branch for that pull request at the specified commit using the three-way merge option
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_MergePullRequestByThreeWay.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  MergePullRequestByThreeWay = "codecommit:MergePullRequestByThreeWay",

  /**
   * Write - Grants permission to override all approval rules for a pull request, including approval rules created by a template
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_OverridePullRequestApprovalRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  OverridePullRequestApprovalRules = "codecommit:OverridePullRequestApprovalRules",

  /**
   * Write - Grants permission to post a comment on the comparison between two commits
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentForComparedCommit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  PostCommentForComparedCommit = "codecommit:PostCommentForComparedCommit",

  /**
   * Write - Grants permission to post a comment on a pull request
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentForPullRequest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  PostCommentForPullRequest = "codecommit:PostCommentForPullRequest",

  /**
   * Write - Grants permission to post a comment in reply to a comment on a comparison between commits or a pull request
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PostCommentReply.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  PostCommentReply = "codecommit:PostCommentReply",

  /**
   * Write - Grants permission to post a reaction on a comment
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutCommentReaction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  PutCommentReaction = "codecommit:PutCommentReaction",

  /**
   * Write - Grants permission to add or update a file in a branch in an AWS CodeCommit repository, and generate a commit for the addition in the specified branch
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutFile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutFile = "codecommit:PutFile",

  /**
   * Write - Grants permission to create, update, or delete triggers for a repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_PutRepositoryTriggers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  PutRepositoryTriggers = "codecommit:PutRepositoryTriggers",

  /**
   * Tagging - Grants permission to attach resource tags to a CodeCommit resource ARN
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "codecommit:TagResource",

  /**
   * Write - Grants permission to test the functionality of repository triggers by sending information to the trigger target
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_TestRepositoryTriggers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  TestRepositoryTriggers = "codecommit:TestRepositoryTriggers",

  /**
   * Tagging - Grants permission to disassociate resource tags from a CodeCommit resource ARN
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "codecommit:UntagResource",

  /**
   * Write - Grants permission to update the content of approval rule templates; does not grant permission to update content of approval rules created specifically for pull requests
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateContent.html
   */
  UpdateApprovalRuleTemplateContent = "codecommit:UpdateApprovalRuleTemplateContent",

  /**
   * Write - Grants permission to update the description of approval rule templates
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateDescription.html
   */
  UpdateApprovalRuleTemplateDescription = "codecommit:UpdateApprovalRuleTemplateDescription",

  /**
   * Write - Grants permission to update the name of approval rule templates
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateApprovalRuleTemplateName.html
   */
  UpdateApprovalRuleTemplateName = "codecommit:UpdateApprovalRuleTemplateName",

  /**
   * Write - Grants permission to update the contents of a comment if the identity matches the identity used to create the comment
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateComment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  UpdateComment = "codecommit:UpdateComment",

  /**
   * Write - Grants permission to change the default branch in an AWS CodeCommit repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateDefaultBranch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  UpdateDefaultBranch = "codecommit:UpdateDefaultBranch",

  /**
   * Write - Grants permission to update the content for approval rules created for a specific pull requests; does not grant permission to update approval rule content for rules created with an approval rule template
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestApprovalRuleContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  UpdatePullRequestApprovalRuleContent = "codecommit:UpdatePullRequestApprovalRuleContent",

  /**
   * Write - Grants permission to update the approval state for pull requests
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestApprovalState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  UpdatePullRequestApprovalState = "codecommit:UpdatePullRequestApprovalState",

  /**
   * Write - Grants permission to update the description of a pull request
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestDescription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  UpdatePullRequestDescription = "codecommit:UpdatePullRequestDescription",

  /**
   * Write - Grants permission to update the status of a pull request
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  UpdatePullRequestStatus = "codecommit:UpdatePullRequestStatus",

  /**
   * Write - Grants permission to update the title of a pull request
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdatePullRequestTitle.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  UpdatePullRequestTitle = "codecommit:UpdatePullRequestTitle",

  /**
   * Write - Grants permission to change the description of an AWS CodeCommit repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateRepositoryDescription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  UpdateRepositoryDescription = "codecommit:UpdateRepositoryDescription",

  /**
   * Write - Grants permission to change the name of an AWS CodeCommit repository
   * @see https://docs.aws.amazon.com/codecommit/latest/APIReference/API_UpdateRepositoryName.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  UpdateRepositoryName = "codecommit:UpdateRepositoryName",

  /**
   * Write - Grants permission to the service role for AWS CodePipeline to upload repository changes into a pipeline
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-permissions-reference.html#aa-acp
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   */
  UploadArchive = "codecommit:UploadArchive",

  /**
   * * - Grant all codecommit permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodecommit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodecommitResource.repository `CodecommitResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `codecommit:References`: Filters access by Git reference to specified AWS CodeCommit actions ({@link https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-conditional-branch.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "codecommit:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodecommit.html
 */
export const CodecommitResource = {

  /**
   * @see https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  repository: (options: Partial<{partition: string, region: string, account: string, repositoryName: string}> = {}) => `arn:${options.partition || '*'}:codecommit:${options.region || '*'}:${options.account || '*'}:${options.repositoryName || '*'}`,
}

