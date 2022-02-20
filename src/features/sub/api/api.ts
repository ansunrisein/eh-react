/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type CreateSubMutationVariables = Types.Exact<{
  boardId: Types.Scalars['ID']
}>

export type CreateSubMutation = {
  __typename?: 'Mutation'
  createSub: {
    __typename?: 'Board'
    _id: string
    sub?: {__typename?: 'Sub'; _id: string} | null | undefined
  }
}

export type RemoveSubMutationVariables = Types.Exact<{
  boardId: Types.Scalars['ID']
}>

export type RemoveSubMutation = {
  __typename?: 'Mutation'
  removeSub: {
    __typename?: 'Board'
    _id: string
    sub?: {__typename?: 'Sub'; _id: string} | null | undefined
  }
}

export const CreateSubDocument = gql`
  mutation CreateSub($boardId: ID!) {
    createSub(sub: {boardId: $boardId}) {
      _id
      sub {
        _id
      }
    }
  }
`
export type CreateSubMutationFn = Apollo.MutationFunction<
  CreateSubMutation,
  CreateSubMutationVariables
>

/**
 * __useCreateSubMutation__
 *
 * To run a mutation, you first call `useCreateSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubMutation, { data, loading, error }] = useCreateSubMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useCreateSubMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateSubMutation, CreateSubMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<CreateSubMutation, CreateSubMutationVariables>(
    CreateSubDocument,
    options,
  )
}
export type CreateSubMutationHookResult = ReturnType<typeof useCreateSubMutation>
export type CreateSubMutationResult = Apollo.MutationResult<CreateSubMutation>
export type CreateSubMutationOptions = Apollo.BaseMutationOptions<
  CreateSubMutation,
  CreateSubMutationVariables
>
export const RemoveSubDocument = gql`
  mutation RemoveSub($boardId: ID!) {
    removeSub(board: {_id: $boardId}) {
      _id
      sub {
        _id
      }
    }
  }
`
export type RemoveSubMutationFn = Apollo.MutationFunction<
  RemoveSubMutation,
  RemoveSubMutationVariables
>

/**
 * __useRemoveSubMutation__
 *
 * To run a mutation, you first call `useRemoveSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSubMutation, { data, loading, error }] = useRemoveSubMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useRemoveSubMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveSubMutation, RemoveSubMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<RemoveSubMutation, RemoveSubMutationVariables>(
    RemoveSubDocument,
    options,
  )
}
export type RemoveSubMutationHookResult = ReturnType<typeof useRemoveSubMutation>
export type RemoveSubMutationResult = Apollo.MutationResult<RemoveSubMutation>
export type RemoveSubMutationOptions = Apollo.BaseMutationOptions<
  RemoveSubMutation,
  RemoveSubMutationVariables
>
