import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {useStore} from 'effector-react'
import {Hoc} from '@eh/shared/types'
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

export const withSessionEntity =
  (providerProps: SessionEntityProviderProps): Hoc =>
  Component =>
  props =>
    (
      <SessionEntityProvider {...providerProps}>
        <Component {...props} />
      </SessionEntityProvider>
    )

export type MeSuspenseProps = {
  fallback: ReactNode
}

export const MeSuspense: React.FC<MeSuspenseProps> = ({fallback, children}) => {
  const {fetchMeFx} = useSessionEntity()

  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    fetchMeFx()

    const unsubscribe = fetchMeFx.pending.watch(pending => {
      if (!pending) {
        setIsInitialized(true)
        unsubscribe()
      }
    })

    return unsubscribe
  }, [setIsInitialized, fetchMeFx])

  return <>{isInitialized ? children : fallback}</>
}

export const useSessionEntity = (): SessionEntity => useContext(SessionEntityContext)

export const useMe = () => {
  const {$me} = useSessionEntity()
  return useStore($me)
}

export const useIsAuthenticated = () => {
  const {$isAuthenticated} = useSessionEntity()
  return useStore($isAuthenticated)
}

export const useLogout = () => {
  const {resetToken} = useSessionEntity()
  return () => resetToken()
}
