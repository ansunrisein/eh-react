import React from 'react'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {PageTemplate} from '@eh/react/features/shared/templates'
import {useDashboard, useFilter, useSort} from '../../hooks'
import {Dashboard} from '../../views'
import {BoardFormModal} from '../../modals'
import {filterConfig} from './filters'
import {sortConfig} from './sorts'

export const Horizon: React.FC = () => {
  const {open} = useModal(BoardFormModal)

  const {filtersState, setFiltersState} = useFilter(filterConfig)
  const {sortsState, setSortsState} = useSort(sortConfig)

  const {dashboard, loading} = useDashboard({filter: filtersState, sort: sortsState})

  return (
    <PageTemplate>
      <Dashboard
        filters={filterConfig}
        sorts={sortConfig}
        boards={dashboard}
        onFiltersChange={setFiltersState}
        onSortsChange={setSortsState}
        onCreateBoardClick={open}
        loading={loading}
      />
    </PageTemplate>
  )
}
