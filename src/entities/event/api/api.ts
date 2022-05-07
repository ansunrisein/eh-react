/* eslint-disable */
// noinspection GraphQLSchemaValidation,ES6PreferShortImport,JSUnusedGlobalSymbols
// noinspection JSUnusedGlobalSymbols

import * as Types from '@eh/shared/api'

import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type EventFragment = {
  __typename?: 'Event'
  _id: string
  title?: string | null | undefined
  content: string
  deadline?: any | null | undefined
}

export type CreateEventMutationVariables = Types.Exact<{
  title?: Types.Maybe<Types.Scalars['String']>
  content: Types.Scalars['String']
  deadline?: Types.Maybe<Types.Scalars['DateTime']>
  boardId: Types.Scalars['ID']
}>

export type CreateEventMutation = {
  __typename?: 'Mutation'
  createEvent?:
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

export type EditEventMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']
  title?: Types.Maybe<Types.Scalars['String']>
  content: Types.Scalars['String']
  deadline?: Types.Maybe<Types.Scalars['DateTime']>
}>

export type EditEventMutation = {
  __typename?: 'Mutation'
  updateEvent?:
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

export type RemoveEventMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type RemoveEventMutation = {
  __typename?: 'Mutation'
  removeEvent?:
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

export const EventFragmentDoc = gql`
  fragment Event on Event {
    _id
    title
    content
    deadline
  }
`
export const CreateEventDocument = gql`
  mutation CreateEvent($title: String, $content: String!, $deadline: DateTime, $boardId: ID!) {
    createEvent(event: {title: $title, content: $content, deadline: $deadline, boardId: $boardId}) {
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
 *      deadline: // value for 'deadline'
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
  mutation EditEvent($id: ID!, $title: String, $content: String!, $deadline: DateTime) {
    updateEvent(event: {_id: $id, title: $title, content: $content, deadline: $deadline}) {
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
 *      deadline: // value for 'deadline'
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
