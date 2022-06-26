/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhubrefactorspaces.html
 */
export enum RefactorSpacesAction {

  /**
   * Write - Grants permission to create an application within an environment
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApplication = "refactor-spaces:CreateApplication",

  /**
   * Write - Grants permission to create an environment
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEnvironment = "refactor-spaces:CreateEnvironment",

  /**
   * Write - Grants permission to create a route within an application
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:RouteCreatedByAccount`: Filters access by restricting the action to only those accounts that created the route within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `refactor-spaces:SourcePath`: Filters access by the path of the route ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRoute = "refactor-spaces:CreateRoute",

  /**
   * Write - Grants permission to create a service within an application
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateService.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateService = "refactor-spaces:CreateService",

  /**
   * Write - Grants permission to delete an application from an environment
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_DeleteApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.application `RefactorSpacesResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteApplication = "refactor-spaces:DeleteApplication",

  /**
   * Write - Grants permission to delete an environment
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_DeleteEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.environment `RefactorSpacesResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteEnvironment = "refactor-spaces:DeleteEnvironment",

  /**
   * Write - Grants permission to delete a resource policy
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_DeleteResourcePolicy.html
   */
  DeleteResourcePolicy = "refactor-spaces:DeleteResourcePolicy",

  /**
   * Write - Grants permission to delete a route from an application
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_DeleteRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.route `RefactorSpacesResource.route`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:RouteCreatedByAccount`: Filters access by restricting the action to only those accounts that created the route within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `refactor-spaces:SourcePath`: Filters access by the path of the route ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteRoute = "refactor-spaces:DeleteRoute",

  /**
   * Write - Grants permission to delete a service from an application
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_DeleteService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.service `RefactorSpacesResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteService = "refactor-spaces:DeleteService",

  /**
   * Read - Grants permission to get more information about an application
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_GetApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.application `RefactorSpacesResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetApplication = "refactor-spaces:GetApplication",

  /**
   * Read - Grants permission to get more information for an environment
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_GetEnvironment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.environment `RefactorSpacesResource.environment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetEnvironment = "refactor-spaces:GetEnvironment",

  /**
   * Read - Grants permission to get the details about a resource policy
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_GetResourcePolicy.html
   */
  GetResourcePolicy = "refactor-spaces:GetResourcePolicy",

  /**
   * Read - Grants permission to get more information about a route
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_GetRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.route `RefactorSpacesResource.route`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:RouteCreatedByAccount`: Filters access by restricting the action to only those accounts that created the route within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `refactor-spaces:SourcePath`: Filters access by the path of the route ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetRoute = "refactor-spaces:GetRoute",

  /**
   * Read - Grants permission to get more information about a service
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_GetService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.service `RefactorSpacesResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetService = "refactor-spaces:GetService",

  /**
   * Read - Grants permission to list all the applications in an environment
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListApplications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.environment `RefactorSpacesResource.environment`} 
   */
  ListApplications = "refactor-spaces:ListApplications",

  /**
   * Read - Grants permission to list all the VPCs for the environment
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListEnvironmentVpcs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.environment `RefactorSpacesResource.environment`} 
   */
  ListEnvironmentVpcs = "refactor-spaces:ListEnvironmentVpcs",

  /**
   * Read - Grants permission to list all environments
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListEnvironments.html
   */
  ListEnvironments = "refactor-spaces:ListEnvironments",

  /**
   * Read - Grants permission to list all the routes in an application
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListRoutes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.environment `RefactorSpacesResource.environment`} 
   */
  ListRoutes = "refactor-spaces:ListRoutes",

  /**
   * Read - Grants permission to list all the services in an environment
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListServices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.environment `RefactorSpacesResource.environment`} 
   */
  ListServices = "refactor-spaces:ListServices",

  /**
   * Read - Grants permission to list all the tags for a given resource
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListTagsForResource.html
   */
  ListTagsForResource = "refactor-spaces:ListTagsForResource",

  /**
   * Write - Grants permission to add a resource policy
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_PutResourcePolicy.html
   */
  PutResourcePolicy = "refactor-spaces:PutResourcePolicy",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.application `RefactorSpacesResource.application`} 
   * - {@link RefactorSpacesResource.environment `RefactorSpacesResource.environment`} 
   * - {@link RefactorSpacesResource.route `RefactorSpacesResource.route`} 
   * - {@link RefactorSpacesResource.service `RefactorSpacesResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:RouteCreatedByAccount`: Filters access by restricting the action to only those accounts that created the route within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `refactor-spaces:SourcePath`: Filters access by the path of the route ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "refactor-spaces:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from a resource
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.application `RefactorSpacesResource.application`} 
   * - {@link RefactorSpacesResource.environment `RefactorSpacesResource.environment`} 
   * - {@link RefactorSpacesResource.route `RefactorSpacesResource.route`} 
   * - {@link RefactorSpacesResource.service `RefactorSpacesResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:RouteCreatedByAccount`: Filters access by restricting the action to only those accounts that created the route within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `refactor-spaces:SourcePath`: Filters access by the path of the route ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "refactor-spaces:UntagResource",

  /**
   * Write - Grants permission to update a route from an application
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_UpdateRoute.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.route `RefactorSpacesResource.route`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:RouteCreatedByAccount`: Filters access by restricting the action to only those accounts that created the route within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `refactor-spaces:SourcePath`: Filters access by the path of the route ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateRoute = "refactor-spaces:UpdateRoute",

  /**
   * * - Grant all refactor-spaces permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhubrefactorspaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RefactorSpacesResource.application `RefactorSpacesResource.application`} 
   * - {@link RefactorSpacesResource.environment `RefactorSpacesResource.environment`} 
   * - {@link RefactorSpacesResource.route `RefactorSpacesResource.route`} 
   * - {@link RefactorSpacesResource.service `RefactorSpacesResource.service`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:RouteCreatedByAccount`: Filters access by restricting the action to only those accounts that created the route within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:SourcePath`: Filters access by the path of the route ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "refactor-spaces:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhubrefactorspaces.html
 */
export const RefactorSpacesResource = {

  /**
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  environment: (options: Partial<{partition: string, region: string, account: string, environmentId: string}> = {}) => `arn:${options.partition || '*'}:refactor-spaces:${options.region || '*'}:${options.account || '*'}:environment/${options.environmentId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  application: (options: Partial<{partition: string, region: string, account: string, environmentId: string, applicationId: string}> = {}) => `arn:${options.partition || '*'}:refactor-spaces:${options.region || '*'}:${options.account || '*'}:environment/${options.environmentId || '*'}/application/${options.applicationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  service: (options: Partial<{partition: string, region: string, account: string, environmentId: string, applicationId: string, serviceId: string}> = {}) => `arn:${options.partition || '*'}:refactor-spaces:${options.region || '*'}:${options.account || '*'}:environment/${options.environmentId || '*'}/application/${options.applicationId || '*'}/service/${options.serviceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ApplicationCreatedByAccount`: Filters access by restricting the action to only those accounts that created the application within an environment ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:CreatedByAccountIds`: Filters access by the accounts that created the resource ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `refactor-spaces:RouteCreatedByAccount`: Filters access by restricting the action to only those accounts that created the route within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:ServiceCreatedByAccount`: Filters access by restricting the action to only those accounts that created the service within an application ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `refactor-spaces:SourcePath`: Filters access by the path of the route ({@link https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  route: (options: Partial<{partition: string, region: string, account: string, environmentId: string, applicationId: string, routeId: string}> = {}) => `arn:${options.partition || '*'}:refactor-spaces:${options.region || '*'}:${options.account || '*'}:environment/${options.environmentId || '*'}/application/${options.applicationId || '*'}/route/${options.routeId || '*'}`,
}

