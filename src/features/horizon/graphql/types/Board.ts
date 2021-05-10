/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {Page, EventType} from './../../../../.types/globalTypes'

// ====================================================
// GraphQL query operation: Board
// ====================================================

export interface Board_board_events_edges_node_TextEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  text: string
  pinned: boolean
}

export interface Board_board_events_edges_node_ListEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  list: string[]
  pinned: boolean
}

export type Board_board_events_edges_node =
  | Board_board_events_edges_node_TextEvent
  | Board_board_events_edges_node_ListEvent

export interface Board_board_events_edges {
  cursor: string
  node: Board_board_events_edges_node
}

export interface Board_board_events_pageInfo {
  endCursor: string | null
  hasNextPage: boolean
}

export interface Board_board_events {
  edges: Board_board_events_edges[]
  pageInfo: Board_board_events_pageInfo
}

export interface Board_board {
  _id: string
  title: string
  description: string | null
  pinned: boolean
  favorite: boolean
  private: boolean
  events: Board_board_events
}

export interface Board {
  board: Board_board
}

export interface BoardVariables {
  _id: string
  page: Page
}
