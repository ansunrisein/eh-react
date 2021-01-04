import React, {useCallback} from 'react'
import {Box, Flex} from 'reflexbox'
import {BoardFragment} from '../../graphql/types/BoardFragment'
import {useScrollToId} from '../../hooks'
import {Board} from '../Board'

export type BoardListProps = {
  boards: BoardFragment[]
}

export const BoardList: React.FC<BoardListProps> = ({boards}) => {
  const {register, scroll} = useScrollToId()

  const scrollToBoard = useCallback((board: BoardFragment) => scroll(board.id), [scroll])

  return (
    <Flex as="ul" flexDirection="column" data-testid="board-list">
      {boards.map((e, i) => (
        <Box
          as="li"
          key={i}
          marginTop={i ? '1rem' : '0'}
          ref={register}
          id={e.id}
          data-testid={'board-' + e.id}
        >
          <Board board={e} expandable onExpand={scrollToBoard} />
        </Box>
      ))}
    </Flex>
  )
}
