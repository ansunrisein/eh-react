import React from 'react'
import {Box, Flex} from 'reflexbox'
import {Icon, IconButton} from 'rsuite'
import {
  BoardList,
  BoardListProps,
  Filters,
  FiltersProps,
  Sorts,
  SortsProps,
} from '@eh/react/features/horizon/components'
import {Spacing} from '@eh/react/ui'

export type DashboardProps = {
  filters: FiltersProps['filters']
  sorts: SortsProps['sorts']
  onFiltersChange?: FiltersProps['onChange']
  onSortsChange?: SortsProps['onChange']
  boards: BoardListProps['boards']
}

export const Dashboard: React.FC<DashboardProps> = ({
  filters,
  sorts,
  onFiltersChange,
  onSortsChange,
  boards,
}) => (
  <Flex height="100%" overflow="hidden">
    <Flex flexDirection="column" justifyContent="space-between">
      <Flex flexDirection="column">
        <Filters filters={filters} onChange={onFiltersChange} />
        <Spacing space="0.5rem" vertical />
        <Sorts sorts={sorts} onChange={onSortsChange} />
      </Flex>
      <Box>
        <IconButton icon={<Icon icon="plus" />} size="lg" />
      </Box>
    </Flex>
    <Spacing space="0.5rem" />
    <Box flex="1" height="100%" overflow="hidden auto">
      <BoardList boards={boards} />
    </Box>
  </Flex>
)
