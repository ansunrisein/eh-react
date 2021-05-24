/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {EventType} from './../../../../.types/globalTypes'

// ====================================================
// GraphQL mutation operation: UpdateEvent
// ====================================================

export interface UpdateEvent_updateEvent_TextEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  pinned: boolean
  text: string
}

export interface UpdateEvent_updateEvent_ListEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  pinned: boolean
  list: string[]
}

export type UpdateEvent_updateEvent =
  | UpdateEvent_updateEvent_TextEvent
  | UpdateEvent_updateEvent_ListEvent

export interface UpdateEvent {
  updateEvent: UpdateEvent_updateEvent | null
}

export interface UpdateEventVariables {
  id: string
  type: EventType
  list?: string[] | null
  text?: string | null
  deadline?: any | null
  header?: string | null
}
