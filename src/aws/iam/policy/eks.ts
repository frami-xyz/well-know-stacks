/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastickubernetesservice.html
 */
export enum EksAction {

  /**
   * Read - Grants permission to view Kubernetes objects via AWS EKS console
   * @see https://docs.aws.amazon.com/eks/latest/userguide/view-workloads.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   */
  AccessKubernetesApi = "eks:AccessKubernetesApi",

  /**
   * Write - Grants permission to associate encryption configuration to a cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_AssociateEncryptionConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   */
  AssociateEncryptionConfig = "eks:AssociateEncryptionConfig",

  /**
   * Write - Grants permission to associate an identity provider configuration to a cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_AssociateIdentityProviderConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `eks:clientId`: Filters access by the clientId present in the associateIdentityProviderConfig request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `eks:issuerUrl`: Filters access by the issuerUrl present in the associateIdentityProviderConfig request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AssociateIdentityProviderConfig = "eks:AssociateIdentityProviderConfig",

  /**
   * Write - Grants permission to create an Amazon EKS add-on
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateAddon.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAddon = "eks:CreateAddon",

  /**
   * Write - Grants permission to create an Amazon EKS cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCluster = "eks:CreateCluster",

  /**
   * Write - Grants permission to create an AWS Fargate profile
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateFargateProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFargateProfile = "eks:CreateFargateProfile",

  /**
   * Write - Grants permission to create an Amazon EKS Nodegroup
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateNodegroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateNodegroup = "eks:CreateNodegroup",

  /**
   * Write - Grants permission to delete an Amazon EKS add-on
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteAddon.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.addon `EksResource.addon`} 
   */
  DeleteAddon = "eks:DeleteAddon",

  /**
   * Write - Grants permission to delete an Amazon EKS cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   */
  DeleteCluster = "eks:DeleteCluster",

  /**
   * Write - Grants permission to delete an AWS Fargate profile
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteFargateProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.fargateprofile `EksResource.fargateprofile`} 
   */
  DeleteFargateProfile = "eks:DeleteFargateProfile",

  /**
   * Write - Grants permission to delete an Amazon EKS Nodegroup
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteNodegroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.nodegroup `EksResource.nodegroup`} 
   */
  DeleteNodegroup = "eks:DeleteNodegroup",

  /**
   * Write - Grants permission to deregister an External cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DeregisterCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   */
  DeregisterCluster = "eks:DeregisterCluster",

  /**
   * Read - Grants permission to retrieve descriptive information about an Amazon EKS add-on
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddon.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.addon `EksResource.addon`} 
   */
  DescribeAddon = "eks:DescribeAddon",

  /**
   * Read - Grants permission to retrieve descriptive version information about the add-ons that Amazon EKS Add-ons supports
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html
   */
  DescribeAddonVersions = "eks:DescribeAddonVersions",

  /**
   * Read - Grants permission to retrieve descriptive information about an Amazon EKS cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   */
  DescribeCluster = "eks:DescribeCluster",

  /**
   * Read - Grants permission to retrieve descriptive information about an AWS Fargate profile associated with a cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeFargateProfile.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.fargateprofile `EksResource.fargateprofile`} 
   */
  DescribeFargateProfile = "eks:DescribeFargateProfile",

  /**
   * Read - Grants permission to retrieve descriptive information about an Idp config associated with a cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeIdentityProviderConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.identityproviderconfig `EksResource.identityproviderconfig`} 
   */
  DescribeIdentityProviderConfig = "eks:DescribeIdentityProviderConfig",

  /**
   * Read - Grants permission to retrieve descriptive information about an Amazon EKS nodegroup
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeNodegroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.nodegroup `EksResource.nodegroup`} 
   */
  DescribeNodegroup = "eks:DescribeNodegroup",

  /**
   * Read - Grants permission to retrieve a given update for a given Amazon EKS cluster/nodegroup/add-on (in the specified or default region)
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeUpdate.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   * - {@link EksResource.addon `EksResource.addon`} 
   * - {@link EksResource.nodegroup `EksResource.nodegroup`} 
   */
  DescribeUpdate = "eks:DescribeUpdate",

  /**
   * Write - Grants permission to delete an asssociated Idp config
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_DisassociateIdentityProviderConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.identityproviderconfig `EksResource.identityproviderconfig`} 
   */
  DisassociateIdentityProviderConfig = "eks:DisassociateIdentityProviderConfig",

  /**
   * List - Grants permission to list the Amazon EKS add-ons in your AWS account (in the specified or default region) for a given cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   */
  ListAddons = "eks:ListAddons",

  /**
   * List - Grants permission to list the Amazon EKS clusters in your AWS account (in the specified or default region)
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_ListClusters.html
   */
  ListClusters = "eks:ListClusters",

  /**
   * List - Grants permission to list the AWS Fargate profiles in your AWS account (in the specified or default region) associated with a given cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_ListFargateProfiles.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   */
  ListFargateProfiles = "eks:ListFargateProfiles",

  /**
   * List - Grants permission to list the Idp configs in your AWS account (in the specified or default region) associated with a given cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_ListIdentityProviderConfigs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   */
  ListIdentityProviderConfigs = "eks:ListIdentityProviderConfigs",

  /**
   * List - Grants permission to list the Amazon EKS nodegroups in your AWS account (in the specified or default region) attached to given cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_ListNodegroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   */
  ListNodegroups = "eks:ListNodegroups",

  /**
   * Read - Grants permission to list tags for the specified resource
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.addon `EksResource.addon`} 
   * - {@link EksResource.cluster `EksResource.cluster`} 
   * - {@link EksResource.fargateprofile `EksResource.fargateprofile`} 
   * - {@link EksResource.identityproviderconfig `EksResource.identityproviderconfig`} 
   * - {@link EksResource.nodegroup `EksResource.nodegroup`} 
   */
  ListTagsForResource = "eks:ListTagsForResource",

  /**
   * List - Grants permission to list the updates for a given Amazon EKS cluster/nodegroup/add-on (in the specified or default region)
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_ListUpdates.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   * - {@link EksResource.addon `EksResource.addon`} 
   * - {@link EksResource.nodegroup `EksResource.nodegroup`} 
   */
  ListUpdates = "eks:ListUpdates",

  /**
   * Write - Grants permission to register an External cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_RegisterCluster.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RegisterCluster = "eks:RegisterCluster",

  /**
   * Tagging - Grants permission to tag the specified resource
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.addon `EksResource.addon`} 
   * - {@link EksResource.cluster `EksResource.cluster`} 
   * - {@link EksResource.fargateprofile `EksResource.fargateprofile`} 
   * - {@link EksResource.identityproviderconfig `EksResource.identityproviderconfig`} 
   * - {@link EksResource.nodegroup `EksResource.nodegroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "eks:TagResource",

  /**
   * Tagging - Grants permission to untag the specified resource
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.addon `EksResource.addon`} 
   * - {@link EksResource.cluster `EksResource.cluster`} 
   * - {@link EksResource.fargateprofile `EksResource.fargateprofile`} 
   * - {@link EksResource.identityproviderconfig `EksResource.identityproviderconfig`} 
   * - {@link EksResource.nodegroup `EksResource.nodegroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "eks:UntagResource",

  /**
   * Write - Grants permission to update Amazon EKS add-on configurations, such as the VPC-CNI version
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.addon `EksResource.addon`} 
   */
  UpdateAddon = "eks:UpdateAddon",

  /**
   * Write - Grants permission to update Amazon EKS cluster configurations (eg: API server endpoint access)
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   */
  UpdateClusterConfig = "eks:UpdateClusterConfig",

  /**
   * Write - Grants permission to update the Kubernetes version of an Amazon EKS cluster
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   */
  UpdateClusterVersion = "eks:UpdateClusterVersion",

  /**
   * Write - Grants permission to update Amazon EKS nodegroup configurations (eg: min/max/desired capacity or labels)
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.nodegroup `EksResource.nodegroup`} 
   */
  UpdateNodegroupConfig = "eks:UpdateNodegroupConfig",

  /**
   * Write - Grants permission to update the Kubernetes version of an Amazon EKS nodegroup
   * @see https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.nodegroup `EksResource.nodegroup`} 
   */
  UpdateNodegroupVersion = "eks:UpdateNodegroupVersion",

  /**
   * * - Grant all eks permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastickubernetesservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EksResource.cluster `EksResource.cluster`} 
   * - {@link EksResource.addon `EksResource.addon`} 
   * - {@link EksResource.fargateprofile `EksResource.fargateprofile`} 
   * - {@link EksResource.nodegroup `EksResource.nodegroup`} 
   * - {@link EksResource.identityproviderconfig `EksResource.identityproviderconfig`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by a key that is present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the list of all the tag key names present in the request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `eks:clientId`: Filters access by the clientId present in the associateIdentityProviderConfig request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `eks:issuerUrl`: Filters access by the issuerUrl present in the associateIdentityProviderConfig request the user makes to the EKS service ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "eks:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastickubernetesservice.html
 */
export const EksResource = {

  /**
   * @see https://docs.aws.amazon.com/eks/latest/userguide/clusters.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  cluster: (options: Partial<{partition: string, region: string, account: string, clusterName: string}> = {}) => `arn:${options.partition || '*'}:eks:${options.region || '*'}:${options.account || '*'}:cluster/${options.clusterName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  nodegroup: (options: Partial<{partition: string, region: string, account: string, clusterName: string, nodegroupName: string, uUID: string}> = {}) => `arn:${options.partition || '*'}:eks:${options.region || '*'}:${options.account || '*'}:nodegroup/${options.clusterName || '*'}/${options.nodegroupName || '*'}/${options.uUID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eks/latest/userguide/managed-addons.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  addon: (options: Partial<{partition: string, region: string, account: string, clusterName: string, addonName: string, uUID: string}> = {}) => `arn:${options.partition || '*'}:eks:${options.region || '*'}:${options.account || '*'}:addon/${options.clusterName || '*'}/${options.addonName || '*'}/${options.uUID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  fargateprofile: (options: Partial<{partition: string, region: string, account: string, clusterName: string, fargateProfileName: string, uUID: string}> = {}) => `arn:${options.partition || '*'}:eks:${options.region || '*'}:${options.account || '*'}:fargateprofile/${options.clusterName || '*'}/${options.fargateProfileName || '*'}/${options.uUID || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by a tag key and value pair ({@link https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  identityproviderconfig: (options: Partial<{partition: string, region: string, account: string, clusterName: string, identityProviderType: string, identityProviderConfigName: string, uUID: string}> = {}) => `arn:${options.partition || '*'}:eks:${options.region || '*'}:${options.account || '*'}:identityproviderconfig/${options.clusterName || '*'}/${options.identityProviderType || '*'}/${options.identityProviderConfigName || '*'}/${options.uUID || '*'}`,
}

