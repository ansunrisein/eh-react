/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EventType } from "./../../../../.types/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateBoard
// ====================================================

export interface CreateBoard_createBoard_events_TextEvent {
  type: EventType;
  header: string | null;
  deadline: any | null;
  text: string;
  pinned: boolean;
}

export interface CreateBoard_createBoard_events_ListEvent {
  type: EventType;
  header: string | null;
  deadline: any | null;
  list: string[];
  pinned: boolean;
}

export type CreateBoard_createBoard_events = CreateBoard_createBoard_events_TextEvent | CreateBoard_createBoard_events_ListEvent;

export interface CreateBoard_createBoard {
  id: string;
  name: string;
  description: string | null;
  events: CreateBoard_createBoard_events[];
}

export interface CreateBoard {
  createBoard: CreateBoard_createBoard;
}

export interface CreateBoardVariables {
  title: string;
  description?: string | null;
}
