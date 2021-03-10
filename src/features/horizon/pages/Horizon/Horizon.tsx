import React from 'react'
import {Flex} from 'reflexbox'
import {Loader} from 'rsuite'
import {Header} from '@eh/react/features/common/components'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {useDashboard, useFilter, useSort} from '../../hooks'
import {Dashboard} from '../../views'
import {BoardFormModal} from '../../modals'
import {filterConfig} from './filters'
import {sortConfig} from './sorts'

export const Horizon: React.FC = () => {
  const {open} = useModal(BoardFormModal)

  const {filtersState, setFiltersState} = useFilter(filterConfig)
  const {sortsState, setSortsState} = useSort(sortConfig)

  const {dashboard, loading} = useDashboard({filters: filtersState, sorts: sortsState})

  if (!dashboard || loading) {
    return <Loader center backdrop size="lg" />
  }

  return (
    <>
      <Header />
      <Flex>
        <Dashboard
          filters={filterConfig}
          sorts={sortConfig}
          boards={dashboard}
          onFiltersChange={setFiltersState}
          onSortsChange={setSortsState}
          onCreateBoardClick={open}
        />
      </Flex>
    </>
  )
}
