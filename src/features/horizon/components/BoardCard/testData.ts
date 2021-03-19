import {EventType} from '@eh/react/.types/globalTypes'

const events = [
  {
    id: 'event0',
    type: EventType.TEXT,
    pinned: true,
    header: 'Pinned',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: new Date(Number(new Date()) + 1003933224).toISOString(),
  },
]
export const board = {id: '123', name: 'Name', description: 'dsdsf', events}
