/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type MarkBoardAsPinMutationVariables = Types.Exact<{
  board: Types.BoardId
}>

export type MarkBoardAsPinMutation = {
  __typename?: 'Mutation'
  markBoardAsPin: {__typename?: 'Board'; _id: string; isPin: boolean}
}

export type UnmarkBoardAsPinMutationVariables = Types.Exact<{
  board: Types.BoardId
}>

export type UnmarkBoardAsPinMutation = {
  __typename?: 'Mutation'
  unmarkBoardAsPin: {__typename?: 'Board'; _id: string; isPin: boolean}
}

export const MarkBoardAsPinDocument = gql`
  mutation MarkBoardAsPin($board: BoardId!) {
    markBoardAsPin(board: $board) {
      _id
      isPin
    }
  }
`
export type MarkBoardAsPinMutationFn = Apollo.MutationFunction<
  MarkBoardAsPinMutation,
  MarkBoardAsPinMutationVariables
>

/**
 * __useMarkBoardAsPinMutation__
 *
 * To run a mutation, you first call `useMarkBoardAsPinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkBoardAsPinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markBoardAsPinMutation, { data, loading, error }] = useMarkBoardAsPinMutation({
 *   variables: {
 *      board: // value for 'board'
 *   },
 * });
 */
export function useMarkBoardAsPinMutation(
  baseOptions?: Apollo.MutationHookOptions<MarkBoardAsPinMutation, MarkBoardAsPinMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<MarkBoardAsPinMutation, MarkBoardAsPinMutationVariables>(
    MarkBoardAsPinDocument,
    options,
  )
}
export type MarkBoardAsPinMutationHookResult = ReturnType<typeof useMarkBoardAsPinMutation>
export type MarkBoardAsPinMutationResult = Apollo.MutationResult<MarkBoardAsPinMutation>
export type MarkBoardAsPinMutationOptions = Apollo.BaseMutationOptions<
  MarkBoardAsPinMutation,
  MarkBoardAsPinMutationVariables
>
export const UnmarkBoardAsPinDocument = gql`
  mutation UnmarkBoardAsPin($board: BoardId!) {
    unmarkBoardAsPin(board: $board) {
      _id
      isPin
    }
  }
`
export type UnmarkBoardAsPinMutationFn = Apollo.MutationFunction<
  UnmarkBoardAsPinMutation,
  UnmarkBoardAsPinMutationVariables
>

/**
 * __useUnmarkBoardAsPinMutation__
 *
 * To run a mutation, you first call `useUnmarkBoardAsPinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnmarkBoardAsPinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unmarkBoardAsPinMutation, { data, loading, error }] = useUnmarkBoardAsPinMutation({
 *   variables: {
 *      board: // value for 'board'
 *   },
 * });
 */
export function useUnmarkBoardAsPinMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnmarkBoardAsPinMutation,
    UnmarkBoardAsPinMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<UnmarkBoardAsPinMutation, UnmarkBoardAsPinMutationVariables>(
    UnmarkBoardAsPinDocument,
    options,
  )
}
export type UnmarkBoardAsPinMutationHookResult = ReturnType<typeof useUnmarkBoardAsPinMutation>
export type UnmarkBoardAsPinMutationResult = Apollo.MutationResult<UnmarkBoardAsPinMutation>
export type UnmarkBoardAsPinMutationOptions = Apollo.BaseMutationOptions<
  UnmarkBoardAsPinMutation,
  UnmarkBoardAsPinMutationVariables
>
