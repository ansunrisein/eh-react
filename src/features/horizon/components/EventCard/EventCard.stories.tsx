import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box, Flex} from 'reflexbox'
import {EventType} from '@eh/react/.types/globalTypes'
import {Board_board_events_edges_node} from '../../graphql/types/Board'
import {EventCard} from './EventCard'

export default {
  component: EventCard,
  title: 'horizon/components/EventCard',
  parameters: {layout: 'centered'},
  argTypes: {
    deadline: {control: {type: 'date'}, defaultValue: new Date()},
    type: {table: {disable: true}},
    event: {table: {disable: true}},
  },
} as Meta

const Card: Story<Board_board_events_edges_node> = event => (
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
}

export const List = Card.bind({})
List.args = {
  type: EventType.LIST,
  header: 'Story',
  list: ['Do do do do do', 'Do do do do do', 'Do do do do do', 'Do do do do do', 'Do do do do do'],
}
