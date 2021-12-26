import React from 'react'
import {RiDeleteBin7Fill, RiEdit2Fill} from 'react-icons/ri'
import {ButtonGroup, IconButton, Panel} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {EventFragment} from '../../api'
import S from './EventView.module.scss'

export type EventViewProps = {
  event: EventFragment
  withEdit?: boolean
  withRemove?: boolean
  onEdit?: () => void
  onRemove?: () => void
}

export const EventView: React.FC<EventViewProps> = ({
  event,
  withEdit,
  withRemove,
  onEdit,
  onRemove,
  ...props
}) => (
  <Panel {...props}>
    <Flex justifyContent="space-between">
      <div>
        <h4>{event.title}</h4>
        <p className={S.content}>{event.content}</p>
      </div>

      {(withEdit || withRemove) && (
        <ButtonGroup vertical>
          {withEdit && (
            <IconButton onClick={onEdit} icon={<Icon as={RiEdit2Fill} />} appearance="primary" />
          )}
          {withRemove && <IconButton onClick={onRemove} icon={<Icon as={RiDeleteBin7Fill} />} />}
        </ButtonGroup>
      )}
    </Flex>
  </Panel>
)
