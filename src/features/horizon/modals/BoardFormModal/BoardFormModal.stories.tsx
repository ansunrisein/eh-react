import React from 'react'
import {Meta, Story} from '@storybook/react'
import {ApolloProvider} from '@apollo/client'
import {createMockClient} from 'mock-apollo-client'
import delay from 'delay'
import {CREATE_BOARD} from '../../graphql'
import {BoardFormModal, BoardFormModalProps} from './BoardFormModal'

export default {
  component: BoardFormModal,
  title: 'horizon/modals/BoardFormModal',
  decorators: [
    Story => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
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

const client = createMockClient()

client.setRequestHandler(CREATE_BOARD, () => delay(1000).then(() => ({data: {}})))

export const Usual: Story<BoardFormModalProps> = props => <BoardFormModal {...props} />
