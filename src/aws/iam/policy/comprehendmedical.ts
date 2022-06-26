/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehendmedical.html
 */
export enum ComprehendmedicalAction {

  /**
   * Read - Grants permission to describe the properties of a medical entity detection job that you have submitted
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_DescribeEntitiesDetectionV2Job.html
   */
  DescribeEntitiesDetectionV2Job = "comprehendmedical:DescribeEntitiesDetectionV2Job",

  /**
   * Read - Grants permission to describe the properties of an ICD-10-CM linking job that you have submitted
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_DescribeICD10CMInferenceJob.html
   */
  DescribeICD10CMInferenceJob = "comprehendmedical:DescribeICD10CMInferenceJob",

  /**
   * Read - Grants permission to describe the properties of a PHI entity detection job that you have submitted
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_DescribePHIDetectionJob.html
   */
  DescribePHIDetectionJob = "comprehendmedical:DescribePHIDetectionJob",

  /**
   * Read - Grants permission to describe the properties of an RxNorm linking job that you have submitted
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_DescribeRxNormInferenceJob.html
   */
  DescribeRxNormInferenceJob = "comprehendmedical:DescribeRxNormInferenceJob",

  /**
   * Read - Grants permission to describe the properties of a SNOMED-CT linking job that you have submitted
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_DescribeSNOMEDCTInferenceJob.html
   */
  DescribeSNOMEDCTInferenceJob = "comprehendmedical:DescribeSNOMEDCTInferenceJob",

  /**
   * Read - Grants permission to detect the named medical entities, and their relationships and traits within the given text document
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_DetectEntitiesV2.html
   */
  DetectEntitiesV2 = "comprehendmedical:DetectEntitiesV2",

  /**
   * Read - Grants permission to detect the protected health information (PHI) entities within the given text document
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_DetectPHI.html
   */
  DetectPHI = "comprehendmedical:DetectPHI",

  /**
   * Read - Grants permission to detect the medical condition entities within the given text document and link them to ICD-10-CM codes
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_InferICD10CM.html
   */
  InferICD10CM = "comprehendmedical:InferICD10CM",

  /**
   * Read - Grants permission to detect the medication entities within the given text document and link them to RxCUI concept identifiers from the National Library of Medicine RxNorm database
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_InferRxNorm.html
   */
  InferRxNorm = "comprehendmedical:InferRxNorm",

  /**
   * Read - Grants permission to detect the medical condition, anatomy, and test, treatment, and procedure entities within the given text document and link them to SNOMED-CT codes
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_InferSNOMEDCT.html
   */
  InferSNOMEDCT = "comprehendmedical:InferSNOMEDCT",

  /**
   * Read - Grants permission to list the medical entity detection jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_ListEntitiesDetectionV2Jobs.html
   */
  ListEntitiesDetectionV2Jobs = "comprehendmedical:ListEntitiesDetectionV2Jobs",

  /**
   * Read - Grants permission to list the ICD-10-CM linking jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_ListICD10CMInferenceJobs.html
   */
  ListICD10CMInferenceJobs = "comprehendmedical:ListICD10CMInferenceJobs",

  /**
   * Read - Grants permission to list the PHI entity detection jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_ListPHIDetectionJobs.html
   */
  ListPHIDetectionJobs = "comprehendmedical:ListPHIDetectionJobs",

  /**
   * Read - Grants permission to list the RxNorm linking jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_ListRxNormInferenceJobs.html
   */
  ListRxNormInferenceJobs = "comprehendmedical:ListRxNormInferenceJobs",

  /**
   * Read - Grants permission to list the SNOMED-CT linking jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_ListSNOMEDCTInferenceJobs.html
   */
  ListSNOMEDCTInferenceJobs = "comprehendmedical:ListSNOMEDCTInferenceJobs",

  /**
   * Write - Grants permission to start an asynchronous medical entity detection job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_StartEntitiesDetectionV2Job.html
   */
  StartEntitiesDetectionV2Job = "comprehendmedical:StartEntitiesDetectionV2Job",

  /**
   * Write - Grants permission to start an asynchronous ICD-10-CM linking job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_StartICD10CMInferenceJob.html
   */
  StartICD10CMInferenceJob = "comprehendmedical:StartICD10CMInferenceJob",

  /**
   * Write - Grants permission to start an asynchronous PHI entity detection job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_StartPHIDetectionJob.html
   */
  StartPHIDetectionJob = "comprehendmedical:StartPHIDetectionJob",

  /**
   * Write - Grants permission to start an asynchronous RxNorm linking job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_StartRxNormInferenceJob.html
   */
  StartRxNormInferenceJob = "comprehendmedical:StartRxNormInferenceJob",

  /**
   * Write - Grants permission to start an asynchronous SNOMED-CT linking job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_StartSNOMEDCTInferenceJob.html
   */
  StartSNOMEDCTInferenceJob = "comprehendmedical:StartSNOMEDCTInferenceJob",

  /**
   * Write - Grants permission to stop a medical entity detection job
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_StopEntitiesDetectionV2Job.html
   */
  StopEntitiesDetectionV2Job = "comprehendmedical:StopEntitiesDetectionV2Job",

  /**
   * Write - Grants permission to stop an ICD-10-CM linking job
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_StopICD10CMInferenceJob.html
   */
  StopICD10CMInferenceJob = "comprehendmedical:StopICD10CMInferenceJob",

  /**
   * Write - Grants permission to stop a PHI entity detection job
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_StopPHIDetectionJob.html
   */
  StopPHIDetectionJob = "comprehendmedical:StopPHIDetectionJob",

  /**
   * Write - Grants permission to stop an RxNorm linking job
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_StopRxNormInferenceJob.html
   */
  StopRxNormInferenceJob = "comprehendmedical:StopRxNormInferenceJob",

  /**
   * Write - Grants permission to stop a SNOMED-CT linking job
   * @see https://docs.aws.amazon.com/comprehend-medical/latest/dev/API_medical_StopSNOMEDCTInferenceJob.html
   */
  StopSNOMEDCTInferenceJob = "comprehendmedical:StopSNOMEDCTInferenceJob",

  /**
   * * - Grant all comprehendmedical permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehendmedical.html
   */
  All = "comprehendmedical:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehendmedical.html
 */
export const ComprehendmedicalResource = {
}

