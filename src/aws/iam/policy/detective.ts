/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondetective.html
 */
export enum DetectiveAction {

  /**
   * Write - Grants permission to accept an invitation to become a member of a behavior graph
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_AcceptInvitation.html
   */
  AcceptInvitation = "detective:AcceptInvitation",

  /**
   * Write - Grants permission to create a behavior graph and begin to aggregate security information
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateGraph.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by specifying the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by specifying the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateGraph = "detective:CreateGraph",

  /**
   * Write - Grants permission to request the membership of one or more accounts in a behavior graph managed by this account
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  CreateMembers = "detective:CreateMembers",

  /**
   * Write - Grants permission to delete a behavior graph and stop aggregating security information
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_DeleteGraph.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  DeleteGraph = "detective:DeleteGraph",

  /**
   * Write - Grants permission to remove member accounts from a behavior graph managed by this account
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_DeleteMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  DeleteMembers = "detective:DeleteMembers",

  /**
   * Read - Grants permission to view the current configuration related to the Amazon Detective integration with AWS Organizations
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_DescribeOrganizationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  DescribeOrganizationConfiguration = "detective:DescribeOrganizationConfiguration",

  /**
   * Write - Grants permission to remove the Amazon Detective delegated administrator account for an organization
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_DisableOrganizationAdminAccount.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  DisableOrganizationAdminAccount = "detective:DisableOrganizationAdminAccount",

  /**
   * Write - Grants permission to remove the association of this account with a behavior graph
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_DisassociateMembership.html
   */
  DisassociateMembership = "detective:DisassociateMembership",

  /**
   * Write - Grants permission to designate the Amazon Detective delegated administrator account for an organization
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_EnableOrganizationAdminAccount.html
   */
  EnableOrganizationAdminAccount = "detective:EnableOrganizationAdminAccount",

  /**
   * Read - Grants permission to retrieve a behavior graph's eligibility for a free trial period
   * @see https://docs.aws.amazon.com/detective/latest/adminguide/free-trial-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  GetFreeTrialEligibility = "detective:GetFreeTrialEligibility",

  /**
   * Read - Grants permission to retrieve the data ingestion state of a behavior graph
   * @see https://docs.aws.amazon.com/detective/latest/adminguide/detective-source-data-about.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  GetGraphIngestState = "detective:GetGraphIngestState",

  /**
   * Read - Grants permission to retrieve details on specified members of a behavior graph
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_GetMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  GetMembers = "detective:GetMembers",

  /**
   * Read - Grants permission to retrieve information about Amazon Detective's pricing
   * @see https://docs.aws.amazon.com/detective/latest/adminguide/usage-projected-cost-calculation.html
   */
  GetPricingInformation = "detective:GetPricingInformation",

  /**
   * Read - Grants permission to list usage information of a behavior graph
   * @see https://docs.aws.amazon.com/detective/latest/adminguide/tracking-usage-logging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  GetUsageInformation = "detective:GetUsageInformation",

  /**
   * List - Grants permission to list behavior graphs managed by this account
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_ListGraphs.html
   */
  ListGraphs = "detective:ListGraphs",

  /**
   * List - Grants permission to retrieve details on the behavior graphs to which this account has been invited to join
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_ListInvitations.html
   */
  ListInvitations = "detective:ListInvitations",

  /**
   * List - Grants permission to retrieve details on all members of a behavior graph
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_ListMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  ListMembers = "detective:ListMembers",

  /**
   * List - Grants permission to view the current Amazon Detective delegated administrator account for an organization
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_ListOrganizationAdminAccounts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  ListOrganizationAdminAccounts = "detective:ListOrganizationAdminAccounts",

  /**
   * Read - Grants permission to list the tag values that are assigned to a behavior graph
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by specifying the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "detective:ListTagsForResource",

  /**
   * Write - Grants permission to reject an invitation to become a member of a behavior graph
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_RejectInvitation.html
   */
  RejectInvitation = "detective:RejectInvitation",

  /**
   * Read - Grants permission to search the data stored in a behavior graph
   * @see https://docs.aws.amazon.com/detective/latest/userguide/detective-search.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  SearchGraph = "detective:SearchGraph",

  /**
   * Write - Grants permission to start data ingest for a member account that has a status of ACCEPTED_BUT_DISABLED
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_StartMonitoringMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  StartMonitoringMember = "detective:StartMonitoringMember",

  /**
   * Tagging - Grants permission to assign tag values to a behavior graph
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by specifying the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by specifying the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by specifying the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "detective:TagResource",

  /**
   * Tagging - Grants permission to remove tag values from a behavior graph
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by specifying the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "detective:UntagResource",

  /**
   * Write - Grants permission to update the current configuration related to the Amazon Detective integration with AWS Organizations
   * @see https://docs.aws.amazon.com/detective/latest/APIReference/API_UpdateOrganizationConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   */
  UpdateOrganizationConfiguration = "detective:UpdateOrganizationConfiguration",

  /**
   * * - Grant all detective permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondetective.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DetectiveResource.graph `DetectiveResource.graph`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by specifying the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by specifying the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by specifying the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "detective:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondetective.html
 */
export const DetectiveResource = {

  /**
   * @see https://docs.aws.amazon.com/detective/latest/adminguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by specifying the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  graph: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:detective:${options.region || '*'}:${options.account || '*'}:graph:${options.resourceId || '*'}`,
}

