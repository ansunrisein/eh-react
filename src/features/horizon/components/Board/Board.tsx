import React, {useCallback, useState} from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import {Button, Divider, Icon, Panel} from 'rsuite'
import {Box, Flex} from 'reflexbox'
import {Board_board} from '../../graphql/types/Board'
import {BoardFragment} from '../../graphql/types/BoardFragment'
import {BoardControl} from '../BoardControl'
import {EventGrid} from '../EventGrid'
import {EventLine} from '../EventLine'

export type BoardProps = {
  board: Board_board
  expandable?: boolean
  onExpand?: (board: BoardFragment) => unknown
  onCollapse?: (board: BoardFragment) => unknown
}

export const Board: React.FC<BoardProps> = ({board, expandable, onExpand, onCollapse}) => {
  const {path} = useRouteMatch()

  const [expanded, setExpanded] = useState(false)

  const expand = useCallback(() => {
    setExpanded(true)
    onExpand?.(board)
  }, [setExpanded, onExpand, board])

  const collapse = useCallback(() => {
    setExpanded(false)
    onCollapse?.(board)
  }, [setExpanded, onCollapse, board])

  const toggle = useCallback(() => (expanded ? collapse() : expand()), [expanded, collapse, expand])

  return (
    <Panel bordered shaded style={{position: 'relative'}}>
      <Flex marginBottom="1rem" justifyContent="space-between" alignItems="center">
        <Flex alignItems="flex-end">
          <Link to={`${path}board/${board._id}`}>
            <h5>{board.title}</h5>
          </Link>
          <Divider vertical style={{height: 'auto', alignSelf: 'stretch'}} />
          <span>{board.description}</span>
        </Flex>
        <BoardControl isFav={board.favorite} isPinned={board.pinned} />
      </Flex>
      {expanded ? (
        <EventGrid events={board.events?.edges} />
      ) : (
        <EventLine events={board.events?.edges} />
      )}
      {expandable && (
        <Box
          style={{
            position: 'absolute',
            right: '1.5rem',
            bottom: '1.5rem',
            zIndex: 9999,
          }}
        >
          <Button onClick={toggle} data-testid="expand-button">
            <Icon icon={expanded ? 'up' : 'down'} />
          </Button>
        </Box>
      )}
    </Panel>
  )
}
