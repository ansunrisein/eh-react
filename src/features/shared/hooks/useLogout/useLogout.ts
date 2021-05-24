import {useApolloClient} from '@apollo/client'
import {useCallback} from 'react'
import {useAuth} from '../../contexts/AuthContext'

export const useLogout = (): (() => Promise<void>) => {
  const apolloClient = useApolloClient()
  const {logout} = useAuth()

  return useCallback(async () => {
    await logout()
    await apolloClient.cache.reset()
  }, [logout, apolloClient])
}
