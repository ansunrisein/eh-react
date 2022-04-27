import React from 'react'
import {Panel, PanelProps} from 'rsuite'
import {TimerBadge} from '@eh/shared/ui'
import {EventFragment} from '../../api'
import S from './EventCard.module.scss'

export type EventCardProps = {
  event: EventFragment
} & PanelProps

export const EventCard: React.FC<EventCardProps> = ({event, ...props}) => (
  <Panel shaded bordered {...props}>
    <div className={S.header}>
      <h4 className={S.title}>{event.title}</h4>
      {event.deadline && (
        <TimerBadge withTooltip expiryTimestamp={new Date(event.deadline)} className={S.badge} />
      )}
    </div>
    <span className={S.content}>{event.content}</span>
  </Panel>
)
