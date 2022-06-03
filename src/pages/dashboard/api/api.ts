/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import {BoardFragmentDoc} from '../../../entities/board/api/api'
import {EventFragmentDoc} from '../../../entities/event/api/api'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type DashboardNodeFragment = {
  __typename?: 'Board'
  _id: string
  title: string
  description?: string | null | undefined
  isPrivate: boolean
  permissions: Array<Types.Permission>
  eventsCount: number
  isFavorite: boolean
  isPin: boolean
  views: number
  timeExpiredEventsCount: number
  events: {
    __typename?: 'EventConnection'
    pageInfo: {__typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null | undefined}
    edges: Array<{
      __typename?: 'EventEdge'
      cursor: string
      node: {
        __typename?: 'Event'
        _id: string
        title?: string | null | undefined
        content: string
        deadline?: any | null | undefined
      }
    }>
  }
  user: {__typename?: 'User'; _id: string}
  sub?: {__typename?: 'Sub'; _id: string} | null | undefined
  tags?: Array<{__typename?: 'BoardTag'; _id: string; name: string}> | null | undefined
}

export type DashboardQueryVariables = Types.Exact<{
  page: Types.Page
  eventsPage: Types.Page
  sort?: Types.Maybe<Types.BoardsSort>
  filter?: Types.Maybe<Types.BoardsFilter>
  search?: Types.Maybe<Types.BoardsSearch>
}>

export type DashboardQuery = {
  __typename?: 'Query'
  dashboard: {
    __typename?: 'BoardConnection'
    pageInfo: {__typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null | undefined}
    edges: Array<{
      __typename?: 'BoardEdge'
      node: {
        __typename?: 'Board'
        _id: string
        title: string
        description?: string | null | undefined
        isPrivate: boolean
        permissions: Array<Types.Permission>
        eventsCount: number
        isFavorite: boolean
        isPin: boolean
        views: number
        timeExpiredEventsCount: number
        events: {
          __typename?: 'EventConnection'
          pageInfo: {
            __typename?: 'PageInfo'
            hasNextPage: boolean
            endCursor?: string | null | undefined
          }
          edges: Array<{
            __typename?: 'EventEdge'
            cursor: string
            node: {
              __typename?: 'Event'
              _id: string
              title?: string | null | undefined
              content: string
              deadline?: any | null | undefined
            }
          }>
        }
        user: {__typename?: 'User'; _id: string}
        sub?: {__typename?: 'Sub'; _id: string} | null | undefined
        tags?: Array<{__typename?: 'BoardTag'; _id: string; name: string}> | null | undefined
      }
    }>
  }
}

export const DashboardNodeFragmentDoc = gql`
  fragment DashboardNode on Board {
    ...Board
    events(page: $eventsPage, sort: {nearestEvent: "asc"}, filter: {expired: 1}) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...Event
        }
      }
    }
  }
  ${BoardFragmentDoc}
  ${EventFragmentDoc}
`
export const DashboardDocument = gql`
  query Dashboard(
    $page: Page!
    $eventsPage: Page!
    $sort: BoardsSort
    $filter: BoardsFilter
    $search: BoardsSearch
  ) {
    dashboard(page: $page, sort: $sort, filter: $filter, search: $search) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...DashboardNode
        }
      }
    }
  }
  ${DashboardNodeFragmentDoc}
`

/**
 * __useDashboardQuery__
 *
 * To run a query within a React component, call `useDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardQuery({
 *   variables: {
 *      page: // value for 'page'
 *      eventsPage: // value for 'eventsPage'
 *      sort: // value for 'sort'
 *      filter: // value for 'filter'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useDashboardQuery(
  baseOptions: Apollo.QueryHookOptions<DashboardQuery, DashboardQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<DashboardQuery, DashboardQueryVariables>(DashboardDocument, options)
}
export function useDashboardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<DashboardQuery, DashboardQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<DashboardQuery, DashboardQueryVariables>(DashboardDocument, options)
}
export type DashboardQueryHookResult = ReturnType<typeof useDashboardQuery>
export type DashboardLazyQueryHookResult = ReturnType<typeof useDashboardLazyQuery>
export type DashboardQueryResult = Apollo.QueryResult<DashboardQuery, DashboardQueryVariables>
