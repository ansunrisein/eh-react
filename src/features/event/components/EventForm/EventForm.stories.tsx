import React from 'react'
import {Meta, Story} from '@storybook/react'
import {EventForm} from '@eh/react/features/event/components'

export default {
  component: EventForm,
  title: 'EventForm',
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
} as Meta

export const Usual: Story = () => <EventForm />
