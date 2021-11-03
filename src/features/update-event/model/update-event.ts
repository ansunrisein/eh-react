import {Domain} from 'effector'
import {Event, EventEntity} from '@eh/entities/event'
import {BoardEntity} from '@eh/entities/board'

export type UpdateEventFeature = ReturnType<typeof createUpdateEventFeature>

export type UpdateEventFeatureDeps = {
  domain: Domain
  eventEntity: EventEntity
  boardEntity: BoardEntity
}

export const createUpdateEventFeature = ({
  domain,
  eventEntity,
  boardEntity,
}: UpdateEventFeatureDeps) => {
  const createEventInBoard = domain.effect(
    async ({boardId, event}: {boardId: string; event: Omit<Event, 'id'>}) => {
      const {id} = await eventEntity.createEventFx(event)
      boardEntity.addEvent({boardId, eventId: id})
    },
  )

  return {
    createEventInBoard,
  }
}
