import {EventType} from '@eh/react/.types/globalTypes'

const board = {
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
