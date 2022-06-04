import React from 'react'
import {format} from 'date-fns'
import {RiDeleteBin7Fill, RiEdit2Fill} from 'react-icons/ri'
import {ButtonGroup, IconButton, Panel, Placeholder, Stack, Tag} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {TimerBadge} from '@eh/shared/ui'
import {EventFragment} from '../../api'
import S from './EventView.module.scss'

export type EventViewProps = {
  event: EventFragment | null
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
    <Stack justifyContent="space-between" alignItems="flex-start">
      <div>
        {!event ? <Placeholder.Paragraph active rows={1} /> : <h4>{event.title}</h4>}

        {!event ? (
          <Placeholder.Paragraph active className={S.content} />
        ) : (
          <p className={S.content}>{event.content}</p>
        )}

        {event?.deadline && (
          <div className={S.deadline}>
            <Tag>{format(new Date(event.deadline), 'dd.MM.yyyy')}</Tag>
            <TimerBadge expiryTimestamp={new Date(event.deadline)} />
          </div>
        )}
      </div>

      {(withEdit || withRemove) && (
        <ButtonGroup vertical>
          {withEdit && (
            <IconButton onClick={onEdit} icon={<Icon as={RiEdit2Fill} />} appearance="primary" />
          )}
          {withRemove && <IconButton onClick={onRemove} icon={<Icon as={RiDeleteBin7Fill} />} />}
        </ButtonGroup>
      )}
    </Stack>
  </Panel>
)
