import React from 'react'
import {Meta, Story} from '@storybook/react'
import {MockedProvider} from '@apollo/client/testing'
import {BoardFormModal, BoardFormModalProps} from './BoardFormModal'

export default {
  component: BoardFormModal,
  title: 'BoardFormModal',
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
  },
  args: {
    show: true,
  },
} as Meta

export const Usual: Story<BoardFormModalProps> = props => <BoardFormModal {...props} />
