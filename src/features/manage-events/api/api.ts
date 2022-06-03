/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import {EventFragmentDoc} from '../../../entities/event/api/api'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type TimeExpiredEventsQueryVariables = Types.Exact<{
  boardId: Types.Scalars['ID']
}>

export type TimeExpiredEventsQuery = {
  __typename?: 'Query'
  timeExpiredEvents?:
    | Array<{
        __typename?: 'Event'
        _id: string
        title?: string | null | undefined
        content: string
        deadline?: any | null | undefined
      }>
    | null
    | undefined
}

export type RemoveTimeExpiredEventsMutationVariables = Types.Exact<{
  ids: Array<Types.Scalars['ID']> | Types.Scalars['ID']
}>

export type RemoveTimeExpiredEventsMutation = {
  __typename?: 'Mutation'
  removeEventsByIds?: Array<{__typename?: 'Event'; _id: string}> | null | undefined
}

export const TimeExpiredEventsDocument = gql`
  query TimeExpiredEvents($boardId: ID!) {
    timeExpiredEvents(boardId: $boardId) {
      ...Event
    }
  }
  ${EventFragmentDoc}
`

/**
 * __useTimeExpiredEventsQuery__
 *
 * To run a query within a React component, call `useTimeExpiredEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimeExpiredEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimeExpiredEventsQuery({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useTimeExpiredEventsQuery(
  baseOptions: Apollo.QueryHookOptions<TimeExpiredEventsQuery, TimeExpiredEventsQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<TimeExpiredEventsQuery, TimeExpiredEventsQueryVariables>(
    TimeExpiredEventsDocument,
    options,
  )
}
export function useTimeExpiredEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TimeExpiredEventsQuery,
    TimeExpiredEventsQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<TimeExpiredEventsQuery, TimeExpiredEventsQueryVariables>(
    TimeExpiredEventsDocument,
    options,
  )
}
export type TimeExpiredEventsQueryHookResult = ReturnType<typeof useTimeExpiredEventsQuery>
export type TimeExpiredEventsLazyQueryHookResult = ReturnType<typeof useTimeExpiredEventsLazyQuery>
export type TimeExpiredEventsQueryResult = Apollo.QueryResult<
  TimeExpiredEventsQuery,
  TimeExpiredEventsQueryVariables
>
export const RemoveTimeExpiredEventsDocument = gql`
  mutation RemoveTimeExpiredEvents($ids: [ID!]!) {
    removeEventsByIds(events: {ids: $ids}) {
      _id
    }
  }
`
export type RemoveTimeExpiredEventsMutationFn = Apollo.MutationFunction<
  RemoveTimeExpiredEventsMutation,
  RemoveTimeExpiredEventsMutationVariables
>

/**
 * __useRemoveTimeExpiredEventsMutation__
 *
 * To run a mutation, you first call `useRemoveTimeExpiredEventsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTimeExpiredEventsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTimeExpiredEventsMutation, { data, loading, error }] = useRemoveTimeExpiredEventsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useRemoveTimeExpiredEventsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveTimeExpiredEventsMutation,
    RemoveTimeExpiredEventsMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<
    RemoveTimeExpiredEventsMutation,
    RemoveTimeExpiredEventsMutationVariables
  >(RemoveTimeExpiredEventsDocument, options)
}
export type RemoveTimeExpiredEventsMutationHookResult = ReturnType<
  typeof useRemoveTimeExpiredEventsMutation
>
export type RemoveTimeExpiredEventsMutationResult =
  Apollo.MutationResult<RemoveTimeExpiredEventsMutation>
export type RemoveTimeExpiredEventsMutationOptions = Apollo.BaseMutationOptions<
  RemoveTimeExpiredEventsMutation,
  RemoveTimeExpiredEventsMutationVariables
>
