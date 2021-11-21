import {ApolloClient, concat, HttpLink, InMemoryCache} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import {sessionEntity} from './store'

const authLink = setContext((_, {headers}) => {
  const token = sessionEntity.$token.getState()

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  }
})

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
})

export const apollo = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
    watchQuery: {
      errorPolicy: 'all',
    },
  },
})
