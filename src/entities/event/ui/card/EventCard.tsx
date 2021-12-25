import React from 'react'
import {Panel, PanelProps} from 'rsuite'
import {EventFragment} from '../../api'

export type EventCardProps = {
  event: EventFragment
} & PanelProps

export const EventCard: React.FC<EventCardProps> = ({event, ...props}) => (
  <Panel shaded bordered header={event.title} {...props}>
    <span>{event.content}</span>
  </Panel>
)
