import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box} from 'reflexbox'
import {EventFragment} from '@eh/react/features/shared/graphql/types/EventFragment'
import {EventType} from '@eh/react/.types/globalTypes'
import {FullEventCard, FullEventCardProps} from './FullEventCard'

export default {
  component: FullEventCard,
  title: 'event/components/FullEventCard',
  parameters: {layout: 'centered'},
  argTypes: {
    event: {
      defaultValue: {
        _id: 'id1',
        type: EventType.TEXT,
        header: 'Event',
        text: 'Work fg fdgd gdf df er gtdfgdf fdgdfg dfgdfg dfgg ggg.',
        deadline: new Date().getTime() + 100030334,
      } as EventFragment,
    },
    onUpdateEvent: {table: {disable: true}},
    onPinnedEvent: {table: {disable: true}},
    onShareEvent: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<FullEventCardProps> = props => (
  <Box>
    <FullEventCard {...props} />
  </Box>
)
