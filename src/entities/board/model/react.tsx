import React, {createContext, useContext} from 'react'
import {useAsyncFn} from 'react-use'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {BoardEntity} from './board'
import {useBoardQuery} from './operations'

export const BoardEntityContext = createContext<BoardEntity>(
  new Proxy({} as BoardEntity, {
    get() {
      throw new Error('Use BoardEntityProvider!')
    },
  }),
)

export type BoardEntityProviderProps = {
  board: BoardEntity
}

export const BoardEntityProvider: React.FC<BoardEntityProviderProps> = ({children, board}) => (
  <BoardEntityContext.Provider value={board}>{children}</BoardEntityContext.Provider>
)

export const withBoardEntity =
  (providerProps: BoardEntityProviderProps): Hoc =>
  Component =>
  props =>
    (
      <BoardEntityProvider {...providerProps}>
        <Component {...props} />
      </BoardEntityProvider>
    )

export const useBoardEntity = (): BoardEntity => useContext(BoardEntityContext)

export const useBoard = (id: string) => {
  const {data, loading} = useBoardQuery({variables: {id}})

  return {
    board: data?.board,
    loading,
  }
}

export const useCreateBoard = () => {
  const {createBoardFx} = useBoardEntity()

  return useAsyncFn<RemoveEffector<typeof createBoardFx>>(createBoardFx, [createBoardFx])
}

export const useRemoveBoard = () => {
  const {removeBoardFx} = useBoardEntity()

  return useAsyncFn<RemoveEffector<typeof removeBoardFx>>(removeBoardFx, [removeBoardFx])
}
