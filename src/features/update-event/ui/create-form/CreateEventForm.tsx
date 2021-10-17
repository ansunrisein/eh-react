import React, {useCallback} from 'react'
import {useEventEntity} from '@eh/entities/event'
import {EventForm, EventFormFields} from '../form'

export type CreateEventFormProps = {
  onCreate?: () => void
}

export const CreateEventForm: React.FC<CreateEventFormProps> = ({onCreate}) => {
  const {createEvent} = useEventEntity()

  const handleSubmit = useCallback(
    (data: EventFormFields) => {
      createEvent(data)
      onCreate?.()
    },
    [createEvent, onCreate],
  )

  return <EventForm onSubmit={handleSubmit} />
}
