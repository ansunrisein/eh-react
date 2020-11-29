import React from 'react'
import {List, Panel} from 'rsuite'
import {Flex} from 'reflexbox'
import {EventFragment} from '../../graphql/types/EventFragment'
import {TimerBadge} from '../TimerBadge'
import {isTextEvent} from './helpers'

export type EventCardProps = {
  event: EventFragment
}

export const EventCard: React.FC<EventCardProps> = ({event}) => (
  <Panel
    shaded
    bordered
    header={
      (event.header || event.deadline) && (
        <Flex justifyContent="space-between">
          <span>{event.header}</span>
          {!!event.deadline && <TimerBadge expiryTimestamp={new Date(event.deadline).getTime()} />}
        </Flex>
      )
    }
  >
    {isTextEvent(event) ? (
      <span>{event.text}</span>
    ) : (
      <List bordered>
        {event.list.map((e, i) => (
          <List.Item index={i} key={i}>
            {e}
          </List.Item>
        ))}
      </List>
    )}
  </Panel>
)
