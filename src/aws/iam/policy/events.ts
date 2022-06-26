/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridge.html
 */
export enum EventsAction {

  /**
   * Write - Grants permission to activate partner event sources
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventSource `EventsResource.eventSource`} 
   */
  ActivateEventSource = "events:ActivateEventSource",

  /**
   * Write - Grants permission to cancel a replay
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CancelReplay.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.replay `EventsResource.replay`} 
   */
  CancelReplay = "events:CancelReplay",

  /**
   * Write - Grants permission to create a new api destination
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateApiDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.apiDestination `EventsResource.apiDestination`} 
   * - {@link EventsResource.connection `EventsResource.connection`} 
   */
  CreateApiDestination = "events:CreateApiDestination",

  /**
   * Write - Grants permission to create a new archive
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateArchive.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.archive `EventsResource.archive`} 
   */
  CreateArchive = "events:CreateArchive",

  /**
   * Write - Grants permission to create a new connection
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.connection `EventsResource.connection`} 
   */
  CreateConnection = "events:CreateConnection",

  /**
   * Write - Grants permission to create an endpoint
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.endpoint `EventsResource.endpoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:EventBusArn`: Filters access by the ARN of the event buses that can be associated with an endpoint to CreateEndpoint and UpdateEndpoint actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limiting-access-to-event-buses documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfARN `ArrayOfARN`})
   */
  CreateEndpoint = "events:CreateEndpoint",

  /**
   * Write - Grants permission to create event buses
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventBus `EventsResource.eventBus`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags to event bus and rule actions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tags in the request to event bus and rule actions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateEventBus = "events:CreateEventBus",

  /**
   * Write - Grants permission to create partner event sources
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreatePartnerEventSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventSource `EventsResource.eventSource`} 
   */
  CreatePartnerEventSource = "events:CreatePartnerEventSource",

  /**
   * Write - Grants permission to deactivate event sources
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeactivateEventSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventSource `EventsResource.eventSource`} 
   */
  DeactivateEventSource = "events:DeactivateEventSource",

  /**
   * Write - Grants permission to deauthorize a connection, deleting its stored authorization secrets
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeauthorizeConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.connection `EventsResource.connection`} 
   */
  DeauthorizeConnection = "events:DeauthorizeConnection",

  /**
   * Write - Grants permission to delete an api destination
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteApiDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.apiDestination `EventsResource.apiDestination`} 
   */
  DeleteApiDestination = "events:DeleteApiDestination",

  /**
   * Write - Grants permission to delete an archive
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteArchive.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.archive `EventsResource.archive`} 
   */
  DeleteArchive = "events:DeleteArchive",

  /**
   * Write - Grants permission to delete a connection
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.connection `EventsResource.connection`} 
   */
  DeleteConnection = "events:DeleteConnection",

  /**
   * Write - Grants permission to delete an endpoint
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.endpoint `EventsResource.endpoint`} 
   */
  DeleteEndpoint = "events:DeleteEndpoint",

  /**
   * Write - Grants permission to delete event buses
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeletePartnerEventSource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventBus `EventsResource.eventBus`} 
   */
  DeleteEventBus = "events:DeleteEventBus",

  /**
   * Write - Grants permission to delete partner event sources
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeletePartnerEventSource
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventSource `EventsResource.eventSource`} 
   */
  DeletePartnerEventSource = "events:DeletePartnerEventSource",

  /**
   * Write - Grants permission to delete rules
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DeleteRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:ManagedBy`: Filters access by AWS services. If a rule is created by an AWS service on your behalf, the value is the principal name of the service that created the rule ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteRule = "events:DeleteRule",

  /**
   * Read - Grants permission to retrieve details about an api destination
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeApiDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.apiDestination `EventsResource.apiDestination`} 
   * - {@link EventsResource.connection `EventsResource.connection`} 
   */
  DescribeApiDestination = "events:DescribeApiDestination",

  /**
   * Read - Grants permission to retrieve details about an archive
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeArchive.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.archive `EventsResource.archive`} 
   */
  DescribeArchive = "events:DescribeArchive",

  /**
   * Read - Grants permission to retrieve details about a conection
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.connection `EventsResource.connection`} 
   */
  DescribeConnection = "events:DescribeConnection",

  /**
   * Read - Grants permission to retrieve details about an endpoint
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.endpoint `EventsResource.endpoint`} 
   */
  DescribeEndpoint = "events:DescribeEndpoint",

  /**
   * Read - Grants permission to retrieve details about event buses
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventBus `EventsResource.eventBus`} 
   */
  DescribeEventBus = "events:DescribeEventBus",

  /**
   * Read - Grants permission to retrieve details about event sources
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventSource `EventsResource.eventSource`} 
   */
  DescribeEventSource = "events:DescribeEventSource",

  /**
   * Read - Grants permission to retrieve details about partner event sources
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribePartnerEventSource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventSource `EventsResource.eventSource`} 
   */
  DescribePartnerEventSource = "events:DescribePartnerEventSource",

  /**
   * Read - Grants permission to retrieve the details of a replay
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeReplay.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.replay `EventsResource.replay`} 
   */
  DescribeReplay = "events:DescribeReplay",

  /**
   * Read - Grants permission to retrieve details about rules
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeRule = "events:DescribeRule",

  /**
   * Write - Grants permission to disable rules
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:ManagedBy`: Filters access by AWS services. If a rule is created by an AWS service on your behalf, the value is the principal name of the service that created the rule ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DisableRule = "events:DisableRule",

  /**
   * Write - Grants permission to enable rules
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_EnableRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:ManagedBy`: Filters access by AWS services. If a rule is created by an AWS service on your behalf, the value is the principal name of the service that created the rule ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  EnableRule = "events:EnableRule",

  /**
   * Write - Grants permission to invoke an api destination
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-identity-based-access-control-eventbridge.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.apiDestination `EventsResource.apiDestination`} 
   */
  InvokeApiDestination = "events:InvokeApiDestination",

  /**
   * List - Grants permission to retrieve a list of api destinations
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListApiDestinations.html
   */
  ListApiDestinations = "events:ListApiDestinations",

  /**
   * List - Grants permission to retrieve a list of archives
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListArchives.html
   */
  ListArchives = "events:ListArchives",

  /**
   * List - Grants permission to retrieve a list of connections
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListConnections.html
   */
  ListConnections = "events:ListConnections",

  /**
   * List - Grants permission to retrieve a list of endpoints
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEndpoints.html
   */
  ListEndpoints = "events:ListEndpoints",

  /**
   * List - Grants permission to retrieve a list of the event buses in your account
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEventBuses.html
   */
  ListEventBuses = "events:ListEventBuses",

  /**
   * List - Grants permission to to retrieve a list of event sources shared with this account
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListEventSources.html
   */
  ListEventSources = "events:ListEventSources",

  /**
   * List - Grants permission to retrieve a list of AWS account IDs associated with an event source
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListPartnerEventSourceAccounts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventSource `EventsResource.eventSource`} 
   */
  ListPartnerEventSourceAccounts = "events:ListPartnerEventSourceAccounts",

  /**
   * List - Grants permission to retrieve a list partner event sources
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListPartnerEventSources.html
   */
  ListPartnerEventSources = "events:ListPartnerEventSources",

  /**
   * List - Grants permission to retrieve a list of replays
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListReplays.html
   */
  ListReplays = "events:ListReplays",

  /**
   * List - Grants permission to retrieve a list of the names of the rules associated with a target
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListRuleNamesByTarget.html
   */
  ListRuleNamesByTarget = "events:ListRuleNamesByTarget",

  /**
   * List - Grants permission to retrieve a list of the Amazon EventBridge rules in the account
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListRules.html
   */
  ListRules = "events:ListRules",

  /**
   * List - Grants permission to retrieve a list of tags associated with an Amazon EventBridge resource
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventBus `EventsResource.eventBus`} 
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "events:ListTagsForResource",

  /**
   * List - Grants permission to retrieve a list of targets defined for a rule
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTargetsByRule = "events:ListTargetsByRule",

  /**
   * Write - Grants permission to send custom events to Amazon EventBridge
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventBus `EventsResource.eventBus`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:detail-type`: Filters access by the literal string of the detail-type of the event to PutEvents and PutRule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-pattern-detail-type documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:source`: Filters access by the AWS service or AWS partner event source that generated the event to PutEvents and PutRule actions. Matches the literal string of the source field of the event ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-limit-access-control documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `events:eventBusInvocation`: Filters access by whether the event was generated via API or cross-account bus invocation to PutEvents actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-bus-invocation documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutEvents = "events:PutEvents",

  /**
   * Write - Grants permission to sends custom events to Amazon EventBridge
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPartnerEvents.html
   */
  PutPartnerEvents = "events:PutPartnerEvents",

  /**
   * PermissionsManagement - Grants permission to use the PutPermission action to grants permission to another AWS account to put events to your default event bus
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html
   */
  PutPermission = "events:PutPermission",

  /**
   * Write - Grants permission to create or updates rules
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutRule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:detail.userIdentity.principalId`: Filters access by the literal string for the detail.useridentity.principalid field of the event to PutRule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#consume-specific-events documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:detail-type`: Filters access by the literal string of the detail-type of the event to PutEvents and PutRule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-pattern-detail-type documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:source`: Filters access by the AWS service or AWS partner event source that generated the event to PutEvents and PutRule actions. Matches the literal string of the source field of the event ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-limit-access-control documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `events:detail.service`: Filters access by the literal string for the detail.service field of the event to PutRule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limit-rule-by-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:detail.eventTypeCode`: Filters access by the literal string for the detail.eventTypeCode field of the event to PutRule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limit-rule-by-type-code documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags to event bus and rule actions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tags in the request to event bus and rule actions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:ManagedBy`: Filters access by AWS services. If a rule is created by an AWS service on your behalf, the value is the principal name of the service that created the rule ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutRule = "events:PutRule",

  /**
   * Write - Grants permission to add targets to a rule
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:TargetArn`: Filters access by the ARN of a target that can be put to a rule to PutTargets actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limiting-access-to-targets documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfARN `ArrayOfARN`})
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:ManagedBy`: Filters access by AWS services. If a rule is created by an AWS service on your behalf, the value is the principal name of the service that created the rule ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PutTargets = "events:PutTargets",

  /**
   * PermissionsManagement - Grants permission to revoke the permission of another AWS account to put events to your default event bus
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html
   */
  RemovePermission = "events:RemovePermission",

  /**
   * Write - Grants permission to removes targets from a rule
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:ManagedBy`: Filters access by AWS services. If a rule is created by an AWS service on your behalf, the value is the principal name of the service that created the rule ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  RemoveTargets = "events:RemoveTargets",

  /**
   * Write - Grants permission to start a replay of an archive
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_StartReplay.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.archive `EventsResource.archive`} 
   */
  StartReplay = "events:StartReplay",

  /**
   * Tagging - Grants permission to add a tag to an Amazon EventBridge resource
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventBus `EventsResource.eventBus`} 
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tags in the request to event bus and rule actions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags to event bus and rule actions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "events:TagResource",

  /**
   * Read - Grants permission to test whether an event pattern matches the provided event
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TestEventPattern.html
   */
  TestEventPattern = "events:TestEventPattern",

  /**
   * Tagging - Grants permission to remove a tag from an Amazon EventBridge resource
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventBus `EventsResource.eventBus`} 
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tags in the request to event bus and rule actions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "events:UntagResource",

  /**
   * Write - Grants permission to update an api destination
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateApiDestination.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.apiDestination `EventsResource.apiDestination`} 
   */
  UpdateApiDestination = "events:UpdateApiDestination",

  /**
   * Write - Grants permission to update an archive
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateArchive.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.archive `EventsResource.archive`} 
   */
  UpdateArchive = "events:UpdateArchive",

  /**
   * Write - Grants permission to update a connection
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateConnection.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.connection `EventsResource.connection`} 
   */
  UpdateConnection = "events:UpdateConnection",

  /**
   * Write - Grants permission to update an endpoint
   * @see https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdateEndpoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.endpoint `EventsResource.endpoint`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:EventBusArn`: Filters access by the ARN of the event buses that can be associated with an endpoint to CreateEndpoint and UpdateEndpoint actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limiting-access-to-event-buses documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfARN `ArrayOfARN`})
   */
  UpdateEndpoint = "events:UpdateEndpoint",

  /**
   * * - Grant all events permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridge.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link EventsResource.eventSource `EventsResource.eventSource`} 
   * - {@link EventsResource.replay `EventsResource.replay`} 
   * - {@link EventsResource.apiDestination `EventsResource.apiDestination`} 
   * - {@link EventsResource.connection `EventsResource.connection`} 
   * - {@link EventsResource.archive `EventsResource.archive`} 
   * - {@link EventsResource.endpoint `EventsResource.endpoint`} 
   * - {@link EventsResource.eventBus `EventsResource.eventBus`} 
   * - {@link EventsResource.rule `EventsResource.rule`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `events:EventBusArn`: Filters access by the ARN of the event buses that can be associated with an endpoint to CreateEndpoint and UpdateEndpoint actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limiting-access-to-event-buses documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfARN `ArrayOfARN`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags to event bus and rule actions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tags in the request to event bus and rule actions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `events:creatorAccount`: Filters access by the account the rule was created in to rule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-creator-account documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:ManagedBy`: Filters access by AWS services. If a rule is created by an AWS service on your behalf, the value is the principal name of the service that created the rule ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:detail-type`: Filters access by the literal string of the detail-type of the event to PutEvents and PutRule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-pattern-detail-type documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:source`: Filters access by the AWS service or AWS partner event source that generated the event to PutEvents and PutRule actions. Matches the literal string of the source field of the event ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-limit-access-control documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `events:eventBusInvocation`: Filters access by whether the event was generated via API or cross-account bus invocation to PutEvents actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#events-bus-invocation documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:detail.userIdentity.principalId`: Filters access by the literal string for the detail.useridentity.principalid field of the event to PutRule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#consume-specific-events documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:detail.service`: Filters access by the literal string for the detail.service field of the event to PutRule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limit-rule-by-service documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:detail.eventTypeCode`: Filters access by the literal string for the detail.eventTypeCode field of the event to PutRule actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limit-rule-by-type-code documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `events:TargetArn`: Filters access by the ARN of a target that can be put to a rule to PutTargets actions ({@link https://docs.aws.amazon.com/eventbridge/latest/userguide/policy-keys-eventbridge.html#limiting-access-to-targets documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfARN `ArrayOfARN`})
   */
  All = "events:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridge.html
 */
export const EventsResource = {

  /**
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   */
  eventSource: (options: Partial<{partition: string, region: string, eventSourceName: string}> = {}) => `arn:${options.partition || '*'}:events:${options.region || '*'}::event-source/${options.eventSourceName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource to event bus and rule actions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  eventBus: (options: Partial<{partition: string, region: string, account: string, eventBusName: string}> = {}) => `arn:${options.partition || '*'}:events:${options.region || '*'}:${options.account || '*'}:event-bus/${options.eventBusName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource to event bus and rule actions ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  rule: (options: Partial<{partition: string, region: string, account: string, eventBusName: string, ruleName: string}> = {}) => `arn:${options.partition || '*'}:events:${options.region || '*'}:${options.account || '*'}:rule/[${options.eventBusName || '*'}/]${options.ruleName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   */
  archive: (options: Partial<{partition: string, region: string, account: string, archiveName: string}> = {}) => `arn:${options.partition || '*'}:events:${options.region || '*'}:${options.account || '*'}:archive/${options.archiveName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   */
  replay: (options: Partial<{partition: string, region: string, account: string, replayName: string}> = {}) => `arn:${options.partition || '*'}:events:${options.region || '*'}:${options.account || '*'}:replay/${options.replayName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   */
  connection: (options: Partial<{partition: string, region: string, account: string, connectionName: string}> = {}) => `arn:${options.partition || '*'}:events:${options.region || '*'}:${options.account || '*'}:connection/${options.connectionName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   */
  apiDestination: (options: Partial<{partition: string, region: string, account: string, apiDestinationName: string}> = {}) => `arn:${options.partition || '*'}:events:${options.region || '*'}:${options.account || '*'}:api-destination/${options.apiDestinationName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/eventbridge/latest/userguide/iam-access-control-identity-based-eventbridge.html#eventbridge-arn-format
   */
  endpoint: (options: Partial<{partition: string, region: string, account: string, endpointName: string}> = {}) => `arn:${options.partition || '*'}:events:${options.region || '*'}:${options.account || '*'}:endpoint/${options.endpointName || '*'}`,
}

