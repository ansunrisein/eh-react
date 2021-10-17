import React from 'react'
import {Meta, Story} from '@storybook/react'
import {createDomain} from 'effector'
import {createEventEntity, EventEntityProvider} from '@eh/entities/event/model'
import {Board} from './Board'

export default {
  title: 'pages/board',
  component: Board,
  parameters: {docs: {source: {type: 'code'}}, layout: 'fullscreen'},
  decorators: [
    Story => (
      <EventEntityProvider event={createEventEntity({domain: createDomain()})}>
        <Story />
      </EventEntityProvider>
    ),
  ],
} as Meta

export const Default: Story = props => <Board {...props} />
