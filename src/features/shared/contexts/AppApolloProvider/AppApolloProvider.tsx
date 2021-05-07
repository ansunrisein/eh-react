import React, {useCallback, useMemo} from 'react'
import {ApolloClient, ApolloProvider, NormalizedCacheObject} from '@apollo/client'
import {useLatest} from 'react-use'
import {useAuth} from '../AuthContext'

export type AppApolloProviderProps = {
  createApolloClient: (getToken: () => string | undefined) => ApolloClient<NormalizedCacheObject>
}

export const AppApolloProvider: React.FC<AppApolloProviderProps> = ({
  children,
  createApolloClient,
}) => {
  const {user} = useAuth()

  const userRef = useLatest(user)

  const getToken = useCallback(() => userRef.current?.token, [userRef])

  const client = useMemo(() => createApolloClient(getToken), [createApolloClient, getToken])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
