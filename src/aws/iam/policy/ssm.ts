/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html
 */
export enum SsmAction {

  /**
   * Tagging - Grants permission to add or overwrite one or more tags for a specified AWS resource
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AddTagsToResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.automationExecution `SsmResource.automationExecution`} 
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   * - {@link SsmResource.opsitem `SsmResource.opsitem`} 
   * - {@link SsmResource.opsmetadata `SsmResource.opsmetadata`} 
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by 'Create' requests based on the allowed set of values for a specified tags ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by 'Create' requests based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  AddTagsToResource = "ssm:AddTagsToResource",

  /**
   * Write - Grants permission to associate RelatedItem to an OpsItem
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AssociateOpsItemRelatedItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.opsitem `SsmResource.opsitem`} 
   */
  AssociateOpsItemRelatedItem = "ssm:AssociateOpsItemRelatedItem",

  /**
   * Write - Grants permission to cancel a specified Run Command command
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelCommand.html
   */
  CancelCommand = "ssm:CancelCommand",

  /**
   * Write - Grants permission to cancel an in-progress maintenance window execution
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CancelMaintenanceWindowExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  CancelMaintenanceWindowExecution = "ssm:CancelMaintenanceWindowExecution",

  /**
   * Write - Grants permission to create an activation that is used to register on-premises servers and virtual machines (VMs) with Systems Manager
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateActivation.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by 'Create' requests based on the allowed set of values for a specified tags ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by 'Create' requests based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateActivation = "ssm:CreateActivation",

  /**
   * Write - Grants permission to associate a specified Systems Manager document with specified instances or other targets
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  CreateAssociation = "ssm:CreateAssociation",

  /**
   * Write - Grants permission to combine entries for multiple CreateAssociation operations in a single command
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateAssociationBatch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  CreateAssociationBatch = "ssm:CreateAssociationBatch",

  /**
   * Write - Grants permission to create a Systems Manager SSM document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateDocument.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by 'Create' requests based on the allowed set of values for a specified tags ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by 'Create' requests based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDocument = "ssm:CreateDocument",

  /**
   * Write - Grants permission to create a maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateMaintenanceWindow.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by 'Create' requests based on the allowed set of values for a specified tags ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by 'Create' requests based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMaintenanceWindow = "ssm:CreateMaintenanceWindow",

  /**
   * Write - Grants permission to create an OpsItem in OpsCenter
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateOpsItem.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by 'Create' requests based on the allowed set of values for a specified tags ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by 'Create' requests based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateOpsItem = "ssm:CreateOpsItem",

  /**
   * Write - Grants permission to create an OpsMetadata object for an AWS resource
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateOpsMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by 'Create' requests based on the allowed set of values for a specified tags ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by 'Create' requests based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateOpsMetadata = "ssm:CreateOpsMetadata",

  /**
   * Write - Grants permission to create a patch baseline
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreatePatchBaseline.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by 'Create' requests based on the allowed set of values for a specified tags ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by 'Create' requests based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePatchBaseline = "ssm:CreatePatchBaseline",

  /**
   * Write - Grants permission to create a resource data sync configuration, which regularly collects inventory data from managed instances and updates the data in an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateResourceDataSync.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.resourcedatasync `SsmResource.resourcedatasync`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ssm:SyncType`: Filters access by verifying that a user also has access to the ResourceDataSync SyncType specified in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateResourceDataSync = "ssm:CreateResourceDataSync",

  /**
   * Write - Grants permission to delete a specified activation for managed instances
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteActivation.html
   */
  DeleteActivation = "ssm:DeleteActivation",

  /**
   * Write - Grants permission to disassociate a specified SSM document from a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.association `SsmResource.association`} 
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  DeleteAssociation = "ssm:DeleteAssociation",

  /**
   * Write - Grants permission to delete a specified SSM document and its instance associations
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteDocument.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  DeleteDocument = "ssm:DeleteDocument",

  /**
   * Write - Grants permission to delete a specified custom inventory type, or the data associated with a custom inventory type
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteInventory.html
   */
  DeleteInventory = "ssm:DeleteInventory",

  /**
   * Write - Grants permission to delete a specified maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteMaintenanceWindow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  DeleteMaintenanceWindow = "ssm:DeleteMaintenanceWindow",

  /**
   * Write - Grants permission to delete an OpsMetadata object
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteOpsMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.opsmetadata `SsmResource.opsmetadata`} 
   */
  DeleteOpsMetadata = "ssm:DeleteOpsMetadata",

  /**
   * Write - Grants permission to delete a specified SSM parameter
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   */
  DeleteParameter = "ssm:DeleteParameter",

  /**
   * Write - Grants permission to delete multiple specified SSM parameters
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   */
  DeleteParameters = "ssm:DeleteParameters",

  /**
   * Write - Grants permission to delete a specified patch baseline
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeletePatchBaseline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   */
  DeletePatchBaseline = "ssm:DeletePatchBaseline",

  /**
   * Write - Grants permission to delete a specified resource data sync
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeleteResourceDataSync.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.resourcedatasync `SsmResource.resourcedatasync`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ssm:SyncType`: Filters access by verifying that a user also has access to the ResourceDataSync SyncType specified in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteResourceDataSync = "ssm:DeleteResourceDataSync",

  /**
   * Write - Grants permission to deregister a specified on-premises server or virtual machine (VM) from Systems Manager
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterManagedInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ssm:resourceTag/tag-key`: Filters access by based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeregisterManagedInstance = "ssm:DeregisterManagedInstance",

  /**
   * Write - Grants permission to deregister a specified patch baseline from being the default patch baseline for a specified patch group
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterPatchBaselineForPatchGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   */
  DeregisterPatchBaselineForPatchGroup = "ssm:DeregisterPatchBaselineForPatchGroup",

  /**
   * Write - Grants permission to deregister a specified target from a maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTargetFromMaintenanceWindow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  DeregisterTargetFromMaintenanceWindow = "ssm:DeregisterTargetFromMaintenanceWindow",

  /**
   * Write - Grants permission to deregister a specified task from a maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DeregisterTaskFromMaintenanceWindow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  DeregisterTaskFromMaintenanceWindow = "ssm:DeregisterTaskFromMaintenanceWindow",

  /**
   * Read - Grants permission to view details about a specified managed instance activation, such as when it was created and the number of instances registered using the activation
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeActivations.html
   */
  DescribeActivations = "ssm:DescribeActivations",

  /**
   * Read - Grants permission to view details about the specified association for a specified instance or target
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.association `SsmResource.association`} 
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  DescribeAssociation = "ssm:DescribeAssociation",

  /**
   * Read - Grants permission to view information about a specified association execution
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutionTargets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.association `SsmResource.association`} 
   */
  DescribeAssociationExecutionTargets = "ssm:DescribeAssociationExecutionTargets",

  /**
   * Read - Grants permission to view all executions for a specified association
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAssociationExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.association `SsmResource.association`} 
   */
  DescribeAssociationExecutions = "ssm:DescribeAssociationExecutions",

  /**
   * Read - Grants permission to view details about all active and terminated Automation executions
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationExecutions.html
   */
  DescribeAutomationExecutions = "ssm:DescribeAutomationExecutions",

  /**
   * Read - Grants permission to view information about all active and terminated step executions in an Automation workflow
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAutomationStepExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.automationExecution `SsmResource.automationExecution`} 
   */
  DescribeAutomationStepExecutions = "ssm:DescribeAutomationStepExecutions",

  /**
   * Read - Grants permission to view all patches eligible to include in a patch baseline
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeAvailablePatches.html
   */
  DescribeAvailablePatches = "ssm:DescribeAvailablePatches",

  /**
   * Read - Grants permission to view details about a specified SSM document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocument.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  DescribeDocument = "ssm:DescribeDocument",

  /**
   * Read - Grants permission to display information about SSM document parameters in the Systems Manager console (internal Systems Manager action)
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  DescribeDocumentParameters = "ssm:DescribeDocumentParameters",

  /**
   * Read - Grants permission to view the permissions for a specified SSM document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeDocumentPermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  DescribeDocumentPermission = "ssm:DescribeDocumentPermission",

  /**
   * Read - Grants permission to view all current associations for a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectiveInstanceAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  DescribeEffectiveInstanceAssociations = "ssm:DescribeEffectiveInstanceAssociations",

  /**
   * Read - Grants permission to view details about the patches currently associated with the specified patch baseline (Windows only)
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeEffectivePatchesForPatchBaseline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   */
  DescribeEffectivePatchesForPatchBaseline = "ssm:DescribeEffectivePatchesForPatchBaseline",

  /**
   * Read - Grants permission to view the status of the associations for a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceAssociationsStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  DescribeInstanceAssociationsStatus = "ssm:DescribeInstanceAssociationsStatus",

  /**
   * Read - Grants permission to view details about a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstanceInformation.html
   */
  DescribeInstanceInformation = "ssm:DescribeInstanceInformation",

  /**
   * Read - Grants permission to view status details about patches on a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStates.html
   */
  DescribeInstancePatchStates = "ssm:DescribeInstancePatchStates",

  /**
   * Read - Grants permission to describe the high-level patch state for the instances in the specified patch group
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatchStatesForPatchGroup.html
   */
  DescribeInstancePatchStatesForPatchGroup = "ssm:DescribeInstancePatchStatesForPatchGroup",

  /**
   * Read - Grants permission to view general details about the patches on a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInstancePatches.html
   */
  DescribeInstancePatches = "ssm:DescribeInstancePatches",

  /**
   * Read - Grants permission to user's Amazon EC2 console to render managed instances' nodes
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   */
  DescribeInstanceProperties = "ssm:DescribeInstanceProperties",

  /**
   * Read - Grants permission to view details about a specified inventory deletion
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeInventoryDeletions.html
   */
  DescribeInventoryDeletions = "ssm:DescribeInventoryDeletions",

  /**
   * List - Grants permission to view details of a specified task execution for a maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTaskInvocations.html
   */
  DescribeMaintenanceWindowExecutionTaskInvocations = "ssm:DescribeMaintenanceWindowExecutionTaskInvocations",

  /**
   * List - Grants permission to view details about the tasks that ran during a specified maintenance window execution
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutionTasks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  DescribeMaintenanceWindowExecutionTasks = "ssm:DescribeMaintenanceWindowExecutionTasks",

  /**
   * List - Grants permission to view the executions of a specified maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  DescribeMaintenanceWindowExecutions = "ssm:DescribeMaintenanceWindowExecutions",

  /**
   * List - Grants permission to view details about upcoming executions of a specified maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowSchedule.html
   */
  DescribeMaintenanceWindowSchedule = "ssm:DescribeMaintenanceWindowSchedule",

  /**
   * List - Grants permission to view a list of the targets associated with a specified maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTargets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  DescribeMaintenanceWindowTargets = "ssm:DescribeMaintenanceWindowTargets",

  /**
   * List - Grants permission to view a list of the tasks associated with a specified maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowTasks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  DescribeMaintenanceWindowTasks = "ssm:DescribeMaintenanceWindowTasks",

  /**
   * List - Grants permission to view information about all or specified maintenance windows
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindows.html
   */
  DescribeMaintenanceWindows = "ssm:DescribeMaintenanceWindows",

  /**
   * List - Grants permission to view information about the maintenance window targets and tasks associated with a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeMaintenanceWindowsForTarget.html
   */
  DescribeMaintenanceWindowsForTarget = "ssm:DescribeMaintenanceWindowsForTarget",

  /**
   * Read - Grants permission to view details about specified OpsItems
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeOpsItems.html
   */
  DescribeOpsItems = "ssm:DescribeOpsItems",

  /**
   * List - Grants permission to view details about a specified SSM parameter
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeParameters.html
   */
  DescribeParameters = "ssm:DescribeParameters",

  /**
   * List - Grants permission to view information about patch baselines that meet the specified criteria
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchBaselines.html
   */
  DescribePatchBaselines = "ssm:DescribePatchBaselines",

  /**
   * List - Grants permission to view aggregated status details for patches for a specified patch group
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroupState.html
   */
  DescribePatchGroupState = "ssm:DescribePatchGroupState",

  /**
   * List - Grants permission to view information about the patch baseline for a specified patch group
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchGroups.html
   */
  DescribePatchGroups = "ssm:DescribePatchGroups",

  /**
   * List - Grants permission to view details of available patches for a specified operating system and patch property
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties.html
   */
  DescribePatchProperties = "ssm:DescribePatchProperties",

  /**
   * List - Grants permission to view a list of recent Session Manager sessions that meet the specified search criteria
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribeSessions.html
   */
  DescribeSessions = "ssm:DescribeSessions",

  /**
   * Write - Grants permission to disassociate RelatedItem from an OpsItem
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DisassociateOpsItemRelatedItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.opsitem `SsmResource.opsitem`} 
   */
  DisassociateOpsItemRelatedItem = "ssm:DisassociateOpsItemRelatedItem",

  /**
   * Read - Grants permission to view details of a specified Automation execution
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_AutomationExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.automationExecution `SsmResource.automationExecution`} 
   */
  GetAutomationExecution = "ssm:GetAutomationExecution",

  /**
   * Read - Grants permission to view details of a specific calendar
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  GetCalendar = "ssm:GetCalendar",

  /**
   * Read - Grants permission to view the calendar state for a change calendar or a list of change calendars
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCalendarState.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  GetCalendarState = "ssm:GetCalendarState",

  /**
   * Read - Grants permission to view details about the command execution of a specified invocation or plugin
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCommandInvocation.html
   */
  GetCommandInvocation = "ssm:GetCommandInvocation",

  /**
   * Read - Grants permission to view the Session Manager connection status for a specified managed instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetConnectionStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   * - {@link SsmResource.task `SsmResource.task`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ssm:resourceTag/${TagKey}`: Filters access based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetConnectionStatus = "ssm:GetConnectionStatus",

  /**
   * Read - Grants permission to view the current default patch baseline for a specified operating system type
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDefaultPatchBaseline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   */
  GetDefaultPatchBaseline = "ssm:GetDefaultPatchBaseline",

  /**
   * Read - Grants permission to retrieve the current patch baseline snapshot for a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDeployablePatchSnapshotForInstance.html
   */
  GetDeployablePatchSnapshotForInstance = "ssm:GetDeployablePatchSnapshotForInstance",

  /**
   * Read - Grants permission to view the contents of a specified SSM document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetDocument.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ssm:DocumentCategories`: Filters access by verifying that a user has permission to access a document belonging to a specific category enum ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  GetDocument = "ssm:GetDocument",

  /**
   * Read - Grants permission to view instance inventory details per the specified criteria
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventory.html
   */
  GetInventory = "ssm:GetInventory",

  /**
   * Read - Grants permission to view a list of inventory types or attribute names for a specified inventory item type
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetInventorySchema.html
   */
  GetInventorySchema = "ssm:GetInventorySchema",

  /**
   * Read - Grants permission to view details about a specified maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  GetMaintenanceWindow = "ssm:GetMaintenanceWindow",

  /**
   * Read - Grants permission to view details about a specified maintenance window execution
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecution.html
   */
  GetMaintenanceWindowExecution = "ssm:GetMaintenanceWindowExecution",

  /**
   * Read - Grants permission to view details about a specified maintenance window execution task
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTask.html
   */
  GetMaintenanceWindowExecutionTask = "ssm:GetMaintenanceWindowExecutionTask",

  /**
   * Read - Grants permission to view details about a specific maintenance window task running on a specific target
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowExecutionTaskInvocation.html
   */
  GetMaintenanceWindowExecutionTaskInvocation = "ssm:GetMaintenanceWindowExecutionTaskInvocation",

  /**
   * Read - Grants permission to view details about tasks registered with a specified maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetMaintenanceWindowTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  GetMaintenanceWindowTask = "ssm:GetMaintenanceWindowTask",

  /**
   * Read - Grants permission to Systems Manager and SSM Agent to determine package installation requirements for an instance (internal Systems Manager call)
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html
   */
  GetManifest = "ssm:GetManifest",

  /**
   * Read - Grants permission to view information about a specified OpsItem
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.opsitem `SsmResource.opsitem`} 
   */
  GetOpsItem = "ssm:GetOpsItem",

  /**
   * Read - Grants permission to retrieve an OpsMetadata object
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.opsmetadata `SsmResource.opsmetadata`} 
   */
  GetOpsMetadata = "ssm:GetOpsMetadata",

  /**
   * Read - Grants permission to view summary information about OpsItems based on specified filters and aggregators
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetOpsSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.resourcedatasync `SsmResource.resourcedatasync`} 
   */
  GetOpsSummary = "ssm:GetOpsSummary",

  /**
   * Read - Grants permission to view information about a specified parameter
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   */
  GetParameter = "ssm:GetParameter",

  /**
   * Read - Grants permission to view details and changes for a specified parameter
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameterHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   */
  GetParameterHistory = "ssm:GetParameterHistory",

  /**
   * Read - Grants permission to view information about multiple specified parameters
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   */
  GetParameters = "ssm:GetParameters",

  /**
   * Read - Grants permission to view information about parameters in a specified hierarchy
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ssm:Recursive`: Filters access to Systems Manager parameters created in a hierarchical structure ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetParametersByPath = "ssm:GetParametersByPath",

  /**
   * Read - Grants permission to view information about a specified patch baseline
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaseline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   */
  GetPatchBaseline = "ssm:GetPatchBaseline",

  /**
   * Read - Grants permission to view the ID of the current patch baseline for a specified patch group
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetPatchBaselineForPatchGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   */
  GetPatchBaselineForPatchGroup = "ssm:GetPatchBaselineForPatchGroup",

  /**
   * Read - Grants permission to view the account-level setting for an AWS service
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetServiceSetting.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.servicesetting `SsmResource.servicesetting`} 
   */
  GetServiceSetting = "ssm:GetServiceSetting",

  /**
   * Write - Grants permission to apply an identifying label to a specified version of a parameter
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_LabelParameterVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   */
  LabelParameterVersion = "ssm:LabelParameterVersion",

  /**
   * List - Grants permission to list versions of the specified association
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociationVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.association `SsmResource.association`} 
   */
  ListAssociationVersions = "ssm:ListAssociationVersions",

  /**
   * List - Grants permission to list the associations for a specified SSM document or managed instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListAssociations.html
   */
  ListAssociations = "ssm:ListAssociations",

  /**
   * List - Grants permission to list information about command invocations sent to a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommandInvocations.html
   */
  ListCommandInvocations = "ssm:ListCommandInvocations",

  /**
   * List - Grants permission to list the commands sent to a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommands.html
   */
  ListCommands = "ssm:ListCommands",

  /**
   * List - Grants permission to list compliance status for specified resource types on a specified resource
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceItems.html
   */
  ListComplianceItems = "ssm:ListComplianceItems",

  /**
   * List - Grants permission to list a summary count of compliant and noncompliant resources for a specified compliance type
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListComplianceSummaries.html
   */
  ListComplianceSummaries = "ssm:ListComplianceSummaries",

  /**
   * List - Grants permission to view metadata history about a specified SSM document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocumentMetadataHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  ListDocumentMetadataHistory = "ssm:ListDocumentMetadataHistory",

  /**
   * List - Grants permission to list all versions of a specified document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocumentVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  ListDocumentVersions = "ssm:ListDocumentVersions",

  /**
   * List - Grants permission to view information about a specified SSM document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListDocuments.html
   */
  ListDocuments = "ssm:ListDocuments",

  /**
   * List - Grants permission to SSM Agent to check for new State Manager associations (internal Systems Manager call)
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  ListInstanceAssociations = "ssm:ListInstanceAssociations",

  /**
   * List - Grants permission to view a list of specified inventory types for a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListInventoryEntries.html
   */
  ListInventoryEntries = "ssm:ListInventoryEntries",

  /**
   * List - Grants permission to view details about OpsItemEvents
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsItemEvents.html
   */
  ListOpsItemEvents = "ssm:ListOpsItemEvents",

  /**
   * List - Grants permission to view details about OpsItem RelatedItems
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsItemRelatedItems.html
   */
  ListOpsItemRelatedItems = "ssm:ListOpsItemRelatedItems",

  /**
   * List - Grants permission to view a list of OpsMetadata objects
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListOpsMetadata.html
   */
  ListOpsMetadata = "ssm:ListOpsMetadata",

  /**
   * List - Grants permission to list resource-level summary count
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceComplianceSummaries.html
   */
  ListResourceComplianceSummaries = "ssm:ListResourceComplianceSummaries",

  /**
   * List - Grants permission to list information about resource data sync configurations in an account
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListResourceDataSync.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ssm:SyncType`: Filters access by verifying that a user also has access to the ResourceDataSync SyncType specified in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListResourceDataSync = "ssm:ListResourceDataSync",

  /**
   * List - Grants permission to view a list of resource tags for a specified resource
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.automationExecution `SsmResource.automationExecution`} 
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   * - {@link SsmResource.opsitem `SsmResource.opsitem`} 
   * - {@link SsmResource.opsmetadata `SsmResource.opsmetadata`} 
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   */
  ListTagsForResource = "ssm:ListTagsForResource",

  /**
   * Permissions management - Grants permission to share a custom SSM document publicly or privately with specified AWS accounts
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ModifyDocumentPermission.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  ModifyDocumentPermission = "ssm:ModifyDocumentPermission",

  /**
   * Write - Grants permission to create/edit a specific calendar
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  PutCalendar = "ssm:PutCalendar",

  /**
   * Write - Grants permission to register a compliance type and other compliance details on a specified resource
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutComplianceItems.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  PutComplianceItems = "ssm:PutComplianceItems",

  /**
   * Read - Grants permission to SSM Agent to generate a report of the results of specific agent requests (internal Systems Manager call)
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html
   */
  PutConfigurePackageResult = "ssm:PutConfigurePackageResult",

  /**
   * Write - Grants permission to add or update inventory items on multiple specified managed instances
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutInventory.html
   */
  PutInventory = "ssm:PutInventory",

  /**
   * Write - Grants permission to create an SSM parameter
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PutParameter.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by 'Create' requests based on the allowed set of values for a specified tags ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by 'Create' requests based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `ssm:Overwrite`: Controls whether Systems Manager parameters can be overwritten ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutParameter = "ssm:PutParameter",

  /**
   * Write - Grants permission to specify the default patch baseline for an operating system type
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterDefaultPatchBaseline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   */
  RegisterDefaultPatchBaseline = "ssm:RegisterDefaultPatchBaseline",

  /**
   * Write - Grants permission to register a Systems Manager Agent
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by 'Create' requests based on the allowed set of values for a specified tags ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by 'Create' requests based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RegisterManagedInstance = "ssm:RegisterManagedInstance",

  /**
   * Write - Grants permission to specify the default patch baseline for a specified patch group
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterPatchBaselineForPatchGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   */
  RegisterPatchBaselineForPatchGroup = "ssm:RegisterPatchBaselineForPatchGroup",

  /**
   * Write - Grants permission to register a target with a specified maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTargetWithMaintenanceWindow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  RegisterTargetWithMaintenanceWindow = "ssm:RegisterTargetWithMaintenanceWindow",

  /**
   * Write - Grants permission to register a task with a specified maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTaskWithMaintenanceWindow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  RegisterTaskWithMaintenanceWindow = "ssm:RegisterTaskWithMaintenanceWindow",

  /**
   * Tagging - Grants permission to remove a specified tag key from a specified resource
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RemoveTagsFromResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.automationExecution `SsmResource.automationExecution`} 
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   * - {@link SsmResource.opsitem `SsmResource.opsitem`} 
   * - {@link SsmResource.opsmetadata `SsmResource.opsmetadata`} 
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by 'Create' requests based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RemoveTagsFromResource = "ssm:RemoveTagsFromResource",

  /**
   * Write - Grants permission to reset the service setting for an AWS account to the default value
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResetServiceSetting.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.servicesetting `SsmResource.servicesetting`} 
   */
  ResetServiceSetting = "ssm:ResetServiceSetting",

  /**
   * Write - Grants permission to reconnect a Session Manager session to a managed instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ResumeSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.session `SsmResource.session`} 
   */
  ResumeSession = "ssm:ResumeSession",

  /**
   * Write - Grants permission to send a signal to change the current behavior or status of a specified Automation execution
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendAutomationSignal.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.automationExecution `SsmResource.automationExecution`} 
   */
  SendAutomationSignal = "ssm:SendAutomationSignal",

  /**
   * Write - Grants permission to run commands on one or more specified managed instances
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendCommand.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.bucket `SsmResource.bucket`} 
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:resourceTag/${TagKey}`: Filters access based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SendCommand = "ssm:SendCommand",

  /**
   * Write - Grants permission to run a specified association manually
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAssociationsOnce.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.association `SsmResource.association`} 
   */
  StartAssociationsOnce = "ssm:StartAssociationsOnce",

  /**
   * Write - Grants permission to initiate the execution of an Automation document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartAutomationExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.automationDefinition `SsmResource.automationDefinition`} 
   */
  StartAutomationExecution = "ssm:StartAutomationExecution",

  /**
   * Write - Grants permission to initiate the execution of an Automation Change Template document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartChangeRequestExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.automationDefinition `SsmResource.automationDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ssm:AutoApprove`: Filters access by verifying that a user has permission to start Change Manager workflows without a review step (with the exception of change freeze events) ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/change-manager-auto-approval-access.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartChangeRequestExecution = "ssm:StartChangeRequestExecution",

  /**
   * Write - Grants permission to initiate a connection to a specified target for a Session Manager session
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   * - {@link SsmResource.task `SsmResource.task`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ssm:SessionDocumentAccessCheck`: Filters access by verifying that a user has permission to access either the default Session Manager configuration document or the custom configuration document specified in a request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-sessiondocumentaccesscheck.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `ssm:resourceTag/${TagKey}`: Filters access based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartSession = "ssm:StartSession",

  /**
   * Write - Grants permission to stop a specified Automation execution that is already in progress
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StopAutomationExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.automationExecution `SsmResource.automationExecution`} 
   */
  StopAutomationExecution = "ssm:StopAutomationExecution",

  /**
   * Write - Grants permission to permanently end a Session Manager connection to an instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_TerminateSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.session `SsmResource.session`} 
   */
  TerminateSession = "ssm:TerminateSession",

  /**
   * Write - Grants permission to remove an identifying label from a specified version of a parameter
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UnlabelParameterVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   */
  UnlabelParameterVersion = "ssm:UnlabelParameterVersion",

  /**
   * Write - Grants permission to update an association and immediately run the association on the specified targets
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.association `SsmResource.association`} 
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  UpdateAssociation = "ssm:UpdateAssociation",

  /**
   * Write - Grants permission to update the status of the SSM document associated with a specified instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateAssociationStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  UpdateAssociationStatus = "ssm:UpdateAssociationStatus",

  /**
   * Write - Grants permission to update one or more values for an SSM document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocument.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  UpdateDocument = "ssm:UpdateDocument",

  /**
   * Write - Grants permission to change the default version of an SSM document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocumentDefaultVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  UpdateDocumentDefaultVersion = "ssm:UpdateDocumentDefaultVersion",

  /**
   * Write - Grants permission to update the metadata of an SSM document
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateDocumentMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.document `SsmResource.document`} 
   */
  UpdateDocumentMetadata = "ssm:UpdateDocumentMetadata",

  /**
   * Write - Grants permission to SSM Agent to update the status of the association that it is currently running (internal Systems Manager call)
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.association `SsmResource.association`} 
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  UpdateInstanceAssociationStatus = "ssm:UpdateInstanceAssociationStatus",

  /**
   * Write - Grants permission to SSM Agent to send a heartbeat signal to the Systems Manager service in the cloud
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-messageAPIs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   */
  UpdateInstanceInformation = "ssm:UpdateInstanceInformation",

  /**
   * Write - Grants permission to update a specified maintenance window
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  UpdateMaintenanceWindow = "ssm:UpdateMaintenanceWindow",

  /**
   * Write - Grants permission to update a specified maintenance window target
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTarget.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  UpdateMaintenanceWindowTarget = "ssm:UpdateMaintenanceWindowTarget",

  /**
   * Write - Grants permission to update a specified maintenance window task
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateMaintenanceWindowTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   */
  UpdateMaintenanceWindowTask = "ssm:UpdateMaintenanceWindowTask",

  /**
   * Write - Grants permission to assign or change the IAM role assigned to a specified managed instance
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateManagedInstanceRole.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ssm:resourceTag/tag-key`: Filters access by based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateManagedInstanceRole = "ssm:UpdateManagedInstanceRole",

  /**
   * Write - Grants permission to edit or change an OpsItem
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateOpsItem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.opsitem `SsmResource.opsitem`} 
   */
  UpdateOpsItem = "ssm:UpdateOpsItem",

  /**
   * Write - Grants permission to update an OpsMetadata object
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateOpsMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.opsmetadata `SsmResource.opsmetadata`} 
   */
  UpdateOpsMetadata = "ssm:UpdateOpsMetadata",

  /**
   * Write - Grants permission to update a specified patch baseline
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdatePatchBaseline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   */
  UpdatePatchBaseline = "ssm:UpdatePatchBaseline",

  /**
   * Write - Grants permission to update a resource data sync
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateResourceDataSync.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.resourcedatasync `SsmResource.resourcedatasync`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ssm:SyncType`: Filters access by verifying that a user also has access to the ResourceDataSync SyncType specified in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateResourceDataSync = "ssm:UpdateResourceDataSync",

  /**
   * Write - Grants permission to update the service setting for an AWS account
   * @see https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_UpdateServiceSetting.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.servicesetting `SsmResource.servicesetting`} 
   */
  UpdateServiceSetting = "ssm:UpdateServiceSetting",

  /**
   * * - Grant all ssm permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SsmResource.automationExecution `SsmResource.automationExecution`} 
   * - {@link SsmResource.document `SsmResource.document`} 
   * - {@link SsmResource.maintenancewindow `SsmResource.maintenancewindow`} 
   * - {@link SsmResource.managedInstance `SsmResource.managedInstance`} 
   * - {@link SsmResource.opsitem `SsmResource.opsitem`} 
   * - {@link SsmResource.opsmetadata `SsmResource.opsmetadata`} 
   * - {@link SsmResource.parameter `SsmResource.parameter`} 
   * - {@link SsmResource.patchbaseline `SsmResource.patchbaseline`} 
   * - {@link SsmResource.instance `SsmResource.instance`} 
   * - {@link SsmResource.resourcedatasync `SsmResource.resourcedatasync`} 
   * - {@link SsmResource.association `SsmResource.association`} 
   * - {@link SsmResource.task `SsmResource.task`} 
   * - {@link SsmResource.servicesetting `SsmResource.servicesetting`} 
   * - {@link SsmResource.session `SsmResource.session`} 
   * - {@link SsmResource.bucket `SsmResource.bucket`} 
   * - {@link SsmResource.automationDefinition `SsmResource.automationDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by 'Create' requests based on the allowed set of values for a specified tags ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by 'Create' requests based on whether mandatory tags are included in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `ssm:SyncType`: Filters access by verifying that a user also has access to the ResourceDataSync SyncType specified in the request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:resourceTag/tag-key`: Filters access by based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:resourceTag/${TagKey}`: Filters access based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:DocumentCategories`: Filters access by verifying that a user has permission to access a document belonging to a specific category enum ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `ssm:Recursive`: Filters access to Systems Manager parameters created in a hierarchical structure ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:Overwrite`: Controls whether Systems Manager parameters can be overwritten ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:AutoApprove`: Filters access by verifying that a user has permission to start Change Manager workflows without a review step (with the exception of change freeze events) ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/change-manager-auto-approval-access.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:SessionDocumentAccessCheck`: Filters access by verifying that a user has permission to access either the default Session Manager configuration document or the custom configuration document specified in a request ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-sessiondocumentaccesscheck.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  All = "ssm:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html
 */
export const SsmResource = {

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-associations.html
   */
  association: (options: Partial<{partition: string, region: string, account: string, associationId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:association/${options.associationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-working.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:resourceTag/tag-key`: Filters access by based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  automationExecution: (options: Partial<{partition: string, region: string, account: string, automationExecutionId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:automation-execution/${options.automationExecutionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-documents.html
   */
  automationDefinition: (options: Partial<{partition: string, region: string, account: string, automationDefinitionName: string, versionId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:automation-definition/${options.automationDefinitionName || '*'}:${options.versionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html
   */
  bucket: (options: Partial<{partition: string, bucketName: string}> = {}) => `arn:${options.partition || '*'}:s3:::${options.bucketName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:DocumentCategories`: Filters access by verifying that a user has permission to access a document belonging to a specific category enum ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  document: (options: Partial<{partition: string, region: string, account: string, documentName: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:document/${options.documentName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanager.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:resourceTag/${TagKey}`: Filters access based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  instance: (options: Partial<{partition: string, region: string, account: string, instanceId: string}> = {}) => `arn:${options.partition || '*'}:ec2:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-maintenance.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:resourceTag/tag-key`: Filters access by based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  maintenancewindow: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:maintenancewindow/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:resourceTag/tag-key`: Filters access by based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  managedInstance: (options: Partial<{partition: string, region: string, account: string, instanceId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:managed-instance/${options.instanceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-configuring.html
   */
  managedInstanceInventory: (options: Partial<{partition: string, region: string, account: string, instanceId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:managed-instance-inventory/${options.instanceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-working-with-OpsItems.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  opsitem: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:opsitem/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/application-manager.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:resourceTag/${TagKey}`: Filters access based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/security_iam_service-with-iam.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  opsmetadata: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:opsmetadata/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:resourceTag/tag-key`: Filters access by based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  parameter: (options: Partial<{partition: string, region: string, account: string, parameterNameWithoutLeadingSlash: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:parameter/${options.parameterNameWithoutLeadingSlash || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ssm:resourceTag/tag-key`: Filters access by based on a tag key-value pair assigned to the Systems Manager resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  patchbaseline: (options: Partial<{partition: string, region: string, account: string, patchBaselineIdResourceId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:patchbaseline/${options.patchBaselineIdResourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html
   */
  session: (options: Partial<{partition: string, region: string, account: string, sessionId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:session/${options.sessionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html
   */
  resourcedatasync: (options: Partial<{partition: string, region: string, account: string, syncName: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:resource-data-sync/${options.syncName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/API_ServiceSetting.html
   */
  servicesetting: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:servicesetting/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-assign-targets.html
   */
  windowtarget: (options: Partial<{partition: string, region: string, account: string, windowTargetId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:windowtarget/${options.windowTargetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-assign-tasks.html
   */
  windowtask: (options: Partial<{partition: string, region: string, account: string, windowTaskId: string}> = {}) => `arn:${options.partition || '*'}:ssm:${options.region || '*'}:${options.account || '*'}:windowtask/${options.windowTaskId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by based on a tag key-value pair assigned to the AWS resource ({@link https://docs.aws.amazon.com/systems-manager/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#policy-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  task: (options: Partial<{partition: string, region: string, account: string, taskId: string}> = {}) => `arn:${options.partition || '*'}:ecs:${options.region || '*'}:${options.account || '*'}:task/${options.taskId || '*'}`,
}

