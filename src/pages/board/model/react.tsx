import React, {createContext, useCallback, useContext, useEffect} from 'react'
import {useStore} from 'effector-react'
import {EventsFilter, EventsSort} from '@eh/shared/api'
import {Hoc} from '@eh/shared/types'
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
  participantsPerPage?: number
  sort?: EventsSort
  filter?: EventsFilter
  refetch?: boolean
}

export const useFullBoard = ({
  id,
  eventsPerPage = 25,
  participantsPerPage = 3,
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
        participantsPage: {
          first: participantsPerPage,
        },
      })

    return reset
  }, [fetchBoardFx, id, eventsPerPage, sort, filter, reset, refetch, participantsPerPage])

  return {
    board: board || undefined,
    fetchMoreEvents,
    hasMoreEvents: !!pageInfo?.hasNextPage,
    loading: loading,
  }
}

export const useIsMyBoard = () => {
  const {$isMyBoard} = useBoardPage()

  return useStore($isMyBoard)
}

export const useNewEvents = () => {
  const {$newEvents} = useBoardPage()

  return useStore($newEvents)
}

export const useNewEventsGate = () => {
  const {resetNewEvents} = useBoardPage()

  useEffect(() => {
    resetNewEvents()

    return resetNewEvents
  }, [resetNewEvents])
}
