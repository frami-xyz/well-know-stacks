/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectcustomerprofiles.html
 */
export enum ProfileAction {

  /**
   * Write - Grants permission to add a profile key
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_AddProfileKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  AddProfileKey = "profile:AddProfileKey",

  /**
   * Write - Grants permission to create a Domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDomain = "profile:CreateDomain",

  /**
   * Write - Grants permission to create an integration workflow in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateIntegrationWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateIntegrationWorkflow = "profile:CreateIntegrationWorkflow",

  /**
   * Write - Grants permission to create a profile in the domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  CreateProfile = "profile:CreateProfile",

  /**
   * Write - Grants permission to delete a Domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  DeleteDomain = "profile:DeleteDomain",

  /**
   * Write - Grants permission to delete a integration in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   * - {@link ProfileResource.integrations `ProfileResource.integrations`} 
   */
  DeleteIntegration = "profile:DeleteIntegration",

  /**
   * Write - Grants permission to delete a profile
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  DeleteProfile = "profile:DeleteProfile",

  /**
   * Write - Grants permission to delete a profile key
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  DeleteProfileKey = "profile:DeleteProfileKey",

  /**
   * Write - Grants permission to delete a profile object
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   * - {@link ProfileResource.objectTypes `ProfileResource.objectTypes`} 
   */
  DeleteProfileObject = "profile:DeleteProfileObject",

  /**
   * Write - Grants permission to delete a specific profile object type in the domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileObjectType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   * - {@link ProfileResource.objectTypes `ProfileResource.objectTypes`} 
   */
  DeleteProfileObjectType = "profile:DeleteProfileObjectType",

  /**
   * Write - Grants permission to delete a workflow in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  DeleteWorkflow = "profile:DeleteWorkflow",

  /**
   * Read - Grants permission to get a preview of auto merging in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetAutoMergingPreview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  GetAutoMergingPreview = "profile:GetAutoMergingPreview",

  /**
   * Read - Grants permission to get a specific domain in an account
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  GetDomain = "profile:GetDomain",

  /**
   * Read - Grants permission to get an identity resolution job in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetIdentityResolutionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  GetIdentityResolutionJob = "profile:GetIdentityResolutionJob",

  /**
   * Read - Grants permission to get a specific integrations in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   * - {@link ProfileResource.integrations `ProfileResource.integrations`} 
   */
  GetIntegration = "profile:GetIntegration",

  /**
   * List - Grants permission to get profile matches in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  GetMatches = "profile:GetMatches",

  /**
   * Read - Grants permission to get a specific profile object type in the domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetProfileObjectType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   * - {@link ProfileResource.objectTypes `ProfileResource.objectTypes`} 
   */
  GetProfileObjectType = "profile:GetProfileObjectType",

  /**
   * Read - Grants permission to get a specific object type template
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetProfileObjectTypeTemplate.html
   */
  GetProfileObjectTypeTemplate = "profile:GetProfileObjectTypeTemplate",

  /**
   * Read - Grants permission to get workflow details in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetWorkflow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  GetWorkflow = "profile:GetWorkflow",

  /**
   * Read - Grants permission to get workflow step details in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetWorkflowSteps.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  GetWorkflowSteps = "profile:GetWorkflowSteps",

  /**
   * List - Grants permission to list all the integrations in the account
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListAccountIntegrations.html
   */
  ListAccountIntegrations = "profile:ListAccountIntegrations",

  /**
   * List - Grants permission to list all the domains in an account
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListDomains.html
   */
  ListDomains = "profile:ListDomains",

  /**
   * List - Grants permission to list identity resolution jobs in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListIdentityResolutionJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  ListIdentityResolutionJobs = "profile:ListIdentityResolutionJobs",

  /**
   * List - Grants permission to list all the integrations in a specific domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListIntegrations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  ListIntegrations = "profile:ListIntegrations",

  /**
   * List - Grants permission to list all the profile object type templates in the account
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjectTypeTemplates.html
   */
  ListProfileObjectTypeTemplates = "profile:ListProfileObjectTypeTemplates",

  /**
   * List - Grants permission to list all the profile object types in the domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjectTypes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  ListProfileObjectTypes = "profile:ListProfileObjectTypes",

  /**
   * List - Grants permission to list all the profile objects for a profile
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjects.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   * - {@link ProfileResource.objectTypes `ProfileResource.objectTypes`} 
   */
  ListProfileObjects = "profile:ListProfileObjects",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "profile:ListTagsForResource",

  /**
   * List - Grants permission to list all the workflows in a specific domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListWorkflows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  ListWorkflows = "profile:ListWorkflows",

  /**
   * Write - Grants permission to merge profiles in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_MergeProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  MergeProfiles = "profile:MergeProfiles",

  /**
   * Write - Grants permission to put a integration in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutIntegration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   * - {@link ProfileResource.integrations `ProfileResource.integrations`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutIntegration = "profile:PutIntegration",

  /**
   * Write - Grants permission to put an object for a profile
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutProfileObject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   * - {@link ProfileResource.objectTypes `ProfileResource.objectTypes`} 
   */
  PutProfileObject = "profile:PutProfileObject",

  /**
   * Write - Grants permission to put a specific profile object type in the domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutProfileObjectType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   * - {@link ProfileResource.objectTypes `ProfileResource.objectTypes`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PutProfileObjectType = "profile:PutProfileObjectType",

  /**
   * Read - Grants permission to search for profiles in a domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  SearchProfiles = "profile:SearchProfiles",

  /**
   * Tagging - Grants permission to adds tags to a resource
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "profile:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a resource
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "profile:UntagResource",

  /**
   * Write - Grants permission to update a Domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  UpdateDomain = "profile:UpdateDomain",

  /**
   * Write - Grants permission to update a profile in the domain
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   */
  UpdateProfile = "profile:UpdateProfile",

  /**
   * * - Grant all profile permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectcustomerprofiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ProfileResource.domains `ProfileResource.domains`} 
   * - {@link ProfileResource.integrations `ProfileResource.integrations`} 
   * - {@link ProfileResource.objectTypes `ProfileResource.objectTypes`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the customer profile service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "profile:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectcustomerprofiles.html
 */
export const ProfileResource = {

  /**
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  domains: (options: Partial<{partition: string, region: string, account: string, domainName: string}> = {}) => `arn:${options.partition || '*'}:profile:${options.region || '*'}:${options.account || '*'}:domains/${options.domainName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  objectTypes: (options: Partial<{partition: string, region: string, account: string, domainName: string, objectTypeName: string}> = {}) => `arn:${options.partition || '*'}:profile:${options.region || '*'}:${options.account || '*'}:domains/${options.domainName || '*'}/object-types/${options.objectTypeName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  integrations: (options: Partial<{partition: string, region: string, account: string, domainName: string, uri: string}> = {}) => `arn:${options.partition || '*'}:profile:${options.region || '*'}:${options.account || '*'}:domains/${options.domainName || '*'}/integrations/${options.uri || '*'}`,
}

