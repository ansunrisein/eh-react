/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveEvent
// ====================================================

export interface RemoveEvent_removeEvent_board {
  _id: string
}

export interface RemoveEvent_removeEvent {
  _id: string
  board: RemoveEvent_removeEvent_board
}

export interface RemoveEvent {
  removeEvent: RemoveEvent_removeEvent | null
}

export interface RemoveEventVariables {
  id: string
}
