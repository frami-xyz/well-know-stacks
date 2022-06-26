/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoveryreadiness.html
 */
export enum Route53RecoveryReadinessAction {

  /**
   * Write - Grants permission to create a new cell
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/cells.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.cell `Route53RecoveryReadinessResource.cell`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateCell = "route53-recovery-readiness:CreateCell",

  /**
   * Write - Grants permission to create a cross account authorization
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/crossaccountauthorizations.html
   */
  CreateCrossAccountAuthorization = "route53-recovery-readiness:CreateCrossAccountAuthorization",

  /**
   * Write - Grants permission to create a readiness check
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.readinesscheck `Route53RecoveryReadinessResource.readinesscheck`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateReadinessCheck = "route53-recovery-readiness:CreateReadinessCheck",

  /**
   * Write - Grants permission to create a recovery group
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.recoverygroup `Route53RecoveryReadinessResource.recoverygroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateRecoveryGroup = "route53-recovery-readiness:CreateRecoveryGroup",

  /**
   * Write - Grants permission to create a resource set
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.resourceset `Route53RecoveryReadinessResource.resourceset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateResourceSet = "route53-recovery-readiness:CreateResourceSet",

  /**
   * Write - Grants permission to delete a cell
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.cell `Route53RecoveryReadinessResource.cell`} 
   */
  DeleteCell = "route53-recovery-readiness:DeleteCell",

  /**
   * Write - Grants permission to delete a cross account authorization
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/crossaccountauthorizations-crossaccountauthorization.html
   */
  DeleteCrossAccountAuthorization = "route53-recovery-readiness:DeleteCrossAccountAuthorization",

  /**
   * Write - Grants permission to delete a readiness check
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.readinesscheck `Route53RecoveryReadinessResource.readinesscheck`} 
   */
  DeleteReadinessCheck = "route53-recovery-readiness:DeleteReadinessCheck",

  /**
   * Write - Grants permission to delete a recovery group
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.recoverygroup `Route53RecoveryReadinessResource.recoverygroup`} 
   */
  DeleteRecoveryGroup = "route53-recovery-readiness:DeleteRecoveryGroup",

  /**
   * Write - Grants permission to delete a resource set
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.resourceset `Route53RecoveryReadinessResource.resourceset`} 
   */
  DeleteResourceSet = "route53-recovery-readiness:DeleteResourceSet",

  /**
   * Read - Grants permission to get architecture recommendations for a recovery group
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname-architecturerecommendations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.recoverygroup `Route53RecoveryReadinessResource.recoverygroup`} 
   */
  GetArchitectureRecommendations = "route53-recovery-readiness:GetArchitectureRecommendations",

  /**
   * Read - Grants permission to get information about a cell
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.cell `Route53RecoveryReadinessResource.cell`} 
   */
  GetCell = "route53-recovery-readiness:GetCell",

  /**
   * Read - Grants permission to get a readiness summary for a cell
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/cellreadiness-cellname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.cell `Route53RecoveryReadinessResource.cell`} 
   */
  GetCellReadinessSummary = "route53-recovery-readiness:GetCellReadinessSummary",

  /**
   * Read - Grants permission to get information about a readiness check
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.readinesscheck `Route53RecoveryReadinessResource.readinesscheck`} 
   */
  GetReadinessCheck = "route53-recovery-readiness:GetReadinessCheck",

  /**
   * Read - Grants permission to get the readiness status for an individual resource
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname-resource-resourceidentifier-status.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.readinesscheck `Route53RecoveryReadinessResource.readinesscheck`} 
   */
  GetReadinessCheckResourceStatus = "route53-recovery-readiness:GetReadinessCheckResourceStatus",

  /**
   * Read - Grants permission to get the status of a readiness check (for a resource set)
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname-status.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.readinesscheck `Route53RecoveryReadinessResource.readinesscheck`} 
   */
  GetReadinessCheckStatus = "route53-recovery-readiness:GetReadinessCheckStatus",

  /**
   * Read - Grants permission to get information about a recovery group
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.recoverygroup `Route53RecoveryReadinessResource.recoverygroup`} 
   */
  GetRecoveryGroup = "route53-recovery-readiness:GetRecoveryGroup",

  /**
   * Read - Grants permission to get a readiness summary for a recovery group
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroupreadiness-recoverygroupname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.recoverygroup `Route53RecoveryReadinessResource.recoverygroup`} 
   */
  GetRecoveryGroupReadinessSummary = "route53-recovery-readiness:GetRecoveryGroupReadinessSummary",

  /**
   * Read - Grants permission to get information about a resource set
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.resourceset `Route53RecoveryReadinessResource.resourceset`} 
   */
  GetResourceSet = "route53-recovery-readiness:GetResourceSet",

  /**
   * Read - Grants permission to list cells
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/cells.html
   */
  ListCells = "route53-recovery-readiness:ListCells",

  /**
   * Read - Grants permission to list cross account authorizations
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks.html
   */
  ListCrossAccountAuthorizations = "route53-recovery-readiness:ListCrossAccountAuthorizations",

  /**
   * Read - Grants permission to list readiness checks
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks.html
   */
  ListReadinessChecks = "route53-recovery-readiness:ListReadinessChecks",

  /**
   * Read - Grants permission to list recovery groups
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups.html
   */
  ListRecoveryGroups = "route53-recovery-readiness:ListRecoveryGroups",

  /**
   * Read - Grants permission to list resource sets
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets.html
   */
  ListResourceSets = "route53-recovery-readiness:ListResourceSets",

  /**
   * Read - Grants permission to list readiness rules
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/rules.html
   */
  ListRules = "route53-recovery-readiness:ListRules",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html
   */
  ListTagsForResources = "route53-recovery-readiness:ListTagsForResources",

  /**
   * Tagging - Grants permission to add a tag to a resource
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.cell `Route53RecoveryReadinessResource.cell`} 
   * - {@link Route53RecoveryReadinessResource.readinesscheck `Route53RecoveryReadinessResource.readinesscheck`} 
   * - {@link Route53RecoveryReadinessResource.recoverygroup `Route53RecoveryReadinessResource.recoverygroup`} 
   * - {@link Route53RecoveryReadinessResource.resourceset `Route53RecoveryReadinessResource.resourceset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "route53-recovery-readiness:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from a resource
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.cell `Route53RecoveryReadinessResource.cell`} 
   * - {@link Route53RecoveryReadinessResource.readinesscheck `Route53RecoveryReadinessResource.readinesscheck`} 
   * - {@link Route53RecoveryReadinessResource.recoverygroup `Route53RecoveryReadinessResource.recoverygroup`} 
   * - {@link Route53RecoveryReadinessResource.resourceset `Route53RecoveryReadinessResource.resourceset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "route53-recovery-readiness:UntagResource",

  /**
   * Write - Grants permission to update a cell
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.cell `Route53RecoveryReadinessResource.cell`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateCell = "route53-recovery-readiness:UpdateCell",

  /**
   * Write - Grants permission to update a readiness check
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.readinesscheck `Route53RecoveryReadinessResource.readinesscheck`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateReadinessCheck = "route53-recovery-readiness:UpdateReadinessCheck",

  /**
   * Write - Grants permission to update a recovery group
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.recoverygroup `Route53RecoveryReadinessResource.recoverygroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateRecoveryGroup = "route53-recovery-readiness:UpdateRecoveryGroup",

  /**
   * Write - Grants permission to update a resource set
   * @see https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.resourceset `Route53RecoveryReadinessResource.resourceset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateResourceSet = "route53-recovery-readiness:UpdateResourceSet",

  /**
   * * - Grant all route53-recovery-readiness permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoveryreadiness.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53RecoveryReadinessResource.cell `Route53RecoveryReadinessResource.cell`} 
   * - {@link Route53RecoveryReadinessResource.readinesscheck `Route53RecoveryReadinessResource.readinesscheck`} 
   * - {@link Route53RecoveryReadinessResource.recoverygroup `Route53RecoveryReadinessResource.recoverygroup`} 
   * - {@link Route53RecoveryReadinessResource.resourceset `Route53RecoveryReadinessResource.resourceset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "route53-recovery-readiness:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoveryreadiness.html
 */
export const Route53RecoveryReadinessResource = {

  /**
   * @see https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.readiness-checks.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  readinesscheck: (options: Partial<{partition: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53-recovery-readiness::${options.account || '*'}:readiness-check/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.readiness-checks.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  resourceset: (options: Partial<{partition: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53-recovery-readiness::${options.account || '*'}:resource-set/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.recovery-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cell: (options: Partial<{partition: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53-recovery-readiness::${options.account || '*'}:cell/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.recovery-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  recoverygroup: (options: Partial<{partition: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:route53-recovery-readiness::${options.account || '*'}:recovery-group/${options.resourceId || '*'}`,
}

