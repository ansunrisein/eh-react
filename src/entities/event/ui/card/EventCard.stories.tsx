import React from 'react'
import {Meta, Story} from '@storybook/react'
import {EventCard, EventCardProps} from './EventCard'

export default {
  title: 'entities/event/EventCard',
  component: EventCard,
  args: {
    event: {
      id: '1',
      title: 'Title',
      content: 'Hello my friend!',
    },
  },
} as Meta<EventCardProps>

export const Default: Story<EventCardProps> = props => <EventCard {...props} />
