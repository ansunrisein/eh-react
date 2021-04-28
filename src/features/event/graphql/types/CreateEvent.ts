/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {EventType} from './../../../../.types/globalTypes'

// ====================================================
// GraphQL mutation operation: CreateEvent
// ====================================================

export interface CreateEvent_createEvent_TextEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  text: string
}

export interface CreateEvent_createEvent_ListEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  list: string[]
}

export type CreateEvent_createEvent =
  | CreateEvent_createEvent_TextEvent
  | CreateEvent_createEvent_ListEvent

export interface CreateEvent {
  createEvent: CreateEvent_createEvent | null
}

export interface CreateEventVariables {
  boardId: string
  type: EventType
  header?: string | null
  deadline?: any | null
  pinned: boolean
  text?: string | null
  list?: string[] | null
}
