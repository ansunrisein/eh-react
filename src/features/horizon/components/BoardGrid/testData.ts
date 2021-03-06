import {EventType} from '@eh/react/.types/globalTypes'

const events = [
  {
    type: EventType.TEXT,
    pinned: true,
    header: 'Pinned',
    text: 'veniam',
    deadline: new Date(Number(new Date()) + 1000000).toISOString(),
  },
]
const board = {
  name: 'Antonina',
  description: 'Moa fde kmfdl ldnjeir fjp sdojfir jf lkf jjfjfkd kfdkkjf kjfdkjkjfkfd k',
  events,
}
export const boards = Array(27)
  .fill(board)
  .map((e, i) => ({...e, id: i}))
  .map((e, i) => (i % 3 ? {...e, description: ''} : e))
  .map(e => ({node: e, cursor: e.id}))
