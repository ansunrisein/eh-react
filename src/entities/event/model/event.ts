import {Domain, hydrate} from 'effector'
import {persist} from 'effector-storage/local'
import {v4} from 'uuid'
import {Event} from '../types'

export type EventEntity = ReturnType<typeof createEventEntity>

export type EventEntityConfig = {
  defaultEvents?: Event[]
  events?: Event[]
  persistEvents?: boolean
}

export type EventEntityDeps = {
  domain: Domain
}

export const createEventEntity = (
  {domain}: EventEntityDeps,
  {defaultEvents = [], events, persistEvents = true}: EventEntityConfig = {},
) => {
  const createEvent = domain.event<Omit<Event, 'id'>>()
  const removeEvent = domain.event<Event['id']>()
  const resetEvents = domain.event()

  const $events = domain
    .store(defaultEvents)
    .on(createEvent, (events, event) => [...events, {id: v4(), ...event}])
    .on(removeEvent, (events, id) => events.filter(e => e.id !== id))
    .reset(resetEvents)

  hydrate(domain, {
    values: [[$events, events]],
  })

  if (persistEvents) {
    persist({key: 'events', store: $events})
  }

  return {
    createEvent,
    removeEvent,
    resetEvents,
    $events,
  }
}
