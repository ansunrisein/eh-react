import React, {useCallback, useState} from 'react'
import {Close, ModalContextValue, Modals, Open} from './types'
import {ModalContext} from './ModalContext'

export const ModalProvider: React.FC = ({children}) => {
  const [modals, setModals] = useState<Modals>([])

  const open = useCallback<Open>(
    (component, props) => setModals(modals => modals.concat({component, props})),
    [],
  )

  const close = useCallback<Close>(
    component => setModals(modals => modals.filter(modal => modal.component !== component)),
    [],
  )

  const value: ModalContextValue = {
    modals,
    open,
    close,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
