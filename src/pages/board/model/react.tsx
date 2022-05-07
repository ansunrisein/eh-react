import React, {createContext, useCallback, useContext, useEffect} from 'react'
import {useStore} from 'effector-react'
import {EventsFilter, EventsSort} from '@eh/shared/api'
import {Hoc} from '@eh/shared/types'
import {useUser} from '@eh/entities/user'
import {useBoardPageQuery} from '../api'
import {BoardPage} from './board'

export const BoardPageContext = createContext<BoardPage>(
  new Proxy({} as BoardPage, {
    get() {
      throw new Error('Use BoardPageProvider!')
    },
  }),
)

export type BoardPageProviderProps = {
  board: BoardPage
}

export const BoardPageProvider: React.FC<BoardPageProviderProps> = ({children, board}) => (
  <BoardPageContext.Provider value={board}>{children}</BoardPageContext.Provider>
)

export const withBoardPage =
  (providerProps: BoardPageProviderProps): Hoc =>
  Component =>
  props =>
    (
      <BoardPageProvider {...providerProps}>
        <Component {...props} />
      </BoardPageProvider>
    )

export const useBoardPage = (): BoardPage => useContext(BoardPageContext)

export type UseFullBoardProps = {
  id: string
  eventsPerPage?: number
  sort?: EventsSort
  filter?: EventsFilter
  refetch?: boolean
}

export const useFullBoard = ({
  id,
  eventsPerPage = 25,
  sort,
  filter,
  refetch,
}: UseFullBoardProps) => {
  const {$board, fetchBoardFx, fetchMoreFx, reset} = useBoardPage()

  const board = useStore($board)
  const loading = useStore(fetchBoardFx.pending)

  const fetchMoreEvents = useCallback(() => fetchMoreFx(), [fetchMoreFx])

  const pageInfo = board?.events.pageInfo

  useEffect(() => {
    if (refetch)
      fetchBoardFx({
        id,
        sort,
        filter,
        eventsPage: {
          first: eventsPerPage,
        },
      })

    return reset
  }, [fetchBoardFx, id, eventsPerPage, sort, filter, reset, refetch])

  return {
    board: board || undefined,
    fetchMoreEvents,
    hasMoreEvents: !!pageInfo?.hasNextPage,
    loading: loading,
  }
}

export const useIsMyBoard = (id = '') => {
  const {data} = useBoardPageQuery({
    variables: {
      id,
      eventsPage: {
        first: 0,
      },
    },
    fetchPolicy: 'cache-only',
  })

  const {user} = useUser()

  if (!data?.board || !user) {
    return false
  }

  return user?._id === data.board?.user?._id
}
