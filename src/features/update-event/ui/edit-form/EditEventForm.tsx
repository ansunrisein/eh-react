import React, {useCallback} from 'react'
import {Event, useEventEntity} from '@eh/entities/event'
import {EventForm, EventFormFields} from '../form'

export type EditEventFormProps = {
  event: Event
  onEdit?: () => void
}

export const EditEventForm: React.FC<EditEventFormProps> = ({event, onEdit}) => {
  const {editEvent} = useEventEntity()

  const handleSubmit = useCallback(
    (data: EventFormFields) => {
      editEvent({...event, ...data})
      onEdit?.()
    },
    [editEvent, event, onEdit],
  )

  return <EventForm onSubmit={handleSubmit} defaultValues={event} />
}
