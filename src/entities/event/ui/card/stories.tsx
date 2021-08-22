import React from 'react'
import {Meta, Story} from '@storybook/react'
import {EventCard, EventCardProps} from './EventCard'

export default {
  component: EventCard,
  title: 'entities/event/EventCard',
  parameters: {layout: 'centered'},
} as Meta<EventCardProps>

export const Default: Story<EventCardProps> = props => <EventCard {...props} />
Default.args = {
  event: {
    id: '1',
    content: 'Meow meow meow',
  },
}

export const WithTitle: Story<EventCardProps> = props => <EventCard {...props} />
WithTitle.args = {
  event: {
    id: '1',
    title: 'Meow',
    content: 'Meow meow meow',
  },
}
