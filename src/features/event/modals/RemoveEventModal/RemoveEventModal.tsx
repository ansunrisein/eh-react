import React, {useCallback} from 'react'
import {Loader, Modal} from 'rsuite'
import {BaseModalProps, useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {Dialog} from '@eh/react/features/shared/components'
import {useRemoveEvent} from '../../hooks'

export type RemoveEventModalProps = {
  id?: string
  onRemoveEvent?: () => void
  show?: boolean
  onHide?: () => void
} & BaseModalProps

export const RemoveEventModal: React.FC<RemoveEventModalProps> = ({
  id,
  onRemoveEvent,
  show,
  onHide,
}) => {
  const {remove, loading} = useRemoveEvent()

  const {isOpened, close, props} = useModal(RemoveEventModal)

  const closeModal = onHide || close
  const handleEventRemove = onRemoveEvent || props?.onRemoveEvent

  const eventId = id || props?.id

  const onRemove = useCallback(async () => {
    await remove?.({id: eventId as string})
    closeModal()
    handleEventRemove?.()
  }, [handleEventRemove, closeModal, eventId, remove])

  return (
    <Modal show={show ?? isOpened} onHide={closeModal}>
      <Dialog query="You sure you want to remove this event?" onYes={onRemove} onNo={closeModal} />
      {loading && <Loader center backdrop size="md" />}
    </Modal>
  )
}
