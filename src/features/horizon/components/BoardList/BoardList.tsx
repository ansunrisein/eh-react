import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox'
import SimpleBar from 'simplebar-react'
import {Board_board} from '../../graphql/types/Board'
import {Dashboard_dashboard_edges} from '../../graphql/types/Dashboard'
import {BoardFragment} from '../../graphql/types/BoardFragment'
import {useScrollToId} from '../../hooks'
import {Board} from '../Board'

export type BoardListProps = {
  boards: Dashboard_dashboard_edges[]
  onBoardFavClick?: (board: Board_board) => unknown
  onBoardPinClick?: (board: Board_board) => unknown
}

export const BoardList: React.FC<BoardListProps> = ({boards, onBoardFavClick, onBoardPinClick}) => {
  const {register, scroll} = useScrollToId()

  const scrollToBoard = useCallback((board: BoardFragment) => scroll(board._id), [scroll])

  return (
    <SimpleBar style={{width: '100%'}} color="blue">
      <Flex as="ul" flexDirection="column" overflowY="auto" height="100%" data-testid="board-list">
        {boards.map(({cursor, node}, i) => (
          <Box
            as="li"
            key={cursor}
            marginTop={i ? '1rem' : '0'}
            ref={register}
            id={node._id}
            data-testid={'board-' + node._id}
          >
            <Board
              board={node}
              expandable
              onExpand={scrollToBoard}
              onBoardFavClick={onBoardFavClick}
              onBoardPinClick={onBoardPinClick}
            />
          </Box>
        ))}
      </Flex>
    </SimpleBar>
  )
}
