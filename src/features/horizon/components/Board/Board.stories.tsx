import React from 'react'
import {Meta, Story} from '@storybook/react'
import {EventType} from '@eh/react/.types/globalTypes'
import {Board} from './Board'

export default {
  title: 'Board',
  component: Board,
  parameters: {
    controls: {hideNoControlsWarning: true},
  },
} as Meta

const board = {
  id: '123',
  name: 'My board',
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

export const Usual: Story = () => <Board board={board} />

export const Expandable: Story = () => <Board board={board} expandable />
