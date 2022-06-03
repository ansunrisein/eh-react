import {attach, Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {EventFragment} from '@eh/entities/event'
import {
  RemoveTimeExpiredEventsDocument,
  RemoveTimeExpiredEventsMutation,
  RemoveTimeExpiredEventsMutationVariables,
  TimeExpiredEventsDocument,
  TimeExpiredEventsQuery,
  TimeExpiredEventsQueryVariables,
} from '../api'
import {Modal} from './modal'

export type TimeExpiredEvents = ReturnType<typeof createTimeExpiredEvents>

export type TimeExpiredEventsDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
  modal: Modal
}

export const createTimeExpiredEvents = ({domain, modal, apollo}: TimeExpiredEventsDeps) => {
  const reset = domain.event()

  const fetchTimeExpiredEventsFx = domain.effect((variables: TimeExpiredEventsQueryVariables) =>
    apollo
      .query<TimeExpiredEventsQuery, TimeExpiredEventsQueryVariables>({
        query: TimeExpiredEventsDocument,
        variables,
        fetchPolicy: 'network-only',
      })
      .then(result => result.data.timeExpiredEvents),
  )

  const fetchCurrentTimeExpiredEventsFx = attach({
    source: modal.$boardId,
    effect: domain.effect((boardId: string | null) =>
      boardId ? fetchTimeExpiredEventsFx({boardId}) : null,
    ),
  })

  const removeTimeExpiredEventsFx = domain.effect(
    (variables: RemoveTimeExpiredEventsMutationVariables) =>
      apollo
        .mutate<RemoveTimeExpiredEventsMutation, RemoveTimeExpiredEventsMutationVariables>({
          mutation: RemoveTimeExpiredEventsDocument,
          variables,
        })
        .then(result => result.data?.removeEventsByIds),
  )

  const $timeExpiredEvents = domain
    .store<EventFragment[]>([])
    .on(fetchTimeExpiredEventsFx.doneData, (_, events) => events || [])
    .on(removeTimeExpiredEventsFx.doneData, (events, removedEventsIds) => {
      const ids = removedEventsIds?.map(event => event._id) || []

      return events.filter(event => !ids.includes(event._id))
    })
    .reset(reset)

  return {
    $timeExpiredEvents,
    fetchTimeExpiredEventsFx,
    fetchCurrentTimeExpiredEventsFx,
    removeTimeExpiredEventsFx,
    reset,
  }
}
