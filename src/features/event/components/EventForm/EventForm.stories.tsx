import React from 'react'
import {Meta, Story} from '@storybook/react'
import {EventForm} from './EventForm'

export default {
  component: EventForm,
  title: 'EventForm',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
} as Meta

export const Usual: Story = () => <EventForm />
