/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlex.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html
 */
export enum LexAction {

  /**
   * Write - Creates a new version based on the $LATEST version of the specified bot
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_CreateBotVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  CreateBotVersion = "lex:CreateBotVersion",

  /**
   * Write - Creates a new version based on the $LATEST version of the specified intent
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_CreateIntentVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.intentVersion `LexResource.intentVersion`} 
   */
  CreateIntentVersion = "lex:CreateIntentVersion",

  /**
   * Write - Creates a new version based on the $LATEST version of the specified slot type
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_CreateSlotTypeVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.slottypeVersion `LexResource.slottypeVersion`} 
   */
  CreateSlotTypeVersion = "lex:CreateSlotTypeVersion",

  /**
   * Write - Deletes all versions of a bot
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   * - {@link LexResource.bot `LexResource.bot`} 
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  DeleteBot = "lex:DeleteBot",

  /**
   * Write - Deletes an alias for a specific bot
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  DeleteBotAlias = "lex:DeleteBotAlias",

  /**
   * Write - Deletes the association between a Amazon Lex bot alias and a messaging platform
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotChannelAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.channel `LexResource.channel`} 
   */
  DeleteBotChannelAssociation = "lex:DeleteBotChannelAssociation",

  /**
   * Write - Deletes a specific version of a bot
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_DeleteBotVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DeleteBotVersion = "lex:DeleteBotVersion",

  /**
   * Write - Deletes all versions of an intent
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_DeleteIntent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.intentVersion `LexResource.intentVersion`} 
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DeleteIntent = "lex:DeleteIntent",

  /**
   * Write - Deletes a specific version of an intent
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_DeleteIntentVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.intentVersion `LexResource.intentVersion`} 
   */
  DeleteIntentVersion = "lex:DeleteIntentVersion",

  /**
   * Write - Removes session information for a specified bot, alias, and user ID
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_runtime_DeleteSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   */
  DeleteSession = "lex:DeleteSession",

  /**
   * Write - Deletes all versions of a slot type
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_DeleteSlotType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.slottypeVersion `LexResource.slottypeVersion`} 
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DeleteSlotType = "lex:DeleteSlotType",

  /**
   * Write - Deletes a specific version of a slot type
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_DeleteSlotTypeVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.slottypeVersion `LexResource.slottypeVersion`} 
   */
  DeleteSlotTypeVersion = "lex:DeleteSlotTypeVersion",

  /**
   * Write - Deletes the information Amazon Lex maintains for utterances on a specific bot and userId
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_DeleteUtterances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DeleteUtterances = "lex:DeleteUtterances",

  /**
   * Read - Returns information for a specific bot. In addition to the bot name, the bot version or alias is required
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetBot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   */
  GetBot = "lex:GetBot",

  /**
   * Read - Returns information about a Amazon Lex bot alias
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetBotAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  GetBotAlias = "lex:GetBotAlias",

  /**
   * List - Returns a list of aliases for a given Amazon Lex bot
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetBotAliases.html
   */
  GetBotAliases = "lex:GetBotAliases",

  /**
   * Read - Returns information about the association between a Amazon Lex bot and a messaging platform
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetBotChannelAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.channel `LexResource.channel`} 
   */
  GetBotChannelAssociation = "lex:GetBotChannelAssociation",

  /**
   * List - Returns a list of all of the channels associated with a single bot
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetBotChannelAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.channel `LexResource.channel`} 
   */
  GetBotChannelAssociations = "lex:GetBotChannelAssociations",

  /**
   * List - Returns information for all versions of a specific bot
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetBotVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   */
  GetBotVersions = "lex:GetBotVersions",

  /**
   * List - Returns information for the $LATEST version of all bots, subject to filters provided by the client
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetBots.html
   */
  GetBots = "lex:GetBots",

  /**
   * Read - Returns information about a built-in intent
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinIntent.html
   */
  GetBuiltinIntent = "lex:GetBuiltinIntent",

  /**
   * Read - Gets a list of built-in intents that meet the specified criteria
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinIntents.html
   */
  GetBuiltinIntents = "lex:GetBuiltinIntents",

  /**
   * Read - Gets a list of built-in slot types that meet the specified criteria
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetBuiltinSlotTypes.html
   */
  GetBuiltinSlotTypes = "lex:GetBuiltinSlotTypes",

  /**
   * Read - Exports Amazon Lex Resource in a requested format
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetExport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   */
  GetExport = "lex:GetExport",

  /**
   * Read - Gets information about an import job started with StartImport
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetImport.html
   */
  GetImport = "lex:GetImport",

  /**
   * Read - Returns information for a specific intent. In addition to the intent name, you must also specify the intent version
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetIntent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.intentVersion `LexResource.intentVersion`} 
   */
  GetIntent = "lex:GetIntent",

  /**
   * List - Returns information for all versions of a specific intent
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetIntentVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.intentVersion `LexResource.intentVersion`} 
   */
  GetIntentVersions = "lex:GetIntentVersions",

  /**
   * List - Returns information for the $LATEST version of all intents, subject to filters provided by the client
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetIntents.html
   */
  GetIntents = "lex:GetIntents",

  /**
   * Read - Grants permission to view an ongoing or completed migration
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetMigration.html
   */
  GetMigration = "lex:GetMigration",

  /**
   * List - Grants permission to view list of migrations from Amazon Lex v1 to Amazon Lex v2
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetMigrations.html
   */
  GetMigrations = "lex:GetMigrations",

  /**
   * Read - Returns session information for a specified bot, alias, and user ID
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_runtime_GetSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   */
  GetSession = "lex:GetSession",

  /**
   * Read - Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must also specify the slot type version
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.slottypeVersion `LexResource.slottypeVersion`} 
   */
  GetSlotType = "lex:GetSlotType",

  /**
   * List - Returns information for all versions of a specific slot type
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotTypeVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.slottypeVersion `LexResource.slottypeVersion`} 
   */
  GetSlotTypeVersions = "lex:GetSlotTypeVersions",

  /**
   * List - Returns information for the $LATEST version of all slot types, subject to filters provided by the client
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetSlotTypes.html
   */
  GetSlotTypes = "lex:GetSlotTypes",

  /**
   * List - Returns a view of aggregate utterance data for versions of a bot for a recent time period
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_GetUtterancesView.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   */
  GetUtterancesView = "lex:GetUtterancesView",

  /**
   * Read - Lists tags for a Lex resource
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * - {@link LexResource.channel `LexResource.channel`} 
   */
  ListTagsForResource = "lex:ListTagsForResource",

  /**
   * Write - Sends user input (text or speech) to Amazon Lex
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   */
  PostContent = "lex:PostContent",

  /**
   * Write - Sends user input (text-only) to Amazon Lex
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   */
  PostText = "lex:PostText",

  /**
   * Write - Creates or updates the $LATEST version of a Amazon Lex conversational bot
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_PutBot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBot = "lex:PutBot",

  /**
   * Write - Creates or updates an alias for the specific bot
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_PutBotAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutBotAlias = "lex:PutBotAlias",

  /**
   * Write - Creates or updates the $LATEST version of an intent
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_PutIntent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.intentVersion `LexResource.intentVersion`} 
   */
  PutIntent = "lex:PutIntent",

  /**
   * Write - Creates a new session or modifies an existing session with an Amazon Lex bot
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PutSession.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   */
  PutSession = "lex:PutSession",

  /**
   * Write - Creates or updates the $LATEST version of a slot type
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_PutSlotType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.slottypeVersion `LexResource.slottypeVersion`} 
   */
  PutSlotType = "lex:PutSlotType",

  /**
   * Write - Starts a job to import a resource to Amazon Lex
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_StartImport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  StartImport = "lex:StartImport",

  /**
   * Write - Grants permission to migrate a bot from Amazon Lex v1 to Amazon Lex v2
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_StartMigration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   */
  StartMigration = "lex:StartMigration",

  /**
   * Tagging - Adds or overwrites tags to a Lex resource
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * - {@link LexResource.channel `LexResource.channel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "lex:TagResource",

  /**
   * Tagging - Removes tags from a Lex resource
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * - {@link LexResource.channel `LexResource.channel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "lex:UntagResource",

  /**
   * Write - Grants permission to build an existing bot locale in a bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_BuildBotLocale.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  BuildBotLocale = "lex:BuildBotLocale",

  /**
   * Write - Grants permission to create a new bot and a test bot alias pointing to the DRAFT bot version
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateBot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateBot = "lex:CreateBot",

  /**
   * Write - Grants permission to create a new bot alias in a bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateBotAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateBotAlias = "lex:CreateBotAlias",

  /**
   * Write - Grants permission to create a bot channel in an existing bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  CreateBotChannel = "lex:CreateBotChannel",

  /**
   * Write - Grants permission to create a new bot locale in an existing bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateBotLocale.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  CreateBotLocale = "lex:CreateBotLocale",

  /**
   * Write - Grants permission to create a new custom vocabulary in an existing bot locale
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/vocab.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  CreateCustomVocabulary = "lex:CreateCustomVocabulary",

  /**
   * Write - Grants permission to create an export for an existing resource
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateExport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  CreateExport = "lex:CreateExport",

  /**
   * Write - Grants permission to create a new intent in an existing bot locale
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateIntent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  CreateIntent = "lex:CreateIntent",

  /**
   * Write - Grants permission to create a new resource policy for a Lex resource
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  CreateResourcePolicy = "lex:CreateResourcePolicy",

  /**
   * Write - Grants permission to create a new slot in an intent
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateSlot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  CreateSlot = "lex:CreateSlot",

  /**
   * Write - Grants permission to create a new slot type in an existing bot locale
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateSlotType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  CreateSlotType = "lex:CreateSlotType",

  /**
   * Write - Grants permission to create an upload url for import file
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateUploadUrl.html
   */
  CreateUploadUrl = "lex:CreateUploadUrl",

  /**
   * Write - Grants permission to delete an existing bot channel
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DeleteBotChannel = "lex:DeleteBotChannel",

  /**
   * Write - Grants permission to delete an existing bot locale in a bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteBotLocale.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DeleteBotLocale = "lex:DeleteBotLocale",

  /**
   * Write - Grants permission to delete an existing custom vocabulary in a bot locale
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteCustomVocabulary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DeleteCustomVocabulary = "lex:DeleteCustomVocabulary",

  /**
   * Write - Grants permission to delete an existing export
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteExport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DeleteExport = "lex:DeleteExport",

  /**
   * Write - Grants permission to delete an existing import
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteImport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DeleteImport = "lex:DeleteImport",

  /**
   * Write - Grants permission to delete an existing resource policy for a Lex resource
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  DeleteResourcePolicy = "lex:DeleteResourcePolicy",

  /**
   * Write - Grants permission to delete an existing slot in an intent
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteSlot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DeleteSlot = "lex:DeleteSlot",

  /**
   * Read - Grants permission to retrieve an existing bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeBot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeBot = "lex:DescribeBot",

  /**
   * Read - Grants permission to retrieve an existing bot alias
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeBotAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  DescribeBotAlias = "lex:DescribeBotAlias",

  /**
   * Read - Grants permission to retrieve an existing bot channel
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeBotChannel = "lex:DescribeBotChannel",

  /**
   * Read - Grants permission to retrieve an existing bot locale
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeBotLocale.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeBotLocale = "lex:DescribeBotLocale",

  /**
   * Read - Grants permission to retrieve metadata information about a bot recommendation
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeBotRecommendation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeBotRecommendation = "lex:DescribeBotRecommendation",

  /**
   * Read - Grants permission to retrieve an existing bot version
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeBotVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeBotVersion = "lex:DescribeBotVersion",

  /**
   * Read - Grants permission to retrieve an existing custom vocabulary
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/vocab.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeCustomVocabulary = "lex:DescribeCustomVocabulary",

  /**
   * Read - Grants permission to retrieve metadata of an existing custom vocabulary
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeCustomVocabularyMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeCustomVocabularyMetadata = "lex:DescribeCustomVocabularyMetadata",

  /**
   * Read - Grants permission to retrieve an existing export
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeExport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeExport = "lex:DescribeExport",

  /**
   * Read - Grants permission to retrieve an existing import
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeImport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeImport = "lex:DescribeImport",

  /**
   * Read - Grants permission to retrieve an existing intent
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeIntent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeIntent = "lex:DescribeIntent",

  /**
   * Read - Grants permission to retrieve an existing resource policy for a Lex resource
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  DescribeResourcePolicy = "lex:DescribeResourcePolicy",

  /**
   * Read - Grants permission to retrieve an existing slot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeSlot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeSlot = "lex:DescribeSlot",

  /**
   * Read - Grants permission to retrieve an existing slot type
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeSlotType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  DescribeSlotType = "lex:DescribeSlotType",

  /**
   * List - Grants permission to list utterances and statistics for a bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListAggregatedUtterances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  ListAggregatedUtterances = "lex:ListAggregatedUtterances",

  /**
   * List - Grants permission to list bot aliases in an bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBotAliases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  ListBotAliases = "lex:ListBotAliases",

  /**
   * List - Grants permission to list bot channels
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/deploying-messaging-platform.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  ListBotChannels = "lex:ListBotChannels",

  /**
   * List - Grants permission to list bot locales in a bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBotLocales.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  ListBotLocales = "lex:ListBotLocales",

  /**
   * List - Grants permission to get a list of bot recommendations that meet the specified criteria
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBotRecommendations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  ListBotRecommendations = "lex:ListBotRecommendations",

  /**
   * List - Grants permission to list existing bot versions
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBotVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  ListBotVersions = "lex:ListBotVersions",

  /**
   * List - Grants permission to list existing bots
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBots.html
   */
  ListBots = "lex:ListBots",

  /**
   * List - Grants permission to list built-in intents
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBuiltInIntents.html
   */
  ListBuiltInIntents = "lex:ListBuiltInIntents",

  /**
   * List - Grants permission to list built-in slot types
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBuiltInSlotTypes.html
   */
  ListBuiltInSlotTypes = "lex:ListBuiltInSlotTypes",

  /**
   * List - Grants permission to list existing exports
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListExports.html
   */
  ListExports = "lex:ListExports",

  /**
   * List - Grants permission to list existing imports
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListImports.html
   */
  ListImports = "lex:ListImports",

  /**
   * List - Grants permission to list intents in a bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListIntents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  ListIntents = "lex:ListIntents",

  /**
   * List - Grants permission to get a list of recommended intents provided by the bot recommendation
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListRecommendedIntents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  ListRecommendedIntents = "lex:ListRecommendedIntents",

  /**
   * List - Grants permission to list slot types in a bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListSlotTypes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  ListSlotTypes = "lex:ListSlotTypes",

  /**
   * List - Grants permission to list slots in an intent
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_ListSlots.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  ListSlots = "lex:ListSlots",

  /**
   * Write - Grants permission to send user input (text-only) to an bot alias
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_RecognizeText.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  RecognizeText = "lex:RecognizeText",

  /**
   * Write - Grants permission to send user input (text or speech) to an bot alias
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_RecognizeUtterance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  RecognizeUtterance = "lex:RecognizeUtterance",

  /**
   * List - Grants permission to search for associated transcripts that meet the specified criteria
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_SearchAssociatedTranscripts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  SearchAssociatedTranscripts = "lex:SearchAssociatedTranscripts",

  /**
   * Write - Grants permission to start a bot recommendation for an existing bot locale
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_StartBotRecommendation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  StartBotRecommendation = "lex:StartBotRecommendation",

  /**
   * Write - Grants permission to stream user input (speech/text/DTMF) to a bot alias
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_StartConversation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  StartConversation = "lex:StartConversation",

  /**
   * Write - Grants permission to update an existing bot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateBot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  UpdateBot = "lex:UpdateBot",

  /**
   * Write - Grants permission to update an existing bot alias
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateBotAlias.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  UpdateBotAlias = "lex:UpdateBotAlias",

  /**
   * Write - Grants permission to update an existing bot locale
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateBotLocale.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  UpdateBotLocale = "lex:UpdateBotLocale",

  /**
   * Write - Grants permission to update an existing bot recommendation request
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateBotRecommendation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  UpdateBotRecommendation = "lex:UpdateBotRecommendation",

  /**
   * Write - Grants permission to update an existing custom vocabulary
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/vocab.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  UpdateCustomVocabulary = "lex:UpdateCustomVocabulary",

  /**
   * Write - Grants permission to update an existing export
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateExport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  UpdateExport = "lex:UpdateExport",

  /**
   * Write - Grants permission to update an existing intent
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateIntent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  UpdateIntent = "lex:UpdateIntent",

  /**
   * Write - Grants permission to update an existing resource policy for a Lex resource
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   */
  UpdateResourcePolicy = "lex:UpdateResourcePolicy",

  /**
   * Write - Grants permission to update an existing slot
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateSlot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  UpdateSlot = "lex:UpdateSlot",

  /**
   * Write - Grants permission to update an existing slot type
   * @see https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateSlotType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.bot `LexResource.bot`} 
   */
  UpdateSlotType = "lex:UpdateSlotType",

  /**
   * * - Grant all lex permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link LexResource.botVersion `LexResource.botVersion`} 
   * - {@link LexResource.bot `LexResource.bot`} 
   * - {@link LexResource.intentVersion `LexResource.intentVersion`} 
   * - {@link LexResource.slottypeVersion `LexResource.slottypeVersion`} 
   * - {@link LexResource.botAlias `LexResource.botAlias`} 
   * - {@link LexResource.channel `LexResource.channel`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the set of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "lex:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlex.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html
 */
export const LexResource = {

  /**
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_BotMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to a Lex resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  bot: (options: Partial<{partition: string, region: string, account: string, botName: string}> = {}) => `arn:${options.partition || '*'}:lex:${options.region || '*'}:${options.account || '*'}:bot:${options.botName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_BotMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to a Lex resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  botVersion: (options: Partial<{partition: string, region: string, account: string, botName: string, botVersion: string}> = {}) => `arn:${options.partition || '*'}:lex:${options.region || '*'}:${options.account || '*'}:bot:${options.botName || '*'}:${options.botVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_BotAliasMetadata.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to a Lex resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  botAlias: (options: Partial<{partition: string, region: string, account: string, botName: string, botAlias: string}> = {}) => `arn:${options.partition || '*'}:lex:${options.region || '*'}:${options.account || '*'}:bot:${options.botName || '*'}:${options.botAlias || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_BotChannelAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags attached to a Lex resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  channel: (options: Partial<{partition: string, region: string, account: string, botName: string, botAlias: string, channelName: string}> = {}) => `arn:${options.partition || '*'}:lex:${options.region || '*'}:${options.account || '*'}:bot-channel:${options.botName || '*'}:${options.botAlias || '*'}:${options.channelName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_Intent.html
   */
  intentVersion: (options: Partial<{partition: string, region: string, account: string, intentName: string, intentVersion: string}> = {}) => `arn:${options.partition || '*'}:lex:${options.region || '*'}:${options.account || '*'}:intent:${options.intentName || '*'}:${options.intentVersion || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/lex/latest/dg/API_SlotTypeMetadata.html
   */
  slottypeVersion: (options: Partial<{partition: string, region: string, account: string, slotName: string, slotVersion: string}> = {}) => `arn:${options.partition || '*'}:lex:${options.region || '*'}:${options.account || '*'}:slottype:${options.slotName || '*'}:${options.slotVersion || '*'}`,
}

