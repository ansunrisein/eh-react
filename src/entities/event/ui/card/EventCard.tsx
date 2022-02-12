import React from 'react'
import {Panel, PanelProps} from 'rsuite'
import {Flex} from '@eh/shared/lib/reflexbox'
import {TimerBadge} from '@eh/shared/ui'
import {EventFragment} from '../../api'

export type EventCardProps = {
  event: EventFragment
} & PanelProps

export const EventCard: React.FC<EventCardProps> = ({event, ...props}) => (
  <Panel shaded bordered {...props}>
    <Flex justifyContent="space-between" alignItems="center" style={{marginBottom: '1rem'}}>
      <h4>{event.title}</h4>
      {event.deadline && <TimerBadge withTooltip expiryTimestamp={new Date(event.deadline)} />}
    </Flex>
    <span>{event.content}</span>
  </Panel>
)
