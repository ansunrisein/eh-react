import {useContext} from 'react'
import {AuthContext} from './AuthContext'
import {AuthContextValue} from './types'

export const useAuth = (): AuthContextValue => useContext(AuthContext)
