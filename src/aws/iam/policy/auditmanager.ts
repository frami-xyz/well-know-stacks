/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsauditmanager.html
 */
export enum AuditmanagerAction {

  /**
   * Write - Grants permission to associate an evidence folder with an assessment report in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_AssociateAssessmentReportEvidenceFolder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  AssociateAssessmentReportEvidenceFolder = "auditmanager:AssociateAssessmentReportEvidenceFolder",

  /**
   * Write - Grants permission to associate a list of evidence to an assessment report in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchAssociateAssessmentReportEvidence.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  BatchAssociateAssessmentReportEvidence = "auditmanager:BatchAssociateAssessmentReportEvidence",

  /**
   * Write - Grants permission to create delegations for an assessment in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchCreateDelegationByAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  BatchCreateDelegationByAssessment = "auditmanager:BatchCreateDelegationByAssessment",

  /**
   * Write - Grants permission to delete delegations for an assessment in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchDeleteDelegationByAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  BatchDeleteDelegationByAssessment = "auditmanager:BatchDeleteDelegationByAssessment",

  /**
   * Write - Grants permission to disassociate a list of evidence from an assessment report in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchDisassociateAssessmentReportEvidence.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  BatchDisassociateAssessmentReportEvidence = "auditmanager:BatchDisassociateAssessmentReportEvidence",

  /**
   * Write - Grants permission to import a list of evidence to an assessment control in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchImportEvidenceToAssessmentControl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessmentControlSet `AuditmanagerResource.assessmentControlSet`} 
   */
  BatchImportEvidenceToAssessmentControl = "auditmanager:BatchImportEvidenceToAssessmentControl",

  /**
   * Write - Grants permission to create an assessment to be used with AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAssessment = "auditmanager:CreateAssessment",

  /**
   * Write - Grants permission to create a framework for use in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessmentFramework.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAssessmentFramework = "auditmanager:CreateAssessmentFramework",

  /**
   * Write - Grants permission to create an assessment report in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessmentReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  CreateAssessmentReport = "auditmanager:CreateAssessmentReport",

  /**
   * Write - Grants permission to create a control to be used in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateControl.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateControl = "auditmanager:CreateControl",

  /**
   * Write - Grants permission to delete an assessment in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteAssessment = "auditmanager:DeleteAssessment",

  /**
   * Write - Grants permission to delete an assessment framework in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessmentFramework `AuditmanagerResource.assessmentFramework`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteAssessmentFramework = "auditmanager:DeleteAssessmentFramework",

  /**
   * Write - Grants permission to delete a share request for a custom framework in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html
   */
  DeleteAssessmentFrameworkShare = "auditmanager:DeleteAssessmentFrameworkShare",

  /**
   * Write - Grants permission to delete an assessment report in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  DeleteAssessmentReport = "auditmanager:DeleteAssessmentReport",

  /**
   * Write - Grants permission to delete a control in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.control `AuditmanagerResource.control`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteControl = "auditmanager:DeleteControl",

  /**
   * Write - Grants permission to deregister an account in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_%20DeregisterAccount.html
   */
  DeregisterAccount = "auditmanager:DeregisterAccount",

  /**
   * Write - Grants permission to deregister the delegated administrator account for AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterOrganizationAdminAccount.html
   */
  DeregisterOrganizationAdminAccount = "auditmanager:DeregisterOrganizationAdminAccount",

  /**
   * Write - Grants permission to disassociate an evidence folder from an assessment report in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DisassociateAssessmentReportEvidenceFolder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  DisassociateAssessmentReportEvidenceFolder = "auditmanager:DisassociateAssessmentReportEvidenceFolder",

  /**
   * Read - Grants permission to get the status of an account in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAccountStatus.html
   */
  GetAccountStatus = "auditmanager:GetAccountStatus",

  /**
   * Read - Grants permission to get an assessment created in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  GetAssessment = "auditmanager:GetAssessment",

  /**
   * Read - Grants permission to get an assessment framework in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessmentFramework.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessmentFramework `AuditmanagerResource.assessmentFramework`} 
   */
  GetAssessmentFramework = "auditmanager:GetAssessmentFramework",

  /**
   * Read - Grants permission to get the URL for an assessment report in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessmentReportUrl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  GetAssessmentReportUrl = "auditmanager:GetAssessmentReportUrl",

  /**
   * Read - Grants permission to get changelogs for an assessment in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetChangeLogs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  GetChangeLogs = "auditmanager:GetChangeLogs",

  /**
   * Read - Grants permission to get a control in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetControl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.control `AuditmanagerResource.control`} 
   */
  GetControl = "auditmanager:GetControl",

  /**
   * List - Grants permission to get all delegations in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetDelegations.html
   */
  GetDelegations = "auditmanager:GetDelegations",

  /**
   * Read - Grants permission to get evidence from AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidence.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessmentControlSet `AuditmanagerResource.assessmentControlSet`} 
   */
  GetEvidence = "auditmanager:GetEvidence",

  /**
   * Read - Grants permission to get all the evidence from an evidence folder in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceByEvidenceFolder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessmentControlSet `AuditmanagerResource.assessmentControlSet`} 
   */
  GetEvidenceByEvidenceFolder = "auditmanager:GetEvidenceByEvidenceFolder",

  /**
   * Read - Grants permission to get the evidence folder from AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFolder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessmentControlSet `AuditmanagerResource.assessmentControlSet`} 
   */
  GetEvidenceFolder = "auditmanager:GetEvidenceFolder",

  /**
   * Read - Grants permission to get the evidence folders from an assessment in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFoldersByAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  GetEvidenceFoldersByAssessment = "auditmanager:GetEvidenceFoldersByAssessment",

  /**
   * Read - Grants permission to get the evidence folders from an assessment control in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFoldersByAssessmentControl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessmentControlSet `AuditmanagerResource.assessmentControlSet`} 
   */
  GetEvidenceFoldersByAssessmentControl = "auditmanager:GetEvidenceFoldersByAssessmentControl",

  /**
   * Read - Grants permission to get analytics data for all active assessments
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetInsights.html
   */
  GetInsights = "auditmanager:GetInsights",

  /**
   * Read - Grants permission to get analytics data for a specific active assessment
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetInsightsByAssessment.html
   */
  GetInsightsByAssessment = "auditmanager:GetInsightsByAssessment",

  /**
   * Read - Grants permission to get the delegated administrator account in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetOrganizationAdminAccount.html
   */
  GetOrganizationAdminAccount = "auditmanager:GetOrganizationAdminAccount",

  /**
   * Read - Grants permission to get the services in scope for an assessment in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html
   */
  GetServicesInScope = "auditmanager:GetServicesInScope",

  /**
   * Read - Grants permission to get all settings configured in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetSettings.html
   */
  GetSettings = "auditmanager:GetSettings",

  /**
   * List - Grants permission to list analytics data for controls in a specific control domain and active assessment
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentControlInsightsByControlDomain.html
   */
  ListAssessmentControlInsightsByControlDomain = "auditmanager:ListAssessmentControlInsightsByControlDomain",

  /**
   * List - Grants permission to list all sent or received share requests for custom frameworks in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentFrameworkShareRequests.html
   */
  ListAssessmentFrameworkShareRequests = "auditmanager:ListAssessmentFrameworkShareRequests",

  /**
   * List - Grants permission to list all assessment frameworks in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentFrameworks.html
   */
  ListAssessmentFrameworks = "auditmanager:ListAssessmentFrameworks",

  /**
   * List - Grants permission to list all assessment reports in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentReports.html
   */
  ListAssessmentReports = "auditmanager:ListAssessmentReports",

  /**
   * List - Grants permission to list all assessments in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessments.html
   */
  ListAssessments = "auditmanager:ListAssessments",

  /**
   * List - Grants permission to list analytics data for control domains across all active assessments
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControlDomainInsights.html
   */
  ListControlDomainInsights = "auditmanager:ListControlDomainInsights",

  /**
   * List - Grants permission to list analytics data for control domains in a specific active assessment
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControlDomainInsightsByAssessment.html
   */
  ListControlDomainInsightsByAssessment = "auditmanager:ListControlDomainInsightsByAssessment",

  /**
   * List - Grants permission to list analytics data for controls in a specific control domain across all active assessments
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControlInsightsByControlDomain.html
   */
  ListControlInsightsByControlDomain = "auditmanager:ListControlInsightsByControlDomain",

  /**
   * List - Grants permission to list all controls in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControls.html
   */
  ListControls = "auditmanager:ListControls",

  /**
   * List - Grants permission to list all the data source keywords in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListKeywordsForDataSource.html
   */
  ListKeywordsForDataSource = "auditmanager:ListKeywordsForDataSource",

  /**
   * List - Grants permission to list all notifications in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListNotifications.html
   */
  ListNotifications = "auditmanager:ListNotifications",

  /**
   * Read - Grants permission to list tags for an AWS Audit Manager resource
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   * - {@link AuditmanagerResource.control `AuditmanagerResource.control`} 
   */
  ListTagsForResource = "auditmanager:ListTagsForResource",

  /**
   * Write - Grants permission to register an account in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html
   */
  RegisterAccount = "auditmanager:RegisterAccount",

  /**
   * Write - Grants permission to register an account within the organization as the delegated administrator for AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterOrganizationAdminAccount.html
   */
  RegisterOrganizationAdminAccount = "auditmanager:RegisterOrganizationAdminAccount",

  /**
   * Write - Grants permission to create a share request for a custom framework in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_StartAssessmentFrameworkShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessmentFramework `AuditmanagerResource.assessmentFramework`} 
   */
  StartAssessmentFrameworkShare = "auditmanager:StartAssessmentFrameworkShare",

  /**
   * Tagging - Grants permission to tag an AWS Audit Manager resource
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   * - {@link AuditmanagerResource.control `AuditmanagerResource.control`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "auditmanager:TagResource",

  /**
   * Tagging - Grants permission to untag an AWS Audit Manager resource
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   * - {@link AuditmanagerResource.control `AuditmanagerResource.control`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "auditmanager:UntagResource",

  /**
   * Write - Grants permission to update an assessment in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  UpdateAssessment = "auditmanager:UpdateAssessment",

  /**
   * Write - Grants permission to update an assessment control in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentControl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessmentControlSet `AuditmanagerResource.assessmentControlSet`} 
   */
  UpdateAssessmentControl = "auditmanager:UpdateAssessmentControl",

  /**
   * Write - Grants permission to update the status of an assessment control set in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentControlSetStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessmentControlSet `AuditmanagerResource.assessmentControlSet`} 
   */
  UpdateAssessmentControlSetStatus = "auditmanager:UpdateAssessmentControlSetStatus",

  /**
   * Write - Grants permission to update an assessment framework in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentFramework.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessmentFramework `AuditmanagerResource.assessmentFramework`} 
   */
  UpdateAssessmentFramework = "auditmanager:UpdateAssessmentFramework",

  /**
   * Write - Grants permission to update a share request for a custom framework in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentFrameworkShare.html
   */
  UpdateAssessmentFrameworkShare = "auditmanager:UpdateAssessmentFrameworkShare",

  /**
   * Write - Grants permission to update the status of an assessment in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   */
  UpdateAssessmentStatus = "auditmanager:UpdateAssessmentStatus",

  /**
   * Write - Grants permission to update a control in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateControl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.control `AuditmanagerResource.control`} 
   */
  UpdateControl = "auditmanager:UpdateControl",

  /**
   * Write - Grants permission to update settings in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html
   */
  UpdateSettings = "auditmanager:UpdateSettings",

  /**
   * Read - Grants permission to validate the integrity of an assessment report in AWS Audit Manager
   * @see https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ValidateAssessmentReportIntegrity.html
   */
  ValidateAssessmentReportIntegrity = "auditmanager:ValidateAssessmentReportIntegrity",

  /**
   * * - Grant all auditmanager permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsauditmanager.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AuditmanagerResource.assessment `AuditmanagerResource.assessment`} 
   * - {@link AuditmanagerResource.assessmentControlSet `AuditmanagerResource.assessmentControlSet`} 
   * - {@link AuditmanagerResource.assessmentFramework `AuditmanagerResource.assessmentFramework`} 
   * - {@link AuditmanagerResource.control `AuditmanagerResource.control`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "auditmanager:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsauditmanager.html
 */
export const AuditmanagerResource = {

  /**
   * @see https://docs.aws.amazon.com/audit-manager/latest/userguide/API_Assessment.html
   */
  assessment: (options: Partial<{partition: string, region: string, account: string, assessmentId: string}> = {}) => `arn:${options.partition || '*'}:auditmanager:${options.region || '*'}:${options.account || '*'}:assessment/${options.assessmentId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/audit-manager/latest/userguide/API_AssessmentFramework.html
   */
  assessmentFramework: (options: Partial<{partition: string, region: string, account: string, assessmentFrameworkId: string}> = {}) => `arn:${options.partition || '*'}:auditmanager:${options.region || '*'}:${options.account || '*'}:assessmentFramework/${options.assessmentFrameworkId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/audit-manager/latest/userguide/API_AssessmentControlSet.html
   */
  assessmentControlSet: (options: Partial<{partition: string, region: string, account: string, assessmentId: string, controlSetId: string}> = {}) => `arn:${options.partition || '*'}:auditmanager:${options.region || '*'}:${options.account || '*'}:assessment/${options.assessmentId || '*'}/ControlSet/${options.controlSetId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/audit-manager/latest/userguide/API_Control.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  control: (options: Partial<{partition: string, region: string, account: string, controlId: string}> = {}) => `arn:${options.partition || '*'}:auditmanager:${options.region || '*'}:${options.account || '*'}:control/${options.controlId || '*'}`,
}

