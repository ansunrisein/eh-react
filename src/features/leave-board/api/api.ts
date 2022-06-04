/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type LeaveBoardMutationVariables = Types.Exact<{
  boardId: Types.Scalars['ID']
}>

export type LeaveBoardMutation = {
  __typename?: 'Mutation'
  leaveBoard: {
    __typename?: 'BoardParticipant'
    _id: string
    board: {__typename?: 'Board'; _id: string}
  }
}

export const LeaveBoardDocument = gql`
  mutation LeaveBoard($boardId: ID!) {
    leaveBoard(boardId: $boardId) {
      _id
      board {
        _id
      }
    }
  }
`
export type LeaveBoardMutationFn = Apollo.MutationFunction<
  LeaveBoardMutation,
  LeaveBoardMutationVariables
>

/**
 * __useLeaveBoardMutation__
 *
 * To run a mutation, you first call `useLeaveBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveBoardMutation, { data, loading, error }] = useLeaveBoardMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useLeaveBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<LeaveBoardMutation, LeaveBoardMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<LeaveBoardMutation, LeaveBoardMutationVariables>(
    LeaveBoardDocument,
    options,
  )
}
export type LeaveBoardMutationHookResult = ReturnType<typeof useLeaveBoardMutation>
export type LeaveBoardMutationResult = Apollo.MutationResult<LeaveBoardMutation>
export type LeaveBoardMutationOptions = Apollo.BaseMutationOptions<
  LeaveBoardMutation,
  LeaveBoardMutationVariables
>
