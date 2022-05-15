import {attach, Domain} from 'effector'
import {ApolloClient} from '@apollo/client'
import {PopularDocument, PopularQuery, PopularQueryVariables} from '@eh/pages/world/api'

export type PopularBoards = ReturnType<typeof createPopularBoards>

export type PopularBoardsDeps = {
  domain: Domain
  apollo: ApolloClient<unknown>
}

export const createPopularBoards = ({domain, apollo}: PopularBoardsDeps) => {
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

  const $latestPopularBoardsVariables = domain
    .store<PopularQueryVariables | null>(null)
    .on(fetchPopularBoardsFx, (_, payload) => payload)
    .reset(reset)

  const fetchMorePopularBoardsFx = attach({
    source: {$latestPopularBoardsVariables, $popular},
    mapParams: (params: void, source) =>
      source.$popular && source.$latestPopularBoardsVariables
        ? {
            ...source.$latestPopularBoardsVariables,
            page: {
              after: source.$popular.pageInfo.endCursor,
              first: source.$latestPopularBoardsVariables.page.first,
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
  }
}
