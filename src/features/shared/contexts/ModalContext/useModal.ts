import {ComponentType, useCallback, useContext, useMemo} from 'react'
import {BaseModalProps, OwnModalProps} from './types'
import {ModalContext} from './ModalContext'

export type UseModalResult<P extends BaseModalProps> = {
  open: (props?: OwnModalProps<P>) => void
  close: () => void
  isOpened: boolean
  props?: OwnModalProps<P>
}

export const useModal = <P extends BaseModalProps>(
  component: ComponentType<P>,
): UseModalResult<P> => {
  const {modals, open, close} = useContext(ModalContext)

  const openModal = useCallback((props?: OwnModalProps<P>) => open(component, props), [
    component,
    open,
  ])
  const closeModal = useCallback(() => close(component), [component, close])

  const modal = useMemo(() => {
    return modals.find(modal => modal.component === component)
  }, [component, modals])

  return {
    open: openModal,
    close: closeModal,
    isOpened: !!modal,
    props: modal?.props,
  }
}
