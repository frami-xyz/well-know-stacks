/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceaccessmanager.html
 */
export enum RamAction {

  /**
   * Write - Grants permission to accept the specified resource share invitation
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShareInvitation `RamResource.resourceShareInvitation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ram:ShareOwnerAccountId`: Filters access based on resource shares owned by a specific account. For example, you can use this condition key to specify which resource share invitations can be accepted or rejected based on the resource share owner's account ID ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AcceptResourceShareInvitation = "ram:AcceptResourceShareInvitation",

  /**
   * Write - Grants permission to associate resource(s) and/or principal(s) to a resource share
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShare `RamResource.resourceShare`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:ResourceShareName`: Filters access based on a resource share with the specified name ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:AllowsExternalPrincipals`: Filters access based on resource shares that allow or deny sharing with external principals. For example, specify true if the action can only be performed on resource shares that allow sharing with external principals. External principals are AWS accounts that are outside of its AWS organization ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `ram:Principal`: Filters access based on the format of the specified principal ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:RequestedResourceType`: Filters access based on the specified resource type ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:ResourceArn`: Filters access based on a resource with the specified ARN ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  AssociateResourceShare = "ram:AssociateResourceShare",

  /**
   * Write - Grants permission to associate a Permission with a Resource Share
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceSharePermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.permission `RamResource.permission`} 
   * - {@link RamResource.resourceShare `RamResource.resourceShare`} 
   */
  AssociateResourceSharePermission = "ram:AssociateResourceSharePermission",

  /**
   * Write - Grants permission to create a resource share with provided resource(s) and/or principal(s)
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request when creating or tagging a resource share. If users don't pass these specific tags, or if they don't specify tags at all, the request fails ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed when creating or tagging a resource share ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `ram:RequestedResourceType`: Filters access based on the specified resource type ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:ResourceArn`: Filters access based on a resource with the specified ARN ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ram:RequestedAllowsExternalPrincipals`: Filters access based on the specified value for 'allowExternalPrincipals'. External principals are AWS accounts that are outside of its AWS Organization ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `ram:Principal`: Filters access based on the format of the specified principal ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateResourceShare = "ram:CreateResourceShare",

  /**
   * Write - Grants permission to delete resource share
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_DeleteResourceShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShare `RamResource.resourceShare`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:ResourceShareName`: Filters access based on a resource share with the specified name ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:AllowsExternalPrincipals`: Filters access based on resource shares that allow or deny sharing with external principals. For example, specify true if the action can only be performed on resource shares that allow sharing with external principals. External principals are AWS accounts that are outside of its AWS organization ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  DeleteResourceShare = "ram:DeleteResourceShare",

  /**
   * Write - Grants permission to disassociate resource(s) and/or principal(s) from a resource share
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShare `RamResource.resourceShare`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:ResourceShareName`: Filters access based on a resource share with the specified name ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:AllowsExternalPrincipals`: Filters access based on resource shares that allow or deny sharing with external principals. For example, specify true if the action can only be performed on resource shares that allow sharing with external principals. External principals are AWS accounts that are outside of its AWS organization ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `ram:Principal`: Filters access based on the format of the specified principal ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:RequestedResourceType`: Filters access based on the specified resource type ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:ResourceArn`: Filters access based on a resource with the specified ARN ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DisassociateResourceShare = "ram:DisassociateResourceShare",

  /**
   * Write - Grants permission to disassociate a Permission from a Resource Share
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceSharePermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.permission `RamResource.permission`} 
   * - {@link RamResource.resourceShare `RamResource.resourceShare`} 
   */
  DisassociateResourceSharePermission = "ram:DisassociateResourceSharePermission",

  /**
   * Permissions management - Grants permission to access customer's organization and create a SLR in the customer's account
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_EnableSharingWithAwsOrganization.html
   */
  EnableSharingWithAwsOrganization = "ram:EnableSharingWithAwsOrganization",

  /**
   * Read - Grants permission to get the contents of an AWS RAM permission
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_GetPermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.permission `RamResource.permission`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ram:PermissionArn`: Filters access based on the specified Permission ARN ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  GetPermission = "ram:GetPermission",

  /**
   * Read - Grants permission to get the policies for the specified resources that you own and have shared
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourcePolicies.html
   */
  GetResourcePolicies = "ram:GetResourcePolicies",

  /**
   * Read - Grants permission to get a set of resource share associations from a provided list or with a specified status of the specified type
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareAssociations.html
   */
  GetResourceShareAssociations = "ram:GetResourceShareAssociations",

  /**
   * Read - Grants permission to get resource share invitations by the specified invitation arn or those for the resource share
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html
   */
  GetResourceShareInvitations = "ram:GetResourceShareInvitations",

  /**
   * Read - Grants permission to get a set of resource shares from a provided list or with a specified status
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShares.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request when creating or tagging a resource share. If users don't pass these specific tags, or if they don't specify tags at all, the request fails ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed when creating or tagging a resource share ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  GetResourceShares = "ram:GetResourceShares",

  /**
   * Read - Grants permission to list the resources in a resource share that is shared with you but that the invitation is still pending for
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPendingInvitationResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShareInvitation `RamResource.resourceShareInvitation`} 
   */
  ListPendingInvitationResources = "ram:ListPendingInvitationResources",

  /**
   * List - Grants permission to list the versions of an AWS RAM permission
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPermissionVersions.html
   */
  ListPermissionVersions = "ram:ListPermissionVersions",

  /**
   * List - Grants permission to list the AWS RAM permissions
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPermissions.html
   */
  ListPermissions = "ram:ListPermissions",

  /**
   * List - Grants permission to list the principals that you have shared resources with or that have shared resources with you
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPrincipals.html
   */
  ListPrincipals = "ram:ListPrincipals",

  /**
   * List - Grants permission to list the Permissions associated with a Resource Share
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceSharePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShare `RamResource.resourceShare`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:ResourceShareName`: Filters access based on a resource share with the specified name ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:AllowsExternalPrincipals`: Filters access based on resource shares that allow or deny sharing with external principals. For example, specify true if the action can only be performed on resource shares that allow sharing with external principals. External principals are AWS accounts that are outside of its AWS organization ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  ListResourceSharePermissions = "ram:ListResourceSharePermissions",

  /**
   * List - Grants permission to list the shareable resource types supported by AWS RAM
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceTypes.html
   */
  ListResourceTypes = "ram:ListResourceTypes",

  /**
   * List - Grants permission to list the resources that you added to resource shares or the resources that are shared with you
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResources.html
   */
  ListResources = "ram:ListResources",

  /**
   * Write - Grants permission to promote the specified resource share
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShare `RamResource.resourceShare`} 
   */
  PromoteResourceShareCreatedFromPolicy = "ram:PromoteResourceShareCreatedFromPolicy",

  /**
   * Write - Grants permission to reject the specified resource share invitation
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_RejectResourceShareInvitation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShareInvitation `RamResource.resourceShareInvitation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ram:ShareOwnerAccountId`: Filters access based on resource shares owned by a specific account. For example, you can use this condition key to specify which resource share invitations can be accepted or rejected based on the resource share owner's account ID ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RejectResourceShareInvitation = "ram:RejectResourceShareInvitation",

  /**
   * Tagging - Grants permission to tag the specified resource share
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShare `RamResource.resourceShare`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request when creating or tagging a resource share. If users don't pass these specific tags, or if they don't specify tags at all, the request fails ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed when creating or tagging a resource share ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "ram:TagResource",

  /**
   * Tagging - Grants permission to untag the specified resource share
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShare `RamResource.resourceShare`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request when creating or tagging a resource share. If users don't pass these specific tags, or if they don't specify tags at all, the request fails ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed when creating or tagging a resource share ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "ram:UntagResource",

  /**
   * Write - Grants permission to update attributes of the resource share
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_UpdateResourceShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShare `RamResource.resourceShare`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:ResourceShareName`: Filters access based on a resource share with the specified name ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:AllowsExternalPrincipals`: Filters access based on resource shares that allow or deny sharing with external principals. For example, specify true if the action can only be performed on resource shares that allow sharing with external principals. External principals are AWS accounts that are outside of its AWS organization ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `ram:RequestedAllowsExternalPrincipals`: Filters access based on the specified value for 'allowExternalPrincipals'. External principals are AWS accounts that are outside of its AWS Organization ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  UpdateResourceShare = "ram:UpdateResourceShare",

  /**
   * * - Grant all ram permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceaccessmanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RamResource.resourceShareInvitation `RamResource.resourceShareInvitation`} 
   * - {@link RamResource.resourceShare `RamResource.resourceShare`} 
   * - {@link RamResource.permission `RamResource.permission`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ram:ShareOwnerAccountId`: Filters access based on resource shares owned by a specific account. For example, you can use this condition key to specify which resource share invitations can be accepted or rejected based on the resource share owner's account ID ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:ResourceShareName`: Filters access based on a resource share with the specified name ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:AllowsExternalPrincipals`: Filters access based on resource shares that allow or deny sharing with external principals. For example, specify true if the action can only be performed on resource shares that allow sharing with external principals. External principals are AWS accounts that are outside of its AWS organization ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `ram:Principal`: Filters access based on the format of the specified principal ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:RequestedResourceType`: Filters access based on the specified resource type ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:ResourceArn`: Filters access based on a resource with the specified ARN ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request when creating or tagging a resource share. If users don't pass these specific tags, or if they don't specify tags at all, the request fails ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed when creating or tagging a resource share ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `ram:RequestedAllowsExternalPrincipals`: Filters access based on the specified value for 'allowExternalPrincipals'. External principals are AWS accounts that are outside of its AWS Organization ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `ram:PermissionArn`: Filters access based on the specified Permission ARN ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  All = "ram:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceaccessmanager.html
 */
export const RamResource = {

  /**
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceShare.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ram:AllowsExternalPrincipals`: Filters access based on resource shares that allow or deny sharing with external principals. For example, specify true if the action can only be performed on resource shares that allow sharing with external principals. External principals are AWS accounts that are outside of its AWS organization ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `ram:ResourceShareName`: Filters access based on a resource share with the specified name ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  resourceShare: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:ram:${options.region || '*'}:${options.account || '*'}:resource-share/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceShareInvitation.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ram:ShareOwnerAccountId`: Filters access based on resource shares owned by a specific account. For example, you can use this condition key to specify which resource share invitations can be accepted or rejected based on the resource share owner's account ID ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  resourceShareInvitation: (options: Partial<{partition: string, region: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:ram:${options.region || '*'}:${options.account || '*'}:resource-share-invitation/${options.resourcePath || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceSharePermissionDetail.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ram:PermissionArn`: Filters access based on the specified Permission ARN ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `ram:PermissionResourceType`: Filters access based on permissions of specified resource type ({@link https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  permission: (options: Partial<{partition: string, account: string, resourcePath: string}> = {}) => `arn:${options.partition || '*'}:ram::${options.account || '*'}:permission/${options.resourcePath || '*'}`,
}

