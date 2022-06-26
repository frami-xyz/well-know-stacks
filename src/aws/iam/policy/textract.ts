/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontextract.html
 */
export enum TextractAction {

  /**
   * Read - Grants permission to detect instances of real-world document entities within an image provided as input
   * @see https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeDocument.html
   */
  AnalyzeDocument = "textract:AnalyzeDocument",

  /**
   * Read - Grants permission to detect instances of real-world document entities within an image provided as input
   * @see https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeExpense.html
   */
  AnalyzeExpense = "textract:AnalyzeExpense",

  /**
   * Read - Grants permission to detect relevant information from identity documents provided as input
   * @see https://docs.aws.amazon.com/textract/latest/dg/API_AnalyzeID.html
   */
  AnalyzeID = "textract:AnalyzeID",

  /**
   * Read - Grants permission to detect text in document images
   * @see https://docs.aws.amazon.com/textract/latest/dg/API_DetectDocumentText.html
   */
  DetectDocumentText = "textract:DetectDocumentText",

  /**
   * Read - Grants permission to return information about a document analysis job
   * @see https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentAnalysis.html
   */
  GetDocumentAnalysis = "textract:GetDocumentAnalysis",

  /**
   * Read - Grants permission to return information about a document text detection job
   * @see https://docs.aws.amazon.com/textract/latest/dg/API_GetDocumentTextDetection.html
   */
  GetDocumentTextDetection = "textract:GetDocumentTextDetection",

  /**
   * Read - Grants permission to return information about an expense analysis job
   * @see https://docs.aws.amazon.com/textract/latest/dg/API_GetExpenseAnalysis.html
   */
  GetExpenseAnalysis = "textract:GetExpenseAnalysis",

  /**
   * Write - Grants permission to start an asynchronous job to detect instances of real-world document entities within an image or pdf provided as input
   * @see https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentAnalysis.html
   */
  StartDocumentAnalysis = "textract:StartDocumentAnalysis",

  /**
   * Write - Grants permission to start an asynchronous job to detect text in document images or pdfs
   * @see https://docs.aws.amazon.com/textract/latest/dg/API_StartDocumentTextDetection.html
   */
  StartDocumentTextDetection = "textract:StartDocumentTextDetection",

  /**
   * Write - Grants permission to start an asynchronous job to detect instances of invoices or receipts within an image or pdf provided as input
   * @see https://docs.aws.amazon.com/textract/latest/dg/API_StartExpenseAnalysis.html
   */
  StartExpenseAnalysis = "textract:StartExpenseAnalysis",

  /**
   * * - Grant all textract permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontextract.html
   */
  All = "textract:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontextract.html
 */
export const TextractResource = {
}

