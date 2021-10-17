import React from 'react'
import {Meta, Story} from '@storybook/react'
import {EventForm} from './EventForm'

export default {
  title: 'features/edit-event/EventForm',
  component: EventForm,
  parameters: {layout: 'centered', docs: {source: {type: 'code'}}},
} as Meta

export const Default: Story = props => (
  <div style={{width: 500}}>
    <EventForm {...props} />
  </div>
)
