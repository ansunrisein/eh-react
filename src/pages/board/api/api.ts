/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import {BoardFragmentDoc} from '../../../entities/board/api/api'
import {EventFragmentDoc} from '../../../entities/event/api/api'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type BoardPageFragment = {
  __typename?: 'Board'
  _id: string
  title: string
  isPrivate: boolean
  permissions: Array<Types.Permission>
  events: {
    __typename?: 'EventConnection'
    pageInfo: {__typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null | undefined}
    edges: Array<{
      __typename?: 'EventEdge'
      node: {__typename?: 'Event'; _id: string; title?: string | null | undefined; content: string}
    }>
  }
  user: {__typename?: 'User'; _id: string}
  sub?: {__typename?: 'Sub'; _id: string} | null | undefined
}

export type BoardPageQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
  eventsPage: Types.Page
}>

export type BoardPageQuery = {
  __typename?: 'Query'
  board: {
    __typename?: 'Board'
    _id: string
    title: string
    isPrivate: boolean
    permissions: Array<Types.Permission>
    events: {
      __typename?: 'EventConnection'
      pageInfo: {
        __typename?: 'PageInfo'
        hasNextPage: boolean
        endCursor?: string | null | undefined
      }
      edges: Array<{
        __typename?: 'EventEdge'
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
}

export const BoardPageFragmentDoc = gql`
  fragment BoardPage on Board {
    ...Board
    events(page: $eventsPage) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...Event
        }
      }
    }
  }
  ${BoardFragmentDoc}
  ${EventFragmentDoc}
`
export const BoardPageDocument = gql`
  query BoardPage($id: ID!, $eventsPage: Page!) {
    board(boardId: $id) {
      ...BoardPage
    }
  }
  ${BoardPageFragmentDoc}
`

/**
 * __useBoardPageQuery__
 *
 * To run a query within a React component, call `useBoardPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *      eventsPage: // value for 'eventsPage'
 *   },
 * });
 */
export function useBoardPageQuery(
  baseOptions: Apollo.QueryHookOptions<BoardPageQuery, BoardPageQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<BoardPageQuery, BoardPageQueryVariables>(BoardPageDocument, options)
}
export function useBoardPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BoardPageQuery, BoardPageQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<BoardPageQuery, BoardPageQueryVariables>(BoardPageDocument, options)
}
export type BoardPageQueryHookResult = ReturnType<typeof useBoardPageQuery>
export type BoardPageLazyQueryHookResult = ReturnType<typeof useBoardPageLazyQuery>
export type BoardPageQueryResult = Apollo.QueryResult<BoardPageQuery, BoardPageQueryVariables>
