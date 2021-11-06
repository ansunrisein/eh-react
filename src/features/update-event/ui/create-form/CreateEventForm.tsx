import React, {useCallback} from 'react'
import {useCreateEvent} from '@eh/entities/event'
import {EventForm, EventFormFields, EventFormProps} from '../form'

export type CreateEventFormProps = {
  boardId: string
  onCreate?: () => void
} & Omit<EventFormProps, 'onSubmit'>

export const CreateEventForm: React.FC<CreateEventFormProps> = ({
  boardId,
  onCreate,
  loading,
  ...props
}) => {
  const [creatingState, createEvent] = useCreateEvent()

  const handleSubmit = useCallback(
    async (event: EventFormFields) => {
      await createEvent({boardId, ...event})
      onCreate?.()
    },
    [boardId, createEvent, onCreate],
  )

  return <EventForm onSubmit={handleSubmit} loading={loading || creatingState.loading} {...props} />
}
