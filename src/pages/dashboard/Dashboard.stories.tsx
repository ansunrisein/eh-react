import React from 'react'
import {createDomain} from 'effector'
import {ApolloClient, InMemoryCache} from '@apollo/client'
import {Meta, Story} from '@storybook/react'
import {hocsToDecorators} from '@eh/shared/lib/hocs-to-decorators'
import {authMock} from '@eh/shared/mocks/firebase'
import {createBoardEntity, withBoardEntity} from '@eh/entities/board'
import {createSessionEntity, withSessionEntity} from '@eh/entities/session'
import {
  createAuthWithFirebaseFeature,
  withAuthWithFirebaseFeature,
} from '@eh/features/auth-with-firebase'
import {Dashboard} from './Dashboard'

const domain = createDomain()
// TODO: mock
const apollo = new ApolloClient({cache: new InMemoryCache()})
const sessionEntity = createSessionEntity({domain})
const authWithFirebaseFeature = createAuthWithFirebaseFeature({
  auth: authMock,
  session: sessionEntity,
})
const boardEntity = createBoardEntity({domain, apollo})

export default {
  title: 'pages/dashboard',
  component: Dashboard,
  parameters: {docs: {source: {type: 'code'}}, layout: 'fullscreen'},
  decorators: hocsToDecorators([
    withSessionEntity({session: sessionEntity}),
    withAuthWithFirebaseFeature({authWithFirebase: authWithFirebaseFeature}),
    withBoardEntity({board: boardEntity}),
  ]),
} as Meta

export const Default: Story = props => <Dashboard {...props} />
