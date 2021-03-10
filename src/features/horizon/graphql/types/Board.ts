/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {EventType} from './../../../../.types/globalTypes'

// ====================================================
// GraphQL query operation: Board
// ====================================================

export interface Board_board_events_TextEvent {
  type: EventType
  header: string | null
  deadline: any | null
  text: string
  pinned: boolean
}

export interface Board_board_events_ListEvent {
  type: EventType
  header: string | null
  deadline: any | null
  list: string[]
  pinned: boolean
}

export type Board_board_events = Board_board_events_TextEvent | Board_board_events_ListEvent

export interface Board_board {
  id: string
  name: string
  description: string | null
  events: Board_board_events[]
}

export interface Board {
  board: Board_board
}

export interface BoardVariables {
  id: string
}
