import React, {useCallback} from 'react'
import {Loader} from 'rsuite'
import {useHistory, useParams} from 'react-router-dom'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {EventFormModal, FullEventModal} from '@eh/react/features/event/modals'
import {PageTemplate} from '@eh/react/features/shared/templates'
import {UpdateBoardVariables} from '../../graphql/types/UpdateBoard'
import {BoardSettingsFormDrawer} from '../../modals'
import {useBoard, useRemoveBoard, useUpdateBoard} from '../../hooks'
import {Board} from '../../views'

export const BoardPage: React.FC = () => {
  const {id} = useParams<{id: string}>()
  const history = useHistory()

  const {board, loading} = useBoard({_id: id})
  // TODO: loading for change pin and fav states
  const {update} = useUpdateBoard()
  const {remove} = useRemoveBoard()

  const {open: openEventForm} = useModal(EventFormModal)
  const {open: openFullEvent} = useModal(FullEventModal)
  const {open: openBoardSettings, close} = useModal(BoardSettingsFormDrawer)

  const onFavClick = useCallback(
    (newBoard: UpdateBoardVariables) => update({...(board as any), favorite: !newBoard.favorite}),
    [board, update],
  )

  const onPinClick = useCallback(
    (newBoard: UpdateBoardVariables) => update({...(board as any), pinned: !newBoard.pinned}),
    [board, update],
  )

  const onEventClick = useCallback((id: string) => openFullEvent({id}), [openFullEvent])

  const onBoardRemove = useCallback(
    async (id: string) => {
      await remove({_id: id})
      close()
      history.push('/horizon')
    },
    [close, history, remove],
  )

  if (!board || loading) {
    return <Loader center size="lg" />
  }

  return (
    <PageTemplate>
      <Board
        board={board}
        onCreateEventClick={() => openEventForm({boardId: id})}
        onEventClick={onEventClick}
        onNavIconClick={() => openBoardSettings({id, onBoardRemove})}
        onBoardFavClick={onFavClick}
        onBoardPinClick={onPinClick}
      />
    </PageTemplate>
  )
}
