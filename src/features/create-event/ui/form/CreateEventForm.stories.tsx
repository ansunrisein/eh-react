import React from 'react'
import {Meta, Story} from '@storybook/react'
import {createDomain} from 'effector'
import {createEventEntity, EventEntityProvider} from '@eh/entities/event'
import {CreateEventForm} from './CreateEventForm'

export default {
  title: 'features/create-event/CreateEventForm',
  component: CreateEventForm,
  parameters: {layout: 'centered', docs: {source: {type: 'code'}}},
  decorators: [
    Story => (
      <EventEntityProvider event={createEventEntity({domain: createDomain()})}>
        <Story />
      </EventEntityProvider>
    ),
  ],
} as Meta

export const Default: Story = props => (
  <div style={{width: 500}}>
    <CreateEventForm {...props} />
  </div>
)
