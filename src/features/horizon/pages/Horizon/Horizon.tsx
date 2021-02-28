import React from 'react'
import {Flex} from 'reflexbox'
import {Dashboard} from '../../views'
import {useDashboard, useFilter, useSort} from '../../hooks'
import {filterConfig} from './filters'
import {sortConfig} from './sorts'

export type HorizonProps = any

export const Horizon: React.FC<HorizonProps> = () => {
  const {filtersState, setFiltersState} = useFilter(filterConfig)
  const {sortsState, setSortsState} = useSort(sortConfig)

  const {dashboard} = useDashboard({filters: filtersState, sorts: sortsState})

  if (!dashboard) {
    return null
  }

  return (
    <Flex>
      <Dashboard
        filters={filterConfig}
        sorts={sortConfig}
        boards={dashboard}
        onFiltersChange={setFiltersState}
        onSortsChange={setSortsState}
      />
    </Flex>
  )
}
