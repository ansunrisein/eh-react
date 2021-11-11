import {PartialPath} from 'history'
import {NavigateOptions} from 'react-router'
import {useNavigate as useRouterNavigate} from 'react-router-dom'
import {Paths} from './types'

type To = Paths | (PartialPath & {pathname?: Paths})

export type NavigateFunction = {
  (to: To, options?: NavigateOptions): void
  (delta: number): void
}

export const useNavigate: () => NavigateFunction = useRouterNavigate
