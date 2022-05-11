import React, {createContext, useCallback, useContext, useEffect} from 'react'
import {useStore} from 'effector-react'
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
  const {fetchPopularBoardsFx, $popular, reset, fetchMorePopularBoardsFx} = useWorldPage()

  const popularBoards = useStore($popular)
  const loading = useStore(fetchPopularBoardsFx.pending)
  const loadingMore = useStore(fetchMorePopularBoardsFx.pending)

  const initialLoading = !loadingMore && loading

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
    hasMoreBoards: !!pageInfo?.hasNextPage,
    initialLoading,
    loadingMore,
  }
}
