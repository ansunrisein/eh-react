import React, {createContext, useContext} from 'react'
import {useStore} from 'effector-react'
import {Hoc, RemoveEffector} from '@eh/shared/types'
import {SearchFeature} from './search'

export const SearchFeatureContext = createContext<SearchFeature>(
  new Proxy({} as SearchFeature, {
    get() {
      throw new Error('Use SearchFeatureProvider!')
    },
  }),
)

export type SearchFeatureProviderProps = {
  search: SearchFeature
}

export const SearchFeatureProvider: React.FC<SearchFeatureProviderProps> = ({children, search}) => (
  <SearchFeatureContext.Provider value={search}>{children}</SearchFeatureContext.Provider>
)

export const withSearchFeature =
  (providerProps: SearchFeatureProviderProps): Hoc =>
  Component =>
  props =>
    (
      <SearchFeatureProvider {...providerProps}>
        <Component {...props} />
      </SearchFeatureProvider>
    )

export const useSearchFeature = (): SearchFeature => useContext(SearchFeatureContext)

export const useSearch = () => {
  const {$search, set, reset} = useSearchFeature()

  return {
    search: useStore($search),
    setSearch: set as RemoveEffector<typeof set>,
    resetSearch: reset as RemoveEffector<typeof reset>,
  }
}
