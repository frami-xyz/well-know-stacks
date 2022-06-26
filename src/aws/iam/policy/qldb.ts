/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqldb.html
 */
export enum QldbAction {

  /**
   * Write - Grants permission to cancel a journal kinesis stream
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_CancelJournalKinesisStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.stream `QldbResource.stream`} 
   */
  CancelJournalKinesisStream = "qldb:CancelJournalKinesisStream",

  /**
   * Write - Grants permission to create a ledger
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_CreateLedger.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateLedger = "qldb:CreateLedger",

  /**
   * Write - Grants permission to delete a ledger
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_DeleteLedger.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  DeleteLedger = "qldb:DeleteLedger",

  /**
   * Read - Grants permission to describe information about a journal kinesis stream
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalKinesisStream.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.stream `QldbResource.stream`} 
   */
  DescribeJournalKinesisStream = "qldb:DescribeJournalKinesisStream",

  /**
   * Read - Grants permission to describe information about a journal export job
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalS3Export.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  DescribeJournalS3Export = "qldb:DescribeJournalS3Export",

  /**
   * Read - Grants permission to describe a ledger
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeLedger.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  DescribeLedger = "qldb:DescribeLedger",

  /**
   * Write - Grants permission to send commands to a ledger via the console
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  ExecuteStatement = "qldb:ExecuteStatement",

  /**
   * Write - Grants permission to export journal contents to an Amazon S3 bucket
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_ExportJournalToS3.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  ExportJournalToS3 = "qldb:ExportJournalToS3",

  /**
   * Read - Grants permission to retrieve a block from a ledger for a given BlockAddress
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetBlock.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  GetBlock = "qldb:GetBlock",

  /**
   * Read - Grants permission to retrieve a digest from a ledger for a given BlockAddress
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetDigest.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  GetDigest = "qldb:GetDigest",

  /**
   * Read - Grants permission to retrieve a revision for a given document ID and a given BlockAddress
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetRevision.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  GetRevision = "qldb:GetRevision",

  /**
   * Write - Grants permission to insert sample application data via the console
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  InsertSampleData = "qldb:InsertSampleData",

  /**
   * List - Grants permission to list journal kinesis streams for a specified ledger
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalKinesisStreamsForLedger.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.stream `QldbResource.stream`} 
   */
  ListJournalKinesisStreamsForLedger = "qldb:ListJournalKinesisStreamsForLedger",

  /**
   * List - Grants permission to list journal export jobs for all ledgers
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3Exports.html
   */
  ListJournalS3Exports = "qldb:ListJournalS3Exports",

  /**
   * List - Grants permission to list journal export jobs for a specified ledger
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3ExportsForLedger.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  ListJournalS3ExportsForLedger = "qldb:ListJournalS3ExportsForLedger",

  /**
   * List - Grants permission to list existing ledgers
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListLedgers.html
   */
  ListLedgers = "qldb:ListLedgers",

  /**
   * Read - Grants permission to list tags for a resource
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.catalog `QldbResource.catalog`} 
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   * - {@link QldbResource.stream `QldbResource.stream`} 
   * - {@link QldbResource.table `QldbResource.table`} 
   */
  ListTagsForResource = "qldb:ListTagsForResource",

  /**
   * Write - Grants permission to create an index on a table
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.create-index.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.table `QldbResource.table`} 
   */
  PartiQLCreateIndex = "qldb:PartiQLCreateIndex",

  /**
   * Write - Grants permission to create a table
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.create-table.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.table `QldbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PartiQLCreateTable = "qldb:PartiQLCreateTable",

  /**
   * Write - Grants permission to delete documents from a table
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.table `QldbResource.table`} 
   */
  PartiQLDelete = "qldb:PartiQLDelete",

  /**
   * Write - Grants permission to drop an index from a table
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.drop-index.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.table `QldbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `qldb:Purge`: Filters access by the value of purge that is specified in a PartiQL DROP statement ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-purge documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PartiQLDropIndex = "qldb:PartiQLDropIndex",

  /**
   * Write - Grants permission to drop a table
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.drop-table.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.table `QldbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `qldb:Purge`: Filters access by the value of purge that is specified in a PartiQL DROP statement ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-purge documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  PartiQLDropTable = "qldb:PartiQLDropTable",

  /**
   * Read - Grants permission to use the history function on a table
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/working.history.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.table `QldbResource.table`} 
   */
  PartiQLHistoryFunction = "qldb:PartiQLHistoryFunction",

  /**
   * Write - Grants permission to insert documents into a table
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.insert.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.table `QldbResource.table`} 
   */
  PartiQLInsert = "qldb:PartiQLInsert",

  /**
   * Read - Grants permission to select documents from a table
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.select.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.catalog `QldbResource.catalog`} 
   * - {@link QldbResource.table `QldbResource.table`} 
   */
  PartiQLSelect = "qldb:PartiQLSelect",

  /**
   * Write - Grants permission to undrop a table
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.undrop-table.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.table `QldbResource.table`} 
   */
  PartiQLUndropTable = "qldb:PartiQLUndropTable",

  /**
   * Write - Grants permission to update existing documents in a table
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.update.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.table `QldbResource.table`} 
   */
  PartiQLUpdate = "qldb:PartiQLUpdate",

  /**
   * Write - Grants permission to send commands to a ledger
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_QLDB-Session_SendCommand.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  SendCommand = "qldb:SendCommand",

  /**
   * Write - Grants permission to view a ledger's catalog via the console
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  ShowCatalog = "qldb:ShowCatalog",

  /**
   * Write - Grants permission to stream journal contents to a Kinesis Data Stream
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_StreamJournalToKinesis.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.stream `QldbResource.stream`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  StreamJournalToKinesis = "qldb:StreamJournalToKinesis",

  /**
   * Tagging - Grants permission to add one or more tags to a resource
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.catalog `QldbResource.catalog`} 
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   * - {@link QldbResource.stream `QldbResource.stream`} 
   * - {@link QldbResource.table `QldbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  TagResource = "qldb:TagResource",

  /**
   * Tagging - Grants permission to remove one or more tags from a resource
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.catalog `QldbResource.catalog`} 
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   * - {@link QldbResource.stream `QldbResource.stream`} 
   * - {@link QldbResource.table `QldbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "qldb:UntagResource",

  /**
   * Write - Grants permission to update properties on a ledger
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedger.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  UpdateLedger = "qldb:UpdateLedger",

  /**
   * Write - Grants permission to update the permissions mode on a ledger
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedgerPermissionsMode.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   */
  UpdateLedgerPermissionsMode = "qldb:UpdateLedgerPermissionsMode",

  /**
   * * - Grant all qldb permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqldb.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link QldbResource.stream `QldbResource.stream`} 
   * - {@link QldbResource.ledger `QldbResource.ledger`} 
   * - {@link QldbResource.catalog `QldbResource.catalog`} 
   * - {@link QldbResource.table `QldbResource.table`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters actions based on the presence of tag key-value pairs in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters actions based on the presence of tag keys in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `qldb:Purge`: Filters access by the value of purge that is specified in a PartiQL DROP statement ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-purge documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "qldb:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqldb.html
 */
export const QldbResource = {

  /**
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/ledger-structure.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ledger: (options: Partial<{partition: string, region: string, account: string, ledgerName: string}> = {}) => `arn:${options.partition || '*'}:qldb:${options.region || '*'}:${options.account || '*'}:ledger/${options.ledgerName || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/streams.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  stream: (options: Partial<{partition: string, region: string, account: string, ledgerName: string, streamId: string}> = {}) => `arn:${options.partition || '*'}:qldb:${options.region || '*'}:${options.account || '*'}:stream/${options.ledgerName || '*'}/${options.streamId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/working.manage-tables.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  table: (options: Partial<{partition: string, region: string, account: string, ledgerName: string, tableId: string}> = {}) => `arn:${options.partition || '*'}:qldb:${options.region || '*'}:${options.account || '*'}:ledger/${options.ledgerName || '*'}/table/${options.tableId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/qldb/latest/developerguide/working.catalog.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters actions based on tag key-value pairs attached to the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  catalog: (options: Partial<{partition: string, region: string, account: string, ledgerName: string}> = {}) => `arn:${options.partition || '*'}:qldb:${options.region || '*'}:${options.account || '*'}:ledger/${options.ledgerName || '*'}/information_schema/user_tables`,
}

