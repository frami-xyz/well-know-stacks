/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyuibuilder.html
 */
export enum AmplifyuibuilderAction {

  /**
   * Write - Grants permission to create a component
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_CreateComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateComponent = "amplifyuibuilder:CreateComponent",

  /**
   * Write - Grants permission to create a theme
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_CreateTheme.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTheme = "amplifyuibuilder:CreateTheme",

  /**
   * Write - Grants permission to delete a component
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_DeleteComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyuibuilderResource.componentResource `AmplifyuibuilderResource.componentResource`} 
   */
  DeleteComponent = "amplifyuibuilder:DeleteComponent",

  /**
   * Write - Grants permission to delete a theme
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_DeleteTheme.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyuibuilderResource.themeResource `AmplifyuibuilderResource.themeResource`} 
   */
  DeleteTheme = "amplifyuibuilder:DeleteTheme",

  /**
   * Write - Grants permission to exchange a code for a token
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ExchangeCodeForToken.html
   */
  ExchangeCodeForToken = "amplifyuibuilder:ExchangeCodeForToken",

  /**
   * Read - Grants permission to export components
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ExportComponents.html
   */
  ExportComponents = "amplifyuibuilder:ExportComponents",

  /**
   * Read - Grants permission to export themes
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ExportThemes.html
   */
  ExportThemes = "amplifyuibuilder:ExportThemes",

  /**
   * Read - Grants permission to get an existing component
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyuibuilderResource.componentResource `AmplifyuibuilderResource.componentResource`} 
   */
  GetComponent = "amplifyuibuilder:GetComponent",

  /**
   * Read - Grants permission to get an existing theme
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetTheme.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyuibuilderResource.themeResource `AmplifyuibuilderResource.themeResource`} 
   */
  GetTheme = "amplifyuibuilder:GetTheme",

  /**
   * List - Grants permission to list the components for an app
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListComponents.html
   */
  ListComponents = "amplifyuibuilder:ListComponents",

  /**
   * Read - Grants permission to list the tags for a resource
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyuibuilderResource.componentResource `AmplifyuibuilderResource.componentResource`} 
   * - {@link AmplifyuibuilderResource.themeResource `AmplifyuibuilderResource.themeResource`} 
   */
  ListTagsForResource = "amplifyuibuilder:ListTagsForResource",

  /**
   * List - Grants permission to list the themes for an app
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListThemes.html
   */
  ListThemes = "amplifyuibuilder:ListThemes",

  /**
   * Write - Grants permission to refresh an access token
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_RefreshToken.html
   */
  RefreshToken = "amplifyuibuilder:RefreshToken",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyuibuilderResource.componentResource `AmplifyuibuilderResource.componentResource`} 
   * - {@link AmplifyuibuilderResource.themeResource `AmplifyuibuilderResource.themeResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "amplifyuibuilder:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/welcome.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyuibuilderResource.componentResource `AmplifyuibuilderResource.componentResource`} 
   * - {@link AmplifyuibuilderResource.themeResource `AmplifyuibuilderResource.themeResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "amplifyuibuilder:UntagResource",

  /**
   * Write - Grants permission to update a component
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_UpdateComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyuibuilderResource.componentResource `AmplifyuibuilderResource.componentResource`} 
   */
  UpdateComponent = "amplifyuibuilder:UpdateComponent",

  /**
   * Write - Grants permission to update a theme
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_UpdateTheme.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyuibuilderResource.themeResource `AmplifyuibuilderResource.themeResource`} 
   */
  UpdateTheme = "amplifyuibuilder:UpdateTheme",

  /**
   * * - Grant all amplifyuibuilder permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyuibuilder.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link AmplifyuibuilderResource.componentResource `AmplifyuibuilderResource.componentResource`} 
   * - {@link AmplifyuibuilderResource.themeResource `AmplifyuibuilderResource.themeResource`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "amplifyuibuilder:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyuibuilder.html
 */
export const AmplifyuibuilderResource = {

  /**
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_Component.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `amplifyuibuilder:AppId`: Filters access by the app ID ({@link https://docs.aws.amazon.com/amplify/latest/APIReference/API_App.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `amplifyuibuilder:ComponentsId`: Filters access by the component ID ({@link https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_Component.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `amplifyuibuilder:EnvironmentName`: Filters access by the backend environment name ({@link https://docs.aws.amazon.com/amplify/latest/APIReference/API_BackendEnvironment.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  componentResource: (options: Partial<{partition: string, region: string, account: string, appId: string, environmentName: string, id: string}> = {}) => `arn:${options.partition || '*'}:amplifyuibuilder:${options.region || '*'}:${options.account || '*'}:app/${options.appId || '*'}/environment/${options.environmentName || '*'}/components/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_Theme.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `amplifyuibuilder:AppId`: Filters access by the app ID ({@link https://docs.aws.amazon.com/amplify/latest/APIReference/API_App.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `amplifyuibuilder:EnvironmentName`: Filters access by the backend environment name ({@link https://docs.aws.amazon.com/amplify/latest/APIReference/API_BackendEnvironment.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `amplifyuibuilder:ThemesId`: Filters access by the theme ID ({@link https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_Theme.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  themeResource: (options: Partial<{partition: string, region: string, account: string, appId: string, environmentName: string, id: string}> = {}) => `arn:${options.partition || '*'}:amplifyuibuilder:${options.region || '*'}:${options.account || '*'}:app/${options.appId || '*'}/environment/${options.environmentName || '*'}/themes/${options.id || '*'}`,
}

