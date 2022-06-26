/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedblockchain.html
 */
export enum ManagedblockchainAction {

  /**
   * Write - Grants permission to create a member of an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.network `ManagedblockchainResource.network`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateMember = "managedblockchain:CreateMember",

  /**
   * Write - Grants permission to create an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNetwork.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateNetwork = "managedblockchain:CreateNetwork",

  /**
   * Write - Grants permission to create a node within a member of an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.member `ManagedblockchainResource.member`} 
   * - {@link ManagedblockchainResource.network `ManagedblockchainResource.network`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateNode = "managedblockchain:CreateNode",

  /**
   * Write - Grants permission to create a proposal that other blockchain network members can vote on to add or remove a member in an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateProposal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.network `ManagedblockchainResource.network`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateProposal = "managedblockchain:CreateProposal",

  /**
   * Write - Grants permission to delete a member and all associated resources from an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.member `ManagedblockchainResource.member`} 
   */
  DeleteMember = "managedblockchain:DeleteMember",

  /**
   * Write - Grants permission to delete a node from a member of an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.node `ManagedblockchainResource.node`} 
   */
  DeleteNode = "managedblockchain:DeleteNode",

  /**
   * Read - Grants permission to return detailed information about a member of an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.member `ManagedblockchainResource.member`} 
   */
  GetMember = "managedblockchain:GetMember",

  /**
   * Read - Grants permission to return detailed information about an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNetwork.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.network `ManagedblockchainResource.network`} 
   */
  GetNetwork = "managedblockchain:GetNetwork",

  /**
   * Read - Grants permission to return detailed information about a node within a member of an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.node `ManagedblockchainResource.node`} 
   */
  GetNode = "managedblockchain:GetNode",

  /**
   * Read - Grants permission to return detailed information about a proposal of an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetProposal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.proposal `ManagedblockchainResource.proposal`} 
   */
  GetProposal = "managedblockchain:GetProposal",

  /**
   * List - Grants permission to list the invitations extended to the active AWS account from any Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListInvitations.html
   */
  ListInvitations = "managedblockchain:ListInvitations",

  /**
   * List - Grants permission to list the members of an Amazon Managed Blockchain network and the properties of their memberships
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.network `ManagedblockchainResource.network`} 
   */
  ListMembers = "managedblockchain:ListMembers",

  /**
   * List - Grants permission to list the Amazon Managed Blockchain networks in which the current AWS account participates
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNetworks.html
   */
  ListNetworks = "managedblockchain:ListNetworks",

  /**
   * List - Grants permission to list the nodes within a member of an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNodes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.member `ManagedblockchainResource.member`} 
   * - {@link ManagedblockchainResource.network `ManagedblockchainResource.network`} 
   */
  ListNodes = "managedblockchain:ListNodes",

  /**
   * Read - Grants permission to list all votes for a proposal, including the value of the vote and the unique identifier of the member that cast the vote for the given Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposalVotes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.proposal `ManagedblockchainResource.proposal`} 
   */
  ListProposalVotes = "managedblockchain:ListProposalVotes",

  /**
   * List - Grants permission to list proposals for the given Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposals.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.network `ManagedblockchainResource.network`} 
   */
  ListProposals = "managedblockchain:ListProposals",

  /**
   * Read - Grants permission to view tags associated with an Amazon Managed Blockchain resource
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.invitation `ManagedblockchainResource.invitation`} 
   * - {@link ManagedblockchainResource.member `ManagedblockchainResource.member`} 
   * - {@link ManagedblockchainResource.network `ManagedblockchainResource.network`} 
   * - {@link ManagedblockchainResource.node `ManagedblockchainResource.node`} 
   * - {@link ManagedblockchainResource.proposal `ManagedblockchainResource.proposal`} 
   */
  ListTagsForResource = "managedblockchain:ListTagsForResource",

  /**
   * Write - Grants permission to reject the invitation to join the blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_RejectInvitation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.invitation `ManagedblockchainResource.invitation`} 
   */
  RejectInvitation = "managedblockchain:RejectInvitation",

  /**
   * Tagging - Grants permission to add tags to an Amazon Managed Blockchain resource
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.invitation `ManagedblockchainResource.invitation`} 
   * - {@link ManagedblockchainResource.member `ManagedblockchainResource.member`} 
   * - {@link ManagedblockchainResource.network `ManagedblockchainResource.network`} 
   * - {@link ManagedblockchainResource.node `ManagedblockchainResource.node`} 
   * - {@link ManagedblockchainResource.proposal `ManagedblockchainResource.proposal`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "managedblockchain:TagResource",

  /**
   * Tagging - Grants permission to remove tags from an Amazon Managed Blockchain resource
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.invitation `ManagedblockchainResource.invitation`} 
   * - {@link ManagedblockchainResource.member `ManagedblockchainResource.member`} 
   * - {@link ManagedblockchainResource.network `ManagedblockchainResource.network`} 
   * - {@link ManagedblockchainResource.node `ManagedblockchainResource.node`} 
   * - {@link ManagedblockchainResource.proposal `ManagedblockchainResource.proposal`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "managedblockchain:UntagResource",

  /**
   * Write - Grants permission to update a member of an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UpdateMember.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.member `ManagedblockchainResource.member`} 
   */
  UpdateMember = "managedblockchain:UpdateMember",

  /**
   * Write - Grants permission to update a node from a member of an Amazon Managed Blockchain network
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UpdateNode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.node `ManagedblockchainResource.node`} 
   */
  UpdateNode = "managedblockchain:UpdateNode",

  /**
   * Write - Grants permission to cast a vote for a proposal on behalf of the blockchain network member specified
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_VoteOnProposal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.proposal `ManagedblockchainResource.proposal`} 
   */
  VoteOnProposal = "managedblockchain:VoteOnProposal",

  /**
   * * - Grant all managedblockchain permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedblockchain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ManagedblockchainResource.network `ManagedblockchainResource.network`} 
   * - {@link ManagedblockchainResource.member `ManagedblockchainResource.member`} 
   * - {@link ManagedblockchainResource.node `ManagedblockchainResource.node`} 
   * - {@link ManagedblockchainResource.proposal `ManagedblockchainResource.proposal`} 
   * - {@link ManagedblockchainResource.invitation `ManagedblockchainResource.invitation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "managedblockchain:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedblockchain.html
 */
export const ManagedblockchainResource = {

  /**
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Network.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with an Amazon Managed Blockchain resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  network: (options: Partial<{partition: string, region: string, networkId: string}> = {}) => `arn:${options.partition || '*'}:managedblockchain:${options.region || '*'}::networks/${options.networkId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Member.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with an Amazon Managed Blockchain resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  member: (options: Partial<{partition: string, region: string, account: string, memberId: string}> = {}) => `arn:${options.partition || '*'}:managedblockchain:${options.region || '*'}:${options.account || '*'}:members/${options.memberId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Node.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with an Amazon Managed Blockchain resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  node: (options: Partial<{partition: string, region: string, account: string, nodeId: string}> = {}) => `arn:${options.partition || '*'}:managedblockchain:${options.region || '*'}:${options.account || '*'}:nodes/${options.nodeId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Proposal.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with an Amazon Managed Blockchain resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  proposal: (options: Partial<{partition: string, region: string, proposalId: string}> = {}) => `arn:${options.partition || '*'}:managedblockchain:${options.region || '*'}::proposals/${options.proposalId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Invitation.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on the tags associated with an Amazon Managed Blockchain resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  invitation: (options: Partial<{partition: string, region: string, account: string, invitationId: string}> = {}) => `arn:${options.partition || '*'}:managedblockchain:${options.region || '*'}:${options.account || '*'}:invitations/${options.invitationId || '*'}`,
}

