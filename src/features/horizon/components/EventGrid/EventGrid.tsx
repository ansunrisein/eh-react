import React from 'react'
import {Box} from 'reflexbox'
import {Board_board_events_edges} from '../../graphql/types/Board'
import {EventCard} from '../EventCard'
import s from './EventGrid.module.css'

export type EventGridProps = {
  events?: Board_board_events_edges[]
  onEventClick?: (id: string) => unknown
}

export const EventGrid: React.FC<EventGridProps> = ({events, onEventClick}) => (
  <div className={s.grid}>
    {events &&
      events.map(e => (
        <Box
          onClick={() => onEventClick?.(e.node._id)}
          key={e.cursor}
          marginBottom="0.8rem"
          maxHeight="30vh"
          minHeight="15vh"
        >
          <EventCard event={e.node} />
        </Box>
      ))}
  </div>
)
