/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html
 */
export enum EbsAction {

  /**
   * Write - Grants permission to seal and complete the snapshot after all of the required blocks of data have been written to it
   * @see https://docs.aws.amazon.com/ebs/latest/APIReference/API_CompleteSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EbsResource.snapshot `EbsResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs assigned to the AWS resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CompleteSnapshot = "ebs:CompleteSnapshot",

  /**
   * Read - Grants permission to return the data of a block in an Amazon Elastic Block Store (EBS) snapshot
   * @see https://docs.aws.amazon.com/ebs/latest/APIReference/API_GetSnapshotBlock.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EbsResource.snapshot `EbsResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs assigned to the AWS resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetSnapshotBlock = "ebs:GetSnapshotBlock",

  /**
   * Read - Grants permission to list the blocks that are different between two Amazon Elastic Block Store (EBS) snapshots of the same volume/snapshot lineage
   * @see https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListChangedBlocks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EbsResource.snapshot `EbsResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs assigned to the AWS resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListChangedBlocks = "ebs:ListChangedBlocks",

  /**
   * Read - Grants permission to list the blocks in an Amazon Elastic Block Store (EBS) snapshot
   * @see https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListSnapshotBlocks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EbsResource.snapshot `EbsResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs assigned to the AWS resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListSnapshotBlocks = "ebs:ListSnapshotBlocks",

  /**
   * Write - Grants permission to write a block of data to a snapshot created by the StartSnapshot operation
   * @see https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EbsResource.snapshot `EbsResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs assigned to the AWS resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutSnapshotBlock = "ebs:PutSnapshotBlock",

  /**
   * Write - Grants permission to create a new EBS snapshot
   * @see https://docs.aws.amazon.com/ebs/latest/APIReference/API_StartSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EbsResource.snapshot `EbsResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs assigned to the AWS resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ebs:Description`: Filters access by the description of the snapshot being created ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ebs:ParentSnapshot`: Filters access by the ID of the parent snapshot ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ebs:VolumeSize`: Filters access by the size of the volume for the snapshot being created, in GiB ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  StartSnapshot = "ebs:StartSnapshot",

  /**
   * * - Grant all ebs permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EbsResource.snapshot `EbsResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs assigned to the AWS resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ebs:Description`: Filters access by the description of the snapshot being created ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ebs:ParentSnapshot`: Filters access by the ID of the parent snapshot ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ebs:VolumeSize`: Filters access by the size of the volume for the snapshot being created, in GiB ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  All = "ebs:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html
 */
export const EbsResource = {

  /**
   * @see https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a tag key and value pair that is allowed in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access based on tag key-value pairs assigned to the AWS resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by a list of tag keys that are allowed in the request ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ebs:Description`: Filters access by the description of the snapshot being created ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ebs:ParentSnapshot`: Filters access by the ID of the parent snapshot ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ebs:VolumeSize`: Filters access by the size of the volume for the snapshot being created, in GiB ({@link https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric `Numeric`})
   */
  snapshot: (options: Partial<{partition: string, region: string, snapshotId: string}> = {}) => `arn:${options.partition || '*'}:ec2:${options.region || '*'}::snapshot/${options.snapshotId || '*'}`,
}

