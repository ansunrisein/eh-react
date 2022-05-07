import React, {createContext, useContext, useEffect} from 'react'
import {useStore} from 'effector-react'
import {Hoc} from '@eh/shared/types'
import {SingleEventWidget} from './single-event'

export const SingleEventWidgetContext = createContext<SingleEventWidget>(
  new Proxy({} as SingleEventWidget, {
    get() {
      throw new Error('Use SingleEventWidgetProvider!')
    },
  }),
)

export type SingleEventWidgetProviderProps = {
  singleEvent: SingleEventWidget
}

export const SingleEventWidgetProvider: React.FC<SingleEventWidgetProviderProps> = ({
  children,
  singleEvent,
}) => (
  <SingleEventWidgetContext.Provider value={singleEvent}>
    {children}
  </SingleEventWidgetContext.Provider>
)

export const withSingleEventWidget =
  (providerProps: SingleEventWidgetProviderProps): Hoc =>
  Component =>
  props =>
    (
      <SingleEventWidgetProvider {...providerProps}>
        <Component {...props} />
      </SingleEventWidgetProvider>
    )

export const useSingleEventWidget = (): SingleEventWidget => useContext(SingleEventWidgetContext)

export const useSingleEvent = (id?: string) => {
  const {$event, fetchEventFx, reset} = useSingleEventWidget()

  const event = useStore($event)
  const loading = useStore(fetchEventFx.pending)

  useEffect(() => {
    if (id) {
      fetchEventFx({id})

      return reset
    }
  }, [id, fetchEventFx, reset])

  return {
    event,
    loading,
  }
}
