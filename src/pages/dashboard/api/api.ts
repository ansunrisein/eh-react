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
  isPrivate: boolean
  permissions: Array<Types.Permission>
  eventsCount: number
  events: {
    __typename?: 'EventConnection'
    pageInfo: {__typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null | undefined}
    edges: Array<{
      __typename?: 'EventEdge'
      cursor: string
      node: {__typename?: 'Event'; _id: string; title?: string | null | undefined; content: string}
    }>
  }
  user: {__typename?: 'User'; _id: string}
  sub?: {__typename?: 'Sub'; _id: string} | null | undefined
}

export type DashboardQueryVariables = Types.Exact<{
  page: Types.Page
  eventsPage: Types.Page
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
        isPrivate: boolean
        permissions: Array<Types.Permission>
        eventsCount: number
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
            }
          }>
        }
        user: {__typename?: 'User'; _id: string}
        sub?: {__typename?: 'Sub'; _id: string} | null | undefined
      }
    }>
  }
}

export const DashboardNodeFragmentDoc = gql`
  fragment DashboardNode on Board {
    ...Board
    events(page: $eventsPage) {
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
  query Dashboard($page: Page!, $eventsPage: Page!) {
    dashboard(page: $page) {
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
