import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox'
import {Dashboard_dashboard_edges} from '../../graphql/types/Dashboard'
import {BoardFragment} from '../../graphql/types/BoardFragment'
import {useScrollToId} from '../../hooks'
import {Board} from '../Board'

export type BoardListProps = {
  boards: Dashboard_dashboard_edges[]
}

export const BoardList: React.FC<BoardListProps> = ({boards}) => {
  const {register, scroll} = useScrollToId()

  const scrollToBoard = useCallback((board: BoardFragment) => scroll(board.id), [scroll])

  return (
    <Flex as="ul" flexDirection="column" data-testid="board-list">
      {boards.map(({cursor, node}, i) => (
        <Box
          as="li"
          key={cursor}
          marginTop={i ? '1rem' : '0'}
          ref={register}
          id={node.id}
          data-testid={'board-' + node.id}
        >
          <Board board={node} expandable onExpand={scrollToBoard} />
        </Box>
      ))}
    </Flex>
  )
}