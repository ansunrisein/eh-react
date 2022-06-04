import React, {createContext, useContext} from 'react'
import {useStore} from 'effector-react'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {LeaveBoardFeature} from './leave-board'

export const LeaveBoardFeatureContext = createContext<LeaveBoardFeature>(
  new Proxy({} as LeaveBoardFeature, {
    get() {
      throw new Error('Use LeaveBoardFeatureProvider!')
    },
  }),
)

export type LeaveBoardFeatureProviderProps = {
  leaveBoard: LeaveBoardFeature
}

export const LeaveBoardFeatureProvider: React.FC<LeaveBoardFeatureProviderProps> = ({
  children,
  leaveBoard,
}) => (
  <LeaveBoardFeatureContext.Provider value={leaveBoard}>
    {children}
  </LeaveBoardFeatureContext.Provider>
)

export const withLeaveBoardFeature =
  (providerProps: LeaveBoardFeatureProviderProps): Hoc =>
  Component =>
  props =>
    (
      <LeaveBoardFeatureProvider {...providerProps}>
        <Component {...props} />
      </LeaveBoardFeatureProvider>
    )

export const useLeaveBoardFeature = (): LeaveBoardFeature => useContext(LeaveBoardFeatureContext)

export const useLeaveBoard = () => {
  const {leaveBoardFx} = useLeaveBoardFeature()

  return {
    leave: leaveBoardFx as RemoveEffector<typeof leaveBoardFx>,
    loading: useStore(leaveBoardFx.pending),
  }
}
