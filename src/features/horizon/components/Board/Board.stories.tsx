import React from 'react'
import {Meta, Story} from '@storybook/react'
import {EventType} from '@eh/react/.types/globalTypes'
import {Board, BoardProps} from './Board'

export default {
  title: 'horizon/components/Board',
  component: Board,
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
  argTypes: {
    board: {table: {disable: true}},
    onExpand: {table: {disable: true}},
    onCollapse: {table: {disable: true}},
  },
} as Meta

const events = [
  {
    type: EventType.TEXT,
    pinned: true,
    header: 'Pinned',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: '2020-12-11T21:57:03.365Z',
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: '2020-12-11T21:57:03.365Z',
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: '2020-12-11T21:57:03.365Z',
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: '2020-12-11T21:57:03.365Z',
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: '2020-12-11T21:57:03.365Z',
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: '2020-12-11T21:57:03.365Z',
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: '2020-12-11T21:57:03.365Z',
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: '2020-11-15T21:57:03.365Z',
  },
].map((e, i) => ({...e, _id: String(i)}))

const board = {
  _id: '123',
  title: 'My board',
  description: 'Best board',
  pinned: true,
  favorite: true,
  events: {
    edges: events.map(e => ({cursor: e._id, node: e})),
    pageInfo: {
      hasNextPage: false,
      endCursor: events[events.length - 1]._id,
    },
  },
}

export const Usual: Story<BoardProps> = props => <Board {...props} board={board} />
