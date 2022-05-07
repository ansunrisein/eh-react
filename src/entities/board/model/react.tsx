import React, {createContext, useContext, useEffect, useMemo} from 'react'
import {useEvent, useStore} from 'effector-react'
import {useAsyncFn} from 'react-use'
import {Board, Permission} from '@eh/shared/api'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {useBoardQuery} from '../api'
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

export const useBoard = (id: string) => {
  const {data, loading} = useBoardQuery({variables: {id}})

  return {
    board: data?.board,
    loading,
  }
}

export const useNewBoards = () => {
  const {$newBoards} = useBoardEntity()

  return useStore($newBoards)
}

export const usePermissions = (board: Partial<Pick<Board, 'permissions'>> | undefined | null) =>
  useMemo(() => {
    const permissions = board?.permissions || []

    return {
      canCreateEvent: permissions.includes(Permission.CREATE_EVENT),
      canUpdateEvent: permissions.includes(Permission.UPDATE_EVENT),
      canRemoveEvent: permissions.includes(Permission.REMOVE_EVENT),
      canUpdateBoard:
        permissions.includes(Permission.UPDATE_BOARD_DESCRIPTION) &&
        permissions.includes(Permission.UPDATE_BOARD_VISIBILITY),
      canViewSettings: [
        Permission.UPDATE_BOARD_DESCRIPTION,
        Permission.UPDATE_BOARD_VISIBILITY,
        Permission.REMOVE_BOARD,
        Permission.VIEW_BOARD_LINK,
        Permission.UPDATE_BOARD_LINK,
        Permission.REMOVE_BOARD_LINK,
      ].some(perm => permissions.includes(perm)),
      canUpdateDescription: permissions.includes(Permission.UPDATE_BOARD_DESCRIPTION),
      canUpdateVisibility: permissions.includes(Permission.UPDATE_BOARD_VISIBILITY),
      canRemove: permissions.includes(Permission.REMOVE_BOARD),
      canViewLinks: permissions.includes(Permission.VIEW_BOARD_LINK),
      canCreateLink: permissions.includes(Permission.CREATE_BOARD_LINK),
      canUpdateLink: permissions.includes(Permission.UPDATE_BOARD_LINK),
      canRemoveLink: permissions.includes(Permission.REMOVE_BOARD_LINK),
    }
  }, [board?.permissions])

export const useCreateBoard = () => {
  const {createBoardFx} = useBoardEntity()

  return useAsyncFn<RemoveEffector<typeof createBoardFx>>(createBoardFx, [createBoardFx])
}

export const useEditDescriptionBoard = () => {
  const {editBoardDescriptionFx} = useBoardEntity()

  return useAsyncFn<RemoveEffector<typeof editBoardDescriptionFx>>(editBoardDescriptionFx, [
    editBoardDescriptionFx,
  ])
}

export const useEditBoardTags = () => {
  const {editBoardTagsFx} = useBoardEntity()

  return useAsyncFn<RemoveEffector<typeof editBoardTagsFx>>(editBoardTagsFx, [editBoardTagsFx])
}

export const useEditVisibilityBoard = () => {
  const {editBoardVisibilityFx} = useBoardEntity()

  return useAsyncFn<RemoveEffector<typeof editBoardVisibilityFx>>(editBoardVisibilityFx, [
    editBoardVisibilityFx,
  ])
}

export const useRemoveBoard = () => {
  const {removeBoardFx} = useBoardEntity()

  return useAsyncFn<RemoveEffector<typeof removeBoardFx>>(removeBoardFx, [removeBoardFx])
}

export const useResetNewBoards = () => {
  const {resetNewBoards} = useBoardEntity()

  return useEvent(resetNewBoards)
}

export const useNewBoardsGate = () => {
  const {resetNewBoards} = useBoardEntity()

  useEffect(() => {
    resetNewBoards()

    return resetNewBoards
  }, [resetNewBoards])
}
