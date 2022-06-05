import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Button, Divider, Loader, Stack, Tag} from 'rsuite'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {
  BoardFragment,
  isBoardOwner,
  useBoard,
  usePermissions,
  useRemoveBoard,
} from '@eh/entities/board'
import {useUser} from '@eh/entities/user'
import {ParticipantsManager} from '@eh/features/manage-board-participants'
import {EventManager} from '@eh/features/manage-events'
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
  const {canRemove, canCreateLink, canRemoveEvent, canUpdateLink, canViewLinks, canRemoveLink} =
    usePermissions(board)
  const {user} = useUser()
  const isMyBoard = isBoardOwner(user, board)

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

          {isMyBoard ? (
            <EditBoardTags board={board} />
          ) : (
            <Stack>
              {board.tags?.map(tag => (
                <Tag key={tag._id} color="violet">
                  {tag.name}
                </Tag>
              ))}
            </Stack>
          )}

          {(canCreateLink || canRemoveLink || canUpdateLink || canViewLinks) && (
            <>
              <Divider />

              <BoardLinks board={board} />
            </>
          )}

          <Divider />

          <ParticipantsManager board={board} />

          {canRemoveEvent && (
            <>
              <Divider />

              <EventManager board={board} />
            </>
          )}

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
