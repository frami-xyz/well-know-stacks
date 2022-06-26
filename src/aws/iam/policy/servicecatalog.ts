/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservicecatalog.html
 */
export enum ServicecatalogAction {

  /**
   * Write - Grants permission to accept a portfolio that has been shared with you
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AcceptPortfolioShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  AcceptPortfolioShare = "servicecatalog:AcceptPortfolioShare",

  /**
   * Write - Grants permission to associate an attribute group with an application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_AssociateAttributeGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   * - {@link ServicecatalogResource.attributeGroup `ServicecatalogResource.attributeGroup`} 
   */
  AssociateAttributeGroup = "servicecatalog:AssociateAttributeGroup",

  /**
   * Write - Grants permission to associate a budget with a resource
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateBudgetWithResource.html
   */
  AssociateBudgetWithResource = "servicecatalog:AssociateBudgetWithResource",

  /**
   * Write - Grants permission to associate an IAM principal with a portfolio, giving the specified principal access to any products associated with the specified portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociatePrincipalWithPortfolio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  AssociatePrincipalWithPortfolio = "servicecatalog:AssociatePrincipalWithPortfolio",

  /**
   * Write - Grants permission to associate a product with a portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateProductWithPortfolio.html
   */
  AssociateProductWithPortfolio = "servicecatalog:AssociateProductWithPortfolio",

  /**
   * Write - Grants permission to associate a resource with an application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_AssociateResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   */
  AssociateResource = "servicecatalog:AssociateResource",

  /**
   * Write - Grants permission to associate an action with a provisioning artifact
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateServiceActionWithProvisioningArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  AssociateServiceActionWithProvisioningArtifact = "servicecatalog:AssociateServiceActionWithProvisioningArtifact",

  /**
   * Write - Grants permission to associate the specified TagOption with the specified portfolio or product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateTagOptionWithResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  AssociateTagOptionWithResource = "servicecatalog:AssociateTagOptionWithResource",

  /**
   * Write - Grants permission to associate multiple self-service actions with provisioning artifacts
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchAssociateServiceActionWithProvisioningArtifact.html
   */
  BatchAssociateServiceActionWithProvisioningArtifact = "servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact",

  /**
   * Write - Grants permission to disassociate a batch of self-service actions from the specified provisioning artifact
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchDisassociateServiceActionFromProvisioningArtifact.html
   */
  BatchDisassociateServiceActionFromProvisioningArtifact = "servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact",

  /**
   * Write - Grants permission to copy the specified source product to the specified target product or a new product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CopyProduct.html
   */
  CopyProduct = "servicecatalog:CopyProduct",

  /**
   * Write - Grants permission to create an application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateApplication = "servicecatalog:CreateApplication",

  /**
   * Write - Grants permission to create an attribute group
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_CreateAttributeGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.attributeGroup `ServicecatalogResource.attributeGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateAttributeGroup = "servicecatalog:CreateAttributeGroup",

  /**
   * Write - Grants permission to create a constraint on an associated product and portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateConstraint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  CreateConstraint = "servicecatalog:CreateConstraint",

  /**
   * Write - Grants permission to create a portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreatePortfolio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePortfolio = "servicecatalog:CreatePortfolio",

  /**
   * PermissionsManagement - Grants permission to share a portfolio you own with another AWS account
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreatePortfolioShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  CreatePortfolioShare = "servicecatalog:CreatePortfolioShare",

  /**
   * Write - Grants permission to create a product and that product's first provisioning artifact
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateProduct = "servicecatalog:CreateProduct",

  /**
   * Write - Grants permission to add a new provisioned product plan
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisionedProductPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateProvisionedProductPlan = "servicecatalog:CreateProvisionedProductPlan",

  /**
   * Write - Grants permission to add a new provisioning artifact to an existing product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisioningArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  CreateProvisioningArtifact = "servicecatalog:CreateProvisioningArtifact",

  /**
   * Write - Grants permission to create a self-service action
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateServiceAction.html
   */
  CreateServiceAction = "servicecatalog:CreateServiceAction",

  /**
   * Write - Grants permission to create a TagOption
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateTagOption.html
   */
  CreateTagOption = "servicecatalog:CreateTagOption",

  /**
   * Write - Grants permission to delete an application if all associations have been removed from the application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DeleteApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   */
  DeleteApplication = "servicecatalog:DeleteApplication",

  /**
   * Write - Grants permission to delete an attribute group if all associations have been removed from the attribute group
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DeleteAttributeGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.attributeGroup `ServicecatalogResource.attributeGroup`} 
   */
  DeleteAttributeGroup = "servicecatalog:DeleteAttributeGroup",

  /**
   * Write - Grants permission to remove and delete an existing constraint from an associated product and portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteConstraint.html
   */
  DeleteConstraint = "servicecatalog:DeleteConstraint",

  /**
   * Write - Grants permission to delete a portfolio if all associations and shares have been removed from the portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  DeletePortfolio = "servicecatalog:DeletePortfolio",

  /**
   * PermissionsManagement - Grants permission to unshare a portfolio you own from an AWS account you previously shared the portfolio with
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolioShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  DeletePortfolioShare = "servicecatalog:DeletePortfolioShare",

  /**
   * Write - Grants permission to delete a product if all associations have been removed from the product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  DeleteProduct = "servicecatalog:DeleteProduct",

  /**
   * Write - Grants permission to delete a provisioned product plan
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisionedProductPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteProvisionedProductPlan = "servicecatalog:DeleteProvisionedProductPlan",

  /**
   * Write - Grants permission to delete a provisioning artifact from a product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisioningArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  DeleteProvisioningArtifact = "servicecatalog:DeleteProvisioningArtifact",

  /**
   * Write - Grants permission to delete a self-service action
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteServiceAction.html
   */
  DeleteServiceAction = "servicecatalog:DeleteServiceAction",

  /**
   * Write - Grants permission to delete the specified TagOption
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteTagOption.html
   */
  DeleteTagOption = "servicecatalog:DeleteTagOption",

  /**
   * Read - Grants permission to describe a constraint
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeConstraint.html
   */
  DescribeConstraint = "servicecatalog:DescribeConstraint",

  /**
   * Read - Grants permission to get the status of the specified copy product operation
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeCopyProductStatus.html
   */
  DescribeCopyProductStatus = "servicecatalog:DescribeCopyProductStatus",

  /**
   * Read - Grants permission to describe a portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  DescribePortfolio = "servicecatalog:DescribePortfolio",

  /**
   * Read - Grants permission to get the status of the specified portfolio share operation
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolioShareStatus.html
   */
  DescribePortfolioShareStatus = "servicecatalog:DescribePortfolioShareStatus",

  /**
   * List - Grants permission to view a summary of each of the portfolio shares that were created for the specified portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolioShares.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  DescribePortfolioShares = "servicecatalog:DescribePortfolioShares",

  /**
   * Read - Grants permission to describe a product as an end-user
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  DescribeProduct = "servicecatalog:DescribeProduct",

  /**
   * Read - Grants permission to describe a product as an admin
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductAsAdmin.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  DescribeProductAsAdmin = "servicecatalog:DescribeProductAsAdmin",

  /**
   * Read - Grants permission to describe a product as an end-user
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductView.html
   */
  DescribeProductView = "servicecatalog:DescribeProductView",

  /**
   * Read - Grants permission to describe a provisioned product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeProvisionedProduct = "servicecatalog:DescribeProvisionedProduct",

  /**
   * Read - Grants permission to describe a provisioned product plan
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProductPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeProvisionedProductPlan = "servicecatalog:DescribeProvisionedProductPlan",

  /**
   * Read - Grants permission to describe a provisioning artifact
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  DescribeProvisioningArtifact = "servicecatalog:DescribeProvisioningArtifact",

  /**
   * Read - Grants permission to describe the parameters that you need to specify to successfully provision a specified provisioning artifact
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  DescribeProvisioningParameters = "servicecatalog:DescribeProvisioningParameters",

  /**
   * Read - Grants permission to describe a record and lists any outputs
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeRecord.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeRecord = "servicecatalog:DescribeRecord",

  /**
   * Read - Grants permission to describe a self-service action
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceAction.html
   */
  DescribeServiceAction = "servicecatalog:DescribeServiceAction",

  /**
   * Read - Grants permission to get the default parameters if you executed the specified Service Action on the specified Provisioned Product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceActionExecutionParameters.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DescribeServiceActionExecutionParameters = "servicecatalog:DescribeServiceActionExecutionParameters",

  /**
   * Read - Grants permission to get information about the specified TagOption
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeTagOption.html
   */
  DescribeTagOption = "servicecatalog:DescribeTagOption",

  /**
   * Write - Grants permission to disable portfolio sharing through AWS Organizations feature
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisableAWSOrganizationsAccess.html
   */
  DisableAWSOrganizationsAccess = "servicecatalog:DisableAWSOrganizationsAccess",

  /**
   * Write - Grants permission to disassociate an attribute group from an application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DisassociateAttributeGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   * - {@link ServicecatalogResource.attributeGroup `ServicecatalogResource.attributeGroup`} 
   */
  DisassociateAttributeGroup = "servicecatalog:DisassociateAttributeGroup",

  /**
   * Write - Grants permission to disassociate a budget from a resource
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateBudgetFromResource.html
   */
  DisassociateBudgetFromResource = "servicecatalog:DisassociateBudgetFromResource",

  /**
   * Write - Grants permission to disassociate an IAM principal from a portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociatePrincipalFromPortfolio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  DisassociatePrincipalFromPortfolio = "servicecatalog:DisassociatePrincipalFromPortfolio",

  /**
   * Write - Grants permission to disassociate a product from a portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateProductFromPortfolio.html
   */
  DisassociateProductFromPortfolio = "servicecatalog:DisassociateProductFromPortfolio",

  /**
   * Write - Grants permission to disassociate a resource from an application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DisassociateResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   */
  DisassociateResource = "servicecatalog:DisassociateResource",

  /**
   * Write - Grants permission to disassociate the specified self-service action association from the specified provisioning artifact
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateServiceActionFromProvisioningArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  DisassociateServiceActionFromProvisioningArtifact = "servicecatalog:DisassociateServiceActionFromProvisioningArtifact",

  /**
   * Write - Grants permission to disassociate the specified TagOption from the specified resource
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateTagOptionFromResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  DisassociateTagOptionFromResource = "servicecatalog:DisassociateTagOptionFromResource",

  /**
   * Write - Grants permission to enable portfolio sharing feature through AWS Organizations
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_EnableAWSOrganizationsAccess.html
   */
  EnableAWSOrganizationsAccess = "servicecatalog:EnableAWSOrganizationsAccess",

  /**
   * Write - Grants permission to execute a provisioned product plan
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductPlan.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ExecuteProvisionedProductPlan = "servicecatalog:ExecuteProvisionedProductPlan",

  /**
   * Write - Grants permission to executes a provisioned product plan
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductServiceAction.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ExecuteProvisionedProductServiceAction = "servicecatalog:ExecuteProvisionedProductServiceAction",

  /**
   * Read - Grants permission to get the access status of AWS Organization portfolio share feature
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_GetAWSOrganizationsAccessStatus.html
   */
  GetAWSOrganizationsAccessStatus = "servicecatalog:GetAWSOrganizationsAccessStatus",

  /**
   * Read - Grants permission to get an application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_GetApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   */
  GetApplication = "servicecatalog:GetApplication",

  /**
   * Read - Grants permission to get information about a resource associated to an application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_GetAssociatedResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   */
  GetAssociatedResource = "servicecatalog:GetAssociatedResource",

  /**
   * Read - Grants permission to get an attribute group
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_GetAttributeGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.attributeGroup `ServicecatalogResource.attributeGroup`} 
   */
  GetAttributeGroup = "servicecatalog:GetAttributeGroup",

  /**
   * Read - Grants permission to get the provisioned product output with either provisioned product id or name
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_GetProvisionedProductOutputs.html
   */
  GetProvisionedProductOutputs = "servicecatalog:GetProvisionedProductOutputs",

  /**
   * Write - Grants permission to import a resource into a provisioned product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ImportAsProvisionedProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  ImportAsProvisionedProduct = "servicecatalog:ImportAsProvisionedProduct",

  /**
   * List - Grants permission to list the portfolios that have been shared with you and you have accepted
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListAcceptedPortfolioShares.html
   */
  ListAcceptedPortfolioShares = "servicecatalog:ListAcceptedPortfolioShares",

  /**
   * List - Grants permission to list your applications
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListApplications.html
   */
  ListApplications = "servicecatalog:ListApplications",

  /**
   * List - Grants permission to list the attribute groups associated with an application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAssociatedAttributeGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   */
  ListAssociatedAttributeGroups = "servicecatalog:ListAssociatedAttributeGroups",

  /**
   * List - Grants permission to list the resources associated with an application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAssociatedResources.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   */
  ListAssociatedResources = "servicecatalog:ListAssociatedResources",

  /**
   * List - Grants permission to list your attribute groups
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAttributeGroups.html
   */
  ListAttributeGroups = "servicecatalog:ListAttributeGroups",

  /**
   * List - Grants permission to list the associated attribute groups for a given application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAttributeGroupsForApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   */
  ListAttributeGroupsForApplication = "servicecatalog:ListAttributeGroupsForApplication",

  /**
   * List - Grants permission to list all the budgets associated to a resource
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListBudgetsForResource.html
   */
  ListBudgetsForResource = "servicecatalog:ListBudgetsForResource",

  /**
   * List - Grants permission to list constraints associated with a given portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListConstraintsForPortfolio.html
   */
  ListConstraintsForPortfolio = "servicecatalog:ListConstraintsForPortfolio",

  /**
   * List - Grants permission to list the different ways to launch a given product as an end-user
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListLaunchPaths.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  ListLaunchPaths = "servicecatalog:ListLaunchPaths",

  /**
   * List - Grants permission to list the organization nodes that have access to the specified portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListOrganizationPortfolioAccess.html
   */
  ListOrganizationPortfolioAccess = "servicecatalog:ListOrganizationPortfolioAccess",

  /**
   * List - Grants permission to list the AWS accounts you have shared a given portfolio with
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolioAccess.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  ListPortfolioAccess = "servicecatalog:ListPortfolioAccess",

  /**
   * List - Grants permission to list the portfolios in your account
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolios.html
   */
  ListPortfolios = "servicecatalog:ListPortfolios",

  /**
   * List - Grants permission to list the portfolios associated with a given product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfoliosForProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  ListPortfoliosForProduct = "servicecatalog:ListPortfoliosForProduct",

  /**
   * List - Grants permission to list the IAM principals associated with a given portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPrincipalsForPortfolio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  ListPrincipalsForPortfolio = "servicecatalog:ListPrincipalsForPortfolio",

  /**
   * List - Grants permission to list the provisioned product plans
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisionedProductPlans.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListProvisionedProductPlans = "servicecatalog:ListProvisionedProductPlans",

  /**
   * List - Grants permission to list the provisioning artifacts associated with a given product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifacts.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  ListProvisioningArtifacts = "servicecatalog:ListProvisioningArtifacts",

  /**
   * List - Grants permission to list all provisioning artifacts for the specified self-service action
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifactsForServiceAction.html
   */
  ListProvisioningArtifactsForServiceAction = "servicecatalog:ListProvisioningArtifactsForServiceAction",

  /**
   * List - Grants permission to list all the records in your account or all the records related to a given provisioned product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListRecordHistory.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListRecordHistory = "servicecatalog:ListRecordHistory",

  /**
   * List - Grants permission to list the resources associated with the specified TagOption
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListResourcesForTagOption.html
   */
  ListResourcesForTagOption = "servicecatalog:ListResourcesForTagOption",

  /**
   * List - Grants permission to list all self-service actions
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActions.html
   */
  ListServiceActions = "servicecatalog:ListServiceActions",

  /**
   * List - Grants permission to list all the service actions associated with the specified provisioning artifact in your account
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActionsForProvisioningArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListServiceActionsForProvisioningArtifact = "servicecatalog:ListServiceActionsForProvisioningArtifact",

  /**
   * List - Grants permission to list account, region and status of each stack instances that are associated with a CFN_STACKSET type provisioned product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListStackInstancesForProvisionedProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListStackInstancesForProvisionedProduct = "servicecatalog:ListStackInstancesForProvisionedProduct",

  /**
   * List - Grants permission to list the specified TagOptions or all TagOptions
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListTagOptions.html
   */
  ListTagOptions = "servicecatalog:ListTagOptions",

  /**
   * Read - Grants permission to list the tags for a service catalog appregistry resource
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   * - {@link ServicecatalogResource.attributeGroup `ServicecatalogResource.attributeGroup`} 
   */
  ListTagsForResource = "servicecatalog:ListTagsForResource",

  /**
   * Write - Grants permission to provision a product with a specified provisioning artifact and launch parameters
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisionProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  ProvisionProduct = "servicecatalog:ProvisionProduct",

  /**
   * Write - Grants permission to reject a portfolio that has been shared with you that you previously accepted
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_RejectPortfolioShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  RejectPortfolioShare = "servicecatalog:RejectPortfolioShare",

  /**
   * List - Grants permission to list all the provisioned products in your account
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ScanProvisionedProducts.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ScanProvisionedProducts = "servicecatalog:ScanProvisionedProducts",

  /**
   * List - Grants permission to list the products available to you as an end-user
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProducts.html
   */
  SearchProducts = "servicecatalog:SearchProducts",

  /**
   * List - Grants permission to list all the products in your account or all the products associated with a given portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProductsAsAdmin.html
   */
  SearchProductsAsAdmin = "servicecatalog:SearchProductsAsAdmin",

  /**
   * List - Grants permission to list all the provisioned products in your account
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProvisionedProducts.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  SearchProvisionedProducts = "servicecatalog:SearchProvisionedProducts",

  /**
   * Write - Grants permission to sync a resource with its current state in AppRegistry
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_SyncResource.html
   */
  SyncResource = "servicecatalog:SyncResource",

  /**
   * Tagging - Grants permission to tag a service catalog appregistry resource
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   * - {@link ServicecatalogResource.attributeGroup `ServicecatalogResource.attributeGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "servicecatalog:TagResource",

  /**
   * Write - Grants permission to terminate an existing provisioned product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_TerminateProvisionedProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TerminateProvisionedProduct = "servicecatalog:TerminateProvisionedProduct",

  /**
   * Tagging - Grants permission to remove a tag from a service catalog appregistry resource
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   * - {@link ServicecatalogResource.attributeGroup `ServicecatalogResource.attributeGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UntagResource = "servicecatalog:UntagResource",

  /**
   * Write - Grants permission to update the attributes of an existing application
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_UpdateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   */
  UpdateApplication = "servicecatalog:UpdateApplication",

  /**
   * Write - Grants permission to update the attributes of an existing attribute group
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_UpdateAttributeGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.attributeGroup `ServicecatalogResource.attributeGroup`} 
   */
  UpdateAttributeGroup = "servicecatalog:UpdateAttributeGroup",

  /**
   * Write - Grants permission to update the metadata fields of an existing constraint
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateConstraint.html
   */
  UpdateConstraint = "servicecatalog:UpdateConstraint",

  /**
   * Write - Grants permission to update the metadata fields and/or tags of an existing portfolio
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdatePortfolio.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdatePortfolio = "servicecatalog:UpdatePortfolio",

  /**
   * PermissionsManagement - Grants permission to enable or disable resource sharing for an existing portfolio share
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdatePortfolioShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   */
  UpdatePortfolioShare = "servicecatalog:UpdatePortfolioShare",

  /**
   * Write - Grants permission to update the metadata fields and/or tags of an existing product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateProduct = "servicecatalog:UpdateProduct",

  /**
   * Write - Grants permission to update an existing provisioned product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisionedProduct.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateProvisionedProduct = "servicecatalog:UpdateProvisionedProduct",

  /**
   * Write - Grants permission to update the properties of an existing provisioned product
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisionedProductProperties.html
   */
  UpdateProvisionedProductProperties = "servicecatalog:UpdateProvisionedProductProperties",

  /**
   * Write - Grants permission to update the metadata fields of an existing provisioning artifact
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisioningArtifact.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   */
  UpdateProvisioningArtifact = "servicecatalog:UpdateProvisioningArtifact",

  /**
   * Write - Grants permission to update a self-service action
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateServiceAction.html
   */
  UpdateServiceAction = "servicecatalog:UpdateServiceAction",

  /**
   * Write - Grants permission to update the specified TagOption
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateTagOption.html
   */
  UpdateTagOption = "servicecatalog:UpdateTagOption",

  /**
   * * - Grant all servicecatalog permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservicecatalog.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link ServicecatalogResource.portfolio `ServicecatalogResource.portfolio`} 
   * - {@link ServicecatalogResource.application `ServicecatalogResource.application`} 
   * - {@link ServicecatalogResource.attributeGroup `ServicecatalogResource.attributeGroup`} 
   * - {@link ServicecatalogResource.product `ServicecatalogResource.product`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `servicecatalog:accountLevel`: Filters access by user to see and perform actions on resources created by anyone in the account ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:roleLevel`: Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `servicecatalog:userLevel`: Filters access by user to see and perform actions on only resources that they created ({@link https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "servicecatalog:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservicecatalog.html
 */
export const ServicecatalogResource = {

  /**
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_CreateApplication.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  application: (options: Partial<{partition: string, region: string, account: string, applicationId: string}> = {}) => `arn:${options.partition || '*'}:servicecatalog:${options.region || '*'}:${options.account || '*'}:/applications/${options.applicationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_CreateAttributeGroup.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  attributeGroup: (options: Partial<{partition: string, region: string, account: string, attributeGroupId: string}> = {}) => `arn:${options.partition || '*'}:servicecatalog:${options.region || '*'}:${options.account || '*'}:/attribute-groups/${options.attributeGroupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_PortfolioDetail.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  portfolio: (options: Partial<{partition: string, region: string, account: string, portfolioId: string}> = {}) => `arn:${options.partition || '*'}:catalog:${options.region || '*'}:${options.account || '*'}:portfolio/${options.portfolioId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProductViewDetail.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  product: (options: Partial<{partition: string, region: string, account: string, productId: string}> = {}) => `arn:${options.partition || '*'}:catalog:${options.region || '*'}:${options.account || '*'}:product/${options.productId || '*'}`,
}

