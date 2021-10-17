import React, {useCallback, useEffect, useState} from 'react'
import {Modal as RSModal, ModalProps as RSModalProps} from 'rsuite'

export type ModalProps = RSModalProps

export const Modal: React.FC<ModalProps> = ({
  children,
  onExited,
  onClose,
  open = false,
  ...props
}) => {
  const [childrenState, setChildrenState] = useState(children)
  const [isClosing, setIsClosing] = useState(false)

  const handleExited = useCallback<Exclude<ModalProps['onExited'], undefined>>(
    node => {
      setIsClosing(false)
      onExited?.(node)
    },
    [onExited],
  )

  const handleClose = useCallback<Exclude<ModalProps['onClose'], undefined>>(
    node => {
      setIsClosing(true)
      onClose?.(node)
    },
    [onClose],
  )

  useEffect(() => setIsClosing(!open), [open])

  useEffect(() => {
    if (!isClosing) {
      setChildrenState(children)
    }
  }, [children, isClosing, setChildrenState])

  return (
    <RSModal open={open} onClose={handleClose} onExited={handleExited} {...props}>
      {childrenState}
    </RSModal>
  )
}
