import React, {useCallback, useState} from 'react'
import {Button, Icon, Panel} from 'rsuite'
import {Box, Flex} from 'reflexbox'
import {BoardFragment} from '../../graphql/types/BoardFragment'
import {EventGrid} from '../EventGrid'
import {EventLine} from '../EventLine'

export type BoardProps = {
  board: BoardFragment
  expandable?: boolean
  onExpand?: () => unknown
  onCollapse?: () => unknown
}

export const Board: React.FC<BoardProps> = ({board, expandable, onExpand, onCollapse}) => {
  const [expanded, setExpanded] = useState(false)

  const expand = useCallback(() => {
    setExpanded(true)
    onExpand?.()
  }, [setExpanded, onExpand])

  const collapse = useCallback(() => {
    setExpanded(false)
    onCollapse?.()
  }, [setExpanded, onCollapse])

  const toggle = useCallback(() => (expanded ? collapse() : expand()), [expanded, collapse, expand])

  return (
    <Panel bordered shaded style={{position: 'relative'}}>
      <Flex justifyContent="space-between" marginBottom="1rem">
        <h5>{board.name}</h5>
        <span>{board.name}</span>
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
          <Button onClick={toggle}>
            <Icon icon={expanded ? 'up' : 'down'} />
          </Button>
        </Box>
      )}
    </Panel>
  )
}
