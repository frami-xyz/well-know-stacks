/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingconductor.html
 */
export enum BillingconductorAction {

  /**
   * Write - Grants permission to associate between one and 30 accounts to a billing group
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_AssociateAccounts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.billinggroup `BillingconductorResource.billinggroup`} 
   */
  AssociateAccounts = "billingconductor:AssociateAccounts",

  /**
   * Write - Grants permission to associate pricing rules
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_AssociatePricingRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.pricingplan `BillingconductorResource.pricingplan`} 
   * - {@link BillingconductorResource.pricingrule `BillingconductorResource.pricingrule`} 
   */
  AssociatePricingRules = "billingconductor:AssociatePricingRules",

  /**
   * Write - Grants permission to batch associate resources to a percentage custom line item
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_BatchAssociateResourcesToCustomLineItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.customlineitem `BillingconductorResource.customlineitem`} 
   */
  BatchAssociateResourcesToCustomLineItem = "billingconductor:BatchAssociateResourcesToCustomLineItem",

  /**
   * Write - Grants permission to batch disassociate resources from a percentage custom line item
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_BatchDisassociateResourcesFromCustomLineItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.customlineitem `BillingconductorResource.customlineitem`} 
   */
  BatchDisassociateResourcesFromCustomLineItem = "billingconductor:BatchDisassociateResourcesFromCustomLineItem",

  /**
   * Write - Grants permission to create a billing group
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreateBillingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.pricingplan `BillingconductorResource.pricingplan`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateBillingGroup = "billingconductor:CreateBillingGroup",

  /**
   * Write - Grants permission to create a custom line item
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreateCustomLineItem.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCustomLineItem = "billingconductor:CreateCustomLineItem",

  /**
   * Write - Grants permission to create a pricing plan
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreatePricingPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreatePricingPlan = "billingconductor:CreatePricingPlan",

  /**
   * Write - Grants permission to create a pricing rule
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreatePricingRule.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreatePricingRule = "billingconductor:CreatePricingRule",

  /**
   * Write - Grants permission to delete a billing group
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeleteBillingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.billinggroup `BillingconductorResource.billinggroup`} 
   */
  DeleteBillingGroup = "billingconductor:DeleteBillingGroup",

  /**
   * Write - Grants permission to delete a custom line item
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeleteCustomLineItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.customlineitem `BillingconductorResource.customlineitem`} 
   */
  DeleteCustomLineItem = "billingconductor:DeleteCustomLineItem",

  /**
   * Write - Grants permission to delete a pricing plan
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeletePricingPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.pricingplan `BillingconductorResource.pricingplan`} 
   */
  DeletePricingPlan = "billingconductor:DeletePricingPlan",

  /**
   * Write - Grants permission to delete a pricing rule
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeletePricingRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.pricingrule `BillingconductorResource.pricingrule`} 
   */
  DeletePricingRule = "billingconductor:DeletePricingRule",

  /**
   * Write - Grants permission to detach between one and 30 accounts from a billing group
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DisassociateAccounts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.billinggroup `BillingconductorResource.billinggroup`} 
   */
  DisassociateAccounts = "billingconductor:DisassociateAccounts",

  /**
   * Write - Grants permission to disassociate pricing rules
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DisassociatePricingRules.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.pricingplan `BillingconductorResource.pricingplan`} 
   * - {@link BillingconductorResource.pricingrule `BillingconductorResource.pricingrule`} 
   */
  DisassociatePricingRules = "billingconductor:DisassociatePricingRules",

  /**
   * List - Grants permission to list the linked accounts of the payer account for the given billing period while also providing the billing group the linked accounts belong to
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListAccountAssociations.html
   */
  ListAccountAssociations = "billingconductor:ListAccountAssociations",

  /**
   * Read - Grants permission to view the billing group cost report
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListBillingGroupCostReports.html
   */
  ListBillingGroupCostReports = "billingconductor:ListBillingGroupCostReports",

  /**
   * Read - Grants permission to view the details of billing groups
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListBillingGroups.html
   */
  ListBillingGroups = "billingconductor:ListBillingGroups",

  /**
   * Read - Grants permission to view custom line item details
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListCustomLineItems.html
   */
  ListCustomLineItems = "billingconductor:ListCustomLineItems",

  /**
   * Read - Grants permission to view the pricing plans details
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingPlans.html
   */
  ListPricingPlans = "billingconductor:ListPricingPlans",

  /**
   * List - Grants permission to list pricing plans associated with a pricing rule
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingPlansAssociatedWithPricingRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.pricingplan `BillingconductorResource.pricingplan`} 
   * - {@link BillingconductorResource.pricingrule `BillingconductorResource.pricingrule`} 
   */
  ListPricingPlansAssociatedWithPricingRule = "billingconductor:ListPricingPlansAssociatedWithPricingRule",

  /**
   * Read - Grants permission to view pricing rules details
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingRules.html
   */
  ListPricingRules = "billingconductor:ListPricingRules",

  /**
   * List - Grants permission to list pricing rules associated to a pricing plan
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingRulesAssociatedToPricingPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.pricingplan `BillingconductorResource.pricingplan`} 
   * - {@link BillingconductorResource.pricingrule `BillingconductorResource.pricingrule`} 
   */
  ListPricingRulesAssociatedToPricingPlan = "billingconductor:ListPricingRulesAssociatedToPricingPlan",

  /**
   * List - Grants permission to list resources associated to a percentage custom line item
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListResourcesAssociatedToCustomLineItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.customlineitem `BillingconductorResource.customlineitem`} 
   */
  ListResourcesAssociatedToCustomLineItem = "billingconductor:ListResourcesAssociatedToCustomLineItem",

  /**
   * Read - Grants permission to list tags of a resource
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "billingconductor:ListTagsForResource",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "billingconductor:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "billingconductor:UntagResource",

  /**
   * Write - Grants permission to update a billing group
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdateBillingGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.billinggroup `BillingconductorResource.billinggroup`} 
   */
  UpdateBillingGroup = "billingconductor:UpdateBillingGroup",

  /**
   * Write - Grants permission to update a custom line item
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdateCustomLineItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.customlineitem `BillingconductorResource.customlineitem`} 
   */
  UpdateCustomLineItem = "billingconductor:UpdateCustomLineItem",

  /**
   * Write - Grants permission to update a pricing plan
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdatePricingPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.pricingplan `BillingconductorResource.pricingplan`} 
   */
  UpdatePricingPlan = "billingconductor:UpdatePricingPlan",

  /**
   * Write - Grants permission to update a pricing rule
   * @see https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdatePricingRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.pricingrule `BillingconductorResource.pricingrule`} 
   */
  UpdatePricingRule = "billingconductor:UpdatePricingRule",

  /**
   * * - Grant all billingconductor permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingconductor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link BillingconductorResource.billinggroup `BillingconductorResource.billinggroup`} 
   * - {@link BillingconductorResource.pricingplan `BillingconductorResource.pricingplan`} 
   * - {@link BillingconductorResource.pricingrule `BillingconductorResource.pricingrule`} 
   * - {@link BillingconductorResource.customlineitem `BillingconductorResource.customlineitem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "billingconductor:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingconductor.html
 */
export const BillingconductorResource = {

  /**
   * @see https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-abc.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  billinggroup: (options: Partial<{partition: string, account: string, billingGroupId: string}> = {}) => `arn:${options.partition || '*'}:billingconductor::${options.account || '*'}:billinggroup/${options.billingGroupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-abc.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  pricingplan: (options: Partial<{partition: string, account: string, pricingPlanId: string}> = {}) => `arn:${options.partition || '*'}:billingconductor::${options.account || '*'}:pricingplan/${options.pricingPlanId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-abc.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  pricingrule: (options: Partial<{partition: string, account: string, pricingRuleId: string}> = {}) => `arn:${options.partition || '*'}:billingconductor::${options.account || '*'}:pricingrule/${options.pricingRuleId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-abc.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  customlineitem: (options: Partial<{partition: string, account: string, customLineItemId: string}> = {}) => `arn:${options.partition || '*'}:billingconductor::${options.account || '*'}:customlineitem/${options.customLineItemId || '*'}`,
}

