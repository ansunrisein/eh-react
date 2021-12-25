/* eslint-disable */
import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import {BoardFragmentDoc} from '../../../entities/board/api/api'
import {EventFragmentDoc} from '../../../entities/event/api/api'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type BoardWithEventsFragment = {
  __typename?: 'Board'
  _id: string
  title: string
  isPrivate: boolean
  permissions: Array<Types.Permission>
  events: Array<{
    __typename?: 'Event'
    _id: string
    title?: string | null | undefined
    content: string
  }>
  user: {__typename?: 'User'; _id: string}
  sub?: {__typename?: 'Sub'; _id: string} | null | undefined
}

export type FullBoardQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type FullBoardQuery = {
  __typename?: 'Query'
  board: {
    __typename?: 'Board'
    _id: string
    title: string
    isPrivate: boolean
    permissions: Array<Types.Permission>
    events: Array<{
      __typename?: 'Event'
      _id: string
      title?: string | null | undefined
      content: string
    }>
    user: {__typename?: 'User'; _id: string}
    sub?: {__typename?: 'Sub'; _id: string} | null | undefined
  }
}

export const BoardWithEventsFragmentDoc = gql`
  fragment BoardWithEvents on Board {
    ...Board
    events {
      ...Event
    }
  }
  ${BoardFragmentDoc}
  ${EventFragmentDoc}
`
export const FullBoardDocument = gql`
  query FullBoard($id: ID!) {
    board(boardId: $id) {
      ...BoardWithEvents
    }
  }
  ${BoardWithEventsFragmentDoc}
`

/**
 * __useFullBoardQuery__
 *
 * To run a query within a React component, call `useFullBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useFullBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFullBoardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFullBoardQuery(
  baseOptions: Apollo.QueryHookOptions<FullBoardQuery, FullBoardQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<FullBoardQuery, FullBoardQueryVariables>(FullBoardDocument, options)
}
export function useFullBoardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FullBoardQuery, FullBoardQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<FullBoardQuery, FullBoardQueryVariables>(FullBoardDocument, options)
}
export type FullBoardQueryHookResult = ReturnType<typeof useFullBoardQuery>
export type FullBoardLazyQueryHookResult = ReturnType<typeof useFullBoardLazyQuery>
export type FullBoardQueryResult = Apollo.QueryResult<FullBoardQuery, FullBoardQueryVariables>
