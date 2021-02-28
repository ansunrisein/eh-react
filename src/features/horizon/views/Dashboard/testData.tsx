import React from 'react'
import {Icon} from 'rsuite'
import {EventType} from '@eh/react/.types/globalTypes'

export const filters = [
  {
    name: 'ownership',
    icons: [
      <Icon key={0} icon="avatar" style={{opacity: '0.5'}} />,
      <Icon key={1} icon="avatar" />,
      <Icon key={2} icon="group" />,
    ],
  },
  {
    name: 'favorite',
    icons: [
      <Icon key={0} icon="star" style={{opacity: '0.5'}} />,
      <Icon key={1} icon="star" />,
      <Icon key={2} icon="star-o" />,
    ],
  },
  {
    name: 'pin',
    icons: [
      <Icon key={0} icon="thumb-tack" style={{opacity: '0.5'}} />,
      <Icon key={1} icon="thumb-tack" />,
      <Icon key={2} icon="thumb-tack" rotate={45} />,
    ],
  },
]
export const sorts = [
  {
    name: 'nearestEvent',
    icon: <Icon icon="pie-chart" />,
  },
  {
    name: 'favorite',
    icon: <Icon icon="star" />,
  },
  {
    name: 'subsCount',
    icon: <Icon icon="group" />,
  },
  {
    name: 'pin',
    icon: <Icon icon="thumb-tack" />,
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
  .map((e, i) => ({...e, id: 'id' + i}))
  .map(e => ({node: e, cursor: e.id}))
