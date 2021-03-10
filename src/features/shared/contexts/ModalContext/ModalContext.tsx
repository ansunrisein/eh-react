import {createContext} from 'react'
import noop from 'noop6'
import {ModalContextValue} from './types'

export const ModalContext = createContext<ModalContextValue>({modals: [], open: noop, close: noop})
