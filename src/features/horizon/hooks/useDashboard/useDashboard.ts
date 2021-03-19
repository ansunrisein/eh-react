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
  more: () => Promise<ApolloQueryResult<Dashboard>>
}

export const useDashboard = (variables: DashboardVariables): UseDashboardResult => {
  const {data, loading, error, fetchMore} = useQuery<Dashboard, DashboardVariables>(DASHBOARD, {
    variables: {
      ...variables,
      page: {
        first: 10,
      },
    },
  })

  const edges = data?.dashboard?.edges
  const pageInfo = data?.dashboard.pageInfo

  const more = useCallback(
    () =>
      fetchMore({
        variables: {
          page: {
            first: 10,
            after: pageInfo?.endCursor,
          },
        },
      }),
    [fetchMore, pageInfo],
  )

  return {
    dashboard: edges,
    loading,
    error,
    more,
  }
}
