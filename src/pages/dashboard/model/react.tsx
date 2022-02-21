import React, {createContext, useCallback, useContext} from 'react'
import {useStore} from 'effector-react'
import {BoardsFilter, BoardsSearch, BoardsSort} from '@eh/shared/api'
import {Hoc} from '@eh/shared/types'
import {DashboardPage} from '@eh/pages/dashboard/model/dashboard'
import {useDashboardQuery} from '../api'

export const DashboardPageContext = createContext<DashboardPage>(
  new Proxy({} as DashboardPage, {
    get() {
      throw new Error('Use DashboardPageProvider!')
    },
  }),
)

export type DashboardPageProviderProps = {
  dashboard: DashboardPage
}

export const DashboardPageProvider: React.FC<DashboardPageProviderProps> = ({
  children,
  dashboard,
}) => <DashboardPageContext.Provider value={dashboard}>{children}</DashboardPageContext.Provider>

export const withDashboardPage =
  (providerProps: DashboardPageProviderProps): Hoc =>
  Component =>
  props =>
    (
      <DashboardPageProvider {...providerProps}>
        <Component {...props} />
      </DashboardPageProvider>
    )

export const useDashboardPage = (): DashboardPage => useContext(DashboardPageContext)

export const useDashboardSearch = () => {
  const {$search, resetSearch, changeSearch} = useDashboardPage()

  return {
    search: useStore($search),
    changeSearch,
    resetSearch,
  }
}

export type UseBoardsProps = {
  boardsPerPage?: number
  eventsPerPage?: number
  sort?: BoardsSort
  filter?: BoardsFilter
  search?: BoardsSearch
}

export const useBoards = ({
  boardsPerPage = 25,
  eventsPerPage = 25,
  sort,
  filter,
  search,
}: UseBoardsProps = {}) => {
  const {data, loading, fetchMore} = useDashboardQuery({
    variables: {
      page: {first: boardsPerPage},
      eventsPage: {first: eventsPerPage},
      sort,
      filter,
      search,
    },
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
