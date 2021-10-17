import React from 'react'
import {ButtonGroup, IconButton, Panel} from 'rsuite'
import {Edit, Trash} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {Event} from '../../types'
import S from './EventView.module.scss'

export type EventViewProps = {
  event: Event
  onEdit?: () => void
  onRemove?: () => void
}

export const EventView: React.FC<EventViewProps> = ({event, onEdit, onRemove, ...props}) => (
  <Panel {...props}>
    <Flex justifyContent="space-between">
      <div>
        <h4>{event.title}</h4>
        <p className={S.content}>{event.content}</p>
      </div>

      <ButtonGroup vertical>
        <IconButton onClick={onEdit} icon={<Edit />} appearance="primary" />
        <IconButton onClick={onRemove} icon={<Trash />} />
      </ButtonGroup>
    </Flex>
  </Panel>
)
