/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepcomposer.html
 */
export enum DeepcomposerAction {

  /**
   * Write - Grants permission to associate a DeepComposer coupon (or DSN) with the account associated with the sender of the request
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/what-it-is-keyboard.html
   */
  AssociateCoupon = "deepcomposer:AssociateCoupon",

  /**
   * Write - Grants permission to create an audio file by converting the midi composition into a wav or mp3 file
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.audio `DeepcomposerResource.audio`} 
   */
  CreateAudio = "deepcomposer:CreateAudio",

  /**
   * Write - Grants permission to create a multi-track midi composition
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.composition `DeepcomposerResource.composition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateComposition = "deepcomposer:CreateComposition",

  /**
   * Write - Grants permission to start creating/training a generative-model that is able to perform inference against the user-provided piano-melody to create a multi-track midi composition
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateModel = "deepcomposer:CreateModel",

  /**
   * Write - Grants permission to delete the composition
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.composition `DeepcomposerResource.composition`} 
   */
  DeleteComposition = "deepcomposer:DeleteComposition",

  /**
   * Write - Grants permission to delete the model
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   */
  DeleteModel = "deepcomposer:DeleteModel",

  /**
   * Read - Grants permission to get information about the composition
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.composition `DeepcomposerResource.composition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetComposition = "deepcomposer:GetComposition",

  /**
   * Read - Grants permission to get information about the model
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetModel = "deepcomposer:GetModel",

  /**
   * Read - Grants permission to get information about the sample/pre-trained DeepComposer model
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   */
  GetSampleModel = "deepcomposer:GetSampleModel",

  /**
   * List - Grants permission to list all the compositions owned by the sender of the request
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.composition `DeepcomposerResource.composition`} 
   */
  ListCompositions = "deepcomposer:ListCompositions",

  /**
   * List - Grants permission to list all the models owned by the sender of the request
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   */
  ListModels = "deepcomposer:ListModels",

  /**
   * List - Grants permission to list all the sample/pre-trained models provided by the DeepComposer service
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   */
  ListSampleModels = "deepcomposer:ListSampleModels",

  /**
   * List - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/deepcomposer-tagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.composition `DeepcomposerResource.composition`} 
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "deepcomposer:ListTagsForResource",

  /**
   * List - Grants permission to list all the training options or topic for creating/training a model
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   */
  ListTrainingTopics = "deepcomposer:ListTrainingTopics",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/deepcomposer-tagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.composition `DeepcomposerResource.composition`} 
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "deepcomposer:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/deepcomposer-tagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.composition `DeepcomposerResource.composition`} 
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "deepcomposer:UntagResource",

  /**
   * Write - Grants permission to modify the mutable properties associated with a composition
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.composition `DeepcomposerResource.composition`} 
   */
  UpdateComposition = "deepcomposer:UpdateComposition",

  /**
   * Write - Grants permission to to modify the mutable properties associated with a model
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   */
  UpdateModel = "deepcomposer:UpdateModel",

  /**
   * * - Grant all deepcomposer permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepcomposer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link DeepcomposerResource.audio `DeepcomposerResource.audio`} 
   * - {@link DeepcomposerResource.composition `DeepcomposerResource.composition`} 
   * - {@link DeepcomposerResource.model `DeepcomposerResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "deepcomposer:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepcomposer.html
 */
export const DeepcomposerResource = {

  /**
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  model: (options: Partial<{partition: string, region: string, account: string, modelId: string}> = {}) => `arn:${options.partition || '*'}:deepcomposer:${options.region || '*'}:${options.account || '*'}:model/${options.modelId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  composition: (options: Partial<{partition: string, region: string, account: string, compositionId: string}> = {}) => `arn:${options.partition || '*'}:deepcomposer:${options.region || '*'}:${options.account || '*'}:composition/${options.compositionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   */
  audio: (options: Partial<{partition: string, region: string, account: string, audioId: string}> = {}) => `arn:${options.partition || '*'}:deepcomposer:${options.region || '*'}:${options.account || '*'}:audio/${options.audioId || '*'}`,
}

