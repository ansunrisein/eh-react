/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EventType } from "./../../../../.types/globalTypes";

// ====================================================
// GraphQL fragment: EventFragment
// ====================================================

export interface EventFragment_TextEvent {
  type: EventType;
  header: string | null;
  deadline: any | null;
  text: string;
}

export interface EventFragment_ListEvent {
  type: EventType;
  header: string | null;
  deadline: any | null;
  list: string[];
}

export type EventFragment = EventFragment_TextEvent | EventFragment_ListEvent;
