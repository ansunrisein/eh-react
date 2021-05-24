import {createContext} from 'react'
import {AuthContextValue} from './types'

export const AuthContext = createContext<AuthContextValue>({
  login: Promise.resolve,
  logout: Promise.resolve,
  loading: false,
})
