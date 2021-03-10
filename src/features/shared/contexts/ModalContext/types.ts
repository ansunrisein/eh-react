import {ComponentType} from 'react'

export type Modal<P extends BaseModalProps = any> = {
  component: ComponentType<P>
  props?: OwnModalProps<P>
}
export type Modals = Modal[]

export type Open = <P extends BaseModalProps>(
  component: ComponentType<P>,
  props?: OwnModalProps<P>,
) => void
export type Close = (component: ComponentType<any>) => void

export type BaseModalProps = {
  show?: boolean
  onHide?: () => void
}

export type OwnModalProps<P extends BaseModalProps> = Omit<P, keyof BaseModalProps>

export type ModalContextValue = {
  modals: Modals
  open: Open
  close: Close
}
