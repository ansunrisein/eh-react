import React, {useCallback} from 'react'
import {Loader} from 'rsuite'
import {useParams} from 'react-router-dom'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {EventFormModal, FullEventModal} from '@eh/react/features/event/modals'
import {PageTemplate} from '@eh/react/features/shared/templates'
import {UpdateBoardVariables} from '../../graphql/types/UpdateBoard'
import {BoardSettingsFormDrawer} from '../../modals'
import {useBoard, useUpdateBoard} from '../../hooks'
import {Board} from '../../views'

export const BoardPage: React.FC = () => {
  const {id} = useParams<{id: string}>()

  const {board, loading} = useBoard({_id: id})
  // TODO: loading for change pin and fav states
  const {update} = useUpdateBoard()

  const {open: openEventForm} = useModal(EventFormModal)
  const {open: openFullEvent} = useModal(FullEventModal)
  const {open: openBoardSettings} = useModal(BoardSettingsFormDrawer)

  const onFavClick = useCallback(
    (newBoard: UpdateBoardVariables) => update({...(board as any), favorite: !newBoard.favorite}),
    [board, update],
  )

  const onPinClick = useCallback(
    (newBoard: UpdateBoardVariables) => update({...(board as any), pinned: !newBoard.pinned}),
    [board, update],
  )

  const onEventClick = useCallback((id: string) => openFullEvent({id}), [openFullEvent])

  if (!board || loading) {
    return <Loader center size="lg" />
  }

  return (
    <PageTemplate>
      <Board
        board={board}
        onCreateEventClick={() => openEventForm({boardId: id})}
        onEventClick={onEventClick}
        onNavIconClick={() => openBoardSettings({id})}
        onBoardFavClick={onFavClick}
        onBoardPinClick={onPinClick}
      />
    </PageTemplate>
  )
}
