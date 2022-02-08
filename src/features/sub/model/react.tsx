import React, {createContext, useCallback, useContext} from 'react'
import {useAsyncFn} from 'react-use'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {SubFeature} from './sub'

export const SubFeatureContext = createContext<SubFeature>(
  new Proxy({} as SubFeature, {
    get() {
      throw new Error('Use SubFeatureProvider!')
    },
  }),
)

export type SubFeatureProviderProps = {
  sub: SubFeature
}

export const SubFeatureProvider: React.FC<SubFeatureProviderProps> = ({children, sub}) => (
  <SubFeatureContext.Provider value={sub}>{children}</SubFeatureContext.Provider>
)

export const withSubFeature =
  (providerProps: SubFeatureProviderProps): Hoc =>
  Component =>
  props =>
    (
      <SubFeatureProvider {...providerProps}>
        <Component {...props} />
      </SubFeatureProvider>
    )

export const useSubFeature = (): SubFeature => useContext(SubFeatureContext)

export const useCreateSub = () => {
  const {createSubFx} = useSubFeature()

  return useAsyncFn<RemoveEffector<typeof createSubFx>>(createSubFx, [createSubFx])
}

export const useRemoveSub = () => {
  const {removeSubFx} = useSubFeature()

  return useAsyncFn<RemoveEffector<typeof removeSubFx>>(removeSubFx, [removeSubFx])
}

export const useToggleSub = ({boardId, isFollow}: {boardId: string; isFollow?: boolean}) => {
  const [createSubState, createSub] = useCreateSub()
  const [removeSubState, removeSub] = useRemoveSub()

  const toggle = useCallback(async () => {
    await (isFollow ? removeSub : createSub)({boardId})
  }, [boardId, createSub, isFollow, removeSub])

  return {
    loading: createSubState.loading || removeSubState.loading,
    toggle,
  }
}
