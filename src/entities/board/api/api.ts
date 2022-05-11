/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type BoardFragment = {
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
  user: {__typename?: 'User'; _id: string}
  sub?: {__typename?: 'Sub'; _id: string} | null | undefined
  tags?: Array<{__typename?: 'BoardTag'; _id: string; name: string}> | null | undefined
}

export type BoardQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type BoardQuery = {
  __typename?: 'Query'
  board?:
    | {
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
        user: {__typename?: 'User'; _id: string}
        sub?: {__typename?: 'Sub'; _id: string} | null | undefined
        tags?: Array<{__typename?: 'BoardTag'; _id: string; name: string}> | null | undefined
      }
    | null
    | undefined
}

export type CreateBoardMutationVariables = Types.Exact<{
  title: Types.Scalars['String']
  description?: Types.Maybe<Types.Scalars['String']>
  isPrivate: Types.Scalars['Boolean']
  tagsIds?: Types.Maybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>
}>

export type CreateBoardMutation = {
  __typename?: 'Mutation'
  createBoard: {
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
    user: {__typename?: 'User'; _id: string}
    sub?: {__typename?: 'Sub'; _id: string} | null | undefined
    tags?: Array<{__typename?: 'BoardTag'; _id: string; name: string}> | null | undefined
  }
}

export type EditBoardDescriptionMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']
  title: Types.Scalars['String']
  description?: Types.Maybe<Types.Scalars['String']>
}>

export type EditBoardDescriptionMutation = {
  __typename?: 'Mutation'
  updateBoardDescription: {
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
    user: {__typename?: 'User'; _id: string}
    sub?: {__typename?: 'Sub'; _id: string} | null | undefined
    tags?: Array<{__typename?: 'BoardTag'; _id: string; name: string}> | null | undefined
  }
}

export type EditBoardVisibilityMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']
  isPrivate: Types.Scalars['Boolean']
}>

export type EditBoardVisibilityMutation = {
  __typename?: 'Mutation'
  updateBoardVisibility: {
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
    user: {__typename?: 'User'; _id: string}
    sub?: {__typename?: 'Sub'; _id: string} | null | undefined
    tags?: Array<{__typename?: 'BoardTag'; _id: string; name: string}> | null | undefined
  }
}

export type EditBoardTagsMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']
  tagsIds?: Types.Maybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>
}>

export type EditBoardTagsMutation = {
  __typename?: 'Mutation'
  updateBoardTags: {
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
    user: {__typename?: 'User'; _id: string}
    sub?: {__typename?: 'Sub'; _id: string} | null | undefined
    tags?: Array<{__typename?: 'BoardTag'; _id: string; name: string}> | null | undefined
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
    description?: string | null | undefined
    isPrivate: boolean
    permissions: Array<Types.Permission>
    eventsCount: number
    isFavorite: boolean
    isPin: boolean
    views: number
    user: {__typename?: 'User'; _id: string}
    sub?: {__typename?: 'Sub'; _id: string} | null | undefined
    tags?: Array<{__typename?: 'BoardTag'; _id: string; name: string}> | null | undefined
  }
}

export const BoardFragmentDoc = gql`
  fragment Board on Board {
    _id
    title
    description
    isPrivate
    user {
      _id
    }
    sub {
      _id
    }
    permissions
    eventsCount
    isFavorite
    isPin
    tags {
      _id
      name
    }
    views
  }
`
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
  mutation CreateBoard(
    $title: String!
    $description: String
    $isPrivate: Boolean!
    $tagsIds: [ID!]
  ) {
    createBoard(
      board: {title: $title, description: $description, isPrivate: $isPrivate, tagsIds: $tagsIds}
    ) {
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
 *      description: // value for 'description'
 *      isPrivate: // value for 'isPrivate'
 *      tagsIds: // value for 'tagsIds'
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
export const EditBoardDescriptionDocument = gql`
  mutation EditBoardDescription($id: ID!, $title: String!, $description: String) {
    updateBoardDescription(board: {_id: $id, title: $title, description: $description}) {
      ...Board
    }
  }
  ${BoardFragmentDoc}
`
export type EditBoardDescriptionMutationFn = Apollo.MutationFunction<
  EditBoardDescriptionMutation,
  EditBoardDescriptionMutationVariables
>

/**
 * __useEditBoardDescriptionMutation__
 *
 * To run a mutation, you first call `useEditBoardDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBoardDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBoardDescriptionMutation, { data, loading, error }] = useEditBoardDescriptionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useEditBoardDescriptionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditBoardDescriptionMutation,
    EditBoardDescriptionMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<EditBoardDescriptionMutation, EditBoardDescriptionMutationVariables>(
    EditBoardDescriptionDocument,
    options,
  )
}
export type EditBoardDescriptionMutationHookResult = ReturnType<
  typeof useEditBoardDescriptionMutation
>
export type EditBoardDescriptionMutationResult = Apollo.MutationResult<EditBoardDescriptionMutation>
export type EditBoardDescriptionMutationOptions = Apollo.BaseMutationOptions<
  EditBoardDescriptionMutation,
  EditBoardDescriptionMutationVariables
>
export const EditBoardVisibilityDocument = gql`
  mutation EditBoardVisibility($id: ID!, $isPrivate: Boolean!) {
    updateBoardVisibility(board: {_id: $id, isPrivate: $isPrivate}) {
      ...Board
    }
  }
  ${BoardFragmentDoc}
`
export type EditBoardVisibilityMutationFn = Apollo.MutationFunction<
  EditBoardVisibilityMutation,
  EditBoardVisibilityMutationVariables
>

/**
 * __useEditBoardVisibilityMutation__
 *
 * To run a mutation, you first call `useEditBoardVisibilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBoardVisibilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBoardVisibilityMutation, { data, loading, error }] = useEditBoardVisibilityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isPrivate: // value for 'isPrivate'
 *   },
 * });
 */
export function useEditBoardVisibilityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditBoardVisibilityMutation,
    EditBoardVisibilityMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<EditBoardVisibilityMutation, EditBoardVisibilityMutationVariables>(
    EditBoardVisibilityDocument,
    options,
  )
}
export type EditBoardVisibilityMutationHookResult = ReturnType<
  typeof useEditBoardVisibilityMutation
>
export type EditBoardVisibilityMutationResult = Apollo.MutationResult<EditBoardVisibilityMutation>
export type EditBoardVisibilityMutationOptions = Apollo.BaseMutationOptions<
  EditBoardVisibilityMutation,
  EditBoardVisibilityMutationVariables
>
export const EditBoardTagsDocument = gql`
  mutation EditBoardTags($id: ID!, $tagsIds: [ID!]) {
    updateBoardTags(board: {_id: $id, tagsIds: $tagsIds}) {
      ...Board
    }
  }
  ${BoardFragmentDoc}
`
export type EditBoardTagsMutationFn = Apollo.MutationFunction<
  EditBoardTagsMutation,
  EditBoardTagsMutationVariables
>

/**
 * __useEditBoardTagsMutation__
 *
 * To run a mutation, you first call `useEditBoardTagsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBoardTagsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBoardTagsMutation, { data, loading, error }] = useEditBoardTagsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      tagsIds: // value for 'tagsIds'
 *   },
 * });
 */
export function useEditBoardTagsMutation(
  baseOptions?: Apollo.MutationHookOptions<EditBoardTagsMutation, EditBoardTagsMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<EditBoardTagsMutation, EditBoardTagsMutationVariables>(
    EditBoardTagsDocument,
    options,
  )
}
export type EditBoardTagsMutationHookResult = ReturnType<typeof useEditBoardTagsMutation>
export type EditBoardTagsMutationResult = Apollo.MutationResult<EditBoardTagsMutation>
export type EditBoardTagsMutationOptions = Apollo.BaseMutationOptions<
  EditBoardTagsMutation,
  EditBoardTagsMutationVariables
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
