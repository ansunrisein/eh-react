import {useCallback} from 'react'
import {EventsFilter, EventsSort} from '@eh/shared/api'
import {useUser} from '@eh/entities/user'
import {useBoardPageQuery} from '../api'

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
  const {data, loading, fetchMore} = useBoardPageQuery({
    variables: {
      id,
      eventsPage: {
        first: eventsPerPage,
      },
      sort,
      filter,
    },
    ...(refetch ? {fetchPolicy: 'network-only', nextFetchPolicy: 'cache-first'} : {}),
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

export const useIsMyBoard = (id = '') => {
  const {board} = useFullBoard({id})
  const {user} = useUser()

  if (!board || !user) {
    return false
  }

  return user._id === board.user._id
}
