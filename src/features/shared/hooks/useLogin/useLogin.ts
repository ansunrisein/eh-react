import {useAsyncFn} from 'react-use'
import {useAuth} from 'reactfire'
import {auth as Auth} from 'firebase'

export type UseLoginResult = {
  login: () => Promise<Auth.UserCredential>
  loading: boolean
  error?: Error
}

export const useLogin = (): UseLoginResult => {
  const auth = useAuth()

  const [{loading, error}, login] = useAsyncFn(
    () => auth.signInWithPopup(new Auth.GoogleAuthProvider()),
    [auth],
  )

  return {
    login,
    loading,
    error,
  }
}
