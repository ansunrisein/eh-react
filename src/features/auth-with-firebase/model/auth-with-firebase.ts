import {Auth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {SessionEntity} from '@eh/entities/session'

export type AuthWithFirebaseFeature = ReturnType<typeof createAuthWithFirebaseFeature>

export type AuthWithFirebaseDeps = {
  auth: Auth
  session: SessionEntity
}

export const createAuthWithFirebaseFeature = ({auth, session}: AuthWithFirebaseDeps) => {
  const login = async (): Promise<string | undefined> => {
    const {user} = await signInWithPopup(auth, new GoogleAuthProvider())

    return user?.getIdToken(true)
  }

  auth.onIdTokenChanged(async user => {
    if (!user) {
      return session.setToken(null)
    }

    const token = await user.getIdToken()
    session.setToken(token)
  })

  session.resetToken.watch(() => auth.signOut())

  return {login}
}
