/**
 * You can specify the following actions in the `Action` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservicechat.html
 */
export enum IvschatAction {

  /**
   * Write - Grants permission to create an encrypted token that is used to establish an individual WebSocket connection to a room
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateChatToken.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateChatToken = "ivschat:CreateChatToken",

  /**
   * Write - Grants permission to create a room that allows clients to connect and pass messages
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  CreateRoom = "ivschat:CreateRoom",

  /**
   * Write - Grants permission to send an event to a specific room which directs clients to delete a specific message
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DeleteMessage.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   */
  DeleteMessage = "ivschat:DeleteMessage",

  /**
   * Write - Grants permission to delete the room for a specified room ARN
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DeleteRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   */
  DeleteRoom = "ivschat:DeleteRoom",

  /**
   * Write - Grants permission to disconnect all connections using a specified user ID from a room
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_DisconnectUser.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   */
  DisconnectUser = "ivschat:DisconnectUser",

  /**
   * Read - Grants permission to get the room configuration for a specified room ARN
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_GetRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   */
  GetRoom = "ivschat:GetRoom",

  /**
   * List - Grants permission to get summary information about rooms
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_ListRooms.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   */
  ListRooms = "ivschat:ListRooms",

  /**
   * Read - Grants permission to get information about the tags for a specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_ListTagsForResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  ListTagsForResource = "ivschat:ListTagsForResource",

  /**
   * Write - Grants permission to send an event to a room
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_SendEvent.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   */
  SendEvent = "ivschat:SendEvent",

  /**
   * Tagging - Grants permission to add or update tags for a resource with a specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_TagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  TagResource = "ivschat:TagResource",

  /**
   * Tagging - Grants permission to remove tags for a resource with a specified ARN
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_UntagResource.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   */
  UntagResource = "ivschat:UntagResource",

  /**
   * Write - Grants permission to update the room configuration for a specified room ARN
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_UpdateRoom.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   */
  UpdateRoom = "ivschat:UpdateRoom",

  /**
   * * - Grant all ivschat permissions
   * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservicechat.html
   * 
   * @remarks
   * 
   * It can be used with the following resource types in the `Resource` element of IAM policy statements:
   * - {@link IvschatResource.room `IvschatResource.room`} 
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:TagKeys`: Filters access by the tag keys that are passed in the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ArrayOfString `ArrayOfString`})
   * - `aws:RequestTag/${TagKey}`: Filters access by the tags associated with the request ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  All = "ivschat:*",
}

/**
 * You can specify the following resources in the `Resource` element of an IAM policy statement
 * @see https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninteractivevideoservicechat.html
 */
export const IvschatResource = {

  /**
   * @see https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_Room.html
   * 
   * @remarks
   * 
   * It can be used with the following condition keys in the `Condition` element of an IAM policy statements:
   * - `aws:ResourceTag/${TagKey}`: Filters access by the tags associated with the resource ({@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag documentation}, type: {@link https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String `String`})
   */
  room: (options: Partial<{partition: string, account: string, resourceId: string}> = {}) => `arn:${options.partition || '*'}:ivschat::${options.account || '*'}:room/${options.resourceId || '*'}`,
}

