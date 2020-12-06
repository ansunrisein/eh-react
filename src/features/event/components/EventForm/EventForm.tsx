import React, {useState} from 'react'
import {Button, DatePicker, Input, Steps} from 'rsuite'
import {Box, Flex} from 'reflexbox'
import {EventType} from '@eh/react/.types/globalTypes'
import {EventFragment} from '@eh/react/features/shared/graphql/types/EventFragment'
import {hasContent} from './helpers'
import {Item} from './Item'
import {ContentForm} from './ContentForm'

export const EventForm: React.FC = () => {
  const [event, setEvent] = useState<EventFragment>({
    header: null,
    text: '',
    type: EventType.TEXT,
    deadline: null,
  })

  const setEventType = (type: EventType) =>
    setEvent({
      ...event,
      type,
      ...(type === EventType.LIST ? {list: ['']} : {text: ''}),
    })

  const setContent = (content: string | string[]) =>
    setEvent({...event, ...(Array.isArray(content) ? {list: content} : {text: content})})

  const setHeader = (header: string) => setEvent({...event, header})

  return (
    <Flex as="form" flexDirection="column">
      <Steps vertical>
        <Item status={event.header ? 'finish' : 'wait'} icon="pencil" title="Header">
          <Input name="header" value={event.header || ''} onChange={setHeader} />
        </Item>
        <Item status={hasContent(event) ? 'finish' : 'wait'} icon="pencil" title="Content">
          <ContentForm
            event={event}
            onContentChange={setContent}
            onContentTypeChange={setEventType}
          />
        </Item>
        <Item status={event.deadline ? 'finish' : 'wait'} icon="pencil" title="Deadline">
          <DatePicker disabled={!hasContent(event)} format="YYYY-MM-DD HH:mm:ss" />
        </Item>
      </Steps>
      <Box alignSelf="flex-end">
        <Button appearance="primary" disabled={!hasContent(event)}>
          Save
        </Button>
      </Box>
    </Flex>
  )
}
