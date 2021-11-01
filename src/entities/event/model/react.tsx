import React, {createContext, useContext} from 'react'
import {useStore} from 'effector-react'
import {Hoc} from '@eh/shared/types'
import {Event} from '../types'
import {EventEntity} from './event'

export const EventEntityContext = createContext<EventEntity>(
  new Proxy({} as EventEntity, {
    get() {
      throw new Error('Use EventEntityProvider!')
    },
  }),
)

export type EventEntityProviderProps = {
  event: EventEntity
}

export const EventEntityProvider: React.FC<EventEntityProviderProps> = ({children, event}) => (
  <EventEntityContext.Provider value={event}>{children}</EventEntityContext.Provider>
)

export const withEventEntity =
  (providerProps: EventEntityProviderProps): Hoc =>
  Component =>
  props =>
    (
      <EventEntityProvider {...providerProps}>
        <Component {...props} />
      </EventEntityProvider>
    )

export const useEventEntity = (): EventEntity => useContext(EventEntityContext)

export const useEvents = (): Event[] => {
  const {$events} = useEventEntity()
  return useStore($events)
}

export const useEvent = (id: string): Event | undefined => {
  const events = useEvents()
  return events.find(e => e.id === id)
}
