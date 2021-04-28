import {EventType} from '@eh/react/.types/globalTypes'
import {Board_board} from '@eh/react/features/horizon/graphql/types/Board'

const events = [
  {
    _id: 'event0',
    type: EventType.TEXT,
    pinned: true,
    header: 'Pinned',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    deadline: new Date(Number(new Date()) + 1003933224).toISOString(),
  },
]

export const board = {
  _id: '123',
  title: 'Name',
  pinned: false,
  favorite: false,
  description: 'dsdsf',
  events: {
    edges: events.map(e => ({cursor: e._id, node: e})),
    pageInfo: {
      hasNextPage: false,
      endCursor: events[events.length - 1]._id,
    },
  },
} as Board_board
