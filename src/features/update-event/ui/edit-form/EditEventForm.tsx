import React, {useCallback} from 'react'
import {Event, useEditEvent} from '@eh/entities/event'
import {EventForm, EventFormFields, EventFormProps} from '../form'

export type EditEventFormProps = {
  event: Event
  onEdit?: () => void
} & Omit<EventFormProps, 'onSubmit' | 'defaultValues'>

export const EditEventForm: React.FC<EditEventFormProps> = ({event, onEdit, ...props}) => {
  const editEvent = useEditEvent()

  const handleSubmit = useCallback(
    (data: EventFormFields) => {
      editEvent({...event, ...data})
      onEdit?.()
    },
    [editEvent, event, onEdit],
  )

  return <EventForm onSubmit={handleSubmit} defaultValues={event} {...props} />
}
