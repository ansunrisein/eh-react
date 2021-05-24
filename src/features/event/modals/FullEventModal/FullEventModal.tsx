import React from 'react'
import {Loader, Modal} from 'rsuite'
import {useQuery} from '@apollo/client'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {UpdateEventFormModal} from '@eh/react/features/event/modals'
import {Event, EventVariables} from '../../graphql/types/Event'
import {EVENT} from '../../graphql'
import {FullEventCard} from '../../components'

export type FullEventModalProps = {
  id?: string
  show?: boolean
  onHide?: () => void
}

export const FullEventModal: React.FC<FullEventModalProps> = ({id, show, onHide}) => {
  const {isOpened, close, props} = useModal(FullEventModal)

  const {open: openUpdateEventForm} = useModal(UpdateEventFormModal)

  const eventId = id ?? props?.id

  const {data, loading} = useQuery<Event, EventVariables>(EVENT, {
    variables: {id: eventId as string},
    skip: !eventId,
  })

  return (
    <Modal show={show ?? isOpened} onHide={onHide || close}>
      {data?.event && (
        <FullEventCard
          event={data.event}
          onUpdateEvent={() => openUpdateEventForm({id: eventId})}
        />
      )}
      {loading && <Loader center backdrop size="md" />}
    </Modal>
  )
}
