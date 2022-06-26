/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemaker.html
 */
export enum SagemakerAction {

  /**
   * Write - Grants permission to associate a lineage entity (artifact, context, action, experiment, experiment-trial-component) to each other
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_AddAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.action `SagemakerResource.action`} 
   * - {@link SagemakerResource.artifact `SagemakerResource.artifact`} 
   * - {@link SagemakerResource.context `SagemakerResource.context`} 
   * - {@link SagemakerResource.experiment `SagemakerResource.experiment`} 
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   */
  AddAssociation = "sagemaker:AddAssociation",

  /**
   * Tagging - Grants permission to add or overwrite one or more tags for the specified Amazon SageMaker resource
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_AddTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.action `SagemakerResource.action`} 
   * - {@link SagemakerResource.algorithm `SagemakerResource.algorithm`} 
   * - {@link SagemakerResource.app `SagemakerResource.app`} 
   * - {@link SagemakerResource.appImageConfig `SagemakerResource.appImageConfig`} 
   * - {@link SagemakerResource.artifact `SagemakerResource.artifact`} 
   * - {@link SagemakerResource.automlJob `SagemakerResource.automlJob`} 
   * - {@link SagemakerResource.codeRepository `SagemakerResource.codeRepository`} 
   * - {@link SagemakerResource.context `SagemakerResource.context`} 
   * - {@link SagemakerResource.dataQualityJobDefinition `SagemakerResource.dataQualityJobDefinition`} 
   * - {@link SagemakerResource.device `SagemakerResource.device`} 
   * - {@link SagemakerResource.deviceFleet `SagemakerResource.deviceFleet`} 
   * - {@link SagemakerResource.domain `SagemakerResource.domain`} 
   * - {@link SagemakerResource.edgePackagingJob `SagemakerResource.edgePackagingJob`} 
   * - {@link SagemakerResource.endpoint `SagemakerResource.endpoint`} 
   * - {@link SagemakerResource.endpointConfig `SagemakerResource.endpointConfig`} 
   * - {@link SagemakerResource.experiment `SagemakerResource.experiment`} 
   * - {@link SagemakerResource.experimentTrial `SagemakerResource.experimentTrial`} 
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   * - {@link SagemakerResource.featureGroup `SagemakerResource.featureGroup`} 
   * - {@link SagemakerResource.flowDefinition `SagemakerResource.flowDefinition`} 
   * - {@link SagemakerResource.humanTaskUi `SagemakerResource.humanTaskUi`} 
   * - {@link SagemakerResource.hyperParameterTuningJob `SagemakerResource.hyperParameterTuningJob`} 
   * - {@link SagemakerResource.image `SagemakerResource.image`} 
   * - {@link SagemakerResource.inferenceRecommendationsJob `SagemakerResource.inferenceRecommendationsJob`} 
   * - {@link SagemakerResource.labelingJob `SagemakerResource.labelingJob`} 
   * - {@link SagemakerResource.model `SagemakerResource.model`} 
   * - {@link SagemakerResource.modelBiasJobDefinition `SagemakerResource.modelBiasJobDefinition`} 
   * - {@link SagemakerResource.modelExplainabilityJobDefinition `SagemakerResource.modelExplainabilityJobDefinition`} 
   * - {@link SagemakerResource.modelPackage `SagemakerResource.modelPackage`} 
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   * - {@link SagemakerResource.modelQualityJobDefinition `SagemakerResource.modelQualityJobDefinition`} 
   * - {@link SagemakerResource.monitoringSchedule `SagemakerResource.monitoringSchedule`} 
   * - {@link SagemakerResource.notebookInstance `SagemakerResource.notebookInstance`} 
   * - {@link SagemakerResource.pipeline `SagemakerResource.pipeline`} 
   * - {@link SagemakerResource.processingJob `SagemakerResource.processingJob`} 
   * - {@link SagemakerResource.project `SagemakerResource.project`} 
   * - {@link SagemakerResource.trainingJob `SagemakerResource.trainingJob`} 
   * - {@link SagemakerResource.transformJob `SagemakerResource.transformJob`} 
   * - {@link SagemakerResource.userProfile `SagemakerResource.userProfile`} 
   * - {@link SagemakerResource.workteam `SagemakerResource.workteam`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  AddTags = "sagemaker:AddTags",

  /**
   * Write - Grants permission to associate a trial component with a trial
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_AssociateTrialComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experimentTrial `SagemakerResource.experimentTrial`} 
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   */
  AssociateTrialComponent = "sagemaker:AssociateTrialComponent",

  /**
   * Read - Grants permission to describe one or more ModelPackages
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_BatchDescribeModelPackage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackage `SagemakerResource.modelPackage`} 
   */
  BatchDescribeModelPackage = "sagemaker:BatchDescribeModelPackage",

  /**
   * Read - Grants permission to retrieve metrics associated with SageMaker Resources such as Training Jobs. This API is not publicly exposed at this point, however admins can control this action
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemaker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.trainingJob `SagemakerResource.trainingJob`} 
   */
  BatchGetMetrics = "sagemaker:BatchGetMetrics",

  /**
   * Read - Grants permission to get a batch of records from one or more feature groups
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_BatchGetRecord.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.featureGroup `SagemakerResource.featureGroup`} 
   */
  BatchGetRecord = "sagemaker:BatchGetRecord",

  /**
   * Write - Grants permission to publish metrics associated with a SageMaker Resource such as a Training Job. This API is not publicly exposed at this point, however admins can control this action
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemaker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.trainingJob `SagemakerResource.trainingJob`} 
   */
  BatchPutMetrics = "sagemaker:BatchPutMetrics",

  /**
   * Write - Grants permission to create an action
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.action `SagemakerResource.action`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAction = "sagemaker:CreateAction",

  /**
   * Write - Grants permission to create an algorithm
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAlgorithm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.algorithm `SagemakerResource.algorithm`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAlgorithm = "sagemaker:CreateAlgorithm",

  /**
   * Write - Grants permission to create an App for a SageMaker Studio UserProfile
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.app `SagemakerResource.app`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ImageArns`: Filters access by the list of all image arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ImageVersionArns`: Filters access by the list of all image version arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApp = "sagemaker:CreateApp",

  /**
   * Write - Grants permission to create an AppImageConfig
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAppImageConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.appImageConfig `SagemakerResource.appImageConfig`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAppImageConfig = "sagemaker:CreateAppImageConfig",

  /**
   * Write - Grants permission to create an artifact
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.artifact `SagemakerResource.artifact`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateArtifact = "sagemaker:CreateArtifact",

  /**
   * Write - Grants permission to create an AutoML job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAutoMLJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.automlJob `SagemakerResource.automlJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InterContainerTrafficEncryption`: Filters access by the inter container traffic encryption associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAutoMLJob = "sagemaker:CreateAutoMLJob",

  /**
   * Write - Grants permission to create a CodeRepository
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateCodeRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.codeRepository `SagemakerResource.codeRepository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCodeRepository = "sagemaker:CreateCodeRepository",

  /**
   * Write - Grants permission to create a compilation job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateCompilationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.compilationJob `SagemakerResource.compilationJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCompilationJob = "sagemaker:CreateCompilationJob",

  /**
   * Write - Grants permission to create a context
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateContext.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.context `SagemakerResource.context`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateContext = "sagemaker:CreateContext",

  /**
   * Write - Grants permission to create a data quality job definition
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateDataQualityJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.dataQualityJobDefinition `SagemakerResource.dataQualityJobDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InterContainerTrafficEncryption`: Filters access by the inter container traffic encryption associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:MaxRuntimeInSeconds`: Filters access by the max runtime in seconds associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:NetworkIsolation`: Filters access by the network isolation associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataQualityJobDefinition = "sagemaker:CreateDataQualityJobDefinition",

  /**
   * Write - Grants permission to create a device fleet
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateDeviceFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.deviceFleet `SagemakerResource.deviceFleet`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDeviceFleet = "sagemaker:CreateDeviceFleet",

  /**
   * Write - Grants permission to create a Domain for SageMaker Studio
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.domain `SagemakerResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:AppNetworkAccessType`: Filters access by the app network access type associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:DomainSharingOutputKmsKey`: Filters access by the Domain sharing output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:ImageArns`: Filters access by the list of all image arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ImageVersionArns`: Filters access by the list of all image version arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDomain = "sagemaker:CreateDomain",

  /**
   * Write - Grants permission to create an edge packaging job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEdgePackagingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.edgePackagingJob `SagemakerResource.edgePackagingJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEdgePackagingJob = "sagemaker:CreateEdgePackagingJob",

  /**
   * Write - Grants permission to create an endpoint using the endpoint configuration specified in the request
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.endpoint `SagemakerResource.endpoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEndpoint = "sagemaker:CreateEndpoint",

  /**
   * Write - Grants permission to create an endpoint configuration that can be deployed using Amazon SageMaker hosting services
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.endpointConfig `SagemakerResource.endpointConfig`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:AcceleratorTypes`: Filters access by the list of all accelerator types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ModelArn`: Filters access by the model arn associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:ServerlessMaxConcurrency`: Filters access by limiting maximum concurrency used for Serverless inference in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:ServerlessMemorySize`: Filters access by limiting memory size used for Serverless inference in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  CreateEndpointConfig = "sagemaker:CreateEndpointConfig",

  /**
   * Write - Grants permission to create an experiment
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experiment `SagemakerResource.experiment`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateExperiment = "sagemaker:CreateExperiment",

  /**
   * Write - Grants permission to create a feature group
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateFeatureGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.featureGroup `SagemakerResource.featureGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:FeatureGroupOnlineStoreKmsKey`: Filters access by the online store kms key associated with the feature group resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:FeatureGroupOfflineStoreKmsKey`: Filters access by the offline store kms key associated with the feature group resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:FeatureGroupOfflineStoreS3Uri`: Filters access by the offline store s3 uri associated with the feature group resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateFeatureGroup = "sagemaker:CreateFeatureGroup",

  /**
   * Write - Grants permission to create a flow definition, which defines settings for a human workflow
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateFlowDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.flowDefinition `SagemakerResource.flowDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `sagemaker:WorkteamArn`: Filters access by the workteam arn associated to the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:WorkteamType`: Filters access by the workteam type associated to the request. This can be public-crowd, private-crowd or vendor-crowd ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFlowDefinition = "sagemaker:CreateFlowDefinition",

  /**
   * Write - Grants permission to define the settings you will use for the human review workflow user interface
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateHumanTaskUi.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.humanTaskUi `SagemakerResource.humanTaskUi`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateHumanTaskUi = "sagemaker:CreateHumanTaskUi",

  /**
   * Write - Grants permission to create a hyper parameter tuning job that can be deployed using Amazon SageMaker
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateHyperParameterTuningJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.hyperParameterTuningJob `SagemakerResource.hyperParameterTuningJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:FileSystemAccessMode`: Filters access by a file system access mode associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:FileSystemDirectoryPath`: Filters access by a file system directory path associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:FileSystemId`: Filters access by a file system ID associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:FileSystemType`: Filters access by a file system type associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InterContainerTrafficEncryption`: Filters access by the inter container traffic encryption associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:MaxRuntimeInSeconds`: Filters access by the max runtime in seconds associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:NetworkIsolation`: Filters access by the network isolation associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateHyperParameterTuningJob = "sagemaker:CreateHyperParameterTuningJob",

  /**
   * Write - Grants permission to create a SageMaker Image
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.image `SagemakerResource.image`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateImage = "sagemaker:CreateImage",

  /**
   * Write - Grants permission to create a SageMaker ImageVersion
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateImageVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.image `SagemakerResource.image`} 
   */
  CreateImageVersion = "sagemaker:CreateImageVersion",

  /**
   * Write - Grants permission to create an inference recommendations job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateInferenceRecommendationsJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.inferenceRecommendationsJob `SagemakerResource.inferenceRecommendationsJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateInferenceRecommendationsJob = "sagemaker:CreateInferenceRecommendationsJob",

  /**
   * Write - Grants permission to start a labeling job. A labeling job takes unlabeled data in and produces labeled data as output, which can be used for training SageMaker models
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateLabelingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.labelingJob `SagemakerResource.labelingJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `sagemaker:WorkteamArn`: Filters access by the workteam arn associated to the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:WorkteamType`: Filters access by the workteam type associated to the request. This can be public-crowd, private-crowd or vendor-crowd ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLabelingJob = "sagemaker:CreateLabelingJob",

  /**
   * Write - Grants permission to create a lineage group policy
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateLineageGroupPolicy.html
   */
  CreateLineageGroupPolicy = "sagemaker:CreateLineageGroupPolicy",

  /**
   * Write - Grants permission to create a model in Amazon SageMaker. In the request, you specify a name for the model and describe one or more containers
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.model `SagemakerResource.model`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:NetworkIsolation`: Filters access by the network isolation associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateModel = "sagemaker:CreateModel",

  /**
   * Write - Grants permission to create a model bias job definition
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelBiasJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelBiasJobDefinition `SagemakerResource.modelBiasJobDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InterContainerTrafficEncryption`: Filters access by the inter container traffic encryption associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:MaxRuntimeInSeconds`: Filters access by the max runtime in seconds associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:NetworkIsolation`: Filters access by the network isolation associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateModelBiasJobDefinition = "sagemaker:CreateModelBiasJobDefinition",

  /**
   * Write - Grants permission to create a model explainability job definition
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelExplainabilityJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelExplainabilityJobDefinition `SagemakerResource.modelExplainabilityJobDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InterContainerTrafficEncryption`: Filters access by the inter container traffic encryption associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:MaxRuntimeInSeconds`: Filters access by the max runtime in seconds associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:NetworkIsolation`: Filters access by the network isolation associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateModelExplainabilityJobDefinition = "sagemaker:CreateModelExplainabilityJobDefinition",

  /**
   * Write - Grants permission to create a ModelPackage
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelPackage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackage `SagemakerResource.modelPackage`} 
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ModelApprovalStatus`: Filters access by the model approval status with the model-package in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateModelPackage = "sagemaker:CreateModelPackage",

  /**
   * Write - Grants permission to create a ModelPackageGroup
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelPackageGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateModelPackageGroup = "sagemaker:CreateModelPackageGroup",

  /**
   * Write - Grants permission to create a model quality job definition
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelQualityJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelQualityJobDefinition `SagemakerResource.modelQualityJobDefinition`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InterContainerTrafficEncryption`: Filters access by the inter container traffic encryption associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:MaxRuntimeInSeconds`: Filters access by the max runtime in seconds associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:NetworkIsolation`: Filters access by the network isolation associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateModelQualityJobDefinition = "sagemaker:CreateModelQualityJobDefinition",

  /**
   * Write - Grants permission to create a monitoring schedule
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateMonitoringSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.monitoringSchedule `SagemakerResource.monitoringSchedule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InterContainerTrafficEncryption`: Filters access by the inter container traffic encryption associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:MaxRuntimeInSeconds`: Filters access by the max runtime in seconds associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:NetworkIsolation`: Filters access by the network isolation associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMonitoringSchedule = "sagemaker:CreateMonitoringSchedule",

  /**
   * Write - Grants permission to create an Amazon SageMaker notebook instance. A notebook instance is an Amazon EC2 instance running on a Jupyter Notebook
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateNotebookInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.notebookInstance `SagemakerResource.notebookInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:AcceleratorTypes`: Filters access by the list of all accelerator types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:DirectInternetAccess`: Filters access by the direct internet access associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:RootAccess`: Filters access by the root access associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateNotebookInstance = "sagemaker:CreateNotebookInstance",

  /**
   * Write - Grants permission to create a notebook instance lifecycle configuration that can be deployed using Amazon SageMaker
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateNotebookInstanceLifecycleConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.notebookInstanceLifecycleConfig `SagemakerResource.notebookInstanceLifecycleConfig`} 
   */
  CreateNotebookInstanceLifecycleConfig = "sagemaker:CreateNotebookInstanceLifecycleConfig",

  /**
   * Write - Grants permission to create a pipeline
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipeline `SagemakerResource.pipeline`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePipeline = "sagemaker:CreatePipeline",

  /**
   * Write - Grants permission to return a URL that you can use from your browser to connect to the Domain as a specified UserProfile when AuthMode is 'IAM'
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePresignedDomainUrl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.userProfile `SagemakerResource.userProfile`} 
   */
  CreatePresignedDomainUrl = "sagemaker:CreatePresignedDomainUrl",

  /**
   * Write - Grants permission to create a URL that you can use from your browser to connect to the Notebook Instance
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePresignedNotebookInstanceUrl.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.notebookInstance `SagemakerResource.notebookInstance`} 
   */
  CreatePresignedNotebookInstanceUrl = "sagemaker:CreatePresignedNotebookInstanceUrl",

  /**
   * Write - Grants permission to start a processing job. After processing completes, Amazon SageMaker saves the resulting artifacts and other optional output to an Amazon S3 location that you specify
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateProcessingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.processingJob `SagemakerResource.processingJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:MaxRuntimeInSeconds`: Filters access by the max runtime in seconds associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:NetworkIsolation`: Filters access by the network isolation associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InterContainerTrafficEncryption`: Filters access by the inter container traffic encryption associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  CreateProcessingJob = "sagemaker:CreateProcessingJob",

  /**
   * Write - Grants permission to create a Project
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.project `SagemakerResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProject = "sagemaker:CreateProject",

  /**
   * Write - Grants permission to create a Studio Lifecycle Configuration that can be deployed using Amazon SageMaker
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateStudioLifecycleConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.studioLifecycleConfig `SagemakerResource.studioLifecycleConfig`} 
   */
  CreateStudioLifecycleConfig = "sagemaker:CreateStudioLifecycleConfig",

  /**
   * Write - Grants permission to start a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts and other optional output to an Amazon S3 location that you specify
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrainingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.trainingJob `SagemakerResource.trainingJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:FileSystemAccessMode`: Filters access by a file system access mode associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:FileSystemDirectoryPath`: Filters access by a file system directory path associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:FileSystemId`: Filters access by a file system ID associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:FileSystemType`: Filters access by a file system type associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InterContainerTrafficEncryption`: Filters access by the inter container traffic encryption associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:MaxRuntimeInSeconds`: Filters access by the max runtime in seconds associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:NetworkIsolation`: Filters access by the network isolation associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTrainingJob = "sagemaker:CreateTrainingJob",

  /**
   * Write - Grants permission to start a transform job. After the results are obtained, Amazon SageMaker saves them to an Amazon S3 location that you specify
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTransformJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.transformJob `SagemakerResource.transformJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ModelArn`: Filters access by the model arn associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  CreateTransformJob = "sagemaker:CreateTransformJob",

  /**
   * Write - Grants permission to create a trial
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrial.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experimentTrial `SagemakerResource.experimentTrial`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTrial = "sagemaker:CreateTrial",

  /**
   * Write - Grants permission to create a trial component
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrialComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTrialComponent = "sagemaker:CreateTrialComponent",

  /**
   * Write - Grants permission to create a UserProfile for a SageMaker Studio Domain
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateUserProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.userProfile `SagemakerResource.userProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:DomainSharingOutputKmsKey`: Filters access by the Domain sharing output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:ImageArns`: Filters access by the list of all image arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ImageVersionArns`: Filters access by the list of all image version arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateUserProfile = "sagemaker:CreateUserProfile",

  /**
   * Write - Grants permission to create a workforce
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateWorkforce.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.workforce `SagemakerResource.workforce`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWorkforce = "sagemaker:CreateWorkforce",

  /**
   * Write - Grants permission to create a workteam
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateWorkteam.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.workteam `SagemakerResource.workteam`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateWorkteam = "sagemaker:CreateWorkteam",

  /**
   * Write - Grants permission to delete an action
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.action `SagemakerResource.action`} 
   */
  DeleteAction = "sagemaker:DeleteAction",

  /**
   * Write - Grants permission to delete an algorithm
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteAlgorithm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.algorithm `SagemakerResource.algorithm`} 
   */
  DeleteAlgorithm = "sagemaker:DeleteAlgorithm",

  /**
   * Write - Grants permission to delete an App
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.app `SagemakerResource.app`} 
   */
  DeleteApp = "sagemaker:DeleteApp",

  /**
   * Write - Grants permission to delete an AppImageConfig
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteAppImageConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.appImageConfig `SagemakerResource.appImageConfig`} 
   */
  DeleteAppImageConfig = "sagemaker:DeleteAppImageConfig",

  /**
   * Write - Grants permission to delete an artifact
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.artifact `SagemakerResource.artifact`} 
   */
  DeleteArtifact = "sagemaker:DeleteArtifact",

  /**
   * Write - Grants permission to delete the association from a lineage entity (artifact, context, action, experiment, experiment-trial-component) to another
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.action `SagemakerResource.action`} 
   * - {@link SagemakerResource.artifact `SagemakerResource.artifact`} 
   * - {@link SagemakerResource.context `SagemakerResource.context`} 
   * - {@link SagemakerResource.experiment `SagemakerResource.experiment`} 
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   */
  DeleteAssociation = "sagemaker:DeleteAssociation",

  /**
   * Write - Grants permission to delete a CodeRepository
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteCodeRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.codeRepository `SagemakerResource.codeRepository`} 
   */
  DeleteCodeRepository = "sagemaker:DeleteCodeRepository",

  /**
   * Write - Grants permission to delete a context
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteContext.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.context `SagemakerResource.context`} 
   */
  DeleteContext = "sagemaker:DeleteContext",

  /**
   * Write - Grants permission to delete the data quality job definition created using the CreateDataQualityJobDefinition API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteDataQualityJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.dataQualityJobDefinition `SagemakerResource.dataQualityJobDefinition`} 
   */
  DeleteDataQualityJobDefinition = "sagemaker:DeleteDataQualityJobDefinition",

  /**
   * Write - Grants permission to delete a device fleet
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteDeviceFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.deviceFleet `SagemakerResource.deviceFleet`} 
   */
  DeleteDeviceFleet = "sagemaker:DeleteDeviceFleet",

  /**
   * Write - Grants permission to delete a Domain
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.domain `SagemakerResource.domain`} 
   */
  DeleteDomain = "sagemaker:DeleteDomain",

  /**
   * Write - Grants permission to delete an endpoint. Amazon SageMaker frees up all the resources that were deployed when the endpoint was created
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.endpoint `SagemakerResource.endpoint`} 
   */
  DeleteEndpoint = "sagemaker:DeleteEndpoint",

  /**
   * Write - Grants permission to delete the endpoint configuration created using the CreateEndpointConfig API. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete any endpoints created using the configuration
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteEndpointConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.endpointConfig `SagemakerResource.endpointConfig`} 
   */
  DeleteEndpointConfig = "sagemaker:DeleteEndpointConfig",

  /**
   * Write - Grants permission to delete an experiment
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experiment `SagemakerResource.experiment`} 
   */
  DeleteExperiment = "sagemaker:DeleteExperiment",

  /**
   * Write - Grants permission to delete a feature group
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteFeatureGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.featureGroup `SagemakerResource.featureGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteFeatureGroup = "sagemaker:DeleteFeatureGroup",

  /**
   * Write - Grants permission to delete the specified flow definition
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteFlowDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.flowDefinition `SagemakerResource.flowDefinition`} 
   */
  DeleteFlowDefinition = "sagemaker:DeleteFlowDefinition",

  /**
   * Write - Grants permission to delete a specified human loop
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteHumanLoop.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.humanLoop `SagemakerResource.humanLoop`} 
   */
  DeleteHumanLoop = "sagemaker:DeleteHumanLoop",

  /**
   * Write - Grants permission to delete the specified human task user interface (worker task template)
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteHumanTaskUi.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.humanTaskUi `SagemakerResource.humanTaskUi`} 
   */
  DeleteHumanTaskUi = "sagemaker:DeleteHumanTaskUi",

  /**
   * Write - Grants permission to delete a SageMaker Image
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.image `SagemakerResource.image`} 
   */
  DeleteImage = "sagemaker:DeleteImage",

  /**
   * Write - Grants permission to delete a SageMaker ImageVersion
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteImageVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.imageVersion `SagemakerResource.imageVersion`} 
   */
  DeleteImageVersion = "sagemaker:DeleteImageVersion",

  /**
   * Write - Grants permission to delete a lineage group policy
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteLineageGroupPolicy.html
   */
  DeleteLineageGroupPolicy = "sagemaker:DeleteLineageGroupPolicy",

  /**
   * Write - Grants permission to delete a model created using the CreateModel API. The DeleteModel API deletes only the model entry in Amazon SageMaker that you created by calling the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.model `SagemakerResource.model`} 
   */
  DeleteModel = "sagemaker:DeleteModel",

  /**
   * Write - Grants permission to delete the model bias job definition created using the CreateModelBiasJobDefinition API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelBiasJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelBiasJobDefinition `SagemakerResource.modelBiasJobDefinition`} 
   */
  DeleteModelBiasJobDefinition = "sagemaker:DeleteModelBiasJobDefinition",

  /**
   * Write - Grants permission to delete the model explainability job definition created using the CreateModelExplainabilityJobDefinition API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelExplainabilityJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelExplainabilityJobDefinition `SagemakerResource.modelExplainabilityJobDefinition`} 
   */
  DeleteModelExplainabilityJobDefinition = "sagemaker:DeleteModelExplainabilityJobDefinition",

  /**
   * Write - Grants permission to delete a ModelPackage
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelPackage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackage `SagemakerResource.modelPackage`} 
   */
  DeleteModelPackage = "sagemaker:DeleteModelPackage",

  /**
   * Write - Grants permission to delete a ModelPackageGroup
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelPackageGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   */
  DeleteModelPackageGroup = "sagemaker:DeleteModelPackageGroup",

  /**
   * Write - Grants permission to delete a ModelPackageGroup policy
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelPackageGroupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   */
  DeleteModelPackageGroupPolicy = "sagemaker:DeleteModelPackageGroupPolicy",

  /**
   * Write - Grants permission to delete the model quality job definition created using the CreateModelQualityJobDefinition API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelQualityJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelQualityJobDefinition `SagemakerResource.modelQualityJobDefinition`} 
   */
  DeleteModelQualityJobDefinition = "sagemaker:DeleteModelQualityJobDefinition",

  /**
   * Write - Grants permission to delete a monitoring schedule
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteMonitoringSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.monitoringSchedule `SagemakerResource.monitoringSchedule`} 
   */
  DeleteMonitoringSchedule = "sagemaker:DeleteMonitoringSchedule",

  /**
   * Write - Grants permission to delete a Amazon SageMaker notebook instance. Before you can delete a notebook instance, you must call the StopNotebookInstance API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteNotebookInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.notebookInstance `SagemakerResource.notebookInstance`} 
   */
  DeleteNotebookInstance = "sagemaker:DeleteNotebookInstance",

  /**
   * Write - Grants permission to delete a notebook instance lifecycle configuration
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteNotebookInstanceLifecycleConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.notebookInstanceLifecycleConfig `SagemakerResource.notebookInstanceLifecycleConfig`} 
   */
  DeleteNotebookInstanceLifecycleConfig = "sagemaker:DeleteNotebookInstanceLifecycleConfig",

  /**
   * Write - Grants permission to delete a pipeline
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeletePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipeline `SagemakerResource.pipeline`} 
   */
  DeletePipeline = "sagemaker:DeletePipeline",

  /**
   * Write - Grants permission to delete a project
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.project `SagemakerResource.project`} 
   */
  DeleteProject = "sagemaker:DeleteProject",

  /**
   * Write - Grants permission to delete a record from a feature group
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteRecord.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.featureGroup `SagemakerResource.featureGroup`} 
   */
  DeleteRecord = "sagemaker:DeleteRecord",

  /**
   * Write - Grants permission to delete a Studio Lifecycle Configuration
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteStudioLifecycleConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.studioLifecycleConfig `SagemakerResource.studioLifecycleConfig`} 
   */
  DeleteStudioLifecycleConfig = "sagemaker:DeleteStudioLifecycleConfig",

  /**
   * Tagging - Grants permission to delete the specified set of tags from an Amazon SageMaker resource
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.action `SagemakerResource.action`} 
   * - {@link SagemakerResource.algorithm `SagemakerResource.algorithm`} 
   * - {@link SagemakerResource.app `SagemakerResource.app`} 
   * - {@link SagemakerResource.appImageConfig `SagemakerResource.appImageConfig`} 
   * - {@link SagemakerResource.artifact `SagemakerResource.artifact`} 
   * - {@link SagemakerResource.automlJob `SagemakerResource.automlJob`} 
   * - {@link SagemakerResource.codeRepository `SagemakerResource.codeRepository`} 
   * - {@link SagemakerResource.compilationJob `SagemakerResource.compilationJob`} 
   * - {@link SagemakerResource.context `SagemakerResource.context`} 
   * - {@link SagemakerResource.dataQualityJobDefinition `SagemakerResource.dataQualityJobDefinition`} 
   * - {@link SagemakerResource.device `SagemakerResource.device`} 
   * - {@link SagemakerResource.deviceFleet `SagemakerResource.deviceFleet`} 
   * - {@link SagemakerResource.domain `SagemakerResource.domain`} 
   * - {@link SagemakerResource.edgePackagingJob `SagemakerResource.edgePackagingJob`} 
   * - {@link SagemakerResource.endpoint `SagemakerResource.endpoint`} 
   * - {@link SagemakerResource.endpointConfig `SagemakerResource.endpointConfig`} 
   * - {@link SagemakerResource.experiment `SagemakerResource.experiment`} 
   * - {@link SagemakerResource.experimentTrial `SagemakerResource.experimentTrial`} 
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   * - {@link SagemakerResource.featureGroup `SagemakerResource.featureGroup`} 
   * - {@link SagemakerResource.flowDefinition `SagemakerResource.flowDefinition`} 
   * - {@link SagemakerResource.humanTaskUi `SagemakerResource.humanTaskUi`} 
   * - {@link SagemakerResource.hyperParameterTuningJob `SagemakerResource.hyperParameterTuningJob`} 
   * - {@link SagemakerResource.image `SagemakerResource.image`} 
   * - {@link SagemakerResource.inferenceRecommendationsJob `SagemakerResource.inferenceRecommendationsJob`} 
   * - {@link SagemakerResource.labelingJob `SagemakerResource.labelingJob`} 
   * - {@link SagemakerResource.model `SagemakerResource.model`} 
   * - {@link SagemakerResource.modelBiasJobDefinition `SagemakerResource.modelBiasJobDefinition`} 
   * - {@link SagemakerResource.modelExplainabilityJobDefinition `SagemakerResource.modelExplainabilityJobDefinition`} 
   * - {@link SagemakerResource.modelPackage `SagemakerResource.modelPackage`} 
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   * - {@link SagemakerResource.modelQualityJobDefinition `SagemakerResource.modelQualityJobDefinition`} 
   * - {@link SagemakerResource.monitoringSchedule `SagemakerResource.monitoringSchedule`} 
   * - {@link SagemakerResource.notebookInstance `SagemakerResource.notebookInstance`} 
   * - {@link SagemakerResource.pipeline `SagemakerResource.pipeline`} 
   * - {@link SagemakerResource.processingJob `SagemakerResource.processingJob`} 
   * - {@link SagemakerResource.project `SagemakerResource.project`} 
   * - {@link SagemakerResource.trainingJob `SagemakerResource.trainingJob`} 
   * - {@link SagemakerResource.transformJob `SagemakerResource.transformJob`} 
   * - {@link SagemakerResource.userProfile `SagemakerResource.userProfile`} 
   * - {@link SagemakerResource.workteam `SagemakerResource.workteam`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteTags = "sagemaker:DeleteTags",

  /**
   * Write - Grants permission to delete a trial
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTrial.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experimentTrial `SagemakerResource.experimentTrial`} 
   */
  DeleteTrial = "sagemaker:DeleteTrial",

  /**
   * Write - Grants permission to delete a trial component
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTrialComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   */
  DeleteTrialComponent = "sagemaker:DeleteTrialComponent",

  /**
   * Write - Grants permission to delete a UserProfile
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteUserProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.userProfile `SagemakerResource.userProfile`} 
   */
  DeleteUserProfile = "sagemaker:DeleteUserProfile",

  /**
   * Write - Grants permission to delete a workforce
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteWorkforce.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.workforce `SagemakerResource.workforce`} 
   */
  DeleteWorkforce = "sagemaker:DeleteWorkforce",

  /**
   * Write - Grants permission to delete a workteam
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteWorkteam.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.workteam `SagemakerResource.workteam`} 
   */
  DeleteWorkteam = "sagemaker:DeleteWorkteam",

  /**
   * Write - Grants permission to deregister a set of devices
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeregisterDevices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.device `SagemakerResource.device`} 
   */
  DeregisterDevices = "sagemaker:DeregisterDevices",

  /**
   * Read - Grants permission to get information about an action
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.action `SagemakerResource.action`} 
   */
  DescribeAction = "sagemaker:DescribeAction",

  /**
   * Read - Grants permission to describe an algorithm
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAlgorithm.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.algorithm `SagemakerResource.algorithm`} 
   */
  DescribeAlgorithm = "sagemaker:DescribeAlgorithm",

  /**
   * Read - Grants permission to describe an App
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeApp.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.app `SagemakerResource.app`} 
   */
  DescribeApp = "sagemaker:DescribeApp",

  /**
   * Read - Grants permission to describe an AppImageConfig
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAppImageConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.appImageConfig `SagemakerResource.appImageConfig`} 
   */
  DescribeAppImageConfig = "sagemaker:DescribeAppImageConfig",

  /**
   * Read - Grants permission to get information about an artifact
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.artifact `SagemakerResource.artifact`} 
   */
  DescribeArtifact = "sagemaker:DescribeArtifact",

  /**
   * Read - Grants permission to describe an AutoML job that was created via the CreateAutoMLJob API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAutoMLJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.automlJob `SagemakerResource.automlJob`} 
   */
  DescribeAutoMLJob = "sagemaker:DescribeAutoMLJob",

  /**
   * Read - Grants permission to describe a CodeRepository
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeCodeRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.codeRepository `SagemakerResource.codeRepository`} 
   */
  DescribeCodeRepository = "sagemaker:DescribeCodeRepository",

  /**
   * Read - Grants permission to return information about a compilation job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeCompilationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.compilationJob `SagemakerResource.compilationJob`} 
   */
  DescribeCompilationJob = "sagemaker:DescribeCompilationJob",

  /**
   * Read - Grants permission to get information about a context
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeContext.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.context `SagemakerResource.context`} 
   */
  DescribeContext = "sagemaker:DescribeContext",

  /**
   * Read - Grants permission to return information about a data quality job definition
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeDataQualityJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.dataQualityJobDefinition `SagemakerResource.dataQualityJobDefinition`} 
   */
  DescribeDataQualityJobDefinition = "sagemaker:DescribeDataQualityJobDefinition",

  /**
   * Read - Grants permission to access information about a device
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeDevice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.device `SagemakerResource.device`} 
   */
  DescribeDevice = "sagemaker:DescribeDevice",

  /**
   * Read - Grants permission to access information about a device fleet
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeDeviceFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.deviceFleet `SagemakerResource.deviceFleet`} 
   */
  DescribeDeviceFleet = "sagemaker:DescribeDeviceFleet",

  /**
   * Read - Grants permission to describe a Domain
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.domain `SagemakerResource.domain`} 
   */
  DescribeDomain = "sagemaker:DescribeDomain",

  /**
   * Read - Grants permission to access information about an edge packaging job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEdgePackagingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.edgePackagingJob `SagemakerResource.edgePackagingJob`} 
   */
  DescribeEdgePackagingJob = "sagemaker:DescribeEdgePackagingJob",

  /**
   * Read - Grants permission to return the description of an endpoint
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.endpoint `SagemakerResource.endpoint`} 
   */
  DescribeEndpoint = "sagemaker:DescribeEndpoint",

  /**
   * Read - Grants permission to return the description of an endpoint configuration, which was created using the CreateEndpointConfig API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpointConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.endpointConfig `SagemakerResource.endpointConfig`} 
   */
  DescribeEndpointConfig = "sagemaker:DescribeEndpointConfig",

  /**
   * Read - Grants permission to return information about an experiment
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experiment `SagemakerResource.experiment`} 
   */
  DescribeExperiment = "sagemaker:DescribeExperiment",

  /**
   * Read - Grants permission to return information about a feature group
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeFeatureGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.featureGroup `SagemakerResource.featureGroup`} 
   */
  DescribeFeatureGroup = "sagemaker:DescribeFeatureGroup",

  /**
   * Read - Grants permission to return information about the specified flow definition
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeFlowDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.flowDefinition `SagemakerResource.flowDefinition`} 
   */
  DescribeFlowDefinition = "sagemaker:DescribeFlowDefinition",

  /**
   * Read - Grants permission to return information about the specified human loop
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHumanLoop.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.humanLoop `SagemakerResource.humanLoop`} 
   */
  DescribeHumanLoop = "sagemaker:DescribeHumanLoop",

  /**
   * Read - Grants permission to return detailed information about the specified human review workflow user interface
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHumanTaskUi.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.humanTaskUi `SagemakerResource.humanTaskUi`} 
   */
  DescribeHumanTaskUi = "sagemaker:DescribeHumanTaskUi",

  /**
   * Read - Grants permission to describe a hyper parameter tuning job that was created via the CreateHyperParameterTuningJob API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHyperParameterTuningJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.hyperParameterTuningJob `SagemakerResource.hyperParameterTuningJob`} 
   */
  DescribeHyperParameterTuningJob = "sagemaker:DescribeHyperParameterTuningJob",

  /**
   * Read - Grants permission to return information about a SageMaker Image
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.image `SagemakerResource.image`} 
   */
  DescribeImage = "sagemaker:DescribeImage",

  /**
   * Read - Grants permission to return information about a SageMaker ImageVersion
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeImageVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.imageVersion `SagemakerResource.imageVersion`} 
   */
  DescribeImageVersion = "sagemaker:DescribeImageVersion",

  /**
   * Read - Grants permission to get information about an inference recommendations job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeInferenceRecommendationsJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.inferenceRecommendationsJob `SagemakerResource.inferenceRecommendationsJob`} 
   */
  DescribeInferenceRecommendationsJob = "sagemaker:DescribeInferenceRecommendationsJob",

  /**
   * Read - Grants permission to return information about a labeling job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeLabelingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.labelingJob `SagemakerResource.labelingJob`} 
   */
  DescribeLabelingJob = "sagemaker:DescribeLabelingJob",

  /**
   * Read - Grants permission to describe a lineage group
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeLineageGroup.html
   */
  DescribeLineageGroup = "sagemaker:DescribeLineageGroup",

  /**
   * Read - Grants permission to describe a model that you created using the CreateModel API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.model `SagemakerResource.model`} 
   */
  DescribeModel = "sagemaker:DescribeModel",

  /**
   * Read - Grants permission to return information about a model bias job definition
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelBiasJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelBiasJobDefinition `SagemakerResource.modelBiasJobDefinition`} 
   */
  DescribeModelBiasJobDefinition = "sagemaker:DescribeModelBiasJobDefinition",

  /**
   * Read - Grants permission to return information about a model explainability job definition
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelExplainabilityJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelExplainabilityJobDefinition `SagemakerResource.modelExplainabilityJobDefinition`} 
   */
  DescribeModelExplainabilityJobDefinition = "sagemaker:DescribeModelExplainabilityJobDefinition",

  /**
   * Read - Grants permission to describe a ModelPackage
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelPackage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackage `SagemakerResource.modelPackage`} 
   */
  DescribeModelPackage = "sagemaker:DescribeModelPackage",

  /**
   * Read - Grants permission to describe a ModelPackageGroup
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelPackageGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   */
  DescribeModelPackageGroup = "sagemaker:DescribeModelPackageGroup",

  /**
   * Read - Grants permission to return information about a model quality job definition
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelQualityJobDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelQualityJobDefinition `SagemakerResource.modelQualityJobDefinition`} 
   */
  DescribeModelQualityJobDefinition = "sagemaker:DescribeModelQualityJobDefinition",

  /**
   * Read - Grants permission to return information about a monitoring schedule
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeMonitoringSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.monitoringSchedule `SagemakerResource.monitoringSchedule`} 
   */
  DescribeMonitoringSchedule = "sagemaker:DescribeMonitoringSchedule",

  /**
   * Read - Grants permission to return information about a notebook instance
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeNotebookInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.notebookInstance `SagemakerResource.notebookInstance`} 
   */
  DescribeNotebookInstance = "sagemaker:DescribeNotebookInstance",

  /**
   * Read - Grants permission to describe a notebook instance lifecycle configuration that was created via the CreateNotebookInstanceLifecycleConfig API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeNotebookInstanceLifecycleConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.notebookInstanceLifecycleConfig `SagemakerResource.notebookInstanceLifecycleConfig`} 
   */
  DescribeNotebookInstanceLifecycleConfig = "sagemaker:DescribeNotebookInstanceLifecycleConfig",

  /**
   * Read - Grants permission to get information about a pipeline
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipeline `SagemakerResource.pipeline`} 
   */
  DescribePipeline = "sagemaker:DescribePipeline",

  /**
   * Read - Grants permission to get the pipeline definition for a pipeline execution
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribePipelineDefinitionForExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipelineExecution `SagemakerResource.pipelineExecution`} 
   */
  DescribePipelineDefinitionForExecution = "sagemaker:DescribePipelineDefinitionForExecution",

  /**
   * Read - Grants permission to get information about a pipeline execution
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribePipelineExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipelineExecution `SagemakerResource.pipelineExecution`} 
   */
  DescribePipelineExecution = "sagemaker:DescribePipelineExecution",

  /**
   * Read - Grants permission to return information about a processing job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeProcessingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.processingJob `SagemakerResource.processingJob`} 
   */
  DescribeProcessingJob = "sagemaker:DescribeProcessingJob",

  /**
   * Read - Grants permission to describe a project
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.project `SagemakerResource.project`} 
   */
  DescribeProject = "sagemaker:DescribeProject",

  /**
   * Read - Grants permission to describe a Studio Lifecycle Configuration
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeStudioLifecycleConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.studioLifecycleConfig `SagemakerResource.studioLifecycleConfig`} 
   */
  DescribeStudioLifecycleConfig = "sagemaker:DescribeStudioLifecycleConfig",

  /**
   * Read - Grants permission to return information about a subscribed workteam
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeSubscribedWorkteam.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.workteam `SagemakerResource.workteam`} 
   */
  DescribeSubscribedWorkteam = "sagemaker:DescribeSubscribedWorkteam",

  /**
   * Read - Grants permission to return information about a training job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrainingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.trainingJob `SagemakerResource.trainingJob`} 
   */
  DescribeTrainingJob = "sagemaker:DescribeTrainingJob",

  /**
   * Read - Grants permission to return information about a transform job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTransformJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.transformJob `SagemakerResource.transformJob`} 
   */
  DescribeTransformJob = "sagemaker:DescribeTransformJob",

  /**
   * Read - Grants permission to return information about a trial
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrial.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experimentTrial `SagemakerResource.experimentTrial`} 
   */
  DescribeTrial = "sagemaker:DescribeTrial",

  /**
   * Read - Grants permission to return information about a trial component
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrialComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   */
  DescribeTrialComponent = "sagemaker:DescribeTrialComponent",

  /**
   * Read - Grants permission to describe a UserProfile
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeUserProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.userProfile `SagemakerResource.userProfile`} 
   */
  DescribeUserProfile = "sagemaker:DescribeUserProfile",

  /**
   * Read - Grants permission to return information about a workforce
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeWorkforce.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.workforce `SagemakerResource.workforce`} 
   */
  DescribeWorkforce = "sagemaker:DescribeWorkforce",

  /**
   * Read - Grants permission to return information about a workteam
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeWorkteam.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.workteam `SagemakerResource.workteam`} 
   */
  DescribeWorkteam = "sagemaker:DescribeWorkteam",

  /**
   * Write - Grants permission to disable a SageMaker Service Catalog Portfolio
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DisableSagemakerServicecatalogPortfolio.html
   */
  DisableSagemakerServicecatalogPortfolio = "sagemaker:DisableSagemakerServicecatalogPortfolio",

  /**
   * Write - Grants permission to disassociate a trial component from a trial
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_DisassociateTrialComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experimentTrial `SagemakerResource.experimentTrial`} 
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   * - {@link SagemakerResource.processingJob `SagemakerResource.processingJob`} 
   */
  DisassociateTrialComponent = "sagemaker:DisassociateTrialComponent",

  /**
   * Write - Grants permission to enable a SageMaker Service Catalog Portfolio
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_EnableSagemakerServicecatalogPortfolio.html
   */
  EnableSagemakerServicecatalogPortfolio = "sagemaker:EnableSagemakerServicecatalogPortfolio",

  /**
   * Read - Grants permission to access a summary of the devices in a device fleet
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetDeviceFleetReport.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.deviceFleet `SagemakerResource.deviceFleet`} 
   */
  GetDeviceFleetReport = "sagemaker:GetDeviceFleetReport",

  /**
   * Read - Grants permission to get device registration. After you deploy a model onto edge devices this api is used to get current device registration
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetDeviceRegistration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.device `SagemakerResource.device`} 
   */
  GetDeviceRegistration = "sagemaker:GetDeviceRegistration",

  /**
   * Read - Grants permission to retreive a lineage group policy
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetLineageGroupPolicy.html
   */
  GetLineageGroupPolicy = "sagemaker:GetLineageGroupPolicy",

  /**
   * Read - Grants permission to get a ModelPackageGroup policy
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetModelPackageGroupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   */
  GetModelPackageGroupPolicy = "sagemaker:GetModelPackageGroupPolicy",

  /**
   * Read - Grants permission to get a record from a feature group
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetRecord.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.featureGroup `SagemakerResource.featureGroup`} 
   */
  GetRecord = "sagemaker:GetRecord",

  /**
   * Read - Grants permission to get a SageMaker Service Catalog Portfolio
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetSagemakerServicecatalogPortfolioStatus.html
   */
  GetSagemakerServicecatalogPortfolioStatus = "sagemaker:GetSagemakerServicecatalogPortfolioStatus",

  /**
   * Read - Grants permission to get search suggestions when provided with a keyword
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetSearchSuggestions.html
   */
  GetSearchSuggestions = "sagemaker:GetSearchSuggestions",

  /**
   * Read - Grants permission to invoke an endpoint. After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_InvokeEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.endpoint `SagemakerResource.endpoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `sagemaker:TargetModel`: Filters access by the target model associated with the Multi-Model Endpoint in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  InvokeEndpoint = "sagemaker:InvokeEndpoint",

  /**
   * Read - Grants permission to get inferences from the hosted model at the specified endpoint in an asynchronous manner
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_InvokeEndpointAsync.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.endpoint `SagemakerResource.endpoint`} 
   */
  InvokeEndpointAsync = "sagemaker:InvokeEndpointAsync",

  /**
   * List - Grants permission to list actions
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListActions.html
   */
  ListActions = "sagemaker:ListActions",

  /**
   * List - Grants permission to list Algorithms
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAlgorithms.html
   */
  ListAlgorithms = "sagemaker:ListAlgorithms",

  /**
   * List - Grants permission to list the AppImageConfigs in your account
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAppImageConfigs.html
   */
  ListAppImageConfigs = "sagemaker:ListAppImageConfigs",

  /**
   * List - Grants permission to list the Apps in your account
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListApps.html
   */
  ListApps = "sagemaker:ListApps",

  /**
   * List - Grants permission to list artifacts
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListArtifacts.html
   */
  ListArtifacts = "sagemaker:ListArtifacts",

  /**
   * List - Grants permission to list associations
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAssociations.html
   */
  ListAssociations = "sagemaker:ListAssociations",

  /**
   * List - Grants permission to list AutoML jobs
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAutoMLJobs.html
   */
  ListAutoMLJobs = "sagemaker:ListAutoMLJobs",

  /**
   * List - Grants permission to lists candidates for an AutoML job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCandidatesForAutoMLJob.html
   */
  ListCandidatesForAutoMLJob = "sagemaker:ListCandidatesForAutoMLJob",

  /**
   * List - Grants permission to list code repositories
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCodeRepositories.html
   */
  ListCodeRepositories = "sagemaker:ListCodeRepositories",

  /**
   * List - Grants permission to list compilation jobs
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCompilationJobs.html
   */
  ListCompilationJobs = "sagemaker:ListCompilationJobs",

  /**
   * List - Grants permission to list contexts
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListContexts.html
   */
  ListContexts = "sagemaker:ListContexts",

  /**
   * List - Grants permission to list data quality job definitions
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListDataQualityJobDefinitions.html
   */
  ListDataQualityJobDefinitions = "sagemaker:ListDataQualityJobDefinitions",

  /**
   * List - Grants permission to list device fleets
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListDeviceFleets.html
   */
  ListDeviceFleets = "sagemaker:ListDeviceFleets",

  /**
   * List - Grants permission to list devices
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListDevices.html
   */
  ListDevices = "sagemaker:ListDevices",

  /**
   * List - Grants permission to list the Domains in your account
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListDomains.html
   */
  ListDomains = "sagemaker:ListDomains",

  /**
   * List - Grants permission to list edge packaging jobs
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEdgePackagingJobs.html
   */
  ListEdgePackagingJobs = "sagemaker:ListEdgePackagingJobs",

  /**
   * List - Grants permission to list endpoint configurations
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEndpointConfigs.html
   */
  ListEndpointConfigs = "sagemaker:ListEndpointConfigs",

  /**
   * List - Grants permission to list endpoints
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEndpoints.html
   */
  ListEndpoints = "sagemaker:ListEndpoints",

  /**
   * List - Grants permission to list experiments
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListExperiments.html
   */
  ListExperiments = "sagemaker:ListExperiments",

  /**
   * List - Grants permission to list feature groups
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListFeatureGroups.html
   */
  ListFeatureGroups = "sagemaker:ListFeatureGroups",

  /**
   * List - Grants permission to return summary information about flow definitions, given the specified parameters
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListFlowDefinitions.html
   */
  ListFlowDefinitions = "sagemaker:ListFlowDefinitions",

  /**
   * List - Grants permission to return summary information about human loops, given the specified parameters
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHumanLoops.html
   */
  ListHumanLoops = "sagemaker:ListHumanLoops",

  /**
   * List - Grants permission to return summary information about human review workflow user interfaces, given the specified parameters
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHumanTaskUis.html
   */
  ListHumanTaskUis = "sagemaker:ListHumanTaskUis",

  /**
   * List - Grants permission to list hyper parameter tuning jobs
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHyperParameterTuningJobs.html
   */
  ListHyperParameterTuningJobs = "sagemaker:ListHyperParameterTuningJobs",

  /**
   * List - Grants permission to list ImageVersions that belong to a SageMaker Image
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListImageVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.image `SagemakerResource.image`} 
   */
  ListImageVersions = "sagemaker:ListImageVersions",

  /**
   * List - Grants permission to list SageMaker Images in your account
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListImages.html
   */
  ListImages = "sagemaker:ListImages",

  /**
   * List - Grants permission to list inference recommendations jobs
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListInferenceRecommendationsJobs.html
   */
  ListInferenceRecommendationsJobs = "sagemaker:ListInferenceRecommendationsJobs",

  /**
   * List - Grants permission to list labeling jobs
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLabelingJobs.html
   */
  ListLabelingJobs = "sagemaker:ListLabelingJobs",

  /**
   * List - Grants permission to list labeling jobs for workteam
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLabelingJobs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.workteam `SagemakerResource.workteam`} 
   */
  ListLabelingJobsForWorkteam = "sagemaker:ListLabelingJobsForWorkteam",

  /**
   * List - Grants permission to list lineage groups
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLineageGroups.html
   */
  ListLineageGroups = "sagemaker:ListLineageGroups",

  /**
   * List - Grants permission to list model bias job definitions
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelBiasJobDefinitions.html
   */
  ListModelBiasJobDefinitions = "sagemaker:ListModelBiasJobDefinitions",

  /**
   * List - Grants permission to list model explainability job definitions
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelExplainabilityJobDefinitions.html
   */
  ListModelExplainabilityJobDefinitions = "sagemaker:ListModelExplainabilityJobDefinitions",

  /**
   * List - Grants permission to list model metadata for inference recommendations jobs
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelMetadata.html
   */
  ListModelMetadata = "sagemaker:ListModelMetadata",

  /**
   * List - Grants permission to list ModelPackageGroups
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelPackageGroups.html
   */
  ListModelPackageGroups = "sagemaker:ListModelPackageGroups",

  /**
   * List - Grants permission to list ModelPackages
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelPackages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   */
  ListModelPackages = "sagemaker:ListModelPackages",

  /**
   * List - Grants permission to list model quality job definitions
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelQualityJobDefinitions.html
   */
  ListModelQualityJobDefinitions = "sagemaker:ListModelQualityJobDefinitions",

  /**
   * List - Grants permission to list the models created with the CreateModel API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModels.html
   */
  ListModels = "sagemaker:ListModels",

  /**
   * List - Grants permission to list monitoring executions
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListMonitoringExecutions.html
   */
  ListMonitoringExecutions = "sagemaker:ListMonitoringExecutions",

  /**
   * List - Grants permission to list monitoring schedules
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListMonitoringSchedules.html
   */
  ListMonitoringSchedules = "sagemaker:ListMonitoringSchedules",

  /**
   * List - Grants permission to list the notebook instance lifecycle configurations that can be deployed using Amazon SageMaker
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListNotebookInstanceLifecycleConfigs.html
   */
  ListNotebookInstanceLifecycleConfigs = "sagemaker:ListNotebookInstanceLifecycleConfigs",

  /**
   * List - Grants permission to list the Amazon SageMaker notebook instances in the requester's account in an AWS Region
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListNotebookInstances.html
   */
  ListNotebookInstances = "sagemaker:ListNotebookInstances",

  /**
   * List - Grants permission to list steps for a pipeline execution
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListPipelineExecutionSteps.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipelineExecution `SagemakerResource.pipelineExecution`} 
   */
  ListPipelineExecutionSteps = "sagemaker:ListPipelineExecutionSteps",

  /**
   * List - Grants permission to list executions for a pipeline
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListPipelineExecutions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipeline `SagemakerResource.pipeline`} 
   */
  ListPipelineExecutions = "sagemaker:ListPipelineExecutions",

  /**
   * List - Grants permission to list parameters for a pipeline execution
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListPipelineParametersForExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipelineExecution `SagemakerResource.pipelineExecution`} 
   */
  ListPipelineParametersForExecution = "sagemaker:ListPipelineParametersForExecution",

  /**
   * List - Grants permission to list pipelines
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListPipelines.html
   */
  ListPipelines = "sagemaker:ListPipelines",

  /**
   * List - Grants permission to list processing jobs
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListProcessingJobs.html
   */
  ListProcessingJobs = "sagemaker:ListProcessingJobs",

  /**
   * List - Grants permission to list Projects
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListProjects.html
   */
  ListProjects = "sagemaker:ListProjects",

  /**
   * List - Grants permission to list the Studio Lifecycle Configurations that can be deployed using Amazon SageMaker
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListStudioLifecycleConfigs.html
   */
  ListStudioLifecycleConfigs = "sagemaker:ListStudioLifecycleConfigs",

  /**
   * List - Grants permission to list subscribed workteams
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListSubscribedWorkteams.html
   */
  ListSubscribedWorkteams = "sagemaker:ListSubscribedWorkteams",

  /**
   * List - Grants permission to list the tag set associated with the specified resource
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTags.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.action `SagemakerResource.action`} 
   * - {@link SagemakerResource.algorithm `SagemakerResource.algorithm`} 
   * - {@link SagemakerResource.app `SagemakerResource.app`} 
   * - {@link SagemakerResource.appImageConfig `SagemakerResource.appImageConfig`} 
   * - {@link SagemakerResource.artifact `SagemakerResource.artifact`} 
   * - {@link SagemakerResource.automlJob `SagemakerResource.automlJob`} 
   * - {@link SagemakerResource.codeRepository `SagemakerResource.codeRepository`} 
   * - {@link SagemakerResource.context `SagemakerResource.context`} 
   * - {@link SagemakerResource.dataQualityJobDefinition `SagemakerResource.dataQualityJobDefinition`} 
   * - {@link SagemakerResource.device `SagemakerResource.device`} 
   * - {@link SagemakerResource.deviceFleet `SagemakerResource.deviceFleet`} 
   * - {@link SagemakerResource.domain `SagemakerResource.domain`} 
   * - {@link SagemakerResource.edgePackagingJob `SagemakerResource.edgePackagingJob`} 
   * - {@link SagemakerResource.endpoint `SagemakerResource.endpoint`} 
   * - {@link SagemakerResource.endpointConfig `SagemakerResource.endpointConfig`} 
   * - {@link SagemakerResource.experiment `SagemakerResource.experiment`} 
   * - {@link SagemakerResource.experimentTrial `SagemakerResource.experimentTrial`} 
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   * - {@link SagemakerResource.featureGroup `SagemakerResource.featureGroup`} 
   * - {@link SagemakerResource.flowDefinition `SagemakerResource.flowDefinition`} 
   * - {@link SagemakerResource.humanTaskUi `SagemakerResource.humanTaskUi`} 
   * - {@link SagemakerResource.hyperParameterTuningJob `SagemakerResource.hyperParameterTuningJob`} 
   * - {@link SagemakerResource.image `SagemakerResource.image`} 
   * - {@link SagemakerResource.labelingJob `SagemakerResource.labelingJob`} 
   * - {@link SagemakerResource.model `SagemakerResource.model`} 
   * - {@link SagemakerResource.modelBiasJobDefinition `SagemakerResource.modelBiasJobDefinition`} 
   * - {@link SagemakerResource.modelExplainabilityJobDefinition `SagemakerResource.modelExplainabilityJobDefinition`} 
   * - {@link SagemakerResource.modelPackage `SagemakerResource.modelPackage`} 
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   * - {@link SagemakerResource.modelQualityJobDefinition `SagemakerResource.modelQualityJobDefinition`} 
   * - {@link SagemakerResource.monitoringSchedule `SagemakerResource.monitoringSchedule`} 
   * - {@link SagemakerResource.notebookInstance `SagemakerResource.notebookInstance`} 
   * - {@link SagemakerResource.pipeline `SagemakerResource.pipeline`} 
   * - {@link SagemakerResource.project `SagemakerResource.project`} 
   * - {@link SagemakerResource.trainingJob `SagemakerResource.trainingJob`} 
   * - {@link SagemakerResource.transformJob `SagemakerResource.transformJob`} 
   * - {@link SagemakerResource.userProfile `SagemakerResource.userProfile`} 
   * - {@link SagemakerResource.workteam `SagemakerResource.workteam`} 
   */
  ListTags = "sagemaker:ListTags",

  /**
   * List - Grants permission to list training jobs
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrainingJobs.html
   */
  ListTrainingJobs = "sagemaker:ListTrainingJobs",

  /**
   * List - Grants permission to list training jobs for a hyper parameter tuning job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_%20ListTrainingJobsForHyperParameterTuningJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.hyperParameterTuningJob `SagemakerResource.hyperParameterTuningJob`} 
   */
  ListTrainingJobsForHyperParameterTuningJob = "sagemaker:ListTrainingJobsForHyperParameterTuningJob",

  /**
   * List - Grants permission to list transform jobs
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTransformJobs.html
   */
  ListTransformJobs = "sagemaker:ListTransformJobs",

  /**
   * List - Grants permission to list trial components
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrialComponents.html
   */
  ListTrialComponents = "sagemaker:ListTrialComponents",

  /**
   * List - Grants permission to list trials
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrials.html
   */
  ListTrials = "sagemaker:ListTrials",

  /**
   * List - Grants permission to list the UserProfiles in your account
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListUserProfiles.html
   */
  ListUserProfiles = "sagemaker:ListUserProfiles",

  /**
   * List - Grants permission to list workforces
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListWorkforces.html
   */
  ListWorkforces = "sagemaker:ListWorkforces",

  /**
   * List - Grants permission to list workteams
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListWorkteams.html
   */
  ListWorkteams = "sagemaker:ListWorkteams",

  /**
   * Write - Grants permission to put a lineage group policy
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_PutLineageGroupPolicy.html
   */
  PutLineageGroupPolicy = "sagemaker:PutLineageGroupPolicy",

  /**
   * Write - Grants permission to put a ModelPackageGroup policy
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_PutModelPackageGroupPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   */
  PutModelPackageGroupPolicy = "sagemaker:PutModelPackageGroupPolicy",

  /**
   * Write - Grants permission to put a record to a feature group
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_PutRecord.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.featureGroup `SagemakerResource.featureGroup`} 
   */
  PutRecord = "sagemaker:PutRecord",

  /**
   * List - Grants permission to explore the lineage graph
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_QueryLineage.html
   */
  QueryLineage = "sagemaker:QueryLineage",

  /**
   * Write - Grants permission to register a set of devices
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_RegisterDevices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.device `SagemakerResource.device`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RegisterDevices = "sagemaker:RegisterDevices",

  /**
   * Read - Grants permission to render a UI template used for a human annotation task
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_RenderUiTemplate.html
   */
  RenderUiTemplate = "sagemaker:RenderUiTemplate",

  /**
   * Write - Grants permission to retry a pipeline execution
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_RetryPipelineExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipelineExecution `SagemakerResource.pipelineExecution`} 
   */
  RetryPipelineExecution = "sagemaker:RetryPipelineExecution",

  /**
   * Read - Grants permission to search for SageMaker objects
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_Search.html
   */
  Search = "sagemaker:Search",

  /**
   * Write - Grants permission to publish heartbeat data from devices. After you deploy a model onto edge devices this api is used to report device status
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_SendHeartbeat.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.device `SagemakerResource.device`} 
   */
  SendHeartbeat = "sagemaker:SendHeartbeat",

  /**
   * Write - Grants permission to fail a pending callback step
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_SendPipelineExecutionStepFailure.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipelineExecution `SagemakerResource.pipelineExecution`} 
   */
  SendPipelineExecutionStepFailure = "sagemaker:SendPipelineExecutionStepFailure",

  /**
   * Write - Grants permission to succeed a pending callback step
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_SendPipelineExecutionStepSuccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipelineExecution `SagemakerResource.pipelineExecution`} 
   */
  SendPipelineExecutionStepSuccess = "sagemaker:SendPipelineExecutionStepSuccess",

  /**
   * Write - Grants permission to start a human loop
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartHumanLoop.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.flowDefinition `SagemakerResource.flowDefinition`} 
   */
  StartHumanLoop = "sagemaker:StartHumanLoop",

  /**
   * Write - Grants permission to start a monitoring schedule
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartMonitoringSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.monitoringSchedule `SagemakerResource.monitoringSchedule`} 
   */
  StartMonitoringSchedule = "sagemaker:StartMonitoringSchedule",

  /**
   * Write - Grants permission to start a notebook instance. This launches an EC2 instance with the latest version of the libraries and attaches your EBS volume
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartNotebookInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.notebookInstance `SagemakerResource.notebookInstance`} 
   */
  StartNotebookInstance = "sagemaker:StartNotebookInstance",

  /**
   * Write - Grants permission to start a pipeline execution
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartPipelineExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipeline `SagemakerResource.pipeline`} 
   */
  StartPipelineExecution = "sagemaker:StartPipelineExecution",

  /**
   * Write - Grants permission to stop a running AutoML job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopAutoMLJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.automlJob `SagemakerResource.automlJob`} 
   */
  StopAutoMLJob = "sagemaker:StopAutoMLJob",

  /**
   * Write - Grants permission to stop a compilation job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopCompilationJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.compilationJob `SagemakerResource.compilationJob`} 
   */
  StopCompilationJob = "sagemaker:StopCompilationJob",

  /**
   * Write - Grants permission to stop an edge packaging job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopEdgePackagingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.edgePackagingJob `SagemakerResource.edgePackagingJob`} 
   */
  StopEdgePackagingJob = "sagemaker:StopEdgePackagingJob",

  /**
   * Write - Grants permission to stop a specified human loop
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopHumanLoop.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.humanLoop `SagemakerResource.humanLoop`} 
   */
  StopHumanLoop = "sagemaker:StopHumanLoop",

  /**
   * Write - Grants permission to stop a running hyper parameter tuning job create via the CreateHyperParameterTuningJob
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopHyperParameterTuningJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.hyperParameterTuningJob `SagemakerResource.hyperParameterTuningJob`} 
   */
  StopHyperParameterTuningJob = "sagemaker:StopHyperParameterTuningJob",

  /**
   * Write - Grants permission to stop an inference recommendations job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopInferenceRecommendationsJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.inferenceRecommendationsJob `SagemakerResource.inferenceRecommendationsJob`} 
   */
  StopInferenceRecommendationsJob = "sagemaker:StopInferenceRecommendationsJob",

  /**
   * Write - Grants permission to stop a labeling job. Any labels already generated will be exported before stopping
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopLabelingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.labelingJob `SagemakerResource.labelingJob`} 
   */
  StopLabelingJob = "sagemaker:StopLabelingJob",

  /**
   * Write - Grants permission to stop a monitoring schedule
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopMonitoringSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.monitoringSchedule `SagemakerResource.monitoringSchedule`} 
   */
  StopMonitoringSchedule = "sagemaker:StopMonitoringSchedule",

  /**
   * Write - Grants permission to stop a notebook instance. This terminates the EC2 instance. Before terminating the instance, Amazon SageMaker disconnects the EBS volume from it. Amazon SageMaker preserves the EBS volume
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopNotebookInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.notebookInstance `SagemakerResource.notebookInstance`} 
   */
  StopNotebookInstance = "sagemaker:StopNotebookInstance",

  /**
   * Write - Grants permission to stop a pipeline execution
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopPipelineExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipelineExecution `SagemakerResource.pipelineExecution`} 
   */
  StopPipelineExecution = "sagemaker:StopPipelineExecution",

  /**
   * Write - Grants permission to stop a processing job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopProcessingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.processingJob `SagemakerResource.processingJob`} 
   */
  StopProcessingJob = "sagemaker:StopProcessingJob",

  /**
   * Write - Grants permission to stop a training job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopTrainingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.trainingJob `SagemakerResource.trainingJob`} 
   */
  StopTrainingJob = "sagemaker:StopTrainingJob",

  /**
   * Write - Grants permission to stop a transform job.  When Amazon SageMaker receives a StopTransformJob request, the status of the job changes to Stopping.  After Amazon SageMaker stops the job, the status is set to Stopped
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopTransformJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.transformJob `SagemakerResource.transformJob`} 
   */
  StopTransformJob = "sagemaker:StopTransformJob",

  /**
   * Write - Grants permission to update an action
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateAction.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.action `SagemakerResource.action`} 
   */
  UpdateAction = "sagemaker:UpdateAction",

  /**
   * Write - Grants permission to update an AppImageConfig
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateAppImageConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.appImageConfig `SagemakerResource.appImageConfig`} 
   */
  UpdateAppImageConfig = "sagemaker:UpdateAppImageConfig",

  /**
   * Write - Grants permission to update an artifact
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.artifact `SagemakerResource.artifact`} 
   */
  UpdateArtifact = "sagemaker:UpdateArtifact",

  /**
   * Write - Grants permission to update a CodeRepository
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateCodeRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.codeRepository `SagemakerResource.codeRepository`} 
   */
  UpdateCodeRepository = "sagemaker:UpdateCodeRepository",

  /**
   * Write - Grants permission to update a context
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateContext.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.context `SagemakerResource.context`} 
   */
  UpdateContext = "sagemaker:UpdateContext",

  /**
   * Write - Grants permission to update a device fleet
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateDeviceFleet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.deviceFleet `SagemakerResource.deviceFleet`} 
   */
  UpdateDeviceFleet = "sagemaker:UpdateDeviceFleet",

  /**
   * Write - Grants permission to update a set of devices
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateDevices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.device `SagemakerResource.device`} 
   */
  UpdateDevices = "sagemaker:UpdateDevices",

  /**
   * Write - Grants permission to update a Domain
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.domain `SagemakerResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:DomainSharingOutputKmsKey`: Filters access by the Domain sharing output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:ImageArns`: Filters access by the list of all image arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ImageVersionArns`: Filters access by the list of all image version arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateDomain = "sagemaker:UpdateDomain",

  /**
   * Write - Grants permission to update an endpoint to use the endpoint configuration specified in the request
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.endpoint `SagemakerResource.endpoint`} 
   */
  UpdateEndpoint = "sagemaker:UpdateEndpoint",

  /**
   * Write - Grants permission to update variant weight, capacity, or both of one or more variants associated with an endpoint
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpointWeightsAndCapacities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.endpoint `SagemakerResource.endpoint`} 
   */
  UpdateEndpointWeightsAndCapacities = "sagemaker:UpdateEndpointWeightsAndCapacities",

  /**
   * Write - Grants permission to update an experiment
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateExperiment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experiment `SagemakerResource.experiment`} 
   */
  UpdateExperiment = "sagemaker:UpdateExperiment",

  /**
   * Write - Grants permission to update the properties of a SageMaker Image
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateImage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.image `SagemakerResource.image`} 
   */
  UpdateImage = "sagemaker:UpdateImage",

  /**
   * Write - Grants permission to update a ModelPackage
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateModelPackage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.modelPackage `SagemakerResource.modelPackage`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `sagemaker:ModelApprovalStatus`: Filters access by the model approval status with the model-package in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateModelPackage = "sagemaker:UpdateModelPackage",

  /**
   * Write - Grants permission to update a monitoring schedule
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateMonitoringSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.monitoringSchedule `SagemakerResource.monitoringSchedule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:MaxRuntimeInSeconds`: Filters access by the max runtime in seconds associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:NetworkIsolation`: Filters access by the network isolation associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InterContainerTrafficEncryption`: Filters access by the inter container traffic encryption associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   */
  UpdateMonitoringSchedule = "sagemaker:UpdateMonitoringSchedule",

  /**
   * Write - Grants permission to update a notebook instance. Notebook instance updates include upgrading or downgrading the EC2 instance used for your notebook instance to accommodate changes in your workload requirements. You can also update the VPC security groups
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateNotebookInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.notebookInstance `SagemakerResource.notebookInstance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `sagemaker:AcceleratorTypes`: Filters access by the list of all accelerator types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:RootAccess`: Filters access by the root access associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateNotebookInstance = "sagemaker:UpdateNotebookInstance",

  /**
   * Write - Grants permission to updates a notebook instance lifecycle configuration created with the CreateNotebookInstanceLifecycleConfig API
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_%20UpdateNotebookInstanceLifecycleConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.notebookInstanceLifecycleConfig `SagemakerResource.notebookInstanceLifecycleConfig`} 
   */
  UpdateNotebookInstanceLifecycleConfig = "sagemaker:UpdateNotebookInstanceLifecycleConfig",

  /**
   * Write - Grants permission to update a pipeline
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdatePipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipeline `SagemakerResource.pipeline`} 
   */
  UpdatePipeline = "sagemaker:UpdatePipeline",

  /**
   * Write - Grants permission to update a pipeline execution
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdatePipelineExecution.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.pipelineExecution `SagemakerResource.pipelineExecution`} 
   */
  UpdatePipelineExecution = "sagemaker:UpdatePipelineExecution",

  /**
   * Write - Grants permission to update a Project
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateProject.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.project `SagemakerResource.project`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateProject = "sagemaker:UpdateProject",

  /**
   * Write - Grants permission to update a training job
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrainingJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.trainingJob `SagemakerResource.trainingJob`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateTrainingJob = "sagemaker:UpdateTrainingJob",

  /**
   * Write - Grants permission to update a trial
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrial.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experimentTrial `SagemakerResource.experimentTrial`} 
   */
  UpdateTrial = "sagemaker:UpdateTrial",

  /**
   * Write - Grants permission to update a trial component
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrialComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   */
  UpdateTrialComponent = "sagemaker:UpdateTrialComponent",

  /**
   * Write - Grants permission to update a UserProfile
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateUserProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.userProfile `SagemakerResource.userProfile`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:DomainSharingOutputKmsKey`: Filters access by the Domain sharing output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:ImageArns`: Filters access by the list of all image arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ImageVersionArns`: Filters access by the list of all image version arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateUserProfile = "sagemaker:UpdateUserProfile",

  /**
   * Write - Grants permission to update a workforce
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateWorkforce.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.workforce `SagemakerResource.workforce`} 
   */
  UpdateWorkforce = "sagemaker:UpdateWorkforce",

  /**
   * Write - Grants permission to update a workteam
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateWorkteam.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.workteam `SagemakerResource.workteam`} 
   */
  UpdateWorkteam = "sagemaker:UpdateWorkteam",

  /**
   * * - Grant all sagemaker permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemaker.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link SagemakerResource.action `SagemakerResource.action`} 
   * - {@link SagemakerResource.artifact `SagemakerResource.artifact`} 
   * - {@link SagemakerResource.context `SagemakerResource.context`} 
   * - {@link SagemakerResource.experiment `SagemakerResource.experiment`} 
   * - {@link SagemakerResource.experimentTrialComponent `SagemakerResource.experimentTrialComponent`} 
   * - {@link SagemakerResource.algorithm `SagemakerResource.algorithm`} 
   * - {@link SagemakerResource.app `SagemakerResource.app`} 
   * - {@link SagemakerResource.appImageConfig `SagemakerResource.appImageConfig`} 
   * - {@link SagemakerResource.automlJob `SagemakerResource.automlJob`} 
   * - {@link SagemakerResource.codeRepository `SagemakerResource.codeRepository`} 
   * - {@link SagemakerResource.dataQualityJobDefinition `SagemakerResource.dataQualityJobDefinition`} 
   * - {@link SagemakerResource.device `SagemakerResource.device`} 
   * - {@link SagemakerResource.deviceFleet `SagemakerResource.deviceFleet`} 
   * - {@link SagemakerResource.domain `SagemakerResource.domain`} 
   * - {@link SagemakerResource.edgePackagingJob `SagemakerResource.edgePackagingJob`} 
   * - {@link SagemakerResource.endpoint `SagemakerResource.endpoint`} 
   * - {@link SagemakerResource.endpointConfig `SagemakerResource.endpointConfig`} 
   * - {@link SagemakerResource.experimentTrial `SagemakerResource.experimentTrial`} 
   * - {@link SagemakerResource.featureGroup `SagemakerResource.featureGroup`} 
   * - {@link SagemakerResource.flowDefinition `SagemakerResource.flowDefinition`} 
   * - {@link SagemakerResource.humanTaskUi `SagemakerResource.humanTaskUi`} 
   * - {@link SagemakerResource.hyperParameterTuningJob `SagemakerResource.hyperParameterTuningJob`} 
   * - {@link SagemakerResource.image `SagemakerResource.image`} 
   * - {@link SagemakerResource.inferenceRecommendationsJob `SagemakerResource.inferenceRecommendationsJob`} 
   * - {@link SagemakerResource.labelingJob `SagemakerResource.labelingJob`} 
   * - {@link SagemakerResource.model `SagemakerResource.model`} 
   * - {@link SagemakerResource.modelBiasJobDefinition `SagemakerResource.modelBiasJobDefinition`} 
   * - {@link SagemakerResource.modelExplainabilityJobDefinition `SagemakerResource.modelExplainabilityJobDefinition`} 
   * - {@link SagemakerResource.modelPackage `SagemakerResource.modelPackage`} 
   * - {@link SagemakerResource.modelPackageGroup `SagemakerResource.modelPackageGroup`} 
   * - {@link SagemakerResource.modelQualityJobDefinition `SagemakerResource.modelQualityJobDefinition`} 
   * - {@link SagemakerResource.monitoringSchedule `SagemakerResource.monitoringSchedule`} 
   * - {@link SagemakerResource.notebookInstance `SagemakerResource.notebookInstance`} 
   * - {@link SagemakerResource.pipeline `SagemakerResource.pipeline`} 
   * - {@link SagemakerResource.processingJob `SagemakerResource.processingJob`} 
   * - {@link SagemakerResource.project `SagemakerResource.project`} 
   * - {@link SagemakerResource.trainingJob `SagemakerResource.trainingJob`} 
   * - {@link SagemakerResource.transformJob `SagemakerResource.transformJob`} 
   * - {@link SagemakerResource.userProfile `SagemakerResource.userProfile`} 
   * - {@link SagemakerResource.workteam `SagemakerResource.workteam`} 
   * - {@link SagemakerResource.compilationJob `SagemakerResource.compilationJob`} 
   * - {@link SagemakerResource.notebookInstanceLifecycleConfig `SagemakerResource.notebookInstanceLifecycleConfig`} 
   * - {@link SagemakerResource.studioLifecycleConfig `SagemakerResource.studioLifecycleConfig`} 
   * - {@link SagemakerResource.workforce `SagemakerResource.workforce`} 
   * - {@link SagemakerResource.humanLoop `SagemakerResource.humanLoop`} 
   * - {@link SagemakerResource.imageVersion `SagemakerResource.imageVersion`} 
   * - {@link SagemakerResource.pipelineExecution `SagemakerResource.pipelineExecution`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the SageMaker service ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InstanceTypes`: Filters access by the list of all instance types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ImageArns`: Filters access by the list of all image arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ImageVersionArns`: Filters access by the list of all image version arns associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:InterContainerTrafficEncryption`: Filters access by the inter container traffic encryption associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:OutputKmsKey`: Filters access by the output kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VolumeKmsKey`: Filters access by the volume kms key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:VpcSecurityGroupIds`: Filters access by the list of all VPC security group ids associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:VpcSubnets`: Filters access by the list of all VPC subnets associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:MaxRuntimeInSeconds`: Filters access by the max runtime in seconds associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:NetworkIsolation`: Filters access by the network isolation associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Bool `Bool`})
   * - `sagemaker:AppNetworkAccessType`: Filters access by the app network access type associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:DomainSharingOutputKmsKey`: Filters access by the Domain sharing output KMS key associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:AcceleratorTypes`: Filters access by the list of all accelerator types associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `sagemaker:ModelArn`: Filters access by the model arn associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:ServerlessMaxConcurrency`: Filters access by limiting maximum concurrency used for Serverless inference in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:ServerlessMemorySize`: Filters access by limiting memory size used for Serverless inference in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   * - `sagemaker:FeatureGroupOnlineStoreKmsKey`: Filters access by the online store kms key associated with the feature group resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:FeatureGroupOfflineStoreKmsKey`: Filters access by the offline store kms key associated with the feature group resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:FeatureGroupOfflineStoreS3Uri`: Filters access by the offline store s3 uri associated with the feature group resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:WorkteamArn`: Filters access by the workteam arn associated to the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `sagemaker:WorkteamType`: Filters access by the workteam type associated to the request. This can be public-crowd, private-crowd or vendor-crowd ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:FileSystemAccessMode`: Filters access by a file system access mode associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:FileSystemDirectoryPath`: Filters access by a file system directory path associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:FileSystemId`: Filters access by a file system ID associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:FileSystemType`: Filters access by a file system type associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ModelApprovalStatus`: Filters access by the model approval status with the model-package in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:DirectInternetAccess`: Filters access by the direct internet access associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:RootAccess`: Filters access by the root access associated with the resource in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:TargetModel`: Filters access by the target model associated with the Multi-Model Endpoint in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "sagemaker:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemaker.html
 */
export const SagemakerResource = {

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/neo-edge-devices.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  device: (options: Partial<{partition: string, region: string, account: string, deviceFleetName: string, deviceName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:device-fleet/${options.deviceFleetName || '*'}/device/${options.deviceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/edge-device-fleet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  deviceFleet: (options: Partial<{partition: string, region: string, account: string, deviceFleetName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:device-fleet/${options.deviceFleetName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/edge-packaging-job.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  edgePackagingJob: (options: Partial<{partition: string, region: string, account: string, edgePackagingJobName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:edge-packaging-job/${options.edgePackagingJobName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-start-human-loop.html
   */
  humanLoop: (options: Partial<{partition: string, region: string, account: string, humanLoopName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:human-loop/${options.humanLoopName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-create-flow-definition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  flowDefinition: (options: Partial<{partition: string, region: string, account: string, flowDefinitionName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:flow-definition/${options.flowDefinitionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-instructions-overview.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  humanTaskUi: (options: Partial<{partition: string, region: string, account: string, humanTaskUiName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:human-task-ui/${options.humanTaskUiName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/inference-recommendations-job
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  inferenceRecommendationsJob: (options: Partial<{partition: string, region: string, account: string, inferenceRecommendationsJobName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:inference-recommendations-job/${options.inferenceRecommendationsJobName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/sms.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  labelingJob: (options: Partial<{partition: string, region: string, account: string, labelingJobName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:labeling-job/${options.labelingJobName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-management.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workteam: (options: Partial<{partition: string, region: string, account: string, workteamName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:workteam/${options.workteamName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-management.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  workforce: (options: Partial<{partition: string, region: string, account: string, workforceName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:workforce/${options.workforceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/studio-entity-status.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  domain: (options: Partial<{partition: string, region: string, account: string, domainId: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:domain/${options.domainId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/studio-entity-status.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  userProfile: (options: Partial<{partition: string, region: string, account: string, domainId: string, userProfileName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:user-profile/${options.domainId || '*'}/${options.userProfileName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/studio-entity-status.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  app: (options: Partial<{partition: string, region: string, account: string, domainId: string, userProfileName: string, appType: string, appName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:app/${options.domainId || '*'}/${options.userProfileName || '*'}/${options.appType || '*'}/${options.appName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi-sdk-create-image.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  appImageConfig: (options: Partial<{partition: string, region: string, account: string, appImageConfigName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:app-image-config/${options.appImageConfigName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/studio-lcc.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  studioLifecycleConfig: (options: Partial<{partition: string, region: string, account: string, studioLifecycleConfigName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:studio-lifecycle-config/${options.studioLifecycleConfigName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/nbi.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  notebookInstance: (options: Partial<{partition: string, region: string, account: string, notebookInstanceName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:notebook-instance/${options.notebookInstanceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html
   */
  notebookInstanceLifecycleConfig: (options: Partial<{partition: string, region: string, account: string, notebookInstanceLifecycleConfigName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:notebook-instance-lifecycle-config/${options.notebookInstanceLifecycleConfigName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  codeRepository: (options: Partial<{partition: string, region: string, account: string, codeRepositoryName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:code-repository/${options.codeRepositoryName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  image: (options: Partial<{partition: string, region: string, account: string, imageName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:image/${options.imageName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html
   */
  imageVersion: (options: Partial<{partition: string, region: string, account: string, imageName: string, version: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:image-version/${options.imageName || '*'}/${options.version || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/algorithms-choose.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  algorithm: (options: Partial<{partition: string, region: string, account: string, algorithmName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:algorithm/${options.algorithmName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-training.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  trainingJob: (options: Partial<{partition: string, region: string, account: string, trainingJobName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:training-job/${options.trainingJobName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  processingJob: (options: Partial<{partition: string, region: string, account: string, processingJobName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:processing-job/${options.processingJobName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  hyperParameterTuningJob: (options: Partial<{partition: string, region: string, account: string, hyperParameterTuningJobName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:hyper-parameter-tuning-job/${options.hyperParameterTuningJobName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-projects-whatis.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  project: (options: Partial<{partition: string, region: string, account: string, projectName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:project/${options.projectName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ModelPackage.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  modelPackage: (options: Partial<{partition: string, region: string, account: string, modelPackageName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:model-package/${options.modelPackageName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-model-group.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  modelPackageGroup: (options: Partial<{partition: string, region: string, account: string, modelPackageGroupName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:model-package-group/${options.modelPackageGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  model: (options: Partial<{partition: string, region: string, account: string, modelName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:model/${options.modelName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  endpointConfig: (options: Partial<{partition: string, region: string, account: string, endpointConfigName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:endpoint-config/${options.endpointConfigName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  endpoint: (options: Partial<{partition: string, region: string, account: string, endpointName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:endpoint/${options.endpointName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TransformJob.html.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  transformJob: (options: Partial<{partition: string, region: string, account: string, transformJobName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:transform-job/${options.transformJobName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CompilationJobSummary.html
   */
  compilationJob: (options: Partial<{partition: string, region: string, account: string, compilationJobName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:compilation-job/${options.compilationJobName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  automlJob: (options: Partial<{partition: string, region: string, account: string, autoMLJobJobName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:automl-job/${options.autoMLJobJobName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-scheduling.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  monitoringSchedule: (options: Partial<{partition: string, region: string, account: string, monitoringScheduleName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:monitoring-schedule/${options.monitoringScheduleName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-quality.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  dataQualityJobDefinition: (options: Partial<{partition: string, region: string, account: string, dataQualityJobDefinitionName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:data-quality-job-definition/${options.dataQualityJobDefinitionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  modelQualityJobDefinition: (options: Partial<{partition: string, region: string, account: string, modelQualityJobDefinitionName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:model-quality-job-definition/${options.modelQualityJobDefinitionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-detect-post-training-bias.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  modelBiasJobDefinition: (options: Partial<{partition: string, region: string, account: string, modelBiasJobDefinitionName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:model-bias-job-definition/${options.modelBiasJobDefinitionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-model-explainability.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  modelExplainabilityJobDefinition: (options: Partial<{partition: string, region: string, account: string, modelExplainabilityJobDefinitionName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:model-explainability-job-definition/${options.modelExplainabilityJobDefinitionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Experiment.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  experiment: (options: Partial<{partition: string, region: string, account: string, experimentName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:experiment/${options.experimentName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Trial.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  experimentTrial: (options: Partial<{partition: string, region: string, account: string, trialName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:experiment-trial/${options.trialName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrialComponent.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  experimentTrialComponent: (options: Partial<{partition: string, region: string, account: string, trialComponentName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:experiment-trial-component/${options.trialComponentName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  featureGroup: (options: Partial<{partition: string, region: string, account: string, featureGroupName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:feature-group/${options.featureGroupName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Pipeline.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  pipeline: (options: Partial<{partition: string, region: string, account: string, pipelineName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:pipeline/${options.pipelineName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_PipelineExecution.html
   */
  pipelineExecution: (options: Partial<{partition: string, region: string, account: string, pipelineName: string, randomString: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:pipeline/${options.pipelineName || '*'}/execution/${options.randomString || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ArtifactSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  artifact: (options: Partial<{partition: string, region: string, account: string, hashOfArtifactSource: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:artifact/${options.hashOfArtifactSource || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContextSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  context: (options: Partial<{partition: string, region: string, account: string, contextName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:context/${options.contextName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ActionSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  action: (options: Partial<{partition: string, region: string, account: string, actionName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:action/${options.actionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_LineageGroupSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `sagemaker:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  lineageGroup: (options: Partial<{partition: string, region: string, account: string, lineageGroupName: string}> = {}) => `arn:${options.partition || '*'}:sagemaker:${options.region || '*'}:${options.account || '*'}:lineage-group/${options.lineageGroupName || '*'}`,
}

