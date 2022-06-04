import React from 'react'
import {Button, ButtonProps, ButtonToolbar} from 'rsuite'
import {Modal, ModalProps} from '../modal'
import S from './DialogModal.module.scss'

export type DialogModalProps = {
  question: React.ReactNode
  accept: React.ReactNode
  decline: React.ReactNode
  onAccept?: () => void
  onDecline?: () => void
  acceptLoading?: boolean
  declineLoading?: boolean
  acceptButtonProps?: Omit<ButtonProps, 'onClick'>
  declineButtonProps?: Omit<ButtonProps, 'onClick'>
} & ModalProps

export const DialogModal: React.FC<DialogModalProps> = ({
  question,
  accept,
  decline,
  onAccept,
  onDecline,
  acceptLoading,
  declineLoading,
  acceptButtonProps,
  declineButtonProps,
  ...props
}) => {
  return (
    <Modal {...props}>
      <p className={S.question}>{question}</p>

      <ButtonToolbar className={S.buttons}>
        <Button
          onClick={onDecline}
          loading={declineLoading}
          disabled={declineLoading}
          {...declineButtonProps}
        >
          {decline}
        </Button>

        <Button
          onClick={onAccept}
          loading={acceptLoading}
          disabled={acceptLoading}
          appearance="primary"
          {...acceptButtonProps}
        >
          {accept}
        </Button>
      </ButtonToolbar>
    </Modal>
  )
}
