import React, {createContext, useContext, useEffect} from 'react'
import {useStore} from 'effector-react'
import {Hoc} from '@eh/shared/types'
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
  const {fetchBoardTagsFx, $boardTags, reset} = useBoardTagsEntity()

  const boardTags = useStore($boardTags)
  const loading = useStore(fetchBoardTagsFx.pending)

  useEffect(() => {
    fetchBoardTagsFx()

    return reset
  }, [fetchBoardTagsFx, reset])

  return {
    boardTags,
    loading,
  }
}
