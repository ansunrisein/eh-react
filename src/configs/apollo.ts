import {ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'

export const createApolloClient = (
  getToken: () => string | undefined,
): ApolloClient<NormalizedCacheObject> => {
  const authLink = setContext(async (_, {headers}) => {
    const token = getToken()

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_URL,
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      possibleTypes: {
        // TODO: this is horrible
        // consider to remove
        Event: ['TextEvent', 'ListEvent'],
      },
    }),
    defaultOptions: {
      mutate: {
        errorPolicy: 'all',
      },
    },
  })
}
