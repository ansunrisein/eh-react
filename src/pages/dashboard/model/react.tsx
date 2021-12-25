import {useCallback} from 'react'
import {useDashboardQuery} from '../api'

export const useBoards = (boardsPerPage = 25, eventsPerPage = 25) => {
  const {data, loading, fetchMore} = useDashboardQuery({
    variables: {page: {first: boardsPerPage}, eventsPage: {first: eventsPerPage}},
  })

  const pageInfo = data?.dashboard.pageInfo

  const fetchMoreBoards = useCallback(
    () =>
      fetchMore({
        variables: {
          page: {
            first: boardsPerPage,
            after: pageInfo?.endCursor,
          },
        },
      }),
    [boardsPerPage, fetchMore, pageInfo?.endCursor],
  )

  return {
    boards: data?.dashboard,
    fetchMoreBoards,
    hasMoreBoards: !!pageInfo?.hasNextPage,
    loading,
  }
}
