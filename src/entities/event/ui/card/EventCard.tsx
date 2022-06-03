import React, {useCallback} from 'react'
import {Panel, PanelProps} from 'rsuite'
import {TimerBadge} from '@eh/shared/ui'
import {EventFragment} from '../../api'
import S from './EventCard.module.scss'

export type EventCardProps = {
  event: EventFragment
  showDeadline?: boolean
  onClick?: (event: EventFragment) => void
} & Omit<PanelProps, 'onClick'>

export const EventCard: React.FC<EventCardProps> = ({event, showDeadline, onClick, ...props}) => {
  const handleClick = useCallback(() => onClick?.(event), [event, onClick])

  return (
    <Panel shaded bordered onClick={handleClick} {...props}>
      <div className={S.header}>
        <h4 className={S.title}>{event.title}</h4>
        {event.deadline && (
          <TimerBadge
            withTooltip={!showDeadline}
            showTime={showDeadline}
            expiryTimestamp={new Date(event.deadline)}
            className={S.badge}
          />
        )}
      </div>
      <span className={S.content}>{event.content}</span>
    </Panel>
  )
}
