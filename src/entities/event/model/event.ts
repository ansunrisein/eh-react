import {Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {
  CreateEventDocument,
  CreateEventMutation,
  CreateEventMutationVariables,
  EditEventDocument,
  EditEventMutation,
  EditEventMutationVariables,
  RemoveEventDocument,
  RemoveEventMutation,
  RemoveEventMutationVariables,
} from '../api'

export type EventEntity = ReturnType<typeof createEventEntity>

export type EventEntityDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createEventEntity = ({domain, apollo}: EventEntityDeps) => {
  const createEventFx = domain.effect((variables: CreateEventMutationVariables) =>
    apollo
      .mutate<CreateEventMutation, CreateEventMutationVariables>({
        mutation: CreateEventDocument,
        variables,
      })
      .then(result => result?.data?.createEvent),
  )

  const editEventFx = domain.effect((variables: EditEventMutationVariables) =>
    apollo
      .mutate<EditEventMutation, EditEventMutationVariables>({
        mutation: EditEventDocument,
        variables,
      })
      .then(result => result?.data?.updateEvent),
  )

  const removeEventFx = domain.effect((variables: RemoveEventMutationVariables) =>
    apollo
      .mutate<RemoveEventMutation, RemoveEventMutationVariables>({
        mutation: RemoveEventDocument,
        variables,
        update: (cache, {data}) => {
          cache.evict({id: `Event:${data?.removeEvent?._id}`})
          cache.gc()
        },
      })
      .then(result => result?.data?.removeEvent),
  )

  return {
    createEventFx,
    editEventFx,
    removeEventFx,
  }
}
