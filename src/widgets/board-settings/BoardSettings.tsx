import React from 'react'
import {Button, Divider, Loader} from 'rsuite'
import {BoardFragment} from '@eh/shared/api'
import {useBoard, useRemoveBoard} from '@eh/entities/board'
import {EditBoardForm} from '@eh/features/update-board'
import S from './BoardSettings.module.scss'

export type BoardSettingsProps = {
  id: BoardFragment['_id']
  onRemove?: () => void
}

export const BoardSettings: React.FC<BoardSettingsProps> = ({id, onRemove}) => {
  const {board, loading} = useBoard(id)

  const [removingState, remove] = useRemoveBoard()

  const handleRemove = async () => {
    if (board) {
      await remove({id: board._id})
      onRemove?.()
    }
  }

  return (
    <div>
      {board && (
        <div className={S.container}>
          <EditBoardForm board={board} />

          <Divider />

          <Button onClick={handleRemove} appearance="primary" color="red">
            Remove board
          </Button>
        </div>
      )}
      {(loading || removingState.loading) && <Loader backdrop center size="lg" />}
    </div>
  )
}
