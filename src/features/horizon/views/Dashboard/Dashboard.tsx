import React, {useCallback, useState} from 'react'
import {Box, Flex} from 'reflexbox'
import {Icon, IconButton, Loader} from 'rsuite'
import {Spacing} from '@eh/react/ui'
import {Board_board} from '../../graphql/types/Board'
import {Dashboard_dashboard_edges} from '../../graphql/types/Dashboard'
import {BoardGrid, BoardList, Filters, FiltersProps, Sorts, SortsProps} from '../../components'

export type DashboardProps = {
  boards?: Dashboard_dashboard_edges[]
  filters: FiltersProps['filters']
  sorts: SortsProps['sorts']
  loading?: boolean
  onFiltersChange?: FiltersProps['onChange']
  onSortsChange?: SortsProps['onChange']
  onCreateBoardClick?: () => unknown
  onBoardFavClick?: (board: Board_board) => unknown
  onBoardPinClick?: (board: Board_board) => unknown
  defaultDisplay?: 'list' | 'grid'
}

export const Dashboard: React.FC<DashboardProps> = ({
  boards,
  filters,
  sorts,
  loading = false,
  onFiltersChange,
  onSortsChange,
  onCreateBoardClick,
  onBoardFavClick,
  onBoardPinClick,
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
        <Flex flexBasis={0} flexGrow={1} overflowY="hidden" style={{position: 'relative'}}>
          {!boards?.length ? (
            loading ? (
              <Loader center backdrop size="lg" />
            ) : (
              <Flex height="100%" width="100%" alignItems="center" justifyContent="center">
                <Box fontSize="2rem" fontWeight="300">
                  You have no boards :( Create now!
                </Box>
              </Flex>
            )
          ) : display === 'list' ? (
            <BoardList
              boards={boards}
              onBoardFavClick={onBoardFavClick}
              onBoardPinClick={onBoardPinClick}
            />
          ) : display === 'grid' ? (
            <BoardGrid
              boards={boards}
              onBoardFavClick={onBoardFavClick}
              onBoardPinClick={onBoardPinClick}
            />
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  )
}
