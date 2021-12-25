import React, {useCallback} from 'react'
import {Loader} from 'rsuite'
import {useBooleanState} from 'use-boolean-state'
import {Empty, Modal} from '@eh/shared/ui'
import {EventFragment, EventView, useEvent, useRemoveEvent} from '@eh/entities/event'
import {EditEventForm} from '@eh/features/update-event'

export type SingleEventProps = {
  id: EventFragment['_id']
  onRemove?: () => void
}

export const SingleEvent: React.FC<SingleEventProps> = ({id, onRemove}) => {
  const [isEditOpened, openEdit, closeEdit] = useBooleanState(false)

  const {event, loading} = useEvent(id)

  const [removingState, removeEvent] = useRemoveEvent()

  const remove = useCallback(async () => {
    await removeEvent({id})
    onRemove?.()
  }, [id, onRemove, removeEvent])

  if (loading) {
    return <Loader backdrop center size="lg" />
  }

  if (!event) {
    return <Empty>Not found</Empty>
  }

  return (
    <>
      <EventView event={event} onRemove={remove} onEdit={openEdit} />

      <Modal open={isEditOpened} onClose={closeEdit}>
        <EditEventForm event={event} onEdit={closeEdit} loading={removingState.loading} />
      </Modal>
    </>
  )
}
