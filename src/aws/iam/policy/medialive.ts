/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmedialive.html
 */
export enum MedialiveAction {

  /**
   * Write - Grants permission to accept an input device transfer
   * @see https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputDevice `MedialiveResource.inputDevice`} 
   */
  AcceptInputDeviceTransfer = "medialive:AcceptInputDeviceTransfer",

  /**
   * Write - Grants permission to delete channels, inputs, input security groups, and multiplexes
   * @see https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  BatchDelete = "medialive:BatchDelete",

  /**
   * Write - Grants permission to start channels and multiplexes
   * @see https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  BatchStart = "medialive:BatchStart",

  /**
   * Write - Grants permission to stop channels and multiplexes
   * @see https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  BatchStop = "medialive:BatchStop",

  /**
   * Write - Grants permission to add and remove actions from a channel's schedule
   * @see https://docs.aws.amazon.com/medialive/latest/ug/submitting-batch-command.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   */
  BatchUpdateSchedule = "medialive:BatchUpdateSchedule",

  /**
   * Write - Grants permission to cancel an input device transfer
   * @see https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputDevice `MedialiveResource.inputDevice`} 
   */
  CancelInputDeviceTransfer = "medialive:CancelInputDeviceTransfer",

  /**
   * Write - Grants permission to claim an input device
   * @see https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputDevice `MedialiveResource.inputDevice`} 
   */
  ClaimDevice = "medialive:ClaimDevice",

  /**
   * Write - Grants permission to create a channel
   * @see https://docs.aws.amazon.com/medialive/latest/ug/creating-channel-scratch.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   * - {@link MedialiveResource.input `MedialiveResource.input`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateChannel = "medialive:CreateChannel",

  /**
   * Write - Grants permission to create an input
   * @see https://docs.aws.amazon.com/medialive/latest/ug/creating-input.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.input `MedialiveResource.input`} 
   * - {@link MedialiveResource.inputSecurityGroup `MedialiveResource.inputSecurityGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateInput = "medialive:CreateInput",

  /**
   * Write - Grants permission to create an input security group
   * @see https://docs.aws.amazon.com/medialive/latest/ug/working-with-input-security-groups.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputSecurityGroup `MedialiveResource.inputSecurityGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateInputSecurityGroup = "medialive:CreateInputSecurityGroup",

  /**
   * Write - Grants permission to create a multiplex
   * @see https://docs.aws.amazon.com/medialive/latest/ug/multiplex-create.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreateMultiplex = "medialive:CreateMultiplex",

  /**
   * Write - Grants permission to create a multiplex program
   * @see https://docs.aws.amazon.com/medialive/latest/ug/multiplex-create.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   */
  CreateMultiplexProgram = "medialive:CreateMultiplexProgram",

  /**
   * Write - Grants permission to create a partner input
   * @see https://docs.aws.amazon.com/medialive/latest/ug/input-create-cdi-partners.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.input `MedialiveResource.input`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  CreatePartnerInput = "medialive:CreatePartnerInput",

  /**
   * Tagging - Grants permission to create tags for channels, inputs, input security groups, multiplexes, and reservations
   * @see https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   * - {@link MedialiveResource.input `MedialiveResource.input`} 
   * - {@link MedialiveResource.inputSecurityGroup `MedialiveResource.inputSecurityGroup`} 
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   * - {@link MedialiveResource.reservation `MedialiveResource.reservation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateTags = "medialive:CreateTags",

  /**
   * Write - Grants permission to delete a channel
   * @see https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   */
  DeleteChannel = "medialive:DeleteChannel",

  /**
   * Write - Grants permission to delete an input
   * @see https://docs.aws.amazon.com/medialive/latest/ug/delete-input.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.input `MedialiveResource.input`} 
   */
  DeleteInput = "medialive:DeleteInput",

  /**
   * Write - Grants permission to delete an input security group
   * @see https://docs.aws.amazon.com/medialive/latest/ug/delete-input-security-group.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputSecurityGroup `MedialiveResource.inputSecurityGroup`} 
   */
  DeleteInputSecurityGroup = "medialive:DeleteInputSecurityGroup",

  /**
   * Write - Grants permission to delete a multiplex
   * @see https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex-program.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   */
  DeleteMultiplex = "medialive:DeleteMultiplex",

  /**
   * Write - Grants permission to delete a multiplex program
   * @see https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex-program.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   */
  DeleteMultiplexProgram = "medialive:DeleteMultiplexProgram",

  /**
   * Write - Grants permission to delete an expired reservation
   * @see https://docs.aws.amazon.com/medialive/latest/ug/deleting-reservations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.reservation `MedialiveResource.reservation`} 
   */
  DeleteReservation = "medialive:DeleteReservation",

  /**
   * Write - Grants permission to delete all schedule actions for a channel
   * @see https://docs.aws.amazon.com/medialive/latest/ug/schedule-using-console-delete.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   */
  DeleteSchedule = "medialive:DeleteSchedule",

  /**
   * Tagging - Grants permission to delete tags from channels, inputs, input security groups, multiplexes, and reservations
   * @see https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   * - {@link MedialiveResource.input `MedialiveResource.input`} 
   * - {@link MedialiveResource.inputSecurityGroup `MedialiveResource.inputSecurityGroup`} 
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   * - {@link MedialiveResource.reservation `MedialiveResource.reservation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  DeleteTags = "medialive:DeleteTags",

  /**
   * Read - Grants permission to get details about a channel
   * @see https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   */
  DescribeChannel = "medialive:DescribeChannel",

  /**
   * Read - Grants permission to describe an input
   * @see https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.input `MedialiveResource.input`} 
   */
  DescribeInput = "medialive:DescribeInput",

  /**
   * Read - Grants permission to describe an input device
   * @see https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputDevice `MedialiveResource.inputDevice`} 
   */
  DescribeInputDevice = "medialive:DescribeInputDevice",

  /**
   * Read - Grants permission to describe an input device thumbnail
   * @see https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputDevice `MedialiveResource.inputDevice`} 
   */
  DescribeInputDeviceThumbnail = "medialive:DescribeInputDeviceThumbnail",

  /**
   * Read - Grants permission to describe an input security group
   * @see https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputSecurityGroup `MedialiveResource.inputSecurityGroup`} 
   */
  DescribeInputSecurityGroup = "medialive:DescribeInputSecurityGroup",

  /**
   * Read - Grants permission to describe a multiplex
   * @see https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   */
  DescribeMultiplex = "medialive:DescribeMultiplex",

  /**
   * Read - Grants permission to describe a multiplex program
   * @see https://docs.aws.amazon.com/medialive/latest/ug/monitoring-multiplex-console.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   */
  DescribeMultiplexProgram = "medialive:DescribeMultiplexProgram",

  /**
   * Read - Grants permission to get details about a reservation offering
   * @see https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.offering `MedialiveResource.offering`} 
   */
  DescribeOffering = "medialive:DescribeOffering",

  /**
   * Read - Grants permission to get details about a reservation
   * @see https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.reservation `MedialiveResource.reservation`} 
   */
  DescribeReservation = "medialive:DescribeReservation",

  /**
   * Read - Grants permission to view a list of actions scheduled on a channel
   * @see https://docs.aws.amazon.com/medialive/latest/ug/schedule-using-console-view.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   */
  DescribeSchedule = "medialive:DescribeSchedule",

  /**
   * List - Grants permission to list channels
   * @see https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html
   */
  ListChannels = "medialive:ListChannels",

  /**
   * List - Grants permission to list input device transfers
   * @see https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  ListInputDeviceTransfers = "medialive:ListInputDeviceTransfers",

  /**
   * List - Grants permission to list input devices
   * @see https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   */
  ListInputDevices = "medialive:ListInputDevices",

  /**
   * List - Grants permission to list input security groups
   * @see https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  ListInputSecurityGroups = "medialive:ListInputSecurityGroups",

  /**
   * List - Grants permission to list inputs
   * @see https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  ListInputs = "medialive:ListInputs",

  /**
   * List - Grants permission to list multiplex programs
   * @see https://docs.aws.amazon.com/medialive/latest/ug/monitoring-multiplex-console.html
   */
  ListMultiplexPrograms = "medialive:ListMultiplexPrograms",

  /**
   * List - Grants permission to list multiplexes
   * @see https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   */
  ListMultiplexes = "medialive:ListMultiplexes",

  /**
   * List - Grants permission to list reservation offerings
   * @see https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  ListOfferings = "medialive:ListOfferings",

  /**
   * List - Grants permission to list reservations
   * @see https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html
   */
  ListReservations = "medialive:ListReservations",

  /**
   * List - Grants permission to list tags for channels, inputs, input security groups, multiplexes, and reservations
   * @see https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   * - {@link MedialiveResource.input `MedialiveResource.input`} 
   * - {@link MedialiveResource.inputSecurityGroup `MedialiveResource.inputSecurityGroup`} 
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   * - {@link MedialiveResource.reservation `MedialiveResource.reservation`} 
   */
  ListTagsForResource = "medialive:ListTagsForResource",

  /**
   * Write - Grants permission to purchase a reservation offering
   * @see https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.offering `MedialiveResource.offering`} 
   * - {@link MedialiveResource.reservation `MedialiveResource.reservation`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  PurchaseOffering = "medialive:PurchaseOffering",

  /**
   * Write - Grants permission to reboot an input device
   * @see https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputDevice `MedialiveResource.inputDevice`} 
   */
  RebootInputDevice = "medialive:RebootInputDevice",

  /**
   * Write - Grants permission to reject an input device transfer
   * @see https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputDevice `MedialiveResource.inputDevice`} 
   */
  RejectInputDeviceTransfer = "medialive:RejectInputDeviceTransfer",

  /**
   * Write - Grants permission to start a channel
   * @see https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   */
  StartChannel = "medialive:StartChannel",

  /**
   * Write - Grants permission to start a maintenance window for an input device
   * @see https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputDevice `MedialiveResource.inputDevice`} 
   */
  StartInputDeviceMaintenanceWindow = "medialive:StartInputDeviceMaintenanceWindow",

  /**
   * Write - Grants permission to start a multiplex
   * @see https://docs.aws.amazon.com/medialive/latest/ug/start-multiplex.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   */
  StartMultiplex = "medialive:StartMultiplex",

  /**
   * Write - Grants permission to stop a channel
   * @see https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   */
  StopChannel = "medialive:StopChannel",

  /**
   * Write - Grants permission to stop a multiplex
   * @see https://docs.aws.amazon.com/medialive/latest/ug/stop-multiplex.title.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   */
  StopMultiplex = "medialive:StopMultiplex",

  /**
   * Write - Grants permission to transfer an input device
   * @see https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputDevice `MedialiveResource.inputDevice`} 
   */
  TransferInputDevice = "medialive:TransferInputDevice",

  /**
   * Write - Grants permission to update a channel
   * @see https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   */
  UpdateChannel = "medialive:UpdateChannel",

  /**
   * Write - Grants permission to update the class of a channel
   * @see https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   */
  UpdateChannelClass = "medialive:UpdateChannelClass",

  /**
   * Write - Grants permission to update an input
   * @see https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.input `MedialiveResource.input`} 
   */
  UpdateInput = "medialive:UpdateInput",

  /**
   * Write - Grants permission to update an input device
   * @see https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputDevice `MedialiveResource.inputDevice`} 
   */
  UpdateInputDevice = "medialive:UpdateInputDevice",

  /**
   * Write - Grants permission to update an input security group
   * @see https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputSecurityGroup `MedialiveResource.inputSecurityGroup`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UpdateInputSecurityGroup = "medialive:UpdateInputSecurityGroup",

  /**
   * Write - Grants permission to update a multiplex
   * @see https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   */
  UpdateMultiplex = "medialive:UpdateMultiplex",

  /**
   * Write - Grants permission to update a multiplex program
   * @see https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   */
  UpdateMultiplexProgram = "medialive:UpdateMultiplexProgram",

  /**
   * Write - Grants permission to update a reservation
   * @see https://docs.aws.amazon.com/medialive/latest/ug/reservations.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.reservation `MedialiveResource.reservation`} 
   */
  UpdateReservation = "medialive:UpdateReservation",

  /**
   * * - Grant all medialive permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmedialive.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link MedialiveResource.inputDevice `MedialiveResource.inputDevice`} 
   * - {@link MedialiveResource.channel `MedialiveResource.channel`} 
   * - {@link MedialiveResource.input `MedialiveResource.input`} 
   * - {@link MedialiveResource.inputSecurityGroup `MedialiveResource.inputSecurityGroup`} 
   * - {@link MedialiveResource.multiplex `MedialiveResource.multiplex`} 
   * - {@link MedialiveResource.reservation `MedialiveResource.reservation`} 
   * - {@link MedialiveResource.offering `MedialiveResource.offering`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  All = "medialive:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmedialive.html
 */
export const MedialiveResource = {

  /**
   * @see https://docs.aws.amazon.com/medialive/latest/ug/channels.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  channel: (options: Partial<{partition: string, region: string, account: string, channelId: string}> = {}) => `arn:${options.partition || '*'}:medialive:${options.region || '*'}:${options.account || '*'}:channel:${options.channelId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/medialive/latest/ug/inputs.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  input: (options: Partial<{partition: string, region: string, account: string, inputId: string}> = {}) => `arn:${options.partition || '*'}:medialive:${options.region || '*'}:${options.account || '*'}:input:${options.inputId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  inputDevice: (options: Partial<{partition: string, region: string, account: string, deviceId: string}> = {}) => `arn:${options.partition || '*'}:medialive:${options.region || '*'}:${options.account || '*'}:inputDevice:${options.deviceId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/medialive/latest/ug/inputsecuritygroups.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  inputSecurityGroup: (options: Partial<{partition: string, region: string, account: string, inputSecurityGroupId: string}> = {}) => `arn:${options.partition || '*'}:medialive:${options.region || '*'}:${options.account || '*'}:inputSecurityGroup:${options.inputSecurityGroupId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/medialive/latest/ug/eml-multiplex.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  multiplex: (options: Partial<{partition: string, region: string, account: string, multiplexId: string}> = {}) => `arn:${options.partition || '*'}:medialive:${options.region || '*'}:${options.account || '*'}:multiplex:${options.multiplexId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/medialive/latest/ug/reservations.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/medialive/latest/ugtagging.html documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  reservation: (options: Partial<{partition: string, region: string, account: string, reservationId: string}> = {}) => `arn:${options.partition || '*'}:medialive:${options.region || '*'}:${options.account || '*'}:reservation:${options.reservationId || '*'}`,

  /**
   * @see https://docs.aws.amazon.com/medialive/latest/ug/input-output-reservations.html
   */
  offering: (options: Partial<{partition: string, region: string, account: string, offeringId: string}> = {}) => `arn:${options.partition || '*'}:medialive:${options.region || '*'}:${options.account || '*'}:offering:${options.offeringId || '*'}`,
}

