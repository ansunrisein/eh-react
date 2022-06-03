import {combine, Domain, sample} from 'effector'
import {TimeExpiredEvents} from './time-expired-events'

export type SelectEvents = ReturnType<typeof createSelectEvents>

export type SelectEventsDeps = {
  domain: Domain
  timeExpiredEvents: TimeExpiredEvents
}

export const createSelectEvents = ({domain, timeExpiredEvents}: SelectEventsDeps) => {
  const toggle = domain.event<string>()
  const selectAll = domain.event()
  const reset = domain.event()

  const $selectedEvents = domain
    .store<string[]>([])
    .on(toggle, (selectedEvents, event) =>
      selectedEvents.includes(event)
        ? selectedEvents.filter(e => e !== event)
        : selectedEvents.concat(event),
    )
    .on(
      sample({
        clock: selectAll,
        source: timeExpiredEvents.$timeExpiredEvents,
      }),
      (_, events) => events.map(e => e._id),
    )
    .reset(reset)

  const $areAllEventsSelected = combine(
    timeExpiredEvents.$timeExpiredEvents,
    $selectedEvents,
    (all, selected) => all.every(event => selected.includes(event._id)),
  )

  return {
    $selectedEvents,
    toggle,
    selectAll,
    reset,
    $areAllEventsSelected,
  }
}
