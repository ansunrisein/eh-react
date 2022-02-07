/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'

const defaultOptions = {}
export type MarkBoardAsFavoriteMutationVariables = Types.Exact<{
  board: Types.BoardId
}>

export type MarkBoardAsFavoriteMutation = {
  __typename?: 'Mutation'
  markBoardAsFavorite: {__typename?: 'Board'; _id: string; isFavorite: boolean}
}

export type UnmarkBoardAsFavoriteMutationVariables = Types.Exact<{
  board: Types.BoardId
}>

export type UnmarkBoardAsFavoriteMutation = {
  __typename?: 'Mutation'
  unmarkBoardAsFavorite: {__typename?: 'Board'; _id: string; isFavorite: boolean}
}

export const MarkBoardAsFavoriteDocument = gql`
  mutation MarkBoardAsFavorite($board: BoardId!) {
    markBoardAsFavorite(board: $board) {
      _id
      isFavorite
    }
  }
`
export type MarkBoardAsFavoriteMutationFn = Apollo.MutationFunction<
  MarkBoardAsFavoriteMutation,
  MarkBoardAsFavoriteMutationVariables
>

/**
 * __useMarkBoardAsFavoriteMutation__
 *
 * To run a mutation, you first call `useMarkBoardAsFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkBoardAsFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markBoardAsFavoriteMutation, { data, loading, error }] = useMarkBoardAsFavoriteMutation({
 *   variables: {
 *      board: // value for 'board'
 *   },
 * });
 */
export function useMarkBoardAsFavoriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MarkBoardAsFavoriteMutation,
    MarkBoardAsFavoriteMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<MarkBoardAsFavoriteMutation, MarkBoardAsFavoriteMutationVariables>(
    MarkBoardAsFavoriteDocument,
    options,
  )
}

export type MarkBoardAsFavoriteMutationHookResult = ReturnType<
  typeof useMarkBoardAsFavoriteMutation
>
export type MarkBoardAsFavoriteMutationResult = Apollo.MutationResult<MarkBoardAsFavoriteMutation>
export type MarkBoardAsFavoriteMutationOptions = Apollo.BaseMutationOptions<
  MarkBoardAsFavoriteMutation,
  MarkBoardAsFavoriteMutationVariables
>
export const UnmarkBoardAsFavoriteDocument = gql`
  mutation UnmarkBoardAsFavorite($board: BoardId!) {
    unmarkBoardAsFavorite(board: $board) {
      _id
      isFavorite
    }
  }
`
export type UnmarkBoardAsFavoriteMutationFn = Apollo.MutationFunction<
  UnmarkBoardAsFavoriteMutation,
  UnmarkBoardAsFavoriteMutationVariables
>

/**
 * __useUnmarkBoardAsFavoriteMutation__
 *
 * To run a mutation, you first call `useUnmarkBoardAsFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnmarkBoardAsFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unmarkBoardAsFavoriteMutation, { data, loading, error }] = useUnmarkBoardAsFavoriteMutation({
 *   variables: {
 *      board: // value for 'board'
 *   },
 * });
 */
export function useUnmarkBoardAsFavoriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UnmarkBoardAsFavoriteMutation,
    UnmarkBoardAsFavoriteMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<UnmarkBoardAsFavoriteMutation, UnmarkBoardAsFavoriteMutationVariables>(
    UnmarkBoardAsFavoriteDocument,
    options,
  )
}

export type UnmarkBoardAsFavoriteMutationHookResult = ReturnType<
  typeof useUnmarkBoardAsFavoriteMutation
>
export type UnmarkBoardAsFavoriteMutationResult =
  Apollo.MutationResult<UnmarkBoardAsFavoriteMutation>
export type UnmarkBoardAsFavoriteMutationOptions = Apollo.BaseMutationOptions<
  UnmarkBoardAsFavoriteMutation,
  UnmarkBoardAsFavoriteMutationVariables
>
