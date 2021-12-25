/* eslint-disable */
import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import {BoardFragmentDoc} from '../../../shared/api/fragments'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type BoardQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type BoardQuery = {
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

export type CreateBoardMutationVariables = Types.Exact<{
  title: Types.Scalars['String']
  isPrivate: Types.Scalars['Boolean']
}>

export type CreateBoardMutation = {
  __typename?: 'Mutation'
  createBoard: {
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

export type EditBoardMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']
  title: Types.Scalars['String']
  isPrivate: Types.Scalars['Boolean']
}>

export type EditBoardMutation = {
  __typename?: 'Mutation'
  updateBoard: {
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

export type RemoveBoardMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type RemoveBoardMutation = {
  __typename?: 'Mutation'
  removeBoard: {
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

export const BoardDocument = gql`
  query Board($id: ID!) {
    board(boardId: $id) {
      ...Board
    }
  }
  ${BoardFragmentDoc}
`

/**
 * __useBoardQuery__
 *
 * To run a query within a React component, call `useBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBoardQuery(
  baseOptions: Apollo.QueryHookOptions<BoardQuery, BoardQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<BoardQuery, BoardQueryVariables>(BoardDocument, options)
}
export function useBoardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BoardQuery, BoardQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<BoardQuery, BoardQueryVariables>(BoardDocument, options)
}
export type BoardQueryHookResult = ReturnType<typeof useBoardQuery>
export type BoardLazyQueryHookResult = ReturnType<typeof useBoardLazyQuery>
export type BoardQueryResult = Apollo.QueryResult<BoardQuery, BoardQueryVariables>
export const CreateBoardDocument = gql`
  mutation CreateBoard($title: String!, $isPrivate: Boolean!) {
    createBoard(board: {title: $title, isPrivate: $isPrivate}) {
      ...Board
    }
  }
  ${BoardFragmentDoc}
`
export type CreateBoardMutationFn = Apollo.MutationFunction<
  CreateBoardMutation,
  CreateBoardMutationVariables
>

/**
 * __useCreateBoardMutation__
 *
 * To run a mutation, you first call `useCreateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardMutation, { data, loading, error }] = useCreateBoardMutation({
 *   variables: {
 *      title: // value for 'title'
 *      isPrivate: // value for 'isPrivate'
 *   },
 * });
 */
export function useCreateBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateBoardMutation, CreateBoardMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<CreateBoardMutation, CreateBoardMutationVariables>(
    CreateBoardDocument,
    options,
  )
}
export type CreateBoardMutationHookResult = ReturnType<typeof useCreateBoardMutation>
export type CreateBoardMutationResult = Apollo.MutationResult<CreateBoardMutation>
export type CreateBoardMutationOptions = Apollo.BaseMutationOptions<
  CreateBoardMutation,
  CreateBoardMutationVariables
>
export const EditBoardDocument = gql`
  mutation EditBoard($id: ID!, $title: String!, $isPrivate: Boolean!) {
    updateBoard(board: {_id: $id, title: $title, isPrivate: $isPrivate}) {
      ...Board
    }
  }
  ${BoardFragmentDoc}
`
export type EditBoardMutationFn = Apollo.MutationFunction<
  EditBoardMutation,
  EditBoardMutationVariables
>

/**
 * __useEditBoardMutation__
 *
 * To run a mutation, you first call `useEditBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBoardMutation, { data, loading, error }] = useEditBoardMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      isPrivate: // value for 'isPrivate'
 *   },
 * });
 */
export function useEditBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<EditBoardMutation, EditBoardMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<EditBoardMutation, EditBoardMutationVariables>(
    EditBoardDocument,
    options,
  )
}
export type EditBoardMutationHookResult = ReturnType<typeof useEditBoardMutation>
export type EditBoardMutationResult = Apollo.MutationResult<EditBoardMutation>
export type EditBoardMutationOptions = Apollo.BaseMutationOptions<
  EditBoardMutation,
  EditBoardMutationVariables
>
export const RemoveBoardDocument = gql`
  mutation RemoveBoard($id: ID!) {
    removeBoard(boardId: $id) {
      ...Board
    }
  }
  ${BoardFragmentDoc}
`
export type RemoveBoardMutationFn = Apollo.MutationFunction<
  RemoveBoardMutation,
  RemoveBoardMutationVariables
>

/**
 * __useRemoveBoardMutation__
 *
 * To run a mutation, you first call `useRemoveBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBoardMutation, { data, loading, error }] = useRemoveBoardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveBoardMutation, RemoveBoardMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<RemoveBoardMutation, RemoveBoardMutationVariables>(
    RemoveBoardDocument,
    options,
  )
}
export type RemoveBoardMutationHookResult = ReturnType<typeof useRemoveBoardMutation>
export type RemoveBoardMutationResult = Apollo.MutationResult<RemoveBoardMutation>
export type RemoveBoardMutationOptions = Apollo.BaseMutationOptions<
  RemoveBoardMutation,
  RemoveBoardMutationVariables
>
