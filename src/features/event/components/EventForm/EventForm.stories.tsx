import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box} from 'reflexbox'
import {EventForm, EventFormProps} from './EventForm'

export default {
  component: EventForm,
  title: 'event/EventForm',
  parameters: {
    controls: {hideNoControlsWarning: true},
    layout: 'centered',
  },
} as Meta

export const Usual: Story<EventFormProps> = props => (
  <Box width="40vw">
    <EventForm {...props} />
  </Box>
)
