import React, {createContext, useContext} from 'react'
import {useAsyncFn} from 'react-use'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {BoardLinkEntity} from './board-link'
import {useBoardLinkQuery, useBoardLinksQuery, usePermissionsQuery} from './operations'

export const BoardLinkEntityContext = createContext<BoardLinkEntity>(
  new Proxy({} as BoardLinkEntity, {
    get() {
      throw new Error('Use BoardLinkEntityProvider!')
    },
  }),
)

export type BoardLinkEntityProviderProps = {
  boardLink: BoardLinkEntity
}

export const BoardLinkEntityProvider: React.FC<BoardLinkEntityProviderProps> = ({
  children,
  boardLink,
}) => (
  <BoardLinkEntityContext.Provider value={boardLink}>{children}</BoardLinkEntityContext.Provider>
)

export const withBoardLinkEntity =
  (providerProps: BoardLinkEntityProviderProps): Hoc =>
  Component =>
  props =>
    (
      <BoardLinkEntityProvider {...providerProps}>
        <Component {...props} />
      </BoardLinkEntityProvider>
    )

export const useBoardLinkEntity = (): BoardLinkEntity => useContext(BoardLinkEntityContext)

export const useBoardLink = (id: string) => {
  const {data, loading} = useBoardLinkQuery({
    variables: {id},
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  })

  return {
    boardLink: data?.boardLink,
    loading,
  }
}

export const useBoardLinks = (boardId: string) => {
  const {data, loading} = useBoardLinksQuery({variables: {boardId}})

  return {
    boardLinks: data?.board?.boardLinks,
    loading,
  }
}

export const useCreateBoardLink = () => {
  const {createBoardLinkFx} = useBoardLinkEntity()

  return useAsyncFn<RemoveEffector<typeof createBoardLinkFx>>(createBoardLinkFx, [
    createBoardLinkFx,
  ])
}

export const useEditBoardLink = () => {
  const {editBoardLinkFx} = useBoardLinkEntity()

  return useAsyncFn<RemoveEffector<typeof editBoardLinkFx>>(editBoardLinkFx, [editBoardLinkFx])
}

export const useRemoveBoardLink = () => {
  const {removeBoardLinkFx} = useBoardLinkEntity()

  return useAsyncFn<RemoveEffector<typeof removeBoardLinkFx>>(removeBoardLinkFx, [
    removeBoardLinkFx,
  ])
}

export const useAvailablePermissions = () => {
  const {data, loading} = usePermissionsQuery()

  return {
    permissions: data?.permissions,
    loading,
  }
}
