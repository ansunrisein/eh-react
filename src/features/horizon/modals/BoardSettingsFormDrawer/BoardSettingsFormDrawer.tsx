import React, {useCallback} from 'react'
import {Drawer, Loader} from 'rsuite'
import {BaseModalProps, useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {UpdateBoardVariables} from '../../graphql/types/UpdateBoard'
import {useBoard, useUpdateBoard} from '../../hooks'
import {BoardSettingsForm} from '../../components'

export type BoardSettingsFormDrawerProps = {
  id?: string
  onBoardRemove?: (id: string) => Promise<unknown>
} & BaseModalProps

export const BoardSettingsFormDrawer: React.FC<BoardSettingsFormDrawerProps> = ({
  id,
  onBoardRemove,
  show,
  onHide,
}) => {
  const {isOpened, close, props} = useModal(BoardSettingsFormDrawer)

  const boardId = id ?? props?.id

  const {board} = useBoard({_id: boardId as string})
  const {update, loading} = useUpdateBoard({onCompleted: onHide || close})

  const updateBoard = useCallback(
    (newBoard: UpdateBoardVariables) => update({...board, ...newBoard}),
    [board, update],
  )

  return (
    <Drawer show={show ?? isOpened} onHide={onHide || close} backdrop size="xs">
      <Drawer.Header>
        <Drawer.Title>Settings</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        {loading || !board ? (
          <Loader center backdrop size="md" />
        ) : (
          <BoardSettingsForm
            onBoardUpdate={updateBoard}
            onBoardRemove={onBoardRemove ?? props?.onBoardRemove}
            board={board}
          />
        )}
      </Drawer.Body>
    </Drawer>
  )
}
