/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum EventType {
  LIST = 'LIST',
  PICTURE = 'PICTURE',
  TEXT = 'TEXT',
}

export interface BoardsFilter {
  favorite?: number | null
  ownership?: number | null
  pin?: number | null
}

export interface BoardsSort {
  favorite?: string | null
  nearestEvent?: string | null
  pin?: string | null
  subsCount?: string | null
}

export interface Page {
  after?: string | null
  first?: number | null
}

//==============================================================
// END Enums and Input Objects
//==============================================================
