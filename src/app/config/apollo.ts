import {parse} from 'query-string'
import {ApolloClient, concat, HttpLink, InMemoryCache} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import {relayStylePagination} from '@apollo/client/utilities'
import {TypedTypePolicies} from '@eh/shared/api'
import {history} from './history'
import {sessionEntity} from './store'

const authLink = setContext((_, {headers}) => {
  const token = sessionEntity.$token.getState()

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : undefined,
      LinkToken: parse(history.location.search).linkToken,
    },
  }
})

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
})

export const apollo = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          dashboard: relayStylePagination(),
          popularBoards: relayStylePagination(),
        },
      },
      Board: {
        fields: {
          events: relayStylePagination(),
          boardLinks: relayStylePagination(),
        },
      },
    } as TypedTypePolicies,
  }),
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
