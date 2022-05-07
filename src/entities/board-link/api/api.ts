/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type BoardLinkFragment = {
  __typename?: 'BoardLink'
  _id: string
  link: string
  name: string
  permissions: Array<Types.Permission>
}

export type PermissionsQueryVariables = Types.Exact<{[key: string]: never}>

export type PermissionsQuery = {
  __typename?: 'Query'
  permissions: Array<{
    __typename?: 'EntityPermissions'
    name: Types.EntityName
    permissions: Array<Types.Permission>
  }>
}

export type BoardLinkQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type BoardLinkQuery = {
  __typename?: 'Query'
  boardLink?:
    | {
        __typename?: 'BoardLink'
        _id: string
        link: string
        name: string
        permissions: Array<Types.Permission>
      }
    | null
    | undefined
}

export type BoardLinksQueryVariables = Types.Exact<{
  boardId: Types.Scalars['ID']
  page: Types.Page
}>

export type BoardLinksQuery = {
  __typename?: 'Query'
  board?:
    | {
        __typename?: 'Board'
        _id: string
        boardLinks: {
          __typename?: 'BoardLinkConnection'
          pageInfo: {
            __typename?: 'PageInfo'
            hasNextPage: boolean
            endCursor?: string | null | undefined
          }
          edges: Array<{
            __typename?: 'BoardLinkEdge'
            node: {
              __typename?: 'BoardLink'
              _id: string
              link: string
              name: string
              permissions: Array<Types.Permission>
            }
          }>
        }
      }
    | null
    | undefined
}

export type CreateBoardLinkMutationVariables = Types.Exact<{
  boardId: Types.Scalars['ID']
  name: Types.Scalars['String']
  permissions: Array<Types.Permission> | Types.Permission
}>

export type CreateBoardLinkMutation = {
  __typename?: 'Mutation'
  createBoardLink: {
    __typename?: 'BoardLink'
    _id: string
    link: string
    name: string
    permissions: Array<Types.Permission>
  }
}

export type EditBoardLinkMutationVariables = Types.Exact<{
  _id: Types.Scalars['ID']
  name: Types.Scalars['String']
  permissions: Array<Types.Permission> | Types.Permission
}>

export type EditBoardLinkMutation = {
  __typename?: 'Mutation'
  updateBoardLink: {
    __typename?: 'BoardLink'
    _id: string
    link: string
    name: string
    permissions: Array<Types.Permission>
  }
}

export type RemoveBoardLinkMutationVariables = Types.Exact<{
  _id: Types.Scalars['ID']
}>

export type RemoveBoardLinkMutation = {
  __typename?: 'Mutation'
  removeBoardLink: {
    __typename?: 'BoardLink'
    _id: string
    link: string
    name: string
    permissions: Array<Types.Permission>
  }
}

export const BoardLinkFragmentDoc = gql`
  fragment BoardLink on BoardLink {
    _id
    link
    name
    permissions
  }
`
export const PermissionsDocument = gql`
  query Permissions {
    permissions {
      name
      permissions
    }
  }
`

/**
 * __usePermissionsQuery__
 *
 * To run a query within a React component, call `usePermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePermissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePermissionsQuery(
  baseOptions?: Apollo.QueryHookOptions<PermissionsQuery, PermissionsQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<PermissionsQuery, PermissionsQueryVariables>(PermissionsDocument, options)
}
export function usePermissionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PermissionsQuery, PermissionsQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<PermissionsQuery, PermissionsQueryVariables>(
    PermissionsDocument,
    options,
  )
}
export type PermissionsQueryHookResult = ReturnType<typeof usePermissionsQuery>
export type PermissionsLazyQueryHookResult = ReturnType<typeof usePermissionsLazyQuery>
export type PermissionsQueryResult = Apollo.QueryResult<PermissionsQuery, PermissionsQueryVariables>
export const BoardLinkDocument = gql`
  query BoardLink($id: ID!) {
    boardLink(boardLinkId: $id) {
      ...BoardLink
    }
  }
  ${BoardLinkFragmentDoc}
`

/**
 * __useBoardLinkQuery__
 *
 * To run a query within a React component, call `useBoardLinkQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardLinkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardLinkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBoardLinkQuery(
  baseOptions: Apollo.QueryHookOptions<BoardLinkQuery, BoardLinkQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<BoardLinkQuery, BoardLinkQueryVariables>(BoardLinkDocument, options)
}
export function useBoardLinkLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BoardLinkQuery, BoardLinkQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<BoardLinkQuery, BoardLinkQueryVariables>(BoardLinkDocument, options)
}
export type BoardLinkQueryHookResult = ReturnType<typeof useBoardLinkQuery>
export type BoardLinkLazyQueryHookResult = ReturnType<typeof useBoardLinkLazyQuery>
export type BoardLinkQueryResult = Apollo.QueryResult<BoardLinkQuery, BoardLinkQueryVariables>
export const BoardLinksDocument = gql`
  query BoardLinks($boardId: ID!, $page: Page!) {
    board(boardId: $boardId) {
      _id
      boardLinks(page: $page) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...BoardLink
          }
        }
      }
    }
  }
  ${BoardLinkFragmentDoc}
`

/**
 * __useBoardLinksQuery__
 *
 * To run a query within a React component, call `useBoardLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardLinksQuery({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useBoardLinksQuery(
  baseOptions: Apollo.QueryHookOptions<BoardLinksQuery, BoardLinksQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<BoardLinksQuery, BoardLinksQueryVariables>(BoardLinksDocument, options)
}
export function useBoardLinksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BoardLinksQuery, BoardLinksQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<BoardLinksQuery, BoardLinksQueryVariables>(BoardLinksDocument, options)
}
export type BoardLinksQueryHookResult = ReturnType<typeof useBoardLinksQuery>
export type BoardLinksLazyQueryHookResult = ReturnType<typeof useBoardLinksLazyQuery>
export type BoardLinksQueryResult = Apollo.QueryResult<BoardLinksQuery, BoardLinksQueryVariables>
export const CreateBoardLinkDocument = gql`
  mutation CreateBoardLink($boardId: ID!, $name: String!, $permissions: [Permission!]!) {
    createBoardLink(boardLink: {boardId: $boardId, name: $name, permissions: $permissions}) {
      ...BoardLink
    }
  }
  ${BoardLinkFragmentDoc}
`
export type CreateBoardLinkMutationFn = Apollo.MutationFunction<
  CreateBoardLinkMutation,
  CreateBoardLinkMutationVariables
>

/**
 * __useCreateBoardLinkMutation__
 *
 * To run a mutation, you first call `useCreateBoardLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardLinkMutation, { data, loading, error }] = useCreateBoardLinkMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      name: // value for 'name'
 *      permissions: // value for 'permissions'
 *   },
 * });
 */
export function useCreateBoardLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBoardLinkMutation,
    CreateBoardLinkMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<CreateBoardLinkMutation, CreateBoardLinkMutationVariables>(
    CreateBoardLinkDocument,
    options,
  )
}
export type CreateBoardLinkMutationHookResult = ReturnType<typeof useCreateBoardLinkMutation>
export type CreateBoardLinkMutationResult = Apollo.MutationResult<CreateBoardLinkMutation>
export type CreateBoardLinkMutationOptions = Apollo.BaseMutationOptions<
  CreateBoardLinkMutation,
  CreateBoardLinkMutationVariables
>
export const EditBoardLinkDocument = gql`
  mutation EditBoardLink($_id: ID!, $name: String!, $permissions: [Permission!]!) {
    updateBoardLink(boardLink: {_id: $_id, name: $name, permissions: $permissions}) {
      ...BoardLink
    }
  }
  ${BoardLinkFragmentDoc}
`
export type EditBoardLinkMutationFn = Apollo.MutationFunction<
  EditBoardLinkMutation,
  EditBoardLinkMutationVariables
>

/**
 * __useEditBoardLinkMutation__
 *
 * To run a mutation, you first call `useEditBoardLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBoardLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBoardLinkMutation, { data, loading, error }] = useEditBoardLinkMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      name: // value for 'name'
 *      permissions: // value for 'permissions'
 *   },
 * });
 */
export function useEditBoardLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<EditBoardLinkMutation, EditBoardLinkMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<EditBoardLinkMutation, EditBoardLinkMutationVariables>(
    EditBoardLinkDocument,
    options,
  )
}
export type EditBoardLinkMutationHookResult = ReturnType<typeof useEditBoardLinkMutation>
export type EditBoardLinkMutationResult = Apollo.MutationResult<EditBoardLinkMutation>
export type EditBoardLinkMutationOptions = Apollo.BaseMutationOptions<
  EditBoardLinkMutation,
  EditBoardLinkMutationVariables
>
export const RemoveBoardLinkDocument = gql`
  mutation RemoveBoardLink($_id: ID!) {
    removeBoardLink(boardLinkId: $_id) {
      ...BoardLink
    }
  }
  ${BoardLinkFragmentDoc}
`
export type RemoveBoardLinkMutationFn = Apollo.MutationFunction<
  RemoveBoardLinkMutation,
  RemoveBoardLinkMutationVariables
>

/**
 * __useRemoveBoardLinkMutation__
 *
 * To run a mutation, you first call `useRemoveBoardLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBoardLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBoardLinkMutation, { data, loading, error }] = useRemoveBoardLinkMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useRemoveBoardLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveBoardLinkMutation,
    RemoveBoardLinkMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<RemoveBoardLinkMutation, RemoveBoardLinkMutationVariables>(
    RemoveBoardLinkDocument,
    options,
  )
}
export type RemoveBoardLinkMutationHookResult = ReturnType<typeof useRemoveBoardLinkMutation>
export type RemoveBoardLinkMutationResult = Apollo.MutationResult<RemoveBoardLinkMutation>
export type RemoveBoardLinkMutationOptions = Apollo.BaseMutationOptions<
  RemoveBoardLinkMutation,
  RemoveBoardLinkMutationVariables
>
