import React, {useCallback} from 'react'
import {Loader, Modal} from 'rsuite'
import {useQuery} from '@apollo/client'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {EVENT} from '@eh/react/features/event/graphql'
import {Event, EventVariables} from '@eh/react/features/event/graphql/types/Event'
import {EventForm} from '../../components'
import {useUpdateEvent} from '../../hooks'
import {UpdateEventVariables} from '../../graphql/types/UpdateEvent'

export type UpdateEventFormModalProps = {
  id?: string
  show?: boolean
  onHide?: () => void
}

export const UpdateEventFormModal: React.FC<UpdateEventFormModalProps> = ({id, show, onHide}) => {
  const {isOpened, close, props} = useModal(UpdateEventFormModal)

  const eventId = id ?? props?.id

  const {data} = useQuery<Event, EventVariables>(EVENT, {
    variables: {id: eventId as string},
    skip: !eventId,
  })

  const {update, loading} = useUpdateEvent({onCompleted: onHide || close})

  const handleSubmit = useCallback(
    (event: Omit<UpdateEventVariables, 'id'>) => eventId && update({...event, id: eventId}),
    [eventId, update],
  )

  return (
    <Modal show={show ?? isOpened} onHide={onHide || close}>
      {data?.event && <EventForm onSubmit={handleSubmit} defaultValues={data.event} />}
      {loading && <Loader center backdrop size="md" />}
    </Modal>
  )
}
