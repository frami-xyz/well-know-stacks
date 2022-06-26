/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrekognition.html
 */
export enum RekognitionAction {

  /**
   * Read - Grants permission to compare faces in the source input image with each face detected in the target input image
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_CompareFaces.html
   */
  CompareFaces = "rekognition:CompareFaces",

  /**
   * Write - Grants permission to create a collection in an AWS Region
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateCollection.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCollection = "rekognition:CreateCollection",

  /**
   * Write - Grants permission to create a new Amazon Rekognition Custom Labels dataset
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.project `RekognitionResource.project`} 
   */
  CreateDataset = "rekognition:CreateDataset",

  /**
   * Write - Grants permission to create an Amazon Rekognition Custom Labels project
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.project `RekognitionResource.project`} 
   */
  CreateProject = "rekognition:CreateProject",

  /**
   * Write - Grants permission to begin training a new version of a model
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProjectVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.project `RekognitionResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProjectVersion = "rekognition:CreateProjectVersion",

  /**
   * Write - Grants permission to create an Amazon Rekognition stream processor
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateStreamProcessor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateStreamProcessor = "rekognition:CreateStreamProcessor",

  /**
   * Write - Grants permission to delete the specified collection
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteCollection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   */
  DeleteCollection = "rekognition:DeleteCollection",

  /**
   * Write - Grants permission to delete an existing Amazon Rekognition Custom Labels dataset
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.dataset `RekognitionResource.dataset`} 
   */
  DeleteDataset = "rekognition:DeleteDataset",

  /**
   * Write - Grants permission to delete faces from a collection
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteFaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   */
  DeleteFaces = "rekognition:DeleteFaces",

  /**
   * Write - Grants permission to delete a project
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.project `RekognitionResource.project`} 
   */
  DeleteProject = "rekognition:DeleteProject",

  /**
   * Write - Grants permission to delete a model
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProjectVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.projectversion `RekognitionResource.projectversion`} 
   */
  DeleteProjectVersion = "rekognition:DeleteProjectVersion",

  /**
   * Write - Grants permission to delete the specified stream processor
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteStreamProcessor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.streamprocessor `RekognitionResource.streamprocessor`} 
   */
  DeleteStreamProcessor = "rekognition:DeleteStreamProcessor",

  /**
   * Read - Grants permission to read details about a collection
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeCollection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   */
  DescribeCollection = "rekognition:DescribeCollection",

  /**
   * Read - Grants permission to describe an Amazon Rekognition Custom Labels dataset
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeDataset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.dataset `RekognitionResource.dataset`} 
   */
  DescribeDataset = "rekognition:DescribeDataset",

  /**
   * Read - Grants permission to list the versions of a model in an Amazon Rekognition Custom Labels project
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjectVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.project `RekognitionResource.project`} 
   */
  DescribeProjectVersions = "rekognition:DescribeProjectVersions",

  /**
   * Read - Grants permission to list Amazon Rekognition Custom Labels projects
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjects.html
   */
  DescribeProjects = "rekognition:DescribeProjects",

  /**
   * Read - Grants permission to get information about the specified stream processor
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeStreamProcessorh.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.streamprocessor `RekognitionResource.streamprocessor`} 
   */
  DescribeStreamProcessor = "rekognition:DescribeStreamProcessor",

  /**
   * Read - Grants permission to detect custom labels in a supplied image
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectCustomLabels.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.projectversion `RekognitionResource.projectversion`} 
   */
  DetectCustomLabels = "rekognition:DetectCustomLabels",

  /**
   * Read - Grants permission to detect human faces within an image provided as input
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectFaces.html
   */
  DetectFaces = "rekognition:DetectFaces",

  /**
   * Read - Grants permission to detect instances of real-world labels within an image provided as input
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectLabels.html
   */
  DetectLabels = "rekognition:DetectLabels",

  /**
   * Read - Grants permission to detect moderation labels within the input image
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectModerationLabels.html
   */
  DetectModerationLabels = "rekognition:DetectModerationLabels",

  /**
   * Read - Grants permission to detect Personal Protective Equipment in the input image
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectProtectiveEquipment.html
   */
  DetectProtectiveEquipment = "rekognition:DetectProtectiveEquipment",

  /**
   * Read - Grants permission to detect text in the input image and convert it into machine-readable text
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html
   */
  DetectText = "rekognition:DetectText",

  /**
   * Write - Grants permission to distribute the entries in a training dataset across the training dataset and the test dataset for a project
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_DistributeDatasetEntries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.dataset `RekognitionResource.dataset`} 
   */
  DistributeDatasetEntries = "rekognition:DistributeDatasetEntries",

  /**
   * Read - Grants permission to read the name, and additional information, of a celebrity
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityInfo.html
   */
  GetCelebrityInfo = "rekognition:GetCelebrityInfo",

  /**
   * Read - Grants permission to read the celebrity recognition results found in a stored video by an asynchronous celebrity recognition job
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityRecognition.html
   */
  GetCelebrityRecognition = "rekognition:GetCelebrityRecognition",

  /**
   * Read - Grants permission to read the content moderation analysis results found in a stored video by an asynchronous content moderation job
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_GetContentModeration.html
   */
  GetContentModeration = "rekognition:GetContentModeration",

  /**
   * Read - Grants permission to read the faces detection results found in a stored video by an asynchronous face detection job
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceDetection.html
   */
  GetFaceDetection = "rekognition:GetFaceDetection",

  /**
   * Read - Grants permission to read the matching collection faces found in a stored video by an asynchronous face search job
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceSearch.html
   */
  GetFaceSearch = "rekognition:GetFaceSearch",

  /**
   * Read - Grants permission to read the label detected resuls found in a stored video by an asynchronous label detection job
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_GetLabelDetection.html
   */
  GetLabelDetection = "rekognition:GetLabelDetection",

  /**
   * Read - Grants permission to read the list of persons detected in a stored video by an asynchronous person tracking job
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_GetPersonTracking.html
   */
  GetPersonTracking = "rekognition:GetPersonTracking",

  /**
   * Read - Grants permission to get the vdeo segments found in a stored video by an asynchronous segment detection job
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_GetSegmentDetection.html
   */
  GetSegmentDetection = "rekognition:GetSegmentDetection",

  /**
   * Read - Grants permission to get the text found in a stored video by an asynchronous text detection job
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_GetTextDetection.html
   */
  GetTextDetection = "rekognition:GetTextDetection",

  /**
   * Write - Grants permission to update an existing collection with faces detected in the input image
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_IndexFaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   */
  IndexFaces = "rekognition:IndexFaces",

  /**
   * Read - Grants permission to read the collection Id's in your account
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_ListCollections.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   */
  ListCollections = "rekognition:ListCollections",

  /**
   * Read - Grants permission to list the dataset entries in an existing Amazon Rekognition Custom Labels dataset
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_ListDatasetEntries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.dataset `RekognitionResource.dataset`} 
   */
  ListDatasetEntries = "rekognition:ListDatasetEntries",

  /**
   * Read - Grants permission to list the labels in a dataset
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_ListDatasetLabels.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.dataset `RekognitionResource.dataset`} 
   */
  ListDatasetLabels = "rekognition:ListDatasetLabels",

  /**
   * Read - Grants permission to read metadata for faces in the specificed collection
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_ListFaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   */
  ListFaces = "rekognition:ListFaces",

  /**
   * List - Grants permission to get a list of your stream processors
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_ListStreamProcessors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.streamprocessor `RekognitionResource.streamprocessor`} 
   */
  ListStreamProcessors = "rekognition:ListStreamProcessors",

  /**
   * Read - Grants permission to return a list of tags associated with a resource
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.projectversion `RekognitionResource.projectversion`} 
   */
  ListTagsForResource = "rekognition:ListTagsForResource",

  /**
   * Read - Grants permission to detect celebrities in the input image
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_RecognizeCelebrities.html
   */
  RecognizeCelebrities = "rekognition:RecognizeCelebrities",

  /**
   * Read - Grants permission to search the specificed collection for the supplied face ID
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFaces.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   */
  SearchFaces = "rekognition:SearchFaces",

  /**
   * Read - Grants permission to search the specificed collection for the largest face in the input image
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFacesByImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   */
  SearchFacesByImage = "rekognition:SearchFacesByImage",

  /**
   * Write - Grants permission to start the asynchronous recognition of celebrities in a stored video
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StartCelebrityRecognition.html
   */
  StartCelebrityRecognition = "rekognition:StartCelebrityRecognition",

  /**
   * Write - Grants permission to start asynchronous detection of explicit or suggestive adult content in a stored video
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StartContentModeration.html
   */
  StartContentModeration = "rekognition:StartContentModeration",

  /**
   * Write - Grants permission to start asynchronous detection of faces in a stored video
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceDetection.html
   */
  StartFaceDetection = "rekognition:StartFaceDetection",

  /**
   * Write - Grants permission to start an asynchronous search for faces in a collection that match the faces of persons detected in a stored video
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceSearch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   */
  StartFaceSearch = "rekognition:StartFaceSearch",

  /**
   * Write - Grants permission to start asynchronous detection of labels in a stored video
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StartLabelDetection.html
   */
  StartLabelDetection = "rekognition:StartLabelDetection",

  /**
   * Write - Grants permission to start the asynchronous tracking of persons in a stored video
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StartPersonTracking.html
   */
  StartPersonTracking = "rekognition:StartPersonTracking",

  /**
   * Write - Grants permission to start running a model version
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StartProjectVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.projectversion `RekognitionResource.projectversion`} 
   */
  StartProjectVersion = "rekognition:StartProjectVersion",

  /**
   * Write - Grants permission to start the asynchronous detection of segments in a stored video
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StartSegmentDetection.html
   */
  StartSegmentDetection = "rekognition:StartSegmentDetection",

  /**
   * Write - Grants permission to start running a stream processor
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StartStreamProcessor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.streamprocessor `RekognitionResource.streamprocessor`} 
   */
  StartStreamProcessor = "rekognition:StartStreamProcessor",

  /**
   * Write - Grants permission to start the asynchronous detection of text in a stored video
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StartTextDetection.html
   */
  StartTextDetection = "rekognition:StartTextDetection",

  /**
   * Write - Grants permission to stop a running model version
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StopProjectVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.projectversion `RekognitionResource.projectversion`} 
   */
  StopProjectVersion = "rekognition:StopProjectVersion",

  /**
   * Write - Grants permission to stop  a running stream processor
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_StopStreamProcessor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.streamprocessor `RekognitionResource.streamprocessor`} 
   */
  StopStreamProcessor = "rekognition:StopStreamProcessor",

  /**
   * Tagging - Grants permission to add one or more tags to a resource
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   * - {@link RekognitionResource.projectversion `RekognitionResource.projectversion`} 
   * - {@link RekognitionResource.streamprocessor `RekognitionResource.streamprocessor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "rekognition:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from a resource
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   * - {@link RekognitionResource.projectversion `RekognitionResource.projectversion`} 
   * - {@link RekognitionResource.streamprocessor `RekognitionResource.streamprocessor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "rekognition:UntagResource",

  /**
   * Write - Grants permission to add or update one or more JSON Lines (entries) in a dataset
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_UpdateDatasetEntries.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.dataset `RekognitionResource.dataset`} 
   */
  UpdateDatasetEntries = "rekognition:UpdateDatasetEntries",

  /**
   * * - Grant all rekognition permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrekognition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link RekognitionResource.project `RekognitionResource.project`} 
   * - {@link RekognitionResource.collection `RekognitionResource.collection`} 
   * - {@link RekognitionResource.dataset `RekognitionResource.dataset`} 
   * - {@link RekognitionResource.projectversion `RekognitionResource.projectversion`} 
   * - {@link RekognitionResource.streamprocessor `RekognitionResource.streamprocessor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "rekognition:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonrekognition.html
 */
export const RekognitionResource = {

  /**
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/howitworks-collection.html
   */
  collection: (options: Partial<{partition: string, region: string, account: string, collectionId: string}> = {}) => `arn:${options.partition || '*'}:rekognition:${options.region || '*'}:${options.account || '*'}:collection/${options.collectionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/using-rekognition-video-stream-processor.html
   */
  streamprocessor: (options: Partial<{partition: string, region: string, account: string, streamprocessorId: string}> = {}) => `arn:${options.partition || '*'}:rekognition:${options.region || '*'}:${options.account || '*'}:streamprocessor/${options.streamprocessorId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/cp-create-project.html
   */
  project: (options: Partial<{partition: string, region: string, account: string, projectName: string, creationTimestamp: string}> = {}) => `arn:${options.partition || '*'}:rekognition:${options.region || '*'}:${options.account || '*'}:project/${options.projectName || '*'}/${options.creationTimestamp || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProjectVersion.html
   */
  projectversion: (options: Partial<{partition: string, region: string, account: string, projectName: string, versionName: string, creationTimestamp: string}> = {}) => `arn:${options.partition || '*'}:rekognition:${options.region || '*'}:${options.account || '*'}:project/${options.projectName || '*'}/version/${options.versionName || '*'}/${options.creationTimestamp || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/rekognition/latest/dg/cd-create-dataset.html
   */
  dataset: (options: Partial<{partition: string, region: string, account: string, projectName: string, datasetType: string, creationTimestamp: string}> = {}) => `arn:${options.partition || '*'}:rekognition:${options.region || '*'}:${options.account || '*'}:project/${options.projectName || '*'}/dataset/${options.datasetType || '*'}/${options.creationTimestamp || '*'}`,
}

