/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfsx.html
 */
export enum FsxAction {

  /**
   * Write - Grants permission to associate a File Gateway instance with an Amazon FSx for Windows File Server file system
   * @see https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   */
  AssociateFileGateway = "fsx:AssociateFileGateway",

  /**
   * Write - Grants permission to associate DNS aliases with an Amazon FSx for Windows File Server file system
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_AssociateFileSystemAliases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   */
  AssociateFileSystemAliases = "fsx:AssociateFileSystemAliases",

  /**
   * Write - Grants permission to cancel a data repository task
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CancelDataRepositoryTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.task `FsxResource.task`} 
   */
  CancelDataRepositoryTask = "fsx:CancelDataRepositoryTask",

  /**
   * Write - Grants permission to copy a backup
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopyBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.backup `FsxResource.backup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CopyBackup = "fsx:CopyBackup",

  /**
   * Write - Grants permission to create a new backup of an Amazon FSx file system or an Amazon FSx volume
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.backup `FsxResource.backup`} 
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   * - {@link FsxResource.volume `FsxResource.volume`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateBackup = "fsx:CreateBackup",

  /**
   * Write - Grants permission to create a new data respository association for an Amazon FSx for Lustre file system
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateDataRepositoryAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.association `FsxResource.association`} 
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataRepositoryAssociation = "fsx:CreateDataRepositoryAssociation",

  /**
   * Write - Grants permission to create a new data respository task for an Amazon FSx for Lustre file system
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateDataRepositoryTask.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   * - {@link FsxResource.task `FsxResource.task`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateDataRepositoryTask = "fsx:CreateDataRepositoryTask",

  /**
   * Write - Grants permission to create a new, empty, Amazon FSx file system
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFileSystem = "fsx:CreateFileSystem",

  /**
   * Write - Grants permission to create a new Amazon FSx file system from an existing backup
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystemFromBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.backup `FsxResource.backup`} 
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateFileSystemFromBackup = "fsx:CreateFileSystemFromBackup",

  /**
   * Write - Grants permission to create a new snapshot on a volume
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.snapshot `FsxResource.snapshot`} 
   * - {@link FsxResource.volume `FsxResource.volume`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSnapshot = "fsx:CreateSnapshot",

  /**
   * Write - Grants permission to create a new storage virtual machine in an Amazon FSx for Ontap file system
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateStorageVirtualMachine.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   * - {@link FsxResource.storageVirtualMachine `FsxResource.storageVirtualMachine`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateStorageVirtualMachine = "fsx:CreateStorageVirtualMachine",

  /**
   * Write - Grants permission to create a new volume
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.volume `FsxResource.volume`} 
   * - {@link FsxResource.snapshot `FsxResource.snapshot`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `fsx:StorageVirtualMachineId`: Filters access by the containing storage virtual machine for a volume for mutating volume operations ({@link https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CreateVolume.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `fsx:ParentVolumeId`: Filters access by the containing parent volume for mutating volume operations ({@link https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CreateVolume.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateVolume = "fsx:CreateVolume",

  /**
   * Write - Grants permission to create a new volume from backup
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateVolumeFromBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.backup `FsxResource.backup`} 
   * - {@link FsxResource.storageVirtualMachine `FsxResource.storageVirtualMachine`} 
   * - {@link FsxResource.volume `FsxResource.volume`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `fsx:StorageVirtualMachineId`: Filters access by the containing storage virtual machine for a volume for mutating volume operations ({@link https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CreateVolume.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateVolumeFromBackup = "fsx:CreateVolumeFromBackup",

  /**
   * Write - Grants permission to delete a backup, deleting its contents. After deletion, the backup no longer exists, and its data is no longer available
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.backup `FsxResource.backup`} 
   */
  DeleteBackup = "fsx:DeleteBackup",

  /**
   * Write - Grants permission to delete a data repository association
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteDataRepositoryAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.association `FsxResource.association`} 
   */
  DeleteDataRepositoryAssociation = "fsx:DeleteDataRepositoryAssociation",

  /**
   * Write - Grants permission to delete a file system, deleting its contents and any existing automatic backups of the file system
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteFileSystem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   * - {@link FsxResource.backup `FsxResource.backup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteFileSystem = "fsx:DeleteFileSystem",

  /**
   * Write - Grants permission to delete a snapshot on a volume
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.snapshot `FsxResource.snapshot`} 
   */
  DeleteSnapshot = "fsx:DeleteSnapshot",

  /**
   * Write - Grants permission to delete a storage virtual machine, deleting its contents
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteStorageVirtualMachine.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.storageVirtualMachine `FsxResource.storageVirtualMachine`} 
   */
  DeleteStorageVirtualMachine = "fsx:DeleteStorageVirtualMachine",

  /**
   * Write - Grants permission to delete a volume, deleting its contents and any existing automatic backups of the volume
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DeleteVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.volume `FsxResource.volume`} 
   * - {@link FsxResource.backup `FsxResource.backup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `fsx:StorageVirtualMachineId`: Filters access by the containing storage virtual machine for a volume for mutating volume operations ({@link https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CreateVolume.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `fsx:ParentVolumeId`: Filters access by the containing parent volume for mutating volume operations ({@link https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CreateVolume.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  DeleteVolume = "fsx:DeleteVolume",

  /**
   * Read - Grants permission to describe the File Gateway instances associated with an Amazon FSx for Windows File Server file system
   * @see https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   */
  DescribeAssociatedFileGateways = "fsx:DescribeAssociatedFileGateways",

  /**
   * Read - Grants permission to return the descriptions of all backups owned by your AWS account in the AWS Region of the endpoint that you're calling
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeBackups.html
   */
  DescribeBackups = "fsx:DescribeBackups",

  /**
   * Read - Grants permission to return the descriptions of all data repository associations owned by your AWS account in the AWS Region of the endpoint that you're calling
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeDataRepositoryAssociations.html
   */
  DescribeDataRepositoryAssociations = "fsx:DescribeDataRepositoryAssociations",

  /**
   * Read - Grants permission to return the descriptions of all data repository tasks owned by your AWS account in the AWS Region of the endpoint that you're calling
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeDataRepositoryTasks.html
   */
  DescribeDataRepositoryTasks = "fsx:DescribeDataRepositoryTasks",

  /**
   * Read - Grants permission to return the description of all DNS aliases owned by your Amazon FSx for Windows File Server file system
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystemAliases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   */
  DescribeFileSystemAliases = "fsx:DescribeFileSystemAliases",

  /**
   * Read - Grants permission to return the descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeFileSystems.html
   */
  DescribeFileSystems = "fsx:DescribeFileSystems",

  /**
   * Read - Grants permission to return the descriptions of all snapshots owned by your AWS account in the AWS Region of the endpoint you're calling
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeSnapshots.html
   */
  DescribeSnapshots = "fsx:DescribeSnapshots",

  /**
   * Read - Grants permission to return the descriptions of all storage virtual machines owned by your AWS account in the AWS Region of the endpoint that you're calling
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeStorageVirtualMachines.html
   */
  DescribeStorageVirtualMachines = "fsx:DescribeStorageVirtualMachines",

  /**
   * Read - Grants permission to return the descriptions of all volumes owned by your AWS account in the AWS Region of the endpoint that you're calling
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DescribeVolumes.html
   */
  DescribeVolumes = "fsx:DescribeVolumes",

  /**
   * Write - Grants permission to disassociate a File Gateway instance from an Amazon FSx for Windows File Server file system
   * @see https://docs.aws.amazon.com/filegateway/latest/filefsxw/what-is-file-fsxw.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   */
  DisassociateFileGateway = "fsx:DisassociateFileGateway",

  /**
   * Write - Grants permission to disassociate file system aliases with an Amazon FSx for Windows File Server file system
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_DisassociateFileSystemAliases.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   */
  DisassociateFileSystemAliases = "fsx:DisassociateFileSystemAliases",

  /**
   * Read - Grants permission to list tags for an Amazon FSx resource
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.association `FsxResource.association`} 
   * - {@link FsxResource.backup `FsxResource.backup`} 
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   * - {@link FsxResource.snapshot `FsxResource.snapshot`} 
   * - {@link FsxResource.storageVirtualMachine `FsxResource.storageVirtualMachine`} 
   * - {@link FsxResource.task `FsxResource.task`} 
   * - {@link FsxResource.volume `FsxResource.volume`} 
   */
  ListTagsForResource = "fsx:ListTagsForResource",

  /**
   * PermissionsManagement - Grants permission to manage backup principal associations through AWS Backup
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_CopyBackup.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.backup `FsxResource.backup`} 
   */
  ManageBackupPrincipalAssociations = "fsx:ManageBackupPrincipalAssociations",

  /**
   * Write - Grants permission to release file system NFS V3 locks
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_ReleaseFileSystemNfsV3Locks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   */
  ReleaseFileSystemNfsV3Locks = "fsx:ReleaseFileSystemNfsV3Locks",

  /**
   * Write - Grants permission to restore volume state from a snapshot
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_RestoreVolumeFromSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.snapshot `FsxResource.snapshot`} 
   * - {@link FsxResource.volume `FsxResource.volume`} 
   */
  RestoreVolumeFromSnapshot = "fsx:RestoreVolumeFromSnapshot",

  /**
   * Tagging - Grants permission to tag an Amazon FSx resource
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.association `FsxResource.association`} 
   * - {@link FsxResource.backup `FsxResource.backup`} 
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   * - {@link FsxResource.snapshot `FsxResource.snapshot`} 
   * - {@link FsxResource.storageVirtualMachine `FsxResource.storageVirtualMachine`} 
   * - {@link FsxResource.task `FsxResource.task`} 
   * - {@link FsxResource.volume `FsxResource.volume`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "fsx:TagResource",

  /**
   * Tagging - Grants permission to remove a tag from an Amazon FSx resource
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.association `FsxResource.association`} 
   * - {@link FsxResource.backup `FsxResource.backup`} 
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   * - {@link FsxResource.snapshot `FsxResource.snapshot`} 
   * - {@link FsxResource.storageVirtualMachine `FsxResource.storageVirtualMachine`} 
   * - {@link FsxResource.task `FsxResource.task`} 
   * - {@link FsxResource.volume `FsxResource.volume`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "fsx:UntagResource",

  /**
   * Write - Grants permission to update data repository association configuration
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateDataRepositoryAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.association `FsxResource.association`} 
   */
  UpdateDataRepositoryAssociation = "fsx:UpdateDataRepositoryAssociation",

  /**
   * Write - Grants permission to update file system configuration
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   */
  UpdateFileSystem = "fsx:UpdateFileSystem",

  /**
   * Write - Grants permission to update snapshot configuration
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.snapshot `FsxResource.snapshot`} 
   */
  UpdateSnapshot = "fsx:UpdateSnapshot",

  /**
   * Write - Grants permission to update storage virtual machine configuration
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateStorageVirtualMachine.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.storageVirtualMachine `FsxResource.storageVirtualMachine`} 
   */
  UpdateStorageVirtualMachine = "fsx:UpdateStorageVirtualMachine",

  /**
   * Write - Grants permission to update volume configuration
   * @see https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.volume `FsxResource.volume`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `fsx:StorageVirtualMachineId`: Filters access by the containing storage virtual machine for a volume for mutating volume operations ({@link https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CreateVolume.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `fsx:ParentVolumeId`: Filters access by the containing parent volume for mutating volume operations ({@link https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CreateVolume.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  UpdateVolume = "fsx:UpdateVolume",

  /**
   * * - Grant all fsx permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfsx.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link FsxResource.fileSystem `FsxResource.fileSystem`} 
   * - {@link FsxResource.task `FsxResource.task`} 
   * - {@link FsxResource.backup `FsxResource.backup`} 
   * - {@link FsxResource.volume `FsxResource.volume`} 
   * - {@link FsxResource.association `FsxResource.association`} 
   * - {@link FsxResource.snapshot `FsxResource.snapshot`} 
   * - {@link FsxResource.storageVirtualMachine `FsxResource.storageVirtualMachine`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `fsx:StorageVirtualMachineId`: Filters access by the containing storage virtual machine for a volume for mutating volume operations ({@link https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CreateVolume.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `fsx:ParentVolumeId`: Filters access by the containing parent volume for mutating volume operations ({@link https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-manage-access-intro.htmlAPI_CreateVolume.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "fsx:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfsx.html
 */
export const FsxResource = {

  /**
   * @see https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  fileSystem: (options: Partial<{partition: string, region: string, account: string, fileSystemId: string}> = {}) => `arn:${options.partition || '*'}:fsx:${options.region || '*'}:${options.account || '*'}:file-system/${options.fileSystemId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/fsx/latest/WindowsGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  backup: (options: Partial<{partition: string, region: string, account: string, backupId: string}> = {}) => `arn:${options.partition || '*'}:fsx:${options.region || '*'}:${options.account || '*'}:backup/${options.backupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/security-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  storageVirtualMachine: (options: Partial<{partition: string, region: string, account: string, fileSystemId: string, storageVirtualMachineId: string}> = {}) => `arn:${options.partition || '*'}:fsx:${options.region || '*'}:${options.account || '*'}:storage-virtual-machine/${options.fileSystemId || '*'}/${options.storageVirtualMachineId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/fsx/latest/LustreGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  task: (options: Partial<{partition: string, region: string, account: string, taskId: string}> = {}) => `arn:${options.partition || '*'}:fsx:${options.region || '*'}:${options.account || '*'}:task/${options.taskId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/fsx/latest/LustreGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  association: (options: Partial<{partition: string, region: string, account: string, fileSystemId: string, dataRepositoryAssociationId: string}> = {}) => `arn:${options.partition || '*'}:fsx:${options.region || '*'}:${options.account || '*'}:association/${options.fileSystemId || '*'}/${options.dataRepositoryAssociationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/security-iam.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  volume: (options: Partial<{partition: string, region: string, account: string, fileSystemId: string, volumeId: string}> = {}) => `arn:${options.partition || '*'}:fsx:${options.region || '*'}:${options.account || '*'}:volume/${options.fileSystemId || '*'}/${options.volumeId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/fsx/latest/OpenFsGuide/access-control-overview.html#access-control-resources
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  snapshot: (options: Partial<{partition: string, region: string, account: string, volumeId: string, snapshotId: string}> = {}) => `arn:${options.partition || '*'}:fsx:${options.region || '*'}:${options.account || '*'}:snapshot/${options.volumeId || '*'}/${options.snapshotId || '*'}`,
}

