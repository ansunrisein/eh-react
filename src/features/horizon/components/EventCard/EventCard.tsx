import React from 'react'
import {List, Panel} from 'rsuite'
import {Flex} from 'reflexbox'
import {isTextEvent} from '@eh/react/features/shared/utils/event'
import {EventFragment} from '@eh/react/features/shared/graphql/types/EventFragment'
import {TimerBadge} from '../TimerBadge'

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
          <span style={{wordBreak: 'break-word'}}>{event.header}</span>
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
