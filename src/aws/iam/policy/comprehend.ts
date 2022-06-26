/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
 */
export enum ComprehendAction {

  /**
   * Read - Grants permission to detect the language or languages present in the list of text documents
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectDominantLanguage.html
   */
  BatchDetectDominantLanguage = "comprehend:BatchDetectDominantLanguage",

  /**
   * Read - Grants permission to detect the named entities ("People", "Places", "Locations", etc) within the given list of text documents
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectEntities.html
   */
  BatchDetectEntities = "comprehend:BatchDetectEntities",

  /**
   * Read - Grants permission to detect the phrases in the list of text documents that are most indicative of the content
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectKeyPhrases.html
   */
  BatchDetectKeyPhrases = "comprehend:BatchDetectKeyPhrases",

  /**
   * Read - Grants permission to detect the sentiment of a text in the list of documents (Positive, Negative, Neutral, or Mixed)
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectSentiment.html
   */
  BatchDetectSentiment = "comprehend:BatchDetectSentiment",

  /**
   * Read - Grants permission to detect syntactic information (like Part of Speech, Tokens) in a list of text documents
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectSyntax.html
   */
  BatchDetectSyntax = "comprehend:BatchDetectSyntax",

  /**
   * Read - Grants permission to create a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ClassifyDocument.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifierEndpoint `ComprehendResource.documentClassifierEndpoint`} 
   */
  ClassifyDocument = "comprehend:ClassifyDocument",

  /**
   * Read - Grants permission to classify the personally identifiable information within given documents in real-time
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ContainsPiiEntities.html
   */
  ContainsPiiEntities = "comprehend:ContainsPiiEntities",

  /**
   * Write - Grants permission to create a new document classifier that you can use to categorize documents
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateDocumentClassifier.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VolumeKmsKey`: Filters access by the volume KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:ModelKmsKey`: Filters access by the model KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:OutputKmsKey`: Filters access by the output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDocumentClassifier = "comprehend:CreateDocumentClassifier",

  /**
   * Write - Grants permission to create a model-specific endpoint for synchronous inference for a previously trained custom model
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   * - {@link ComprehendResource.documentClassifierEndpoint `ComprehendResource.documentClassifierEndpoint`} 
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   * - {@link ComprehendResource.entityRecognizerEndpoint `ComprehendResource.entityRecognizerEndpoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEndpoint = "comprehend:CreateEndpoint",

  /**
   * Write - Grants permission to create an entity recognizer using submitted files
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateEntityRecognizer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VolumeKmsKey`: Filters access by the volume KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:ModelKmsKey`: Filters access by the model KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEntityRecognizer = "comprehend:CreateEntityRecognizer",

  /**
   * Write - Grants permission to delete a previously created document classifier
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteDocumentClassifier.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   */
  DeleteDocumentClassifier = "comprehend:DeleteDocumentClassifier",

  /**
   * Write - Grants permission to delete a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifierEndpoint `ComprehendResource.documentClassifierEndpoint`} 
   * - {@link ComprehendResource.entityRecognizerEndpoint `ComprehendResource.entityRecognizerEndpoint`} 
   */
  DeleteEndpoint = "comprehend:DeleteEndpoint",

  /**
   * Write - Grants permission to delete a submitted entity recognizer
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteEntityRecognizer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   */
  DeleteEntityRecognizer = "comprehend:DeleteEntityRecognizer",

  /**
   * Write - Grants permission to remove policy on resource
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   */
  DeleteResourcePolicy = "comprehend:DeleteResourcePolicy",

  /**
   * Read - Grants permission to get the properties associated with a document classification job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDocumentClassificationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassificationJob `ComprehendResource.documentClassificationJob`} 
   */
  DescribeDocumentClassificationJob = "comprehend:DescribeDocumentClassificationJob",

  /**
   * Read - Grants permission to get the properties associated with a document classifier
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDocumentClassifier.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   */
  DescribeDocumentClassifier = "comprehend:DescribeDocumentClassifier",

  /**
   * Read - Grants permission to get the properties associated with a dominant language detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDominantLanguageDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.dominantLanguageDetectionJob `ComprehendResource.dominantLanguageDetectionJob`} 
   */
  DescribeDominantLanguageDetectionJob = "comprehend:DescribeDominantLanguageDetectionJob",

  /**
   * Read - Grants permission to get the properties associated with a specific endpoint. Use this operation to get the status of an endpoint
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifierEndpoint `ComprehendResource.documentClassifierEndpoint`} 
   * - {@link ComprehendResource.entityRecognizerEndpoint `ComprehendResource.entityRecognizerEndpoint`} 
   */
  DescribeEndpoint = "comprehend:DescribeEndpoint",

  /**
   * Read - Grants permission to get the properties associated with an entities detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEntitiesDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.entitiesDetectionJob `ComprehendResource.entitiesDetectionJob`} 
   */
  DescribeEntitiesDetectionJob = "comprehend:DescribeEntitiesDetectionJob",

  /**
   * Read - Grants permission to provide details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEntityRecognizer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   */
  DescribeEntityRecognizer = "comprehend:DescribeEntityRecognizer",

  /**
   * Read - Grants permission to get the properties associated with an Events detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEventsDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.eventsDetectionJob `ComprehendResource.eventsDetectionJob`} 
   */
  DescribeEventsDetectionJob = "comprehend:DescribeEventsDetectionJob",

  /**
   * Read - Grants permission to get the properties associated with a key phrases detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeKeyPhrasesDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.keyPhrasesDetectionJob `ComprehendResource.keyPhrasesDetectionJob`} 
   */
  DescribeKeyPhrasesDetectionJob = "comprehend:DescribeKeyPhrasesDetectionJob",

  /**
   * Read - Grants permission to get the properties associated with a PII entities detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribePiiEntitiesDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.piiEntitiesDetectionJob `ComprehendResource.piiEntitiesDetectionJob`} 
   */
  DescribePiiEntitiesDetectionJob = "comprehend:DescribePiiEntitiesDetectionJob",

  /**
   * Read - Grants permission to read attached policy on resource
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   */
  DescribeResourcePolicy = "comprehend:DescribeResourcePolicy",

  /**
   * Read - Grants permission to get the properties associated with a sentiment detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeSentimentDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.sentimentDetectionJob `ComprehendResource.sentimentDetectionJob`} 
   */
  DescribeSentimentDetectionJob = "comprehend:DescribeSentimentDetectionJob",

  /**
   * Read - Grants permission to get the properties associated with a targeted sentiment detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeTargetedSentimentDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.targetedSentimentDetectionJob `ComprehendResource.targetedSentimentDetectionJob`} 
   */
  DescribeTargetedSentimentDetectionJob = "comprehend:DescribeTargetedSentimentDetectionJob",

  /**
   * Read - Grants permission to get the properties associated with a topic detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeTopicsDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.topicsDetectionJob `ComprehendResource.topicsDetectionJob`} 
   */
  DescribeTopicsDetectionJob = "comprehend:DescribeTopicsDetectionJob",

  /**
   * Read - Grants permission to detect the language or languages present in the text
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html
   */
  DetectDominantLanguage = "comprehend:DetectDominantLanguage",

  /**
   * Read - Grants permission to detect the named entities ("People", "Places", "Locations", etc) within the given text document
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectEntities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.entityRecognizerEndpoint `ComprehendResource.entityRecognizerEndpoint`} 
   */
  DetectEntities = "comprehend:DetectEntities",

  /**
   * Read - Grants permission to detect the phrases in the text that are most indicative of the content
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectKeyPhrases.html
   */
  DetectKeyPhrases = "comprehend:DetectKeyPhrases",

  /**
   * Read - Grants permission to detect the personally identifiable information entities ("Name", "SSN", "PIN", etc) within the given text document
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectPiiEntities.html
   */
  DetectPiiEntities = "comprehend:DetectPiiEntities",

  /**
   * Read - Grants permission to detect the sentiment of a text in a document (Positive, Negative, Neutral, or Mixed)
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSentiment.html
   */
  DetectSentiment = "comprehend:DetectSentiment",

  /**
   * Read - Grants permission to detect syntactic information (like Part of Speech, Tokens) in a text document
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSyntax.html
   */
  DetectSyntax = "comprehend:DetectSyntax",

  /**
   * Write - Grants permission to import a trained Comprehend model
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ImportModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:ModelKmsKey`: Filters access by the model KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  ImportModel = "comprehend:ImportModel",

  /**
   * Read - Grants permission to get a list of the document classification jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDocumentClassificationJobs.html
   */
  ListDocumentClassificationJobs = "comprehend:ListDocumentClassificationJobs",

  /**
   * Read - Grants permission to get a list of summaries of the document classifiers that you have created
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDocumentClassifierSummaries.html
   */
  ListDocumentClassifierSummaries = "comprehend:ListDocumentClassifierSummaries",

  /**
   * Read - Grants permission to get a list of the document classifiers that you have created
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDocumentClassifiers.html
   */
  ListDocumentClassifiers = "comprehend:ListDocumentClassifiers",

  /**
   * Read - Grants permission to get a list of the dominant language detection jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDominantLanguageDetectionJobs.html
   */
  ListDominantLanguageDetectionJobs = "comprehend:ListDominantLanguageDetectionJobs",

  /**
   * Read - Grants permission to get a list of all existing endpoints that you've created
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEndpoints.html
   */
  ListEndpoints = "comprehend:ListEndpoints",

  /**
   * Read - Grants permission to get a list of the entity detection jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEntitiesDetectionJobs.html
   */
  ListEntitiesDetectionJobs = "comprehend:ListEntitiesDetectionJobs",

  /**
   * Read - Grants permission to get a list of summaries for the entity recognizers that you have created
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEntityRecognizerSummaries.html
   */
  ListEntityRecognizerSummaries = "comprehend:ListEntityRecognizerSummaries",

  /**
   * Read - Grants permission to get a list of the properties of all entity recognizers that you created, including recognizers currently in training
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEntityRecognizers.html
   */
  ListEntityRecognizers = "comprehend:ListEntityRecognizers",

  /**
   * Read - Grants permission to get a list of Events detection jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEventsDetectionJobs.html
   */
  ListEventsDetectionJobs = "comprehend:ListEventsDetectionJobs",

  /**
   * Read - Grants permission to get a list of key phrase detection jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListKeyPhrasesDetectionJobs.html
   */
  ListKeyPhrasesDetectionJobs = "comprehend:ListKeyPhrasesDetectionJobs",

  /**
   * Read - Grants permission to get a list of PII entities detection jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListPiiEntitiesDetectionJobs.html
   */
  ListPiiEntitiesDetectionJobs = "comprehend:ListPiiEntitiesDetectionJobs",

  /**
   * Read - Grants permission to get a list of sentiment detection jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListSentimentDetectionJobs.html
   */
  ListSentimentDetectionJobs = "comprehend:ListSentimentDetectionJobs",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassificationJob `ComprehendResource.documentClassificationJob`} 
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   * - {@link ComprehendResource.documentClassifierEndpoint `ComprehendResource.documentClassifierEndpoint`} 
   * - {@link ComprehendResource.dominantLanguageDetectionJob `ComprehendResource.dominantLanguageDetectionJob`} 
   * - {@link ComprehendResource.entitiesDetectionJob `ComprehendResource.entitiesDetectionJob`} 
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   * - {@link ComprehendResource.entityRecognizerEndpoint `ComprehendResource.entityRecognizerEndpoint`} 
   * - {@link ComprehendResource.eventsDetectionJob `ComprehendResource.eventsDetectionJob`} 
   * - {@link ComprehendResource.keyPhrasesDetectionJob `ComprehendResource.keyPhrasesDetectionJob`} 
   * - {@link ComprehendResource.piiEntitiesDetectionJob `ComprehendResource.piiEntitiesDetectionJob`} 
   * - {@link ComprehendResource.sentimentDetectionJob `ComprehendResource.sentimentDetectionJob`} 
   * - {@link ComprehendResource.targetedSentimentDetectionJob `ComprehendResource.targetedSentimentDetectionJob`} 
   * - {@link ComprehendResource.topicsDetectionJob `ComprehendResource.topicsDetectionJob`} 
   */
  ListTagsForResource = "comprehend:ListTagsForResource",

  /**
   * Read - Grants permission to get a list of targeted sentiment detection jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListTargetedSentimentDetectionJobs.html
   */
  ListTargetedSentimentDetectionJobs = "comprehend:ListTargetedSentimentDetectionJobs",

  /**
   * Read - Grants permission to get a list of the topic detection jobs that you have submitted
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_ListTopicsDetectionJobs.html
   */
  ListTopicsDetectionJobs = "comprehend:ListTopicsDetectionJobs",

  /**
   * Write - Grants permission to attach policy to resource
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_PutResourcePolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   */
  PutResourcePolicy = "comprehend:PutResourcePolicy",

  /**
   * Write - Grants permission to start an asynchronous document classification job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StartDocumentClassificationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassificationJob `ComprehendResource.documentClassificationJob`} 
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VolumeKmsKey`: Filters access by the volume KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:OutputKmsKey`: Filters access by the output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartDocumentClassificationJob = "comprehend:StartDocumentClassificationJob",

  /**
   * Write - Grants permission to start an asynchronous dominant language detection job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StartDominantLanguageDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.dominantLanguageDetectionJob `ComprehendResource.dominantLanguageDetectionJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VolumeKmsKey`: Filters access by the volume KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:OutputKmsKey`: Filters access by the output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartDominantLanguageDetectionJob = "comprehend:StartDominantLanguageDetectionJob",

  /**
   * Write - Grants permission to start an asynchronous entity detection job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StartEntitiesDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.entitiesDetectionJob `ComprehendResource.entitiesDetectionJob`} 
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VolumeKmsKey`: Filters access by the volume KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:OutputKmsKey`: Filters access by the output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartEntitiesDetectionJob = "comprehend:StartEntitiesDetectionJob",

  /**
   * Write - Grants permission to start an asynchronous Events detection job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StartEventsDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.eventsDetectionJob `ComprehendResource.eventsDetectionJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:OutputKmsKey`: Filters access by the output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  StartEventsDetectionJob = "comprehend:StartEventsDetectionJob",

  /**
   * Write - Grants permission to start an asynchronous key phrase detection job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StartKeyPhrasesDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.keyPhrasesDetectionJob `ComprehendResource.keyPhrasesDetectionJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VolumeKmsKey`: Filters access by the volume KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:OutputKmsKey`: Filters access by the output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartKeyPhrasesDetectionJob = "comprehend:StartKeyPhrasesDetectionJob",

  /**
   * Write - Grants permission to start an asynchronous PII entities detection job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StartPiiEntitiesDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.piiEntitiesDetectionJob `ComprehendResource.piiEntitiesDetectionJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:OutputKmsKey`: Filters access by the output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  StartPiiEntitiesDetectionJob = "comprehend:StartPiiEntitiesDetectionJob",

  /**
   * Write - Grants permission to start an asynchronous sentiment detection job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StartSentimentDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.sentimentDetectionJob `ComprehendResource.sentimentDetectionJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VolumeKmsKey`: Filters access by the volume KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:OutputKmsKey`: Filters access by the output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartSentimentDetectionJob = "comprehend:StartSentimentDetectionJob",

  /**
   * Write - Grants permission to start an asynchronous targeted sentiment detection job for a collection of documents
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StartTargetedSentimentDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.targetedSentimentDetectionJob `ComprehendResource.targetedSentimentDetectionJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VolumeKmsKey`: Filters access by the volume KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:OutputKmsKey`: Filters access by the output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartTargetedSentimentDetectionJob = "comprehend:StartTargetedSentimentDetectionJob",

  /**
   * Write - Grants permission to start an asynchronous job to detect the most common topics in the collection of documents and the phrases associated with each topic
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StartTopicsDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.topicsDetectionJob `ComprehendResource.topicsDetectionJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VolumeKmsKey`: Filters access by the volume KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:OutputKmsKey`: Filters access by the output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StartTopicsDetectionJob = "comprehend:StartTopicsDetectionJob",

  /**
   * Write - Grants permission to stop a dominant language detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StopDominantLanguageDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.dominantLanguageDetectionJob `ComprehendResource.dominantLanguageDetectionJob`} 
   */
  StopDominantLanguageDetectionJob = "comprehend:StopDominantLanguageDetectionJob",

  /**
   * Write - Grants permission to stop an entity detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StopEntitiesDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.entitiesDetectionJob `ComprehendResource.entitiesDetectionJob`} 
   */
  StopEntitiesDetectionJob = "comprehend:StopEntitiesDetectionJob",

  /**
   * Write - Grants permission to stop an Events detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StopEventsDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.eventsDetectionJob `ComprehendResource.eventsDetectionJob`} 
   */
  StopEventsDetectionJob = "comprehend:StopEventsDetectionJob",

  /**
   * Write - Grants permission to stop a key phrase detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StopKeyPhrasesDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.keyPhrasesDetectionJob `ComprehendResource.keyPhrasesDetectionJob`} 
   */
  StopKeyPhrasesDetectionJob = "comprehend:StopKeyPhrasesDetectionJob",

  /**
   * Write - Grants permission to stop a PII entities detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StopPiiEntitiesDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.piiEntitiesDetectionJob `ComprehendResource.piiEntitiesDetectionJob`} 
   */
  StopPiiEntitiesDetectionJob = "comprehend:StopPiiEntitiesDetectionJob",

  /**
   * Write - Grants permission to stop a sentiment detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StopSentimentDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.sentimentDetectionJob `ComprehendResource.sentimentDetectionJob`} 
   */
  StopSentimentDetectionJob = "comprehend:StopSentimentDetectionJob",

  /**
   * Write - Grants permission to stop a targeted sentiment detection job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StopTargetedSentimentDetectionJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.targetedSentimentDetectionJob `ComprehendResource.targetedSentimentDetectionJob`} 
   */
  StopTargetedSentimentDetectionJob = "comprehend:StopTargetedSentimentDetectionJob",

  /**
   * Write - Grants permission to stop a previously created document classifier training job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StopTrainingDocumentClassifier.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   */
  StopTrainingDocumentClassifier = "comprehend:StopTrainingDocumentClassifier",

  /**
   * Write - Grants permission to stop a previously created entity recognizer training job
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_StopTrainingEntityRecognizer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   */
  StopTrainingEntityRecognizer = "comprehend:StopTrainingEntityRecognizer",

  /**
   * Tagging - Grants permission to tag a resource with given key value pairs
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassificationJob `ComprehendResource.documentClassificationJob`} 
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   * - {@link ComprehendResource.documentClassifierEndpoint `ComprehendResource.documentClassifierEndpoint`} 
   * - {@link ComprehendResource.dominantLanguageDetectionJob `ComprehendResource.dominantLanguageDetectionJob`} 
   * - {@link ComprehendResource.entitiesDetectionJob `ComprehendResource.entitiesDetectionJob`} 
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   * - {@link ComprehendResource.entityRecognizerEndpoint `ComprehendResource.entityRecognizerEndpoint`} 
   * - {@link ComprehendResource.eventsDetectionJob `ComprehendResource.eventsDetectionJob`} 
   * - {@link ComprehendResource.keyPhrasesDetectionJob `ComprehendResource.keyPhrasesDetectionJob`} 
   * - {@link ComprehendResource.piiEntitiesDetectionJob `ComprehendResource.piiEntitiesDetectionJob`} 
   * - {@link ComprehendResource.sentimentDetectionJob `ComprehendResource.sentimentDetectionJob`} 
   * - {@link ComprehendResource.topicsDetectionJob `ComprehendResource.topicsDetectionJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "comprehend:TagResource",

  /**
   * Tagging - Grants permission to untag a resource with given key
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassificationJob `ComprehendResource.documentClassificationJob`} 
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   * - {@link ComprehendResource.documentClassifierEndpoint `ComprehendResource.documentClassifierEndpoint`} 
   * - {@link ComprehendResource.dominantLanguageDetectionJob `ComprehendResource.dominantLanguageDetectionJob`} 
   * - {@link ComprehendResource.entitiesDetectionJob `ComprehendResource.entitiesDetectionJob`} 
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   * - {@link ComprehendResource.entityRecognizerEndpoint `ComprehendResource.entityRecognizerEndpoint`} 
   * - {@link ComprehendResource.eventsDetectionJob `ComprehendResource.eventsDetectionJob`} 
   * - {@link ComprehendResource.keyPhrasesDetectionJob `ComprehendResource.keyPhrasesDetectionJob`} 
   * - {@link ComprehendResource.piiEntitiesDetectionJob `ComprehendResource.piiEntitiesDetectionJob`} 
   * - {@link ComprehendResource.sentimentDetectionJob `ComprehendResource.sentimentDetectionJob`} 
   * - {@link ComprehendResource.topicsDetectionJob `ComprehendResource.topicsDetectionJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "comprehend:UntagResource",

  /**
   * Write - Grants permission to update information about the specified endpoint
   * @see https://docs.aws.amazon.com/comprehend/latest/dg/API_UpdateEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifierEndpoint `ComprehendResource.documentClassifierEndpoint`} 
   * - {@link ComprehendResource.entityRecognizerEndpoint `ComprehendResource.entityRecognizerEndpoint`} 
   */
  UpdateEndpoint = "comprehend:UpdateEndpoint",

  /**
   * * - Grant all comprehend permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ComprehendResource.documentClassifierEndpoint `ComprehendResource.documentClassifierEndpoint`} 
   * - {@link ComprehendResource.documentClassifier `ComprehendResource.documentClassifier`} 
   * - {@link ComprehendResource.entityRecognizer `ComprehendResource.entityRecognizer`} 
   * - {@link ComprehendResource.entityRecognizerEndpoint `ComprehendResource.entityRecognizerEndpoint`} 
   * - {@link ComprehendResource.documentClassificationJob `ComprehendResource.documentClassificationJob`} 
   * - {@link ComprehendResource.dominantLanguageDetectionJob `ComprehendResource.dominantLanguageDetectionJob`} 
   * - {@link ComprehendResource.entitiesDetectionJob `ComprehendResource.entitiesDetectionJob`} 
   * - {@link ComprehendResource.eventsDetectionJob `ComprehendResource.eventsDetectionJob`} 
   * - {@link ComprehendResource.keyPhrasesDetectionJob `ComprehendResource.keyPhrasesDetectionJob`} 
   * - {@link ComprehendResource.piiEntitiesDetectionJob `ComprehendResource.piiEntitiesDetectionJob`} 
   * - {@link ComprehendResource.sentimentDetectionJob `ComprehendResource.sentimentDetectionJob`} 
   * - {@link ComprehendResource.targetedSentimentDetectionJob `ComprehendResource.targetedSentimentDetectionJob`} 
   * - {@link ComprehendResource.topicsDetectionJob `ComprehendResource.topicsDetectionJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by requiring tag values present in a resource creation request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by requiring the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VolumeKmsKey`: Filters access by the volume KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:ModelKmsKey`: Filters access by the model KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:OutputKmsKey`: Filters access by the output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `comprehend:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `comprehend:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html#amazoncomprehend-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "comprehend:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
 */
export const ComprehendResource = {

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  targetedSentimentDetectionJob: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:targeted-sentiment-detection-job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  documentClassifier: (options: Partial<{partition: string, region: string, account: string, documentClassifierName: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:document-classifier/${options.documentClassifierName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  documentClassifierEndpoint: (options: Partial<{partition: string, region: string, account: string, documentClassifierEndpointName: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:document-classifier-endpoint/${options.documentClassifierEndpointName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  entityRecognizer: (options: Partial<{partition: string, region: string, account: string, entityRecognizerName: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:entity-recognizer/${options.entityRecognizerName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  entityRecognizerEndpoint: (options: Partial<{partition: string, region: string, account: string, entityRecognizerEndpointName: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:entity-recognizer-endpoint/${options.entityRecognizerEndpointName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dominantLanguageDetectionJob: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:dominant-language-detection-job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  entitiesDetectionJob: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:entities-detection-job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  piiEntitiesDetectionJob: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:pii-entities-detection-job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  eventsDetectionJob: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:events-detection-job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  keyPhrasesDetectionJob: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:key-phrases-detection-job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  sentimentDetectionJob: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:sentiment-detection-job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  topicsDetectionJob: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:topics-detection-job/${options.jobId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehend.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by requiring tag value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  documentClassificationJob: (options: Partial<{partition: string, region: string, account: string, jobId: string}> = {}) => `arn:${options.partition || '*'}:comprehend:${options.region || '*'}:${options.account || '*'}:document-classification-job/${options.jobId || '*'}`,
}

