import {createEvent as createEffectorEvent, createStore} from 'effector-next'
import {persist} from 'effector-storage/local/fp'
import {v4} from 'uuid'

export type Event = {
  id: string
  title?: string
  content: string
}

export type EventEntity = ReturnType<typeof createEventEntity>

export type EventEntityConfig = {
  defaultEvents?: Event[]
  persistEvents?: boolean
}

export type EventEntityDeps = Record<string, never>

export const createEventEntity = (
  deps?: EventEntityDeps,
  {defaultEvents = [], persistEvents = true}: EventEntityConfig = {},
) => {
  const createEvent = createEffectorEvent<Omit<Event, 'id'>>()
  const removeEvent = createEffectorEvent<Event['id']>()
  const resetEvents = createEffectorEvent()

  const $events = createStore<Event[]>(defaultEvents)
    .on(createEvent, (events, event) => [...events, {id: v4(), ...event}])
    .on(removeEvent, (events, id) => events.filter(e => e.id !== id))
    .reset(resetEvents)
    .thru(persist({key: 'events'}))

  return {
    createEvent,
    removeEvent,
    resetEvents,
    $events,
  }
}
