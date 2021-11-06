import React from 'react'
import {Meta, Story} from '@storybook/react'
import {EventView, EventViewProps} from './EventView'

export default {
  title: 'entities/event/EventView',
  component: EventView,
  args: {
    event: {
      _id: '12',
      title: 'Title',
      content: 'Content',
    },
  },
} as Meta<EventViewProps>

export const Default: Story<EventViewProps> = props => <EventView {...props} />
