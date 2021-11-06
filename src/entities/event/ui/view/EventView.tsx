import React from 'react'
import {RiDeleteBin7Fill, RiEdit2Fill} from 'react-icons/ri'
import {ButtonGroup, IconButton, Panel} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {EventFragment} from '@eh/shared/api'
import {Flex} from '@eh/shared/lib/reflexbox'
import S from './EventView.module.scss'

export type EventViewProps = {
  event: EventFragment
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
        <IconButton onClick={onEdit} icon={<Icon as={RiEdit2Fill} />} appearance="primary" />
        <IconButton onClick={onRemove} icon={<Icon as={RiDeleteBin7Fill} />} />
      </ButtonGroup>
    </Flex>
  </Panel>
)
