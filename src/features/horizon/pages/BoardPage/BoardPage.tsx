import React, {useCallback} from 'react'
import {Loader} from 'rsuite'
import {useParams} from 'react-router-dom'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {EventFormModal} from '@eh/react/features/event/modals'
import {PageTemplate} from '@eh/react/features/shared/templates'
import {UpdateBoardVariables} from '@eh/react/features/horizon/graphql/types/UpdateBoard'
import {useBoard, useUpdateBoard} from '../../hooks'
import {Board} from '../../views'

export const BoardPage: React.FC = () => {
  const {id} = useParams<{id: string}>()

  const {board, loading} = useBoard({_id: id})
  // TODO: loading for change pin and fav states
  const {update} = useUpdateBoard()

  const {open} = useModal(EventFormModal)

  const onFavClick = useCallback(
    (newBoard: UpdateBoardVariables) => update({...(board as any), favorite: !newBoard.favorite}),
    [board, update],
  )

  const onPinClick = useCallback(
    (newBoard: UpdateBoardVariables) => update({...(board as any), pinned: !newBoard.pinned}),
    [board, update],
  )

  if (!board || loading) {
    return <Loader center size="lg" />
  }

  return (
    <PageTemplate>
      <Board
        board={board}
        onCreateEventClick={() => open({boardId: id})}
        onBoardFavClick={onFavClick}
        onBoardPinClick={onPinClick}
      />
    </PageTemplate>
  )
}
