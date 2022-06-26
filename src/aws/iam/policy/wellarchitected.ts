/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswell-architectedtool.html
 */
export enum WellarchitectedAction {

  /**
   * Write - Grants permission to associate a lens to the specified workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_AssociateLenses.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  AssociateLenses = "wellarchitected:AssociateLenses",

  /**
   * Write - Grants permission to an owner of a lens to share with other AWS accounts and IAM Users
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateLensShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   */
  CreateLensShare = "wellarchitected:CreateLensShare",

  /**
   * Write - Grants permission to create a new lens version
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateLensVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   */
  CreateLensVersion = "wellarchitected:CreateLensVersion",

  /**
   * Write - Grants permission to create a new milestone for the specified workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateMilestone.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  CreateMilestone = "wellarchitected:CreateMilestone",

  /**
   * Write - Grants permission to create a new workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateWorkload.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWorkload = "wellarchitected:CreateWorkload",

  /**
   * Write - Grants permission to share a workload with another account
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_CreateWorkloadShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  CreateWorkloadShare = "wellarchitected:CreateWorkloadShare",

  /**
   * Write - Grants permission to delete a lens
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   */
  DeleteLens = "wellarchitected:DeleteLens",

  /**
   * Write - Grants permission to delete an existing lens share
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLensShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   */
  DeleteLensShare = "wellarchitected:DeleteLensShare",

  /**
   * Write - Grants permission to delete an existing workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteWorkload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  DeleteWorkload = "wellarchitected:DeleteWorkload",

  /**
   * Write - Grants permission to delete an existing workload share
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteWorkloadShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  DeleteWorkloadShare = "wellarchitected:DeleteWorkloadShare",

  /**
   * Write - Grants permission to disassociate a lens from the specified workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DisassociateLenses.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  DisassociateLenses = "wellarchitected:DisassociateLenses",

  /**
   * Read - Grants permission to export an existing lens
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ExportLens.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   */
  ExportLens = "wellarchitected:ExportLens",

  /**
   * Read - Grants permission to retrieve the specified answer from the specified lens review
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetAnswer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  GetAnswer = "wellarchitected:GetAnswer",

  /**
   * Read - Grants permission to get an existing lens
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_DeleteLensShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetLens = "wellarchitected:GetLens",

  /**
   * Read - Grants permission to retrieve the specified lens review of the specified workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensReview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  GetLensReview = "wellarchitected:GetLensReview",

  /**
   * Read - Grants permission to retrieve the report for the specified lens review
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensReviewReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  GetLensReviewReport = "wellarchitected:GetLensReviewReport",

  /**
   * Read - Grants permission to get the difference between the specified lens version and latest available lens version
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetLensVersionDifference.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   */
  GetLensVersionDifference = "wellarchitected:GetLensVersionDifference",

  /**
   * Read - Grants permission to retrieve the specified milestone of the specified workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetMilestone.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  GetMilestone = "wellarchitected:GetMilestone",

  /**
   * Read - Grants permission to retrieve the specified workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_GetWorkload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetWorkload = "wellarchitected:GetWorkload",

  /**
   * Write - Grants permission to import a new lens
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ImportLens.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ImportLens = "wellarchitected:ImportLens",

  /**
   * List - Grants permission to list the answers from the specified lens review
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListAnswers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  ListAnswers = "wellarchitected:ListAnswers",

  /**
   * List - Grants permission to list the improvements of the specified lens review
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensReviewImprovements.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  ListLensReviewImprovements = "wellarchitected:ListLensReviewImprovements",

  /**
   * List - Grants permission to list the lens reviews of the specified workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensReviews.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  ListLensReviews = "wellarchitected:ListLensReviews",

  /**
   * List - Grants permission to list all shares created for a lens
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLensShares.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   */
  ListLensShares = "wellarchitected:ListLensShares",

  /**
   * List - Grants permission to list the lenses available to this account
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListLenses.html
   */
  ListLenses = "wellarchitected:ListLenses",

  /**
   * List - Grants permission to list the milestones of the specified workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListMilestones.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  ListMilestones = "wellarchitected:ListMilestones",

  /**
   * List - Grants permission to list notifications related to the account or specified resource
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListNotifications.html
   */
  ListNotifications = "wellarchitected:ListNotifications",

  /**
   * List - Grants permission to list the workload share invitations of the specified account or user
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListShareInvitations.html
   */
  ListShareInvitations = "wellarchitected:ListShareInvitations",

  /**
   * Read - Grants permission to list tags for a Well-Architected resource
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "wellarchitected:ListTagsForResource",

  /**
   * List - Grants permission to list the workload shares of the specified workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListWorkloadShares.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  ListWorkloadShares = "wellarchitected:ListWorkloadShares",

  /**
   * List - Grants permission to list the workloads in this account
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_ListWorkloads.html
   */
  ListWorkloads = "wellarchitected:ListWorkloads",

  /**
   * Tagging - Grants permission to tag a Well-Architected resource
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "wellarchitected:TagResource",

  /**
   * Tagging - Grants permission to untag a Well-Architected resource
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "wellarchitected:UntagResource",

  /**
   * Write - Grants permission to update properties of the specified answer
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateAnswer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  UpdateAnswer = "wellarchitected:UpdateAnswer",

  /**
   * Write - Grants permission to update properties of the specified lens review
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateLensReview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  UpdateLensReview = "wellarchitected:UpdateLensReview",

  /**
   * Write - Grants permission to update status of the specified workload share invitation
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateShareInvitation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  UpdateShareInvitation = "wellarchitected:UpdateShareInvitation",

  /**
   * Write - Grants permission to update properties of the specified workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateWorkload.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  UpdateWorkload = "wellarchitected:UpdateWorkload",

  /**
   * Write - Grants permission to update properties of the specified workload
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpdateWorkloadShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  UpdateWorkloadShare = "wellarchitected:UpdateWorkloadShare",

  /**
   * Write - Grants permission to upgrade the specified lens review to use the latest version of the associated lens
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_UpgradeLensReview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   */
  UpgradeLensReview = "wellarchitected:UpgradeLensReview",

  /**
   * * - Grant all wellarchitected permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswell-architectedtool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link WellarchitectedResource.workload `WellarchitectedResource.workload`} 
   * - {@link WellarchitectedResource.lens `WellarchitectedResource.lens`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "wellarchitected:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswell-architectedtool.html
 */
export const WellarchitectedResource = {

  /**
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_Workload.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workload: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:wellarchitected:${options.region || '*'}:${options.account || '*'}:workload/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/wellarchitected/latest/APIReference/API_Lens.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  lens: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:wellarchitected:${options.region || '*'}:${options.account || '*'}:lens/${options.resourceId || '*'}`,
}

