/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import {EventFragmentDoc} from '../../../entities/event/api/api'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type SingleEventFragment = {
  __typename?: 'Event'
  _id: string
  title?: string | null | undefined
  content: string
  deadline?: any | null | undefined
}

export type SingleEventQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type SingleEventQuery = {
  __typename?: 'Query'
  event?:
    | {
        __typename?: 'Event'
        _id: string
        title?: string | null | undefined
        content: string
        deadline?: any | null | undefined
      }
    | null
    | undefined
}

export const SingleEventFragmentDoc = gql`
  fragment SingleEvent on Event {
    ...Event
  }
  ${EventFragmentDoc}
`
export const SingleEventDocument = gql`
  query SingleEvent($id: ID!) {
    event(eventId: $id) {
      ...SingleEvent
    }
  }
  ${SingleEventFragmentDoc}
`

/**
 * __useSingleEventQuery__
 *
 * To run a query within a React component, call `useSingleEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleEventQuery(
  baseOptions: Apollo.QueryHookOptions<SingleEventQuery, SingleEventQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<SingleEventQuery, SingleEventQueryVariables>(SingleEventDocument, options)
}
export function useSingleEventLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SingleEventQuery, SingleEventQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<SingleEventQuery, SingleEventQueryVariables>(
    SingleEventDocument,
    options,
  )
}
export type SingleEventQueryHookResult = ReturnType<typeof useSingleEventQuery>
export type SingleEventLazyQueryHookResult = ReturnType<typeof useSingleEventLazyQuery>
export type SingleEventQueryResult = Apollo.QueryResult<SingleEventQuery, SingleEventQueryVariables>
