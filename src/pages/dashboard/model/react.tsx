import React, {createContext, useContext} from 'react'
import {useStore} from 'effector-react'
import {DashboardPage} from './dashboard'

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
  (providerProps: DashboardPageProviderProps) =>
  <Props extends Record<string, unknown>>(Component: React.FC<Props>): React.FC<Props> =>
  props =>
    (
      <DashboardPageProvider {...providerProps}>
        <Component {...props} />
      </DashboardPageProvider>
    )

export const useDashboardPage = (): DashboardPage => useContext(DashboardPageContext)

export const useBoards = () => {
  const {$boards} = useDashboardPage()
  return useStore($boards)
}
