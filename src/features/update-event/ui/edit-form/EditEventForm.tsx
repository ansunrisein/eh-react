import React, {useCallback} from 'react'
import {EventFragment} from '@eh/shared/api'
import {useEditEvent} from '@eh/entities/event'
import {EventForm, EventFormFields, EventFormProps} from '../form'

export type EditEventFormProps = {
  event: EventFragment
  onEdit?: () => void
} & Omit<EventFormProps, 'onSubmit' | 'defaultValues'>

export const EditEventForm: React.FC<EditEventFormProps> = ({event, onEdit, loading, ...props}) => {
  const [editingState, editEvent] = useEditEvent()

  const handleSubmit = useCallback(
    async (data: EventFormFields) => {
      await editEvent({id: event._id, ...event, ...data})
      onEdit?.()
    },
    [editEvent, event, onEdit],
  )

  return (
    <EventForm
      onSubmit={handleSubmit}
      loading={loading || editingState.loading}
      defaultValues={event}
      {...props}
    />
  )
}
