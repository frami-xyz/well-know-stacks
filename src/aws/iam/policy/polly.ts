/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpolly.html
 */
export enum PollyAction {

  /**
   * Write - Grants permissions to delete the specified pronunciation lexicon stored in an AWS Region
   * @see https://docs.aws.amazon.com/polly/latest/dg/API_DeleteLexicon.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PollyResource.lexicon `PollyResource.lexicon`} 
   */
  DeleteLexicon = "polly:DeleteLexicon",

  /**
   * List - Grants permissions to describe the list of voices that are available for use when requesting speech synthesis
   * @see https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html
   */
  DescribeVoices = "polly:DescribeVoices",

  /**
   * Read - Grants permissions to retrieve the content of the specified pronunciation lexicon stored in an AWS Region
   * @see https://docs.aws.amazon.com/polly/latest/dg/API_GetLexicon.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PollyResource.lexicon `PollyResource.lexicon`} 
   */
  GetLexicon = "polly:GetLexicon",

  /**
   * Read - Grants permissions to get information about specific speech synthesis task
   * @see https://docs.aws.amazon.com/polly/latest/dg/API_GetSpeechSynthesisTask.html
   */
  GetSpeechSynthesisTask = "polly:GetSpeechSynthesisTask",

  /**
   * List - Grants permisions to list the pronunciation lexicons stored in an AWS Region
   * @see https://docs.aws.amazon.com/polly/latest/dg/API_ListLexicons.html
   */
  ListLexicons = "polly:ListLexicons",

  /**
   * List - Grants permissions to list requested speech synthesis tasks
   * @see https://docs.aws.amazon.com/polly/latest/dg/API_ListSpeechSynthesisTasks.html
   */
  ListSpeechSynthesisTasks = "polly:ListSpeechSynthesisTasks",

  /**
   * Write - Grants permissions to store a pronunciation lexicon in an AWS Region
   * @see https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PollyResource.lexicon `PollyResource.lexicon`} 
   */
  PutLexicon = "polly:PutLexicon",

  /**
   * Write - Grants permissions to synthesize long inputs to the provided S3 location
   * @see https://docs.aws.amazon.com/polly/latest/dg/API_StartSpeechSynthesisTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PollyResource.lexicon `PollyResource.lexicon`} 
   */
  StartSpeechSynthesisTask = "polly:StartSpeechSynthesisTask",

  /**
   * Read - Grants permissions to synthesize speech
   * @see https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PollyResource.lexicon `PollyResource.lexicon`} 
   */
  SynthesizeSpeech = "polly:SynthesizeSpeech",

  /**
   * * - Grant all polly permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpolly.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link PollyResource.lexicon `PollyResource.lexicon`} 
   */
  All = "polly:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpolly.html
 */
export const PollyResource = {

  /**
   * @see https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html
   */
  lexicon: (options: Partial<{partition: string, region: string, account: string, lexiconName: string}> = {}) => `arn:${options.partition || '*'}:polly:${options.region || '*'}:${options.account || '*'}:lexicon/${options.lexiconName || '*'}`,
}

