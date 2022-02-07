import {useCallback} from 'react'
import {BoardsSort} from '@eh/shared/api'
import {useDashboardQuery} from '../api'

export type UseBoardsProps = {
  boardsPerPage?: number
  eventsPerPage?: number
  sort?: BoardsSort
}

export const useBoards = ({boardsPerPage = 25, eventsPerPage = 25, sort}: UseBoardsProps = {}) => {
  const {data, loading, fetchMore} = useDashboardQuery({
    variables: {page: {first: boardsPerPage}, eventsPage: {first: eventsPerPage}, sort},
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
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
