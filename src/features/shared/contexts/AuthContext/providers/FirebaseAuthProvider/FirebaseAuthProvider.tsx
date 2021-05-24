import React, {useCallback, useMemo, useState} from 'react'
import Firebase from 'firebase/app'
import {useAsync, useAsyncFn} from 'react-use'
import {firebase} from '@eh/react/configs/firebase'
import {AuthContext} from '../../AuthContext'

export type FirebaseAuthProviderProps =
  | {
      firebaseConfig: Record<string, string>
      firebaseApp?: undefined
    }
  | {
      firebaseApp: Firebase.app.App
      firebaseConfig?: undefined
    }

export const FirebaseAuthProvider: React.FC<FirebaseAuthProviderProps> = ({children, ...props}) => {
  const app = useMemo(() => {
    const app = props.firebaseApp || Firebase.initializeApp(props.firebaseConfig)

    if (process.env.REACT_APP_FIREBASE_AUTH_EMULATOR_HOST) {
      app.auth().useEmulator(process.env.REACT_APP_FIREBASE_AUTH_EMULATOR_HOST)
    }

    return app
  }, [props.firebaseApp, props.firebaseConfig])

  const [user, setUser] = useState<{token: string} | undefined>()

  const {loading: loginLoading} = useAsync(async () => {
    await new Promise(resolve => firebase.auth().onAuthStateChanged(resolve))

    const user = app.auth().currentUser

    if (user) {
      return user.getIdToken(true).then(token => setUser({token}))
    }
  }, [app])

  const login = useCallback(async () => {
    await app
      .auth()
      .signInWithPopup(new Firebase.auth.GoogleAuthProvider())
      .then(({user}) => user?.getIdToken(true))
      .then(token => token && setUser({token}))
  }, [app])

  const [state, logout] = useAsyncFn(async () => {
    await app.auth().signOut()
    setUser(undefined)
  }, [app])

  return (
    <AuthContext.Provider value={{login, logout, user, loading: loginLoading || state.loading}}>
      {children}
    </AuthContext.Provider>
  )
}
