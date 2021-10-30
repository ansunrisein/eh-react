import React, {createContext, useContext} from 'react'
import {useStoreMap} from 'effector-react'
import {SessionEntity} from './session'

export const SessionEntityContext = createContext<SessionEntity>(
  new Proxy({} as SessionEntity, {
    get() {
      throw new Error('Use SessionEntityProvider!')
    },
  }),
)

export type SessionEntityProviderProps = {
  session: SessionEntity
}

export const SessionEntityProvider: React.FC<SessionEntityProviderProps> = ({
  children,
  session,
}) => <SessionEntityContext.Provider value={session}>{children}</SessionEntityContext.Provider>

export const useSessionEntity = (): SessionEntity => useContext(SessionEntityContext)

export const useIsAuthenticated = () => {
  const {$token} = useSessionEntity()
  return useStoreMap($token, Boolean)
}

export const useLogout = () => {
  const {resetToken} = useSessionEntity()
  return () => resetToken()
}
