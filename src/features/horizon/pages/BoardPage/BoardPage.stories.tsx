import React from 'react'
import {Meta, Story} from '@storybook/react'
import {MemoryRouter, Route} from 'react-router-dom'
import {ApolloProvider} from '@apollo/client'
import {createMockClient} from 'mock-apollo-client'
import delay from 'delay'
import {board} from '../../views/Board/testData'
import {BOARD} from '../../graphql'
import {BoardPage} from './BoardPage'

export default {
  component: BoardPage,
  title: 'horizon/pages/BoardPage',
  parameters: {layout: 'fullscreen', controls: {hideNoControlsWarning: true}},
  decorators: [
    Story => (
      <ApolloProvider client={client}>
        <MemoryRouter initialEntries={[{pathname: '/board1'}]}>
          <Route path="/:id">
            <Story />
          </Route>
        </MemoryRouter>
      </ApolloProvider>
    ),
  ],
} as Meta

const client = createMockClient()
client.setRequestHandler(BOARD, () => delay(1000).then(() => ({data: {board: board}})))

export const Usual: Story = () => <BoardPage />
