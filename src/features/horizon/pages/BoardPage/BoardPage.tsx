import React from 'react'
import {Loader} from 'rsuite'
import {useParams} from 'react-router-dom'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {EventFormModal} from '@eh/react/features/event/modals'
import {Header} from '@eh/react/features/common/components'
import {useBoard} from '../../hooks'
import {Board} from '../../views'

export const BoardPage: React.FC = () => {
  const {id} = useParams<{id: string}>()

  const {open} = useModal(EventFormModal)
  const {board, loading} = useBoard({id})

  if (!board || loading) {
    return <Loader center size="lg" />
  }

  return (
    <>
      <Header />
      <Board board={board} onCreateEventClick={() => open({boardId: id})} />
    </>
  )
}
