import {ApolloError, ApolloQueryResult, useQuery} from '@apollo/client'
import {useCallback} from 'react'
import {DASHBOARD} from '../../graphql/queries'
import {
  Dashboard,
  Dashboard_dashboard_edges,
  DashboardVariables,
} from '../../graphql/types/Dashboard'

export type UseDashboardResult = {
  dashboard?: Dashboard_dashboard_edges[]
  loading: boolean
  error?: ApolloError
  fetchMoreBoards: () => Promise<ApolloQueryResult<Dashboard>>
  fetchMoreEvents: (boardId: string) => Promise<ApolloQueryResult<Dashboard>>
}

export const useDashboard = (
  variables: Omit<DashboardVariables, 'boardPage' | 'eventPage'>,
): UseDashboardResult => {
  const {data, loading, error, fetchMore} = useQuery<Dashboard, DashboardVariables>(DASHBOARD, {
    variables: {
      ...variables,
      eventPage: {
        first: 10,
      },
      boardPage: {
        first: 25,
      },
    },
  })

  const edges = data?.dashboard?.edges
  const pageInfo = data?.dashboard.pageInfo

  const fetchMoreBoards = useCallback(
    () =>
      fetchMore({
        variables: {
          boardPage: {
            first: 10,
            after: pageInfo?.endCursor,
          },
        },
      }),
    [fetchMore, pageInfo],
  )

  const fetchMoreEvents = useCallback(
    boardId =>
      fetchMore({
        variables: {
          eventPage: {
            first: 10,
            after: edges?.find(e => e.node._id === boardId)?.node.events.pageInfo.endCursor,
          },
        },
      }),
    [edges, fetchMore],
  )

  return {
    dashboard: edges,
    loading,
    error,
    fetchMoreBoards,
    fetchMoreEvents,
  }
}
