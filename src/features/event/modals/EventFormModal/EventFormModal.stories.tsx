import React from 'react'
import {Meta, Story} from '@storybook/react'
import {ApolloProvider} from '@apollo/client'
import {createMockClient} from 'mock-apollo-client'
import delay from 'delay'
import {CREATE_EVENT} from '@eh/react/features/event/graphql'
import {EventFormModal, EventFormModalProps} from './EventFormModal'

export default {
  component: EventFormModal,
  title: 'event/modals/EventFormModal',
  decorators: [
    Story => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
  argTypes: {
    onHide: {table: {disable: true}},
    boardId: {table: {disable: true}},
  },
  args: {show: true},
} as Meta

const client = createMockClient()

client.setRequestHandler(CREATE_EVENT, () => delay(1000).then(() => ({data: {}})))

export const Usual: Story<EventFormModalProps> = props => <EventFormModal {...props} />
