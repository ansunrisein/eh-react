import React from 'react'
import {Box, Flex} from 'reflexbox'
import {ButtonGroup, Icon, IconButton, List, Panel} from 'rsuite'
import {EventFragment} from '@eh/react/features/shared/graphql/types/EventFragment'
import {TimerBadge} from '@eh/react/features/horizon/components'
import {isTextEvent} from '@eh/react/features/shared/utils/event'
import {ActionIcon, Spacing} from '@eh/react/ui'

export type FullEventCardProps = {
  event: EventFragment
  onUpdateEvent?: () => unknown
  onPinEvent?: (id: string) => unknown
  onRemoveEvent?: (id: string) => unknown
  onShareEvent?: (id: string) => unknown
}

export const FullEventCard: React.FC<FullEventCardProps> = ({
  event,
  onUpdateEvent,
  onPinEvent,
  onRemoveEvent,
  onShareEvent,
}) => (
  <Flex justifyContent="space-between">
    <Panel style={{flex: 1}}>
      <Flex alignItems="center" justifyContent="space-between">
        <h4>{event.header}</h4>
        {event.deadline && (
          <Box marginLeft="1rem">
            <TimerBadge expiryTimestamp={new Date(event.deadline).getTime()} />
          </Box>
        )}
      </Flex>
      <Spacing space="1rem" vertical />
      {isTextEvent(event) ? (
        <Box>{event.text}</Box>
      ) : (
        <List bordered>
          {event.list.map((e, i) => (
            <List.Item key={i}>{e}</List.Item>
          ))}
        </List>
      )}
    </Panel>
    <Spacing space="1px" />
    <ButtonGroup vertical>
      <IconButton onClick={onUpdateEvent} icon={<Icon icon="edit" />} />
      <IconButton
        onClick={() => onPinEvent?.(event._id)}
        icon={<ActionIcon inverted={event.pinned} icon="pin" />}
      />
      {/*<IconButton onClick={() => onShareEvent?.(event._id)} icon={<Icon icon="share" />} />*/}
      <IconButton onClick={() => onRemoveEvent?.(event._id)} icon={<Icon icon="trash" />} />
    </ButtonGroup>
  </Flex>
)
