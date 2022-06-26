/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53.html
 */
export enum Route53Action {

  /**
   * Write - Grants permission to activate a key-signing key so that it can be used for signing by DNSSEC
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ActivateKeySigningKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  ActivateKeySigningKey = "route53:ActivateKeySigningKey",

  /**
   * Write - Grants permission to associate an additional Amazon VPC with a private hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_AssociateVPCWithHostedZone.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  AssociateVPCWithHostedZone = "route53:AssociateVPCWithHostedZone",

  /**
   * Write - Grants permission to create or delete CIDR blocks within a CIDR collection
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeCidrCollection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.cidrcollection `Route53Resource.cidrcollection`} 
   */
  ChangeCidrCollection = "route53:ChangeCidrCollection",

  /**
   * Write - Grants permission to create, update, or delete a record, which contains authoritative DNS information for a specified domain or subdomain name
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  ChangeResourceRecordSets = "route53:ChangeResourceRecordSets",

  /**
   * Tagging - Grants permission to add, edit, or delete tags for a health check or a hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.healthcheck `Route53Resource.healthcheck`} 
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  ChangeTagsForResource = "route53:ChangeTagsForResource",

  /**
   * Write - Grants permission to create a new CIDR collection
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateCidrCollection.html
   */
  CreateCidrCollection = "route53:CreateCidrCollection",

  /**
   * Write - Grants permission to create a new health check, which monitors the health and performance of your web applications, web servers, and other resources
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHealthCheck.html
   */
  CreateHealthCheck = "route53:CreateHealthCheck",

  /**
   * Write - Grants permission to create a public hosted zone, which you use to specify how the Domain Name System (DNS) routes traffic on the Internet for a domain, such as example.com, and its subdomains
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html
   */
  CreateHostedZone = "route53:CreateHostedZone",

  /**
   * Write - Grants permission to create a new key-signing key associated with a hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateKeySigningKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  CreateKeySigningKey = "route53:CreateKeySigningKey",

  /**
   * Write - Grants permission to create a configuration for DNS query logging
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  CreateQueryLoggingConfig = "route53:CreateQueryLoggingConfig",

  /**
   * Write - Grants permission to create a delegation set (a group of four name servers) that can be reused by multiple hosted zones
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html
   */
  CreateReusableDelegationSet = "route53:CreateReusableDelegationSet",

  /**
   * Write - Grants permission to create a traffic policy, which you use to create multiple DNS records for one domain name (such as example.com) or one subdomain name (such as www.example.com)
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html
   */
  CreateTrafficPolicy = "route53:CreateTrafficPolicy",

  /**
   * Write - Grants permission to create records in a specified hosted zone based on the settings in a specified traffic policy version
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   * - {@link Route53Resource.trafficpolicy `Route53Resource.trafficpolicy`} 
   */
  CreateTrafficPolicyInstance = "route53:CreateTrafficPolicyInstance",

  /**
   * Write - Grants permission to create a new version of an existing traffic policy
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyVersion.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.trafficpolicy `Route53Resource.trafficpolicy`} 
   */
  CreateTrafficPolicyVersion = "route53:CreateTrafficPolicyVersion",

  /**
   * Write - Grants permission to authorize the AWS account that created a specified VPC to submit an AssociateVPCWithHostedZone request, which associates the VPC with a specified hosted zone that was created by a different account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateVPCAssociationAuthorization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  CreateVPCAssociationAuthorization = "route53:CreateVPCAssociationAuthorization",

  /**
   * Write - Grants permission to deactivate a key-signing key so that it will not be used for signing by DNSSEC
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeactivateKeySigningKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  DeactivateKeySigningKey = "route53:DeactivateKeySigningKey",

  /**
   * Write - Grants permission to delete a CIDR collection
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteCidrCollection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.cidrcollection `Route53Resource.cidrcollection`} 
   */
  DeleteCidrCollection = "route53:DeleteCidrCollection",

  /**
   * Write - Grants permission to delete a health check
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHealthCheck.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.healthcheck `Route53Resource.healthcheck`} 
   */
  DeleteHealthCheck = "route53:DeleteHealthCheck",

  /**
   * Write - Grants permission to delete a hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  DeleteHostedZone = "route53:DeleteHostedZone",

  /**
   * Write - Grants permission to delete a key-signing key
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteKeySigningKey.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  DeleteKeySigningKey = "route53:DeleteKeySigningKey",

  /**
   * Write - Grants permission to delete a configuration for DNS query logging
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.queryloggingconfig `Route53Resource.queryloggingconfig`} 
   */
  DeleteQueryLoggingConfig = "route53:DeleteQueryLoggingConfig",

  /**
   * Write - Grants permission to delete a reusable delegation set
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteReusableDelegationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.delegationset `Route53Resource.delegationset`} 
   */
  DeleteReusableDelegationSet = "route53:DeleteReusableDelegationSet",

  /**
   * Write - Grants permission to delete a traffic policy
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.trafficpolicy `Route53Resource.trafficpolicy`} 
   */
  DeleteTrafficPolicy = "route53:DeleteTrafficPolicy",

  /**
   * Write - Grants permission to delete a traffic policy instance and all the records that Route 53 created when you created the instance
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicyInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.trafficpolicyinstance `Route53Resource.trafficpolicyinstance`} 
   */
  DeleteTrafficPolicyInstance = "route53:DeleteTrafficPolicyInstance",

  /**
   * Write - Grants permission to remove authorization for associating an Amazon Virtual Private Cloud with a Route 53 private hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteVPCAssociationAuthorization.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  DeleteVPCAssociationAuthorization = "route53:DeleteVPCAssociationAuthorization",

  /**
   * Write - Grants permission to disable DNSSEC signing in a specific hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DisableHostedZoneDNSSEC.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  DisableHostedZoneDNSSEC = "route53:DisableHostedZoneDNSSEC",

  /**
   * Write - Grants permission to disassociate an Amazon Virtual Private Cloud from a Route 53 private hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_DisassociateVPCFromHostedZone.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  DisassociateVPCFromHostedZone = "route53:DisassociateVPCFromHostedZone",

  /**
   * Write - Grants permission to enable DNSSEC signing in a specific hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_EnableHostedZoneDNSSEC.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  EnableHostedZoneDNSSEC = "route53:EnableHostedZoneDNSSEC",

  /**
   * Read - Grants permission to get the specified limit for the current account, for example, the maximum number of health checks that you can create using the account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html
   */
  GetAccountLimit = "route53:GetAccountLimit",

  /**
   * List - Grants permission to get the current status of a request to create, update, or delete one or more records
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.change `Route53Resource.change`} 
   */
  GetChange = "route53:GetChange",

  /**
   * List - Grants permission to get a list of the IP ranges that are used by Route 53 health checkers to check the health of your resources
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetCheckerIpRanges.html
   */
  GetCheckerIpRanges = "route53:GetCheckerIpRanges",

  /**
   * Read - Grants permission to get information about DNSSEC for a specific hosted zone, including the key-signing keys in the hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetDNSSEC.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  GetDNSSEC = "route53:GetDNSSEC",

  /**
   * List - Grants permission to get information about whether a specified geographic location is supported for Route 53 geolocation records
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetGeoLocation.html
   */
  GetGeoLocation = "route53:GetGeoLocation",

  /**
   * Read - Grants permission to get information about a specified health check
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheck.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.healthcheck `Route53Resource.healthcheck`} 
   */
  GetHealthCheck = "route53:GetHealthCheck",

  /**
   * List - Grants permission to get the number of health checks that are associated with the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckCount.html
   */
  GetHealthCheckCount = "route53:GetHealthCheckCount",

  /**
   * List - Grants permission to get the reason that a specified health check failed most recently
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckLastFailureReason.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.healthcheck `Route53Resource.healthcheck`} 
   */
  GetHealthCheckLastFailureReason = "route53:GetHealthCheckLastFailureReason",

  /**
   * List - Grants permission to get the status of a specified health check
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckStatus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.healthcheck `Route53Resource.healthcheck`} 
   */
  GetHealthCheckStatus = "route53:GetHealthCheckStatus",

  /**
   * List - Grants permission to get information about a specified hosted zone including the four name servers that Route 53 assigned to the hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  GetHostedZone = "route53:GetHostedZone",

  /**
   * List - Grants permission to get the number of hosted zones that are associated with the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneCount.html
   */
  GetHostedZoneCount = "route53:GetHostedZoneCount",

  /**
   * Read - Grants permission to get the specified limit for a specified hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneLimit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  GetHostedZoneLimit = "route53:GetHostedZoneLimit",

  /**
   * Read - Grants permission to get information about a specified configuration for DNS query logging
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetQueryLoggingConfig.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.queryloggingconfig `Route53Resource.queryloggingconfig`} 
   */
  GetQueryLoggingConfig = "route53:GetQueryLoggingConfig",

  /**
   * List - Grants permission to get information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.delegationset `Route53Resource.delegationset`} 
   */
  GetReusableDelegationSet = "route53:GetReusableDelegationSet",

  /**
   * Read - Grants permission to get the maximum number of hosted zones that you can associate with the specified reusable delegation set
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.delegationset `Route53Resource.delegationset`} 
   */
  GetReusableDelegationSetLimit = "route53:GetReusableDelegationSetLimit",

  /**
   * Read - Grants permission to get information about a specified traffic policy version
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.trafficpolicy `Route53Resource.trafficpolicy`} 
   */
  GetTrafficPolicy = "route53:GetTrafficPolicy",

  /**
   * Read - Grants permission to get information about a specified traffic policy instance
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.trafficpolicyinstance `Route53Resource.trafficpolicyinstance`} 
   */
  GetTrafficPolicyInstance = "route53:GetTrafficPolicyInstance",

  /**
   * Read - Grants permission to get the number of traffic policy instances that are associated with the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstanceCount.html
   */
  GetTrafficPolicyInstanceCount = "route53:GetTrafficPolicyInstanceCount",

  /**
   * List - Grants permission to get a list of the CIDR blocks within a specified CIDR collection
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrBlocks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.cidrcollection `Route53Resource.cidrcollection`} 
   */
  ListCidrBlocks = "route53:ListCidrBlocks",

  /**
   * List - Grants permission to get a list of the CIDR collections that are associated with the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrCollections.html
   */
  ListCidrCollections = "route53:ListCidrCollections",

  /**
   * List - Grants permission to get a list of the CIDR locations that belong to a specified CIDR collection
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrLocations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.cidrcollection `Route53Resource.cidrcollection`} 
   */
  ListCidrLocations = "route53:ListCidrLocations",

  /**
   * Read - Grants permission to get a list of geographic locations that Route 53 supports for geolocation
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html
   */
  ListGeoLocations = "route53:ListGeoLocations",

  /**
   * Read - Grants permission to get a list of the health checks that are associated with the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHealthChecks.html
   */
  ListHealthChecks = "route53:ListHealthChecks",

  /**
   * List - Grants permission to get a list of the public and private hosted zones that are associated with the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html
   */
  ListHostedZones = "route53:ListHostedZones",

  /**
   * List - Grants permission to get a list of your hosted zones in lexicographic order. Hosted zones are sorted by name with the labels reversed, for example, com.example.www
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByName.html
   */
  ListHostedZonesByName = "route53:ListHostedZonesByName",

  /**
   * List - Grants permission to get a list of all the private hosted zones that a specified VPC is associated with
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html
   */
  ListHostedZonesByVPC = "route53:ListHostedZonesByVPC",

  /**
   * List - Grants permission to list the configurations for DNS query logging that are associated with the current AWS account or the configuration that is associated with a specified hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  ListQueryLoggingConfigs = "route53:ListQueryLoggingConfigs",

  /**
   * List - Grants permission to list the records in a specified hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResourceRecordSets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  ListResourceRecordSets = "route53:ListResourceRecordSets",

  /**
   * Read - Grants permission to list the reusable delegation sets that are associated with the current AWS account.
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListReusableDelegationSets.html
   */
  ListReusableDelegationSets = "route53:ListReusableDelegationSets",

  /**
   * Read - Grants permission to list tags for one health check or hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.healthcheck `Route53Resource.healthcheck`} 
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  ListTagsForResource = "route53:ListTagsForResource",

  /**
   * Read - Grants permission to list tags for up to 10 health checks or hosted zones
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.healthcheck `Route53Resource.healthcheck`} 
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  ListTagsForResources = "route53:ListTagsForResources",

  /**
   * List - Grants permission to get information about the latest version for every traffic policy that is associated with the current AWS account. Policies are listed in the order in which they were created
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html
   */
  ListTrafficPolicies = "route53:ListTrafficPolicies",

  /**
   * Read - Grants permission to get information about the traffic policy instances that you created by using the current AWS account
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstances.html
   */
  ListTrafficPolicyInstances = "route53:ListTrafficPolicyInstances",

  /**
   * List - Grants permission to get information about the traffic policy instances that you created in a specified hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByHostedZone.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  ListTrafficPolicyInstancesByHostedZone = "route53:ListTrafficPolicyInstancesByHostedZone",

  /**
   * List - Grants permission to get information about the traffic policy instances that you created using a specified traffic policy version
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.trafficpolicy `Route53Resource.trafficpolicy`} 
   */
  ListTrafficPolicyInstancesByPolicy = "route53:ListTrafficPolicyInstancesByPolicy",

  /**
   * List - Grants permission to get information about all the versions for a specified traffic policy
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyVersions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.trafficpolicy `Route53Resource.trafficpolicy`} 
   */
  ListTrafficPolicyVersions = "route53:ListTrafficPolicyVersions",

  /**
   * List - Grants permission to get a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListVPCAssociationAuthorizations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  ListVPCAssociationAuthorizations = "route53:ListVPCAssociationAuthorizations",

  /**
   * Read - Grants permission to get the value that Route 53 returns in response to a DNS query for a specified record name and type
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_TestDNSAnswer.html
   */
  TestDNSAnswer = "route53:TestDNSAnswer",

  /**
   * Write - Grants permission to update an existing health check
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.healthcheck `Route53Resource.healthcheck`} 
   */
  UpdateHealthCheck = "route53:UpdateHealthCheck",

  /**
   * Write - Grants permission to update the comment for a specified hosted zone
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHostedZoneComment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   */
  UpdateHostedZoneComment = "route53:UpdateHostedZoneComment",

  /**
   * Write - Grants permission to update the comment for a specified traffic policy version
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyComment.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.trafficpolicy `Route53Resource.trafficpolicy`} 
   */
  UpdateTrafficPolicyComment = "route53:UpdateTrafficPolicyComment",

  /**
   * Write - Grants permission to update the records in a specified hosted zone that were created based on the settings in a specified traffic policy version
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyInstance.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.trafficpolicyinstance `Route53Resource.trafficpolicyinstance`} 
   */
  UpdateTrafficPolicyInstance = "route53:UpdateTrafficPolicyInstance",

  /**
   * * - Grant all route53 permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link Route53Resource.hostedzone `Route53Resource.hostedzone`} 
   * - {@link Route53Resource.cidrcollection `Route53Resource.cidrcollection`} 
   * - {@link Route53Resource.healthcheck `Route53Resource.healthcheck`} 
   * - {@link Route53Resource.trafficpolicy `Route53Resource.trafficpolicy`} 
   * - {@link Route53Resource.queryloggingconfig `Route53Resource.queryloggingconfig`} 
   * - {@link Route53Resource.delegationset `Route53Resource.delegationset`} 
   * - {@link Route53Resource.trafficpolicyinstance `Route53Resource.trafficpolicyinstance`} 
   * - {@link Route53Resource.change `Route53Resource.change`} 
   */
  All = "route53:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53.html
 */
export const Route53Resource = {

  /**
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/API_CidrCollection.html
   */
  cidrcollection: (options: Partial<{partition: string, id: string}> = {}) => `arn:${options.partition || '*'}:route53:::cidrcollection/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/APIReference/API_Change.html
   */
  change: (options: Partial<{partition: string, id: string}> = {}) => `arn:${options.partition || '*'}:route53:::change/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-reusable-delegation-set
   */
  delegationset: (options: Partial<{partition: string, id: string}> = {}) => `arn:${options.partition || '*'}:route53:::delegationset/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-health-check
   */
  healthcheck: (options: Partial<{partition: string, id: string}> = {}) => `arn:${options.partition || '*'}:route53:::healthcheck/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-hosted-zone
   */
  hostedzone: (options: Partial<{partition: string, id: string}> = {}) => `arn:${options.partition || '*'}:route53:::hostedzone/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-policies.html
   */
  trafficpolicy: (options: Partial<{partition: string, id: string}> = {}) => `arn:${options.partition || '*'}:route53:::trafficpolicy/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-policy-records.html
   */
  trafficpolicyinstance: (options: Partial<{partition: string, id: string}> = {}) => `arn:${options.partition || '*'}:route53:::trafficpolicyinstance/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html
   */
  queryloggingconfig: (options: Partial<{partition: string, id: string}> = {}) => `arn:${options.partition || '*'}:route53:::queryloggingconfig/${options.id || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html
   */
  vpc: (options: Partial<{partition: string, region: string, account: string, vpcId: string}> = {}) => `arn:${options.partition || '*'}:ec2:${options.region || '*'}:${options.account || '*'}:vpc/${options.vpcId || '*'}`,
}

