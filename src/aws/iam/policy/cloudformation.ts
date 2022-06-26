/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudcontrolapi.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudformation.html
 */
export enum CloudformationAction {

  /**
   * Write - Grants permission to cancel resource requests in your account
   * @see https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_CancelResourceRequest.html
   */
  CancelResourceRequest = "cloudformation:CancelResourceRequest",

  /**
   * Write - Grants permission to create resources in your account
   * @see https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_CreateResource.html
   */
  CreateResource = "cloudformation:CreateResource",

  /**
   * Write - Grants permission to delete resources in your account
   * @see https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_DeleteResource.html
   */
  DeleteResource = "cloudformation:DeleteResource",

  /**
   * Read - Grants permission to get resources in your account
   * @see https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResource.html
   */
  GetResource = "cloudformation:GetResource",

  /**
   * Read - Grants permission to get resource requests in your account
   * @see https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html
   */
  GetResourceRequestStatus = "cloudformation:GetResourceRequestStatus",

  /**
   * Read - Grants permission to list resource requests in your account
   * @see https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_ListResourceRequests.html
   */
  ListResourceRequests = "cloudformation:ListResourceRequests",

  /**
   * Read - Grants permission to list resources in your account
   * @see https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_ListResources.html
   */
  ListResources = "cloudformation:ListResources",

  /**
   * Write - Grants permission to update resources in your account
   * @see https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_UpdateResource.html
   */
  UpdateResource = "cloudformation:UpdateResource",

  /**
   * Write - Grants permission to activate a public third-party extension, making it available for use in stack templates
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html
   */
  ActivateType = "cloudformation:ActivateType",

  /**
   * Read - Grants permission to return configuration data for the specified CloudFormation extensions
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_BatchDescribeTypeConfigurations.html
   */
  BatchDescribeTypeConfigurations = "cloudformation:BatchDescribeTypeConfigurations",

  /**
   * Write - Grants permission to cancel an update on the specified stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  CancelUpdateStack = "cloudformation:CancelUpdateStack",

  /**
   * Write - Grants permission to continue rolling back a stack that is in the UPDATE_ROLLBACK_FAILED state to the UPDATE_ROLLBACK_COMPLETE state
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:RoleArn`: Filters access by the ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  ContinueUpdateRollback = "cloudformation:ContinueUpdateRollback",

  /**
   * Write - Grants permission to create a list of changes for a stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:ChangeSetName`: Filters access by an AWS CloudFormation change set name. Use to control which change sets IAM users can execute or delete ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:ResourceTypes`: Filters access by the template resource types, such as AWS::EC2::Instance. Use to control which resource types IAM users can work with when they create or update a stack ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:ImportResourceTypes`: Filters access by the template resource types, such as AWS::EC2::Instance. Use to control which resource types IAM users can work with when they want to import a resource into a stack ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:RoleArn`: Filters access by the ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `cloudformation:StackPolicyUrl`: Filters access by an Amazon S3 stack policy URL. Use to control which stack policies IAM users can associate with a stack during a create or update stack action ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:TemplateUrl`: Filters access by an Amazon S3 template URL. Use to control which templates IAM users can use when they create or update stacks ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateChangeSet = "cloudformation:CreateChangeSet",

  /**
   * Write - Grants permission to create a stack as specified in the template
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:ResourceTypes`: Filters access by the template resource types, such as AWS::EC2::Instance. Use to control which resource types IAM users can work with when they create or update a stack ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:RoleArn`: Filters access by the ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `cloudformation:StackPolicyUrl`: Filters access by an Amazon S3 stack policy URL. Use to control which stack policies IAM users can associate with a stack during a create or update stack action ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:TemplateUrl`: Filters access by an Amazon S3 template URL. Use to control which templates IAM users can use when they create or update stacks ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateStack = "cloudformation:CreateStack",

  /**
   * Write - Grants permission to create stack instances for the specified accounts, within the specified regions
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   * - {@link CloudformationResource.stacksetTarget `CloudformationResource.stacksetTarget`} 
   * - {@link CloudformationResource.type `CloudformationResource.type`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:TargetRegion`: Filters access by stack set target region. Use to control which regions IAM users can use when they create or update stack sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateStackInstances = "cloudformation:CreateStackInstances",

  /**
   * Write - Grants permission to create a stackset as specified in the template
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackSet.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:RoleArn`: Filters access by the ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `cloudformation:TemplateUrl`: Filters access by an Amazon S3 template URL. Use to control which templates IAM users can use when they create or update stacks ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateStackSet = "cloudformation:CreateStackSet",

  /**
   * Write - Grants permission to upload templates to Amazon S3 buckets. Used only by the AWS CloudFormation console and is not documented in the API reference
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html
   */
  CreateUploadBucket = "cloudformation:CreateUploadBucket",

  /**
   * Write - Grants permission to deactivate a public extension that was previously activated in this account and region
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeactivateType.html
   */
  DeactivateType = "cloudformation:DeactivateType",

  /**
   * Write - Grants permission to delete the specified change set. Deleting change sets ensures that no one executes the wrong change set
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteChangeSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:ChangeSetName`: Filters access by an AWS CloudFormation change set name. Use to control which change sets IAM users can execute or delete ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteChangeSet = "cloudformation:DeleteChangeSet",

  /**
   * Write - Grants permission to delete a specified stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:RoleArn`: Filters access by the ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  DeleteStack = "cloudformation:DeleteStack",

  /**
   * Write - Grants permission to delete stack instances for the specified accounts, in the specified regions
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   * - {@link CloudformationResource.stacksetTarget `CloudformationResource.stacksetTarget`} 
   * - {@link CloudformationResource.type `CloudformationResource.type`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:TargetRegion`: Filters access by stack set target region. Use to control which regions IAM users can use when they create or update stack sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteStackInstances = "cloudformation:DeleteStackInstances",

  /**
   * Write - Grants permission to delete a specified stackset
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  DeleteStackSet = "cloudformation:DeleteStackSet",

  /**
   * Write - Grants permission to deregister an existing CloudFormation type or type version
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html
   */
  DeregisterType = "cloudformation:DeregisterType",

  /**
   * Read - Grants permission to retrieve your account's AWS CloudFormation limits
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeAccountLimits.html
   */
  DescribeAccountLimits = "cloudformation:DescribeAccountLimits",

  /**
   * Read - Grants permission to return the description for the specified change set
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:ChangeSetName`: Filters access by an AWS CloudFormation change set name. Use to control which change sets IAM users can execute or delete ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeChangeSet = "cloudformation:DescribeChangeSet",

  /**
   * Read - Grants permission to return the Hook invocation information for the specified change set
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSetHooks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:ChangeSetName`: Filters access by an AWS CloudFormation change set name. Use to control which change sets IAM users can execute or delete ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeChangeSetHooks = "cloudformation:DescribeChangeSetHooks",

  /**
   * Read - Grants permission to return information about a CloudFormation extension publisher
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribePublisher.html
   */
  DescribePublisher = "cloudformation:DescribePublisher",

  /**
   * Read - Grants permission to return information about a stack drift detection operation
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackDriftDetectionStatus.html
   */
  DescribeStackDriftDetectionStatus = "cloudformation:DescribeStackDriftDetectionStatus",

  /**
   * Read - Grants permission to return all stack related events for a specified stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  DescribeStackEvents = "cloudformation:DescribeStackEvents",

  /**
   * Read - Grants permission to return the stack instance that's associated with the specified stack set, AWS account, and region
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  DescribeStackInstance = "cloudformation:DescribeStackInstance",

  /**
   * Read - Grants permission to return a description of the specified resource in the specified stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  DescribeStackResource = "cloudformation:DescribeStackResource",

  /**
   * Read - Grants permission to return drift information for the resources that have been checked for drift in the specified stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResourceDrifts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  DescribeStackResourceDrifts = "cloudformation:DescribeStackResourceDrifts",

  /**
   * Read - Grants permission to return AWS resource descriptions for running and deleted stacks
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  DescribeStackResources = "cloudformation:DescribeStackResources",

  /**
   * Read - Grants permission to return the description of the specified stack set
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  DescribeStackSet = "cloudformation:DescribeStackSet",

  /**
   * Read - Grants permission to return the description of the specified stack set operation
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSetOperation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  DescribeStackSetOperation = "cloudformation:DescribeStackSetOperation",

  /**
   * List - Grants permission to return the description for the specified stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStacks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  DescribeStacks = "cloudformation:DescribeStacks",

  /**
   * Read - Grants permission to return information about the CloudFormation type requested
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html
   */
  DescribeType = "cloudformation:DescribeType",

  /**
   * Read - Grants permission to return information about the registration process for a CloudFormation type
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeTypeRegistration.html
   */
  DescribeTypeRegistration = "cloudformation:DescribeTypeRegistration",

  /**
   * Read - Grants permission to detects whether a stack's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackDrift.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  DetectStackDrift = "cloudformation:DetectStackDrift",

  /**
   * Read - Grants permission to return information about whether a resource's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackResourceDrift.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  DetectStackResourceDrift = "cloudformation:DetectStackResourceDrift",

  /**
   * Read - Grants permission to enable users to detect drift on a stack set and the stack instances that belong to that stack set
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackSetDrift.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  DetectStackSetDrift = "cloudformation:DetectStackSetDrift",

  /**
   * Read - Grants permission to return the estimated monthly cost of a template
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_EstimateTemplateCost.html
   */
  EstimateTemplateCost = "cloudformation:EstimateTemplateCost",

  /**
   * Write - Grants permission to update a stack using the input information that was provided when the specified change set was created
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:ChangeSetName`: Filters access by an AWS CloudFormation change set name. Use to control which change sets IAM users can execute or delete ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ExecuteChangeSet = "cloudformation:ExecuteChangeSet",

  /**
   * Read - Grants permission to return the stack policy for a specified stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetStackPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  GetStackPolicy = "cloudformation:GetStackPolicy",

  /**
   * Read - Grants permission to return the template body for a specified stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  GetTemplate = "cloudformation:GetTemplate",

  /**
   * Read - Grants permission to return information about a new or existing template
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplateSummary.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  GetTemplateSummary = "cloudformation:GetTemplateSummary",

  /**
   * Write - Grants permission to enable users to import existing stacks to a new or existing stackset
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ImportStacksToStackSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  ImportStacksToStackSet = "cloudformation:ImportStacksToStackSet",

  /**
   * List - Grants permission to return the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the CREATE_IN_PROGRESS or CREATE_PENDING state
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListChangeSets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  ListChangeSets = "cloudformation:ListChangeSets",

  /**
   * List - Grants permission to list all exported output values in the account and region in which you call this action
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListExports.html
   */
  ListExports = "cloudformation:ListExports",

  /**
   * List - Grants permission to list all stacks that are importing an exported output value
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListImports.html
   */
  ListImports = "cloudformation:ListImports",

  /**
   * List - Grants permission to return summary information about stack instances that are associated with the specified stack set
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  ListStackInstances = "cloudformation:ListStackInstances",

  /**
   * List - Grants permission to return descriptions of all resources of the specified stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  ListStackResources = "cloudformation:ListStackResources",

  /**
   * List - Grants permission to return summary information about the results of a stack set operation
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperationResults.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  ListStackSetOperationResults = "cloudformation:ListStackSetOperationResults",

  /**
   * List - Grants permission to return summary information about operations performed on a stack set
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  ListStackSetOperations = "cloudformation:ListStackSetOperations",

  /**
   * List - Grants permission to return summary information about stack sets that are associated with the user
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  ListStackSets = "cloudformation:ListStackSets",

  /**
   * List - Grants permission to return the summary information for stacks whose status matches the specified StackStatusFilter
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html
   */
  ListStacks = "cloudformation:ListStacks",

  /**
   * List - Grants permission to list CloudFormation type registration attempts
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeRegistrations.html
   */
  ListTypeRegistrations = "cloudformation:ListTypeRegistrations",

  /**
   * List - Grants permission to list versions of a particular CloudFormation type
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeVersions.html
   */
  ListTypeVersions = "cloudformation:ListTypeVersions",

  /**
   * List - Grants permission to list available CloudFormation types
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html
   */
  ListTypes = "cloudformation:ListTypes",

  /**
   * Write - Grants permission to publish the specified extension to the CloudFormation registry as a public extension in this region
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_PublishType.html
   */
  PublishType = "cloudformation:PublishType",

  /**
   * Write - Grants permission to record the handler progress
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RecordHandlerProgress.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  RecordHandlerProgress = "cloudformation:RecordHandlerProgress",

  /**
   * Write - Grants permission to register account as a publisher of public extensions in the CloudFormation registry
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html
   */
  RegisterPublisher = "cloudformation:RegisterPublisher",

  /**
   * Write - Grants permission to register a new CloudFormation type
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html
   */
  RegisterType = "cloudformation:RegisterType",

  /**
   * Write - Grants permission to rollback the stack to the last stable state
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RollbackStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:RoleArn`: Filters access by the ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   */
  RollbackStack = "cloudformation:RollbackStack",

  /**
   * Permissions management - Grants permission to set a stack policy for a specified stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetStackPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:StackPolicyUrl`: Filters access by an Amazon S3 stack policy URL. Use to control which stack policies IAM users can associate with a stack during a create or update stack action ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SetStackPolicy = "cloudformation:SetStackPolicy",

  /**
   * Write - Grants permission to set the configuration data for a registered CloudFormation extension, in the given account and region
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html
   */
  SetTypeConfiguration = "cloudformation:SetTypeConfiguration",

  /**
   * Write - Grants permission to set which version of a CloudFormation type applies to CloudFormation operations
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeDefaultVersion.html
   */
  SetTypeDefaultVersion = "cloudformation:SetTypeDefaultVersion",

  /**
   * Write - Grants permission to send a signal to the specified resource with a success or failure status
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SignalResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  SignalResource = "cloudformation:SignalResource",

  /**
   * Write - Grants permission to stop an in-progress operation on a stack set and its associated stack instances
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StopStackSetOperation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  StopStackSetOperation = "cloudformation:StopStackSetOperation",

  /**
   * Tagging - Grants permission to tag cloudformation resources
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.changeset `CloudformationResource.changeset`} 
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  TagResource = "cloudformation:TagResource",

  /**
   * Write - Grants permission to test a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TestType.html
   */
  TestType = "cloudformation:TestType",

  /**
   * Tagging - Grants permission to untag cloudformation resources
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.changeset `CloudformationResource.changeset`} 
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   */
  UntagResource = "cloudformation:UntagResource",

  /**
   * Write - Grants permission to update a stack as specified in the template
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:ResourceTypes`: Filters access by the template resource types, such as AWS::EC2::Instance. Use to control which resource types IAM users can work with when they create or update a stack ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:RoleArn`: Filters access by the ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `cloudformation:StackPolicyUrl`: Filters access by an Amazon S3 stack policy URL. Use to control which stack policies IAM users can associate with a stack during a create or update stack action ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:TemplateUrl`: Filters access by an Amazon S3 template URL. Use to control which templates IAM users can use when they create or update stacks ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateStack = "cloudformation:UpdateStack",

  /**
   * Write - Grants permission to update the parameter values for stack instances for the specified accounts, within the specified regions
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackInstances.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   * - {@link CloudformationResource.stacksetTarget `CloudformationResource.stacksetTarget`} 
   * - {@link CloudformationResource.type `CloudformationResource.type`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:TargetRegion`: Filters access by stack set target region. Use to control which regions IAM users can use when they create or update stack sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateStackInstances = "cloudformation:UpdateStackInstances",

  /**
   * Write - Grants permission to update a stackset as specified in the template
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   * - {@link CloudformationResource.stacksetTarget `CloudformationResource.stacksetTarget`} 
   * - {@link CloudformationResource.type `CloudformationResource.type`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:RoleArn`: Filters access by the ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `cloudformation:TemplateUrl`: Filters access by an Amazon S3 template URL. Use to control which templates IAM users can use when they create or update stacks ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:TargetRegion`: Filters access by stack set target region. Use to control which regions IAM users can use when they create or update stack sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateStackSet = "cloudformation:UpdateStackSet",

  /**
   * Write - Grants permission to update termination protection for the specified stack
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateTerminationProtection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   */
  UpdateTerminationProtection = "cloudformation:UpdateTerminationProtection",

  /**
   * Read - Grants permission to validate a specified template
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ValidateTemplate.html
   */
  ValidateTemplate = "cloudformation:ValidateTemplate",

  /**
   * * - Grant all cloudformation permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudcontrolapi.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CloudformationResource.stack `CloudformationResource.stack`} 
   * - {@link CloudformationResource.stackset `CloudformationResource.stackset`} 
   * - {@link CloudformationResource.stacksetTarget `CloudformationResource.stacksetTarget`} 
   * - {@link CloudformationResource.type `CloudformationResource.type`} 
   * - {@link CloudformationResource.changeset `CloudformationResource.changeset`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `cloudformation:RoleArn`: Filters access by the ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN `ARN`})
   * - `cloudformation:ChangeSetName`: Filters access by an AWS CloudFormation change set name. Use to control which change sets IAM users can execute or delete ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:ResourceTypes`: Filters access by the template resource types, such as AWS::EC2::Instance. Use to control which resource types IAM users can work with when they create or update a stack ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:ImportResourceTypes`: Filters access by the template resource types, such as AWS::EC2::Instance. Use to control which resource types IAM users can work with when they want to import a resource into a stack ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:StackPolicyUrl`: Filters access by an Amazon S3 stack policy URL. Use to control which stack policies IAM users can associate with a stack during a create or update stack action ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `cloudformation:TemplateUrl`: Filters access by an Amazon S3 template URL. Use to control which templates IAM users can use when they create or update stacks ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `cloudformation:TargetRegion`: Filters access by stack set target region. Use to control which regions IAM users can use when they create or update stack sets ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "cloudformation:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudcontrolapi.html
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudformation.html
 */
export const CloudformationResource = {

  /**
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2ab1b5c15c11
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  changeset: (options: Partial<{partition: string, region: string, account: string, changeSetName: string, id: string}> = {}) => `arn:${options.partition || '*'}:cloudformation:${options.region || '*'}:${options.account || '*'}:changeSet/${options.changeSetName || '*'}/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2ab1b5c15b9
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  stack: (options: Partial<{partition: string, region: string, account: string, stackName: string, id: string}> = {}) => `arn:${options.partition || '*'}:cloudformation:${options.region || '*'}:${options.account || '*'}:stack/${options.stackName || '*'}/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stacksets-concepts-stackset
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  stackset: (options: Partial<{partition: string, region: string, account: string, stackSetName: string, id: string}> = {}) => `arn:${options.partition || '*'}:cloudformation:${options.region || '*'}:${options.account || '*'}:stackset/${options.stackSetName || '*'}:${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html
   */
  stacksetTarget: (options: Partial<{partition: string, region: string, account: string, stackSetTarget: string}> = {}) => `arn:${options.partition || '*'}:cloudformation:${options.region || '*'}:${options.account || '*'}:stackset-target/${options.stackSetTarget || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html
   */
  type: (options: Partial<{partition: string, region: string, account: string, type: string}> = {}) => `arn:${options.partition || '*'}:cloudformation:${options.region || '*'}:${options.account || '*'}:type/resource/${options.type || '*'}`,
}

