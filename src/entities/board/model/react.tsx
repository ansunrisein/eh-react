import React, {createContext, useContext} from 'react'
import {useStore} from 'effector-react'
import {Hoc} from '@eh/shared/types'
import {Board} from '../types'
import {BoardEntity} from './board'

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

export const useBoards = (): Board[] => {
  const {$boards} = useBoardEntity()
  return useStore($boards)
}

export const useBoard = (id: string): Board | undefined => {
  const events = useBoards()
  return events.find(e => e.id === id)
}

export const useCreateBoard = () => useBoardEntity().createBoard
