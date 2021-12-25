import React, {createContext, useContext} from 'react'
import {useAsyncFn} from 'react-use'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {useEventQuery} from '../api'
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

export const useEvent = (id: string) => {
  const {data, loading} = useEventQuery({variables: {id}})

  return {
    event: data?.event,
    loading,
  }
}

export const useCreateEvent = () => {
  const {createEventFx} = useEventEntity()

  return useAsyncFn<RemoveEffector<typeof createEventFx>>(createEventFx, [createEventFx])
}

export const useEditEvent = () => {
  const {editEventFx} = useEventEntity()

  return useAsyncFn<RemoveEffector<typeof editEventFx>>(editEventFx, [editEventFx])
}

export const useRemoveEvent = () => {
  const {removeEventFx} = useEventEntity()

  return useAsyncFn<RemoveEffector<typeof removeEventFx>>(removeEventFx, [removeEventFx])
}
