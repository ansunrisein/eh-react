import React, {createContext, useCallback, useContext, useEffect} from 'react'
import {useStore} from 'effector-react'
import {BoardsFilter, BoardsSort} from '@eh/shared/api'
import {Hoc} from '@eh/shared/types'
import {WorldPage} from './world'

export const WorldPageContext = createContext<WorldPage>(
  new Proxy({} as WorldPage, {
    get() {
      throw new Error('Use WorldPageProvider!')
    },
  }),
)

export type WorldPageProviderProps = {
  world: WorldPage
}

export const WorldPageProvider: React.FC<WorldPageProviderProps> = ({children, world}) => (
  <WorldPageContext.Provider value={world}>{children}</WorldPageContext.Provider>
)

export const withWorldPage =
  (providerProps: WorldPageProviderProps): Hoc =>
  Component =>
  props =>
    (
      <WorldPageProvider {...providerProps}>
        <Component {...props} />
      </WorldPageProvider>
    )

export const useWorldPage = (): WorldPage => useContext(WorldPageContext)

export const usePopularBoards = ({filter}: {filter: Record<string, number>}) => {
  const {
    popular: {fetchPopularBoardsFx, $popular, reset, fetchMorePopularBoardsFx},
  } = useWorldPage()

  const popularBoards = useStore($popular)
  const loading = useStore(fetchPopularBoardsFx.pending)
  const loadingMorePopular = useStore(fetchMorePopularBoardsFx.pending)

  const initialPopularLoading = !loadingMorePopular && loading

  const fetchMorePopularBoards = useCallback(
    () => fetchMorePopularBoardsFx(),
    [fetchMorePopularBoardsFx],
  )

  const pageInfo = popularBoards?.pageInfo

  useEffect(() => {
    fetchPopularBoardsFx({page: {first: 25}, eventsPage: {first: 25}})

    return reset
  }, [fetchPopularBoardsFx, filter, reset])

  return {
    popularBoards: popularBoards || undefined,
    fetchMorePopularBoards,
    hasMorePopularBoards: !!pageInfo?.hasNextPage,
    initialPopularLoading,
    loadingMorePopular,
  }
}

export type UseBoardsProps = {
  boardsPerPage?: number
  eventsPerPage?: number
  sort?: BoardsSort
  filter?: BoardsFilter
}

export const useBoards = ({
  boardsPerPage = 25,
  eventsPerPage = 25,
  sort,
  filter,
}: UseBoardsProps) => {
  const {
    boards: {fetchBoardsFx, $boards, reset, fetchMoreBoardsFx, $search, $isSearchDebounced},
  } = useWorldPage()

  const search = useStore($search)
  const isSearchDebounced = useStore($isSearchDebounced)

  const boards = useStore($boards)
  const loading = useStore(fetchBoardsFx.pending)
  const loadingMoreBoards = useStore(fetchMoreBoardsFx.pending)

  const initialBoardsLoading = !loadingMoreBoards && (loading || isSearchDebounced)

  const fetchMoreBoards = useCallback(() => fetchMoreBoardsFx(), [fetchMoreBoardsFx])

  const pageInfo = boards?.pageInfo

  useEffect(() => reset, [reset])

  useEffect(() => {
    if (search) {
      fetchBoardsFx({
        page: {first: boardsPerPage},
        eventsPage: {first: eventsPerPage},
        sort,
        filter,
      })
    }
  }, [boardsPerPage, eventsPerPage, fetchBoardsFx, filter, search, sort])

  return {
    boards: boards || undefined,
    fetchMoreBoards,
    hasMoreBoards: !!pageInfo?.hasNextPage,
    initialBoardsLoading,
    loadingMoreBoards,
  }
}
