/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonquicksight.html
 */
export enum QuicksightAction {

  /**
   * Write - Grants permission to enable setting default access to AWS resources
   * @see https://docs.aws.amazon.com/quicksight/latest/user/accessing-data-sources.html
   */
  AccountConfigurations = "quicksight:AccountConfigurations",

  /**
   * Write - Grants permission to cancel a SPICE ingestions on a dataset
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CancelIngestion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.ingestion `QuicksightResource.ingestion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CancelIngestion = "quicksight:CancelIngestion",

  /**
   * Write - Grants permission to create an account customization for QuickSight account or namespace
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateAccountCustomization.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAccountCustomization = "quicksight:CreateAccountCustomization",

  /**
   * Write - Grants permission to provision Amazon QuickSight administrators, authors, and readers
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateAdmin = "quicksight:CreateAdmin",

  /**
   * Write - Grants permission to create an analysis from a template
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateAnalysis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAnalysis = "quicksight:CreateAnalysis",

  /**
   * Permissions management - Grants permission to create a custom permissions resource for restricting user access
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCustomPermissions = "quicksight:CreateCustomPermissions",

  /**
   * Write - Grants permission to create a QuickSight Dashboard
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDashboard = "quicksight:CreateDashboard",

  /**
   * Write - Grants permission to create a dataset
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDataSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.datasource `QuicksightResource.datasource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataSet = "quicksight:CreateDataSet",

  /**
   * Write - Grants permission to create a data source
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataSource = "quicksight:CreateDataSource",

  /**
   * Write - Grants permission to create a QuickSight email customization template
   * @see https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.emailCustomizationTemplate `QuicksightResource.emailCustomizationTemplate`} 
   */
  CreateEmailCustomizationTemplate = "quicksight:CreateEmailCustomizationTemplate",

  /**
   * Write - Grants permission to create a QuickSight folder
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateFolder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFolder = "quicksight:CreateFolder",

  /**
   * Write - Grants permission to add a QuickSight Dashboard, Analysis or Dataset to a QuickSight Folder
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateFolderMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   * - {@link QuicksightResource.dataset `QuicksightResource.dataset`} 
   */
  CreateFolderMembership = "quicksight:CreateFolderMembership",

  /**
   * Write - Grants permission to create a QuickSight group
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.group `QuicksightResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateGroup = "quicksight:CreateGroup",

  /**
   * Write - Grants permission to add a QuickSight user to a QuickSight group
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateGroupMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.group `QuicksightResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `quicksight:UserName`: Filters access by user name ({@link https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateGroupMembership = "quicksight:CreateGroupMembership",

  /**
   * Write - Grants permission to create an assignment with one specified IAM Policy ARN that will be assigned to specified groups or users of QuickSight
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateIAMPolicyAssignment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.assignment `QuicksightResource.assignment`} 
   */
  CreateIAMPolicyAssignment = "quicksight:CreateIAMPolicyAssignment",

  /**
   * Write - Grants permission to start a SPICE ingestion on a dataset
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateIngestion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.ingestion `QuicksightResource.ingestion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateIngestion = "quicksight:CreateIngestion",

  /**
   * Write - Grants permission to create an QuickSight namespace
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateNamespace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.namespace `QuicksightResource.namespace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateNamespace = "quicksight:CreateNamespace",

  /**
   * Write - Grants permission to provision Amazon QuickSight readers
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateReader = "quicksight:CreateReader",

  /**
   * Write - Grants permission to create a template
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTemplate = "quicksight:CreateTemplate",

  /**
   * Write - Grants permission to create a template alias
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTemplateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTemplateAlias = "quicksight:CreateTemplateAlias",

  /**
   * Write - Grants permission to create a theme
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateTheme.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTheme = "quicksight:CreateTheme",

  /**
   * Write - Grants permission to create an alias for a theme version
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CreateThemeAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateThemeAlias = "quicksight:CreateThemeAlias",

  /**
   * Write - Grants permission to provision Amazon QuickSight authors and readers
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateUser = "quicksight:CreateUser",

  /**
   * Write - Grants permission to create a VPC connection
   * @see https://docs.aws.amazon.com/quicksight/latest/user/vpc-creating-a-connection-in-quicksight.html
   */
  CreateVPCConnection = "quicksight:CreateVPCConnection",

  /**
   * Write - Grants permission to delete an account customization for QuickSight account or namespace
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteAccountCustomization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.customization `QuicksightResource.customization`} 
   */
  DeleteAccountCustomization = "quicksight:DeleteAccountCustomization",

  /**
   * Write - Grants permission to delete an analysis
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteAnalysis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   */
  DeleteAnalysis = "quicksight:DeleteAnalysis",

  /**
   * Permissions management - Grants permission to delete a custom permissions resource
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  DeleteCustomPermissions = "quicksight:DeleteCustomPermissions",

  /**
   * Write - Grants permission to delete a QuickSight Dashboard
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   */
  DeleteDashboard = "quicksight:DeleteDashboard",

  /**
   * Write - Grants permission to delete a dataset
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDataSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dataset `QuicksightResource.dataset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteDataSet = "quicksight:DeleteDataSet",

  /**
   * Write - Grants permission to delete a data source
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.datasource `QuicksightResource.datasource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteDataSource = "quicksight:DeleteDataSource",

  /**
   * Write - Grants permission to delete a QuickSight email customization template
   * @see https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.emailCustomizationTemplate `QuicksightResource.emailCustomizationTemplate`} 
   */
  DeleteEmailCustomizationTemplate = "quicksight:DeleteEmailCustomizationTemplate",

  /**
   * Write - Grants permission to delete a QuickSight Folder
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteFolder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   */
  DeleteFolder = "quicksight:DeleteFolder",

  /**
   * Write - Grants permission to remove a QuickSight Dashboard, Analysis or Dataset from a QuickSight Folder
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteFolderMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   * - {@link QuicksightResource.dataset `QuicksightResource.dataset`} 
   */
  DeleteFolderMembership = "quicksight:DeleteFolderMembership",

  /**
   * Write - Grants permission to remove a user group from QuickSight
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.group `QuicksightResource.group`} 
   */
  DeleteGroup = "quicksight:DeleteGroup",

  /**
   * Write - Grants permission to remove a user from a group so that he/she is no longer a member of the group
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteGroupMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.group `QuicksightResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `quicksight:UserName`: Filters access by user name ({@link https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteGroupMembership = "quicksight:DeleteGroupMembership",

  /**
   * Write - Grants permission to update an existing assignment
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteIAMPolicyAssignment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.assignment `QuicksightResource.assignment`} 
   */
  DeleteIAMPolicyAssignment = "quicksight:DeleteIAMPolicyAssignment",

  /**
   * Write - Grants permission to delete a QuickSight namespace
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteNamespace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.namespace `QuicksightResource.namespace`} 
   */
  DeleteNamespace = "quicksight:DeleteNamespace",

  /**
   * Write - Grants permission to delete a template
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   */
  DeleteTemplate = "quicksight:DeleteTemplate",

  /**
   * Write - Grants permission to delete a template alias
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTemplateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   */
  DeleteTemplateAlias = "quicksight:DeleteTemplateAlias",

  /**
   * Write - Grants permission to delete a theme
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteTheme.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  DeleteTheme = "quicksight:DeleteTheme",

  /**
   * Write - Grants permission to delete the alias of a theme
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteThemeAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  DeleteThemeAlias = "quicksight:DeleteThemeAlias",

  /**
   * Write - Grants permission to delete a QuickSight user, given the user name
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   */
  DeleteUser = "quicksight:DeleteUser",

  /**
   * Write - Grants permission to deletes a user identified by its principal ID
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DeleteUserByPrincipalId.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   */
  DeleteUserByPrincipalId = "quicksight:DeleteUserByPrincipalId",

  /**
   * Write - Grants permission to delete a VPC connection
   * @see https://docs.aws.amazon.com/quicksight/latest/user/vpc-creating-a-connection-in-quicksight.html
   */
  DeleteVPCConnection = "quicksight:DeleteVPCConnection",

  /**
   * Read - Grants permission to describe an account customization for QuickSight account or namespace
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAccountCustomization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.customization `QuicksightResource.customization`} 
   */
  DescribeAccountCustomization = "quicksight:DescribeAccountCustomization",

  /**
   * Read - Grants permission to describe the administrative account settings for QuickSight account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAccountSettings.html
   */
  DescribeAccountSettings = "quicksight:DescribeAccountSettings",

  /**
   * Read - Grants permission to describe an analysis
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAnalysis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   */
  DescribeAnalysis = "quicksight:DescribeAnalysis",

  /**
   * Read - Grants permission to describe permissions for an analysis
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeAnalysisPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   */
  DescribeAnalysisPermissions = "quicksight:DescribeAnalysisPermissions",

  /**
   * Write - Grants permission to describe a custom permissions resource in a QuickSight account
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  DescribeCustomPermissions = "quicksight:DescribeCustomPermissions",

  /**
   * Read - Grants permission to describe a QuickSight Dashboard
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   */
  DescribeDashboard = "quicksight:DescribeDashboard",

  /**
   * Read - Grants permission to describe permissions for a QuickSight Dashboard
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDashboardPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   */
  DescribeDashboardPermissions = "quicksight:DescribeDashboardPermissions",

  /**
   * Read - Grants permission to describe a dataset
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dataset `QuicksightResource.dataset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DescribeDataSet = "quicksight:DescribeDataSet",

  /**
   * Permissions management - Grants permission to describe the resource policy of a dataset
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSetPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dataset `QuicksightResource.dataset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DescribeDataSetPermissions = "quicksight:DescribeDataSetPermissions",

  /**
   * Read - Grants permission to describe a data source
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.datasource `QuicksightResource.datasource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DescribeDataSource = "quicksight:DescribeDataSource",

  /**
   * Permissions management - Grants permission to describe the resource policy of a data source
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeDataSourcePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.datasource `QuicksightResource.datasource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DescribeDataSourcePermissions = "quicksight:DescribeDataSourcePermissions",

  /**
   * Read - Grants permission to describe a QuickSight email customization template
   * @see https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.emailCustomizationTemplate `QuicksightResource.emailCustomizationTemplate`} 
   */
  DescribeEmailCustomizationTemplate = "quicksight:DescribeEmailCustomizationTemplate",

  /**
   * Read - Grants permission to describe a QuickSight Folder
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeFolder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   */
  DescribeFolder = "quicksight:DescribeFolder",

  /**
   * Read - Grants permission to describe permissions for a QuickSight Folder
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeFolderPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   */
  DescribeFolderPermissions = "quicksight:DescribeFolderPermissions",

  /**
   * Read - Grants permission to describe resolved permissions for a QuickSight Folder
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeFolderResolvedPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   */
  DescribeFolderResolvedPermissions = "quicksight:DescribeFolderResolvedPermissions",

  /**
   * Read - Grants permission to describe a QuickSight group
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.group `QuicksightResource.group`} 
   */
  DescribeGroup = "quicksight:DescribeGroup",

  /**
   * Read - Grants permission to describe a QuickSight group member
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeGroupMembership.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.group `QuicksightResource.group`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `quicksight:UserName`: Filters access by user name ({@link https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeGroupMembership = "quicksight:DescribeGroupMembership",

  /**
   * Read - Grants permission to describe an existing assignment
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIAMPolicyAssignment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.assignment `QuicksightResource.assignment`} 
   */
  DescribeIAMPolicyAssignment = "quicksight:DescribeIAMPolicyAssignment",

  /**
   * Read - Grants permission to describe a SPICE ingestion on a dataset
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIngestion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.ingestion `QuicksightResource.ingestion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DescribeIngestion = "quicksight:DescribeIngestion",

  /**
   * Read - Grants permission to describe the IP restrictions for QuickSight account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeIpRestriction.html
   */
  DescribeIpRestriction = "quicksight:DescribeIpRestriction",

  /**
   * Read - Grants permission to describe a QuickSight namespace
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeNamespace.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.namespace `QuicksightResource.namespace`} 
   */
  DescribeNamespace = "quicksight:DescribeNamespace",

  /**
   * Read - Grants permission to describe a template
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   */
  DescribeTemplate = "quicksight:DescribeTemplate",

  /**
   * Read - Grants permission to describe a template alias
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   */
  DescribeTemplateAlias = "quicksight:DescribeTemplateAlias",

  /**
   * Read - Grants permission to describe permissions for a template
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTemplatePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   */
  DescribeTemplatePermissions = "quicksight:DescribeTemplatePermissions",

  /**
   * Read - Grants permission to describe a theme
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeTheme.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  DescribeTheme = "quicksight:DescribeTheme",

  /**
   * Read - Grants permission to describe a theme alias
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemeAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  DescribeThemeAlias = "quicksight:DescribeThemeAlias",

  /**
   * Read - Grants permission to describe permissions for a theme
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeThemePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  DescribeThemePermissions = "quicksight:DescribeThemePermissions",

  /**
   * Read - Grants permission to describe a QuickSight user given the user name
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DescribeUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   */
  DescribeUser = "quicksight:DescribeUser",

  /**
   * Write - Grants permission to generate a URL used to embed a QuickSight Dashboard for a user not registered with QuickSight
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForAnonymousUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   * - {@link QuicksightResource.namespace `QuicksightResource.namespace`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GenerateEmbedUrlForAnonymousUser = "quicksight:GenerateEmbedUrlForAnonymousUser",

  /**
   * Write - Grants permission to generate a URL used to embed a QuickSight Dashboard for a user registered with QuickSight
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForRegisteredUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   */
  GenerateEmbedUrlForRegisteredUser = "quicksight:GenerateEmbedUrlForRegisteredUser",

  /**
   * Read - Grants permission to get a URL used to embed a QuickSight Dashboard for a user not registered with QuickSight
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html
   */
  GetAnonymousUserEmbedUrl = "quicksight:GetAnonymousUserEmbedUrl",

  /**
   * Read - Grants permission to get an auth code representing a QuickSight user
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   */
  GetAuthCode = "quicksight:GetAuthCode",

  /**
   * Read - Grants permission to get a URL used to embed a QuickSight Dashboard
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   */
  GetDashboardEmbedUrl = "quicksight:GetDashboardEmbedUrl",

  /**
   * Read - Grants permission to use Amazon QuickSight, in Enterprise edition, to identify and display the Microsoft Active Directory (Microsoft Active Directory) directory groups that are mapped to roles in Amazon QuickSight
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  GetGroupMapping = "quicksight:GetGroupMapping",

  /**
   * Read - Grants permission to get a URL to embed QuickSight console experience
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetSessionEmbedUrl.html
   */
  GetSessionEmbedUrl = "quicksight:GetSessionEmbedUrl",

  /**
   * List - Grants permission to list all analyses in an account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListAnalyses.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   */
  ListAnalyses = "quicksight:ListAnalyses",

  /**
   * Write - Grants permission to list custom permissions resources in QuickSight account
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  ListCustomPermissions = "quicksight:ListCustomPermissions",

  /**
   * List - Grants permission to list all versions of a QuickSight Dashboard
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboardVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   */
  ListDashboardVersions = "quicksight:ListDashboardVersions",

  /**
   * List - Grants permission to list all Dashboards in a QuickSight Account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDashboards.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   */
  ListDashboards = "quicksight:ListDashboards",

  /**
   * List - Grants permission to list all datasets
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDataSets.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListDataSets = "quicksight:ListDataSets",

  /**
   * List - Grants permission to list all data sources
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListDataSources.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListDataSources = "quicksight:ListDataSources",

  /**
   * Read - Grants permission to list all members in a folder
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListFolderMembers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   */
  ListFolderMembers = "quicksight:ListFolderMembers",

  /**
   * List - Grants permission to list all Folders in a QuickSight Account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListFolders.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   */
  ListFolders = "quicksight:ListFolders",

  /**
   * List - Grants permission to list member users in a group
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroupMemberships.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.group `QuicksightResource.group`} 
   */
  ListGroupMemberships = "quicksight:ListGroupMemberships",

  /**
   * List - Grants permission to list all user groups in QuickSight
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.group `QuicksightResource.group`} 
   */
  ListGroups = "quicksight:ListGroups",

  /**
   * List - Grants permission to list all assignments in the current Amazon QuickSight account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignments.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.assignment `QuicksightResource.assignment`} 
   */
  ListIAMPolicyAssignments = "quicksight:ListIAMPolicyAssignments",

  /**
   * List - Grants permission to list all assignments assigned to a user and the groups it belongs
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIAMPolicyAssignmentsForUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.assignment `QuicksightResource.assignment`} 
   */
  ListIAMPolicyAssignmentsForUser = "quicksight:ListIAMPolicyAssignmentsForUser",

  /**
   * List - Grants permission to list all SPICE ingestions on a dataset
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListIngestions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ListIngestions = "quicksight:ListIngestions",

  /**
   * List - Grants permission to lists all namespaces in a QuickSight account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListNamespaces.html
   */
  ListNamespaces = "quicksight:ListNamespaces",

  /**
   * Read - Grants permission to list tags of a QuickSight resource
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.customization `QuicksightResource.customization`} 
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  ListTagsForResource = "quicksight:ListTagsForResource",

  /**
   * List - Grants permission to list all aliases for a template
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateAliases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   */
  ListTemplateAliases = "quicksight:ListTemplateAliases",

  /**
   * List - Grants permission to list all versions of a template
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplateVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   */
  ListTemplateVersions = "quicksight:ListTemplateVersions",

  /**
   * List - Grants permission to list all templates in a QuickSight account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListTemplates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   */
  ListTemplates = "quicksight:ListTemplates",

  /**
   * List - Grants permission to list all aliases of a theme
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeAliases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  ListThemeAliases = "quicksight:ListThemeAliases",

  /**
   * List - Grants permission to list all versions of a theme
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemeVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  ListThemeVersions = "quicksight:ListThemeVersions",

  /**
   * List - Grants permission to list all themes in an account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListThemes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  ListThemes = "quicksight:ListThemes",

  /**
   * List - Grants permission to list groups that a given user is a member of
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUserGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   */
  ListUserGroups = "quicksight:ListUserGroups",

  /**
   * List - Grants permission to list all of the QuickSight users belonging to this account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ListUsers.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   */
  ListUsers = "quicksight:ListUsers",

  /**
   * Read - Grants permission to use a dataset for a template
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/qs-api-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dataset `QuicksightResource.dataset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PassDataSet = "quicksight:PassDataSet",

  /**
   * Read - Grants permission to use a data source for a data set
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/qs-api-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.datasource `QuicksightResource.datasource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PassDataSource = "quicksight:PassDataSource",

  /**
   * Write - Grants permission to create a QuickSight user, whose identity is associated with the IAM identity/role specified in the request
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RegisterUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `quicksight:IamArn`: Filters access by IAM user or role ARN ({@link https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `quicksight:SessionName`: Filters access by session name ({@link https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RegisterUser = "quicksight:RegisterUser",

  /**
   * Write - Grants permission to restore a deleted analysis
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RestoreAnalysis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   */
  RestoreAnalysis = "quicksight:RestoreAnalysis",

  /**
   * Write - Grants permission to manage scoping policies for permissions to AWS resources
   * @see https://docs.aws.amazon.com/quicksight/latest/user/accessing-data-sources.html
   */
  ScopeDownPolicy = "quicksight:ScopeDownPolicy",

  /**
   * List - Grants permission to search for a sub-set of analyses
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchAnalyses.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   */
  SearchAnalyses = "quicksight:SearchAnalyses",

  /**
   * List - Grants permission to search for a sub-set of QuickSight Dashboards
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchDashboards.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   */
  SearchDashboards = "quicksight:SearchDashboards",

  /**
   * List - Grants permission to use Amazon QuickSight, in Enterprise edition, to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  SearchDirectoryGroups = "quicksight:SearchDirectoryGroups",

  /**
   * Read - Grants permission to search for a sub-set of QuickSight Folders
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchFolders.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   */
  SearchFolders = "quicksight:SearchFolders",

  /**
   * List - Grants permission to search for a sub-set of QuickSight groups
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SearchGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.group `QuicksightResource.group`} 
   */
  SearchGroups = "quicksight:SearchGroups",

  /**
   * Write - Grants permission to use Amazon QuickSight, in Enterprise edition, to display your Microsoft Active Directory directory groups so that you can choose which ones to map to roles in Amazon QuickSight
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  SetGroupMapping = "quicksight:SetGroupMapping",

  /**
   * Write - Grants permission to subscribe to Amazon QuickSight, and also to allow the user to upgrade the subscription to Enterprise edition
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `quicksight:Edition`: Filters access by the edition of QuickSight ({@link https://docs.aws.amazon.com/quicksight/latest/user/security-scp.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `quicksight:DirectoryType`: Filters access by the user management options ({@link https://docs.aws.amazon.com/quicksight/latest/user/security-scp.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  Subscribe = "quicksight:Subscribe",

  /**
   * Tagging - Grants permission to add tags to a QuickSight resource
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.customization `QuicksightResource.customization`} 
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "quicksight:TagResource",

  /**
   * Write - Grants permission to unsubscribe from Amazon QuickSight, which permanently deletes all users and their resources from Amazon QuickSight
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  Unsubscribe = "quicksight:Unsubscribe",

  /**
   * Tagging - Grants permission to remove tags from a QuickSight resource
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.customization `QuicksightResource.customization`} 
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "quicksight:UntagResource",

  /**
   * Write - Grants permission to update an account customization for QuickSight account or namespace
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAccountCustomization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.customization `QuicksightResource.customization`} 
   */
  UpdateAccountCustomization = "quicksight:UpdateAccountCustomization",

  /**
   * Write - Grants permission to update the administrative account settings for QuickSight account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAccountSettings.html
   */
  UpdateAccountSettings = "quicksight:UpdateAccountSettings",

  /**
   * Write - Grants permission to update an analysis
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAnalysis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   */
  UpdateAnalysis = "quicksight:UpdateAnalysis",

  /**
   * Permissions management - Grants permission to update permissions for an analysis
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateAnalysisPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   */
  UpdateAnalysisPermissions = "quicksight:UpdateAnalysisPermissions",

  /**
   * Permissions management - Grants permission to update a custom permissions resource
   * @see https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html
   */
  UpdateCustomPermissions = "quicksight:UpdateCustomPermissions",

  /**
   * Write - Grants permission to update a QuickSight Dashboard
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   */
  UpdateDashboard = "quicksight:UpdateDashboard",

  /**
   * Permissions management - Grants permission to update permissions for a QuickSight Dashboard
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   */
  UpdateDashboardPermissions = "quicksight:UpdateDashboardPermissions",

  /**
   * Write - Grants permission to update a QuickSight Dashboard’s Published Version
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPublishedVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   */
  UpdateDashboardPublishedVersion = "quicksight:UpdateDashboardPublishedVersion",

  /**
   * Write - Grants permission to update a dataset
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dataset `QuicksightResource.dataset`} 
   * - {@link QuicksightResource.datasource `QuicksightResource.datasource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateDataSet = "quicksight:UpdateDataSet",

  /**
   * Permissions management - Grants permission to update the resource policy of a dataset
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSetPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.dataset `QuicksightResource.dataset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateDataSetPermissions = "quicksight:UpdateDataSetPermissions",

  /**
   * Write - Grants permission to update a data source
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.datasource `QuicksightResource.datasource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateDataSource = "quicksight:UpdateDataSource",

  /**
   * Permissions management - Grants permission to update the resource policy of a data source
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDataSourcePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.datasource `QuicksightResource.datasource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateDataSourcePermissions = "quicksight:UpdateDataSourcePermissions",

  /**
   * Write - Grants permission to update a QuickSight email customization template
   * @see https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.emailCustomizationTemplate `QuicksightResource.emailCustomizationTemplate`} 
   */
  UpdateEmailCustomizationTemplate = "quicksight:UpdateEmailCustomizationTemplate",

  /**
   * Write - Grants permission to update a QuickSight Folder
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateFolder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   */
  UpdateFolder = "quicksight:UpdateFolder",

  /**
   * Permissions management - Grants permission to update permissions for a QuickSight Folder
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateFolderPermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   */
  UpdateFolderPermissions = "quicksight:UpdateFolderPermissions",

  /**
   * Write - Grants permission to change group description
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.group `QuicksightResource.group`} 
   */
  UpdateGroup = "quicksight:UpdateGroup",

  /**
   * Write - Grants permission to update an existing assignment
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIAMPolicyAssignment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.assignment `QuicksightResource.assignment`} 
   */
  UpdateIAMPolicyAssignment = "quicksight:UpdateIAMPolicyAssignment",

  /**
   * Write - Grants permission to update the IP restrictions for QuickSight account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateIpRestriction.html
   */
  UpdateIpRestriction = "quicksight:UpdateIpRestriction",

  /**
   * Write - Grants permission to enable or disable public sharing on an account
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdatePublicSharingSettings.html
   */
  UpdatePublicSharingSettings = "quicksight:UpdatePublicSharingSettings",

  /**
   * Write - Grants permission to update a template
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   */
  UpdateTemplate = "quicksight:UpdateTemplate",

  /**
   * Write - Grants permission to update a template alias
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplateAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   */
  UpdateTemplateAlias = "quicksight:UpdateTemplateAlias",

  /**
   * Permissions management - Grants permission to update permissions for a template
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTemplatePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   */
  UpdateTemplatePermissions = "quicksight:UpdateTemplatePermissions",

  /**
   * Write - Grants permission to update a theme
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateTheme.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  UpdateTheme = "quicksight:UpdateTheme",

  /**
   * Write - Grants permission to update the alias of a theme
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemeAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  UpdateThemeAlias = "quicksight:UpdateThemeAlias",

  /**
   * Permissions management - Grants permission to update permissions for a theme
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateThemePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   */
  UpdateThemePermissions = "quicksight:UpdateThemePermissions",

  /**
   * Write - Grants permission to update an Amazon QuickSight user
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   */
  UpdateUser = "quicksight:UpdateUser",

  /**
   * * - Grant all quicksight permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonquicksight.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QuicksightResource.ingestion `QuicksightResource.ingestion`} 
   * - {@link QuicksightResource.user `QuicksightResource.user`} 
   * - {@link QuicksightResource.analysis `QuicksightResource.analysis`} 
   * - {@link QuicksightResource.dashboard `QuicksightResource.dashboard`} 
   * - {@link QuicksightResource.datasource `QuicksightResource.datasource`} 
   * - {@link QuicksightResource.emailCustomizationTemplate `QuicksightResource.emailCustomizationTemplate`} 
   * - {@link QuicksightResource.folder `QuicksightResource.folder`} 
   * - {@link QuicksightResource.dataset `QuicksightResource.dataset`} 
   * - {@link QuicksightResource.group `QuicksightResource.group`} 
   * - {@link QuicksightResource.assignment `QuicksightResource.assignment`} 
   * - {@link QuicksightResource.namespace `QuicksightResource.namespace`} 
   * - {@link QuicksightResource.template `QuicksightResource.template`} 
   * - {@link QuicksightResource.theme `QuicksightResource.theme`} 
   * - {@link QuicksightResource.customization `QuicksightResource.customization`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `quicksight:UserName`: Filters access by user name ({@link https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `quicksight:IamArn`: Filters access by IAM user or role ARN ({@link https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `quicksight:SessionName`: Filters access by session name ({@link https://docs.aws.amazon.com/quicksight/latest/user/iam-actions.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `quicksight:Edition`: Filters access by the edition of QuickSight ({@link https://docs.aws.amazon.com/quicksight/latest/user/security-scp.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `quicksight:DirectoryType`: Filters access by the user management options ({@link https://docs.aws.amazon.com/quicksight/latest/user/security-scp.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "quicksight:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonquicksight.html
 */
export const QuicksightResource = {

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_User.html
   */
  user: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:user/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Group.html
   */
  group: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:group/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Analysis.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  analysis: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:analysis/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Dashboard.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dashboard: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:dashboard/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Template.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  template: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:template/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSource.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  datasource: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:datasource/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataset: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:dataset/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Ingestion.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ingestion: (options: Partial<{partition: string, region: string, account: string, datasetId: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:dataset/${options.datasetId || '*'}/ingestion/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Theme.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  theme: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:theme/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_IAMPolicyAssignment.html
   */
  assignment: (options: Partial<{partition: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight::${options.account || '*'}:assignment/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_AccountCustomization.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  customization: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:customization/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Namespace.html
   */
  namespace: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:namespace/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/APIReference/API_Folder.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  folder: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:folder/${options.resourceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/quicksight/latest/user/customizing-quicksight-email-templates.html
   */
  emailCustomizationTemplate: (options: Partial<{partition: string, region: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:quicksight:${options.region || '*'}:${options.account || '*'}:email-customization-template/${options.resourceId || '*'}`,
}

