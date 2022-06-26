/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapprunner.html
 */
export enum ApprunnerAction {

  /**
   * Write - Grants permission to associate your own domain name with the AWS App Runner subdomain URL of your App Runner service
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   */
  AssociateCustomDomain = "apprunner:AssociateCustomDomain",

  /**
   * Write - Grants permission to create an AWS App Runner automatic scaling configuration resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_CreateAutoScalingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.autoscalingconfiguration `ApprunnerResource.autoscalingconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAutoScalingConfiguration = "apprunner:CreateAutoScalingConfiguration",

  /**
   * Write - Grants permission to create an AWS App Runner connection resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_CreateConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.connection `ApprunnerResource.connection`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateConnection = "apprunner:CreateConnection",

  /**
   * Write - Grants permission to create an AWS App Runner observability configuration resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_CreateObservabilityConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.observabilityconfiguration `ApprunnerResource.observabilityconfiguration`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateObservabilityConfiguration = "apprunner:CreateObservabilityConfiguration",

  /**
   * Write - Grants permission to create an AWS App Runner service resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   * - {@link ApprunnerResource.autoscalingconfiguration `ApprunnerResource.autoscalingconfiguration`} 
   * - {@link ApprunnerResource.connection `ApprunnerResource.connection`} 
   * - {@link ApprunnerResource.observabilityconfiguration `ApprunnerResource.observabilityconfiguration`} 
   * - {@link ApprunnerResource.vpcconnector `ApprunnerResource.vpcconnector`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apprunner:ConnectionArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated Connection resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `apprunner:AutoScalingConfigurationArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated AutoScalingConfiguration resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `apprunner:ObservabilityConfigurationArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated ObservabilityConfiguration resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `apprunner:VpcConnectorArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated VpcConnector resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  CreateService = "apprunner:CreateService",

  /**
   * Write - Grants permission to create an AWS App Runner VPC connector resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_CreateVpcConnector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.vpcconnector `ApprunnerResource.vpcconnector`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateVpcConnector = "apprunner:CreateVpcConnector",

  /**
   * Write - Grants permission to delete an AWS App Runner automatic scaling configuration resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteAutoScalingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.autoscalingconfiguration `ApprunnerResource.autoscalingconfiguration`} 
   */
  DeleteAutoScalingConfiguration = "apprunner:DeleteAutoScalingConfiguration",

  /**
   * Write - Grants permission to delete an AWS App Runner connection resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.connection `ApprunnerResource.connection`} 
   */
  DeleteConnection = "apprunner:DeleteConnection",

  /**
   * Write - Grants permission to delete an AWS App Runner observability configuration resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteObservabilityConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.observabilityconfiguration `ApprunnerResource.observabilityconfiguration`} 
   */
  DeleteObservabilityConfiguration = "apprunner:DeleteObservabilityConfiguration",

  /**
   * Write - Grants permission to delete an AWS App Runner service resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   */
  DeleteService = "apprunner:DeleteService",

  /**
   * Write - Grants permission to delete an AWS App Runner VPC connector resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteVpcConnector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.vpcconnector `ApprunnerResource.vpcconnector`} 
   */
  DeleteVpcConnector = "apprunner:DeleteVpcConnector",

  /**
   * Read - Grants permission to retrieve the description of an AWS App Runner automatic scaling configuration resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeAutoScalingConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.autoscalingconfiguration `ApprunnerResource.autoscalingconfiguration`} 
   */
  DescribeAutoScalingConfiguration = "apprunner:DescribeAutoScalingConfiguration",

  /**
   * Read - Grants permission to retrieve descriptions of custom domain names associated with an AWS App Runner service
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeCustomDomains.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   */
  DescribeCustomDomains = "apprunner:DescribeCustomDomains",

  /**
   * Read - Grants permission to retrieve the description of an AWS App Runner observability configuration resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeObservabilityConfiguration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.observabilityconfiguration `ApprunnerResource.observabilityconfiguration`} 
   */
  DescribeObservabilityConfiguration = "apprunner:DescribeObservabilityConfiguration",

  /**
   * Read - Grants permission to retrieve the description of an operation that occurred on an AWS App Runner service
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeOperation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   */
  DescribeOperation = "apprunner:DescribeOperation",

  /**
   * Read - Grants permission to retrieve the description of an AWS App Runner service resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   */
  DescribeService = "apprunner:DescribeService",

  /**
   * Read - Grants permission to retrieve the description of an AWS App Runner VPC connector resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeVpcConnector.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.vpcconnector `ApprunnerResource.vpcconnector`} 
   */
  DescribeVpcConnector = "apprunner:DescribeVpcConnector",

  /**
   * Write - Grants permission to disassociate a custom domain name from an AWS App Runner service
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_DisassociateCustomDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   */
  DisassociateCustomDomain = "apprunner:DisassociateCustomDomain",

  /**
   * List - Grants permission to retrieve a list of AWS App Runner automatic scaling configurations in your AWS account
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_ListAutoScalingConfigurations.html
   */
  ListAutoScalingConfigurations = "apprunner:ListAutoScalingConfigurations",

  /**
   * List - Grants permission to retrieve a list of AWS App Runner connections in your AWS account
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_ListConnections.html
   */
  ListConnections = "apprunner:ListConnections",

  /**
   * List - Grants permission to retrieve a list of AWS App Runner observability configurations in your AWS account
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_ListObservabilityConfigurations.html
   */
  ListObservabilityConfigurations = "apprunner:ListObservabilityConfigurations",

  /**
   * List - Grants permission to retrieve a list of operations that occurred on an AWS App Runner service resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   */
  ListOperations = "apprunner:ListOperations",

  /**
   * List - Grants permission to retrieve a list of running AWS App Runner services in your AWS account
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html
   */
  ListServices = "apprunner:ListServices",

  /**
   * Read - Grants permission to list tags associated with an AWS App Runner resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.autoscalingconfiguration `ApprunnerResource.autoscalingconfiguration`} 
   * - {@link ApprunnerResource.connection `ApprunnerResource.connection`} 
   * - {@link ApprunnerResource.observabilityconfiguration `ApprunnerResource.observabilityconfiguration`} 
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   * - {@link ApprunnerResource.vpcconnector `ApprunnerResource.vpcconnector`} 
   */
  ListTagsForResource = "apprunner:ListTagsForResource",

  /**
   * List - Grants permission to retrieve a list of AWS App Runner VPC connectors in your AWS account
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_ListVpcConnectors.html
   */
  ListVpcConnectors = "apprunner:ListVpcConnectors",

  /**
   * Write - Grants permission to pause an active AWS App Runner service
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_PauseService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   */
  PauseService = "apprunner:PauseService",

  /**
   * Write - Grants permission to resume an active AWS App Runner service
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_ResumeService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   */
  ResumeService = "apprunner:ResumeService",

  /**
   * Write - Grants permission to initiate a manual deployemnt to an AWS App Runner service
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_StartDeployment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   */
  StartDeployment = "apprunner:StartDeployment",

  /**
   * Tagging - Grants permission to add tags to, or update tag values of, an AWS App Runner resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.autoscalingconfiguration `ApprunnerResource.autoscalingconfiguration`} 
   * - {@link ApprunnerResource.connection `ApprunnerResource.connection`} 
   * - {@link ApprunnerResource.observabilityconfiguration `ApprunnerResource.observabilityconfiguration`} 
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   * - {@link ApprunnerResource.vpcconnector `ApprunnerResource.vpcconnector`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "apprunner:TagResource",

  /**
   * Tagging - Grants permission to remove tags from an AWS App Runner resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.autoscalingconfiguration `ApprunnerResource.autoscalingconfiguration`} 
   * - {@link ApprunnerResource.connection `ApprunnerResource.connection`} 
   * - {@link ApprunnerResource.observabilityconfiguration `ApprunnerResource.observabilityconfiguration`} 
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   * - {@link ApprunnerResource.vpcconnector `ApprunnerResource.vpcconnector`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "apprunner:UntagResource",

  /**
   * Write - Grants permission to update an AWS App Runner service resource
   * @see https://docs.aws.amazon.com/apprunner/latest/api/API_UpdateService.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   * - {@link ApprunnerResource.autoscalingconfiguration `ApprunnerResource.autoscalingconfiguration`} 
   * - {@link ApprunnerResource.connection `ApprunnerResource.connection`} 
   * - {@link ApprunnerResource.observabilityconfiguration `ApprunnerResource.observabilityconfiguration`} 
   * - {@link ApprunnerResource.vpcconnector `ApprunnerResource.vpcconnector`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `apprunner:ConnectionArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated Connection resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `apprunner:AutoScalingConfigurationArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated AutoScalingConfiguration resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `apprunner:ObservabilityConfigurationArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated ObservabilityConfiguration resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `apprunner:VpcConnectorArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated VpcConnector resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  UpdateService = "apprunner:UpdateService",

  /**
   * * - Grant all apprunner permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapprunner.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ApprunnerResource.service `ApprunnerResource.service`} 
   * - {@link ApprunnerResource.autoscalingconfiguration `ApprunnerResource.autoscalingconfiguration`} 
   * - {@link ApprunnerResource.connection `ApprunnerResource.connection`} 
   * - {@link ApprunnerResource.observabilityconfiguration `ApprunnerResource.observabilityconfiguration`} 
   * - {@link ApprunnerResource.vpcconnector `ApprunnerResource.vpcconnector`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `apprunner:ConnectionArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated Connection resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `apprunner:AutoScalingConfigurationArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated AutoScalingConfiguration resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `apprunner:ObservabilityConfigurationArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated ObservabilityConfiguration resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `apprunner:VpcConnectorArn`: Filters access by the CreateService and UpdateService actions based on the ARN of an associated VpcConnector resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  All = "apprunner:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapprunner.html
 */
export const ApprunnerResource = {

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Darchitecture.html#architecture.resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  service: (options: Partial<{partition: string, region: string, account: string, serviceName: string, serviceId: string}> = {}) => `arn:${options.partition || '*'}:apprunner:${options.region || '*'}:${options.account || '*'}:service/${options.serviceName || '*'}/${options.serviceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Darchitecture.html#architecture.resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  connection: (options: Partial<{partition: string, region: string, account: string, connectionName: string, connectionId: string}> = {}) => `arn:${options.partition || '*'}:apprunner:${options.region || '*'}:${options.account || '*'}:connection/${options.connectionName || '*'}/${options.connectionId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Darchitecture.html#architecture.resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  autoscalingconfiguration: (options: Partial<{partition: string, region: string, account: string, autoscalingConfigurationName: string, autoscalingConfigurationVersion: string, autoscalingConfigurationId: string}> = {}) => `arn:${options.partition || '*'}:apprunner:${options.region || '*'}:${options.account || '*'}:autoscalingconfiguration/${options.autoscalingConfigurationName || '*'}/${options.autoscalingConfigurationVersion || '*'}/${options.autoscalingConfigurationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Darchitecture.html#architecture.resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  observabilityconfiguration: (options: Partial<{partition: string, region: string, account: string, observabilityConfigurationName: string, observabilityConfigurationVersion: string, observabilityConfigurationId: string}> = {}) => `arn:${options.partition || '*'}:apprunner:${options.region || '*'}:${options.account || '*'}:observabilityconfiguration/${options.observabilityConfigurationName || '*'}/${options.observabilityConfigurationVersion || '*'}/${options.observabilityConfigurationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Darchitecture.html#architecture.resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/$%7BUserGuideDocPage%7Dsecurity_iam_service-with-iam.html#security_iam_service-with-iam-resource-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  vpcconnector: (options: Partial<{partition: string, region: string, account: string, vpcConnectorName: string, vpcConnectorVersion: string, vpcConnectorId: string}> = {}) => `arn:${options.partition || '*'}:apprunner:${options.region || '*'}:${options.account || '*'}:vpcconnector/${options.vpcConnectorName || '*'}/${options.vpcConnectorVersion || '*'}/${options.vpcConnectorId || '*'}`,
}

