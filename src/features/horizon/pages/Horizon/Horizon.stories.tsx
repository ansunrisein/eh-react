import React from 'react'
import {Meta, Story} from '@storybook/react'
import {ApolloProvider, InMemoryCache} from '@apollo/client'
import {createMockClient} from 'mock-apollo-client'
import delay from 'delay'
import * as R from 'ramda'
import {Dashboard_dashboard_edges, DashboardVariables} from '../../graphql/types/Dashboard'
import {DASHBOARD} from '../../graphql'
import {boards} from '../../views/Dashboard/testData'
import {Horizon} from './Horizon'

export default {
  title: 'horizon/pages/Horizon',
  component: Horizon,
  parameters: {layout: 'fullscreen', controls: {hideNoControlsWarning: true}},
  decorators: [
    Story => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
} as Meta

const client = createMockClient({
  cache: new InMemoryCache({
    addTypename: false,
    possibleTypes: {Event: ['TextEvent']},
  }),
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
})

const sortBoards = (sort: DashboardVariables['sort'], boards: Dashboard_dashboard_edges[]) => {
  if (!sort || Object.values(sort).every(e => !e || e === 'none')) {
    return boards
  }

  const nearestEvent = (b: Dashboard_dashboard_edges) =>
    Math.min(...b.node.events.edges.map(e => Number(e.node.deadline) || Infinity))

  const sortByNearest =
    sort.nearestEvent === 'desc'
      ? R.descend(nearestEvent)
      : sort.nearestEvent === 'asc'
      ? R.ascend(nearestEvent)
      : R.always(0)

  const sortByPin =
    sort.pin === 'desc'
      ? R.descend(R.path(['node', 'pinned']))
      : sort.pin === 'asc'
      ? R.ascend(R.path(['node', 'pinned']))
      : R.always(0)

  const sortByFav =
    sort.favorite === 'desc'
      ? R.descend(R.path(['node', 'favorite']))
      : sort.favorite === 'asc'
      ? R.ascend(R.path(['node', 'favorite']))
      : R.always(0)

  return R.sortWith([sortByPin, sortByNearest, sortByFav], boards)
}

const filterBoards = (
  filter: DashboardVariables['filter'],
  boards: Dashboard_dashboard_edges[],
) => {
  if (!filter || Object.values(filter).every(e => !e)) {
    return boards
  }

  const filterByFavorite = [1, 2].includes(filter.favorite || 0)
    ? R.pathEq(['node', 'favorite'], filter.favorite === 1)
    : R.T

  const filterByPin = [1, 2].includes(filter.pin || 0)
    ? R.pathEq(['node', 'pinned'], filter.pin === 1)
    : R.T

  return R.filter(R.allPass([filterByFavorite, filterByPin]), boards)
}

client.setRequestHandler(DASHBOARD, ({sort, filter}: DashboardVariables) => {
  const sortedBoards = sortBoards(sort, boards)
  const filteredBoards = filterBoards(filter, sortedBoards)

  return delay(300).then(() => ({
    data: {
      dashboard: {
        edges: filteredBoards,
        pageInfo: {
          startCursor: filteredBoards[0].cursor,
          endCursor: filteredBoards[filteredBoards.length - 1].cursor,
          hasNextPage: false,
          hasPreviousPage: false,
        },
      },
    },
  }))
})

export const Usual: Story = props => <Horizon {...props} />
