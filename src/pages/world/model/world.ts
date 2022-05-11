import {attach, Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {PopularDocument, PopularQuery, PopularQueryVariables} from '@eh/pages/world/api'

export type WorldPage = ReturnType<typeof createWorldPage>

export type WorldPageDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createWorldPage = ({domain, apollo}: WorldPageDeps) => {
  const reset = domain.event()

  const fetchPopularBoardsFx = domain.effect((variables: PopularQueryVariables) =>
    apollo
      .query<PopularQuery, PopularQueryVariables>({
        query: PopularDocument,
        variables,
        fetchPolicy: 'network-only',
      })
      .then(response => response.data.popularBoards),
  )

  const $popular = domain
    .store<PopularQuery['popularBoards'] | null>(null)
    .on(fetchPopularBoardsFx.doneData, (_, popular) => popular)

  const $latestVariables = domain
    .store<PopularQueryVariables | null>(null)
    .on(fetchPopularBoardsFx, (_, payload) => payload)
    .reset(reset)

  const fetchMorePopularBoardsFx = attach({
    source: {$latestVariables, $popular},
    mapParams: (params: void, source) =>
      source.$popular && source.$latestVariables
        ? {
            ...source.$latestVariables,
            page: {
              after: source.$popular.pageInfo.endCursor,
              first: source.$latestVariables.page.first,
            },
          }
        : null,
    effect: domain.effect((variables: PopularQueryVariables | null) => {
      if (variables) {
        return fetchPopularBoardsFx(variables)
      }
      return null
    }),
  })

  return {
    reset,
    fetchPopularBoardsFx,
    fetchMorePopularBoardsFx,
    $popular,
    $latestVariables,
  }
}
