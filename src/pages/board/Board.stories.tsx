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
import {createBoardEntity, withBoardEntity} from '@eh/entities/board'
import {createUpdateEventFeature, withUpdateEventFeature} from '@eh/features/update-event/model'
import {Board} from './Board'

const domain = createDomain()
const sessionEntity = createSessionEntity({domain})
const eventEntity = createEventEntity(
  {domain},
  {
    events: [
      {id: '1', title: 'Title2', content: '123'},
      {id: '2', title: 'Title1', content: '123'},
    ],
  },
)
const boardEntity = createBoardEntity(
  {domain},
  {boards: [{id: '1', title: 'Board', events: ['1', '2']}]},
)
const updateEventFeature = createUpdateEventFeature({domain, eventEntity, boardEntity})
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
    withUpdateEventFeature({updateEvent: updateEventFeature}),
    withAuthWithFirebaseFeature({authWithFirebase: authWithFirebaseFeature}),
  ]),
} as Meta

export const Default: Story = props => <Board {...props} />
