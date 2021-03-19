import React from 'react'
import {Meta, Story} from '@storybook/react'
import {MemoryRouter, Route} from 'react-router-dom'
import {MockedProvider} from '@apollo/client/testing'
import {InMemoryCache} from '@apollo/client'
import {board} from '../../views/Board/testData'
import {BOARD} from '../../graphql'
import {BoardPage} from './BoardPage'

export default {
  component: BoardPage,
  title: 'horizon/BoardPage',
  parameters: {layout: 'fullscreen', controls: {hideNoControlsWarning: true}},
  decorators: [
    Story => (
      <MockedProvider
        mocks={[
          {
            request: {query: BOARD, variables: {id: 'board1'}},
            result: {data: {board}},
          },
        ]}
        cache={new InMemoryCache({possibleTypes: {Event: ['TextEvent']}})}
      >
        <MemoryRouter initialEntries={[{pathname: '/board1'}]}>
          <Route path="/:id">
            <Story />
          </Route>
        </MemoryRouter>
      </MockedProvider>
    ),
  ],
} as Meta

export const Usual: Story = () => <BoardPage />
