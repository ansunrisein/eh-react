import React, {createContext, useContext} from 'react'
import {Hoc} from '@eh/shared/types'
import {UpdateEventFeature} from './update-event'

export const UpdateEventFeatureContext = createContext<UpdateEventFeature>(
  new Proxy({} as UpdateEventFeature, {
    get() {
      throw new Error('Use UpdateEventFeatureProvider!')
    },
  }),
)

export type UpdateEventFeatureProviderProps = {
  updateEvent: UpdateEventFeature
}

export const UpdateEventFeatureProvider: React.FC<UpdateEventFeatureProviderProps> = ({
  children,
  updateEvent,
}) => (
  <UpdateEventFeatureContext.Provider value={updateEvent}>
    {children}
  </UpdateEventFeatureContext.Provider>
)

export const withUpdateEventFeature =
  (providerProps: UpdateEventFeatureProviderProps): Hoc =>
  Component =>
  props =>
    (
      <UpdateEventFeatureProvider {...providerProps}>
        <Component {...props} />
      </UpdateEventFeatureProvider>
    )

export const useUpdateEventFeature = (): UpdateEventFeature => useContext(UpdateEventFeatureContext)

export const useCreateEventInBoard = () => useUpdateEventFeature().createEventInBoard
