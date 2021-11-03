import React, {useCallback} from 'react'
import {useCreateEventInBoard} from '../../model'
import {EventForm, EventFormFields, EventFormProps} from '../form'

export type CreateEventFormProps = {
  boardId: string
  onCreate?: () => void
} & Omit<EventFormProps, 'onSubmit'>

export const CreateEventForm: React.FC<CreateEventFormProps> = ({boardId, onCreate, ...props}) => {
  const createEvent = useCreateEventInBoard()

  const handleSubmit = useCallback(
    (event: EventFormFields) => {
      createEvent({boardId, event})
      onCreate?.()
    },
    [boardId, createEvent, onCreate],
  )

  return <EventForm onSubmit={handleSubmit} {...props} />
}
