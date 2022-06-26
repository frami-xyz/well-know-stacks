/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonstoragegateway.html
 */
export enum StoragegatewayAction {

  /**
   * Write - Grants permission to activate the gateway you previously deployed on your host
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ActivateGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  ActivateGateway = "storagegateway:ActivateGateway",

  /**
   * Write - Grants permission to configure one or more gateway local disks as cache for a cached-volume gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddCache.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  AddCache = "storagegateway:AddCache",

  /**
   * Tagging - Grants permission to add one or more tags to the specified resource
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddTagsToResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.share `StoragegatewayResource.share`} 
   * - {@link StoragegatewayResource.tape `StoragegatewayResource.tape`} 
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  AddTagsToResource = "storagegateway:AddTagsToResource",

  /**
   * Write - Grants permission to configure one or more gateway local disks as upload buffer for a specified gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddUploadBuffer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  AddUploadBuffer = "storagegateway:AddUploadBuffer",

  /**
   * Write - Grants permission to configure one or more gateway local disks as working storage for a gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddWorkingStorage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  AddWorkingStorage = "storagegateway:AddWorkingStorage",

  /**
   * Write - Grants permission to move a tape to the target pool specified
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AssignTapePool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.tape `StoragegatewayResource.tape`} 
   * - {@link StoragegatewayResource.tapepool `StoragegatewayResource.tapepool`} 
   */
  AssignTapePool = "storagegateway:AssignTapePool",

  /**
   * Write - Grants permission to associate an Amazon FSx file system with the Amazon FSx file gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AssociateFileSystem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  AssociateFileSystem = "storagegateway:AssociateFileSystem",

  /**
   * Write - Grants permission to connect a volume to an iSCSI connection and then attaches the volume to the specified gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AttachVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  AttachVolume = "storagegateway:AttachVolume",

  /**
   * Write - Grants permission to allow the governance retention lock on a pool to be bypassed
   * @see https://docs.aws.amazon.com/storagegateway/latest/userguide/CreatingCustomTapePool.html#TapeRetentionLock
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.tapepool `StoragegatewayResource.tapepool`} 
   */
  BypassGovernanceRetention = "storagegateway:BypassGovernanceRetention",

  /**
   * Write - Grants permission to cancel archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelArchival.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.tape `StoragegatewayResource.tape`} 
   */
  CancelArchival = "storagegateway:CancelArchival",

  /**
   * Write - Grants permission to cancel retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelRetrieval.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.tape `StoragegatewayResource.tape`} 
   */
  CancelRetrieval = "storagegateway:CancelRetrieval",

  /**
   * Write - Grants permission to create a cached volume on a specified cached gateway. This operation is supported only for the gateway-cached volume architecture
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateCachediSCSIVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateCachediSCSIVolume = "storagegateway:CreateCachediSCSIVolume",

  /**
   * Write - Grants permission to create a NFS file share on an existing file gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateNFSFileShare = "storagegateway:CreateNFSFileShare",

  /**
   * Write - Grants permission to create a SMB file share on an existing file gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSMBFileShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateSMBFileShare = "storagegateway:CreateSMBFileShare",

  /**
   * Write - Grants permission to initiate a snapshot of a volume
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshot.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  CreateSnapshot = "storagegateway:CreateSnapshot",

  /**
   * Write - Grants permission to initiate a snapshot of a gateway from a volume recovery point
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshotFromVolumeRecoveryPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  CreateSnapshotFromVolumeRecoveryPoint = "storagegateway:CreateSnapshotFromVolumeRecoveryPoint",

  /**
   * Write - Grants permission to create a volume on a specified gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateStorediSCSIVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateStorediSCSIVolume = "storagegateway:CreateStorediSCSIVolume",

  /**
   * Write - Grants permission to create a tape pool
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapePool.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTapePool = "storagegateway:CreateTapePool",

  /**
   * Write - Grants permission to create a virtual tape by using your own barcode
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapeWithBarcode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.tapepool `StoragegatewayResource.tapepool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTapeWithBarcode = "storagegateway:CreateTapeWithBarcode",

  /**
   * Write - Grants permission to create one or more virtual tapes. You write data to the virtual tapes and then archive the tapes
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.tapepool `StoragegatewayResource.tapepool`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateTapes = "storagegateway:CreateTapes",

  /**
   * Write - Grants permission to delete the automatic tape creation policy configured on a gateway-VTL
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteAutomaticTapeCreationPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DeleteAutomaticTapeCreationPolicy = "storagegateway:DeleteAutomaticTapeCreationPolicy",

  /**
   * Write - Grants permission to delete the bandwidth rate limits of a gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteBandwidthRateLimit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DeleteBandwidthRateLimit = "storagegateway:DeleteBandwidthRateLimit",

  /**
   * Write - Grants permission to delete Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteChapCredentials.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.target `StoragegatewayResource.target`} 
   */
  DeleteChapCredentials = "storagegateway:DeleteChapCredentials",

  /**
   * Write - Grants permission to delete a file share from a file gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteFileShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.share `StoragegatewayResource.share`} 
   */
  DeleteFileShare = "storagegateway:DeleteFileShare",

  /**
   * Write - Grants permission to delete a gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DeleteGateway = "storagegateway:DeleteGateway",

  /**
   * Write - Grants permission to delete a snapshot of a volume
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteSnapshotSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  DeleteSnapshotSchedule = "storagegateway:DeleteSnapshotSchedule",

  /**
   * Write - Grants permission to delete the specified virtual tape
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTape.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.tape `StoragegatewayResource.tape`} 
   */
  DeleteTape = "storagegateway:DeleteTape",

  /**
   * Write - Grants permission to delete the specified virtual tape from the virtual tape shelf (VTS)
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapeArchive.html
   */
  DeleteTapeArchive = "storagegateway:DeleteTapeArchive",

  /**
   * Write - Grants permission to delete the specified tape pool
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapePool.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.tapepool `StoragegatewayResource.tapepool`} 
   */
  DeleteTapePool = "storagegateway:DeleteTapePool",

  /**
   * Write - Grants permission to delete the specified gateway volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  DeleteVolume = "storagegateway:DeleteVolume",

  /**
   * Read - Grants permission to get the information about the most recent high availability monitoring test that was performed on the gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeAvailabilityMonitorTest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeAvailabilityMonitorTest = "storagegateway:DescribeAvailabilityMonitorTest",

  /**
   * Read - Grants permission to get the bandwidth rate limits of a gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeBandwidthRateLimit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeBandwidthRateLimit = "storagegateway:DescribeBandwidthRateLimit",

  /**
   * Read - Grants permission to get the bandwidth rate limit schedule of a gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeBandwidthRateLimitSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeBandwidthRateLimitSchedule = "storagegateway:DescribeBandwidthRateLimitSchedule",

  /**
   * Read - Grants permission to get information about the cache of a gateway. This operation is supported only for the gateway-cached volume architecture
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCache.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeCache = "storagegateway:DescribeCache",

  /**
   * Read - Grants permission to get a description of the gateway volumes specified in the request. This operation is supported only for the gateway-cached volume architecture
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCachediSCSIVolumes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  DescribeCachediSCSIVolumes = "storagegateway:DescribeCachediSCSIVolumes",

  /**
   * Read - Grants permission to get an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeChapCredentials.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.target `StoragegatewayResource.target`} 
   */
  DescribeChapCredentials = "storagegateway:DescribeChapCredentials",

  /**
   * Read - Grants permission to get a description for one or more file system associations
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeFileSystemAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.fsAssociation `StoragegatewayResource.fsAssociation`} 
   */
  DescribeFileSystemAssociations = "storagegateway:DescribeFileSystemAssociations",

  /**
   * Read - Grants permission to get metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not)
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeGatewayInformation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeGatewayInformation = "storagegateway:DescribeGatewayInformation",

  /**
   * Read - Grants permission to get your gateway's weekly maintenance start time including the day and time of the week
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeMaintenanceStartTime.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeMaintenanceStartTime = "storagegateway:DescribeMaintenanceStartTime",

  /**
   * Read - Grants permission to get a description for one or more file shares from a file gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeNFSFileShares.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.share `StoragegatewayResource.share`} 
   */
  DescribeNFSFileShares = "storagegateway:DescribeNFSFileShares",

  /**
   * Read - Grants permission to get a description for one or more file shares from a file gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBFileShares.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.share `StoragegatewayResource.share`} 
   */
  DescribeSMBFileShares = "storagegateway:DescribeSMBFileShares",

  /**
   * Read - Grants permission to get a description of a Server Message Block (SMB) file share settings from a file gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBSettings.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeSMBSettings = "storagegateway:DescribeSMBSettings",

  /**
   * Read - Grants permission to describe the snapshot schedule for the specified gateway volume
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSnapshotSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  DescribeSnapshotSchedule = "storagegateway:DescribeSnapshotSchedule",

  /**
   * Read - Grants permission to get the description of the gateway volumes specified in the request
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeStorediSCSIVolumes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  DescribeStorediSCSIVolumes = "storagegateway:DescribeStorediSCSIVolumes",

  /**
   * Read - Grants permission to get a description of specified virtual tapes in the virtual tape shelf (VTS)
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeArchives.html
   */
  DescribeTapeArchives = "storagegateway:DescribeTapeArchives",

  /**
   * Read - Grants permission to get a list of virtual tape recovery points that are available for the specified gateway-VTL
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeRecoveryPoints.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeTapeRecoveryPoints = "storagegateway:DescribeTapeRecoveryPoints",

  /**
   * Read - Grants permission to get a description of the specified Amazon Resource Name (ARN) of virtual tapes
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeTapes = "storagegateway:DescribeTapes",

  /**
   * Read - Grants permission to get information about the upload buffer of a gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeUploadBuffer.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeUploadBuffer = "storagegateway:DescribeUploadBuffer",

  /**
   * Read - Grants permission to get a description of virtual tape library (VTL) devices for the specified gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeVTLDevices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeVTLDevices = "storagegateway:DescribeVTLDevices",

  /**
   * Read - Grants permission to get information about the working storage of a gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeWorkingStorage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DescribeWorkingStorage = "storagegateway:DescribeWorkingStorage",

  /**
   * Write - Grants permission to disconnect a volume from an iSCSI connection and then detaches the volume from the specified gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DetachVolume.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  DetachVolume = "storagegateway:DetachVolume",

  /**
   * Write - Grants permission to disable a gateway when the gateway is no longer functioning
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DisableGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  DisableGateway = "storagegateway:DisableGateway",

  /**
   * Write - Grants permission to disassociate an Amazon FSx file system from an Amazon FSx file gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DisassociateFileSystem.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.fsAssociation `StoragegatewayResource.fsAssociation`} 
   */
  DisassociateFileSystem = "storagegateway:DisassociateFileSystem",

  /**
   * Write - Grants permission to enable you to join an Active Directory Domain
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_JoinDomain.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  JoinDomain = "storagegateway:JoinDomain",

  /**
   * List - Grants permission to list the automatic tape creation policies configured on the specified gateway-VTL or all gateway-VTLs owned by your account
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListAutomaticTapeCreationPolicies.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  ListAutomaticTapeCreationPolicies = "storagegateway:ListAutomaticTapeCreationPolicies",

  /**
   * List - Grants permission to get a list of the file shares for a specific file gateway, or the list of file shares that belong to the calling user account
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListFileShares.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  ListFileShares = "storagegateway:ListFileShares",

  /**
   * List - Grants permission to get a list of the file system associations for the specified gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListFileSystemAssociations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  ListFileSystemAssociations = "storagegateway:ListFileSystemAssociations",

  /**
   * List - Grants permission to list gateways owned by an AWS account in a region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN)
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListGateways.html
   */
  ListGateways = "storagegateway:ListGateways",

  /**
   * List - Grants permission to get a list of the gateway's local disks
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListLocalDisks.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  ListLocalDisks = "storagegateway:ListLocalDisks",

  /**
   * List - Grants permission to get the tags that have been added to the specified resource
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.share `StoragegatewayResource.share`} 
   * - {@link StoragegatewayResource.tape `StoragegatewayResource.tape`} 
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  ListTagsForResource = "storagegateway:ListTagsForResource",

  /**
   * List - Grants permission to list tape pools owned by your AWS account
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapePools.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.tapepool `StoragegatewayResource.tapepool`} 
   */
  ListTapePools = "storagegateway:ListTapePools",

  /**
   * List - Grants permission to list virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS)
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.tape `StoragegatewayResource.tape`} 
   */
  ListTapes = "storagegateway:ListTapes",

  /**
   * List - Grants permission to list iSCSI initiators that are connected to a volume
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeInitiators.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  ListVolumeInitiators = "storagegateway:ListVolumeInitiators",

  /**
   * List - Grants permission to list the recovery points for a specified gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeRecoveryPoints.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  ListVolumeRecoveryPoints = "storagegateway:ListVolumeRecoveryPoints",

  /**
   * List - Grants permission to list the iSCSI stored volumes of a gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumes.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  ListVolumes = "storagegateway:ListVolumes",

  /**
   * Write - Grants permission to send you a notification through CloudWatch Events when all files written to your NFS file share have been uploaded to Amazon S3
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_NotifyWhenUploaded.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.share `StoragegatewayResource.share`} 
   */
  NotifyWhenUploaded = "storagegateway:NotifyWhenUploaded",

  /**
   * Write - Grants permission to refresh the cache for the specified file share
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RefreshCache.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.share `StoragegatewayResource.share`} 
   */
  RefreshCache = "storagegateway:RefreshCache",

  /**
   * Tagging - Grants permission to remove one or more tags from the specified resource
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RemoveTagsFromResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.share `StoragegatewayResource.share`} 
   * - {@link StoragegatewayResource.tape `StoragegatewayResource.tape`} 
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  RemoveTagsFromResource = "storagegateway:RemoveTagsFromResource",

  /**
   * Write - Grants permission to reset all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ResetCache.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  ResetCache = "storagegateway:ResetCache",

  /**
   * Write - Grants permission to retrieve an archived virtual tape from the virtual tape shelf (VTS) to a gateway-VTL
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeArchive.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.tape `StoragegatewayResource.tape`} 
   */
  RetrieveTapeArchive = "storagegateway:RetrieveTapeArchive",

  /**
   * Write - Grants permission to retrieve the recovery point for the specified virtual tape
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeRecoveryPoint.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.tape `StoragegatewayResource.tape`} 
   */
  RetrieveTapeRecoveryPoint = "storagegateway:RetrieveTapeRecoveryPoint",

  /**
   * Write - Grants permission to set the password for your VM local console
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetLocalConsolePassword.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  SetLocalConsolePassword = "storagegateway:SetLocalConsolePassword",

  /**
   * Write - Grants permission to set the password for SMB Guest user
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetSMBGuestPassword.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  SetSMBGuestPassword = "storagegateway:SetSMBGuestPassword",

  /**
   * Write - Grants permission to shut down a gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ShutdownGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  ShutdownGateway = "storagegateway:ShutdownGateway",

  /**
   * Write - Grants permission to start a test that verifies that the specified gateway is configured for High Availability monitoring in your host environment
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_StartAvailabilityMonitorTest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  StartAvailabilityMonitorTest = "storagegateway:StartAvailabilityMonitorTest",

  /**
   * Write - Grants permission to start a gateway that you previously shut down
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_StartGateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  StartGateway = "storagegateway:StartGateway",

  /**
   * Write - Grants permission to update the automatic tape creation policy configured on a gateway-VTL
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateAutomaticTapeCreationPolicy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.tapepool `StoragegatewayResource.tapepool`} 
   */
  UpdateAutomaticTapeCreationPolicy = "storagegateway:UpdateAutomaticTapeCreationPolicy",

  /**
   * Write - Grants permission to update the bandwidth rate limits of a gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateBandwidthRateLimit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  UpdateBandwidthRateLimit = "storagegateway:UpdateBandwidthRateLimit",

  /**
   * Write - Grants permission to update the bandwidth rate limit schedule of a gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateBandwidthRateLimitSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  UpdateBandwidthRateLimitSchedule = "storagegateway:UpdateBandwidthRateLimitSchedule",

  /**
   * Write - Grants permission to update the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateChapCredentials.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.target `StoragegatewayResource.target`} 
   */
  UpdateChapCredentials = "storagegateway:UpdateChapCredentials",

  /**
   * Write - Grants permission to update a file system association
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateFileSystemAssociation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.fsAssociation `StoragegatewayResource.fsAssociation`} 
   */
  UpdateFileSystemAssociation = "storagegateway:UpdateFileSystemAssociation",

  /**
   * Write - Grants permission to update a gateway's metadata, which includes the gateway's name and time zone
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewayInformation.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  UpdateGatewayInformation = "storagegateway:UpdateGatewayInformation",

  /**
   * Write - Grants permission to update the gateway virtual machine (VM) software
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewaySoftwareNow.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  UpdateGatewaySoftwareNow = "storagegateway:UpdateGatewaySoftwareNow",

  /**
   * Write - Grants permission to update a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateMaintenanceStartTime.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  UpdateMaintenanceStartTime = "storagegateway:UpdateMaintenanceStartTime",

  /**
   * Write - Grants permission to update a NFS file share
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateNFSFileShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.share `StoragegatewayResource.share`} 
   */
  UpdateNFSFileShare = "storagegateway:UpdateNFSFileShare",

  /**
   * Write - Grants permission to update a SMB file share
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBFileShare.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.share `StoragegatewayResource.share`} 
   */
  UpdateSMBFileShare = "storagegateway:UpdateSMBFileShare",

  /**
   * Write - Grants permission to update whether the shares on a gateway are visible in a net view or browse list
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBFileShareVisibility.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  UpdateSMBFileShareVisibility = "storagegateway:UpdateSMBFileShareVisibility",

  /**
   * Write - Grants permission to update the list of Active Directory users and groups that have special permissions for SMB file shares on the gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBLocalGroups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  UpdateSMBLocalGroups = "storagegateway:UpdateSMBLocalGroups",

  /**
   * Write - Grants permission to update the SMB security strategy on a file gateway
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBSecurityStrategy.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   */
  UpdateSMBSecurityStrategy = "storagegateway:UpdateSMBSecurityStrategy",

  /**
   * Write - Grants permission to update a snapshot schedule configured for a gateway volume
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSnapshotSchedule.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   */
  UpdateSnapshotSchedule = "storagegateway:UpdateSnapshotSchedule",

  /**
   * Write - Grants permission to update the type of medium changer in a gateway-VTL
   * @see https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateVTLDeviceType.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.device `StoragegatewayResource.device`} 
   */
  UpdateVTLDeviceType = "storagegateway:UpdateVTLDeviceType",

  /**
   * * - Grant all storagegateway permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonstoragegateway.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link StoragegatewayResource.gateway `StoragegatewayResource.gateway`} 
   * - {@link StoragegatewayResource.share `StoragegatewayResource.share`} 
   * - {@link StoragegatewayResource.tape `StoragegatewayResource.tape`} 
   * - {@link StoragegatewayResource.volume `StoragegatewayResource.volume`} 
   * - {@link StoragegatewayResource.tapepool `StoragegatewayResource.tapepool`} 
   * - {@link StoragegatewayResource.target `StoragegatewayResource.target`} 
   * - {@link StoragegatewayResource.fsAssociation `StoragegatewayResource.fsAssociation`} 
   * - {@link StoragegatewayResource.device `StoragegatewayResource.device`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the allowed set of values for each of the tags ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the presence of mandatory tags in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "storagegateway:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonstoragegateway.html
 */
export const StoragegatewayResource = {

  /**
   * @see https://docs.aws.amazon.com/storagegateway/latest/userguide/resource_vtl-devices.html
   */
  device: (options: Partial<{partition: string, region: string, account: string, gatewayId: string, vtldevice: string}> = {}) => `arn:${options.partition || '*'}:storagegateway:${options.region || '*'}:${options.account || '*'}:gateway/${options.gatewayId || '*'}/device/${options.vtldevice || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/storagegateway/latest/userguide/API_AssociateFileSystem.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  fsAssociation: (options: Partial<{partition: string, region: string, account: string, fsaId: string}> = {}) => `arn:${options.partition || '*'}:storagegateway:${options.region || '*'}:${options.account || '*'}:fs-association/${options.fsaId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  gateway: (options: Partial<{partition: string, region: string, account: string, gatewayId: string}> = {}) => `arn:${options.partition || '*'}:storagegateway:${options.region || '*'}:${options.account || '*'}:gateway/${options.gatewayId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateFileShare.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  share: (options: Partial<{partition: string, region: string, account: string, shareId: string}> = {}) => `arn:${options.partition || '*'}:storagegateway:${options.region || '*'}:${options.account || '*'}:share/${options.shareId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html#storage-gateway-vtl-concepts
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  tape: (options: Partial<{partition: string, region: string, account: string, tapeBarcode: string}> = {}) => `arn:${options.partition || '*'}:storagegateway:${options.region || '*'}:${options.account || '*'}:tape/${options.tapeBarcode || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/storagegateway/latest/userguide/CreatingCustomTapePool.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  tapepool: (options: Partial<{partition: string, region: string, account: string, poolId: string}> = {}) => `arn:${options.partition || '*'}:storagegateway:${options.region || '*'}:${options.account || '*'}:tapepool/${options.poolId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateVolumes.html
   */
  target: (options: Partial<{partition: string, region: string, account: string, gatewayId: string, iscsiTarget: string}> = {}) => `arn:${options.partition || '*'}:storagegateway:${options.region || '*'}:${options.account || '*'}:gateway/${options.gatewayId || '*'}/target/${options.iscsiTarget || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html#volume-gateway-concepts
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by tag-value associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  volume: (options: Partial<{partition: string, region: string, account: string, gatewayId: string, volumeId: string}> = {}) => `arn:${options.partition || '*'}:storagegateway:${options.region || '*'}:${options.account || '*'}:gateway/${options.gatewayId || '*'}/volume/${options.volumeId || '*'}`,
}

