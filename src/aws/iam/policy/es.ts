/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchservicesuccessortoamazonelasticsearchservice.html
 */
export enum EsAction {

  /**
   * Write - Grants permission to the destination domain owner to accept an inbound cross-cluster search connection request
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-accept-inbound-cross-cluster-search-connection
   */
  AcceptInboundConnection = "es:AcceptInboundConnection",

  /**
   * Write - Grants permission to the destination domain owner to accept an inbound cross-cluster search connection request. This permission is deprecated. Use AcceptInboundConnection instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-accept-inbound-cross-cluster-search-connection
   */
  AcceptInboundCrossClusterSearchConnection = "es:AcceptInboundCrossClusterSearchConnection",

  /**
   * Tagging - Grants permission to attach resource tags to an OpenSearch Service domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-addtags
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  AddTags = "es:AddTags",

  /**
   * Write - Grants permission to associate a package with an OpenSearch Service domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-associatepackage
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  AssociatePackage = "es:AssociatePackage",

  /**
   * Write - Grants permission to cancel a service software update of a domain. This permission is deprecated. Use CancelServiceSoftwareUpdate instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-stopupdate
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  CancelElasticsearchServiceSoftwareUpdate = "es:CancelElasticsearchServiceSoftwareUpdate",

  /**
   * Write - Grants permission to cancel a service software update of a domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-stopupdate
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  CancelServiceSoftwareUpdate = "es:CancelServiceSoftwareUpdate",

  /**
   * Write - Grants permission to create an Amazon OpenSearch Service domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-createdomain
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateDomain = "es:CreateDomain",

  /**
   * Write - Grants permission to create an OpenSearch Service domain. This permission is deprecated. Use CreateDomain instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-createdomain
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateElasticsearchDomain = "es:CreateElasticsearchDomain",

  /**
   * Write - Grants permission to create the service-linked role required for OpenSearch Service domains that use VPC access. This permission is deprecated. OpenSearch Service creates the service-linked role for you
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-createservicerole
   */
  CreateElasticsearchServiceRole = "es:CreateElasticsearchServiceRole",

  /**
   * Write - Grants permission to create a new cross-cluster search connection from a source domain to a destination domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-create-outbound-cross-cluster-search-connection
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  CreateOutboundConnection = "es:CreateOutboundConnection",

  /**
   * Write - Grants permission to create a new cross-cluster search connection from a source domain to a destination domain. This permission is deprecated. Use CreateOutboundConnection instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-create-outbound-cross-cluster-search-connection
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  CreateOutboundCrossClusterSearchConnection = "es:CreateOutboundCrossClusterSearchConnection",

  /**
   * Write - Grants permission to add a package for use with OpenSearch Service domains
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-createpackage
   */
  CreatePackage = "es:CreatePackage",

  /**
   * Write - Grants permission to create the service-linked role required for Amazon OpenSearch Service domains that use VPC access
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-createservicerole
   */
  CreateServiceRole = "es:CreateServiceRole",

  /**
   * Write - Grants permission to delete an Amazon OpenSearch Service domain and all of its data
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-deletedomain
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  DeleteDomain = "es:DeleteDomain",

  /**
   * Write - Grants permission to delete an OpenSearch Service domain and all of its data. This permission is deprecated. Use DeleteDomain instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-deletedomain
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  DeleteElasticsearchDomain = "es:DeleteElasticsearchDomain",

  /**
   * Write - Grants permission to delete the service-linked role required for OpenSearch Service domains that use VPC access. This permission is deprecated. Use the IAM API to delete service-linked roles
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-deleteservicerole
   */
  DeleteElasticsearchServiceRole = "es:DeleteElasticsearchServiceRole",

  /**
   * Write - Grants permission to the destination domain owner to delete an existing inbound cross-cluster search connection
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-delete-inbound-cross-cluster-search-connection
   */
  DeleteInboundConnection = "es:DeleteInboundConnection",

  /**
   * Write - Grants permission to the destination domain owner to delete an existing inbound cross-cluster search connection. This permission is deprecated. Use DeleteInboundConnection instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-delete-inbound-cross-cluster-search-connection
   */
  DeleteInboundCrossClusterSearchConnection = "es:DeleteInboundCrossClusterSearchConnection",

  /**
   * Write - Grants permission to the source domain owner to delete an existing outbound cross-cluster search connection
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-delete-outbound-cross-cluster-search-connection
   */
  DeleteOutboundConnection = "es:DeleteOutboundConnection",

  /**
   * Write - Grants permission to the source domain owner to delete an existing outbound cross-cluster search connection. This permission is deprecated. Use DeleteOutboundConnection instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-delete-outbound-cross-cluster-search-connection
   */
  DeleteOutboundCrossClusterSearchConnection = "es:DeleteOutboundCrossClusterSearchConnection",

  /**
   * Write - Grants permission to delete a package from OpenSearch Service. The package cannot be associated with any domains
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-deletepackage
   */
  DeletePackage = "es:DeletePackage",

  /**
   * Read - Grants permission to view a description of the domain configuration for the specified OpenSearch Service domain, including the domain ID, service endpoint, and ARN
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomain
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  DescribeDomain = "es:DescribeDomain",

  /**
   * Read - Grants permission to view the Auto-Tune configuration of the domain for the specified OpenSearch Service domain, including the Auto-Tune state and maintenance schedules
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describeautotune
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  DescribeDomainAutoTunes = "es:DescribeDomainAutoTunes",

  /**
   * Read - Grants permission to view detail stage progress of an OpenSearch Service domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomainchangeprogress
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  DescribeDomainChangeProgress = "es:DescribeDomainChangeProgress",

  /**
   * Read - Grants permission to view a description of the configuration options and status of an OpenSearch Service domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomainconfig
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  DescribeDomainConfig = "es:DescribeDomainConfig",

  /**
   * List - Grants permission to view a description of the domain configuration for up to five specified OpenSearch Service domains
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomains
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  DescribeDomains = "es:DescribeDomains",

  /**
   * Read - Grants permission to view a description of the domain configuration for the specified OpenSearch Service domain, including the domain ID, service endpoint, and ARN. This permission is deprecated. Use DescribeDomain instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomain
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  DescribeElasticsearchDomain = "es:DescribeElasticsearchDomain",

  /**
   * Read - Grants permission to view a description of the configuration and status of an OpenSearch Service domain. This permission is deprecated. Use DescribeDomainConfig instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomainconfig
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  DescribeElasticsearchDomainConfig = "es:DescribeElasticsearchDomainConfig",

  /**
   * List - Grants permission to view a description of the domain configuration for up to five specified Amazon OpenSearch domains. This permission is deprecated. Use DescribeDomains instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomains
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  DescribeElasticsearchDomains = "es:DescribeElasticsearchDomains",

  /**
   * List - Grants permission to view the instance count, storage, and master node limits for a given OpenSearch version and instance type. This permission is deprecated. Use DescribeInstanceTypeLimits instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describeinstancetypelimits
   */
  DescribeElasticsearchInstanceTypeLimits = "es:DescribeElasticsearchInstanceTypeLimits",

  /**
   * List - Grants permission to list all the inbound cross-cluster search connections for a destination domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describe-inbound-cross-cluster-search-connections
   */
  DescribeInboundConnections = "es:DescribeInboundConnections",

  /**
   * List - Grants permission to list all the inbound cross-cluster search connections for a destination domain. This permission is deprecated. Use DescribeInboundConnections instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describe-inbound-cross-cluster-search-connections
   */
  DescribeInboundCrossClusterSearchConnections = "es:DescribeInboundCrossClusterSearchConnections",

  /**
   * List - Grants permission to view the instance count, storage, and master node limits for a given engine version and instance type
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describeinstancetypelimits
   */
  DescribeInstanceTypeLimits = "es:DescribeInstanceTypeLimits",

  /**
   * List - Grants permission to list all the outbound cross-cluster search connections for a source domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describe-outbound-cross-cluster-search-connections
   */
  DescribeOutboundConnections = "es:DescribeOutboundConnections",

  /**
   * List - Grants permission to list all the outbound cross-cluster search connections for a source domain. This permission is deprecated. Use DescribeOutboundConnections instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describe-outbound-cross-cluster-search-connections
   */
  DescribeOutboundCrossClusterSearchConnections = "es:DescribeOutboundCrossClusterSearchConnections",

  /**
   * Read - Grants permission to describe all packages available to OpenSearch Service domains
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describepackages
   */
  DescribePackages = "es:DescribePackages",

  /**
   * List - Grants permission to fetch Reserved Instance offerings for Amazon OpenSearch Service. This permission is deprecated. Use DescribeReservedInstanceOfferings instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describereservedinstanceofferings
   */
  DescribeReservedElasticsearchInstanceOfferings = "es:DescribeReservedElasticsearchInstanceOfferings",

  /**
   * List - Grants permission to fetch OpenSearch Service Reserved Instances that have already been purchased. This permission is deprecated. Use DescribeReservedInstances instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describereservedinstances
   */
  DescribeReservedElasticsearchInstances = "es:DescribeReservedElasticsearchInstances",

  /**
   * List - Grants permission to fetch Reserved Instance offerings for OpenSearch Service
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describereservedinstanceofferings
   */
  DescribeReservedInstanceOfferings = "es:DescribeReservedInstanceOfferings",

  /**
   * List - Grants permission to fetch OpenSearch Service Reserved Instances that have already been purchased
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describereservedinstances
   */
  DescribeReservedInstances = "es:DescribeReservedInstances",

  /**
   * Write - Grants permission to disassociate a package from the specified OpenSearch Service domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-dissociatepackage
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  DissociatePackage = "es:DissociatePackage",

  /**
   * Read - Grants permission to send cross-cluster requests to a destination domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  ESCrossClusterGet = "es:ESCrossClusterGet",

  /**
   * Write - Grants permission to send HTTP DELETE requests to the OpenSearch APIs
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  ESHttpDelete = "es:ESHttpDelete",

  /**
   * Read - Grants permission to send HTTP GET requests to the OpenSearch APIs
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  ESHttpGet = "es:ESHttpGet",

  /**
   * Read - Grants permission to send HTTP HEAD requests to the OpenSearch APIs
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  ESHttpHead = "es:ESHttpHead",

  /**
   * Write - Grants permission to send HTTP PATCH requests to the OpenSearch APIs
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  ESHttpPatch = "es:ESHttpPatch",

  /**
   * Write - Grants permission to send HTTP POST requests to the OpenSearch APIs
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  ESHttpPost = "es:ESHttpPost",

  /**
   * Write - Grants permission to send HTTP PUT requests to the OpenSearch APIs
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  ESHttpPut = "es:ESHttpPut",

  /**
   * List - Grants permission to fetch a list of compatible OpenSearch and Elasticsearch versions to which an OpenSearch Service domain can be upgraded. This permission is deprecated. Use GetCompatibleVersions instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-get-compat-vers
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  GetCompatibleElasticsearchVersions = "es:GetCompatibleElasticsearchVersions",

  /**
   * List - Grants permission to fetch list of compatible engine versions to which an OpenSearch Service domain can be upgraded
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-get-compat-vers
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  GetCompatibleVersions = "es:GetCompatibleVersions",

  /**
   * Read - Grants permission to fetch the version history for a package
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-get-pac-ver-hist
   */
  GetPackageVersionHistory = "es:GetPackageVersionHistory",

  /**
   * Read - Grants permission to fetch the upgrade history of a given OpenSearch Service domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-get-upgrade-hist
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  GetUpgradeHistory = "es:GetUpgradeHistory",

  /**
   * Read - Grants permission to fetch the upgrade status of a given OpenSearch Service domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-get-upgrade-stat
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  GetUpgradeStatus = "es:GetUpgradeStatus",

  /**
   * List - Grants permission to display the names of all OpenSearch Service domains that the current user owns
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listdomainnames
   */
  ListDomainNames = "es:ListDomainNames",

  /**
   * List - Grants permission to list all OpenSearch Service domains that a package is associated with
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listdomainsforpackage
   */
  ListDomainsForPackage = "es:ListDomainsForPackage",

  /**
   * List - Grants permission to list all instance types and available features for a given OpenSearch version. This permission is deprecated. Use ListInstanceTypeDetails instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listinstancetypedetails
   */
  ListElasticsearchInstanceTypeDetails = "es:ListElasticsearchInstanceTypeDetails",

  /**
   * List - Grants permission to list all EC2 instance types that are supported for a given OpenSearch version
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html
   */
  ListElasticsearchInstanceTypes = "es:ListElasticsearchInstanceTypes",

  /**
   * List - Grants permission to list all supported OpenSearch versions on Amazon OpenSearch Service. This permission is deprecated. Use ListVersions instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listversions
   */
  ListElasticsearchVersions = "es:ListElasticsearchVersions",

  /**
   * List - Grants permission to list all instance types and available features for a given OpenSearch or Elasticsearch version
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listinstancetypedetails
   */
  ListInstanceTypeDetails = "es:ListInstanceTypeDetails",

  /**
   * List - Grants permission to list all packages associated with the OpenSearch Service domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listpackagesfordomain
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  ListPackagesForDomain = "es:ListPackagesForDomain",

  /**
   * Read - Grants permission to display all resource tags for an OpenSearch Service domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listtags
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  ListTags = "es:ListTags",

  /**
   * List - Grants permission to list all supported OpenSearch and Elasticsearch versions in Amazon OpenSearch Service
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listversions
   */
  ListVersions = "es:ListVersions",

  /**
   * Write - Grants permission to purchase OpenSearch Service Reserved Instances. This permission is deprecated. Use PurchaseReservedInstanceOffering instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-purchasereservedinstance
   */
  PurchaseReservedElasticsearchInstanceOffering = "es:PurchaseReservedElasticsearchInstanceOffering",

  /**
   * Write - Grants permission to purchase OpenSearch reserved instances
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-purchasereservedinstance
   */
  PurchaseReservedInstanceOffering = "es:PurchaseReservedInstanceOffering",

  /**
   * Write - Grants permission to the destination domain owner to reject an inbound cross-cluster search connection request
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-reject-inbound-cross-cluster-search-connection
   */
  RejectInboundConnection = "es:RejectInboundConnection",

  /**
   * Write - Grants permission to the destination domain owner to reject an inbound cross-cluster search connection request. This permission is deprecated. Use RejectInboundConnection instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-reject-inbound-cross-cluster-search-connection
   */
  RejectInboundCrossClusterSearchConnection = "es:RejectInboundCrossClusterSearchConnection",

  /**
   * Tagging - Grants permission to remove resource tags from an OpenSearch Service domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-removetags
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RemoveTags = "es:RemoveTags",

  /**
   * Write - Grants permission to start a service software update of a domain. This permission is deprecated. Use StartServiceSoftwareUpdate instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-startupdate
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  StartElasticsearchServiceSoftwareUpdate = "es:StartElasticsearchServiceSoftwareUpdate",

  /**
   * Write - Grants permission to start a service software update of a domain
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-startupdate
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  StartServiceSoftwareUpdate = "es:StartServiceSoftwareUpdate",

  /**
   * Write - Grants permission to modify the configuration of an OpenSearch Service domain, such as the instance type or number of instances
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-updatedomainconfig
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  UpdateDomainConfig = "es:UpdateDomainConfig",

  /**
   * Write - Grants permission to modify the configuration of an OpenSearch Service domain, such as the instance type or number of instances. This permission is deprecated. Use UpdateDomainConfig instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-updatedomainconfig
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  UpdateElasticsearchDomainConfig = "es:UpdateElasticsearchDomainConfig",

  /**
   * Write - Grants permission to update a package for use with OpenSearch Service domains
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-updatepackage
   */
  UpdatePackage = "es:UpdatePackage",

  /**
   * Write - Grants permission to initiate upgrade of an OpenSearch Service domain to a given version
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-upgrade-domain
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  UpgradeDomain = "es:UpgradeDomain",

  /**
   * Write - Grants permission to initiate upgrade of an OpenSearch Service domain to a specified version. This permission is deprecated. Use UpgradeDomain instead
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-upgrade-domain
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   */
  UpgradeElasticsearchDomain = "es:UpgradeElasticsearchDomain",

  /**
   * * - Grant all es permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchservicesuccessortoamazonelasticsearchservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EsResource.domain `EsResource.domain`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access based on the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access based on the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "es:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchservicesuccessortoamazonelasticsearchservice.html
 */
export const EsResource = {

  /**
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  domain: (options: Partial<{partition: string, region: string, account: string, domainName: string}> = {}) => `arn:${options.partition || '*'}:es:${options.region || '*'}:${options.account || '*'}:domain/${options.domainName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/slr.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  es_role: (options: Partial<{partition: string, account: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:role/aws-service-role/es.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`,

  /**
   * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/slr.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access based on the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  opensearchservice_role: (options: Partial<{partition: string, account: string}> = {}) => `arn:${options.partition || '*'}:iam::${options.account || '*'}:role/aws-service-role/opensearchservice.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`,
}

