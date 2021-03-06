import React, {useCallback, useState} from 'react'
import {Button, Divider, Icon, Panel} from 'rsuite'
import {Box, Flex} from 'reflexbox'
import {BoardFragment} from '../../graphql/types/BoardFragment'
import {BoardControl} from '../BoardControl'
import {EventGrid} from '../EventGrid'
import {EventLine} from '../EventLine'

export type BoardProps = {
  board: BoardFragment
  expandable?: boolean
  onExpand?: (board: BoardFragment) => unknown
  onCollapse?: (board: BoardFragment) => unknown
}

export const Board: React.FC<BoardProps> = ({board, expandable, onExpand, onCollapse}) => {
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
          <h5>{board.name}</h5>
          <Divider vertical style={{height: 'auto', alignSelf: 'stretch'}} />
          <span>{board.description}</span>
        </Flex>
        <BoardControl />
      </Flex>
      {expanded ? <EventGrid events={board.events} /> : <EventLine events={board.events} />}
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
