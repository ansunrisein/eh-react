import {attach, combine, Domain} from 'effector'
import {debounce} from 'patronum/debounce'
import {ApolloClient} from '@apollo/client'
import {SearchFeature} from '@eh/features/search'
import {BoardsDocument, BoardsQuery, BoardsQueryVariables} from '../api'

export type Boards = ReturnType<typeof createBoards>

export type BoardsDeps = {
  domain: Domain
  search: SearchFeature
  apollo: ApolloClient<unknown>
}

export const createBoards = ({domain, search, apollo}: BoardsDeps) => {
  const reset = domain.event()

  const $search = debounce({
    source: search.$search,
    timeout: 400,
    target: domain.store(search.$search.defaultState),
  }).reset(search.reset)

  const $isSearchDebounced = combine(search.$search, $search, (raw, debounced) => raw !== debounced)

  const fetchBoardsFx = attach({
    source: $search,
    mapParams: (params: Omit<BoardsQueryVariables, 'search'>, search) => ({
      ...params,
      search: {text: search},
    }),
    effect: domain.effect((variables: BoardsQueryVariables) =>
      apollo
        .query<BoardsQuery, BoardsQueryVariables>({
          query: BoardsDocument,
          variables,
          fetchPolicy: 'network-only',
        })
        .then(response => response.data.boards),
    ),
  })

  const $boards = domain
    .store<BoardsQuery['boards'] | null>(null)
    .on(fetchBoardsFx.doneData, (_, popular) => popular)

  const $latestBoardsVariables = domain
    .store<BoardsQueryVariables | null>(null)
    .on(fetchBoardsFx, (_, payload) => payload)
    .reset(reset)

  const fetchMoreBoardsFx = attach({
    source: {$latestBoardsVariables, $boards},
    mapParams: (params: void, source) =>
      source.$boards && source.$latestBoardsVariables
        ? {
            ...source.$latestBoardsVariables,
            page: {
              after: source.$boards.pageInfo.endCursor,
              first: source.$latestBoardsVariables.page.first,
            },
          }
        : null,
    effect: domain.effect((variables: BoardsQueryVariables | null) => {
      if (variables) {
        return fetchBoardsFx(variables)
      }
      return null
    }),
  })

  return {
    reset,
    fetchBoardsFx,
    fetchMoreBoardsFx,
    $boards,
    $search,
    $isSearchDebounced,
  }
}
