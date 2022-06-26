/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodeartifact.html
 */
export enum CodeartifactAction {

  /**
   * Write - Grants permission to add an external connection to a repository
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssociateExternalConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  AssociateExternalConnection = "codeartifact:AssociateExternalConnection",

  /**
   * Write - Grants permission to associate an existing repository as an upstream repository to another repository
   * @see https://docs.aws.amazon.com/codeartifact/latest/ug/repos-upstream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  AssociateWithDownstreamRepository = "codeartifact:AssociateWithDownstreamRepository",

  /**
   * Write - Grants permission to copy package versions from one repository to another repository in the same domain
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CopyPackageVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  CopyPackageVersions = "codeartifact:CopyPackageVersions",

  /**
   * Write - Grants permission to create a new domain
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDomain = "codeartifact:CreateDomain",

  /**
   * Write - Grants permission to create a new repository
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateRepository = "codeartifact:CreateRepository",

  /**
   * Write - Grants permission to delete a domain
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.domain `CodeartifactResource.domain`} 
   */
  DeleteDomain = "codeartifact:DeleteDomain",

  /**
   * PermissionsManagement - Grants permission to delete the resource policy set on a domain
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteDomainPermissionsPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.domain `CodeartifactResource.domain`} 
   */
  DeleteDomainPermissionsPolicy = "codeartifact:DeleteDomainPermissionsPolicy",

  /**
   * Write - Grants permission to delete package versions
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeletePackageVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   */
  DeletePackageVersions = "codeartifact:DeletePackageVersions",

  /**
   * Write - Grants permission to delete a repository
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  DeleteRepository = "codeartifact:DeleteRepository",

  /**
   * PermissionsManagement - Grants permission to delete the resource policy set on a repository
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteRepositoryPermissionsPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  DeleteRepositoryPermissionsPolicy = "codeartifact:DeleteRepositoryPermissionsPolicy",

  /**
   * Read - Grants permission to return information about a domain
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribeDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.domain `CodeartifactResource.domain`} 
   */
  DescribeDomain = "codeartifact:DescribeDomain",

  /**
   * Read - Grants permission to return information about a package version
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   */
  DescribePackageVersion = "codeartifact:DescribePackageVersion",

  /**
   * Read - Grants permission to return detailed information about a repository
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribeRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  DescribeRepository = "codeartifact:DescribeRepository",

  /**
   * Write - Grants permission to disassociate an external connection from a repository
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisassociateExternalConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  DisassociateExternalConnection = "codeartifact:DisassociateExternalConnection",

  /**
   * Write - Grants permission to set the status of package versions to Disposed and delete their assets
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisposePackageVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   */
  DisposePackageVersions = "codeartifact:DisposePackageVersions",

  /**
   * Read - Grants permission to generate a temporary authentication token for accessing repositories in a domain
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetAuthorizationToken.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.domain `CodeartifactResource.domain`} 
   */
  GetAuthorizationToken = "codeartifact:GetAuthorizationToken",

  /**
   * Read - Grants permission to return a domain's resource policy
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetDomainPermissionsPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.domain `CodeartifactResource.domain`} 
   */
  GetDomainPermissionsPolicy = "codeartifact:GetDomainPermissionsPolicy",

  /**
   * Read - Grants permission to return an asset (or file) that is part of a package version
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetPackageVersionAsset.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   */
  GetPackageVersionAsset = "codeartifact:GetPackageVersionAsset",

  /**
   * Read - Grants permission to return a package version's readme file
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetPackageVersionReadme.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   */
  GetPackageVersionReadme = "codeartifact:GetPackageVersionReadme",

  /**
   * Read - Grants permission to return an endpoint for a repository
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetRepositoryEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  GetRepositoryEndpoint = "codeartifact:GetRepositoryEndpoint",

  /**
   * Read - Grants permission to return a repository's resource policy
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetRepositoryPermissionsPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  GetRepositoryPermissionsPolicy = "codeartifact:GetRepositoryPermissionsPolicy",

  /**
   * List - Grants permission to list the domains in the current user's AWS account
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html
   */
  ListDomains = "codeartifact:ListDomains",

  /**
   * List - Grants permission to list a package version's assets
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersionAssets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   */
  ListPackageVersionAssets = "codeartifact:ListPackageVersionAssets",

  /**
   * List - Grants permission to list the direct dependencies of a package version
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersionDependencies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   */
  ListPackageVersionDependencies = "codeartifact:ListPackageVersionDependencies",

  /**
   * List - Grants permission to list a package's versions
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   */
  ListPackageVersions = "codeartifact:ListPackageVersions",

  /**
   * List - Grants permission to list the packages in a repository
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackages.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  ListPackages = "codeartifact:ListPackages",

  /**
   * List - Grants permission to list the repositories administered by the calling account
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html
   */
  ListRepositories = "codeartifact:ListRepositories",

  /**
   * List - Grants permission to list the repositories in a domain
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositoriesInDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.domain `CodeartifactResource.domain`} 
   */
  ListRepositoriesInDomain = "codeartifact:ListRepositoriesInDomain",

  /**
   * List - Grants permission to list tags for a CodeArtifact resource
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.domain `CodeartifactResource.domain`} 
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  ListTagsForResource = "codeartifact:ListTagsForResource",

  /**
   * Write - Grants permission to publish assets and metadata to a repository endpoint
   * @see https://docs.aws.amazon.com/codeartifact/latest/ug/repo-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   */
  PublishPackageVersion = "codeartifact:PublishPackageVersion",

  /**
   * Write - Grants permission to attach a resource policy to a domain
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PutDomainPermissionsPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.domain `CodeartifactResource.domain`} 
   */
  PutDomainPermissionsPolicy = "codeartifact:PutDomainPermissionsPolicy",

  /**
   * Write - Grants permission to add, modify or remove package metadata using a repository endpoint
   * @see https://docs.aws.amazon.com/codeartifact/latest/ug/repo-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   */
  PutPackageMetadata = "codeartifact:PutPackageMetadata",

  /**
   * Write - Grants permission to attach a resource policy to a repository
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PutRepositoryPermissionsPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  PutRepositoryPermissionsPolicy = "codeartifact:PutRepositoryPermissionsPolicy",

  /**
   * Read - Grants permission to return package assets and metadata from a repository endpoint
   * @see https://docs.aws.amazon.com/codeartifact/latest/ug/repo-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  ReadFromRepository = "codeartifact:ReadFromRepository",

  /**
   * Tagging - Grants permission to tag a CodeArtifact resource
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.domain `CodeartifactResource.domain`} 
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "codeartifact:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from a CodeArtifact resource
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.domain `CodeartifactResource.domain`} 
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "codeartifact:UntagResource",

  /**
   * Write - Grants permission to modify the status of one or more versions of a package
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   */
  UpdatePackageVersionsStatus = "codeartifact:UpdatePackageVersionsStatus",

  /**
   * Write - Grants permission to modify the properties of a repository
   * @see https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   */
  UpdateRepository = "codeartifact:UpdateRepository",

  /**
   * * - Grant all codeartifact permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodeartifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CodeartifactResource.repository `CodeartifactResource.repository`} 
   * - {@link CodeartifactResource.package `CodeartifactResource.package`} 
   * - {@link CodeartifactResource.domain `CodeartifactResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "codeartifact:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodeartifact.html
 */
export const CodeartifactResource = {

  /**
   * @see https://docs.aws.amazon.com/codeartifact/latest/ug/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  domain: (options: Partial<{partition: string, region: string, account: string, domainName: string}> = {}) => `arn:${options.partition || '*'}:codeartifact:${options.region || '*'}:${options.account || '*'}:domain/${options.domainName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codeartifact/latest/ug/repo-policies.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  repository: (options: Partial<{partition: string, region: string, account: string, domainName: string, repositoryName: string}> = {}) => `arn:${options.partition || '*'}:codeartifact:${options.region || '*'}:${options.account || '*'}:repository/${options.domainName || '*'}/${options.repositoryName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/codeartifact/latest/ug/repo-policies.html
   */
  package: (options: Partial<{partition: string, region: string, account: string, domainName: string, repositoryName: string, packageFormat: string, packageNamespace: string, packageName: string}> = {}) => `arn:${options.partition || '*'}:codeartifact:${options.region || '*'}:${options.account || '*'}:package/${options.domainName || '*'}/${options.repositoryName || '*'}/${options.packageFormat || '*'}/${options.packageNamespace || '*'}/${options.packageName || '*'}`,
}

