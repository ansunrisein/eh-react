import React from 'react'
import {Meta, Story} from '@storybook/react'
import 'swiper/swiper-bundle.min.css'
import {EventType} from '@eh/react/.types/globalTypes'
import {EventLine, EventLineProps} from './EventLine'

export default {
  title: 'horizon/components/EventLine',
  component: EventLine,
  argTypes: {
    events: {table: {disable: true}},
  },
} as Meta

const events = [
  {
    type: EventType.TEXT,
    pinned: true,
    header: 'Pinned',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: new Date(Number(new Date()) + 1003933224).toISOString(),
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, lore magna aliqua. Ut enim ad minim veniam',
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
    deadline: new Date(Number(new Date()) + 10039333224).toISOString(),
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text: 'd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: '2020-12-11T21:57:03.365Z',
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: '2020-12-11T21:57:03.365Z',
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet,t labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: new Date(Number(new Date()) + 2933224).toISOString(),
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetupor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: new Date(Number(new Date()) + 100393323324).toISOString(),
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elitempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
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
    text: 'Lorem ipsum dolor sit amet, iqua. Ut enim ad minim veniam',
    deadline: new Date(Number(new Date()) + 100393323324).toISOString(),
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: new Date(Number(new Date()) + 100393323324).toISOString(),
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: new Date(Number(new Date()) + 10093323324).toISOString(),
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: new Date(Number(new Date()) + 1003323324).toISOString(),
  },
  {
    type: EventType.TEXT,
    pinned: false,
    header: 'Lorem ipsum',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: new Date(Number(new Date()) + 100393323324).toISOString(),
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
].map((e, i) => ({...e, _id: `event-${i}`}))

export const WithPinned: Story<EventLineProps> = props => (
  <EventLine
    {...props}
    events={events.map(e => ({
      cursor: e._id,
      node: e,
    }))}
  />
)

export const WithoutPinned: Story<EventLineProps> = props => (
  <EventLine {...props} events={events.map(e => ({cursor: e._id, node: e})).slice(1)} />
)
