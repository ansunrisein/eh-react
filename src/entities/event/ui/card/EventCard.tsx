import React from 'react'
import {Panel, PanelProps} from '@eh/shared/ui'

export type EventCardProps = {
  event: {
    id: string
    title?: string
    content: string
  }
} & Pick<PanelProps, 'size'>

export const EventCard: React.FC<EventCardProps> = ({event, size = 'sm'}) => (
  <Panel header={event.title} bordered size={size}>
    {event.content}
  </Panel>
)
