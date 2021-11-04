import React from 'react'
import {createDomain} from 'effector'
import {Meta, Story} from '@storybook/react'
import {hocsToDecorators} from '@eh/shared/lib/hocs-to-decorators'
import {authMock} from '@eh/shared/mocks/firebase'
import {createBoardEntity, withBoardEntity} from '@eh/entities/board'
import {createEventEntity} from '@eh/entities/event'
import {createSessionEntity, withSessionEntity} from '@eh/entities/session'
import {
  createAuthWithFirebaseFeature,
  withAuthWithFirebaseFeature,
} from '@eh/features/auth-with-firebase'
import {Dashboard} from './Dashboard'
import {createDashboardPage, withDashboardPage} from './model'

const domain = createDomain()
const sessionEntity = createSessionEntity({domain})
const authWithFirebaseFeature = createAuthWithFirebaseFeature({
  auth: authMock,
  session: sessionEntity,
})
const boardEntity = createBoardEntity(
  {domain},
  {
    boards: [
      {title: 'Board', events: ['1', '2']},
      {title: 'Board', events: ['1']},
    ].map((board, id) => ({...board, id: String(id)})),
  },
)
const dashboardPage = createDashboardPage({
  eventEntity: createEventEntity(
    {domain},
    {
      events: [
        {id: '1', title: '1', content: '1'},
        {id: '2', title: '2', content: '2'},
      ],
    },
  ),
  boardEntity,
})

export default {
  title: 'pages/dashboard',
  component: Dashboard,
  parameters: {docs: {source: {type: 'code'}}, layout: 'fullscreen'},
  decorators: hocsToDecorators([
    withSessionEntity({session: sessionEntity}),
    withAuthWithFirebaseFeature({authWithFirebase: authWithFirebaseFeature}),
    withBoardEntity({board: boardEntity}),
    withDashboardPage({dashboard: dashboardPage}),
  ]),
} as Meta

export const Default: Story = props => <Dashboard {...props} />
