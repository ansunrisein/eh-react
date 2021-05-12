import React, {useState} from 'react'
import {Meta, Story} from '@storybook/react'
import {ApolloProvider} from '@apollo/client'
import {createMockClient} from 'mock-apollo-client'
import delay from 'delay'
import {MemoryRouter} from 'react-router-dom'
import {board as defaultBoard} from '@eh/react/features/horizon/views/Board/testData'
import {BOARD, UPDATE_BOARD} from '../../graphql'
import {BoardSettingsFormDrawer, BoardSettingsFormDrawerProps} from './BoardSettingsFormDrawer'

export default {
  component: BoardSettingsFormDrawer,
  title: 'horizon/modals/BoardSettingsFormDrawer',
  decorators: [
    Story => {
      const [board, setBoard] = useState(defaultBoard)

      const client = createMockClient()

      client.setRequestHandler(UPDATE_BOARD, variables =>
        delay(1000).then(() => {
          setBoard({...board, ...variables})
          return {data: {board}}
        }),
      )
      client.setRequestHandler(BOARD, () => delay(1000).then(() => ({data: {board}})))

      return (
        <ApolloProvider client={client}>
          <MemoryRouter initialEntries={[{pathname: '/123'}]}>
            <Story />
          </MemoryRouter>
        </ApolloProvider>
      )
    },
  ],
  argTypes: {
    onHide: {table: {disable: true}},
    id: {table: {disable: true}},
  },
  args: {show: true},
} as Meta

export const Usual: Story<BoardSettingsFormDrawerProps> = props => (
  <BoardSettingsFormDrawer {...props} />
)
