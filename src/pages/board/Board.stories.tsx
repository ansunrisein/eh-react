import React from 'react'
import {createDomain} from 'effector'
import {ApolloClient, InMemoryCache} from '@apollo/client'
import {Meta, Story} from '@storybook/react'
import {hocsToDecorators} from '@eh/shared/lib/hocs-to-decorators'
import {authMock} from '@eh/shared/mocks/firebase'
import {createBoardEntity, withBoardEntity} from '@eh/entities/board'
import {createEventEntity, withEventEntity} from '@eh/entities/event'
import {createSessionEntity, withSessionEntity} from '@eh/entities/session'
import {
  createAuthWithFirebaseFeature,
  withAuthWithFirebaseFeature,
} from '@eh/features/auth-with-firebase'
import {Board} from './Board'

const domain = createDomain()
// TODO: mock
const apollo = new ApolloClient({cache: new InMemoryCache()})
const sessionEntity = createSessionEntity({domain})
const eventEntity = createEventEntity({domain, apollo})
const boardEntity = createBoardEntity({domain, apollo})
const authWithFirebaseFeature = createAuthWithFirebaseFeature({
  auth: authMock,
  session: sessionEntity,
})

export default {
  title: 'pages/board',
  component: Board,
  parameters: {docs: {source: {type: 'code'}}, layout: 'fullscreen'},
  decorators: hocsToDecorators([
    withSessionEntity({session: sessionEntity}),
    withEventEntity({event: eventEntity}),
    withBoardEntity({board: boardEntity}),
    withAuthWithFirebaseFeature({authWithFirebase: authWithFirebaseFeature}),
  ]),
} as Meta

export const Default: Story = props => <Board {...props} />
