/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonhoneycode.html
 */
export enum HoneycodeAction {

  /**
   * Write - Grants permission to approve a team association request for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#approve-team-association
   */
  ApproveTeamAssociation = "honeycode:ApproveTeamAssociation",

  /**
   * Write - Grants permission to create new rows in a table
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchCreateTableRows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.table `HoneycodeResource.table`} 
   */
  BatchCreateTableRows = "honeycode:BatchCreateTableRows",

  /**
   * Write - Grants permission to delete rows from a table
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchDeleteTableRows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.table `HoneycodeResource.table`} 
   */
  BatchDeleteTableRows = "honeycode:BatchDeleteTableRows",

  /**
   * Write - Grants permission to update rows in a table
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchUpdateTableRows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.table `HoneycodeResource.table`} 
   */
  BatchUpdateTableRows = "honeycode:BatchUpdateTableRows",

  /**
   * Write - Grants permission to upsert rows in a table
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchUpsertTableRows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.table `HoneycodeResource.table`} 
   */
  BatchUpsertTableRows = "honeycode:BatchUpsertTableRows",

  /**
   * Write - Grants permission to create a new Amazon Honeycode team for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/team.html#create-team
   */
  CreateTeam = "honeycode:CreateTeam",

  /**
   * Write - Grants permission to create a new tenant within Amazon Honeycode for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/tenant.html#create-tenant
   */
  CreateTenant = "honeycode:CreateTenant",

  /**
   * Write - Grants permission to delete Amazon Honeycode domains for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#delete-domains
   */
  DeleteDomains = "honeycode:DeleteDomains",

  /**
   * Write - Grants permission to remove groups from an Amazon Honeycode team for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/group.html#deregister-groups
   */
  DeregisterGroups = "honeycode:DeregisterGroups",

  /**
   * Read - Grants permission to get details about a table data import job
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_DescribeTableDataImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.table `HoneycodeResource.table`} 
   */
  DescribeTableDataImportJob = "honeycode:DescribeTableDataImportJob",

  /**
   * Read - Grants permission to get details about Amazon Honeycode teams for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/team.html#describe-team
   */
  DescribeTeam = "honeycode:DescribeTeam",

  /**
   * Read - Grants permission to load the data from a screen
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_GetScreenData.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.screen `HoneycodeResource.screen`} 
   */
  GetScreenData = "honeycode:GetScreenData",

  /**
   * Write - Grants permission to invoke a screen automation
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_InvokeScreenAutomation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.screenAutomation `HoneycodeResource.screenAutomation`} 
   */
  InvokeScreenAutomation = "honeycode:InvokeScreenAutomation",

  /**
   * List - Grants permission to list all Amazon Honeycode domains and their verification status for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#list-domains
   */
  ListDomains = "honeycode:ListDomains",

  /**
   * List - Grants permission to list all groups in an Amazon Honeycode team for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/group.html#list-groups
   */
  ListGroups = "honeycode:ListGroups",

  /**
   * List - Grants permission to list the columns in a table
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTableColumns.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.table `HoneycodeResource.table`} 
   */
  ListTableColumns = "honeycode:ListTableColumns",

  /**
   * List - Grants permission to list the rows in a table
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTableRows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.table `HoneycodeResource.table`} 
   */
  ListTableRows = "honeycode:ListTableRows",

  /**
   * List - Grants permission to list the tables in a workbook
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTables.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.workbook `HoneycodeResource.workbook`} 
   */
  ListTables = "honeycode:ListTables",

  /**
   * Tagging - Grants permission to list all tags for a resource
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTagsForResource.html
   */
  ListTagsForResource = "honeycode:ListTagsForResource",

  /**
   * List - Grants permission to list all pending and approved team associations with your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#list-team-associations
   */
  ListTeamAssociations = "honeycode:ListTeamAssociations",

  /**
   * List - Grants permission to list all tenants of Amazon Honeycode for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/tenant.html#list-tenants
   */
  ListTenants = "honeycode:ListTenants",

  /**
   * Read - Grants permission to query the rows of a table using a filter
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_QueryTableRows.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.table `HoneycodeResource.table`} 
   */
  QueryTableRows = "honeycode:QueryTableRows",

  /**
   * Write - Grants permission to request verification of the Amazon Honeycode domains for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#register-domain-for-verification
   */
  RegisterDomainForVerification = "honeycode:RegisterDomainForVerification",

  /**
   * Write - Grants permission to add groups to an Amazon Honeycode team for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/group.html#register-groups
   */
  RegisterGroups = "honeycode:RegisterGroups",

  /**
   * Write - Grants permission to reject a team association request for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#reject-team-association
   */
  RejectTeamAssociation = "honeycode:RejectTeamAssociation",

  /**
   * Write - Grants permission to restart verification of the Amazon Honeycode domains for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#restart-domain-verification
   */
  RestartDomainVerification = "honeycode:RestartDomainVerification",

  /**
   * Write - Grants permission to start a table data import job
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_StartTableDataImportJob.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.table `HoneycodeResource.table`} 
   */
  StartTableDataImportJob = "honeycode:StartTableDataImportJob",

  /**
   * Tagging - Grants permission to tag a resource
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_TagResource.html
   */
  TagResource = "honeycode:TagResource",

  /**
   * Tagging - Grants permission to untag a resource
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_UntagResource.html
   */
  UntagResource = "honeycode:UntagResource",

  /**
   * Write - Grants permission to update an Amazon Honeycode team for your AWS Account
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/team.html#update-team
   */
  UpdateTeam = "honeycode:UpdateTeam",

  /**
   * * - Grant all honeycode permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonhoneycode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link HoneycodeResource.table `HoneycodeResource.table`} 
   * - {@link HoneycodeResource.screen `HoneycodeResource.screen`} 
   * - {@link HoneycodeResource.screenAutomation `HoneycodeResource.screenAutomation`} 
   * - {@link HoneycodeResource.workbook `HoneycodeResource.workbook`} 
   */
  All = "honeycode:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonhoneycode.html
 */
export const HoneycodeResource = {

  /**
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-workbook.html
   */
  workbook: (options: Partial<{partition: string, region: string, account: string, workbookId: string}> = {}) => `arn:${options.partition || '*'}:honeycode:${options.region || '*'}:${options.account || '*'}:workbook:workbook/${options.workbookId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-table.html
   */
  table: (options: Partial<{partition: string, region: string, account: string, workbookId: string, tableId: string}> = {}) => `arn:${options.partition || '*'}:honeycode:${options.region || '*'}:${options.account || '*'}:table:workbook/${options.workbookId || '*'}/table/${options.tableId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-screen.html
   */
  screen: (options: Partial<{partition: string, region: string, account: string, workbookId: string, appId: string, screenId: string}> = {}) => `arn:${options.partition || '*'}:honeycode:${options.region || '*'}:${options.account || '*'}:screen:workbook/${options.workbookId || '*'}/app/${options.appId || '*'}/screen/${options.screenId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-screen-automation.html
   */
  screenAutomation: (options: Partial<{partition: string, region: string, account: string, workbookId: string, appId: string, screenId: string, automationId: string}> = {}) => `arn:${options.partition || '*'}:honeycode:${options.region || '*'}:${options.account || '*'}:screen-automation:workbook/${options.workbookId || '*'}/app/${options.appId || '*'}/screen/${options.screenId || '*'}/automation/${options.automationId || '*'}`,
}

