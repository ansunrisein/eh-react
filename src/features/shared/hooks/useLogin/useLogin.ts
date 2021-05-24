import {useAsyncFn} from 'react-use'
import {useMe} from '@eh/react/features/user/hooks'
import {useAuth} from '../../contexts/AuthContext'

export type UseLoginResult = {
  login: () => Promise<void>
  loading: boolean
  error?: Error
}

export const useLogin = (): UseLoginResult => {
  const {refetch} = useMe()
  const auth = useAuth()

  const [{loading, error}, login] = useAsyncFn(async () => {
    await auth.login()
    await refetch()
  }, [auth.login])

  return {
    login,
    loading,
    error,
  }
}
