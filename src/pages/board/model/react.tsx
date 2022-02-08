import {useCallback} from 'react'
import {EventsSort} from '@eh/shared/api'
import {useBoardPageQuery} from '../api'

export type UseFullBoardProps = {
  id: string
  eventsPerPage?: number
  sort?: EventsSort
}

export const useFullBoard = ({id, eventsPerPage = 25, sort}: UseFullBoardProps) => {
  const {data, loading, fetchMore} = useBoardPageQuery({
    variables: {
      id,
      eventsPage: {
        first: eventsPerPage,
      },
      sort,
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  })

  const pageInfo = data?.board.events.pageInfo

  const fetchMoreEvents = useCallback(
    () =>
      fetchMore({
        variables: {
          eventsPage: {
            first: eventsPerPage,
            after: pageInfo?.endCursor,
          },
        },
      }),
    [eventsPerPage, pageInfo, fetchMore],
  )

  return {
    board: data?.board,
    fetchMoreEvents,
    hasMoreEvents: !!pageInfo?.hasNextPage,
    loading,
  }
}
