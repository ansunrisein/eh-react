import React, {useCallback, useState} from 'react'
import {Box, Flex} from 'reflexbox'
import {Icon, IconButton} from 'rsuite'
import {Spacing} from '@eh/react/ui'
import {Dashboard_dashboard_edges} from '../../graphql/types/Dashboard'
import {BoardGrid, BoardList, Filters, FiltersProps, Sorts, SortsProps} from '../../components'

export type DashboardProps = {
  boards: Dashboard_dashboard_edges[]
  filters: FiltersProps['filters']
  sorts: SortsProps['sorts']
  onFiltersChange?: FiltersProps['onChange']
  onSortsChange?: SortsProps['onChange']
  onCreateBoardClick?: () => unknown
  defaultDisplay?: 'list' | 'grid'
}

export const Dashboard: React.FC<DashboardProps> = ({
  boards,
  filters,
  sorts,
  onFiltersChange,
  onSortsChange,
  onCreateBoardClick,
  defaultDisplay = 'list',
}) => {
  const [display, setDisplay] = useState(defaultDisplay)

  const switchDisplay = useCallback(
    () => setDisplay(display => (display === 'list' ? 'grid' : 'list')),
    [],
  )

  return (
    <Flex height="100%" overflow="hidden">
      <Flex flexShrink={0} flexDirection="column" justifyContent="space-between">
        <Flex flexDirection="column">
          <Filters filters={filters} onChange={onFiltersChange} />
          <Spacing space="0.5rem" vertical />
          <Sorts sorts={sorts} onChange={onSortsChange} />
        </Flex>
        <Box>
          <IconButton
            icon={<Icon icon={display === 'grid' ? 'align-justify' : 'th'} />}
            size="lg"
            onClick={switchDisplay}
            data-testid="switch-display"
          />
          <Spacing space="1rem" vertical />
          <IconButton icon={<Icon icon="plus" />} size="lg" onClick={onCreateBoardClick} />
        </Box>
      </Flex>
      <Spacing space="0.5rem" />
      <Flex flexGrow={1} flexDirection="column">
        <Flex flexBasis={0} flexGrow={1} overflowY="hidden">
          {display === 'list' ? (
            <BoardList boards={boards} />
          ) : display === 'grid' ? (
            <BoardGrid boards={boards} />
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  )
}
