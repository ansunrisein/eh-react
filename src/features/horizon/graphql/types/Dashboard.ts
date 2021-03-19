/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {DashboardFilter, DashboardSort, Page, EventType} from './../../../../.types/globalTypes'

// ====================================================
// GraphQL query operation: Dashboard
// ====================================================

export interface Dashboard_dashboard_pageInfo {
  startCursor: string | null
  endCursor: string | null
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface Dashboard_dashboard_edges_node_events_TextEvent {
  id: string
  type: EventType
  header: string | null
  deadline: any | null
  text: string
  pinned: boolean
}

export interface Dashboard_dashboard_edges_node_events_ListEvent {
  id: string
  type: EventType
  header: string | null
  deadline: any | null
  list: string[]
  pinned: boolean
}

export type Dashboard_dashboard_edges_node_events =
  | Dashboard_dashboard_edges_node_events_TextEvent
  | Dashboard_dashboard_edges_node_events_ListEvent

export interface Dashboard_dashboard_edges_node {
  id: string
  name: string
  description: string | null
  events: Dashboard_dashboard_edges_node_events[]
}

export interface Dashboard_dashboard_edges {
  node: Dashboard_dashboard_edges_node
  cursor: string
}

export interface Dashboard_dashboard {
  pageInfo: Dashboard_dashboard_pageInfo
  edges: Dashboard_dashboard_edges[]
}

export interface Dashboard {
  dashboard: Dashboard_dashboard
}

export interface DashboardVariables {
  filter?: DashboardFilter | null
  sort?: DashboardSort | null
  page?: Page | null
}
