import {Domain, forward} from 'effector'
import {ApolloClient} from '@apollo/client'
import {createModal} from '@eh/features/manage-events/model/modal'
import {createSelectEvents} from './select-events'
import {createTimeExpiredEvents} from './time-expired-events'

export type ManageEventsFeature = ReturnType<typeof createManageEventsFeature>

export type ManageEventsFeatureDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createManageEventsFeature = ({domain, apollo}: ManageEventsFeatureDeps) => {
  const modal = createModal({domain})
  const timeExpiredEvents = createTimeExpiredEvents({domain, apollo, modal})
  const selectEvents = createSelectEvents({domain, timeExpiredEvents})

  const reset = domain.event()

  forward({
    from: reset,
    to: [timeExpiredEvents.reset, selectEvents.reset, modal.closeModal],
  })

  return {
    modal,
    timeExpiredEvents,
    selectEvents,
    reset,
  }
}
