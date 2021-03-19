import React from 'react'
import {EventType} from '@eh/react/.types/globalTypes'
import {ActionIcon} from '@eh/react/ui'
import {EventFragment} from '@eh/react/features/shared/graphql/types/EventFragment'

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

export const board = {
  name: 'My board',
  description: 'Best board',
  events: [
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
  ],
}
export const boards = Array(10)
  .fill(board)
  .map((e, i) => (i % 3 ? e : {...e, events: e.events.slice(1)}))
  .map((board, i) => ({
    ...board,
    id: 'id' + i,
    events: board.events.map((e: EventFragment, i: number) => ({
      ...e,
      id: `${board.id}-event${i}`,
    })),
  }))
  .map(e => ({node: e, cursor: e.id}))
