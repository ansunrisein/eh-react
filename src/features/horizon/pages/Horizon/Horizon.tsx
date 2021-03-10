import React from 'react'
import {Flex} from 'reflexbox'
import {Header} from '@eh/react/features/common/components'
import {useModal} from '@eh/react/features/shared/contexts/ModalContext'
import {useDashboard, useFilter, useSort} from '../../hooks'
import {Dashboard} from '../../views'
import {BoardFormModal} from '../../modals'
import {filterConfig} from './filters'
import {sortConfig} from './sorts'

export type HorizonProps = any

export const Horizon: React.FC<HorizonProps> = () => {
  const {open} = useModal(BoardFormModal)

  const {filtersState, setFiltersState} = useFilter(filterConfig)
  const {sortsState, setSortsState} = useSort(sortConfig)

  const {dashboard} = useDashboard({filters: filtersState, sorts: sortsState})

  if (!dashboard) {
    return null
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
