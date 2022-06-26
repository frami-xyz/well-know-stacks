/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostexplorerservice.html
 */
export enum CeAction {

  /**
   * Write - Grants permission to create a new Anomaly Monitor
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateAnomalyMonitor.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAnomalyMonitor = "ce:CreateAnomalyMonitor",

  /**
   * Write - Grants permission to create a new Anomaly Subscription
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateAnomalySubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAnomalySubscription = "ce:CreateAnomalySubscription",

  /**
   * Write - Grants permission to create a new Cost Category with the requested name and rules
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CreateCostCategoryDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCostCategoryDefinition = "ce:CreateCostCategoryDefinition",

  /**
   * Write - Grants permission to create Reservation expiration alerts
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  CreateNotificationSubscription = "ce:CreateNotificationSubscription",

  /**
   * Write - Grants permission to create Cost Explorer Reports
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  CreateReport = "ce:CreateReport",

  /**
   * Write - Grants permission to delete an Anomaly Monitor
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteAnomalyMonitor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.anomalymonitor `CeResource.anomalymonitor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAnomalyMonitor = "ce:DeleteAnomalyMonitor",

  /**
   * Write - Grants permission to delete an Anomaly Subscription
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteAnomalySubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.anomalysubscription `CeResource.anomalysubscription`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteAnomalySubscription = "ce:DeleteAnomalySubscription",

  /**
   * Write - Grants permission to delete a Cost Category
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DeleteCostCategoryDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.costcategory `CeResource.costcategory`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteCostCategoryDefinition = "ce:DeleteCostCategoryDefinition",

  /**
   * Write - Grants permission to delete Reservation expiration alerts
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  DeleteNotificationSubscription = "ce:DeleteNotificationSubscription",

  /**
   * Write - Grants permission to delete Cost Explorer Reports
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  DeleteReport = "ce:DeleteReport",

  /**
   * Read - Grants permission to retrieve descriptions such as the name, ARN, rules, definition, and effective dates of a Cost Category
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DescribeCostCategoryDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.costcategory `CeResource.costcategory`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeCostCategoryDefinition = "ce:DescribeCostCategoryDefinition",

  /**
   * Read - Grants permission to view Reservation expiration alerts
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  DescribeNotificationSubscription = "ce:DescribeNotificationSubscription",

  /**
   * Read - Grants permission to view Cost Explorer Reports page
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  DescribeReport = "ce:DescribeReport",

  /**
   * Read - Grants permission to retrieve anomalies
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.anomalymonitor `CeResource.anomalymonitor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAnomalies = "ce:GetAnomalies",

  /**
   * Read - Grants permission to query Anomaly Monitors
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalyMonitors.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.anomalymonitor `CeResource.anomalymonitor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAnomalyMonitors = "ce:GetAnomalyMonitors",

  /**
   * Read - Grants permission to query Anomaly Subscriptions
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalySubscriptions.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.anomalysubscription `CeResource.anomalysubscription`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  GetAnomalySubscriptions = "ce:GetAnomalySubscriptions",

  /**
   * Read - Grants permission to retrieve the cost and usage metrics for your account
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html
   */
  GetCostAndUsage = "ce:GetCostAndUsage",

  /**
   * Read - Grants permission to retrieve the cost and usage metrics with resources for your account
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsageWithResources.html
   */
  GetCostAndUsageWithResources = "ce:GetCostAndUsageWithResources",

  /**
   * Read - Grants permission to query Cost Catagory names and values for a specified time period
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostCategories.html
   */
  GetCostCategories = "ce:GetCostCategories",

  /**
   * Read - Grants permission to retrieve a cost forecast for a forecast time period
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostForecast.html
   */
  GetCostForecast = "ce:GetCostForecast",

  /**
   * Read - Grants permission to retrieve all available filter values for a filter for a period of time
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html
   */
  GetDimensionValues = "ce:GetDimensionValues",

  /**
   * Read - Grants permission to view Cost Explorer Preferences page
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  GetPreferences = "ce:GetPreferences",

  /**
   * Read - Grants permission to retrieve the reservation coverage for your account
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationCoverage.html
   */
  GetReservationCoverage = "ce:GetReservationCoverage",

  /**
   * Read - Grants permission to retrieve the reservation recommendations for your account
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationPurchaseRecommendation.html
   */
  GetReservationPurchaseRecommendation = "ce:GetReservationPurchaseRecommendation",

  /**
   * Read - Grants permission to retrieve the reservation utilization for your account
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetReservationUtilization.html
   */
  GetReservationUtilization = "ce:GetReservationUtilization",

  /**
   * Read - Grants permission to retrieve the rightsizing recommendations for your account
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetRightsizingRecommendation.html
   */
  GetRightsizingRecommendation = "ce:GetRightsizingRecommendation",

  /**
   * Read - Grants permission to retrieve the Savings Plans coverage for your account
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansCoverage.html
   */
  GetSavingsPlansCoverage = "ce:GetSavingsPlansCoverage",

  /**
   * Read - Grants permission to retrieve the Savings Plans recommendations for your account
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansPurchaseRecommendation.html
   */
  GetSavingsPlansPurchaseRecommendation = "ce:GetSavingsPlansPurchaseRecommendation",

  /**
   * Read - Grants permission to retrieve the Savings Plans utilization for your account
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansUtilization.html
   */
  GetSavingsPlansUtilization = "ce:GetSavingsPlansUtilization",

  /**
   * Read - Grants permission to retrieve the Savings Plans utilization details for your account
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetSavingsPlansUtilizationDetails.html
   */
  GetSavingsPlansUtilizationDetails = "ce:GetSavingsPlansUtilizationDetails",

  /**
   * Read - Grants permission to query tags for a specified time period
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetTags.html
   */
  GetTags = "ce:GetTags",

  /**
   * Read - Grants permission to retrieve a usage forecast for a forecast time period
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetUsageForecast.html
   */
  GetUsageForecast = "ce:GetUsageForecast",

  /**
   * List - Grants permission to list Cost Allocation Tags
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListCostAllocationTags.html
   */
  ListCostAllocationTags = "ce:ListCostAllocationTags",

  /**
   * List - Grants permission to retrieve names, ARN, and effective dates for all Cost Categories
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListCostCategoryDefinitions.html
   */
  ListCostCategoryDefinitions = "ce:ListCostCategoryDefinitions",

  /**
   * Read - Grants permission to list tags for a Cost Explorer resource
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.anomalymonitor `CeResource.anomalymonitor`} 
   * - {@link CeResource.anomalysubscription `CeResource.anomalysubscription`} 
   * - {@link CeResource.costcategory `CeResource.costcategory`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "ce:ListTagsForResource",

  /**
   * Write - Grants permission to provide feedback on detected anomalies
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProvideAnomalyFeedback.html
   */
  ProvideAnomalyFeedback = "ce:ProvideAnomalyFeedback",

  /**
   * Tagging - Grants permission to tag a Cost Explorer resource
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.anomalymonitor `CeResource.anomalymonitor`} 
   * - {@link CeResource.anomalysubscription `CeResource.anomalysubscription`} 
   * - {@link CeResource.costcategory `CeResource.costcategory`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "ce:TagResource",

  /**
   * Tagging - Grants permission to remove tags from a Cost Explorer resource
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.anomalymonitor `CeResource.anomalymonitor`} 
   * - {@link CeResource.anomalysubscription `CeResource.anomalysubscription`} 
   * - {@link CeResource.costcategory `CeResource.costcategory`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "ce:UntagResource",

  /**
   * Write - Grants permission to update an existing Anomaly Monitor
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalyMonitor.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.anomalymonitor `CeResource.anomalymonitor`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateAnomalyMonitor = "ce:UpdateAnomalyMonitor",

  /**
   * Write - Grants permission to update an existing Anomaly Subscription
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateAnomalySubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.anomalysubscription `CeResource.anomalysubscription`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateAnomalySubscription = "ce:UpdateAnomalySubscription",

  /**
   * Write - Grants permission to update existing Cost Allocation Tags status
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateCostAllocationTagsStatus.html
   */
  UpdateCostAllocationTagsStatus = "ce:UpdateCostAllocationTagsStatus",

  /**
   * Write - Grants permission to update an existing Cost Category
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_UpdateCostCategoryDefinition.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.costcategory `CeResource.costcategory`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateCostCategoryDefinition = "ce:UpdateCostCategoryDefinition",

  /**
   * Write - Grants permission to update Reservation expiration alerts
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  UpdateNotificationSubscription = "ce:UpdateNotificationSubscription",

  /**
   * Write - Grants permission to edit Cost Explorer Preferences page
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  UpdatePreferences = "ce:UpdatePreferences",

  /**
   * Write - Grants permission to update Cost Explorer Reports
   * @see https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  UpdateReport = "ce:UpdateReport",

  /**
   * * - Grant all ce permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostexplorerservice.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link CeResource.anomalymonitor `CeResource.anomalymonitor`} 
   * - {@link CeResource.anomalysubscription `CeResource.anomalysubscription`} 
   * - {@link CeResource.costcategory `CeResource.costcategory`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "ce:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscostexplorerservice.html
 */
export const CeResource = {

  /**
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  anomalysubscription: (options: Partial<{partition: string, account: string, identifier: string}> = {}) => `arn:${options.partition || '*'}:ce::${options.account || '*'}:anomalysubscription/${options.identifier || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  anomalymonitor: (options: Partial<{partition: string, account: string, identifier: string}> = {}) => `arn:${options.partition || '*'}:ce::${options.account || '*'}:anomalymonitor/${options.identifier || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  costcategory: (options: Partial<{partition: string, account: string, identifier: string}> = {}) => `arn:${options.partition || '*'}:ce::${options.account || '*'}:costcategory/${options.identifier || '*'}`,
}

