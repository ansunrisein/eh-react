/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import {BoardFragmentDoc} from '../../../entities/board/api/api'
import {EventFragmentDoc} from '../../../entities/event/api/api'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type WorldNodeFragment = {
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

export type PopularQueryVariables = Types.Exact<{
  page: Types.Page
  eventsPage: Types.Page
  filter?: Types.Maybe<Types.BoardsFilter>
}>

export type PopularQuery = {
  __typename?: 'Query'
  popularBoards: {
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

export const WorldNodeFragmentDoc = gql`
  fragment WorldNode on Board {
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
export const PopularDocument = gql`
  query Popular($page: Page!, $eventsPage: Page!, $filter: BoardsFilter) {
    popularBoards(page: $page, filter: $filter) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...WorldNode
        }
      }
    }
  }
  ${WorldNodeFragmentDoc}
`

/**
 * __usePopularQuery__
 *
 * To run a query within a React component, call `usePopularQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularQuery({
 *   variables: {
 *      page: // value for 'page'
 *      eventsPage: // value for 'eventsPage'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function usePopularQuery(
  baseOptions: Apollo.QueryHookOptions<PopularQuery, PopularQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<PopularQuery, PopularQueryVariables>(PopularDocument, options)
}
export function usePopularLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PopularQuery, PopularQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<PopularQuery, PopularQueryVariables>(PopularDocument, options)
}
export type PopularQueryHookResult = ReturnType<typeof usePopularQuery>
export type PopularLazyQueryHookResult = ReturnType<typeof usePopularLazyQuery>
export type PopularQueryResult = Apollo.QueryResult<PopularQuery, PopularQueryVariables>
