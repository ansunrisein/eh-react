import React, {useCallback} from 'react'
import {useBooleanState} from 'use-boolean-state'
import {Empty, Modal} from '@eh/shared/ui'
import {Event, EventView, useEvent, useEventEntity} from '@eh/entities/event'
import {EditEventForm} from '@eh/features/update-event'

export type SingleEventProps = {
  id: Event['id']
  onRemove?: () => void
}

export const SingleEvent: React.FC<SingleEventProps> = ({id, onRemove}) => {
  const [isEditOpened, openEdit, closeEdit] = useBooleanState(false)

  const event = useEvent(id)
  const {removeEvent} = useEventEntity()

  const remove = useCallback(() => {
    removeEvent(id)
    onRemove?.()
  }, [id, onRemove, removeEvent])

  if (!event) {
    return <Empty>Not found</Empty>
  }

  return (
    <>
      <EventView event={event} onRemove={remove} onEdit={openEdit} />

      <Modal open={isEditOpened} onClose={closeEdit}>
        <EditEventForm event={event} onEdit={closeEdit} />
      </Modal>
    </>
  )
}
