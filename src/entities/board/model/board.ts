import {Domain, hydrate} from 'effector'
import {persist} from 'effector-storage/local'
import {v4} from 'uuid'
import {Board} from '../types'

export type BoardEntity = ReturnType<typeof createBoardEntity>

export type BoardEntityConfig = {
  defaultBoards?: Board[]
  boards?: Board[]
  persistBoards?: boolean
}

export type BoardEntityDeps = {
  domain: Domain
}

export const createBoardEntity = (
  {domain}: BoardEntityDeps,
  {
    defaultBoards = [],
    boards,
    persistBoards = process.env.STORYBOOK !== 'true',
  }: BoardEntityConfig = {},
) => {
  const createBoard = domain.event<Omit<Board, 'id' | 'events'>>()
  const removeBoard = domain.event<Board['id']>()
  const addEvent = domain.event<{boardId: string; eventId: string}>()
  const resetBoards = domain.event()

  const $boards = domain
    .store(defaultBoards)
    .on(createBoard, (boards, board) => [...boards, {id: v4(), events: [], ...board}])
    .on(removeBoard, (boards, id) => boards.filter(e => e.id !== id))
    .on(addEvent, (boards, {boardId, eventId}) =>
      boards.map(board =>
        board.id === boardId ? {...board, events: board.events.concat(eventId)} : board,
      ),
    )
    .reset(resetBoards)

  hydrate(domain, {
    values: [[$boards, boards]],
  })

  if (persistBoards) {
    persist({key: 'boards', store: $boards})
  }

  return {
    createBoard,
    removeBoard,
    addEvent,
    resetBoards,
    $boards,
  }
}
