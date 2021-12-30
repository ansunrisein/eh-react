/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type UserFragment = {
  __typename?: 'User'
  _id: string
  nickname: string
  name?: string | null | undefined
  avatar?: string | null | undefined
}

export type UserQueryVariables = Types.Exact<{[key: string]: never}>

export type UserQuery = {
  __typename?: 'Query'
  me?:
    | {
        __typename?: 'User'
        _id: string
        nickname: string
        name?: string | null | undefined
        avatar?: string | null | undefined
      }
    | null
    | undefined
}

export type EditUserInfoMutationVariables = Types.Exact<{
  nickname: Types.Scalars['String']
  name?: Types.Maybe<Types.Scalars['String']>
}>

export type EditUserInfoMutation = {
  __typename?: 'Mutation'
  updateProfile: {
    __typename?: 'User'
    _id: string
    nickname: string
    name?: string | null | undefined
    avatar?: string | null | undefined
  }
}

export const UserFragmentDoc = gql`
  fragment User on User {
    _id
    nickname
    name
    avatar
  }
`
export const UserDocument = gql`
  query User {
    me {
      ...User
    }
  }
  ${UserFragmentDoc}
`

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options)
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options)
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>
export const EditUserInfoDocument = gql`
  mutation EditUserInfo($nickname: String!, $name: String) {
    updateProfile(nickname: $nickname, name: $name) {
      ...User
    }
  }
  ${UserFragmentDoc}
`
export type EditUserInfoMutationFn = Apollo.MutationFunction<
  EditUserInfoMutation,
  EditUserInfoMutationVariables
>

/**
 * __useEditUserInfoMutation__
 *
 * To run a mutation, you first call `useEditUserInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserInfoMutation, { data, loading, error }] = useEditUserInfoMutation({
 *   variables: {
 *      nickname: // value for 'nickname'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useEditUserInfoMutation(
  baseOptions?: Apollo.MutationHookOptions<EditUserInfoMutation, EditUserInfoMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<EditUserInfoMutation, EditUserInfoMutationVariables>(
    EditUserInfoDocument,
    options,
  )
}
export type EditUserInfoMutationHookResult = ReturnType<typeof useEditUserInfoMutation>
export type EditUserInfoMutationResult = Apollo.MutationResult<EditUserInfoMutation>
export type EditUserInfoMutationOptions = Apollo.BaseMutationOptions<
  EditUserInfoMutation,
  EditUserInfoMutationVariables
>
