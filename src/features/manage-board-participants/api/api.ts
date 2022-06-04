/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import {BoardParticipantFragmentDoc} from '../../../entities/board-participants/model/api/api'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type BoardParticipantsFragment = {
  __typename?: 'Board'
  participants: {
    __typename?: 'BoardParticipantConnection'
    pageInfo: {__typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null | undefined}
    edges: Array<{
      __typename?: 'BoardParticipantEdge'
      cursor: string
      node: {
        __typename?: 'BoardParticipant'
        _id: string
        user: {
          __typename?: 'User'
          _id: string
          nickname: string
          name?: string | null | undefined
          avatar?: string | null | undefined
        }
      }
    }>
  }
}

export type BoardParticipantsQueryVariables = Types.Exact<{
  boardId: Types.Scalars['ID']
  page: Types.Page
}>

export type BoardParticipantsQuery = {
  __typename?: 'Query'
  board?:
    | {
        __typename?: 'Board'
        _id: string
        participants: {
          __typename?: 'BoardParticipantConnection'
          pageInfo: {
            __typename?: 'PageInfo'
            hasNextPage: boolean
            endCursor?: string | null | undefined
          }
          edges: Array<{
            __typename?: 'BoardParticipantEdge'
            cursor: string
            node: {
              __typename?: 'BoardParticipant'
              _id: string
              user: {
                __typename?: 'User'
                _id: string
                nickname: string
                name?: string | null | undefined
                avatar?: string | null | undefined
              }
            }
          }>
        }
      }
    | null
    | undefined
}

export type RemoveBoardParticipantsMutationVariables = Types.Exact<{
  boardId: Types.Scalars['ID']
  participantIds: Array<Types.Scalars['ID']> | Types.Scalars['ID']
}>

export type RemoveBoardParticipantsMutation = {
  __typename?: 'Mutation'
  removeBoardParticipants: Array<{__typename?: 'BoardParticipant'; _id: string}>
}

export const BoardParticipantsFragmentDoc = gql`
  fragment BoardParticipants on Board {
    participants(page: $page) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...BoardParticipant
        }
      }
    }
  }
  ${BoardParticipantFragmentDoc}
`
export const BoardParticipantsDocument = gql`
  query BoardParticipants($boardId: ID!, $page: Page!) {
    board(boardId: $boardId) {
      _id
      ...BoardParticipants
    }
  }
  ${BoardParticipantsFragmentDoc}
`

/**
 * __useBoardParticipantsQuery__
 *
 * To run a query within a React component, call `useBoardParticipantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardParticipantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardParticipantsQuery({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useBoardParticipantsQuery(
  baseOptions: Apollo.QueryHookOptions<BoardParticipantsQuery, BoardParticipantsQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<BoardParticipantsQuery, BoardParticipantsQueryVariables>(
    BoardParticipantsDocument,
    options,
  )
}
export function useBoardParticipantsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BoardParticipantsQuery,
    BoardParticipantsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<BoardParticipantsQuery, BoardParticipantsQueryVariables>(
    BoardParticipantsDocument,
    options,
  )
}
export type BoardParticipantsQueryHookResult = ReturnType<typeof useBoardParticipantsQuery>
export type BoardParticipantsLazyQueryHookResult = ReturnType<typeof useBoardParticipantsLazyQuery>
export type BoardParticipantsQueryResult = Apollo.QueryResult<
  BoardParticipantsQuery,
  BoardParticipantsQueryVariables
>
export const RemoveBoardParticipantsDocument = gql`
  mutation RemoveBoardParticipants($boardId: ID!, $participantIds: [ID!]!) {
    removeBoardParticipants(board: {_id: $boardId, participantsId: $participantIds}) {
      _id
    }
  }
`
export type RemoveBoardParticipantsMutationFn = Apollo.MutationFunction<
  RemoveBoardParticipantsMutation,
  RemoveBoardParticipantsMutationVariables
>

/**
 * __useRemoveBoardParticipantsMutation__
 *
 * To run a mutation, you first call `useRemoveBoardParticipantsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBoardParticipantsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBoardParticipantsMutation, { data, loading, error }] = useRemoveBoardParticipantsMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      participantIds: // value for 'participantIds'
 *   },
 * });
 */
export function useRemoveBoardParticipantsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveBoardParticipantsMutation,
    RemoveBoardParticipantsMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<
    RemoveBoardParticipantsMutation,
    RemoveBoardParticipantsMutationVariables
  >(RemoveBoardParticipantsDocument, options)
}
export type RemoveBoardParticipantsMutationHookResult = ReturnType<
  typeof useRemoveBoardParticipantsMutation
>
export type RemoveBoardParticipantsMutationResult =
  Apollo.MutationResult<RemoveBoardParticipantsMutation>
export type RemoveBoardParticipantsMutationOptions = Apollo.BaseMutationOptions<
  RemoveBoardParticipantsMutation,
  RemoveBoardParticipantsMutationVariables
>
