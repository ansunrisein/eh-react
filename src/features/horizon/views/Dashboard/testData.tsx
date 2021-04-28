import React from 'react'
import {EventType} from '@eh/react/.types/globalTypes'
import {ActionIcon} from '@eh/react/ui'
import {Board_board} from '@eh/react/features/horizon/graphql/types/Board'

export const filters = [
  {
    name: 'ownership',
    icons: [
      <ActionIcon key={0} icon="user" disabled />,
      <ActionIcon key={1} icon="user" />,
      <ActionIcon key={2} icon="team" />,
    ],
  },
  {
    name: 'favorite',
    icons: [
      <ActionIcon key={0} icon="fav" disabled />,
      <ActionIcon key={1} icon="fav" />,
      <ActionIcon key={2} icon="fav" inverted />,
    ],
  },
  {
    name: 'pin',
    icons: [
      <ActionIcon key={0} icon="pin" disabled />,
      <ActionIcon key={1} icon="pin" />,
      <ActionIcon key={2} icon="pin" inverted />,
    ],
  },
]
export const sorts = [
  {
    name: 'nearestEvent',
    icon: <ActionIcon icon="timer" />,
  },
  {
    name: 'favorite',
    icon: <ActionIcon icon="fav" />,
  },
  {
    name: 'subsCount',
    icon: <ActionIcon icon="team" />,
  },
  {
    name: 'pin',
    icon: <ActionIcon icon="pin" />,
  },
]

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

export const board = {
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
} as Board_board

export const boards = Array(35)
  .fill(board)
  .map((e: Board_board, i) => (i % 3 ? e : {...e, events: e.events.edges.slice(1)}))
  .map((board, i) => ({
    ...board,
    _id: 'id' + i,
    pinned: i === 1,
    favorite: [2, 3].includes(i),
    title: i === 1 ? 'Pinned' : [2, 3].includes(i) ? 'FAVORITE' : board.title,
    __typename: 'Board',
    events: (board as Board_board).events.edges
      .map((e, i: number) => ({
        ...e,
        deadline: new Date(Number(e.node.deadline) + Math.round(Math.random() * 500093480)),
        _id: `${board._id}-event${i}`,
        __typename: 'TextEvent',
      }))
      .sort((a, b) => Number(a.node.deadline) - Number(b.node.deadline)),
  }))
  .map(e => ({node: e, cursor: e._id, __typename: 'BoardEdge'})) as any
