import React, {createContext, useContext} from 'react'
import {Hoc} from '@eh/shared/types'
import {useBoardTagsQuery} from '../api'
import {BoardTagsEntity} from './board-tags'

export const BoardTagsEntityContext = createContext<BoardTagsEntity>(
  new Proxy({} as BoardTagsEntity, {
    get() {
      throw new Error('Use BoardTagsEntityProvider!')
    },
  }),
)

export type BoardTagsEntityProviderProps = {
  boardTags: BoardTagsEntity
}

export const BoardTagsEntityProvider: React.FC<BoardTagsEntityProviderProps> = ({
  children,
  boardTags,
}) => (
  <BoardTagsEntityContext.Provider value={boardTags}>{children}</BoardTagsEntityContext.Provider>
)

export const withBoardTagsEntity =
  (providerProps: BoardTagsEntityProviderProps): Hoc =>
  Component =>
  props =>
    (
      <BoardTagsEntityProvider {...providerProps}>
        <Component {...props} />
      </BoardTagsEntityProvider>
    )

export const useBoardTagsEntity = (): BoardTagsEntity => useContext(BoardTagsEntityContext)

export const useBoardTags = () => {
  const {data, loading} = useBoardTagsQuery()

  return {
    boardTags: data?.boardTags,
    loading,
  }
}
