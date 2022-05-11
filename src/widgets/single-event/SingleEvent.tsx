import React, {useCallback} from 'react'
import {useBooleanState} from 'use-boolean-state'
import {Empty, Modal} from '@eh/shared/ui'
import {EventFragment, EventView, useRemoveEvent} from '@eh/entities/event'
import {EditEventForm} from '@eh/features/update-event'
import {useSingleEvent} from './model'

export type SingleEventProps = {
  id: EventFragment['_id']
  withEdit?: boolean
  withRemove?: boolean
  onRemove?: () => void
}

export const SingleEvent: React.FC<SingleEventProps> = ({id, withEdit, withRemove, onRemove}) => {
  const [isEditOpened, openEdit, closeEdit] = useBooleanState(false)

  const {event, loading} = useSingleEvent(id)

  const [removingState, removeEvent] = useRemoveEvent()

  const remove = useCallback(async () => {
    await removeEvent({id})
    onRemove?.()
  }, [id, onRemove, removeEvent])

  if (!event && !loading) {
    return <Empty>Not found</Empty>
  }

  return (
    <>
      <EventView
        withEdit={withEdit}
        withRemove={withRemove}
        event={event}
        onRemove={remove}
        onEdit={openEdit}
      />

      <Modal open={isEditOpened} onClose={closeEdit}>
        {event && (
          <EditEventForm event={event} onEdit={closeEdit} loading={removingState.loading} />
        )}
      </Modal>
    </>
  )
}
