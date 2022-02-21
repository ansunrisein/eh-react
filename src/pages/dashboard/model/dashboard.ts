import {Domain} from 'effector'

export type DashboardPage = ReturnType<typeof createDashboardPage>

export type DashboardPageDeps = {
  domain: Domain
}

export const createDashboardPage = ({domain}: DashboardPageDeps) => {
  const $search = domain.createStore<string>('')

  const changeSearch = domain.event<string>()
  const resetSearch = domain.event()

  $search.on(changeSearch, (_, payload) => payload).reset(resetSearch)

  return {
    $search,
    changeSearch,
    resetSearch,
  }
}
