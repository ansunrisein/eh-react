import React from 'react'
import {Meta, Story} from '@storybook/react'
import {createEventEntity, EventEntityProvider} from '../../model'
import {CreateEvent, CreateEventProps} from './CreateEvent'

const event = createEventEntity()

export default {
  component: CreateEvent,
  title: 'entities/event/CreateEvent',
  decorators: [
    Story => (
      <EventEntityProvider event={event}>
        <Story />
      </EventEntityProvider>
    ),
  ],
} as Meta<CreateEventProps>

export const Default: Story<CreateEventProps> = props => <CreateEvent {...props} />
