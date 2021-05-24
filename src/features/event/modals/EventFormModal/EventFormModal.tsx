import React, {useCallback} from 'react'
import {Loader, Modal} from 'rsuite'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {useCreateEvent} from '../../hooks'
import {EventForm} from '../../components'

export type EventFormModalProps = {
  boardId?: string
  show?: boolean
  onHide?: () => void
}

export const EventFormModal: React.FC<EventFormModalProps> = ({boardId, show, onHide}) => {
  const {isOpened, close, props} = useModal(EventFormModal)

  const id = boardId ?? props?.boardId

  const {create, loading} = useCreateEvent({onCompleted: onHide || close})

  const handleSubmit = useCallback(data => create({...data, boardId: id}), [create, id])

  return (
    <Modal show={show ?? isOpened} onHide={onHide || close} backdrop>
      <EventForm onSubmit={handleSubmit} />
      {loading && <Loader center backdrop size="md" />}
    </Modal>
  )
}
