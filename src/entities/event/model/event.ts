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
  {
    defaultEvents = [],
    events,
    persistEvents = process.env.STORYBOOK !== 'true',
  }: EventEntityConfig = {},
) => {
  const createEvent = domain.event<Omit<Event, 'id'>>()
  const editEvent = domain.event<Event>()
  const removeEvent = domain.event<Event['id']>()
  const resetEvents = domain.event()

  const $events = domain
    .store(defaultEvents)
    .on(createEvent, (events, event) => [...events, {id: v4(), ...event}])
    .on(removeEvent, (events, id) => events.filter(e => e.id !== id))
    .on(editEvent, (events, event) => events.map(e => (e.id === event.id ? event : e)))
    .reset(resetEvents)

  hydrate(domain, {
    values: [[$events, events]],
  })

  if (persistEvents) {
    persist({key: 'events', store: $events})
  }

  return {
    createEvent,
    editEvent,
    removeEvent,
    resetEvents,
    $events,
  }
}
