/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalappliancesandsoftwareactivationservice.html
 */
export enum ElementalActivationsAction {

  /**
   * Read - Grants permission to complete the process of registering customer account for AWS Elemental Appliances and Software Purchases
   * @see https://docs.aws.amazon.com/elemental-appliances-software/
   */
  CompleteAccountRegistration = "elemental-activations:CompleteAccountRegistration",

  /**
   * Read - Grants permission to complete the process of uploading a Software file for AWS Elemental Appliances and Software Purchases
   * @see https://docs.aws.amazon.com/elemental-appliances-software/
   */
  CompleteFileUpload = "elemental-activations:CompleteFileUpload",

  /**
   * Read - Grants permission to download the Software files for AWS Elemental Appliances and Software Purchases
   * @see https://docs.aws.amazon.com/elemental-appliances-software/
   */
  DownloadSoftware = "elemental-activations:DownloadSoftware",

  /**
   * Read - Grants permission to generate Software Licenses for AWS Elemental Appliances and Software Purchases
   * @see https://docs.aws.amazon.com/elemental-appliances-software/
   */
  GenerateLicenses = "elemental-activations:GenerateLicenses",

  /**
   * Read - Grants permission to describe an activation
   * @see https://docs.aws.amazon.com/elemental-appliances-software/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalActivationsResource.activation `ElementalActivationsResource.activation`} 
   */
  GetActivation = "elemental-activations:GetActivation",

  /**
   * Read - Grants permission to list tags for an AWS Elemental Activations resource
   * @see https://docs.aws.amazon.com/elemental-appliances-software/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalActivationsResource.activation `ElementalActivationsResource.activation`} 
   */
  ListTagsForResource = "elemental-activations:ListTagsForResource",

  /**
   * Read - Grants permission to start the process of registering customer account for AWS Elemental Appliances and Software Purchases
   * @see https://docs.aws.amazon.com/elemental-appliances-software/
   */
  StartAccountRegistration = "elemental-activations:StartAccountRegistration",

  /**
   * Read - Grants permission to start the process of uploading a Software file for AWS Elemental Appliances and Software Purchases
   * @see https://docs.aws.amazon.com/elemental-appliances-software/
   */
  StartFileUpload = "elemental-activations:StartFileUpload",

  /**
   * Tagging - Grants permission to add a tag for an AWS Elemental Activations resource
   * @see https://docs.aws.amazon.com/elemental-appliances-software/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalActivationsResource.activation `ElementalActivationsResource.activation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "elemental-activations:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from an AWS Elemental Activations resource
   * @see https://docs.aws.amazon.com/elemental-appliances-software/
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalActivationsResource.activation `ElementalActivationsResource.activation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "elemental-activations:UntagResource",

  /**
   * * - Grant all elemental-activations permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalappliancesandsoftwareactivationservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalActivationsResource.activation `ElementalActivationsResource.activation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "elemental-activations:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalappliancesandsoftwareactivationservice.html
 */
export const ElementalActivationsResource = {

  /**
   * @see https://docs.aws.amazon.com/elemental-appliances-software/
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  activation: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:elemental-activations:${options.region || '*'}:${options.account || '*'}:activation/${options.resourceId || '*'}`,
}

