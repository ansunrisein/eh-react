import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box, Flex} from 'reflexbox'
import {EventFragment} from '@eh/react/features/shared/graphql/types/EventFragment'
import {EventType} from '@eh/react/.types/globalTypes'
import {EventCard} from './EventCard'

export default {
  component: EventCard,
  title: 'EventCard',
} as Meta

const Card: Story<EventFragment> = event => (
  <Flex>
    <Box width="20vw">
      <EventCard event={event} />
    </Box>
    <Box marginLeft="1rem" width="20vw">
      <EventCard event={{...event, header: null}} />
    </Box>
    <Box marginLeft="1rem" width="20vw">
      <EventCard event={{...event, deadline: undefined}} />
    </Box>
    <Box marginLeft="1rem" width="20vw">
      <EventCard event={{...event, deadline: undefined, header: null}} />
    </Box>
  </Flex>
)

export const Text = Card.bind({})
Text.args = {
  type: EventType.TEXT,
  header: 'Story',
  text: 'Aaaaaa aaaaaaa aaa aaa aaaaaaaaaaaa Aaaaaa aaaaaaa aaa aaa aaaaaaaaaaaa',
  deadline: '2020-12-20T21:57:03.365Z',
}

export const List = Card.bind({})
List.args = {
  type: EventType.LIST,
  header: 'Story',
  list: ['Do do do do do', 'Do do do do do', 'Do do do do do', 'Do do do do do', 'Do do do do do'],
  deadline: '2020-12-20T21:57:03.365Z',
}
