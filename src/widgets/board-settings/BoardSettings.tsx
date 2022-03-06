import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Button, Divider, Loader} from 'rsuite'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {BoardFragment, useBoard, usePermissions, useRemoveBoard} from '@eh/entities/board'
import {EditBoardForm} from '@eh/features/update-board'
import {EditBoardTags} from '@eh/features/update-board-tags'
import {texts} from './texts'
import {BoardLinks} from './ui'
import S from './BoardSettings.module.scss'

export type BoardSettingsProps = {
  id: BoardFragment['_id']
  onRemove?: () => void
}

export const BoardSettings: React.FC<BoardSettingsProps> = withModuleLocalization(
  'board-settings-widget',
)(({id, onRemove}) => {
  const {board, loading} = useBoard(id)
  const {canRemove} = usePermissions(board)

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

          <BoardLinks board={board} />

          <Divider />

          <EditBoardTags board={board} />

          <Divider />

          <Button onClick={handleRemove} disabled={!canRemove} appearance="primary" color="red">
            <FormattedMessage {...texts.removeBoard} />
          </Button>
        </div>
      )}
      {(loading || removingState.loading) && <Loader backdrop center size="lg" />}
    </div>
  )
})
