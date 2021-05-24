/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {EventType} from './../../../../.types/globalTypes'

// ====================================================
// GraphQL query operation: Event
// ====================================================

export interface Event_event_TextEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  pinned: boolean
  text: string
}

export interface Event_event_ListEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  pinned: boolean
  list: string[]
}

export type Event_event = Event_event_TextEvent | Event_event_ListEvent

export interface Event {
  event: Event_event | null
}

export interface EventVariables {
  id: string
}
