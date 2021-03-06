import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox'
import {Button, Icon, IconButton, Tag} from 'rsuite'
import {Spacing} from '@eh/react/ui'
import {BoardControl, EventGrid} from '../../components'
import {Board_board} from '../../graphql/types/Board'

export type BoardProps = {
  board: Board_board
  onCreateEventClick?: (board: Board_board) => unknown
  onEventClick?: (id: string) => unknown
  onBoardFavClick?: (board: Board_board) => unknown
  onBoardPinClick?: (board: Board_board) => unknown
  onNavIconClick?: () => unknown
}

export const Board: React.FC<BoardProps> = ({
  board,
  onCreateEventClick,
  onEventClick,
  onBoardFavClick,
  onBoardPinClick,
  onNavIconClick,
}) => {
  const onCreateClick = useCallback(() => onCreateEventClick?.(board), [onCreateEventClick, board])
  const onFavClick = useCallback(() => onBoardFavClick?.(board), [onBoardFavClick, board])
  const onPinClick = useCallback(() => onBoardPinClick?.(board), [onBoardPinClick, board])

  return (
    <Box>
      <Flex padding="0.5rem" justifyContent="space-between">
        <Flex>
          <Tag color="blue" title={board.description || undefined}>
            <strong>{board.title}</strong>
          </Tag>
          <Spacing space="1rem" />
          <BoardControl
            size="xs"
            isFav={board.favorite}
            isPinned={board.pinned}
            onFavClick={onFavClick}
            onPinClick={onPinClick}
          />
        </Flex>
        <Flex>
          <Button size="xs" color="blue" onClick={onCreateClick}>
            Create event
          </Button>
          <Spacing space="1rem" />
          <IconButton onClick={onNavIconClick} icon={<Icon icon="ellipsis-h" />} size="xs" />
        </Flex>
      </Flex>
      <Spacing space="0.5rem" vertical />
      {!board.events.edges.length ? (
        <Flex height="70vh" alignItems="center" justifyContent="center">
          <Box fontSize="2rem" fontWeight="300">
            You have no events :( Create now!
          </Box>
        </Flex>
      ) : (
        <EventGrid onEventClick={onEventClick} events={board.events.edges} />
      )}
    </Box>
  )
}
