import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox'
import {Button, Icon, IconButton, Tag} from 'rsuite'
import {Spacing} from '@eh/react/ui'
import {BoardFragment} from '../../graphql/types/BoardFragment'
import {BoardControl, EventGrid} from '../../components'

export type BoardProps = {
  board: BoardFragment
  onCreateEventClick?: (board: BoardFragment) => unknown
  onBoardFavClick?: (board: BoardFragment) => unknown
  onBoardPinClick?: (board: BoardFragment) => unknown
}

export const Board: React.FC<BoardProps> = ({
  board,
  onCreateEventClick,
  onBoardFavClick,
  onBoardPinClick,
}) => {
  const onCreateClick = useCallback(() => onCreateEventClick?.(board), [onCreateEventClick, board])
  const onFavClick = useCallback(() => onBoardFavClick?.(board), [onBoardFavClick, board])
  const onPinClick = useCallback(() => onBoardPinClick?.(board), [onBoardPinClick, board])

  return (
    <Box>
      <Flex padding="0.5rem" justifyContent="space-between">
        <Flex>
          <Tag color="blue" title={board.description || undefined}>
            <strong>{board.name}</strong>
          </Tag>
          <Spacing space="1rem" />
          <BoardControl size="xs" onFavClick={onFavClick} onPinClick={onPinClick} />
        </Flex>
        <Flex>
          <Button size="xs" color="blue" onClick={onCreateClick}>
            Create event
          </Button>
          <Spacing space="1rem" />
          <IconButton icon={<Icon icon="ellipsis-h" />} size="xs" />
        </Flex>
      </Flex>
      <Spacing space="0.5rem" vertical />
      <EventGrid events={board.events} />
    </Box>
  )
}
