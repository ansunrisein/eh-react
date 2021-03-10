import React from 'react'
import {Meta, Story} from '@storybook/react'
import {MockedProvider} from '@apollo/client/testing'
import {EventFormModal, EventFormModalProps} from './EventFormModal'

export default {
  component: EventFormModal,
  title: 'EventFormModal',
  decorators: [
    Story => (
      <MockedProvider mocks={[]}>
        <Story />
      </MockedProvider>
    ),
  ],
  argTypes: {
    onHide: {
      table: {
        disable: true,
      },
    },
    boardId: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    show: true,
  },
} as Meta

export const Usual: Story<EventFormModalProps> = props => <EventFormModal {...props} />
