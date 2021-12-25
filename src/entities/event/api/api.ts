/* eslint-disable */
import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import {EventFragmentDoc} from '../../../shared/api/fragments'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type EventQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type EventQuery = {
  __typename?: 'Query'
  event?:
    | {__typename?: 'Event'; _id: string; title?: string | null | undefined; content: string}
    | null
    | undefined
}

export type CreateEventMutationVariables = Types.Exact<{
  title?: Types.Maybe<Types.Scalars['String']>
  content: Types.Scalars['String']
  boardId: Types.Scalars['ID']
}>

export type CreateEventMutation = {
  __typename?: 'Mutation'
  createEvent?:
    | {__typename?: 'Event'; _id: string; title?: string | null | undefined; content: string}
    | null
    | undefined
}

export type EditEventMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']
  title?: Types.Maybe<Types.Scalars['String']>
  content: Types.Scalars['String']
}>

export type EditEventMutation = {
  __typename?: 'Mutation'
  updateEvent?:
    | {__typename?: 'Event'; _id: string; title?: string | null | undefined; content: string}
    | null
    | undefined
}

export type RemoveEventMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type RemoveEventMutation = {
  __typename?: 'Mutation'
  removeEvent?:
    | {__typename?: 'Event'; _id: string; title?: string | null | undefined; content: string}
    | null
    | undefined
}

export const EventDocument = gql`
  query Event($id: ID!) {
    event(eventId: $id) {
      ...Event
    }
  }
  ${EventFragmentDoc}
`

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventQuery(
  baseOptions: Apollo.QueryHookOptions<EventQuery, EventQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<EventQuery, EventQueryVariables>(EventDocument, options)
}
export function useEventLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<EventQuery, EventQueryVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, options)
}
export type EventQueryHookResult = ReturnType<typeof useEventQuery>
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>
export type EventQueryResult = Apollo.QueryResult<EventQuery, EventQueryVariables>
export const CreateEventDocument = gql`
  mutation CreateEvent($title: String, $content: String!, $boardId: ID!) {
    createEvent(event: {title: $title, content: $content, boardId: $boardId}) {
      ...Event
    }
  }
  ${EventFragmentDoc}
`
export type CreateEventMutationFn = Apollo.MutationFunction<
  CreateEventMutation,
  CreateEventMutationVariables
>

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useCreateEventMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(
    CreateEventDocument,
    options,
  )
}
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<
  CreateEventMutation,
  CreateEventMutationVariables
>
export const EditEventDocument = gql`
  mutation EditEvent($id: ID!, $title: String, $content: String!) {
    updateEvent(event: {_id: $id, title: $title, content: $content}) {
      ...Event
    }
  }
  ${EventFragmentDoc}
`
export type EditEventMutationFn = Apollo.MutationFunction<
  EditEventMutation,
  EditEventMutationVariables
>

/**
 * __useEditEventMutation__
 *
 * To run a mutation, you first call `useEditEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editEventMutation, { data, loading, error }] = useEditEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useEditEventMutation(
  baseOptions?: Apollo.MutationHookOptions<EditEventMutation, EditEventMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<EditEventMutation, EditEventMutationVariables>(
    EditEventDocument,
    options,
  )
}
export type EditEventMutationHookResult = ReturnType<typeof useEditEventMutation>
export type EditEventMutationResult = Apollo.MutationResult<EditEventMutation>
export type EditEventMutationOptions = Apollo.BaseMutationOptions<
  EditEventMutation,
  EditEventMutationVariables
>
export const RemoveEventDocument = gql`
  mutation RemoveEvent($id: ID!) {
    removeEvent(eventId: $id) {
      ...Event
    }
  }
  ${EventFragmentDoc}
`
export type RemoveEventMutationFn = Apollo.MutationFunction<
  RemoveEventMutation,
  RemoveEventMutationVariables
>

/**
 * __useRemoveEventMutation__
 *
 * To run a mutation, you first call `useRemoveEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeEventMutation, { data, loading, error }] = useRemoveEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveEventMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveEventMutation, RemoveEventMutationVariables>,
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useMutation<RemoveEventMutation, RemoveEventMutationVariables>(
    RemoveEventDocument,
    options,
  )
}
export type RemoveEventMutationHookResult = ReturnType<typeof useRemoveEventMutation>
export type RemoveEventMutationResult = Apollo.MutationResult<RemoveEventMutation>
export type RemoveEventMutationOptions = Apollo.BaseMutationOptions<
  RemoveEventMutation,
  RemoveEventMutationVariables
>
