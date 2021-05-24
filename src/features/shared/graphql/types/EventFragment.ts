/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {EventType} from './../../../../.types/globalTypes'

// ====================================================
// GraphQL fragment: EventFragment
// ====================================================

export interface EventFragment_TextEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  pinned: boolean
  text: string
}

export interface EventFragment_ListEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  pinned: boolean
  list: string[]
}

export type EventFragment = EventFragment_TextEvent | EventFragment_ListEvent
