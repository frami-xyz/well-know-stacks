/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappstream2.0.html
 */
export enum AppstreamAction {

  /**
   * Write - Grants permission to associate the specified application with the fleet
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateApplicationFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.application `AppstreamResource.application`} 
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateApplicationFleet = "appstream:AssociateApplicationFleet",

  /**
   * Write - Grants permission to associate the specified application to the specified entitlement
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateApplicationToEntitlement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   */
  AssociateApplicationToEntitlement = "appstream:AssociateApplicationToEntitlement",

  /**
   * Write - Grants permission to associate the specified fleet with the specified stack
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateFleet = "appstream:AssociateFleet",

  /**
   * Write - Grants permission to associate the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_BatchAssociateUserStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchAssociateUserStack = "appstream:BatchAssociateUserStack",

  /**
   * Write - Grants permission to disassociate the specified users from the specified stacks
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_BatchDisassociateUserStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  BatchDisassociateUserStack = "appstream:BatchDisassociateUserStack",

  /**
   * Write - Grants permission to copy the specified image within the same Region or to a new Region within the same AWS account
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CopyImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CopyImage = "appstream:CopyImage",

  /**
   * Write - Grants permission to create an app block. App blocks store details about the virtual hard disk that contains the files for the application in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. App blocks are only supported for Elastic fleets
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateAppBlock.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAppBlock = "appstream:CreateAppBlock",

  /**
   * Write - Grants permission to create an application within customer account. Applications store the details about how to launch applications on streaming instances. This is only supported for Elastic fleets
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.appBlock `AppstreamResource.appBlock`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApplication = "appstream:CreateApplication",

  /**
   * Write - Grants permission to create a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateDirectoryConfig.html
   */
  CreateDirectoryConfig = "appstream:CreateDirectoryConfig",

  /**
   * Write - Grants permission to create an entitlement to control access to applications based on user attributes
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateEntitlement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   */
  CreateEntitlement = "appstream:CreateEntitlement",

  /**
   * Write - Grants permission to create a fleet. A fleet is a group of streaming instances from which applications are launched and streamed to users
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFleet = "appstream:CreateFleet",

  /**
   * Write - Grants permission to create an image builder. An image builder is a virtual machine that is used to create an image
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateImageBuilder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   * - {@link AppstreamResource.imageBuilder `AppstreamResource.imageBuilder`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateImageBuilder = "appstream:CreateImageBuilder",

  /**
   * Write - Grants permission to create a URL to start an image builder streaming session
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateImageBuilderStreamingURL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.imageBuilder `AppstreamResource.imageBuilder`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateImageBuilderStreamingURL = "appstream:CreateImageBuilderStreamingURL",

  /**
   * Write - Grants permission to create a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateStack = "appstream:CreateStack",

  /**
   * Write - Grants permission to create a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateStreamingURL.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateStreamingURL = "appstream:CreateStreamingURL",

  /**
   * Write - Grants permission to update an existing image within customer account
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUpdatedImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateUpdatedImage = "appstream:CreateUpdatedImage",

  /**
   * Write - Grants permission to create a usage report subscription. Usage reports are generated daily
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUsageReportSubscription.html
   */
  CreateUsageReportSubscription = "appstream:CreateUsageReportSubscription",

  /**
   * Write - Grants permission to create a new user in the user pool
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUser.html
   */
  CreateUser = "appstream:CreateUser",

  /**
   * Write - Grants permission to delete the specified app block
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteAppBlock.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.appBlock `AppstreamResource.appBlock`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAppBlock = "appstream:DeleteAppBlock",

  /**
   * Write - Grants permission to delete the specified application
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.application `AppstreamResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteApplication = "appstream:DeleteApplication",

  /**
   * Write - Grants permission to delete the specified Directory Config object from AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteDirectoryConfig.html
   */
  DeleteDirectoryConfig = "appstream:DeleteDirectoryConfig",

  /**
   * Write - Grants permission to delete the specified entitlement
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteEntitlement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   */
  DeleteEntitlement = "appstream:DeleteEntitlement",

  /**
   * Write - Grants permission to delete the specified fleet
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteFleet = "appstream:DeleteFleet",

  /**
   * Write - Grants permission to delete the specified image. An image cannot be deleted when it is in use
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteImage = "appstream:DeleteImage",

  /**
   * Write - Grants permission to delete the specified image builder and release capacity
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImageBuilder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.imageBuilder `AppstreamResource.imageBuilder`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteImageBuilder = "appstream:DeleteImageBuilder",

  /**
   * Write - Grants permission to delete permissions for the specified private image
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImagePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteImagePermissions = "appstream:DeleteImagePermissions",

  /**
   * Write - Grants permission to delete the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteStack = "appstream:DeleteStack",

  /**
   * Write - Grants permission to disable usage report generation
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUsageReportSubscription.html
   */
  DeleteUsageReportSubscription = "appstream:DeleteUsageReportSubscription",

  /**
   * Write - Grants permission to delete a user from the user pool
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUser.html
   */
  DeleteUser = "appstream:DeleteUser",

  /**
   * Read - Grants permission to retrieve a list that describes one or more specified app blocks, if the app block arns are provided. Otherwise, all app blocks in the account are described
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeAppBlocks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.appBlock `AppstreamResource.appBlock`} 
   */
  DescribeAppBlocks = "appstream:DescribeAppBlocks",

  /**
   * Read - Grants permission to retrieve the associations that are associated with the specified application or fleet
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeApplicationFleetAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.application `AppstreamResource.application`} 
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   */
  DescribeApplicationFleetAssociations = "appstream:DescribeApplicationFleetAssociations",

  /**
   * Read - Grants permission to retrieve a list that describes one or more specified applications, if the application arns are provided. Otherwise, all applications in the account are described
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeApplications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.application `AppstreamResource.application`} 
   */
  DescribeApplications = "appstream:DescribeApplications",

  /**
   * Read - Grants permission to retrieve a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeDirectoryConfigs.html
   */
  DescribeDirectoryConfigs = "appstream:DescribeDirectoryConfigs",

  /**
   * Read - Grants permission to retrieve one or all entitlements for the specified stack
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeEntitlements.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   */
  DescribeEntitlements = "appstream:DescribeEntitlements",

  /**
   * Read - Grants permission to retrieve a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeFleets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   */
  DescribeFleets = "appstream:DescribeFleets",

  /**
   * Read - Grants permission to retrieve a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImageBuilders.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.imageBuilder `AppstreamResource.imageBuilder`} 
   */
  DescribeImageBuilders = "appstream:DescribeImageBuilders",

  /**
   * Read - Grants permission to retrieve a list that describes the permissions for shared AWS account IDs on a private image that you own
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImagePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   */
  DescribeImagePermissions = "appstream:DescribeImagePermissions",

  /**
   * Read - Grants permission to retrieve a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   */
  DescribeImages = "appstream:DescribeImages",

  /**
   * Read - Grants permission to retrieve a list that describes the streaming sessions for the specified stack and fleet. If a user ID is provided for the stack and fleet, only the streaming sessions for that user are described
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeSessions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   */
  DescribeSessions = "appstream:DescribeSessions",

  /**
   * Read - Grants permission to retrieve a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeStacks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   */
  DescribeStacks = "appstream:DescribeStacks",

  /**
   * Read - Grants permission to retrieve a list that describes one or more usage report subscriptions
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsageReportSubscriptions.html
   */
  DescribeUsageReportSubscriptions = "appstream:DescribeUsageReportSubscriptions",

  /**
   * Read - Grants permission to retrieve a list that describes the UserStackAssociation objects
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUserStackAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   */
  DescribeUserStackAssociations = "appstream:DescribeUserStackAssociations",

  /**
   * Read - Grants permission to retrieve a list that describes users in the user pool
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsers.html
   */
  DescribeUsers = "appstream:DescribeUsers",

  /**
   * Write - Grants permission to disable the specified user in the user pool. This action does not delete the user
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisableUser.html
   */
  DisableUser = "appstream:DisableUser",

  /**
   * Write - Grants permission to disassociate the specified application from the specified fleet
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateApplicationFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.application `AppstreamResource.application`} 
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateApplicationFleet = "appstream:DisassociateApplicationFleet",

  /**
   * Write - Grants permission to disassociate the specified application from the specified entitlement
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateApplicationFromEntitlement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   */
  DisassociateApplicationFromEntitlement = "appstream:DisassociateApplicationFromEntitlement",

  /**
   * Write - Grants permission to disassociate the specified fleet from the specified stack
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisassociateFleet = "appstream:DisassociateFleet",

  /**
   * Write - Grants permission to enable a user in the user pool
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_EnableUser.html
   */
  EnableUser = "appstream:EnableUser",

  /**
   * Write - Grants permission to immediately stop the specified streaming session
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ExpireSession.html
   */
  ExpireSession = "appstream:ExpireSession",

  /**
   * Read - Grants permission to retrieve the name of the fleet that is associated with the specified stack
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedFleets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   */
  ListAssociatedFleets = "appstream:ListAssociatedFleets",

  /**
   * Read - Grants permission to retrieve the name of the stack with which the specified fleet is associated
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedStacks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   */
  ListAssociatedStacks = "appstream:ListAssociatedStacks",

  /**
   * List - Grants permission to retrieve the applications that are associated with the specified entitlement
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListEntitledApplications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   */
  ListEntitledApplications = "appstream:ListEntitledApplications",

  /**
   * Read - Grants permission to retrieve a list of all tags for the specified AppStream 2.0 resource. The following resources can be tagged: Image builders, images, fleets, and stacks
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "appstream:ListTagsForResource",

  /**
   * Write - Grants permission to start the specified fleet
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartFleet = "appstream:StartFleet",

  /**
   * Write - Grants permission to start the specified image builder
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartImageBuilder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.imageBuilder `AppstreamResource.imageBuilder`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartImageBuilder = "appstream:StartImageBuilder",

  /**
   * Write - Grants permission to stop the specified fleet
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StopFleet = "appstream:StopFleet",

  /**
   * Write - Grants permission to stop the specified image builder
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopImageBuilder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.imageBuilder `AppstreamResource.imageBuilder`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StopImageBuilder = "appstream:StopImageBuilder",

  /**
   * Write - Grants permission to federated users to sign in by using their existing credentials and stream applications from the specified stack
   * @see https://docs.aws.amazon.com/appstream2/latest/developerguide/external-identity-providers-setting-up-saml.html#external-identity-providers-embed-inline-policy-for-IAM-role
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `appstream:userId`: Filters access by the ID of the AppStream 2.0 user ({@link https://docs.aws.amazon.com/appstream2/latest/developerguide/external-identity-providers-setting-up-saml.html#external-identity-providers-embed-inline-policy-for-IAM-role documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  Stream = "appstream:Stream",

  /**
   * Tagging - Grants permission to add or overwrite one or more tags for the specified AppStream 2.0 resource. The following resources can be tagged: Image builders, images, fleets, stacks, app blocks and applications
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.appBlock `AppstreamResource.appBlock`} 
   * - {@link AppstreamResource.application `AppstreamResource.application`} 
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   * - {@link AppstreamResource.imageBuilder `AppstreamResource.imageBuilder`} 
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "appstream:TagResource",

  /**
   * Tagging - Grants permission to disassociate one or more tags from the specified AppStream 2.0 resource
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.appBlock `AppstreamResource.appBlock`} 
   * - {@link AppstreamResource.application `AppstreamResource.application`} 
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   * - {@link AppstreamResource.imageBuilder `AppstreamResource.imageBuilder`} 
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "appstream:UntagResource",

  /**
   * Write - Grants permission to update the specified fields for the specified application
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.application `AppstreamResource.application`} 
   * - {@link AppstreamResource.appBlock `AppstreamResource.appBlock`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateApplication = "appstream:UpdateApplication",

  /**
   * Write - Grants permission to update the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateDirectoryConfig.html
   */
  UpdateDirectoryConfig = "appstream:UpdateDirectoryConfig",

  /**
   * Write - Grants permission to update the specified fields for the specified entitlement
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateEntitlement.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   */
  UpdateEntitlement = "appstream:UpdateEntitlement",

  /**
   * Write - Grants permission to update the specified fleet. All attributes except the fleet name can be updated when the fleet is in the STOPPED state
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateFleet = "appstream:UpdateFleet",

  /**
   * Write - Grants permission to add or update permissions for the specified private image
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateImagePermissions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateImagePermissions = "appstream:UpdateImagePermissions",

  /**
   * Write - Grants permission to update the specified fields for the specified stack
   * @see https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateStack = "appstream:UpdateStack",

  /**
   * * - Grant all appstream permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappstream2.0.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AppstreamResource.application `AppstreamResource.application`} 
   * - {@link AppstreamResource.fleet `AppstreamResource.fleet`} 
   * - {@link AppstreamResource.stack `AppstreamResource.stack`} 
   * - {@link AppstreamResource.image `AppstreamResource.image`} 
   * - {@link AppstreamResource.appBlock `AppstreamResource.appBlock`} 
   * - {@link AppstreamResource.imageBuilder `AppstreamResource.imageBuilder`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `appstream:userId`: Filters access by the ID of the AppStream 2.0 user ({@link https://docs.aws.amazon.com/appstream2/latest/developerguide/external-identity-providers-setting-up-saml.html#external-identity-providers-embed-inline-policy-for-IAM-role documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "appstream:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappstream2.0.html
 */
export const AppstreamResource = {

  /**
   * @see https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  fleet: (options: Partial<{partition: string, region: string, account: string, fleetName: string}> = {}) => `arn:${options.partition || '*'}:appstream:${options.region || '*'}:${options.account || '*'}:fleet/${options.fleetName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  image: (options: Partial<{partition: string, region: string, account: string, imageName: string}> = {}) => `arn:${options.partition || '*'}:appstream:${options.region || '*'}:${options.account || '*'}:image/${options.imageName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  imageBuilder: (options: Partial<{partition: string, region: string, account: string, imageBuilderName: string}> = {}) => `arn:${options.partition || '*'}:appstream:${options.region || '*'}:${options.account || '*'}:image-builder/${options.imageBuilderName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  stack: (options: Partial<{partition: string, region: string, account: string, stackName: string}> = {}) => `arn:${options.partition || '*'}:appstream:${options.region || '*'}:${options.account || '*'}:stack/${options.stackName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  appBlock: (options: Partial<{partition: string, region: string, account: string, appBlockName: string}> = {}) => `arn:${options.partition || '*'}:appstream:${options.region || '*'}:${options.account || '*'}:app-block/${options.appBlockName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  application: (options: Partial<{partition: string, region: string, account: string, applicationName: string}> = {}) => `arn:${options.partition || '*'}:appstream:${options.region || '*'}:${options.account || '*'}:application/${options.applicationName || '*'}`,
}

