import {useAsyncFn} from 'react-use'
import {useAuth} from '@eh/react/features/shared/contexts/AuthContext'

export type UseLoginResult = {
  login: () => Promise<void>
  loading: boolean
  error?: Error
}

export const useLogin = (): UseLoginResult => {
  const auth = useAuth()

  const [{loading, error}, login] = useAsyncFn(auth.login, [auth.login])

  return {
    login,
    loading,
    error,
  }
}
