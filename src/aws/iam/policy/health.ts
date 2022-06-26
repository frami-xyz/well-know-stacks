/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthapisandnotifications.html
 */
export enum HealthAction {

  /**
   * Read - Grants permission to retrieve a list of accounts that have been affected by the specified events in organization
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html
   */
  DescribeAffectedAccountsForOrganization = "health:DescribeAffectedAccountsForOrganization",

  /**
   * Read - Grants permission to retrieve a list of entities that have been affected by the specified events
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthResource.event `HealthResource.event`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `health:eventTypeCode`: Filters access by event type ({@link https://docs.aws.amazon.com/health/latest/ug/controlling-access.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `health:service`: Filters access by impacted service ({@link https://docs.aws.amazon.com/health/latest/ug/controlling-access.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeAffectedEntities = "health:DescribeAffectedEntities",

  /**
   * Read - Grants permission to retrieve a list of entities that have been affected by the specified events and accounts in organization
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html
   */
  DescribeAffectedEntitiesForOrganization = "health:DescribeAffectedEntitiesForOrganization",

  /**
   * Read - Grants permission to retrieve the number of entities that are affected by each of the specified events
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html
   */
  DescribeEntityAggregates = "health:DescribeEntityAggregates",

  /**
   * Read - Grants permission to retrieve the number of events of each event type (issue, scheduled change, and account notification)
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html
   */
  DescribeEventAggregates = "health:DescribeEventAggregates",

  /**
   * Read - Grants permission to retrieve detailed information about one or more specified events
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthResource.event `HealthResource.event`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `health:eventTypeCode`: Filters access by event type ({@link https://docs.aws.amazon.com/health/latest/ug/controlling-access.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `health:service`: Filters access by impacted service ({@link https://docs.aws.amazon.com/health/latest/ug/controlling-access.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeEventDetails = "health:DescribeEventDetails",

  /**
   * Read - Grants permission to retrieve detailed information about one or more specified events for provided accounts in organization
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html
   */
  DescribeEventDetailsForOrganization = "health:DescribeEventDetailsForOrganization",

  /**
   * Read - Grants permission to retrieve the event types that meet the specified filter criteria
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html
   */
  DescribeEventTypes = "health:DescribeEventTypes",

  /**
   * Read - Grants permission to retrieve information about events that meet the specified filter criteria
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html
   */
  DescribeEvents = "health:DescribeEvents",

  /**
   * Read - Grants permission to retrieve information about events that meet the specified filter criteria in organization
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html
   */
  DescribeEventsForOrganization = "health:DescribeEventsForOrganization",

  /**
   * Read - Grants permission to retrieve the status of enabling or disabling the Organizational View feature
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html
   */
  DescribeHealthServiceStatusForOrganization = "health:DescribeHealthServiceStatusForOrganization",

  /**
   * PermissionsManagement - Grants permission to disable the Organizational View feature
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_DisableHealthServiceAccessForOrganization.html
   */
  DisableHealthServiceAccessForOrganization = "health:DisableHealthServiceAccessForOrganization",

  /**
   * PermissionsManagement - Grants permission to enable the Organizational View feature
   * @see https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html
   */
  EnableHealthServiceAccessForOrganization = "health:EnableHealthServiceAccessForOrganization",

  /**
   * * - Grant all health permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthapisandnotifications.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HealthResource.event `HealthResource.event`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `health:eventTypeCode`: Filters access by event type ({@link https://docs.aws.amazon.com/health/latest/ug/controlling-access.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `health:service`: Filters access by impacted service ({@link https://docs.aws.amazon.com/health/latest/ug/controlling-access.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "health:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awshealthapisandnotifications.html
 */
export const HealthResource = {

  /**
   * @see https://docs.aws.amazon.com/health/latest/ug/supported-operations.html
   */
  event: (options: Partial<{partition: string, service: string, eventTypeCode: string}> = {}) => `arn:${options.partition || '*'}:health:*::event/${options.service || '*'}/${options.eventTypeCode || '*'}/*`,
}

