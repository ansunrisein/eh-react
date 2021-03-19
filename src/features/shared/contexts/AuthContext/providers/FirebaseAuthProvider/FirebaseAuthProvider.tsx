import React, {useCallback, useMemo} from 'react'
import Firebase from 'firebase/app'
import {AuthContext} from '../../AuthContext'

export type FirebaseAuthProviderProps =
  | {
      firebaseConfig: Record<string, string>
    }
  | {firebaseApp: Firebase.app.App}

export const FirebaseAuthProvider: React.FC<FirebaseAuthProviderProps> = ({children, ...props}) => {
  const app = useMemo(() => {
    if ('firebaseApp' in props) {
      return props.firebaseApp
    } else {
      return Firebase.initializeApp(props.firebaseConfig)
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.firebaseApp, props.firebaseConfig])

  const login = useCallback(async () => {
    await app.auth().signInWithPopup(new Firebase.auth.GoogleAuthProvider())
  }, [app])

  return <AuthContext.Provider value={{login}}>{children}</AuthContext.Provider>
}
