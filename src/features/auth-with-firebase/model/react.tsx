import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {Auth} from 'firebase/auth'
import {useAsyncFn} from 'react-use'
import {Hoc} from '@eh/shared/types'
import {AuthWithFirebaseFeature} from './auth-with-firebase'

export const AuthWithFirebaseFeatureContext = createContext<AuthWithFirebaseFeature>(
  new Proxy({} as AuthWithFirebaseFeature, {
    get() {
      throw new Error('Use AuthWithFirebaseFeatureProvider!')
    },
  }),
)

export type AuthWithFirebaseFeatureProviderProps = {
  authWithFirebase: AuthWithFirebaseFeature
}

export const AuthWithFirebaseFeatureProvider: React.FC<AuthWithFirebaseFeatureProviderProps> = ({
  children,
  authWithFirebase,
}) => (
  <AuthWithFirebaseFeatureContext.Provider value={authWithFirebase}>
    {children}
  </AuthWithFirebaseFeatureContext.Provider>
)

export const useAuthWithFirebaseFeature = (): AuthWithFirebaseFeature =>
  useContext(AuthWithFirebaseFeatureContext)

export const useLogin = () => {
  const feature = useAuthWithFirebaseFeature()

  const [{loading, value, error}, login] = useAsyncFn(feature.login, [feature.login])

  return {
    login,
    loading,
    value,
    error,
  }
}

export const withAuthWithFirebaseFeature =
  (providerProps: AuthWithFirebaseFeatureProviderProps): Hoc =>
  Component =>
  props =>
    (
      <AuthWithFirebaseFeatureProvider {...providerProps}>
        <Component {...props} />
      </AuthWithFirebaseFeatureProvider>
    )

export type FirebaseAuthSuspenseProps = {
  auth: Auth
  fallback: ReactNode
}

export const FirebaseAuthSuspense: React.FC<FirebaseAuthSuspenseProps> = ({
  children,
  auth,
  fallback,
}) => {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    return auth.onAuthStateChanged(() => setIsInitialized(true))
  }, [setIsInitialized, auth])

  return <>{isInitialized ? children : fallback}</>
}
