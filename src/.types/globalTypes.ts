/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum EventType {
  LIST = "LIST",
  PICTURE = "PICTURE",
  TEXT = "TEXT",
}

export interface DashboardFilter {
  ownership?: number | null;
  favorite?: number | null;
  pin?: number | null;
}

export interface DashboardSort {
  nearestEvent?: string | null;
  favorite?: string | null;
  subsCount?: string | null;
  pin?: string | null;
}

export interface Page {
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
