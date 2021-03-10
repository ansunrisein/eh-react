import React from 'react'
import {Meta, Story} from '@storybook/react'
import {EventFormModal} from './EventFormModal'

export default {
  component: EventFormModal,
  title: 'EventFormModal',
} as Meta

export const Usual: Story = () => <EventFormModal />
