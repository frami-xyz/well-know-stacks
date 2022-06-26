/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalappliancesandsoftware.html
 */
export enum ElementalAppliancesSoftwareAction {

  /**
   * Tagging - Grants permission to create a quote
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalAppliancesSoftwareResource.quote `ElementalAppliancesSoftwareResource.quote`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by request tag ({@link https://docs.aws.amazon.com/elemental-appliances-software documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/elemental-appliances-software documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateQuote = "elemental-appliances-software:CreateQuote",

  /**
   * Read - Grants permission to describe a quote
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalAppliancesSoftwareResource.quote `ElementalAppliancesSoftwareResource.quote`} 
   */
  GetQuote = "elemental-appliances-software:GetQuote",

  /**
   * List - Grants permission to list the quotes in the user account
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   */
  ListQuotes = "elemental-appliances-software:ListQuotes",

  /**
   * Read - Grants permission to lists tags for an AWS Elemental Appliances and Software resource
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalAppliancesSoftwareResource.quote `ElementalAppliancesSoftwareResource.quote`} 
   */
  ListTagsForResource = "elemental-appliances-software:ListTagsForResource",

  /**
   * Tagging - Grants permission to tag an AWS Elemental Appliances and Software resource
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalAppliancesSoftwareResource.quote `ElementalAppliancesSoftwareResource.quote`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/elemental-appliances-software documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by request tag ({@link https://docs.aws.amazon.com/elemental-appliances-software documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "elemental-appliances-software:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from an AWS Elemental Appliances and Software resource
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalAppliancesSoftwareResource.quote `ElementalAppliancesSoftwareResource.quote`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/elemental-appliances-software documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "elemental-appliances-software:UntagResource",

  /**
   * Write - Grants permission to modify a quote
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalAppliancesSoftwareResource.quote `ElementalAppliancesSoftwareResource.quote`} 
   */
  UpdateQuote = "elemental-appliances-software:UpdateQuote",

  /**
   * * - Grant all elemental-appliances-software permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalappliancesandsoftware.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ElementalAppliancesSoftwareResource.quote `ElementalAppliancesSoftwareResource.quote`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by request tag ({@link https://docs.aws.amazon.com/elemental-appliances-software documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/elemental-appliances-software documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "elemental-appliances-software:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalappliancesandsoftware.html
 */
export const ElementalAppliancesSoftwareResource = {

  /**
   * @see https://docs.aws.amazon.com/elemental-appliances-software
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by resource tag ({@link https://docs.aws.amazon.com/elemental-appliances-software documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  quote: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:elemental-appliances-software:${options.region || '*'}:${options.account || '*'}:quote/${options.resourceId || '*'}`,
}

