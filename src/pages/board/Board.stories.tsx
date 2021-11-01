import React from 'react'
import {Meta, Story} from '@storybook/react'
import {createDomain} from 'effector'
import {hocsToDecorators} from '@eh/shared/lib/hocs-to-decorators'
import {authMock} from '@eh/shared/mocks/firebase'
import {createSessionEntity, withSessionEntity} from '@eh/entities/session'
import {createEventEntity, withEventEntity} from '@eh/entities/event'
import {
  createAuthWithFirebaseFeature,
  withAuthWithFirebaseFeature,
} from '@eh/features/auth-with-firebase'
import {Board} from './Board'

const domain = createDomain()
const sessionEntity = createSessionEntity({domain})
const eventEntity = createEventEntity({domain})
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
    withAuthWithFirebaseFeature({authWithFirebase: authWithFirebaseFeature}),
  ]),
} as Meta

export const Default: Story = props => <Board {...props} />
