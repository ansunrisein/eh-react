import React, {createContext, useContext, useLayoutEffect} from 'react'
import {useStore} from 'effector-react'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {ManageEventsFeature} from './manage-events'

export const ManageEventsFeatureContext = createContext<ManageEventsFeature>(
  new Proxy({} as ManageEventsFeature, {
    get() {
      throw new Error('Use ManageEventsFeatureProvider!')
    },
  }),
)

export type ManageEventsFeatureProviderProps = {
  manageEvents: ManageEventsFeature
}

export const ManageEventsFeatureProvider: React.FC<ManageEventsFeatureProviderProps> = ({
  children,
  manageEvents,
}) => (
  <ManageEventsFeatureContext.Provider value={manageEvents}>
    {children}
  </ManageEventsFeatureContext.Provider>
)

export const withManageEventsFeature =
  (providerProps: ManageEventsFeatureProviderProps): Hoc =>
  Component =>
  props =>
    (
      <ManageEventsFeatureProvider {...providerProps}>
        <Component {...props} />
      </ManageEventsFeatureProvider>
    )

export const useManageEventsFeature = (): ManageEventsFeature =>
  useContext(ManageEventsFeatureContext)

export const useTimeExpiredEvents = () => {
  const {
    timeExpiredEvents: {$timeExpiredEvents, fetchTimeExpiredEventsFx},
  } = useManageEventsFeature()

  return {
    timeExpiredEvents: useStore($timeExpiredEvents),
    fetchTimeExpiredEvents: fetchTimeExpiredEventsFx as RemoveEffector<
      typeof fetchTimeExpiredEventsFx
    >,
    loading: useStore(fetchTimeExpiredEventsFx.pending),
  }
}

export const useSelectEvents = () => {
  const {
    selectEvents: {$selectedEvents, toggle, selectAll, reset, $areAllEventsSelected},
  } = useManageEventsFeature()

  return {
    selectedEvents: useStore($selectedEvents),
    areAllEventsSelected: useStore($areAllEventsSelected),
    toggle: toggle as RemoveEffector<typeof toggle>,
    selectAll: selectAll as RemoveEffector<typeof selectAll>,
    reset: reset as RemoveEffector<typeof reset>,
  }
}

export const useTimeExpiredEventsGate = () => {
  const {
    timeExpiredEvents: {fetchCurrentTimeExpiredEventsFx},
    reset,
  } = useManageEventsFeature()

  useLayoutEffect(() => {
    fetchCurrentTimeExpiredEventsFx()

    return reset
  }, [fetchCurrentTimeExpiredEventsFx, reset])
}

export const useTimeExpiredEventsModal = () => {
  const {
    modal: {$boardId, openModal, closeModal},
  } = useManageEventsFeature()

  return {
    isOpen: !!useStore($boardId),
    open: openModal as RemoveEffector<typeof openModal>,
    close: closeModal as RemoveEffector<typeof closeModal>,
  }
}

export const useRemoveTimeExpiredEvents = () => {
  const {
    timeExpiredEvents: {removeTimeExpiredEventsFx},
    selectEvents: {$selectedEvents},
  } = useManageEventsFeature()

  const ids = useStore($selectedEvents)

  return {
    removeExpiredEvents: () => removeTimeExpiredEventsFx({ids}),
    loading: useStore(removeTimeExpiredEventsFx.pending),
  }
}
