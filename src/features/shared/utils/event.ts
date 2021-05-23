import {EventType} from '@eh/react/.types/globalTypes'
import {EventFragment, EventFragment_TextEvent} from '../graphql/types/EventFragment'

export const isTextEvent = (event: EventFragment): event is EventFragment_TextEvent =>
  event.type === EventType.TEXT && 'text' in event
