import {combine} from 'effector'
import {isDefined} from '@eh/shared/lib/is-defined'
import {BoardEntity} from '@eh/entities/board'
import {EventEntity} from '@eh/entities/event'
import {BoardWithEvents} from '../types'

export type DashboardPage = ReturnType<typeof createDashboardPage>

export type DashboardPageDeps = {
  boardEntity: BoardEntity
  eventEntity: EventEntity
}

export const createDashboardPage = ({boardEntity, eventEntity}: DashboardPageDeps) => {
  const $boards = combine(
    boardEntity.$boards,
    eventEntity.$events,
    (boards = [], events = []): BoardWithEvents[] =>
      boards.map(board => ({
        ...board,
        events: board.events.map(eventId => events.find(e => e.id === eventId)).filter(isDefined),
      })),
  )

  return {$boards}
}
