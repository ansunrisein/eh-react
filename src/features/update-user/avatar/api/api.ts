/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type UserAvatarFragment = {
  __typename?: 'User'
  _id: string
  avatar?: string | null | undefined
}

export type UserAvatarQueryVariables = Types.Exact<{[key: string]: never}>

export type UserAvatarQuery = {
  __typename?: 'Query'
  me?: {__typename?: 'User'; _id: string; avatar?: string | null | undefined} | null | undefined
}

export type EditUserAvatarMutationVariables = Types.Exact<{
  avatar?: Types.Maybe<Types.Scalars['String']>
}>

export type EditUserAvatarMutation = {
  __typename?: 'Mutation'
  updateAvatar: {__typename?: 'User'; _id: string; avatar?: string | null | undefined}
}

export const UserAvatarFragmentDoc = gql`
  fragment UserAvatar on User {
    _id
    avatar
  }
`
export const UserAvatarDocument = gql`
  query UserAvatar {
    me {
      ...UserAvatar
    }
  }
  ${UserAvatarFragmentDoc}
`

/**
 * __useUserAvatarQuery__
 *
 * To run a query within a React component, call `useUserAvatarQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAvatarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAvatarQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserAvatarQuery(
  baseOptions?: Apollo.QueryHookOptions<UserAvatarQuery, UserAvatarQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<UserAvatarQuery, UserAvatarQueryVariables>(UserAvatarDocument, options)
}
export function useUserAvatarLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserAvatarQuery, UserAvatarQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<UserAvatarQuery, UserAvatarQueryVariables>(UserAvatarDocument, options)
}
export type UserAvatarQueryHookResult = ReturnType<typeof useUserAvatarQuery>
export type UserAvatarLazyQueryHookResult = ReturnType<typeof useUserAvatarLazyQuery>
export type UserAvatarQueryResult = Apollo.QueryResult<UserAvatarQuery, UserAvatarQueryVariables>
export const EditUserAvatarDocument = gql`
  mutation EditUserAvatar($avatar: String) {
    updateAvatar(avatar: $avatar) {
      ...UserAvatar
    }
  }
  ${UserAvatarFragmentDoc}
`
export type EditUserAvatarMutationFn = Apollo.MutationFunction<
  EditUserAvatarMutation,
  EditUserAvatarMutationVariables
>

/**
 * __useEditUserAvatarMutation__
 *
 * To run a mutation, you first call `useEditUserAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserAvatarMutation, { data, loading, error }] = useEditUserAvatarMutation({
 *   variables: {
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useEditUserAvatarMutation(
  baseOptions?: Apollo.MutationHookOptions<EditUserAvatarMutation, EditUserAvatarMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<EditUserAvatarMutation, EditUserAvatarMutationVariables>(
    EditUserAvatarDocument,
    options,
  )
}
export type EditUserAvatarMutationHookResult = ReturnType<typeof useEditUserAvatarMutation>
export type EditUserAvatarMutationResult = Apollo.MutationResult<EditUserAvatarMutation>
export type EditUserAvatarMutationOptions = Apollo.BaseMutationOptions<
  EditUserAvatarMutation,
  EditUserAvatarMutationVariables
>
