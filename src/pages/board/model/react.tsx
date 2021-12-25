import {useCallback} from 'react'
import {useBoardPageQuery} from '../api'

export const useFullBoard = (id: string, eventsPerPage = 25) => {
  const {data, loading, fetchMore} = useBoardPageQuery({
    variables: {
      id,
      eventsPage: {
        first: eventsPerPage,
      },
    },
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
