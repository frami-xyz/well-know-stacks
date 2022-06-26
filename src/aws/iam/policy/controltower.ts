/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscontroltower.html
 */
export enum ControltowerAction {

  /**
   * Write - Grants permission to create an account managed by AWS Control Tower.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  CreateManagedAccount = "controltower:CreateManagedAccount",

  /**
   * Write - Grants permission to deregister an account created through the account factory from AWS Control Tower.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  DeregisterManagedAccount = "controltower:DeregisterManagedAccount",

  /**
   * Write - Grants permission to deregister an organizational unit from AWS Control Tower management.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  DeregisterOrganizationalUnit = "controltower:DeregisterOrganizationalUnit",

  /**
   * Read - Grants permission to describe the current account factory configuration.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  DescribeAccountFactoryConfig = "controltower:DescribeAccountFactoryConfig",

  /**
   * Read - Grants permission to describe resources managed by core accounts in AWS Control Tower.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/how-control-tower-works.html#what-shared
   */
  DescribeCoreService = "controltower:DescribeCoreService",

  /**
   * Read - Grants permission to describe a guardrail.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html
   */
  DescribeGuardrail = "controltower:DescribeGuardrail",

  /**
   * Read - Grants permission to describe a guardrail for a organizational unit.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html
   */
  DescribeGuardrailForTarget = "controltower:DescribeGuardrailForTarget",

  /**
   * Read - Grants permission to describe an account created through account factory.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  DescribeManagedAccount = "controltower:DescribeManagedAccount",

  /**
   * Read - Grants permission to describe an AWS Organizations organizational unit managed by AWS Control Tower.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  DescribeManagedOrganizationalUnit = "controltower:DescribeManagedOrganizationalUnit",

  /**
   * Read - Grants permission to describe the current AWS Control Tower SSO configuration.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/sso.html
   */
  DescribeSingleSignOn = "controltower:DescribeSingleSignOn",

  /**
   * Write - Grants permission to disable a guardrail from an organizational unit.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html#enable-guardrails
   */
  DisableGuardrail = "controltower:DisableGuardrail",

  /**
   * Write - Grants permission to enable a guardrail to an organizational unit.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html#enable-guardrails
   */
  EnableGuardrail = "controltower:EnableGuardrail",

  /**
   * Read - Grants permission to list available updates for the current AWS Control Tower deployment.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/configuration-updates.html
   */
  GetAvailableUpdates = "controltower:GetAvailableUpdates",

  /**
   * Read - Grants permission to get the current compliance status of a guardrail.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html
   */
  GetGuardrailComplianceStatus = "controltower:GetGuardrailComplianceStatus",

  /**
   * Read - Grants permission to get the home region of the AWS Control Tower setup.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/how-control-tower-works.html#region-how
   */
  GetHomeRegion = "controltower:GetHomeRegion",

  /**
   * Read - Grants permission to get the current status of the landing zone setup.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-with-control-tower.html#step-two
   */
  GetLandingZoneStatus = "controltower:GetLandingZoneStatus",

  /**
   * List - Grants permission to list the current directory groups available through SSO.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/sso.html
   */
  ListDirectoryGroups = "controltower:ListDirectoryGroups",

  /**
   * List - Grants permission to list currently enabled guardrails.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html
   */
  ListEnabledGuardrails = "controltower:ListEnabledGuardrails",

  /**
   * List - Grants permission to list existing guardrail violations.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html
   */
  ListGuardrailViolations = "controltower:ListGuardrailViolations",

  /**
   * List - Grants permission to list all available guardrails.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html
   */
  ListGuardrails = "controltower:ListGuardrails",

  /**
   * List - Grants permission to list guardrails and their current state for a organizational unit.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html
   */
  ListGuardrailsForTarget = "controltower:ListGuardrailsForTarget",

  /**
   * List - Grants permission to list accounts managed through AWS Control Tower.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  ListManagedAccounts = "controltower:ListManagedAccounts",

  /**
   * List - Grants permission to list managed accounts with a specified guardrail applied.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  ListManagedAccountsForGuardrail = "controltower:ListManagedAccountsForGuardrail",

  /**
   * List - Grants permission to list managed accounts under an organizational unit.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  ListManagedAccountsForParent = "controltower:ListManagedAccountsForParent",

  /**
   * List - Grants permission to list organizational units managed by AWS Control Tower.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  ListManagedOrganizationalUnits = "controltower:ListManagedOrganizationalUnits",

  /**
   * List - Grants permission to list managed organizational units that have a specified guardrail applied.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  ListManagedOrganizationalUnitsForGuardrail = "controltower:ListManagedOrganizationalUnitsForGuardrail",

  /**
   * Write - Grants permission to set up an organizational unit to be managed by AWS Control Tower.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  ManageOrganizationalUnit = "controltower:ManageOrganizationalUnit",

  /**
   * Write - Grants permission to set up or update AWS Control Tower landing zone.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-with-control-tower.html#step-two
   */
  SetupLandingZone = "controltower:SetupLandingZone",

  /**
   * Write - Grants permission to update the account factory configuration.
   * @see https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  UpdateAccountFactoryConfig = "controltower:UpdateAccountFactoryConfig",

  /**
   * * - Grant all controltower permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscontroltower.html
   */
  All = "controltower:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscontroltower.html
 */
export const ControltowerResource = {
}

