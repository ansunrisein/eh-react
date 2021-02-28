/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {EventType} from './../../../../.types/globalTypes'

// ====================================================
// GraphQL fragment: BoardFragment
// ====================================================

export interface BoardFragment_events_TextEvent {
  type: EventType
  header: string | null
  deadline: any | null
  text: string
  pinned: boolean
}

export interface BoardFragment_events_ListEvent {
  type: EventType
  header: string | null
  deadline: any | null
  list: string[]
  pinned: boolean
}

export type BoardFragment_events = BoardFragment_events_TextEvent | BoardFragment_events_ListEvent

export interface BoardFragment {
  id: string
  name: string
  description: string | null
  events: BoardFragment_events[]
}
