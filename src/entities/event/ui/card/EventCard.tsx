import React from 'react'
import {Panel, PanelProps} from 'rsuite'
import {Event} from '../../types'

export type EventCardProps = {
  event: Event
} & PanelProps

export const EventCard: React.FC<EventCardProps> = ({event, ...props}) => (
  <Panel shaded bordered header={event.title} {...props}>
    <span>{event.content}</span>
  </Panel>
)
