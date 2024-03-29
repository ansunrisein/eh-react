import React, {useCallback, useEffect, useState} from 'react'
import cx from 'classnames'
import {useMedia} from 'react-use'
import {Drawer, Modal as RSModal, ModalProps as RSModalProps} from 'rsuite'
import S from './Modal.module.scss'

export type ModalProps = RSModalProps

export const Modal: React.FC<ModalProps> = ({
  children,
  onExited,
  onClose,
  open = false,
  className,
  full,
  ...props
}) => {
  const [childrenState, setChildrenState] = useState(children)
  const [isClosing, setIsClosing] = useState(false)

  const isTablet = useMedia('(min-width: 768px)')
  const Wrapper = isTablet ? RSModal : Drawer

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
    <Wrapper
      placement="bottom"
      open={open}
      onClose={handleClose}
      onExited={handleExited}
      className={cx(!isTablet && S.drawer, className)}
      full={!isTablet && full}
      {...props}
    >
      {childrenState}
    </Wrapper>
  )
}
