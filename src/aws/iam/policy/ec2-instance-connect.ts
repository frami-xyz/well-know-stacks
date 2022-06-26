/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2instanceconnect.html
 */
export enum Ec2InstanceConnectAction {

  /**
   * Write - Grants access to push an SSH public key to the specified EC2 instance to be used for standard SSH
   * @see https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSSHPublicKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Ec2InstanceConnectResource.instance `Ec2InstanceConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ec2:osuser`: Filters access by specifying the default user name for the AMI that you used to launch your instance ({@link https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSSHPublicKey.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SendSSHPublicKey = "ec2-instance-connect:SendSSHPublicKey",

  /**
   * Write - Grants access to push an SSH public key to the specified EC2 instance to be used for serial console SSH
   * @see https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSerialConsoleSSHPublicKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Ec2InstanceConnectResource.instance `Ec2InstanceConnectResource.instance`} 
   */
  SendSerialConsoleSSHPublicKey = "ec2-instance-connect:SendSerialConsoleSSHPublicKey",

  /**
   * * - Grant all ec2-instance-connect permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2instanceconnect.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Ec2InstanceConnectResource.instance `Ec2InstanceConnectResource.instance`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `ec2:osuser`: Filters access by specifying the default user name for the AMI that you used to launch your instance ({@link https://docs.aws.amazon.com/ec2-instance-connect/latest/APIReference/API_SendSSHPublicKey.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "ec2-instance-connect:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2instanceconnect.html
 */
export const Ec2InstanceConnectResource = {

  /**
   * @see https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `ec2:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  instance: (options: Partial<{partition: string, region: string, account: string, instanceId: string}> = {}) => `arn:${options.partition || '*'}:ec2:${options.region || '*'}:${options.account || '*'}:instance/${options.instanceId || '*'}`,
}

