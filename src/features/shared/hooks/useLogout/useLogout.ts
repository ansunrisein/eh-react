import {useCallback} from 'react'
import {useApolloClient} from '@apollo/client'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../../contexts/AuthContext'

export const useLogout = (): (() => Promise<void>) => {
  const apolloClient = useApolloClient()
  const {logout} = useAuth()
  const history = useHistory()

  return useCallback(async () => {
    await logout()
    await apolloClient.cache.reset()
    history.push('/id')
  }, [logout, apolloClient.cache, history])
}
