/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {BoardsFilter, BoardsSort, Page, EventType} from './../../../../.types/globalTypes'

// ====================================================
// GraphQL query operation: Dashboard
// ====================================================

export interface Dashboard_dashboard_pageInfo {
  startCursor: string | null
  endCursor: string | null
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface Dashboard_dashboard_edges_node_events_edges_node_TextEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  text: string
  pinned: boolean
}

export interface Dashboard_dashboard_edges_node_events_edges_node_ListEvent {
  _id: string
  type: EventType
  header: string | null
  deadline: any | null
  list: string[]
  pinned: boolean
}

export type Dashboard_dashboard_edges_node_events_edges_node =
  | Dashboard_dashboard_edges_node_events_edges_node_TextEvent
  | Dashboard_dashboard_edges_node_events_edges_node_ListEvent

export interface Dashboard_dashboard_edges_node_events_edges {
  cursor: string
  node: Dashboard_dashboard_edges_node_events_edges_node
}

export interface Dashboard_dashboard_edges_node_events_pageInfo {
  endCursor: string | null
  hasNextPage: boolean
}

export interface Dashboard_dashboard_edges_node_events {
  edges: Dashboard_dashboard_edges_node_events_edges[]
  pageInfo: Dashboard_dashboard_edges_node_events_pageInfo
}

export interface Dashboard_dashboard_edges_node {
  _id: string
  title: string
  description: string | null
  pinned: boolean
  favorite: boolean
  private: boolean
  events: Dashboard_dashboard_edges_node_events
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
  filter: BoardsFilter
  sort: BoardsSort
  boardPage: Page
  eventPage: Page
}
