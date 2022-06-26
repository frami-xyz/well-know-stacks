/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranslate.html
 */
export enum TranslateAction {

  /**
   * Write - Grants permission to create a Parallel Data
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_CreateParallelData.html
   */
  CreateParallelData = "translate:CreateParallelData",

  /**
   * Write - Grants permission to delete a Parallel Data
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_DeleteParallelData.html
   */
  DeleteParallelData = "translate:DeleteParallelData",

  /**
   * Write - Grants permission to delete a terminology
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_DeleteTerminology.html
   */
  DeleteTerminology = "translate:DeleteTerminology",

  /**
   * Read - Grants permission to get the properties associated with an asynchronous batch translation job
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_DescribeTextTranslationJob.html
   */
  DescribeTextTranslationJob = "translate:DescribeTextTranslationJob",

  /**
   * Read - Grants permission to get a Parallel Data
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_GetParallelData.html
   */
  GetParallelData = "translate:GetParallelData",

  /**
   * Read - Grants permission to retrieve a terminology
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_GetTerminology.html
   */
  GetTerminology = "translate:GetTerminology",

  /**
   * Write - Grants permission to create or update a terminology, depending on whether or not one already exists for the given terminology name
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_ImportTerminology.html
   */
  ImportTerminology = "translate:ImportTerminology",

  /**
   * List - Grants permission to list Parallel Data associated with your account
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_ListParallelData.html
   */
  ListParallelData = "translate:ListParallelData",

  /**
   * List - Grants permission to list terminologies associated with your account
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_ListTerminologies.html
   */
  ListTerminologies = "translate:ListTerminologies",

  /**
   * List - Grants permission to list batch translation jobs that you have submitted
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_ListTextTranslationJobs.html
   */
  ListTextTranslationJobs = "translate:ListTextTranslationJobs",

  /**
   * Write - Grants permission to start an asynchronous batch translation job. Batch translation jobs can be used to translate large volumes of text across multiple documents at once
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_StartTextTranslationJob.html
   */
  StartTextTranslationJob = "translate:StartTextTranslationJob",

  /**
   * Write - Grants permission to stop an asynchronous batch translation job that is in progress
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_StopTextTranslationJob.html
   */
  StopTextTranslationJob = "translate:StopTextTranslationJob",

  /**
   * Read - Grants permission to translate text from a source language to a target language
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_TranslateText.html
   */
  TranslateText = "translate:TranslateText",

  /**
   * Write - Grants permission to update an existing Parallel Data
   * @see https://docs.aws.amazon.com/translate/latest/dg/API_UpdateParallelData.html
   */
  UpdateParallelData = "translate:UpdateParallelData",

  /**
   * * - Grant all translate permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranslate.html
   */
  All = "translate:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranslate.html
 */
export const TranslateResource = {
}

