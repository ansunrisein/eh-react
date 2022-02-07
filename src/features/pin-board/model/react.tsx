import React, {createContext, useCallback, useContext} from 'react'
import {useAsyncFn} from 'react-use'
import {Board} from '@eh/shared/api'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {PinBoardFeature} from './pin-board'

export const PinBoardFeatureContext = createContext<PinBoardFeature>(
  new Proxy({} as PinBoardFeature, {
    get() {
      throw new Error('Use PinBoardFeatureProvider!')
    },
  }),
)

export type PinBoardFeatureProviderProps = {
  pinBoard: PinBoardFeature
}

export const PinBoardFeatureProvider: React.FC<PinBoardFeatureProviderProps> = ({
  children,
  pinBoard,
}) => <PinBoardFeatureContext.Provider value={pinBoard}>{children}</PinBoardFeatureContext.Provider>

export const withPinBoardFeature =
  (providerProps: PinBoardFeatureProviderProps): Hoc =>
  Component =>
  props =>
    (
      <PinBoardFeatureProvider {...providerProps}>
        <Component {...props} />
      </PinBoardFeatureProvider>
    )

export const usePinBoardFeature = (): PinBoardFeature => useContext(PinBoardFeatureContext)

export const useMarkBoardAsPin = () => {
  const {markBoardAsPinFx} = usePinBoardFeature()

  return useAsyncFn<RemoveEffector<typeof markBoardAsPinFx>>(markBoardAsPinFx, [markBoardAsPinFx])
}

export const useUnmarkBoardAsPin = () => {
  const {unmarkBoardAsPinFx} = usePinBoardFeature()

  return useAsyncFn<RemoveEffector<typeof unmarkBoardAsPinFx>>(unmarkBoardAsPinFx, [
    unmarkBoardAsPinFx,
  ])
}

export const useToggleIsPin = (board: Pick<Board, '_id' | 'isPin'> | undefined) => {
  const [markingState, mark] = useMarkBoardAsPin()
  const [unmarkingState, unmark] = useUnmarkBoardAsPin()

  const toggle = useCallback(async () => {
    if (board) {
      await (board.isPin ? unmark : mark)({board: {_id: board._id}})
    }
  }, [mark, board, unmark])

  return {
    toggle,
    loading: markingState.loading || unmarkingState.loading,
  }
}
