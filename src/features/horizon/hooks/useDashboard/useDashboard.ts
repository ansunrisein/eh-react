import {ApolloError, ApolloQueryResult, useQuery} from '@apollo/client'
import {useCallback} from 'react'
import {DashboardFilter, DashboardSort} from '@eh/react/.types/globalTypes'
import {DASHBOARD} from '../../graphql/queries'
import {Dashboard, Dashboard_dashboard_edges} from '../../graphql/types/Dashboard'

export type UseDashboardProps = {
  filters: DashboardFilter
  sorts: DashboardSort
}

export type UseDashboardResult = {
  dashboard?: Dashboard_dashboard_edges[]
  loading: boolean
  error?: ApolloError
  more: () => Promise<ApolloQueryResult<Dashboard>>
}

export const useDashboard = (variables: UseDashboardProps): UseDashboardResult => {
  const {data, loading, error, fetchMore} = useQuery<Dashboard>(DASHBOARD, {
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
