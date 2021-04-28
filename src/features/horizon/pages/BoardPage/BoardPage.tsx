import React from 'react'
import {Loader} from 'rsuite'
import {useParams} from 'react-router-dom'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {EventFormModal} from '@eh/react/features/event/modals'
import {PageTemplate} from '@eh/react/features/shared/templates'
import {useBoard} from '../../hooks'
import {Board} from '../../views'

export const BoardPage: React.FC = () => {
  const {id} = useParams<{id: string}>()

  const {open} = useModal(EventFormModal)
  const {board, loading} = useBoard({_id: id})

  if (!board || loading) {
    return <Loader center size="lg" />
  }

  return (
    <PageTemplate>
      <Board board={board} onCreateEventClick={() => open({boardId: id})} />
    </PageTemplate>
  )
}
